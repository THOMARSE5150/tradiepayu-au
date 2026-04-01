import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { STATES } from '../data/states'
import FaqSection from '../components/FaqSection'

const FEATURED_GUIDES = [
  { label: 'Best EFTPOS for Electricians', href: '/blog/best-eftpos-electricians-australia-2026' },
  { label: 'Best EFTPOS for Plumbers', href: '/blog/best-eftpos-plumbers-australia-2026' },
  { label: 'Best EFTPOS for Builders', href: '/blog/best-eftpos-builders-australia-2026' },
  { label: 'Best EFTPOS for Painters', href: '/blog/best-eftpos-painters-australia-2026' },
  { label: 'Best EFTPOS for Roofers', href: '/blog/best-eftpos-roofers-australia-2026' },
  { label: 'Best EFTPOS for Concreters', href: '/blog/best-eftpos-concreters-australia-2026' },
  { label: 'Zeller vs Square vs Stripe', href: '/blog/zeller-vs-square-vs-stripe-eftpos-tradies-2026' },
  { label: 'EFTPOS Fees Breakdown', href: '/blog/eftpos-fees-tradies-australia-2026' },
  { label: 'Get Paid Faster', href: '/blog/how-to-get-paid-faster-sole-trader-australia' },
]

const SITE = 'https://tradiepayau.directory'

