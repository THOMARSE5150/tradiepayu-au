import { Link } from 'react-router-dom'
import RelatedLinks from '../../components/RelatedLinks'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import Meta from '../../components/Meta'
import QuickVerdict from '../../components/QuickVerdict'

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
  { q: 'How much does EFTPOS cost a plumber per month?', a: 'At $6,000/month in card revenue (common for a sole-trader plumber), Zeller costs $84/month in processing fees plus $15 SIM = $99 total. Square at the same volume is $96 (1.6%, no SIM). The gap is small — for most plumbers the settlement speed and connectivity matter more than the rate difference.' },
  { q: 'Should I take a deposit before arriving for a plumbing job?', a: 'For large jobs (hot water system replacement, drain relining, bathroom renovation), yes. Send a Zeller or Stripe payment link for 20–50% upfront. Reduces no-shows and covers parts cost. The remaining balance is taken on completion with the terminal.' },
  { q: 'What if I need to buy parts mid-job and need funds immediately?', a: 'Zeller settles the same business day. Complete the first stage payment at the property, then your Zeller account reflects the funds within hours. This is the main reason plumbers prefer Zeller over Square (next-business-day) for emergency work.' },
  { q: 'Can I use EFTPOS for commercial plumbing invoices?', a: 'Yes — for body corporates, commercial tenancies, and property managers, send a Zeller or Stripe invoice to the accounts email. Include your ABN, job description, parts, labour, and GST. Most commercial accounts pay within 14–30 days. Stripe supports automated payment reminders if invoices go unpaid.' },
]

const SITE = 'https://tradiepayau.directory'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', name: 'Best EFTPOS for Plumbers in Australia (2026)', description: 'After-hours emergencies, underground work, and same-day parts — the best EFTPOS payment setup for Australian plumbing businesses.', url: `${SITE}/trades/plumbers`, datePublished: '2026-01-15', author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
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
            src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=900&h=560&fit=crop&crop=center&q=80"
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
            <a href="#picks">Comparison</a>
            <a href="#challenges">Context</a>
            <a href="#scenarios">Job Scenarios</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>
      <QuickVerdict
        pick="Zeller Terminal 1 + SIM"
        rate="1.4%"
        hardware="$99 + $15/mo SIM"
        reason="Same-day settlement for parts purchasing on emergency call-outs."
        backup="Square Terminal for underground access"
        providerSlug="zeller"
      />

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
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
            <p className="text-sm font-semibold text-green-800 mb-1">Real savings example</p>
            <p className="text-sm text-green-700">A plumber doing <strong>$6,000/month</strong> in card payments saves <strong>$120/year</strong> switching to Zeller (1.4%) from Square (1.6%). At $10,000/month the saving is <strong>$240/year</strong> — enough to cover the SIM plan cost twice over.</p>
          </div>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'SIM', 'Offline', 'Best for']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Primary</span></>, '1.4%', '$99', '✓ $15/mo', '✗', 'All plumbing — primary device'] },
              { cells: ['Zeller Tap to Pay', '1.4%', '$0', '✗ (phone data)', '✗', 'After-hours emergencies'] },
              { cells: ['Square Terminal', '1.6%', '$329', '✗', '✓', 'Underground, enclosed dead zones'] },
            ]}
          />
          <p className="mt-4 text-xs text-slate-500">Need a deeper comparison? <Link to="/compare/zeller-vs-square" className="text-brand-blue font-medium hover:underline">Zeller vs Square — full head-to-head →</Link></p>
        </div>
      </section>

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
            <details key={i} className="lg-light rounded-2xl p-4 group open:ring-1 open:ring-brand-blue/20 transition-all">
              <summary className="font-semibold text-brand-dark cursor-pointer list-none flex items-center justify-between gap-3">
                <span>{c.title}</span>
                <svg className="w-4 h-4 text-slate-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
              </summary>
              <p className="text-sm text-slate-600 leading-relaxed mt-3 mb-2">{c.body}</p>
              <div className="infobox py-2 px-2 text-xs text-brand-blue font-medium">Payment need: {c.rec}</div>
            </details>
          ))}
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
