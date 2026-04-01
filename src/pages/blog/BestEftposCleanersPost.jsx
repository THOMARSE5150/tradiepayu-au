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
  { label: 'Best EFTPOS for Cleaners in Australia (2026)' },
]

const comparisonHeaders = ['', 'Zeller Terminal 1', 'Square Terminal', 'Stripe Reader M2']
const comparisonRows = [
  { highlight: true, cells: ['In-person rate', '1.4%', '1.6%', '1.7% + $0.10'] },
  { cells: ['Hardware cost', '$99', '$329', '$69'] },
  { cells: ['SIM connectivity', '✓ $15/mo', '✗', '✗'] },
  { cells: ['Offline mode', '✗', '✓', '✗'] },
  { cells: ['Settlement', 'Same day', 'Next day', 'Next day'] },
  { cells: ['Works in occupied homes', 'Yes (WiFi or SIM)', 'Offline backup', 'No'] },
  { cells: ['Works in new builds / empty offices', 'Yes (SIM)', 'Needs hotspot', 'No'] },
]

const faqs = [
  {
    q: 'What is the best EFTPOS for cleaners in Australia?',
    a: "Zeller Terminal 1 with the Optus SIM plan is the best EFTPOS for most Australian cleaning businesses. New build cleans, end-of-lease jobs, and post-construction cleans all happen in properties without WiFi. The $15/month SIM plan means the terminal processes independently of any property\'s internet. At 1.4% in-person rate and same-day settlement, it covers both small recurring residential cleans and large commercial one-off jobs.",
  },
  {
    q: 'How do cleaning businesses set up recurring billing for regular clients?',
    a: "Recurring invoicing is the most efficient payment setup for weekly and fortnightly residential cleaning clients. Zeller and Square both support automatic recurring invoices with embedded pay-now links. Set up the recurring schedule once — invoices are sent and paid automatically without any manual action each cycle. For clients who prefer direct debit, GoCardless integrates with both platforms for bank-authorised automatic debits.",
  },
  {
    q: 'How do cleaners collect payment when the customer is not home?',
    a: "Payment links are the standard solution when clients aren\'t present during their clean. Send a Zeller Payment Link or Square invoice to the client\'s phone or email after completing the job — they pay remotely without needing to be home. For recurring clients, set up automatic invoicing so payment is triggered immediately after each clean without requiring any manual step from either party.",
  },
  {
    q: 'Do cleaners need SIM connectivity in their EFTPOS terminal?',
    a: "SIM connectivity is essential for new builds, end-of-lease cleans, and commercial post-construction work where no WiFi exists. For occupied homes, the homeowner\'s WiFi is usually accessible — but a SIM terminal eliminates the step of asking for credentials and works in every scenario. End-of-lease and vacancy cleans are increasingly common for cleaning businesses and always lack WiFi.",
  },
  {
    q: 'What is the best payment setup for commercial cleaning invoicing?',
    a: "Commercial cleaning contracts — strata common areas, offices, post-construction cleans — are best invoiced digitally with payment links rather than collected in person. Zeller and Square invoicing lets you send a pay-now link to the building manager or accounts payable contact after the clean is complete. For large one-off post-construction and end-of-lease cleans, Tyro Payment Links at 1.4% incl. GST are the cheapest published online rate.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Cleaners in Australia (2026)',
    description: 'Cleaners work in occupied and unoccupied premises with recurring clients. The best EFTPOS setup for Australian cleaning businesses in 2026.',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-cleaners-australia-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Cleaners in Australia (2026)', item: `${SITE}/blog/best-eftpos-cleaners-australia-2026` },
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

export default function BestEftposCleanersPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Cleaners in Australia (2026)"
        description="Cleaners work in occupied and unoccupied premises with recurring clients. The best EFTPOS setup for Australian cleaning businesses in 2026."
        canonical="/blog/best-eftpos-cleaners-australia-2026"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=630&fit=crop&crop=center&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=900&h=560&fit=crop&crop=center&q=80"
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
            Best EFTPOS for Cleaners in Australia (2026)
          </h1>
          <p className="hero-sub">
            New builds, end-of-lease cleans, and regular residential clients — cleaning businesses need EFTPOS that works in empty properties and sends payment links when customers aren\'t home.
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
            Cleaning businesses span two distinct segments: recurring residential clients (weekly, fortnightly home cleans where the customer is often absent) and commercial or one-off work (end-of-lease cleans, post-construction cleans, office cleaning). Both require different payment approaches — recurring automation for residential, and digital invoicing with payment links for commercial. The right EFTPOS setup handles both efficiently.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Where cleaners face payment challenges</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: 'New builds and vacant properties', body: "Post-construction cleans and new build handover cleans take place in properties with no active WiFi service. A SIM-enabled terminal is essential — there is no alternative network to fall back on." },
              { title: 'End-of-lease cleans', body: "End-of-lease cleans happen after the tenant has vacated and before the landlord reconnects services. No WiFi, no customer present, often tight timing. SIM connectivity and payment links are the only practical options." },
              { title: 'Customer not present during residential cleans', body: "Many regular residential clients provide a key and are at work during their clean. Payment links sent after completion are the simplest solution — no card terminal interaction needed." },
              { title: 'Commercial premises outside business hours', body: "Office and commercial cleaning often happens early morning or after hours when staff are gone and building networks may not be accessible. SIM connectivity covers these scenarios reliably." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for cleaners</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most cleaning businesses</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan handles in-person payments when clients are home, processes independently in new builds and empty properties, and supports payment links for absent clients — all on the same account.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            1.4% in-person rate, same-day settlement, $99 hardware. Zeller\'s invoicing and recurring invoice features handle regular residential client billing with minimal manual overhead.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — offline backup</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> with offline mode is a useful backup for rural properties and areas with poor Optus 4G coverage. Cards are stored locally and processed when connectivity is restored. Square\'s recurring billing tools are also strong for residential cleaning businesses that prefer not to use payment links.
          </p>
        </section>

        <section className="mb-10">
          <div id="recommendation" className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for cleaners</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Residential and commercial cleaning:</strong> Zeller Terminal 1 + Optus SIM ($15/mo). Works in new builds, empty offices, and occupied homes without WiFi.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Absent clients and commercial invoicing:</strong> Zeller or Tyro payment links — send after the clean is complete for instant remote payment.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Backup:</strong> Square Terminal for rural properties and confirmed dead-zone locations.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/cleaners" className="text-sm font-semibold text-brand-blue hover:underline">Full cleaner EFTPOS guide →</Link>
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
        <RelatedLinks slug="cleaners" type="trade" />
      </div>
    </>
  )
}
