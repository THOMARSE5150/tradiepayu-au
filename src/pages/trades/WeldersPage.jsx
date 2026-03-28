import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import Meta from '../../components/Meta'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Best EFTPOS for Tradies', href: '/#compare-all' },
  { label: 'Best EFTPOS for Welders' },
]

const challenges = [
  { title: 'Commercial fabrication shop — B2B invoicing on 30-day terms', body: 'Fabrication workshops doing structural steel, gates, trailers, or custom metalwork for commercial clients operate on business-to-business terms — not tap-and-go. Clients are builders, developers, fleet operators, and agricultural businesses who expect a formal tax invoice with ABN, scope of works, and 30-day payment terms.', rec: 'Stripe invoicing for B2B fabrication billing. ABN, itemised scope, GST, and configurable payment terms.' },
  { title: 'On-site structural welding — construction sites, no WiFi', body: 'Structural welding on commercial construction sites, bridges, and industrial facilities means working in environments with no public WiFi and variable mobile coverage. The site is often a controlled access zone — you need a terminal that works independently of site infrastructure.', rec: 'Zeller Terminal 1 + SIM for on-site payments. Optus mobile data with no dependence on site WiFi.' },
  { title: 'High material costs — deposits on steel and aluminium stock', body: 'Steel and aluminium stock for a single fabrication job can run $2,000–$20,000 or more for structural work. Steel suppliers often require payment on order or account. Taking a job without a deposit means you are funding the entire material cost before billing. Deposits are not optional at this scale.', rec: 'Zeller payment link for materials deposit at job confirmation. Same-day settlement to place stock orders next morning.' },
  { title: 'Insurance and engineering cert jobs — formal invoice trail', body: 'Welding on pressure vessels, structural members, and load-bearing fabrications may require engineering certification or insurance documentation. These jobs demand a complete, formal invoice trail — job description, welder qualifications reference, materials, and cert numbers. Receipts from a terminal are not sufficient for insurance or compliance purposes.', rec: 'Stripe invoicing with full line items, welder cert reference, and engineering scope for insurance and compliance jobs.' },
]

const faqs = [
  { q: 'What is the best EFTPOS for welders?', a: 'Stripe invoicing for commercial fabrication shop billing on 30-day terms and compliance-sensitive jobs, and Zeller Terminal 1 with SIM for on-site structural welding and cash payments from smaller clients. Welding splits between formal B2B fabrication invoicing and on-site trade payments — both workflows need dedicated tools.' },
  { q: 'How do welders invoice commercial fabrication clients?', a: 'Use Stripe to issue a formal tax invoice with your ABN, itemised scope of works (materials, labour, cutting, finishing), GST, and agreed payment terms (typically 14 or 30 days). Include a reference number that matches any purchase order the client issued. Commercial clients — builders, developers, fleet operators — have accounts payable systems that require matching invoice numbers to proceed.' },
  { q: 'How do welders collect deposits on large steel fabrication jobs?', a: 'Send a Zeller payment link via SMS or email at job confirmation. For a fabrication job with $5,000+ in steel stock, collect 40–50% upfront. Same-day Zeller settlement means you can call your steel supplier next morning with cleared funds. Never order custom-cut or specialty steel without a cleared deposit — off-cuts and specialty sections are not returnable.' },
  { q: 'What do welders need on invoices for insurance and engineering cert work?', a: 'For welding that requires engineering sign-off or forms part of an insured asset, your invoice must include: your ABN, welder qualification or registration number (e.g. AS/NZS 2980 certification), job description with material specification (grade, thickness, joint type), any NDT or inspection reference numbers, and GST. Use Stripe custom fields to add certification details to your standard invoice template.' },
]

const SITE = 'https://tradiepayu-au.up.railway.app'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', name: 'Best EFTPOS for Welders in Australia (2026)', description: 'Commercial fabrication B2B billing, on-site structural work, steel stock deposits, and compliance invoice trails — the best EFTPOS and payment setup for Australian welders.', url: `${SITE}/trades/welders`, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Best EFTPOS for Tradies', item: `${SITE}/#compare-all` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Welders', item: `${SITE}/trades/welders` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]

