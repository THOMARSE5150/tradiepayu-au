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

const stateSlugs = ['nsw', 'vic', 'qld', 'wa', 'sa', 'tas']

// Higher-population states and higher-intent trades get a priority boost
const STATE_PRIORITY  = { nsw: '0.7', vic: '0.7', qld: '0.7', wa: '0.6', sa: '0.6', tas: '0.5' }
const HIGH_INTENT_TRADES = new Set(['electricians', 'plumbers', 'builders', 'painters', 'concreters'])

function url(loc, priority, changefreq = 'monthly') {
  return `
  <url>
    <loc>${SITE}${loc}</loc>
    <lastmod>${TODAY}</lastmod>
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

  <!-- Provider pages -->
${providerIds.map(id => url(`/providers/${id}`, '0.9')).join('\n')}

  <!-- Comparison pages (all ${combos(providerIds).length} combos) -->
${combos(providerIds).map(slug => url(`/compare/${slug}`, '0.7')).join('\n')}

  <!-- Trade pages -->
${tradeSlugs.map(slug => url(`/trades/${slug}`, '0.8')).join('\n')}

  <!-- State index + hub pages -->
${url('/states', '0.8')}
${stateSlugs.map(s => url(`/states/${s}`, STATE_PRIORITY[s] || '0.7', 'monthly')).join('\n')}

  <!-- State-level trade pages (${tradeSlugs.length} trades × ${stateSlugs.length} states = ${tradeSlugs.length * stateSlugs.length} pages) -->
${tradeSlugs.flatMap(t => stateSlugs.map(s => {
  const base = parseFloat(STATE_PRIORITY[s] || '0.6')
  const boost = HIGH_INTENT_TRADES.has(t) ? 0.05 : 0
  return url(`/trades/${t}/${s}`, (Math.min(base + boost, 0.9)).toFixed(2))
})).join('\n')}

  <!-- Static pages -->
${url('/about',      '0.6')}
${url('/contact',    '0.4', 'yearly')}
${url('/privacy',    '0.3', 'yearly')}
${url('/disclaimer', '0.3', 'yearly')}

</urlset>
`

const dest = resolve(root, 'public/sitemap.xml')
writeFileSync(dest, xml)
console.log(`✓ sitemap.xml written — ${xml.match(/<url>/g).length} URLs (lastmod: ${TODAY})`)
