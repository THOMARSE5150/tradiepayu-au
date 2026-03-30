import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, X, ArrowRight } from 'lucide-react'
import providers from '../data/providers.json'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import RelatedLinks from '../components/RelatedLinks'

const SITE = 'https://tradiepayau.directory'

function Cell({ value, positive, className = '' }) {
  if (value === true)  return <span className={`flex items-center gap-1 font-semibold text-green-600 ${className}`}><Check size={14} strokeWidth={2.5} /> Yes</span>
  if (value === false) return <span className={`flex items-center gap-1 text-slate-400 ${className}`}><X size={14} strokeWidth={2.5} /> No</span>
  return <span className={`${positive ? 'text-brand-blue font-semibold' : 'text-brand-dark'} ${className}`}>{value ?? '—'}</span>
}

function CompareRow({ label, v1, v2, pos1, pos2 }) {
  return (
    <div className="grid grid-cols-3 gap-3 py-3 border-b border-slate-100 last:border-0 items-center">
      <span className="text-xs text-slate-500 font-medium">{label}</span>
      <div className="text-sm"><Cell value={v1} positive={pos1} /></div>
      <div className="text-sm"><Cell value={v2} positive={pos2} /></div>
    </div>
  )
}

export default function ComparePage() {
  const { slug } = useParams()
  const parts = (slug || '').split('-vs-')
  const p1 = providers.find(p => p.id === parts[0])
  const p2 = providers.find(p => p.id === parts[1])

  if (!p1 || !p2) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="text-2xl font-bold text-brand-dark mb-3">Comparison not found</h1>
        <p className="text-slate-500 mb-6">Check the URL or browse all providers below.</p>
        <Link to="/providers" className="btn-primary">Browse all providers →</Link>
      </div>
    )
  }

  const title = `${p1.name} vs ${p2.name} for Tradies — Full Comparison (2026)`
  const description = `${p1.name} vs ${p2.name}: side-by-side rates, hardware, SIM connectivity, offline mode, and settlement speed for Australian tradies. Which one is right for your trade?`
  const canonical = `/compare/${slug}`

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Providers', href: '/providers' },
    { label: `${p1.name} vs ${p2.name}` },
  ]

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      name: title,
      description,
      url: `${SITE}${canonical}`,
      author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
      publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Providers', item: `${SITE}/providers` },
        { '@type': 'ListItem', position: 3, name: `${p1.name} vs ${p2.name}`, item: `${SITE}${canonical}` },
      ],
    },
  ]

  const rate1 = p1.fees.in_person_percent ? `${p1.fees.in_person_percent}%` : 'Quote'
  const rate2 = p2.fees.in_person_percent ? `${p2.fees.in_person_percent}%` : 'Quote'
  const hw1 = p1.hardware[0]?.price_aud ? `$${p1.hardware[0].price_aud}` : p1.hardware[0]?.rental ? 'Rental' : '—'
  const hw2 = p2.hardware[0]?.price_aud ? `$${p2.hardware[0].price_aud}` : p2.hardware[0]?.rental ? 'Rental' : '—'
  const sim1 = p1.sim_plan.available ? (p1.sim_plan.cost_monthly_aud ? `$${p1.sim_plan.cost_monthly_aud}/mo` : 'Included') : false
  const sim2 = p2.sim_plan.available ? (p2.sim_plan.cost_monthly_aud ? `$${p2.sim_plan.cost_monthly_aud}/mo` : 'Included') : false
  const settle1 = p1.settlement.same_day_available ? 'Same day' : p1.settlement.standard_days != null ? `${p1.settlement.standard_days}d` : '—'
  const settle2 = p2.settlement.same_day_available ? 'Same day' : p2.settlement.standard_days != null ? `${p2.settlement.standard_days}d` : '—'

  return (
    <>
      <Meta title={title} description={description} canonical={canonical} ogType="article" jsonLd={jsonLd} />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-brand-dark" />
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-brand-blue/15 rounded-full blur-3xl" />
          <div className="absolute top-10 right-10 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Head-to-Head</span>
            <span>·</span><span>Updated March 2026</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            {p1.name} vs {p2.name} for Australian Tradies
          </h1>
          <p className="hero-sub">Side-by-side rates, hardware, connectivity, and settlement. Which one wins for tradies?</p>

          {/* Provider name chips */}
          <div className="flex items-center gap-3 mt-5">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white font-bold text-sm"
              style={{ background: p1.logo_colour }}
            >
              {p1.logo_text} {p1.name}
            </span>
            <span className="text-white/40 font-bold text-lg">vs</span>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white font-bold text-sm"
              style={{ background: p2.logo_colour }}
            >
              {p2.logo_text} {p2.name}
            </span>
          </div>
        </div>
      </header>

      {/* Verdict strip */}
      {(() => {
        const winner  = p1.score_overall >= p2.score_overall ? p1 : p2
        const loser   = winner.id === p1.id ? p2 : p1
        return (
          <div className="bg-white border-b border-slate-100">
            <div className="container-page max-w-2xl py-4 sm:py-5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <span className="flex-shrink-0 text-[11px] font-bold uppercase tracking-widest text-slate-400 hidden sm:block">Verdict</span>
                <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: winner.logo_colour }}>{winner.logo_text}</div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                      <span className="font-bold text-brand-dark text-sm sm:text-[15px]">{winner.name} wins for most tradies</span>
                      <span className="text-xs font-semibold text-brand-blue bg-blue-50 px-1.5 py-0.5 rounded">{winner.score_overall}/10</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">{winner.best_for[0]} · {loser.name} is better for: {loser.best_for[0].toLowerCase()}</p>
                  </div>
                </div>
                <Link to={`/providers/${winner.id}`} className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue border border-brand-blue/25 hover:bg-blue-50 hover:border-brand-blue/50 transition-all px-3.5 py-2 rounded-xl">
                  Full review
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        )
      })()}

      {/* Comparison table */}
      <section className="section">
        <div className="container-page max-w-2xl">
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 gap-3 px-5 py-4 bg-slate-50 border-b border-slate-200">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Feature</span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: p1.logo_colour }}>{p1.logo_text}</div>
                <span className="font-bold text-sm text-brand-dark">{p1.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: p2.logo_colour }}>{p2.logo_text}</div>
                <span className="font-bold text-sm text-brand-dark">{p2.name}</span>
              </div>
            </div>

            {/* Rows */}
            <div className="px-5">
              <CompareRow label="In-person rate" v1={rate1} v2={rate2} />
              <CompareRow label="Hardware" v1={hw1} v2={hw2} />
              <CompareRow label="SIM plan" v1={sim1 || false} v2={sim2 || false} pos1={!!p1.sim_plan.available} pos2={!!p2.sim_plan.available} />
              <CompareRow label="Offline mode" v1={p1.offline_mode.available || false} v2={p2.offline_mode.available || false} />
              <CompareRow label="Settlement" v1={settle1} v2={settle2} />
              <CompareRow label="Invoicing" v1={p1.invoicing || false} v2={p2.invoicing || false} />
              <CompareRow label="Payment links" v1={p1.payment_links || false} v2={p2.payment_links || false} />
              <CompareRow label="Recurring billing" v1={p1.recurring_billing || false} v2={p2.recurring_billing || false} />
              <CompareRow label="Contract" v1={p1.contract} v2={p2.contract} />
            </div>
          </div>
        </div>
      </section>

      {/* Pros/cons */}
      <section className="section section-alt">
        <div className="container-page max-w-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[p1, p2].map(p => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-slate-200 rounded-2xl p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ background: p.logo_colour }}>{p.logo_text}</div>
                  <h3 className="font-bold text-brand-dark">{p.name}</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {p.pros.map((pro, i) => (
                    <li key={i} className="flex gap-2 items-start text-slate-700">
                      <Check size={13} className="text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      {pro}
                    </li>
                  ))}
                  {p.cons.map((con, i) => (
                    <li key={i} className="flex gap-2 items-start text-slate-400">
                      <X size={13} className="text-red-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      {con}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best for */}
      <section className="section">
        <div className="container-page max-w-2xl">
          <h2 className="text-xl font-bold text-brand-dark mb-5">Which should you choose?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[p1, p2].map(p => (
              <div key={p.id} className="rounded-2xl p-5 bg-slate-50 border border-slate-100">
                <h3 className="font-bold text-brand-dark mb-2">Choose {p.name} if you…</h3>
                <ul className="space-y-1.5 text-sm text-slate-600">
                  {p.best_for.map((b, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <ArrowRight size={13} className="text-brand-blue flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/providers/${p.id}`}
                  className="mt-4 block text-center bg-white border border-slate-200 hover:border-brand-blue hover:text-brand-blue text-brand-dark font-semibold px-4 py-2.5 rounded-xl transition-all text-sm"
                >
                  Full {p.name} Review →
                </Link>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-6 text-center">
            Rates verified March 2026. Confirm current rates at provider websites before signing up.
          </p>
        </div>
      </section>

      <RelatedLinks slug={p1.id} type="provider" />
    </>
  )
}
