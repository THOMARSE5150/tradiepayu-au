#!/usr/bin/env node
/**
 * Bulk-updates all blog post JSX files to use dynamic dates from site-meta.json.
 *
 * Per file:
 *  1. Adds `import siteMeta from '../../data/site-meta.json'` before const SITE
 *  2. Replaces dateModified: '2026-04-02' → dateModified: siteMeta.lastVerified
 *  3. Replaces <span>Updated April 2026</span> → <span>Updated {siteMeta.lastVerifiedDisplay}</span>
 *
 * Run: node scripts/fix-blog-dates.js
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BLOG_DIR = path.join(__dirname, '../src/pages/blog')
const META_IMPORT = "import siteMeta from '../../data/site-meta.json'"
const SITE_CONST  = "const SITE = 'https://tradiepayau.directory'"

const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.jsx'))

let changed = 0

for (const filename of files) {
  const filePath = path.join(BLOG_DIR, filename)
  let content = fs.readFileSync(filePath, 'utf8')

  if (content.includes(META_IMPORT)) {
    console.log(`  (already updated) ${filename}`)
    continue
  }

  const hasDate    = content.includes("dateModified: '2026-04-02'")
  const hasUpdated = content.includes('Updated April 2026')
  if (!hasDate && !hasUpdated) continue

  if (!content.includes(SITE_CONST)) {
    console.warn(`  (skipped — no SITE const) ${filename}`)
    continue
  }

  // Insert import just before const SITE
  content = content.replace(SITE_CONST, `${META_IMPORT}\n\n${SITE_CONST}`)

  // Replace dateModified
  content = content.replaceAll("dateModified: '2026-04-02'", 'dateModified: siteMeta.lastVerified')

  // Replace Updated display
  content = content.replaceAll(
    '<span>Updated April 2026</span>',
    '<span>Updated {siteMeta.lastVerifiedDisplay}</span>'
  )

  fs.writeFileSync(filePath, content, 'utf8')
  changed++
  console.log(`  ✓ ${filename}`)
}

console.log(`\nDone — updated ${changed} blog files.`)
