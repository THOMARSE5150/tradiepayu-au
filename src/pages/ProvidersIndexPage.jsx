import { Link } from 'react-router-dom'
import providers from '../data/providers.json'
import ProviderCard from '../components/ProviderCard'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import FaqSection from '../components/FaqSection'

import siteMeta from '../data/site-meta.json'

const SITE = 'https://tradiepayau.directory'

const faqs = [
  {
    q: 'What is the best EFTPOS provider for Australian tradies?',
    a: 'Zeller Terminal 1 with the SIM plan is the top pick for most tradies in 2026. At 1.4% in-person rate, same-day settlement, and an optional Optus SIM for job-site connectivity, it outperforms Square (1.6%), Stripe (1.7% + $0.10), Tyro (quote-based), and Shift4 (contract-based) on total monthly cost for most tradie volumes.',
  },
  {
    q: 'How do I compare EFTPOS providers for my trade?',
    a: 'The key factors for tradies are: in-person rate (lower is better), connectivity (SIM vs WiFi), offline capability (for dead-zone sites), settlement speed (same-day vs next-day), and hardware cost. Zeller leads on rate, SIM, and settlement. Square leads on offline mode. Stripe leads on invoicing and online payments.',
  },
  {
    q: 'Do any EFTPOS providers have no monthly fee?',
    a: 'Yes — Zeller, Square, and Stripe all charge no monthly account fee on standard plans. You pay only when you take a payment. Tyro and Shift4 charge a monthly terminal rental fee. For sole traders and small operators with variable income, a no-monthly-fee provider is the better starting point.',
  },
  {
    q: 'Which EFTPOS provider has the lowest fees in Australia?',
    a: 'Zeller has the lowest published flat in-person rate at 1.4%. Square is 1.6%. Stripe is 1.7% + $0.10 per transaction. Tyro requires a custom quote — their rates can be competitive at high volume. Shift4 passes the fee to the customer (0% merchant cost) via surcharging.',
  },
  {
    q: 'Do I need a contract to get an EFTPOS terminal?',
    a: 'Not with Zeller, Square, or Stripe — all three are no-contract, purchase-hardware-outright providers. Tyro typically requires a minimum term agreement. Shift4 uses a merchant services contract. For most tradies, the no-contract providers are the right choice.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best EFTPOS Providers for Australian Tradies 2026',
    url: `${SITE}/providers`,
    numberOfItems: 5,
    itemListElement: providers.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: `${SITE}/providers/${p.id}`,
    })),
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
  { label: 'All Providers' },
]

const comparisons = [
  { slug: 'zeller-vs-square',  label: 'Zeller vs Square' },
  { slug: 'zeller-vs-stripe',  label: 'Zeller vs Stripe' },
  { slug: 'zeller-vs-tyro',    label: 'Zeller vs Tyro' },
  { slug: 'zeller-vs-shift4',  label: 'Zeller vs Shift4' },
  { slug: 'square-vs-stripe',  label: 'Square vs Stripe' },
  { slug: 'square-vs-tyro',    label: 'Square vs Tyro' },
  { slug: 'square-vs-shift4',  label: 'Square vs Shift4' },
  { slug: 'stripe-vs-tyro',    label: 'Stripe vs Tyro' },
  { slug: 'stripe-vs-shift4',  label: 'Stripe vs Shift4' },
  { slug: 'tyro-vs-shift4',    label: 'Tyro vs Shift4' },
]

export default function ProvidersIndexPage() {
  return (
    <>
      <Meta
        title="All EFTPOS Providers for Australian Tradies (2026)"
        description="Compare all 5 mobile card payment providers for Australian tradies — Zeller, Square, Stripe, Tyro, and Shift4. Real fees, hardware costs, connectivity, and settlement speed."
        canonical="/providers"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=560&fit=crop&crop=center&q=80"
            alt=""
            fetchPriority="high" className="w-full h-full object-cover"
            onError={e => { e.currentTarget.style.opacity = '0' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand-dark/85 to-slate-900/75" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Provider Directory</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            All EFTPOS Providers for Australian Tradies
          </h1>
          <p className="hero-sub">5 providers reviewed and ranked. Real rates, SIM connectivity, and settlement speed — updated April 2026.</p>
        </div>
      </header>

      <section className="section">
        <div className="container-page">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {providers.map((p, i) => (
              <ProviderCard key={p.id} provider={p} featured={p.id === 'zeller'} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-page">
          <h2 className="text-xl font-bold text-brand-dark mb-1">Head-to-Head Comparisons</h2>
          <p className="text-slate-500 text-sm mb-5">Side-by-side breakdowns for the most common decisions.</p>
          <div className="flex flex-wrap gap-2.5">
            {comparisons.map(c => (
              <Link
                key={c.slug}
                to={`/compare/${c.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-brand-dark hover:border-brand-blue hover:text-brand-blue transition-all"
              >
                {c.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title="EFTPOS providers — common questions" />
    </>
  )
}
