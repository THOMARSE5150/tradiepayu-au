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
  { label: 'Best EFTPOS for Builders' },
]

const faqs = [
  { q: 'What is the best EFTPOS for builders?', a: 'Zeller Terminal 1 with SIM is the primary pick for on-site payments. For progress payment invoicing and deposit management, Zeller payment links or Stripe invoicing handle the remote billing workflow. Stripe is better if you need automated payment schedules tied to build milestones.' },
  { q: 'How do builders manage progress payments?', a: 'The most reliable workflow: Zeller or Stripe invoice per progress stage, sent to the client\'s email with a payment link. Client pays online — no need to be on site. Same-day settlement on Zeller lets you pay subcontractors the same day the client pays.' },
  { q: 'What EFTPOS works on new building estates with no WiFi?', a: 'Zeller Terminal 1 with SIM (Optus, $15/mo). New estates in metro areas have Optus coverage without any site WiFi or internet installed.' },
  { q: 'Is it hard to set up compared to a bank?', a: 'No — this is one of the biggest advantages of modern EFTPOS providers over banks. Providers like Zeller and Square approve accounts online in minutes with just your ABN. Bank merchant accounts require paperwork, branch visits, and often take days or weeks.' },
  { q: 'Can my team all use the same account?', a: 'Yes — Zeller and Square both support multiple terminals on one account. Payments from all devices settle centrally, with a full transaction log per terminal. No per-terminal rental fees — you purchase the hardware outright.' },
  { q: 'Can I take payments over the phone?', a: 'Yes — Zeller supports MOTO (phone) payments at 1.75% + $0.25 via the Virtual Terminal. Stripe is also strong for remote payments. Useful for taking deposits from customers who can\'t be on site.' },
  { q: 'How much does EFTPOS cost a building company per month?', a: 'At $50,000/month in card revenue (typical for a small volume builder), Zeller costs $700/month in processing fees + $15 SIM = $715. Square at that volume is $800. That\'s $1,020/year saved with Zeller — enough to justify the two-terminal setup. At higher volumes, the rate gap compounds further.' },
  { q: 'How do I collect a contract deposit before starting a build?', a: 'Send a Zeller or Stripe payment link to the client before work begins. For contract deposits over $1,000, Stripe is preferred — it supports card, bank transfer, and BPAY in one invoice. Client pays at their own pace, you get notified when funds clear. No terminal hardware needed for the deposit stage.' },
  { q: 'Can builders split payments between EFTPOS and bank transfer?', a: 'Yes — many builders take deposits by bank transfer (BPAY or EFT) and then take progress/final payments by EFTPOS on site. The split is common when clients have arranged finance: the bank pays direct, the client pays the remainder by card.' },
  { q: 'Do I need a separate merchant account for each building project?', a: 'No — Zeller and Square let you manage all your jobs from a single account. Transaction notes and reference numbers allow you to track which payment belongs to which job. For larger operations with multiple project managers, Zeller supports sub-accounts and separate logins per user.' },
]

const SITE = 'https://tradiepayau.directory'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', name: 'Best EFTPOS for Builders in Australia (2026)', description: 'Progress payments, new estate sites, and subcontractor cash flow — the best payment setup for Australian building businesses.', url: `${SITE}/trades/builders`, datePublished: '2026-01-15', dateModified: '2026-03-31', author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'By Trade', item: `${SITE}/trades` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Builders in Australia (2026)', item: `${SITE}/trades/builders` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]

