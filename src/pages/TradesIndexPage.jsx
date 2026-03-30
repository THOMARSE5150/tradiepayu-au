import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { STATES } from '../data/states'

const SITE = 'https://tradiepayau.directory'
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
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&h=560&fit=crop&crop=center&q=80"
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
            <span>·</span><span>Updated March 2026</span>
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
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Browse by state</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {STATES.map(s => (
              <div key={s.slug} className="bg-white border border-slate-200 rounded-xl p-3">
                <p className="font-semibold text-brand-dark text-sm mb-2">{s.name}</p>
                <div className="space-y-1">
                  {['electricians', 'plumbers', 'builders', 'cleaners', 'glaziers'].map(t => (
                    <Link
                      key={t}
                      to={`/trades/${t}/${s.slug}`}
                      className="block text-xs text-slate-500 hover:text-brand-blue transition-colors capitalize"
                    >
                      {t.replace('-', ' ')}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
