import { Link } from 'react-router-dom'
import providers from '../../data/providers.json'
import RelatedLinks from '../../components/RelatedLinks'
import { motion } from 'framer-motion'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import ProviderVerdict from '../../components/ProviderVerdict'
import Meta from '../../components/Meta'
import AffiliateButton from '../../components/AffiliateButton'
import SetupSteps from '../../components/SetupSteps'
import StickyProviderBar from '../../components/StickyProviderBar'
import SectionNav from '../../components/SectionNav'
import ProviderHero from '../../components/ProviderHero'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'All Providers', href: '/providers' },
  { label: 'Stripe Review' },
]


const setupSteps = [
  { title: 'Create a Stripe account', body: 'Sign up at stripe.com/au. ABN required. Approval is typically same-day. Stripe\'s verification is stricter than Zeller — have your ID ready.' },
  { title: 'Order Stripe BBPOS WisePad 3', body: 'Purchase the Stripe BBPOS WisePad 3 ($89) from the Stripe dashboard. The WisePad 3 requires a device to operate — it connects via Bluetooth to your phone.' },
  { title: 'Set up Stripe Invoicing', body: 'Enable Stripe Invoicing in the dashboard. Configure invoice templates with your ABN, payment terms, and automatic reminder schedules.' },
  { title: 'Configure payment links', body: 'Create payment link templates for deposits and remote billing. Stripe payment links work on any device and can be embedded in your website or sent via SMS.' },
  { title: 'Integrate with your website (optional)', body: 'If you have a booking site, use Stripe\'s plugin (WordPress, Squarespace) or API to accept payments directly. This is Stripe\'s key advantage over other providers.' },
]
const faqs = [
  { q: 'Is Stripe good for tradies?', a: 'Stripe is best for tradies who need website integration, online booking deposits, or automated recurring billing. For simple on-site tap-and-go, Zeller\'s 1.4% rate beats Stripe\'s 1.7% + $0.10. Use Stripe when you need its API, recurring billing, or 24/7 support.' },
  { q: 'What is Stripe\'s in-person rate in Australia?', a: '1.7% + $0.10 per transaction for the Stripe Reader. Tap to Pay on your phone adds $0.15 per authorisation on top — making phone-only Stripe more expensive at volume.' },
  { q: 'Does Stripe have same-day settlement?', a: 'No — Stripe\'s standard payout in Australia is 2 business days. Faster payout options exist but typically require Stripe\'s higher-tier accounts.' },
  { q: 'When should I use Stripe instead of Zeller?', a: 'Use Stripe when: (1) you have a website or booking system that needs payment API integration, (2) you have regular weekly/fortnightly clients and want fully automated recurring billing, or (3) you process international cards regularly.' },
  { q: 'Does Stripe have a monthly fee?', a: 'No — Stripe charges no monthly fee on standard accounts. You pay only when you process a payment: 1.7% + $0.10 for domestic cards in person, or 1.7% + $0.30 for online/invoice payments. International cards attract a 1.5% additional fee.' },
  { q: 'Can Stripe send automatic invoice reminders?', a: 'Yes — Stripe Invoicing supports automatic payment reminders on unpaid invoices. You can configure reminder sequences (e.g., 3 days before due, on due date, 7 days overdue). This is a significant advantage over Zeller for tradies with 14–30 day commercial invoicing terms.' },
  { q: 'Does Stripe work for taking deposits before a job starts?', a: 'Yes — Stripe payment links are the simplest way to collect a deposit. Send a link via SMS or email at booking confirmation. The customer pays online before you arrive. Funds clear in 2 business days. For same-day-cleared deposits, Zeller payment links settle faster.' },
  { q: 'Can I use Stripe with my existing website or booking software?', a: 'Yes — Stripe has the most comprehensive API and plugin library of any payment provider in Australia. If your website is on Squarespace, WordPress, or a custom build, Stripe likely has a direct integration. This is its core advantage over Zeller and Square for tradies with an online presence.' },
]

