import { Link } from 'react-router-dom'
import RelatedLinks from '../../components/RelatedLinks'
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
  { label: 'Best EFTPOS for Painters' },
]

const challenges = [
  { title: 'Empty houses with no WiFi', body: 'Painters often work in homes between tenants, new builds, or investment properties — where the internet hasn\'t been connected yet. A WiFi-dependent terminal is useless from day one.', rec: 'Zeller Terminal 1 + SIM (Optus). Works on mobile data, no site WiFi needed.' },
  { title: 'Multi-day jobs — deposit up front', body: 'A full interior repaint is a 3–5 day job with significant materials cost. Collecting a deposit before starting is standard practice — you need a payment link workflow, not just a tap terminal.', rec: 'Zeller payment link at quote acceptance for 30–40% deposit.' },
  { title: 'Price-sensitive clients — avoid surcharging', body: 'Residential painting clients are often comparing quotes to the cent. Adding a card surcharge can feel petty and lose you repeat business. Low flat-rate providers let you absorb the fee without pain.', rec: 'Zeller at 1.4% — easiest to absorb into your quote pricing.' },
  { title: 'Body corporate and property manager billing', body: 'Commercial and strata painting jobs are often billed to a body corporate or property management company, not the resident. Remote invoicing to an accounts department is the standard workflow.', rec: 'Zeller payment links or Stripe invoicing to the accounts contact.' },
]

const faqs = [
  { q: 'What is the best EFTPOS for painters?', a: 'Zeller Terminal 1 with the SIM plan. Empty houses have no WiFi, and the 1.4% rate is the easiest to absorb on residential jobs. Zeller payment links handle deposit collection at quote acceptance — one of the most important payment workflows for painters.' },
  { q: 'How do painters collect deposits?', a: 'Send a Zeller payment link via SMS or email at the time of quote acceptance. Most clients pay within a few hours. Same-day settlement means you can confirm the deposit and order materials the same day.' },
  { q: 'How do painters bill body corporates and property managers?', a: 'Use Zeller payment links or Stripe invoicing. Send to the accounts department email with your ABN, scope of work, and GST breakdown. Stripe invoicing is the more polished option for formal B2B billing.' },
  { q: 'Should painters use Zeller Tap to Pay or a terminal?', a: 'Tap to Pay on your phone works well for small touch-up jobs and single-day jobs where you have good mobile signal. For multi-day jobs on empty premises, upgrade to Terminal 1 with SIM — the dedicated hardware is more reliable all day.' },
  { q: 'How much does EFTPOS cost a painting business per month?', a: 'At $8,000/month in card revenue, Zeller costs $112/month (1.4%) plus $15 SIM = $127 total. Square costs $128 (1.6%) with no SIM required. For a painting business doing $8k/month the rate difference is about $19/month. The real value is the SIM plan eliminating the need to chase bank transfers on empty-house jobs.' },
  { q: 'Is it hard to set up compared to a bank?', a: 'No — Zeller and Square approve accounts online in minutes with just your ABN. Bank merchant accounts require paperwork, branch visits, and often take days or weeks.' },
  { q: 'Can I take EFTPOS on a heritage property job?', a: 'Yes — Zeller Tap to Pay works anywhere you have phone signal. Heritage properties often have homeowner WiFi, so the standard Terminal 1 without SIM is fine. Carry Tap to Pay as a fallback for older buildings with thick stone or brick walls that can kill signal.' },
]

const SITE = 'https://tradiepayau.directory'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for Painters in Australia (2026)', name: 'Best EFTPOS for Painters in Australia (2026)', image: { '@type': 'ImageObject', url: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1200&h=630&fit=crop&crop=center&q=80', width: 1200, height: 630 }, description: 'Empty houses with no WiFi, deposit collection, and body corporate billing — the best EFTPOS and payment setup for Australian painting businesses.', url: `${SITE}/trades/painters`, datePublished: '2026-01-15', dateModified: '2026-03-31', author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'By Trade', item: `${SITE}/trades` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Painters', item: `${SITE}/trades/painters` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Best EFTPOS for Painters in Australia', serviceType: 'EFTPOS Payment Processing for Painters', areaServed: { '@type': 'Country', name: 'Australia' }, provider: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, url: `${SITE}/trades/painters` },
]

