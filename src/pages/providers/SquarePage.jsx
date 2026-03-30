import { Link } from 'react-router-dom'
import RelatedLinks from '../../components/RelatedLinks'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import ShareButton from '../../components/ShareButton'
import ProviderVerdict from '../../components/ProviderVerdict'
import Meta from '../../components/Meta'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'All Providers', href: '/providers' },
  { label: 'Square Review' },
]

const faqs = [
  { q: 'Does Square Terminal work offline?', a: 'Yes — Square Terminal supports offline payments. Cards are accepted with no connectivity and processed when you reconnect within 24 hours. Important: some card types are excluded, and there is a risk of later decline. Not suitable as your primary method, but excellent backup for known dead zones.' },
  { q: 'What is Square\'s in-person rate in Australia?', a: '1.6% for in-person tap, chip, or swipe. No fixed per-transaction fee. Invoice/remote payments are 2.2% with no fixed fee.' },
  { q: 'Does Square Terminal have a SIM card?', a: 'No — Square Terminal is WiFi and Ethernet only. For cellular connectivity you need to use your phone as a hotspot, or an external cellular router. This is the main reason many tradies prefer Zeller Terminal 1 with its built-in SIM plan.' },
  { q: 'When should a tradie choose Square over Zeller?', a: 'Specifically for zero-signal job sites: underground, deep basements, large concrete structures with no Optus coverage. Square\'s offline mode is the only way to take a payment in these environments. For all other scenarios, Zeller\'s lower rate wins.' },
]

const SITE = 'https://tradiepayau.directory'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Review', name: 'Square for Tradies — Full Review (2026)', description: 'Best offline capability in the market. The right backup terminal for Australian tradies who work in dead zones.', url: `${SITE}/providers/square`, reviewRating: { '@type': 'Rating', ratingValue: '4.5', bestRating: '5', worstRating: '1' }, itemReviewed: { '@type': 'FinancialService', name: 'Square', url: 'https://squareup.com/au' }, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'All Providers', item: `${SITE}/providers` }, { '@type': 'ListItem', position: 3, name: 'Square Review', item: `${SITE}/providers/square` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]

