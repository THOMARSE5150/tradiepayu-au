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
  { label: 'Best EFTPOS for Concreters in Australia (2026)' },
]

const comparisonHeaders = ['', 'Zeller Terminal 1', 'Square Terminal', 'Stripe Reader M2']
const comparisonRows = [
  { highlight: true, cells: ['In-person rate', '1.4%', '1.6%', '1.7% + $0.10'] },
  { cells: ['Hardware cost', '$99', '$329', '$69'] },
  { cells: ['SIM connectivity', '✓ $15/mo', '✗', '✗'] },
  { cells: ['Offline mode', '✗', '✓', '✗'] },
  { cells: ['Settlement', 'Same day', 'Next day', '2 days'] },
  { cells: ['Works on construction sites', 'Yes (SIM)', 'Needs hotspot', 'No'] },
  { cells: ['Works on new estates', 'Yes (SIM)', 'Needs hotspot', 'No'] },
]

const faqs = [
  {
    q: 'What is the best EFTPOS for concreters in Australia?',
    a: "Zeller Terminal 1 with the SIM plan is the best EFTPOS for most concreters. Concreting work happens outdoors on driveways, slabs, footpaths, and new building sites — almost always without WiFi. Job amounts are large, so same-day settlement and reliable connectivity matter more than for smaller trades. The Optus SIM plan ($15/month) means the terminal processes cards on any site independently of internet access, at the lowest published in-person rate of 1.4%.",
  },
  {
    q: 'How do concreters collect a deposit before a concrete pour?',
    a: "Collecting a deposit before the pour is essential for concreters — once concrete is ordered and poured, it cannot be un-poured. The best approach is a payment link sent in the quote or booking confirmation. The customer pays online before the job date, and you get same-day settlement confirmation before ordering the concrete. Zeller Payment Links (1.7%) and Tyro Payment Links (1.4% incl. GST) both work well. For large jobs, a 30–50% deposit before the pour and the balance on completion is standard.",
  },
  {
    q: 'Do concreters need SIM connectivity in their EFTPOS terminal?',
    a: "Yes. Concreters work outdoors on residential driveways, slab-and-frame new builds, commercial construction sites, and infrastructure projects. None of these locations have customer WiFi. A SIM-enabled terminal like Zeller Terminal 1 is the only reliable option for in-person payments on a concrete job. Setting up a phone hotspot at the end of a physically demanding pour day is an unnecessary friction — the SIM terminal eliminates it.",
  },
  {
    q: 'What EFTPOS works best for large outdoor concreting jobs?',
    a: "Zeller Terminal 1 with SIM is the best choice for large outdoor jobs. For residential driveways and slabs ($2,000–$8,000), the in-person rate and same-day settlement are important — you want funds in your account the same day to cover plant, labour, and concrete supply costs. For very large jobs, combining an upfront deposit via payment link with a balance collected by SIM terminal on completion keeps cash flow tight and reduces debtor risk.",
  },
  {
    q: 'Should concreters surcharge for card payments?',
    a: "For residential driveways and smaller jobs, many concreters absorb the 1.4% Zeller rate rather than surcharging — it is simpler and maintains goodwill with residential customers. For larger commercial concrete jobs where the client is a business or developer, disclosing a 1.4% card surcharge on the quote is standard practice and generally accepted. At Zeller's rate, you are passing on the lowest legally defensible surcharge amount in Australia.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Concreters in Australia (2026)',
    description: 'Concreters work on driveways, slabs, and construction sites without WiFi. Large job amounts mean getting deposits right matters.',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-concreters-australia-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Concreters in Australia (2026)', item: `${SITE}/blog/best-eftpos-concreters-australia-2026` },
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

export default function BestEftposConcretersPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Concreters in Australia (2026)"
        description="Concreters work on driveways, slabs, and construction sites without WiFi. Large job amounts mean getting deposits right matters."
        canonical="/blog/best-eftpos-concreters-australia-2026"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&h=630&fit=crop&crop=center&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&h=560&fit=crop&crop=center&q=80"
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
            Best EFTPOS for Concreters in Australia (2026)
          </h1>
          <p className="hero-sub">
            Driveways, slabs, and construction sites with no WiFi and large job amounts — concreting demands an EFTPOS with SIM connectivity, same-day settlement, and solid deposit handling.
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
            Concreters face two challenges that most trades do not: jobs happen entirely outdoors without WiFi, and the amounts involved — $2,000 to $15,000 for a residential driveway or slab — mean that payment failures have real consequences. Concrete cannot be un-poured. Getting the deposit collected before the truck arrives, and the balance settled same day, is not optional for a concreting business with cash flow to manage.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Where concreters need reliable payment</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: 'Residential driveways and paths', body: "Driveway and footpath jobs are the bread-and-butter of residential concreting. Early starts mean collecting payment before or at completion while cash flow demands same-day settlement." },
              { title: 'New build slabs', body: "New housing estates have no internet connected. Slab work for new homes requires a SIM terminal or pre-collected deposit via payment link — there is no other option." },
              { title: 'Commercial construction sites', body: "Construction sites have locked networks. A SIM terminal is the only way to process an in-person payment on a commercial concreting job." },
              { title: 'Pre-pour deposits', body: "Collecting a deposit before concrete is ordered protects the business from last-minute cancellations and non-payment. Payment links sent with the booking confirmation are the most reliable method." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for concreters</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most concreters</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan is the strongest choice for concreters. It processes on any outdoor site, settles same day, and the 1.4% in-person rate keeps transaction costs low on large job amounts. For a $5,000 driveway, the difference between 1.4% (Zeller) and 1.6% (Square) is $10 — real money across a full month of jobs.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            Pair the terminal with Zeller Payment Links for pre-pour deposits. Send the link in the booking confirmation and settle the deposit before the concrete is ordered.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — backup for dead zones</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> with offline mode covers rare scenarios where mobile signal is absent — very remote sites, underground carparks, or areas with no Optus 4G. Cards are processed when connectivity is restored. Most concreters use Zeller as primary and Square as a backup they rarely need.
          </p>
        </section>

        <section className="mb-10">
          <div id="recommendation" className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for concreters</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>On-site payments:</strong> Zeller Terminal 1 + Optus SIM ($15/mo). Works on driveways, new slabs, and construction sites without any WiFi.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Pre-pour deposits:</strong> Zeller or Tyro payment links — send with the booking confirmation so the deposit is collected before you order the concrete.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Backup:</strong> Square Terminal for confirmed dead-zone sites with no mobile signal.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/concreters" className="text-sm font-semibold text-brand-blue hover:underline">Full concreters EFTPOS guide →</Link>
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
        <RelatedLinks slug="concreters" type="trade" />
      </div>
    </>
  )
}