export default function PaintersPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Painters in Australia (2026)"
        description="Empty houses with no WiFi, deposit collection, and body corporate billing — the best EFTPOS and payment setup for Australian painting businesses."
        canonical="/trades/painters"
        ogType="article"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=900&h=560&fit=crop&crop=center&q=80"
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
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Painters in Australia (2026)</h1>
          <p className="hero-sub">Empty houses, deposit collection, and body corporate billing. Here's the payment setup that works for painting businesses.</p>
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
        reason="SIM for new builds and renos. Payment links for deposit collection before starting."
        providerSlug="zeller"
      />

      <section id="picks" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">
            Top Picks for Painters
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} whileHover={{ y: -3 }} className="lg-blue rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-white flex items-center justify-center font-bold">Z</div>
                <div>
                  <h3 className="font-bold text-brand-dark">Zeller Terminal 1 + SIM</h3>
                  <span className="badge badge-gold">Best for Painters</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4">SIM plan for empty properties without internet. Payment links for deposit collection at quote. 1.4% rate — easiest to absorb on residential jobs without adding surcharge friction.</p>
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
                  <span className="badge badge-muted">Body Corporate & Strata</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4">Professional invoices with built-in payment link for body corporate and property manager accounts. Useful when the payer is a company, not an individual.</p>
              <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                {[['Rate', '1.7%+$0.10'], ['Hardware', '~$98'], ['Invoicing', '✓'], ['Settlement', '2 days']].map(([l, v], i) => (
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
          What Makes Painting Different
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
            { title: 'Residential repaint — occupied home', body: 'Quote on site, send Zeller payment link for 30–40% deposit. Client pays online before you start. On completion, tap on the Zeller terminal for the balance. Client is present — smooth, card-only experience.' },
            { title: 'Empty investment property — no internet', body: 'Zeller Terminal 1 + SIM is your only option. No home WiFi, no tenant hotspot. The terminal runs on Optus mobile data. Process completion payment on site when the property manager does their inspection walkthrough.' },
            { title: 'New build painting contract', body: 'Progress billing to a builder: send Zeller or Stripe payment links at each stage milestone (first coat, second coat, touch-ups complete). Builders prefer email invoices with ABN and GST breakdown — Stripe invoicing is the tidier option.' },
            { title: 'Body corporate exterior job', body: 'Email a formal Stripe invoice to the strata manager\'s accounts department. Include scope of works, materials, labour, ABN, and GST. Set 14-day payment terms. Follow up by phone if unpaid on day 10.' },
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
            Painter EFTPOS Comparison
          </motion.h2>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
            <p className="text-sm font-semibold text-green-800 mb-1">Real savings example</p>
            <p className="text-sm text-green-700">A painting business doing <strong>$8,000/month</strong> in card payments saves <strong>$228/year</strong> with Zeller (1.4% + $15 SIM) vs Square (1.6%, no SIM). Same-day settlement means deposit funds clear the day a client accepts your quote.</p>
          </div>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'SIM', 'Payment Links', 'Best for']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Top pick</span></>, '1.4%', '$99', '✓ $15/mo', '✓', 'All painting — primary device'] },
              { cells: ['Zeller Tap to Pay', '1.4%', '$0', '✗ (phone data)', '✓', 'Small jobs, touch-ups'] },
              { cells: ['Stripe', '1.7% + $0.10', '~$98', '✓ optional', '✓ Invoicing', 'Body corporate, strata billing'] },
              { cells: ['Square Terminal', '1.6%', '$329', '✗', '✓', 'Offline backup if needed'] },
            ]}
          />
          <p className="mt-4 text-xs text-slate-500">Need a deeper comparison? <Link to="/compare/zeller-vs-square" className="text-brand-blue font-medium hover:underline">Zeller vs Square — full head-to-head →</Link></p>
        </div>
      </section>

      <FaqSection items={faqs} title="FAQ for Painters" />

      <section className="section section-alt">
        <div className="container-page">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Best EFTPOS for Painters by State</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {STATES.map(s => (
              <Link
                key={s.slug}
                to={`/states/${s.slug}/painters`}
                className="flex flex-col gap-1 p-3 rounded-2xl bg-white border border-slate-100 hover:border-brand-blue hover:shadow-sm transition-all group"
              >
                <span className="text-xs font-bold text-brand-blue">{s.abbr}</span>
                <span className="text-sm font-semibold text-brand-dark group-hover:text-brand-blue transition-colors leading-tight">{s.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks slug="painters" type="trade" />
    </>
  )
}
