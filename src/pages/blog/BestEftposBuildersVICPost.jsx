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
  { label: "Best EFTPOS for Builders in Victoria (2026)" },
]

const comparisonHeaders = ["","Zeller Terminal 1","Square Terminal","Stripe Reader","Tyro"]
const comparisonRows = [
  { highlight: true, cells: ["In-person rate", "1.4%", "1.6%", "1.7% + $0.10", "Quote"] },
  { cells: ["Hardware cost", "$99", "$329", "$69", "Quote"] },
  { cells: ["SIM connectivity", "✓ $15/mo", "✗", "✗", "✗"] },
  { cells: ["Offline mode", "✗", "✓", "✗", "✗"] },
  { cells: ["Settlement", "Same day", "Next day", "2 days", "Next day"] },
  { cells: ["Payment links", "✓ 1.7%", "✓ 2.2%", "✓ 1.7%+$0.30", "✓ 1.4%"] },
  { cells: ["Invoicing", "✓ Free", "✓ Free", "✓ Via Stripe", "✓ Via Tyro"] },
  { cells: ["Multiple terminals", "✓ Buy hardware", "✓ Buy hardware", "✓ Buy hardware", "✓"] },
]

const faqs = [
  {
    q: "What is the best EFTPOS for builders in Melbourne growth suburbs?",
    a: "Zeller Terminal 1 with the Optus SIM plan. Melbourne outer suburbs — Melton, Wyndham, Mernda — have large residential estates under construction without NBN. Zeller's SIM terminal processes on mobile data. Payment links (1.7%) allow deposit collection before build commencement. Same-day settlement means material purchase funds are accessible the same day.",
  },
  {
    q: "How should Victorian builders collect large progress payments?",
    a: "Payment links via SMS or email are the most practical method for Victorian building progress payments. Zeller's payment links (1.7%) and Tyro's links (1.4% incl. GST) allow clients to pay from their banking app without visiting the site. For final on-site payments, the Zeller terminal at 1.4% is the lowest-cost in-person rate.",
  },
  {
    q: "What EFTPOS for Victorian commercial builders?",
    a: "Zeller Terminal 1 with SIM plan for on-site collection, combined with payment links for progress invoices sent to developers or commercial clients. Multiple Zeller terminals can be deployed across sites under one account — $99 each, no rental. For confirmed dead-zone sites (Alpine areas, remote rural), Square Terminal offline mode is the backup.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Best EFTPOS for Builders in Victoria (2026)",
    description: "Best EFTPOS for Victorian builders — Melbourne growth corridors, inner-city apartment builds, and payment solutions for large progress invoices.",
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-builders-vic-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: "Best EFTPOS for Builders in Victoria (2026)", item: `${SITE}/blog/best-eftpos-builders-vic-2026` },
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

export default function BestEftposBuildersVICPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Builders in Victoria (2026)"
        description="Best EFTPOS for Victorian builders — Melbourne growth corridors, inner-city apartment builds, and payment solutions for large progress invoices."
        canonical="/blog/best-eftpos-builders-vic-2026"
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
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Buyers Guide</span>
            <span>·</span>
            <span>2 Apr 2026</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            Best EFTPOS for Builders in Victoria (2026)
          </h1>
          <p className="hero-sub">
            Melbourne's outer-urban growth corridors, inner-city apartment developments, and regional Victorian commercial builds — efficient payment from deposit to final invoice.
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
            Victoria Builders work across some of Australia's most varied job sites. Connectivity is never guaranteed — and the terminal that fails to process at the end of a job is a bigger problem than a slightly higher fee rate.
          </p>
          <p>
            This guide covers the best EFTPOS options for Builders working in Victoria in 2026, with recommendations based on VIC-specific site conditions.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Where Victoria Builders lose connectivity</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "Melbourne growth corridors", body: "Melton, Wyndham, Casey, and Mernda are Victoria's fastest-growing building markets. New estates under construction have no internet connected. Zeller's SIM plan handles payment collection from day one." },
              { title: "Inner-city apartment builds", body: "Melbourne CBD high-rise and inner-suburb apartment developments require progress payment collection from developers and owners. Payment links via SMS are standard for off-site invoice collection." },
              { title: "Geelong and regional Victoria", body: "Geelong's construction market is Victoria's largest after Melbourne. Ballarat and Bendigo are also active. Optus 4G covers all three cities and surrounding areas." },
              { title: "Volume and large invoices", body: "Victorian builders often process high-value individual invoices. Same-day settlement means a $20,000 progress payment collected in the morning is available in the Zeller account that afternoon." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for Victoria Builders</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most Victoria Builders</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan is the setup that handles the full range of VIC builders work. The terminal uses mobile data independently — no site WiFi, no phone hotspot. At 1.4% in-person rate and same-day settlement, it is also the cheapest and fastest option.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            Payment links (1.7%) are the most practical way to collect Victorian building progress payments from developers and property owners — they pay via SMS link from their banking app. Same-day settlement means large invoice funds are available same-day for material purchasing.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — backup for confirmed dead zones</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> ($329) with offline mode handles rural and remote VIC sites where even mobile signal is absent. Alpine Victoria and remote rural areas can have limited Optus coverage. Square Terminal offline mode handles these sites by storing transactions locally and processing within 24 hours.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Cost at typical VIC builders volumes</h2>
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
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for Victoria Builders</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Primary:</strong> Zeller Terminal 1 + Optus SIM plan ($15/mo). Works across Victoria metro and regional areas. Lowest rate, same-day settlement.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Backup:</strong> Square Terminal. For remote VIC sites with no mobile coverage.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/builders/vic" className="text-sm font-semibold text-brand-blue hover:underline">Victoria Builders guide →</Link>
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
