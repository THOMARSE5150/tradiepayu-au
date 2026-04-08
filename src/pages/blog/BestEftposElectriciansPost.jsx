import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Meta from '../../components/Meta'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import RelatedLinks from '../../components/RelatedLinks'

import siteMeta from '../../data/site-meta.json'
import { blogHeroUrl, blogOgUrl } from '../../utils/blogImage'

const SITE = 'https://tradiepayau.directory'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Best EFTPOS for Electricians in Australia (2026)' },
]

const comparisonHeaders = ['', 'Zeller Terminal 1', 'Square Terminal', 'Stripe WisePad 3', 'Tyro']
const comparisonRows = [
  { highlight: true, cells: ['In-person rate', '1.4%', '1.6%', '1.7% + $0.10', 'Quote'] },
  { cells: ['Hardware cost', '$99', '$329', '$89', 'Quote'] },
  { cells: ['SIM connectivity', '✓ $15/mo', '✗', '✗', '✗'] },
  { cells: ['Offline mode', '✗', '✓', '✗', '✗'] },
  { cells: ['Settlement', 'Same day', 'Next day', '2 days', 'Next day'] },
  { cells: ['Works in switchboard rooms', 'Yes (SIM)', 'Offline mode', 'No', 'No'] },
  { cells: ['Works underground', 'Depends on Optus coverage', 'Yes (offline)', 'No', 'No'] },
]

