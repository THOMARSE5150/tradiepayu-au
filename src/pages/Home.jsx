import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, X, Zap, Shield, Wifi, TrendingDown, Search, RefreshCw } from 'lucide-react'
import providers from '../data/providers.json'
import ProviderCard from '../components/ProviderCard'
import CostCalculator from '../components/CostCalculator'
import FaqSection from '../components/FaqSection'
import ComparisonTable from '../components/ComparisonTable'
import Meta from '../components/Meta'

const SITE_URL = 'https://tradiepayu-au.up.railway.app'

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TradiePay AU',
    url: SITE_URL,
    description: 'Independent comparison of EFTPOS and mobile payment providers for Australian tradies.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TradiePay AU',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description: 'Independent comparison site for mobile card payment systems for Australian tradies.',
    areaServed: { '@type': 'Country', name: 'Australia' },
    audience: { '@type': 'Audience', audienceType: 'Australian tradies and small business owners' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Mobile Card Payment Systems for Australian Tradies',
    description: 'Independent comparison of EFTPOS and mobile payment providers for Australian tradies — fees, connectivity, settlement speed.',
    url: SITE_URL,
    numberOfItems: providers.length,
    itemListElement: providers.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: `${SITE_URL}/providers/${p.id}`,
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the best EFTPOS for tradies in Australia?', acceptedAnswer: { '@type': 'Answer', text: 'Zeller Terminal 1 with the SIM plan is the top pick for most tradies in 2026. At 1.4% in-person rate, same-day settlement, and SIM connectivity that works independently of customer WiFi, it covers the widest range of tradie scenarios. Square Terminal is the best backup for zero-signal job sites due to its offline mode.' } },
      { '@type': 'Question', name: 'Which EFTPOS has the lowest fees for tradies?', acceptedAnswer: { '@type': 'Answer', text: "Zeller has the lowest published flat-rate in-person fee at 1.4%. Square is 1.6%, Stripe is 1.7% + $0.10. Tyro's Payment Links are 1.4% including GST, but in-person rates require a quote." } },
      { '@type': 'Question', name: 'Do tradies need a SIM-enabled terminal?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, for most tradie work. Customer WiFi is unreliable, unavailable on new estates, and non-existent in commercial mechanical rooms, underground, or mid-renovation sites. A SIM-enabled terminal like Zeller Terminal 1 works on Optus mobile data independently of any site WiFi.' } },
      { '@type': 'Question', name: 'Can tradies take card payments offline?', acceptedAnswer: { '@type': 'Answer', text: "Square Terminal supports offline payments — cards are accepted with no connectivity, then processed when you reconnect within 24 hours. There's a risk of later decline, but it's the best option for zero-signal sites. Zeller, Stripe, and Tyro all require active connectivity." } },
      { '@type': 'Question', name: 'Is surcharging legal for tradies in Australia?', acceptedAnswer: { '@type': 'Answer', text: 'Tradies can pass on card processing fees as a surcharge, but the surcharge must not exceed the actual cost of acceptance. Excessive surcharging is banned by ASIC/ACCC. Most tradies absorb the 1.4% at Zeller rates rather than adding surcharge friction to their invoices.' } },
      { '@type': 'Question', name: 'What is the best EFTPOS for emergency call-outs?', acceptedAnswer: { '@type': 'Answer', text: 'For emergency work like glaziers, plumbers, and electricians, you need a payment system that works at any hour without WiFi. Zeller Terminal 1 with SIM (Optus, $15/mo) is the primary pick. Square Terminal with offline mode is the backup for known dead zones.' } },
    ],
  },
]

const trades = [
  { label: 'Glaziers',     href: '/trades/glaziers',     icon: '🪟', desc: 'Dead zones, emergency call-outs, two-device strategy' },
  { label: 'Electricians', href: '/trades/electricians', icon: '⚡', desc: 'Switchboards, plant rooms, offline backup' },
  { label: 'Plumbers',     href: '/trades/plumbers',     icon: '🔧', desc: 'After-hours, underground, same-day parts' },
  { label: 'Builders',     href: '/trades/builders',     icon: '🏗️', desc: 'Progress payments, new estates, subcontractors' },
  { label: 'Cleaners',     href: '/trades/cleaners',     icon: '🧹', desc: 'High-frequency jobs, recurring billing, low overhead' },
  { label: 'Landscapers',  href: '/trades/landscapers',  icon: '🌿', desc: 'Outdoor sites, deposits, absent-client payments' },
  { label: 'Roofers',      href: '/trades/roofers',      icon: '🏠', desc: 'Weather events, insurance jobs, large job values' },
  { label: 'Painters',     href: '/trades/painters',     icon: '🖌️', desc: 'Multi-day jobs, deposits, empty-house WiFi problem' },
  { label: 'Tilers',       href: '/trades/tilers',       icon: '🔲', desc: 'Bathroom renos, developer billing, deposits' },
  { label: 'Concreters',   href: '/trades/concreters',   icon: '🧱', desc: 'Remote estates, large values, materials upfront' },
  { label: 'Carpenters',   href: '/trades/carpenters',   icon: '🪚', desc: 'New builds, framing stage, progress billing' },
  { label: 'HVAC',         href: '/trades/hvac',         icon: '❄️', desc: 'Commercial rooftop units, emergency service, parts + labour' },
]

