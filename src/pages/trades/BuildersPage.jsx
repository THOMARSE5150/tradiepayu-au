import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import Meta from '../../components/Meta'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Best EFTPOS for Tradies', href: '/#compare-all' },
  { label: 'Best EFTPOS for Builders' },
]

const faqs = [
  { q: 'What is the best EFTPOS for builders?', a: 'Zeller Terminal 1 with SIM is the primary pick for on-site payments. For progress payment invoicing and deposit management, Zeller payment links or Stripe invoicing handle the remote billing workflow. Stripe is better if you need automated payment schedules tied to build milestones.' },
  { q: 'How do builders manage progress payments?', a: 'The most reliable workflow: Zeller or Stripe invoice per progress stage, sent to the client\'s email with a payment link. Client pays online — no need to be on site. Same-day settlement on Zeller lets you pay subcontractors the same day the client pays.' },
  { q: 'What EFTPOS works on new building estates with no WiFi?', a: 'Zeller Terminal 1 with SIM (Optus, $15/mo). New estates in metro areas have Optus coverage without any site WiFi or internet installed.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  name: 'Best EFTPOS for Builders in Australia (2026)',
  description: 'Progress payments, new estate sites, and subcontractor cash flow — the best payment setup for Australian building businesses.',
  url: 'https://tradiepayu-au.up.railway.app/trades/builders',
}

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
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&h=560&fit=crop&crop=center&q=80"
            alt=""
            className="w-full h-full object-cover"
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
          What Makes Building Different
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'Progress payment schedules', body: 'Building contracts have multiple payment milestones — slab, frame, lockup, fixing, practical completion. Each milestone requires a professional invoice and reliable payment method.', rec: 'Zeller or Stripe invoicing — milestone-by-milestone via email payment links.' },
            { title: 'New estate sites — no WiFi', body: 'New residential estates often have no broadband, no telco infrastructure, and no WiFi. Any terminal needs to run on mobile data independently of site infrastructure.', rec: 'Zeller Terminal 1 + SIM — runs on Optus, no site WiFi needed.' },
            { title: 'Subcontractor cash flow', body: 'Builders often pay subbies on the same day the client pays them. Same-day settlement is critical to avoid fronting cash between client payment and subbie payment.', rec: 'Zeller — same-day settlement to Zeller account.' },
            { title: 'High job values and deposits', body: 'Builder contracts range from $40,000 to millions. Deposits of 5–20% are standard. Secure deposit collection before work starts is essential for builder cash flow.', rec: 'Zeller payment link or Stripe for deposit at contract signing.' },
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
            Top Picks for Builders
          </motion.h2>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Best use', 'Notes']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Primary</span></>, '1.4%', 'On-site payments, new estates', 'Same-day settlement, SIM plan'] },
              { cells: ['Zeller Payment Links', '1.7% + $0.25', 'Progress payment invoices', 'Email to client at each milestone'] },
              { cells: ['Stripe', '1.7% + $0.30', 'Milestone invoicing, large contracts', 'Better for automated payment schedules'] },
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

      <section className="section section-alt container-page">
        <h2 className="text-xl font-bold text-brand-dark mb-4">Related Pages</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/" className="btn-secondary text-sm">Full EFTPOS comparison</Link>
          <Link to="/providers/zeller" className="btn-secondary text-sm">Zeller full review</Link>
          <Link to="/providers/stripe" className="btn-secondary text-sm">Stripe full review</Link>
          <Link to="/trades/electricians" className="btn-secondary text-sm">Best EFTPOS for Electricians</Link>
        </div>
      </section>
    </>
  )
}
