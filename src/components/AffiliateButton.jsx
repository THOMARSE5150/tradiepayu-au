import providers from '../data/providers.json'
import { trackOutbound, affiliateUrl } from '../utils/analytics'
import { haptic } from '../utils/haptic'

/**
 * Tracked outbound link to a provider's affiliate URL.
 * Fires a GA4 'outbound_affiliate_click' event and appends UTM params automatically.
 *
 * Props:
 *   providerId  {string}  - matches providers.json id field (e.g. 'zeller')
 *   label       {string}  - click location tag for analytics (e.g. 'page-cta', 'compare-strip')
 *   campaign    {string}  - utm_campaign value (default: 'review')
 *   intent      {string}  - optional key from provider's urls map (e.g. 'signup', 'pricing', 'hardware', 'invoicing')
 *                           When set, routes to that intent-specific URL instead of the default affiliate_url.
 *   className   {string}  - pass-through classNames
 *   children    {node}    - button content
 */
export default function AffiliateButton({ providerId, label = 'cta', campaign = 'review', intent, className = '', children }) {
  const p = providers.find(x => x.id === providerId)
  if (!p) return null

  const baseUrl = (intent && p.urls?.[intent]) ?? p.affiliate_url
  const href = affiliateUrl(baseUrl, providerId, campaign)

  function handleClick(e) {
    e.preventDefault()
    haptic('medium')
    trackOutbound(providerId, label)
    // Delay navigation 150ms so the GA4 beacon dispatches before the tab opens.
    setTimeout(() => window.open(href, '_blank', 'noopener,noreferrer'), 150)
  }

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
