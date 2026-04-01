import { Link } from 'react-router-dom'

const COMPARES = [
  { slug: 'zeller-vs-square', label: 'Zeller vs Square', sub: '1.4% vs 1.6% · SIM vs offline' },
  { slug: 'zeller-vs-stripe', label: 'Zeller vs Stripe', sub: '1.4% vs 1.7%+$0.10 · SIM vs API' },
  { slug: 'square-vs-stripe', label: 'Square vs Stripe', sub: 'Offline mode vs developer tools' },
  { slug: 'zeller-vs-tyro',   label: 'Zeller vs Tyro',  sub: 'Published rate vs quoted rate' },
]

export default function TradeCompareLinks() {
  return (
    <section className="section-alt">
      <div className="container-page">
        <h2 className="text-lg font-bold text-brand-dark mb-1">Compare providers head-to-head</h2>
        <p className="text-sm text-slate-500 mb-5">Not sure which one to pick? See a full feature-by-feature breakdown.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {COMPARES.map(c => (
            <Link
              key={c.slug}
              to={`/compare/${c.slug}`}
              className="group flex flex-col gap-1 bg-white border border-slate-200 hover:border-brand-blue/40 hover:shadow-sm rounded-xl px-4 py-3.5 transition-all"
            >
              <span className="text-sm font-semibold text-brand-dark group-hover:text-brand-blue transition-colors">{c.label}</span>
              <span className="text-xs text-slate-500">{c.sub}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
