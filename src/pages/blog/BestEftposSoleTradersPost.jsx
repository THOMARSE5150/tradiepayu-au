import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Meta from '../../components/Meta'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import RelatedLinks from '../../components/RelatedLinks'
import { blogHeroUrl, blogOgUrl } from '../../utils/blogImage'

const SITE = 'https://tradiepayau.directory'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Best EFTPOS for Sole Traders in Australia (2026)' },
]

const comparisonHeaders = ['Provider', 'Setup', 'In-person rate', 'Monthly fee', 'Contract', 'Best for']
const comparisonRows = [
  {
    highlight: true,
    cells: ['Zeller Terminal 1 + SIM ★', 'Same day', '1.4%', '$0 (+$15 SIM)', 'None', 'Regular on-site work'],
  },
  { cells: ['Zeller Tap to Pay', 'Same day', '1.4%', '$0', 'None', 'Low volume / backup'] },
  { cells: ['Square Terminal', 'Same day', '1.6%', '$0', 'None', 'Dead-zone work'] },
  { cells: ['Stripe Reader', '1–2 days', '1.7% + $0.10', '$0', 'None', 'Website integration'] },
  { cells: ['Tyro', '3–5 days', 'Quote', 'Monthly rental', 'Varies', 'Trade software integration'] },
  { cells: ['Shift4', 'Days', '0% (surcharge)', 'Rental', 'Contract', 'Zero-cost model'] },
]

const setupSteps = [
  {
    number: '1',
    heading: 'Get your ABN at abr.gov.au',
    body: 'Free and takes about 5 minutes online. All EFTPOS providers require an ABN to open a merchant account. If you\'re already operating as a sole trader and invoicing clients, you almost certainly have one.',
  },
  {
    number: '2',
    heading: 'Go to myzeller.com → Create account → enter ABN',
    body: 'Zeller\'s online application takes around 10 minutes. You\'ll need your ABN, a mobile number, and basic business details. Identity verification is completed digitally — no branch visit, no paper forms.',
  },
  {
    number: '3',
    heading: 'Zeller Tap to Pay: available immediately on your phone',
    body: 'Once your account is approved (typically same day), Zeller Tap to Pay is available immediately on your iPhone or Android device. Open the app, enter an amount, and let the customer tap their card. Same 1.4% rate, no hardware cost.',
  },
  {
    number: '4',
    heading: 'Terminal 1: ships in 1–3 business days',
    body: 'If you want a dedicated terminal with a built-in receipt printer and SIM card, order the Zeller Terminal 1 ($99) during signup. It ships within 1–3 business days of account approval. The SIM plan ($15/mo) is optional — activate it in the app if you want cellular connectivity.',
  },
  {
    number: '5',
    heading: 'Take your first payment',
    body: 'Open the Zeller app or turn on your terminal, enter the amount, and present it to the customer. Funds settle same business day to your Zeller Transaction Account, or next business day to an external bank account.',
  },
]

