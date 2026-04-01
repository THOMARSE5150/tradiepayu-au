import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Meta from '../../components/Meta'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'

const SITE = 'https://tradiepayau.directory'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Square Terminal Review (2026) — Is It Worth It for Australian Tradies?' },
]

const comparisonHeaders = ['', 'Cost']
const comparisonRows = [
  { cells: ['Terminal hardware', '$329 (one-off)'] },
  { cells: ['SIM plan', 'None (WiFi/Ethernet only)'] },
  {
    highlight: true,
    cells: ['In-person rate', '1.6%'],
  },
  { cells: ['Invoice / remote rate', '2.2%'] },
  { cells: ['Monthly account fee', '$0'] },
  { cells: ['Contract', 'None'] },
  { cells: ['Offline mode', '✓ (unique feature)'] },
]

const faqs = [
  {
    q: 'Is Square Terminal worth it for Australian tradies?',
    a: 'Only if you regularly work in zero-signal environments — underground, switchboard rooms, large concrete buildings. For all other scenarios, Zeller Terminal 1 is cheaper (1.4% vs 1.6%), has a built-in SIM, and settles same-day. Square\'s offline mode is genuinely valuable but it\'s a niche advantage.',
  },
  {
    q: 'How does Square Terminal offline mode work?',
    a: 'Enable offline mode in the Square app before entering a dead zone. Square Terminal stores the card data locally and processes the payment when you reconnect within 24 hours. Square assumes the risk if a card is later declined — the merchant is not liable for offline declines.',
  },
  {
    q: 'Does Square Terminal need WiFi?',
    a: 'Yes — Square Terminal requires WiFi or Ethernet for connected payments. It has no built-in SIM card. In areas without WiFi, you need a phone hotspot or offline mode. This is the main limitation versus Zeller Terminal 1 which includes an Optus SIM.',
  },
  {
    q: 'How much does Square Terminal cost per month?',
    a: 'No monthly fee. You pay 1.6% on in-person payments only when you take them. The hardware is $329 outright with no ongoing rental. Invoice and remote payments are 2.2%.',
  },
  {
    q: 'How does Square Terminal compare to Zeller Terminal 1?',
    a: 'Square: 1.6% rate, $329 hardware, no SIM, next-day settlement, offline mode. Zeller: 1.4% rate, $99 hardware, SIM $15/mo, same-day settlement, no offline mode. Zeller is better for most daily use. Square is better for zero-signal job sites.',
  },
  {
    q: 'Does Square settle same day?',
    a: 'No — Square\'s standard settlement is next business day to your nominated bank account. Zeller settles same-day to a Zeller Transaction Account, which is the key advantage for tradies who need to purchase parts or pay suppliers the same day as the job.',
  },
  {
    q: 'Can I use both Square and Zeller?',
    a: 'Yes — they\'re separate merchant accounts but you can run both simultaneously. Use Zeller as your primary terminal for the lower rate and SIM connectivity, and carry Square for dead-zone jobs. There\'s no monthly fee on Square when you\'re not actively using it.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Square Terminal Review (2026) — Is It Worth It for Australian Tradies?',
    description: 'Independent review of the Square Terminal for Australian tradies. Rate: 1.6%. Hardware: $329. Best-in-class offline mode. Is it worth the premium over Zeller?',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-02-17',
    dateModified: '2026-03-31',
    author: {
      '@type': 'Organization',
      name: 'TradiePay AU',
      url: SITE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'TradiePay AU',
      url: SITE,
    },
    url: `${SITE}/blog/square-terminal-review-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Square Terminal Review (2026) — Is It Worth It for Australian Tradies?', item: `${SITE}/blog/square-terminal-review-2026` },
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

export default function SquareTerminalReviewPost() {
  return (
    <>
      <Meta
        title="Square Terminal Review (2026) — Is It Worth It for Australian Tradies?"
        description="Independent review of the Square Terminal for Australian tradies. Rate: 1.6%. Hardware: $329. Best-in-class offline mode. Is it worth the premium over Zeller?"
        canonical="/blog/square-terminal-review-2026"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=1200&h=630&fit=crop&crop=center&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=900&h=560&fit=crop&crop=center&q=80"
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
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Review</span>
            <span>·</span>
            <span>17 Feb 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            Square Terminal Review (2026) — Is It Worth It for Australian Tradies?
          </h1>
          <p className="hero-sub">
            $329 hardware, 1.6% rate, best-in-class offline mode. Here's an honest look at when Square Terminal makes sense — and when it doesn't.
          </p>
        </div>
      </header>

      {/* Section 1: Quick verdict */}
      <section className="section container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Quick verdict</h2>
          <div className="infobox">
            Square Terminal is the right choice for one specific scenario: job sites with no mobile signal. Its offline mode is genuinely unique — no other terminal in Australia matches it. For everything else, <Link to="/providers/zeller" className="text-brand-blue hover:underline font-medium">Zeller Terminal 1</Link>'s lower rate and SIM plan win.
          </div>
        </motion.div>
      </section>

      {/* Section 2: Pricing breakdown */}
      <section className="section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            Pricing breakdown
          </motion.h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />
          <p className="text-xs text-slate-500 mt-3">Rates current as of March 2026. No monthly fee applies to the standard Square account.</p>
        </div>
      </section>

      {/* Section 3: The offline mode — what it actually does */}
      <section className="section container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The offline mode — what it actually does</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Square Terminal stores card data locally when there's no internet connection and processes the transactions when you reconnect — within a 24-hour window. Critically, Square assumes the decline risk on offline transactions. If a card is later declined after you go back online, Square wears that loss — not you.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            To use it: enable offline mode in the Square app before entering the dead zone. The device will prompt you to confirm. Once active, tap and chip payments are stored locally. Swipe payments and some international card types are not accepted in offline mode — Square is conservative about which transactions it will back.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Square recommends offline mode as a fallback, not for routine use. In practice, tradies who use it do so for specific known sites: switchboard rooms in large commercial buildings, underground drainage and stormwater work, basement carparks in CBD buildings, and any location inside thick reinforced concrete structures that attenuates mobile signals.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                heading: 'Electricians',
                body: 'Switchboard rooms in commercial buildings, underground cable routes, plant rooms. These are common zero-signal environments for electrical contractors.',
              },
              {
                heading: 'Plumbers',
                body: 'Underground sewer and stormwater connections, drainage work in deep excavations. The further underground, the less likely a mobile signal will penetrate.',
              },
              {
                heading: 'Any trade in concrete structures',
                body: 'Basement carparks, tunnel infrastructure, large concrete tilt-slab warehouses. Dense construction materials absorb mobile signals significantly.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="lg-light rounded-2xl p-5"
              >
                <h3 className="font-bold text-brand-dark mb-2">{item.heading}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 4: Where Square loses to Zeller */}
      <section className="section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            Where Square loses to Zeller
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                heading: 'Rate',
                body: '1.6% vs Zeller\'s 1.4%. On $10,000/month in card volume that\'s $20 more per month — $240/year — for no additional benefit on above-ground jobs.',
              },
              {
                heading: 'No SIM card',
                body: 'Square Terminal has no built-in SIM. Connected payments require customer WiFi, a hotspot from your phone, or an Ethernet connection. This is the biggest practical friction point on job sites — and the main reason most tradies choose Zeller Terminal 1 (which includes an Optus SIM for $15/month) as their primary device.',
              },
              {
                heading: 'Settlement speed',
                body: 'Square settles next business day to your nominated bank account. Zeller settles same-day to a Zeller Transaction Account. For tradies buying materials the same afternoon, this is a real difference.',
              },
              {
                heading: 'Hardware cost',
                body: '$329 for the Square Terminal versus $99 for Zeller Terminal 1. The $230 difference buys more than two years of Zeller SIM plan. Square\'s hardware cost is the highest of any major Australian flat-rate provider.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="lg-light rounded-2xl p-5"
              >
                <h3 className="font-bold text-brand-dark mb-2">{item.heading}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: The two-device strategy */}
      <section className="section container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The two-device strategy</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            The practical setup for tradies who work across varied sites: Zeller Terminal 1 as your primary device ($99 + $15/mo SIM) for all standard jobs at 1.4% with same-day settlement and SIM connectivity. Square Terminal as your backup ($329, no monthly fee) stored in the van for dead-zone jobs where Optus signal doesn't reach.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            This setup makes the most sense for electricians and plumbers, where underground or concrete-shielded environments are a regular part of the job. For most other trades — builders, carpenters, painters, landscapers — the Zeller SIM covers essentially every site you'll work on, and the Square backup stays unused.
          </p>
          <div className="lg-light rounded-2xl p-5 mb-6">
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-xs text-slate-500 mb-1">Total hardware outlay</div>
                <div className="text-2xl font-bold text-brand-dark">$428</div>
                <div className="text-xs text-slate-500 mt-0.5">$99 Zeller + $329 Square</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">Ongoing monthly cost</div>
                <div className="text-2xl font-bold text-brand-dark">$15</div>
                <div className="text-xs text-slate-500 mt-0.5">Zeller SIM only. Square: $0/mo.</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">Primary rate (most jobs)</div>
                <div className="text-2xl font-bold text-green-700">1.4%</div>
                <div className="text-xs text-slate-500 mt-0.5">Zeller rate on connected jobs</div>
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Square charges no monthly fee — you're not paying anything to keep the device in your van between uses. The $329 hardware cost is the only Square outlay.
          </p>
        </motion.div>
      </section>

      {/* Section 6: Real cost comparison */}
      <section className="section-alt">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Real cost at $8,000/month</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              A tradie processing $8,000/month in card payments on each provider.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {[
              {
                provider: 'Square Terminal',
                processing: '$128',
                extra: '$0',
                total: '$128/month',
                note: '1.6% × $8,000 = $128. No SIM or monthly fee.',
              },
              {
                provider: 'Zeller Terminal 1 + SIM',
                processing: '$112',
                extra: '$15 SIM',
                total: '$127/month',
                highlight: true,
                note: '1.4% × $8,000 = $112. SIM plan $15. Total $127.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.1 }}
                className="lg-light rounded-2xl p-5"
              >
                <div className="text-sm font-semibold text-slate-500 mb-3">{item.provider}</div>
                <div className="flex gap-6 mb-3">
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Processing</div>
                    <div className="text-xl font-bold text-brand-dark">{item.processing}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Other</div>
                    <div className="text-xl font-bold text-brand-dark">{item.extra}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Total</div>
                    <div className={`text-xl font-bold ${item.highlight ? 'text-green-700' : 'text-slate-700'}`}>{item.total}</div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{item.note}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            At $8,000/month the difference is $1/month — nearly identical total cost. But Zeller includes SIM connectivity and same-day settlement. Square only wins on this comparison if you genuinely need offline capability. At higher volumes, Zeller's rate advantage grows.
          </p>
        </div>
      </section>

      {/* Verdict CTA */}
      <section className="section container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Verdict</h2>
          <div className="infobox mb-6">
            Square Terminal earns its place in the toolkit — but only for tradies who regularly face zero-signal environments. For everyone else, Zeller Terminal 1 wins on rate, connectivity, settlement speed, and hardware cost. If you're unsure, start with Zeller. Add Square when you hit a job site where it can't connect.
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/providers/square"
              className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-600 transition-colors"
            >
              Full Square review →
            </Link>
            <Link
              to="/compare/zeller-vs-square"
              className="inline-flex items-center gap-2 border border-brand-blue text-brand-blue font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Zeller vs Square comparison
            </Link>
          </div>
        </motion.div>
      </section>

      <FaqSection items={faqs} title="Square Terminal — common questions" />
    </>
  )
}
