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
  { label: 'Best EFTPOS for Tilers' },
]

const challenges = [
  { title: 'Bathroom renovations — WiFi often disconnected', body: 'Mid-renovation bathrooms are stripped back to the studs. The NBN modem may be in the bathroom being renovated, or the homeowner has temporarily disconnected the internet. WiFi-only terminals fail exactly when you need them.', rec: 'Zeller Terminal 1 + SIM — Optus mobile data, no home WiFi required.' },
  { title: 'Large materials cost — deposit essential', body: 'Quality tiles are expensive and non-returnable once cut. Tilers need a deposit workflow that clears before materials are ordered — not on the day of delivery.', rec: 'Zeller payment link at quote acceptance — same-day settlement confirms funds.' },
  { title: 'Developer and builder invoicing', body: 'New build tiling contracts are billed to a builder or developer, not a homeowner. The payer is a business with accounts payable — they expect a tax invoice, not a tap terminal on completion.', rec: 'Stripe invoicing for formal developer/builder billing with ABN and GST.' },
  { title: 'Multiple sites, multiple stages', body: 'Commercial and development tiling involves working across multiple sites at different stages simultaneously. Payment tracking needs to be clean and auditable.', rec: 'Stripe invoice per project/stage — clear payment history, automatic receipts.' },
]

const faqs = [
  { q: 'What is the best EFTPOS for tilers?', a: 'Zeller Terminal 1 with the SIM plan. Bathroom renovations disconnect home WiFi, so SIM connectivity is essential. Payment links handle deposit collection before materials are ordered. 1.4% rate is the lowest available for on-site payments.' },
  { q: 'How do tilers collect deposits before ordering tiles?', a: 'Send a Zeller payment link via SMS at quote acceptance. Same-day settlement means you can confirm the deposit is cleared before ordering materials — critical when tiles are non-returnable once cut.' },
  { q: 'How do tilers invoice builders and developers?', a: 'Use Stripe invoicing — send a formal tax invoice with your ABN, scope of work (materials and labour itemised), and GST breakdown to the builder\'s accounts payable contact. Set 14-day payment terms for established builder relationships.' },
  { q: 'Does EFTPOS work in bathrooms mid-renovation?', a: 'Zeller Terminal 1 with SIM (Optus) works on mobile data — it does not need the home WiFi or NBN. Even in a stripped-out bathroom with no internet connected, you can process payment on the Zeller terminal.' },
]

const SITE = 'https://tradiepayau.directory'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', name: 'Best EFTPOS for Tilers in Australia (2026)', description: 'Bathroom renos with no WiFi, materials deposits, and developer billing — the best EFTPOS and payment setup for Australian tiling businesses.', url: `${SITE}/trades/tilers`, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'By Trade', item: `${SITE}/trades` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Tilers', item: `${SITE}/trades/tilers` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]

export default function TilersPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Tilers in Australia (2026)"
        description="Bathroom renos with no WiFi, materials deposits, and developer billing — the best EFTPOS and payment setup for Australian tiling businesses."
        canonical="/trades/tilers"
        ogType="article"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1400&h=560&fit=crop&crop=center&q=80" alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta"><span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Trade Guide</span><span>·</span><span>Updated March 2026</span></div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Tilers in Australia (2026)</h1>
          <p className="hero-sub">Bathroom renos without WiFi, tile deposits, and developer billing. Here's the payment setup that works for tiling.</p>
          <nav className="jump-links"><a href="#picks">Comparison</a><a href="#challenges">Context</a><a href="#scenarios">Job Scenarios</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>
      <QuickVerdict
        pick="Zeller Terminal 1 + SIM"
        rate="1.4%"
        hardware="$99 + $15/mo SIM"
        reason="SIM for bathroom renos mid-strip. Payment links confirm deposits before you order tiles."
        providerSlug="zeller"
      />

      <section id="picks" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Top Picks for Tilers</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} whileHover={{ y: -3 }} className="lg-blue rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-white flex items-center justify-center font-bold">Z</div>
                <div><h3 className="font-bold text-brand-dark">Zeller Terminal 1 + SIM</h3><span className="badge badge-gold">Best for Tilers</span></div>
              </div>
              <p className="text-sm text-slate-600 mb-4">SIM connectivity for bathroom renos mid-strip. Payment links for tile deposit collection. 1.4% rate and same-day settlement confirm deposits before you commit to materials.</p>
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
                <div><h3 className="font-bold text-brand-dark">Stripe Invoicing</h3><span className="badge badge-muted">Developer & Builder Billing</span></div>
              </div>
              <p className="text-sm text-slate-600 mb-4">Formal tax invoices for builder and developer accounts. ABN, itemised materials and labour, GST — all in the invoice. Accounts payable departments expect this format.</p>
              <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                {[['Rate', '1.7%+$0.10'], ['Hardware', '~$98'], ['Invoicing', '✓ Formal'], ['Settlement', '2 days']].map(([l, v], i) => (
                  <div key={i} className="lg-light rounded-lg p-2"><span className="block text-slate-500">{l}</span><span className="font-bold text-brand-dark">{v}</span></div>
                ))}
              </div>
              <Link to="/providers/stripe" className="btn-tertiary block text-center text-sm">Full Stripe Review →</Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="challenges" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">What Makes Tiling Different</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {challenges.map((c, i) => (
            <details className="lg-light rounded-2xl p-4 group open:ring-1 open:ring-brand-blue/20 transition-all">
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
            { title: 'Bathroom renovation — residential', body: 'Quote accepted: send Zeller payment link for 40–50% deposit. Deposit clears same day — order tiles. On completion: tap for balance on Zeller Terminal 1 + SIM. Client\'s home WiFi may be off mid-reno — SIM handles it.' },
            { title: 'New build — developer or builder billing', body: 'Send a Stripe invoice to the builder\'s accounts payable email at each stage: wet areas grouted, floor tiles complete, final inspection passed. Include your ABN, licence number, and GST breakdown. 14-day payment terms.' },
            { title: 'Commercial tiling — office or retail fitout', body: 'Large commercial jobs are billed to the fitout contractor or tenant. Stripe invoicing with formal line items for materials, adhesive, grout, and labour. Large amounts — always confirm purchase order number before starting.' },
            { title: 'Small tile job — single day', body: 'Zeller Tap to Pay on your phone works perfectly for a single-day splash-back or feature tile job. No hardware to bring. Client pays on site, same-day settlement.' },
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
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Tiler EFTPOS Comparison</motion.h2>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'SIM', 'Invoicing', 'Best for']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Top pick</span></>, '1.4%', '$99', '✓ $15/mo', '✓ Links', 'On-site payments + deposits'] },
              { cells: ['Stripe', '1.7% + $0.10', '~$98', '✓ optional', '✓ Full invoicing', 'Developer and builder billing'] },
              { cells: ['Zeller Tap to Pay', '1.4%', '$0', '✗ (phone data)', '✓ Links', 'Small single-day jobs'] },
              { cells: ['Square Terminal', '1.6%', '$329', '✗', '✓', 'Offline dead zone backup'] },
            ]}
          />
        </div>
      </section>

      <FaqSection items={faqs} title="FAQ for Tilers" />

      <RelatedLinks slug="tilers" type="trade" />
    </>
  )
}
