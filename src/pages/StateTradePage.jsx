import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import QuickVerdict from '../components/QuickVerdict'
import ComparisonTable from '../components/ComparisonTable'
import FaqSection from '../components/FaqSection'
import RelatedLinks from '../components/RelatedLinks'
import NotFoundPage from './NotFoundPage'
import { TRADE_MAP } from '../data/tradesMeta'
import { STATE_MAP } from '../data/states'
import siteMeta from '../data/site-meta.json'

const COMPARISON_HEADERS = ['', 'Zeller Terminal 1', 'Square Terminal', 'Stripe Reader M2', 'Tyro']
const COMPARISON_ROWS = [
  { highlight: true, cells: ['In-person rate', '1.4%', '1.6%', '1.7% + $0.10', 'Quote'] },
  { cells: ['Hardware cost', '$99', '$329', '$69', 'Quote'] },
  { cells: ['SIM connectivity', '✓ $15/mo', '✗', '✗', '✗'] },
  { cells: ['Offline mode', '✗', '✓', '✗', '✗'] },
  { cells: ['Settlement', 'Same day', 'Next day', 'Next day', 'Next day'] },
  { cells: ['Monthly fee', '$0', '$0', '$0', '$0'] },
]

// State-specific blog posts for the 9 published combos
const STATE_TRADE_BLOG_MAP = {
  'electricians-nsw': { slug: 'best-eftpos-electricians-nsw-2026', label: 'NSW electricians guide' },
  'electricians-vic': { slug: 'best-eftpos-electricians-vic-2026', label: 'VIC electricians guide' },
  'electricians-qld': { slug: 'best-eftpos-electricians-qld-2026', label: 'QLD electricians guide' },
  'plumbers-nsw':     { slug: 'best-eftpos-plumbers-nsw-2026',     label: 'NSW plumbers guide' },
  'plumbers-vic':     { slug: 'best-eftpos-plumbers-vic-2026',     label: 'VIC plumbers guide' },
  'plumbers-qld':     { slug: 'best-eftpos-plumbers-qld-2026',     label: 'QLD plumbers guide' },
  'builders-nsw':     { slug: 'best-eftpos-builders-nsw-2026',     label: 'NSW builders guide' },
  'builders-vic':     { slug: 'best-eftpos-builders-vic-2026',     label: 'VIC builders guide' },
  'builders-qld':     { slug: 'best-eftpos-builders-qld-2026',     label: 'QLD builders guide' },
  'electricians-wa':  { slug: 'best-eftpos-electricians-wa-2026',  label: 'WA electricians guide' },
  'electricians-sa':  { slug: 'best-eftpos-electricians-sa-2026',  label: 'SA electricians guide' },
  'plumbers-wa':      { slug: 'best-eftpos-plumbers-wa-2026',      label: 'WA plumbers guide' },
  'plumbers-sa':      { slug: 'best-eftpos-plumbers-sa-2026',      label: 'SA plumbers guide' },
  'builders-wa':      { slug: 'best-eftpos-builders-wa-2026',      label: 'WA builders guide' },
  'builders-sa':      { slug: 'best-eftpos-builders-sa-2026',      label: 'SA builders guide' },
  'painters-nsw':     { slug: 'best-eftpos-painters-nsw-2026',     label: 'NSW painters guide' },
  'painters-vic':     { slug: 'best-eftpos-painters-vic-2026',     label: 'VIC painters guide' },
  'painters-qld':     { slug: 'best-eftpos-painters-qld-2026',     label: 'QLD painters guide' },
  'painters-wa':      { slug: 'best-eftpos-painters-wa-2026',      label: 'WA painters guide' },
  'painters-sa':      { slug: 'best-eftpos-painters-sa-2026',      label: 'SA painters guide' },
  'concreters-nsw':   { slug: 'best-eftpos-concreters-nsw-2026',   label: 'NSW concreters guide' },
  'concreters-vic':   { slug: 'best-eftpos-concreters-vic-2026',   label: 'VIC concreters guide' },
  'concreters-qld':   { slug: 'best-eftpos-concreters-qld-2026',   label: 'QLD concreters guide' },
  'concreters-wa':    { slug: 'best-eftpos-concreters-wa-2026',    label: 'WA concreters guide' },
  'concreters-sa':    { slug: 'best-eftpos-concreters-sa-2026',    label: 'SA concreters guide' },
  'roofers-nsw':      { slug: 'best-eftpos-roofers-nsw-2026',      label: 'NSW roofers guide' },
  'roofers-vic':      { slug: 'best-eftpos-roofers-vic-2026',      label: 'VIC roofers guide' },
  'roofers-qld':      { slug: 'best-eftpos-roofers-qld-2026',      label: 'QLD roofers guide' },
  'roofers-wa':       { slug: 'best-eftpos-roofers-wa-2026',       label: 'WA roofers guide' },
  'roofers-sa':       { slug: 'best-eftpos-roofers-sa-2026',       label: 'SA roofers guide' },
  'carpenters-nsw':   { slug: 'best-eftpos-carpenters-nsw-2026',   label: 'NSW carpenters guide' },
  'carpenters-vic':   { slug: 'best-eftpos-carpenters-vic-2026',   label: 'VIC carpenters guide' },
  'carpenters-qld':   { slug: 'best-eftpos-carpenters-qld-2026',   label: 'QLD carpenters guide' },
  'carpenters-wa':    { slug: 'best-eftpos-carpenters-wa-2026',    label: 'WA carpenters guide' },
  'carpenters-sa':    { slug: 'best-eftpos-carpenters-sa-2026',    label: 'SA carpenters guide' },
  'fencers-nsw':      { slug: 'best-eftpos-fencers-nsw-2026',      label: 'NSW fencers guide' },
  'fencers-vic':      { slug: 'best-eftpos-fencers-vic-2026',      label: 'VIC fencers guide' },
  'fencers-qld':      { slug: 'best-eftpos-fencers-qld-2026',      label: 'QLD fencers guide' },
  'fencers-wa':       { slug: 'best-eftpos-fencers-wa-2026',       label: 'WA fencers guide' },
  'fencers-sa':       { slug: 'best-eftpos-fencers-sa-2026',       label: 'SA fencers guide' },
  'tilers-nsw':       { slug: 'best-eftpos-tilers-nsw-2026',       label: 'NSW tilers guide' },
  'tilers-vic':       { slug: 'best-eftpos-tilers-vic-2026',       label: 'VIC tilers guide' },
  'tilers-qld':       { slug: 'best-eftpos-tilers-qld-2026',       label: 'QLD tilers guide' },
  'tilers-wa':        { slug: 'best-eftpos-tilers-wa-2026',        label: 'WA tilers guide' },
  'tilers-sa':        { slug: 'best-eftpos-tilers-sa-2026',        label: 'SA tilers guide' },
  'plasterers-nsw':   { slug: 'best-eftpos-plasterers-nsw-2026',   label: 'NSW plasterers guide' },
  'plasterers-vic':   { slug: 'best-eftpos-plasterers-vic-2026',   label: 'VIC plasterers guide' },
  'plasterers-qld':   { slug: 'best-eftpos-plasterers-qld-2026',   label: 'QLD plasterers guide' },
  'plasterers-wa':    { slug: 'best-eftpos-plasterers-wa-2026',    label: 'WA plasterers guide' },
  'plasterers-sa':    { slug: 'best-eftpos-plasterers-sa-2026',    label: 'SA plasterers guide' },
  'glaziers-nsw':     { slug: 'best-eftpos-glaziers-nsw-2026',     label: 'NSW glaziers guide' },
  'glaziers-vic':     { slug: 'best-eftpos-glaziers-vic-2026',     label: 'VIC glaziers guide' },
  'glaziers-qld':     { slug: 'best-eftpos-glaziers-qld-2026',     label: 'QLD glaziers guide' },
  'glaziers-wa':      { slug: 'best-eftpos-glaziers-wa-2026',      label: 'WA glaziers guide' },
  'glaziers-sa':      { slug: 'best-eftpos-glaziers-sa-2026',      label: 'SA glaziers guide' },
  'cleaners-nsw':     { slug: 'best-eftpos-cleaners-nsw-2026',     label: 'NSW cleaners guide' },
  'cleaners-vic':     { slug: 'best-eftpos-cleaners-vic-2026',     label: 'VIC cleaners guide' },
  'cleaners-qld':     { slug: 'best-eftpos-cleaners-qld-2026',     label: 'QLD cleaners guide' },
  'cleaners-wa':      { slug: 'best-eftpos-cleaners-wa-2026',      label: 'WA cleaners guide' },
  'cleaners-sa':      { slug: 'best-eftpos-cleaners-sa-2026',      label: 'SA cleaners guide' },
}


