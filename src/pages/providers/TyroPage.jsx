import { Link } from 'react-router-dom'
import RelatedLinks from '../../components/RelatedLinks'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import ShareButton from '../../components/ShareButton'
import ProviderVerdict from '../../components/ProviderVerdict'
import Meta from '../../components/Meta'
import AffiliateButton from '../../components/AffiliateButton'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'All Providers', href: '/providers' },
  { label: 'Tyro Review' },
]

const faqs = [
  { q: 'What is Tyro\'s in-person rate?', a: 'Tyro does not publish a single flat in-person rate — their merchant service fee is dependent on your turnover, card mix, and business type. You need to request a quote. This is the main transparency disadvantage vs Zeller and Square.' },
  { q: 'What is Tyro\'s Payment Links rate?', a: '1.4% including GST — this includes premium and international cards, which is unusually transparent and competitive for remote payment.' },
  { q: 'Is Tyro good for tradies?', a: 'Tyro suits tradies who invoice heavily via payment links rather than tap on site, or those already integrated with a POS system that partners with Tyro (like ServiceM8 or simPRO). For simple on-site payments, Zeller\'s published flat rate is more transparent.' },
  { q: 'Does Tyro have same-day settlement?', a: 'Yes — payments settle same business day into a Tyro transaction account. Next business day to an external bank account.' },
]

const SITE = 'https://tradiepayau.directory'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Review', name: 'Tyro for Tradies — Full Review (2026)', description: "Strong Australian bank-grade footprint and competitive payment links. In-person rate requires a quote — here's what tradies need to know.", url: `${SITE}/providers/tyro`, datePublished: '2026-01-15', reviewRating: { '@type': 'Rating', ratingValue: '3.8', bestRating: '5', worstRating: '1' }, itemReviewed: { '@type': 'FinancialService', name: 'Tyro', url: 'https://www.tyro.com', description: 'Australian specialist bank offering EFTPOS terminals, payment links, and merchant services for SMEs with bank-grade infrastructure.' }, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'All Providers', item: `${SITE}/providers` }, { '@type': 'ListItem', position: 3, name: 'Tyro Review', item: `${SITE}/providers/tyro` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]

