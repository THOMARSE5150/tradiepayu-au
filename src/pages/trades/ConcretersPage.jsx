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
  { label: 'Best EFTPOS for Concreters' },
]

const challenges = [
  { title: 'Remote new estate sites — no WiFi anywhere', body: 'New housing estates are among the most common job sites for concreters — and they have zero internet infrastructure until residents move in. WiFi-dependent terminals simply don\'t work here.', rec: 'Zeller Terminal 1 + SIM (Optus). Works on mobile data, no site WiFi.' },
  { title: 'Very large job values — cash flow matters', body: 'A driveway, slab, or commercial floor pour can run $5,000 to $80,000. Collecting a deposit before mobilising is not optional — it\'s how you protect yourself on materials that are poured and can\'t be recovered.', rec: 'Zeller payment link for 40–50% deposit. Same-day settlement confirms funds.' },
  { title: 'Materials purchased same morning', body: 'Concrete is ordered and paid for the morning of the pour — often before the client\'s deposit has fully settled. Settlement speed matters directly to your daily cash position.', rec: 'Zeller same-day settlement into Zeller account — fastest available.' },
  { title: 'Wet hands — terminal hygiene on site', body: 'Concrete work is physical and messy. Carrying expensive terminal hardware on a pour site is a risk. Tap to Pay on a phone in a protective case solves the problem for smaller jobs.', rec: 'Zeller Tap to Pay on iPhone or Android for smaller residential jobs.' },
]

const faqs = [
  { q: 'What is the best EFTPOS for concreters?', a: 'Zeller Terminal 1 with the SIM plan. New estate sites have no WiFi, and the SIM terminal handles all on-site payments on Optus mobile data. Same-day settlement into your Zeller account helps manage cash flow around materials purchasing.' },
  { q: 'How do concreters collect deposits before pouring?', a: 'Send a Zeller payment link via SMS or email at quote acceptance. Same-day settlement confirms funds before you order ready-mix or materials. Don\'t mobilise until the deposit is cleared — concrete is non-reversible.' },
  { q: 'What EFTPOS works on new estate building sites?', a: 'Zeller Terminal 1 with SIM (Optus, $15/mo). New estates have Optus mobile coverage without any site WiFi. The terminal processes payments entirely on mobile data — independent of any site infrastructure.' },
  { q: 'How do concreters handle large commercial jobs?', a: 'For commercial warehouse floors, carparks, or industrial slabs, use Stripe invoicing addressed to the developer or head contractor. Include your ABN, scope of works (area, thickness, mix), and GST. Request a purchase order number before mobilising on large commercial jobs.' },
  { q: 'How much does EFTPOS cost a concreting business per month?', a: 'At $15,000/month in card revenue, Zeller costs $210/month (1.4%) plus $15 SIM = $225 total. Square at the same volume is $240 (1.6%). That\'s $180/year saved. More importantly: Zeller same-day settlement means your deposit clears the day you take it — critical when you\'re ordering ready-mix the following morning.' },
  { q: 'Is it hard to set up compared to a bank?', a: 'No — Zeller and Square approve accounts online in minutes with just your ABN. Bank merchant accounts require paperwork, branch visits, and often take days or weeks. For a new concreting business, Zeller is the fastest path to accepting card payments.' },
  { q: 'Can I take a card payment on-site with wet or dirty hands?', a: 'Zeller Tap to Pay on an iPhone in a rugged case is the cleanest option — the client taps their own card or phone to your screen. For terminal hardware, the Zeller Terminal 1 has a sealed design that handles dusty environments better than most alternatives.' },
]

const SITE = 'https://tradiepayau.directory'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for Concreters in Australia (2026)', name: 'Best EFTPOS for Concreters in Australia (2026)', image: { '@type': 'ImageObject', url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&h=630&fit=crop&crop=center&q=80', width: 1200, height: 630 }, description: 'Remote estate sites with no WiFi, large deposits, and materials cash flow — the best EFTPOS and payment setup for Australian concreting businesses.', url: `${SITE}/trades/concreters`, datePublished: '2026-01-15', dateModified: '2026-03-31', author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'By Trade', item: `${SITE}/trades` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Concreters', item: `${SITE}/trades/concreters` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]

