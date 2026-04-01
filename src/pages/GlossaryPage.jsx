import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Link as LinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'

const SITE = 'https://tradiepayau.directory'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Glossary' },
]

const terms = [
  {
    term: 'EFTPOS',
    short: 'Electronic Funds Transfer at Point Of Sale',
    definition: 'EFTPOS is the system that lets customers pay by tapping or inserting a card at a payment terminal. In Australia, "EFTPOS" is used broadly to refer to any card-present terminal — including portable handheld terminals used by tradies on job sites. Not to be confused with the EFTPOS network (the debit card scheme) — modern terminals support both Visa/Mastercard tap and the EFTPOS scheme simultaneously.',
    related: [{ label: 'Compare terminals', href: '/providers' }],
  },
  {
    term: 'Merchant service fee (MSF)',
    short: 'The percentage charged per transaction',
    definition: 'The merchant service fee is the percentage of each card payment that the payment provider keeps. For example, at Zeller\'s 1.4% MSF, a $500 job costs $7 in fees. The MSF varies by provider and sometimes by card type (credit vs debit, domestic vs international). Most modern flat-rate providers in Australia charge a single rate regardless of card type — this is simpler and more predictable for tradies.',
    related: [{ label: 'Fee calculator', href: '/calculator' }],
  },
  {
    term: 'Settlement',
    short: 'When payment funds land in your account',
    definition: 'Settlement is the process of moving funds collected via card payments into your bank account. "Same-day settlement" means the money is available the same business day the payment was taken. "Next-day settlement" means it arrives the following business day. For tradies who need to purchase materials the same day a job is completed, same-day settlement (Zeller, Tyro) is a meaningful advantage over next-day (Square, Stripe).',
    related: [{ label: 'Zeller review (same-day)', href: '/providers/zeller' }],
  },
  {
    term: 'SIM connectivity',
    short: 'Built-in mobile data in the terminal',
    definition: 'Some EFTPOS terminals include a SIM card that connects to the mobile data network (e.g. Optus 4G) independently of any WiFi. This means the terminal works on job sites without customer WiFi — new estates under construction, commercial plant rooms, switchboard rooms, and remote properties. Zeller Terminal 1 offers an optional Optus SIM plan for $15/month. Square Terminal and Stripe Reader do not have built-in SIM — they require WiFi or a phone hotspot.',
    related: [
      { label: 'Zeller SIM plan', href: '/providers/zeller' },
      { label: 'Zeller vs Square', href: '/compare/zeller-vs-square' },
    ],
  },
  {
    term: 'Offline mode',
    short: 'Taking payments with zero connectivity',
    definition: 'Offline mode allows a terminal to accept card payments when there is no internet connection at all — no WiFi, no mobile signal. The transaction is stored locally on the device and processed when connectivity is restored (typically within 24 hours). Square Terminal is the only mainstream Australian EFTPOS terminal with offline mode. It\'s useful for underground work, deep basements, and remote rural sites with no Optus coverage. There is a risk of later decline if the card has insufficient funds when processing occurs.',
    related: [{ label: 'Square review (offline mode)', href: '/providers/square' }],
  },
  {
    term: 'Tap to Pay',
    short: 'Accept card payments on your phone (no hardware)',
    definition: 'Tap to Pay (also called "Tap on Phone") lets you accept contactless card payments using only your iPhone or Android smartphone — no physical terminal required. The customer taps their card or phone to yours. Zeller, Square, and Stripe all offer Tap to Pay apps in Australia at the same rate as their hardware terminals. It\'s useful as a backup or for low-volume tradies who don\'t want to carry hardware, but the phone is your connectivity dependency.',
    related: [{ label: 'Compare providers', href: '/providers' }],
  },
  {
    term: 'Payment link',
    short: 'A URL that takes the customer to a payment page',
    definition: 'A payment link is a URL you send to a customer via SMS or email. They click it, enter their card details, and pay — without you being present. Payment links are useful for collecting deposits before a job starts, charging absent customers after completion, and sending invoices to commercial clients. Rates are slightly higher than in-person (Zeller: 1.7% + $0.25 vs 1.4% in-person). Tyro\'s payment links are 1.4% including GST — the lowest published rate for remote payments in Australia.',
    related: [
      { label: 'Tyro review', href: '/providers/tyro' },
      { label: 'How to get paid faster', href: '/blog/how-to-get-paid-faster-sole-trader-australia' },
    ],
  },
  {
    term: 'Surcharging',
    short: 'Passing card fees on to the customer',
    definition: 'Surcharging means adding a small fee to the customer\'s total to cover your card processing costs. Under Australian law (ASIC/ACCC), surcharges must not exceed your actual cost of acceptance — you cannot profit from them. At Zeller\'s 1.4% rate, a $500 job would attract a $7 surcharge. Most tradies either absorb the fee (simplest) or add a disclosed surcharge for larger jobs. Shift4 offers a "zero-cost" model where the terminal is configured to always surcharge customers, so the merchant pays nothing in processing fees.',
    related: [{ label: 'Surcharging guide', href: '/blog/surcharging-eftpos-tradies-australia-2026' }],
  },
  {
    term: 'Interchange fee',
    short: 'The fee paid to the card issuer (your bank, not visible to you)',
    definition: 'The interchange fee is the component of the merchant service fee that goes to the bank that issued the customer\'s card. It is set by Visa and Mastercard, not by your payment provider. For Australian debit cards, interchange is typically 0.2–0.4%. For premium credit cards (rewards, gold, black), it can be 1.2–2.0%. Most flat-rate providers (Zeller, Square, Stripe) blend all card types into one rate, so you pay the same whether the customer taps a debit card or a rewards credit card.',
    related: [{ label: 'EFTPOS fees guide', href: '/blog/eftpos-fees-tradies-australia-2026' }],
  },
  {
    term: 'MOTO payment',
    short: 'Mail order / telephone order — card-not-present over phone',
    definition: 'A MOTO (mail order / telephone order) payment is where you manually key in a customer\'s card number over the phone or via a virtual terminal in your dashboard. It\'s used for accepting payment from clients who can\'t be present and don\'t have access to email for a payment link. MOTO rates are higher than in-person rates (Zeller charges 1.75% + $0.25) to reflect the higher fraud risk of card-not-present transactions.',
    related: [],
  },
  {
    term: 'POS system',
    short: 'Point of sale — the full checkout system',
    definition: 'A POS (point of sale) system is a broader term than EFTPOS. It includes the software that manages inventory, receipts, and reporting — not just the card terminal. For tradies, a full POS system (like Square POS or Tyro integrated with ServiceM8) can automatically reconcile payments against jobs. Most sole traders and small teams don\'t need a POS system — a standalone EFTPOS terminal with invoicing is sufficient.',
    related: [],
  },
  {
    term: 'ABN (Australian Business Number)',
    short: 'Required to sign up for merchant accounts',
    definition: 'An ABN is required to sign up for any business payment account in Australia. All major EFTPOS providers — Zeller, Square, Stripe, Tyro, and Shift4 — require an ABN as part of the onboarding process. If you\'re a sole trader without an ABN, you can apply through the ATO\'s ABN registration portal (abr.gov.au). Approval is usually instant for existing businesses.',
    related: [{ label: 'Sole trader card payments guide', href: '/blog/accept-card-payments-sole-trader-australia' }],
  },
  {
    term: 'Same-day settlement',
    short: 'Funds available the day you take payment',
    definition: 'Same-day settlement means money from card transactions taken during the business day is available in your account before end of business the same day — not the next morning. Zeller and Tyro both offer same-day settlement, but funds settle to their own transaction accounts (Zeller Transaction Account, Tyro bank account) rather than your external bank. Moving funds to an external bank account is typically next-day. For most tradies using their Zeller account as their primary account, same-day is effectively immediate.',
    related: [{ label: 'Zeller review', href: '/providers/zeller' }],
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'EFTPOS & Payment Glossary for Australian Tradies',
    description: 'Definitions of EFTPOS, payment, and merchant services terms for Australian tradies — plain English, no jargon.',
    url: `${SITE}/glossary`,
    hasDefinedTerm: terms.map(t => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.definition,
      inDefinedTermSet: `${SITE}/glossary`,
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Glossary', item: `${SITE}/glossary` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: terms.slice(0, 6).map(t => ({
      '@type': 'Question',
      name: `What is ${t.term}?`,
      acceptedAnswer: { '@type': 'Answer', text: t.definition },
    })),
  },
]