// City blog posts per state + trade (for the "In your city" link on state trade pages)
const CITY_BLOG_MAP = {
  nsw: {
    electricians: { city: 'Sydney', slug: 'best-eftpos-electricians-sydney-2026' },
    plumbers:     { city: 'Sydney', slug: 'best-eftpos-plumbers-sydney-2026' },
    builders:     { city: 'Sydney', slug: 'best-eftpos-builders-sydney-2026' },
    painters:     { city: 'Sydney', slug: 'best-eftpos-painters-sydney-2026' },
    concreters:   { city: 'Sydney', slug: 'best-eftpos-concreters-sydney-2026' },
    roofers:      { city: 'Sydney', slug: 'best-eftpos-roofers-sydney-2026' },
    carpenters:   { city: 'Sydney', slug: 'best-eftpos-carpenters-sydney-2026' },
    fencers:      { city: 'Sydney', slug: 'best-eftpos-fencers-sydney-2026' },
    tilers:       { city: 'Sydney', slug: 'best-eftpos-tilers-sydney-2026' },
    plasterers:   { city: 'Sydney', slug: 'best-eftpos-plasterers-sydney-2026' },
    glaziers:     { city: 'Sydney', slug: 'best-eftpos-glaziers-sydney-2026' },
    cleaners:     { city: 'Sydney', slug: 'best-eftpos-cleaners-sydney-2026' },
  },
  vic: {
    electricians: { city: 'Melbourne', slug: 'best-eftpos-electricians-melbourne-2026' },
    plumbers:     { city: 'Melbourne', slug: 'best-eftpos-plumbers-melbourne-2026' },
    builders:     { city: 'Melbourne', slug: 'best-eftpos-builders-melbourne-2026' },
    painters:     { city: 'Melbourne', slug: 'best-eftpos-painters-melbourne-2026' },
    concreters:   { city: 'Melbourne', slug: 'best-eftpos-concreters-melbourne-2026' },
    roofers:      { city: 'Melbourne', slug: 'best-eftpos-roofers-melbourne-2026' },
    carpenters:   { city: 'Melbourne', slug: 'best-eftpos-carpenters-melbourne-2026' },
    fencers:      { city: 'Melbourne', slug: 'best-eftpos-fencers-melbourne-2026' },
    tilers:       { city: 'Melbourne', slug: 'best-eftpos-tilers-melbourne-2026' },
    plasterers:   { city: 'Melbourne', slug: 'best-eftpos-plasterers-melbourne-2026' },
    glaziers:     { city: 'Melbourne', slug: 'best-eftpos-glaziers-melbourne-2026' },
    cleaners:     { city: 'Melbourne', slug: 'best-eftpos-cleaners-melbourne-2026' },
  },
  qld: {
    electricians: { city: 'Brisbane', slug: 'best-eftpos-electricians-brisbane-2026' },
    plumbers:     { city: 'Brisbane', slug: 'best-eftpos-plumbers-brisbane-2026' },
    builders:     { city: 'Brisbane', slug: 'best-eftpos-builders-brisbane-2026' },
    painters:     { city: 'Brisbane', slug: 'best-eftpos-painters-brisbane-2026' },
    concreters:   { city: 'Brisbane', slug: 'best-eftpos-concreters-brisbane-2026' },
    roofers:      { city: 'Brisbane', slug: 'best-eftpos-roofers-brisbane-2026' },
    carpenters:   { city: 'Brisbane', slug: 'best-eftpos-carpenters-brisbane-2026' },
    fencers:      { city: 'Brisbane', slug: 'best-eftpos-fencers-brisbane-2026' },
    tilers:       { city: 'Brisbane', slug: 'best-eftpos-tilers-brisbane-2026' },
    plasterers:   { city: 'Brisbane', slug: 'best-eftpos-plasterers-brisbane-2026' },
    glaziers:     { city: 'Brisbane', slug: 'best-eftpos-glaziers-brisbane-2026' },
    cleaners:     { city: 'Brisbane', slug: 'best-eftpos-cleaners-brisbane-2026' },
  },
  wa: {
    electricians: { city: 'Perth', slug: 'best-eftpos-electricians-perth-2026' },
    plumbers:     { city: 'Perth', slug: 'best-eftpos-plumbers-perth-2026' },
    builders:     { city: 'Perth', slug: 'best-eftpos-builders-perth-2026' },
    painters:     { city: 'Perth', slug: 'best-eftpos-painters-perth-2026' },
    concreters:   { city: 'Perth', slug: 'best-eftpos-concreters-perth-2026' },
    roofers:      { city: 'Perth', slug: 'best-eftpos-roofers-perth-2026' },
    carpenters:   { city: 'Perth', slug: 'best-eftpos-carpenters-perth-2026' },
    fencers:      { city: 'Perth', slug: 'best-eftpos-fencers-perth-2026' },
    tilers:       { city: 'Perth', slug: 'best-eftpos-tilers-perth-2026' },
    plasterers:   { city: 'Perth', slug: 'best-eftpos-plasterers-perth-2026' },
    glaziers:     { city: 'Perth', slug: 'best-eftpos-glaziers-perth-2026' },
    cleaners:     { city: 'Perth', slug: 'best-eftpos-cleaners-perth-2026' },
  },
  sa: {
    electricians: { city: 'Adelaide', slug: 'best-eftpos-electricians-adelaide-2026' },
    plumbers:     { city: 'Adelaide', slug: 'best-eftpos-plumbers-adelaide-2026' },
    builders:     { city: 'Adelaide', slug: 'best-eftpos-builders-adelaide-2026' },
    painters:     { city: 'Adelaide', slug: 'best-eftpos-painters-adelaide-2026' },
    concreters:   { city: 'Adelaide', slug: 'best-eftpos-concreters-adelaide-2026' },
    roofers:      { city: 'Adelaide', slug: 'best-eftpos-roofers-adelaide-2026' },
    carpenters:   { city: 'Adelaide', slug: 'best-eftpos-carpenters-adelaide-2026' },
    fencers:      { city: 'Adelaide', slug: 'best-eftpos-fencers-adelaide-2026' },
    tilers:       { city: 'Adelaide', slug: 'best-eftpos-tilers-adelaide-2026' },
    plasterers:   { city: 'Adelaide', slug: 'best-eftpos-plasterers-adelaide-2026' },
    glaziers:     { city: 'Adelaide', slug: 'best-eftpos-glaziers-adelaide-2026' },
    cleaners:     { city: 'Adelaide', slug: 'best-eftpos-cleaners-adelaide-2026' },
  },
}