export default function BuildersPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Builders in Australia (2026)"
        description="Progress payments, new estate sites, and subcontractor cash flow — the best payment setup for Australian building businesses."
        canonical="/trades/builders"
        ogType="article"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        {/* Trade hero image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=560&fit=crop&crop=center&q=80"
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
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Builders in Australia (2026)</h1>
          <p className="hero-sub">Progress payments, new estate sites, and subcontractor cash flow. The payment setup for building businesses.</p>
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
        reason="SIM for new estate sites with no WiFi. Payment links for progress invoicing."
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
            Top Picks for Builders
          </motion.h2>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
            <p className="text-sm font-semibold text-green-800 mb-1">Real savings example</p>
            <p className="text-sm text-green-700">A builder processing <strong>$50,000/month</strong> in card payments saves <strong>$1,020/year</strong> with Zeller (1.4%) vs Square (1.6%). At $100k/month, that gap reaches <strong>$2,040/year</strong> — a meaningful line item for any building business.</p>
          </div>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Best use', 'Notes']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Primary</span></>, '1.4%', 'On-site payments, new estates', 'Same-day settlement, SIM plan'] },
              { cells: ['Zeller Payment Links', '1.7% + $0.25', 'Progress payment invoices', 'Email to client at each milestone'] },
              { cells: ['Stripe', '1.7% + $0.30', 'Milestone invoicing, large contracts', 'Better for automated payment schedules'] },
            ]}
          />
          <p className="mt-4 text-xs text-slate-500">Need a deeper comparison? <Link to="/compare/zeller-vs-stripe" className="text-brand-blue font-medium hover:underline">Zeller vs Stripe — full head-to-head →</Link></p>
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
          What Makes Building Different
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'Progress payment schedules', body: 'Building contracts have multiple payment milestones — slab, frame, lockup, fixing, practical completion. Each milestone requires a professional invoice and reliable payment method.', rec: 'Zeller or Stripe invoicing — milestone-by-milestone via email payment links.' },
            { title: 'New estate sites — no WiFi', body: 'New residential estates often have no broadband, no telco infrastructure, and no WiFi. Any terminal needs to run on mobile data independently of site infrastructure.', rec: 'Zeller Terminal 1 + SIM — runs on Optus, no site WiFi needed.' },
            { title: 'Subcontractor cash flow', body: 'Builders often pay subbies on the same day the client pays them. Same-day settlement is critical to avoid fronting cash between client payment and subbie payment.', rec: 'Zeller — same-day settlement to Zeller account.' },
            { title: 'High job values and deposits', body: 'Builder contracts range from $40,000 to millions. Deposits of 5–20% are standard. Secure deposit collection before work starts is essential for builder cash flow.', rec: 'Zeller payment link or Stripe for deposit at contract signing.' },
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
            { title: 'Contract deposit — pre-start', body: 'Send a Zeller payment link at contract signing. Don\'t commence work until the deposit clears. Same-day settlement means you have funds available immediately.' },
            { title: 'Progress payment — milestone achieved', body: 'Email a Zeller or Stripe invoice at each milestone (slab, frame, lockup, fixing, practical completion). Include a photo of the milestone for client confidence. Payment link in the email — client pays from their phone or computer.' },
            { title: 'On-site payment — new estate, no WiFi', body: 'Zeller Terminal 1 with SIM. New estate = no internet. The SIM terminal runs on Optus data without any site infrastructure.' },
            { title: 'Subcontractor same-day settlement', body: 'Client pays at noon. Zeller settles to your Zeller account same business day. You can transfer to your subbie that afternoon, or use your Zeller debit card directly.' },
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

      <FaqSection items={faqs} title="FAQ for Builders" />

      <section className="section container-page">
        <div className="infobox">
          <p className="text-sm font-semibold text-brand-dark mb-2">Subcontractors on your builds</p>
          <p className="text-sm text-slate-600 mb-3">Builders coordinate multiple trades on every project. See the EFTPOS guides for the subbies you work with:</p>
          <div className="flex flex-wrap gap-2">
            <Link to="/trades/electricians" className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:text-brand-blue hover:border-brand-blue transition-all">Electricians</Link>
            <Link to="/trades/plumbers" className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:text-brand-blue hover:border-brand-blue transition-all">Plumbers</Link>
            <Link to="/trades/carpenters" className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:text-brand-blue hover:border-brand-blue transition-all">Carpenters</Link>
            <Link to="/trades/painters" className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:text-brand-blue hover:border-brand-blue transition-all">Painters</Link>
            <Link to="/trades/concreters" className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:text-brand-blue hover:border-brand-blue transition-all">Concreters</Link>
            <Link to="/trades/plasterers" className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:text-brand-blue hover:border-brand-blue transition-all">Plasterers</Link>
          </div>
        </div>
      </section>

      <RelatedLinks slug="builders" type="trade" />
    </>
  )
}