const faqs = [
  { q: 'What is the best EFTPOS for tradies in Australia?', a: 'Zeller Terminal 1 with the SIM plan is the top pick for most tradies in 2026. At 1.4% in-person rate, same-day settlement, and SIM connectivity that works independently of customer WiFi, it covers the widest range of tradie scenarios. Square Terminal is the best backup for zero-signal job sites due to its offline mode.' },
  { q: 'Which EFTPOS has the lowest fees for tradies?', a: "Zeller has the lowest published flat-rate in-person fee at 1.4%. Square is 1.6%, Stripe is 1.7% + $0.10. Tyro's Payment Links are 1.4% including GST, but in-person rates require a quote." },
  { q: 'Do tradies need a SIM-enabled terminal?', a: 'Yes, for most tradie work. Customer WiFi is unreliable, unavailable on new estates, and non-existent in commercial mechanical rooms, underground, or mid-renovation sites. A SIM-enabled terminal like Zeller Terminal 1 works on Optus mobile data independently of any site WiFi.' },
  { q: 'Can tradies take card payments offline?', a: "Square Terminal supports offline payments — cards are accepted with no connectivity, then processed when you reconnect within 24 hours. There's a risk of later decline, but it's the best option for zero-signal sites. Zeller, Stripe, and Tyro all require active connectivity." },
  { q: 'Is surcharging legal for tradies in Australia?', a: 'Tradies can pass on card processing fees as a surcharge, but the surcharge must not exceed the actual cost of acceptance. Excessive surcharging is banned by ASIC/ACCC. Most tradies absorb the 1.4% at Zeller rates rather than adding surcharge friction to their invoices.' },
  { q: 'What is the best EFTPOS for emergency call-outs?', a: 'For emergency work like glaziers, plumbers, and electricians, you need a payment system that works at any hour without WiFi. Zeller Terminal 1 with SIM (Optus, $15/mo) is the primary pick. Square Terminal with offline mode is the backup for known dead zones.' },
]

const tableRows = providers.map(p => ({
  highlight: p.id === 'zeller',
  cells: [
    <><strong>{p.name}</strong>{p.id === 'zeller' && <span className="ml-2 inline-block px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded text-xs font-semibold">Top pick</span>}</>,
    p.fees.in_person_percent ? `${p.fees.in_person_percent}%` : 'Quote',
    p.hardware[0]?.price_aud ? `$${p.hardware[0].price_aud}` : 'Rental',
    p.sim_plan.available   ? <Check size={14} className="text-green-600" /> : <X size={14} className="text-slate-300" />,
    p.offline_mode.available ? <Check size={14} className="text-green-600" /> : <X size={14} className="text-slate-300" />,
    p.settlement.same_day_available ? <span className="text-green-700 font-semibold text-xs">Same day</span> : p.settlement.standard_days != null ? `${p.settlement.standard_days}d` : '—',
  ]
}))

const heroStats = [
  { icon: TrendingDown, label: 'Lowest rate', value: '1.4%' },
  { icon: Zap,          label: 'Settlement',  value: 'Same day' },
  { icon: Wifi,         label: 'SIM ready',   value: '$15/mo' },
  { icon: Shield,       label: 'Providers',   value: '5 reviewed' },
]

