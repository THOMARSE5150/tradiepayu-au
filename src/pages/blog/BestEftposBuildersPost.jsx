import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Meta from '../../components/Meta'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import RelatedLinks from '../../components/RelatedLinks'

const SITE = 'https://tradiepayau.directory'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Best EFTPOS for Builders in Australia (2026)' },
]

const comparisonHeaders = ['', 'Zeller Terminal 1', 'Square Terminal', 'Stripe Reader', 'Tyro']
const comparisonRows = [
  { highlight: true, cells: ['In-person rate', '1.4%', '1.6%', '1.7% + $0.10', 'Quote'] },
  { cells: ['Hardware cost', '$99', '$329', '$69', 'Quote'] },
  { cells: ['SIM connectivity', '✓ $15/mo', '✗', '✗', '✗'] },
  { cells: ['Offline mode', '✗', '✓', '✗', '✗'] },
  { cells: ['Settlement', 'Same day', 'Next day', 'Next day', 'Next day'] },
  { cells: ['Payment links', '✓ 1.7%', '✓ 2.2%', '✓ 1.7%+$0.30', '✓ 1.4%'] },
  { cells: ['Invoicing', '✓ Free', '✓ Free', '✓ Via Stripe', '✓ Via Tyro'] },
  { cells: ['Multiple terminals', '✓ Buy hardware', '✓ Buy hardware', '✓ Buy hardware', '✓'] },
]

