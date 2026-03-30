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
  { label: 'Best EFTPOS for Gas Fitters' },
]

const challenges = [
  { title: 'Underground service areas — mobile dead zones', body: 'Gas main connections and sub-metre work often occur in utility corridors, basement plant rooms, and underground service areas where mobile coverage drops out entirely. WiFi-only terminals fail, and many SIM terminals struggle with weak signal.', rec: 'Zeller Terminal 1 + SIM — Optus network with offline mode; send a payment link to collect remotely after the job.' },
  { title: 'Emergency gas leak call-outs — 24/7 billing', body: 'Emergency gas isolations and leak repairs happen at 2am on weekends. The homeowner is stressed, you need to bill immediately at the job, and the surcharge conversation needs to be simple. Carrying a reliable terminal is non-negotiable.', rec: 'Zeller Terminal 1 + SIM always in the van. Set after-hours rate clearly at booking — no surprises at payment time.' },
  { title: 'Dual billing on new gas connections', body: 'When connecting a new estate to the gas network, you may invoice the gas network operator (e.g. Jemena, Evoenergy) for infrastructure work and the homeowner separately for internal fit-out. Two different invoice formats, two different billing workflows.', rec: 'Stripe invoicing for network operator billing (formal, ABN, scope). Zeller payment link for homeowner balance.' },
  { title: 'Licensed work — ABN and licence on every invoice', body: 'Gas fitting is a licensed trade in every Australian state. Every invoice must show your gas fitting licence number, ABN, and scope of works — especially for compliance certificates and inspections. A receipt-only terminal is not enough.', rec: 'Stripe invoicing for full tax invoices with ABN, licence number, and gas cert reference on every job.' },
]

const faqs = [
  { q: 'What is the best EFTPOS for gas fitters?', a: 'Zeller Terminal 1 with SIM for on-site and emergency call-out payments, and Stripe invoicing for network operator billing and compliance certificate work. Gas fitting involves dead zones in plant rooms and underground service areas — the SIM terminal with Optus mobile data handles connectivity where WiFi-only devices cannot.' },
  { q: 'How should gas fitters invoice for emergency after-hours call-outs?', a: 'Use a Zeller payment link sent via SMS at the end of the job, or tap the Zeller Terminal 1 on site. Clearly state your after-hours rate at booking — include it in the payment description. For recurring commercial clients, send a Stripe invoice with itemised after-hours and standard rates, due within 7 days.' },
  { q: 'How do gas fitters bill a gas network operator for connection work?', a: 'Network operators like Jemena and Evoenergy require formal tax invoices with your ABN, gas licence number, scope of works, and GST breakdown. Use Stripe invoicing to generate professional invoices. Keep a copy for your compliance records — these invoices are part of your paper trail for auditing purposes.' },
  { q: 'Do gas fitters need their licence number on invoices?', a: 'Yes. In all Australian states and territories, gas fitting work must be carried out by a licensed gas fitter, and invoices for licensed work must include the licence number. Stripe invoicing lets you add custom fields for your licence number and ABN on every invoice template, ensuring you never omit this detail.' },
]

const SITE = 'https://tradiepayau.directory'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', name: 'Best EFTPOS for Gas Fitters in Australia (2026)', description: 'Underground dead zones, emergency call-outs, and dual billing on gas connections — the best EFTPOS and payment setup for Australian gas fitters.', url: `${SITE}/trades/gas-fitters`, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'By Trade', item: `${SITE}/trades` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Gas Fitters', item: `${SITE}/trades/gas-fitters` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]

