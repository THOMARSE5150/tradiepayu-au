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
  { label: 'Best EFTPOS for Carpenters' },
]

const challenges = [
  { title: 'New builds at framing stage — no site WiFi', body: 'Framing, rough carpentry, and structural work happens early in the build — before any site infrastructure exists. There\'s no NBN, no modem, and no WiFi. WiFi-dependent terminals are useless at this stage.', rec: 'Zeller Terminal 1 + SIM — Optus mobile data, no site infrastructure needed.' },
  { title: 'Builder sub-contracting — invoicing not tapping', body: 'Carpenter sub-contractors on new builds are paid by builders on invoice, not by tapping a card on site. The workflow is formal: tax invoice with ABN, scope, and GST to the builder\'s accounts payable.', rec: 'Stripe invoicing or Zeller payment links for builder billing.' },
  { title: 'Renovation work — homeowner on site', body: 'Renovation carpentry is a mix: homeowner is often present, jobs run multiple days, and there\'s usually WiFi — but SIM provides peace of mind when the router is off or in a renovation zone.', rec: 'Zeller Terminal 1 + SIM as standard. Deposit at quote via payment link.' },
  { title: 'Custom furniture and joinery — high values', body: 'Custom cabinetry, built-ins, and furniture jobs often exceed $5,000–$20,000. Deposits and progress payments are standard — clients expect a professional billing process.', rec: 'Zeller payment link for deposit. Stripe invoice for formal progress billing.' },
]

const faqs = [
  { q: 'What is the best EFTPOS for carpenters?', a: 'Zeller Terminal 1 with SIM for on-site payments, and Stripe or Zeller payment links for builder and developer invoicing. New build sites have no WiFi at framing stage — the SIM terminal is essential. Builder billing requires formal invoices, not tap-and-go.' },
  { q: 'How do carpenter sub-contractors get paid by builders?', a: 'Send a Stripe invoice or Zeller payment link to the builder\'s accounts payable contact. Include your ABN, licence number, scope of works (materials and labour), and GST breakdown. Set 14-day payment terms. Builders typically pay on schedule — follow up before day 14 if unpaid.' },
  { q: 'Do carpenters need a SIM terminal?', a: 'Yes, for new build sites. Framing and rough carpentry happens before any site WiFi exists. Zeller Terminal 1 with SIM (Optus, $15/mo) works entirely on mobile data — no site infrastructure required.' },
  { q: 'How do carpenters collect deposits on renovation work?', a: 'Send a Zeller payment link via SMS at quote acceptance. For multi-week renovation jobs, collect 30–40% deposit before starting. Same-day settlement confirms funds before you order timber or hardware.' },
  { q: 'Is it hard to set up compared to a bank?', a: 'No — this is one of the biggest advantages of modern EFTPOS providers over banks. Providers like Zeller and Square approve accounts online in minutes with just your ABN. Bank merchant accounts require paperwork, branch visits, and often take days or weeks.' },
  { q: 'Can my team all use the same account?', a: 'Yes — Zeller and Square both support multiple terminals on one account. Payments from all devices settle centrally, with a full transaction log per terminal. No per-terminal rental fees — you purchase the hardware outright.' },
  { q: 'Can I take payments over the phone?', a: 'Yes — Zeller supports MOTO (phone) payments at 1.75% + $0.25 via the Virtual Terminal. Stripe is also strong for remote payments. Useful for taking deposits from customers who can\'t be on site.' },
]

const SITE = 'https://tradiepayau.directory'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for Carpenters in Australia (2026)', name: 'Best EFTPOS for Carpenters in Australia (2026)', image: { '@type': 'ImageObject', url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=630&fit=crop&crop=center&q=80', width: 1200, height: 630 }, description: 'New build sites with no WiFi, builder invoicing, and high-value custom joinery — the best EFTPOS and payment setup for Australian carpenters.', url: `${SITE}/trades/carpenters`, datePublished: '2026-01-15', dateModified: '2026-03-31', author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'By Trade', item: `${SITE}/trades` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Carpenters', item: `${SITE}/trades/carpenters` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Best EFTPOS for Carpenters in Australia', serviceType: 'EFTPOS Payment Processing for Carpenters', areaServed: { '@type': 'Country', name: 'Australia' }, provider: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, url: `${SITE}/trades/carpenters` },
]