export default function Home() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Australian Tradies (2026)"
        description="Compare the 5 best mobile card payment systems for Australian tradies. Real rates, SIM connectivity, offline mode, and settlement speed — updated March 2026."
        canonical="/"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="hero relative overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=700&fit=crop&crop=center&q=80"
            alt=""
            className="w-full h-full object-cover"
            onError={e => { e.currentTarget.style.opacity = '0' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand-dark/85 to-slate-900/75" />
          {/* Subtle blue accent glow */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-brand-blue/15 rounded-full blur-3xl" />
          <div className="absolute top-10 right-10 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container-page relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
              <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded-full text-xs font-semibold">Directory</span>
              <span>·</span>
              <span>Updated March 2026</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter leading-[1.08] max-w-3xl">
              Best Mobile Card Payment Systems for Australian Tradies
            </h1>
            <p className="hero-sub">
              5 providers. Real rates. No fluff. Ranked by what matters on the job site — connectivity, fees, and cash flow.
            </p>
          </motion.div>

          {/* Liquid glass stat pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
            {heroStats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28, scale: 0.88 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{ transition: 'box-shadow 0.2s' }}
                className="relative overflow-hidden rounded-2xl px-4 py-3 flex items-center gap-3 cursor-default select-none
                  backdrop-blur-xl backdrop-saturate-[180%]
                  bg-white/[0.08]
                  border border-white/[0.18]
                  shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1.5px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(0,0,0,0.15)]
                  hover:shadow-[0_12px_40px_rgba(0,0,0,0.35),inset_0_1.5px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.2)]"
              >
                {/* Specular sheen overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent pointer-events-none rounded-2xl" />
                <s.icon size={18} className="text-white/75 flex-shrink-0 relative z-10" />
                <div className="relative z-10">
                  <p className="text-white/50 text-xs">{s.label}</p>
                  <p className="text-white font-bold text-sm">{s.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <nav className="jump-links mt-6">
            <Link to="/#compare-all">Compare All</Link>
            <Link to="/#calculator">Cost Calculator</Link>
            <Link to="/#by-trade">By Trade</Link>
            <Link to="/#faq">FAQ</Link>
          </nav>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-slate-50 border-b border-slate-100 py-4">
        <div className="container-page">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-brand-blue flex-shrink-0" />
              <span><strong className="text-slate-700">No paid placements</strong> — rankings based on criteria only</span>
            </div>
            <div className="flex items-center gap-2">
              <Search size={14} className="text-brand-blue flex-shrink-0" />
              <span><strong className="text-slate-700">Independent research</strong> — rates sourced from provider sites</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw size={14} className="text-brand-blue flex-shrink-0" />
              <span><strong className="text-slate-700">Verified March 2026</strong> — <Link to="/about" className="text-brand-blue hover:underline">our methodology →</Link></span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento provider grid */}
      <section id="compare-all" className="section container-page">
        <h2 className="text-2xl font-bold text-brand-dark mb-2">Compare All Providers</h2>
        <p className="text-slate-500 mb-8">Ranked by overall value for Australian trades. Verify rates before signing up.</p>

        {/* Bento grid: featured card spans 2 cols on sm+, others fill */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Zeller — featured, spans 2 cols on lg */}
          <div className="lg:col-span-1">
            <ProviderCard provider={providers[0]} featured={true} index={0} />
          </div>
          {/* Square */}
          <ProviderCard provider={providers[1]} index={1} />
          {/* Stripe */}
          <ProviderCard provider={providers[2]} index={2} />
          {/* Tyro + Shift4 — bottom row */}
          <ProviderCard provider={providers[3]} index={3} />
          <ProviderCard provider={providers[4]} index={4} />
        </div>
      </section>

      {/* Quick comparison table */}
      <section className="section section-alt">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Quick Comparison</h2>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'SIM', 'Offline', 'Settlement']}
            rows={tableRows}
          />
          <p className="text-xs text-slate-400 mt-3">* Tyro in-person rate not publicly listed — requires a quote. Verify all rates with providers before signing up.</p>
        </div>
      </section>

      {/* By trade — bento-style grid */}
      <section id="by-trade" className="section container-page">
        <h2 className="text-2xl font-bold text-brand-dark mb-2">Guides by Trade</h2>
        <p className="text-slate-500 mb-8">Different trades have different payment challenges. Find your trade for specific recommendations.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trades.map((t, i) => (
            <motion.div
              key={t.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
            >
              <Link
                to={t.href}
                className="flex items-start gap-4 lg-light rounded-2xl p-5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,1)] hover:-translate-y-0.5 transition-all h-full"
              >
                <span className="text-2xl">{t.icon}</span>
                <div>
                  <h3 className="font-bold text-brand-dark mb-1">{t.label}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{t.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Calculator */}
      <CostCalculator />

      {/* Decision guide */}
      <section className="section container-page">
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Quick Decision Guide</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { q: 'I work in dead zones / underground',         a: 'Square Terminal — offline mode is your only option' },
            { q: 'I want the lowest rate',                     a: 'Zeller — 1.4% flat, no fixed fee' },
            { q: 'I need to invoice and get paid remotely',    a: 'Zeller payment links or Stripe invoicing' },
            { q: 'I want zero upfront cost',                   a: 'Zeller Tap to Pay — phone only, $0 hardware' },
            { q: 'I have recurring clients (weekly cleans etc)', a: 'Stripe Billing — automated card charges' },
            { q: 'I need same-day settlement',                 a: 'Zeller (to Zeller account) or Tyro (to Tyro account)' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              whileHover={{ y: -2 }}
              className="lg-light rounded-2xl p-4"
            >
              <p className="font-semibold text-brand-dark text-sm mb-1 flex gap-2 items-start">
                <span className="text-slate-400 mt-0.5">If:</span> {item.q}
              </p>
              <p className="text-sm text-brand-blue font-medium">→ {item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <div className="section-alt">
        <FaqSection items={faqs} />
      </div>
    </>
  )
}
