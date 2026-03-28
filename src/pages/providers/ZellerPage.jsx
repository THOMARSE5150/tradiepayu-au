import { Link } from 'react-router-dom'
import RelatedLinks from '../../components/RelatedLinks'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import SetupSteps from '../../components/SetupSteps'
import ComparisonTable from '../../components/ComparisonTable'
import Meta from '../../components/Meta'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Best EFTPOS for Tradies', href: '/#compare-all' },
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
  { '@context': 'https://schema.org', '@type': 'Review', name: 'Zeller for Tradies — Full Review (2026)', description: 'Lowest rate, SIM-enabled terminals, and same-day settlement. Everything an Australian tradie needs to know about Zeller EFTPOS.', url: `${SITE}/providers/zeller`, reviewRating: { '@type': 'Rating', ratingValue: '4.8', bestRating: '5', worstRating: '1' }, itemReviewed: { '@type': 'FinancialService', name: 'Zeller', url: 'https://www.myzeller.com.au' }, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Best EFTPOS for Tradies', item: `${SITE}/#compare-all` }, { '@type': 'ListItem', position: 3, name: 'Zeller Review', item: `${SITE}/providers/zeller` }] },
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
            <span>·</span><span>Updated March 2026</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Zeller for Tradies — Full Review (2026)</h1>
          <p className="hero-sub">Lowest rate. SIM-enabled terminals. Same-day settlement. Here's everything a tradie needs to know about Zeller.</p>
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
          <p>Unlike setting up merchant facilities with a bank — which is complex, slow, and often requires paperwork — Zeller approval takes minutes online with just your ABN. As of March 2026, Zeller is our top pick for most Australian tradies doing on-site work where connectivity is variable.</p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { site: 'Residential suburban', rec: 'WiFi or Tap to Pay — customer WiFi or phone data both reliable', icon: '🏠' },
              { site: 'New estate (no WiFi installed)', rec: 'SIM plan essential — no customer WiFi, Optus data covers most metro estates', icon: '🏗️' },
              { site: 'Commercial / high-rise', rec: 'SIM plan or phone hotspot — building WiFi unreliable, Optus indoor coverage usually adequate', icon: '🏢' },
              { site: 'Mechanical rooms / switchboards', rec: 'SIM plan, test signal before quoting. For known dead zones, carry Square Terminal as backup', icon: '⚡' },
              { site: 'Underground / basement', rec: 'SIM will likely have no signal. Square Terminal offline mode is the only option', icon: '🕳️' },
              { site: 'Rural / remote', rec: 'Optus rural coverage varies. Check Optus coverage map. Backup: Square Terminal offline mode', icon: '🌾' },
            ].map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                whileHover={{ y: -3 }}
                className="lg-light rounded-2xl p-4 flex gap-3"
              >
                <span className="text-2xl">{row.icon}</span>
                <div>
                  <h4 className="font-semibold text-brand-dark text-sm mb-1">{row.site}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{row.rec}</p>
                </div>
              </motion.div>
            ))}
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
          <SetupSteps steps={setupSteps} />
        </div>
      </section>

      {/* FAQ */}
      {/* CTA — TODO: replace href with affiliate referral link when approved */}
      <section className="section container-page">
        <div className="max-w-md">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Ready to get started with Zeller?</h2>
          <p className="text-slate-600 text-sm mb-4">Apply on Zeller's website — approval and account setup typically takes one business day.</p>
          <a
            href="https://www.myzeller.com/au"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Visit Zeller website →
          </a>
          <p className="text-xs text-slate-400 mt-3">Link goes directly to Zeller's website. TradiePay AU may earn a commission if you sign up — this does not affect your pricing or terms.</p>
        </div>
      </section>

      <FaqSection items={faqs} title="Zeller FAQ" />

      {/* Related */}
      <RelatedLinks slug="zeller" type="provider" />
    </>
  )
}
