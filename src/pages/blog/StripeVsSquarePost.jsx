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
  { label: 'Stripe vs Square: Which Is Better for Australian Tradies? (2026)' },
]

const comparisonHeaders = ['', 'Square Terminal', 'Stripe WisePad 3']
const comparisonRows = [
  { highlight: true, cells: ['In-person rate', '1.6%', '1.7% + $0.10'] },
  { cells: ['Hardware cost', '$329', '$89'] },
  { cells: ['SIM connectivity', '✗ (WiFi/hotspot)', '✗ (WiFi/hotspot)'] },
  { cells: ['Offline mode', '✓ up to 24h', '✗'] },
  { cells: ['Settlement', 'Next business day', '2 business days'] },
  { cells: ['Free settlement', '✓ Standard', '✓ Standard'] },
  { cells: ['Payment links rate', '2.2%', '1.7% + $0.30'] },
  { cells: ['Invoicing', '✓ Square Invoices', '✓ Stripe Invoicing'] },
  { cells: ['Online payments', '✓ 2.2%', '✓ 1.7% + $0.30'] },
  { cells: ['POS system', '✓ Square POS', '✓ Stripe Dashboard'] },
  { cells: ['Best for tradies', 'Dead zones, offline', 'Low upfront, online billing'] },
]

const faqs = [
  {
    q: 'Is Stripe or Square better for Australian tradies?',
    a: "For most Australian tradies, neither Stripe nor Square beats Zeller (1.4% rate, SIM connectivity, same-day settlement). Between Stripe and Square specifically: Square Terminal is better for tradies who need offline payment capability — rural jobs, underground, no-signal sites. Stripe is better for tradies who do a lot of online billing (invoices, payment links) and want lower online payment fees. For in-person EFTPOS as a primary terminal, Square has a lower per-transaction rate (1.6% vs 1.7% + $0.10), though the hardware cost is much higher ($329 vs $89).",
  },
  {
    q: 'What is the difference between Stripe and Square fees in Australia?',
    a: "Square charges 1.6% flat for in-person card transactions. Stripe charges 1.7% + $0.10 per transaction. On a $200 job, Square costs $3.20 and Stripe costs $3.50. The $0.10 per-transaction fee makes Stripe more expensive on low-value jobs — on a $50 service call, Stripe is 2.1% effective vs Square at 1.6%. For online payments and payment links: Stripe charges 1.7% + $0.30, Square charges 2.2% — Stripe is cheaper for online billing.",
  },
  {
    q: 'Does Stripe work for tradies in Australia?',
    a: "Yes — Stripe WisePad 3 is available in Australia for $89 and supports in-person tap/chip/swipe payments. It connects via Bluetooth to a phone running the Stripe Terminal app. There is no SIM plan option, so you need a mobile hotspot from your phone for connectivity. It does not support offline payments. Stripe is particularly useful for tradies who already use Stripe for online invoicing or subscriptions, as it consolidates everything in one account.",
  },
  {
    q: 'Does Square work in Australia?',
    a: "Yes — Square is well-established in Australia with full local support. The Square Terminal ($329) is a standalone Android-powered device that connects to WiFi or a phone hotspot. It does not have a built-in SIM, but it does support offline payment mode — a significant advantage over most competitors. Square processes through Square Australia Pty Ltd and settlements go into your nominated Australian bank account next business day.",
  },
  {
    q: 'Which is cheaper for high-volume tradies, Stripe or Square?',
    a: "Square is cheaper for most high-volume in-person use at 1.6% vs Stripe at 1.7% + $0.10. On $20,000/month of card revenue at an average transaction of $300: Square costs $320, Stripe costs $340 + $6.67 in per-transaction fees = $346.67. But both are more expensive than Zeller (1.4%, $280/month on the same volume). For online-heavy billing — where Stripe's payment link rate (1.7% + $0.30) beats Square's (2.2%) — Stripe wins on online payments.",
  },
  {
    q: 'Which has better hardware: Stripe or Square?',
    a: "Stripe WisePad 3 at $89 is much cheaper than Square Terminal at $329, but the tradeoff is significant. Stripe WisePad 3 is a Bluetooth-paired reader that requires your phone for the display, receipt management, and internet connectivity. Square Terminal is a fully standalone Android device with its own screen, receipt printer port, and battery — it does not need your phone at all. For tradies, the standalone Square Terminal is more practical on job sites.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Stripe vs Square: Which Is Better for Australian Tradies? (2026)',
    description: 'Stripe and Square are both available in Australia. We compare in-person rates, hardware, connectivity, and settlement speed to find the better EFTPOS option for tradies.',
    image: {
      '@type': 'ImageObject',
      url: blogOgUrl('stripe-vs-square-eftpos-australia-2026'),
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/stripe-vs-square-eftpos-australia-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Stripe vs Square: Which Is Better for Australian Tradies? (2026)', item: `${SITE}/blog/stripe-vs-square-eftpos-australia-2026` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'EFTPOS Terminal Comparison',
    itemListElement: [{"@type":"ListItem","position":1,"name":"Stripe Reader"},{"@type":"ListItem","position":2,"name":"Square Terminal"}],
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

export default function StripeVsSquarePost() {
  return (
    <>
      <Meta
        title="Stripe vs Square: Which Is Better for Australian Tradies? (2026)"
        description="Stripe and Square are both available in Australia. We compare in-person rates, hardware, connectivity, and settlement speed to find the better EFTPOS option for tradies."
        canonical="/blog/stripe-vs-square-eftpos-australia-2026"
        ogType="article"
        ogImage={blogOgUrl('stripe-vs-square-eftpos-australia-2026')}
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={blogHeroUrl('stripe-vs-square-eftpos-australia-2026')}
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
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Comparison</span>
            <span>·</span>
            <span>2 Apr 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            Stripe vs Square: Which Is Better for Australian Tradies?
          </h1>
          <p className="hero-sub">
            Both are available in Australia, both skip the bank lock-in, and both are used by tradies. Here is a full comparison across rates, hardware, connectivity, and the one area where each wins.
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
            Stripe and Square often come up together when Australian tradies are researching payment options — both are non-bank providers, both have transparent published rates, and both avoid the lengthy application process of traditional merchant services. But they are built differently, and the right choice depends on your job type.
          </p>
          <p>
            Quick verdict: for most tradies, <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller</Link> is still the better option at 1.4% with a SIM plan. But if you are choosing between Stripe and Square specifically, here is the breakdown.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">Full comparison: Stripe vs Square for tradies</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

          <h2 className="text-xl font-bold text-brand-dark mt-8">In-person rate: Square wins</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Square charges 1.6% flat per in-person transaction. Stripe charges 1.7% + $0.10 per transaction. The $0.10 per-transaction fee disproportionately affects low-value jobs. On a $60 service call, Stripe is 1.87% effective (1.7% + $0.10 / $60) versus Square at 1.6%. On a $1,000 job, the gap narrows: Stripe is 1.71% effective vs Square at 1.6%. For high-ticket work, the difference is smaller — but Square is cheaper in-person regardless.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Hardware: Stripe wins (on price), Square wins (on practicality)</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Stripe WisePad 3 is $89. Square Terminal is $329. On upfront cost, Stripe wins by a wide margin. But the hardware is fundamentally different: Stripe WisePad 3 is a Bluetooth-paired reader that offloads all intelligence — display, connectivity, receipt management — to your phone. Square Terminal is a standalone Android device with its own screen and battery that does not need your phone nearby.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            For tradies, standalone hardware wins. On a job site, your phone may be taking a call, managing a photo, or in your pocket. Square Terminal sits on the bench and works independently.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Connectivity: Square wins (offline mode)</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Neither Stripe nor Square has a built-in SIM — both require WiFi or a phone hotspot. This puts them behind Zeller for job-site connectivity. But Square has a unique advantage: offline payment mode. In a zero-signal area, Square Terminal can accept card payments locally and process them when connectivity is restored (up to 24 hours, with a risk of later decline).
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            Stripe has no offline mode. If there is no connectivity, Stripe cannot process — period.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Online billing: Stripe wins</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Stripe charges 1.7% + $0.30 for online payments and payment links. Square charges 2.2% flat. On a $2,000 invoice paid via payment link: Stripe charges $34.30, Square charges $44 — a $9.70 difference. At scale, if you send 10 invoices a month at $2,000 each, that is $97/month cheaper with Stripe online.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            Stripe also has a more powerful invoicing and subscription platform, which matters for tradies with recurring service agreements or retainer clients.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Cost comparison at real tradie volumes</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 mt-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Monthly volume</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Square (1.6%)</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Stripe (1.7%+$0.10)</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Zeller (1.4%)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['$3,000', '$48', '$55', '$42'],
                  ['$6,000', '$96', '$108', '$84'],
                  ['$10,000', '$160', '$180', '$140'],
                  ['$20,000', '$320', '$360', '$280'],
                ].map(([vol, sq, st, z], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-brand-dark">{vol}</td>
                    <td className="px-4 py-3 text-slate-600">{sq}</td>
                    <td className="px-4 py-3 text-slate-600">{st}</td>
                    <td className="px-4 py-3 text-green-700 font-semibold">{z}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">Stripe estimates assume average transaction of $300 (10 transactions per $3,000 band). Zeller does not include optional $15/mo SIM plan.</p>

          <h2 className="text-xl font-bold text-brand-dark mt-8">The verdict</h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Choose Square if…</p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>You work in areas with no mobile signal (offline mode is essential)</li>
                <li>You want a standalone terminal without needing your phone nearby</li>
                <li>Most of your payments are in-person rather than invoiced remotely</li>
              </ul>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Choose Stripe if…</p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>You do significant online billing — invoices, payment links</li>
                <li>You already use Stripe for other business payments</li>
                <li>Hardware upfront cost matters and you are comfortable with a phone-paired reader</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <div className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">Neither beats Zeller for most tradies</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              At 1.4% in-person rate, a built-in SIM option, and same-day settlement, <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> outperforms both Stripe and Square on the metrics that matter most to tradies doing in-person work. The 3-way comparison is at the link below.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/blog/zeller-vs-square-vs-stripe-eftpos-tradies-2026" className="text-sm font-semibold text-brand-blue hover:underline">Zeller vs Square vs Stripe — full 3-way compare →</Link>
              <Link to="/providers/square" className="text-sm font-semibold text-brand-blue hover:underline">Square full review →</Link>
              <Link to="/providers/stripe" className="text-sm font-semibold text-brand-blue hover:underline">Stripe full review →</Link>
            </div>
          </div>
        </section>

        <FaqSection faqs={faqs} />

        <p className="text-xs text-slate-400 mt-6">
          Rates current as of April 2026. Always verify current pricing with providers before signing up.
        </p>

      </article>

      <div className="container-page mb-12">
        <RelatedLinks slug="stripe-vs-square" type="compare" />
      </div>
    </>
  )
}
