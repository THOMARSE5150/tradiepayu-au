import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Meta from '../../components/Meta'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import RelatedLinks from '../../components/RelatedLinks'

import siteMeta from '../../data/site-meta.json'

const SITE = 'https://tradiepayau.directory'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Best EFTPOS for Pool Builders in Australia (2026)' },
]

const comparisonHeaders = ['', 'Zeller Terminal 1', 'Square Terminal', 'Stripe Reader M2']
const comparisonRows = [
  { highlight: true, cells: ['In-person rate', '1.4%', '1.6%', '1.7% + $0.10'] },
  { cells: ['Hardware cost', '$99', '$329', '$69'] },
  { cells: ['SIM connectivity', '✓ $15/mo', '✗', '✗'] },
  { cells: ['Offline mode', '✗', '✓', '✗'] },
  { cells: ['Settlement', 'Same day', 'Next day', '2 days'] },
  { cells: ['Works on residential sites', 'Yes (SIM)', 'Needs hotspot', 'No'] },
  { cells: ['Remote payment links', '1.7% + $0.25', '2.2%', '1.7% + $0.30'] },
]

const faqs = [
  {
    q: 'What is the best EFTPOS for pool builders in Australia?',
    a: "For pool builders, payment links are as important as an in-person terminal — large jobs ($30k–$100k+) with multiple milestones are almost always paid remotely rather than in person. Zeller Terminal 1 with the Optus SIM handles on-site collection, while Zeller or Tyro payment links handle milestone billing sent to the homeowner by email or SMS. Tyro's payment links at 1.4% incl. GST offer the lowest published online rate for larger transactions. For the in-person terminal, Zeller's 1.4% rate and same-day settlement are the strongest combination.",
  },
  {
    q: 'How do pool builders manage payment milestones across a large job?',
    a: "Structure your contract with clear payment milestones and use payment links to collect each one remotely. A typical pool build might have five stages: deposit (at contract signing), excavation (once dig is complete), shell (once gunite or fibreglass is installed), tiling and coping (once tiling is complete), and balance at commissioning. Send a Zeller or Tyro payment link at each milestone — the homeowner pays from their phone without needing to be home. This keeps cash flow aligned to work completed and eliminates the awkward 'I need to get the cheque book' conversation.",
  },
  {
    q: 'Do pool builders need SIM connectivity in their EFTPOS terminal?',
    a: "Yes, particularly for on-site milestone collections and handover payments. Residential backyards have WiFi, but the pool builder is usually not given WiFi access — and on new estates during construction, the house may not be connected at all. A SIM-enabled Zeller terminal handles on-site payment without any dependency on the homeowner's internet. For most pool build payments, though, payment links sent by email or SMS are the more practical option since the customer is rarely present during construction.",
  },
  {
    q: 'What is the best way to collect a pool deposit?',
    a: "Send a payment link immediately after the contract is signed. Tyro Payment Links (1.4% incl. GST) offer the lowest rate for online collection. Zeller Payment Links (1.7% + $0.25) are also widely used and integrate with Zeller's broader account management. For large deposits ($5,000–$20,000+), both options are far more practical than in-person card collection — the homeowner can pay from their banking app or card at a time convenient to them. Always collect the deposit before ordering materials.",
  },
  {
    q: 'How do pool builders handle commercial pool project payments?',
    a: "Commercial pool projects (aquatic centres, hotel pools, resort facilities) involve formal progress claims through a head contractor or property developer. Use Zeller or Square invoicing with embedded pay-now buttons sent to the client's accounts payable team. Progress claims follow the same milestone structure as residential work but at higher values and through more formal procurement processes. Ensure your payment terms are clearly stated in the contract — 14-day payment terms are standard for commercial construction progress claims.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Pool Builders in Australia (2026)',
    description: 'Pool builders manage large staged payments on residential sites without WiFi during construction. The best EFTPOS setup for Australian pool builders in 2026.',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1572168696553-9e5f8a06dbfa?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-pool-builders-australia-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Pool Builders in Australia (2026)', item: `${SITE}/blog/best-eftpos-pool-builders-australia-2026` },
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

export default function BestEftposPoolBuildersPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Pool Builders in Australia (2026)"
        description="Pool builders manage large staged payments on residential sites without WiFi during construction. The best EFTPOS setup for Australian pool builders in 2026."
        canonical="/blog/best-eftpos-pool-builders-australia-2026"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1572168696553-9e5f8a06dbfa?w=1200&h=630&fit=crop&crop=center&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1572168696553-9e5f8a06dbfa?w=900&h=560&fit=crop&crop=center&q=80"
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
            <span>6 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            Best EFTPOS for Pool Builders in Australia (2026)
          </h1>
          <p className="hero-sub">
            Pool builds run from $30k to $100k+ across five or more payment milestones. The right payment setup handles remote milestone billing and on-site collection without WiFi.
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
            Pool building is project-based work with large transaction values and multiple payment milestones. The homeowner is rarely present during construction days, the site has no usable WiFi, and payments are typically collected at key build stages rather than all at once. A payment setup that handles remote milestone billing is as important as the in-person terminal.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">The payment challenge for pool builders</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: 'Multiple payment milestones', body: "A typical pool build has five stages: deposit, excavation, shell, tiling, and final completion. Each requires a separate payment collection. Payment links sent by SMS or email at each stage are the most practical approach — the homeowner pays remotely without needing to be present." },
              { title: 'Residential sites without WiFi access', body: "Pool builders work in residential backyards but are not given WiFi access. On new estates, the house may not yet be connected. A SIM-enabled terminal handles any on-site collection without needing the homeowner's network credentials." },
              { title: 'Large deposits before mobilisation', body: "A pool build deposit of $5,000–$20,000 is standard before materials are ordered. Collecting this via payment link — sent immediately after the contract is signed — protects you before you commit to excavation and materials." },
              { title: 'Homeowner not present on site', body: "Most pool construction work happens while the homeowner is at work. Payment at completion of each stage is collected remotely via payment link rather than in person, making the link rate as important as the in-person rate." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for pool builders</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most pool builders</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM handles on-site payments without any WiFi dependency. Same-day settlement is particularly important on large milestone payments — receiving $15,000–$25,000 in your account the same day you complete a stage is a material cash flow benefit.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            Zeller Payment Links (1.7% + $0.25) handle the majority of pool build billing — deposits and milestone payments sent remotely. For even lower rates on large online transactions, Tyro Payment Links at 1.4% incl. GST are worth comparing.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — offline backup for dead zones</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> with offline mode is the backup for sites with no Optus 4G signal — some new estates in outer suburbs or regional areas. Cards are stored locally and processed when connectivity is restored. Most pool builders use Zeller as primary and Square only as a fallback.
          </p>
        </section>

        <section className="mb-10">
          <div id="recommendation" className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for pool builders</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>On-site payments:</strong> Zeller Terminal 1 + Optus SIM ($15/mo). Works on residential sites without WiFi access; same-day settlement on large milestone payments.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Remote milestone billing:</strong> Zeller or Tyro payment links — send by email or SMS at each stage. Tyro at 1.4% incl. GST is the cheapest for large remote transactions.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Backup:</strong> Square Terminal for new estates with no Optus coverage.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/pool-builders" className="text-sm font-semibold text-brand-blue hover:underline">Full pool builders EFTPOS guide →</Link>
              <Link to="/providers/zeller" className="text-sm font-semibold text-brand-blue hover:underline">Zeller full review →</Link>
              <Link to="/calculator" className="text-sm font-semibold text-brand-blue hover:underline">Calculate your costs →</Link>
            </div>
          </div>
        </section>

        <FaqSection faqs={faqs} />

        <p className="text-xs text-slate-400 mt-6">
          Rates current as of April 2026. Always verify current pricing with providers before signing up.
        </p>

      </article>

      <div className="container-page mb-12">
        <RelatedLinks slug="pool-builders" type="trade" />
      </div>
    </>
  )
}
