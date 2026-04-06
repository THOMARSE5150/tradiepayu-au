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
  { label: 'How to Accept Card Payments as a Sole Trader in Australia (2026)' },
]

const steps = [
  {
    number: '1',
    heading: 'Get your ABN',
    body: 'If you don\'t already have one, apply at abr.gov.au — it\'s free and takes around five minutes online. Every EFTPOS provider requires an ABN to open a merchant account. You cannot accept card payments under your personal name without one.',
  },
  {
    number: '2',
    heading: 'Choose a provider',
    body: 'Zeller is the right starting point for most tradies: 1.4% rate, $99 terminal, no monthly fee, built-in SIM plan. Square is worth considering if you regularly work underground or in zero-signal environments. Stripe suits tradies who also sell online or need a payment link for customers who aren\'t on site.',
  },
  {
    number: '3',
    heading: 'Sign up online',
    body: 'All three providers have fully online applications. You\'ll need your ABN, a bank account for settlement (or you can use a Zeller Transaction Account), and basic business details. Zeller and Square typically approve applications same day or within 24 hours. No branch visits, no paper forms.',
  },
  {
    number: '4',
    heading: 'Order your terminal or use Tap to Pay',
    body: 'Zeller Terminal 1 ships in 2–3 business days for $99. Alternatively, Zeller Tap to Pay uses your existing iPhone or Android phone as a card reader at no hardware cost — same 1.4% rate. Tap to Pay is a useful starting point before you commit to a physical terminal.',
  },
  {
    number: '5',
    heading: 'Take your first payment',
    body: 'Open the app, enter the amount, and present the terminal or phone to the customer. Funds from in-person transactions settle same day to your Zeller Transaction Account, or next business day to a regular bank account via Square or Stripe.',
  },
]

const comparisonHeaders = ['Option', 'Cost', 'Rate', 'Best for']
const comparisonRows = [
  {
    highlight: true,
    cells: ['Zeller Terminal 1 + SIM', '$99 + $15/mo', '1.4%', 'Most tradie work'],
  },
  { cells: ['Zeller Tap to Pay', '$0', '1.4%', 'Emergencies, low volume'] },
  { cells: ['Square Terminal', '$329', '1.6%', 'Underground/offline work'] },
  { cells: ['Stripe Reader', '$149', '1.7% + $0.10', 'Website integration'] },
]

const faqs = [
  {
    q: 'Do I need an ABN to accept card payments as a tradie?',
    a: 'Yes — all EFTPOS providers require an ABN to open a merchant account in Australia. ABNs are free to register and the application takes around five minutes at abr.gov.au. If you are already operating as a sole trader and issuing invoices, you almost certainly have one already.',
  },
  {
    q: 'Can I use my personal bank account for EFTPOS?',
    a: 'Yes — Square and Stripe can settle funds to any Australian bank account, including personal accounts. Zeller settles by default to a Zeller Transaction Account, which is a free business transaction account you open as part of the signup process. You can transfer from the Zeller account to your personal or business bank at any time.',
  },
  {
    q: 'How long does EFTPOS approval take for a sole trader?',
    a: 'Zeller and Square approve online applications same day or within 24 hours for most sole traders. All you need is your ABN, a bank account, and basic identity verification. Bank merchant accounts through the major banks take 5–10 business days and typically require a branch visit or mailed documentation — not worth the wait for a tradie who needs to start taking payments immediately.',
  },
  {
    q: 'What is the cheapest way to start accepting card payments?',
    a: 'Zeller Tap to Pay: $0 hardware, 1.4% processing rate, no monthly fee. The app runs on your existing iPhone or Android phone and turns it into a card reader. The only cost is the 1.4% processing fee on each transaction. It\'s a practical starting point before committing to physical hardware, and you can use it alongside a terminal later.',
  },
  {
    q: 'Do I need to charge GST on EFTPOS fees?',
    a: 'The processing fee you pay to the provider is a business expense — you can claim the GST component on your BAS. If you choose to surcharge your customers for the cost of card acceptance, the surcharge is subject to GST and must be included in your invoicing. Most tradies do not surcharge; they absorb the processing fee as a cost of doing business and factor it into their labour rate.',
  },
  {
    q: 'How do I get paid when the customer isn\'t on site?',
    a: 'Send a payment link via SMS or email. Zeller and Stripe both offer payment links — you create the link in the app with an amount and description, send it to the customer\'s phone, and they pay via their browser. Zeller links settle same day; Stripe links typically settle within two business days. This is the practical solution for emergency jobs where the property owner is away, or for collecting a deposit before you arrive.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Accept Card Payments as a Sole Trader in Australia (2026)',
    description: 'Everything a sole-trader tradie needs: ABN setup, choosing a provider, hardware costs, and what the fees actually mean for your take-home pay.',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&h=630&fit=crop&crop=center&q=80',
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.heading,
      text: s.body,
    })),
    url: `${SITE}/blog/accept-card-payments-sole-trader-australia`,
    datePublished: '2026-02-01',
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
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'How to Accept Card Payments as a Sole Trader in Australia (2026)', item: `${SITE}/blog/accept-card-payments-sole-trader-australia` },
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

