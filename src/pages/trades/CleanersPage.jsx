import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import Meta from '../../components/Meta'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Best EFTPOS for Tradies', href: '/#compare-all' },
  { label: 'Best EFTPOS for Cleaners' },
]

const faqs = [
  { q: 'What is the best EFTPOS for cleaning businesses?', a: 'Zeller Tap to Pay on your phone is the best starting point — 1.4% rate, zero hardware cost. For recurring weekly or fortnightly clients, add Stripe automated billing. Upgrade to Zeller Terminal 1 when card volume exceeds $7,500/month.' },
  { q: 'How do cleaning businesses handle recurring payment?', a: 'Two options: Stripe Billing for fully automated recurring charges (client sets up once, charged automatically each service); or Zeller payment links sent manually after each clean. Stripe is hands-off once configured; Zeller links are simpler to start.' },
  { q: 'What EFTPOS has no monthly fee for cleaners?', a: 'Zeller, Square, and Stripe all have no monthly fee on standard plans. Zeller Tap to Pay has zero hardware cost and zero monthly fee — just 1.4% per transaction.' },
  { q: 'Should cleaners surcharge on card?', a: 'At high frequency, surcharging adds friction and can feel petty on a $150 job. Many cleaning businesses absorb the 1.4% and factor it into their rate. On $15,000/month volume, that\'s $210 — worth building into pricing rather than adding invoice friction.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  name: 'Best EFTPOS for Cleaners in Australia (2026)',
  description: 'High-frequency, lower-value jobs with recurring clients — the best EFTPOS setup to minimise fees and make regular clients frictionless.',
  url: 'https://tradiepayu-au.up.railway.app/trades/cleaners',
}

export default function CleanersPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Cleaners in Australia (2026)"
        description="High-frequency, lower-value jobs with recurring clients — the best EFTPOS setup to minimise fees and make regular clients frictionless."
        canonical="/trades/cleaners"
        ogType="article"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        {/* Trade hero image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&h=560&fit=crop&crop=center&q=80"
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
          <h1 className="text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Cleaners in Australia (2026)</h1>
          <p className="hero-sub">High-frequency, lower-value jobs with recurring clients. The right setup minimises fees across volume and makes regular clients frictionless.</p>
          <nav className="jump-links">
            <a href="#challenges">Key Challenges</a>
            <a href="#picks">Top Picks</a>
            <a href="#recurring">Recurring Clients</a>
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
          What Makes Cleaning Different
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'High transaction frequency', body: '5 jobs/day at $150 average = $3,750/week. At 1.4% (Zeller) vs 1.6% (Square), the 0.2% gap is $7.50/week — $390/year. Rate difference compounds fast at volume.', rec: 'Lowest rate wins: Zeller at 1.4%.' },
            { title: 'Recurring weekly clients', body: 'Regular domestic cleans, office cleans, strata areas — repeat clients prefer set-and-forget payment. Manual invoicing every week creates admin overhead and payment delays.', rec: 'Stripe automated billing for recurring clients.' },
            { title: 'Client not home at completion', body: 'Residential clients are often at work when you finish the clean. Payment needs to happen without them being there.', rec: 'Zeller payment link sent via SMS on completion.' },
            { title: 'Low hardware overhead', body: 'Cleaning businesses often operate lean. Spending $329 on a terminal when you can tap from a phone at the same rate doesn\'t make sense at lower volumes.', rec: 'Start with Zeller Tap to Pay (phone). Upgrade when volume justifies it.' },
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
            Top Picks for Cleaners
          </motion.h2>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'Recurring', 'Settlement', 'Best for']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Tap to Pay</strong> <span className="ml-1 badge badge-gold">Start here</span></>, '1.4%', '$0', 'Manual links', 'Same day', 'All cleaning businesses to start'] },
              { cells: ['Zeller Terminal 1 + SIM', '1.4%', '$99 + $15/mo', 'Manual links', 'Same day', 'High-volume, upgrade from Tap to Pay'] },
              { cells: ['Stripe (recurring)', '1.7% + $0.30', '~$98 reader', '✓ Automated', '2 days', 'Regular clients — fully hands-off'] },
              { cells: ['Square Tap to Pay', '1.6%', '$0', 'Invoicing only', 'Next day', 'If you specifically need Square\'s ecosystem'] },
            ]}
          />
          <div className="mt-4 lg-light rounded-2xl p-4 text-sm">
            <strong>Rate comparison at typical cleaning volume:</strong><br />
            5 jobs/day × $150 avg × 20 days/month = $15,000/month in card revenue.<br />
            Zeller (1.4%): $210/month. Square (1.6%): $240/month. Saving: $30/month — covers Zeller's SIM plan twice over.
          </div>
        </div>
      </section>

      <section id="recurring" className="section container-page">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-brand-dark mb-6"
        >
          Handling Recurring Clients
        </motion.h2>
        <div className="space-y-4">
          {[
            { title: 'Option 1: Zeller Payment Links (simple)', body: 'After each clean, send a Zeller payment link via SMS. Client taps on their phone. Works well for clients who prefer control — they pay when ready. Slight admin overhead (send per job) but fast and familiar.' },
            { title: 'Option 2: Stripe recurring billing (automated)', body: 'Set up a recurring payment schedule in Stripe. Client enters their card once via a secure link. Stripe charges automatically on the schedule — weekly, fortnightly, monthly. Zero manual effort once configured. Rate is 1.7% + $0.30 online.' },
            { title: 'Option 3: Direct debit / bank transfer', body: 'For clients who prefer not to use a card, offer PayID or bank transfer. Zero processing fee. Manual reconciliation required, but for large monthly commercial accounts, absorbing 0% vs 1.4% is worth the admin.' },
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
        <div className="mt-6 infobox">
          <h3 className="font-semibold text-brand-dark mb-2">Cleaners' recommended stack</h3>
          <p><strong>Residential one-off and irregular clients:</strong> Zeller Tap to Pay or payment link — 1.4%, instant.<br />
          <strong>Regular weekly/fortnightly clients:</strong> Stripe recurring billing — set up once, runs automatically.<br />
          <strong>Commercial accounts:</strong> Invoice with bank transfer — no processing fee on large monthly totals.</p>
        </div>
      </section>

      <FaqSection items={faqs} title="FAQ for Cleaners" />

      <section className="section section-alt container-page">
        <h2 className="text-xl font-bold text-brand-dark mb-4">Related Pages</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/" className="btn-secondary text-sm">Full EFTPOS comparison</Link>
          <Link to="/providers/zeller" className="btn-secondary text-sm">Zeller full review</Link>
          <Link to="/providers/stripe" className="btn-secondary text-sm">Stripe full review</Link>
          <Link to="/trades/landscapers" className="btn-secondary text-sm">Best EFTPOS for Landscapers</Link>
        </div>
      </section>
    </>
  )
}