export default function WeldersPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Welders in Australia (2026)"
        description="Commercial fabrication B2B billing, on-site structural work, steel stock deposits, and compliance invoice trails — the best EFTPOS and payment setup for Australian welders."
        canonical="/trades/welders"
        ogType="article"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&h=560&fit=crop&crop=center&q=80" alt="" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta"><span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Trade Guide</span><span>·</span><span>Updated March 2026</span></div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Welders in Australia (2026)</h1>
          <p className="hero-sub">Commercial fabrication on 30-day terms, structural welding on construction sites, steel stock deposits, and compliance certificate billing. Here's the payment setup that works for welders.</p>
          <nav className="jump-links"><a href="#challenges">Key Challenges</a><a href="#picks">Top Picks</a><a href="#scenarios">Job Scenarios</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>

      <section id="challenges" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">What Makes Welding Different</motion.h2>
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
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Top Picks for Welders</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} whileHover={{ y: -3 }} className="lg-blue rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-white flex items-center justify-center font-bold">Z</div>
                <div><h3 className="font-bold text-brand-dark">Zeller Terminal 1 + SIM</h3><span className="badge badge-gold">Best for Welders</span></div>
              </div>
              <p className="text-sm text-slate-600 mb-4">Optus SIM for on-site structural welding on construction sites. Payment links for deposit collection before ordering steel stock. Workshop counter payments for smaller fabrication clients who pay on pickup. 1.4% rate, same-day settlement.</p>
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
                <div><h3 className="font-bold text-brand-dark">Stripe Invoicing</h3><span className="badge badge-muted">B2B Fabrication & Compliance Billing</span></div>
              </div>
              <p className="text-sm text-slate-600 mb-4">Professional tax invoices for commercial fabrication clients on 14–30 day terms. Custom fields for certification numbers, engineering references, and PO matching. ABN and itemised scope for every B2B job.</p>
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
            { title: 'Commercial fabrication shop — builder or developer client', body: 'Issue a Stripe invoice on job completion or at agreed milestones. Include your ABN, itemised scope (fabrication hours, materials by grade and weight, finishing), GST, and PO reference. Builders and developers will not process payment without a matching PO number. Set 14-day terms as standard — 30-day is standard for large commercial accounts.' },
            { title: 'On-site structural welding — construction or industrial site', body: 'Carry the Zeller Terminal 1 + SIM for on-site payments. Construction sites are controlled access zones with no public WiFi — SIM connectivity is your only reliable option. For larger structural jobs billed to the head contractor, follow up with a Stripe invoice at milestone completion. Tap-and-go is for smaller site repairs and emergency call-outs.' },
            { title: 'Custom fabrication — gates, trailers, agricultural equipment', body: 'Collect a 40–50% deposit via Zeller payment link before ordering steel stock. For a custom gate or trailer with $3,000+ in materials, the deposit covers your steel and consumables. Balance due on pickup or delivery — tap on the Zeller terminal at the workshop counter, or send a payment link if the client is collecting via courier.' },
            { title: 'Pressure vessel or structural cert job', body: 'Issue a Stripe invoice with full line items: scope description, material spec (grade, wall thickness), weld procedure specification (WPS) reference, any NDT result reference, your welder qualification standard, and GST. This invoice becomes part of the asset\'s compliance documentation — it needs to be detailed enough to stand up to an insurer or engineer reviewing it years later.' },
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
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Welder EFTPOS Comparison</motion.h2>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'SIM', 'Invoicing', 'Best for']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Top pick</span></>, '1.4%', '$99', '✓ $15/mo', '✓ Links', 'On-site + workshop counter + deposits'] },
              { cells: ['Stripe', '1.7% + $0.10', 'None needed', '✓ optional', '✓ Full invoicing', 'Commercial B2B and compliance billing'] },
              { cells: ['Zeller Tap to Pay', '1.4%', '$0', '✗ (phone data)', '✓ Links', 'Workshop pickup payments, strong signal'] },
              { cells: ['Square Terminal', '1.6%', '$329', '✗', '✓', 'Fixed workshop front counter'] },
            ]}
          />
        </div>
      </section>

      <FaqSection items={faqs} title="FAQ for Welders" />

      <section className="section section-alt container-page">
        <h2 className="text-xl font-bold text-brand-dark mb-4">Related Pages</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/" className="btn-secondary text-sm">Full EFTPOS comparison</Link>
          <Link to="/providers/zeller" className="btn-secondary text-sm">Zeller full review</Link>
          <Link to="/trades/builders" className="btn-secondary text-sm">Best EFTPOS for Builders</Link>
          <Link to="/trades/electricians" className="btn-secondary text-sm">Best EFTPOS for Electricians</Link>
        </div>
      </section>
    </>
  )
}
