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

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'By Trade', href: '/trades' },
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
  { q: 'Is it hard to set up compared to a bank?', a: 'No — this is one of the biggest advantages of modern EFTPOS providers over banks. Providers like Zeller and Square approve accounts online in minutes with just your ABN. Bank merchant accounts require paperwork, branch visits, and often take days or weeks.' },
  { q: 'Can my team all use the same account?', a: 'Yes — Zeller and Square both support multiple terminals on one account. Payments from all devices settle centrally, with a full transaction log per terminal. No per-terminal rental fees — you purchase the hardware outright.' },
  { q: 'Can I take payments over the phone?', a: 'Yes — Zeller supports MOTO (phone) payments at 1.75% + $0.25 via the Virtual Terminal. Stripe is also strong for remote payments. Useful for taking deposits from customers who can\'t be on site.' },
]

import siteMeta from '../../data/site-meta.json'
const SITE = 'https://tradiepayau.directory'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for Roofers in Australia (2026)', name: 'Best EFTPOS for Roofers in Australia (2026)', image: { '@type': 'ImageObject', url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=630&fit=crop&crop=center&q=80', width: 1200, height: 630 }, description: 'Large job values, insurance billing, and new estate sites with no WiFi — the best EFTPOS and payment setup for Australian roofing businesses.', url: `${SITE}/trades/roofers`, datePublished: '2026-01-15', dateModified: siteMeta.lastVerified, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'By Trade', item: `${SITE}/trades` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Roofers', item: `${SITE}/trades/roofers` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Best EFTPOS for Roofers in Australia', serviceType: 'EFTPOS Payment Processing for Roofers', areaServed: { '@type': 'Country', name: 'Australia' }, provider: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, url: `${SITE}/trades/roofers` },
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
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&h=560&fit=crop&crop=center&q=80"
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
            <span>·</span><span>Updated April 2026</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Roofers in Australia (2026)</h1>
          <p className="hero-sub">Large job values, insurance claims, and no WiFi on new estates. Here's the payment setup that works for roofing.</p>
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
        reason="SIM for on-roof and gutter access. Payment links for deposit collection on storm damage jobs."
        providerSlug="zeller"
        trade="roofers"
      />

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

      <section id="challenges" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">
          What Makes Roofing Different
        </motion.h2>
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
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
            <p className="text-sm font-semibold text-green-800 mb-1">Real savings example</p>
            <p className="text-sm text-green-700">A roofing business doing <strong>$20,000/month</strong> in card revenue saves <strong>$480/year</strong> with Zeller (1.4%) vs Square (1.6%). After a storm event with 20 jobs in a week, same-day settlement means cash is in your account overnight — critical when ordering materials at pace.</p>
          </div>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'SIM', 'Payment Links', 'Best for']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Top pick</span></>, '1.4%', '$99', '✓ $15/mo', '✓', 'On-site payments + deposit links'] },
              { cells: ['Zeller Tap to Pay', '1.4%', '$0', '✗ (phone data)', '✓', 'Emergency call-outs'] },
              { cells: ['Stripe', '1.7% + $0.10', '~$98', '✓ optional', '✓ Invoicing', 'Insurance and commercial billing'] },
              { cells: ['Square Terminal', '1.6%', '$329', '✗', '✓', 'Dead zone backup'] },
            ]}
          />
          <p className="mt-4 text-xs text-slate-500">Need a deeper comparison? <Link to="/compare/zeller-vs-square" className="text-brand-blue font-medium hover:underline">Zeller vs Square — full head-to-head →</Link></p>
        </div>
      </section>

      <FaqSection items={faqs} title="FAQ for Roofers" />

      <section className="section section-alt">
        <div className="container-page">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Best EFTPOS for Roofers by State</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {STATES.map(s => (
              <Link
                key={s.slug}
                to={`/states/${s.slug}/roofers`}
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
      <RelatedLinks slug="roofers" type="trade" />
    </>
  )
}
