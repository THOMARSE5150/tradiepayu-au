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
  { label: "Best EFTPOS for Builders in Queensland (2026)" },
]

const comparisonHeaders = ["","Zeller Terminal 1","Square Terminal","Stripe Reader","Tyro"]
const comparisonRows = [
  { highlight: true, cells: ["In-person rate", "1.4%", "1.6%", "1.7% + $0.10", "Quote"] },
  { cells: ["Hardware cost", "$99", "$329", "$69", "Quote"] },
  { cells: ["SIM connectivity", "✓ $15/mo", "✗", "✗", "✗"] },
  { cells: ["Offline mode", "✗", "✓", "✗", "✗"] },
  { cells: ["Settlement", "Same day", "Next day", "Next day", "Next day"] },
  { cells: ["Payment links", "✓ 1.7%", "✓ 2.2%", "✓ 1.7%+$0.30", "✓ 1.4%"] },
  { cells: ["Invoicing", "✓ Free", "✓ Free", "✓ Via Stripe", "✓ Via Tyro"] },
  { cells: ["Multiple terminals", "✓ Buy hardware", "✓ Buy hardware", "✓ Buy hardware", "✓"] },
]

const faqs = [
  {
    q: "What is the best EFTPOS for builders in South-East Queensland?",
    a: "Zeller Terminal 1 with the Optus SIM plan. SEQ's construction corridors — Logan, Ipswich, Moreton Bay — have large estates under construction without NBN. Zeller's SIM terminal processes on mobile data. Payment links (1.7%) allow deposit collection before build commencement. Same-day settlement means material purchase funds are available the same day.",
  },
  {
    q: "What EFTPOS for North Queensland builders doing cyclone repairs?",
    a: "Zeller Terminal 1 + SIM plan. Cyclone remediation work in Cairns and Townsville often happens under time pressure in damaged buildings with unreliable internet. Optus 4G covers both cities. Same-day settlement means funds are accessible for urgent material purchases. Payment links (1.7%) allow remote invoice collection from insurance assessors and property owners.",
  },
  {
    q: "How should Queensland builders manage progress payments?",
    a: "Payment links via SMS or email (Zeller 1.7%, Tyro 1.4% incl. GST) are the most practical method for Queensland progress payments. The client pays from their banking app without visiting the site. For final payments collected in person, the Zeller terminal at 1.4% is the lowest in-person rate. For remote western QLD sites, Square Terminal offline mode handles payments where Optus coverage is absent.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Best EFTPOS for Builders in Queensland (2026)",
    description: "Best EFTPOS for Queensland builders — SEQ housing boom, North Queensland cyclone work, and payment solutions for large project invoices.",
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-builders-qld-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: "Best EFTPOS for Builders in Queensland (2026)", item: `${SITE}/blog/best-eftpos-builders-qld-2026` },
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

export default function BestEftposBuildersQLDPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Builders in Queensland (2026)"
        description="Best EFTPOS for Queensland builders — SEQ housing boom, North Queensland cyclone work, and payment solutions for large project invoices."
        canonical="/blog/best-eftpos-builders-qld-2026"
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
            Best EFTPOS for Builders in Queensland (2026)
          </h1>
          <p className="hero-sub">
            SEQ housing boom, North Queensland cyclone remediation, and rural Queensland commercial builds — handle large invoices and no-WiFi sites from deposit to final payment.
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
            Queensland Builders work across some of Australia's most varied job sites. Connectivity is never guaranteed — and the terminal that fails to process at the end of a job is a bigger problem than a slightly higher fee rate.
          </p>
          <p>
            This guide covers the best EFTPOS options for Builders working in Queensland in 2026, with recommendations based on QLD-specific site conditions.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Where Queensland Builders lose connectivity</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "SEQ housing boom", body: "Queensland's population growth is concentrated in South-East Queensland. Logan, Ipswich, Moreton Bay, and the Sunshine Coast hinterland have large residential estates under construction. Zeller's SIM plan handles payment before internet is connected." },
              { title: "North Queensland cyclone work", body: "Cyclone damage in Cairns, Townsville, and surrounding areas creates surge building demand. Rapid build-and-repair work requires reliable on-site payment with SIM connectivity." },
              { title: "Remote Queensland commercial", body: "Commercial builds in Toowoomba, Rockhampton, and the QLD mining regions require payment solutions that work without reliable internet. SIM connectivity covers most regional centres." },
              { title: "Progress payments on QLD builds", body: "Queensland builders collecting HIA-standard progress payments benefit from payment links (Zeller 1.7%, Tyro 1.4%) — clients pay via SMS link without needing to be on site." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for Queensland Builders</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most Queensland Builders</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan is the setup that handles the full range of QLD builders work. The terminal uses mobile data independently — no site WiFi, no phone hotspot. At 1.4% in-person rate and same-day settlement, it is also the cheapest and fastest option.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            Same-day settlement is valuable for SEQ builders purchasing materials from Bunnings Trade, Higgins Coatings, or other suppliers on the same day a progress payment is collected.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — backup for confirmed dead zones</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> ($329) with offline mode handles rural and remote QLD sites where even mobile signal is absent. Western Queensland — Mount Isa, Longreach, Charleville — is beyond reliable Optus 4G. Square Terminal offline mode stores transactions and processes within 24 hours when back in coverage.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Cost at typical QLD builders volumes</h2>
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
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for Queensland Builders</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Primary:</strong> Zeller Terminal 1 + Optus SIM plan ($15/mo). Works across Queensland metro and regional areas. Lowest rate, same-day settlement.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Backup:</strong> Square Terminal. For remote QLD sites with no mobile coverage.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/builders/qld" className="text-sm font-semibold text-brand-blue hover:underline">Queensland Builders guide →</Link>
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
