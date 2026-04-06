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
  { label: 'Best EFTPOS for Glaziers in Australia (2026)' },
]

const comparisonHeaders = ['', 'Zeller Terminal 1', 'Square Terminal', 'Stripe Reader M2']
const comparisonRows = [
  { highlight: true, cells: ['In-person rate', '1.4%', '1.6%', '1.7% + $0.10'] },
  { cells: ['Hardware cost', '$99', '$329', '$69'] },
  { cells: ['SIM connectivity', '✓ $15/mo', '✗', '✗'] },
  { cells: ['Offline mode', '✗', '✓', '✗'] },
  { cells: ['Settlement', 'Same day', 'Next day', '2 days'] },
  { cells: ['Best for 24/7 emergency work', 'Yes', 'Backup', 'No'] },
]

const faqs = [
  {
    q: 'What is the best EFTPOS for glaziers in Australia?',
    a: "Zeller Terminal 1 with the SIM plan is the best EFTPOS for most glaziers. Emergency glazing — broken windows from storms, vandalism, or accidents — happens at any hour and in any location. The Optus SIM plan means you can take payment on a high-rise balcony, in a commercial building after hours, or on a new estate with no internet, without needing the customer's WiFi. At 1.4% in-person rate and same-day settlement, it is also the cheapest option for glaziers with consistent card volumes.",
  },
  {
    q: 'Do glaziers need SIM connectivity in their EFTPOS terminal?',
    a: "For emergency glazing, yes. Storm damage, break-ins, and accidents mean you arrive at unpredictable locations at unpredictable hours. High-rise apartments, commercial buildings after hours, and new estates all share one characteristic: no reliable WiFi for a payment terminal. Zeller's SIM plan eliminates this problem for $15/month on Optus mobile data.",
  },
  {
    q: 'What is the best EFTPOS for 24-hour emergency glazing?',
    a: "Zeller Terminal 1 + SIM plan. Emergency glazing requires immediate payment at job completion — the customer needs the window secured before you leave. A SIM-enabled terminal that works without WiFi is essential. Square Terminal is a useful backup for confirmed zero-signal locations (underground carparks, deep basements) where even mobile data is unavailable.",
  },
  {
    q: 'How do glaziers handle large insurance-related payments?',
    a: "Most insurance-related glazing jobs are billed directly to the insurer rather than collected on site. For jobs where the homeowner or business is paying directly, EFTPOS at completion is standard. For large commercial glass jobs ($5,000+), a payment link sent after job completion allows the client to pay from their accounting system without requiring physical presence. Zeller payment links (1.7%) and Tyro payment links (1.4% incl. GST) both work well for this.",
  },
  {
    q: 'Can glaziers take payment before the glass arrives?',
    a: "Yes — a deposit via payment link is standard for custom glass orders. Send a Zeller or Tyro payment link for 30-50% of the job value when the order is confirmed. The client pays from their phone. The remaining balance is collected on installation, either via terminal or a second payment link. This protects you from glass that has been cut to order if a job falls through.",
  },
  {
    q: 'Should glaziers use surcharging?',
    a: "On emergency glazing jobs where the customer is already stressed, surcharging can add friction at the worst moment. On larger commercial or residential jobs booked in advance, disclosing a 1.4% surcharge on the quote is common and accepted. At Zeller's rate, you can choose to absorb the fee (maximising customer goodwill) or pass it on (maximising revenue). Either way, 1.4% is the lowest defensible surcharge rate in Australia.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Glaziers in Australia (2026)',
    description: 'Emergency glaziers work at any hour, in high-rise buildings, and on sites without WiFi. Here is the best EFTPOS setup for Australian glaziers in 2026.',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-glaziers-australia-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Glaziers in Australia (2026)', item: `${SITE}/blog/best-eftpos-glaziers-australia-2026` },
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

export default function BestEftposGlaziersPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Glaziers in Australia (2026)"
        description="Emergency glaziers work at any hour, in high-rise buildings, and on sites without WiFi. Here is the best EFTPOS setup for Australian glaziers in 2026."
        canonical="/blog/best-eftpos-glaziers-australia-2026"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop&crop=center&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=560&fit=crop&crop=center&q=80"
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
            Best EFTPOS for Glaziers in Australia (2026)
          </h1>
          <p className="hero-sub">
            Emergency glazing is 24/7, on high-rise balconies, and in commercial buildings after hours. Your EFTPOS cannot depend on the building's WiFi.
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
            Emergency glazing is among the most time-sensitive and connectivity-challenged tradie work in Australia. A storm shatters a residential window at 2am, or a break-in destroys a shopfront at midnight — you arrive, do the work, and need to take payment before you leave. The customer is stressed, it is the middle of the night, and the building's internet is either off or inaccessible.
          </p>
          <p>
            The right EFTPOS for glaziers must work without customer WiFi. Everything else — rate, settlement speed, invoicing — matters second.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Provider comparison for glaziers</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most glaziers</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the Optus SIM plan ($15/month) is the primary pick. Emergency glazing jobs happen in residential apartments (no WiFi access), commercial buildings after hours (WiFi disabled or locked), and storm-damaged homes where the power may be out. The SIM terminal processes on Optus 4G with no site infrastructure required.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            1.4% in-person rate, same-day settlement, $99 hardware. No monthly terminal fees beyond the optional SIM plan.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — backup for zero-signal locations</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> with offline mode is the backup for glaziers who work in underground carparks, deep basement shopfronts, or rural properties with no Optus coverage. Cards are accepted offline and processed when connectivity is restored.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mt-4">
            {[
              { title: 'Residential emergency glazing', body: "Zeller + SIM. Works in apartments, houses, and townhouses regardless of whether the customer's router is accessible." },
              { title: 'Commercial after-hours', body: "Zeller + SIM handles most commercial locations. Square offline mode as backup for underground carparks and basement retail." },
              { title: 'High-rise balconies and facades', body: "Optus 4G typically has excellent coverage at height. Zeller SIM is the right call for glaziers doing multi-storey work." },
              { title: 'Custom glass deposits', body: "Send a Zeller or Tyro payment link when the order is placed. Balance collected on installation via terminal." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <div id="recommendation" className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for glaziers</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Primary:</strong> Zeller Terminal 1 + Optus SIM ($15/mo). For all emergency and standard glazing work — residential, commercial, high-rise.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Backup:</strong> Square Terminal. Underground carparks, basement shopfronts, rural properties with no Optus coverage.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/glaziers" className="text-sm font-semibold text-brand-blue hover:underline">Full glaziers EFTPOS guide →</Link>
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
        <RelatedLinks slug="glaziers" type="trade" />
      </div>
    </>
  )
}