export default function SoleTraderCardPaymentsPost() {
  return (
    <>
      <Meta
        title="How to Accept Card Payments as a Sole Trader in Australia (2026)"
        description="Everything a sole-trader tradie needs: ABN setup, choosing a provider, hardware costs, and what the fees actually mean for your take-home pay."
        canonical="/blog/accept-card-payments-sole-trader-australia"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&h=630&fit=crop&crop=center&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=900&h=560&fit=crop&crop=center&q=80"
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
            <span>1 Feb 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            How to Accept Card Payments as a Sole Trader in Australia (2026)
          </h1>
          <p className="hero-sub">
            Everything a sole-trader tradie needs: ABN setup, choosing a provider, hardware costs, and what the fees actually mean for your take-home pay.
          </p>
        </div>
      </header>

      {/* Section 1: What you need before you start */}
      <section className="section container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl"
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What you need before you start</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            The requirements to start accepting card payments as a sole trader are minimal. You do not need to be a registered company, you do not need a trade licence, and you do not need a separate business bank account to get started.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              {
                label: 'ABN',
                note: 'Required',
                detail: 'All providers need an ABN to open a merchant account. Free at abr.gov.au.',
              },
              {
                label: 'Bank account',
                note: 'Required',
                detail: 'Any Australian bank account — personal or business. Or use a Zeller Transaction Account.',
              },
              {
                label: 'Email address',
                note: 'Required',
                detail: 'For your merchant account login, receipts, and settlement notifications.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="lg-light rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-brand-dark text-sm">{item.label}</span>
                  <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">{item.note}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-slate-500 mt-4">
            No trade licence is required to accept card payments. The merchant account is simply an agreement between you and the payment provider — trade licensing is a separate regulatory matter.
          </p>
        </motion.div>
      </section>

      {/* Section 2: Step-by-step setup */}
      <section className="section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            Step-by-step setup
          </motion.h2>
          <div className="space-y-4 max-w-2xl">
            {steps.map((step, i) => (
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
        </div>
      </section>

      {/* Section 3: Comparing your options */}
      <section className="section container-page">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-brand-dark mb-6"
        >
          Comparing your options
        </motion.h2>
        <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />
        <p className="text-xs text-slate-500 mt-3">
          Rates current as of April 2026. Zeller SIM plan ($15/mo) is optional — not required if you have WiFi on site. Also compare <Link to="/providers/tyro" className="text-brand-blue hover:underline">Tyro</Link> and <Link to="/providers/shift4" className="text-brand-blue hover:underline">Shift4</Link> if you're a higher-volume operator.
        </p>
      </section>

      {/* Section 4: What the fees mean for your income */}
      <section className="section-alt">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-brand-dark mb-4">What the fees mean for your income</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Processing fees are deducted before you see the money. They are not a separate invoice — they are already taken out of each transaction. This means your effective hourly rate is slightly lower than your listed rate whenever a customer pays by card.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                volume: '$5,000/month card revenue',
                fee: '$70/month',
                rate: 'Zeller 1.4%',
                note: 'Equivalent to about $840/year — roughly the cost of one day\'s labour.',
              },
              {
                volume: '$10,000/month card revenue',
                fee: '$140/month',
                rate: 'Zeller 1.4%',
                note: 'Equivalent to $1,680/year. Worth factoring a small buffer into your hourly rate.',
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
                <div className="text-sm font-semibold text-slate-500 mb-2">{item.volume}</div>
                <div className="flex items-end gap-3 mb-2">
                  <span className="text-2xl font-bold text-brand-dark">{item.fee}</span>
                  <span className="text-xs text-slate-500 mb-1">in fees ({item.rate})</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.note}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            The practical approach is to add $2–$5 to your callout rate or hourly rate to cover processing costs, rather than surcharging on each invoice. Customers rarely notice a small rate increase; they do notice a surcharge line item.
          </p>
        </div>
      </section>

      {/* Section 5: Getting paid faster */}
      <section className="section container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Getting paid faster</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Cash flow is the real concern for most sole-trader tradies, and settlement speed matters more than most people expect when you need to buy parts on the same day as the job.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              heading: 'Same-day settlement',
              body: 'Zeller settles in-person payments same day to a Zeller Transaction Account. Take a payment at 9am, funds available by end of business. Square settles next business day; Stripe settles in 2 business days or 2 days respectively.',
            },
            {
              heading: 'Payment links for off-site jobs',
              body: 'When the customer isn\'t on site — empty rental, commercial client, emergency after-hours — send a Zeller or Stripe payment link via SMS. The customer pays from their phone in under a minute. No terminal required.',
            },
            {
              heading: 'Deposits for large jobs',
              body: 'Take a deposit via payment link before you start. Confirms the booking, covers your materials cost upfront, and reduces no-pay risk on jobs over $500. Factor the 1.4% processing fee into the deposit amount.',
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
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/providers/zeller"
            className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-600 transition-colors"
          >
            Read the full Zeller review →
          </Link>
          <Link
            to="/compare/zeller-vs-square"
            className="inline-flex items-center gap-2 border border-brand-blue text-brand-blue font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Zeller vs Square →
          </Link>
        </div>
      </section>

      <FaqSection items={faqs} title="Sole trader card payments — common questions" />
      <RelatedLinks />
    </>
  )
}
