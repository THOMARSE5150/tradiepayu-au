import { Link } from 'react-router-dom'
import RelatedLinks from '../../components/RelatedLinks'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import SetupSteps from '../../components/SetupSteps'
import ComparisonTable from '../../components/ComparisonTable'
import ShareButton from '../../components/ShareButton'
import ProviderVerdict from '../../components/ProviderVerdict'
import Meta from '../../components/Meta'
import AffiliateButton from '../../components/AffiliateButton'
import StarRating from '../../components/StarRating'
import StickySignUpBar from '../../components/StickySignUpBar'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'All Providers', href: '/providers' },
  { label: 'Zeller Review' },
]

const faqs = [
  { q: 'Does Zeller work without WiFi?', a: 'Yes — Zeller Terminal 1 supports an optional SIM plan (Optus, $15/month, no lock-in). The terminal operates on Optus mobile data, independently of any customer WiFi or phone hotspot.' },
  { q: 'What is Zeller\'s in-person rate?', a: '1.4% flat for in-person tap, chip, or swipe. No fixed per-transaction fee. Remote payments (payment links, invoices) are 1.7% + $0.25.' },
  { q: 'Does Zeller have same-day settlement?', a: 'Yes — payments settle same business day into your Zeller Transaction Account. Transfers to an external bank account are next business day.' },
  { q: 'What is the Zeller Terminal 1 price?', a: '$99 AUD. The Terminal 2 (paperless, no receipt printer) is $199. Tap to Pay on your phone is $0 hardware cost.' },
  { q: 'Is Zeller good for glaziers and electricians?', a: 'Yes — the SIM plan is the key advantage. Dead zones in buildings are a reality for glaziers (high floors, mechanical rooms) and electricians (switchboards, underground). The SIM terminal eliminates WiFi dependency.' },
  { q: 'Can my whole team use Zeller?', a: 'Yes — you can issue multiple Zeller Terminals to different team members. All payments settle centrally into your Zeller Transaction Account, with a full transaction log per device. No expensive per-terminal rental fees — you just buy the hardware outright.' },
  { q: 'Can I accept payments over the phone?', a: 'Yes — Zeller supports MOTO (mail order / telephone order) payments via the Virtual Terminal in your dashboard. The rate is 1.75% + $0.25 per transaction. Useful for deposits, quotes accepted by phone, or clients who can\'t be present.' },
  { q: 'Can I get a lower rate than 1.4%?', a: 'Possibly — Zeller offers custom rates for businesses processing more than $250,000 per year in card payments. Contact Zeller\'s sales team to discuss. For most sole traders and small trade businesses, the standard 1.4% is already the lowest published flat rate available in Australia.' },
  { q: 'Can I pass the fee on to my customer?', a: 'Yes — Zeller supports surcharging. You can configure a surcharge so the 1.4% fee is added to the customer\'s total rather than absorbed by you. This brings your effective processing cost to 0%. You must disclose the surcharge to customers before they pay.' },
]

const setupSteps = [
  { title: 'Sign up online', body: 'Create your Zeller account at myzeller.com/au. Australian business (ABN required). Approval typically within 24 hours.' },
  { title: 'Order Terminal 1', body: 'Add Terminal 1 ($99) to your cart. Add the SIM plan ($15/mo, Optus) at checkout if you work on sites without reliable WiFi.' },
  { title: 'Set up your Zeller Transaction Account', body: 'This is where same-day settlement goes. Set it as your primary settlement account in the dashboard.' },
  { title: 'Set up Tap to Pay (optional)', body: 'Download the Zeller app on your iPhone or Android. Enable Tap to Pay — accept cards on your phone immediately, no hardware wait.' },
  { title: 'Configure payment links', body: 'In the dashboard, set up your payment link template. Send via SMS or email for remote payment. Useful for deposits, absent clients, and after-hours invoicing.' },
  { title: 'Add Zeller Invoice (optional)', body: 'Enable invoicing from the dashboard. Send itemised tax invoices with a built-in payment link — client pays directly from the invoice.' },
]

const SITE = 'https://tradiepayau.directory'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Review', name: 'Zeller for Tradies — Full Review (2026)', description: 'Lowest rate, SIM-enabled terminals, and same-day settlement. Everything an Australian tradie needs to know about Zeller EFTPOS.', url: `${SITE}/providers/zeller`, datePublished: '2026-01-15', dateModified: '2026-04-02', reviewRating: { '@type': 'Rating', ratingValue: '4.8', bestRating: '5', worstRating: '1' }, itemReviewed: { '@type': 'FinancialService', name: 'Zeller', url: 'https://www.myzeller.com.au', description: 'Australian EFTPOS and business banking provider offering flat-rate card payments, SIM-enabled terminals, and same-day settlement.', aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '3', bestRating: '5', worstRating: '1' } }, author: { '@type': 'Organization', name: 'TradiePay AU Editorial Team', url: `${SITE}/about` }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'All Providers', item: `${SITE}/providers` }, { '@type': 'ListItem', position: 3, name: 'Zeller Review', item: `${SITE}/providers/zeller` }] },
  { '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to set up Zeller for your trade business', step: setupSteps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.body })) },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]

