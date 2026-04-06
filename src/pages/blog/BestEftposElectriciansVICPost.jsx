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
  { label: "Best EFTPOS for Electricians in Victoria (2026)" },
]

const comparisonHeaders = ["","Zeller Terminal 1","Square Terminal","Stripe WisePad 3","Tyro"]
const comparisonRows = [
  { highlight: true, cells: ["In-person rate", "1.4%", "1.6%", "1.7% + $0.10", "Quote"] },
  { cells: ["Hardware cost", "$99", "$329", "$89", "Quote"] },
  { cells: ["SIM connectivity", "✓ $15/mo", "✗", "✗", "✗"] },
  { cells: ["Offline mode", "✗", "✓", "✗", "✗"] },
  { cells: ["Settlement", "Same day", "Next day", "2 days", "Next day"] },
  { cells: ["Works in switchboard rooms", "Yes (SIM)", "Offline mode", "No", "No"] },
  { cells: ["Works underground", "Depends on Optus coverage", "Yes (offline)", "No", "No"] },
]

const faqs = [
  {
    q: "What is the best EFTPOS for electricians in Melbourne growth suburbs?",
    a: "Zeller Terminal 1 with the Optus SIM plan. Suburbs like Werribee, Cranbourne, and Mickleham have thousands of homes under construction without NBN. Zeller's $15/month SIM plan means you can take payment at the door of a brand-new home before the internet is ever connected. At 1.4% and same-day settlement, it is also the lowest-cost option.",
  },
  {
    q: "Does Zeller SIM work in regional Victoria — Ballarat, Bendigo, Shepparton?",
    a: "Yes. Optus 4G covers all major Victorian regional cities including Ballarat, Bendigo, Geelong, Shepparton, Mildura, and Warrnambool. Remote areas and the Alpine region have reduced coverage. For those sites, Square Terminal's offline mode is the practical backup.",
  },
  {
    q: "What EFTPOS for Victorian commercial electrical fit-outs?",
    a: "Zeller Terminal 1 + SIM plan for on-site payment collection, combined with Zeller's payment link feature (1.7%) for collecting large progress payments from commercial clients before you attend site. For underground substations or zero-signal environments, Square Terminal with offline mode is the backup.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Best EFTPOS for Electricians in Victoria (2026)",
    description: "Best EFTPOS for Victorian electricians — Melbourne growth corridors, CBD fit-outs, and regional Victoria. Lowest rate, SIM connectivity.",
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-electricians-vic-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: "Best EFTPOS for Electricians in Victoria (2026)", item: `${SITE}/blog/best-eftpos-electricians-vic-2026` },
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

export default function BestEftposElectriciansVICPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Electricians in Victoria (2026)"
        description="Best EFTPOS for Victorian electricians — Melbourne growth corridors, CBD fit-outs, and regional Victoria. Lowest rate, SIM connectivity."
        canonical="/blog/best-eftpos-electricians-vic-2026"
        ogType="article"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&h=560&fit=crop&crop=center&q=80"
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
            Best EFTPOS for Electricians in Victoria (2026)
          </h1>
          <p className="hero-sub">
            Melbourne's outer suburbs, inner-city high-rise switchboard fit-outs, and rural Victoria — one terminal needs to work across all of it.
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
            Victoria Electricians work across some of Australia's most varied job sites. Connectivity is never guaranteed — and the terminal that fails to process at the end of a job is a bigger problem than a slightly higher fee rate.
          </p>
          <p>
            This guide covers the best EFTPOS options for Electricians working in Victoria in 2026, with recommendations based on VIC-specific site conditions.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Where Victoria Electricians lose connectivity</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "Melbourne growth corridors", body: "Werribee, Cranbourne, Mickleham, and Clyde North are among Australia's fastest-growing areas. New homes go up before NBN is connected. Zeller's SIM plan handles these sites without any site WiFi." },
              { title: "Inner-city Melbourne", body: "CBD high-rise fit-outs, Docklands apartments, and commercial tenancies before occupancy have no active internet service. A SIM terminal is the reliable choice for commercial electrical work in these environments." },
              { title: "Regional Victoria", body: "Geelong, Ballarat, Bendigo, and Shepparton have good Optus 4G coverage. Deep rural Victoria and alpine areas can be patchy — Square offline mode handles confirmed dead-zone sites." },
              { title: "After-hours and emergency", body: "Melbourne residential and commercial emergency call-outs often happen at hours when asking for WiFi access is impractical. SIM connectivity means the payment step is always frictionless." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for Victoria Electricians</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most Victoria Electricians</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan is the setup that handles the full range of VIC electricians work. The terminal uses mobile data independently — no site WiFi, no phone hotspot. At 1.4% in-person rate and same-day settlement, it is also the cheapest and fastest option.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            Optus 4G covers Melbourne metro and all major Victorian regional centres. Hardware is $99 outright. Multiple terminals can share one account for electricians with apprentices.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — backup for confirmed dead zones</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> ($329) with offline mode handles rural and remote VIC sites where even mobile signal is absent. For Alpine areas and deep rural Victoria where Optus coverage is absent, Square Terminal offline mode stores the transaction locally and processes within 24 hours.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Cost at typical VIC electricians volumes</h2>
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
                  ["$5,000", "$85", "$80", "$86+"],
                  ["$10,000", "$155", "$160", "$172+"],
                  ["$15,000", "$225", "$240", "$258+"],
                  ["$25,000", "$365", "$400", "$430+"],
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
          <p className="text-xs text-slate-400 mt-2">Zeller includes $15/mo SIM plan. Stripe estimates assume 20 transactions per $5,000 band.</p>
        </section>

        <section className="mb-10">
          <div id="recommendation" className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for Victoria Electricians</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Primary:</strong> Zeller Terminal 1 + Optus SIM plan ($15/mo). Works across Victoria metro and regional areas. Lowest rate, same-day settlement.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Backup:</strong> Square Terminal. For remote VIC sites with no mobile coverage.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/electricians/vic" className="text-sm font-semibold text-brand-blue hover:underline">Victoria Electricians guide →</Link>
              <Link to="/blog/best-eftpos-electricians-australia-2026" className="text-sm font-semibold text-brand-blue hover:underline">National Electricians guide →</Link>
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
        <RelatedLinks slug="electricians" type="trade" />
      </div>
    </>
  )
}
