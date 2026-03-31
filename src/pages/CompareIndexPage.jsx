import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import providers from '../data/providers.json'

const SITE = 'https://tradiepayau.directory'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Provider Comparisons' },
]

// All combinations of 2 providers
function combos(ps) {
  const out = []
  for (let i = 0; i < ps.length; i++)
    for (let j = i + 1; j < ps.length; j++)
      out.push([ps[i], ps[j]])
  return out
}

const PAIRS = combos(providers)

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'EFTPOS Provider Comparisons for Australian Tradies (2026)',
    description: 'Side-by-side comparisons of Zeller, Square, Stripe, Tyro, and Shift4 for Australian tradies. Rates, hardware, SIM connectivity, and settlement speed.',
    url: `${SITE}/compare`,
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'EFTPOS Provider Comparisons',
    itemListElement: PAIRS.map(([p1, p2], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${p1.name} vs ${p2.name} for Tradies`,
      url: `${SITE}/compare/${p1.id}-vs-${p2.id}`,
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Comparisons', item: `${SITE}/compare` },
    ],
  },
]

function rateLabel(p) {
  if (!p.fees.in_person_percent) return 'Quote'
  const s = `${p.fees.in_person_percent}%`
  return p.fees.in_person_fixed_cents ? `${s} + $${(p.fees.in_person_fixed_cents / 100).toFixed(2)}` : s
}

export default function CompareIndexPage() {
  return (
    <>
      <Meta
        title="EFTPOS Provider Comparisons for Australian Tradies (2026)"
        description="Compare Zeller, Square, Stripe, Tyro, and Shift4 side-by-side. Rates, SIM connectivity, offline mode, and settlement speed for Australian tradies."
        canonical="/compare"
        ogType="website"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-brand-dark via-brand-dark/90 to-slate-900" />
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Head-to-Head</span>
            <span>·</span><span>All {PAIRS.length} combinations</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            EFTPOS Provider Comparisons for Tradies
          </h1>
          <p className="hero-sub">
            Side-by-side rates, hardware, SIM connectivity, offline mode, and settlement speed.
            Pick any two providers to compare.
          </p>
        </div>
      </header>

      {/* Quick provider reference */}
      <section className="section container-page">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">Quick rate reference</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {providers.map(p => (
            <Link
              key={p.id}
              to={`/providers/${p.id}`}
              className="flex flex-col gap-1.5 p-4 bg-white border border-slate-200 rounded-2xl hover:border-brand-blue hover:shadow-sm transition-all group"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ background: p.logo_colour }}
              >
                {p.logo_text}
              </div>
              <p className="font-bold text-brand-dark text-sm group-hover:text-brand-blue transition-colors">{p.name}</p>
              <p className="text-lg font-bold text-brand-blue">{rateLabel(p)}</p>
              <p className="text-[11px] text-slate-400 leading-tight">{p.best_for[0]}</p>
            </Link>
          ))}
        </div>

        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">All comparisons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PAIRS.map(([p1, p2], i) => {
            const winner = p1.score_overall >= p2.score_overall ? p1 : p2
            return (
              <motion.div
                key={`${p1.id}-${p2.id}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <Link
                  to={`/compare/${p1.id}-vs-${p2.id}`}
                  className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl hover:border-brand-blue hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-1.5 flex-1 min-w-0">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0" style={{ background: p1.logo_colour }}>{p1.logo_text}</div>
                    <span className="font-semibold text-sm text-brand-dark truncate">{p1.name}</span>
                    <span className="text-slate-300 text-xs font-bold flex-shrink-0">vs</span>
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0" style={{ background: p2.logo_colour }}>{p2.logo_text}</div>
                    <span className="font-semibold text-sm text-brand-dark truncate">{p2.name}</span>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="text-[10px] text-slate-400">Winner</p>
                    <p className="text-xs font-bold text-brand-blue">{winner.name}</p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-page max-w-xl text-center">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Looking for trade-specific advice?</h2>
          <p className="text-slate-500 text-sm mb-6">
            Browse guides tailored to your trade — electricians, plumbers, builders, and 15 more.
          </p>
          <Link to="/trades" className="btn-primary">Browse by trade →</Link>
        </div>
      </section>
    </>
  )
}
