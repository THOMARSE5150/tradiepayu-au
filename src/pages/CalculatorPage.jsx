import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import CostCalculator from '../components/CostCalculator'
import { Link } from 'react-router-dom'

const SITE = 'https://tradiepayau.directory'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'EFTPOS Cost Calculator' },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'EFTPOS Cost Calculator for Australian Tradies',
    description: 'Compare monthly EFTPOS costs across Zeller, Square, Stripe, and Tyro. Enter your monthly card volume and average transaction size to see real monthly costs.',
    url: `${SITE}/calculator`,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Calculator', item: `${SITE}/calculator` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I calculate EFTPOS costs for my tradie business?',
        acceptedAnswer: { '@type': 'Answer', text: 'Enter your monthly card revenue and average transaction value. The calculator works out monthly processing fees, amortised hardware cost, and optional SIM plan cost for each provider — then ranks them cheapest to most expensive for your volume.' },
      },
      {
        '@type': 'Question',
        name: 'Which EFTPOS provider is cheapest for tradies in Australia?',
        acceptedAnswer: { '@type': 'Answer', text: 'For most tradies, Zeller Terminal 1 is the cheapest option at 1.4% with no fixed per-transaction fee. At $5,000/month in card volume, Zeller costs approximately $70/month in processing fees — lower than Square (1.6%), Stripe (1.7% + $0.10), or Tyro (quote-based). Use the calculator above to check your specific volume.' },
      },
      {
        '@type': 'Question',
        name: 'Should I include the SIM plan cost in my EFTPOS calculation?',
        acceptedAnswer: { '@type': 'Answer', text: "Yes, if you work on sites without reliable WiFi. Zeller's Optus SIM plan costs $15/month and provides mobile connectivity independent of customer WiFi. For most tradie environments — new estates, switchboard rooms, underground — the SIM is a practical necessity, not an optional extra." },
      },
    ],
  },
]

export default function CalculatorPage() {
  return (
    <>
      <Meta
        title="EFTPOS Cost Calculator for Australian Tradies (2026)"
        description="Compare monthly EFTPOS costs for Zeller, Square, Stripe, and Tyro. Enter your card volume and transaction size — see exactly what each provider costs per month."
        canonical="/calculator"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-brand-dark via-brand-dark/90 to-slate-900" />
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Free Tool</span>
            <span>·</span><span>Updated March 2026</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            EFTPOS Cost Calculator for Tradies
          </h1>
          <p className="hero-sub">
            Enter your monthly card volume to compare real monthly costs across Zeller, Square, Stripe, and Tyro.
            Hardware amortised over your chosen period. No sign-up required.
          </p>
        </div>
      </header>

      <CostCalculator />

      <section className="section container-page max-w-2xl">
        <h2 className="text-xl font-bold text-brand-dark mb-4">How the calculator works</h2>
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p>
            <strong className="text-brand-dark">Processing cost</strong> — your monthly card revenue × the provider's in-person rate, plus any fixed per-transaction fee (Stripe charges $0.10 per transaction).
          </p>
          <p>
            <strong className="text-brand-dark">Hardware cost</strong> — terminal purchase price divided by your chosen amortisation period. Zeller Terminal 1 is $99; Square Terminal is $329; Stripe Reader M2 is $69. Tyro uses lease pricing (shown as $0 for payment links).
          </p>
          <p>
            <strong className="text-brand-dark">SIM cost</strong> — Zeller's optional Optus SIM plan is $15/month. Included when the checkbox is ticked. For any tradie working on sites without reliable WiFi, this is effectively a required expense.
          </p>
          <p className="text-xs text-slate-400 pt-2 border-t border-slate-100">
            Rates verified March 2026. Shift4 uses a surcharging model (customer pays the fee, merchant cost is $0) and is excluded from this comparison. Always confirm current pricing at provider websites before signing up.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link to="/providers/zeller" className="flex flex-col gap-1 p-4 bg-white border border-slate-200 rounded-2xl hover:border-brand-blue hover:shadow-sm transition-all group">
            <span className="text-xs font-bold text-brand-blue">Cheapest rate</span>
            <span className="font-semibold text-brand-dark group-hover:text-brand-blue transition-colors text-sm">Zeller full review →</span>
          </Link>
          <Link to="/providers/square" className="flex flex-col gap-1 p-4 bg-white border border-slate-200 rounded-2xl hover:border-brand-blue hover:shadow-sm transition-all group">
            <span className="text-xs font-bold text-slate-500">Best offline</span>
            <span className="font-semibold text-brand-dark group-hover:text-brand-blue transition-colors text-sm">Square full review →</span>
          </Link>
          <Link to="/compare/zeller-vs-square" className="flex flex-col gap-1 p-4 bg-white border border-slate-200 rounded-2xl hover:border-brand-blue hover:shadow-sm transition-all group">
            <span className="text-xs font-bold text-slate-500">Head-to-head</span>
            <span className="font-semibold text-brand-dark group-hover:text-brand-blue transition-colors text-sm">Zeller vs Square →</span>
          </Link>
        </div>
      </section>
    </>
  )
}
