import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import QuickVerdict from '../components/QuickVerdict'
import FaqSection from '../components/FaqSection'
import RelatedLinks from '../components/RelatedLinks'
import NotFoundPage from './NotFoundPage'
import { TRADE_MAP } from '../data/tradesMeta'
import { STATE_MAP } from '../data/states'

const SITE = 'https://tradiepayau.directory'

export default function StateTradePage() {
  const { tradeSlug, stateSlug } = useParams()
  const trade = TRADE_MAP[tradeSlug]
  const state = STATE_MAP[stateSlug]

  if (!trade || !state) return <NotFoundPage />

  const leadCity = state.cities[0]
  const city2    = state.cities[1]
  const title       = `Best EFTPOS for ${trade.label} in ${leadCity} & ${state.abbr} (2026)`
  const description = `Best EFTPOS terminal for ${trade.label.toLowerCase()} in ${leadCity}${city2 ? ` and ${city2}` : ''}, ${state.name}. ${trade.heroSub} No lock-in, same-day settlement.`
  const canonical = `/trades/${tradeSlug}/${stateSlug}`

  const faqs = [
    {
      q: `What is the best EFTPOS for ${trade.label.toLowerCase()} in ${state.name}?`,
      a: `${trade.pick} is the top pick for ${trade.label.toLowerCase()} in ${state.abbr}. ${trade.reason} ${state.notes}`,
    },
    {
      q: `Does ${trade.pick} work in ${state.name}?`,
      a: `Yes. ${state.notes} Zeller's Optus SIM plan covers ${state.cities.slice(0, 3).join(', ')} and most metro and regional areas.`,
    },
    {
      q: `What are the card payment fees for ${trade.label.toLowerCase()} in ${state.abbr}?`,
      a: `Zeller charges ${trade.rate} for in-person tap/chip/swipe payments — the lowest flat rate available in Australia. No monthly fee on standard plans. The Zeller Terminal 1 with SIM plan costs $99 upfront and $15/month for the Optus data SIM.`,
    },
    {
      q: `Do I need a licence to take card payments as a tradie in ${state.name}?`,
      a: `No — there is no payment-specific licence requirement. You need your trade licence (regulated by ${state.regulator}) and an ABN to set up a merchant account with any EFTPOS provider. Zeller, Square, and Stripe all approve accounts online with just an ABN.`,
    },
    {
      q: `How quickly do card payments settle for ${trade.label.toLowerCase()} in ${state.abbr}?`,
      a: `Zeller settles same-day to a Zeller Transaction Account, or next business day to an external bank account. For sole-trader ${trade.label.toLowerCase()} in ${state.abbr}, same-day settlement means funds are available to cover materials purchased the same afternoon. Square settles next business day by default.`,
    },
    {
      q: `Can ${trade.label.toLowerCase()} in ${state.name} use their phone as an EFTPOS terminal?`,
      a: `Yes — Zeller Tap to Pay turns any iPhone or Android into a card reader at ${trade.rate} with no hardware cost. It uses your phone's mobile data, so it works wherever you have signal. The Zeller Terminal 1 with SIM ($99) is the upgrade for ${leadCity} tradies who need printed receipts or work in buildings with poor phone signal.`,
    },
    {
      q: `What is the cheapest way for a ${trade.label.toLowerCase().replace(/s$/, '')} in ${leadCity} to accept card payments?`,
      a: `Zeller Tap to Pay is the cheapest start — $0 hardware, ${trade.rate} per transaction, no monthly fee. At higher volume (roughly $5,000+/month), Zeller Terminal 1 with SIM ($99 + $15/month) becomes cost-effective because the SIM removes the reliance on variable phone signal at ${leadCity} job sites.`,
    },
  ]

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      name: title,
      description,
      image: { '@type': 'ImageObject', url: `https://images.unsplash.com/${trade.heroImage}?w=1200&h=630&fit=crop&crop=center&q=80`, width: 1200, height: 630 },
      url: `${SITE}${canonical}`,
      datePublished: '2026-01-15',
      dateModified: '2026-03-31',
      author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
      publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `EFTPOS Payment Solutions for ${trade.label} in ${state.name}`,
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
      audience: { '@type': 'BusinessAudience', audienceType: `${trade.label} businesses in ${state.name}` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'By Trade', item: `${SITE}/trades` },
        { '@type': 'ListItem', position: 3, name: `Best EFTPOS for ${trade.label}`, item: `${SITE}/trades/${tradeSlug}` },
        { '@type': 'ListItem', position: 4, name: state.name, item: `${SITE}${canonical}` },
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
    { label: 'By Trade', href: '/trades' },
    { label: `Best EFTPOS for ${trade.label}`, href: `/trades/${tradeSlug}` },
    { label: state.name },
  ]

  return (
    <>
      <Meta
        title={title}
        description={description}
        canonical={canonical}
        ogType="article"
        geoRegion={`AU-${state.abbr}`}
        geoPlacename={`${leadCity}, ${state.name}`}
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={`https://images.unsplash.com/${trade.heroImage}?w=900&h=560&fit=crop&crop=center&q=80`}
            alt=""
            fetchPriority="high"
            className="w-full h-full object-cover"
            onError={e => { e.currentTarget.style.opacity = '0' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">State Guide</span>
            <span>·</span><span>Updated March 2026</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">{title}</h1>
          <p className="hero-sub">{trade.heroSub} Covering {state.cities.slice(0, 3).join(', ')} and across {state.abbr}.</p>
          <nav className="jump-links">
            <a href="#verdict">Top Pick</a>
            <a href="#coverage">Coverage</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <QuickVerdict
        pick={trade.pick}
        rate={trade.rate}
        hardware={trade.hardware}
        reason={trade.reason}
        providerSlug={trade.providerSlug}
      />

      <section id="verdict" className="section container-page">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-brand-dark mb-4"
        >
          Best EFTPOS for {trade.label} in {state.name}
        </motion.h2>
        <div className="infobox mb-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>{trade.pick}</strong> is the top pick for {trade.label.toLowerCase()} in {state.abbr}.{' '}
            {trade.reason}{' '}
            {state.notes}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'Rate', value: trade.rate, note: 'In-person tap/chip' },
            { label: 'Hardware', value: trade.hardware, note: 'Outright purchase' },
            { label: 'Settlement', value: 'Same day', note: 'To Zeller account' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="lg-light rounded-2xl p-4 text-center"
            >
              <p className="text-2xl font-bold text-brand-blue">{stat.value}</p>
              <p className="text-sm font-semibold text-brand-dark mt-0.5">{stat.label}</p>
              <p className="text-xs text-slate-400 mt-0.5">{stat.note}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-5 text-sm text-slate-600">
          Want the full trade-specific breakdown?{' '}
          <Link to={`/trades/${tradeSlug}`} className="text-brand-blue font-medium hover:underline">
            Best EFTPOS for {trade.label} — full guide →
          </Link>
        </p>
      </section>

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
            <div className="lg-light rounded-2xl p-4">
              <h3 className="font-semibold text-brand-dark mb-2 text-sm">Optus SIM coverage</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Zeller Terminal 1's Optus SIM covers {state.cities.join(', ')} and surrounding areas.{' '}
                {state.notes}
              </p>
            </div>
            <div className="lg-light rounded-2xl p-4">
              <h3 className="font-semibold text-brand-dark mb-2 text-sm">Regulatory body</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {trade.label} in {state.name} are regulated by <strong>{state.regulator}</strong>.
                An ABN is sufficient to open a merchant account — no additional payment licence required.
              </p>
            </div>
            <div className="lg-light rounded-2xl p-4 sm:col-span-2">
              <h3 className="font-semibold text-brand-dark mb-2 text-sm">Major cities and regions served</h3>
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

      <FaqSection items={faqs} title={`FAQ — ${trade.label} in ${state.name}`} />

      <RelatedLinks slug={tradeSlug} type="trade" currentState={stateSlug} />
    </>
  )
}
