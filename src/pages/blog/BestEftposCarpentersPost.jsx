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
  { label: 'Best EFTPOS for Carpenters in Australia (2026)' },
]

const comparisonHeaders = ['', 'Zeller Terminal 1', 'Square Terminal', 'Stripe Reader M2']
const comparisonRows = [
  { highlight: true, cells: ['In-person rate', '1.4%', '1.6%', '1.7% + $0.10'] },
  { cells: ['Hardware cost', '$99', '$329', '$69'] },
  { cells: ['SIM connectivity', '✓ $15/mo', '✗', '✗'] },
  { cells: ['Offline mode', '✗', '✓', '✗'] },
  { cells: ['Settlement', 'Same day', 'Next day', 'Next day'] },
  { cells: ['Works on framing sites', 'Yes (SIM)', 'Needs hotspot', 'No'] },
  { cells: ['Works on renovation sites', 'Yes (SIM)', 'Needs hotspot', 'No'] },
]

const faqs = [
  {
    q: 'What is the best EFTPOS for carpenters in Australia?',
    a: "Zeller Terminal 1 with the SIM plan is the best EFTPOS for most carpenters. Carpentry work spans new home framing (no WiFi), renovation sites (disconnected internet), and workshops — plus commercial fitouts after hours. The Optus SIM plan ($15/month) means the terminal processes cards on any site independently of internet access. At 1.4% in-person rate and same-day settlement, it covers everything from small repair callouts to large framing contracts.",
  },
  {
    q: 'How do carpenters collect a deposit for custom joinery?',
    a: "Custom joinery and furniture orders require a deposit before work begins — materials need to be purchased and labour allocated. The best method is a payment link sent with the quote or order confirmation. The customer pays online before you start, and you have the deposit in your account before buying timber or hardware. Zeller Payment Links (1.7%) and Tyro Payment Links (1.4% incl. GST) both work well. For larger custom orders, a 50% deposit upfront and 50% on delivery is standard.",
  },
  {
    q: 'Do carpenters need SIM connectivity in their EFTPOS terminal?',
    a: "Yes, for site work. New home framing jobs are on estates with no internet connected. Renovation sites may have the internet disconnected mid-job. Commercial fitouts in shops and offices are often done after hours when building WiFi is locked to a corporate network. A SIM-enabled terminal like Zeller Terminal 1 covers all of these without the customer needing to provide WiFi access or you needing to set up a hotspot.",
  },
  {
    q: 'Can I use payment links for commercial fitout invoices?',
    a: "Yes — payment links are the right tool for commercial fitout invoicing. Send a Zeller or Tyro payment link to the shop owner, office manager, or accounts payable after each progress stage. They pay from their system or phone without needing to be on site when you finish. For large commercial fitouts, split the contract into deposit, framing completion, and final fix-out payment to match cash flow to the build schedule.",
  },
  {
    q: 'Zeller vs Square for carpenters — which is better?',
    a: "Zeller Terminal 1 is the better primary terminal for most carpenters. The 1.4% in-person rate is lower than Square\'s 1.6%, hardware is $99 vs $329, and the SIM plan covers every site without WiFi. Square Terminal\'s main advantage is offline mode — it stores card data and processes when connectivity is restored, which is useful in true dead zones. The typical carpenter recommendation is Zeller as primary for all normal site work, with Square as a backup for confirmed dead-zone locations.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Carpenters in Australia (2026)',
    description: 'Carpenters work on new builds, renovations, and remote sites. Here is the best EFTPOS for Australian carpenters in 2026.',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-carpenters-australia-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Carpenters in Australia (2026)', item: `${SITE}/blog/best-eftpos-carpenters-australia-2026` },
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

export default function BestEftposCarpentersPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Carpenters in Australia (2026)"
        description="Carpenters work on new builds, renovations, and remote sites. Here is the best EFTPOS for Australian carpenters in 2026."
        canonical="/blog/best-eftpos-carpenters-australia-2026"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&h=630&fit=crop&crop=center&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&h=560&fit=crop&crop=center&q=80"
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
            Best EFTPOS for Carpenters in Australia (2026)
          </h1>
          <p className="hero-sub">
            New home frames, renovation sites, workshops, and commercial fitouts — carpentry work demands an EFTPOS that handles site conditions, custom job deposits, and remote invoicing.
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
            Carpenters work across more contexts than most trades: new home framing on bare estates, residential renovations, custom joinery and furniture from workshops, and commercial fitouts in shops and offices. Each context brings a different payment challenge — no WiFi on site, deposits needed before custom work begins, and remote invoicing for commercial clients. The right EFTPOS handles all of these without switching between providers.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Where carpenters need reliable payment</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: 'New home framing sites', body: "House framing happens on new estates before any services are connected. There is no WiFi, no landline, and often patchy phone signal. A SIM terminal with 4G is the only reliable option." },
              { title: 'Renovation sites', body: "Renovation work often involves homes that are vacated mid-project, with internet disconnected. Even occupied homes may have their router moved or inaccessible during structural work." },
              { title: 'Custom joinery and workshops', body: "Custom joinery and furniture orders require deposits before materials are purchased. Payment links sent with the quote let customers pay online before work starts." },
              { title: 'Commercial fitouts', body: "Shop and office fitouts are done after hours when corporate WiFi is inaccessible. SIM connectivity handles on-site payments; payment links handle remote invoicing to the client\'s accounts team." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for carpenters</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most carpenters</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan covers the full range of carpenter payment scenarios. Framing sites, renovation jobs, and commercial fitouts all work on the same terminal. Add Zeller Payment Links for custom joinery deposits and commercial invoicing, and you have a complete payment stack from a single provider.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            1.4% in-person rate, same-day settlement, $99 hardware. For carpentry businesses with multiple crews or workshop staff, additional Zeller terminals and team accounts can be added centrally.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — backup for dead zones</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> with offline mode covers framing sites in rural areas or locations with poor Optus 4G coverage. Cards are stored locally and processed when signal is restored. Most carpenters use Zeller as their primary terminal and Square as a backup for confirmed dead-zone jobs.
          </p>
        </section>

        <section className="mb-10">
          <div id="recommendation" className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for carpenters</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Site and workshop payments:</strong> Zeller Terminal 1 + Optus SIM ($15/mo). Works on framing sites, renovation jobs, and after-hours commercial fitouts.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Custom joinery deposits and commercial invoicing:</strong> Zeller or Tyro payment links — send with the quote so the customer pays before materials are ordered.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Backup:</strong> Square Terminal for confirmed dead-zone sites with no mobile signal.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/carpenters" className="text-sm font-semibold text-brand-blue hover:underline">Full carpenters EFTPOS guide →</Link>
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
        <RelatedLinks slug="carpenters" type="trade" />
      </div>
    </>
  )
}
