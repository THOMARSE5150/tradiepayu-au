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
  { label: 'Best EFTPOS for Plasterers in Australia (2026)' },
]

const comparisonHeaders = ['', 'Zeller Terminal 1', 'Square Terminal', 'Stripe Reader M2']
const comparisonRows = [
  { highlight: true, cells: ['In-person rate', '1.4%', '1.6%', '1.7% + $0.10'] },
  { cells: ['Hardware cost', '$99', '$329', '$69'] },
  { cells: ['SIM connectivity', '✓ $15/mo', '✗', '✗'] },
  { cells: ['Offline mode', '✗', '✓', '✗'] },
  { cells: ['Settlement', 'Same day', 'Next day', '2 days'] },
  { cells: ['Works in new builds', 'Yes (SIM)', 'Needs hotspot', 'No'] },
  { cells: ['Works on renovation sites', 'Yes (SIM)', 'Needs hotspot', 'No'] },
]

const faqs = [
  {
    q: 'What is the best EFTPOS for plasterers in Australia?',
    a: "Zeller Terminal 1 with the Optus SIM plan is the best EFTPOS for most plasterers. New home builds and renovation sites don't have WiFi during the plastering phase — the electrical and data cabling may not even be connected yet. The $15/month SIM means the terminal processes on 4G without requiring any site internet. At 1.4% in-person rate and same-day settlement, it handles residential plaster work, progress payments on larger jobs, and commercial fitout billing.",
  },
  {
    q: 'Do plasterers need SIM connectivity in their EFTPOS terminal?',
    a: "Yes, particularly on new builds and renovation sites. A new home under construction has no NBN connection. A renovation site is an empty or partially occupied house where the owner may not be home when you finish. SIM connectivity means your terminal works wherever Optus 4G reaches, without any dependency on site WiFi or customer internet access.",
  },
  {
    q: 'How do plasterers handle progress payments on large jobs?',
    a: "Large plastering contracts — new homes where you work across multiple days — typically involve a deposit at booking and progress payments tied to completion of each stage (first fix, set, second coat). Use Zeller or Tyro payment links to collect progress payments remotely: send the payment link by SMS when each stage is complete and the owner pays from their phone without needing to be on site. For in-person collection at handover, the SIM-enabled terminal handles it directly.",
  },
  {
    q: 'How do plasterers collect payment when the owner is not on site?',
    a: "Payment links are the right tool. Send a Zeller Payment Link (1.7%) or Tyro Payment Link (1.4% incl. GST) to the homeowner or builder's accounts team when the work is complete. They receive a link by email or SMS and pay from their device. This is particularly useful on new builds managed by a builder — you may never interact directly with the end owner but still need to invoice and collect through the builder's payment process.",
  },
  {
    q: 'How do plasterers handle commercial fitout payment?',
    a: "Commercial plastering for office fitouts and large construction projects typically involves formal invoicing with progress claims. Use Zeller or Square invoicing with embedded pay-now links sent to the head contractor's accounts payable team. For large commercial jobs, collecting a deposit at contract signing (via payment link) is standard practice. The in-person terminal is still useful for smaller commercial jobs or when the site supervisor is authorised to approve payment on completion.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Plasterers in Australia (2026)',
    description: 'Plasterers work in new builds and renovation sites that have no WiFi during construction. The best EFTPOS for Australian plasterers in 2026.',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=630&fit=crop&crop=entropy&q=80',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-plasterers-australia-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Plasterers in Australia (2026)', item: `${SITE}/blog/best-eftpos-plasterers-australia-2026` },
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

export default function BestEftposPlasterersPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Plasterers in Australia (2026)"
        description="Plasterers work in new builds and renovation sites that have no WiFi during construction. The best EFTPOS for Australian plasterers in 2026."
        canonical="/blog/best-eftpos-plasterers-australia-2026"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=630&fit=crop&crop=entropy&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&h=560&fit=crop&crop=entropy&q=80"
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
            Best EFTPOS for Plasterers in Australia (2026)
          </h1>
          <p className="hero-sub">
            New builds, renovation sites, and commercial fitouts have no WiFi during the plastering phase. The right EFTPOS runs on its own SIM and handles progress payments remotely.
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
            Plasterers work in environments that are almost never set up for a WiFi-dependent EFTPOS terminal. New homes under construction have no NBN. Renovation sites are empty or partially occupied houses. Commercial fitouts are stripped-back shells. Payment on completion — or via progress milestones — requires an EFTPOS that works regardless of site conditions.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Where plasterers lose WiFi access</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: 'New home construction', body: "The plastering phase happens before the house is occupied and before NBN is connected. There is no WiFi on a new build site. A SIM-enabled terminal is the only reliable option for collecting at completion." },
              { title: 'Renovation sites', body: "Renovation jobs happen in empty or partially occupied homes. Owners may be staying elsewhere during the work. A SIM terminal means you can collect when the job is done without waiting for the owner to return." },
              { title: 'Commercial fitouts', body: "Offices and retail fitouts are stripped back to concrete before plastering begins. Temporary site WiFi exists in some cases, but it's unreliable and access isn't guaranteed. SIM connectivity removes the dependency." },
              { title: 'Dusty environments', body: "Plaster dust is hard on equipment. Keep your terminal in a protective case in the van — bring it out only to process payment. A portable, self-contained SIM terminal is much more practical than relying on a wall-mounted or office-based setup." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for plasterers</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most plasterers</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan is the right choice for plasterers across residential and commercial work. New builds, renovation sites, and fitouts all process on the same terminal without requiring any site internet connection.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            1.4% in-person rate, same-day settlement, $99 hardware. Zeller payment links (1.7%) handle progress billing and deposits sent to owners or builders by SMS or email.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — offline backup for dead zones</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> with offline mode is the fallback for sites where Optus 4G signal is genuinely absent — some underground car parks, dense commercial buildings, or remote regional locations. Cards are stored locally and processed when connectivity is restored. Most plasterers use Zeller as primary and Square only when needed.
          </p>
        </section>

        <section className="mb-10">
          <div id="recommendation" className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for plasterers</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Residential and commercial work:</strong> Zeller Terminal 1 + Optus SIM ($15/mo). Works on new builds, renovation sites, and commercial fitouts without any WiFi.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Progress payments and deposits:</strong> Zeller or Tyro payment links — send by SMS at each stage milestone so owners or builders can pay remotely.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Backup:</strong> Square Terminal for confirmed dead-zone sites.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/plasterers" className="text-sm font-semibold text-brand-blue hover:underline">Full plasterers EFTPOS guide →</Link>
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
        <RelatedLinks slug="plasterers" type="trade" />
      </div>
    </>
  )
}
