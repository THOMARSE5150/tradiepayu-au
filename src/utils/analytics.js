function gtag(...args) {
  if (typeof window.gtag === 'function') window.gtag(...args)
}

/**
 * Fire a GA4 event for outbound affiliate link clicks.
 * Calls window.gtag directly (not the local wrapper) so the beacon
 * dispatches immediately before navigation occurs.
 * @param {string} providerId  - e.g. 'zeller'
 * @param {string} label       - where on the page the click happened, e.g. 'page-cta', 'compare-strip'
 */
export function trackOutbound(providerId, label = 'cta') {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'click_provider', {
      provider: providerId,
      label,
    })
  }
}

/**
 * Fire when a provider card CTA is clicked.
 * @param {string} providerId
 * @param {string} source - 'home', 'providers-index', etc.
 */
export function trackProviderClick(providerId, source = 'unknown') {
  gtag('event', 'provider_card_click', {
    event_category: 'navigation',
    provider: providerId,
    source,
  })
}

/**
 * Fire when the calculator produces results (on input blur).
 * @param {object} params
 * @param {number} params.monthly   - monthly card revenue $
 * @param {number} params.avgTx     - average transaction $
 * @param {string} params.winner    - cheapest provider id
 * @param {number} params.winnerCost - monthly cost of cheapest option
 */
export function trackCalculatorUsed({ monthly, avgTx, winner, winnerCost }) {
  gtag('event', 'calculator_used', {
    event_category: 'engagement',
    monthly_revenue: monthly,
    avg_transaction: avgTx,
    cheapest_provider: winner,
    cheapest_monthly_cost: Math.round(winnerCost * 100) / 100,
  })
}

/**
 * Fire when a user submits the blog read-capture email form.
 * @param {string} source - pathname of the blog post
 */
export function trackEmailCapture(source = 'unknown') {
  gtag('event', 'email_capture', {
    event_category: 'lead',
    source,
  })
}

/**
 * Append UTM params to a provider's affiliate URL.
 * @param {string} baseUrl    - provider's affiliate_url from providers.json
 * @param {string} providerId - e.g. 'zeller'
 * @param {string} campaign   - e.g. 'review', 'compare', 'trade-guide'
 */
export function affiliateUrl(baseUrl, providerId, campaign = 'review') {
  try {
    const url = new URL(baseUrl)
    url.searchParams.set('utm_source', 'tradiepayau')
    url.searchParams.set('utm_medium', 'referral')
    url.searchParams.set('utm_campaign', campaign)
    url.searchParams.set('utm_content', providerId)
    return url.toString()
  } catch {
    return baseUrl
  }
}
