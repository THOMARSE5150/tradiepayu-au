/**
 * Fire a GA4 event for outbound affiliate link clicks.
 * @param {string} providerId  - e.g. 'zeller'
 * @param {string} label       - where on the page the click happened, e.g. 'page-cta', 'compare-strip'
 */
export function trackOutbound(providerId, label = 'cta') {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'outbound_click', {
      event_category: 'affiliate',
      provider: providerId,
      label,
    })
  }
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
