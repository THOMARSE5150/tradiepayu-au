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
  { label: 'EFTPOS Fees for Tradies in Australia (2026) — Full Breakdown' },
]

const comparisonHeaders = ['Provider', 'In-person', 'Online/Invoice', 'Monthly fee', 'Hardware']
const comparisonRows = [
  {
    highlight: true,
    cells: ['Zeller Terminal 1', '1.4%', '1.7% + $0.25', '$0 (or $15 SIM)', '$99'],
  },
  { cells: ['Square Terminal', '1.6%', '2.2%', '$0', '$329'] },
  { cells: ['Stripe Reader', '1.7% + $0.10', '1.7% + $0.30', '$0', '$149'] },
  { cells: ['Tyro', 'Quote required', 'Quote', 'Rental fee', 'Rental'] },
  { cells: ['Shift4', '0% (surcharge)', '0% (surcharge)', 'Rental', 'Rental'] },
]

const volumeData = [
  { volume: '$3,000/mo', zeller: '$42', square: '$48', stripe: '$51 + $3 fixed' },
  { volume: '$6,000/mo', zeller: '$84', square: '$96', stripe: '$102 + $6 fixed' },
  { volume: '$10,000/mo', zeller: '$140', square: '$160', stripe: '$170 + $10 fixed' },
  { volume: '$20,000/mo', zeller: '$280', square: '$320', stripe: '$340 + $20 fixed' },
]

