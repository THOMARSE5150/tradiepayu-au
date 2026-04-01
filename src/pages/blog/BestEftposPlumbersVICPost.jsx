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
  { label: "Best EFTPOS for Plumbers in Victoria (2026)" },
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
    q: "What is the best EFTPOS for plumbers in Melbourne\'s outer suburbs?",
    a: "Zeller Terminal 1 with the Optus SIM plan. Melbourne growth suburbs like Werribee, Pakenham, and Sunbury have large residential estates under construction without NBN. Zeller\'s SIM terminal processes on mobile data — no site WiFi required. Same-day settlement means you can purchase replacement parts the same evening if needed.",
  },
  {
    q: "Does Zeller SIM work for high-rise apartment plumbing in Melbourne?",
    a: "Yes. Optus 4G has strong penetration in inner Melbourne including CBD high-rises, Docklands, Southbank, and Carlton. Plant rooms and mechanical floors in these buildings typically have poor WiFi, but Optus 4G mobile data reaches. Zeller\'s SIM terminal processes independently of the building\'s WiFi infrastructure.",
  },
  {
    q: "What EFTPOS for Victorian emergency plumbing call-outs?",
    a: "Zeller Terminal 1 + SIM plan. Victorian emergency plumbing — burst pipes, blocked drains, hot water system failures — happens at any hour in any building. The SIM terminal processes on Optus 4G without needing WiFi access. Same-day settlement means revenue is available that evening for any urgent material purchases.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Best EFTPOS for Plumbers in Victoria (2026)",
    description: "Best EFTPOS for Victorian plumbers — Melbourne growth corridors, inner-city high-rise work, and regional Victoria. Same-day settlement and SIM connectivity.",
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-plumbers-vic-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: "Best EFTPOS for Plumbers in Victoria (2026)", item: `${SITE}/blog/best-eftpos-plumbers-vic-2026` },
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

export default function BestEftposPlumbersVICPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Plumbers in Victoria (2026)"
        description="Best EFTPOS for Victorian plumbers — Melbourne growth corridors, inner-city high-rise work, and regional Victoria. Same-day settlement and SIM connectivity."
        canonical="/blog/best-eftpos-plumbers-vic-2026"
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
            Best EFTPOS for Plumbers in Victoria (2026)
          </h1>
          <p className="hero-sub">
            Melbourne\'s outer-suburb estates, inner-city apartment plumbing, and regional Victorian towns — get paid at the door before you drive to the next job.
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
            Victoria Plumbers work across some of Australia\'s most varied job sites. Connectivity is never guaranteed — and the terminal that fails to process at the end of a job is a bigger problem than a slightly higher fee rate.
          </p>
          <p>
            This guide covers the best EFTPOS options for Plumbers working in Victoria in 2026, with recommendations based on VIC-specific site conditions.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Where Victoria Plumbers lose connectivity</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "Melbourne outer suburbs", body: "Werribee, Pakenham, Sunbury, and Officer are among Victoria\'s fastest-growing areas. New homes have plumbing commissioned before NBN is connected. SIM connectivity handles these sites from day one." },
              { title: "Inner-city apartment plumbing", body: "Docklands, Southbank, and Carlton high-rise buildings have plant rooms and mechanical floors with poor building WiFi. Zeller\'s SIM terminal operates on Optus 4G independently." },
              { title: "Regional Victoria", body: "Geelong, Ballarat, Bendigo, and Shepparton plumbing emergency work needs reliable payment collection. Optus 4G covers all major Victorian regional cities." },
              { title: "Same-day materials", body: "Victorian plumbers purchasing from Reece or Tradelink on the same day as a job benefit from same-day settlement — funds available in the Zeller account before close of business." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for Victoria Plumbers</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most Victoria Plumbers</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan is the setup that handles the full range of VIC plumbers work. The terminal uses mobile data independently — no site WiFi, no phone hotspot. At 1.4% in-person rate and same-day settlement, it is also the cheapest and fastest option.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            Same-day settlement means plumbers who need to purchase parts from Reece, Tradelink, or BGS Plumbing on the same day as the job have funds available that evening.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — backup for confirmed dead zones</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> ($329) with offline mode handles rural and remote VIC sites where even mobile signal is absent. Alpine areas and deep rural Victoria can have limited Optus coverage. Square Terminal offline mode is the backup for confirmed dead-zone sites.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Cost at typical VIC plumbers volumes</h2>
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
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for Victoria Plumbers</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Primary:</strong> Zeller Terminal 1 + Optus SIM plan ($15/mo). Works across Victoria metro and regional areas. Lowest rate, same-day settlement.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Backup:</strong> Square Terminal. For remote VIC sites with no mobile coverage.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/plumbers/vic" className="text-sm font-semibold text-brand-blue hover:underline">Victoria Plumbers guide →</Link>
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
