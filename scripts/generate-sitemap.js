#!/usr/bin/env node
/**
 * Generates public/sitemap.xml from the current site-meta.json lastVerified date.
 * Run standalone: node scripts/generate-sitemap.js
 * Also called automatically by check-providers.js after rate verification.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

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

const BLOG_SLUGS = [
  'zeller-terminal-1-review-2026','square-terminal-review-2026','stripe-terminal-review-2026',
  'tyro-eftpos-review-2026','shift4-eftpos-review-2026',
  'zeller-vs-square-eftpos-tradies','zeller-vs-square-vs-stripe-eftpos-tradies-2026',
  'stripe-vs-square-eftpos-australia-2026','zeller-vs-tyro-eftpos-tradies',
  'eftpos-fees-tradies-australia-2026','surcharging-eftpos-tradies-australia-2026',
  'how-to-get-paid-faster-sole-trader-australia','accept-card-payments-sole-trader-australia',
  'best-eftpos-sole-traders-australia-2026',
  'best-eftpos-electricians-australia-2026','best-eftpos-plumbers-australia-2026',
  'best-eftpos-builders-australia-2026','best-eftpos-painters-australia-2026',
  'best-eftpos-roofers-australia-2026','best-eftpos-concreters-australia-2026',
  'best-eftpos-glaziers-australia-2026','best-eftpos-hvac-australia-2026',
  'best-eftpos-carpenters-australia-2026','best-eftpos-tilers-australia-2026',
  'best-eftpos-gas-fitters-australia-2026','best-eftpos-fencers-australia-2026',
  'best-eftpos-plasterers-australia-2026','best-eftpos-pool-builders-australia-2026',
  'best-eftpos-pest-controllers-australia-2026','best-eftpos-welders-australia-2026',
  'best-eftpos-cleaners-australia-2026','best-eftpos-landscapers-australia-2026',
  'best-eftpos-electricians-nsw-2026','best-eftpos-electricians-vic-2026','best-eftpos-electricians-qld-2026',
  'best-eftpos-plumbers-nsw-2026','best-eftpos-plumbers-vic-2026','best-eftpos-plumbers-qld-2026',
  'best-eftpos-builders-nsw-2026','best-eftpos-builders-vic-2026','best-eftpos-builders-qld-2026',
  'best-eftpos-painters-nsw-2026','best-eftpos-painters-vic-2026','best-eftpos-painters-qld-2026',
  'best-eftpos-concreters-nsw-2026','best-eftpos-concreters-vic-2026','best-eftpos-concreters-qld-2026',
  'best-eftpos-roofers-nsw-2026','best-eftpos-roofers-vic-2026','best-eftpos-roofers-qld-2026',
  'best-eftpos-electricians-wa-2026','best-eftpos-electricians-sa-2026',
  'best-eftpos-plumbers-wa-2026','best-eftpos-plumbers-sa-2026',
  'best-eftpos-builders-wa-2026','best-eftpos-builders-sa-2026',
  'best-eftpos-painters-wa-2026','best-eftpos-painters-sa-2026',
  'best-eftpos-concreters-wa-2026','best-eftpos-concreters-sa-2026',
  'best-eftpos-electricians-sydney-2026','best-eftpos-plumbers-sydney-2026','best-eftpos-builders-sydney-2026',
  'best-eftpos-painters-sydney-2026','best-eftpos-concreters-sydney-2026','best-eftpos-roofers-sydney-2026',
  'best-eftpos-electricians-melbourne-2026','best-eftpos-plumbers-melbourne-2026','best-eftpos-builders-melbourne-2026',
  'best-eftpos-painters-melbourne-2026','best-eftpos-concreters-melbourne-2026','best-eftpos-roofers-melbourne-2026',
  'best-eftpos-electricians-brisbane-2026','best-eftpos-plumbers-brisbane-2026','best-eftpos-builders-brisbane-2026',
  'best-eftpos-painters-brisbane-2026','best-eftpos-concreters-brisbane-2026','best-eftpos-roofers-brisbane-2026',
  'best-eftpos-electricians-perth-2026','best-eftpos-plumbers-perth-2026','best-eftpos-builders-perth-2026',
  'best-eftpos-painters-perth-2026','best-eftpos-concreters-perth-2026',
  'best-eftpos-electricians-adelaide-2026','best-eftpos-plumbers-adelaide-2026','best-eftpos-builders-adelaide-2026',
  'best-eftpos-painters-adelaide-2026','best-eftpos-concreters-adelaide-2026',
]

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