const faqs = [
  {
    q: 'What is the best EFTPOS for electricians in Australia?',
    a: "Zeller Terminal 1 with the SIM plan is the best EFTPOS for most electricians. Switchboard rooms, sub-floor areas, multi-storey ceiling cavities, and new estates without internet all have one thing in common: no reliable WiFi. The Optus SIM plan ($15/month) means Zeller processes on its own mobile data connection, independently of any site WiFi. At 1.4% in-person rate and same-day settlement, it is also the cheapest and fastest option for electricians doing day-rate or fixed-price work.",
  },
  {
    q: 'Do electricians need SIM connectivity in their EFTPOS terminal?',
    a: "Usually yes. Electricians regularly work in locations where customer WiFi is unavailable: roof voids, sub-floor spaces, switchboard rooms that are Faraday-caged, new estates before the NBN is connected, and commercial fit-outs before tenants move in. Relying on a phone hotspot is an option but creates an extra step. Zeller's $15/month SIM plan eliminates this completely.",
  },
  {
    q: 'What is the best EFTPOS for emergency electrical call-outs?',
    a: "Zeller Terminal 1 + SIM plan. Emergency work — blown fuses, trip switch faults, storm damage — means you are on site at any hour and need to take payment before you leave. A SIM-enabled terminal that works anywhere Optus has 4G coverage is the safest option. Square Terminal with offline mode is the backup for sites with genuinely no mobile signal.",
  },
  {
    q: 'How much does EFTPOS cost an electrician per month?',
    a: "On $10,000/month in card revenue at Zeller's 1.4% rate, your processing cost is $140. Add $15 for the SIM plan and the total is $155. Square at 1.6% would cost $160 in processing fees on the same volume, plus $329 upfront hardware versus Zeller's $99. Over 12 months, Zeller saves around $60 in fees plus $230 in hardware — approximately $290 total.",
  },
  {
    q: 'Can I take deposits for electrical work before starting?',
    a: "Yes. Zeller, Square, and Stripe all support payment links that can be sent via SMS or email before you start the job. For large residential or commercial electrical projects where materials need to be ordered, a 20-30% deposit via payment link is standard. Zeller payment links cost 1.7%, Tyro's are 1.4% incl. GST. The client taps a link and pays from their phone — no bank details required.",
  },
  {
    q: 'Should electricians pass card fees to customers via surcharging?',
    a: "It depends on job size. On a $200 emergency call-out, a 1.4% surcharge is $2.80 — most clients won't notice. On a $5,000 switchboard upgrade, 1.4% is $70 — worth recovering. Enable surcharging in Zeller's dashboard and disclose it on your quote. Under ACCC rules, the surcharge cannot exceed your actual cost of card acceptance. Zeller's 1.4% is the lowest defensible surcharge rate in Australia.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Electricians in Australia (2026)',
    description: 'Electricians work in switchboard rooms, roof voids, and new estates without WiFi. Here is the best EFTPOS terminal setup for Australian electricians in 2026.',
    image: {
      '@type': 'ImageObject',
      url: blogOgUrl('best-eftpos-electricians-australia-2026'),
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/best-eftpos-electricians-australia-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Electricians in Australia (2026)', item: `${SITE}/blog/best-eftpos-electricians-australia-2026` },
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

export default function BestEftposElectriciansPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Electricians in Australia (2026)"
        description="Electricians work in switchboard rooms, roof voids, and new estates without WiFi. Here is the best EFTPOS terminal setup for Australian electricians in 2026."
        canonical="/blog/best-eftpos-electricians-australia-2026"
        ogType="article"
        ogImage={blogOgUrl('best-eftpos-electricians-australia-2026')}
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={blogHeroUrl('best-eftpos-electricians-australia-2026')}
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
            Best EFTPOS for Electricians in Australia (2026)
          </h1>
          <p className="hero-sub">
            Switchboard rooms, roof voids, Faraday-caged panels, and new estates with no internet. Your EFTPOS needs to work where your customers cannot give you their WiFi password.
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
            Electricians face a specific problem with EFTPOS: the job sites that need the most reliable payment — emergency call-outs, commercial switchboard work, new estate installations — are often the ones with the worst connectivity. A terminal that requires customer WiFi is a liability for electrical work.
          </p>
          <p>
            The right EFTPOS for electricians solves connectivity first. Rates and settlement speed matter, but they are secondary to a terminal that actually works at the end of a job.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Where electricians lose connectivity</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: 'Switchboard rooms', body: "Metal enclosures and conduit runs can attenuate WiFi signals significantly. Zeller's SIM terminal uses Optus mobile data which is more penetrating than 2.4/5GHz WiFi in these environments." },
              { title: 'Roof voids and sub-floors', body: "Insulation, timber, and distance from the router make WiFi unreliable. Trying to process a payment while standing at a manhole with your phone as a hotspot is a friction point Zeller eliminates." },
              { title: 'New estates pre-NBN', body: "New residential developments often have no internet until weeks or months after lockup. Zeller's SIM plan is the only mainstream EFTPOS option that works from day one on these sites." },
              { title: 'Commercial fit-outs', body: "Before tenants move in, commercial buildings may have no active internet services. Emergency and after-hours work in these buildings similarly has no WiFi available for a hotspot." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Provider comparison for electricians</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-6">#1 Zeller Terminal 1 + SIM — best for most electricians</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the $15/month Optus SIM plan is the setup that works across the full range of electrical work. The terminal uses mobile data independently — no customer WiFi, no phone hotspot. The 1.4% in-person rate is the lowest published flat rate available, and same-day settlement means job revenue is accessible the same evening.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            Hardware is $99 outright — no rental, no contract. The SIM plan is month-to-month. For electricians running multiple vans or apprentices, additional terminals can be added to the same Zeller account with all payments settling centrally.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">#2 Square Terminal — best backup for true dead zones</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/square" className="text-brand-blue hover:underline">Square Terminal</Link> ($329) with offline mode handles the rare case where there is genuinely no mobile signal — underground substations, deep basement switchrooms, rural properties on the edge of Optus coverage. Cards are stored locally and processed when connectivity is restored within 24 hours.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            Most electricians use Zeller as primary and keep a Square Terminal in the van as a backup specifically for confirmed dead-zone jobs.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Cost at typical electrician volumes</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 mt-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Monthly card revenue</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Zeller (1.4% + SIM)</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Square (1.6%)</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Stripe (1.7%+$0.10)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['$5,000', '$85', '$80', '$86+'],
                  ['$10,000', '$155', '$160', '$172+'],
                  ['$15,000', '$225', '$240', '$258+'],
                  ['$25,000', '$365', '$400', '$430+'],
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
          <p className="text-xs text-slate-400 mt-2">Zeller includes $15/mo SIM plan. Stripe estimates assume 20 transactions per $5,000 band.</p>
        </section>

        <section className="mb-10">
          <div id="recommendation" className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">Our recommendation for electricians</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Primary:</strong> Zeller Terminal 1 + Optus SIM plan ($15/mo). Works in switchboard rooms, roof voids, and new estates. Lowest rate, same-day settlement.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>Backup:</strong> Square Terminal. Keep in the van for underground substations and confirmed dead-zone sites.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              For high-volume commercial electrical contractors ($250k+/year), contact Zeller or Tyro for a custom rate — you may negotiate below 1.4%.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trades/electricians" className="text-sm font-semibold text-brand-blue hover:underline">Full electricians EFTPOS guide →</Link>
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
        <RelatedLinks slug="electricians" type="trade" />
      </div>
    </>
  )
}
