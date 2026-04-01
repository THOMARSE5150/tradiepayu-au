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
  { label: 'Zeller Terminal 1 Review (2026) — The Best EFTPOS for Australian Tradies?' },
]

const comparisonHeaders = ['', 'Cost']
const comparisonRows = [
  { cells: ['Terminal hardware', '$99 (one-off)'] },
  { cells: ['SIM plan (Optus)', '$15/month'] },
  {
    highlight: true,
    cells: ['In-person rate', '1.4%'],
  },
  { cells: ['Online / payment links', '1.7% + $0.25'] },
  { cells: ['MOTO (phone payments)', '1.75% + $0.25'] },
  { cells: ['Monthly account fee', '$0'] },
  { cells: ['Contract', 'None'] },
]

const faqs = [
  {
    q: 'Is Zeller Terminal 1 the best EFTPOS terminal in Australia?',
    a: 'For most tradies, yes. Lowest in-person rate (1.4%), SIM connectivity, same-day settlement, no monthly fee, no contract. The only scenario where it\'s not the top choice is genuine zero-signal environments — underground, deep basements — where Square Terminal\'s offline mode is the only option.',
  },
  {
    q: 'How much does Zeller Terminal 1 cost?',
    a: '$99 outright for the hardware. The Optus SIM plan is $15/month. There is no monthly fee for the Zeller account itself. The only ongoing cost is the SIM ($15/mo) and the processing fee (1.4% of each transaction).',
  },
  {
    q: 'Does Zeller Terminal 1 need WiFi?',
    a: 'No — Zeller Terminal 1 includes a built-in Optus SIM. It connects via mobile data independently of any site WiFi. You can take payments in locations without any WiFi connection as long as there is Optus mobile signal.',
  },
  {
    q: 'Does Zeller have same-day settlement?',
    a: 'Yes — payments settle to a Zeller Transaction Account the same business day. If you process a payment at 2pm, funds are available in your Zeller account that evening. Settlement to an external bank account is next business day.',
  },
  {
    q: 'What is Zeller Terminal 1\'s in-person rate?',
    a: '1.4% for all in-person tap, chip, and swipe transactions. This is the lowest published flat rate from any major Australian EFTPOS provider. There is no additional fixed fee per transaction for in-person payments.',
  },
  {
    q: 'Does Zeller Terminal 1 work offline?',
    a: 'No — Zeller Terminal 1 requires mobile or WiFi connectivity to process payments. It does not have an offline mode. For environments with no signal (underground, large concrete structures), Square Terminal\'s offline mode is the alternative.',
  },
  {
    q: 'Can I use Zeller Terminal 1 for invoicing?',
    a: 'Yes — Zeller supports payment links (sent via SMS or email) at 1.7% + $0.25, and a Virtual Terminal for phone (MOTO) payments at 1.75% + $0.25. For high-volume invoice billing, Stripe invoicing is cheaper (0.8% for bank transfer).',
  },
  {
    q: 'How does Zeller Terminal 1 compare to Square Terminal?',
    a: 'Zeller: 1.4%, $99 hardware, SIM included ($15/mo), same-day settlement, no offline mode. Square: 1.6%, $329 hardware, no SIM, next-day settlement, offline mode. For most jobs, Zeller wins on rate, connectivity, and cost. Square wins specifically for zero-signal environments.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Zeller Terminal 1 Review (2026) — The Best EFTPOS for Australian Tradies?',
    description: 'Independent review of the Zeller Terminal 1 for Australian tradies. Rate: 1.4%. Hardware: $99. SIM plan: $15/mo. Is it the best EFTPOS terminal in Australia?',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-02-10',
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
    url: `${SITE}/blog/zeller-terminal-1-review-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Zeller Terminal 1 Review (2026) — The Best EFTPOS for Australian Tradies?', item: `${SITE}/blog/zeller-terminal-1-review-2026` },
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

export default function ZellerTerminalReviewPost() {
  return (
    <>
      <Meta
        title="Zeller Terminal 1 Review (2026) — The Best EFTPOS for Australian Tradies?"
        description="Independent review of the Zeller Terminal 1 for Australian tradies. Rate: 1.4%. Hardware: $99. SIM plan: $15/mo. Is it the best EFTPOS terminal in Australia?"
        canonical="/blog/zeller-terminal-1-review-2026"
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
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Review</span>
            <span>·</span>
            <span>10 Feb 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            Zeller Terminal 1 Review (2026) — The Best EFTPOS for Australian Tradies?
          </h1>
          <p className="hero-sub">
            Independent review of Zeller Terminal 1: 1.4% rate, $99 hardware, built-in Optus SIM, same-day settlement. Here\'s what tradies actually need to know.
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
            Zeller Terminal 1 with SIM is the top pick for most Australian tradies. 1.4% in-person rate (lowest available), $99 hardware, $15/mo SIM plan, same-day settlement. The only meaningful limitation: no offline mode.
          </div>
        </motion.div>
      </section>

      {/* Section 2: What\'s in the box */}
      <section className="section-alt">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-brand-dark mb-4">What\'s in the box</h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              The Zeller Terminal 1 ships within 1–3 business days of account approval. In the box you get everything you need to start taking payments immediately on site.
            </p>
            <ul className="space-y-3 max-w-lg">
              {[
                { label: 'Terminal 1 device', detail: 'Touchscreen display with built-in thermal receipt printer' },
                { label: 'Optus SIM card', detail: 'Pre-installed — connect via mobile data from day one' },
                { label: 'Charging dock', detail: 'Desktop dock for overnight charging between jobs' },
                { label: 'Power adapter', detail: 'Australian plug included' },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="flex gap-3 lg-light rounded-xl p-4"
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-brand-blue mt-2" />
                  <div>
                    <span className="font-semibold text-brand-dark text-sm">{item.label}</span>
                    <span className="text-slate-500 text-sm"> — {item.detail}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Pricing breakdown */}
      <section className="section container-page">
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
        <p className="text-xs text-slate-500 mt-3">Rates current as of April 2026. The SIM plan is optional — required only if you want cellular connectivity independent of WiFi.</p>
      </section>

      {/* Section 4: What tradies actually care about */}
      <section className="section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            What tradies actually care about
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                heading: 'SIM connectivity',
                body: 'Optus mobile data — no customer WiFi needed. Works on most metro and regional job sites. The SIM removes the single biggest failure point for on-site payments.',
              },
              {
                heading: 'Same-day settlement',
                body: 'Payments settle to your Zeller Transaction Account same business day. Next business day to an external bank. For tradies buying parts after a job, this matters.',
              },
              {
                heading: 'Receipt printer',
                body: 'Built-in thermal printer. Customers who want a paper receipt — older clients, commercial accounts — get one without friction.',
              },
              {
                heading: 'No lock-in',
                body: 'No contract, no minimum term. Cancel anytime. Hardware is purchased outright — you own it.',
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

      {/* Section 5: The one thing Square does better */}
      <section className="section container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The one thing Square does better</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            <Link to="/providers/square" className="text-brand-blue hover:underline font-medium">Square Terminal</Link> has an offline mode for genuine zero-signal environments — underground drainage, deep basements, large concrete structures where even Optus mobile data can\'t reach. Zeller Terminal 1 does not have offline mode. If there is no mobile or WiFi signal, Zeller cannot process a payment.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            For most tradies, this is not a real-world limitation. Optus 4G reaches the vast majority of residential and commercial job sites in Australia. But if your work regularly takes you underground — stormwater, sewer, communications tunnels, deep car park basements — Square Terminal\'s offline capability is the only solution in this market.
          </p>
          <div className="lg-light rounded-2xl p-5">
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong className="text-brand-dark">Practical recommendation:</strong> If you work underground regularly, carry a Square Terminal as backup ($329, no monthly fee). Use Zeller as your primary device for the lower rate and SIM convenience. Square stays in the van until you need it. High-volume operators ($20k+/month) should also request a quote from <Link to="/providers/tyro" className="text-brand-blue hover:underline font-medium">Tyro</Link> — their negotiated rates can compete with Zeller\'s at volume.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 6: Real cost per month example */}
      <section className="section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            Real cost per month
          </motion.h2>
          <p className="text-slate-600 mb-6">
            A tradie doing $8,000/month in card payments, comparing Zeller Terminal 1 with SIM against Square Terminal.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {[
              {
                provider: 'Zeller Terminal 1 + SIM',
                processing: '$112',
                sim: '$15',
                total: '$127/month',
                highlight: true,
                note: '1.4% × $8,000 = $112. SIM plan $15. Total $127.',
              },
              {
                provider: 'Square Terminal',
                processing: '$128',
                sim: '$0',
                total: '$128/month',
                highlight: false,
                note: '1.6% × $8,000 = $128. No SIM cost. Total $128.',
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
                    <div className="text-xs text-slate-500 mb-0.5">SIM / extras</div>
                    <div className="text-xl font-bold text-brand-dark">{item.sim}</div>
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
            At $8,000/month, Zeller is $1/month cheaper than Square — virtually identical total cost. But Zeller includes a built-in SIM (no customer WiFi dependency) and same-day settlement. The rate advantage compounds at higher volumes: at $15,000/month, Zeller saves $15/month after the SIM, or $180/year.
          </p>
        </div>
      </section>

      {/* Section 7: Verdict */}
      <section className="section container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Verdict</h2>
          <div className="infobox mb-6">
            For 90% of Australian tradies, Zeller Terminal 1 with SIM is the right choice. Lowest rate, SIM connectivity, same-day settlement, no contract. The only scenario where it falls short is genuine zero-signal underground work — and Square Terminal\'s offline mode handles that.
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/providers/zeller"
              className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-600 transition-colors"
            >
              Full Zeller review →
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

      <FaqSection items={faqs} title="Zeller Terminal 1 — common questions" />
      <RelatedLinks slug="zeller" type="provider" />
    </>
  )
}
