/**
 * TradiePay AU — Contact Form Worker
 *
 * Contact form (resilient):
 *  1. Validate → 400/422 on bad input
 *  2. Return 200 immediately (submission accepted)
 *  3. ctx.waitUntil → fire all notifications non-blocking:
 *     a. Admin notification email (Resend)
 *     b. Sender confirmation email (Resend)
 *     c. Owner SMS (Twilio) — needs TWILIO_* secrets + CONTACT_OWNER_SMS var
 *     d. Owner WhatsApp (Twilio, optional — WHATSAPP_ENABLED=true)
 *        Note: outbound business-initiated WhatsApp requires an approved template
 *              or Twilio sandbox. Do not enable in production without template approval.
 *
 * Required secrets (wrangler secret put <NAME>):
 *   RESEND_API_KEY
 *   TWILIO_ACCOUNT_SID
 *   TWILIO_AUTH_TOKEN
 *   TWILIO_FROM_NUMBER        e.g. +1415XXXXXXX (your Twilio number)
 *
 * Env vars — set in wrangler.toml [vars] or as secrets:
 *   CONTACT_OWNER_SMS    = "+61403803700"
 *   WHATSAPP_ENABLED     = "false"
 *   WHATSAPP_TO          = "whatsapp:+61403803700"
 *   TWILIO_WHATSAPP_FROM = "whatsapp:+14155238886"  (sandbox or approved sender)
 *
 * Deploy: wrangler deploy
 */

const ADMIN_EMAIL  = 'hello@tradiepayau.directory'
const FROM_BRANDED = 'TradiePay AU <hello@tradiepayau.directory>'
const SITE_URL     = 'https://tradiepayau.directory'

const CORS = {
  'Access-Control-Allow-Origin':  'https://tradiepayau.directory',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS },
  })
}

// ── Email via Resend ──────────────────────────────────────────────────────────

async function sendEmail(apiKey, payload) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Resend error ${res.status}: ${err}`)
  }
  return res.json()
}

// ── SMS via Twilio ────────────────────────────────────────────────────────────

async function sendSms(env, to, body) {
  const { TWILIO_ACCOUNT_SID: sid, TWILIO_AUTH_TOKEN: token, TWILIO_FROM_NUMBER: from } = env
  if (!sid || !token || !from) throw new Error('Twilio credentials not configured')
  const url = `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${btoa(`${sid}:${token}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ To: to, From: from, Body: body }),
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Twilio SMS error ${res.status}: ${err}`)
  }
  return res.json()
}

// ── WhatsApp via Twilio (optional) ────────────────────────────────────────────
// Requires an approved outbound template or Twilio Sandbox.
// Set WHATSAPP_ENABLED=true only after template approval.

