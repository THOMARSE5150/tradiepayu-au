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
  { label: 'Best EFTPOS for Tilers in Australia (2026)' },
]

const comparisonHeaders = ['', 'Zeller Terminal 1', 'Square Terminal', 'Stripe Reader M2']
const comparisonRows = [
  { highlight: true, cells: ['In-person rate', '1.4%', '1.6%', '1.7% + $0.10'] },
  { cells: ['Hardware cost', '$99', '$329', '$69'] },
  { cells: ['SIM connectivity', '✓ $15/mo', '✗', '✗'] },
  { cells: ['Offline mode', '✗', '✓', '✗'] },
  { cells: ['Settlement', 'Same day', 'Next day', '2 days'] },
  { cells: ['Works in bathroom renovations', 'Yes (SIM)', 'Needs hotspot', 'No'] },
  { cells: ['Works on new build sites', 'Yes (SIM)', 'Needs hotspot', 'No'] },
]

const faqs = [
  {
    q: 'What is the best EFTPOS for tilers in Australia?',
    a: "Zeller Terminal 1 with the SIM plan is the best EFTPOS for most tilers. Tiling work happens in bathrooms and kitchens under renovation, new builds, and apartment construction — all locations without accessible WiFi. The Optus SIM plan ($15/month) means the terminal processes cards independently of any site internet. At 1.4% in-person rate and same-day settlement, it suits both small bathroom renovation jobs and large commercial tiling contracts.",
  },
  {
    q: 'Do tilers need SIM connectivity in their EFTPOS terminal?',
    a: "Yes. Tilers work in wet areas — bathrooms and kitchens — that are typically mid-renovation when the job starts, meaning no internet is connected or the router has been moved. New builds have no internet whatsoever. On multi-day jobs the customer may not be home during the day, so a SIM terminal lets you process payment via a payment link or tap when they return, without relying on their home WiFi being set up.",
  },
  {
    q: 'How do tilers collect payment when the customer is not home?',
    a: "Payment links are the best option for tilers when the customer is not home at job completion. Send a Zeller or Tyro payment link via SMS or email when the job is done — the customer pays from their phone without needing to be present. For multi-day jobs, you can send a progress payment link at the end of each day. This avoids the awkward scenario of chasing payment days after completing the work.",
  },
  {
    q: 'Are payment links good for multi-day tiling jobs?',
    a: "Yes. For bathroom and kitchen renovations that run three to five days, splitting payment into a deposit at booking, a progress payment mid-job, and a final payment at completion improves cash flow and reduces the risk of non-payment. Send each via a payment link so the customer can pay from anywhere. Zeller Payment Links (1.7%) and Tyro Payment Links (1.4% incl. GST) both work well for this.",
  },
  {
    q: 'How do tilers handle payment for large commercial tiling projects?',
    a: "Large commercial tiling projects — apartment buildings, hotels, shopping centres — are typically managed through progress claims tied to the construction schedule. Invoice the builder or developer at each progress milestone using Zeller or Tyro payment links, or through your accounting software. For projects with a head contractor, ensure payment terms are agreed in writing before work starts. Deposits of 20–30% are standard on large commercial orders where materials need to be purchased upfront.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Tilers in Australia (2026)',
    description: 'Tilers work in bathrooms and kitchens under renovation with no WiFi. The best EFTPOS for Australian tilers in 2026.',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-tilers-australia-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Tilers in Australia (2026)', item: `${SITE}/blog/best-eftpos-tilers-australia-2026` },
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

export default function BestEftposTilersPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Tilers in Australia (2026)"
        description="Tilers work in bathrooms and kitchens under renovation with no WiFi. The best EFTPOS for Australian tilers in 2026."
        canonical="/blog/best-eftpos-tilers-australia-2026"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&h=630&fit=crop&crop=center&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&h=560&fit=crop&crop=center&q=80"
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
            Best EFTPOS for Tilers in Australia (2026)
          </h1>
          <p className="hero-sub">
            Bathroom renovations, new builds, and multi-day kitchen jobs — tiling work demands an EFTPOS that works without site WiFi and lets you collect when the customer is not home.
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
            Tilers work in two main contexts: residential renovations (bathrooms, kitchens, laundries) and new builds or commercial projects (apartments, hotels, commercial fitouts). Both share the same payment challenge — no accessible WiFi on site, and often no customer present when the job is complete. The right EFTPOS handles SIM-based in-person payments and remote payment links without switching between systems.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Where tilers lose WiFi access</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: 'Bathroom and kitchen renovations', body: "Wet area renovations often involve the router being moved or the internet service temporarily disconnected. The customer may have left for the day before you finish." },
              { title: 'New build sites', body: "New homes have no internet connected until the owner moves in, which is often weeks or months after tiling is complete. SIM connectivity is the only option." },
              { title: 'Apartment construction', body: "Large apartment projects involve multiple tradespeople across dozens of units. The construction site WiFi, if it exists, is locked to the builder's network." },
              { title: 'Multi-day jobs with absent customers', body: "Customers often go to work during a multi-day bathroom tiling job. Collecting final payment requires a method that works without the customer being physically present." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for tilers</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most tilers</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan processes payments on any renovation site or new build without needing site internet. When the customer is not home, pair it with Zeller Payment Links sent via SMS — the customer pays from their phone and you get same-day settlement.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            1.4% in-person rate, same-day settlement, $99 hardware. The combination of SIM terminal and payment links covers every tiling payment scenario from a single provider account.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — backup for dead zones</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> with offline mode covers sites where mobile signal is also unreliable — basement-level units, rural builds, or areas with poor Optus coverage. Cards are queued and processed when signal is restored. Most tilers use Zeller as primary and Square as a backup they rarely need.
          </p>
        </section>

        <section className="mb-10">
          <div id="recommendation" className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for tilers</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Residential and commercial tiling:</strong> Zeller Terminal 1 + Optus SIM ($15/mo). Works in bathroom renovations, new builds, and apartment construction sites.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>When the customer is not home:</strong> Zeller or Tyro payment links sent via SMS — customer pays from their phone and you collect same day.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Backup:</strong> Square Terminal for confirmed dead-zone sites with no mobile signal.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/tilers" className="text-sm font-semibold text-brand-blue hover:underline">Full tilers EFTPOS guide →</Link>
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
        <RelatedLinks slug="tilers" type="trade" />
      </div>
    </>
  )
}
