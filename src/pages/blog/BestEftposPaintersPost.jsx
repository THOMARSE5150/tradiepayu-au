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
  { label: 'Best EFTPOS for Painters in Australia (2026)' },
]

const comparisonHeaders = ['', 'Zeller Terminal 1', 'Square Terminal', 'Stripe Reader M2']
const comparisonRows = [
  { highlight: true, cells: ['In-person rate', '1.4%', '1.6%', '1.7% + $0.10'] },
  { cells: ['Hardware cost', '$99', '$329', '$69'] },
  { cells: ['SIM connectivity', '✓ $15/mo', '✗', '✗'] },
  { cells: ['Offline mode', '✗', '✓', '✗'] },
  { cells: ['Settlement', 'Same day', 'Next day', 'Next day'] },
  { cells: ['Works in renovation sites', 'Yes (SIM)', 'Needs hotspot', 'No'] },
  { cells: ['Works on new estates', 'Yes (SIM)', 'Needs hotspot', 'No'] },
]

const faqs = [
  {
    q: 'What is the best EFTPOS for painters in Australia?',
    a: "Zeller Terminal 1 with the SIM plan is the best EFTPOS for most painters. Painting work happens in homes under renovation, vacant investment properties, and new estates — all locations where there is no customer WiFi available. The Optus SIM plan ($15/month) means the terminal processes cards independently of any site internet. At 1.4% in-person rate and same-day settlement, it suits both small residential repaint jobs and larger commercial painting contracts.",
  },
  {
    q: 'Do painters need SIM connectivity in their EFTPOS terminal?',
    a: "Yes. Painters routinely work in homes that are vacant during a renovation, newly built homes with no internet connected, and new housing estates where no infrastructure is in place. Even occupied homes may have their internet interrupted mid-renovation. A SIM-enabled terminal like Zeller Terminal 1 eliminates the need to ask customers for WiFi credentials or set up a phone hotspot at the end of every job.",
  },
  {
    q: 'How do painters handle deposits for large jobs?',
    a: "For large residential or commercial repaint jobs, a deposit of 20–30% upfront is standard practice. The easiest way to collect a deposit is via a payment link — send it in the quote or job confirmation email so the customer can pay before you start. Zeller Payment Links (1.7%) and Tyro Payment Links (1.4% incl. GST) are the main options. For large commercial repaints, collect the deposit when the contract is signed, not when you arrive on site.",
  },
  {
    q: 'Should painters surcharge for card payments?',
    a: "For residential repaint jobs, most painters absorb the 1.4% Zeller rate — it is a small amount on a typical job and customers appreciate not being hit with a surcharge. For larger commercial repaint contracts where the client is a business, disclosing a 1.4% surcharge on the quote is accepted practice. At Zeller\'s rate, you are passing on the lowest defensible amount under Australian surcharging rules.",
  },
  {
    q: 'What is the best way to accept payment for a large commercial repaint?',
    a: "For large commercial repaint jobs — office buildings, apartment complexes, shopping centres — payment links are the right tool. Send a Zeller or Tyro payment link to the property manager or accounts payable department after each progress stage. They pay from their system without needing to be on site. For very large contracts, split into deposit, progress payment, and final payment to match cash flow to material and labour costs.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Painters in Australia (2026)',
    description: 'Painters work in empty buildings under renovation with no WiFi. The best EFTPOS for Australian painters in 2026.',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-painters-australia-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Painters in Australia (2026)', item: `${SITE}/blog/best-eftpos-painters-australia-2026` },
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

export default function BestEftposPaintersPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Painters in Australia (2026)"
        description="Painters work in empty buildings under renovation with no WiFi. The best EFTPOS for Australian painters in 2026."
        canonical="/blog/best-eftpos-painters-australia-2026"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=630&fit=crop&crop=center&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=900&h=560&fit=crop&crop=center&q=80"
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
            Best EFTPOS for Painters in Australia (2026)
          </h1>
          <p className="hero-sub">
            Vacant homes under renovation, new housing estates, and commercial repaint jobs — painting work demands an EFTPOS that works without any WiFi on site.
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
            Painters work across two main segments: residential repaints (occupied and vacant homes, investment properties) and commercial painting (offices, apartment buildings, shopping centres). What both share is a common payment problem — the job site rarely has reliable WiFi. Whether you are painting a renovated home with internet disconnected mid-job or a freshly built estate with no infrastructure yet, you need an EFTPOS that works independently of site internet.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Where painters lose WiFi access</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: 'Homes under renovation', body: "Renovation projects often involve the home being vacated and the internet service disconnected. Even if the customer is home, the router may be packed away or inaccessible." },
              { title: 'New housing estates', body: "New estates have no internet infrastructure connected until after handover. You may be painting a house that has never had an active internet connection." },
              { title: 'Vacant investment properties', body: "Investors often disconnect services between tenancies. A painter doing an end-of-lease repaint is almost always working in a property with no active internet." },
              { title: 'Commercial repaint jobs', body: "Large commercial repaints happen outside business hours — evenings and weekends — when building WiFi may be locked to a corporate network you cannot access." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for painters</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most painters</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan handles every painting scenario without relying on site internet. Residential repaints, vacant investment properties, new estate builds, and commercial repaint jobs all work on the same terminal with no configuration needed on arrival.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            1.4% in-person rate, same-day settlement, $99 hardware. For painting businesses running multiple crews, additional Zeller terminals can be added to the same account with centralised reporting.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — backup for dead zones</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> with offline mode handles the rare scenario where mobile signal is also unavailable — basement car parks, rural properties, or areas with no Optus 4G coverage. Cards are stored and processed when connectivity is restored. Most painters use Zeller as primary and Square as a backup they rarely need.
          </p>
        </section>

        <section className="mb-10">
          <div id="recommendation" className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for painters</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Residential and commercial painting:</strong> Zeller Terminal 1 + Optus SIM ($15/mo). Works in vacant renovation sites, new estates, and after-hours commercial jobs.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Deposits and remote billing:</strong> Zeller or Tyro payment links for large job deposits and commercial repaint invoicing — send via email at quote acceptance.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Backup:</strong> Square Terminal for confirmed dead-zone sites with no mobile signal.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/painters" className="text-sm font-semibold text-brand-blue hover:underline">Full painters EFTPOS guide →</Link>
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
        <RelatedLinks slug="painters" type="trade" />
      </div>
    </>
  )
}
