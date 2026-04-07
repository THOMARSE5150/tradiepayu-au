// ─── internal helpers ─────────────────────────────────────────────────────────

function gtag(...args) {
  if (typeof window.gtag === 'function') window.gtag(...args)
}

// Derive page_type from URL — avoids passing context at every call site
function derivePageType(path) {
  if (/^\/compare\/.+-vs-.+/.test(path)) return 'compare_detail'
  if (path === '/compare')               return 'compare'
  if (/^\/providers\//.test(path))       return 'providers'
  if (/^\/blog\//.test(path))            return 'blog'
  if (path === '/')                      return 'home'
  return 'other'
}

// Extract comparison slug from /compare/zeller-vs-square → zeller_vs_square
function deriveComparison(path) {
  const m = path.match(/^\/compare\/(.+)$/)
  return m ? m[1].replace('-vs-', '_vs_') : undefined
}

// Map legacy label strings to structured location + label fields.
// Keeps all call sites unchanged while enriching the event payload.
const LABEL_MAP = {
  'compare-verdict':    { location: 'verdict',     label: 'primary'   },
  'compare-bestfor':    { location: 'cta_bar',     label: 'primary'   },
  'page-cta':           { location: 'cta_bar',     label: 'primary'   },
  'section-nav':        { location: 'section_nav', label: 'primary'   },
  'sticky-cta':         { location: 'sticky',      label: 'primary'   },
  'sticky-bar':         { location: 'sticky',      label: 'primary'   },
  'blog-verdict':       { location: 'blog_cta',    label: 'primary'   },
  'hero-tertiary':      { location: 'hero',        label: 'secondary' },
  'hero-fallback':      { location: 'hero',        label: 'secondary' },
  'midpage-cta':        { location: 'cta_bar',     label: 'primary'   },
  'midpage-alt-square': { location: 'cta_bar',     label: 'secondary' },
}

// ─── click_provider — single event for all provider intent signals ─────────────

/**
 * Fire click_provider for every external provider link click.
 *
 * Accepts the legacy (providerId, labelString) signature used by
 * AffiliateButton — no call-site changes required.
 * Also accepts (providerId, paramsObject) for future explicit callers.
 *
 * GA4 parameters fired:
 *   provider      — "zeller" | "square" | "stripe" | "tyro" | "shift4"
 *   page_type     — "home" | "providers" | "compare" | "compare_detail" | "blog" | "other"
 *   location      — "verdict" | "cta_bar" | "hero" | "section_nav" | "sticky" | "blog_cta" | "card"
 *   label         — "primary" | "secondary"
 *   destination   — "external_signup" (always for outbound clicks)
 *   comparison    — "zeller_vs_square" (only on compare detail pages)
 */
export function trackOutbound(providerId, labelOrParams = 'cta') {
  if (typeof window.gtag !== 'function') return

  const path = window.location.pathname
  const isLegacy = typeof labelOrParams === 'string'
  const rawLabel = isLegacy ? labelOrParams : undefined
  const mapped   = rawLabel ? (LABEL_MAP[rawLabel] ?? { location: rawLabel, label: 'primary' }) : {}
  const params   = isLegacy ? {} : labelOrParams

  const comparison = deriveComparison(path)

  const event = {
    provider:    providerId,
    page_type:   params.pageType  ?? derivePageType(path),
    location:    params.location  ?? mapped.location ?? 'unknown',
    label:       params.label     ?? mapped.label    ?? 'primary',
    destination: 'external_signup',
  }
  if (comparison)  event.comparison = comparison
  if (params.slug) event.slug = params.slug

  window.gtag('event', 'click_provider', event)
}

/**
 * Fire when a provider card CTA is clicked (internal navigation to review page).
 * Unified under click_provider so all provider intent is in one event.
 *
 * @param {string} providerId
 * @param {string} source - 'home', 'providers-index', etc.
 */
export function trackProviderClick(providerId, source = 'unknown') {
  gtag('event', 'click_provider', {
    provider:    providerId,
    page_type:   derivePageType(window.location.pathname),
    location:    'card',
    label:       'primary',
    destination: 'internal_review',
    source,
  })
}

// ─── other events ─────────────────────────────────────────────────────────────

/**
 * Fire when the calculator produces results (on input blur).
 */
export function trackCalculatorUsed({ monthly, avgTx, winner, winnerCost }) {
  gtag('event', 'calculator_used', {
    monthly_revenue:       monthly,
    avg_transaction:       avgTx,
    cheapest_provider:     winner,
    cheapest_monthly_cost: Math.round(winnerCost * 100) / 100,
  })
}

/**
 * Fire when a user submits the email capture form.
 */
export function trackEmailCapture(source = 'unknown') {
  gtag('event', 'email_capture', { source })
}

/**
 * Append UTM params to a provider affiliate URL.
 */
export function affiliateUrl(baseUrl, providerId, campaign = 'review') {
  try {
    const url = new URL(baseUrl)
    url.searchParams.set('utm_source',   'tradiepayau')
    url.searchParams.set('utm_medium',   'referral')
    url.searchParams.set('utm_campaign', campaign)
    url.searchParams.set('utm_content',  providerId)
    return url.toString()
  } catch {
    return baseUrl
  }
}
