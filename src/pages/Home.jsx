import { Link } from 'react-router-dom'
import providers from '../data/providers.json'
import ProviderCard from '../components/ProviderCard'
import CostCalculator from '../components/CostCalculator'
import FaqSection from '../components/FaqSection'
import ComparisonTable from '../components/ComparisonTable'

const trades = [
  { label: 'Glaziers', href: '/trades/glaziers', icon: '🪟', desc: 'Dead zones, emergency call-outs, two-device strategy' },
  { label: 'Electricians', href: '/trades/electricians', icon: '⚡', desc: 'Switchboards, plant rooms, offline backup' },
  { label: 'Plumbers', href: '/trades/plumbers', icon: '🔧', desc: 'After-hours, underground, same-day parts' },
  { label: 'Builders', href: '/trades/builders', icon: '🏗️', desc: 'Progress payments, new estates, subcontractors' },
  { label: 'Cleaners', href: '/trades/cleaners', icon: '🧹', desc: 'High-frequency jobs, recurring billing, low overhead' },
  { label: 'Landscapers', href: '/trades/landscapers', icon: '🌿', desc: 'Outdoor sites, deposits, absent-client payments' },
]

const faqs = [
  { q: 'What is the best EFTPOS for tradies in Australia?', a: 'Zeller Terminal 1 with the SIM plan is the top pick for most tradies in 2026. At 1.4% in-person rate, same-day settlement, and SIM connectivity that works independently of customer WiFi, it covers the widest range of tradie scenarios. Square Terminal is the best backup for zero-signal job sites due to its offline mode.' },
  { q: 'Which EFTPOS has the lowest fees for tradies?', a: 'Zeller has the lowest published flat-rate in-person fee at 1.4%. Square is 1.6%, Stripe is 1.7% + $0.10. Tyro\'s Payment Links are 1.4% including GST, but in-person rates require a quote.' },
  { q: 'Do tradies need a SIM-enabled terminal?', a: 'Yes, for most tradie work. Customer WiFi is unreliable, unavailable on new estates, and non-existent in commercial mechanical rooms, underground, or mid-renovation sites. A SIM-enabled terminal like Zeller Terminal 1 works on Optus mobile data independently of any site WiFi.' },
  { q: 'Can tradies take card payments offline?', a: 'Square Terminal supports offline payments — cards are accepted with no connectivity, then processed when you reconnect within 24 hours. There\'s a risk of later decline, but it\'s the best option for zero-signal sites. Zeller, Stripe, and Tyro all require active connectivity.' },
  { q: 'Is surcharging legal for tradies in Australia?', a: 'Tradies can pass on card processing fees as a surcharge, but the surcharge must not exceed the actual cost of acceptance. Excessive surcharging is banned by ASIC/ACCC. Most tradies absorb the 1.4% at Zeller rates rather than adding surcharge friction to their invoices.' },
  { q: 'What is the best EFTPOS for emergency call-outs?', a: 'For emergency work like glaziers, plumbers, and electricians, you need a payment system that works at any hour without WiFi. Zeller Terminal 1 with SIM (Optus, $15/mo) is the primary pick. Square Terminal with offline mode is the backup for known dead zones.' },
]

const tableRows = providers.map(p => ({
  highlight: p.id === 'zeller',
  cells: [
    <><strong>{p.name}</strong>{p.id === 'zeller' && <span className="ml-2 inline-block px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded text-xs font-semibold">Top pick</span>}</>,
    p.fees.in_person_percent ? `${p.fees.in_person_percent}%` : 'Quote',
    p.hardware[0]?.price_aud ? `$${p.hardware[0].price_aud}` : 'Rental',
    p.sim_plan.available ? <span className="text-green-700 font-semibold">✓</span> : <span className="text-slate-400">✗</span>,
    p.offline_mode.available ? <span className="text-green-700 font-semibold">✓</span> : <span className="text-slate-400">✗</span>,
    p.settlement.same_day_available ? <span className="text-green-700 font-semibold">Same day</span> : `${p.settlement.standard_days}d`,
  ]
}))

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container-page">
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Directory</span>
            <span>·</span>
            <span>Updated March 2026</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-3xl">
            Best Mobile Card Payment Systems for Australian Tradies
          </h1>
          <p className="hero-sub">
            5 providers. Real rates. No fluff. Ranked by what matters on the job site — connectivity, fees, and cash flow.
          </p>
          <nav className="jump-links">
            <a href="#compare-all">Compare All</a>
            <a href="#calculator">Cost Calculator</a>
            <a href="#by-trade">By Trade</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </section>

      {/* Provider Cards */}
      <section id="compare-all" className="section container-page">
        <h2 className="text-2xl font-bold text-brand-dark mb-2">Compare All Providers</h2>
        <p className="text-slate-500 mb-8">Ranked by overall value for Australian trades. Verify rates before signing up.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {providers.map(p => (
            <ProviderCard key={p.id} provider={p} featured={p.id === 'zeller'} />
          ))}
        </div>
      </section>

      {/* Comparison Table */}
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

      {/* By Trade */}
      <section id="by-trade" className="section container-page">
        <h2 className="text-2xl font-bold text-brand-dark mb-2">Guides by Trade</h2>
        <p className="text-slate-500 mb-8">Different trades have different payment challenges. Find your trade for specific recommendations.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trades.map(t => (
            <Link
              key={t.href}
              to={t.href}
              className="flex items-start gap-4 bg-white border border-slate-200 rounded-xl p-5 hover:border-brand-blue hover:shadow-sm transition-all"
            >
              <span className="text-2xl">{t.icon}</span>
              <div>
                <h3 className="font-bold text-brand-dark mb-1">{t.label}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{t.desc}</p>
              </div>
            </Link>
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
            { q: 'I work in dead zones / underground', a: 'Square Terminal — offline mode is your only option' },
            { q: 'I want the lowest rate', a: 'Zeller — 1.4% flat, no fixed fee' },
            { q: 'I need to invoice and get paid remotely', a: 'Zeller payment links or Stripe invoicing' },
            { q: 'I want zero upfront cost', a: 'Zeller Tap to Pay — phone only, $0 hardware' },
            { q: 'I have recurring clients (weekly cleans etc)', a: 'Stripe Billing — automated card charges' },
            { q: 'I need same-day settlement', a: 'Zeller (to Zeller account) or Tyro (to Tyro account)' },
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 rounded-xl p-4">
              <p className="font-semibold text-brand-dark text-sm mb-1">If: {item.q}</p>
              <p className="text-sm text-slate-600">→ {item.a}</p>
            </div>
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