export default function TyroPage() {
  return (
    <>
      <Meta
        title="Tyro for Tradies — Full Review (2026)"
        description="Strong Australian bank-grade footprint and competitive payment links. In-person rate requires a quote — here's what tradies need to know."
        canonical="/providers/tyro"
        ogType="article"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        {/* Provider hero image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&h=560&fit=crop&crop=center&q=80"
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
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Tyro for Tradies — Full Review (2026)</h1>
          <p className="hero-sub">Strong Australian bank-grade footprint. Competitive payment links. In-person rate requires a quote.</p>
          <div className="mt-4 mb-1">
            <ShareButton
              title="Tyro for Tradies — Full Review (2026)"
              text="Australian bank-grade EFTPOS with competitive payment links for tradies."
              url="https://tradiepayau.directory/providers/tyro"
            />
          </div>
                    <nav className="jump-links">
            <a href="#fees">Fees</a>
            <a href="#when-to-use">When to Use</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <section className="section container-page">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: 'In-person rate', value: 'Quote required' },
            { label: 'Payment links', value: '1.4% incl. GST', highlight: true },
            { label: 'Settlement', value: 'Same day (Tyro a/c)' },
            { label: 'Support', value: '7 days, 7am–9pm' },
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

        <div className="breakeven-box mb-8">
          <h3 className="font-bold text-amber-900 mb-2">Transparency warning</h3>
          <p className="text-amber-800">Tyro's in-person merchant service fee is not published as a flat rate. Before signing up, request your specific rate in writing, including the early termination conditions and any monthly fees for your account type.</p>
        </div>

        <div className="text-sm text-slate-600 space-y-3">
          <p>Tyro is a fully licensed Australian bank (AFSL 571048) with a strong footprint in the Australian business payments space. For tradies, the standout feature is the Payment Links rate — 1.4% including GST, which includes premium and international cards.</p>
          <p>The main disadvantage for tradies: the in-person terminal rate is not publicly listed. This creates friction in comparing Tyro against Zeller and Square without going through a sales conversation.</p>
        </div>
      </section>

      <section id="when-to-use" className="section section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            When Tyro Makes Sense
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'You invoice more than you tap on site', body: 'If 80%+ of your revenue comes via payment links (remote invoicing, quote acceptance deposits), Tyro\'s 1.4% including GST payment links rate is highly competitive.' },
              { title: 'You\'re integrated with a Tyro-partner job management system', body: 'Tyro integrates with job management software like ServiceM8, simPRO, and Fergus. If you\'re already on one of these platforms, the Tyro integration may reduce admin.' },
              { title: 'You want bank-grade security', body: 'Tyro is a fully licensed Australian bank, not just a payment processor. If bank-grade regulatory oversight matters to your business, Tyro provides it.' },
              { title: 'You need 7-day phone support', body: 'Tyro\'s support is available 7am–9pm Sydney time, 7 days a week, with an emergency after-hours pathway. Better coverage than Zeller\'s business hours.' },
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
        </div>
      </section>

      {/* Fees table */}
      <section id="fees" className="section section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-2"
          >
            Tyro Fees
          </motion.h2>
          <p className="text-sm text-slate-500 mb-5">In-person rate requires a quote — all other rates are publicly listed.</p>
          <ComparisonTable
            headers={['Payment type', 'Rate', 'Fixed fee', 'Notes']}
            rows={[
              { cells: ['In-person (terminal)', 'Quote required', '—', 'Depends on turnover, card mix, business type'] },
              { highlight: true, cells: ['Payment links', '1.4% incl. GST', '$0', 'Includes premium + international cards'] },
              { cells: ['Monthly fee', 'Varies', '—', 'Account type dependent — confirm before signing'] },
              { cells: ['Settlement (Tyro a/c)', 'Same day', '—', 'Into Tyro transaction account'] },
              { cells: ['Settlement (external)', 'Next day', '—', 'To your own bank account'] },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container-page">
          <div className="bg-brand-dark rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-1">Ready to get started with Tyro?</h2>
              <p className="text-slate-400 text-sm">Contact Tyro for a quote — no lock-in, no cancellation fees.</p>
            </div>
            <AffiliateButton providerId="tyro" label="page-cta" className="btn-primary flex-shrink-0">
              Visit Tyro →
            </AffiliateButton>
          </div>
          <p className="text-xs text-slate-400 mt-3 px-1">TradiePay AU may earn a commission if you sign up — this does not affect your pricing or terms.</p>

          {/* Head-to-head */}
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Compare Tyro head-to-head</p>
            <div className="flex flex-wrap gap-2">
              <Link to="/compare/zeller-vs-tyro" className="text-sm font-medium text-slate-500 hover:text-brand-blue border border-slate-200 hover:border-brand-blue px-3 py-2 rounded-xl transition-all">Zeller vs Tyro →</Link>
            <Link to="/compare/square-vs-tyro" className="text-sm font-medium text-slate-500 hover:text-brand-blue border border-slate-200 hover:border-brand-blue px-3 py-2 rounded-xl transition-all">Square vs Tyro →</Link>
            <Link to="/compare/stripe-vs-tyro" className="text-sm font-medium text-slate-500 hover:text-brand-blue border border-slate-200 hover:border-brand-blue px-3 py-2 rounded-xl transition-all">Stripe vs Tyro →</Link>
            <Link to="/compare/tyro-vs-shift4" className="text-sm font-medium text-slate-500 hover:text-brand-blue border border-slate-200 hover:border-brand-blue px-3 py-2 rounded-xl transition-all">Tyro vs Shift4 →</Link>
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={faqs} title="Tyro FAQ" />

      <RelatedLinks slug="tyro" type="provider" />
    </>
  )
}
