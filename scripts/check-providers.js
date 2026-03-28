#!/usr/bin/env node
/**
 * Weekly provider rate checker
 * Fetches provider pricing pages, extracts current rates via Claude Haiku
 * (one API call for all providers), compares to providers.json, logs changes.
 *
 * Zero npm dependencies — uses Node.js built-in fetch + Anthropic REST API.
 * Run: node scripts/check-providers.js
 * Requires: ANTHROPIC_API_KEY env var
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PROVIDERS_PATH = path.join(ROOT, 'src/data/providers.json')
const META_PATH = path.join(ROOT, 'src/data/site-meta.json')
const LOG_PATH = path.join(ROOT, 'scripts/change-log.json')

// Provider pricing pages — focus on pages that list flat rates
const SOURCES = [
  { id: 'zeller',  url: 'https://www.myzeller.com/au/pricing' },
  { id: 'square',  url: 'https://squareup.com/au/en/payments/our-fees' },
  { id: 'stripe',  url: 'https://stripe.com/au/pricing' },
  { id: 'tyro',    url: 'https://www.tyro.com/knowledge-hub/what-are-tyros-merchant-service-fees/' },
  { id: 'shift4',  url: 'https://www.shift4-au.com.au/blog/cost-of-eftpos-machine/' },
]

// Fields we track — dot-notation paths into providers.json objects
const TRACKED_FIELDS = [
  'fees.in_person_percent',
  'fees.monthly_fee',
  'sim_plan.cost_monthly_aud',
]

// ── helpers ──────────────────────────────────────────────────────────────────

function getPath(obj, dotPath) {
  return dotPath.split('.').reduce((o, k) => o?.[k], obj)
}

function setPath(obj, dotPath, val) {
  const keys = dotPath.split('.')
  const last = keys.pop()
  const target = keys.reduce((o, k) => o?.[k], obj)
  if (target !== undefined) target[last] = val
}

async function fetchPricingText(url) {
  const r = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; TradiePay-Checker/1.0; +https://tradiepayau.directory)',
      'Accept': 'text/html',
    },
    signal: AbortSignal.timeout(15_000),
  })
  if (!r.ok) throw new Error(`HTTP ${r.status}`)
  const html = await r.text()
  // Strip tags, collapse whitespace
  const text = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                   .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                   .replace(/<[^>]+>/g, ' ')
                   .replace(/\s+/g, ' ')
                   .trim()
  // Return 1000 chars around first pricing keyword — minimises tokens sent
  const idx = text.search(/\b(fee|rate|percent|pricing|\d+\.\d+%)/i)
  const start = Math.max(0, idx - 100)
  return text.slice(start, start + 1000)
}

async function callHaiku(prompt) {
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 400,
      system: 'Return ONLY valid JSON. No explanation, no markdown fences.',
      messages: [{ role: 'user', content: prompt }],
    }),
  })
  const data = await r.json()
  if (data.error) throw new Error(data.error.message)
  return data.content[0].text.trim()
}

function todayISO() {
  return new Date().toISOString().slice(0, 10)
}

function displayMonth(isoDate) {
  const d = new Date(isoDate)
  return d.toLocaleString('en-AU', { month: 'long', year: 'numeric' })
}

// ── main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n=== TradiePay provider check — ${todayISO()} ===\n`)

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('ANTHROPIC_API_KEY not set. Exiting.')
    process.exit(1)
  }

  const providers = JSON.parse(fs.readFileSync(PROVIDERS_PATH, 'utf8'))
  const log = fs.existsSync(LOG_PATH)
    ? JSON.parse(fs.readFileSync(LOG_PATH, 'utf8'))
    : []

  // Build snapshot of current tracked values (for prompt context)
  const current = {}
  for (const p of providers) {
    current[p.id] = {}
    for (const f of TRACKED_FIELDS) {
      const v = getPath(p, f)
      if (v !== null && v !== undefined) current[p.id][f] = v
    }
  }

  // Fetch all pricing pages
  const pages = {}
  for (const src of SOURCES) {
    try {
      pages[src.id] = await fetchPricingText(src.url)
      console.log(`✓ Fetched ${src.id}`)
    } catch (e) {
      console.warn(`✗ ${src.id}: ${e.message}`)
    }
  }

  if (Object.keys(pages).length === 0) {
    console.log('No pages fetched — skipping Claude call.')
    process.exit(0)
  }

  // Single Haiku call — extract current values for all providers at once
  const excerpts = Object.entries(pages)
    .map(([id, text]) => `=== ${id} ===\n${text}`)
    .join('\n\n')

  const prompt = `
Current stored values for comparison:
${JSON.stringify(current)}

Pricing page excerpts:
${excerpts}

For each provider, extract CURRENT values (return null if genuinely not found):
- fees.in_person_percent  (number, e.g. 1.4 — the standard flat in-person card rate)
- fees.monthly_fee        (number, 0 if free)
- sim_plan.cost_monthly_aud (number or null — monthly SIM/data plan cost)

Return JSON: {"zeller": {"fees.in_person_percent": 1.4, ...}, "square": {...}, ...}
Only include providers where you found data above.
`.trim()

  let extracted = {}
  try {
    const raw = await callHaiku(prompt)
    extracted = JSON.parse(raw)
    console.log('\nExtracted:', JSON.stringify(extracted, null, 2))
  } catch (e) {
    console.error('Claude extraction failed:', e.message)
    // Still update verification date even if extraction fails
  }

  // Compare extracted values to current and apply any changes
  const today = todayISO()
  const changes = []

  for (const provider of providers) {
    const updates = extracted[provider.id]
    if (updates) {
      for (const [field, newVal] of Object.entries(updates)) {
        if (newVal === null || newVal === undefined) continue
        const oldVal = getPath(provider, field)
        if (oldVal !== undefined && String(oldVal) !== String(newVal)) {
          changes.push({
            provider: provider.id,
            field,
            old: oldVal,
            new: newVal,
            date: today,
          })
          setPath(provider, field, newVal)
          console.log(`\nCHANGED: ${provider.id}.${field}: ${oldVal} → ${newVal}`)
        }
      }
    }
    provider.last_verified = today
  }

  // Write updated providers.json
  fs.writeFileSync(PROVIDERS_PATH, JSON.stringify(providers, null, 2))
  console.log('\n✓ providers.json updated')

  // Update site-meta.json — always reflects last check date
  const meta = { lastVerified: today, lastVerifiedDisplay: displayMonth(today) }
  fs.writeFileSync(META_PATH, JSON.stringify(meta, null, 2))
  console.log('✓ site-meta.json updated')

  // Append to change log
  if (changes.length) {
    log.push({ date: today, changes })
    fs.writeFileSync(LOG_PATH, JSON.stringify(log, null, 2))
    console.log(`\n⚠  ${changes.length} change(s) detected — site will redeploy.`)
  } else {
    console.log('\n✓ No rate changes detected.')
  }

  console.log('\n=== Done ===\n')
}

main().catch(e => {
  console.error('Fatal:', e)
  process.exit(1)
})
