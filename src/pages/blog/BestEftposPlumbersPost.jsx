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
  { label: 'Best EFTPOS for Plumbers in Australia (2026)' },
]

const comparisonHeaders = ['', 'Zeller Terminal 1', 'Square Terminal', 'Stripe Reader M2', 'Tyro']
const comparisonRows = [
  { highlight: true, cells: ['In-person rate', '1.4%', '1.6%', '1.7% + $0.10', 'Quote'] },
  { cells: ['Hardware cost', '$99', '$329', '$69', 'Quote'] },
  { cells: ['SIM connectivity', '✓ $15/mo', '✗', '✗', '✗'] },
  { cells: ['Offline mode', '✗', '✓', '✗', '✗'] },
  { cells: ['Settlement', 'Same day', 'Next day', 'Next day', 'Next day'] },
  { cells: ['Payment links', '✓ 1.7%', '✓ 2.2%', '✓ 1.7%+$0.30', '✓ 1.4%'] },
  { cells: ['Emergency call-out use', 'Excellent', 'Good', 'Good', 'Limited'] },
]

const faqs = [
  {
    q: 'What is the best EFTPOS for plumbers in Australia?',
    a: "Zeller Terminal 1 with the SIM plan is the best EFTPOS for most plumbers. Emergency call-outs, burst pipes, and hot water system replacements happen at any hour, in any building. The Optus SIM plan means you can take payment in a basement, a high-rise plant room, or a new estate without WiFi. The 1.4% in-person rate is the lowest flat rate available, and same-day settlement means you have access to funds the same day the job is done.",
  },
  {
    q: 'Do plumbers need SIM connectivity in their EFTPOS terminal?',
    a: "Yes, for most plumbing work. Plumbers often work in areas where customer WiFi is unavailable or unreliable: high-rise plant rooms, underground sewage systems, new builds without internet connected, and residential jobs where you don't want to ask the customer for their WiFi password mid-emergency. Zeller's $15/month Optus SIM plan makes all of this a non-issue.",
  },
  {
    q: 'What is the best EFTPOS for emergency plumbing call-outs?',
    a: "Zeller Terminal 1 + SIM. Emergency plumbing is time-sensitive — you arrive, fix the issue, and take payment before you leave. Having a terminal that works independently of any site WiFi is essential. Square Terminal is a solid backup for plumbers who occasionally work in dead zones (underground, rural properties) where even mobile signal is absent, thanks to its offline payment mode.",
  },
  {
    q: 'How much does EFTPOS cost a plumber per month?',
    a: "On $8,000/month in card revenue at Zeller's 1.4% rate, your monthly processing cost is $112. Add $15 for the SIM plan and the total is $127. At Square's 1.6% rate on the same volume, it's $128 plus hardware ($329 upfront). Zeller hardware is $99 upfront. Over 12 months, Zeller saves roughly $24 in processing fees — but the main difference is same-day settlement and SIM connectivity, not the fee gap alone.",
  },
  {
    q: 'Should plumbers use surcharging?',
    a: "It depends on your job mix. On small service calls ($150–$400), a 1.4% surcharge adds $2–$6 — most customers won't notice, but some will. On larger jobs like hot water systems or bathroom renovations ($2,000–$10,000), surcharging is more worthwhile: 1.4% of $5,000 is $70. Enable surcharging in Zeller's dashboard and disclose it on your quote. Under ACCC rules, the surcharge cannot exceed your actual cost of card acceptance.",
  },
  {
    q: 'Can I use EFTPOS in an apartment block or high-rise?',
    a: "Yes, with the right terminal. Zeller Terminal 1 with the Optus SIM plan uses mobile data rather than building WiFi, so it works in plant rooms, pump rooms, and mechanical floors where building WiFi rarely reaches. Square Terminal can take payments offline if there is no connectivity at all. Stripe Reader M2 and most Tyro terminals require WiFi or a strong mobile hotspot connection from your phone.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Plumbers in Australia (2026)',
    description: 'Plumbers work in plant rooms, basements, new estates, and emergency call-outs at any hour. Here is the best EFTPOS terminal setup for Australian plumbers in 2026.',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-plumbers-australia-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Plumbers in Australia (2026)', item: `${SITE}/blog/best-eftpos-plumbers-australia-2026` },
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

export default function BestEftposPlumbersPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Plumbers in Australia (2026)"
        description="Plumbers work in plant rooms, basements, new estates, and emergency call-outs at any hour. Here is the best EFTPOS terminal setup for Australian plumbers in 2026."
        canonical="/blog/best-eftpos-plumbers-australia-2026"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&h=630&fit=crop&crop=center&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&h=560&fit=crop&crop=center&q=80"
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
            Best EFTPOS for Plumbers in Australia (2026)
          </h1>
          <p className="hero-sub">
            Plumbers work in basements, plant rooms, new estates, and on emergency call-outs at any hour. Your EFTPOS needs to work when the job is done — not when WiFi is available.
          </p>
        </div>
      </header>

      <article className="container-page section max-w-3xl">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="prose-sm text-slate-600 space-y-4 mb-10"
        >
          <p>
            Plumbing has one payment pattern most other trades do not: the emergency call-out. A burst pipe or a failed hot water system means you arrive at any hour, complete the job under pressure, and need to take payment before you leave. The customer is not in a position to negotiate or delay — but they should not have to track down your bank details at 11pm either.
          </p>
          <p>
            The right EFTPOS terminal for plumbers solves the connectivity problem first. Everything else — fees, settlement speed, invoicing — matters second.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">What plumbers need from EFTPOS</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: 'Works without customer WiFi', body: "You cannot ask a customer for their WiFi password during an emergency. A SIM-enabled terminal processes payments via its own mobile data connection — no WiFi required." },
              { title: 'Works in underground and plant areas', body: "High-rise plant rooms, basement pump rooms, and underground services all have poor WiFi. Zeller's Optus SIM works in most of these locations. Square's offline mode covers the rest." },
              { title: 'Available for 6am and 10pm call-outs', body: "Emergency plumbing does not wait for business hours. Your EFTPOS needs to work at any time, not rely on a payment gateway that has downtime windows." },
              { title: 'Fast settlement', body: "Same-day settlement with Zeller means a hot water system replacement billed on Monday morning is in your account that evening — available for supplier payments or next-day material orders." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for plumbers</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most plumbers</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan is the right setup for most plumbers. The SIM means you never need to ask for WiFi or tether to your phone — the terminal processes on its own connection. The 1.4% in-person rate is the lowest published flat rate in Australia. Same-day settlement means job revenue is accessible immediately.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            Hardware is $99 purchased outright — there is no rental, no lock-in contract. The SIM plan is month-to-month and can be added or removed from the Zeller dashboard.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            The only gap: Zeller has no offline mode. If Optus has no 4G coverage at the site — genuinely rare in metropolitan areas, more common in rural and remote work — you cannot process. For these jobs, keep a Square Terminal as backup.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — best backup for dead-zone jobs</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> ($329) supports offline payment mode. If you are working on a rural property, in a deep basement, or in an area with no mobile signal, Square can accept card payments locally and process them when connectivity is restored — up to 24 hours later.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            At 1.6% in-person rate and $329 upfront, Square is more expensive than Zeller for day-to-day use. Most plumbers use Zeller as primary and Square as insurance for the rare truly-dead-zone job.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Cost comparison at typical plumbing volumes</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 mt-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Monthly card revenue</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Zeller (1.4%)</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Square (1.6%)</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Stripe (1.7%+$0.10)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['$3,000', '$42', '$48', '$51+'],
                  ['$6,000', '$84', '$96', '$102+'],
                  ['$10,000', '$140', '$160', '$170+'],
                  ['$20,000', '$280', '$320', '$340+'],
                ].map(([vol, z, sq, st], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-brand-dark">{vol}</td>
                    <td className="px-4 py-3 text-green-700 font-semibold">{z}</td>
                    <td className="px-4 py-3 text-slate-600">{sq}</td>
                    <td className="px-4 py-3 text-slate-600">{st}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">Zeller figures do not include $15/mo SIM plan cost. Stripe per-transaction $0.10 fee estimated at 15 transactions/month per $3,000 band.</p>
        </section>

        <section className="mb-10">
          <div className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for plumbers</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Primary:</strong> Zeller Terminal 1 + Optus SIM plan ($15/mo). Use for all jobs. Never ask for WiFi again.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Backup:</strong> Square Terminal ($329). Keep in the van for rural call-outs and confirmed dead-zone sites.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              If you regularly do commercial plumbing with high monthly volumes (over $30,000/month), contact Tyro for a quote — you may negotiate a lower in-person rate than 1.4%.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/plumbers" className="text-sm font-semibold text-brand-blue hover:underline">Full plumbers EFTPOS guide →</Link>
              <Link to="/providers/zeller" className="text-sm font-semibold text-brand-blue hover:underline">Zeller full review →</Link>
              <Link to="/calculator" className="text-sm font-semibold text-brand-blue hover:underline">Calculate your costs →</Link>
            </div>
          </div>
        </section>

        <FaqSection faqs={faqs} />

        <p className="text-xs text-slate-400 mt-6">
          Rates current as of April 2026. Tyro in-person rates require a quote. Always verify current pricing with providers before signing up.
        </p>

      </article>

      <div className="container-page mb-12">
        <RelatedLinks slug="plumbers" type="trade" />
      </div>
    </>
  )
}
