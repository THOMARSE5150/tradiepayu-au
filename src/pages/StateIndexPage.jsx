import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import FaqSection from '../components/FaqSection'
import NotFoundPage from './NotFoundPage'
import { TRADES_META } from '../data/tradesMeta'
import { STATE_MAP, STATES } from '../data/states'

const SITE = 'https://tradiepayau.directory'

const TRADE_ICONS = {
  electricians:     '⚡',
  plumbers:         '🔧',
  builders:         '🏗️',
  glaziers:         '🪟',
  roofers:          '🏠',
  painters:         '🖌️',
  cleaners:         '🧹',
  landscapers:      '🌿',
  hvac:             '❄️',
  carpenters:       '🪚',
  concreters:       '🧱',
  tilers:           '🟦',
  'gas-fitters':    '🔥',
  fencers:          '🪵',
  plasterers:       '🪣',
  'pool-builders':  '🏊',
  'pest-controllers': '🐛',
  welders:          '⚙️',
}

export default function StateIndexPage() {
  const { stateSlug } = useParams()
  const state = STATE_MAP[stateSlug]

  if (!state) return <NotFoundPage />

  const leadCity = state.cities[0]
  const city2    = state.cities[1]

  const title       = `Best EFTPOS for Tradies in ${state.name} (2026)`
  const description = `Compare card payment options for tradies in ${leadCity}${city2 ? `, ${city2}` : ''} and across ${state.abbr}. All 18 trades covered — lowest rates, SIM connectivity, same-day settlement.`
  const canonical   = `/states/${stateSlug}`

  const faqs = [
    {
      q: `What is the best EFTPOS for tradies in ${state.name}?`,
      a: `Zeller Terminal 1 with the Optus SIM plan is the top pick for most tradies in ${state.name}. At 1.4% in-person, same-day settlement, and SIM coverage across ${state.cities.slice(0, 3).join(', ')}, it covers the widest range of ${state.abbr} job sites. ${state.notes}`,
    },
    {
      q: `Do I need a SIM terminal for tradie work in ${state.name}?`,
      a: `Yes — customer WiFi is unavailable on new estate sites, commercial mechanical rooms, and many regional ${state.abbr} locations. Zeller Terminal 1's Optus SIM works independently of any site WiFi, covering ${state.cities.join(', ')} and surrounding areas.`,
    },
    {
      q: `How do I register as a tradesperson in ${state.name}?`,
      a: `Trade licences in ${state.name} are issued by ${state.regulator}. You do not need a separate payment licence — just your trade licence and an ABN to open a merchant account with Zeller, Square, or Stripe.`,
    },
    {
      q: `What is the surcharging rule for tradies in ${state.abbr}?`,
      a: `Tradies can pass card processing fees on to customers, but the surcharge must not exceed the actual cost of acceptance. Most tradies in ${state.name} absorb the 1.4% Zeller rate rather than adding surcharge friction to invoices.`,
    },
  ]

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: title,
      description,
      url: `${SITE}${canonical}`,
      datePublished: '2026-01-15',
      author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
      publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `EFTPOS Payment Guides for Tradies in ${state.name}`,
      description,
      url: `${SITE}${canonical}`,
      provider: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
      areaServed: [
        {
          '@type': 'AdministrativeArea',
          name: state.name,
          address: { '@type': 'PostalAddress', addressRegion: state.abbr, addressCountry: 'AU' },
        },
        ...state.cities.map(city => ({ '@type': 'City', name: city })),
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'By State', item: `${SITE}/states` },
        { '@type': 'ListItem', position: 3, name: state.name, item: `${SITE}${canonical}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'By State', href: '/trades' },
    { label: state.name },
  ]

  return (
    <>
      <Meta
        title={title}
        description={description}
        canonical={canonical}
        ogType="website"
        geoRegion={`AU-${state.abbr}`}
        geoPlacename={`${leadCity}, ${state.name}`}
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-brand-dark via-brand-dark/90 to-slate-900" />
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">State Guide</span>
            <span>·</span><span>All 18 Trades</span>
            <span>·</span><span>Updated March 2026</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">{title}</h1>
          <p className="hero-sub">
            Covering {state.cities.slice(0, 4).join(', ')} and across {state.name}.{' '}
            Regulated by {state.regulator}.
          </p>
          <nav className="jump-links">
            <a href="#trades">All Trades</a>
            <a href="#coverage">Coverage</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      {/* All 18 trades */}
      <section id="trades" className="section container-page">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-brand-dark mb-2"
        >
          EFTPOS guides for every trade in {state.name}
        </motion.h2>
        <p className="text-slate-500 text-sm mb-6">
          Select your trade for a {state.abbr}-specific breakdown — recommended terminal, rate, coverage, and regulator info.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {TRADES_META.map((trade, i) => (
            <motion.div
              key={trade.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
            >
              <Link
                to={`/trades/${trade.slug}/${stateSlug}`}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border border-slate-100 hover:border-brand-blue hover:shadow-sm transition-all text-center group h-full"
              >
                <span className="text-2xl">{TRADE_ICONS[trade.slug] || '🔨'}</span>
                <span className="text-xs font-semibold text-slate-600 group-hover:text-brand-blue transition-colors leading-tight">
                  {trade.label}
                </span>
                <span className="text-[10px] text-slate-400 mt-auto">{trade.rate} rate</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Coverage + regulator */}
      <section id="coverage" className="section section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-4"
          >
            Coverage in {state.name}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="lg-light rounded-2xl p-5">
              <h3 className="font-semibold text-brand-dark mb-2 text-sm">Optus SIM coverage</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Zeller Terminal 1's Optus SIM covers {state.cities.join(', ')} and surrounding areas.{' '}
                {state.notes}
              </p>
            </div>
            <div className="lg-light rounded-2xl p-5">
              <h3 className="font-semibold text-brand-dark mb-2 text-sm">Licensing &amp; regulatory body</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Trades in {state.name} are regulated by <strong>{state.regulator}</strong>.
                An ABN is sufficient to open a merchant account — no additional payment licence required.
              </p>
            </div>
            <div className="lg-light rounded-2xl p-5 sm:col-span-2">
              <h3 className="font-semibold text-brand-dark mb-3 text-sm">Cities and regions served</h3>
              <div className="flex flex-wrap gap-2">
                {state.cities.map(city => (
                  <span key={city} className="text-xs font-medium px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-600">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={faqs} title={`FAQ — Tradies in ${state.name}`} />

      {/* Other states */}
      <section className="section container-page">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">Other states</h2>
        <div className="flex flex-wrap gap-2">
          {STATES.filter(s => s.slug !== stateSlug).map(s => (
            <Link
              key={s.slug}
              to={`/states/${s.slug}`}
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 border border-slate-200 rounded-lg hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              {s.name} ({s.abbr})
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
