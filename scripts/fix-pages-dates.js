#!/usr/bin/env node
/**
 * Updates main page JSX files (non-blog, non-trades) with dynamic dates.
 * Run: node scripts/fix-pages-dates.js
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PAGES_DIR = path.join(__dirname, '../src/pages')
const META_IMPORT = "import siteMeta from '../data/site-meta.json'"
const SITE_CONST  = "const SITE = 'https://tradiepayau.directory'"

const files = fs.readdirSync(PAGES_DIR)
  .filter(f => f.endsWith('.jsx') && !f.startsWith('Not') && !f.startsWith('Privacy') && !f.startsWith('Disclaimer') && !f.startsWith('About') && !f.startsWith('Contact') && !f.startsWith('Glossary'))

let changed = 0

for (const filename of files) {
  const filePath = path.join(PAGES_DIR, filename)
  let content = fs.readFileSync(filePath, 'utf8')

  if (content.includes(META_IMPORT) || content.includes("import siteMeta from '../data/site-meta.json'")) {
    console.log(`  (already updated) ${filename}`)
    continue
  }

  const hasDate    = content.includes("dateModified: '2026-04-02'")
  const hasUpdated = content.includes('Updated April 2026')
  if (!hasDate && !hasUpdated) continue

  // For pages that use SITE_CONST
  if (content.includes(SITE_CONST)) {
    content = content.replace(SITE_CONST, `${META_IMPORT}\n\n${SITE_CONST}`)
  } else {
    // Insert after last import line
    const lastImportIdx = content.lastIndexOf('\nimport ')
    const insertAt = content.indexOf('\n', lastImportIdx + 1)
    content = content.slice(0, insertAt) + `\n${META_IMPORT}` + content.slice(insertAt)
  }

  content = content.replaceAll("dateModified: '2026-04-02'", 'dateModified: siteMeta.lastVerified')
  content = content.replaceAll('<span>Updated April 2026</span>', '<span>Updated {siteMeta.lastVerifiedDisplay}</span>')

  fs.writeFileSync(filePath, content, 'utf8')
  changed++
  console.log(`  ✓ ${filename}`)
}

console.log(`\nDone — updated ${changed} page files.`)
