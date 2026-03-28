import { Link } from 'react-router-dom'
import RelatedLinks from '../../components/RelatedLinks'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import Meta from '../../components/Meta'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Best EFTPOS for Tradies', href: '/#compare-all' },
  { label: 'Stripe Review' },
]

const faqs = [
  { q: 'Is Stripe good for tradies?', a: 'Stripe is best for tradies who need website integration, online booking deposits, or automated recurring billing. For simple on-site tap-and-go, Zeller\'s 1.4% rate beats Stripe\'s 1.7% + $0.10. Use Stripe when you need its API, recurring billing, or 24/7 support.' },
  { q: 'What is Stripe\'s in-person rate in Australia?', a: '1.7% + $0.10 per transaction for the Stripe Reader. Tap to Pay on your phone adds $0.15 per authorisation on top — making phone-only Stripe more expensive at volume.' },
  { q: 'Does Stripe have same-day settlement?', a: 'No — Stripe\'s standard payout in Australia is 2 business days. Faster payout options exist but typically require Stripe\'s higher-tier accounts.' },
  { q: 'When should I use Stripe instead of Zeller?', a: 'Use Stripe when: (1) you have a website or booking system that needs payment API integration, (2) you have regular weekly/fortnightly clients and want fully automated recurring billing, or (3) you process international cards regularly.' },
]

const SITE = 'https://tradiepayau.directory'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Review', name: 'Stripe for Tradies — Full Review (2026)', description: 'Best for website integration, online deposits, and automated recurring billing. Not the cheapest on-site, but the most powerful for digital-first Australian tradie operations.', url: `${SITE}/providers/stripe`, reviewRating: { '@type': 'Rating', ratingValue: '4.2', bestRating: '5', worstRating: '1' }, itemReviewed: { '@type': 'FinancialService', name: 'Stripe', url: 'https://stripe.com/au' }, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Best EFTPOS for Tradies', item: `${SITE}/#compare-all` }, { '@type': 'ListItem', position: 3, name: 'Stripe Review', item: `${SITE}/providers/stripe` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]

export default function StripePage() {
  return (
    <>
      <Meta
        title="Stripe for Tradies — Full Review (2026)"
        description="Best for website integration, online deposits, and automated recurring billing. Not the cheapest on-site, but the most powerful for digital-first Australian tradie operations."
        canonical="/providers/stripe"
        ogType="article"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        {/* Provider hero image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1400&h=560&fit=crop&crop=center&q=80"
            alt=""
            fetchPriority="high" className="w-full h-full object-cover"
            onError={e => { e.currentTarget.style.opacity = '0' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Provider Review</span>
            <span>·</span><span>Updated March 2026</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Stripe for Tradies — Full Review (2026)</h1>
          <p className="hero-sub">Best for website integration, online deposits, and automated recurring billing. Not the cheapest on-site, but the most powerful for digital-first operations.</p>
          <nav className="jump-links">
            <a href="#fees">Fees</a>
            <a href="#when-to-use">When to Use</a>
            <a href="#recurring">Recurring Billing</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <section className="section container-page">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: 'In-person rate', value: '1.7% + $0.10' },
            { label: 'Tap to Pay surcharge', value: '$0.15/auth' },
            { label: 'Settlement', value: '2 days' },
            { label: 'Recurring billing', value: '✓ Automated', highlight: true },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="lg-light rounded-xl p-4 text-center"
            >
              <span className="block text-xs text-slate-500 mb-1">{s.label}</span>
              <span className={`block text-lg font-bold ${s.highlight ? 'text-brand-purple' : 'text-brand-dark'}`}>{s.value}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="fees" className="section section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            Stripe Fees
          </motion.h2>
          <ComparisonTable
            headers={['Payment type', 'Rate', 'Fixed fee', 'Notes']}
            rows={[
              { cells: ['In-person (Reader)', '1.7%', '+$0.10', 'BBPOS WisePad 3 (~$98)'] },
              { cells: ['Tap to Pay (phone)', '1.7%', '+$0.10 + $0.15/auth', '$0.15 surcharge per authorisation'] },
              { cells: ['Online / payment link', '1.7%', '+$0.30', 'Standard Stripe online rate'] },
              { cells: ['Recurring (Stripe Billing)', '1.7%', '+$0.30', 'Automated — no manual send'] },
              { cells: ['International cards', '3.5%', '+$0.30', 'For non-AU cards'] },
              { cells: ['Monthly fee', '$0', '—', 'No monthly account fee'] },
            ]}
          />
          <div className="mt-4 breakeven-box">
            <strong>Tap to Pay note:</strong> At $0.15/auth, Stripe Tap to Pay adds up. Breakeven vs the reader (~$98): approximately 653 transactions. If you do more than ~55 transactions/month, the reader pays for itself within 12 months.
          </div>
        </div>
      </section>

      <section id="when-to-use" className="section container-page">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-brand-dark mb-6"
        >
          When to Choose Stripe
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'You have a website with online booking', body: 'Stripe\'s API is industry-leading. If your booking platform (ServiceM8, Tradify, or a custom site) needs payment integration, Stripe is the standard.' },
            { title: 'You want fully automated recurring billing', body: 'Stripe Billing lets you charge a client\'s card automatically on a schedule — weekly, fortnightly, monthly. Client enters card once; you never manually send a payment link again.' },
            { title: 'You process international clients', body: 'Stripe handles multi-currency and international cards better than Zeller or Square. If you have overseas-based property owners as clients, Stripe handles it cleanly.' },
            { title: 'You need 24/7 support', body: 'Stripe offers 24/7 phone, chat, and email support. Zeller is business hours only. For high-stakes payment operations, Stripe\'s support coverage is a genuine advantage.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              whileHover={{ y: -3 }}
              className="lg-light rounded-2xl p-5"
            >
              <h3 className="font-semibold text-brand-dark mb-2 text-sm">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="recurring" className="section section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-4"
          >
            Automated Recurring Billing for Tradies
          </motion.h2>
          <p className="text-slate-600 text-sm mb-6">For cleaners, landscapers, and maintenance contractors with regular clients — Stripe Billing removes the manual send-and-wait step entirely.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { step: '1', title: 'Set up a subscription', body: 'Create a recurring payment in Stripe Dashboard — set the amount, frequency, and start date.' },
              { step: '2', title: 'Client enters card once', body: 'Send the client a Stripe checkout link. They enter their card once via a secure Stripe-hosted page.' },
              { step: '3', title: 'Auto-charged on schedule', body: 'Stripe charges the card automatically every week / fortnight / month. You get notified when each charge succeeds.' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                whileHover={{ y: -3 }}
                className="lg-light rounded-2xl p-5"
              >
                <div className="w-8 h-8 rounded-full bg-brand-purple text-white text-sm font-bold flex items-center justify-center mb-3">{s.step}</div>
                <h4 className="font-semibold text-brand-dark mb-1 text-sm">{s.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — TODO: replace href with affiliate referral link when approved */}
      <section className="section container-page">
        <div className="max-w-md">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Ready to get started with Stripe?</h2>
          <p className="text-slate-600 text-sm mb-4">Create a free Stripe account on their website — no monthly fee, pay only when you take a payment.</p>
          <a
            href="https://stripe.com/au"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Visit Stripe website →
          </a>
          <p className="text-xs text-slate-400 mt-3">Link goes directly to Stripe's website. TradiePay AU may earn a commission if you sign up — this does not affect your pricing or terms.</p>
        </div>
      </section>

      <FaqSection items={faqs} title="Stripe FAQ" />

      <RelatedLinks slug="stripe" type="provider" />
    </>
  )
}
