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
  { label: 'Best EFTPOS for Fencers' },
]

const challenges = [
  { title: 'Remote rural and acreage sites — zero connectivity', body: 'Fencing work frequently takes place on rural properties, hobby farms, and large acreage blocks well outside mobile coverage areas. Whether it\'s a boundary fence on 50 acres or post-and-rail on a country estate, WiFi doesn\'t exist and mobile data can be unreliable or absent.', rec: 'Zeller Terminal 1 + SIM with offline mode. Send a payment link via SMS before you leave the site when signal returns.' },
  { title: 'Large material deposits — steel, timber, Colorbond', body: 'A full Colorbond fence quote for a suburban block can involve $3,000–$8,000 in materials alone. Steel post fencing and timber paling jobs for rural properties can run far higher. Collecting a deposit before ordering stock is essential — you can\'t return custom-cut Colorbond panels.', rec: 'Zeller payment link for deposit at quote acceptance. Same-day settlement means funds clear before you order.' },
  { title: 'Absent landowner — property not occupied', body: 'Acreage and rural fence work is often booked weeks in advance on properties that aren\'t occupied daily. The landowner may live elsewhere. You may complete the work with nobody present — you need to collect payment remotely when the job is done, not by chasing them down.', rec: 'Zeller payment link via SMS on job completion. Works even when the client is in a city office while you\'re on their property.' },
  { title: 'Large linear metre jobs — staged payments', body: 'Long boundary fence contracts — 500m+ of rural fencing, or a full subdivision fence line — can exceed $20,000–$50,000. Single lump-sum billing at the end is bad for cash flow. Staged billing by completed sections is standard practice for large jobs.', rec: 'Stripe invoicing for staged progress billing. Issue each invoice at section completion with GPS/map reference for each stage.' },
]

const faqs = [
  { q: 'What is the best EFTPOS for fencers?', a: 'Zeller Terminal 1 with SIM for on-site payments at rural and acreage properties where mobile coverage is patchy, and Stripe or Zeller payment links for deposits and absent-landowner jobs where you need to collect remotely. Large fencing contracts benefit from Stripe invoicing for staged progress billing.' },
  { q: 'How do fencers collect deposits before ordering materials?', a: 'Send a Zeller payment link via SMS at quote acceptance. The client pays online from wherever they are — home, office, or city apartment. Same-day settlement means funds clear the next business day, so you can confidently order Colorbond panels, steel posts, or treated timber the following morning without carrying the material cost yourself.' },
  { q: 'How do fencers get paid when the landowner is not on-site?', a: 'Send a Zeller payment link via SMS when the job is done, with a photo of the completed fence attached for their records. The client can pay from anywhere within minutes. Avoid leaving invoices on-site or relying on bank transfer promises — payment links are immediate and trackable.' },
  { q: 'How should fencers handle staged payments on large contracts?', a: 'Use Stripe invoicing with a clear stage breakdown — for example, Stage 1: posts set and concrete (100m), Stage 2: rails and palings (100m), Stage 3: gates and finishes. Issue each invoice at stage completion with a brief description and photo. Set 7-day payment terms per stage to maintain cash flow across a multi-week contract.' },
  { q: 'How much does EFTPOS cost a fencing business per month?', a: 'At $12,000/month in card revenue, Zeller costs $168/month (1.4%) plus $15 SIM = $183. Square at the same volume is $192 (1.6%). For rural sites with patchy Optus coverage, carry both: Zeller as primary, Square offline mode as backup for genuinely no-signal properties.' },
  { q: 'Does EFTPOS work on rural properties with weak mobile signal?', a: 'Zeller Terminal 1 + SIM covers most rural areas on the Optus network. For properties beyond Optus coverage, Square Terminal offline mode accepts payments locally and processes them when you reach a signal area. Always enable offline mode before leaving town on a remote job.' },
  { q: 'Is it hard to set up EFTPOS compared to a bank?', a: 'No — Zeller and Square approve accounts online in minutes with just your ABN. Bank merchant accounts require paperwork and often take days or weeks. For a new fencing business, Zeller Tap to Pay is free to start — no hardware purchase until your volume justifies the terminal.' },
]

const SITE = 'https://tradiepayau.directory'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for Fencers in Australia (2026)', name: 'Best EFTPOS for Fencers in Australia (2026)', image: { '@type': 'ImageObject', url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=630&fit=crop&crop=center&q=80', width: 1200, height: 630 }, description: 'Remote rural sites, large material deposits, absent landowners, and staged payment contracts — the best EFTPOS and payment setup for Australian fencers.', url: `${SITE}/trades/fencers`, datePublished: '2026-01-15', dateModified: '2026-03-31', author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'By Trade', item: `${SITE}/trades` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Fencers', item: `${SITE}/trades/fencers` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]

