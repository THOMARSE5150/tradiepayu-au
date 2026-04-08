#!/usr/bin/env node
/**
 * Trade Image Generator — provider-agnostic scaffold
 *
 * STATUS: Provider not configured. Dry-run and post-processing work.
 *         Wire in a provider adapter (see PROVIDER ADAPTER below) to generate images.
 *
 * USAGE
 *   npm run generate:trade-image -- --slug electricians --prompt "Australian electrician..."
 *   npm run generate:trade-image -- --slug electricians --prompt "..." --update-meta=true
 *   npm run generate:trade-image -- --slug electricians --prompt "..." --dry-run=true
 *
 * OUTPUTS  (once a provider is wired in)
 *   public/images/trades/<slug>-hero.jpg   1800px wide, JPEG q=85
 *   public/images/trades/<slug>-og.jpg    1200×630,    JPEG q=85
 *
 * PRODUCTION IMAGE SYSTEM
 *   This script is a DRAFT HELPER only.
 *   Production images live in public/images/trades/ and are committed to the repo.
 *   The site never depends on this script running — it is optional tooling.
 *
 * ADDING A PROVIDER
 *   Implement fetchImageBuffer() below. It must return a Buffer of PNG or JPEG bytes.
 *   Providers tried so far and their status:
 *     - Gemini imagen-3 / 2.5-flash-image  → requires billing (free tier limit=0)
 *     - Together AI FLUX.1-schnell-Free     → requires dedicated endpoint (not serverless)
 *     - HF api-inference.huggingface.co    → deprecated (410), use router.huggingface.co
 */

import { writeFileSync, readFileSync, statSync, mkdirSync, existsSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { tmpdir } from 'node:os'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT      = join(__dirname, '..')

// ── Arg parsing ──────────────────────────────────────────────────────────────
const args    = process.argv.slice(2)
const argVal  = (f) => { const i = args.indexOf(f); return i !== -1 ? args[i + 1] : null }
const argFlag = (f, def = false) => {
  const kv = args.find(a => a.startsWith(`${f}=`))
  if (kv) return kv.split('=')[1] === 'true'
  return args.includes(f) ? true : def
}

const slug       = argVal('--slug')
const userPrompt = argVal('--prompt')
const updateMeta = argFlag('--update-meta', false)
const dryRun     = argFlag('--dry-run',     false)

// ── Validation ───────────────────────────────────────────────────────────────
const fail = (msg) => { console.error(`\nError: ${msg}\n`); process.exit(1) }

if (!slug)                        fail('--slug is required  (e.g. --slug electricians)')
if (!/^[a-z0-9-]+$/.test(slug))  fail('--slug must be lowercase letters, numbers, and hyphens only')
if (!userPrompt)                  fail('--prompt is required')

// ── Prompt shaping ───────────────────────────────────────────────────────────
// Wraps user prompt with consistent production guidance for all providers.
function shapePrompt(raw) {
  return [
    raw,
    'Style: photorealistic commercial photography, natural lighting, no artificial studio look.',
    'Composition: wide landscape orientation, suitable for a website hero banner.',
    'Context: Australian trade worker on a real jobsite, mid-task, professional appearance.',
    'Restrictions: no text overlays, no logos, no UI elements, no mockups, no watermarks.',
    'Output: single high-quality image, sharp focus on trade activity, clean background.',
  ].join(' ')
}

// ── Dry run ───────────────────────────────────────────────────────────────────
if (dryRun) {
  console.log(`
Trade Image Generator — DRY RUN
─────────────────────────────────
Slug:        ${slug}
Update meta: ${updateMeta}
Prompt:      ${userPrompt}

Shaped prompt that would be sent:
${shapePrompt(userPrompt)}
`)
  process.exit(0)
}

// ══════════════════════════════════════════════════════════════════════════════
// PROVIDER ADAPTER
// Implement this function to enable image generation.
// Must return a Buffer of PNG or JPEG bytes.
// Target source dimensions: 1344×768 (16:9 landscape) or larger.
//
// Options to try next:
//   1. HF router endpoint (replaces deprecated api-inference):
//      POST https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell
//      Authorization: Bearer {HF_TOKEN}
//      {"inputs": prompt, "parameters": {"width": 1344, "height": 768}}
//
//   2. Stability AI (free credits for new accounts):
//      POST https://api.stability.ai/v2beta/stable-image/generate/core
//      Authorization: Bearer {STABILITY_API_KEY}
//      multipart/form-data: prompt, output_format=jpeg, aspect_ratio=16:9
//
//   3. Gemini (requires billing on Google Cloud project 1083748795834):
//      POST https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent
//      x-goog-api-key: {GEMINI_API_KEY}
//      {"contents":[{"parts":[{"text":prompt}]}],"generationConfig":{"responseModalities":["IMAGE"]}}
//      response: candidates[0].content.parts[0].inlineData.data (base64)
// ══════════════════════════════════════════════════════════════════════════════
async function fetchImageBuffer(prompt) {
  // Pollinations.ai — free, no auth required, FLUX model
  const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1344&height=768&model=flux&nologo=true&seed=${Date.now() % 99999}`
  console.log(`  Generating via Pollinations.ai…`)
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Pollinations returned ${res.status}`)
  const ct = res.headers.get('content-type') ?? ''
  if (!ct.startsWith('image/')) throw new Error(`Unexpected content-type: ${ct}`)
  const ab = await res.arrayBuffer()
  return Buffer.from(ab)
}

