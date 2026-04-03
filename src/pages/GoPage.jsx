import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import providers from '../data/providers.json'
import { affiliateUrl } from '../utils/analytics'

/**
 * /go/:provider — tracked outbound redirect.
 * Swap providers.json affiliate_url values here when formal affiliate
 * links are approved, without touching any other component.
 */
export default function GoPage() {
  const { provider } = useParams()
  const p = providers.find(x => x.id === provider)

  useEffect(() => {
    if (!p) return
    const url = affiliateUrl(p.affiliate_url, provider, 'go')

    // Fire event first, then redirect after 150ms so GA4 has time to flush.
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'outbound_click', {
        provider,
        destination: url,
        page_location: window.location.href,
      })
    }

    const timer = setTimeout(() => window.location.replace(url), 150)
    return () => clearTimeout(timer)
  }, [p, provider])

  if (!p) {
    return (
      <div className="container-page py-20 text-center">
        <p className="text-slate-500 mb-4">Provider not found.</p>
        <Link to="/providers" className="text-brand-blue hover:underline">View all providers →</Link>
      </div>
    )
  }

  return (
    <div className="container-page py-20 text-center">
      <p className="text-slate-500 text-sm">Redirecting to {p.name}…</p>
    </div>
  )
}
