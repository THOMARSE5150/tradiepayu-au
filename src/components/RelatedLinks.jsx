import { Link } from 'react-router-dom'
import { PROVIDERS, TRADES, relatedTrades, otherProviders } from '../data/siteLinks'
import { STATES, STATE_MAP } from '../data/states'

const COMPARE_PAIRS = [
  { slug: 'zeller-vs-square',  label: 'Zeller vs Square' },
  { slug: 'zeller-vs-stripe',  label: 'Zeller vs Stripe' },
  { slug: 'zeller-vs-tyro',    label: 'Zeller vs Tyro' },
  { slug: 'square-vs-stripe',  label: 'Square vs Stripe' },
]

export default function RelatedLinks({ slug, type, currentState }) {
  const isProvider = type === 'provider'
  const isTrade = type === 'trade'

  const providerLinks = isProvider ? otherProviders(slug) : PROVIDERS
  const tradeLinks = isProvider ? TRADES.slice(0, 9) : relatedTrades(slug)

  return (
    <section className="section section-alt">
      <div className="container-page space-y-8">

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

        {/* State guides — shown on all trade pages */}
        {isTrade && slug && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
              {currentState ? 'Other states' : 'Browse by state'}
            </p>
            <div className="flex flex-wrap gap-2">
              {currentState && (
                <Link
                  to={`/states/${currentState}`}
                  className="px-3.5 py-2 bg-brand-blue/5 border border-brand-blue/20 rounded-xl text-sm font-semibold text-brand-blue hover:bg-brand-blue/10 transition-all"
                >
                  All {STATE_MAP[currentState]?.name} trades →
                </Link>
              )}
              {STATES.filter(s => s.slug !== currentState).map(s => (
                <Link
                  key={s.slug}
                  to={`/trades/${slug}/${s.slug}`}
                  className="px-3.5 py-2 bg-white border border-slate-100 rounded-xl text-sm font-medium text-slate-600 hover:text-brand-blue hover:border-brand-blue transition-all"
                >
                  {s.name} <span className="text-slate-400 text-xs">({s.abbr})</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Compare section — shown on trade pages */}
        {isTrade && slug && (() => {
          const tradeLabel = TRADES.find(t => t.slug === slug)?.label || 'tradies'
          return (
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                Provider comparisons for {tradeLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {COMPARE_PAIRS.map(p => (
                  <Link
                    key={p.slug}
                    to={`/compare/${p.slug}`}
                    className="px-3.5 py-2 bg-white border border-slate-100 rounded-xl text-sm font-medium text-slate-600 hover:text-brand-blue hover:border-brand-blue transition-all"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          )
        })()}

      </div>
    </section>
  )
}
