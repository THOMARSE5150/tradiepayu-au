#!/usr/bin/env node
/**
 * Pings IndexNow with all URLs from the generated sitemap.xml after a deploy.
 * Reads from public/sitemap.xml (generated immediately before this runs)
 * so it is always in sync with actual site content — no manual URL lists.
 *
 * Run via: node scripts/ping-indexnow.js
 * Hooked into build: generate-sitemap → vite build → ping-indexnow
 */

import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const SITE    = 'https://tradiepayau.directory'
const API_KEY = '9cywg6a6kxcywvx9k5gnnftccut97f7q'
const KEY_LOC = `${SITE}/${API_KEY}.txt`

// Parse all <loc> URLs from the already-generated sitemap.xml
const sitemap = readFileSync(resolve(root, 'public/sitemap.xml'), 'utf8')
const urls = [...sitemap.matchAll(/<loc>(https?:\/\/[^<]+)<\/loc>/g)].map(m => m[1])

if (urls.length === 0) {
  console.error('IndexNow: no URLs found in sitemap.xml — skipping')
  process.exit(0)
}

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
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body,
    })
    const text = await res.text()
    if (res.ok) {
      console.log(`IndexNow: ${res.status} OK — ${batch.length} URLs submitted`)
    } else {
      console.warn(`IndexNow: ${res.status} ${res.statusText}${text ? ` — ${text.trim()}` : ''}`)
    }
  } catch (err) {
    console.warn(`IndexNow: network error — ${err.message}`)
  }
}