// ── Call provider ─────────────────────────────────────────────────────────────
console.log(`
Trade Image Generator
─────────────────────
Slug:        ${slug}
Update meta: ${updateMeta}
Prompt:      ${userPrompt}
`)

let imgBuffer
try {
  imgBuffer = await fetchImageBuffer(shapePrompt(userPrompt))
} catch (err) {
  fail(err.message)
}

if (!imgBuffer?.length) fail('Provider returned empty image buffer')

// ── Write source to temp ──────────────────────────────────────────────────────
const tmpSrc = join(tmpdir(), `tradiepayu-${slug}-src.png`)
writeFileSync(tmpSrc, imgBuffer)

// ── Output dir ────────────────────────────────────────────────────────────────
const outDir = join(ROOT, 'public', 'images', 'trades')
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

const heroPath = join(outDir, `${slug}-hero.jpg`)
const ogPath   = join(outDir, `${slug}-og.jpg`)

// ── Hero: 1800px wide JPEG q=85 ──────────────────────────────────────────────
const tmpHero = join(tmpdir(), `tradiepayu-${slug}-hero.png`)
execFileSync('sips', ['--resampleWidth', '1800', tmpSrc, '--out', tmpHero], { stdio: 'pipe' })
execFileSync('sips', ['-s', 'format', 'jpeg', '--setProperty', 'formatOptions', '85', tmpHero, '--out', heroPath], { stdio: 'pipe' })
const heroKb   = Math.round(statSync(heroPath).size / 1024)
const heroInfo = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', heroPath]).toString()
const heroW    = heroInfo.match(/pixelWidth: (\d+)/)?.[1]  ?? '?'
const heroH    = heroInfo.match(/pixelHeight: (\d+)/)?.[1] ?? '?'

// ── OG: exactly 1200×630 JPEG q=85 ──────────────────────────────────────────
const tmpOg = join(tmpdir(), `tradiepayu-${slug}-og.png`)
execFileSync('sips', ['-z', '630', '1200', tmpSrc, '--out', tmpOg], { stdio: 'pipe' })
execFileSync('sips', ['-s', 'format', 'jpeg', '--setProperty', 'formatOptions', '85', tmpOg, '--out', ogPath], { stdio: 'pipe' })
const ogKb = Math.round(statSync(ogPath).size / 1024)

// ── Optional metadata update ──────────────────────────────────────────────────
let metaUpdated = false
if (updateMeta) {
  const metaPath = join(ROOT, 'src', 'data', 'tradesMeta.js')
  const original = readFileSync(metaPath, 'utf8')
  let inBlock    = false
  const updated  = original.split('\n').map(line => {
    if (line.includes(`slug: '${slug}'`) || line.includes(`slug: "${slug}"`)) inBlock = true
    else if (inBlock && /\bslug:/.test(line)) inBlock = false
    if (inBlock && /\bheroImage:/.test(line)) {
      return line.replace(/heroImage:\s*['"][^'"]*['"]/, `heroImage: '/images/trades/${slug}-hero.jpg'`)
    }
    return line
  }).join('\n')
  if (updated === original) {
    console.warn(`Warn: slug "${slug}" not found in tradesMeta.js — metadata not updated.`)
  } else {
    writeFileSync(metaPath, updated, 'utf8')
    metaUpdated = true
  }
}

// ── Summary ───────────────────────────────────────────────────────────────────
console.log(`
✓ Done
────────────────────────────────────────
Slug:         ${slug}
Hero:         public/images/trades/${slug}-hero.jpg  ${heroW}×${heroH}  ${heroKb}KB
OG:           public/images/trades/${slug}-og.jpg   1200×630  ${ogKb}KB
Meta updated: ${metaUpdated}
────────────────────────────────────────`)

if (!metaUpdated && !updateMeta) {
  console.log(`Next: wire up in tradesMeta.js:\n  heroImage: '/images/trades/${slug}-hero.jpg',`)
}
if (metaUpdated) {
  console.log(`tradesMeta.js updated. Also update posts.js for any ${slug} blog entries.`)
}
