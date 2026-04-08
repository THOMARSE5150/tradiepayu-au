import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Meta from '../../components/Meta'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import RelatedLinks from '../../components/RelatedLinks'

import siteMeta from '../../data/site-meta.json'
import { blogHeroUrl, blogOgUrl } from '../../utils/blogImage'

const SITE = 'https://tradiepayau.directory'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: "Best EFTPOS for Plumbers in Brisbane (2026)" },
]

const comparisonHeaders = ["","Zeller Terminal 1","Square Terminal","Stripe WisePad 3","Tyro"]
const comparisonRows = [
  { highlight: true, cells: ["In-person rate", "1.4%", "1.6%", "1.7% + $0.10", "Quote"] },
  { cells: ["Hardware cost", "$99", "$329", "$89", "Quote"] },
  { cells: ["SIM connectivity", "✓ $15/mo", "✗", "✗", "✗"] },
  { cells: ["Offline mode", "✗", "✓", "✗", "✗"] },
  { cells: ["Settlement", "Same day", "Next day", "2 days", "Next day"] },
  { cells: ["Payment links", "✓ 1.7%", "✓ 2.2%", "✓ 1.7%+$0.30", "✓ 1.4%"] },
  { cells: ["Emergency call-out", "Excellent", "Good", "Good", "Limited"] },
]

const faqs = [
  {
    q: "What is the best EFTPOS for plumbers in Brisbane?",
    a: "Zeller Terminal 1 with the Optus SIM plan. SEQ growth estate emergency plumbing, CBD apartment block plant rooms, and after-hours call-outs all need reliable payment collection without WiFi. Optus 4G covers all of Brisbane metro. Same-day settlement means funds are available for Reece Plumbing purchases that afternoon. At 1.4% and $99 hardware, it is also the most cost-effective setup.",
  },
  {
    q: "Does Zeller SIM work across South-East Queensland?",
    a: "Yes. Optus 4G covers Brisbane CBD, inner suburbs, and all SEQ growth corridors including Logan, Ipswich, Redland City, Moreton Bay, and the Sunshine Coast. For North Queensland (Cairns, Townsville), Optus 4G covers the main cities and surrounding towns. Outback Queensland beyond major regional centres has limited coverage — Square Terminal offline mode is the backup for those sites.",
  },
  {
    q: "What EFTPOS for Brisbane emergency plumbing?",
    a: "Zeller Terminal 1 + SIM plan. Brisbane emergency plumbing — burst pipes, blocked drains, hot water failures — happens at any hour across the city. SIM connectivity means you can take payment in any building without asking for WiFi access. Same-day settlement means job revenue is available that evening for any urgent parts run from Reece Plumbing.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Best EFTPOS for Plumbers in Brisbane (2026)",
    description: "Best EFTPOS for Brisbane plumbers — SEQ estate emergency call-outs, same-day settlement, and SIM connectivity for North Brisbane commercial work.",
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-plumbers-brisbane-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: "Best EFTPOS for Plumbers in Brisbane (2026)", item: `${SITE}/blog/best-eftpos-plumbers-brisbane-2026` },
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
    name: "TradiePay AU — Best EFTPOS for Plumbers in Brisbane (2026)",
    description: "Best EFTPOS for Brisbane plumbers — SEQ estate emergency call-outs, same-day settlement, and SIM connectivity for North Brisbane commercial work.",
    url: `${SITE}/blog/best-eftpos-plumbers-brisbane-2026`,
    areaServed: { '@type': 'City', name: "Brisbane" },
    knowsAbout: ['EFTPOS terminals', "Plumbers", 'card payments', "Brisbane"],
  },
]

export default function BestEftposPlumbersBrisbane() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Plumbers in Brisbane (2026)"
        description="Best EFTPOS for Brisbane plumbers — SEQ estate emergency call-outs, same-day settlement, and SIM connectivity for North Brisbane commercial work."
        canonical="/blog/best-eftpos-plumbers-brisbane-2026"
        ogType="article"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={blogHeroUrl('best-eftpos-plumbers-brisbane-2026')}
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
            Best EFTPOS for Plumbers in Brisbane (2026)
          </h1>
          <p className="hero-sub">
            Moreton Bay estate emergency call-outs, Brisbane CBD apartment blocks, and same-day parts purchasing — your EFTPOS needs to work without site WiFi.
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
            Brisbane plumbers deal with a city where flooding is a recurring reality. Post-flood call-out work in Ipswich, Rocklea, and the Lockyer Valley generates intensive short-burst work periods — often in homes without power or working WiFi.
          </p>
          <p>
            Beyond flood work, SEQ's housing boom means estate builds at Ripley, Yarrabilba, and Park Ridge generate consistent new-construction plumbing without connected internet on site.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Where Brisbane plumbers lose connectivity</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "SEQ growth estate emergencies", body: "Burst pipes and hot water failures in Logan, Ipswich, and Moreton Bay estates happen without warning. New estate sites may not have NBN connected. SIM connectivity handles payment anywhere Optus reaches." },
              { title: "Brisbane CBD and Valley", body: "CBD and Fortitude Valley apartment blocks have pump rooms where building WiFi doesn't always reach. Zeller's SIM terminal processes on Optus 4G independently." },
              { title: "North Brisbane commercial", body: "Commercial plumbing fit-outs in Chermside, Northgate, and North Brisbane industrial areas often involve buildings mid-construction with no active internet. SIM connectivity covers these sites." },
              { title: "Same-day parts from Reece", body: "Brisbane plumbers sourcing hot water units or fittings from Reece Plumbing on the same day benefit from Zeller's same-day settlement — funds available before close of business." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for Brisbane plumbers</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most Brisbane plumbers</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan handles the full range of Brisbane plumbers work. The terminal uses Optus 4G independently — no customer WiFi, no phone hotspot. At 1.4% in-person rate and same-day settlement, it is the lowest-cost, fastest-settlement option.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            Optus 4G covers Brisbane CBD and all SEQ metro including Logan, Ipswich, Redland City, and Moreton Bay comprehensively. Same-day settlement is particularly valuable for Brisbane plumbers with busy emergency schedules.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — backup for dead zones</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> ($329) with offline mode handles basement substations, underground plant rooms, and any Brisbane site where even mobile data is absent. Remote and western Queensland beyond Optus coverage need Square Terminal offline mode — stores transactions and processes within 24 hours when back in signal.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Cost at typical Brisbane plumbers volumes</h2>
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
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for Brisbane plumbers</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Primary:</strong> Zeller Terminal 1 + Optus SIM plan ($15/mo). Best rate, same-day settlement, works across Brisbane without site WiFi.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Backup:</strong> Square Terminal. For underground and zero-signal Brisbane sites.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/plumbers/qld" className="text-sm font-semibold text-brand-blue hover:underline">QLD Plumbers guide →</Link>
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
