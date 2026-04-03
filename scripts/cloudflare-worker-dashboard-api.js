/**
 * Cloudflare Worker — Dashboard API
 * Proxies GA4 Data API + Search Console API for the /dashboard page.
 *
 * Required Cloudflare secrets (Settings → Variables → add as secrets):
 *   DASHBOARD_TOKEN         — any strong password you choose (e.g. "tradie-dash-abc123")
 *   GA4_PROPERTY_ID         — format: "properties/123456789" (from GA4 Admin → Property Settings)
 *   GOOGLE_SERVICE_ACCOUNT  — full JSON key file content as a single string
 *
 * Deploy:
 *   1. Cloudflare Dashboard → Workers & Pages → Create Worker
 *   2. Paste this script → Deploy
 *   3. Add the 3 secrets above in Settings → Variables
 *   4. Copy the worker URL → set VITE_DASHBOARD_API_URL in Railway env vars → redeploy site
 */

const SITE_URL     = 'https://tradiepayau.directory/'
const ALLOWED_ORIGIN = 'https://tradiepayau.directory'

const CORS = {
  'Access-Control-Allow-Origin':  ALLOWED_ORIGIN,
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, Content-Type',
}

// ── JWT / OAuth helpers ────────────────────────────────────────────────────

function b64url(str) {
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

function b64urlBuf(buf) {
  return btoa(String.fromCharCode(...new Uint8Array(buf)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

function pemToBuffer(pem) {
  const b64 = pem.replace(/-----[^-]+-----/g, '').replace(/\s/g, '')
  const bin = atob(b64)
  const buf = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i)
  return buf.buffer
}

async function getAccessToken(sa, scopes) {
  const now = Math.floor(Date.now() / 1000)
  const hdr = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const pay = b64url(JSON.stringify({
    iss: sa.client_email, sub: sa.client_email,
    scope: scopes.join(' '),
    aud: 'https://oauth2.googleapis.com/token',
    iat: now, exp: now + 3600,
  }))
  const input = `${hdr}.${pay}`
  const key = await crypto.subtle.importKey(
    'pkcs8', pemToBuffer(sa.private_key),
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['sign']
  )
  const sig = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, new TextEncoder().encode(input))
  const jwt = `${input}.${b64urlBuf(sig)}`

  const res  = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  })
  const data = await res.json()
  if (!data.access_token) throw new Error(`OAuth failed: ${JSON.stringify(data)}`)
  return data.access_token
}

// ── GA4 helper ─────────────────────────────────────────────────────────────

async function ga4(token, propertyId, body) {
  const res = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/${propertyId}:runReport`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }
  )
  return res.json()
}

// ── Search Console helper ──────────────────────────────────────────────────

async function sc(token, body) {
  const site = encodeURIComponent(SITE_URL)
  const res  = await fetch(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${site}/searchAnalytics/query`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }
  )
  return res.json()
}

// ── Date helpers ───────────────────────────────────────────────────────────

function scDates(period) {
  const end   = new Date()
  const start = new Date()
  start.setDate(start.getDate() - (period === '28d' ? 28 : 7))
  const fmt = d => d.toISOString().split('T')[0]
  return { startDate: fmt(start), endDate: fmt(end) }
}

function ga4DateRange(period) {
  return period === '28d' ? '28daysAgo' : '7daysAgo'
}

// ── Parse GA4 responses ────────────────────────────────────────────────────

function parseOverview(r) {
  const mv = r.rows?.[0]?.metricValues ?? []
  return {
    sessions:   parseInt(mv[0]?.value ?? '0', 10),
    users:      parseInt(mv[1]?.value ?? '0', 10),
    pageviews:  parseInt(mv[2]?.value ?? '0', 10),
  }
}

function parseEventCount(r) {
  return parseInt(r.rows?.[0]?.metricValues?.[0]?.value ?? '0', 10)
}

function parseTopPages(r) {
  return (r.rows ?? []).map(row => ({
    path:      row.dimensionValues?.[0]?.value ?? '',
    sessions:  parseInt(row.metricValues?.[0]?.value ?? '0', 10),
    pageviews: parseInt(row.metricValues?.[1]?.value ?? '0', 10),
  }))
}

function parseProviderClicks(r) {
  return (r.rows ?? [])
    .filter(row => row.dimensionValues?.[0]?.value && row.dimensionValues[0].value !== '(not set)')
    .map(row => ({
      provider: row.dimensionValues[0].value,
      clicks:   parseInt(row.metricValues?.[0]?.value ?? '0', 10),
    }))
}

