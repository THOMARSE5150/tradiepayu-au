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
  { label: 'Best EFTPOS for Roofers in Australia (2026)' },
]

const comparisonHeaders = ['', 'Zeller Terminal 1', 'Square Terminal', 'Tyro']
const comparisonRows = [
  { highlight: true, cells: ['In-person rate', '1.4%', '1.6%', 'Quote'] },
  { cells: ['Hardware cost', '$99', '$329', 'Quote'] },
  { cells: ['SIM connectivity', '✓ $15/mo', '✗', '✗'] },
  { cells: ['Offline mode', '✗', '✓', '✗'] },
  { cells: ['Settlement', 'Same day', 'Next day', '2 days'] },
  { cells: ['Payment links', '✓ 1.7%', '✓ 2.2%', '✓ 1.4%'] },
  { cells: ['Works on roof (Optus 4G)', 'Excellent', 'Hotspot needed', 'Hotspot needed'] },
]

const faqs = [
  {
    q: 'What is the best EFTPOS for roofers in Australia?',
    a: "Zeller Terminal 1 with the SIM plan is the best EFTPOS for most roofers. Roofing work often happens on sites with poor WiFi — rooftops are physically distant from routers, and storm-damage emergency jobs happen in houses where accessing the customer's WiFi is impractical. The Optus SIM plan ($15/month) means the terminal processes on mobile data independently. At 1.4% and same-day settlement, it is also the cheapest and fastest option for most roofing businesses.",
  },
  {
    q: 'Does EFTPOS work on rooftops?',
    a: "Yes — Zeller Terminal 1 with the Optus SIM plan is particularly effective on rooftops because 4G mobile signal is often stronger at height than at ground level. WiFi-only terminals like Square Reader or Stripe Reader M2 require a phone hotspot on the roof, which is less convenient. Zeller is self-contained.",
  },
  {
    q: 'How do roofers handle deposits for large jobs?',
    a: "Payment links are the standard approach. Send a Zeller or Tyro payment link for 20-40% of the job value when the quote is accepted. The client taps a link and pays from their phone — no bank details required, no cheques. Zeller payment links cost 1.7%, Tyro's are 1.4% incl. GST (the cheapest published online payment rate in Australia). The balance is collected via terminal on completion or via a second payment link.",
  },
  {
    q: 'Should roofers take payment at completion or send an invoice?',
    a: "For residential work, take payment at completion via terminal or payment link. Sending an invoice with 14-day terms for residential clients creates unnecessary delays. For commercial or insurance work where a formal tax invoice is required, use Zeller or Square invoicing with an embedded pay-now button — most commercial clients pay within a day or two when a payment link is included.",
  },
  {
    q: 'What EFTPOS works best for storm-damage emergency roofing?',
    a: "Zeller Terminal 1 + SIM. Emergency storm work means you arrive at a damaged home where the customer is stressed and the internet may be out. A self-contained SIM terminal removes the WiFi dependency entirely. Same-day settlement means the revenue from a storm emergency on Friday evening is in your account Friday night, not Monday.",
  },
  {
    q: 'How much does EFTPOS cost a roofing business per month?',
    a: "On $15,000/month in card revenue at Zeller's 1.4% rate: $210 in processing fees. Add $15 for the SIM plan — total $225. Square at 1.6% on the same volume: $240. The difference is small, but Zeller also settles same day (Square is next day) and has a lower hardware cost ($99 vs $329). For high-volume roofing operations ($50,000+/month), contact Tyro for a custom in-person rate.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Roofers in Australia (2026)',
    description: 'Roofers work at height, on storm-damage emergency jobs, and on sites with poor WiFi. Here is the best EFTPOS terminal setup for Australian roofers in 2026.',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-roofers-australia-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Roofers in Australia (2026)', item: `${SITE}/blog/best-eftpos-roofers-australia-2026` },
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

export default function BestEftposRoofersPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Roofers in Australia (2026)"
        description="Roofers work at height, on storm-damage emergency jobs, and on sites with poor WiFi. Here is the best EFTPOS terminal setup for Australian roofers in 2026."
        canonical="/blog/best-eftpos-roofers-australia-2026"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=630&fit=crop&crop=center&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&h=560&fit=crop&crop=center&q=80"
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
            Best EFTPOS for Roofers in Australia (2026)
          </h1>
          <p className="hero-sub">
            Storm-damage call-outs, rooftop work, and large residential jobs — roofers need an EFTPOS that works at height and on emergency sites without WiFi.
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
            Roofing has two distinct payment scenarios: large planned jobs (re-roofing, new builds, extensions) where deposit and progress payments are the norm, and emergency storm-damage work where you arrive, repair, and collect — often on the same day. Both benefit from a terminal that does not depend on the building's WiFi.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Provider comparison for roofers</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the Optus SIM plan is the right pick for most roofers. Rooftops often have better 4G signal than ground level — the SIM terminal works particularly well at height. Same-day settlement is valuable for storm-damage work where you need rapid access to funds for material replenishment.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            For large residential or commercial roofing jobs, send a Zeller payment link for the deposit (20-40%) when the quote is signed. Collect the balance on completion via terminal. All payments settle same day into your Zeller Transaction Account.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — offline backup</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> is worth keeping in the van for jobs in rural areas where Optus 4G coverage is patchy. The offline mode stores card payments locally for up to 24 hours. Most metropolitan and regional roofers will rarely need it, but for genuine dead-zone jobs it is the only option.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Tyro for high-volume roofing businesses</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/tyro" className="text-brand-blue hover:underline">Tyro</Link> does not publish an in-person terminal rate — it requires a quote. For roofing businesses processing more than $50,000/month in card payments, a negotiated Tyro in-person rate may come in below 1.4%, making it cheaper than Zeller. Tyro's Payment Links at 1.4% incl. GST are also the cheapest online rate for deposits and progress payments.
          </p>
        </section>

        <section className="mb-10">
          <div id="recommendation" className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for roofers</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Primary:</strong> Zeller Terminal 1 + Optus SIM ($15/mo). Handles rooftops, emergency storm work, and residential jobs. Lowest rate, same-day settlement.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Backup:</strong> Square Terminal. Rural properties and confirmed dead-zone areas.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              High-volume roofing operations: request a Tyro quote for in-person rate and use Tyro Payment Links (1.4%) for deposits and progress claims.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/roofers" className="text-sm font-semibold text-brand-blue hover:underline">Full roofers EFTPOS guide →</Link>
              <Link to="/providers/zeller" className="text-sm font-semibold text-brand-blue hover:underline">Zeller full review →</Link>
              <Link to="/calculator" className="text-sm font-semibold text-brand-blue hover:underline">Calculate your costs →</Link>
            </div>
          </div>
        </section>

        <FaqSection faqs={faqs} />

        <p className="text-xs text-slate-400 mt-6">
          Rates current as of April 2026. Tyro in-person rates require a quote. Always verify current pricing with providers before signing up.
        </p>

      </article>

      <div className="container-page mb-12">
        <RelatedLinks slug="roofers" type="trade" />
      </div>
    </>
  )
}