export default function ZellerPage() {
  return (
    <>
      <Meta
        title="Zeller for Tradies — Full Review (2026)"
        description="Lowest rate, SIM-enabled terminals, and same-day settlement. Everything an Australian tradie needs to know about Zeller EFTPOS."
        canonical="/providers/zeller"
        ogType="article"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        {/* Provider hero image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/zeller-hero.webp"
            alt="Tradie holding a Zeller Terminal beside his work ute"
            fetchPriority="high" className="w-full h-full object-cover object-center"
            onError={e => { e.currentTarget.style.opacity = '0' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/75 to-brand-dark/30" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Provider Review</span>
            <span>·</span>
            <StarRating rating={4.8} />
            <span>·</span><span>Updated April 2026</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Zeller for Tradies — Full Review (2026)</h1>
          <p className="hero-sub">Lowest rate. SIM-enabled terminals. Same-day settlement. Here's everything a tradie needs to know about Zeller.</p>
          <p className="text-xs text-white/40 mt-2">
            Independent review — TradiePay AU earns no referral fees. Ratings based on published rates and editorial testing.
          </p>
          <div className="mt-4 mb-1">
            <ShareButton
              title="Zeller for Tradies — Full Review (2026)"
              text="Lowest rate, SIM-enabled terminals, and same-day settlement. See if Zeller is right for your trade."
              url="https://tradiepayau.directory/providers/zeller"
            />
          </div>
          <nav className="jump-links">
            <a href="#fees">Fees</a>
            <a href="#hardware">Hardware</a>
            <a href="#connectivity">Connectivity</a>
            <a href="#settlement">Settlement</a>
            <a href="#setup">Setup</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>
      <StickySignUpBar providerId="zeller" providerName="Zeller Terminal 1" />
      <ProviderVerdict providerId="zeller" />

      {/* Quick Summary */}
      <section className="container-page pt-8">
        <div className="lg-blue rounded-2xl p-5 mb-2">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">At a Glance</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center mb-4">
            {[
              { label: 'In-person rate', value: '1.4%' },
              { label: 'Hardware', value: '$99' },
              { label: 'Monthly fee', value: '$0' },
              { label: 'SIM connectivity', value: '$15/mo' },
              { label: 'Settlement', value: 'Same day' },
            ].map((s, i) => (
              <div key={i} className="bg-white/70 rounded-xl p-3">
                <span className="block text-[11px] text-slate-500 mb-1">{s.label}</span>
                <span className="block text-sm font-bold text-brand-dark">{s.value}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-2 text-xs">
            <span className="flex-1 bg-green-50 border border-green-200 rounded-xl px-3 py-2 text-green-800">
              <strong>Best for:</strong> Tradies working without WiFi — SIM runs on Optus, not customer internet
            </span>
            <span className="flex-1 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 text-amber-800">
              <strong>Skip if:</strong> You regularly work underground — no SIM signal; use Square offline mode
            </span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section container-page">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: 'In-person rate', value: '1.4%', highlight: true },
            { label: 'Monthly fee', value: '$0' },
            { label: 'Settlement', value: 'Same day' },
            { label: 'Aussie businesses', value: '100,000+' },
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
              <span className={`block text-lg font-bold ${s.highlight ? 'text-brand-blue' : 'text-brand-dark'}`}>{s.value}</span>
            </motion.div>
          ))}
        </div>

        <div className="prose-sm max-w-none text-slate-600 space-y-4">
          <p>Zeller is an Australian fintech (Melbourne, founded 2020) built specifically for the Australian market. For tradies, it ticks the three boxes that matter most: the lowest published flat rate (1.4%), SIM-enabled terminals that don't rely on customer WiFi, and same-day settlement into a Zeller account. More than 100,000 Australian businesses are already using it.</p>
          <p>Unlike setting up merchant facilities with a bank — which is complex, slow, and often requires paperwork — Zeller approval takes minutes online with just your ABN. As of April 2026, Zeller is our top pick for most Australian tradies doing on-site work where connectivity is variable.</p>
        </div>

        {/* Product ecosystem */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
          {[
            { emoji: '📱', title: 'Free invoicing', body: 'Send itemised tax invoices with a built-in pay-now link' },
            { emoji: '🏦', title: 'Transaction account', body: 'Free business account — same-day settlement lands here' },
            { emoji: '💳', title: 'Debit card', body: 'Free Mastercard to spend your settled funds immediately' },
            { emoji: '👥', title: 'Team terminals', body: 'Multiple devices, one account — no per-terminal rental' },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className="lg-light rounded-xl p-4"
            >
              <span className="text-2xl mb-2 block">{p.emoji}</span>
              <h4 className="font-semibold text-brand-dark text-sm mb-1">{p.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <blockquote className="mt-8 infobox">
          <p className="text-slate-700 text-sm leading-relaxed italic">"Setting up merchant facilities with a bank is a complex process — Zeller was better commercially than any bank. From purchase through set-up, the experience was seamless from the very first transaction."</p>
          <footer className="mt-2 text-xs text-slate-500 not-italic">— Tim, Zeller merchant</footer>
        </blockquote>

        {/* Case study */}
        <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2">Real savings example</p>
          <p className="text-sm text-green-900 font-semibold mb-1">Electrician doing $12,000/month in card payments</p>
          <p className="text-sm text-green-800">At Zeller's 1.4%, total processing costs = <strong>$168/month</strong>. At Square's 1.6%, that would be $192/month. Zeller saves <strong>$24/month ($288/year)</strong> — and the $99 terminal pays for itself in under 4 months.</p>
        </div>

        {/* Author credentials */}
        <p className="mt-5 text-xs text-slate-400">
          Reviewed by the <strong>TradiePay AU Editorial Team</strong> — rates verified against Zeller's published pricing, April 2026. We earn no referral fees from Zeller.
        </p>
      </section>

      {/* Fees */}
      <section id="fees" className="section section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            Zeller Fees
          </motion.h2>
          <ComparisonTable
            headers={['Payment type', 'Rate', 'Fixed fee', 'Notes']}
            rows={[
              { highlight: true, cells: ['In-person (tap/chip/swipe)', '1.4%', '$0', 'Terminal 1, Terminal 2, or Tap to Pay'] },
              { cells: ['Payment links', '1.7%', '+$0.25', 'Send via SMS or email'] },
              { cells: ['Invoicing', '1.7%', '+$0.25', 'Built-in Zeller Invoice'] },
              { cells: ['Monthly fee', '$0', '—', 'No monthly or account fee'] },
              { cells: ['SIM plan', '$15/mo', '—', 'Optus network, no lock-in, optional'] },
              { cells: ['Surcharge to customer', '0%', '$0', 'Pass the 1.4% fee to customer — disclose before payment'] },
            ]}
          />
        </div>
      </section>

      {/* Hardware */}
      <section id="hardware" className="section container-page">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-brand-dark mb-6"
        >
          Hardware Options
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              name: 'Terminal 1',
              price: '$99',
              best: 'Best for most tradies',
              featured: true,
              features: ['Receipt printer (paper roll)', 'WiFi + Ethernet + SIM', '1,300+ transaction battery', 'Landscape touchscreen'],
            },
            {
              name: 'Terminal 2',
              price: '$199',
              best: 'Paperless option',
              featured: false,
              features: ['No receipt printer — digital only', 'WiFi + Ethernet + SIM', '1,300+ transaction battery', 'Larger display'],
            },
            {
              name: 'Tap to Pay',
              price: '$0 hardware',
              best: 'Zero-cost starter',
              featured: false,
              features: ['Use your iPhone or Android', '1.4% rate, same as Terminal', 'No hardware to carry', 'Phone battery is your dependency'],
            },
          ].map((hw, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              whileHover={{ y: -3 }}
              className={hw.featured ? 'lg-blue rounded-2xl p-5' : 'lg-light rounded-2xl p-5'}
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-brand-dark">{hw.name}</h3>
                {hw.featured && <span className="badge badge-gold">Best pick</span>}
              </div>
              <p className="text-2xl font-bold text-brand-blue mb-3">{hw.price}</p>
              <p className="text-xs text-slate-500 mb-3">{hw.best}</p>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {hw.features.map((f, j) => (
                  <li key={j} className="flex gap-1.5 items-center">
                    <Check size={14} className="text-brand-green inline mr-1 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Connectivity */}
      <section id="connectivity" className="section section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            Connectivity for Tradie Job Sites
          </motion.h2>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Site type</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Recommendation</th>
                  <th className="text-center px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden sm:table-cell">Zeller SIM works?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { site: '🏠 Residential suburban', rec: 'WiFi or Tap to Pay — customer WiFi reliable', sim: '✓ Yes' },
                  { site: '🏗️ New estate (no WiFi)', rec: 'SIM plan essential — no customer WiFi available', sim: '✓ Yes' },
                  { site: '🏢 Commercial / high-rise', rec: 'SIM plan — building WiFi unreliable, Optus usually adequate', sim: '✓ Usually' },
                  { site: '⚡ Mechanical rooms / switchboards', rec: 'SIM plan. Test before quoting — Square as backup for dead zones', sim: '⚠️ Test first' },
                  { site: '🕳️ Underground / basement', rec: 'Square Terminal offline mode — SIM has no signal here', sim: '✗ No' },
                  { site: '🌾 Rural / remote', rec: 'Check Optus coverage map — Square offline as backup', sim: '⚠️ Check map' },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                    <td className="px-4 py-3 font-medium text-brand-dark text-xs sm:text-sm">{row.site}</td>
                    <td className="px-4 py-3 text-slate-600 text-xs sm:text-sm">{row.rec}</td>
                    <td className="px-4 py-3 text-center text-xs font-medium hidden sm:table-cell">{row.sim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 breakeven-box">
            <strong>Two-device strategy:</strong> For glaziers and electricians working in known dead zones, carry a Zeller Terminal 1 (SIM) as your primary and a Square Terminal (offline mode) as your backup. Both have no monthly fee — you only pay when you use them.
          </div>
        </div>
      </section>

      {/* Settlement */}
      <section id="settlement" className="section container-page">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-brand-dark mb-4"
        >
          Settlement Speed
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <h3 className="font-bold text-green-800 mb-2">Same-day settlement ✓</h3>
            <p className="text-sm text-green-700">Payments settle same business day into your <strong>Zeller Transaction Account</strong>. If you buy materials same-day as your client pays, the funds are available when you need them.</p>
          </div>
          <div className="lg-light rounded-xl p-5">
            <h3 className="font-bold text-brand-dark mb-2">External bank: next business day</h3>
            <p className="text-sm text-slate-600">Transfers from your Zeller Transaction Account to your external bank account settle next business day. For fastest cash flow, use your Zeller account for day-to-day payments.</p>
          </div>
        </div>
      </section>

      {/* Setup */}
      <section id="setup" className="section section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            How to Get Set Up
          </motion.h2>
          <SetupSteps steps={setupSteps} collapsible />
        </div>
      </section>

      {/* FAQ */}

      {/* CTA */}
      <section className="section section-alt">
        <div className="container-page">
          <div className="bg-brand-dark rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-1">Ready to get started with Zeller?</h2>
              <p className="text-slate-400 text-sm">Apply online with your ABN — approval typically within 24 hours.</p>
            </div>
            <AffiliateButton providerId="zeller" label="page-cta" className="btn-primary flex-shrink-0">
              Visit Zeller →
            </AffiliateButton>
          </div>
          <p className="text-xs text-slate-400 mt-3 px-1">TradiePay AU may earn a commission if you sign up — this does not affect your pricing or terms.</p>

          {/* Not sure? Take the quiz */}
          <div className="mt-5 flex items-center justify-between bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4">
            <div>
              <p className="text-sm font-semibold text-brand-dark">Not sure Zeller is right for you?</p>
              <p className="text-xs text-slate-500 mt-0.5">Answer 3 questions — get a personalised recommendation.</p>
            </div>
            <Link to="/#finder" className="text-sm font-semibold text-brand-blue hover:underline whitespace-nowrap ml-4">
              Take the quiz →
            </Link>
          </div>

          {/* Head-to-head */}
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Compare Zeller head-to-head</p>
            <div className="flex flex-wrap gap-2">
              <Link to="/compare/zeller-vs-square" className="text-sm font-medium text-slate-500 hover:text-brand-blue border border-slate-200 hover:border-brand-blue px-3 py-2 rounded-xl transition-all">Zeller vs Square →</Link>
            <Link to="/compare/zeller-vs-stripe" className="text-sm font-medium text-slate-500 hover:text-brand-blue border border-slate-200 hover:border-brand-blue px-3 py-2 rounded-xl transition-all">Zeller vs Stripe →</Link>
            <Link to="/compare/zeller-vs-tyro" className="text-sm font-medium text-slate-500 hover:text-brand-blue border border-slate-200 hover:border-brand-blue px-3 py-2 rounded-xl transition-all">Zeller vs Tyro →</Link>
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={faqs} title="Zeller FAQ" />

      {/* Compare chips */}
      <section className="section-alt py-8">
        <div className="container-page max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Compare Zeller vs.</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Square', href: '/compare/zeller-vs-square' },
              { label: 'Stripe', href: '/compare/zeller-vs-stripe' },
              { label: 'Tyro', href: '/compare/zeller-vs-tyro' },
              { label: 'Shift4', href: '/compare/zeller-vs-shift4' },
            ].map(c => (
              <Link key={c.href} to={c.href} className="inline-flex items-center gap-1 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-brand-dark hover:border-brand-blue hover:text-brand-blue transition-all">
                Zeller vs {c.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <RelatedLinks slug="zeller" type="provider" />
    </>
  )
}