const SITE = 'https://tradiepayau.directory'

export default function StateTradePage() {
  const { tradeSlug, stateSlug } = useParams()
  const trade = TRADE_MAP[tradeSlug]
  const state = STATE_MAP[stateSlug]

  if (!trade || !state) return <NotFoundPage />

  const leadCity = state.cities[0]
  const city2    = state.cities[1]
  const stateBlogPost = STATE_TRADE_BLOG_MAP[`${tradeSlug}-${stateSlug}`] || null
  const cityPost = CITY_BLOG_MAP[stateSlug]?.[tradeSlug] || null
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
      dateModified: siteMeta.lastVerified,
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
            <span>·</span><span>Updated April 2026</span>
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
        <div className="mt-6">
          <ComparisonTable headers={COMPARISON_HEADERS} rows={COMPARISON_ROWS} />
        </div>
        <div className="mt-5 flex flex-wrap gap-4 text-sm">
          <Link to={`/trades/${tradeSlug}`} className="text-brand-blue font-medium hover:underline">
            Best EFTPOS for {trade.label} — national guide →
          </Link>
          {stateBlogPost && (
            <Link to={`/blog/${stateBlogPost.slug}`} className="text-brand-blue font-medium hover:underline">
              In-depth {stateBlogPost.label} →
            </Link>
          )}
          {cityPost && (
            <Link to={`/blog/${cityPost.slug}`} className="text-brand-blue font-medium hover:underline">
              {cityPost.city} city guide →
            </Link>
          )}
        </div>
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

      {/* Other trades in this state */}
      {(() => {
        const otherTrades = Object.entries(STATE_TRADE_BLOG_MAP)
          .filter(([key]) => key.endsWith(`-${stateSlug}`) && !key.startsWith(`${tradeSlug}-`))
          .map(([, val]) => val)
        if (!otherTrades.length) return null
        return (
          <section className="section-alt py-10">
            <div className="container-page">
              <h2 className="text-lg font-bold text-brand-dark mb-4">More trade guides for {state.name}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {otherTrades.map(({ slug: postSlug, label }) => (
                  <Link key={postSlug} to={`/blog/${postSlug}`}
                    className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-100 rounded-xl hover:border-brand-blue hover:shadow-sm transition-all group"
                  >
                    <span className="text-sm text-slate-600 group-hover:text-brand-blue transition-colors flex-1">{label}</span>
                    <span className="text-xs text-slate-400 group-hover:text-brand-blue flex-shrink-0">→</span>
                  </Link>
                ))}
                <Link to={`/states/${stateSlug}`}
                  className="flex items-center gap-2 px-4 py-3 bg-brand-blue/5 border border-brand-blue/20 rounded-xl hover:bg-brand-blue/10 transition-all"
                >
                  <span className="text-sm font-semibold text-brand-blue flex-1">All {state.name} guides</span>
                  <span className="text-xs text-brand-blue flex-shrink-0">→</span>
                </Link>
              </div>
            </div>
          </section>
        )
      })()}

      <RelatedLinks slug={tradeSlug} type="trade" currentState={stateSlug} />
    </>
  )
}
