import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, X, Zap, Shield, Wifi, TrendingDown } from 'lucide-react'
import providers from '../data/providers.json'
import CostCalculator from '../components/CostCalculator'
import ProviderFinder from '../components/ProviderFinder'
import FaqSection from '../components/FaqSection'
import ComparisonTable from '../components/ComparisonTable'
import ProviderComparison from '../components/ProviderComparison'
import Meta from '../components/Meta'
import HeroTradeSelector from '../components/HeroTradeSelector'
import AffiliateButton from '../components/AffiliateButton'
import { STATES } from '../data/states'

const SITE_URL = 'https://tradiepayau.directory'

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'TradiePay AU',
    url: SITE_URL,
    description: 'Independent comparison of EFTPOS and mobile payment providers for Australian tradies.',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/providers/{search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'TradiePay AU',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg`, width: 512, height: 512 },
    description: 'Independent comparison site for EFTPOS and mobile card payment systems for Australian tradies.',
    foundingDate: '2025',
    areaServed: { '@type': 'Country', name: 'Australia' },
    contactPoint: { '@type': 'ContactPoint', contactType: 'editorial', email: 'hello@tradiepayau.directory', areaServed: 'AU', availableLanguage: 'en-AU' },
    knowsAbout: ['EFTPOS terminals', 'mobile card payments', 'tradie payments', 'merchant services', 'payment processing Australia'],
    sameAs: [],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best EFTPOS for Australian Tradies',
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
      { '@type': 'Question', name: 'What is the best EFTPOS for tradies in Australia?', acceptedAnswer: { '@type': 'Answer', text: 'Zeller Terminal 1 with the SIM plan is the top pick for most tradies in 2026. At 1.4% in-person rate, same-day settlement, and SIM connectivity that works independently of customer WiFi, it covers the widest range of tradie scenarios.' } },
      { '@type': 'Question', name: 'Which EFTPOS has the lowest fees for tradies?', acceptedAnswer: { '@type': 'Answer', text: "Zeller has the lowest published flat-rate in-person fee at 1.4%. Square is 1.6%, Stripe is 1.7% + $0.10." } },
      { '@type': 'Question', name: 'Do tradies need a SIM-enabled terminal?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, for most tradie work. Customer WiFi is unreliable on job sites. A SIM-enabled terminal like Zeller Terminal 1 works on Optus mobile data independently of any site WiFi.' } },
      { '@type': 'Question', name: 'Can tradies take card payments offline?', acceptedAnswer: { '@type': 'Answer', text: "Square Terminal supports offline payments — cards are accepted with no connectivity, then processed when you reconnect within 24 hours." } },
    ],
  },
]

const tableRows = providers.map(p => ({
  id: p.id,
  label: p.name,
  highlight: p.id === 'zeller',
  cells: [
    <Link to={`/providers/${p.id}`} className="hover:text-brand-blue transition-colors">
      <strong>{p.name}</strong>
      {p.id === 'zeller' && <span className="ml-2 inline-block px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded text-xs font-semibold">Top pick</span>}
    </Link>,
    p.fees.in_person_percent ? `${p.fees.in_person_percent}%` : 'Quote',
    p.hardware[0]?.price_aud ? `$${p.hardware[0].price_aud}` : 'Rental',
    p.sim_plan.available   ? <Check size={14} className="text-green-600" /> : <X size={14} className="text-slate-300" />,
    p.offline_mode.available ? <Check size={14} className="text-green-600" /> : <X size={14} className="text-slate-300" />,
    p.settlement.same_day_available
      ? <span className="text-green-700 font-semibold text-xs">Same day</span>
      : p.settlement.standard_days != null ? `${p.settlement.standard_days}d` : '—',
  ],
}))

const heroStats = [
  { icon: TrendingDown, label: 'Lowest rate',  value: '1.4%' },
  { icon: Zap,          label: 'Settlement',   value: 'Same day' },
  { icon: Shield,       label: 'Monthly fee',  value: '$0' },
  { icon: Wifi,         label: 'SIM plan',     value: 'From $15/mo' },
]

const trades = [
  { label: 'Electricians', href: '/trades/electricians', icon: '⚡' },
  { label: 'Plumbers',     href: '/trades/plumbers',     icon: '🔧' },
  { label: 'Builders',     href: '/trades/builders',     icon: '🏗️' },
  { label: 'Glaziers',     href: '/trades/glaziers',     icon: '🪟' },
  { label: 'Roofers',      href: '/trades/roofers',      icon: '🏠' },
  { label: 'Painters',     href: '/trades/painters',     icon: '🖌️' },
  { label: 'Cleaners',     href: '/trades/cleaners',     icon: '🧹' },
  { label: 'Landscapers',  href: '/trades/landscapers',  icon: '🌿' },
  { label: 'HVAC',         href: '/trades/hvac',         icon: '❄️' },
]

const faqs = [
  { q: 'What is the best EFTPOS for tradies in Australia?', a: 'Zeller Terminal 1 with the SIM plan is the top pick for most tradies in 2026. At 1.4% in-person rate, same-day settlement, and SIM connectivity that works independently of customer WiFi, it covers the widest range of tradie scenarios. Square Terminal is the best backup for zero-signal job sites due to its offline mode.' },
  { q: 'Which EFTPOS has the lowest fees for tradies?', a: "Zeller has the lowest published flat-rate in-person fee at 1.4%. Square is 1.6%, Stripe is 1.7% + $0.10. Tyro's Payment Links are 1.4% including GST, but in-person rates require a quote." },
  { q: 'Do tradies need a SIM-enabled terminal?', a: 'Yes, for most tradie work. Customer WiFi is unreliable, unavailable on new estates, and non-existent in commercial mechanical rooms, underground, or mid-renovation sites. A SIM-enabled terminal like Zeller Terminal 1 works on Optus mobile data independently of any site WiFi.' },
  { q: 'Can tradies take card payments offline?', a: "Square Terminal supports offline payments — cards are accepted with no connectivity, then processed when you reconnect within 24 hours. There's a risk of later decline, but it's the best option for zero-signal sites. Zeller, Stripe, and Tyro all require active connectivity." },
  { q: 'Is surcharging legal for tradies in Australia?', a: 'Tradies can pass on card processing fees as a surcharge, but the surcharge must not exceed the actual cost of acceptance. Excessive surcharging is banned by ASIC/ACCC. Most tradies absorb the 1.4% at Zeller rates rather than adding surcharge friction to their invoices.' },
  { q: 'What is the best EFTPOS for emergency call-outs?', a: 'For emergency work like glaziers, plumbers, and electricians, you need a payment system that works at any hour without WiFi. Zeller Terminal 1 with SIM (Optus, $15/mo) is the primary pick. Square Terminal with offline mode is the backup for known dead zones.' },
]

export default function Home() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Australian Tradies (2026) — Zeller vs Square vs Stripe"
        description="Compare the best EFTPOS for Australian tradies. Zeller (1.4%), Square, and Stripe compared on fees, portability, offline mode, and getting paid on-site — updated April 2026."
        canonical="/"
        jsonLd={jsonLd}
      />

      {/* ── Hero ── */}
      <section className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=700&fit=crop&crop=center&q=80"
            alt=""
            fetchPriority="high"
            className="w-full h-full object-cover"
            onError={e => { e.currentTarget.style.opacity = '0' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand-dark/85 to-slate-900/75" />
          <div className="absolute top-0 left-0 w-80 h-80 bg-brand-blue/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        <div className="container-page relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter leading-[1.08] max-w-2xl">
              Best EFTPOS for Australian Tradies
            </h1>
            <p className="hero-sub">
              5 providers compared on fees, connectivity, and settlement speed — updated April 2026.
            </p>

            {/* Top pick callout */}
            <div className="mt-5 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-3.5 py-2">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wide">Top pick</span>
              <span className="text-white/30">·</span>
              <span className="text-white text-sm font-semibold">Zeller Terminal 1</span>
              <span className="text-white/50 text-xs hidden sm:inline">— 1.4% rate, $0 monthly fee, SIM-enabled</span>
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-3 mt-5">
              <AffiliateButton
                providerId="zeller"
                label="hero-primary"
                campaign="homepage"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-blue text-white font-semibold rounded-2xl text-[15px] hover:bg-blue-600 transition-colors shadow-[0_8px_28px_rgba(0,106,255,0.40)]"
              >
                Get Zeller →
              </AffiliateButton>
              <a
                href="#compare"
                className="text-white/70 text-sm font-semibold hover:text-white transition-colors underline underline-offset-2"
              >
                Compare all options ↓
              </a>
            </div>
            <p className="text-white/40 text-xs mt-2.5">
              No signal on site?{' '}
              <AffiliateButton providerId="square" label="hero-fallback" campaign="homepage" className="text-white/60 hover:text-white/90 underline underline-offset-2 transition-colors">
                Square is the best backup for offline payments.
              </AffiliateButton>
            </p>

            <HeroTradeSelector />
          </motion.div>

          {/* Stat pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
            {heroStats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.07, ease: [0.34, 1.4, 0.64, 1] }}
                className="relative overflow-hidden rounded-2xl px-3 sm:px-4 py-3 flex items-center gap-2.5 sm:gap-3 select-none
                  backdrop-blur-xl bg-white/[0.08] border border-white/[0.18]
                  shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1.5px_0_rgba(255,255,255,0.22)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent pointer-events-none rounded-2xl" />
                <s.icon size={17} className="text-white/70 flex-shrink-0 relative z-10" />
                <div className="relative z-10">
                  <p className="text-white/45 text-[11px] leading-none mb-0.5">{s.label}</p>
                  <p className="text-white font-bold text-sm">{s.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section id="compare" className="section">
        <div className="container-page">
          <div className="flex items-end justify-between mb-5 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-brand-dark">Compare EFTPOS Providers</h2>
              <p className="text-slate-500 text-sm mt-1">Green = category winner. Tap any name for the full review.</p>
            </div>
            <Link to="/providers" className="text-sm font-semibold text-brand-blue hover:underline whitespace-nowrap">
              All reviews →
            </Link>
          </div>
          <ProviderComparison />
          <p className="text-xs text-slate-400 mt-3">
            Tyro in-person rate requires a quote. Verify all rates with providers before signing up.
            {' '}Some links on this site may be referral links — this does not affect our editorial rankings.
          </p>
        </div>
      </section>

      {/* ── Use-case scenarios ── */}
      <section className="section-alt py-10 sm:py-12">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-dark mb-1">Which EFTPOS is Right for Your Work?</h2>
          <p className="text-slate-500 text-sm mb-6">Common tradie scenarios — and the right provider for each.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: '🏗️',
                heading: 'Job site work without WiFi',
                body: 'Customer WiFi is unavailable on new estates, commercial sites, and mid-reno houses. You need a SIM-enabled terminal.',
                pick: 'Zeller',
                pickId: 'zeller',
                why: '1.4% · Optus SIM · $0/mo fee',
              },
              {
                icon: '📵',
                heading: 'Zero signal / underground / no coverage',
                body: 'SIM can\'t help in basement car parks, concrete voids, or remote rural properties. Offline mode is the only option.',
                pick: 'Square',
                pickId: 'square',
                why: 'Accepts cards offline, syncs on reconnect',
              },
              {
                icon: '⚡',
                heading: 'Same-day settlement for material runs',
                body: 'Emergency call-out complete — need funds in your account before the hardware store closes.',
                pick: 'Zeller',
                pickId: 'zeller',
                why: 'Same-day to Zeller account · next business day external',
              },
              {
                icon: '💻',
                heading: 'Online invoicing, subscriptions, or websites',
                body: 'If your business takes payments online, via a website, or through a CRM integration, Stripe\'s API is unmatched.',
                pick: 'Stripe',
                pickId: 'stripe',
                why: 'Best API · 24/7 support · payment links',
              },
            ].map(s => (
              <div key={s.heading} className="bg-white rounded-2xl border border-slate-100 p-5 flex gap-4">
                <span className="text-2xl flex-shrink-0 mt-0.5">{s.icon}</span>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-brand-dark leading-snug mb-1">{s.heading}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">{s.body}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold text-slate-500">Best pick:</span>
                    <AffiliateButton
                      providerId={s.pickId}
                      label={`usecase-${s.pickId}`}
                      campaign="homepage-usecase"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-blue text-white text-xs font-semibold rounded-xl hover:bg-blue-600 transition-colors"
                    >
                      {s.pick} →
                    </AffiliateButton>
                    <span className="text-[11px] text-slate-400 hidden sm:inline">{s.why}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mid-page CTA ── */}
      <section className="section py-10 sm:py-12">
        <div className="container-page">
          <div className="bg-brand-dark rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
            <div className="flex-1 min-w-0">
              <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">Our top pick for most tradies</p>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Zeller Terminal 1 — lowest rate, SIM-enabled, no lock-in
              </h2>
              <p className="text-slate-400 text-sm mt-1.5">
                1.4% in-person · $0 monthly fee · Optus SIM ($15/mo optional) · Same-day settlement
              </p>
            </div>
            <div className="flex flex-col sm:items-end gap-2.5 flex-shrink-0">
              <AffiliateButton
                providerId="zeller"
                label="midpage-cta"
                campaign="homepage-mid"
                className="inline-flex items-center gap-2 px-5 py-3 bg-brand-blue text-white font-semibold rounded-xl text-sm hover:bg-blue-600 transition-colors whitespace-nowrap"
              >
                Get Zeller →
              </AffiliateButton>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <AffiliateButton providerId="square" label="midpage-alt-square" campaign="homepage-mid" className="hover:text-slate-300 transition-colors">
                  Square
                </AffiliateButton>
                <span>·</span>
                <AffiliateButton providerId="stripe" label="midpage-alt-stripe" campaign="homepage-mid" className="hover:text-slate-300 transition-colors">
                  Stripe
                </AffiliateButton>
                <span>·</span>
                <Link to="/providers" className="hover:text-slate-300 transition-colors">Compare all</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── By trade ── */}
      <section className="section-alt py-10 sm:py-12">
        <div className="container-page">
          <div className="flex items-end justify-between mb-5 gap-4">
            <h2 className="text-2xl font-bold text-brand-dark">Guides by Trade</h2>
            <Link to="/trades" className="text-sm font-semibold text-brand-blue hover:underline whitespace-nowrap">
              All 18 trades →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-9 gap-2">
            {trades.map(t => (
              <Link
                key={t.href}
                to={t.href}
                className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-white border border-slate-100 hover:border-brand-blue hover:shadow-sm transition-all text-center group"
              >
                <span className="text-xl">{t.icon}</span>
                <span className="text-[11px] font-semibold text-slate-600 group-hover:text-brand-blue transition-colors leading-tight">{t.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── By state ── */}
      <section className="section py-10 sm:py-12">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-dark mb-5">Guides by State</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {STATES.map(s => (
              <Link
                key={s.slug}
                to={`/states/${s.slug}`}
                className="flex flex-col gap-1 p-3 rounded-2xl bg-white border border-slate-100 hover:border-brand-blue hover:shadow-sm transition-all group"
              >
                <span className="text-xs font-bold text-brand-blue">{s.abbr}</span>
                <span className="text-sm font-semibold text-brand-dark group-hover:text-brand-blue transition-colors leading-tight">{s.name}</span>
                <span className="text-[11px] text-slate-400 mt-0.5 leading-tight">{s.cities[0]} · {s.cities[1]}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Provider Finder ── */}
      <section className="section">
        <div className="container-page max-w-xl">
          <ProviderFinder />
        </div>
      </section>

      {/* ── Calculator ── */}
      <CostCalculator />

      {/* ── FAQ ── */}
      <div className="section-alt">
        <FaqSection items={faqs} />
      </div>
    </>
  )
}
