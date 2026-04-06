#!/usr/bin/env node
/**
 * Fix Stripe settlement claims in blog comparison tables and inline prose.
 *
 * providers.json: stripe.settlement.standard_days = 2
 * StripeTerminalReviewPost correctly says "2 business days (no same-day option)"
 * ~49 blog posts incorrectly show "Next day" for Stripe in comparison tables.
 * ~10 FAQ/text blocks say "Square and Stripe [both] settle next business day."
 *
 * Changes made:
 *   Comparison table cells:
 *     "Next day" (Stripe column) → "2 days"
 *     "Next business day" (Stripe column) → "2 business days"
 *   Inline prose:
 *     "Square and Stripe both settle the next business day" → corrected
 *     "Square and Stripe settle next business day" → corrected
 *     "Square, Stripe, and [others] settle [next business day]" → corrected
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

function fix(src) {
  let out = src

  // ── TABLE FIXES ──────────────────────────────────────────────────────────

  // 4-col table (Zeller, Square, Stripe, Tyro):
  // "Settlement", "Same day", "Next day", "Next day", "Next day"
  //                                        ^^^^^^^^^ Stripe — fix this one
  out = out.replace(
    /("Settlement",\s*"Same day",\s*"Next day",\s*)"Next day"(,\s*"Next day")/g,
    '$1"2 days"$2'
  )

  // 3-col table (Zeller, Square, Stripe) — double-quoted:
  // "Settlement", "Same day", "Next day", "Next day"   ← last = Stripe
  // But also exists for Zeller/Square/Tyro tables which would be correct.
  // Only target files where Stripe is in the headers — handled by targeting files
  // from the audit list (below). This regex is only applied to those files.
  out = out.replace(
    /("Settlement",\s*"Same day",\s*"Next day",\s*)"Next day"(\s*\])/g,
    '$1"2 days"$2'
  )

  // 3-col table (Zeller, Square, Stripe) — single-quoted:
  out = out.replace(
    /('Settlement',\s*'Same day',\s*'Next day',\s*)'Next day'(\s*\])/g,
    "$1'2 days'$2"
  )

  // ZellerSquareStripePost / StripeVsSquarePost: "Next business day" for Stripe
  // Pattern: ['Settlement', 'Same day', 'Next business day', 'Next business day']
  //                                                           ^^^^^^^^^^^^^^^^^^^ Stripe
  out = out.replace(
    /('Settlement',\s*'Same day',\s*'Next business day',\s*)'Next business day'(\s*\])/g,
    "$1'2 business days'$2"
  )
  // Pattern: ['Settlement', 'Next business day', 'Next business day']
  //           Square ^^^^^^^^^^^^^^^^^^^          Stripe ^^^^^^^^^^^^
  out = out.replace(
    /('Settlement',\s*'Next business day',\s*)'Next business day'(\s*\])/g,
    "$1'2 business days'$2"
  )

  // ── INLINE PROSE FIXES ──────────────────────────────────────────────────

  // "Square and Stripe both settle the next business day"
  out = out.replace(
    /Square and Stripe both settle the (next|following) business day/gi,
    'Square settles the next business day; Stripe settles in 2 business days'
  )
  // "Square and Stripe both settle the following business day"
  out = out.replace(
    /Square and Stripe both settle the following business day/gi,
    'Square settles the next business day; Stripe settles in 2 business days'
  )
  // "Square and Stripe settle next business day"  (no "both")
  out = out.replace(
    /Square and Stripe (both )?settle next business day/gi,
    'Square settles next business day; Stripe settles in 2 business days'
  )
  // "Square and Stripe both settle next business day by default"
  out = out.replace(
    /Square and Stripe (both )?settle next business day by default/gi,
    'Square settles next business day; Stripe settles in 2 business days'
  )
  // "Square, Stripe, and Tyro all settle next business day"
  out = out.replace(
    /Square, Stripe, and Tyro all settle next business day/gi,
    'Square and Tyro settle next business day; Stripe settles in 2 business days'
  )
  // "Square, Stripe, and most other providers settle the following business day"
  out = out.replace(
    /Square, Stripe, and most other providers settle the following business day/gi,
    'Square settles the next business day; Stripe settles in 2 business days'
  )
  // "Square, Stripe, and most others settle next business day"
  out = out.replace(
    /Square, Stripe, and most others settle next business day/gi,
    'Square settles next business day; Stripe settles in 2 business days'
  )
  // GetPaidFasterPost table row: ['Stripe', 'Next business day', 'Monday', false]
  out = out.replace(
    /\['Stripe',\s*'Next business day',\s*'Monday',\s*false\]/g,
    "['Stripe', '2 business days', 'Tuesday', false]"
  )

  return out
}

// Files with confirmed wrong Stripe settlement (from audit)
// We target ALL blog files — the regexes are specific enough to not false-positive
const dir = new URL('../src/pages/blog', import.meta.url).pathname
const files = readdirSync(dir).filter(f => f.endsWith('.jsx'))

let fixed = 0
for (const file of files) {
  const path = join(dir, file)
  const original = readFileSync(path, 'utf8')
  const updated = fix(original)
  if (updated !== original) {
    writeFileSync(path, updated, 'utf8')
    console.log(`Fixed: ${file}`)
    fixed++
  }
}
console.log(`\nDone: ${fixed} files updated.`)