const faqs = [
  {
    q: 'What percentage does EFTPOS charge in Australia?',
    a: 'It varies by provider. Flat-rate providers charge between 1.4% and 1.7% plus a small fixed fee for in-person payments. Zeller is 1.4%, Square is 1.6%, Stripe is 1.7% + $0.10. Tyro requires a custom quote based on your business volume — their rates are typically negotiated for higher-turnover businesses.',
  },
  {
    q: 'Is there a monthly fee for EFTPOS in Australia?',
    a: 'Zeller, Square, and Stripe charge no monthly fee on their standard accounts. You only pay when you take a payment. Tyro and Shift4 charge a monthly terminal rental fee — the exact amount depends on the contract. For most tradies, a no-monthly-fee provider is the better starting point.',
  },
  {
    q: 'What is the cheapest EFTPOS for a tradie?',
    a: 'Zeller Terminal 1 at 1.4% in-person rate, no monthly fee, and $99 hardware. Across every volume level from $3,000 to $20,000 per month, Zeller produces the lowest processing cost of any flat-rate provider. The optional SIM plan ($15/mo) adds cellular connectivity but is not required if you have reliable WiFi on site.',
  },
  {
    q: 'Do I pay EFTPOS fees on every transaction?',
    a: 'Yes — the percentage rate is charged on every card payment, whether tap, chip, or swipe. At a 1.4% rate, a $500 invoice costs you $7.00 in processing fees. A $200 callout costs $2.80. These fees are deducted before funds settle to your account — you never have to chase a separate invoice from the provider.',
  },
  {
    q: 'Can I pass EFTPOS fees to my customers?',
    a: 'Yes — surcharging is legal in Australia under ACCC rules. However, the surcharge must not exceed your actual cost of acceptance. Passing a 1.4% surcharge on to the customer is legal; charging 3% is not. Shift4 operates on a zero-cost model where the processing fee is automatically passed to the cardholder. Most tradies absorb the fee rather than surcharge, as it can feel transactional for residential customers.',
  },
  {
    q: 'How do I reduce my EFTPOS fees as a tradie?',
    a: 'Choose the lowest flat-rate provider (Zeller at 1.4%). Avoid taking invoice or remote payments where possible — these rates are higher across all providers. If you send payment links for off-site jobs, factor the higher rate into your pricing. Do not surcharge unless your clientele is commercial — residential customers often react negatively to a surcharge on a small job.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'EFTPOS Fees for Tradies in Australia (2026) — Full Breakdown',
    description: 'Zeller 1.4%, Square 1.6%, Stripe 1.7%. What those percentages actually cost a tradie per month — and which provider wins at every volume.',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-01-15',
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
    url: `${SITE}/blog/eftpos-fees-tradies-australia-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'EFTPOS Fees for Tradies in Australia (2026) — Full Breakdown', item: `${SITE}/blog/eftpos-fees-tradies-australia-2026` },
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

export default function EftposFeesPost() {
  return (
    <>
      <Meta
        title="EFTPOS Fees for Tradies in Australia (2026) — Full Breakdown"
        description="Zeller 1.4%, Square 1.6%, Stripe 1.7%. What those percentages actually cost a tradie per month — and which provider wins at every volume."
        canonical="/blog/eftpos-fees-tradies-australia-2026"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop&crop=center&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=560&fit=crop&crop=center&q=80"
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
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Guide</span>
            <span>·</span>
            <span>15 Jan 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            EFTPOS Fees for Tradies in Australia (2026) — Full Breakdown
          </h1>
          <p className="hero-sub">
            Zeller 1.4%, Square 1.6%, Stripe 1.7%. What those percentages actually cost a tradie per month — and which provider wins at every volume.
          </p>
        </div>
      </header>

      {/* Section 1: What "in-person rate" actually means */}
      <section className="section container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="prose-section max-w-2xl"
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What "in-person rate" actually means</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Every time a customer taps, inserts, or swipes their card on your terminal, the provider takes a percentage of the transaction amount. That's the in-person rate. There are no separate gateway fees, no monthly statement fees, and no minimum charges on Zeller, Square, or Stripe — the percentage is the entire cost.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            At <Link to="/providers/zeller" className="text-brand-blue hover:underline font-medium">Zeller</Link>'s 1.4% rate, a $500 job costs you $7.00 in processing fees. At <Link to="/providers/square" className="text-brand-blue hover:underline font-medium">Square</Link>'s 1.6%, it's $8.00. At <Link to="/providers/stripe" className="text-brand-blue hover:underline font-medium">Stripe</Link>'s 1.7% plus $0.10, it's $8.60. Small differences per job — but they compound across a month of work.
          </p>
          <p className="text-slate-600 leading-relaxed">
            None of Zeller, Square, or Stripe charge a monthly fee on standard accounts. You pay only when you take a payment. This is the flat-rate model, and it's what most tradies should use unless their volume is high enough to justify a negotiated rate through a bank merchant account or <Link to="/providers/tyro" className="text-brand-blue hover:underline font-medium">Tyro</Link>.
          </p>
        </motion.div>
      </section>

      {/* Section 2: Provider rate comparison */}
      <section className="section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            Provider rate comparison
          </motion.h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />
          <p className="text-xs text-slate-500 mt-3">Rates current as of March 2026. Tyro and Shift4 rates are indicative — request a quote for your business.</p>
        </div>
      </section>

      {/* Section 3: Real cost per month */}
      <section className="section container-page">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-brand-dark mb-2"
        >
          Real cost per month
        </motion.h2>
        <p className="text-slate-600 mb-6">Processing fees at four common monthly card revenue levels. Stripe figures include the $0.10 per-transaction fixed fee calculated at an average job size of $400.</p>
        <div className="overflow-x-auto rounded-2xl lg-light">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200/80">
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wide bg-white/40">Monthly volume</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wide bg-white/40">Zeller (1.4%)</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wide bg-white/40">Square (1.6%)</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wide bg-white/40">Stripe (1.7% + $0.10)</th>
              </tr>
            </thead>
            <tbody>
              {volumeData.map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="border-b border-slate-100/80 last:border-0"
                >
                  <td className="py-3.5 px-4 font-medium text-brand-dark">{row.volume}</td>
                  <td className="py-3.5 px-4 text-green-700 font-semibold">{row.zeller}</td>
                  <td className="py-3.5 px-4 text-slate-700">{row.square}</td>
                  <td className="py-3.5 px-4 text-slate-700">{row.stripe}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-3">Zeller figures do not include the optional $15/mo SIM plan. Add $180/year if cellular connectivity is needed.</p>
      </section>

      {/* Section 4: Hidden fees to watch */}
      <section className="section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            Hidden fees to watch
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                heading: 'Chargeback fees',
                body: 'All three providers charge a fee when a customer disputes a payment with their bank. Zeller and Square charge $15 per chargeback. Stripe charges $15 USD (~$23 AUD). Chargebacks are rare in trade work — jobs are in person and the customer is present — but it\'s worth knowing.',
              },
              {
                heading: 'MOTO rates',
                body: 'Mail order / telephone order payments — taking a card number over the phone or entering it manually — attract a higher rate. These are classified as card-not-present transactions and carry higher fraud risk. Avoid them where possible; use a payment link instead.',
              },
              {
                heading: 'International card surcharges',
                body: 'Visa and Mastercard charge higher interchange on cards issued outside Australia. Some providers pass this through as a small additional fee. For domestic trade work this is rarely an issue, but it can appear if you work with tourists or foreign-owned properties.',
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

      {/* Section 5: Which provider wins */}
      <section className="section container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Which provider wins</h2>
          <div className="infobox mb-6">
            <strong>Verdict:</strong> Zeller wins on rate at every volume level. 1.4% in-person, no monthly fee, $99 hardware. For the average tradie doing $5,000–$15,000/month in card payments, the saving over Square is $120–$360/year.
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            Square is the right choice when you work in environments with no mobile signal and no WiFi — its offline mode is genuinely the only solution for deep underground or concrete-shielded sites. Use it as a backup device, not a primary.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Stripe makes sense if you already use Stripe for online payments or invoicing and want one provider across all channels. The 1.7% + $0.10 in-person rate is the highest of the three, but Stripe's developer tools and invoice features are market-leading.
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            <Link to="/providers/shift4" className="text-brand-blue hover:underline font-medium">Shift4</Link> is the exception to the rate comparison: it passes the processing fee to the customer entirely (surcharging model), so your merchant cost is 0%. Worth considering for commercial operators who bill large jobs regularly. See the <Link to="/compare" className="text-brand-blue hover:underline font-medium">full provider comparison →</Link>
          </p>
          <div className="mt-6">
            <Link
              to="/providers/zeller"
              className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-600 transition-colors"
            >
              Read the full Zeller review →
            </Link>
          </div>
        </motion.div>
      </section>

      <FaqSection items={faqs} title="EFTPOS fees — common questions" />
    </>
  )
}
