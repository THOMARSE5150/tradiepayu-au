#!/usr/bin/env node
/**
 * Pings Bing IndexNow with all site URLs after a deploy.
 * Run via: node scripts/ping-indexnow.js
 * Hooked into the deploy/build process automatically.
 */

import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const SITE    = 'https://tradiepayau.directory'
const API_KEY = '252fc46d4147487fbad686f588e99376'
const KEY_LOC = `${SITE}/${API_KEY}.txt`

const providers = JSON.parse(readFileSync(resolve(root, 'src/data/providers.json'), 'utf8'))

function combos(ids) {
  const out = []
  for (let i = 0; i < ids.length; i++)
    for (let j = i + 1; j < ids.length; j++)
      out.push(`${ids[i]}-vs-${ids[j]}`)
  return out
}

const providerIds = providers.map(p => p.id)
const tradeSlugs  = ['electricians','plumbers','gas-fitters','hvac','builders','carpenters','concreters','painters','plasterers','tilers','roofers','landscapers','fencers','glaziers','pool-builders','pest-controllers','welders','cleaners']
const stateSlugs  = ['nsw','vic','qld','wa','sa','tas','act','nt']

const urls = [
  `${SITE}/`,
  `${SITE}/providers`,
  `${SITE}/trades`,
  `${SITE}/compare`,
  `${SITE}/blog`,
  ...providerIds.map(id => `${SITE}/providers/${id}`),
  ...combos(providerIds).map(c => `${SITE}/compare/${c}`),
  ...tradeSlugs.map(s => `${SITE}/trades/${s}`),
  ...stateSlugs.map(s => `${SITE}/trades/${s}`),
  ...tradeSlugs.flatMap(t => stateSlugs.map(s => `${SITE}/trades/${t}/${s}`)),
]

// IndexNow allows max 10,000 URLs per request
const BATCH = 10000
for (let i = 0; i < urls.length; i += BATCH) {
  const batch = urls.slice(i, i + BATCH)
  const body = JSON.stringify({
    host: 'tradiepayau.directory',
    key: API_KEY,
    keyLocation: KEY_LOC,
    urlList: batch,
  })

  console.log(`Pinging IndexNow with ${batch.length} URLs...`)
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body,
  })
  console.log(`IndexNow response: ${res.status} ${res.statusText}`)
}