function GlossaryTerm({ term, short, definition, related, index }) {
  const [open, setOpen] = useState(false)
  const id = term.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      id={id}
      className="border border-slate-200 rounded-2xl overflow-hidden bg-white"
    >
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 transition-colors"
      >
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-brand-dark">{term}</span>
            <span className="text-xs text-slate-400">—</span>
            <span className="text-xs text-slate-500">{short}</span>
          </div>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-slate-400"
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 border-t border-slate-100">
              <p className="text-sm text-slate-600 leading-relaxed">{definition}</p>
              {related.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {related.map((r, i) => (
                    <Link
                      key={i}
                      to={r.href}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:underline"
                    >
                      <LinkIcon size={11} />
                      {r.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function GlossaryPage() {
  return (
    <>
      <Meta
        title="EFTPOS Glossary for Australian Tradies — Plain English Definitions"
        description="Plain English definitions of EFTPOS, merchant service fees, settlement, surcharging, SIM connectivity, and more — written for Australian tradies, not accountants."
        canonical="/glossary"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-slate-900" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Reference</span>
            <span>·</span>
            <span>{terms.length} terms</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            EFTPOS Glossary for Australian Tradies
          </h1>
          <p className="hero-sub">
            Every payment term explained in plain English — no finance degree required.
          </p>
        </div>
      </header>

      <section className="section container-page max-w-2xl">
        <div className="space-y-3">
          {terms.map((t, i) => (
            <GlossaryTerm key={t.term} {...t} index={i} />
          ))}
        </div>

        <div className="mt-10 lg-blue rounded-2xl p-6">
          <p className="text-sm font-semibold text-brand-dark mb-1">Not sure which provider is right for you?</p>
          <p className="text-xs text-slate-600 mb-3">Answer 3 quick questions and get a personalised recommendation.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/#finder" className="text-sm font-semibold text-brand-blue hover:underline">Take the quiz →</Link>
            <Link to="/calculator" className="text-sm font-semibold text-brand-blue hover:underline">Calculate your costs →</Link>
            <Link to="/providers" className="text-sm font-semibold text-brand-blue hover:underline">Compare all providers →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
