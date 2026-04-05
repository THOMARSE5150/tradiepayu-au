#!/usr/bin/env node
/**
 * Generates public/sitemap.xml from the current site-meta.json lastVerified date.
 * Run standalone: node scripts/generate-sitemap.js
 * Also called automatically by check-providers.js after rate verification.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { posts } from '../src/data/posts.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT       = path.resolve(__dirname, '..')
const META_PATH  = path.join(ROOT, 'src/data/site-meta.json')
const OUT_PATH   = path.join(ROOT, 'public/sitemap.xml')

const { lastVerified } = JSON.parse(fs.readFileSync(META_PATH, 'utf8'))
const BASE = 'https://tradiepayau.directory'

const PROVIDERS = ['zeller', 'square', 'stripe', 'tyro', 'shift4']
const TRADES = [
  'electricians', 'plumbers', 'builders', 'glaziers', 'roofers', 'painters',
  'tilers', 'concreters', 'carpenters', 'hvac', 'gas-fitters', 'fencers',
  'plasterers', 'pool-builders', 'pest-controllers', 'welders', 'cleaners', 'landscapers',
]
const STATES = ['nsw', 'vic', 'qld', 'wa', 'sa', 'tas', 'act', 'nt']

// Derived from posts.js — stays current automatically as new posts are added
const BLOG_SLUGS = posts.map(p => p.slug)

function url(loc, { priority = 0.6, changefreq = 'monthly', lastmod = lastVerified } = {}) {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
}

const parts = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ``,
  url(`${BASE}/`, { priority: 1.0, changefreq: 'weekly' }),
  ``,
  `  <!-- Index pages -->`,
  url(`${BASE}/providers`, { priority: 0.9 }),
  url(`${BASE}/trades`, { priority: 0.9 }),
  url(`${BASE}/compare`, { priority: 0.8 }),
  url(`${BASE}/states`, { priority: 0.8 }),
  url(`${BASE}/blog`, { priority: 0.9 }),
  ``,
  `  <!-- Provider pages -->`,
  ...PROVIDERS.map(p => url(`${BASE}/providers/${p}`, { priority: 0.9 })),
  ``,
  `  <!-- Comparison pages -->`,
  ...PROVIDERS.flatMap((p1, i) =>
    PROVIDERS.slice(i + 1).map(p2 => url(`${BASE}/compare/${p1}-vs-${p2}`, { priority: 0.7 }))
  ),
  ``,
  `  <!-- Trade pages -->`,
  ...TRADES.map(t => url(`${BASE}/trades/${t}`, { priority: 0.8 })),
  ``,
  `  <!-- State hub pages -->`,
  ...STATES.map((s, i) => url(`${BASE}/states/${s}`, { priority: i < 3 ? 0.7 : i < 5 ? 0.6 : 0.5 })),
  ``,
  `  <!-- State-level trade pages (18 trades x 8 states) -->`,
  ...TRADES.flatMap(t =>
    STATES.map((s, i) => url(`${BASE}/trades/${t}/${s}`, { priority: i < 3 ? 0.75 : i < 5 ? 0.65 : 0.55 }))
  ),
  ``,
  `  <!-- Blog posts -->`,
  ...BLOG_SLUGS.map(s => url(`${BASE}/blog/${s}`, { priority: 0.7 })),
  ``,
  `  <!-- Static pages -->`,
  url(`${BASE}/calculator`, { priority: 0.7 }),
  url(`${BASE}/glossary`, { priority: 0.7 }),
  url(`${BASE}/about`, { priority: 0.6 }),
  url(`${BASE}/contact`, { priority: 0.4, changefreq: 'yearly' }),
  url(`${BASE}/privacy`, { priority: 0.3, changefreq: 'yearly' }),
  url(`${BASE}/disclaimer`, { priority: 0.3, changefreq: 'yearly' }),
  ``,
  `</urlset>`,
]

fs.writeFileSync(OUT_PATH, parts.join('\n'))
const urlCount = parts.filter(p => p.includes('<url>')).length
console.log(`Sitemap written: ${urlCount} URLs, lastmod ${lastVerified}`)
