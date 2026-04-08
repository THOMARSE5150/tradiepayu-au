import { Link } from 'react-router-dom'
import RelatedLinks from '../../components/RelatedLinks'
import TradeCompareLinks from '../../components/TradeCompareLinks'
import { STATES } from '../../data/states'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import Meta from '../../components/Meta'
import QuickVerdict from '../../components/QuickVerdict'
import { tradeHeroUrl, tradeHeroAlt } from '../../utils/tradeHero'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'By Trade', href: '/trades' },
  { label: 'Best EFTPOS for Pest Controllers' },
]

const challenges = [
  { title: 'High-frequency small jobs — 50+ services per week', body: 'A busy pest control technician might run 8–12 jobs per day across suburban routes. Each job needs a payment collected quickly — slow terminals, failed payments, or cash-only setups create queues and delays that compound across a full day. Every minute spent on payment admin is a minute not driving to the next job.', rec: 'Zeller Terminal 1 + SIM for fast tap-and-go collection. Sub-5-second transactions and same-day settlement.' },
  { title: 'Pre-purchase inspection reports — billed to conveyancers', body: 'Building and pest inspection reports are frequently ordered by conveyancers and solicitors on behalf of their buying client. The buyer isn\'t present, the conveyancer pays the invoice from trust, and the report goes to the buyer. This is a professional B2B billing relationship — not a homeowner transaction.', rec: 'Stripe invoicing for conveyancer and solicitor billing. ABN and GST on every invoice, with the property address in the description.' },
  { title: 'Recurring treatment plans — automated billing', body: 'Annual termite inspections, quarterly general pest treatments, and monthly commercial contracts are the backbone of pest control revenue. Manually invoicing the same clients every 3 months is time-consuming and easy to miss. Automated recurring invoicing removes this friction entirely.', rec: 'Stripe recurring invoicing. Set and forget — automatic invoice generation and card charge on the due date.' },
  { title: 'Body corporate and property manager billing', body: 'Commercial strata buildings, shopping centre common areas, and managed rental portfolios require formal invoicing to property managers or body corporate committees — not to individual tenants. These clients have accounts payable processes and expect proper tax invoices with purchase order references.', rec: 'Stripe invoicing with PO reference and ABN for property manager and body corporate accounts. Net 14–30 day terms.' },
]

const faqs = [
  { q: 'What is the best EFTPOS for pest controllers?', a: 'Zeller Terminal 1 with SIM for fast on-site residential payments across high-frequency job routes, and Stripe invoicing for conveyancers, property managers, and body corporate billing. Pest control splits between quick consumer payments and formal B2B invoicing — you need both covered.' },
  { q: 'How do pest controllers bill conveyancers for pre-purchase inspections?', a: 'Send a Stripe invoice to the conveyancer or solicitor on the day the report is issued. Include the property address, inspection date, your ABN, and GST. Most conveyancers pay from trust within 7 days. Reference the property address and buyer name in the invoice description so their accounts team can match it to the file easily.' },
  { q: 'Can pest controllers set up recurring payments for annual and quarterly contracts?', a: 'Yes. Stripe supports recurring invoices and saved card billing. For annual termite inspections, set up a recurring Stripe invoice 12 months from the initial inspection date. For quarterly general pest contracts, set the recurrence to every 3 months. The client\'s card is charged automatically — you just show up and do the work.' },
  { q: 'How do pest controllers handle body corporate and strata billing?', a: 'Body corporate and strata managers require formal tax invoices with the lot or complex address, a PO or work order reference, your ABN, and GST. Use Stripe invoicing with custom fields for PO numbers. Set 14-day terms for strata accounts. Keep a consistent invoice format across all properties managed by the same manager — it makes their reconciliation easier and gets you paid faster.' },
  { q: 'How much does EFTPOS cost a pest control business per month?', a: 'A pest controller doing 200 jobs/month at $150 average = $30,000 in card revenue. At 1.4% with Zeller that\'s $420/month plus $15 SIM = $435. Square at 1.6% would be $480. The $540/year saving is meaningful for a high-volume operation. For conveyancer invoicing, Stripe bank transfer at 0.8% reduces fees on higher-value inspection reports.' },
  { q: 'Is it hard to set up EFTPOS compared to a bank?', a: 'No — Zeller and Stripe both approve accounts online with just your ABN. Bank merchant accounts require paperwork and often take days or weeks. Zeller Tap to Pay (free) gets you started the same day. Add Terminal 1 hardware when volume justifies the $99 purchase.' },
  { q: 'Can pest control technicians use the same account across multiple vans?', a: 'Yes — Zeller and Square both support multiple terminals on one account. Each technician gets their own terminal; all payments settle centrally. The owner sees a full transaction log by terminal, by day, or by technician. No per-terminal monthly fee — hardware is a one-time purchase.' },
]

