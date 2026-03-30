import { Link } from 'react-router-dom'
import { PROVIDERS, TRADES, relatedTrades, otherProviders } from '../data/siteLinks'

export default function RelatedLinks({ slug, type }) {
  const isProvider = type === 'provider'

  const providerLinks = isProvider ? otherProviders(slug) : PROVIDERS
  // For provider pages show 9 trades; for trade pages show same-group related
  const tradeLinks = isProvider ? TRADES.slice(0, 9) : relatedTrades(slug)

  return (
    <section className="section section-alt">
      <div className="container-page">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* Providers */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
              {isProvider ? 'Other providers' : 'All providers'}
            </p>
            <div className="space-y-1">
              {providerLinks.map(p => (
                <Link
                  key={p.slug}
                  to={`/providers/${p.slug}`}
                  className="flex items-center justify-between px-4 py-2.5 bg-white border border-slate-100 rounded-xl hover:border-brand-blue hover:shadow-sm transition-all group"
                >
                  <span className="font-semibold text-sm text-brand-dark group-hover:text-brand-blue transition-colors">{p.label}</span>
                  <span className="text-xs text-slate-400">{p.note}</span>
                </Link>
              ))}
              <Link
                to="/providers"
                className="flex items-center px-4 py-2.5 text-sm font-semibold text-brand-blue hover:underline"
              >
                All provider reviews →
              </Link>
            </div>
          </div>

          {/* Trades */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
              {isProvider ? 'Guides by trade' : 'Related trades'}
            </p>
            <div className="grid grid-cols-2 gap-1">
              {tradeLinks.map(t => (
                <Link
                  key={t.slug}
                  to={`/trades/${t.slug}`}
                  className="px-3 py-2.5 bg-white border border-slate-100 rounded-xl text-sm text-slate-600 hover:text-brand-blue hover:border-brand-blue transition-all truncate"
                >
                  {t.label}
                </Link>
              ))}
            </div>
            <Link
              to="/trades"
              className="inline-flex items-center mt-2 px-3 py-2 text-sm font-semibold text-brand-blue hover:underline"
            >
              All 18 trade guides →
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
