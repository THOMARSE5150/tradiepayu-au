#!/usr/bin/env node
/**
 * Fix visible backslash-escaped apostrophes in JSX text content.
 *
 * In JSX text nodes (between tags), \' renders as a literal backslash + apostrophe.
 * In JS single-quoted string literals, \' is a valid escape (renders correctly).
 *
 * Strategy:
 *   - "JS data lines": lines where the trimmed content starts with `{`, `[`, or
 *     matches a key:value object pattern. These use single-quoted JS strings — apply
 *     the full quote-state machine to only replace \' outside strings.
 *   - "JSX text lines": everything else. All ' are plain apostrophes here (not string
 *     delimiters), so replace ALL \' unconditionally.
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

// Does a line look like JS code (data object / assignment)?
// We want to leave these alone unless the \' is clearly outside a string.
const JS_CODE_LINE = /^\s*(?:\{|\[|const |let |var |import |export |\/\/|\/\*|\*|return |if |else|function |=>|[a-zA-Z_$][\w$]*\s*[:(,=])/

function fixJsCodeLine(line) {
  // State machine: track if inside a single-quoted string
  let result = ''
  let i = 0
  let inSQ = false  // in single-quoted string

  while (i < line.length) {
    const ch = line[i]

    if (ch === '\\' && i + 1 < line.length) {
      const next = line[i + 1]
      if (next === "'") {
        if (inSQ) {
          // Inside JS string — keep escape as-is
          result += "\\'"
        } else {
          // Outside string — JSX text context — remove backslash
          result += "'"
        }
        i += 2
        continue
      } else {
        result += ch + next
        i += 2
        continue
      }
    }

    if (ch === "'") {
      // Toggle single-quote state only if not preceded by a word char (apostrophe in text ≠ delimiter)
      // Heuristic: if followed by 's ', 're ', 've ', 't ', 'll ', 'd ', 'm ' it's an apostrophe
      const isApostrophe = /^'(?:s|re|ve|t|ll|d|m|nt)(?:\s|[,.<>]|$)/.test(line.slice(i))
      if (!isApostrophe) {
        inSQ = !inSQ
      }
      result += ch
      i++
      continue
    }

    result += ch
    i++
  }

  return result
}

function fixJsxTextLine(line) {
  // Pure JSX text: all single quotes are apostrophes. Replace ALL \' with '.
  return line.replaceAll("\\'", "'")
}

function fixContent(src) {
  const lines = src.split('\n')
  let changed = false

  const fixed = lines.map(line => {
    if (!line.includes("\\'")) return line

    const newLine = JS_CODE_LINE.test(line)
      ? fixJsCodeLine(line)
      : fixJsxTextLine(line)

    if (newLine !== line) changed = true
    return newLine
  })

  return { content: fixed.join('\n'), changed }
}

function walkDir(dir, exts) {
  const results = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory()) {
      results.push(...walkDir(full, exts))
    } else if (exts.some(e => full.endsWith(e))) {
      results.push(full)
    }
  }
  return results
}

const srcDir = new URL('../src', import.meta.url).pathname
const files = walkDir(srcDir, ['.jsx', '.js'])

let totalFiles = 0
let totalFixes = 0

for (const file of files) {
  const original = readFileSync(file, 'utf8')
  if (!original.includes("\\'")) continue

  const { content, changed } = fixContent(original)
  if (changed) {
    writeFileSync(file, content, 'utf8')
    const before = (original.match(/\\'/g) || []).length
    const after = (content.match(/\\'/g) || []).length
    const count = before - after
    console.log(`Fixed ${String(count).padStart(3)}: ${file.replace(srcDir + '/', '')}`)
    totalFiles++
    totalFixes += count
  }
}

console.log(`\nDone: ${totalFixes} escaped apostrophes fixed across ${totalFiles} files.`)
