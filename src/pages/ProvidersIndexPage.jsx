import { Link } from 'react-router-dom'
import providers from '../data/providers.json'
import ProviderCard from '../components/ProviderCard'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'

const SITE = 'https://tradiepayau.directory'
const jsonLd = {
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
}


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
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&h=560&fit=crop&crop=center&q=80"
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
            <span>·</span><span>Updated March 2026</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            All EFTPOS Providers for Australian Tradies
          </h1>
          <p className="hero-sub">5 providers reviewed and ranked. Real rates, SIM connectivity, and settlement speed — updated March 2026.</p>
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
    </>
  )
}