const faqs = [
  {
    q: 'What is the best EFTPOS for builders in Australia?',
    a: "Zeller Terminal 1 is the best EFTPOS for most builders. At 1.4% in-person rate, SIM connectivity for sites without WiFi, same-day settlement, and free invoicing with payment links built in, it covers the full billing workflow that builders need — from progress payment deposits to final invoice collection on site. Square Terminal is the best backup for builders who work on remote or zero-signal sites.",
  },
  {
    q: 'Can I take deposits and progress payments with EFTPOS?',
    a: 'Yes — all four providers support payment links and invoicing that can be sent before or after on-site visits. Zeller supports payment links (1.7%) and a built-in invoice tool. Square has Square Invoices (2.2% for online payments). Stripe has Stripe Invoicing. Tyro has Payment Links at 1.4% incl. GST. For progress payments, a payment link sent via SMS is often more practical than requiring the client to be present on site.',
  },
  {
    q: 'Do builders need SIM connectivity in their EFTPOS terminal?',
    a: "Often, yes. Building sites — especially early-stage construction before utilities are connected — have no WiFi. Multi-storey projects may have poor phone reception in concrete-heavy areas. Zeller Terminal 1 with the optional Optus SIM plan ($15/month) processes payments independently of WiFi. For builders doing residential renovations in established areas with reliable WiFi, SIM connectivity is less critical but still useful for rooftops, roof voids, and underground areas.",
  },
  {
    q: 'How do I take payments on a multi-worker building site?',
    a: "Zeller supports multiple terminals under one account — each team member can have their own Zeller Terminal 1, and all payments settle centrally into your Zeller Transaction Account with a full transaction log per device. You buy the hardware outright ($99 each) with no per-terminal monthly fee. This is significantly cheaper than the rental model some bank-provided EFTPOS services use.",
  },
  {
    q: 'Should builders use surcharging?',
    a: 'Surcharging (passing the card fee to the client) makes sense for builders with high card volumes or commercial clients. On a $15,000 progress payment, the 1.4% processing fee is $210 — worth recovering. Enable surcharging in the Zeller dashboard and disclose it on your quote or invoice. Under RBA rules, the surcharge must not exceed your actual cost of card acceptance (1.4% for Zeller in-person).',
  },
  {
    q: 'What is the best way to take a large payment on a building site?',
    a: "For large amounts (over $5,000), sending a payment link via SMS or email before the client is on site is more reliable than processing at the terminal — it avoids connectivity issues and gives the client flexibility to pay from their banking app. Zeller\'s Payment Links (1.7%) and Tyro\'s Payment Links (1.4% incl. GST) are both solid options. For final payments collected in person, the terminal remains the lowest-cost method.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Builders in Australia (2026)',
    description: 'Builders have unique payment needs: large invoices, progress payments, multi-worker sites, and no reliable WiFi. Here is the best EFTPOS setup for Australian builders in 2026.',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-builders-australia-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Builders in Australia (2026)', item: `${SITE}/blog/best-eftpos-builders-australia-2026` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
]

export default function BestEftposBuildersPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Builders in Australia (2026)"
        description="Builders have unique payment needs: large invoices, progress payments, multi-worker sites, and no reliable WiFi. Here is the best EFTPOS setup for Australian builders in 2026."
        canonical="/blog/best-eftpos-builders-australia-2026"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&h=630&fit=crop&crop=center&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&h=560&fit=crop&crop=center&q=80"
            alt=""
            fetchPriority="high"
            className="w-full h-full object-cover"
            onError={e => { e.currentTarget.style.opacity = '0' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Buyers Guide</span>
            <span>·</span>
            <span>2 Apr 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            Best EFTPOS for Builders in Australia (2026)
          </h1>
          <p className="hero-sub">
            Builders take large payments, on-site deposits, progress payments from clients who are not present, and work on sites with no WiFi. Here is what to use.
          </p>
        </div>
      </header>

      <article className="container-page section max-w-3xl">
        <a href="#recommendation" className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue border border-brand-blue/25 hover:bg-blue-50 px-3 py-1.5 rounded-full mb-6 transition-colors">Jump to recommendation ↓</a>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="prose-sm text-slate-600 space-y-4 mb-10"
        >
          <p>
            Builders have more complex payment needs than most tradies. A plumber takes a single payment at the end of a job. A builder takes a deposit before starting, progress payments at each stage, and a final payment on handover — often from clients who are not on site, across jobs that can span months.
          </p>
          <p>
            That billing workflow requires more than a simple card terminal. You need payment links for remote deposits, invoicing for progress claims, and reliable connectivity on sites that often have no utilities connected yet. Here is what works.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">What builders actually need from EFTPOS</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: 'Deposits before the job starts', body: 'Most builders take 10–20% deposits. The client is rarely on site — a payment link sent via SMS is the cleanest method. All major providers support this.' },
              { title: 'Progress payment claims', body: 'Builders invoice at stages: slab down, frame up, lock-up, practical completion. Payment links or invoices with a pay-now button work well for remote clients. Tyro\'s 1.4% payment links rate is the cheapest option here.' },
              { title: 'On-site connectivity', body: 'New estates have no NBN, no WiFi. Zeller\'s SIM plan means you can process on-site final payments without hunting for a hotspot.' },
              { title: 'Multiple workers', body: 'Supervisors, subcontractors, and site managers may all need to take payments. Zeller and Square support multiple terminals under one account.' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for builders</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller — best for most builders</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> covers the full builder payment workflow. The 1.4% in-person rate is the lowest published flat rate available. The SIM plan ($15/month) handles sites without WiFi. Same-day settlement means a deposit taken on Monday morning is accessible for materials the same day. Free invoicing with embedded payment links means you can send a progress claim and have the client pay without either of you being on site.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            For builders managing multiple workers, Zeller supports multiple terminals under one account — each device is purchased outright ($99) with no per-terminal rental fee. All payments settle centrally.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            One gap: Zeller has no offline mode. If you are working on a site with no Optus 4G coverage and no WiFi, you cannot process payments. For most metropolitan and regional sites, Optus coverage is reliable. For truly remote sites, carry a Square Terminal as backup.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square — best backup for zero-signal sites</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> ($329) supports offline payment mode — if there is no connectivity at all, cards are stored locally and processed when the terminal reconnects. For builders on remote rural sites or in areas with no mobile coverage, this is the only option that works.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            Square\'s 1.6% in-person rate is higher than Zeller and the hardware is more expensive. On $10,000/month in card volume, Square costs $160 versus Zeller\'s $140 — a $240/year difference. For most builders, Zeller is cheaper for day-to-day use and Square is kept as a backup specifically for known zero-signal jobs.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Tyro for payment links</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/tyro" className="text-brand-blue hover:underline">Tyro\'s Payment Links</Link> (1.4% incl. GST) is the cheapest published rate for remote/online payments. If a large portion of your builder billing is progress claims paid remotely by clients — rather than in-person terminal transactions — Tyro\'s Payment Links may be worth setting up alongside your primary terminal provider. The in-person terminal rate is not published and requires a quote.
          </p>
        </section>

        <section className="mb-10">
          <div id="recommendation" className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for builders</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Primary:</strong> Zeller Terminal 1 + SIM plan. Use for all in-person payments and send Zeller Payment Links for deposits and progress claims.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Backup:</strong> Square Terminal. Keep one in the ute for remote or zero-signal sites. Both can run under their respective accounts without conflict.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              If you are a high-volume builder ($250k+/year in card payments), contact Tyro for an in-person terminal rate — you may negotiate below 1.4%, which would change the calculation.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/builders" className="text-sm font-semibold text-brand-blue hover:underline">Full builders EFTPOS guide →</Link>
              <Link to="/providers/zeller" className="text-sm font-semibold text-brand-blue hover:underline">Zeller full review →</Link>
              <Link to="/calculator" className="text-sm font-semibold text-brand-blue hover:underline">Calculate your costs →</Link>
            </div>
          </div>
        </section>

        <FaqSection faqs={faqs} />

        <p className="text-xs text-slate-400 mt-6">
          Rates current as of April 2026. Tyro in-person terminal rates are quote-based. Always verify current pricing with providers before signing up.
        </p>

      </article>

      <div className="container-page mb-12">
        <RelatedLinks slug="builders" type="trade" />
      </div>
    </>
  )
}
