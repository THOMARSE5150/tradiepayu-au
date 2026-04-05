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
  { label: 'Zeller vs Square vs Stripe: Best EFTPOS for Australian Tradies (2026)' },
]

const comparisonHeaders = ['', 'Zeller Terminal 1', 'Square Terminal', 'Stripe Reader M2']
const comparisonRows = [
  { highlight: true, cells: ['In-person rate', '1.4%', '1.6%', '1.7% + $0.10'] },
  { cells: ['Hardware cost', '$99', '$329', '$69'] },
  { cells: ['Monthly fee', '$0', '$0', '$0'] },
  { cells: ['SIM / cellular', '✓ $15/mo (Optus)', '✗', '✗'] },
  { cells: ['Offline mode', '✗', '✓', '✗'] },
  { cells: ['Settlement', 'Same day', 'Next business day', 'Next business day'] },
  { cells: ['Tap to Pay (phone)', '✓ Free', '✓ Free', '✓ + $0.15/auth'] },
  { cells: ['Invoicing', '✓ Free, built-in', '✓ Square Invoices', '✓ Stripe Invoicing'] },
  { cells: ['Payment links rate', '1.7% + $0.25', '2.2%', '1.7% + $0.30'] },
  { cells: ['Surcharging', '✓ Configurable', '✓ Configurable', '✓ Configurable'] },
  { cells: ['API / developer tools', '⚪ Basic', '⚪ Basic', '✓ Best-in-class'] },
  { cells: ['Contract / lock-in', 'None', 'None', 'None'] },
  { cells: ['Overall rating', '4.8 / 5', '4.5 / 5', '4.2 / 5'] },
]

const costRows = [
  { monthly: 3000,  avgTx: 200, zellerCost: 57,  squareCost: 71,  stripeCost: 66  },
  { monthly: 5000,  avgTx: 300, zellerCost: 85,  squareCost: 107, stripeCost: 100 },
  { monthly: 10000, avgTx: 350, zellerCost: 155, squareCost: 189, stripeCost: 186 },
  { monthly: 20000, avgTx: 500, zellerCost: 295, squareCost: 364, stripeCost: 354 },
]

