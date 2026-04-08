#!/usr/bin/env node
/**
 * Generate trade hero + OG images via Gemini Imagen 3.
 *
 * Usage:
 *   GEMINI_API_KEY=... node scripts/generate-trade-image.mjs \
 *     --slug glaziers \
 *     --prompt "Glazier installing large glass panes on a commercial building facade, suction cups visible, golden hour lighting, photorealistic" \
 *     --hero --og
 *
 * Or via npm:
 *   npm run generate:trade-image -- --slug glaziers --prompt "..." --hero --og
 *
 * Outputs:
 *   public/images/trades/{slug}-hero.jpg  (1800px wide, JPEG q=85)
 *   public/images/trades/{slug}-og.jpg   (1200×630, JPEG q=85)
 */

import { writeFileSync, statSync, mkdirSync, existsSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { tmpdir } from 'node:os'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

// ── Arg parsing ────────────────────────────────────────────────────────────
const args = process.argv.slice(2)
const argVal = (flag) => { const i = args.indexOf(flag); return i !== -1 ? args[i + 1] : null }
const argHas = (flag) => args.includes(flag)

const slug   = argVal('--slug')
const prompt = argVal('--prompt')
const wantHero = argHas('--hero')
const wantOg   = argHas('--og')
const doHero = wantHero || (!wantHero && !wantOg)
const doOg   = wantOg   || (!wantHero && !wantOg)

// ── Validation ─────────────────────────────────────────────────────────────
if (!slug) {
  console.error('Error: --slug is required  (e.g. --slug glaziers)')
  process.exit(1)
}
// Prevent path traversal — slug must be alphanumeric + hyphens only
if (!/^[a-z0-9-]+$/.test(slug)) {
  console.error('Error: --slug must contain only lowercase letters, numbers, and hyphens')
  process.exit(1)
}
if (!prompt) {
  console.error('Error: --prompt is required  (e.g. --prompt "Glazier installing glass...")')
  process.exit(1)
}

const apiKey = process.env.GEMINI_API_KEY
if (!apiKey) {
  console.error('Error: GEMINI_API_KEY environment variable is not set.')
  console.error('  export GEMINI_API_KEY=your_key_here')
  process.exit(1)
}

// ── Gemini Imagen 3 request ────────────────────────────────────────────────
const MODEL = 'imagen-3.0-generate-001'
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:predict?key=${apiKey}`

console.log(`\nGenerating image for slug: "${slug}"`)
console.log(`Prompt: "${prompt}"`)
console.log(`Outputs: hero=${doHero} og=${doOg}\n`)

let res
try {
  res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      instances: [{ prompt }],
      parameters: {
        sampleCount: 1,
        aspectRatio: '16:9',
        safetyFilterLevel: 'block_few',
      },
    }),
  })
} catch (err) {
  console.error('Network error calling Gemini API:', err.message)
  process.exit(1)
}

if (!res.ok) {
  const text = await res.text()
  console.error(`Gemini API error ${res.status}:`, text)
  process.exit(1)
}

const data = await res.json()
const prediction = data.predictions?.[0]

if (!prediction?.bytesBase64Encoded) {
  console.error('Unexpected API response structure:')
  console.error(JSON.stringify(data, null, 2))
  process.exit(1)
}

// ── Save raw PNG to temp ───────────────────────────────────────────────────
const tmpPng = join(tmpdir(), `tradiepayu-${slug}-generated.png`)
writeFileSync(tmpPng, Buffer.from(prediction.bytesBase64Encoded, 'base64'))
console.log(`Raw PNG written to: ${tmpPng}`)

// ── Ensure output dir ──────────────────────────────────────────────────────
const outDir = join(ROOT, 'public', 'images', 'trades')
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

// ── Hero: 1800px wide JPEG ─────────────────────────────────────────────────
if (doHero) {
  const heroPath = join(outDir, `${slug}-hero.jpg`)
  const tmpResized = join(tmpdir(), `tradiepayu-${slug}-hero-sized.png`)
  execFileSync('sips', ['--resampleWidth', '1800', tmpPng, '--out', tmpResized], { stdio: 'pipe' })
  execFileSync('sips', ['-s', 'format', 'jpeg', '--setProperty', 'formatOptions', '85', tmpResized, '--out', heroPath], { stdio: 'pipe' })
  const kb = Math.round(statSync(heroPath).size / 1024)
  console.log(`Hero saved:  ${heroPath}  (${kb}KB)`)
}

// ── OG: 1200×630 JPEG ─────────────────────────────────────────────────────
if (doOg) {
  const ogPath = join(outDir, `${slug}-og.jpg`)
  const tmpOg  = join(tmpdir(), `tradiepayu-${slug}-og-sized.png`)
  // Imagen 3 returns 16:9. OG is 1200×630 (≈1.90:1 vs 1.78:1).
  // sips -z sets height then width; slight horizontal crop on edges.
  execFileSync('sips', ['-z', '630', '1200', tmpPng, '--out', tmpOg], { stdio: 'pipe' })
  execFileSync('sips', ['-s', 'format', 'jpeg', '--setProperty', 'formatOptions', '85', tmpOg, '--out', ogPath], { stdio: 'pipe' })
  const kb = Math.round(statSync(ogPath).size / 1024)
  console.log(`OG saved:    ${ogPath}  (${kb}KB)`)
}

console.log('\nDone.')
console.log(`Update src/data/tradesMeta.js to wire the new hero:`)
console.log(`  heroImage: '/images/trades/${slug}-hero.jpg',`)
console.log(`Update src/data/posts.js for any ${slug} blog entries to match.`)
