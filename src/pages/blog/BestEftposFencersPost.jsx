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
  { label: 'Best EFTPOS for Fencers in Australia (2026)' },
]

const comparisonHeaders = ['', 'Zeller Terminal 1', 'Square Terminal', 'Stripe Reader M2']
const comparisonRows = [
  { highlight: true, cells: ['In-person rate', '1.4%', '1.6%', '1.7% + $0.10'] },
  { cells: ['Hardware cost', '$99', '$329', '$69'] },
  { cells: ['SIM connectivity', '✓ $15/mo', '✗', '✗'] },
  { cells: ['Offline mode', '✗', '✓', '✗'] },
  { cells: ['Settlement', 'Same day', 'Next day', 'Next day'] },
  { cells: ['Works on new estates', 'Yes (SIM)', 'Needs hotspot', 'No'] },
  { cells: ['Works on rural properties', '✓ Check Optus map', 'Offline backup', 'No'] },
]

const faqs = [
  {
    q: 'What is the best EFTPOS for fencers in Australia?',
    a: "Zeller Terminal 1 with the Optus SIM plan is the best EFTPOS for most fencers. Fencing work on new housing estates, construction sites, and rural properties all share the same problem: no WiFi within reach of the job. The $15/month SIM means the terminal works wherever Optus 4G reaches — which covers the vast majority of metropolitan and suburban worksites. At 1.4% in-person rate and same-day settlement, it handles everything from a suburban backyard job to a large residential estate boundary.",
  },
  {
    q: 'Do fencers need SIM connectivity in their EFTPOS terminal?',
    a: "Yes. Fencing jobs almost always happen outdoors, physically away from any WiFi router. On new housing estates the house may not even be connected yet. On rural properties the homeowner's WiFi won't reach the paddock. A SIM-enabled terminal eliminates the need to ask for WiFi credentials or tether to your phone — the terminal processes transactions independently.",
  },
  {
    q: 'How do fencers collect a deposit on a large fencing job?',
    a: "Use a payment link. Send a Zeller Payment Link (1.7%) or Tyro Payment Link (1.4% incl. GST) to the customer by SMS or email when the quote is accepted. They pay from their phone before you mobilise materials. For residential fencing jobs in the $3,000–$15,000 range, a 20–50% deposit at booking is standard and protects you against material costs. Payment links let you collect the deposit without being on site.",
  },
  {
    q: 'What is the best EFTPOS setup for rural fencing work?',
    a: "Check the Optus 4G coverage map for your specific work area before committing to Zeller's SIM plan. Optus has strong rural coverage in many regions but there are genuine dead zones. If you regularly work in areas with no Optus signal, Square Terminal with offline mode is the right backup — cards are stored locally and processed when you return to a connected area. Many rural fencers carry both: Zeller as primary and Square as the rural fallback.",
  },
  {
    q: 'How do fencers handle payment for commercial fencing projects?',
    a: "Commercial fencing for industrial sites, schools, and large developments typically involves a formal quote process and progress payments. Use payment links to collect deposits at contract signing and progress payments at milestones (materials delivered, work commenced, completion). For invoiced work, Zeller and Square both offer invoicing with embedded pay-now buttons that the client's accounts payable team can process without any EFTPOS terminal interaction.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Fencers in Australia (2026)',
    description: 'Fencers work on new estates, rural properties, and construction sites without WiFi. The best EFTPOS setup for Australian fencers in 2026.',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-fencers-australia-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Fencers in Australia (2026)', item: `${SITE}/blog/best-eftpos-fencers-australia-2026` },
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

export default function BestEftposFencersPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Fencers in Australia (2026)"
        description="Fencers work on new estates, rural properties, and construction sites without WiFi. The best EFTPOS setup for Australian fencers in 2026."
        canonical="/blog/best-eftpos-fencers-australia-2026"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=630&fit=crop&crop=center&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=900&h=560&fit=crop&crop=center&q=80"
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
            <span>5 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            Best EFTPOS for Fencers in Australia (2026)
          </h1>
          <p className="hero-sub">
            New estates, rural paddocks, and construction sites — fencing work happens far from any WiFi router. The right EFTPOS runs on its own SIM.
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
            Fencing work covers residential backyards, new housing estates, rural properties, and commercial or industrial sites. What all of these have in common is that the work happens outdoors, at a distance from any WiFi source. Collecting payment on site — or collecting a deposit before mobilising — requires an EFTPOS that does not depend on anyone's internet connection.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Where fencers lose WiFi access</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: 'New housing estates', body: "On new estates, houses are often not yet occupied or connected to the internet. Perimeter fencing for an entire estate can mean days of work in an area with no accessible WiFi anywhere nearby." },
              { title: 'Rural properties', body: "Rural fencing — farm boundaries, horse paddocks, rural residential — takes you far beyond the reach of any residential WiFi network. SIM coverage varies; always check the Optus map before assuming." },
              { title: 'Construction sites', body: "Active construction sites may have site offices with WiFi, but the fence line is usually at the perimeter — not next to the office. A SIM-enabled terminal is the practical choice for collecting at the job." },
              { title: 'Large residential jobs', body: "Even suburban fencing jobs ($3k–$15k for full boundary replacement) happen in a backyard. Asking to come inside to use the customer's WiFi is unnecessary friction when a SIM terminal handles it on the spot." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for fencers</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most fencers</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan is the strongest option for fencers working on estates, suburban properties, and most regional sites. No WiFi required, no hotspot tethering, no asking customers for their password.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            1.4% in-person rate, same-day settlement, $99 hardware. Zeller payment links (1.7%) handle deposits before you arrive on site, keeping cash flow positive on large jobs.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — offline backup for rural dead zones</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> with offline mode is the right backup for confirmed rural dead zones where Optus 4G does not reach. Cards are stored locally and processed when connectivity is restored — usually when you drive back toward town. Most fencers use Zeller as primary and Square as the rural fallback.
          </p>
        </section>

        <section className="mb-10">
          <div id="recommendation" className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for fencers</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Residential and estate work:</strong> Zeller Terminal 1 + Optus SIM ($15/mo). Works on new estates, construction sites, and suburban backyards without any WiFi.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Deposits on large jobs:</strong> Zeller or Tyro payment links — send by SMS when the quote is accepted, collect before mobilising materials.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Backup:</strong> Square Terminal for rural properties where Optus coverage is absent.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/fencers" className="text-sm font-semibold text-brand-blue hover:underline">Full fencers EFTPOS guide →</Link>
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
        <RelatedLinks slug="fencers" type="trade" />
      </div>
    </>
  )
}