export default function CarpentersPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Carpenters in Australia (2026)"
        description="New build sites with no WiFi, builder invoicing, and high-value custom joinery — the best EFTPOS and payment setup for Australian carpenters."
        canonical="/trades/carpenters"
        ogType="article"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&h=560&fit=crop&crop=center&q=80" alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta"><span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Trade Guide</span><span>·</span><span>Updated April 2026</span></div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Carpenters in Australia (2026)</h1>
          <p className="hero-sub">No WiFi on new build sites, builder invoicing, and deposits on custom joinery. Here's the payment setup that works for carpenters.</p>
          <nav className="jump-links"><a href="#picks">Comparison</a><a href="#challenges">Context</a><a href="#scenarios">Job Scenarios</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>
      <QuickVerdict
        pick="Zeller Terminal 1 + SIM"
        rate="1.4%"
        hardware="$99 + $15/mo SIM"
        reason="SIM for new build framing sites. Payment links for renovation deposit collection."
        providerSlug="zeller"
      />

      <section id="picks" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Top Picks for Carpenters</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} whileHover={{ y: -3 }} className="lg-blue rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-white flex items-center justify-center font-bold">Z</div>
                <div><h3 className="font-bold text-brand-dark">Zeller Terminal 1 + SIM</h3><span className="badge badge-gold">Best for Carpenters</span></div>
              </div>
              <p className="text-sm text-slate-600 mb-4">SIM connectivity for new build sites at framing stage. Payment links for deposit collection on renovation and joinery work. 1.4% rate, same-day settlement.</p>
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
                <div><h3 className="font-bold text-brand-dark">Stripe Invoicing</h3><span className="badge badge-muted">Builder & Developer Billing</span></div>
              </div>
              <p className="text-sm text-slate-600 mb-4">Professional tax invoices for builder and developer accounts. ABN, licence, scope, and GST — all in the invoice. The standard format for builder accounts payable departments.</p>
              <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                {[['Rate', '1.7%+$0.10'], ['Hardware', '~$98'], ['Invoicing', '✓ Full'], ['Settlement', '2 days']].map(([l, v], i) => (
                  <div key={i} className="lg-light rounded-lg p-2"><span className="block text-slate-500">{l}</span><span className="font-bold text-brand-dark">{v}</span></div>
                ))}
              </div>
              <Link to="/providers/stripe" className="btn-tertiary block text-center text-sm">Full Stripe Review →</Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="challenges" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">What Makes Carpentry Different</motion.h2>
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
            { title: 'New build framing sub-contract', body: 'Builder billing: send a Stripe invoice or Zeller payment link to the site manager or accounts payable at frame completion sign-off. Include your licence, ABN, and scope. Most builders pay net 14 days — invoice on the day of sign-off, not after.' },
            { title: 'Renovation — homeowner present', body: 'Zeller Terminal 1 + SIM as your standard terminal. Send payment link for deposit at quote acceptance. On completion, tap for balance. Homeowner is usually present for kitchen renos, deck builds, and room additions.' },
            { title: 'Custom joinery or cabinetry', body: 'Deposit at design sign-off (30–40%) via Zeller payment link. Progress payment at cabinet delivery (30%) via second link. Balance on installation completion — tap or final link. Three payment points reduces your exposure on bespoke work.' },
            { title: 'Formwork and structural — commercial site', body: 'Commercial construction billing: Stripe invoice to the head contractor with your scope of works, rates, and GST. Large commercial jobs often have 30-day payment terms — invoice accurately and follow up on day 25 if unpaid.' },
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
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Carpenter EFTPOS Comparison</motion.h2>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
            <p className="text-sm font-semibold text-green-800 mb-1">Real savings example</p>
            <p className="text-sm text-green-700">A carpenter doing <strong>$10,000/month</strong> in card revenue saves <strong>$240/year</strong> with Zeller (1.4%) vs Square (1.6%). For builder sub-contract invoicing via Stripe, switch high-value invoices to bank transfer (0.8%) to cut processing fees by more than half.</p>
          </div>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'SIM', 'Invoicing', 'Best for']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Top pick</span></>, '1.4%', '$99', '✓ $15/mo', '✓ Links', 'New builds + renovation'] },
              { cells: ['Stripe', '1.7% + $0.10', '~$98', '✓ optional', '✓ Full invoicing', 'Builder and developer billing'] },
              { cells: ['Zeller Tap to Pay', '1.4%', '$0', '✗ (phone data)', '✓ Links', 'Small jobs with phone data'] },
              { cells: ['Square Terminal', '1.6%', '$329', '✗', '✓', 'Dead zone backup'] },
            ]}
          />
          <p className="mt-4 text-xs text-slate-500">Need a deeper comparison? <Link to="/compare/zeller-vs-square" className="text-brand-blue font-medium hover:underline">Zeller vs Square — full head-to-head →</Link></p>
        </div>
      </section>

      <FaqSection items={faqs} title="FAQ for Carpenters" />

      <section className="section section-alt">
        <div className="container-page">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Best EFTPOS for Carpenters by State</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {STATES.map(s => (
              <Link
                key={s.slug}
                to={`/states/${s.slug}/carpenters`}
                className="flex flex-col gap-1 p-3 rounded-2xl bg-white border border-slate-100 hover:border-brand-blue hover:shadow-sm transition-all group"
              >
                <span className="text-xs font-bold text-brand-blue">{s.abbr}</span>
                <span className="text-sm font-semibold text-brand-dark group-hover:text-brand-blue transition-colors leading-tight">{s.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks slug="carpenters" type="trade" />
    </>
  )
}
