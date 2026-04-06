#!/usr/bin/env node
// validate-blog-images.js
// Run: node scripts/validate-blog-images.js
// Checks posts.js for missing fields and unintentional duplicate images.

import { posts } from '../src/data/posts.js'

// Regional slug fragments — state/city variants may share base trade image intentionally
const REGIONAL = /-(nsw|vic|qld|sa|wa|act|nt|tas|sydney|melbourne|brisbane|perth|adelaide|hobart|darwin|canberra)-/

// Documented intentional sharing across non-regional posts
const ALLOWED_SHARED = {
  'photo-1554224155-6726b3ff858f': 'payment-cost topic (fees + surcharging)',
  'photo-1563013544-824ae1b704d3': 'Tyro-related comparisons',
  'photo-1521791136064-7986c2920216': 'sole-trader EFTPOS guides (best-eftpos-sole-traders + accept-card-payments)',
}

let errors = 0
let warnings = 0
const byImage = {}

for (const p of posts) {
  if (!p.slug)     { console.error(`ERROR: missing slug in entry: ${JSON.stringify(p)}`); errors++; continue }
  if (!p.image)    { console.error(`ERROR missing image:    ${p.slug}`); errors++ }
  if (!p.imageAlt) { console.error(`ERROR missing imageAlt: ${p.slug}`); errors++ }
  if (!p.category) { console.error(`ERROR missing category: ${p.slug}`); errors++ }
  if (!byImage[p.image]) byImage[p.image] = []
  byImage[p.image].push(p.slug)
}

for (const [img, slugs] of Object.entries(byImage)) {
  if (slugs.length <= 1) continue
  const nonRegional = slugs.filter(s => !REGIONAL.test(s))
  if (nonRegional.length <= 1) continue // regional sharing is fine
  if (ALLOWED_SHARED[img]) {
    console.log(`OK (intentional share): ${img}\n  → ${nonRegional.join(', ')}\n  reason: ${ALLOWED_SHARED[img]}`)
  } else {
    console.warn(`WARN duplicate image across unrelated posts: ${img}\n  → ${nonRegional.join(', ')}`)
    warnings++
  }
}

console.log(`\nTotal posts: ${posts.length}`)
if (errors === 0 && warnings === 0) {
  console.log('✓ All posts valid — no missing fields, no unintentional duplicates.')
} else {
  if (errors)   console.log(`✗ ${errors} error(s) found`)
  if (warnings) console.log(`! ${warnings} warning(s) found`)
  process.exit(errors > 0 ? 1 : 0)
}
