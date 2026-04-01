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
  { label: "Best EFTPOS for Plumbers in Queensland (2026)" },
]

const comparisonHeaders = ["","Zeller Terminal 1","Square Terminal","Stripe Reader M2","Tyro"]
const comparisonRows = [
  { highlight: true, cells: ["In-person rate", "1.4%", "1.6%", "1.7% + $0.10", "Quote"] },
  { cells: ["Hardware cost", "$99", "$329", "$69", "Quote"] },
  { cells: ["SIM connectivity", "✓ $15/mo", "✗", "✗", "✗"] },
  { cells: ["Offline mode", "✗", "✓", "✗", "✗"] },
  { cells: ["Settlement", "Same day", "Next day", "Next day", "Next day"] },
  { cells: ["Payment links", "✓ 1.7%", "✓ 2.2%", "✓ 1.7%+$0.30", "✓ 1.4%"] },
  { cells: ["Emergency call-out use", "Excellent", "Good", "Good", "Limited"] },
]

const faqs = [
  {
    q: "What is the best EFTPOS for plumbers in South-East Queensland?",
    a: "Zeller Terminal 1 with the Optus SIM plan. SEQ\'s growth corridors — Logan, Ipswich, Moreton Bay — have large residential estates under construction without internet connected. Zeller\'s SIM terminal works on mobile data independently. Same-day settlement means funds are available that evening for purchasing replacement parts.",
  },
  {
    q: "What EFTPOS for North Queensland plumbers in Cairns and Townsville?",
    a: "Zeller Terminal 1 + SIM plan. Optus 4G covers Cairns, Townsville, and Mackay. Wet season emergency call-outs — flooding, pipe failures — happen at any hour. SIM connectivity means payment is never delayed by WiFi unavailability. For remote NQ properties beyond Optus coverage, Square Terminal offline mode is the backup.",
  },
  {
    q: "Can Queensland plumbers use EFTPOS for outback emergency call-outs?",
    a: "For outback QLD (Mount Isa, Roma, Longreach, Charleville), Square Terminal offline mode is the only reliable option. It stores card transactions locally and processes them within 24 hours when you return to mobile coverage. Zeller\'s SIM plan relies on Optus 4G, which does not reach most of the QLD outback.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Best EFTPOS for Plumbers in Queensland (2026)",
    description: "Best EFTPOS for Queensland plumbers — SEQ growth areas, North Queensland, and outback QLD emergency call-outs. Same-day settlement and SIM connectivity.",
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-plumbers-qld-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: "Best EFTPOS for Plumbers in Queensland (2026)", item: `${SITE}/blog/best-eftpos-plumbers-qld-2026` },
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

export default function BestEftposPlumbersQLDPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Plumbers in Queensland (2026)"
        description="Best EFTPOS for Queensland plumbers — SEQ growth areas, North Queensland, and outback QLD emergency call-outs. Same-day settlement and SIM connectivity."
        canonical="/blog/best-eftpos-plumbers-qld-2026"
        ogType="article"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&h=560&fit=crop&crop=center&q=80"
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
            Best EFTPOS for Plumbers in Queensland (2026)
          </h1>
          <p className="hero-sub">
            Moreton Bay new estates, Cairns wet season call-outs, and outback Queensland emergency work — get paid on the spot wherever Optus reaches.
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
            Queensland Plumbers work across some of Australia\'s most varied job sites. Connectivity is never guaranteed — and the terminal that fails to process at the end of a job is a bigger problem than a slightly higher fee rate.
          </p>
          <p>
            This guide covers the best EFTPOS options for Plumbers working in Queensland in 2026, with recommendations based on QLD-specific site conditions.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Where Queensland Plumbers lose connectivity</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "SEQ growth areas", body: "Logan, Ipswich, Sunshine Coast, and Moreton Bay residential developments have new homes commissioned before internet is connected. SIM connectivity handles these sites from day one." },
              { title: "North Queensland", body: "Cairns and Townsville plumbing work — particularly wet season emergency call-outs — needs reliable payment collection. Optus 4G covers both cities and surrounding towns." },
              { title: "Outback Queensland", body: "Mount Isa, Roma, and Longreach are beyond reliable Optus 4G coverage. Square Terminal offline mode is the only practical option for confirmed outback plumbing work." },
              { title: "Same-day materials in QLD", body: "Queensland plumbers sourcing hot water units or fittings from Reece or Tradelink on the same day benefit from Zeller\'s same-day settlement — funds available before close of business." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for Queensland Plumbers</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most Queensland Plumbers</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan is the setup that handles the full range of QLD plumbers work. The terminal uses mobile data independently — no site WiFi, no phone hotspot. At 1.4% in-person rate and same-day settlement, it is also the cheapest and fastest option.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            Same-day settlement is especially valuable in SEQ where Reece and Tradelink branches are accessible — job revenue is available in the Zeller account before end of business the same day.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — backup for confirmed dead zones</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> ($329) with offline mode handles rural and remote QLD sites where even mobile signal is absent. Western Queensland — Mount Isa, Longreach, Charleville — is beyond Optus 4G coverage. Square Terminal stores payments locally and processes within 24 hours when back in coverage.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Cost at typical QLD plumbers volumes</h2>
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
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for Queensland Plumbers</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Primary:</strong> Zeller Terminal 1 + Optus SIM plan ($15/mo). Works across Queensland metro and regional areas. Lowest rate, same-day settlement.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Backup:</strong> Square Terminal. For remote QLD sites with no mobile coverage.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/plumbers/qld" className="text-sm font-semibold text-brand-blue hover:underline">Queensland Plumbers guide →</Link>
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
