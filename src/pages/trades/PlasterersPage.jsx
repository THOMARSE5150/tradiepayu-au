import { Link } from 'react-router-dom'
import RelatedLinks from '../../components/RelatedLinks'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import Meta from '../../components/Meta'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'By Trade', href: '/trades' },
  { label: 'Best EFTPOS for Plasterers' },
]

const challenges = [
  { title: 'Builder sub-contracting on new builds — no site WiFi', body: 'Plasterers on new residential builds are sub-contractors invoicing the head builder — not taking card payments from homeowners. The site has no WiFi at plastering stage, and payment is by formal invoice to the builder\'s accounts payable. A consumer EFTPOS terminal misses the mark entirely here.', rec: 'Stripe invoicing for builder sub-contract billing. ABN, scope by stage, and GST on every invoice.' },
  { title: 'Dusty environment — Tap to Pay safer than hardware', body: 'Plastering is one of the messiest trades — plaster dust, compound residue, and fine gypsum particles get into everything. A dedicated hardware terminal left in a dusty environment will degrade quickly. Using your phone\'s Tap to Pay eliminates the hardware risk on renovation sites.', rec: 'Zeller Tap to Pay on Android or iPhone for renovation work where dust is a concern. No hardware to ruin.' },
  { title: 'Progress billing by stage — set, sand, and coat', body: 'Plastering on new builds and major renovations follows a clear stage sequence: first fix (set), second fix (sand), and final coat or texture. Each stage is a distinct and billable milestone. Waiting until the end of the job to invoice means weeks of unpaid work on your books.', rec: 'Stripe invoicing per stage. Issue invoice at each stage sign-off — set coat, sand coat, and final coat.' },
  { title: 'Cash flow for same-day material orders', body: 'Large plasterboard orders, cornice, and compounds need to be available on-site the day you start. Suppliers require payment on delivery or account — if your last invoice hasn\'t cleared, you\'re fronting material costs. Fast settlement is critical to keeping materials funded.', rec: 'Zeller payment links with same-day settlement. Funds available next morning to cover material deliveries.' },
]

const faqs = [
  { q: 'What is the best EFTPOS for plasterers?', a: 'Stripe invoicing for new build sub-contract billing to head contractors, and Zeller Terminal 1 with SIM (or Zeller Tap to Pay) for renovation work where homeowners pay on completion. New build plastering is invoice-based — the builder pays on terms, not by tapping a card. Renovation work is more varied and benefits from a portable terminal or Tap to Pay.' },
  { q: 'How do plasterers invoice builder sub-contracts?', a: 'Send a Stripe invoice to the builder\'s accounts payable contact at each stage completion — set coat, sand coat, and final coat. Include your ABN, licence number (if applicable in your state), scope description, and GST. Most builders pay net 14 days. Invoice the day the stage is complete — not a week later — so the payment clock starts immediately.' },
  { q: 'Is Tap to Pay safe to use on plastering sites?', a: 'Yes. Zeller Tap to Pay on your iPhone or Android phone is a good choice for dusty plastering environments where a dedicated hardware terminal would be exposed to plaster dust and compound residue. Your phone is already in your pocket — there\'s no additional hardware to damage. The 1.4% rate matches the Zeller Terminal.' },
  { q: 'How do plasterers collect deposits on renovation work?', a: 'For renovation plastering jobs over $2,000 — particularly full-room replastering or new extension fit-outs — send a Zeller payment link for a 30–40% deposit at quote acceptance. This covers your plasterboard order and compounds before the job starts. Same-day Zeller settlement means the deposit clears overnight so you can order materials next morning.' },
]

const SITE = 'https://tradiepayau.directory'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', name: 'Best EFTPOS for Plasterers in Australia (2026)', description: 'Builder sub-contracting, dusty environments, staged billing, and same-day material cash flow — the best EFTPOS and payment setup for Australian plasterers.', url: `${SITE}/trades/plasterers`, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'By Trade', item: `${SITE}/trades` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Plasterers', item: `${SITE}/trades/plasterers` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]

