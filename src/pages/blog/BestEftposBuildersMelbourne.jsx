import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Meta from '../../components/Meta'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import RelatedLinks from '../../components/RelatedLinks'

import siteMeta from '../../data/site-meta.json'

const SITE = 'https://tradiepayau.directory'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: "Best EFTPOS for Builders in Melbourne (2026)" },
]

const comparisonHeaders = ["","Zeller Terminal 1","Square Terminal","Stripe Reader","Tyro"]
const comparisonRows = [
  { highlight: true, cells: ["In-person rate", "1.4%", "1.6%", "1.7% + $0.10", "Quote"] },
  { cells: ["Hardware cost", "$99", "$329", "$89", "Quote"] },
  { cells: ["SIM connectivity", "✓ $15/mo", "✗", "✗", "✗"] },
  { cells: ["Offline mode", "✗", "✓", "✗", "✗"] },
  { cells: ["Settlement", "Same day", "Next day", "2 days", "Next day"] },
  { cells: ["Payment links", "✓ 1.7%", "✓ 2.2%", "✓ 1.7%+$0.30", "✓ 1.4%"] },
  { cells: ["Invoicing", "✓ Free", "✓ Free", "✓ Via Stripe", "✓ Via Tyro"] },
]

const faqs = [
  {
    q: "What is the best EFTPOS for builders in Melbourne?",
    a: "Zeller Terminal 1 is the best EFTPOS for most Melbourne builders. Payment links (1.7%) for progress payments from developers and investors, SIM connectivity for outer suburb estates without NBN, same-day settlement for material purchases, and multiple-terminal support for multi-site operations. At $99 hardware and 1.4% in-person rate, it is also the lowest-cost professional setup available.",
  },
  {
    q: "How should Melbourne builders collect progress payments?",
    a: "Payment links via SMS or email (Zeller 1.7%, Tyro 1.4% incl. GST) are the most practical method for Melbourne progress payments. The client or developer pays from their banking app without visiting the site. For final on-site payments, the Zeller terminal at 1.4% is the lowest in-person rate. Same-day settlement makes large invoices accessible for same-day material purchasing.",
  },
  {
    q: "What EFTPOS for Melbourne apartment developers and builders?",
    a: "Zeller Terminal 1 with payment links (1.7%) for large progress invoices sent to investors and developers. On-site SIM connectivity for any building stage that requires physical collection. Multiple terminals ($99 each) under one account for different trades or site supervisors. Same-day settlement on any amount up to your transaction limit.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Best EFTPOS for Builders in Melbourne (2026)",
    description: "Best EFTPOS for Melbourne builders — payment links for large progress invoices, same-day settlement, and SIM connectivity for outer suburb estate builds.",
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-builders-melbourne-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: "Best EFTPOS for Builders in Melbourne (2026)", item: `${SITE}/blog/best-eftpos-builders-melbourne-2026` },
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
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: "TradiePay AU — Best EFTPOS for Builders in Melbourne (2026)",
    description: "Best EFTPOS for Melbourne builders — payment links for large progress invoices, same-day settlement, and SIM connectivity for outer suburb estate builds.",
    url: `${SITE}/blog/best-eftpos-builders-melbourne-2026`,
    areaServed: { '@type': 'City', name: "Melbourne" },
    knowsAbout: ['EFTPOS terminals', "Builders", 'card payments', "Melbourne"],
  },
]