const faqs = [
  {
    q: 'What is the best EFTPOS for a sole trader in Australia?',
    a: 'Zeller Tap to Pay is the best starting point — no hardware cost, 1.4% rate, no monthly fee, no contract. For regular on-site work, Zeller Terminal 1 with SIM ($99 + $15/mo) gives you a dedicated terminal with printed receipts and SIM connectivity. Both are the lowest-cost options available.',
  },
  {
    q: 'Do sole traders need an ABN to accept card payments?',
    a: 'Yes — all Australian EFTPOS providers require an ABN to open a merchant account. ABNs are free and can be registered at abr.gov.au in about 5 minutes. You don\'t need a company or business name — a sole trader ABN is sufficient.',
  },
  {
    q: 'Can a sole trader use their personal bank account for EFTPOS?',
    a: 'Yes — Square and Stripe settle directly to any Australian bank account, personal or business. Zeller settles to a Zeller Transaction Account (free), which you can transfer to your personal account at any time.',
  },
  {
    q: 'How long does it take to start accepting card payments as a sole trader?',
    a: 'With Zeller Tap to Pay, you can be taking payments on the same day you sign up. Account approval is typically same-day for sole traders with a valid ABN. Terminal hardware ships in 1–3 business days if you want a physical device.',
  },
  {
    q: 'Is there a monthly fee for EFTPOS as a sole trader?',
    a: 'Not with Zeller, Square, or Stripe — they charge per transaction only (1.4%, 1.6%, and 1.7% + $0.10 respectively). Tyro and Shift4 charge monthly rental fees. For a sole trader with variable income, choosing a provider with no monthly fee is important.',
  },
  {
    q: 'Can I claim EFTPOS fees as a tax deduction?',
    a: 'Yes — EFTPOS processing fees (e.g. 1.4% per transaction) are deductible as a business expense. The hardware cost ($99–$329) may be fully deductible under the instant asset write-off provisions. Monthly SIM fees ($15) are also deductible. Claim the GST on all of these in your BAS.',
  },
  {
    q: 'What happens to my EFTPOS account if I\'m not working for a few weeks?',
    a: 'With Zeller, Square, and Stripe, you pay nothing if you don\'t process any payments. There are no monthly account fees. You only pay when you take a payment. The only ongoing cost is the Zeller SIM ($15/mo) if you have the SIM plan — you can cancel the SIM if you\'re not working for an extended period.',
  },
  {
    q: 'How do I accept card payments when I\'m not physically with the customer?',
    a: 'Send a Zeller or Stripe payment link via SMS. The customer pays online from their phone. Zeller settles same-day, Stripe in 2 days. Useful for: customers who\'ve already left the site, remote clients, or deposit collection before starting a job.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Sole Traders in Australia (2026)',
    description: 'The best EFTPOS options for Australian sole traders in 2026 — compared by rate, cost, and setup time. No contracts, no lock-in.',
    image: {
      '@type': 'ImageObject',
      url: blogOgUrl('best-eftpos-sole-traders-australia-2026'),
      width: 1200,
      height: 630,
    },
    datePublished: '2026-02-24',
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
    url: `${SITE}/blog/best-eftpos-sole-traders-australia-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Sole Traders in Australia (2026)', item: `${SITE}/blog/best-eftpos-sole-traders-australia-2026` },
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

export default function BestEftposSoleTradersPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Sole Traders in Australia (2026)"
        description="The best EFTPOS options for Australian sole traders in 2026 — compared by rate, cost, and setup time. No contracts, no lock-in."
        canonical="/blog/best-eftpos-sole-traders-australia-2026"
        ogType="article"
        ogImage={blogOgUrl('best-eftpos-sole-traders-australia-2026')}
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={blogHeroUrl('best-eftpos-sole-traders-australia-2026')}
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
            <span>24 Feb 2026</span>
            <span>·</span>
            <span>9 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            Best EFTPOS for Sole Traders in Australia (2026)
          </h1>
          <p className="hero-sub">
            Compared by rate, cost, and setup time. No contracts, no lock-in. The options that make sense when your income is variable and you need to get paid on the day.
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
            <Link to="/providers/zeller" className="text-brand-blue hover:underline font-medium">Zeller Tap to Pay</Link> is the cheapest starting point — no hardware cost, 1.4% rate, no monthly fee, no contract. For regular on-site work, upgrade to Zeller Terminal 1 with SIM ($99 + $15/mo). Both have no monthly fee and no contract.
          </div>
        </motion.div>
      </section>

      {/* Section 2: What sole traders actually need */}
      <section className="section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            What sole traders actually need
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                heading: 'No monthly fees',
                body: 'Sole trader income is variable — a payment system that charges you when you\'re not working is dead weight. You should only pay when you take a payment.',
              },
              {
                heading: 'No contract',
                body: 'Flexibility to change providers if your situation changes, if rates shift, or if a better option comes along. A lock-in contract is unnecessary for the flat-rate providers available today.',
              },
              {
                heading: 'Fast setup',
                body: 'Approve online with just an ABN. Not days of paperwork, branch visits, or waiting for a bank manager. You should be able to take your first payment the same day you sign up.',
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

      {/* Section 3: Provider comparison */}
      <section className="section container-page">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-brand-dark mb-6"
        >
          Provider comparison
        </motion.h2>
        <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />
        <p className="text-xs text-slate-500 mt-3">
          Rates current as of April 2026. <Link to="/providers/tyro" className="text-brand-blue hover:underline">Tyro</Link> and <Link to="/providers/shift4" className="text-brand-blue hover:underline">Shift4</Link> rates are indicative — request a quote. ★ Primary recommendation for most sole traders.
        </p>
      </section>

      {/* Section 4: The ABN question */}
      <section className="section-alt">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-brand-dark mb-4">The ABN question</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              All EFTPOS providers in Australia require an ABN to open a merchant account. An ABN (Australian Business Number) is a free 11-digit identifier issued by the ATO. It can be registered at{' '}
              <a href="https://abr.gov.au" target="_blank" rel="noopener noreferrer" className="text-brand-blue underline hover:no-underline">abr.gov.au</a>{' '}
              in about 5 minutes.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              You do not need a company structure, a registered business name, or a trade licence to get an ABN. If you're operating as a sole trader — trading under your own name and invoicing for your labour — you can register for an ABN immediately. No accountant required.
            </p>
            <div className="lg-light rounded-2xl p-5">
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong className="text-brand-dark">No trade licence required for card payments.</strong> The merchant account is an agreement between you and the payment provider — trade licensing is a separate regulatory matter governed by your state. You can accept card payments as soon as you have an ABN and a bank account.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: What volume justifies a terminal? */}
      <section className="section container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What volume justifies a terminal?</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            The breakeven point depends on which option you're comparing against. Since Zeller Tap to Pay and Zeller Terminal 1 share the same 1.4% rate, there's no rate-based breakeven — the choice comes down to practical needs.
          </p>
        </motion.div>
        <div className="space-y-4 max-w-2xl">
          {[
            {
              heading: 'Zeller Tap to Pay',
              cost: '$0 fixed cost',
              detail: 'Always worth it at any volume. No hardware to buy, no monthly fee. Install the app and start taking payments. The only trade-off is using your personal phone as a payment device.',
            },
            {
              heading: 'Zeller Terminal 1 + SIM',
              cost: '$99 hardware + $15/mo',
              detail: 'Worth it for: printed receipts on demand, better battery life, a more professional presentation to customers, and SIM independence from any site WiFi. At the same 1.4% rate, the $99 hardware and $15/mo SIM are the only additional costs.',
            },
            {
              heading: 'Square Terminal',
              cost: '$329 one-off',
              detail: 'Only justified if you genuinely need offline mode — underground work, dead-zone sites. Higher rate (1.6%), higher hardware cost, no SIM. Keep it as a backup device, not a primary.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="lg-light rounded-2xl p-5"
            >
              <div className="flex items-start justify-between mb-2 gap-4">
                <h3 className="font-bold text-brand-dark">{item.heading}</h3>
                <span className="flex-shrink-0 text-xs font-semibold text-brand-blue bg-blue-50 px-2.5 py-1 rounded-full">{item.cost}</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 6: Tax deductibility */}
      <section className="section-alt">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Tax deductibility</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              EFTPOS costs are fully deductible for sole traders operating an ABN-registered business. The deductions are straightforward.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                heading: 'Hardware ($99–$329)',
                body: 'Fully deductible under the instant asset write-off provisions for sole traders. Claim in the financial year of purchase. The full cost of the terminal — Zeller ($99) or Square ($329) — can be deducted immediately rather than depreciated over time.',
              },
              {
                heading: 'SIM plan ($15/mo)',
                body: 'Monthly SIM fee is deductible as a business expense. If you use the SIM for business purposes only (which is the case for a payment terminal), the full $180/year is deductible. Include GST in your BAS claim.',
              },
              {
                heading: 'Processing fees (1.4%)',
                body: 'Every transaction fee you pay is deductible as a cost of doing business. On $10,000/month in card payments, that\'s $140/month or $1,680/year in deductible processing fees. Include the GST component in your quarterly BAS.',
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
          <p className="text-xs text-slate-500 mt-4">
            Tax rules can change. Confirm instant asset write-off thresholds and eligibility with your accountant or the ATO for the current financial year.
          </p>
        </div>
      </section>

      {/* Section 7: Getting set up */}
      <section className="section container-page">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-brand-dark mb-6"
        >
          Getting set up
        </motion.h2>
        <div className="space-y-4 max-w-2xl">
          {setupSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 lg-light rounded-2xl p-5"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue text-white text-sm font-bold flex items-center justify-center">
                {step.number}
              </div>
              <div>
                <h3 className="font-bold text-brand-dark mb-1">{step.heading}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/providers/zeller"
            className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-600 transition-colors"
          >
            Read the full Zeller review →
          </Link>
          <Link
            to="/providers/square"
            className="inline-flex items-center gap-2 border border-brand-blue text-brand-blue font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Square Terminal review →
          </Link>
          <Link
            to="/calculator"
            className="inline-flex items-center gap-2 border border-slate-300 text-slate-600 font-semibold text-sm px-5 py-2.5 rounded-xl hover:border-brand-blue hover:text-brand-blue transition-colors"
          >
            Cost calculator →
          </Link>
        </div>
      </section>

      <FaqSection items={faqs} title="Best EFTPOS for sole traders — common questions" />
      <RelatedLinks />
    </>
  )
}
