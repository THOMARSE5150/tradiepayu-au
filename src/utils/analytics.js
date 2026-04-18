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
  if (/^\/glaziers-eftpos/.test(path))      return 'landing_page'
  if (/^\/electricians-eftpos/.test(path)) return 'landing_page'
  if (/^\/plumbers-eftpos/.test(path))     return 'landing_page'
  if (/^\/builders-eftpos/.test(path))     return 'landing_page'
  if (/^\/cleaners-eftpos/.test(path))     return 'landing_page'
  if (/^\/concreters-eftpos/.test(path))   return 'landing_page'
  if (/^\/roofers-eftpos/.test(path))      return 'landing_page'
  if (path === '/eftpos-rate-guide')        return 'rate_guide'
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
 * Fire on FIRST user interaction with the calculator (focus, preset click,
 * or form-control change). Guarded once-per-session by caller via useRef.
 * @param {'homepage'|'trade_page'|'blog'|'direct'|'unknown'} source
 */
export function trackCalculatorEngage(source) {
  gtag('event', 'calculator_engage', { source: source || 'unknown' })
}

/**
 * Fire when the calculator produces results (on input blur).
 * entry_source is read from sessionStorage (set by entrySource.js) so the
 * event answers "which surface produced this completion?"
 */
export function trackCalculatorUsed({ monthly, avgTx, winner, winnerCost }) {
  let entry_source = 'unknown'
  try { entry_source = sessionStorage.getItem('entry_source') || 'unknown' } catch { /* storage blocked */ }
  gtag('event', 'calculator_used', {
    monthly_revenue:       monthly,
    avg_transaction:       avgTx,
    cheapest_provider:     winner,
    cheapest_monthly_cost: Math.round(winnerCost * 100) / 100,
    entry_source,
  })
}

/**
 * Fire when a user submits the blog email capture form.
 * Delegates to trackFormSubmit for consistency.
 */
export function trackEmailCapture(source = 'unknown') {
  gtag('event', 'form_submit', { form_id: 'blog_capture', source })
}

// ─── hero image split test ────────────────────────────────────────────────────

/**
 * Fire on homepage hero render — records which image variant was shown.
 * @param {'A'|'B'|'C'} variant
 */
export function trackHeroVariantView(variant) {
  gtag('event', 'hero_variant_view', { variant })
}

/**
 * Fire when the homepage primary CTA is clicked during the split test.
 * @param {'A'|'B'|'C'} variant
 */
export function trackHeroCTAClick(variant) {
  gtag('event', 'hero_cta_click', { variant, cta: 'calculator' })
}

// ─── calculator decision layer ────────────────────────────────────────────────

/**
 * Fire once per mount when the decision layer becomes visible (after the
 * user has actually engaged with the calculator).
 */
export function trackDecisionLayerView({ recommended_provider, recommendation_reason, confidence_level }) {
  gtag('event', 'decision_layer_view', {
    recommended_provider,
    recommendation_reason,
    confidence_level,
  })
}

/**
 * Fire each time the resolved recommendation changes (user changes inputs
 * enough to flip which provider is recommended).
 */
export function trackDecisionLayerRecShown({ recommended_provider, recommendation_reason, confidence_level }) {
  gtag('event', 'decision_layer_recommendation_shown', {
    recommended_provider,
    recommendation_reason,
    confidence_level,
  })
}

/**
 * Fire when the user clicks the "Want help choosing" CTA (opens the panel).
 */
export function trackDecisionLayerHelpClick({ recommended_provider, recommendation_reason }) {
  gtag('event', 'decision_layer_help_click', {
    recommended_provider,
    recommendation_reason,
  })
}

// ─── how_tradies_get_paid CTA click ───────────────────────────────────────────

/**
 * Fire when a CTA on /how-tradies-get-paid is clicked. Captures which CTA
 * (hero / card_payid / card_eftpos / mid_page / final), destination, and the
 * feeder source stashed in sessionStorage on page mount.
 *
 * @param {Object} params
 * @param {'hero'|'card_payid'|'card_eftpos'|'mid_page'|'final'} params.cta_position
 * @param {string} params.destination — target route (e.g. '/calculator')
 */
export function trackHtgpCta({ cta_position, destination }) {
  let feeder_source = 'unknown'
  try { feeder_source = sessionStorage.getItem('htgp_source') || 'unknown' } catch { /* storage blocked */ }
  gtag('event', 'htgp_cta_click', {
    page: 'how_tradies_get_paid',
    cta_position,
    destination,
    feeder_source,
  })
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
