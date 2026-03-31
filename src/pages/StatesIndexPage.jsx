import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import { STATES } from '../data/states'

const SITE = 'https://tradiepayau.directory'

const STATE_FLAGS = { nsw: '🔵', vic: '🟣', qld: '🟡', wa: '🟠', sa: '🔴', tas: '🟢' }

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'By State' },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Best EFTPOS for Tradies by State — Australia (2026)',
    description: 'State-by-state EFTPOS guides for Australian tradies. Find the best card payment setup for your trade in NSW, VIC, QLD, WA, SA, or TAS.',
    url: `${SITE}/states`,
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'By State', item: `${SITE}/states` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Australian State EFTPOS Guides',
    itemListElement: STATES.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `Best EFTPOS for Tradies in ${s.name}`,
      url: `${SITE}/states/${s.slug}`,
    })),
  },
]

export default function StatesIndexPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Tradies by State — Australia (2026)"
        description="State-by-state EFTPOS guides for Australian tradies. All 18 trades covered in NSW, VIC, QLD, WA, SA, and TAS — rates, SIM coverage, and local regulator info."
        canonical="/states"
        ogType="website"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-brand-dark via-brand-dark/90 to-slate-900" />
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">State Guides</span>
            <span>·</span><span>All 6 States · 18 Trades Each</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            Best EFTPOS for Tradies — by State
          </h1>
          <p className="hero-sub">
            Coverage, regulators, and top picks for every Australian state.
            Select your state for trade-specific payment guides.
          </p>
        </div>
      </header>

      <section className="section container-page">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STATES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
            >
              <Link
                to={`/states/${s.slug}`}
                className="flex flex-col gap-3 p-5 bg-white border border-slate-200 rounded-2xl hover:border-brand-blue hover:shadow-md transition-all group h-full"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-2xl">{STATE_FLAGS[s.slug]}</span>
                    <p className="font-bold text-brand-dark text-lg mt-1 group-hover:text-brand-blue transition-colors">
                      {s.name}
                    </p>
                    <p className="text-xs font-bold text-brand-blue">{s.abbr}</p>
                  </div>
                  <span className="flex-shrink-0 text-xs font-semibold text-white bg-brand-blue px-2 py-1 rounded-lg">
                    18 trades
                  </span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">{s.notes}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {s.cities.slice(0, 3).map(city => (
                    <span key={city} className="text-[11px] font-medium px-2 py-0.5 bg-slate-50 border border-slate-200 rounded text-slate-500">
                      {city}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-1">
                  <span className="text-xs text-slate-400">{s.regulator}</span>
                  <span className="text-xs font-semibold text-brand-blue group-hover:underline">
                    View guides →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-page max-w-2xl text-center">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Not sure which state applies?</h2>
          <p className="text-slate-500 text-sm mb-6">
            Browse all 18 trades nationally, or compare providers side-by-side to find the best rate for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/trades" className="btn-primary">Browse by trade →</Link>
            <Link to="/providers" className="btn-secondary">Compare providers →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
