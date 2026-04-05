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
  { label: 'Stripe Terminal Review (2026) — Best for Invoicing, Priciest In Person' },
]

const comparisonHeaders = ['', 'Cost']
const comparisonRows = [
  { cells: ['Hardware (BBPOS WisePad 3)', '$89 ex GST / $97.90 incl GST'] },
  { cells: ['SIM plan', 'None (Bluetooth to phone only)'] },
  {
    highlight: true,
    cells: ['In-person rate', '1.7% + $0.10 per transaction'],
  },
  { cells: ['Tap to Pay on phone (surcharge)', '+$0.15 per authorisation'] },
  { cells: ['Online / payment links', '1.7% + $0.30'] },
  { cells: ['Stripe Invoicing (bank transfer)', '0.8%'] },
  { cells: ['Monthly account fee', '$0'] },
  { cells: ['Contract', 'None'] },
  { cells: ['Settlement', '2 business days (no same-day option)'] },
  { cells: ['Offline mode', 'No'] },
]

const faqs = [
  {
    q: 'Is Stripe Terminal good for Australian tradies?',
    a: 'It depends on what you need. For tradies who take most payments digitally — invoices, online deposits, recurring billing — Stripe is excellent. For tradies who primarily take in-person payments on site, Stripe\'s 1.7% + $0.10 rate is the most expensive flat rate available. Zeller Terminal 1 at 1.4% with a built-in SIM is cheaper for on-site work.',
  },
  {
    q: 'How much does Stripe charge per transaction in Australia?',
    a: 'In-person: 1.7% + $0.10 per transaction. Online and payment links: 1.7% + $0.30. Stripe Invoicing paid by bank transfer: 0.8% (no per-transaction fixed fee). The $0.10 fixed fee per in-person transaction is the main cost disadvantage — it makes small jobs proportionally expensive.',
  },
  {
    q: 'What is the Stripe BBPOS WisePad 3?',
    a: 'The BBPOS WisePad 3 is Stripe\'s card reader for Australia. It connects to your phone via Bluetooth, not WiFi or SIM. The phone provides the internet connection. It costs $89 ex GST ($97.90 incl GST). There is no built-in connectivity — the reader is purely a card input device that pairs with the Stripe Terminal app on your phone.',
  },
  {
    q: 'Does Stripe settle same day?',
    a: 'No — Stripe\'s standard settlement is 2 business days. There is no same-day or next-day settlement option for Australian merchants. Zeller settles same-day to a Zeller Transaction Account. If cash flow timing matters — buying materials the same day as the job — Stripe\'s 2-day settlement is a real limitation.',
  },
  {
    q: 'What is Stripe Invoicing and is it worth using?',
    a: 'Stripe Invoicing is Stripe\'s hosted invoice product. When a customer pays via bank transfer, the fee is 0.8% — significantly cheaper than any card rate. For tradies who regularly invoice commercial clients willing to pay by bank transfer, this is genuinely compelling. The invoice link is sent via email, and Stripe handles the payment page.',
  },
  {
    q: 'How does Stripe Terminal compare to Zeller?',
    a: 'Stripe in-person: 1.7% + $0.10, no SIM, 2-day settlement. Zeller in-person: 1.4%, Optus SIM ($15/mo), same-day settlement. For in-person work Zeller is cheaper in almost every scenario. Stripe wins for digital payments: invoicing (0.8% bank transfer), online bookings, website integration, and international customers.',
  },
  {
    q: 'Does Stripe work offline?',
    a: 'No — Stripe Terminal requires an active internet connection via your phone. There is no offline mode. The BBPOS WisePad 3 is Bluetooth-only; your phone must have internet connectivity to process payments. For zero-signal environments, Square Terminal\'s offline mode is the only option in the Australian market.',
  },
  {
    q: 'Can I use Stripe with Xero or MYOB?',
    a: 'Yes — Stripe has direct integrations with Xero and MYOB, as well as most major accounting platforms. Stripe also integrates with ServiceM8 and several trade management tools. The developer API is the most capable in the market for custom integrations.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Stripe Terminal Review (2026) — Best for Invoicing, Priciest In Person',
    description: 'Independent review of Stripe Terminal for Australian tradies. In-person rate: 1.7% + $0.10. Hardware: $97.90. Best for digital invoicing and online payments — but most expensive for on-site transactions.',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
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
    url: `${SITE}/blog/stripe-terminal-review-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Stripe Terminal Review (2026) — Best for Invoicing, Priciest In Person', item: `${SITE}/blog/stripe-terminal-review-2026` },
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

export default function StripeTerminalReviewPost() {
  return (
    <>
      <Meta
        title="Stripe Terminal Review (2026) — Best for Invoicing, Priciest In Person"
        description="Independent review of Stripe Terminal for Australian tradies. In-person rate: 1.7% + $0.10. Hardware: $97.90. Best for digital invoicing and online payments — but most expensive for on-site transactions."
        canonical="/blog/stripe-terminal-review-2026"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1200&h=630&fit=crop&crop=center&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=900&h=560&fit=crop&crop=center&q=80"
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
            <span>2 Apr 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            Stripe Terminal Review (2026) — Best for Invoicing, Priciest In Person
          </h1>
          <p className="hero-sub">
            Stripe's developer tools are world-class. Its invoicing product is genuinely strong. But at 1.7% + $0.10 in person with no SIM and 2-day settlement, it's the most expensive option for on-site work.
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
            Stripe is the right choice for tradies who invoice digitally, take online deposits, or need recurring billing. Its invoicing product (0.8% for bank transfer) and developer ecosystem are the best available. For tradies whose work is primarily in-person on-site payments, <Link to="/providers/zeller" className="text-brand-blue hover:underline font-medium">Zeller Terminal 1</Link> is cheaper and more practical — lower rate, built-in SIM, same-day settlement.
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
          <p className="text-xs text-slate-500 mt-3">Rates current as of April 2026. Hardware price includes GST at $97.90. Stripe Invoicing bank transfer rate of 0.8% applies only to invoices paid via bank transfer through Stripe's hosted invoice page.</p>
        </div>
      </section>

      {/* Section 3: Who Stripe is actually for */}
      <section className="section container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Who Stripe is actually for</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            Stripe is not primarily an EFTPOS terminal company — it's a payments platform that happens to offer a card reader. That distinction matters. The tradies who benefit most from Stripe are those whose business has a significant digital payment component.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                heading: 'Website and online bookings',
                body: 'If you have a website where customers book jobs and pay deposits online, Stripe is the default choice. Its checkout and payment elements integrate directly into websites. No other provider in this market matches Stripe\'s web integration capability.',
              },
              {
                heading: 'Digital invoicing',
                body: 'Stripe Invoicing sends a hosted invoice link via email. The customer clicks, pays by card or bank transfer. At 0.8% for bank transfers, this is the cheapest way to invoice in Australia. For tradies sending regular invoices to commercial clients, this alone can justify Stripe.',
              },
              {
                heading: 'Recurring billing',
                body: 'Maintenance contracts, regular service agreements, subscription-based work — Stripe Billing handles automated recurring charges natively. No other EFTPOS provider in this comparison has this capability.',
              },
              {
                heading: 'Mixed AU and international clients',
                body: 'Stripe accepts international cards natively. For tradies working in tourism, hospitality fitouts, or with overseas clients, Stripe handles multi-currency payments without additional configuration.',
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

      {/* Section 4: Where Stripe loses on the job site */}
      <section className="section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            Where Stripe loses on the job site
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                heading: 'Most expensive in-person rate',
                body: '1.7% + $0.10 per transaction. The $0.10 fixed fee is particularly costly on small jobs. A $150 callout fee costs $2.65 to process on Stripe; the same payment on Zeller costs $2.10. At $8,000/month in volume that gap adds up significantly.',
              },
              {
                heading: 'No built-in SIM',
                body: 'The BBPOS WisePad 3 is Bluetooth only — it pairs with your phone and uses your phone\'s internet connection. On job sites without WiFi, your phone data is the only connection. Zeller Terminal 1 includes an Optus SIM that operates independently of your phone.',
              },
              {
                heading: '2-day settlement, no exceptions',
                body: 'Stripe settles funds to your bank account in 2 business days. There is no same-day or next-day option in Australia. Zeller settles same-day to a Zeller Transaction Account. For tradies who need to purchase materials the afternoon of a job, this is a practical limitation.',
              },
              {
                heading: 'No offline mode',
                body: 'No internet connection means no payment. Stripe has no offline capability. For job sites with poor signal, your only options are phone hotspot (which also needs signal) or a different terminal entirely.',
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

      {/* Section 5: Stripe Invoicing vs terminal */}
      <section className="section container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Stripe Invoicing vs the terminal</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Stripe's best product for many tradies isn't the card reader — it's Stripe Invoicing. When a customer pays a Stripe invoice by bank transfer, the fee is 0.8%. That's less than half the terminal rate.
          </p>
          <p className="text-slate-600 leading-relaxed mb-5">
            The invoice flow: you create an invoice in Stripe (or your accounting software connected to Stripe), send the link via email, the customer clicks and pays by card or bank transfer through Stripe's hosted page. Stripe Invoicing also supports automated payment reminders, which reduces the chasing-unpaid-invoices problem that most tradies deal with.
          </p>
          <div className="lg-light rounded-2xl p-5 mb-5">
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-xs text-slate-500 mb-1">Terminal — card in person</div>
                <div className="text-2xl font-bold text-brand-dark">1.7% + $0.10</div>
                <div className="text-xs text-slate-500 mt-0.5">Per transaction</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">Invoicing — bank transfer</div>
                <div className="text-2xl font-bold text-green-700">0.8%</div>
                <div className="text-xs text-slate-500 mt-0.5">No fixed fee</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">Saving on $1,000 invoice</div>
                <div className="text-2xl font-bold text-green-700">$9</div>
                <div className="text-xs text-slate-500 mt-0.5">vs card terminal for same job</div>
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            The catch: the customer has to agree to pay by bank transfer. For residential customers, this is a harder sell. For commercial clients — builders, property managers, strata companies — bank transfer is routine and the 0.8% rate makes Stripe Invoicing genuinely competitive.
          </p>
        </motion.div>
      </section>

      {/* Section 6: Real cost per month vs Zeller */}
      <section className="section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            Real cost at $8,000/month in-person
          </motion.h2>
          <p className="text-slate-600 mb-6">
            A tradie processing $8,000/month in on-site card payments, comparing Stripe against Zeller Terminal 1 with SIM. Assumes average transaction of $300 (approx 27 transactions/month).
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {[
              {
                provider: 'Stripe (BBPOS WisePad 3)',
                processing: '$139',
                extra: '$0',
                total: '$139/month',
                highlight: false,
                note: '1.7% × $8,000 = $136 + ($0.10 × 27 transactions) = $2.70. Total approx $139. No SIM or monthly fee.',
              },
              {
                provider: 'Zeller Terminal 1 + SIM',
                processing: '$112',
                extra: '$15 SIM',
                total: '$127/month',
                highlight: true,
                note: '1.4% × $8,000 = $112. SIM plan $15. Total $127. Saves $12/month vs Stripe at this volume.',
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
            Stripe is $12/month more expensive at this volume for in-person work — roughly $144/year. That gap widens with higher transaction counts because the $0.10 fixed fee accumulates. The comparison flips if a significant portion of your revenue comes through Stripe Invoicing at 0.8% bank transfer — in that scenario, Stripe's blended cost can be lower overall.
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
            Stripe earns its place in a tradie's toolkit — but for specific work types. If you invoice businesses, take online deposits, or have a website with a booking flow, Stripe's ecosystem is unmatched. If most of your revenue is tap-and-go at the job site, <Link to="/providers/zeller" className="text-brand-blue hover:underline font-medium">Zeller Terminal 1</Link> or <Link to="/providers/square" className="text-brand-blue hover:underline font-medium">Square Terminal</Link> will cost you less month to month. Many tradies run both: Zeller for on-site payments, Stripe for invoicing and online bookings.
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/providers/stripe"
              className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-600 transition-colors"
            >
              Full Stripe review →
            </Link>
            <Link
              to="/compare/zeller-vs-stripe"
              className="inline-flex items-center gap-2 border border-brand-blue text-brand-blue font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Zeller vs Stripe comparison
            </Link>
          </div>
        </motion.div>
      </section>

      <FaqSection items={faqs} title="Stripe Terminal — common questions" />
      <RelatedLinks slug="stripe" type="provider" />
    </>
  )
}
