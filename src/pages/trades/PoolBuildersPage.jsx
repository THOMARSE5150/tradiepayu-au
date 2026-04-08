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
import { tradeHeroUrl, tradeHeroAlt } from '../../utils/tradeHero'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'By Trade', href: '/trades' },
  { label: 'Best EFTPOS for Pool Builders' },
]

const challenges = [
  { title: 'Very high job values — multiple staged payments', body: 'A residential concrete pool in Australia typically runs $30,000–$80,000, with prestige builds exceeding $100,000. Collecting the full amount at the end is impractical — staged payments at contract, excavation, steel, shell, and handover are standard industry practice. Each payment point needs a reliable, documented process.', rec: 'Stripe invoicing for stage-by-stage milestone billing. Clear stage names, amounts, and GST on every invoice.' },
  { title: 'New estate excavation — remote site, no connectivity', body: 'Pool excavation on new housing estates happens early in the build cycle, before any infrastructure exists. Sites in outer suburban growth corridors often have no mobile data coverage from NBN or site WiFi, and the nearest building is an empty house shell.', rec: 'Zeller Terminal 1 + SIM for on-site payments. Offline mode processes when signal returns — critical for outer suburban estates.' },
  { title: 'Council compliance hold-points affecting payment timing', body: 'Pool construction is heavily regulated. Council inspections — steel inspection, shell inspection, fence compliance — create mandatory hold-points that affect when stages are completed and when payment is legitimately due. Missing a compliance milestone before invoicing creates disputes.', rec: 'Stripe invoicing tied to signed stage completion and inspection sign-off — not just to your internal schedule.' },
  { title: 'Equipment purchases requiring same-day cleared funds', body: 'Pumps, filters, heat pumps, and automation equipment for a single pool can total $5,000–$15,000. Suppliers increasingly require cleared funds before releasing equipment orders. If your progress payment from the client hasn\'t settled, you\'re funding the equipment yourself.', rec: 'Zeller payment links with same-day settlement. Cleared funds before noon next business day.' },
]

const faqs = [
  { q: 'What is the best EFTPOS for pool builders?', a: 'Stripe invoicing for staged progress billing across the build cycle, and Zeller Terminal 1 with SIM for on-site payments at new estate excavation sites. Pool building involves very high job values ($30k–$100k+) and multiple mandatory payment stages — a simple tap-and-go terminal is not sufficient for the full payment workflow.' },
  { q: 'How should pool builders structure staged payments?', a: 'The standard pool builder payment schedule has five stages: deposit at contract signing (10–20%), excavation complete (20–25%), steel and shell poured (25–30%), tiling and coping complete (15–20%), and final handover including fence and compliance certificate (balance). Issue a Stripe invoice at each stage tied to a documented completion milestone, not just a calendar date.' },
  { q: 'How do pool builders handle council compliance hold-points on billing?', a: 'Never invoice for a stage before the relevant council inspection is passed. Tie each Stripe invoice to a specific milestone — for example, "Stage 3: Shell pour, inspected and passed [date]". This creates a paper trail that protects you in disputes and satisfies builders and owner-builders who need documentary evidence for their construction loans.' },
  { q: 'How do pool builders collect deposits on new projects?', a: 'Send a Zeller payment link or Stripe invoice for the contract deposit (typically 10–20% of contract value) immediately after the contract is signed. For a $60,000 pool, that\'s a $6,000–$12,000 deposit. Same-day Zeller settlement means funds are available next business day to cover your initial equipment deposits and design costs.' },
  { q: 'How much does payment processing cost a pool builder per month?', a: 'On a $60,000 pool with 5 card payments, Stripe invoicing costs 1.7% + $0.10 per stage — roughly $1,020 total for card. Switch to bank transfer (0.8%) and that drops to $480. Most pool builders offer both options on Stripe invoices: client\'s choice. At scale, encouraging bank transfer on large-value stages is the single biggest cost reduction.' },
  { q: 'Can pool builders use Zeller for on-site payments at excavation stages?', a: 'Yes — Zeller Terminal 1 with SIM works on outer suburban new estates where there is no site WiFi. It\'s mainly useful for taking smaller on-site payments (variation orders, upgrade selections) rather than staged progress billing, which is better handled by Stripe invoicing to the client\'s email.' },
  { q: 'Do pool builders need to include licence details on invoices?', a: 'Yes — in most states, pool construction work is licensed. In NSW, Victoria, and Queensland, you must include your builder\'s or pool/spa licence number on invoices for work over the relevant threshold. Stripe invoicing lets you add a custom footer with your licence number, ABN, and QBCC/Building Commission registration on every invoice.' },
]

import siteMeta from '../../data/site-meta.json'
import { SITE_URL as SITE } from '../../constants/brand'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for Pool Builders in Australia (2026)', name: 'Best EFTPOS for Pool Builders in Australia (2026)', image: { '@type': 'ImageObject', url: 'https://images.unsplash.com/photo-1572168696553-9e5f8a06dbfa?w=1200&h=630&fit=crop&crop=center&q=80', width: 1200, height: 630 }, description: 'High-value staged payments, remote estate sites, council compliance hold-points, and equipment cash flow — the best EFTPOS and payment setup for Australian pool builders.', url: `${SITE}/trades/pool-builders`, datePublished: '2026-01-15', dateModified: siteMeta.lastVerified, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'By Trade', item: `${SITE}/trades` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Pool Builders', item: `${SITE}/trades/pool-builders` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Best EFTPOS for Pool Builders in Australia', serviceType: 'EFTPOS Payment Processing for Pool Builders', areaServed: { '@type': 'Country', name: 'Australia' }, provider: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, url: `${SITE}/trades/pool-builders` },
]