export default function ConcretersPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Concreters in Australia (2026)"
        description="Remote estate sites with no WiFi, large deposits, and materials cash flow — the best EFTPOS and payment setup for Australian concreting businesses."
        canonical="/trades/concreters"
        ogType="article"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&h=560&fit=crop&crop=center&q=80" alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta"><span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Trade Guide</span><span>·</span><span>Updated March 2026</span></div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Concreters in Australia (2026)</h1>
          <p className="hero-sub">No WiFi on new estate sites, large deposits before the pour, and same-day cash flow for materials. Here's what works.</p>
          <nav className="jump-links"><a href="#picks">Comparison</a><a href="#challenges">Context</a><a href="#scenarios">Job Scenarios</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>
      <QuickVerdict
        pick="Zeller Terminal 1 + SIM"
        rate="1.4%"
        hardware="$99 + $15/mo SIM"
        reason="SIM for new estate slabs. Same-day settlement covers daily material purchasing."
        providerSlug="zeller"
      />

      <section id="picks" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Top Picks for Concreters</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} whileHover={{ y: -3 }} className="lg-blue rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-white flex items-center justify-center font-bold">Z</div>
                <div><h3 className="font-bold text-brand-dark">Zeller Terminal 1 + SIM</h3><span className="badge badge-gold">Best for Concreters</span></div>
              </div>
              <p className="text-sm text-slate-600 mb-4">Essential for new estate sites. SIM connectivity on Optus works where there's no site WiFi. Same-day settlement into Zeller account — fastest cash flow for daily materials purchasing.</p>
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
                <div><h3 className="font-bold text-brand-dark">Stripe Invoicing</h3><span className="badge badge-muted">Commercial & Developer Jobs</span></div>
              </div>
              <p className="text-sm text-slate-600 mb-4">For large commercial slabs and developer contracts. Formal tax invoices with scope of works, mix design, area, and GST. Standard for head contractor and developer accounts payable.</p>
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
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">What Makes Concreting Different</motion.h2>
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
            { title: 'Residential driveway', body: 'Quote accepted: send Zeller payment link for 40% deposit. Deposit clears same day — order ready-mix. On completion: tap for balance on Zeller Terminal 1 + SIM. Client present on most residential jobs.' },
            { title: 'New estate house slab', body: 'Builder billing: send Zeller or Stripe payment link to the site supervisor or accounts payable contact. Zeller for casual relationships; Stripe invoicing for formal builder accounts with payment terms.' },
            { title: 'Commercial warehouse or carpark slab', body: 'Formal Stripe invoice to the developer or head contractor. Include the concrete specification (PSI/MPa, aggregate, finish type), pour date, area poured, and itemised costs. Request PO number before mobilising. Set 30-day payment terms on large commercial contracts.' },
            { title: 'Pool surrounds and decorative concrete', body: 'These are residential premium jobs — clients expect professionalism. Zeller payment link for deposit. Terminal for completion. Clean receipts, no surcharge friction. 1.4% is easy to absorb on $8,000+ jobs.' },
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
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Concreter EFTPOS Comparison</motion.h2>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
            <p className="text-sm font-semibold text-green-800 mb-1">Real savings example</p>
            <p className="text-sm text-green-700">A concreter doing <strong>$15,000/month</strong> in card payments saves <strong>$180/year</strong> with Zeller (1.4%) vs Square (1.6%). Same-day settlement is the bigger win — deposit funds clear the day you take them, so you can order ready-mix the next morning without waiting for funds.</p>
          </div>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'SIM', 'Settlement', 'Best for']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Top pick</span></>, '1.4%', '$99', '✓ $15/mo', 'Same day', 'New estates + residential'] },
              { cells: ['Stripe', '1.7% + $0.10', '~$98', '✓ optional', '2 days', 'Commercial + developer billing'] },
              { cells: ['Zeller Tap to Pay', '1.4%', '$0', '✗ (phone data)', 'Same day', 'Small jobs, phone data OK'] },
              { cells: ['Square Terminal', '1.6%', '$329', '✗', 'Next day', 'Offline dead zone backup'] },
            ]}
          />
          <p className="mt-4 text-xs text-slate-500">Need a deeper comparison? <Link to="/compare/zeller-vs-square" className="text-brand-blue font-medium hover:underline">Zeller vs Square — full head-to-head →</Link></p>
        </div>
      </section>

      <FaqSection items={faqs} title="FAQ for Concreters" />

      <RelatedLinks slug="concreters" type="trade" />
    </>
  )
}
