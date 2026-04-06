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
  { label: 'Zeller vs Square: Which EFTPOS Terminal is Better for Tradies? (2026)' },
]

const comparisonHeaders = ['', 'Zeller Terminal 1', 'Square Terminal']
const comparisonRows = [
  {
    highlight: true,
    cells: ['In-person rate', '1.4%', '1.6%'],
  },
  { cells: ['Hardware cost', '$99', '$329'] },
  { cells: ['SIM card', '✓ $15/mo', '✗ WiFi only'] },
  { cells: ['Offline mode', '✗', '✓'] },
  { cells: ['Settlement', 'Same day', 'Next business day'] },
  { cells: ['Monthly fee', '$0', '$0'] },
]

const faqs = [
  {
    q: 'Is Zeller better than Square for tradies?',
    a: 'Yes, for most scenarios. Zeller\'s 1.4% rate is lower than Square\'s 1.6%, the hardware costs $99 versus $329, and settlement arrives same day rather than next business day. The built-in SIM plan means no need for customer WiFi. Square beats Zeller in exactly one scenario: zero-signal environments where offline payment capability is the only option.',
  },
  {
    q: 'Does Zeller work without WiFi?',
    a: 'Yes — Zeller Terminal 1 with the SIM plan ($15/mo) connects via Optus 4G mobile data. You do not need the customer\'s WiFi password and you are not dependent on a hotspot. Coverage is the same as Optus mobile coverage across Australia. In areas outside Optus coverage you will need to fall back to WiFi or use Square\'s offline mode.',
  },
  {
    q: 'Does Square Terminal work offline?',
    a: 'Yes — Square Terminal supports offline payments. When there is no internet connection, cards are stored locally and processed when the device reconnects within 24 hours. There is a risk of later decline — some card types have higher decline rates on deferred offline transactions. Square recommends offline mode only as a fallback, not for routine use.',
  },
  {
    q: 'What is the difference in fees between Zeller and Square?',
    a: 'Zeller charges 1.4% in-person; Square charges 1.6%. On a $500 job: Zeller $7.00, Square $8.00. On $10,000/month in card volume: Zeller $140, Square $160 — a $20/month difference. Over a year that\'s $240 in savings, before factoring in the $180/year Zeller SIM cost. Above roughly $9,000/month in card volume, Zeller is cheaper even with the SIM.',
  },
  {
    q: 'Can I use both Zeller and Square on the same business?',
    a: 'Yes — they operate as entirely separate merchant accounts. You can run both under the same ABN without issue. Payments from each device settle to their respective accounts: Zeller settles to a Zeller Transaction Account; Square settles to your nominated bank account. Many tradies run Zeller as their day-to-day terminal and keep a Square Terminal specifically for known dead-zone job sites.',
  },
  {
    q: 'Which settles faster, Zeller or Square?',
    a: 'Zeller settles same day to a Zeller Transaction Account. Square settles next business day to your nominated Australian bank account. For tradies who take a payment in the morning and need to purchase materials the same afternoon, Zeller\'s same-day settlement is the deciding factor. Same-day settlement is available on Zeller at no additional cost — it is the default behaviour.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Zeller vs Square: Which EFTPOS Terminal is Better for Tradies? (2026)',
    description: 'Rate, SIM card, offline mode, and settlement speed. A straight head-to-head for Australian tradies choosing between Zeller Terminal 1 and Square Terminal.',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-01-22',
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
    url: `${SITE}/blog/zeller-vs-square-eftpos-tradies`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Zeller vs Square: Which EFTPOS Terminal is Better for Tradies? (2026)', item: `${SITE}/blog/zeller-vs-square-eftpos-tradies` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'EFTPOS Terminal Comparison',
    itemListElement: [{"@type":"ListItem","position":1,"name":"Zeller Terminal 1"},{"@type":"ListItem","position":2,"name":"Square Terminal"}],
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

export default function ZellerVsSquarePost() {
  return (
    <>
      <Meta
        title="Zeller vs Square: Which EFTPOS Terminal is Better for Tradies? (2026)"
        description="Rate, SIM card, offline mode, and settlement speed. A straight head-to-head for Australian tradies choosing between Zeller Terminal 1 and Square Terminal."
        canonical="/blog/zeller-vs-square-eftpos-tradies"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&h=630&fit=crop&crop=center&q=80"
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
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Comparison</span>
            <span>·</span>
            <span>22 Jan 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            Zeller vs Square: Which EFTPOS Terminal is Better for Tradies? (2026)
          </h1>
          <p className="hero-sub">
            Rate, SIM card, offline mode, settlement speed. A straight head-to-head for Australian tradies choosing between Zeller Terminal 1 and Square Terminal.
          </p>
        </div>
      </header>

      {/* Section 1: Quick answer */}
      <section className="section container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Quick answer</h2>
          <div className="infobox">
            For most tradies: Zeller. Lower rate, lower hardware cost, built-in SIM, same-day settlement. For dead-zone work — underground, thick concrete, no signal — add a Square Terminal as backup.
          </div>
        </motion.div>
      </section>

      {/* Section 2: Head-to-head comparison */}
      <section className="section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            Head-to-head comparison
          </motion.h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />
        </div>
      </section>

      {/* Section 3: Rate difference — real money */}
      <section className="section container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Rate difference — real money</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            A 0.2% rate difference sounds small. Over a month of trade work it becomes real money. <Link to="/providers/zeller" className="text-brand-blue hover:underline font-medium">Zeller Terminal 1</Link> charges 1.4% in-person; <Link to="/providers/square" className="text-brand-blue hover:underline font-medium">Square Terminal</Link> charges 1.6%.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            {
              volume: '$8,000/month',
              zeller: '$112',
              square: '$128',
              saving: '$16/mo · $192/year',
              note: 'Add Zeller SIM: $15/mo. Net saving at $8k: $1/mo. Barely worth it at this volume.',
            },
            {
              volume: '$15,000/month',
              zeller: '$210',
              square: '$240',
              saving: '$30/mo · $360/year',
              note: 'Add Zeller SIM: $15/mo. Net saving at $15k: $15/mo · $180/year. Zeller clearly wins.',
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
              <div className="text-sm font-semibold text-slate-500 mb-3">{item.volume}</div>
              <div className="flex gap-6 mb-3">
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Zeller</div>
                  <div className="text-xl font-bold text-green-700">{item.zeller}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Square</div>
                  <div className="text-xl font-bold text-slate-700">{item.square}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Gross saving</div>
                  <div className="text-sm font-semibold text-brand-blue">{item.saving}</div>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{item.note}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          The break-even point for the Zeller SIM plan ($180/year) is approximately $9,000/month in card volume. Above that, Zeller is cheaper than Square even after the SIM. Below it, the difference is marginal — but Zeller's same-day settlement and lower hardware cost still favour it.
        </p>
      </section>

      {/* Section 4: When Square wins */}
      <section className="section-alt">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-brand-dark mb-4">When Square wins</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Square's offline mode is the only real-world advantage it holds over Zeller for tradies, and it is a genuine one. If your work regularly takes you underground — stormwater, sewer, car park basements, telecommunications tunnels — or into buildings with thick concrete shielding mobile signals, Square Terminal is the only device in this market that will take a payment without any connectivity at all.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Cards are stored locally on the device and processed in batch when you reconnect within 24 hours. The acceptance rate for deferred offline transactions is very high for domestic Visa and Mastercard. AMEX and some international cards carry higher risk of later decline in offline mode.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Outside of zero-signal environments, there is no scenario where Square produces a better outcome for a tradie than Zeller. The rate is higher, the hardware costs three times as much, and settlement is a day slower. If your work also involves online invoicing or website payments, see how <Link to="/providers/stripe" className="text-brand-blue hover:underline font-medium">Stripe</Link> compares.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Two-device strategy */}
      <section className="section container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The two-device strategy</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            The practical answer for tradies who work across a range of sites is to carry both. Zeller Terminal 1 as your primary — you use it 95% of the time at 1.4% with same-day settlement. Square Terminal in the van as backup — you pull it out when you go underground or into a dead zone.
          </p>
          <div className="lg-light rounded-2xl p-5 mb-6">
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-xs text-slate-500 mb-1">Total hardware cost</div>
                <div className="text-2xl font-bold text-brand-dark">$428</div>
                <div className="text-xs text-slate-500 mt-0.5">$99 Zeller + $329 Square</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">Ongoing monthly fee</div>
                <div className="text-2xl font-bold text-brand-dark">$15</div>
                <div className="text-xs text-slate-500 mt-0.5">Zeller SIM only. Square: $0/mo.</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">Primary in-person rate</div>
                <div className="text-2xl font-bold text-green-700">1.4%</div>
                <div className="text-xs text-slate-500 mt-0.5">Zeller rate on most jobs</div>
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Square charges no monthly fee — the $329 hardware is the only Square cost. There is no penalty for keeping the device in your toolbox between dead-zone jobs.
          </p>
        </motion.div>
      </section>

      {/* Section 6: Verdict */}
      <section className="section-alt">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Verdict</h2>
            <div className="infobox mb-6">
              Start with Zeller. Add Square if you regularly work in environments with no mobile signal. The $428 combined hardware cost is a one-time outlay — there are no monthly fees on Square, and the Zeller SIM pays for itself above $9,000/month in card volume.
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/compare/zeller-vs-square"
                className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-600 transition-colors"
              >
                Full Zeller vs Square comparison →
              </Link>
              <Link
                to="/providers/zeller"
                className="inline-flex items-center gap-2 border border-brand-blue text-brand-blue font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Zeller review
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FaqSection items={faqs} title="Zeller vs Square — common questions" />
      <RelatedLinks />
    </>
  )
}