const SITE = 'https://tradiepayau.directory'
const _p = providers.find(p => p.id === 'stripe')
const lastVerified = _p?.lastVerified ?? '2026-04-05'
const lastVerifiedDisplay = new Date(lastVerified).toLocaleString('en-AU', { month: 'long', year: 'numeric' })
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Review', name: 'Stripe for Tradies — Full Review (2026)', description: 'Best for website integration, online deposits, and automated recurring billing. Not the cheapest on-site, but the most powerful for digital-first Australian tradie operations.', url: `${SITE}/providers/stripe`, datePublished: '2026-01-15', dateModified: lastVerified, reviewRating: { '@type': 'Rating', ratingValue: '4.2', bestRating: '5', worstRating: '1' }, itemReviewed: { '@type': 'FinancialService', name: 'Stripe', url: 'https://stripe.com/au', description: 'Global payments infrastructure provider offering API-first payment processing, EFTPOS readers, and automated invoicing in Australia.', aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.2', reviewCount: '3', bestRating: '5', worstRating: '1' } }, author: { '@type': 'Organization', name: 'TradiePay AU Editorial Team', url: `${SITE}/about` }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'All Providers', item: `${SITE}/providers` }, { '@type': 'ListItem', position: 3, name: 'Stripe Review', item: `${SITE}/providers/stripe` }] },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to set up Stripe for your trade business', step: setupSteps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.body })) },
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

      <ProviderHero
        providerId="stripe"
        heading="Stripe for Tradies — Full Review (2026)"
        subheading="Best for website integration, online deposits, and automated recurring billing. Not the cheapest on-site, but the most powerful for digital-first operations."
        bgImage="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=900&h=560&fit=crop&crop=center&q=80"
        bgImageAlt=""
        rating={4.2}
        crumbs={crumbs}
        keyStats={[
          { label: 'Rate', value: '1.7%+$0.10' },
          { label: 'Hardware', value: '$89' },
          { label: 'Settlement', value: '2 days' },
        ]}
        signupLabel="Get Stripe →"
        signupIntent="signup"
        lastVerifiedDisplay={lastVerifiedDisplay}
        navItems={[
          { href: '#fees', label: 'Fees' },
          { href: '#when-to-use', label: 'When to Use' },
          { href: '#recurring', label: 'Recurring Billing' },
          { href: '#faq', label: 'FAQ' },
        ]}
        shareTitle="Stripe for Tradies — Full Review (2026)"
        shareText="API-first payments with invoicing and recurring billing for Australian tradies."
        shareUrl="https://tradiepayau.directory/providers/stripe"
      />

      <StickyProviderBar providerId="stripe" />
      <SectionNav sections={[{id:'fees',label:'Fees'},{id:'when-to-use',label:'When to Use'},{id:'recurring',label:'Recurring'},{id:'faq',label:'FAQ'}]} cta={<AffiliateButton providerId="stripe" label="section-nav" campaign="provider-nav" intent="signup" className="px-3 py-1.5 bg-brand-blue text-white text-xs font-semibold rounded-xl hover:bg-blue-600 transition-colors">Get Stripe →</AffiliateButton>} />

      {/* Quick Summary */}
      <section className="container-page pt-8">
        <div className="lg-light rounded-2xl p-5 border border-slate-200 mb-2">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">At a Glance</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center mb-4">
            {[
              { label: 'In-person rate', value: '1.7% + $0.10' },
              { label: 'Hardware', value: '$89 (WisePad 3)' },
              { label: 'Monthly fee', value: '$0' },
              { label: 'SIM connectivity', value: '✗ No' },
              { label: 'Settlement', value: '2 days' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-3 border border-slate-100">
                <span className="block text-[11px] text-slate-500 mb-1">{s.label}</span>
                <span className="block text-sm font-bold text-brand-dark">{s.value}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-2 text-xs">
            <span className="flex-1 bg-green-50 border border-green-200 rounded-xl px-3 py-2 text-green-800">
              <strong>Best for:</strong> Website integration, recurring billing, automated invoice reminders
            </span>
            <span className="flex-1 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 text-amber-800">
              <strong>Skip if:</strong> You mainly take on-site payments — Zeller is cheaper at 1.4% with SIM connectivity
            </span>
          </div>
        </div>
      </section>

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
              { cells: ['In-person (Reader)', '1.7%', '+$0.10', 'BBPOS WisePad 3 ($89 ex GST)'] },
              { cells: ['Tap to Pay (phone)', '1.7%', '+$0.10 + $0.15/auth', '$0.15 surcharge per authorisation'] },
              { cells: ['Online / payment link', '1.7%', '+$0.30', 'Standard Stripe online rate'] },
              { cells: ['Recurring (Stripe Billing)', '1.7%', '+$0.30', 'Automated — no manual send'] },
              { cells: ['International cards', '3.5%', '+$0.30', 'For non-AU cards'] },
              { cells: ['Monthly fee', '$0', '—', 'No monthly account fee'] },
            ]}
          />
          <div className="mt-4 breakeven-box">
            <strong>Tap to Pay note:</strong> At $0.15/auth, Stripe Tap to Pay adds up. Breakeven vs the reader ($89): approximately 593 transactions. If you do more than ~50 transactions/month, the reader pays for itself within 12 months.
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

      {/* CTA */}
      <section className="section section-alt">
        <div className="container-page">
          <div className="bg-brand-dark rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-1">Ready to get started with Stripe?</h2>
              <p className="text-slate-400 text-sm">Create an account in minutes — no monthly fees.</p>
            </div>
            <AffiliateButton providerId="stripe" label="page-cta" intent="signup" className="btn-primary flex-shrink-0">
              Create Stripe account →
            </AffiliateButton>
          </div>
          <p className="text-xs text-slate-400 mt-3 px-1">TradiePay AU may earn a commission if you sign up — this does not affect your pricing or terms.</p>
          <div className="mt-5 flex items-center justify-between bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4">
            <div>
              <p className="text-sm font-semibold text-brand-dark">Not sure Stripe is right for you?</p>
              <p className="text-xs text-slate-500 mt-0.5">Answer 3 questions — get a personalised recommendation.</p>
            </div>
            <Link to="/#finder" className="text-sm font-semibold text-brand-blue hover:underline whitespace-nowrap ml-4">
              Take the quiz →
            </Link>
          </div>

          {/* Head-to-head */}
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Compare Stripe head-to-head</p>
            <div className="flex flex-wrap gap-2">
              <Link to="/compare/zeller-vs-stripe" className="text-sm font-medium text-slate-500 hover:text-brand-blue border border-slate-200 hover:border-brand-blue px-3 py-2 rounded-xl transition-all">Zeller vs Stripe →</Link>
            <Link to="/compare/square-vs-stripe" className="text-sm font-medium text-slate-500 hover:text-brand-blue border border-slate-200 hover:border-brand-blue px-3 py-2 rounded-xl transition-all">Square vs Stripe →</Link>
            <Link to="/compare/stripe-vs-tyro" className="text-sm font-medium text-slate-500 hover:text-brand-blue border border-slate-200 hover:border-brand-blue px-3 py-2 rounded-xl transition-all">Stripe vs Tyro →</Link>
            </div>
          </div>
        </div>
      </section>

      
      {/* Setup */}
      <section id="setup" className="section section-alt">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">How to Get Set Up with Stripe</h2>
          <SetupSteps steps={setupSteps} collapsible />
        </div>
      </section>

      <FaqSection items={faqs} title="Stripe FAQ" />

      {/* Compare chips */}
      <section className="section-alt py-8">
        <div className="container-page max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Compare Stripe vs.</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Zeller', href: '/compare/zeller-vs-stripe' },
              { label: 'Square', href: '/compare/square-vs-stripe' },
              { label: 'Tyro', href: '/compare/stripe-vs-tyro' },
              { label: 'Shift4', href: '/compare/stripe-vs-shift4' },
            ].map(c => (
              <Link key={c.href} to={c.href} className="inline-flex items-center gap-1 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-brand-dark hover:border-brand-blue hover:text-brand-blue transition-all">
                Stripe vs {c.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks slug="stripe" type="provider" />
    </>
  )
}
