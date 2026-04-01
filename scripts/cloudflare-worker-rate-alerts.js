/**
 * Cloudflare Worker — Rate alert form submission → branded email via Resend
 *
 * Deploy:
 *   1. Go to Cloudflare Dashboard → Workers & Pages → Create Worker
 *   2. Paste this script → Deploy
 *   3. Go to Settings → Variables → add secret: RESEND_API_KEY = your_key
 *   4. Copy the worker URL and update WORKER_URL in Footer.jsx
 *
 * Resend setup (free at resend.com):
 *   1. Sign up → Add domain → tradiepayau.directory
 *   2. Add the 3 DNS records it shows you in Cloudflare DNS
 *   3. Create API key → paste as RESEND_API_KEY secret above
 *
 * The worker sends FROM: noreply@tradiepayau.directory → TO: OWNER_EMAIL
 */

const SITE        = 'https://tradiepayau.directory'
const FROM        = 'TradiePay AU <noreply@tradiepayau.directory>'
const OWNER_EMAIL = 'thomarse.ben@gmail.com'

const CORS = {
  'Access-Control-Allow-Origin':  SITE,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

function emailHtml(subscriberEmail) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New rate alert signup</title>
  <style>
    body { margin: 0; padding: 0; background: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
    .wrap { max-width: 560px; margin: 32px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 16px rgba(0,0,0,0.08); }
    .header { background: #0f172a; padding: 28px 32px; }
    .logo-row { display: flex; align-items: center; gap: 10px; }
    .logo-icon { width: 40px; height: 40px; background: #2563eb; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
    .logo-text { color: #ffffff; font-size: 18px; font-weight: 700; letter-spacing: -0.3px; }
    .logo-text span { color: #60a5fa; }
    .badge { display: inline-block; background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.6); font-size: 11px; font-weight: 600; padding: 2px 7px; border-radius: 5px; margin-left: 6px; vertical-align: middle; }
    .body { padding: 32px; }
    .pill { display: inline-block; background: #eff6ff; color: #2563eb; font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 20px; margin-bottom: 16px; }
    h1 { margin: 0 0 8px; font-size: 20px; font-weight: 700; color: #0f172a; line-height: 1.3; }
    .sub { margin: 0 0 24px; font-size: 14px; color: #64748b; line-height: 1.6; }
    .card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px 20px; margin-bottom: 24px; }
    .card-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #94a3b8; margin-bottom: 4px; }
    .card-value { font-size: 15px; font-weight: 600; color: #0f172a; }
    .divider { height: 1px; background: #e2e8f0; margin: 0 32px; }
    .footer { padding: 24px 32px; background: #f8fafc; }
    .footer p { margin: 0; font-size: 12px; color: #94a3b8; line-height: 1.6; }
    .footer a { color: #2563eb; text-decoration: none; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="header">
      <div class="logo-row">
        <div class="logo-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
        </div>
        <div>
          <div class="logo-text">Tradie<span>Pay</span><span class="badge">AU</span></div>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="pill">Rate Alert Signup</div>
      <h1>New subscriber</h1>
      <p class="sub">Someone just signed up for rate change alerts on <a href="${SITE}" style="color:#2563eb;text-decoration:none;">tradiepayau.directory</a>.</p>
      <div class="card">
        <div class="card-label">Email address</div>
        <div class="card-value">${subscriberEmail}</div>
      </div>
      <div class="card">
        <div class="card-label">Signed up</div>
        <div class="card-value">${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney', dateStyle: 'medium', timeStyle: 'short' })} AEST</div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="footer">
      <p>This notification was sent to you because you own <a href="${SITE}">tradiepayau.directory</a>.<br/>Independent comparison of mobile card payment systems for Australian tradies.</p>
    </div>
  </div>
</body>
</html>`
}

export default {
  async fetch(request, env) {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS })
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 })
    }

    let email = ''
    try {
      const body = await request.json()
      email = (body.email || '').trim().toLowerCase()
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400, headers: { 'Content-Type': 'application/json', ...CORS }
      })
    }

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400, headers: { 'Content-Type': 'application/json', ...CORS }
      })
    }

    // Send via Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [OWNER_EMAIL],
        subject: `New rate alert signup — ${email}`,
        html: emailHtml(email),
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return new Response(JSON.stringify({ error: 'Email send failed' }), {
        status: 500, headers: { 'Content-Type': 'application/json', ...CORS }
      })
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200, headers: { 'Content-Type': 'application/json', ...CORS }
    })
  },
}
