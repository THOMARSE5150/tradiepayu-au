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
  { label: "Best EFTPOS for Plumbers in Sydney (2026)" },
]

const comparisonHeaders = ["","Zeller Terminal 1","Square Terminal","Stripe Reader M2","Tyro"]
const comparisonRows = [
  { highlight: true, cells: ["In-person rate", "1.4%", "1.6%", "1.7% + $0.10", "Quote"] },
  { cells: ["Hardware cost", "$99", "$329", "$69", "Quote"] },
  { cells: ["SIM connectivity", "✓ $15/mo", "✗", "✗", "✗"] },
  { cells: ["Offline mode", "✗", "✓", "✗", "✗"] },
  { cells: ["Settlement", "Same day", "Next day", "2 days", "Next day"] },
  { cells: ["Payment links", "✓ 1.7%", "✓ 2.2%", "✓ 1.7%+$0.30", "✓ 1.4%"] },
  { cells: ["Emergency call-out", "Excellent", "Good", "Good", "Limited"] },
]

const faqs = [
  {
    q: "What is the best EFTPOS for plumbers in Sydney CBD?",
    a: "Zeller Terminal 1 with the Optus SIM plan. Sydney CBD apartment blocks and commercial buildings have pump rooms and mechanical floors where building WiFi doesn't reliably reach. The SIM terminal processes on Optus 4G independently. At 1.4% in-person rate and same-day settlement, it is also the lowest-cost option with the fastest access to funds.",
  },
  {
    q: "Why does same-day settlement matter for Sydney plumbers?",
    a: "Sydney plumbers often need to purchase replacement parts — hot water systems, pipe fittings, fixtures — from Reece or Tradelink on the same day as the job. Same-day settlement with Zeller means card revenue collected that day is available in the Zeller Transaction Account before close of business. Square settles next business day; Stripe settles in 2 business days, meaning a late-afternoon job doesn't fund same-day purchases.",
  },
  {
    q: "What EFTPOS for emergency plumbing call-outs in Sydney?",
    a: "Zeller Terminal 1 + SIM plan. Burst pipes, hot water failures, and blocked sewers happen at any hour across Sydney. At 11pm in a Bondi apartment or 6am on a Parramatta estate, you cannot rely on customer WiFi. The SIM terminal processes on its own Optus 4G. Same-day settlement means job revenue is accessible the same evening for any urgent parts run.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Best EFTPOS for Plumbers in Sydney (2026)",
    description: "Best EFTPOS for Sydney plumbers — same-day settlement for Reece runs, SIM connectivity for CBD high-rise plant rooms and Western Sydney emergency call-outs.",
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-plumbers-sydney-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: "Best EFTPOS for Plumbers in Sydney (2026)", item: `${SITE}/blog/best-eftpos-plumbers-sydney-2026` },
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
    name: "TradiePay AU — Best EFTPOS for Plumbers in Sydney (2026)",
    description: "Best EFTPOS for Sydney plumbers — same-day settlement for Reece runs, SIM connectivity for CBD high-rise plant rooms and Western Sydney emergency call-outs.",
    url: `${SITE}/blog/best-eftpos-plumbers-sydney-2026`,
    areaServed: { '@type': 'City', name: "Sydney" },
    knowsAbout: ['EFTPOS terminals', "Plumbers", 'card payments', "Sydney"],
  },
]

export default function BestEftposPlumbersSydney() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Plumbers in Sydney (2026)"
        description="Best EFTPOS for Sydney plumbers — same-day settlement for Reece runs, SIM connectivity for CBD high-rise plant rooms and Western Sydney emergency call-outs."
        canonical="/blog/best-eftpos-plumbers-sydney-2026"
        ogType="article"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=900&h=560&fit=crop&crop=center&q=80"
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
            Best EFTPOS for Plumbers in Sydney (2026)
          </h1>
          <p className="hero-sub">
            Sydney CBD apartment plant rooms, Western Sydney emergency call-outs, and same-day material purchasing — your EFTPOS needs to work at any hour in any building.
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
            Sydney plumbers cover some of Australia's most demanding call-out territory: high-rise strata towers in Parramatta and the CBD where building WiFi rarely reaches plant rooms, new estate builds in Marsden Park and Oran Park with no connected utilities, and emergency burst-pipe calls at any hour.
          </p>
          <p>
            With residential job values averaging $600–$2,000 and same-day parts from Reece or Tradelink, fast payment and same-day settlement are both part of the job — not optional extras.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Where Sydney plumbers lose connectivity</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "Sydney CBD high-rise plant rooms", body: "Pump rooms and mechanical floors in CBD apartment blocks and commercial buildings have poor WiFi. Zeller's SIM terminal processes on Optus 4G independently." },
              { title: "Western Sydney emergency call-outs", body: "Burst pipes and hot water failures in Western Sydney happen in new estates and established suburbs alike. Emergency plumbing needs reliable payment collection without WiFi dependencies." },
              { title: "Inner Sydney terrace renovations", body: "Plumbing in Surry Hills, Newtown, and Balmain terraces involves tight spaces and poor WiFi penetration. SIM connectivity handles these environments without asking for the customer's password." },
              { title: "Same-day materials from Reece", body: "Sydney plumbers who purchase parts from Reece or Tradelink the same day as a job benefit from Zeller's same-day settlement — funds available before close of business." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for Sydney plumbers</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most Sydney plumbers</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan handles the full range of Sydney plumbers work. The terminal uses Optus 4G independently — no customer WiFi, no phone hotspot. At 1.4% in-person rate and same-day settlement, it is the lowest-cost, fastest-settlement option.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            Optus 4G covers Sydney metro comprehensively. Same-day settlement means a payment collected at a CBD job in the morning is accessible for Reece or Tradelink purchases that afternoon.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — backup for dead zones</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> ($329) with offline mode handles basement substations, underground plant rooms, and any Sydney site where even mobile data is absent. For underground Sydney Water infrastructure or deep basement plant rooms beyond any signal, Square Terminal offline mode stores the transaction and processes within 24 hours.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Cost at typical Sydney plumbers volumes</h2>
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
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for Sydney plumbers</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Primary:</strong> Zeller Terminal 1 + Optus SIM plan ($15/mo). Best rate, same-day settlement, works across Sydney without site WiFi.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Backup:</strong> Square Terminal. For underground and zero-signal Sydney sites.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/plumbers/nsw" className="text-sm font-semibold text-brand-blue hover:underline">NSW Plumbers guide →</Link>
              <Link to="/blog/best-eftpos-plumbers-australia-2026" className="text-sm font-semibold text-brand-blue hover:underline">National Plumbers guide →</Link>
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
        <RelatedLinks slug="plumbers" type="trade" />
      </div>
    </>
  )
}
