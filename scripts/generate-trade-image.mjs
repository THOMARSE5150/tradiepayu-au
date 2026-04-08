#!/usr/bin/env node
/**
 * Trade image generator — Gemini gemini-3.1-flash-image-preview
 *
 * USAGE
 *   npm run generate:trade-image -- --slug electricians --prompt "Australian electrician..."
 *   npm run generate:trade-image -- --slug electricians --prompt "..." --update-meta=true
 *   npm run generate:trade-image -- --slug electricians --prompt "..." --dry-run=true
 *
 * OUTPUTS (by default generates both)
 *   public/images/trades/<slug>-hero.jpg   1800px wide, JPEG q=85
 *   public/images/trades/<slug>-og.jpg    1200×630,    JPEG q=85
 *
 * ENV
 *   GEMINI_API_KEY   required — never hardcode
 */

import { writeFileSync, readFileSync, statSync, mkdirSync, existsSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { tmpdir } from 'node:os'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT      = join(__dirname, '..')

// ── Arg parsing ─────────────────────────────────────────────────────────────
const args   = process.argv.slice(2)
const argVal = (f) => { const i = args.indexOf(f); return i !== -1 ? args[i + 1] : null }
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

if (!slug)                          fail('--slug is required  (e.g. --slug electricians)')
if (!/^[a-z0-9-]+$/.test(slug))    fail('--slug must be lowercase letters, numbers, and hyphens only')
if (!userPrompt)                    fail('--prompt is required')

// Dry-run exits before any API key requirement
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

const apiKey = process.env.GEMINI_API_KEY
if (!apiKey)                        fail('GEMINI_API_KEY env var not set.\n  export GEMINI_API_KEY=your_key_here')

// ── Prompt shaping ───────────────────────────────────────────────────────────
// Wraps the user prompt with consistent production guidance for website hero images.
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

const finalPrompt = shapePrompt(userPrompt)

// ── Summary ──────────────────────────────────────────────────────────────────
console.log(`
Trade Image Generator
─────────────────────
Slug:        ${slug}
Update meta: ${updateMeta}
Prompt:      ${userPrompt}
`)

// ── API call ─────────────────────────────────────────────────────────────────
const MODEL   = 'gemini-3.1-flash-image-preview'
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`

console.log(`Calling ${MODEL}...`)

let res
try {
  res = await fetch(API_URL, {
    method:  'POST',
    headers: {
      'Content-Type':  'application/json',
      'x-goog-api-key': apiKey,
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: finalPrompt }] }],
      generationConfig: { responseModalities: ['IMAGE'] },
    }),
  })
} catch (err) {
  fail(`Network error: ${err.message}`)
}

if (!res.ok) {
  const body = await res.text()
  fail(`Gemini API ${res.status}: ${body}`)
}

const data   = await res.json()
const parts  = data.candidates?.[0]?.content?.parts ?? []
const imgPart = parts.find(p => p.inlineData?.data)

if (!imgPart) {
  console.error('Unexpected API response — no image part found:')
  console.error(JSON.stringify(data, null, 2))
  process.exit(1)
}

const mimeType  = imgPart.inlineData.mimeType  // e.g. 'image/png'
const ext       = mimeType.includes('png') ? 'png' : 'jpg'
const tmpSrc    = join(tmpdir(), `tradiepayu-${slug}-src.${ext}`)
writeFileSync(tmpSrc, Buffer.from(imgPart.inlineData.data, 'base64'))
console.log(`Source image written: ${tmpSrc}`)

// ── Output dir ───────────────────────────────────────────────────────────────
const outDir = join(ROOT, 'public', 'images', 'trades')
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

const heroPath = join(outDir, `${slug}-hero.jpg`)
const ogPath   = join(outDir, `${slug}-og.jpg`)

// ── Hero: 1800px wide JPEG q=85 ──────────────────────────────────────────────
const tmpHero = join(tmpdir(), `tradiepayu-${slug}-hero.png`)
execFileSync('sips', ['--resampleWidth', '1800', tmpSrc, '--out', tmpHero],            { stdio: 'pipe' })
execFileSync('sips', ['-s', 'format', 'jpeg', '--setProperty', 'formatOptions', '85',
                       tmpHero, '--out', heroPath],                                      { stdio: 'pipe' })
const heroKb = Math.round(statSync(heroPath).size / 1024)
const heroDims = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', heroPath])
                   .toString().match(/pixelWidth: (\d+).*pixelHeight: (\d+)/s)
const heroW = heroDims?.[1] ?? '?'
const heroH = heroDims?.[2] ?? '?'

// ── OG: exactly 1200×630 JPEG q=85 ──────────────────────────────────────────
// Source may be square or 4:3; sips -z fits to bounding box (crops longest dim)
const tmpOg = join(tmpdir(), `tradiepayu-${slug}-og.png`)
execFileSync('sips', ['-z', '630', '1200', tmpSrc, '--out', tmpOg],                    { stdio: 'pipe' })
execFileSync('sips', ['-s', 'format', 'jpeg', '--setProperty', 'formatOptions', '85',
                       tmpOg, '--out', ogPath],                                          { stdio: 'pipe' })
const ogKb = Math.round(statSync(ogPath).size / 1024)

// ── Optional metadata update ─────────────────────────────────────────────────
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
    console.warn(`\nWarn: slug "${slug}" not found in tradesMeta.js — metadata not updated.`)
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
  console.log(`Next: wire it up in tradesMeta.js:`)
  console.log(`  heroImage: '/images/trades/${slug}-hero.jpg',`)
}
if (metaUpdated) {
  console.log(`tradesMeta.js updated. Also update posts.js for any ${slug} blog entries.`)
}