function parseSCQueries(r) {
  return (r.rows ?? []).map(row => ({
    query:       row.keys?.[0] ?? '',
    clicks:      row.clicks ?? 0,
    impressions: row.impressions ?? 0,
    ctr:         Math.round((row.ctr ?? 0) * 1000) / 10, // percent, 1dp
    position:    Math.round((row.position ?? 0) * 10) / 10,
  }))
}

function parseSCPages(r) {
  return (r.rows ?? []).map(row => ({
    page:        row.keys?.[0] ?? '',
    clicks:      row.clicks ?? 0,
    impressions: row.impressions ?? 0,
  }))
}

// ── Main handler ───────────────────────────────────────────────────────────

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS })
    }

    // Auth
    const auth = request.headers.get('Authorization') ?? ''
    if (!env.DASHBOARD_TOKEN || auth !== `Bearer ${env.DASHBOARD_TOKEN}`) {
      return Response.json({ error: 'unauthorized' }, { status: 401, headers: CORS })
    }

    // Check required secrets
    if (!env.GA4_PROPERTY_ID || !env.GOOGLE_SERVICE_ACCOUNT) {
      return Response.json(
        { error: 'not_configured', message: 'Add DASHBOARD_TOKEN, GA4_PROPERTY_ID, and GOOGLE_SERVICE_ACCOUNT secrets in Cloudflare Worker settings.' },
        { status: 503, headers: CORS }
      )
    }

    const url    = new URL(request.url)
    const period = url.searchParams.get('period') === '28d' ? '28d' : '7d'

    let sa
    try {
      sa = JSON.parse(env.GOOGLE_SERVICE_ACCOUNT)
    } catch {
      return Response.json({ error: 'invalid_service_account', message: 'GOOGLE_SERVICE_ACCOUNT is not valid JSON.' }, { status: 500, headers: CORS })
    }

    try {
      const scopes = [
        'https://www.googleapis.com/auth/analytics.readonly',
        'https://www.googleapis.com/auth/webmasters.readonly',
      ]
      const token   = await getAccessToken(sa, scopes)
      const start   = ga4DateRange(period)
      const scDts   = scDates(period)
      const propId  = env.GA4_PROPERTY_ID

      const dr = [{ startDate: start, endDate: 'today' }]

      // Run all reports in parallel; use allSettled so partial failures don't break the response
      const [overview, emailCaptures, topPages, providerClicks, scQueries, scPages] =
        await Promise.allSettled([
          ga4(token, propId, {
            dateRanges: dr,
            metrics: [{ name: 'sessions' }, { name: 'totalUsers' }, { name: 'screenPageViews' }],
          }),
          ga4(token, propId, {
            dateRanges: dr,
            metrics: [{ name: 'eventCount' }],
            dimensionFilter: { filter: { fieldName: 'eventName', stringFilter: { matchType: 'EXACT', value: 'email_capture' } } },
          }),
          ga4(token, propId, {
            dateRanges: dr,
            dimensions: [{ name: 'pagePath' }],
            metrics: [{ name: 'sessions' }, { name: 'screenPageViews' }],
            orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
            limit: 8,
          }),
          ga4(token, propId, {
            dateRanges: dr,
            dimensions: [{ name: 'customEvent:provider' }],
            metrics: [{ name: 'eventCount' }],
            dimensionFilter: { filter: { fieldName: 'eventName', stringFilter: { matchType: 'EXACT', value: 'provider_card_click' } } },
            orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
          }),
          sc(token, { ...scDts, dimensions: ['query'], rowLimit: 10, dataState: 'all' }),
          sc(token, { ...scDts, dimensions: ['page'],  rowLimit: 8  }),
        ])

      const settled = r => r.status === 'fulfilled' ? r.value : {}

      return Response.json({
        period,
        generated: new Date().toISOString(),
        ga4: {
          overview:       parseOverview(settled(overview)),
          emailCaptures:  parseEventCount(settled(emailCaptures)),
          topPages:       parseTopPages(settled(topPages)),
          providerClicks: parseProviderClicks(settled(providerClicks)),
        },
        searchConsole: {
          topQueries: parseSCQueries(settled(scQueries)),
          topPages:   parseSCPages(settled(scPages)),
        },
      }, { status: 200, headers: { ...CORS, 'Content-Type': 'application/json' } })

    } catch (err) {
      return Response.json(
        { error: 'api_error', message: err.message },
        { status: 500, headers: CORS }
      )
    }
  },
}
