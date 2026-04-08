#!/usr/bin/env node
/**
 * One-shot refactor script: replaces hardcoded Unsplash URLs in blog posts
 * with blogHeroUrl/blogOgUrl resolver calls.
 *
 * Run: node scripts/refactor-blog-images.mjs
 */
import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const BLOG_DIR = join(import.meta.dirname, '../src/pages/blog')
const files = readdirSync(BLOG_DIR).filter(f => f.endsWith('.jsx') && f !== 'BlogIndexPage.jsx')

const IMPORT_LINE = `import { blogHeroUrl, blogOgUrl } from '../../utils/blogImage'`

let changed = 0
let skipped = []

for (const file of files) {
  const fpath = join(BLOG_DIR, file)
  let src = readFileSync(fpath, 'utf8')

  // Extract slug from canonical prop
  const canonMatch = src.match(/canonical=["']\/blog\/([^"']+)["']/)
  if (!canonMatch) {
    skipped.push({ file, reason: 'no canonical' })
    continue
  }
  const slug = canonMatch[1]

  // Check if there are any unsplash URLs to replace
  if (!src.includes('images.unsplash.com')) {
    skipped.push({ file, reason: 'no unsplash URLs' })
    continue
  }

  const origSrc = src

  // 1. Remove `const IMG = 'photo-...'` lines
  src = src.replace(/^const IMG = ['"][^'"]+['"];?\n/m, '')

  // 2. Replace OG-sized URLs (1200x630) in various contexts:

  // 2a. JSON-LD image url — string literal: url: 'https://images.unsplash.com/...'
  src = src.replace(
    /url:\s*'https:\/\/images\.unsplash\.com\/[^']+\?w=1200[^']*'/g,
    `url: blogOgUrl('${slug}')`
  )

  // 2b. JSON-LD image url — template literal: url: `https://images.unsplash.com/...`
  src = src.replace(
    /url:\s*`https:\/\/images\.unsplash\.com\/[^`]+\?w=1200[^`]*`/g,
    `url: blogOgUrl('${slug}')`
  )

  // 2c. ogImage prop — string: ogImage="https://..."
  src = src.replace(
    /ogImage="https:\/\/images\.unsplash\.com\/[^"]+\?w=1200[^"]*"/g,
    `ogImage={blogOgUrl('${slug}')}`
  )

  // 2d. image prop (BlogIndexPage schema) — template literal
  src = src.replace(
    /image:\s*`https:\/\/images\.unsplash\.com\/[^`]+\?w=1200[^`]*`/g,
    `image: blogOgUrl('${slug}')`
  )

  // 3. Replace hero-sized URLs (900x560):

  // 3a. <img> src — string literal: src="https://..."
  src = src.replace(
    /src="https:\/\/images\.unsplash\.com\/[^"]+\?w=900[^"]*"/g,
    `src={blogHeroUrl('${slug}')}`
  )

  // 3b. <img> src — template literal: src={`https://...`}
  src = src.replace(
    /src=\{`https:\/\/images\.unsplash\.com\/[^`]+\?w=900[^`]*`\}/g,
    `src={blogHeroUrl('${slug}')}`
  )

  // 4. Add import if we made changes and it's not already there
  if (src !== origSrc && !src.includes('blogHeroUrl') && !src.includes('blogOgUrl')) {
    // This shouldn't happen since we just inserted those calls, but safety check
  }

  if (src !== origSrc && !src.includes("from '../../utils/blogImage'")) {
    // Insert import after the last existing import line
    const importInsertPoint = src.lastIndexOf("\nimport ")
    if (importInsertPoint !== -1) {
      const nextNewline = src.indexOf('\n', importInsertPoint + 1)
      src = src.slice(0, nextNewline) + '\n' + IMPORT_LINE + src.slice(nextNewline)
    }
  }

  if (src !== origSrc) {
    writeFileSync(fpath, src, 'utf8')
    changed++
    console.log(`✓ ${file} (slug: ${slug})`)
  } else {
    skipped.push({ file, reason: 'no changes needed' })
  }
}

console.log(`\n${changed} files updated`)
if (skipped.length) {
  console.log(`${skipped.length} skipped:`)
  for (const s of skipped) console.log(`  - ${s.file}: ${s.reason}`)
}
