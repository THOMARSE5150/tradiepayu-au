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
  if (/^\/glaziers-eftpos/.test(path))   return 'landing_page'
  return 'other'
}

// Extract comparison slug from /compare/zeller-vs-square → zeller_vs_square
function deriveComparison(path) {
  const m = path.match(/^\/compare\/(.+)$/)
  return m ? m[1].replace('-vs-', '_vs_') : undefined
}

// Map label strings to structured location + label fields.
const LABEL_MAP = {
  'hero-primary':     { location: 'hero',        label: 'primary'   },
  'hero-cta':         { location: 'hero',        label: 'secondary' },
  'hero-tertiary':    { location: 'hero',        label: 'secondary' },
  'hero-fallback':    { location: 'hero',        label: 'secondary' },
  'compare-verdict':  { location: 'verdict',     label: 'primary'   },
  'compare-bestfor':  { location: 'cta_bar',     label: 'primary'   },
  'page-cta':         { location: 'cta_bar',     label: 'primary'   },
  'section-nav':      { location: 'section_nav', label: 'primary'   },
  'sticky-cta':       { location: 'sticky',      label: 'primary'   },
  'sticky-bar':       { location: 'sticky',      label: 'primary'   },
  'blog-verdict':     { location: 'blog_cta',    label: 'primary'   },
  'midpage-cta':      { location: 'cta_bar',     label: 'primary'   },
  'midpage-alt-square': { location: 'cta_bar',   label: 'secondary' },
  'bestpick-cta':     { location: 'best_pick',   label: 'primary'   },
  'final-cta':        { location: 'final',       label: 'primary'   },
}

// ─── outbound_affiliate_click — all external provider signup/pricing links ────

/**
 * Fire outbound_affiliate_click for every external provider link click.
 *
 * Accepts the legacy (providerId, labelString) signature used by
 * AffiliateButton — no call-site changes required.
 * Also accepts (providerId, paramsObject) for explicit callers.
 *
 * GA4 parameters fired:
 *   provider      — "zeller" | "square" | "stripe" | "tyro" | "shift4"
 *   page_type     — "home" | "providers" | "compare" | "compare_detail" | "blog" | "landing_page" | "other"
 *   location      — "hero" | "verdict" | "cta_bar" | "section_nav" | "sticky" | "blog_cta"
 *   label         — "primary" | "secondary"
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
    provider:  providerId,
    page_type: params.pageType  ?? derivePageType(path),
    location:  params.location  ?? mapped.location ?? 'unknown',
    label:     params.label     ?? mapped.label    ?? 'primary',
  }
  if (comparison)  event.comparison = comparison
  if (params.slug) event.slug = params.slug

  window.gtag('event', 'outbound_affiliate_click', event)
}

// ─── provider_card_click — internal navigation to a provider review page ──────

/**
 * Fire when a provider card or comparison table link navigates internally to
 * a review page. Separate from outbound_affiliate_click so the full funnel
 * (card_click → review page → affiliate_click) is visible in GA4.
 *
 * @param {string} providerId
 * @param {string} location - 'card' | 'compare_table' | 'compare_table_header' | 'finder_result'
 */
export function trackProviderClick(providerId, location = 'card') {
  gtag('event', 'provider_card_click', {
    provider:  providerId,
    page_type: derivePageType(window.location.pathname),
    location,
  })
}

// ─── compare_cta_click — clicks on links inside comparison tables ─────────────

/**
 * Fire when a user clicks a provider link inside a comparison table.
 *
 * @param {string} providerId
 * @param {string} location - 'table_header' | 'table_cta_row' | 'comparison_table'
 */
export function trackCompareCta(providerId, location = 'comparison_table') {
  gtag('event', 'compare_cta_click', {
    provider:  providerId,
    page_type: derivePageType(window.location.pathname),
    location,
  })
}

// ─── form events ──────────────────────────────────────────────────────────────

/**
 * Fire on first field focus in a form.
 * @param {string} form_id - e.g. 'contact'
 */
export function trackFormStart(form_id) {
  gtag('event', 'form_start', { form_id })
}

/**
 * Fire on successful form submission.
 * @param {string} form_id - e.g. 'contact' | 'blog_capture'
 * @param {object} params  - optional additional params (e.g. { topic })
 */
export function trackFormSubmit(form_id, params = {}) {
  gtag('event', 'form_submit', { form_id, ...params })
}

// ─── finder_complete — ProviderFinder quiz result shown ───────────────────────

/**
 * Fire when the ProviderFinder quiz reaches a recommendation.
 * @param {string} recommended_provider - e.g. 'zeller' | 'square'
 */
export function trackFinderComplete(recommended_provider) {
  gtag('event', 'finder_complete', {
    recommended_provider,
    page_type: derivePageType(window.location.pathname),
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
 * Fire when a user submits the blog email capture form.
 * Delegates to trackFormSubmit for consistency.
 */
export function trackEmailCapture(source = 'unknown') {
  gtag('event', 'form_submit', { form_id: 'blog_capture', source })
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
