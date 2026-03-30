import providers from '../data/providers.json'
import { trackOutbound, affiliateUrl } from '../utils/analytics'

/**
 * Tracked outbound link to a provider's affiliate URL.
 * Fires a GA4 'outbound_click' event and appends UTM params automatically.
 *
 * Props:
 *   providerId  {string}  - matches providers.json id field (e.g. 'zeller')
 *   label       {string}  - click location tag for analytics (e.g. 'page-cta', 'compare-strip')
 *   campaign    {string}  - utm_campaign value (default: 'review')
 *   className   {string}  - pass-through classNames
 *   children    {node}    - button content
 */
export default function AffiliateButton({ providerId, label = 'cta', campaign = 'review', className = '', children }) {
  const p = providers.find(x => x.id === providerId)
  if (!p) return null

  const href = affiliateUrl(p.affiliate_url, providerId, campaign)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackOutbound(providerId, label)}
    >
      {children}
    </a>
  )
}
