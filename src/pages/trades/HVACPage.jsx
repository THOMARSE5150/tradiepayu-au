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
  { label: 'Best EFTPOS for HVAC Technicians' },
]

const challenges = [
  { title: 'Commercial rooftop units — potential dead zones', body: 'Commercial HVAC work often takes place on building rooftops or in plant rooms — environments with variable mobile coverage. Equipment rooms in basements or the core of large buildings can have weak signal.', rec: 'Zeller Terminal 1 + SIM as primary. Square Terminal offline mode for confirmed dead zones.' },
  { title: 'After-hours emergency service', body: 'Refrigeration failures and HVAC breakdowns happen at night and on weekends. Emergency call-out rates are higher and the client expects to pay immediately. Payment infrastructure that works at 11pm is essential.', rec: 'Zeller Tap to Pay on your phone — always on you, 24/7, 1.4% rate.' },
  { title: 'Split billing — parts and labour separately', body: 'Commercial clients often require parts and labour billed separately for maintenance contract reconciliation, insurance claims, or tax purposes. A single terminal tap won\'t cut it for these accounts.', rec: 'Stripe invoicing with line-item breakdown — parts, labour, call-out fee separately.' },
  { title: 'Manufacturer warranty service calls', body: 'Warranty service is billed to the manufacturer or importer, not the end user. The homeowner or business owner is present but not the payer — you need to invoice a third-party accounts department.', rec: 'Stripe invoice to the manufacturer\'s service department email.' },
]

const faqs = [
  { q: 'What is the best EFTPOS for HVAC technicians?', a: 'Zeller Terminal 1 with the SIM plan for most on-site work. Commercial rooftop and plant room jobs can have weak signal — the SIM terminal handles most locations on Optus. For emergency after-hours call-outs, Zeller Tap to Pay on your phone is always on you.' },
  { q: 'How do HVAC techs handle after-hours emergency payment?', a: 'Zeller Tap to Pay on your iPhone or Android. No hardware to remember — the app turns your phone into a payment terminal. 1.4% rate, same-day settlement. If the client is a business and needs an invoice, send a Zeller payment link or Stripe invoice after the job.' },
  { q: 'How do HVAC technicians bill parts and labour separately?', a: 'Use Stripe invoicing with separate line items: call-out fee, labour hours, and each part with its part number and price. Commercial maintenance contracts and insurance claims require this level of detail. Stripe invoices are professional, include your ABN and GST, and can be sent to any email address.' },
  { q: 'How does HVAC warranty service billing work?', a: 'Warranty service is billed to the manufacturer or service distributor, not the end user. Send a Stripe invoice to the manufacturer\'s Australian service department email — include the unit serial number, fault description, parts replaced (with part numbers), and labour time. Most manufacturers pay net 30 days.' },
  { q: 'How much does EFTPOS cost an HVAC business per month?', a: 'At $10,000/month in card revenue, Zeller costs $140/month (1.4%) plus $15 SIM = $155 total. Square at the same volume is $160 (1.6%). The difference is small — the bigger value of SIM connectivity for HVAC work is access to rooftop and plant room environments where WiFi-only terminals fail.' },
  { q: 'Can HVAC businesses set up maintenance contract billing?', a: 'Yes — Stripe supports recurring invoicing. Set up an annual or quarterly maintenance contract invoice that generates automatically and charges the client\'s saved card. This works well for commercial air conditioning maintenance contracts where the same service is performed on a predictable schedule.' },
  { q: 'Is it hard to set up EFTPOS compared to a bank?', a: 'No — Zeller and Square approve accounts online in minutes with just your ABN. Bank merchant accounts require paperwork and often take days or weeks. Most HVAC businesses are set up and accepting payments the same day they register.' },
]

const SITE = 'https://tradiepayau.directory'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for HVAC Technicians in Australia (2026)', name: 'Best EFTPOS for HVAC Technicians in Australia (2026)', image: { '@type': 'ImageObject', url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=630&fit=crop&crop=center&q=80', width: 1200, height: 630 }, description: 'Commercial rooftop dead zones, after-hours emergencies, and split parts/labour billing — the best EFTPOS setup for Australian HVAC and refrigeration businesses.', url: `${SITE}/trades/hvac`, datePublished: '2026-01-15', dateModified: '2026-03-31', author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'By Trade', item: `${SITE}/trades` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for HVAC', item: `${SITE}/trades/hvac` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]