import siteMeta from '../../data/site-meta.json'
import { SITE_URL as SITE } from '../../constants/brand'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for Pest Controllers in Australia (2026)', name: 'Best EFTPOS for Pest Controllers in Australia (2026)', image: { '@type': 'ImageObject', url: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1200&h=630&fit=crop&crop=center&q=80', width: 1200, height: 630 }, description: 'High-frequency jobs, conveyancer billing, recurring treatment plans, and body corporate invoicing — the best EFTPOS and payment setup for Australian pest controllers.', url: `${SITE}/trades/pest-controllers`, datePublished: '2026-01-15', dateModified: siteMeta.lastVerified, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'By Trade', item: `${SITE}/trades` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Pest Controllers', item: `${SITE}/trades/pest-controllers` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Best EFTPOS for Pest Controllers in Australia', serviceType: 'EFTPOS Payment Processing for Pest Controllers', areaServed: { '@type': 'Country', name: 'Australia' }, provider: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, url: `${SITE}/trades/pest-controllers` },
]

export default function PestControllersPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Pest Controllers in Australia (2026)"
        description="High-frequency jobs, conveyancer billing, recurring treatment plans, and body corporate invoicing — the best EFTPOS and payment setup for Australian pest controllers."
        canonical="/trades/pest-controllers"
        ogType="article"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={tradeHeroUrl('pest-controllers')} alt={tradeHeroAlt('pest-controllers')} fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta"><span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Trade Guide</span><span>·</span><span>Updated April 2026</span></div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Pest Controllers in Australia (2026)</h1>
          <p className="hero-sub">50+ jobs a week, conveyancer billing for inspection reports, recurring treatment plans, and body corporate accounts. Here's the payment setup that works for pest controllers.</p>
          <nav className="jump-links"><a href="#picks">Comparison</a><a href="#challenges">Context</a><a href="#scenarios">Job Scenarios</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>
      <QuickVerdict
        pick="Zeller Terminal 1 + SIM"
        rate="1.4%"
        hardware="$99 + $15/mo SIM"
        reason="Fastest tap-and-go for high-frequency routes — no customer WiFi required."
        providerSlug="zeller"
        trade="pest controllers"
      />

      <section id="picks" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Top Picks for Pest Controllers</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} whileHover={{ y: -3 }} className="lg-blue rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-white flex items-center justify-center font-bold">Z</div>
                <div><h3 className="font-bold text-brand-dark">Zeller Terminal 1 + SIM</h3><span className="badge badge-gold">Best for Pest Controllers</span></div>
              </div>
              <p className="text-sm text-slate-600 mb-4">Fast tap-and-go for high-frequency residential routes. SIM connectivity means no dependence on customer WiFi. Sub-5-second transactions keep your schedule on track across 10+ jobs per day. 1.4% rate, same-day settlement.</p>
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
                <div><h3 className="font-bold text-brand-dark">Stripe Invoicing</h3><span className="badge badge-muted">Conveyancers, Recurring & Strata Billing</span></div>
              </div>
              <p className="text-sm text-slate-600 mb-4">Recurring invoicing for annual and quarterly treatment contracts. Professional invoices for conveyancer and solicitor billing. Body corporate and property manager accounts with PO references and 14–30 day terms.</p>
              <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                {[['Rate', '1.7%+$0.10'], ['Hardware', 'None needed'], ['Invoicing', '✓ Full + recurring'], ['Settlement', '2 days']].map(([l, v], i) => (
                  <div key={i} className="lg-light rounded-lg p-2"><span className="block text-slate-500">{l}</span><span className="font-bold text-brand-dark">{v}</span></div>
                ))}
              </div>
              <Link to="/providers/stripe" className="btn-tertiary block text-center text-sm">Full Stripe Review →</Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="challenges" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">What Makes Pest Control Different</motion.h2>
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
            { title: 'Suburban residential — general pest or termite treatment', body: 'Tap the Zeller Terminal 1 + SIM for payment at the door on completion. The customer is present, the job is done, and payment is immediate. With 10 jobs in a day, you need a terminal that processes in under 5 seconds and never needs the customer\'s WiFi password. Keep the terminal in a belt holster — don\'t fish around in the van.' },
            { title: 'Pre-purchase building and pest inspection', body: 'Send a Stripe invoice to the conveyancer or solicitor the same day the inspection is completed and the report is issued. Include the property address, buyer name, inspection date, ABN, and GST. The conveyancer pays from trust — it\'s a clean transaction if your invoice is clear. Never invoice the buyer directly; always invoice the ordering party.' },
            { title: 'Recurring quarterly or annual contract', body: 'Set up Stripe recurring invoicing for the contract start date. For quarterly general pest ($150–$250/quarter), the invoice generates automatically and the saved card is charged. You show up, do the work, and the payment is already collected. At scale — 50 recurring clients — this eliminates hours of monthly admin.' },
            { title: 'Body corporate or commercial strata billing', body: 'Issue a Stripe invoice to the strata manager with the complex name, lot address range, treatment date, scope, PO or work order reference, and GST. Net 14-day terms. Keep a master record of every strata manager\'s billing contact — strata companies have multiple managers and invoice errors cause long delays. Consistent formatting gets you paid on time.' },
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
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Pest Controller EFTPOS Comparison</motion.h2>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'SIM', 'Invoicing', 'Best for']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Top pick</span></>, '1.4%', '$99', '✓ $15/mo', '✓ Links', 'High-frequency residential routes'] },
              { cells: ['Stripe', '1.7% + $0.10', 'None needed', '✓ optional', '✓ Full + recurring', 'Conveyancers, recurring plans, strata'] },
              { cells: ['Zeller Tap to Pay', '1.4%', '$0', '✗ (phone data)', '✓ Links', 'Backup or second technician option'] },
              { cells: ['Square Terminal', '1.6%', '$329', '✗', '✓', 'Fixed office or consultation desk'] },
            ]}
          />
          <p className="mt-4 text-xs text-slate-500">Need a deeper comparison? <Link to="/compare/zeller-vs-square" className="text-brand-blue font-medium hover:underline">Zeller vs Square — full head-to-head →</Link></p>
        </div>
      </section>

      <FaqSection items={faqs} title="FAQ for Pest Controllers" />

      <section className="section section-alt">
        <div className="container-page">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Best EFTPOS for Pest Controllers by State</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {STATES.map(s => (
              <Link
                key={s.slug}
                to={`/states/${s.slug}/pest-controllers`}
                className="flex flex-col gap-1 p-3 rounded-2xl bg-white border border-slate-100 hover:border-brand-blue hover:shadow-sm transition-all group"
              >
                <span className="text-xs font-bold text-brand-blue">{s.abbr}</span>
                <span className="text-sm font-semibold text-brand-dark group-hover:text-brand-blue transition-colors leading-tight">{s.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TradeCompareLinks />
      <RelatedLinks slug="pest-controllers" type="trade" />
    </>
  )
}