export default function BestEftposBuildersMelbourne() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Builders in Melbourne (2026)"
        description="Best EFTPOS for Melbourne builders — payment links for large progress invoices, same-day settlement, and SIM connectivity for outer suburb estate builds."
        canonical="/blog/best-eftpos-builders-melbourne-2026"
        ogType="article"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=560&fit=crop&crop=center&q=80"
            alt=""
            fetchPriority="high"
            className="w-full h-full object-cover"
            onError={e => { e.currentTarget.style.opacity = '0' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">City Guide</span>
            <span>·</span>
            <span>2 Apr 2026</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            Best EFTPOS for Builders in Melbourne (2026)
          </h1>
          <p className="hero-sub">
            Melbourne growth corridor estates, inner-city apartment developments, and large progress invoices — efficient payment from deposit through to final sign-off.
          </p>
        </div>
      </header>

      <article className="container-page section max-w-3xl">
        <a href="#recommendation" className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue border border-brand-blue/25 hover:bg-blue-50 px-3 py-1.5 rounded-full mb-6 transition-colors">Jump to recommendation ↓</a>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="prose-sm text-slate-600 space-y-4 mb-10"
        >
          <p>
            Melbourne builders face a dual market: high-rise apartment construction in the CBD and Docklands where progress payments are large and banking matters, and estate volume building in Clyde North, Tarneit, and Craigieburn where sites run without NBN until close to handover.
          </p>
          <p>
            Same-day settlement on progress claims means funds available for materials the following morning. Payment links let clients pay deposits before breaking ground — no awkward cash or cheque conversations.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Where Melbourne builders lose connectivity</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "Melbourne growth corridor volume", body: "Melton, Wyndham, Casey, and Mernda are among Australia's fastest-growing residential corridors. New estates under construction have no NBN connected. Payment links for deposits are essential before build commences." },
              { title: "Inner-city apartment developments", body: "Melbourne CBD and inner suburb apartment developments require progress payment collection from developers and investors. Payment links via SMS are the standard method for off-site invoice collection." },
              { title: "Geelong and regional Victoria", body: "Victoria's building market extends to Geelong, Ballarat, and Bendigo. Optus 4G covers all three cities and surrounding areas — Zeller's SIM plan works across these regional markets." },
              { title: "Multi-site operations", body: "Melbourne building companies with multiple active sites benefit from Zeller's multi-terminal support — each site supervisor can have their own terminal under one account, $99 each outright." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for Melbourne builders</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most Melbourne builders</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan handles the full range of Melbourne builders work. The terminal uses Optus 4G independently — no customer WiFi, no phone hotspot. At 1.4% in-person rate and same-day settlement, it is the lowest-cost, fastest-settlement option.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            Payment links (1.7%) are the most practical way to collect Melbourne progress payments from developers and investors — they pay via SMS link from their banking app. Same-day settlement means large invoice funds are available for same-day Bunnings Trade purchases.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — backup for dead zones</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> ($329) with offline mode handles basement substations, underground plant rooms, and any Melbourne site where even mobile data is absent. Alpine Victoria and remote rural areas have limited Optus coverage. Square Terminal offline mode handles those sites by storing transactions and processing within 24 hours.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Cost at typical Melbourne builders volumes</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 mt-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Monthly card revenue</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Zeller (1.4% + SIM)</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Square (1.6%)</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Stripe (1.7%+$0.10)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["$10,000", "$155", "$160", "$172+"],
                  ["$25,000", "$365", "$400", "$430+"],
                  ["$50,000", "$715", "$800", "$860+"],
                  ["$100,000", "$1,415", "$1,600", "$1,720+"],
                ].map(([vol, z, sq, st], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-brand-dark">{vol}</td>
                    <td className="px-4 py-3 text-green-700 font-semibold">{z}</td>
                    <td className="px-4 py-3 text-slate-600">{sq}</td>
                    <td className="px-4 py-3 text-slate-600">{st}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">Zeller includes $15/mo SIM plan. Builder volumes tend to be higher due to larger job values.</p>
        </section>

        <section className="mb-10">
          <div id="recommendation" className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for Melbourne builders</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Primary:</strong> Zeller Terminal 1 + Optus SIM plan ($15/mo). Best rate, same-day settlement, works across Melbourne without site WiFi.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Backup:</strong> Square Terminal. For underground and zero-signal Melbourne sites.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/builders/vic" className="text-sm font-semibold text-brand-blue hover:underline">VIC Builders guide →</Link>
              <Link to="/blog/best-eftpos-builders-australia-2026" className="text-sm font-semibold text-brand-blue hover:underline">National Builders guide →</Link>
              <Link to="/providers/zeller" className="text-sm font-semibold text-brand-blue hover:underline">Zeller full review →</Link>
              <Link to="/calculator" className="text-sm font-semibold text-brand-blue hover:underline">Calculate your costs →</Link>
            </div>
          </div>
        </section>

        <FaqSection faqs={faqs} />

        <p className="text-xs text-slate-400 mt-6">
          Rates current as of April 2026. Always verify current pricing with providers before signing up.
        </p>
      </article>

      <div className="container-page mb-12">
        <RelatedLinks slug="builders" type="trade" />
      </div>
    </>
  )
}