export default function HVACPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS for HVAC Technicians in Australia (2026)"
        description="Commercial rooftop dead zones, after-hours emergencies, and split parts/labour billing — the best EFTPOS setup for Australian HVAC and refrigeration businesses."
        canonical="/trades/hvac"
        ogType="article"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&h=560&fit=crop&crop=center&q=80" alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta"><span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Trade Guide</span><span>·</span><span>Updated March 2026</span></div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for HVAC Technicians in Australia (2026)</h1>
          <p className="hero-sub">After-hours emergencies, commercial rooftop dead zones, and warranty billing. Here's the payment setup that works for HVAC and refrigeration.</p>
          <nav className="jump-links"><a href="#picks">Comparison</a><a href="#challenges">Context</a><a href="#scenarios">Job Scenarios</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>
      <QuickVerdict
        pick="Zeller Terminal 1 + SIM"
        rate="1.4%"
        hardware="$99 + $15/mo SIM"
        reason="SIM for rooftop and plant room access. Tap to Pay on your phone for after-hours call-outs."
        providerSlug="zeller"
      />

      <section id="picks" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Top Picks for HVAC Technicians</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} whileHover={{ y: -3 }} className="lg-blue rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-white flex items-center justify-center font-bold">Z</div>
                <div><h3 className="font-bold text-brand-dark">Zeller Terminal 1 + SIM</h3><span className="badge badge-gold">Best for HVAC</span></div>
              </div>
              <p className="text-sm text-slate-600 mb-4">SIM connectivity for rooftop and plant room jobs. Tap to Pay on your phone for emergency after-hours call-outs. 1.4% rate and same-day settlement into Zeller account.</p>
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
                <div><h3 className="font-bold text-brand-dark">Stripe Invoicing</h3><span className="badge badge-muted">Commercial & Warranty Billing</span></div>
              </div>
              <p className="text-sm text-slate-600 mb-4">Line-item invoices for parts and labour separately. Ideal for commercial maintenance contracts, insurance claims, and warranty service billing to manufacturers.</p>
              <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                {[['Rate', '1.7%+$0.10'], ['Hardware', '~$98'], ['Line items', '✓'], ['Settlement', '2 days']].map(([l, v], i) => (
                  <div key={i} className="lg-light rounded-lg p-2"><span className="block text-slate-500">{l}</span><span className="font-bold text-brand-dark">{v}</span></div>
                ))}
              </div>
              <Link to="/providers/stripe" className="btn-tertiary block text-center text-sm">Full Stripe Review →</Link>
            </motion.div>
          </div>
          <div className="mt-5 lg-light rounded-2xl p-4 text-sm text-slate-700">
            <strong>Dead zone strategy:</strong> Add Square Terminal ($329, no monthly fee) as a backup for confirmed dead zones — deep basement plant rooms, server rooms in building cores. Offline mode accepts payment, processes when you reconnect.
          </div>
        </div>
      </section>

      <section id="challenges" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">What Makes HVAC Different</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {challenges.map((c, i) => (
            <details key={i} className="lg-light rounded-2xl p-4 group open:ring-1 open:ring-brand-blue/20 transition-all">
              <summary className="font-semibold text-brand-dark cursor-pointer list-none flex items-center justify-between gap-3">
                <span>{c.title}</span>
                <svg className="w-4 h-4 text-slate-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
              </summary>
              <p className="text-sm text-slate-600 leading-relaxed mt-3 mb-2">{c.body}</p>
              <div className="infobox py-2 px-2 text-xs text-brand-blue font-medium mt-2">Payment need: {c.rec}</div>
            </details>
          ))}
        </div>
      </section>

      <section id="scenarios" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Payment Playbook by Job Type</motion.h2>
        <div className="space-y-4">
          {[
            { title: 'Residential emergency — after hours', body: 'Zeller Tap to Pay on your phone — always on you at 11pm. 1.4% rate, same-day settlement. If the homeowner needs a formal receipt, the Zeller app sends it automatically. For business clients after hours, send a Zeller payment link and invoice in the morning.' },
            { title: 'Commercial rooftop unit — scheduled service', body: 'Zeller Terminal 1 + SIM handles most rooftops. Process payment on completion. If the client is a business, they likely prefer an invoice — send a Stripe invoice to accounts payable with your scope, parts, and labour separated.' },
            { title: 'Refrigeration breakdown — parts + labour billing', body: 'Send a Stripe invoice with separate line items: call-out fee, labour hours (rate × hours), and each replacement part (part number, description, cost). Commercial fridge clients, restaurants, and cold storage facilities require this level of detail for their accounts.' },
            { title: 'Warranty service call — billing the manufacturer', body: 'Do the job. Note the unit serial number, model, fault code, and parts replaced with part numbers. Send a Stripe invoice to the manufacturer\'s Australian service department: scope of work, parts at cost, labour at agreed warranty rate, no GST if manufacturer is overseas. Get a job reference number before starting.' },
            { title: 'New AC installation — residential', body: 'Deposit of 40–50% at order confirmation (covers unit cost) via Zeller payment link. Balance on installation day — tap for balance or send final link. Never install an AC unit without a cleared deposit given the hardware cost.' },
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
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">HVAC EFTPOS Comparison</motion.h2>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'SIM', 'Offline', 'Best for']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Top pick</span></>, '1.4%', '$99', '✓ $15/mo', '✗', 'Rooftop + all standard jobs'] },
              { cells: ['Stripe', '1.7% + $0.10', '~$98', '✓ optional', '✗', 'Commercial, warranty invoicing'] },
              { cells: ['Square Terminal', '1.6%', '$329', '✗', '✓', 'Basement/plant room dead zones'] },
              { cells: ['Zeller Tap to Pay', '1.4%', '$0', '✗ (phone data)', '✗', 'After-hours emergency call-outs'] },
            ]}
          />
          <p className="mt-4 text-xs text-slate-500">Need a deeper comparison? <Link to="/compare/zeller-vs-square" className="text-brand-blue font-medium hover:underline">Zeller vs Square — full head-to-head →</Link></p>
        </div>
      </section>

      <FaqSection items={faqs} title="FAQ for HVAC Technicians" />

      <RelatedLinks slug="hvac" type="trade" />
    </>
  )
}