async function sendWhatsApp(env, to, body) {
  const { TWILIO_ACCOUNT_SID: sid, TWILIO_AUTH_TOKEN: token, TWILIO_WHATSAPP_FROM: from } = env
  if (!sid || !token || !from) throw new Error('WhatsApp/Twilio credentials not configured')
  const url = `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${btoa(`${sid}:${token}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ To: to, From: from, Body: body }),
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Twilio WhatsApp error ${res.status}: ${err}`)
  }
  return res.json()
}

// ── Email templates ───────────────────────────────────────────────────────────

function escHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function adminHtml({ name, email, topic, message }) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:system-ui,-apple-system,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:540px;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0">
        <!-- Header -->
        <tr><td style="background:#1a1a2e;padding:24px 32px">
          <p style="margin:0;font-size:13px;font-weight:700;color:#006aff;letter-spacing:0.05em;text-transform:uppercase">TradiePay AU</p>
          <p style="margin:6px 0 0;font-size:18px;font-weight:700;color:#fff">New contact form submission</p>
        </td></tr>
        <!-- Body -->
        <tr><td style="padding:28px 32px">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9">
              <p style="margin:0 0 2px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.06em">Name</p>
              <p style="margin:0;font-size:15px;font-weight:600;color:#0f172a">${escHtml(name)}</p>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9">
              <p style="margin:0 0 2px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.06em">Email</p>
              <p style="margin:0"><a href="mailto:${escHtml(email)}" style="font-size:15px;font-weight:600;color:#006aff;text-decoration:none">${escHtml(email)}</a></p>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9">
              <p style="margin:0 0 2px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.06em">Topic</p>
              <p style="margin:0;font-size:15px;font-weight:600;color:#0f172a">${escHtml(topic || 'General')}</p>
            </td></tr>
            <tr><td style="padding:10px 0">
              <p style="margin:0 0 8px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.06em">Message</p>
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px 16px;font-size:14px;color:#334155;line-height:1.6;white-space:pre-wrap">${escHtml(message)}</div>
            </td></tr>
          </table>
          <p style="margin:20px 0 0;font-size:12px;color:#94a3b8">Reply directly to this email to respond to ${escHtml(name)}.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

function confirmationHtml({ name, topic, message }) {
  const topicDisplay = topic || 'General question'
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:system-ui,-apple-system,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:540px;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0">

        <!-- Header -->
        <tr><td style="background:#1a1a2e;padding:32px 32px 28px">
          <table cellpadding="0" cellspacing="0"><tr>
            <td style="width:36px;height:36px;background:rgba(0,106,255,0.15);border:1px solid rgba(0,106,255,0.3);border-radius:10px;text-align:center;vertical-align:middle;font-size:18px;line-height:36px">⚡</td>
            <td style="padding-left:10px;font-size:15px;font-weight:700;color:rgba(255,255,255,0.75)">TradiePay AU</td>
          </tr></table>
          <p style="margin:18px 0 4px;font-size:22px;font-weight:800;color:#fff;letter-spacing:-0.3px">Message received</p>
          <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.55);line-height:1.5">Hi ${escHtml(name)}, we've got your message and will follow up as soon as possible.</p>
        </td></tr>

        <!-- Message summary -->
        <tr><td style="padding:24px 32px;border-bottom:1px solid #f1f5f9">
          <p style="margin:0 0 14px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.06em">Your message</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:8px 0;border-bottom:1px solid #f8fafc">
              <span style="font-size:12px;color:#94a3b8">Topic</span>
              <span style="float:right;font-size:13px;font-weight:600;color:#0f172a">${escHtml(topicDisplay)}</span>
            </td></tr>
          </table>
          <div style="margin-top:12px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px 16px;font-size:14px;color:#475569;line-height:1.6;white-space:pre-wrap">${escHtml(message)}</div>
        </td></tr>

        <!-- Next steps -->
        <tr><td style="padding:24px 32px;border-bottom:1px solid #f1f5f9">
          <p style="margin:0 0 14px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.06em">Explore while we review</p>
          ${nextStepRow('Compare all providers', 'Zeller, Square, Stripe, Tyro, Shift4 — side by side', `${SITE_URL}/providers`)}
          ${nextStepRow('EFTPOS cost calculator', 'Enter your monthly card volume and see real costs', `${SITE_URL}/calculator`)}
          ${nextStepRow('Zeller vs Square vs Stripe', '3-way comparison with real cost tables', `${SITE_URL}/blog/zeller-vs-square-vs-stripe-eftpos-tradies-2026`)}
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:20px 32px;background:#f8fafc">
          <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.6">
            You're receiving this because you submitted the contact form at
            <a href="${SITE_URL}/contact" style="color:#006aff;text-decoration:none">tradiepayau.directory/contact</a>.
            Reply to this email or contact us at
            <a href="mailto:hello@tradiepayau.directory" style="color:#006aff;text-decoration:none">hello@tradiepayau.directory</a>.
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

function nextStepRow(title, sub, href) {
  return `<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px">
    <tr><td style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:12px 14px">
      <a href="${href}" style="text-decoration:none;display:block">
        <p style="margin:0 0 2px;font-size:13px;font-weight:600;color:#0f172a">${title}</p>
        <p style="margin:0;font-size:12px;color:#94a3b8">${sub}</p>
      </a>
    </td></tr>
  </table>`
}

// ── Rate alert email templates ────────────────────────────────────────────────

function rateAlertWelcomeHtml({ email }) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:system-ui,-apple-system,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:540px;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0">

        <!-- Header -->
        <tr><td style="background:#1a1a2e;padding:32px 32px 28px">
          <table cellpadding="0" cellspacing="0"><tr>
            <td style="width:36px;height:36px;background:rgba(0,106,255,0.15);border:1px solid rgba(0,106,255,0.3);border-radius:10px;text-align:center;vertical-align:middle;font-size:18px;line-height:36px">⚡</td>
            <td style="padding-left:10px;font-size:15px;font-weight:700;color:rgba(255,255,255,0.75)">TradiePay AU</td>
          </tr></table>
          <p style="margin:18px 0 4px;font-size:22px;font-weight:800;color:#fff;letter-spacing:-0.3px">You're on the list</p>
          <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.55);line-height:1.5">We'll let you know when any provider changes their rates or hardware pricing.</p>
        </td></tr>

        <!-- What you'll get -->
        <tr><td style="padding:24px 32px;border-bottom:1px solid #f1f5f9">
          <p style="margin:0 0 14px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.06em">What rate alerts look like</p>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px 16px">
            <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#0f172a">Example: Zeller lowers in-person rate to 1.3%</p>
            <p style="margin:0;font-size:13px;color:#475569;line-height:1.5">Zeller has updated their standard in-person transaction fee from 1.4% to 1.3%, effective immediately for all new and existing merchants. Hardware pricing unchanged at $99.</p>
          </div>
          <p style="margin:12px 0 0;font-size:12px;color:#94a3b8">We only email when something meaningful changes — no fluff, no marketing.</p>
        </td></tr>

        <!-- CTAs -->
        <tr><td style="padding:24px 32px;border-bottom:1px solid #f1f5f9">
          <p style="margin:0 0 14px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.06em">While you wait</p>
          ${nextStepRow('Compare all providers', 'Zeller, Square, Stripe, Tyro, Shift4 — side by side', `${SITE_URL}/providers`)}
          ${nextStepRow('EFTPOS cost calculator', 'See real monthly costs at your card volume', `${SITE_URL}/calculator`)}
          ${nextStepRow('Zeller vs Square vs Stripe', '3-way comparison with real cost tables', `${SITE_URL}/blog/zeller-vs-square-vs-stripe-eftpos-tradies-2026`)}
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:20px 32px;background:#f8fafc">
          <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.6">
            You signed up for rate alerts at
            <a href="${SITE_URL}" style="color:#006aff;text-decoration:none">tradiepayau.directory</a>.
            Questions? Reply to this email or contact
            <a href="mailto:hello@tradiepayau.directory" style="color:#006aff;text-decoration:none">hello@tradiepayau.directory</a>.
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

// ── Contact notifications (non-blocking, each failure logged independently) ───

async function sendContactNotifications(env, { name, email, topic, message }) {
  const topicLabel = topic || 'General'
  const preview    = message.length > 100 ? message.slice(0, 100) + '…' : message

  // 1. Admin notification email
  if (env.RESEND_API_KEY) {
    try {
      await sendEmail(env.RESEND_API_KEY, {
        from:     'TradiePay AU <noreply@tradiepayau.directory>',
        to:       [ADMIN_EMAIL],
        reply_to: email,
        subject:  `Contact: ${topicLabel} — ${name}`,
        html:     adminHtml({ name, email, topic, message }),
      })
      console.log('[BEN-CONTACT] admin email sent')
    } catch (err) {
      console.error('[BEN-CONTACT] admin email failed:', err.message)
    }

    // 2. Sender confirmation email
    try {
      await sendEmail(env.RESEND_API_KEY, {
        from:    FROM_BRANDED,
        to:      [email],
        subject: 'We received your TradiePay AU message',
        html:    confirmationHtml({ name, topic, message }),
      })
      console.log('[BEN-CONTACT] confirmation email sent')
    } catch (err) {
      console.error('[BEN-CONTACT] confirmation email failed:', err.message)
    }
  } else {
    console.error('[BEN-CONTACT] RESEND_API_KEY not set — emails skipped')
  }

  // 3. Owner SMS
  if (env.CONTACT_OWNER_SMS) {
    const smsBody = `[TradiePay Contact]\nTopic: ${topicLabel}\nFrom: ${name} <${email}>\n"${preview}"`
    try {
      await sendSms(env, env.CONTACT_OWNER_SMS, smsBody)
      console.log('[BEN-CONTACT] owner sms sent')
    } catch (err) {
      console.error('[BEN-CONTACT] owner sms failed:', err.message)
    }
  } else {
    console.log('[BEN-CONTACT] owner sms skipped — CONTACT_OWNER_SMS not set')
  }

  // 4. Owner WhatsApp (optional — requires WHATSAPP_ENABLED=true + approved template)
  if (env.WHATSAPP_ENABLED === 'true') {
    if (env.WHATSAPP_TO) {
      const waBody = `[TradiePay Contact]\nTopic: ${topicLabel}\nFrom: ${name} <${email}>\n"${preview}"`
      try {
        await sendWhatsApp(env, env.WHATSAPP_TO, waBody)
        console.log('[BEN-CONTACT] whatsapp sent')
      } catch (err) {
        console.error('[BEN-CONTACT] whatsapp failed:', err.message)
      }
    } else {
      console.error('[BEN-CONTACT] whatsapp skipped — WHATSAPP_TO not set')
    }
  } else {
    console.log('[BEN-CONTACT] whatsapp skipped')
  }
}

// ── Handlers ──────────────────────────────────────────────────────────────────

async function handleContact(request, env, ctx) {
  let data
  try {
    data = await request.json()
  } catch {
    return json({ error: 'Invalid JSON' }, 400)
  }

  const { name, email, topic, message } = data
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return json({ error: 'Missing required fields' }, 422)
  }

  console.log('[BEN-CONTACT] submission accepted', { topic: topic || 'General' })

  // Return success immediately; notifications fire in the background
  ctx.waitUntil(sendContactNotifications(env, { name, email, topic, message }))

  return json({ ok: true })
}

async function handleRateAlerts(request, env) {
  let data
  try {
    data = await request.json()
  } catch {
    return json({ error: 'Invalid JSON' }, 400)
  }

  const { email } = data
  if (!email?.trim()) {
    return json({ error: 'Email is required' }, 422)
  }

  if (!env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY secret not set')
    return json({ error: 'Server configuration error' }, 500)
  }

  try {
    await sendEmail(env.RESEND_API_KEY, {
      from:    FROM_BRANDED,
      to:      [email],
      subject: 'Rate alert confirmed — TradiePay AU',
      html:    rateAlertWelcomeHtml({ email }),
    })

    await sendEmail(env.RESEND_API_KEY, {
      from:    'TradiePay AU <noreply@tradiepayau.directory>',
      to:      [ADMIN_EMAIL],
      subject: `New rate alert signup: ${email}`,
      html:    `<p style="font-family:sans-serif">New rate alert signup: <strong>${escHtml(email)}</strong></p>`,
    })

    return json({ ok: true })
  } catch (err) {
    console.error('Rate alert email failed:', err.message)
    return json({ error: 'Failed to send email' }, 500)
  }
}

// ── Entry point ───────────────────────────────────────────────────────────────

export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS })
    }
    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405)
    }

    const url = new URL(request.url)
    if (url.pathname === '/rate-alerts') {
      return handleRateAlerts(request, env)
    }

    return handleContact(request, env, ctx)
  },
}
