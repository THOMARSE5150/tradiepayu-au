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
  { label: 'Tyro EFTPOS Review (2026) — Is It Worth It for High-Volume Tradies?' },
]

const comparisonHeaders = ['', 'Cost']
const comparisonRows = [
  { cells: ['Terminal hardware', 'Rental — no upfront purchase'] },
  { cells: ['Monthly terminal rental', 'Quote-dependent (not published)'] },
  { cells: ['SIM / connectivity', 'Built-in WiFi + SIM'] },
  {
    highlight: true,
    cells: ['In-person rate', 'Quote-based (typically 0.8%–1.4%)'],
  },
  { cells: ['Payment links', '1.4% (published)'] },
  { cells: ['Monthly account fee', 'Included in rental'] },
  { cells: ['Contract', 'Yes — minimum term required'] },
  { cells: ['Settlement', 'Same-day to Tyro account; next-day to external bank'] },
  { cells: ['Offline mode', 'No'] },
]

const faqs = [
  {
    q: 'Why doesn\'t Tyro publish its rates?',
    a: 'Tyro operates on a quote-based model. Rates depend on your monthly card volume, card mix (credit vs debit, Visa/Mastercard vs Amex), and business type. This is common with bank-aligned providers and differs from flat-rate competitors like Zeller, Square, and Stripe who publish a single rate for all merchants. The lack of transparency is the main criticism — you have to request a quote before you can compare costs.',
  },
  {
    q: 'Is Tyro good for tradies?',
    a: 'Tyro is well-suited for high-volume tradies ($20,000+/month in card turnover) who use trade management software like simPRO, ServiceM8, or Tradify, and who want a bank-backed provider with integrated EFTPOS. For smaller operators, flat-rate providers like Zeller Terminal 1 are simpler, cheaper at moderate volumes, and have no contract.',
  },
  {
    q: 'What volume do I need to justify Tyro?',
    a: 'The break-even depends on your negotiated rate. At $20,000/month, a 1.0% Tyro rate saves $80/month versus Zeller\'s 1.4% — enough to offset the terminal rental fee and contract commitment. Below $15,000/month, the flat-rate providers are usually more cost-effective and have no lock-in.',
  },
  {
    q: 'Does Tyro integrate with simPRO and ServiceM8?',
    a: 'Yes — Tyro has native integrations with simPRO, ServiceM8, Tradify, Xero, and MYOB. The integration connects job completion to payment on the same device, reducing double-entry between field service software and accounting. This is Tyro\'s primary differentiator for trade businesses.',
  },
  {
    q: 'Is Tyro owned by a bank?',
    a: 'Tyro was acquired by NAB in 2023. As an Australian bank-backed payment provider, Tyro has significantly lower failure risk than independent fintech startups. For tradies who prefer banking with established institutions, NAB ownership is reassuring.',
  },
  {
    q: 'Does Tyro have same-day settlement?',
    a: 'Tyro settles same-day to a Tyro Transaction Account, and next business day to an external bank account — the same model as Zeller. This is an advantage over Stripe (2-day settlement).',
  },
  {
    q: 'What should I ask Tyro when getting a quote?',
    a: 'Ask for: the processing rate by card type (Visa debit, Visa credit, Mastercard, Amex); the monthly terminal rental fee; the minimum contract term and early exit fee; settlement timing and which account it settles to; and whether the rate can be reviewed if your volume increases. Get these in writing before signing.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Tyro EFTPOS Review (2026) — Is It Worth It for High-Volume Tradies?',
    description: 'Independent review of Tyro EFTPOS for Australian tradies. Quote-based pricing, built-in SIM, same-day settlement, strong trade software integrations. Best for high-volume operators — not for small businesses.',
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=630&fit=crop&crop=center&q=80',
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
    url: `${SITE}/blog/tyro-eftpos-review-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Tyro EFTPOS Review (2026) — Is It Worth It for High-Volume Tradies?', item: `${SITE}/blog/tyro-eftpos-review-2026` },
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

export default function TyroReviewPost() {
  return (
    <>
      <Meta
        title="Tyro EFTPOS Review (2026) — Is It Worth It for High-Volume Tradies?"
        description="Independent review of Tyro EFTPOS for Australian tradies. Quote-based pricing, built-in SIM, same-day settlement, strong trade software integrations. Best for high-volume operators — not for small businesses."
        canonical="/blog/tyro-eftpos-review-2026"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=630&fit=crop&crop=center&q=80"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&h=560&fit=crop&crop=center&q=80"
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
            Tyro EFTPOS Review (2026) — Is It Worth It for High-Volume Tradies?
          </h1>
          <p className="hero-sub">
            NAB-backed, integrates with simPRO and ServiceM8, negotiated rates that can beat Zeller at volume. But no published pricing, contract lock-in, and monthly rental mean it\'s not for everyone.
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
            Tyro is worth investigating if you\'re processing $20,000 or more per month in card payments and use trade management software like simPRO, ServiceM8, or Tradify. Below that threshold, <Link to="/providers/zeller" className="text-brand-blue hover:underline font-medium">Zeller Terminal 1</Link>'s 1.4% flat rate, no contract, and no rental fee is almost certainly cheaper and simpler. The lack of published rates is a genuine transparency problem — you can\'t compare properly without getting a quote.
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
          <p className="text-xs text-slate-500 mt-3">Tyro does not publish transaction rates. The range shown (0.8%–1.4%) reflects typical negotiated outcomes for different volume tiers — actual rates depend on your turnover, card mix, and business type. Payment links rate of 1.4% is published on Tyro\'s website.</p>
        </div>
      </section>

      {/* Section 3: Why Tyro doesn\'t publish a rate */}
      <section className="section container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Tyro doesn\'t publish a rate</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Unlike <Link to="/providers/zeller" className="text-brand-blue hover:underline font-medium">Zeller</Link>, <Link to="/providers/square" className="text-brand-blue hover:underline font-medium">Square</Link>, and <Link to="/providers/stripe" className="text-brand-blue hover:underline font-medium">Stripe</Link> — all of which advertise a single flat rate — Tyro prices on a negotiated basis. Your rate depends on your monthly card volume, your mix of card types (Visa debit is cheaper than Visa credit, Amex costs more), and your industry.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            This is the same model traditional banks use for merchant facilities. It means high-volume businesses can negotiate below flat-rate pricing, but low-volume businesses are unlikely to get a competitive offer. For Tyro, this is by design — they\'re targeting larger trade businesses, not sole operators.
          </p>
          <div className="lg-light rounded-2xl p-5">
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong className="text-brand-dark">What this means in practice:</strong> You cannot compare Tyro\'s cost against a flat-rate provider without getting a quote first. If you\'re considering Tyro, request a quote with your average monthly volume and ask for a rate broken down by card type. Then model the total cost including the terminal rental fee against what you\'d pay on Zeller or Square.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 4: When Tyro beats Zeller */}
      <section className="section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            When Tyro beats Zeller
          </motion.h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            At high enough volume, a negotiated Tyro rate can save meaningful money versus a flat rate. Here\'s how the maths looks at different volume tiers, assuming a negotiated Tyro rate of 1.0% and a Zeller rate of 1.4% (plus $15/mo SIM).
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-5">
            {[
              {
                volume: '$10,000/month',
                zeller: '$155',
                tyro: '$100 + rental',
                verdict: 'Tyro rate advantage: ~$55 — likely erased by rental fee',
              },
              {
                volume: '$20,000/month',
                zeller: '$295',
                tyro: '$200 + rental',
                verdict: 'Tyro rate advantage: ~$95 — can offset rental at this volume',
              },
              {
                volume: '$40,000/month',
                zeller: '$575',
                tyro: '$400 + rental',
                verdict: 'Tyro rate advantage: ~$175 — clearly ahead after rental',
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
                <div className="text-sm font-semibold text-brand-dark mb-3">{item.volume}</div>
                <div className="text-xs text-slate-500 mb-1">Zeller (1.4% + $15 SIM)</div>
                <div className="text-lg font-bold text-slate-700 mb-2">{item.zeller}</div>
                <div className="text-xs text-slate-500 mb-1">Tyro (1.0% est.)</div>
                <div className="text-lg font-bold text-brand-dark mb-3">{item.tyro}</div>
                <p className="text-xs text-slate-500 leading-relaxed">{item.verdict}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            These figures use a hypothetical 1.0% Tyro rate for illustration. Your actual negotiated rate may be higher or lower. The terminal rental fee — which Tyro does not publish — must be factored in. Always get the rental amount in writing before signing.
          </p>
        </div>
      </section>

      {/* Section 5: Trade software integrations */}
      <section className="section container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Trade software integrations — Tyro\'s real differentiator</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            The strongest argument for Tyro isn\'t the rate — it\'s the integrations. Tyro connects directly to the field service management platforms that trade businesses actually run on, allowing payment to be processed from within the same system used to manage jobs.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                heading: 'simPRO',
                body: 'End-to-end field service management with Tyro EFTPOS integration. Job completion triggers a payment request on the terminal — no switching between apps. Used by larger trade businesses with multiple technicians.',
              },
              {
                heading: 'ServiceM8',
                body: 'Popular with sole operators and small trade businesses. Tyro integration allows invoice payment to be collected via the EFTPOS terminal when the job is marked complete in ServiceM8.',
              },
              {
                heading: 'Tradify',
                body: 'Job management for tradies and small contractors. Tyro integration connects job invoicing to payment collection on the terminal. Reduces the admin step of manually reconciling between systems.',
              },
              {
                heading: 'Xero and MYOB',
                body: 'Direct reconciliation of Tyro transactions into accounting. Payments match against invoices automatically, reducing end-of-month reconciliation time. Both are natively supported.',
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

      {/* Section 6: NAB ownership */}
      <section className="section-alt">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-brand-dark mb-4">NAB ownership — what it means for tradies</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Tyro was acquired by NAB in 2023. Before that, Tyro was an independent fintech — which meant some tradies were cautious about using a non-bank payment provider as a core part of their business. That concern is less relevant now.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              NAB ownership brings bank-grade support infrastructure, regulatory oversight as an Australian Deposit-taking Institution (ADI), and the financial stability of one of Australia\'s four major banks. For tradies who\'ve had bad experiences with startup payment providers shutting down or changing terms without notice, Tyro\'s banking parentage is a meaningful difference.
            </p>
            <div className="lg-light rounded-2xl p-5">
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong className="text-brand-dark">Practical note:</strong> NAB ownership doesn\'t change the quoting or contract process — you\'re still dealing with Tyro directly, not through NAB. But it does mean the provider has regulatory obligations that purely fintech competitors don\'t. Dispute resolution and fund protection follow Australian banking law.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: What to ask for */}
      <section className="section container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What to ask for when getting a Tyro quote</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            Because Tyro doesn\'t publish its pricing, the quality of the deal you get depends on how well you negotiate. Before signing anything, ask for these in writing:
          </p>
          <ul className="space-y-3 max-w-2xl">
            {[
              { label: 'Rate by card type', detail: 'Ask for separate rates for Visa debit, Visa credit, Mastercard debit, Mastercard credit, and Amex. Blended rates hide the real cost on high-credit-card-usage businesses.' },
              { label: 'Monthly terminal rental amount', detail: 'This is not published. Get the exact dollar figure and confirm whether it includes GST.' },
              { label: 'Minimum contract term', detail: 'Ask for the minimum term and the early termination fee if you cancel before it expires.' },
              { label: 'Rate review mechanism', detail: 'Ask whether rates can be renegotiated if your volume increases during the contract period. Get this in writing if they agree.' },
              { label: 'Settlement timing', detail: 'Confirm how long settlement takes to your external bank account — not just the Tyro Transaction Account.' },
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
      </section>

      {/* Verdict CTA */}
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
              Tyro is a legitimate option for established trade businesses running high volume through trade management software. The NAB backing, built-in SIM, same-day settlement, and deep simPRO/ServiceM8/Tradify integrations are real advantages. The dealbreakers for smaller operators: no published rate, contract lock-in, monthly rental fee, and the need to negotiate terms before you can compare costs. If you\'re under $15,000/month, start with Zeller — no contract, no rental, 1.4% flat, and you can switch to Tyro later if volume justifies it.
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/providers/tyro"
                className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-600 transition-colors"
              >
                Full Tyro review →
              </Link>
              <Link
                to="/compare/zeller-vs-tyro"
                className="inline-flex items-center gap-2 border border-brand-blue text-brand-blue font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Zeller vs Tyro comparison
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FaqSection items={faqs} title="Tyro EFTPOS — common questions" />
      <RelatedLinks slug="tyro" type="provider" />
    </>
  )
}
