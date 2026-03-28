/**
 * Cloudflare Worker — Railway deploy webhook → sitemap ping
 *
 * Deploy this at: Cloudflare dashboard → Workers & Pages → Create Worker → paste → Deploy
 * Then copy the worker URL (e.g. https://sitemap-ping.YOUR-SUBDOMAIN.workers.dev)
 * and add it as a Railway webhook: Project Settings → Webhooks → DEPLOY_SUCCESS
 *
 * No environment variables needed.
 */

const SITEMAP = 'https://tradiepayau.directory/sitemap.xml'

export default {
  async fetch(request) {
    // Only accept POST from Railway
    if (request.method !== 'POST') {
      return new Response('OK', { status: 200 })
    }

    let body = {}
    try { body = await request.json() } catch {}

    // Railway payload has a "status" field — only ping on success
    const status = (body.status || body.type || '').toLowerCase()
    if (status && !status.includes('success')) {
      return new Response(`Skipped (status: ${status})`, { status: 200 })
    }

    // Ping Google and Bing in parallel
    const [google, bing] = await Promise.allSettled([
      fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`),
      fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`),
    ])

    const result = {
      sitemap: SITEMAP,
      google: google.status === 'fulfilled' ? google.value.status : 'error',
      bing:   bing.status   === 'fulfilled' ? bing.value.status   : 'error',
      time:   new Date().toISOString(),
    }

    console.log('Sitemap ping result:', JSON.stringify(result))

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  },
}
