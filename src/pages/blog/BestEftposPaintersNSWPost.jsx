import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Meta from '../../components/Meta'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import RelatedLinks from '../../components/RelatedLinks'

import siteMeta from '../../data/site-meta.json'

const SITE = 'https://tradiepayau.directory'
const crumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: "Best EFTPOS for Painters in NSW (2026)" }]
const comparisonHeaders = ["","Zeller Terminal 1","Square Terminal","Stripe WisePad 3","Tyro"]
const comparisonRows = [
  { highlight: true, cells: ["In-person rate", "1.4%", "1.6%", "1.7% + $0.10", "Quote"] },
  { cells: ["Hardware cost", "$99", "$329", "$89", "Quote"] },
  { cells: ["SIM connectivity", "✓ $15/mo", "✗", "✗", "✗"] },
  { cells: ["Offline mode", "✗", "✓", "✗", "✗"] },
  { cells: ["Settlement", "Same day", "Next day", "2 days", "Next day"] },
  { cells: ["Payment links", "✓ 1.7%", "✓ 2.2%", "✓ 1.7%+$0.30", "✓ 1.4%"] },
]
const faqs = [
  {
    q: "What is the best EFTPOS for painters in NSW?",
    a: "Zeller Terminal 1 with the Optus SIM plan plus payment links (1.7%). NSW painters working in empty houses have no customer WiFi — SIM connectivity handles payment at job completion. Payment links allow deposit collection before work begins. At 1.4% in-person rate and same-day settlement, it is also the most cost-effective option.",
  },
  {
    q: "How should NSW painters collect deposits before starting a job?",
    a: "Payment links via SMS or email (Zeller 1.7%, Tyro 1.4% incl. GST) are the most practical method. The client pays from their banking app before you arrive. This confirms the booking and covers upfront material costs. For final payments at job completion, the Zeller terminal at 1.4% is the lowest in-person rate.",
  },
  {
    q: "What EFTPOS for NSW body corporate and strata painters?",
    a: "Zeller's payment links (1.7%) for billing strata managers and property managers remotely — they pay via SMS link without an on-site visit. For on-site payments at multi-unit properties, the Zeller terminal with SIM works without relying on the body corporate's WiFi.",
  },
]
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: "Best EFTPOS for Painters in NSW (2026)", description: "Best EFTPOS for NSW painters — deposit collection before starting, empty house WiFi challenges, and same-day settlement for materials.", datePublished: '2026-04-02', dateModified: siteMeta.lastVerified, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, url: `${SITE}/blog/best-eftpos-painters-nsw-2026` },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` }, { '@type': 'ListItem', position: 3, name: "Best EFTPOS for Painters in NSW (2026)", item: `${SITE}/blog/best-eftpos-painters-nsw-2026` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]
export default function BestEftposPaintersNSWPost() {
  return (
    <>
      <Meta title="Best EFTPOS for Painters in NSW (2026)" description="Best EFTPOS for NSW painters — deposit collection before starting, empty house WiFi challenges, and same-day settlement for materials." canonical="/blog/best-eftpos-painters-nsw-2026" ogType="article" jsonLd={jsonLd} />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=900&h=560&fit=crop&crop=entropy&q=80" alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Buyers Guide</span>
            <span>·</span><span>2 Apr 2026</span><span>·</span><span>5 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Painters in NSW (2026)</h1>
          <p className="hero-sub">Empty houses under renovation, deposit collection before brushing a stroke, and body corporate billing — NSW painters need EFTPOS that works without customer WiFi.</p>
        </div>
      </header>
      <article className="container-page section max-w-3xl">
        <a href="#recommendation" className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue border border-brand-blue/25 hover:bg-blue-50 px-3 py-1.5 rounded-full mb-6 transition-colors">Jump to recommendation ↓</a>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="prose-sm text-slate-600 space-y-4 mb-10">
          <p>New South Wales painters face connectivity and payment challenges that vary by region and job type. This guide covers the best EFTPOS options for New South Wales painters in 2026.</p>
        </motion.div>
        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Where New South Wales painters lose connectivity</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "Empty houses under renovation", body: "NSW residential painting is often done in empty homes between tenancies or during renovation. No customer is present, so no WiFi password is available. SIM connectivity handles payment at job completion." },
              { title: "Deposit collection before starting", body: "NSW painters collecting 30-50% deposits before starting multi-day jobs benefit from Zeller's payment links (1.7%) — clients pay via SMS before the first brush stroke." },
              { title: "Body corporate and strata billing", body: "Multi-unit strata painting in inner Sydney and the North Shore involves billing strata managers remotely. Payment links allow invoice collection without an on-site meeting." },
              { title: "Western Sydney new builds", body: "New build painting in Western Sydney estates involves sites without NBN. SIM connectivity is the reliable choice for collecting payment at practical completion." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for New South Wales painters</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />
          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most NSW painters</h2>
          <p className="text-sm text-slate-600 leading-relaxed"><Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan is the setup that handles the full range of NSW painters work. At 1.4% in-person rate and same-day settlement, it is also the lowest-cost option.</p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">Payment links (1.7%) for deposit collection before starting multi-day jobs. SIM connectivity for empty houses and new estate sites. Same-day settlement means paint and materials can be purchased the same day.</p>
          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — backup for confirmed dead zones</h2>
          <p className="text-sm text-slate-600 leading-relaxed"><Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> ($329) with offline mode handles NSW rural and remote sites where mobile signal is absent. For rural NSW properties well beyond Optus coverage, Square Terminal offline mode stores the payment and processes within 24 hours.</p>
          <h2 className="text-xl font-bold text-brand-dark mt-6">Cost at typical NSW painters volumes</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 mt-3">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-50 border-b border-slate-200"><th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Monthly card revenue</th><th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Zeller (1.4% + SIM)</th><th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Square (1.6%)</th><th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Stripe (1.7%+$0.10)</th></tr></thead>
              <tbody>{[["$5,000", "$85", "$80", "$86+"],                  ["$10,000", "$155", "$160", "$172+"],                  ["$15,000", "$225", "$240", "$258+"],                  ["$25,000", "$365", "$400", "$430+"],].map(([vol,z,sq,st],i) => (<tr key={i} className={i%2===0?'bg-white':'bg-slate-50'}><td className="px-4 py-3 font-medium text-brand-dark">{vol}</td><td className="px-4 py-3 text-green-700 font-semibold">{z}</td><td className="px-4 py-3 text-slate-600">{sq}</td><td className="px-4 py-3 text-slate-600">{st}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">Zeller includes $15/mo SIM plan. Stripe estimates assume 20 transactions per $5,000 band.</p>
        </section>
        <section className="mb-10">
          <div id="recommendation" className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for New South Wales painters</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3"><strong>Primary:</strong> Zeller Terminal 1 + Optus SIM plan ($15/mo). Lowest rate, same-day settlement, works across New South Wales without site WiFi.</p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3"><strong>Backup:</strong> Square Terminal. For remote NSW sites with no mobile coverage.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/painters/nsw" className="text-sm font-semibold text-brand-blue hover:underline">New South Wales Painters guide →</Link>
              <Link to="/blog/best-eftpos-painters-australia-2026" className="text-sm font-semibold text-brand-blue hover:underline">National Painters guide →</Link>
              <Link to="/providers/zeller" className="text-sm font-semibold text-brand-blue hover:underline">Zeller full review →</Link>
              <Link to="/calculator" className="text-sm font-semibold text-brand-blue hover:underline">Calculate your costs →</Link>
            </div>
          </div>
        </section>
        <FaqSection faqs={faqs} />
        <p className="text-xs text-slate-400 mt-6">Rates current as of April 2026. Always verify current pricing with providers before signing up.</p>
      </article>
      <div className="container-page mb-12"><RelatedLinks slug="painters" type="trade" /></div>
    </>
  )
}
