import { Link } from 'react-router-dom'
import { PROVIDERS, TRADES, relatedTrades, otherProviders } from '../data/siteLinks'

export default function RelatedLinks({ slug, type }) {
  const isProvider = type === 'provider'

  const providerLinks = isProvider ? otherProviders(slug) : PROVIDERS
  const tradeLinks    = isProvider ? TRADES : relatedTrades(slug)

  return (
    <section className="section section-alt container-page">
      <h2 className="text-xl font-bold text-brand-dark mb-6">Related Pages</h2>

      {/* Providers */}
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
          {isProvider ? 'Compare other providers' : 'All providers'}
        </p>
        <div className="flex flex-wrap gap-2">
          {providerLinks.map(p => (
            <Link
              key={p.slug}
              to={`/providers/${p.slug}`}
              className="inline-flex flex-col items-start px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm hover:border-brand-blue hover:shadow-sm transition-all group"
            >
              <span className="font-semibold text-brand-dark group-hover:text-brand-blue transition-colors">{p.label}</span>
              <span className="text-xs text-slate-400 mt-0.5">{p.note}</span>
            </Link>
          ))}
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-500 hover:border-slate-400 transition-all"
          >
            Compare all →
          </Link>
        </div>
      </div>

      {/* Trades */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
          {isProvider ? 'All trades' : 'Related trades'}
        </p>
        <div className="flex flex-wrap gap-2">
          {tradeLinks.map(t => (
            <Link
              key={t.slug}
              to={`/trades/${t.slug}`}
              className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:text-brand-blue hover:border-brand-blue transition-all"
            >
              Best EFTPOS for {t.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