export default function PoolBuildersPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Pool Builders in Australia (2026)"
        description="High-value staged payments, remote estate sites, council compliance hold-points, and equipment cash flow — the best EFTPOS and payment setup for Australian pool builders."
        canonical="/trades/pool-builders"
        ogType="article"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={tradeHeroUrl('pool-builders')} alt={tradeHeroAlt('pool-builders')} fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta"><span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Trade Guide</span><span>·</span><span>Updated April 2026</span></div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Pool Builders in Australia (2026)</h1>
          <p className="hero-sub">$30k–$100k+ jobs with five payment stages, remote new estate sites, and council hold-points. Here's the payment setup that works for pool builders.</p>
          <nav className="jump-links"><a href="#picks">Comparison</a><a href="#challenges">Context</a><a href="#scenarios">Job Scenarios</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>
      <QuickVerdict
        pick="Zeller Terminal 1 + SIM"
        rate="1.4%"
        hardware="$99 + $15/mo SIM"
        reason="SIM for new estate excavation. Same-day settlement on high-value $30k+ contracts."
        providerSlug="zeller"
        trade="pool builders"
      />

      <section id="picks" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Top Picks for Pool Builders</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} whileHover={{ y: -3 }} className="lg-blue rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-white flex items-center justify-center font-bold">Z</div>
                <div><h3 className="font-bold text-brand-dark">Zeller Terminal 1 + SIM</h3><span className="badge badge-gold">Best for Pool Builders</span></div>
              </div>
              <p className="text-sm text-slate-600 mb-4">SIM connectivity for new estate sites with no infrastructure. Payment links for deposit collection on high-value contracts. Same-day settlement to fund equipment purchases. 1.4% rate — important on $30k+ job values.</p>
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
                <div><h3 className="font-bold text-brand-dark">Stripe Invoicing</h3><span className="badge badge-muted">Stage Billing & Compliance Records</span></div>
              </div>
              <p className="text-sm text-slate-600 mb-4">Professional stage-by-stage invoicing tied to council inspection milestones. Detailed line items for each stage — excavation, steel, shell, tiling, handover. ABN and GST on every invoice. Accepted by construction loan lenders requiring draw-down documentation.</p>
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
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">What Makes Pool Building Different</motion.h2>
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
            { title: 'New build pool — full contract billing', body: 'Use Stripe for all five stage invoices: contract deposit, excavation complete, steel and shell poured, tiling and coping, and final handover. Tie each invoice to a documented milestone with council inspection dates where applicable. For clients with construction loans, your invoices must match the draw-down schedule — confirm this at contract signing.' },
            { title: 'Excavation on new outer suburban estate', body: 'Take the Zeller Terminal 1 + SIM to the site. New estate addresses often sit outside coverage maps — the Optus SIM and offline mode provide the best chance of processing on-site. If the site is a complete dead zone, trigger the transaction once back in coverage, or follow up with a Zeller payment link via SMS to the client.' },
            { title: 'Equipment order requiring cleared funds', body: 'When your supplier requires cleared funds before releasing pumps, filters, or automation equipment, use Zeller payment links for the relevant stage payment. Zeller same-day settlement means funds are available next business day — typically the morning before your equipment delivery window. Don\'t use providers with 2–3 day settlement for equipment-sensitive stages.' },
            { title: 'Pool renovation or resurfacing', body: 'Resurfacing and renovation jobs ($5,000–$20,000) are shorter in duration than new builds but still benefit from a deposit. Send a Zeller payment link for 40% deposit before draining and starting work — you can\'t easily reverse a drain and prep job. Tap for the balance at completion. Homeowner is usually present for renovation work.' },
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
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Pool Builder EFTPOS Comparison</motion.h2>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'SIM', 'Invoicing', 'Best for']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Top pick</span></>, '1.4%', '$99', '✓ $15/mo', '✓ Links', 'On-site + same-day settlement for equipment'] },
              { cells: ['Stripe', '1.7% + $0.10', 'None needed', '✓ optional', '✓ Full invoicing', 'Stage billing and construction loan draw-downs'] },
              { cells: ['Zeller Tap to Pay', '1.4%', '$0', '✗ (phone data)', '✓ Links', 'Renovation and resurfacing jobs'] },
              { cells: ['Square Terminal', '1.6%', '$329', '✗', '✓', 'Showroom deposit or consultation payments'] },
            ]}
          />
          <p className="mt-4 text-xs text-slate-500">Need a deeper comparison? <Link to="/compare/zeller-vs-square" className="text-brand-blue font-medium hover:underline">Zeller vs Square — full head-to-head →</Link></p>
        </div>
      </section>

      <FaqSection items={faqs} title="FAQ for Pool Builders" />

      <section className="section section-alt">
        <div className="container-page">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Best EFTPOS for Pool Builders by State</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {STATES.map(s => (
              <Link
                key={s.slug}
                to={`/states/${s.slug}/pool-builders`}
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
      <RelatedLinks slug="pool-builders" type="trade" />
    </>
  )
}