const faqs = [
  {
    q: 'Do all trades need different EFTPOS setups?',
    a: 'The core setup is the same — Zeller Terminal 1 with SIM is the right starting point for most trades. But the specific challenges vary: electricians and plumbers face dead zones that need Square Terminal backup; builders and concreters deal with new estate connectivity issues; painters and landscapers often work at properties without WiFi. Each trade guide covers the specific scenarios relevant to that trade.',
  },
  {
    q: 'What EFTPOS setup works best for sole-trader tradies?',
    a: 'Zeller Terminal 1 with the Optus SIM plan ($99 hardware + $15/month) is the top pick. It works independently of customer WiFi, settles same-day, and has the lowest in-person rate (1.4%) of any flat-rate provider. For starting out with zero hardware cost, Zeller Tap to Pay uses your phone as a terminal at the same 1.4% rate.',
  },
  {
    q: 'Can tradies accept card payments without WiFi?',
    a: 'Yes — two options: (1) Zeller Terminal 1 with SIM connects via Optus 4G mobile data, independent of any WiFi. (2) Square Terminal offline mode stores payments locally and processes them when signal is restored. For most job sites, the Zeller SIM is sufficient. For underground or zero-signal environments, Square offline mode is the only option.',
  },
  {
    q: 'What is the cheapest EFTPOS option for a tradie just starting out?',
    a: 'Zeller Tap to Pay: $0 hardware, 1.4% rate, no monthly fee. Uses your existing iPhone or Android phone as a card reader. It\'s the fastest way to start accepting card payments — account approval is typically same-day with just an ABN.',
  },
  {
    q: 'Do tradies need a merchant account with their bank?',
    a: 'No — Zeller, Square, and Stripe are independent payment providers that do not require a bank merchant account. They approve accounts online with just an ABN, typically within 24 hours. Bank merchant accounts through major banks take 5–10 business days, require paperwork, and generally charge higher fees for lower volumes.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best EFTPOS by Trade — Australian Tradies 2026',
    url: `${SITE}/trades`,
    numberOfItems: 18,
    itemListElement: [
      ...['electricians','plumbers','builders','carpenters','concreters','roofers','plasterers','tilers','painters','glaziers','fencers','landscapers','pool-builders','cleaners','pest-controllers','gas-fitters','hvac','welders'].map((slug, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE}/trades/${slug}`,
      }))
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
  { label: 'By Trade' },
]

const TRADE_GROUPS = [
  {
    title: 'Electromechanical',
    trades: [
      { label: 'Electricians',    href: '/trades/electricians', icon: '⚡', desc: 'Switchboards, plant rooms, offline backup' },
      { label: 'Plumbers',        href: '/trades/plumbers',     icon: '🔧', desc: 'After-hours, underground, same-day parts' },
      { label: 'Gas Fitters',     href: '/trades/gas-fitters',  icon: '🔥', desc: 'Underground dead zones, emergency call-outs' },
      { label: 'HVAC Technicians',href: '/trades/hvac',         icon: '❄️', desc: 'Commercial rooftop units, emergency service' },
      { label: 'Welders',         href: '/trades/welders',      icon: '⚙️', desc: 'Commercial fabrication, B2B invoicing' },
    ],
  },
  {
    title: 'Construction',
    trades: [
      { label: 'Builders',    href: '/trades/builders',    icon: '🏗️', desc: 'Progress payments, new estates, subcontractors' },
      { label: 'Carpenters',  href: '/trades/carpenters',  icon: '🪚', desc: 'New builds, framing stage, progress billing' },
      { label: 'Concreters',  href: '/trades/concreters',  icon: '🧱', desc: 'Remote estates, large values, materials upfront' },
      { label: 'Roofers',     href: '/trades/roofers',     icon: '🏠', desc: 'Weather events, insurance jobs, large job values' },
      { label: 'Plasterers',  href: '/trades/plasterers',  icon: '🪣', desc: 'Builder sub-contracting, stage billing' },
      { label: 'Tilers',      href: '/trades/tilers',      icon: '🔲', desc: 'Bathroom renos, developer billing, deposits' },
      { label: 'Painters',    href: '/trades/painters',    icon: '🖌️', desc: 'Multi-day jobs, deposits, empty-house WiFi' },
    ],
  },
  {
    title: 'Specialist',
    trades: [
      { label: 'Glaziers',         href: '/trades/glaziers',         icon: '🪟', desc: 'Dead zones, emergency call-outs, two-device strategy' },
      { label: 'Fencers',          href: '/trades/fencers',          icon: '🚧', desc: 'Remote rural sites, large deposits, absent landowners' },
      { label: 'Landscapers',      href: '/trades/landscapers',      icon: '🌿', desc: 'Outdoor sites, deposits, absent-client payments' },
      { label: 'Pool Builders',    href: '/trades/pool-builders',    icon: '🏊', desc: 'High job values, staged payments, compliance hold-points' },
      { label: 'Cleaners',         href: '/trades/cleaners',         icon: '🧹', desc: 'High-frequency jobs, recurring billing, low overhead' },
      { label: 'Pest Controllers', href: '/trades/pest-controllers', icon: '🐛', desc: 'High-frequency jobs, pre-purchase reports, recurring billing' },
    ],
  },
]

export default function TradesIndexPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS by Trade — Australian Tradies (2026)"
        description="Find the best mobile card payment system for your trade. Electricians, plumbers, builders, and 15 more Australian trades — tailored EFTPOS advice for each."
        canonical="/trades"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=560&fit=crop&crop=center&q=80"
            alt=""
            fetchPriority="high" className="w-full h-full object-cover"
            onError={e => { e.currentTarget.style.opacity = '0' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand-dark/85 to-slate-900/75" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Trade Guide</span>
            <span>·</span><span>Updated April 2026</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            Best EFTPOS by Trade
          </h1>
          <p className="hero-sub">18 Australian trades covered. The right payment setup depends on where and how you work.</p>
        </div>
      </header>

      <section className="section">
        <div className="container-page space-y-10">
          {TRADE_GROUPS.map(group => (
            <div key={group.title}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">{group.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {group.trades.map(t => (
                  <Link
                    key={t.href}
                    to={t.href}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-white border border-slate-200 rounded-xl hover:border-brand-blue hover:shadow-sm transition-all group"
                  >
                    <span className="text-2xl flex-shrink-0 mt-0.5">{t.icon}</span>
                    <div>
                      <p className="font-semibold text-brand-dark text-sm group-hover:text-brand-blue transition-colors">{t.label}</p>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed line-clamp-2">{t.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-alt py-10 sm:py-12">
        <div className="container-page">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Featured guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-10">
            {FEATURED_GUIDES.map(g => (
              <Link
                key={g.href}
                to={g.href}
                className="flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl hover:border-brand-blue hover:shadow-sm transition-all group"
              >
                <span className="text-sm font-medium text-slate-700 group-hover:text-brand-blue transition-colors">{g.label}</span>
                <span className="text-slate-300 group-hover:text-brand-blue transition-colors text-xs ml-2">→</span>
              </Link>
            ))}
          </div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Browse by state</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {STATES.map(s => (
              <Link
                key={s.slug}
                to={`/states/${s.slug}`}
                className="block bg-white border border-slate-200 rounded-xl p-3 hover:border-brand-blue hover:shadow-sm transition-all group"
              >
                <p className="font-bold text-brand-blue text-xs mb-1">{s.abbr}</p>
                <p className="font-semibold text-brand-dark text-sm group-hover:text-brand-blue transition-colors leading-tight">{s.name}</p>
                <p className="text-[11px] text-slate-400 mt-1 leading-tight">{s.cities[0]} · {s.cities[1]}</p>
                <p className="text-[10px] text-brand-blue mt-2 font-medium">All 18 trades →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title="EFTPOS for tradies — common questions" />
    </>
  )
}
