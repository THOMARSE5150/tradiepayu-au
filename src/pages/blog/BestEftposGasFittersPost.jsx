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
  { label: 'Best EFTPOS for Gas Fitters in Australia (2026)' },
]

const comparisonHeaders = ['', 'Zeller Terminal 1', 'Square Terminal', 'Stripe WisePad 3']
const comparisonRows = [
  { highlight: true, cells: ['In-person rate', '1.4%', '1.6%', '1.7% + $0.10'] },
  { cells: ['Hardware cost', '$99', '$329', '$89'] },
  { cells: ['SIM connectivity', '✓ $15/mo', '✗', '✗'] },
  { cells: ['Offline mode', '✗', '✓', '✗'] },
  { cells: ['Settlement', 'Same day', 'Next day', '2 days'] },
  { cells: ['Works in plant rooms', 'Yes (SIM)', 'Needs hotspot', 'No'] },
  { cells: ['Works underground', 'Testing required', 'Offline backup', 'No'] },
]

const faqs = [
  {
    q: 'What is the best EFTPOS for gas fitters in Australia?',
    a: "Zeller Terminal 1 with the Optus SIM plan is the best EFTPOS for most gas fitters. Gas fitting work happens in commercial plant rooms, underground gas infrastructure, roof spaces, and on emergency call-outs after hours — all scenarios where building WiFi is inaccessible or nonexistent. The $15/month SIM means the terminal processes independently of any site network. At 1.4% in-person rate and same-day settlement, it handles both residential hot water call-outs and larger commercial gas work.",
  },
  {
    q: 'How do gas fitters take payment on emergency call-outs after hours?',
    a: "A SIM-enabled terminal like Zeller Terminal 1 is the right tool for after-hours emergency gas work. Hot water system failures and gas line faults don't happen during business hours — when you arrive at 9 pm without a building manager present, you need an EFTPOS that works on 4G without relying on anyone's WiFi credentials. Payment-on-completion is standard for emergency gas work, so collect as soon as the job is signed off.",
  },
  {
    q: 'Do gas fitters need SIM connectivity in their EFTPOS terminal?',
    a: "Yes, particularly for commercial gas work. Gas meters, plant rooms, and underground gas infrastructure in new estates are all areas with no accessible WiFi. Residential hot water jobs often have a homeowner present who can provide WiFi, but SIM connectivity removes that dependency entirely. For emergency call-outs — which are a core part of gas fitting work — SIM is essential.",
  },
  {
    q: 'How do gas fitters handle payment for large commercial gas fitting jobs?',
    a: "Large commercial gas fitting (new estate infrastructure, commercial plant room fit-outs) often involves staged payments: a deposit at contract signing, progress payments at key milestones, and a final payment on commissioning. Use Zeller or Tyro payment links to collect deposits and progress payments remotely — the facilities manager or developer can pay from an email link without being on site. For in-person commercial work, Zeller's 1.4% rate is the lowest available for tap-to-pay transactions.",
  },
  {
    q: 'Should gas fitters use surcharging?',
    a: "For residential hot water and small domestic jobs, most gas fitters absorb the 1.4% Zeller rate — the customer is already paying a call-out fee and a surcharge can feel jarring. For commercial gas work where the client is a business (developers, facilities managers, commercial tenants), disclosing a 1.4% surcharge on the quote is standard and generally accepted. At Zeller's rate, any surcharge you pass on is the lowest legally defensible amount in Australia.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Gas Fitters in Australia (2026)',
    description: 'Gas fitters handle emergency call-outs in plant rooms and underground infrastructure. The best EFTPOS for Australian gas fitters in 2026.',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1609205807107-b6cf6be5b6c9?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-gas-fitters-australia-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Gas Fitters in Australia (2026)', item: `${SITE}/blog/best-eftpos-gas-fitters-australia-2026` },
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

export default function BestEftposGasFittersPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Gas Fitters in Australia (2026)"
        description="Gas fitters handle emergency call-outs in plant rooms and underground infrastructure. The best EFTPOS for Australian gas fitters in 2026."
        canonical="/blog/best-eftpos-gas-fitters-australia-2026"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1609205807107-b6cf6be5b6c9?w=1200&h=630&fit=crop&crop=center&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1609205807107-b6cf6be5b6c9?w=900&h=560&fit=crop&crop=center&q=80"
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
            Best EFTPOS for Gas Fitters in Australia (2026)
          </h1>
          <p className="hero-sub">
            Emergency call-outs, underground gas infrastructure, and plant rooms without WiFi — gas fitting work demands an EFTPOS that works on its own connectivity.
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
            Gas fitters work across two distinct contexts: residential service work (hot water systems, gas appliance installs, emergency call-outs) and commercial gas fitting (plant room fit-outs, underground infrastructure on new estates, large development projects). Both share a common problem — payment is expected on completion, and WiFi is rarely accessible where the work happens.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Where gas fitters lose WiFi access</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: 'Commercial plant rooms', body: "Gas meters and plant rooms in commercial buildings are designed for equipment, not network access. Building WiFi does not reach these areas reliably. A SIM-enabled terminal is the only dependable option." },
              { title: 'Underground gas infrastructure', body: "New estate gas line work happens underground — in trenches and pits where mobile signal can be attenuated. Test your terminal's coverage on site; Square's offline mode is a backup for confirmed dead zones." },
              { title: 'Roof spaces and hot water systems', body: "Residential hot water and gas line work often takes place in roof spaces. Customers are sometimes home and can provide WiFi, but SIM connectivity removes that dependency." },
              { title: 'After-hours emergency call-outs', body: "Gas faults and hot water failures happen at any hour. You arrive without a building manager present, fix the fault, and need to collect payment on the spot. SIM connectivity is essential for after-hours work." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for gas fitters</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most gas fitters</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan is the right choice for gas fitters across residential and commercial work. Emergency call-outs, plant room jobs, and underground infrastructure work all process on the same terminal without requiring any site WiFi.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            1.4% in-person rate, same-day settlement, $99 hardware. For commercial gas fitting businesses running multiple vehicles, additional Zeller terminals share the same account with centralised settlement reporting.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — offline backup for dead zones</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> with offline mode handles confirmed dead-zone scenarios: underground pits with no mobile signal, basement plant rooms in dense commercial buildings. Cards are stored locally and processed when connectivity returns. Most gas fitters use Zeller as primary and Square as a rare backup.
          </p>
        </section>

        <section className="mb-10">
          <div id="recommendation" className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for gas fitters</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Residential and commercial service:</strong> Zeller Terminal 1 + Optus SIM ($15/mo). Works in plant rooms, roof spaces, and on emergency call-outs after hours.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Remote billing:</strong> Zeller or Tyro payment links for commercial deposits and milestone invoicing — send to developers or facilities managers by email.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Backup:</strong> Square Terminal for underground jobs and confirmed dead-zone sites.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/gas-fitters" className="text-sm font-semibold text-brand-blue hover:underline">Full gas fitters EFTPOS guide →</Link>
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
        <RelatedLinks slug="gas-fitters" type="trade" />
      </div>
    </>
  )
}
