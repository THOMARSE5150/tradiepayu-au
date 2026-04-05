#!/usr/bin/env node
/**
 * Bulk-updates all trade page JSX files to use dynamic dateModified from site-meta.json.
 * Run: node scripts/fix-trade-dates.js
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const TRADES_DIR = path.join(__dirname, '../src/pages/trades')
const META_IMPORT = "import siteMeta from '../../data/site-meta.json'"
const SITE_CONST  = "const SITE = 'https://tradiepayau.directory'"

const files = fs.readdirSync(TRADES_DIR).filter(f => f.endsWith('.jsx'))

let changed = 0

for (const filename of files) {
  const filePath = path.join(TRADES_DIR, filename)
  let content = fs.readFileSync(filePath, 'utf8')

  if (content.includes(META_IMPORT)) {
    console.log(`  (already updated) ${filename}`)
    continue
  }

  if (!content.includes("dateModified: '2026-03-31'")) continue

  if (!content.includes(SITE_CONST)) {
    console.warn(`  (skipped — no SITE const) ${filename}`)
    continue
  }

  content = content.replace(SITE_CONST, `${META_IMPORT}\n${SITE_CONST}`)
  content = content.replaceAll("dateModified: '2026-03-31'", 'dateModified: siteMeta.lastVerified')

  fs.writeFileSync(filePath, content, 'utf8')
  changed++
  console.log(`  ✓ ${filename}`)
}

console.log(`\nDone — updated ${changed} trade files.`)