export default function FencersPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Fencers in Australia (2026)"
        description="Remote rural sites, large material deposits, absent landowners, and staged payment contracts — the best EFTPOS and payment setup for Australian fencers."
        canonical="/trades/fencers"
        ogType="article"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=900&h=560&fit=crop&crop=center&q=80" alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta"><span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Trade Guide</span><span>·</span><span>Updated March 2026</span></div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Fencers in Australia (2026)</h1>
          <p className="hero-sub">No signal on rural properties, large Colorbond deposits, and collecting from absent landowners. Here's the payment setup that works for fencers.</p>
          <nav className="jump-links"><a href="#picks">Comparison</a><a href="#challenges">Context</a><a href="#scenarios">Job Scenarios</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>
      <QuickVerdict
        pick="Zeller Terminal 1 + SIM"
        rate="1.4%"
        hardware="$99 + $15/mo SIM"
        reason="Optus SIM covers rural and acreage sites. Payment links for absent landowners."
        providerSlug="zeller"
      />

      <section id="picks" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Top Picks for Fencers</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} whileHover={{ y: -3 }} className="lg-blue rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-white flex items-center justify-center font-bold">Z</div>
                <div><h3 className="font-bold text-brand-dark">Zeller Terminal 1 + SIM</h3><span className="badge badge-gold">Best for Fencers</span></div>
              </div>
              <p className="text-sm text-slate-600 mb-4">Optus SIM connectivity for rural and acreage properties. Offline mode for complete dead zones — processes when signal returns. Payment links for absent landowners and remote deposit collection. 1.4% rate, same-day settlement.</p>
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
                <div><h3 className="font-bold text-brand-dark">Stripe Invoicing</h3><span className="badge badge-muted">Large Contracts & Staged Billing</span></div>
              </div>
              <p className="text-sm text-slate-600 mb-4">Stage-by-stage progress invoicing for large rural and commercial fence contracts. ABN, scope description, and GST on each invoice. Ideal for council, developer, and rural property management billing with 14–30 day terms.</p>
              <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                {[['Rate', '1.7%+$0.10'], ['Hardware', 'None needed'], ['Invoicing', '✓ Full'], ['Settlement', '2 days']].map(([l, v], i) => (
                  <div key={i} className="lg-light rounded-lg p-2"><span className="block text-slate-500">{l}</span><span className="font-bold text-brand-dark">{v}</span></div>
                ))}
              </div>
              <Link to="/providers/stripe" className="btn-tertiary block text-center text-sm">Full Stripe Review →</Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="challenges" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">What Makes Fencing Different</motion.h2>
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
            { title: 'Colorbond fence — suburban block', body: 'Send a Zeller payment link at quote acceptance for a 40–50% material deposit. This covers your Colorbond panels, steel posts, and capping before you order. Same-day settlement means you can place the order next morning. Tap for balance on completion — homeowner is usually around for suburban jobs.' },
            { title: 'Rural boundary fence — acreage property', body: 'Collect a 50% deposit via Zeller payment link before mobilising — rural jobs involve significant travel and material pre-orders. On completion, send a final payment link via SMS. The landowner may be at their city address; a link is the only practical way to collect without chasing bank transfers that never arrive.' },
            { title: 'Large contract — rural or subdivision fencing', body: 'Break the contract into stages (mobilisation, posts set, rails complete, finishes and gates). Issue a Stripe invoice at each stage milestone. Include a brief description and photos as attachments. Set 7-day terms per stage. For contracts over $20,000, your cash flow depends on not waiting until the end to invoice.' },
            { title: 'Council or developer fencing', body: 'Council and property developer accounts require formal tax invoices with ABN and GST breakdown. Use Stripe invoicing. Reference the contract number or PO number in every invoice. Developers often run 30-day terms — invoice on the milestone date, not the day after you finish, to avoid the clock resetting.' },
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
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Fencer EFTPOS Comparison</motion.h2>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'SIM', 'Invoicing', 'Best for']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Top pick</span></>, '1.4%', '$99', '✓ $15/mo', '✓ Links', 'Rural + acreage sites, deposit collection'] },
              { cells: ['Stripe', '1.7% + $0.10', 'None needed', '✓ optional', '✓ Full invoicing', 'Large contracts and developer billing'] },
              { cells: ['Zeller Tap to Pay', '1.4%', '$0', '✗ (phone data)', '✓ Links', 'Suburban jobs where owner is present'] },
              { cells: ['Square Terminal', '1.6%', '$329', '✗', '✓', 'Workshop or yard counter sales'] },
            ]}
          />
          <p className="mt-4 text-xs text-slate-500">Need a deeper comparison? <Link to="/compare/zeller-vs-square" className="text-brand-blue font-medium hover:underline">Zeller vs Square — full head-to-head →</Link></p>
        </div>
      </section>

      <FaqSection items={faqs} title="FAQ for Fencers" />

      <RelatedLinks slug="fencers" type="trade" />
    </>
  )
}
