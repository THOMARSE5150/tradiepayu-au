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
  { label: 'Best EFTPOS for HVAC Technicians in Australia (2026)' },
]

const comparisonHeaders = ['', 'Zeller Terminal 1', 'Square Terminal', 'Stripe Reader M2']
const comparisonRows = [
  { highlight: true, cells: ['In-person rate', '1.4%', '1.6%', '1.7% + $0.10'] },
  { cells: ['Hardware cost', '$99', '$329', '$69'] },
  { cells: ['SIM connectivity', '✓ $15/mo', '✗', '✗'] },
  { cells: ['Offline mode', '✗', '✓', '✗'] },
  { cells: ['Settlement', 'Same day', 'Next day', '2 days'] },
  { cells: ['Works in plant rooms', 'Yes (SIM)', 'Offline backup', 'No'] },
  { cells: ['Works in roof cavities', 'Yes (SIM)', 'Offline backup', 'No'] },
]

const faqs = [
  {
    q: 'What is the best EFTPOS for HVAC technicians in Australia?',
    a: "Zeller Terminal 1 with the SIM plan is the best EFTPOS for most HVAC technicians. Air conditioning and mechanical services work happens in plant rooms, roof cavities, ceiling spaces, and commercial buildings where customer WiFi is inaccessible or nonexistent. The Optus SIM plan ($15/month) means the terminal processes independently of any site internet. At 1.4% in-person rate and same-day settlement, it covers both residential service calls and larger commercial HVAC work.",
  },
  {
    q: 'Do HVAC technicians need SIM connectivity in their EFTPOS terminal?',
    a: "Yes, especially for commercial work. Rooftop plant rooms, ceiling-mounted air handlers, mechanical floors in high-rise buildings, and data centre cooling systems all share a common characteristic: no accessible WiFi. For residential service calls, customers are usually home and can provide WiFi access, but SIM connectivity eliminates the step entirely and is essential for commercial and after-hours work.",
  },
  {
    q: 'What is the best EFTPOS for air conditioning emergency call-outs?',
    a: "Zeller Terminal 1 + SIM. Air conditioning failures in summer (and heating failures in winter) are genuine emergencies. You arrive, diagnose, fix, and collect — often outside business hours. A SIM-enabled terminal that works in any building without requiring WiFi access is the safest choice. Square Terminal's offline mode is a backup for sites with no mobile signal at all.",
  },
  {
    q: 'How do HVAC businesses handle large commercial service agreements?',
    a: "Commercial HVAC contracts (quarterly service agreements, maintenance plans) are typically invoiced monthly or quarterly. Use Zeller or Square invoicing with embedded pay-now buttons so the facilities manager can approve and pay from their inbox. For large one-off commercial jobs ($10,000+), Tyro's Payment Links at 1.4% incl. GST are the cheapest published online rate. Collect deposits via payment link when the order is confirmed.",
  },
  {
    q: 'Should HVAC technicians use surcharging?',
    a: "For residential service calls and small jobs, absorbing the 1.4% Zeller rate is common — the client is already paying a call-out fee. For larger commercial installations and service agreements where the client is a business, disclosing a 1.4% surcharge on the quote is standard and accepted. At Zeller's rate, the surcharge is the lowest legally defensible amount in Australia.",
  },
  {
    q: 'Can HVAC technicians take payment from building managers remotely?',
    a: "Yes — payment links are the right tool for commercial HVAC billing. Send a Zeller Payment Link (1.7%) or Tyro Payment Link (1.4% incl. GST) to the facilities manager or accounts payable email after completing the job. They pay from their accounting system or phone without needing to be on site. This is particularly useful for after-hours emergency work where the decision-maker isn't present when you finish.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for HVAC Technicians in Australia (2026)',
    description: 'HVAC technicians work in plant rooms, roof cavities, and commercial buildings with no WiFi. Here is the best EFTPOS setup for Australian HVAC and air conditioning technicians in 2026.',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-hvac-australia-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for HVAC Technicians in Australia (2026)', item: `${SITE}/blog/best-eftpos-hvac-australia-2026` },
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

export default function BestEftposHVACPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for HVAC Technicians in Australia (2026)"
        description="HVAC technicians work in plant rooms, roof cavities, and commercial buildings with no WiFi. Here is the best EFTPOS setup for Australian HVAC and air conditioning technicians in 2026."
        canonical="/blog/best-eftpos-hvac-australia-2026"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=630&fit=crop&crop=center&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&h=560&fit=crop&crop=center&q=80"
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
            Best EFTPOS for HVAC Technicians in Australia (2026)
          </h1>
          <p className="hero-sub">
            Plant rooms, rooftop units, ceiling cavities, and commercial buildings after hours — HVAC work demands an EFTPOS that works where building WiFi does not reach.
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
            HVAC technicians span two very different market segments: residential air conditioning service (split systems, ducted units, seasonal call-outs) and commercial mechanical services (chillers, cooling towers, AHUs, BMS-linked systems). Both involve working in spaces where WiFi is unavailable or inaccessible. The right EFTPOS handles both without requiring the customer's internet credentials.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Where HVAC technicians lose WiFi access</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: 'Roof plant rooms', body: "Commercial rooftop plant rooms are physically isolated from building networks. Zeller's SIM terminal has excellent 4G signal at height — often better than ground level." },
              { title: 'Ceiling voids and roof cavities', body: "Domestic ducted system work happens in ceiling spaces where even phone signal is sometimes attenuated. SIM connectivity is more robust than relying on a WiFi hotspot from the roof." },
              { title: 'Commercial mechanical floors', body: "High-rise mechanical floors are designed for HVAC equipment, not network access. Building WiFi rarely reaches these areas reliably." },
              { title: 'After-hours emergency work', body: "Air conditioning failures on 35°C summer days mean you work after hours when building managers are not present to provide WiFi credentials." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for HVAC technicians</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most HVAC technicians</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan handles the full range of HVAC payment scenarios. Residential service calls, commercial after-hours work, rooftop plant room jobs, and emergency call-outs all work on the same terminal without any configuration change.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            1.4% in-person rate, same-day settlement, $99 hardware. For commercial HVAC businesses running multiple vans, additional Zeller terminals can be added to the same account with centralised settlement reporting.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — offline backup</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> with offline mode handles genuine dead-zone scenarios: underground carpark HVAC rooms, basement data centres, and rural properties with no Optus 4G coverage. Cards are stored locally and processed when connectivity is restored. Most HVAC technicians use Zeller as primary and Square as a rare backup.
          </p>
        </section>

        <section className="mb-10">
          <div id="recommendation" className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for HVAC technicians</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Residential and commercial service:</strong> Zeller Terminal 1 + Optus SIM ($15/mo). Works in plant rooms, rooftops, and ceiling cavities.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Remote billing:</strong> Zeller or Tyro payment links for commercial invoicing — send to facilities managers after completion.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Backup:</strong> Square Terminal for underground and confirmed dead-zone jobs.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/hvac" className="text-sm font-semibold text-brand-blue hover:underline">Full HVAC EFTPOS guide →</Link>
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
        <RelatedLinks slug="hvac" type="trade" />
      </div>
    </>
  )
}
