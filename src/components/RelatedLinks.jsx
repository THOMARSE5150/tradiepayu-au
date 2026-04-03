import { Link } from 'react-router-dom'
import { PROVIDERS, TRADES, relatedTrades, otherProviders, blogPostsForProvider, blogPostsForTrade, defaultBlogPosts } from '../data/siteLinks'
import { STATES, STATE_MAP } from '../data/states'

// State-specific blog posts for the 9 combos we've published
const STATE_TRADE_BLOG = {
  'electricians-nsw': 'best-eftpos-electricians-nsw-2026',
  'electricians-vic': 'best-eftpos-electricians-vic-2026',
  'electricians-qld': 'best-eftpos-electricians-qld-2026',
  'plumbers-nsw':     'best-eftpos-plumbers-nsw-2026',
  'plumbers-vic':     'best-eftpos-plumbers-vic-2026',
  'plumbers-qld':     'best-eftpos-plumbers-qld-2026',
  'builders-nsw':     'best-eftpos-builders-nsw-2026',
  'builders-vic':     'best-eftpos-builders-vic-2026',
  'builders-qld':     'best-eftpos-builders-qld-2026',
  'electricians-wa':  'best-eftpos-electricians-wa-2026',
  'electricians-sa':  'best-eftpos-electricians-sa-2026',
  'plumbers-wa':      'best-eftpos-plumbers-wa-2026',
  'plumbers-sa':      'best-eftpos-plumbers-sa-2026',
  'builders-wa':      'best-eftpos-builders-wa-2026',
  'builders-sa':      'best-eftpos-builders-sa-2026',
  'painters-nsw':     'best-eftpos-painters-nsw-2026',
  'painters-vic':     'best-eftpos-painters-vic-2026',
  'painters-qld':     'best-eftpos-painters-qld-2026',
  'concreters-nsw':   'best-eftpos-concreters-nsw-2026',
  'concreters-vic':   'best-eftpos-concreters-vic-2026',
  'concreters-qld':   'best-eftpos-concreters-qld-2026',
  'roofers-nsw':      'best-eftpos-roofers-nsw-2026',
  'roofers-vic':      'best-eftpos-roofers-vic-2026',
  'roofers-qld':      'best-eftpos-roofers-qld-2026',
  'painters-wa':      'best-eftpos-painters-wa-2026',
  'painters-sa':      'best-eftpos-painters-sa-2026',
  'concreters-wa':    'best-eftpos-concreters-wa-2026',
  'concreters-sa':    'best-eftpos-concreters-sa-2026',
}

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

  // For trade pages: use trade-specific posts, and prepend state post if one exists
  const stateTradeKey = isTrade && currentState ? `${slug}-${currentState}` : null
  const stateTradeSlug = stateTradeKey ? STATE_TRADE_BLOG[stateTradeKey] : null
  const baseBlogPosts = isProvider ? blogPostsForProvider(slug) : isTrade ? blogPostsForTrade(slug) : defaultBlogPosts()
  const blogPosts = stateTradeSlug
    ? [{ slug: stateTradeSlug, label: `${STATE_MAP[currentState]?.name} ${TRADES.find(t => t.slug === slug)?.label} guide →` }, ...baseBlogPosts]
    : baseBlogPosts

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

        {/* State guides — shown on provider pages */}
        {isProvider && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
              Browse by state
            </p>
            <div className="flex flex-wrap gap-2">
              {STATES.map(s => (
                <Link
                  key={s.slug}
                  to={`/states/${s.slug}`}
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

        {/* Blog guides */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
            From the blog
          </p>
          <div className="space-y-1">
            {blogPosts.map(post => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="flex items-center justify-between px-4 py-2.5 bg-white border border-slate-100 rounded-xl hover:border-brand-blue hover:shadow-sm transition-all group"
              >
                <span className="text-sm text-slate-600 group-hover:text-brand-blue transition-colors">{post.label}</span>
                <span className="text-xs text-slate-400 group-hover:text-brand-blue transition-colors flex-shrink-0 ml-2">→</span>
              </Link>
            ))}
            <Link
              to="/blog"
              className="flex items-center px-4 py-2.5 text-sm font-semibold text-brand-blue hover:underline"
            >
              All guides →
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