export default function PlasterersPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Plasterers in Australia (2026)"
        description="Builder sub-contracting, dusty environments, staged billing, and same-day material cash flow — the best EFTPOS and payment setup for Australian plasterers."
        canonical="/trades/plasterers"
        ogType="article"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&h=560&fit=crop&crop=center&q=80" alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta"><span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Trade Guide</span><span>·</span><span>Updated March 2026</span></div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Plasterers in Australia (2026)</h1>
          <p className="hero-sub">No WiFi on new builds, plaster dust destroying hardware, staged billing by coat, and same-day cash flow for materials. Here's the payment setup that works for plasterers.</p>
          <nav className="jump-links"><a href="#challenges">Key Challenges</a><a href="#picks">Top Picks</a><a href="#scenarios">Job Scenarios</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>

      <section id="challenges" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">What Makes Plastering Different</motion.h2>
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
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Top Picks for Plasterers</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} whileHover={{ y: -3 }} className="lg-blue rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-white flex items-center justify-center font-bold">Z</div>
                <div><h3 className="font-bold text-brand-dark">Zeller Terminal 1 + SIM</h3><span className="badge badge-gold">Best for Plasterers</span></div>
              </div>
              <p className="text-sm text-slate-600 mb-4">SIM connectivity for new build sites with no infrastructure. Payment links for deposit collection and absent homeowner billing. Same-day settlement to cover plasterboard and material orders. 1.4% rate.</p>
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
                <div><h3 className="font-bold text-brand-dark">Stripe Invoicing</h3><span className="badge badge-muted">Builder Sub-Contract Billing</span></div>
              </div>
              <p className="text-sm text-slate-600 mb-4">Professional tax invoices for head contractors on new builds. Stage-by-stage billing with ABN, scope, and GST. Meets builder accounts payable requirements for set, sand, and coat milestones.</p>
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

      <section id="scenarios" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Payment Playbook by Job Type</motion.h2>
        <div className="space-y-4">
          {[
            { title: 'New build sub-contract — builder billing', body: 'Issue a Stripe invoice to the builder\'s accounts payable at each coat milestone: set coat completion, sand coat completion, and final coat/texture sign-off. Include your ABN, scope description, and GST. Most builders pay net 14 days from invoice — invoice the day you complete the stage, not the day you walk off site for good.' },
            { title: 'Renovation — homeowner present', body: 'Use Zeller Terminal 1 + SIM for tap-and-go payment at job completion. For jobs over $2,000, send a Zeller payment link for a 30–40% deposit at quote acceptance — this covers your plasterboard delivery. Homeowners on renos expect to pay card; carrying a terminal is professional.' },
            { title: 'Dusty active renovation — Tap to Pay instead of terminal', body: 'For messy renovation plastering where you\'d rather not bring a terminal into the dust zone, use Zeller Tap to Pay on your phone. Same 1.4% rate, no hardware at risk. Keep the terminal in the van and present your phone for payment at the door when the customer comes out to you.' },
            { title: 'Extension or new room addition — staged payments', body: 'Multi-room extension plastering can run $5,000–$15,000. Break it into three invoices: plasterboard supply and hang, set coat, and final sand and coat. Send each via Stripe with a stage description. Three smaller payments are easier for the client to manage and better for your cash flow than one large invoice at the end.' },
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
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-6">Plasterer EFTPOS Comparison</motion.h2>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'SIM', 'Invoicing', 'Best for']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Top pick</span></>, '1.4%', '$99', '✓ $15/mo', '✓ Links', 'Renovation + deposit collection'] },
              { cells: ['Stripe', '1.7% + $0.10', 'None needed', '✓ optional', '✓ Full invoicing', 'Builder sub-contract staged billing'] },
              { cells: ['Zeller Tap to Pay', '1.4%', '$0', '✗ (phone data)', '✓ Links', 'Dusty sites — no hardware needed'] },
              { cells: ['Square Terminal', '1.6%', '$329', '✗', '✓', 'Fixed location or showroom'] },
            ]}
          />
        </div>
      </section>

      <FaqSection items={faqs} title="FAQ for Plasterers" />

      <RelatedLinks slug="plasterers" type="trade" />
    </>
  )
}
