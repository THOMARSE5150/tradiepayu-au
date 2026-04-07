import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, X, ArrowRight } from 'lucide-react'
import providers from '../data/providers.json'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import RelatedLinks from '../components/RelatedLinks'
import FaqSection from '../components/FaqSection'
import AffiliateButton from '../components/AffiliateButton'

import siteMeta from '../data/site-meta.json'

const SITE = 'https://tradiepayau.directory'

function Cell({ value, positive, className = '' }) {
  if (value === true)  return <span className={`flex items-center gap-1 font-semibold text-green-600 ${className}`}><Check size={14} strokeWidth={2.5} /> Yes</span>
  if (value === false) return <span className={`flex items-center gap-1 text-slate-400 ${className}`}><X size={14} strokeWidth={2.5} /> No</span>
  return <span className={`${positive ? 'text-brand-blue font-semibold' : 'text-brand-dark'} ${className}`}>{value ?? '—'}</span>
}

function CompareRow({ label, note, v1, v2, pos1, pos2 }) {
  return (
    <div className="grid grid-cols-3 gap-3 py-3 border-b border-slate-100 last:border-0 items-center">
      <div>
        <span className="text-xs text-slate-500 font-medium leading-tight">{label}</span>
        {note && <span className="block text-[10px] text-slate-400 leading-tight mt-0.5">{note}</span>}
      </div>
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

  // Dynamic FAQs built from provider data — must be declared before jsonLd
  const faqs = (() => {
    const items = []

    // Rate comparison
    if (p1.fees.in_person_percent && p2.fees.in_person_percent) {
      const cheaper = p1.fees.in_person_percent <= p2.fees.in_person_percent ? p1 : p2
      const pricier = cheaper.id === p1.id ? p2 : p1
      items.push({
        q: `Is ${p1.name} or ${p2.name} cheaper for tradies?`,
        a: `${cheaper.name} has the lower in-person rate at ${cheaper.fees.in_person_percent}% vs ${pricier.name}'s ${pricier.fees.in_person_percent}%. At $10,000/month in card revenue, ${cheaper.name} saves $${Math.round((pricier.fees.in_person_percent - cheaper.fees.in_person_percent) * 100)} per month — $${Math.round((pricier.fees.in_person_percent - cheaper.fees.in_person_percent) * 1200)}/year. The better choice depends on your volume and connectivity needs.`,
      })
    } else {
      items.push({
        q: `Which is cheaper — ${p1.name} or ${p2.name}?`,
        a: `${p1.fees.in_person_percent ? p1.name + ' has a flat ' + p1.fees.in_person_percent + '% rate' : p1.name + ' uses a quote-based pricing model'}. ${p2.fees.in_person_percent ? p2.name + ' charges ' + p2.fees.in_person_percent + '%' : p2.name + ' also requires a quote'}. Get written terms from both before committing.`,
      })
    }

    // SIM / connectivity
    const simProvider = [p1, p2].find(p => p.sim_plan.available)
    const noSimProvider = [p1, p2].find(p => !p.sim_plan.available)
    if (simProvider && noSimProvider) {
      items.push({
        q: `Which works better in dead zones and buildings without WiFi?`,
        a: `${simProvider.name} has a built-in SIM plan (${simProvider.sim_plan.cost_monthly_aud ? '$' + simProvider.sim_plan.cost_monthly_aud + '/month' : 'included'}) that works independently of customer WiFi — ideal for switchboard rooms, plant rooms, and new estate sites. ${noSimProvider.name} requires WiFi or a phone hotspot. ${noSimProvider.offline_mode?.available ? `${noSimProvider.name}'s offline mode compensates for zero-signal sites.` : ''}`,
      })
    } else if (p1.sim_plan.available && p2.sim_plan.available) {
      items.push({
        q: `Do both ${p1.name} and ${p2.name} work without WiFi?`,
        a: `Both offer SIM or mobile connectivity options. ${p1.name}: ${p1.sim_plan.notes || 'SIM available'}. ${p2.name}: ${p2.sim_plan.notes || 'SIM available'}. Compare costs and network coverage before deciding.`,
      })
    }

    // Offline mode
    const offlineProvider = [p1, p2].find(p => p.offline_mode.available)
    const noOfflineProvider = [p1, p2].find(p => !p.offline_mode.available)
    if (offlineProvider && noOfflineProvider) {
      items.push({
        q: `Which works in zero-signal environments — underground, tunnels, or thick concrete?`,
        a: `${offlineProvider.name} supports offline payment mode — you can take payments without any connectivity and process them when signal is restored. ${noOfflineProvider.name} requires an active connection at all times. For electricians working in underground switchboards or glaziers replacing windows in basement car parks, ${offlineProvider.name} is the safer choice.`,
      })
    }

    // Settlement
    const fasterSettle = p1.settlement.same_day_available && !p2.settlement.same_day_available ? p1
      : p2.settlement.same_day_available && !p1.settlement.same_day_available ? p2 : null
    if (fasterSettle) {
      const other = fasterSettle.id === p1.id ? p2 : p1
      items.push({
        q: `Which settles funds faster — ${p1.name} or ${p2.name}?`,
        a: `${fasterSettle.name} offers same-day settlement${fasterSettle.settlement.same_day_condition ? ' when settling to ' + fasterSettle.settlement.same_day_condition : ''}. ${other.name} settles in ${other.settlement.standard_days != null ? other.settlement.standard_days + ' business day(s)' : 'a standard timeframe'}. For cash-flow-sensitive sole traders, same-day access to funds can make a meaningful difference.`,
      })
    } else {
      items.push({
        q: `How quickly do ${p1.name} and ${p2.name} settle funds?`,
        a: `${p1.name} settles in ${p1.settlement.same_day_available ? 'same day (to ' + (p1.settlement.same_day_condition || 'account') + ')' : (p1.settlement.standard_days != null ? p1.settlement.standard_days + ' business day(s)' : 'a standard timeframe')}. ${p2.name} settles in ${p2.settlement.same_day_available ? 'same day (to ' + (p2.settlement.same_day_condition || 'account') + ')' : (p2.settlement.standard_days != null ? p2.settlement.standard_days + ' business day(s)' : 'a standard timeframe')}.`,
      })
    }

    // Invoicing
    if (p1.invoicing !== p2.invoicing) {
      const hasInvoice = p1.invoicing ? p1 : p2
      const noInvoice = hasInvoice.id === p1.id ? p2 : p1
      items.push({
        q: `Which is better for sending invoices to builders and commercial clients?`,
        a: `${hasInvoice.name} has built-in invoicing — you can send professional tax invoices with a payment link directly from the app. ${noInvoice.name} does not include an invoicing feature. For builders, concreters, or any trade billing to commercial accounts on 14–30 day terms, ${hasInvoice.name} is the stronger choice.`,
      })
    } else if (p1.invoicing && p2.invoicing) {
      items.push({
        q: `Do both ${p1.name} and ${p2.name} support invoicing?`,
        a: `Yes — both providers support sending invoices with payment links. ${p1.name} charges ${p1.fees.invoice_percent ? p1.fees.invoice_percent + '%' + (p1.fees.invoice_fixed_cents ? ' + $' + (p1.fees.invoice_fixed_cents / 100).toFixed(2) : '') : 'a variable rate'} for invoice payments. ${p2.name} charges ${p2.fees.invoice_percent ? p2.fees.invoice_percent + '%' + (p2.fees.invoice_fixed_cents ? ' + $' + (p2.fees.invoice_fixed_cents / 100).toFixed(2) : '') : 'a variable rate'}.`,
      })
    }

    // Monthly fee / contract
    const noFeeProviders = [p1, p2].filter(p => p.fees.monthly_fee === 0)
    if (noFeeProviders.length === 2) {
      items.push({
        q: `Do ${p1.name} or ${p2.name} charge a monthly fee?`,
        a: `Neither ${p1.name} nor ${p2.name} charges a monthly fee. Both are pay-as-you-go — you only pay when you take a card payment. ${p1.contract ? p1.name + ': ' + p1.contract + '. ' : ''}${p2.contract ? p2.name + ': ' + p2.contract + '.' : ''}`,
      })
    }

    // Overall winner
    const winner = p1.score_overall >= p2.score_overall ? p1 : p2
    const loser = winner.id === p1.id ? p2 : p1
    items.push({
      q: `Which should a sole-trader tradie choose — ${p1.name} or ${p2.name}?`,
      a: `For most sole-trader tradies, ${winner.name} is the better default (${winner.score_overall}/10 vs ${loser.score_overall}/10). ${winner.best_for.slice(0, 2).join(', ')}. However, ${loser.name} is the better fit if you need: ${loser.best_for.slice(0, 2).join(', ')}. If you work in genuine zero-signal environments, prioritise connectivity features over rate.`,
    })

    return items
  })()

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      name: title,
      description,
      image: { '@type': 'ImageObject', url: p1.product_image?.startsWith('http') ? p1.product_image : `${SITE}/og-provider.svg`, width: 1200, height: 630 },
      url: `${SITE}${canonical}`,
      datePublished: '2026-01-15',
      dateModified: siteMeta.lastVerified,
      author: { '@type': 'Organization', '@id': `${SITE}/#organization`, name: 'TradiePay AU', url: SITE },
      publisher: { '@type': 'Organization', '@id': `${SITE}/#organization`, name: 'TradiePay AU', url: SITE },
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

  const winner = p1.score_overall >= p2.score_overall ? p1 : p2

  const rate1 = p1.fees.in_person_percent ? `${p1.fees.in_person_percent}%` : 'Contact for rate'
  const rate2 = p2.fees.in_person_percent ? `${p2.fees.in_person_percent}%` : 'Contact for rate'
  const rateNote = (!p1.fees.in_person_percent || !p2.fees.in_person_percent) ? 'Quote-based — varies by volume' : null
  const hw1 = p1.hardware[0]?.price_aud ? `$${p1.hardware[0].price_aud}` : p1.hardware[0]?.rental ? 'Rental' : '—'
  const hw2 = p2.hardware[0]?.price_aud ? `$${p2.hardware[0].price_aud}` : p2.hardware[0]?.rental ? 'Rental' : '—'
  const sim1 = p1.sim_plan.available ? (p1.sim_plan.cost_monthly_aud ? `$${p1.sim_plan.cost_monthly_aud}/mo` : 'Included') : false
  const sim2 = p2.sim_plan.available ? (p2.sim_plan.cost_monthly_aud ? `$${p2.sim_plan.cost_monthly_aud}/mo` : 'Included') : false
  const settle1 = p1.settlement.same_day_available ? 'Same day' : p1.settlement.standard_days != null ? `${p1.settlement.standard_days}d` : 'Contact'
  const settle2 = p2.settlement.same_day_available ? 'Same day' : p2.settlement.standard_days != null ? `${p2.settlement.standard_days}d` : 'Contact'
  const conn1 = p1.sim_plan.available ? 'SIM ✓' : p1.offline_mode.available ? 'Offline ✓' : 'WiFi only'
  const conn2 = p2.sim_plan.available ? 'SIM ✓' : p2.offline_mode.available ? 'Offline ✓' : 'WiFi only'
  const c1Better = !!(p1.sim_plan.available || p1.offline_mode.available)
  const c2Better = !!(p2.sim_plan.available || p2.offline_mode.available)

  return (
    <>
      <Meta title={title} description={description} canonical={canonical} ogType="article" jsonLd={jsonLd} />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-brand-dark" />
          <div className="absolute top-0 left-0 w-80 h-80 bg-brand-blue/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute top-10 right-10 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Head-to-Head</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
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
            <div className="container-page max-w-2xl py-5 sm:py-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <span className="flex-shrink-0 text-[11px] font-bold uppercase tracking-widest text-slate-400 hidden sm:block">Verdict</span>
                <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: winner.logo_colour }}>{winner.logo_text}</div>
                  <div className="min-w-0">
                    <p className="font-extrabold text-brand-dark text-[15px] sm:text-base leading-tight">Best for most tradies → {winner.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-semibold text-brand-blue bg-blue-50 px-1.5 py-0.5 rounded flex-shrink-0">{winner.score_overall}/10</span>
                      <p className="text-xs text-slate-400 leading-snug">{winner.best_for[0]} · {loser.name} is better for: {loser.best_for[0].toLowerCase()}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0 sm:pl-5 sm:border-l sm:border-slate-200">
                  <AffiliateButton providerId={winner.id} label="compare-verdict" campaign="compare" intent="signup" className="inline-flex items-center gap-1 px-3.5 py-2 bg-brand-blue text-white text-xs font-semibold rounded-xl hover:bg-blue-600 transition-colors">
                    Visit {winner.name} ↗
                  </AffiliateButton>
                  <Link to={`/providers/${winner.id}`} className="text-xs font-medium text-slate-400 hover:text-brand-blue transition-colors">
                    Full review →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      })()}

      {/* Quick stats strip */}
      <div className="bg-white border-b border-slate-100">
        <div className="container-page max-w-2xl py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              {
                label: 'In-person rate',
                v1: rate1, v2: rate2,
                p1Better: p1.fees.in_person_percent != null && (p2.fees.in_person_percent == null || p1.fees.in_person_percent <= p2.fees.in_person_percent),
                p2Better: p2.fees.in_person_percent != null && (p1.fees.in_person_percent == null || p2.fees.in_person_percent < p1.fees.in_person_percent),
              },
              {
                label: 'Connectivity',
                v1: conn1, v2: conn2,
                p1Better: c1Better, p2Better: c2Better,
              },
              {
                label: 'Settlement',
                v1: settle1, v2: settle2,
                p1Better: p1.settlement.same_day_available && !p2.settlement.same_day_available,
                p2Better: p2.settlement.same_day_available && !p1.settlement.same_day_available,
              },
              {
                label: 'Hardware',
                v1: hw1, v2: hw2,
                p1Better: !!p1.hardware[0]?.price_aud && (!p2.hardware[0]?.price_aud || p1.hardware[0].price_aud <= p2.hardware[0].price_aud),
                p2Better: !!p2.hardware[0]?.price_aud && (!p1.hardware[0]?.price_aud || p2.hardware[0].price_aud < p1.hardware[0].price_aud),
              },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-1.5">{item.label}</p>
                <div className="flex items-center justify-center gap-1.5 flex-wrap">
                  <span className={`text-sm font-bold ${item.p1Better ? 'text-brand-blue' : 'text-slate-500'}`}>{item.v1}</span>
                  <span className="text-slate-300 text-[10px]">vs</span>
                  <span className={`text-sm font-bold ${item.p2Better ? 'text-brand-blue' : 'text-slate-500'}`}>{item.v2}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <section className="section">
        <div className="container-page max-w-2xl">
          <p className="text-sm text-slate-500 mb-3">Here's how they compare at a glance:</p>
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
              <CompareRow label="In-person rate" note={rateNote} v1={rate1} v2={rate2} />
              <CompareRow label="SIM plan" note="No customer WiFi needed" v1={sim1 || false} v2={sim2 || false} pos1={!!p1.sim_plan.available} pos2={!!p2.sim_plan.available} />
              <CompareRow label="Offline mode" note="Zero-signal environments" v1={p1.offline_mode.available || false} v2={p2.offline_mode.available || false} />
              <CompareRow label="Settlement" v1={settle1} v2={settle2} />
              <CompareRow label="Hardware" v1={hw1} v2={hw2} />
              <CompareRow label="Invoicing" v1={p1.invoicing || false} v2={p2.invoicing || false} />
              <CompareRow label="Payment links" v1={p1.payment_links || false} v2={p2.payment_links || false} />
              <CompareRow label="Recurring billing" v1={p1.recurring_billing || false} v2={p2.recurring_billing || false} />
              <CompareRow label="Contract" v1={p1.contract} v2={p2.contract} />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial note */}
      <div className="container-page max-w-2xl -mt-2 pb-4">
        <p className="text-xs text-slate-400 text-center leading-relaxed">
          Ranked by published in-person rate, SIM connectivity, settlement speed, and offline capability — not by commercial arrangement.{' '}
          <Link to="/about" className="hover:text-slate-300 underline underline-offset-2">See methodology →</Link>
          {' '}· Some links may earn a small commission.{' '}
          <Link to="/disclaimer" className="hover:text-slate-300 underline underline-offset-2">Disclosure</Link>
        </p>
      </div>

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
              <div key={p.id} className={`rounded-2xl p-5 border ${p.id === winner.id ? 'bg-white border-brand-blue/25 shadow-sm shadow-blue-900/5' : 'bg-slate-50 border-slate-100'}`}>
                <h3 className={`mb-2 ${p.id === winner.id ? 'font-extrabold text-brand-dark' : 'font-semibold text-slate-600'}`}>Choose {p.name} if you {winner.id === p.id ? 'want:' : 'need:'}</h3>
                <ul className="space-y-1.5 text-sm text-slate-600">
                  {p.best_for.map((b, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <ArrowRight size={13} className="text-brand-blue flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-2">
                  <AffiliateButton providerId={p.id} label="compare-bestfor" campaign="compare" intent="signup" className="flex-1 block text-center bg-brand-blue text-white font-semibold px-4 py-2.5 rounded-xl transition-all text-sm hover:bg-blue-600">
                    Visit {p.name} ↗
                  </AffiliateButton>
                  <Link
                    to={`/providers/${p.id}`}
                    className="block text-center bg-white border border-slate-200 hover:border-brand-blue hover:text-brand-blue text-brand-dark font-semibold px-4 py-2.5 rounded-xl transition-all text-sm"
                  >
                    Review
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-6 text-center">
            Rates verified April 2026. Confirm current rates at provider websites before signing up.
          </p>
        </div>
      </section>

      <FaqSection items={faqs} title={`${p1.name} vs ${p2.name} — FAQ`} />

      {/* Not sure? Take the quiz */}
      <div className="container-page max-w-2xl py-4 border-t border-slate-100">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs text-slate-400">Not sure? Answer 3 questions for a personalised pick.</p>
          <Link to="/#finder" className="text-xs font-semibold text-slate-500 hover:text-brand-blue transition-colors whitespace-nowrap">
            Take the quiz →
          </Link>
        </div>
      </div>

      <RelatedLinks slug={p1.id} type="provider" />
    </>
  )
}
