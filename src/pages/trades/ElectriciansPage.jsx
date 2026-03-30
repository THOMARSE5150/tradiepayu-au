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
  { label: 'Best EFTPOS for Electricians' },
]

const faqs = [
  { q: 'What is the best EFTPOS for electricians?', a: 'Zeller Terminal 1 with the SIM plan is the top pick. Switchboards, plant rooms, and commercial electrical work are common dead zones — the SIM terminal handles most building coverage. For genuine zero-signal sites, carry Square Terminal as a backup for its offline mode.' },
  { q: 'What EFTPOS works in switchboard rooms?', a: 'It depends on the building. Zeller Terminal 1 with SIM (Optus) covers most switchboard rooms in suburban and metro buildings. For underground switchboards and large concrete structures, Square Terminal offline mode is the fallback.' },
  { q: 'How do electricians get paid for emergency call-outs?', a: 'Zeller Tap to Pay on your phone is the simplest option — always on you, no hardware to forget, 1.4% rate, same-day settlement. If the client isn\'t home, send a Zeller payment link via SMS.' },
  { q: 'Is it hard to set up compared to a bank?', a: 'No — this is one of the biggest advantages of modern EFTPOS providers over banks. Providers like Zeller and Square approve accounts online in minutes with just your ABN. Bank merchant accounts require paperwork, branch visits, and often take days or weeks.' },
  { q: 'Can my team all use the same account?', a: 'Yes — Zeller and Square both support multiple terminals on one account. Payments from all devices settle centrally, with a full transaction log per terminal. No per-terminal rental fees — you purchase the hardware outright.' },
  { q: 'Can I take payments over the phone?', a: 'Yes — Zeller supports MOTO (phone) payments at 1.75% + $0.25 via the Virtual Terminal. Stripe is also strong for remote payments. Useful for taking deposits from customers who can\'t be on site.' },
]

const SITE = 'https://tradiepayau.directory'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', name: 'Best EFTPOS for Electricians in Australia (2026)', description: 'Switchboards, plant rooms, and dead zones — the best EFTPOS payment setup for Australian electricians who need connectivity where there is none.', url: `${SITE}/trades/electricians`, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'By Trade', item: `${SITE}/trades` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Electricians', item: `${SITE}/trades/electricians` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]

export default function ElectriciansPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Electricians in Australia (2026)"
        description="Switchboards, plant rooms, and dead zones — the best EFTPOS payment setup for Australian electricians who need connectivity where there isn't any."
        canonical="/trades/electricians"
        ogType="article"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        {/* Trade hero image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1400&h=560&fit=crop&crop=center&q=80"
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
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Electricians in Australia (2026)</h1>
          <p className="hero-sub">Switchboards, plant rooms, and dead zones. The payment setup for electricians who need connectivity where there isn't any.</p>
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
        reason="SIM coverage for switchboards and plant rooms."
        backup="Square Terminal for underground dead zones"
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
            Top Picks for Electricians
          </motion.h2>
          <div className="breakeven-box mb-6">
            <strong>Two-device strategy:</strong> Zeller Terminal 1 + SIM ($99, primary) + Square Terminal ($329, dead-zone backup). No monthly fee on Square. Total hardware: $428.
          </div>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'SIM', 'Offline', 'Best for']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Primary</span></>, '1.4%', '$99', '✓ $15/mo', '✗', 'Most job sites — lowest rate'] },
              { cells: ['Square Terminal', '1.6%', '$329', '✗', '✓', 'Plant rooms, underground, dead zones'] },
              { cells: ['Zeller Tap to Pay', '1.4%', '$0', '✗ (phone data)', '✗', 'After-hours emergencies, residential'] },
            ]}
          />
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
          What Makes Electrical Work Different
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'Switchboards and meter rooms', body: 'Steel enclosures and concrete voids in commercial and industrial buildings frequently kill mobile signal. These are exactly the environments electricians work in daily.', rec: 'SIM terminal (Optus, most metro buildings covered) + Square offline backup.' },
            { title: 'Commercial and industrial dead zones', body: 'Factories, warehouses, plant rooms, underground carparks — these environments combine thick concrete, steel shielding, and no customer WiFi.', rec: 'Square Terminal offline mode for guaranteed zero-connectivity sites.' },
            { title: 'Domestic after-hours emergencies', body: 'Fault-finding at 10pm, emergency hot water repairs, storm damage. Payment needs to work when office support is unavailable.', rec: 'Zeller Tap to Pay on your phone — always on you, 24/7.' },
            { title: 'New estate rough-in work', body: 'New estates have no WiFi and often patchy coverage. Multiple stages of the same build require reliable payment across visits.', rec: 'Zeller Terminal 1 + SIM — Optus covers most metro new estates.' },
          ].map((c, i) => (
            <details className="lg-light rounded-2xl p-4 group open:ring-1 open:ring-brand-blue/20 transition-all">
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
            { title: 'Residential fault-finding — owner at home', body: 'Tap with Zeller Terminal 1 or your phone before leaving. 1.4% rate, same-day settlement.' },
            { title: 'Residential emergency — owner not home', body: 'Complete the job, send a Zeller payment link via SMS. Message: "Hi [name], job done at [address]. Here\'s your payment link." Client pays from their phone.' },
            { title: 'Commercial switchboard room — no signal', body: 'Switch to Square Terminal with offline mode enabled. Take payment in the dead zone, reconnect in the lobby or carpark. Process within 24 hours.' },
            { title: 'New estate rough-in or fit-off', body: 'Zeller Terminal 1 with SIM. Optus covers most metro new estates. No need for the homeowner\'s WiFi or a hotspot.' },
            { title: 'Large commercial job — invoice to accounts', body: 'Send a Zeller or Stripe invoice to the building manager\'s accounts email. Include ABN, job description, labour, materials, and GST breakdown. 14–30 day payment terms for commercial accounts.' },
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

      <FaqSection items={faqs} title="FAQ for Electricians" />

      <RelatedLinks slug="electricians" type="trade" />
    </>
  )
}