export default function GasFittersPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Gas Fitters in Australia (2026)"
        description="Underground dead zones, emergency call-outs, and dual billing on gas connections — the best EFTPOS and payment setup for Australian gas fitters."
        canonical="/trades/gas-fitters"
        ogType="article"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1609205807107-b6cf6be5b6c9?w=1400&h=560&fit=crop&crop=center&q=80" alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta"><span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Trade Guide</span><span>·</span><span>Updated March 2026</span></div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Gas Fitters in Australia (2026)</h1>
          <p className="hero-sub">Underground dead zones, 2am emergency call-outs, and dual billing on gas connections. Here's the payment setup that works for gas fitters.</p>
          <nav className="jump-links"><a href="#challenges">Key Challenges</a><a href="#picks">Top Picks</a><a href="#scenarios">Job Scenarios</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>

      <section id="challenges" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">What Makes Gas Fitting Different</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {challenges.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }} whileHover={{ y: -3 }} className="lg-light rounded-2xl p-5">
              <h3 className="font-semibold text-brand-dark mb-2">{c.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">{c.body}</p>
              <div className="infobox py-2 px-2 text-xs text-brand-blue font-medium">Payment need: {c.rec}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="picks" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Top Picks for Gas Fitters</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} whileHover={{ y: -3 }} className="lg-blue rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-white flex items-center justify-center font-bold">Z</div>
                <div><h3 className="font-bold text-brand-dark">Zeller Terminal 1 + SIM</h3><span className="badge badge-gold">Best for Gas Fitters</span></div>
              </div>
              <p className="text-sm text-slate-600 mb-4">Optus SIM connectivity for plant rooms and service corridors. Reliable for emergency call-outs at any hour. Payment links let you collect remotely when signal drops mid-job. 1.4% rate, same-day settlement.</p>
              <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                {[['Rate', '1.4%'], ['Terminal', '$99'], ['SIM', '$15/mo'], ['Settlement', 'Same day']].map(([l, v], i) => (
                  <div key={i} className="lg-light rounded-lg p-2"><span className="block text-slate-500">{l}</span><span className="font-bold text-brand-dark">{v}</span></div>
                ))}
              </div>
              <Link to="/providers/zeller" className="btn-primary block text-center text-sm">Full Zeller Review →</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.07 }} whileHover={{ y: -3 }} className="lg-light rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">St</div>
                <div><h3 className="font-bold text-brand-dark">Stripe Invoicing</h3><span className="badge badge-muted">Network Operator & Compliance Billing</span></div>
              </div>
              <p className="text-sm text-slate-600 mb-4">Professional tax invoices for gas network operators and compliance certificate work. Include ABN, gas licence number, scope, and GST on every invoice. Meets the formal requirements of Jemena, Evoenergy, and similar operators.</p>
              <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                {[['Rate', '1.7%+$0.10'], ['Hardware', 'None needed'], ['Invoicing', '✓ Full'], ['Settlement', '2 days']].map(([l, v], i) => (
                  <div key={i} className="lg-light rounded-lg p-2"><span className="block text-slate-500">{l}</span><span className="font-bold text-brand-dark">{v}</span></div>
                ))}
              </div>
              <Link to="/providers/stripe" className="btn-tertiary block text-center text-sm">Full Stripe Review →</Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="scenarios" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Payment Playbook by Job Type</motion.h2>
        <div className="space-y-4">
          {[
            { title: 'Emergency gas leak isolation — after hours', body: 'Take the Zeller Terminal 1 + SIM in the van at all times. Tap for full payment at job completion. State your after-hours rate clearly at the time of booking confirmation — customers who agree to the rate before you arrive rarely dispute at payment time. Send a Stripe invoice for the record if a receipt is required.' },
            { title: 'New residential gas connection', body: 'Two-part billing: send a Stripe invoice to the homeowner for internal fit-out (appliance connections, isolation valves, compliance cert fee). If billing the network operator separately for infrastructure, use a second Stripe invoice with your ABN and licence number itemised against each line of work.' },
            { title: 'Commercial kitchen — appliance changeover', body: 'Larger jobs with a property manager or hospitality group involved need a formal tax invoice. Use Stripe to issue invoice on job completion with your gas licence number, ABN, and itemised appliance work. For deposit on major appliance fit-outs (>$2,000), send a Zeller payment link at booking.' },
            { title: 'Routine service and compliance certificate', body: 'Fast tap-and-go on the Zeller terminal for residential services. For rental properties where the landlord pays — not the tenant — send a Zeller payment link via SMS to the property manager after the job. Include your compliance certificate number in the payment description so they have it for their records.' },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }} className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
              <div><h4 className="font-semibold text-brand-dark mb-1">{s.title}</h4><p className="text-sm text-slate-600 leading-relaxed">{s.body}</p></div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Gas Fitter EFTPOS Comparison</motion.h2>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'SIM', 'Invoicing', 'Best for']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Top pick</span></>, '1.4%', '$99', '✓ $15/mo', '✓ Links', 'On-site + emergency call-outs'] },
              { cells: ['Stripe', '1.7% + $0.10', 'None needed', '✓ optional', '✓ Full invoicing', 'Network operator & compliance billing'] },
              { cells: ['Zeller Tap to Pay', '1.4%', '$0', '✗ (phone data)', '✓ Links', 'Small residential jobs, strong signal'] },
              { cells: ['Square Terminal', '1.6%', '$329', '✗', '✓', 'Fixed workshop or showroom counter'] },
            ]}
          />
        </div>
      </section>

      <FaqSection items={faqs} title="FAQ for Gas Fitters" />

      <RelatedLinks slug="gas-fitters" type="trade" />
    </>
  )
}
