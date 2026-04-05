#!/usr/bin/env node
/**
 * check-jsx-escapes.mjs
 *
 * Detects \' (backslash-apostrophe) in JSX text content.
 *
 * Background: in JSX text nodes (between tags), \' renders as a literal backslash
 * on screen. In JS single-quoted string literals, \' is valid escaping and renders
 * correctly. This check only flags the JSX text case.
 *
 * Run: node scripts/check-jsx-escapes.mjs
 * Exits 1 if violations found (used as a pre-build gate).
 */

import { readFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

// Lines that start with JS code patterns — state machine tracks quote context here.
// Lines NOT matching this are treated as JSX text content.
const JS_CODE_LINE = /^\s*(?:\{|\[|const |let |var |import |export |\/\/|\/\*|\*|return |if |else|function |=>|[a-zA-Z_$][\w$]*\s*[:(,=])/

function hasViolationOnJsxTextLine(line) {
  // Pure JSX text: any \' is a visible bug
  return line.includes("\\'")
}

function hasViolationOnJsCodeLine(line) {
  // JS code: only flag \' that falls outside a single-quoted string context
  let inSQ = false
  let i = 0
  while (i < line.length) {
    const ch = line[i]
    if (ch === '\\' && i + 1 < line.length && line[i + 1] === "'") {
      if (!inSQ) return true // \' outside a string = JSX text context mixed on code line
      i += 2
      continue
    }
    if (ch === "'") {
      // Apostrophe contractions don't toggle string state
      const isContraction = /^'(?:s|re|ve|t|ll|d|m|nt)(?:\s|[,.<>]|$)/.test(line.slice(i))
      if (!isContraction) inSQ = !inSQ
    }
    i++
  }
  return false
}

function checkFile(filePath, violations) {
  const src = readFileSync(filePath, 'utf8')
  const lines = src.split('\n')
  lines.forEach((line, idx) => {
    if (!line.includes("\\'")) return
    const isJsCode = JS_CODE_LINE.test(line)
    const violated = isJsCode
      ? hasViolationOnJsCodeLine(line)
      : hasViolationOnJsxTextLine(line)
    if (violated) {
      violations.push({ file: filePath, line: idx + 1, content: line.trim().slice(0, 120) })
    }
  })
}

function walkDir(dir, exts, results = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory()) walkDir(full, exts, results)
    else if (exts.some(e => full.endsWith(e))) results.push(full)
  }
  return results
}

const srcDir = new URL('../src', import.meta.url).pathname
const files = walkDir(srcDir, ['.jsx', '.js'])

const violations = []
for (const f of files) checkFile(f, violations)

if (violations.length === 0) {
  console.log("check-jsx-escapes: OK — no visible \\' in JSX text content")
  process.exit(0)
}

console.error(`check-jsx-escapes: FAIL — ${violations.length} visible backslash-apostrophe(s) found in JSX text content:\n`)
for (const v of violations) {
  console.error(`  ${v.file.replace(srcDir + '/', '')}:${v.line}`)
  console.error(`    ${v.content}\n`)
}
console.error("Fix: remove the backslash. In JSX text, apostrophes don't need escaping.")
console.error("     (Note: \\' inside JS string literals like  a: 'it\\'s fine'  is valid and safe.)\n")
process.exit(1)