export default function SquarePage() {
  return (
    <>
      <Meta
        title="Square for Tradies — Full Review (2026)"
        description="Best offline capability in the market. The right backup terminal for Australian tradies who work in dead zones."
        canonical="/providers/square"
        ogType="article"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        {/* Provider hero image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=1400&h=560&fit=crop&crop=center&q=80"
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
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Square for Tradies — Full Review (2026)</h1>
          <p className="hero-sub">Best offline capability in the market. The right backup terminal for tradies who work in dead zones.</p>
          <div className="mt-4 mb-1">
            <ShareButton
              title="Square for Tradies — Full Review (2026)"
              text="Best offline capability in the market — is Square right for your trade?"
              url="https://tradiepayau.directory/providers/square"
            />
          </div>
                    <nav className="jump-links">
            <a href="#fees">Fees</a>
            <a href="#offline">Offline Mode</a>
            <a href="#vs-zeller">vs Zeller</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <section className="section container-page">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: 'In-person rate', value: '1.6%' },
            { label: 'Invoice rate', value: '2.2%' },
            { label: 'Terminal price', value: '$329' },
            { label: 'Offline mode', value: '✓ Yes', highlight: true },
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
              <span className={`block text-lg font-bold ${s.highlight ? 'text-brand-green' : 'text-brand-dark'}`}>{s.value}</span>
            </motion.div>
          ))}
        </div>
        <div className="text-sm text-slate-600 space-y-3">
          <p>Square is a mature, globally trusted platform. For Australian tradies, its standout feature is offline mode — the ability to accept card payments with zero internet connectivity. This is the reason to choose Square Terminal over Zeller for specific job types.</p>
          <p>The trade-off: Square Terminal is $329 (vs Zeller's $99), the in-person rate is higher (1.6% vs 1.4%), and there's no built-in SIM — you depend on WiFi or your phone hotspot.</p>
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
            Square Fees
          </motion.h2>
          <ComparisonTable
            headers={['Payment type', 'Rate', 'Notes']}
            rows={[
              { highlight: false, cells: ['In-person (tap/chip/swipe)', '1.6%', 'Terminal, Tap to Pay, or reader'] },
              { cells: ['Invoice / remote', '2.2%', 'No fixed per-transaction fee'] },
              { cells: ['Monthly fee', '$0', 'No monthly account fee'] },
            ]}
          />
        </div>
      </section>

      <section id="offline" className="section container-page">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-4"
          >
            Offline Mode — How It Works
          </motion.h2>
          <div className="infobox mb-6">
            <p className="font-semibold text-brand-dark mb-2">When to use it: underground work, concrete basements, switchboard rooms, remote properties beyond Optus coverage.</p>
          </div>
          <ol className="space-y-4">
            {[
              { title: 'Enable offline mode in the Square app', body: 'Toggle offline mode on in the Square app before you lose connectivity. The Terminal will accept payments without internet.' },
              { title: 'Take the payment on site', body: 'Customer taps, inserts, or swipes. The Terminal stores the transaction data locally.' },
              { title: 'Reconnect within 24 hours', body: 'The Terminal must reconnect to Square\'s servers within 24 hours. If you don\'t reconnect in time, transactions will expire.' },
              { title: 'Transactions are processed', body: 'Once reconnected, Square processes the stored transactions. Most will succeed — but there is a risk of later decline if the card was cancelled or had insufficient funds while offline.' },
            ].map((step, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="flex gap-4"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                <div>
                  <h4 className="font-semibold text-brand-dark text-sm mb-1">{step.title}</h4>
                  <p className="text-sm text-slate-600">{step.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
          <div className="mt-5 breakeven-box">
            <strong>Important warnings:</strong> Some card types are excluded from offline mode. For high-value jobs in dead zones, consider requesting a deposit payment link before arriving on site (requires connectivity at quote time) and only taking the balance offline.
          </div>
        </div>
      </section>

      <section id="vs-zeller" className="section section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            Square vs Zeller for Tradies
          </motion.h2>
          <ComparisonTable
            headers={['Feature', 'Zeller Terminal 1 + SIM', 'Square Terminal']}
            rows={[
              { highlight: false, cells: ['In-person rate', <strong className="text-brand-blue">1.4%</strong>, '1.6%'] },
              { cells: ['Hardware cost', <strong className="text-brand-blue">$99</strong>, '$329'] },
              { cells: ['SIM / cellular', <span className="text-green-700 font-semibold flex items-center gap-1"><Check size={14} className="text-brand-green" /> $15/mo (Optus)</span>, <span className="flex items-center gap-1"><X size={14} className="text-red-400" /> WiFi only</span>] },
              { cells: ['Offline mode', <span className="flex items-center gap-1"><X size={14} className="text-red-400" /> No</span>, <span className="text-green-700 font-semibold flex items-center gap-1"><Check size={14} className="text-brand-green" /> Yes (24hr window)</span>] },
              { cells: ['Settlement', <span className="text-green-700 font-semibold">Same day</span>, 'Next day'] },
              { cells: ['Receipt printer', '✓ Terminal 1', '✓ Built-in'] },
              { cells: ['Recommendation', 'Primary for most job sites', 'Backup for dead zones'] },
            ]}
          />
          <div className="mt-5 lg-light rounded-2xl p-4 text-sm text-slate-700">
            <strong>The two-device strategy:</strong> Many glaziers, electricians, and plumbers carry both. Zeller Terminal 1 ($99, SIM, 1.4%) as primary. Square Terminal ($329, offline) as backup for known dead zones. Neither has a monthly fee — you only pay when you use them.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container-page">
          <div className="bg-brand-dark rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-1">Ready to get started with Square?</h2>
              <p className="text-slate-400 text-sm">Sign up free online — no monthly fees, no contracts.</p>
            </div>
            <a
              href="https://squareup.com/au"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-shrink-0"
            >
              Visit Square →
            </a>
          </div>
          <p className="text-xs text-slate-400 mt-3 px-1">TradiePay AU may earn a commission if you sign up — this does not affect your pricing or terms.</p>

          {/* Head-to-head */}
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Compare Square head-to-head</p>
            <div className="flex flex-wrap gap-2">
              <Link to="/compare/zeller-vs-square" className="text-sm font-medium text-slate-500 hover:text-brand-blue border border-slate-200 hover:border-brand-blue px-3 py-2 rounded-xl transition-all">Zeller vs Square →</Link>
            <Link to="/compare/square-vs-stripe" className="text-sm font-medium text-slate-500 hover:text-brand-blue border border-slate-200 hover:border-brand-blue px-3 py-2 rounded-xl transition-all">Square vs Stripe →</Link>
            <Link to="/compare/square-vs-tyro" className="text-sm font-medium text-slate-500 hover:text-brand-blue border border-slate-200 hover:border-brand-blue px-3 py-2 rounded-xl transition-all">Square vs Tyro →</Link>
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={faqs} title="Square FAQ" />

      <RelatedLinks slug="square" type="provider" />
    </>
  )
}
