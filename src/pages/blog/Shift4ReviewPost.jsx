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
  { label: 'Shift4 EFTPOS Review (2026) — Zero Merchant Cost: The Real Story' },
]

const comparisonHeaders = ['', 'Cost']
const comparisonRows = [
  { cells: ['Terminal hardware', 'Rental — no upfront purchase'] },
  { cells: ['Monthly terminal rental', 'Quote-dependent (not published)'] },
  { cells: ['SIM / connectivity', 'Built-in mobile connectivity + WiFi'] },
  {
    highlight: true,
    cells: ['Merchant processing rate', '$0 (surcharge passed to customer)'],
  },
  { cells: ['Customer surcharge', 'Cost of acceptance — quote-dependent'] },
  { cells: ['Monthly account fee', 'Part of rental (not published)'] },
  { cells: ['Contract', 'Yes — lock-in term required'] },
  { cells: ['Settlement timing', 'Not publicly specified — ask in writing'] },
  { cells: ['Merchant agreement', 'Not publicly available'] },
]

const faqs = [
  {
    q: 'Is zero-cost EFTPOS legal in Australia?',
    a: 'Yes — surcharging is legal in Australia under ACCC rules. Merchants are permitted to pass on the cost of card acceptance to customers, but the surcharge must not exceed the actual cost of acceptance. The ACCC actively enforces against excessive surcharging. Shift4\'s surcharging model is compliant with this framework when the surcharge equals the merchant\'s cost of acceptance.',
  },
  {
    q: 'What is the surcharge on a Shift4 terminal?',
    a: 'Shift4 does not publish its surcharge rate. It is quote-dependent and based on your card mix and volume. You need to request a quote and ask specifically for the surcharge rate that will appear on your customers\' receipts. This is the rate your customers pay, not you — but it directly affects their experience of doing business with you.',
  },
  {
    q: 'Is Shift4 good for residential tradies?',
    a: 'No — surcharging creates friction with residential customers. Many homeowners push back on card surcharges, particularly on large jobs. Shift4\'s model suits commercial operators who invoice businesses, where surcharging is common and accepted. For residential work — plumbers, electricians, painters doing household jobs — absorbing the processing fee with Zeller\'s 1.4% flat rate avoids the customer friction.',
  },
  {
    q: 'Does Shift4 have a contract?',
    a: 'Yes — Shift4 requires a minimum-term contract. This is unlike Zeller, Square, and Stripe which are all no-contract. The contract term and early termination fee are not published — you need to ask for these in writing before signing. This is one of the main concerns with Shift4\'s transparency.',
  },
  {
    q: 'How does Shift4\'s surcharging compare to Zeller absorbing the fee?',
    a: 'The merchant economics differ fundamentally. On a $500 job: Zeller at 1.4% costs the merchant $7 and the customer pays $500. Shift4 at zero merchant cost means the merchant pays $0 but the customer pays $500 plus the surcharge (e.g. $500 + $6.50 = $506.50 if 1.3%). The customer pays more. For commercial clients who expect surcharging, this is fine. For residential customers, it can create friction and sometimes disputes.',
  },
  {
    q: 'What should I ask Shift4 before signing?',
    a: 'Ask for: the surcharge rate that will appear on customer receipts; the contract term and early termination fee; the settlement timing and which account funds settle to; whether the merchant agreement can be reviewed before signing (ask for the full document, not a summary); and the monthly rental or fixed fee amount.',
  },
  {
    q: 'Who is Shift4 best suited for?',
    a: 'Commercial operators who regularly invoice other businesses — construction subcontractors, large-scale commercial electricians, mechanical contractors — where surcharging is industry-normal and the customer base expects it. Shift4 is less suitable for tradies doing primarily residential work or those who want transparent, no-contract pricing.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Shift4 EFTPOS Review (2026) — Zero Merchant Cost: The Real Story',
    description: 'Independent review of Shift4 EFTPOS for Australian tradies. Zero merchant processing cost via surcharging sounds appealing — but contract lock-in, poor transparency, and residential customer friction are real concerns.',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=630&fit=crop&crop=center&q=80',
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
    url: `${SITE}/blog/shift4-eftpos-review-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Shift4 EFTPOS Review (2026) — Zero Merchant Cost: The Real Story', item: `${SITE}/blog/shift4-eftpos-review-2026` },
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

export default function Shift4ReviewPost() {
  return (
    <>
      <Meta
        title="Shift4 EFTPOS Review (2026) — Zero Merchant Cost: The Real Story"
        description="Independent review of Shift4 EFTPOS for Australian tradies. Zero merchant processing cost via surcharging sounds appealing — but contract lock-in, poor transparency, and residential customer friction are real concerns."
        canonical="/blog/shift4-eftpos-review-2026"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=630&fit=crop&crop=center&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=900&h=560&fit=crop&crop=center&q=80"
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
            <span>7 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            Shift4 EFTPOS Review (2026) — Zero Merchant Cost: The Real Story
          </h1>
          <p className="hero-sub">
            Paying $0 to process card payments sounds like a no-brainer. Here's what that model actually involves — and why it's not the right fit for most tradies.
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
            The zero merchant cost is real — Shift4's surcharging model means you pay nothing to process card payments. But the full picture includes a contract lock-in, undisclosed settlement timing, a merchant agreement that isn't publicly available, and a surcharge that your customers pay. For commercial operators invoicing businesses, this may work. For residential tradies, the customer friction and transparency concerns make <Link to="/providers/zeller" className="text-brand-blue hover:underline font-medium">Zeller Terminal 1</Link> at 1.4% absorbed the more practical choice.
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
          <p className="text-xs text-slate-500 mt-3">Shift4 does not publish its merchant agreement, surcharge rates, terminal rental amounts, or settlement timing publicly. All figures are quote-dependent. Request written documentation of each line item before signing any contract.</p>
        </div>
      </section>

      {/* Section 3: How surcharging actually works */}
      <section className="section container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How surcharging actually works</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Surcharging transfers the card processing fee from the merchant to the customer. Instead of you paying 1.4% (or whatever the merchant rate is), the customer's total increases by that amount when they pay by card.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Under ACCC rules, surcharging is legal in Australia but must not exceed the actual cost of acceptance. The surcharge must be disclosed before payment. It applies to card payments only — cash and bank transfer are not surcharged.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-5">
            {[
              {
                heading: 'Legal',
                body: 'Surcharging is permitted under Australian Consumer Law. ACCC actively monitors and prosecutes excessive surcharging. A compliant surcharge equals the merchant\'s actual cost of processing.',
              },
              {
                heading: 'Disclosed',
                body: 'The surcharge must be shown before the customer confirms payment. On EFTPOS terminals, this appears on the payment screen. Customers can decline and pay another way.',
              },
              {
                heading: 'Card type matters',
                body: 'Visa and Mastercard debit cards are the cheapest to process. Credit cards and Amex carry higher rates. Shift4\'s surcharge reflects whatever card the customer uses, so the amount varies per transaction.',
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
          <div className="lg-light rounded-2xl p-5">
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong className="text-brand-dark">What surcharging looks like on your receipts:</strong> The customer's receipt will show the job total plus a card surcharge line item. Some customers accept this without comment — particularly in commercial B2B contexts. Others object, especially on large residential jobs. This is the friction risk that flat-rate providers eliminate by absorbing the fee.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 4: Who this suits */}
      <section className="section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            Who Shift4 actually suits
          </motion.h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            The surcharging model is most accepted in commercial B2B contexts. The tradies for whom Shift4 makes most sense:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                heading: 'Commercial subcontractors',
                body: 'Builders and construction subcontractors invoicing head contractors. Surcharging between businesses is standard practice and rarely contested. Large job values mean the surcharge savings are significant.',
              },
              {
                heading: 'Large-scale commercial operators',
                body: 'Commercial electricians, mechanical contractors, fire protection businesses — operators who primarily invoice commercial building managers and facilities companies. B2B surcharging is normal in these sectors.',
              },
              {
                heading: 'High-volume operators with contract tolerance',
                body: 'Businesses with enough volume and stability to commit to a minimum-term contract without concern about early exit. The zero processing cost only makes sense if you can commit to the term.',
              },
              {
                heading: 'Operators comfortable with opacity',
                body: 'The settlement timing is undisclosed. The merchant agreement isn\'t public. The surcharge rate requires a quote. If you need full price transparency before signing, Shift4 is the wrong provider.',
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

      {/* Section 5: The contract problem */}
      <section className="section container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The contract problem</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Unlike every flat-rate provider reviewed on this site — Zeller, Square, and Stripe are all no-contract — Shift4 requires a minimum-term commitment. The contract length and early termination fee are not published, which means you can't assess the commitment you're making until you request and read the full merchant agreement.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            The settlement timing is also not disclosed publicly. For a tradie evaluating cash flow impact, not knowing when funds will hit their account is a significant information gap. Ask Shift4 in writing: how many business days does settlement take to an external bank account?
          </p>
          <p className="text-slate-600 leading-relaxed mb-5">
            The full merchant agreement is not available on Shift4's website. You will need to request it directly. Do not sign without reading the full document — particularly the sections on minimum term, termination fees, rate variation rights, and dispute resolution.
          </p>
          <div className="lg-light rounded-2xl p-5">
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong className="text-brand-dark">Before signing Shift4, ask for these in writing:</strong> full merchant agreement document; contract minimum term and exit fee; settlement timing to external bank; surcharge rate by card type; monthly rental or fixed fee amount; any rate adjustment clauses during the contract. If a sales representative won't provide these before signing, that's a clear signal to walk away.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 6: Is zero-cost really better? */}
      <section className="section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            Is zero-cost EFTPOS actually better? The maths on a $500 residential job
          </motion.h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            Take a plumber doing a $500 residential callout and repair. Two scenarios: absorb the fee with Zeller, or surcharge it with Shift4.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            {[
              {
                provider: 'Zeller Terminal 1 — merchant absorbs',
                customerPays: '$500.00',
                merchantReceives: '$493.00',
                merchantCost: '$7.00',
                note: '1.4% of $500 = $7. Customer pays $500 with no surcharge. No friction at payment.',
                highlight: false,
              },
              {
                provider: 'Shift4 — surcharge passed to customer',
                customerPays: '~$506.50',
                merchantReceives: '$500.00',
                merchantCost: '$0',
                note: 'Approx 1.3% surcharge on $500 = $6.50. Customer pays $506.50. Merchant keeps $500. Risk: customer objects to surcharge.',
                highlight: false,
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
                    <div className="text-xs text-slate-500 mb-0.5">Customer pays</div>
                    <div className="text-xl font-bold text-brand-dark">{item.customerPays}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Merchant nets</div>
                    <div className="text-xl font-bold text-brand-dark">{item.merchantReceives}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Merchant cost</div>
                    <div className="text-xl font-bold text-slate-700">{item.merchantCost}</div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{item.note}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            The $7 difference is real — on $8,000/month in card volume, that's $112/month the tradie saves by using Shift4 versus absorbing the fee. The question is whether that saving is worth the contract commitment, the customer friction risk, and the transparency concerns. For commercial work where surcharging is routine, the answer may be yes. For residential work, most tradies who've tried surcharging find the pushback isn't worth the saving.
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
            Shift4's zero merchant cost is genuine — and for commercial operators with high volume, contract tolerance, and a B2B customer base, it can make financial sense. But the lack of published pricing, undisclosed settlement timing, hidden merchant agreement, and contract lock-in mean you're operating with significant information gaps before signing. Get everything in writing. If Shift4 won't provide the full merchant agreement before you sign, that's the answer. For most tradies — particularly those doing residential work — <Link to="/providers/zeller" className="text-brand-blue hover:underline font-medium">Zeller Terminal 1</Link> at 1.4% absorbed, no contract, and full transparency is the safer starting point.
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/providers/shift4"
              className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-600 transition-colors"
            >
              Full Shift4 review →
            </Link>
          </div>
        </motion.div>
      </section>

      <FaqSection items={faqs} title="Shift4 EFTPOS — common questions" />
      <RelatedLinks slug="shift4" type="provider" />
    </>
  )
}
