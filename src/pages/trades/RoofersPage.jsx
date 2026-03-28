import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import Meta from '../../components/Meta'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Best EFTPOS for Tradies', href: '/#compare-all' },
  { label: 'Best EFTPOS for Roofers' },
]

const challenges = [
  { title: 'Weather event rush — many jobs at once', body: 'After a hailstorm or heavy rain event, roofers can face dozens of urgent jobs in quick succession. You need to process payment fast on each site without fumbling with hardware or waiting for connections.', rec: 'Zeller Tap to Pay on your phone — always ready, no setup.' },
  { title: 'Large job values with deposits required', body: 'Roofing jobs typically run $5,000–$50,000+. Asking a client to pay in full at the door is unrealistic — you need a reliable deposit-at-quote workflow and a final payment mechanism on completion.', rec: 'Zeller payment link for deposit, terminal for balance on completion.' },
  { title: 'Insurance jobs — billing the assessor not the homeowner', body: 'Storm and hail damage claims are billed to the insurer or assessor, not the homeowner. The homeowner often isn\'t present for payment — remote billing is the only option.', rec: 'Zeller payment link or Stripe invoice to the insurance/assessor email.' },
  { title: 'New estate roofing — no WiFi on site', body: 'New housing estates have no internet until residents move in. Progress billing on new builds requires a terminal that works on mobile data independently.', rec: 'Zeller Terminal 1 with SIM (Optus, $15/mo) — no site WiFi needed.' },
]

const faqs = [
  { q: 'What is the best EFTPOS for roofers?', a: 'Zeller Terminal 1 with the SIM plan is the top pick. Large job values, remote site billing, and insurance claims all point to a terminal that works independently of site WiFi. The 1.4% rate and same-day settlement help with cash flow on large jobs.' },
  { q: 'How do roofers handle insurance billing?', a: 'Send a Zeller payment link or Stripe invoice to the assessor or insurance case manager\'s email. Include your ABN, scope of work, materials, labour, and GST breakdown. Stripe\'s invoicing is more polished for formal insurance claims.' },
  { q: 'How do roofers collect deposits?', a: 'Send a Zeller payment link via SMS or email at quote acceptance. Don\'t order materials or start work until the deposit clears — same-day settlement on Zeller means you can confirm the deposit quickly.' },
  { q: 'What EFTPOS works on new estate building sites?', a: 'Zeller Terminal 1 with SIM (Optus, $15/mo). New estates have no site WiFi, but Optus mobile coverage reaches most metro and suburban estates. The terminal works entirely on mobile data — no hotspot or WiFi required.' },
]

const SITE = 'https://tradiepayau.directory'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', name: 'Best EFTPOS for Roofers in Australia (2026)', description: 'Large job values, insurance billing, and new estate sites with no WiFi — the best EFTPOS and payment setup for Australian roofing businesses.', url: `${SITE}/trades/roofers`, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Best EFTPOS for Tradies', item: `${SITE}/#compare-all` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Roofers', item: `${SITE}/trades/roofers` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]

export default function RoofersPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Roofers in Australia (2026)"
        description="Large job values, insurance billing, and new estate sites with no WiFi — the best EFTPOS and payment setup for Australian roofing businesses."
        canonical="/trades/roofers"
        ogType="article"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1400&h=560&fit=crop&crop=center&q=80"
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
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Roofers in Australia (2026)</h1>
          <p className="hero-sub">Large job values, insurance claims, and no WiFi on new estates. Here's the payment setup that works for roofing.</p>
          <nav className="jump-links">
            <a href="#challenges">Key Challenges</a>
            <a href="#picks">Top Picks</a>
            <a href="#scenarios">Job Scenarios</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <section id="challenges" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">
          What Makes Roofing Different
        </motion.h2>
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
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">
            Top Picks for Roofers
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} whileHover={{ y: -3 }} className="lg-blue rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-white flex items-center justify-center font-bold">Z</div>
                <div>
                  <h3 className="font-bold text-brand-dark">Zeller Terminal 1 + SIM</h3>
                  <span className="badge badge-gold">Best for Roofers</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4">SIM plan handles new estate sites and suburban jobs with no WiFi. Payment links for deposit collection and insurance billing. 1.4% rate keeps margins tight on large jobs.</p>
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
                <div>
                  <h3 className="font-bold text-brand-dark">Stripe Invoicing</h3>
                  <span className="badge badge-muted">Insurance & Commercial</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4">Polished tax invoices with built-in payment link — ideal for insurance assessors and builders who need a formal invoice with your ABN, scope of work, and GST breakdown.</p>
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

      <section id="scenarios" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">
          Payment Playbook by Job Type
        </motion.h2>
        <div className="space-y-4">
          {[
            { title: 'Storm damage — residential emergency', body: 'Quote on site, send Zeller payment link for 50% deposit before ordering materials. Client pays via link — same-day settlement. Complete the repair, tap for balance on completion or send a final link if they\'re not home.' },
            { title: 'Insurance claim job', body: 'Complete the work. Generate a Stripe invoice addressed to the assessor or insurer — include ABN, scope of work (labour and materials itemised), and GST breakdown. Send to the claims case manager\'s email. Set 14–30 day payment terms for commercial insurance accounts.' },
            { title: 'New housing estate roofing', body: 'Zeller Terminal 1 with SIM is your standard terminal. New estates have Optus mobile coverage without any site WiFi. Process progress payments or completion payments directly on the terminal — no hotspot, no WiFi required.' },
            { title: 'Large job — deposit + progress + completion', body: 'Collect 30–40% deposit by Zeller payment link at contract sign. Use Zeller or Stripe payment links for each progress milestone (e.g. frame complete, sarking complete, tiles complete). Final payment on completion — tap on site or send final link.' },
            { title: 'Emergency call-out — residential', body: 'Quick patch job in bad weather. Zeller Tap to Pay on your phone — always on you, 1.4% rate, works on your phone data. Process payment on the spot, no hardware required.' },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }} className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
              <div>
                <h4 className="font-semibold text-brand-dark mb-1">{s.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">
            Roofer EFTPOS Comparison
          </motion.h2>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'SIM', 'Payment Links', 'Best for']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Top pick</span></>, '1.4%', '$99', '✓ $15/mo', '✓', 'On-site payments + deposit links'] },
              { cells: ['Zeller Tap to Pay', '1.4%', '$0', '✗ (phone data)', '✓', 'Emergency call-outs'] },
              { cells: ['Stripe', '1.7% + $0.10', '~$98', '✓ optional', '✓ Invoicing', 'Insurance and commercial billing'] },
              { cells: ['Square Terminal', '1.6%', '$329', '✗', '✓', 'Dead zone backup'] },
            ]}
          />
        </div>
      </section>

      <FaqSection items={faqs} title="FAQ for Roofers" />

      <section className="section section-alt container-page">
        <h2 className="text-xl font-bold text-brand-dark mb-4">Related Pages</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/" className="btn-secondary text-sm">Full EFTPOS comparison</Link>
          <Link to="/providers/zeller" className="btn-secondary text-sm">Zeller full review</Link>
          <Link to="/providers/stripe" className="btn-secondary text-sm">Stripe full review</Link>
          <Link to="/trades/builders" className="btn-secondary text-sm">Best EFTPOS for Builders</Link>
          <Link to="/trades/painters" className="btn-secondary text-sm">Best EFTPOS for Painters</Link>
        </div>
      </section>
    </>
  )
}
