import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import Meta from '../../components/Meta'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Best EFTPOS for Tradies', href: '/#compare-all' },
  { label: 'Best EFTPOS for Landscapers' },
]

const faqs = [
  { q: 'What is the best EFTPOS for landscapers?', a: 'Zeller Terminal 1 with the SIM plan. Outdoor sites almost always have Optus mobile coverage, so the SIM terminal works without site WiFi. The 1.4% rate and same-day settlement make it the most cost-effective option for on-completion residential and commercial garden work.' },
  { q: 'What EFTPOS works outdoors with no WiFi?', a: 'Zeller Terminal 1 with the SIM plan (Optus, $15/month) is ideal for outdoor landscaping — it doesn\'t require site WiFi or your phone\'s hotspot. Zeller Tap to Pay on your phone also works fine outdoors using your standard phone data.' },
  { q: 'How do landscapers handle deposit and final payment?', a: 'Collect a deposit by Zeller payment link at quote acceptance. Send the link before starting work. On completion, tap on site for the balance, or send a final payment link if the client isn\'t present. Both settle same-day into your Zeller account.' },
  { q: 'How do landscapers get paid when the client isn\'t home?', a: 'Send a Zeller payment link via SMS as you finish the job. Most clients pay within the hour. For regular maintenance clients, set up Stripe automated billing — charges their card automatically on the day of service.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  name: 'Best EFTPOS for Landscapers in Australia (2026)',
  description: 'Outdoor sites, variable job values, and deposit-on-booking models — the best payment setup for Australian landscaping and garden service businesses.',
  url: 'https://tradiepayu-au.up.railway.app/trades/landscapers',
}

export default function LandscapersPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Landscapers in Australia (2026)"
        description="Outdoor sites, variable job values, and deposit-on-booking models — the best payment setup for Australian landscaping and garden service businesses."
        canonical="/trades/landscapers"
        ogType="article"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        {/* Trade hero image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1400&h=560&fit=crop&crop=center&q=80"
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
          <h1 className="text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Landscapers in Australia (2026)</h1>
          <p className="hero-sub">Outdoor sites, variable job values, deposit-on-booking models. Here's the payment setup that works for landscaping and garden services.</p>
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
          What Makes Landscaping Different
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'Outdoor sites — coverage is usually fine', body: 'Landscapers work outdoors, which means mobile coverage is generally better than most trade environments. But no-WiFi sites (new builds, rural properties) still require a SIM-enabled terminal.', rec: 'SIM terminal for independence from site WiFi.' },
            { title: 'Wide job value range', body: 'From a $120 lawn mow to a $15,000 full garden makeover. Low-value repeat clients benefit from tap-and-go. High-value projects need deposit management.', rec: 'Flexible — tap for small jobs, deposit + balance for big projects.' },
            { title: 'Client not always present at completion', body: 'Regular maintenance clients are often at work when you complete the job. Payment needs to happen without them being there.', rec: 'Send payment link on completion, client pays from their phone.' },
            { title: 'Materials and subcontractor costs', body: 'Large jobs involve materials (plants, mulch, pavers, irrigation) and sometimes subcontractors. Same-day settlement matters when you\'re fronting significant material costs.', rec: 'Same-day settlement for materials cash flow.' },
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
            Top Picks for Landscapers
          </motion.h2>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'SIM', 'Settlement', 'Best for']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Top pick</span></>, '1.4%', '$99', '✓ $15/mo', 'Same day', 'All landscaping — new estates, rural, commercial'] },
              { cells: ['Zeller Tap to Pay', '1.4%', '$0', '✗ (phone data)', 'Same day', 'Mow-and-go operators, low volume'] },
              { cells: ['Square Terminal', '1.6%', '$329', '✗', 'Next day', 'Rural properties beyond Optus range'] },
              { cells: ['Stripe (recurring)', '1.7% + $0.30', '~$98', '✓ optional', '2 days', 'Regular maintenance contracts, automated billing'] },
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
            { title: 'Regular lawn maintenance — client not home', body: 'Finish the job. Send a Zeller payment link via SMS before packing up the trailer. Most regular clients pay within the hour. For your most reliable recurring clients, consider Stripe automated billing to remove the send-and-wait step entirely.' },
            { title: 'Residential garden makeover — deposit + balance', body: 'At quote acceptance, send a 30–50% deposit via Zeller payment link. Don\'t start work until the deposit clears. On day of completion, tap on site for the balance (client present) or send a final payment link (client absent). Same-day settlement means the materials invoice can be settled the same day the client pays.' },
            { title: 'Commercial garden maintenance contract', body: 'Monthly invoice via Zeller or your job management software. Include your ABN, services rendered, and GST breakdown. Offer bank transfer (PayID) or card payment link. For large monthly contracts, bank transfer avoids the card processing fee entirely.' },
            { title: 'New estate — no WiFi', body: 'Zeller Terminal 1 with SIM. Outdoor sites on new estates have Optus coverage in most metro and near-metro areas. The SIM terminal doesn\'t need the homeowner\'s WiFi or your phone hotspot. Tap on site, drive away.' },
            { title: 'Rural and acreage properties', body: 'Optus coverage can be patchy on large rural properties. If you regularly work in known no-coverage areas, Square Terminal\'s offline mode is the backup. For most rural residential work within 60km of a capital city, Zeller\'s SIM will cover it.' },
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

      <FaqSection items={faqs} title="FAQ for Landscapers" />

      <section className="section section-alt container-page">
        <h2 className="text-xl font-bold text-brand-dark mb-4">Related Pages</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/" className="btn-secondary text-sm">Full EFTPOS comparison</Link>
          <Link to="/providers/zeller" className="btn-secondary text-sm">Zeller full review</Link>
          <Link to="/trades/cleaners" className="btn-secondary text-sm">Best EFTPOS for Cleaners</Link>
          <Link to="/trades/plumbers" className="btn-secondary text-sm">Best EFTPOS for Plumbers</Link>
          <Link to="/trades/glaziers" className="btn-secondary text-sm">Best EFTPOS for Glaziers</Link>
        </div>
      </section>
    </>
  )
}