const faqs = [
  {
    q: 'Which is cheapest — Zeller, Square, or Stripe?',
    a: "Zeller is cheapest at almost every volume. At $10,000/month in card revenue, Zeller costs approximately $140 in processing fees alone (1.4% flat). Square costs $160 (1.6%). Stripe costs $170 + roughly $28.50 in per-transaction fees (1.7% + $0.10 per tx at ~285 transactions). With hardware amortised over 24 months, the gap widens further — Square\'s $329 terminal adds $13.71/month versus Zeller\'s $99 terminal at $4.13/month.",
  },
  {
    q: 'Which works best without WiFi — Zeller, Square, or Stripe?',
    a: "Zeller wins for most connectivity-limited environments — the optional Optus SIM plan ($15/month) means the terminal works entirely independently of WiFi. Square Terminal wins in true zero-signal environments through its offline payment mode: cards are stored locally and processed when connectivity is restored. Stripe Reader M2 has no SIM and no offline mode — it requires an active internet connection at all times. For most tradie job sites, Zeller\'s SIM plan is the better solution.",
  },
  {
    q: 'Is Stripe worth it for tradies?',
    a: "Stripe makes sense for tradies who have a software developer on the team, use custom quoting or job-management software that integrates via API, or need advanced reporting. The Stripe Terminal SDK is the most powerful in Australia. For a sole trader doing straightforward on-site payments, Zeller\'s lower rate, SIM connectivity, and same-day settlement make it the better daily driver. Stripe\'s per-transaction $0.10 fee hurts on low-average-transaction work (call-outs, small jobs).",
  },
  {
    q: 'Which settles money fastest?',
    a: "Zeller settles same business day into a Zeller Transaction Account. Funds are accessible immediately — via the free Zeller Mastercard debit card or same-day transfer to an external bank. Square and Stripe both settle the next business day to your nominated Australian bank account. For tradies who take a payment in the morning and need to buy materials the same afternoon, Zeller is the only option that makes this possible.",
  },
  {
    q: 'Can I use Zeller and Square at the same time?',
    a: "Yes — many tradies run both. Zeller is the day-to-day terminal for most jobs, and a Square Terminal is kept in the ute specifically for remote or zero-signal sites where offline mode matters. They run as separate merchant accounts under the same ABN. Payments settle independently — Zeller to your Zeller account, Square to your bank. There is no conflict and no combined fee.",
  },
  {
    q: 'Which is better for invoicing — Zeller, Square, or Stripe?',
    a: "All three support invoicing with a built-in payment link. Zeller Invoices are free and integrated directly into the dashboard — clients pay via the 1.7% payment link rate. Square Invoices are also free but the online payment rate is 2.2%, making it the most expensive for remote payments. Stripe Invoicing is the most feature-rich (automated reminders, tax, subscriptions) but the online rate is 1.7% + $0.30. For straightforward tradie invoicing, Zeller is the most cost-effective.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Zeller vs Square vs Stripe: Best EFTPOS for Australian Tradies (2026)',
    description: 'A full 3-way comparison of the most popular EFTPOS options for Australian tradies. Rates, hardware, connectivity, settlement, and a clear winner for each scenario.',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/zeller-vs-square-vs-stripe-eftpos-tradies-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Zeller vs Square vs Stripe: Best EFTPOS for Australian Tradies (2026)', item: `${SITE}/blog/zeller-vs-square-vs-stripe-eftpos-tradies-2026` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'EFTPOS Terminal Comparison',
    itemListElement: [{"@type":"ListItem","position":1,"name":"Zeller Terminal 1"},{"@type":"ListItem","position":2,"name":"Square Terminal"},{"@type":"ListItem","position":3,"name":"Stripe Reader"}],
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

export default function ZellerSquareStripePost() {
  return (
    <>
      <Meta
        title="Zeller vs Square vs Stripe: Best EFTPOS for Australian Tradies (2026)"
        description="A full 3-way comparison of the most popular EFTPOS options for Australian tradies. Rates, hardware, connectivity, settlement speed, and a clear winner for each scenario."
        canonical="/blog/zeller-vs-square-vs-stripe-eftpos-tradies-2026"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=630&fit=crop&crop=center&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=560&fit=crop&crop=center&q=80"
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
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">3-Way Comparison</span>
            <span>·</span><span>2 Apr 2026</span>
            <span>·</span><span>8 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            Zeller vs Square vs Stripe: Best EFTPOS for Tradies (2026)
          </h1>
          <p className="hero-sub">
            Rate, hardware cost, SIM connectivity, offline mode, and settlement speed — the full 3-way breakdown for Australian tradies who need to pick one.
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
            Zeller, Square, and Stripe are the three most popular EFTPOS providers for Australian tradies who want no lock-in, no monthly fee, and simple online signup. They are often compared in pairs — but the full 3-way picture is more useful for choosing between them.
          </p>
          <p>
            Short answer: <strong className="text-brand-dark">Zeller wins for most tradies</strong> on rate, connectivity, and settlement speed. Square wins in zero-signal environments. Stripe wins if you need developer APIs or advanced software integration. Here is the full breakdown.
          </p>
        </motion.div>

        {/* Quick verdict cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { provider: 'Zeller', tag: 'Best overall', colour: 'border-brand-blue bg-blue-50', tagColour: 'bg-brand-blue text-white', points: ['Lowest rate: 1.4%', 'SIM connectivity', 'Same-day settlement', '$99 hardware'] },
            { provider: 'Square', tag: 'Best for dead zones', colour: 'border-slate-200 bg-white', tagColour: 'bg-slate-700 text-white', points: ['Offline payment mode', '1.6% rate', 'Best offline reliability', '$329 hardware'] },
            { provider: 'Stripe', tag: 'Best for developers', colour: 'border-slate-200 bg-white', tagColour: 'bg-violet-600 text-white', points: ['Best API / SDK', '1.7% + $0.10', '24/7 support', '$69 hardware'] },
          ].map((c, i) => (
            <div key={i} className={`rounded-2xl border p-4 ${c.colour}`}>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${c.tagColour}`}>{c.tag}</span>
              <h3 className="font-bold text-brand-dark mt-2 mb-2">{c.provider}</h3>
              <ul className="space-y-1">
                {c.points.map((pt, j) => (
                  <li key={j} className="text-xs text-slate-600 flex items-start gap-1.5">
                    <span className="text-brand-blue mt-0.5">✓</span>{pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Full feature comparison</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />
        </section>

        {/* Real cost table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Real monthly cost at different volumes</h2>
          <p className="text-sm text-slate-500 mb-4">Includes processing fees + hardware amortised over 24 months. Zeller includes $15/mo SIM plan. Stripe includes $0.10/tx fee.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-600 text-xs">Monthly volume</th>
                  <th className="text-right px-4 py-3 font-semibold text-brand-blue text-xs">Zeller</th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-600 text-xs">Square</th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-600 text-xs">Stripe</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/50">
                    <td className="px-4 py-3 text-slate-700 font-medium">${row.monthly.toLocaleString()}/mo</td>
                    <td className="px-4 py-3 text-right font-bold text-brand-blue">${row.zellerCost}/mo</td>
                    <td className="px-4 py-3 text-right text-slate-600">${row.squareCost}/mo</td>
                    <td className="px-4 py-3 text-right text-slate-600">${row.stripeCost}/mo</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Estimates only. Use the <Link to="/calculator" className="text-brand-blue hover:underline">cost calculator</Link> for your exact numbers.
          </p>
        </section>

        <section className="mb-10 space-y-6">
          <h2 className="text-xl font-bold text-brand-dark">Rate: Zeller wins at every volume</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Zeller\'s 1.4% flat rate is the lowest published in-person rate available to Australian tradies with no lock-in. Square\'s 1.6% costs 14% more per transaction. Stripe\'s 1.7% + $0.10 is worse still for low-average-transaction work — for a $150 call-out fee, that extra $0.10 represents an effective 0.07% surcharge on top of an already-higher rate.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Hardware compounds the gap. Zeller Terminal 1 costs $99 upfront. Square Terminal costs $329 — more than three times as much. Stripe Reader M2 is $69 but the higher per-transaction rate erodes that saving within a few months for any meaningful volume.
          </p>

          <h2 className="text-xl font-bold text-brand-dark">Connectivity: depends on your job site</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <strong className="text-brand-dark">Zeller + SIM plan</strong> is the right answer for most tradie connectivity problems. The Optus SIM plan ($15/month) means the terminal works anywhere Optus 4G reaches — no reliance on the customer\'s WiFi, no hotspot required. Optus covers most metropolitan, suburban, and regional Australian areas.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            <strong className="text-brand-dark">Square\'s offline mode</strong> is the right answer for true zero-signal environments — underground, remote rural, or sites outside any mobile coverage. Cards are stored locally and processed when connectivity is restored within 24 hours. This is the only option that works in a dead zone.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            <strong className="text-brand-dark">Stripe</strong> has neither. It requires an active internet connection at all times — WiFi or hotspot. For most job sites, this is a meaningful limitation.
          </p>

          <h2 className="text-xl font-bold text-brand-dark">Settlement: Zeller wins, clearly</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Zeller settles same business day into a Zeller Transaction Account. The free Zeller Mastercard debit card makes the funds accessible immediately — you can pay for materials at a trade supplier the same afternoon. Square and Stripe both settle the following business day. For cash-flow-sensitive sole traders, same-day settlement is not a minor perk — it is a meaningful operational advantage.
          </p>

          <h2 className="text-xl font-bold text-brand-dark">When Stripe is the right call</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Stripe\'s appeal is its developer ecosystem — the Terminal SDK, Stripe Connect, webhooks, and reporting APIs are unmatched. For a tradie business that uses custom-built job management software, has a developer integrating payments into a quoting tool, or is growing into a platform business (marketplace, subscription billing), Stripe is the right foundation. The rate premium is the cost of that infrastructure. For a sole trader doing on-site card payments with no custom software, the rate premium is not justified.
          </p>
        </section>

        {/* Scenario table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Which one for your situation?</h2>
          <div className="space-y-3">
            {[
              { scenario: 'Sole trader, on-site work, variable WiFi', winner: 'Zeller + SIM', why: 'Lowest rate, cellular independence, same-day cash flow' },
              { scenario: 'Remote rural work, no mobile coverage', winner: 'Square Terminal', why: 'Only option with reliable offline payment mode' },
              { scenario: 'Large team, multiple terminals needed', winner: 'Zeller', why: 'Buy hardware outright, no per-device rental, central settlement' },
              { scenario: 'Custom job management software / API', winner: 'Stripe', why: 'Best Terminal SDK and developer documentation in Australia' },
              { scenario: 'Backup terminal for dead-zone jobs', winner: 'Square Terminal', why: 'Keep alongside Zeller specifically for offline capability' },
              { scenario: 'Cash-flow critical (buy materials same day)', winner: 'Zeller', why: 'Same-day settlement, accessible via free Zeller debit card' },
              { scenario: 'High volume ($250k+/year)', winner: 'Zeller or Tyro', why: 'Zeller at standard rate, or request a Tyro quote for negotiated rate' },
            ].map((row, i) => (
              <div key={i} className={`rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3 ${i === 0 ? 'lg-blue' : 'bg-slate-50 border border-slate-100'}`}>
                <div className="flex-1">
                  <p className="text-sm font-medium text-brand-dark">{row.scenario}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{row.why}</p>
                </div>
                <span className="text-xs font-bold text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full flex-shrink-0">{row.winner}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <div className="flex flex-wrap gap-3">
            <Link to="/compare/zeller-vs-square" className="text-sm font-semibold text-brand-blue border border-brand-blue/30 hover:bg-brand-blue/5 px-4 py-2 rounded-xl transition-colors">Zeller vs Square →</Link>
            <Link to="/compare/zeller-vs-stripe" className="text-sm font-semibold text-brand-blue border border-brand-blue/30 hover:bg-brand-blue/5 px-4 py-2 rounded-xl transition-colors">Zeller vs Stripe →</Link>
            <Link to="/compare/square-vs-stripe" className="text-sm font-semibold text-brand-blue border border-brand-blue/30 hover:bg-brand-blue/5 px-4 py-2 rounded-xl transition-colors">Square vs Stripe →</Link>
            <Link to="/calculator" className="text-sm font-semibold text-brand-blue border border-brand-blue/30 hover:bg-brand-blue/5 px-4 py-2 rounded-xl transition-colors">Cost calculator →</Link>
          </div>
        </section>

        <FaqSection faqs={faqs} />

        <p className="text-xs text-slate-400 mt-6">
          Rates verified April 2026. Cost table estimates assume all transactions are in-person tap/chip. Stripe Tap to Pay adds an additional $0.15 per authorisation. Always confirm current rates at provider websites before signing up.
        </p>

      </article>

      <div className="container-page mb-12">
        <RelatedLinks slug="electricians" type="trade" />
      </div>
    </>
  )
}
