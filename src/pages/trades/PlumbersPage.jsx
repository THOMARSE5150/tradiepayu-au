import { Link } from 'react-router-dom'
import RelatedLinks from '../../components/RelatedLinks'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import Meta from '../../components/Meta'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'By Trade', href: '/trades' },
  { label: 'Best EFTPOS for Plumbers' },
]

const faqs = [
  { q: 'What is the best EFTPOS for plumbers?', a: 'Zeller Terminal 1 with the SIM plan is the top pick. Emergency call-outs happen at any hour and in locations without WiFi — the SIM terminal handles both. Same-day settlement is critical when you\'re buying parts same-day as the repair.' },
  { q: 'How do plumbers get paid for emergency call-outs?', a: 'Zeller Tap to Pay on your phone is the default emergency payment method — always on you, 1.4% rate. If the client isn\'t available, send a Zeller payment link. Same-day settlement means you can buy parts that evening if needed.' },
  { q: 'Does EFTPOS work underground for plumbing work?', a: 'Mobile signal is usually unavailable underground or in enclosed below-grade environments. Square Terminal offline mode is the only option for taking payment in these locations.' },
  { q: 'Is it hard to set up compared to a bank?', a: 'No — this is one of the biggest advantages of modern EFTPOS providers over banks. Providers like Zeller and Square approve accounts online in minutes with just your ABN. Bank merchant accounts require paperwork, branch visits, and often take days or weeks.' },
  { q: 'Can my team all use the same account?', a: 'Yes — Zeller and Square both support multiple terminals on one account. Payments from all devices settle centrally, with a full transaction log per terminal. No per-terminal rental fees — you purchase the hardware outright.' },
  { q: 'Can I take payments over the phone?', a: 'Yes — Zeller supports MOTO (phone) payments at 1.75% + $0.25 via the Virtual Terminal. Stripe is also strong for remote payments. Useful for taking deposits from customers who can\'t be on site.' },
]

const SITE = 'https://tradiepayau.directory'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', name: 'Best EFTPOS for Plumbers in Australia (2026)', description: 'After-hours emergencies, underground work, and same-day parts — the best EFTPOS payment setup for Australian plumbing businesses.', url: `${SITE}/trades/plumbers`, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'By Trade', item: `${SITE}/trades` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Plumbers in Australia (2026)', item: `${SITE}/trades/plumbers` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]

export default function PlumbersPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Plumbers in Australia (2026)"
        description="After-hours emergencies, underground work, and same-day parts — the best EFTPOS payment setup for Australian plumbing businesses."
        canonical="/trades/plumbers"
        ogType="article"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        {/* Trade hero image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1400&h=560&fit=crop&crop=center&q=80"
            alt=""
            fetchPriority="high" className="w-full h-full object-cover"
            onError={e => { e.currentTarget.style.opacity = '0' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Trade Guide</span>
            <span>·</span><span>Updated March 2026</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Plumbers in Australia (2026)</h1>
          <p className="hero-sub">After-hours emergencies, underground work, and same-day parts. Here's the payment setup for plumbing businesses.</p>
          <nav className="jump-links">
            <a href="#challenges">Key Challenges</a>
            <a href="#picks">Top Picks</a>
            <a href="#scenarios">Job Scenarios</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <section id="challenges" className="section container-page">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-brand-dark mb-6"
        >
          What Makes Plumbing Different
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'After-hours emergency call-outs', body: 'Burst pipes, no hot water, blocked drains — plumbing emergencies don\'t wait for business hours. Payment infrastructure must work at 11pm with minimal friction.', rec: 'Zeller Tap to Pay on your phone — always available, 1.4% rate.' },
            { title: 'Underground and enclosed spaces', body: 'Inspecting or repairing underground pipes, working in slab voids, or under-floor access areas often means zero mobile signal.', rec: 'Square Terminal offline mode for confirmed zero-signal sites.' },
            { title: 'Same-day parts purchasing', body: 'A blocked drain or burst pipe often means a same-day run to the trade supplier. Same-day settlement is the difference between buying today and waiting until tomorrow.', rec: 'Zeller — same-day settlement to Zeller account.' },
            { title: 'Variable job values', body: 'From a $95 blocked drain clearance to a $12,000 hot water system replacement. The payment system needs to handle both without friction or high fixed fees.', rec: 'Flat-rate percentage (Zeller 1.4%) beats fixed-fee models at all job sizes.' },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              whileHover={{ y: -3 }}
              className="lg-light rounded-2xl p-5"
            >
              <h3 className="font-semibold text-brand-dark mb-2">{c.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">{c.body}</p>
              <div className="infobox py-2 px-2 text-xs text-brand-blue font-medium">Payment need: {c.rec}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="picks" className="section section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            Top Picks for Plumbers
          </motion.h2>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'SIM', 'Offline', 'Best for']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Primary</span></>, '1.4%', '$99', '✓ $15/mo', '✗', 'All plumbing — primary device'] },
              { cells: ['Zeller Tap to Pay', '1.4%', '$0', '✗ (phone data)', '✗', 'After-hours emergencies'] },
              { cells: ['Square Terminal', '1.6%', '$329', '✗', '✓', 'Underground, enclosed dead zones'] },
            ]}
          />
        </div>
      </section>

      <section id="scenarios" className="section container-page">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-brand-dark mb-6"
        >
          Payment Playbook by Job Type
        </motion.h2>
        <div className="space-y-4">
          {[
            { title: 'Emergency call-out — burst pipe, owner home', body: 'Tap with Zeller on your phone or Terminal before leaving. Same-day settlement into your Zeller account means you can order replacement parts that evening.' },
            { title: 'Emergency call-out — owner not home', body: 'Complete the repair, send a Zeller payment link via SMS. Add a photo of the completed work to the message for client confidence. Most clients pay within the hour.' },
            { title: 'Underground drain work — no signal', body: 'Use Square Terminal offline mode. Enable it before descending. Take payment in the pit, reconnect at surface. Ensure you reconnect within 24 hours.' },
            { title: 'Hot water system replacement — large job', body: 'Collect 30–50% deposit by Zeller payment link when the job is booked. Don\'t order the system until the deposit clears. Balance on completion via terminal or payment link.' },
            { title: 'Commercial plumbing — invoice to building manager', body: 'Email a Zeller or Stripe invoice to the facilities manager. Include ABN, job description, materials, labour, and GST. 14–30 day terms for commercial accounts.' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="flex gap-4"
            >
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
              <div>
                <h4 className="font-semibold text-brand-dark mb-1">{s.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FaqSection items={faqs} title="FAQ for Plumbers" />

      <RelatedLinks slug="plumbers" type="trade" />
    </>
  )
}
