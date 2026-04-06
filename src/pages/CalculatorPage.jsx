import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import CostCalculator from '../components/CostCalculator'
import { Link } from 'react-router-dom'

import siteMeta from '../data/site-meta.json'

const SITE = 'https://tradiepayau.directory'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'EFTPOS Cost Calculator' },
]

const faqs = [
  {
    q: 'How do I calculate EFTPOS costs for my tradie business?',
    a: 'Enter your monthly card revenue and average transaction value. The calculator works out monthly processing fees, amortised hardware cost, and optional SIM plan cost for each provider — then ranks them cheapest to most expensive for your volume.',
  },
  {
    q: 'Which EFTPOS provider is cheapest for tradies in Australia?',
    a: 'For most tradies, Zeller Terminal 1 is the cheapest option at 1.4% with no fixed per-transaction fee. At $5,000/month in card volume, Zeller costs approximately $70/month in processing fees — lower than Square (1.6%), Stripe (1.7% + $0.10), or Tyro (quote-based). Use the calculator above to check your specific volume.',
  },
  {
    q: 'Should I include the SIM plan cost in my EFTPOS calculation?',
    a: "Yes, if you work on sites without reliable WiFi. Zeller's Optus SIM plan costs $15/month and provides mobile connectivity independent of customer WiFi. For most tradie environments — new estates, switchboard rooms, underground — the SIM is a practical necessity, not an optional extra.",
  },
  {
    q: 'Why does Stripe cost more than the percentage rate suggests?',
    a: "Stripe charges $0.10 per transaction on top of the 1.7% rate. If your average job is $300, that extra $0.10 is negligible — but if you're taking lots of small payments (materials splits, call-out fees), the per-transaction fee adds up fast. At 50 transactions per month, that's an extra $5 on top of the percentage. The calculator includes this automatically.",
  },
  {
    q: 'What does amortisation period mean in the calculator?',
    a: "Amortisation spreads the upfront hardware cost across the months you expect to use the terminal. Set it to 24 months and the calculator adds 1/24 of the purchase price to your monthly cost. Zeller Terminal 1 ($99) over 24 months adds $4.13/month. Square Terminal ($329) over 24 months adds $13.71/month. A longer period reduces the monthly impact but assumes you'll use the terminal longer.",
  },
  {
    q: 'Why is Shift4 not in the calculator?',
    a: "Shift4 uses a customer surcharging model — the cardholder pays the processing fee, not you. Your processing cost is effectively $0, so it can't be compared on a like-for-like monthly cost basis. Shift4 has its own trade-offs (contract lock-in, transparency concerns) which are covered on the Shift4 provider page.",
  },
  {
    q: 'How accurate are the results?',
    a: 'The calculator uses published in-person rates as of April 2026. Results are estimates — actual costs can vary if your card mix includes more premium cards (which some providers charge more for), if Tyro quotes you a rate different from their standard, or if rates have changed since our last review. Always verify current pricing with the provider before signing up.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'EFTPOS Cost Calculator for Australian Tradies',
    description: 'Compare monthly EFTPOS costs across Zeller, Square, Stripe, and Tyro. Enter your monthly card volume and average transaction size to see real monthly costs.',
    url: `${SITE}/calculator`,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Calculator', item: `${SITE}/calculator` },
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
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate EFTPOS Costs for Your Tradie Business',
    description: 'Compare monthly EFTPOS costs across Zeller, Square, Stripe, and Tyro by entering your card volume and transaction size.',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Enter your monthly card revenue', text: 'Type your estimated monthly card revenue into the calculator. This is the total amount customers pay by card each month — not your total revenue.' },
      { '@type': 'HowToStep', position: 2, name: 'Set your average transaction value', text: 'Enter the typical value of a single card payment. This affects the per-transaction fee calculation for Stripe ($0.10 per transaction on top of 1.7%).' },
      { '@type': 'HowToStep', position: 3, name: 'Choose your amortisation period', text: 'Set how many months you plan to use the terminal. This spreads the hardware cost across your expected usage period — Zeller Terminal 1 is $99, Square Terminal is $329.' },
      { '@type': 'HowToStep', position: 4, name: 'Toggle the SIM plan option', text: 'Tick the SIM checkbox if you work on sites without reliable WiFi. Zeller\'s Optus SIM plan is $15/month and is essential for most on-site tradie work.' },
      { '@type': 'HowToStep', position: 5, name: 'Compare the ranked results', text: 'The calculator ranks all providers from cheapest to most expensive for your specific volume, showing processing cost, amortised hardware, and SIM as separate line items.' },
    ],
    tool: [{ '@type': 'HowToTool', name: 'EFTPOS Cost Calculator' }],
    supply: [{ '@type': 'HowToSupply', name: 'Monthly card revenue figure' }, { '@type': 'HowToSupply', name: 'Average transaction value' }],
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-brand-dark text-sm leading-snug">{q}</span>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-slate-600 leading-relaxed pb-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function CalculatorPage() {
  return (
    <>
      <Meta
        title="EFTPOS Cost Calculator for Australian Tradies (2026)"
        description="Compare monthly EFTPOS costs for Zeller, Square, Stripe, and Tyro. Enter your card volume and transaction size — see exactly what each provider costs per month."
        canonical="/calculator"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-brand-dark via-brand-dark/90 to-slate-900" />
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Free Tool</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            EFTPOS Cost Calculator for Tradies
          </h1>
          <p className="hero-sub">
            Enter your monthly card volume to compare real monthly costs across Zeller, Square, Stripe, and Tyro.
            Hardware amortised over your chosen period. No sign-up required.
          </p>
        </div>
      </header>

      <CostCalculator />

      {/* How to read your results */}
      <section className="section section-alt">
        <div className="container-page max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xl font-bold text-brand-dark mb-5"
          >
            How to read your results
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                label: 'Processing cost is the only ongoing cost',
                body: "Hardware is a one-off. SIM is optional. But the processing percentage compounds every month — a 0.2% difference on $8,000/month is $192/year. That's real money.",
              },
              {
                label: 'SIM cost changes the ranking significantly',
                body: "Tick the SIM checkbox to see the real comparison. Without SIM, Zeller leads at 1.4%. With SIM ($15/month), Zeller still leads below about $7,500/month volume — but Stripe closes the gap.",
              },
              {
                label: 'Tyro is shown as a range, not a fixed number',
                body: "Tyro doesn't publish a single in-person rate — it varies by turnover and card mix. The calculator shows their rate range (0.8%–1.4%). At the low end, Tyro can beat Zeller for high-volume operators.",
              },
              {
                label: "The cheapest on paper isn't always the cheapest in practice",
                body: 'Offline capability, SIM coverage, and settlement speed have real cash-flow costs. A $5 monthly saving means nothing if a dead zone costs you a $2,000 job because you can\'t take payment on site.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="lg-light rounded-2xl p-5"
              >
                <h3 className="font-semibold text-brand-dark text-sm mb-2">{item.label}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How the calculator works + links */}
      <section className="section container-page max-w-2xl">
        <h2 className="text-xl font-bold text-brand-dark mb-4">How the calculator works</h2>
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p>
            <strong className="text-brand-dark">Processing cost</strong> — your monthly card revenue × the provider's in-person rate, plus any fixed per-transaction fee (Stripe charges $0.10 per transaction).
          </p>
          <p>
            <strong className="text-brand-dark">Hardware cost</strong> — terminal purchase price divided by your chosen amortisation period. Zeller Terminal 1 is $99; Square Terminal is $329; Stripe BBPOS WisePad 3 is $89. Tyro uses lease pricing (shown as $0 for payment links).
          </p>
          <p>
            <strong className="text-brand-dark">SIM cost</strong> — Zeller's optional Optus SIM plan is $15/month. Included when the checkbox is ticked. For any tradie working on sites without reliable WiFi, this is effectively a required expense.
          </p>
          <p className="text-xs text-slate-400 pt-2 border-t border-slate-100">
            Rates verified April 2026. Shift4 uses a surcharging model (customer pays the fee, merchant cost is $0) and is excluded from this comparison. Always confirm current pricing at provider websites before signing up.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link to="/providers/zeller" className="flex flex-col gap-1 p-4 bg-white border border-slate-200 rounded-2xl hover:border-brand-blue hover:shadow-sm transition-all group">
            <span className="text-xs font-bold text-brand-blue">Cheapest rate</span>
            <span className="font-semibold text-brand-dark group-hover:text-brand-blue transition-colors text-sm">Zeller full review →</span>
          </Link>
          <Link to="/providers/square" className="flex flex-col gap-1 p-4 bg-white border border-slate-200 rounded-2xl hover:border-brand-blue hover:shadow-sm transition-all group">
            <span className="text-xs font-bold text-slate-500">Best offline</span>
            <span className="font-semibold text-brand-dark group-hover:text-brand-blue transition-colors text-sm">Square full review →</span>
          </Link>
          <Link to="/compare/zeller-vs-square" className="flex flex-col gap-1 p-4 bg-white border border-slate-200 rounded-2xl hover:border-brand-blue hover:shadow-sm transition-all group">
            <span className="text-xs font-bold text-slate-500">Head-to-head</span>
            <span className="font-semibold text-brand-dark group-hover:text-brand-blue transition-colors text-sm">Zeller vs Square →</span>
          </Link>
        </div>
      </section>

      {/* FAQ section */}
      <section className="section section-alt">
        <div className="container-page max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xl font-bold text-brand-dark mb-2"
          >
            Frequently asked questions
          </motion.h2>
          <div className="mt-4">
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>
    </>
  )
}
