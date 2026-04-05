import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Meta from '../../components/Meta'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import RelatedLinks from '../../components/RelatedLinks'

const SITE = 'https://tradiepayau.directory'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: "Best EFTPOS for Plumbers in Melbourne (2026)" },
]

const comparisonHeaders = ["","Zeller Terminal 1","Square Terminal","Stripe Reader M2","Tyro"]
const comparisonRows = [
  { highlight: true, cells: ["In-person rate", "1.4%", "1.6%", "1.7% + $0.10", "Quote"] },
  { cells: ["Hardware cost", "$99", "$329", "$69", "Quote"] },
  { cells: ["SIM connectivity", "✓ $15/mo", "✗", "✗", "✗"] },
  { cells: ["Offline mode", "✗", "✓", "✗", "✗"] },
  { cells: ["Settlement", "Same day", "Next day", "Next day", "Next day"] },
  { cells: ["Payment links", "✓ 1.7%", "✓ 2.2%", "✓ 1.7%+$0.30", "✓ 1.4%"] },
  { cells: ["Emergency call-out", "Excellent", "Good", "Good", "Limited"] },
]

const faqs = [
  {
    q: "What is the best EFTPOS for Melbourne plumbers?",
    a: "Zeller Terminal 1 with the Optus SIM plan. Melbourne\'s pump rooms and plant floors in CBD and Docklands high-rises have poor WiFi. Outer suburb estate emergency plumbing needs payment collection without WiFi dependencies. Same-day settlement means funds are available for Reece or BGS Plumbing purchases that afternoon. At 1.4% and $99 hardware, it is also the most cost-effective setup.",
  },
  {
    q: "Does Zeller SIM work across Melbourne metro?",
    a: "Yes. Optus 4G covers the entire Melbourne metro area comprehensively — CBD, Docklands, Inner North, Inner South, Bayside, Eastern Suburbs, Western Suburbs, and all outer growth corridors including Werribee, Pakenham, Mernda, and Officer. For Alpine Victoria and very remote rural areas, Square Terminal offline mode is the backup.",
  },
  {
    q: "What EFTPOS for Melbourne emergency plumbing at night?",
    a: "Zeller Terminal 1 + SIM plan. Burst pipes, hot water system failures, and blocked sewers happen at any hour across Melbourne. At midnight in a Southbank apartment or 6am on a Werribee estate, asking for WiFi access is impractical. The SIM terminal processes on Optus 4G. Same-day settlement means funds are available the same evening for any urgent materials run.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Best EFTPOS for Plumbers in Melbourne (2026)",
    description: "Best EFTPOS for Melbourne plumbers — same-day settlement, SIM connectivity for CBD high-rise work and outer suburb estate emergency call-outs.",
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-plumbers-melbourne-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: "Best EFTPOS for Plumbers in Melbourne (2026)", item: `${SITE}/blog/best-eftpos-plumbers-melbourne-2026` },
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
    name: "TradiePay AU — Best EFTPOS for Plumbers in Melbourne (2026)",
    description: "Best EFTPOS for Melbourne plumbers — same-day settlement, SIM connectivity for CBD high-rise work and outer suburb estate emergency call-outs.",
    url: `${SITE}/blog/best-eftpos-plumbers-melbourne-2026`,
    areaServed: { '@type': 'City', name: "Melbourne" },
    knowsAbout: ['EFTPOS terminals', "Plumbers", 'card payments', "Melbourne"],
  },
]

export default function BestEftposPlumbersMelbourne() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Plumbers in Melbourne (2026)"
        description="Best EFTPOS for Melbourne plumbers — same-day settlement, SIM connectivity for CBD high-rise work and outer suburb estate emergency call-outs."
        canonical="/blog/best-eftpos-plumbers-melbourne-2026"
        ogType="article"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1504275427011-2a3c01e96d1d?w=900&h=560&fit=crop&crop=center&q=80"
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
            Best EFTPOS for Plumbers in Melbourne (2026)
          </h1>
          <p className="hero-sub">
            Melbourne CBD apartment blocks, outer suburb estate emergency call-outs, and same-day parts from Reece — your EFTPOS needs to work in any building at any hour.
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
            Melbourne plumbers cover a city where Victorian-era galvanised pipe is still being replaced in the inner suburbs, the outer growth corridors at Truganina, Sunbury, and Officer are adding thousands of homes per year, and CBD apartment towers generate high-volume strata call-out work.
          </p>
          <p>
            Reece Moorabbin, Plumbing Plus, and same-day parts runs mean cash-flow matters. Same-day settlement and SIM connectivity directly affect how the day runs when you're doing six jobs across the metro.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Where Melbourne plumbers lose connectivity</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "Melbourne CBD and Docklands", body: "Pump rooms and mechanical floors in Docklands apartments and CBD high-rises have poor building WiFi. Zeller\'s SIM terminal processes on Optus 4G independently of building infrastructure." },
              { title: "Outer suburb estate emergency work", body: "Burst pipes and hot water failures in Werribee, Pakenham, and Sunbury estates happen without warning. Emergency plumbing needs reliable payment collection — SIM connectivity removes the WiFi dependency." },
              { title: "Inner Melbourne apartment renos", body: "Carlton, Fitzroy, and Richmond apartment renovation plumbing involves tight spaces with poor WiFi. SIM connectivity handles these environments without asking for the customer\'s password." },
              { title: "Same-day parts from Reece", body: "Melbourne plumbers purchasing from Reece or BGS Plumbing on the same day as a job benefit from Zeller\'s same-day settlement — funds available before close of business." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for Melbourne plumbers</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most Melbourne plumbers</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan handles the full range of Melbourne plumbers work. The terminal uses Optus 4G independently — no customer WiFi, no phone hotspot. At 1.4% in-person rate and same-day settlement, it is the lowest-cost, fastest-settlement option.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            Optus 4G covers Melbourne metro comprehensively — CBD, Inner North, Inner South, and all outer growth corridors including Werribee, Pakenham, and Sunbury.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — backup for dead zones</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> ($329) with offline mode handles basement substations, underground plant rooms, and any Melbourne site where even mobile data is absent. Alpine Victoria and remote rural areas can have limited Optus coverage. Square Terminal offline mode stores the payment locally and processes within 24 hours when back in coverage.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Cost at typical Melbourne plumbers volumes</h2>
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
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for Melbourne plumbers</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Primary:</strong> Zeller Terminal 1 + Optus SIM plan ($15/mo). Best rate, same-day settlement, works across Melbourne without site WiFi.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Backup:</strong> Square Terminal. For underground and zero-signal Melbourne sites.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/plumbers/vic" className="text-sm font-semibold text-brand-blue hover:underline">VIC Plumbers guide →</Link>
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
