#!/usr/bin/env node
/**
 * Generates public/sitemap.xml from the live route data.
 * Run via: node scripts/generate-sitemap.js
 * Hooked into the build script so it stays current automatically.
 */

import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const providers = JSON.parse(readFileSync(resolve(root, 'src/data/providers.json'), 'utf8'))
const meta      = JSON.parse(readFileSync(resolve(root, 'src/data/site-meta.json'), 'utf8'))

const SITE    = 'https://tradiepayau.directory'
const TODAY   = meta.lastVerified

// Blog posts with individual lastmod dates (dateModified from each post's Article schema)
const blogPosts = [
  { slug: 'eftpos-fees-tradies-australia-2026',          lastmod: '2026-03-31', changefreq: 'monthly' },
  { slug: 'zeller-vs-square-eftpos-tradies',             lastmod: '2026-03-31', changefreq: 'monthly' },
  { slug: 'zeller-terminal-1-review-2026',               lastmod: '2026-03-31', changefreq: 'monthly' },
  { slug: 'square-terminal-review-2026',                 lastmod: '2026-03-31', changefreq: 'monthly' },
  { slug: 'best-eftpos-sole-traders-australia-2026',     lastmod: '2026-03-31', changefreq: 'monthly' },
  { slug: 'accept-card-payments-sole-trader-australia',  lastmod: '2026-03-31', changefreq: 'monthly' },
  { slug: 'stripe-terminal-review-2026',                 lastmod: TODAY,        changefreq: 'monthly' },
  { slug: 'tyro-eftpos-review-2026',                           lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'shift4-eftpos-review-2026',                         lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'zeller-vs-tyro-eftpos-tradies',                     lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'surcharging-eftpos-tradies-australia-2026',         lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'best-eftpos-builders-australia-2026',               lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'zeller-vs-square-vs-stripe-eftpos-tradies-2026',    lastmod: TODAY, changefreq: 'monthly', priority: '0.9' },
  { slug: 'best-eftpos-plumbers-australia-2026',               lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'stripe-vs-square-eftpos-australia-2026',            lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'how-to-get-paid-faster-sole-trader-australia',      lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'best-eftpos-electricians-australia-2026',           lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'best-eftpos-glaziers-australia-2026',               lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'best-eftpos-roofers-australia-2026',                lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'best-eftpos-hvac-australia-2026',                   lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'best-eftpos-painters-australia-2026',              lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'best-eftpos-tilers-australia-2026',                lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'best-eftpos-concreters-australia-2026',            lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'best-eftpos-carpenters-australia-2026',            lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'best-eftpos-gas-fitters-australia-2026',           lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'best-eftpos-fencers-australia-2026',               lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'best-eftpos-plasterers-australia-2026',            lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'best-eftpos-pool-builders-australia-2026',         lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'best-eftpos-pest-controllers-australia-2026',      lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'best-eftpos-welders-australia-2026',               lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'best-eftpos-cleaners-australia-2026',              lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'best-eftpos-landscapers-australia-2026',           lastmod: TODAY, changefreq: 'monthly' },
  { slug: 'best-eftpos-electricians-nsw-2026',               lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-electricians-vic-2026',               lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-electricians-qld-2026',               lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-plumbers-nsw-2026',                   lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-plumbers-vic-2026',                   lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-plumbers-qld-2026',                   lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-builders-nsw-2026',                   lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-builders-vic-2026',                   lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-builders-qld-2026',                   lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  // City guides
  { slug: 'best-eftpos-electricians-sydney-2026',            lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-electricians-melbourne-2026',         lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-electricians-brisbane-2026',          lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-plumbers-sydney-2026',                lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-plumbers-melbourne-2026',             lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-plumbers-brisbane-2026',              lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-builders-sydney-2026',                lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-builders-melbourne-2026',             lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-builders-brisbane-2026',              lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  // WA / SA state posts
  { slug: 'best-eftpos-electricians-wa-2026',                lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-plumbers-wa-2026',                    lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-builders-wa-2026',                    lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-electricians-sa-2026',                lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-plumbers-sa-2026',                    lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-builders-sa-2026',                    lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  // Painters & Concreters × NSW/VIC/QLD
  { slug: 'best-eftpos-painters-nsw-2026',                   lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-painters-vic-2026',                   lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-painters-qld-2026',                   lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-concreters-nsw-2026',                 lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-concreters-vic-2026',                 lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-concreters-qld-2026',                 lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  // City guides — painters/concreters
  { slug: 'best-eftpos-painters-sydney-2026',              lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-painters-melbourne-2026',           lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-painters-brisbane-2026',            lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-concreters-sydney-2026',            lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-concreters-melbourne-2026',         lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-concreters-brisbane-2026',          lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  // City guides — Perth
  { slug: 'best-eftpos-electricians-perth-2026',           lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-plumbers-perth-2026',               lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-builders-perth-2026',               lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  // City guides — Adelaide
  { slug: 'best-eftpos-electricians-adelaide-2026',        lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-plumbers-adelaide-2026',            lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-builders-adelaide-2026',            lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  // Roofers state guides
  { slug: 'best-eftpos-roofers-nsw-2026',                  lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-roofers-vic-2026',                  lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-roofers-qld-2026',                  lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  // Roofers city guides
  { slug: 'best-eftpos-roofers-sydney-2026',               lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-roofers-melbourne-2026',            lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-roofers-brisbane-2026',             lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  // Painters & Concreters × WA/SA state guides
  { slug: 'best-eftpos-painters-wa-2026',                  lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-painters-sa-2026',                  lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-concreters-wa-2026',                lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-concreters-sa-2026',                lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  // Painters & Concreters × Perth/Adelaide city guides
  { slug: 'best-eftpos-painters-perth-2026',               lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-painters-adelaide-2026',            lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-concreters-perth-2026',             lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { slug: 'best-eftpos-concreters-adelaide-2026',          lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
]

// All combinations of 2 providers
function combos(ids) {
  const out = []
  for (let i = 0; i < ids.length; i++)
    for (let j = i + 1; j < ids.length; j++)
      out.push(`${ids[i]}-vs-${ids[j]}`)
  return out
}

const providerIds = providers.map(p => p.id)

const tradeSlugs = [
  'electricians', 'plumbers', 'builders', 'glaziers', 'roofers', 'painters',
  'tilers', 'concreters', 'carpenters', 'hvac', 'gas-fitters', 'fencers',
  'plasterers', 'pool-builders', 'pest-controllers', 'welders', 'cleaners', 'landscapers',
]

const stateSlugs = ['nsw', 'vic', 'qld', 'wa', 'sa', 'tas', 'act', 'nt']

// Higher-population states and higher-intent trades get a priority boost
const STATE_PRIORITY  = { nsw: '0.7', vic: '0.7', qld: '0.7', wa: '0.6', sa: '0.6', tas: '0.5', act: '0.5', nt: '0.5' }
const HIGH_INTENT_TRADES = new Set(['electricians', 'plumbers', 'builders', 'painters', 'concreters'])

function url(loc, priority, changefreq = 'monthly', lastmod = TODAY) {
  return `
  <url>
    <loc>${SITE}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${url('/', '1.0', 'weekly')}

  <!-- Index pages -->
${url('/providers', '0.9')}
${url('/trades', '0.9')}
${url('/compare', '0.8')}
${url('/states', '0.8')}

  <!-- Provider pages -->
${providerIds.map(id => url(`/providers/${id}`, '0.9')).join('\n')}

  <!-- Comparison pages (all ${combos(providerIds).length} combos) -->
${combos(providerIds).map(slug => url(`/compare/${slug}`, '0.7')).join('\n')}

  <!-- Trade pages -->
${tradeSlugs.map(slug => url(`/trades/${slug}`, '0.8')).join('\n')}

  <!-- State hub pages -->
${stateSlugs.map(s => url(`/states/${s}`, STATE_PRIORITY[s] || '0.7', 'monthly')).join('\n')}

  <!-- State-level trade pages (${tradeSlugs.length} trades × ${stateSlugs.length} states = ${tradeSlugs.length * stateSlugs.length} pages) -->
${tradeSlugs.flatMap(t => stateSlugs.map(s => {
  const base = parseFloat(STATE_PRIORITY[s] || '0.6')
  const boost = HIGH_INTENT_TRADES.has(t) ? 0.05 : 0
  return url(`/trades/${t}/${s}`, (Math.min(base + boost, 0.9)).toFixed(2))
})).join('\n')}

  <!-- Blog -->
${url('/blog', '0.8', 'weekly')}
${blogPosts.map(p => url(`/blog/${p.slug}`, p.priority || '0.8', p.changefreq, p.lastmod)).join('\n')}

  <!-- Static pages -->
${url('/calculator', '0.7')}
${url('/glossary',   '0.7')}
${url('/about',      '0.6')}
${url('/contact',    '0.4', 'yearly')}
${url('/privacy',    '0.3', 'yearly')}
${url('/disclaimer', '0.3', 'yearly')}

</urlset>
`

const dest = resolve(root, 'public/sitemap.xml')
writeFileSync(dest, xml)
console.log(`✓ sitemap.xml written — ${xml.match(/<url>/g).length} URLs (lastmod: ${TODAY})`)
