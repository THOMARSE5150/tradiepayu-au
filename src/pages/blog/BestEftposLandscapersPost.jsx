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
  { label: 'Best EFTPOS for Landscapers in Australia (2026)' },
]

const comparisonHeaders = ['', 'Zeller Terminal 1', 'Square Terminal', 'Stripe Reader M2']
const comparisonRows = [
  { highlight: true, cells: ['In-person rate', '1.4%', '1.6%', '1.7% + $0.10'] },
  { cells: ['Hardware cost', '$99', '$329', '$69'] },
  { cells: ['SIM connectivity', '✓ $15/mo', '✗', '✗'] },
  { cells: ['Offline mode', '✗', '✓', '✗'] },
  { cells: ['Settlement', 'Same day', 'Next day', 'Next day'] },
  { cells: ['Works on new estates', 'Yes (SIM)', 'Needs hotspot', 'No'] },
  { cells: ['Works on rural properties', '✓ Check Optus map', 'Offline backup', 'No'] },
]

const faqs = [
  {
    q: 'What is the best EFTPOS for landscapers in Australia?',
    a: "Zeller Terminal 1 with the Optus SIM plan is the best EFTPOS for most Australian landscapers. New housing estate landscaping, rural property work, and large residential gardens all take place without WiFi access. The $15/month SIM plan means the terminal processes independently of any property\'s internet. At 1.4% in-person rate and same-day settlement, it covers both small lawn maintenance jobs and large landscape construction projects.",
  },
  {
    q: 'How do landscapers collect a deposit for large jobs?',
    a: "Payment links are the standard approach for deposit collection on large landscaping projects. Send a Zeller Payment Link or Tyro Payment Link to the client when the quote is accepted — they pay the materials deposit remotely before turf, irrigation, or plants are ordered. This protects against cancellations after materials have been purchased and staged. For staged construction jobs, payment links can be sent at each milestone without requiring the client to be on site.",
  },
  {
    q: 'Do landscapers need SIM connectivity in their EFTPOS terminal?',
    a: "Yes, especially for new estate and rural work. New housing estates have no WiFi infrastructure — every landscaping job on a new development requires SIM connectivity. Rural properties often have poor or no NBN coverage. A SIM-enabled terminal processes independently of any site network and is the most reliable option for landscaping businesses that work across varied locations.",
  },
  {
    q: 'How do landscapers handle recurring billing for regular lawn maintenance clients?',
    a: "Recurring invoicing is the most efficient setup for weekly and fortnightly lawn maintenance clients. Zeller and Square both support automatic recurring invoices with embedded pay-now links. Set up the billing schedule once — invoices are sent and paid without manual action each cycle. For clients who prefer set-and-forget, GoCardless direct debit integrates with both platforms for automatic bank-authorised payments.",
  },
  {
    q: 'What is the best payment setup for commercial landscaping?',
    a: "Commercial landscaping for strata, councils, and developers involves large contracts billed in stages or monthly. Digital invoicing with payment links is more practical than in-person terminals for these clients. Send invoices with pay-now links to the property manager or accounts payable contact after each stage or maintenance period. Tyro Payment Links at 1.4% incl. GST are the cheapest published online rate for large invoice values.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Landscapers in Australia (2026)',
    description: 'Landscapers work on new estates, rural properties, and large residential sites without WiFi. The best EFTPOS for Australian landscapers in 2026.',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-landscapers-australia-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Landscapers in Australia (2026)', item: `${SITE}/blog/best-eftpos-landscapers-australia-2026` },
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

export default function BestEftposLandscapersPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Landscapers in Australia (2026)"
        description="Landscapers work on new estates, rural properties, and large residential sites without WiFi. The best EFTPOS for Australian landscapers in 2026."
        canonical="/blog/best-eftpos-landscapers-australia-2026"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200&h=630&fit=crop&crop=center&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=900&h=560&fit=crop&crop=center&q=80"
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
            Best EFTPOS for Landscapers in Australia (2026)
          </h1>
          <p className="hero-sub">
            New housing estates, rural properties, and large residential gardens — landscaping work demands an EFTPOS that processes without relying on any site WiFi.
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
            Landscaping businesses operate across a wide range of job types: regular lawn maintenance (small amounts, recurring clients), residential landscape construction (large staged projects requiring deposits), new estate landscaping (always without WiFi), and commercial contracts for strata, councils, and developers. Each has different payment requirements — the right EFTPOS setup handles all of them.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Where landscapers face payment challenges</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: 'New housing estates', body: "New estate landscaping is one of the most common landscaping job types — and every new estate has the same problem: no WiFi. Properties under construction have no active internet service. SIM connectivity is not optional here." },
              { title: 'Rural properties', body: "Acreage and rural residential landscaping often falls outside reliable NBN coverage. Check the Optus 4G map before relying on SIM for very remote properties — Square Terminal\'s offline mode is the backup for genuine dead zones." },
              { title: 'Large residential landscape construction', body: "Turf, irrigation, retaining walls, and planting on large residential sites often involves deposits for materials before work begins. Payment links at quote acceptance protect against costly cancellations after materials are staged on site." },
              { title: 'Commercial landscaping', body: "Strata, council, and developer landscaping contracts are billed in stages or monthly. Decision-makers are rarely on site — digital invoicing with payment links is the only practical billing approach." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for landscapers</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most landscapers</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan handles new estate work, rural residential jobs, and in-person payments at completion — all on the same terminal without any WiFi dependency.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            1.4% in-person rate, same-day settlement, $99 hardware. Zeller Payment Links handle deposit collection at quote acceptance and commercial stage invoicing without requiring the client to be on site.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — offline backup</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> with offline mode handles rural properties and remote locations beyond Optus 4G coverage. Cards are stored locally and processed when connectivity is restored. Square\'s recurring billing is also well-suited to weekly lawn maintenance clients who prefer a set-and-forget payment arrangement.
          </p>
        </section>

        <section className="mb-10">
          <div id="recommendation" className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for landscapers</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>New estate and residential landscaping:</strong> Zeller Terminal 1 + Optus SIM ($15/mo). Works on new estates and rural properties without any WiFi.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Deposits and commercial invoicing:</strong> Zeller or Tyro payment links for materials deposits and staged commercial billing.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Backup:</strong> Square Terminal for rural and remote properties beyond Optus 4G coverage.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/landscapers" className="text-sm font-semibold text-brand-blue hover:underline">Full landscaper EFTPOS guide →</Link>
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
        <RelatedLinks slug="landscapers" type="trade" />
      </div>
    </>
  )
}
