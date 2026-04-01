import { Link } from 'react-router-dom'
import RelatedLinks from '../../components/RelatedLinks'
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
  { label: 'Shift4 Review' },
]

const faqs = [
  { q: 'What is Shift4 (formerly Smartpay)?', a: 'Shift4 is an Australian EFTPOS provider operating under the "zero-cost EFTPOS" model. The merchant pays nothing in processing fees — instead, customers pay a small surcharge at the point of sale. Hardware is rented rather than purchased outright.' },
  { q: 'Is "zero cost EFTPOS" actually free?', a: 'For the merchant, yes — in terms of processing costs. But your customers pay the surcharge. Whether this is appropriate depends on your clientele. Tradies working with price-sensitive residential customers or in premium service contexts may find surcharging damages the customer relationship.' },
  { q: 'What terminal does Shift4 use in Australia?', a: 'Shift4 primarily deploys the PAX A920 — an Android-based handheld EFTPOS terminal with a touchscreen, built-in printer, and mobile (SIM) connectivity. It supports tap, chip, and PIN.' },
  { q: 'Does Shift4 have built-in mobile connectivity?', a: 'Yes — the A920 terminals promoted by Shift4 include built-in SIM connectivity. You are not reliant on customer WiFi, which makes them suitable for on-site tradie use.' },
  { q: 'What are the risks of signing up with Shift4?', a: 'The main risk is contract lock-in. Unlike flat-rate providers (Zeller, Square), Shift4 does not publish its merchant service fee or contract terms publicly. Always request: the full merchant agreement, early termination fee, minimum term length, and total cost over the contract period before signing.' },
  { q: 'How does Shift4 compare to Zeller for tradies?', a: "Zeller charges you 1.4% — transparent, no lock-in, no contract. Shift4 charges your customers a surcharge — you pay nothing, but the fee is opaque and contract terms vary. If your customers are comfortable with surcharging and you're cash-flow constrained, Shift4 has merit. If you want simplicity and transparency, Zeller wins." },
  { q: 'How much does the surcharge cost the customer with Shift4?', a: "The surcharge passed to customers with Shift4 varies but is typically 1.5–2.0% of the transaction value. On a $500 plumbing job, the customer pays $7.50–$10 extra. On a $5,000 renovation, that's $75–$100. Whether customers accept this depends on context — it's common in hospitality but less expected from tradies." },
  { q: 'Can I exit my Shift4 contract early?', a: 'Early termination fees with Shift4 vary by contract and are not publicly published. Before signing, request: the minimum contract term, the monthly rental fee for the terminal, and the exact early termination fee in dollar terms. Flat-rate providers like Zeller and Square have no contract and no exit fee — hardware is purchased outright.' },
]

const SITE = 'https://tradiepayau.directory'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Review', name: 'Shift4 for Tradies — Full Review (2026)', description: 'Independent review of Shift4 (formerly Smartpay) EFTPOS for Australian tradies. Zero-cost surcharging model, PAX A920 terminal, built-in mobile connectivity.', url: `${SITE}/providers/shift4`, datePublished: '2026-01-15', dateModified: '2026-03-31', reviewRating: { '@type': 'Rating', ratingValue: '3.5', bestRating: '5', worstRating: '1' }, itemReviewed: { '@type': 'FinancialService', name: 'Shift4', url: 'https://www.shift4.com/au', description: 'EFTPOS provider (formerly Smartpay) offering zero-cost surcharging terminals on contract for Australian merchants.' }, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'All Providers', item: `${SITE}/providers` }, { '@type': 'ListItem', position: 3, name: 'Shift4 Review', item: `${SITE}/providers/shift4` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]

export default function Shift4Page() {
  return (
    <>
      <Meta
        title="Shift4 for Tradies — Full Review (2026)"
        description="Shift4 (formerly Smartpay) reviewed for Australian tradies. Zero-cost surcharging model, PAX A920 terminal, built-in mobile SIM. What tradies need to know before signing."
        canonical="/providers/shift4"
        ogType="article"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        {/* Provider hero image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=900&h=560&fit=crop&crop=center&q=80"
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
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Shift4 for Tradies — Full Review (2026)</h1>
          <p className="hero-sub">Zero-cost EFTPOS via customer surcharging. No upfront hardware. Built-in mobile connectivity. Here's what tradies need to know before signing.</p>
          <div className="mt-4 mb-1">
            <ShareButton
              title="Shift4 for Tradies — Full Review (2026)"
              text="Zero-cost EFTPOS via surcharging — what tradies need to know before signing."
              url="https://tradiepayau.directory/providers/shift4"
            />
          </div>
                    <nav className="jump-links">
            <a href="#how-it-works">How It Works</a>
            <a href="#hardware">Hardware</a>
            <a href="#vs-zeller">vs Zeller</a>
            <a href="#warning">Before You Sign</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Key stats */}
      <section className="section container-page">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: 'Merchant rate', value: '$0', highlight: true },
            { label: 'Customer surcharge', value: 'Quote' },
            { label: 'Hardware', value: 'Rental' },
            { label: 'Mobile SIM', value: '✓ Built-in', highlight: true },
          ].map((s, i) => (
            <div key={i} className="lg-light rounded-xl p-4 text-center">
              <span className="block text-xs text-slate-500 mb-1">{s.label}</span>
              <span className={`block text-lg font-bold ${s.highlight ? 'text-brand-green' : 'text-brand-dark'}`}>{s.value}</span>
            </div>
          ))}
        </div>
        <div className="text-sm text-slate-600 space-y-3">
          <p>Shift4 (formerly Smartpay) operates a "zero-cost EFTPOS" model in Australia. The merchant pays no processing fees — instead, a surcharge is passed to the customer at the point of payment. Hardware is rented rather than purchased, so there is no upfront capital outlay.</p>
          <p>The primary terminal is the <strong>PAX A920</strong> — an Android-based handheld EFTPOS with a touchscreen, built-in printer, and mobile SIM connectivity. For on-site tradie use, the built-in SIM is the standout practical advantage.</p>
        </div>

        {/* Warning box */}
        <div id="warning" className="mt-6 rounded-xl p-5 text-sm border-l-4 border-amber-400" style={{ background: 'rgba(255,251,235,0.9)', borderTop: '1px solid rgba(252,211,77,0.4)' }}>
          <p className="font-semibold text-amber-900 mb-2">⚠ Before you sign — ask for these in writing:</p>
          <ul className="space-y-1 text-amber-800 list-disc list-inside">
            <li>The full merchant agreement and minimum contract term</li>
            <li>The early termination fee (ETF) — can be substantial</li>
            <li>The actual surcharge % your customers will pay</li>
            <li>What happens to the terminal if you cancel mid-contract</li>
          </ul>
        </div>
      </section>

      {/* How surcharging works */}
      <section id="how-it-works" className="section section-alt">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">How Zero-Cost EFTPOS Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { step: '1', title: 'Customer taps to pay', body: 'Your customer pays by card as normal on the PAX A920 terminal.' },
              { step: '2', title: 'Surcharge is added', body: 'A surcharge (set by the provider, typically 1–2%) is added automatically at the terminal. The customer pays the total including surcharge.' },
              { step: '3', title: 'You receive the full amount', body: "Shift4 collects the surcharge. You receive 100% of your invoice value — your processing cost is $0." },
            ].map((s, i) => (
              <div key={i} className="lg-light rounded-2xl p-5">
                <div className="w-8 h-8 rounded-full bg-brand-blue text-white text-sm font-bold flex items-center justify-center mb-3">{s.step}</div>
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="infobox">
            <p className="font-semibold text-brand-dark mb-1">Is surcharging legal in Australia?</p>
            <p className="text-slate-600">Yes, but the surcharge must not exceed the actual cost of card acceptance. Excessive surcharging is regulated by ASIC/ACCC. Shift4's surcharge is set by the provider within legal limits — you do not control the surcharge amount.</p>
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section id="hardware" className="section container-page">
        <h2 className="text-2xl font-bold text-brand-dark mb-6">PAX A920 Terminal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <ComparisonTable
              headers={['Feature', 'PAX A920']}
              rows={[
                { cells: ['Form factor', 'Handheld Android terminal'] },
                { cells: ['Connectivity', 'Mobile SIM (built-in) + WiFi'] },
                { cells: ['Receipt printer', '✓ Built-in thermal'] },
                { cells: ['Touchscreen', '✓ Yes'] },
                { cells: ['Tap / chip / PIN', '✓ All supported'] },
                { cells: ['Cost to you', 'Rental — no upfront cost'] },
              ]}
            />
          </div>
          <div className="space-y-4">
            <div className="lg-light rounded-2xl p-5">
              <h3 className="font-semibold text-brand-dark mb-2 text-sm">For tradies: the built-in SIM is the key feature</h3>
              <p className="text-sm text-slate-600">The A920's built-in mobile connectivity means you're not dependent on customer WiFi or your phone hotspot. This is the same practical advantage as the Zeller Terminal 1 with SIM plan — useful at building sites, renovations, and commercial jobs.</p>
            </div>
            <div className="lg-light rounded-2xl p-5">
              <h3 className="font-semibold text-brand-dark mb-2 text-sm">No offline mode</h3>
              <p className="text-sm text-slate-600">The A920 does not have confirmed offline mode capability. For genuine zero-signal sites, Square Terminal remains the only option.</p>
            </div>
          </div>
        </div>
      </section>

      {/* vs Zeller */}
      <section id="vs-zeller" className="section section-alt">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Shift4 vs Zeller for Tradies</h2>
          <ComparisonTable
            headers={['Feature', 'Zeller Terminal 1 + SIM', 'Shift4 (A920)']}
            rows={[
              { highlight: false, cells: ['Merchant rate', <strong className="text-brand-blue">1.4% flat</strong>, <strong className="text-brand-green">$0 (surcharging)</strong>] },
              { cells: ['Customer pays', 'Nothing extra', 'Surcharge (~1–2%)'] },
              { cells: ['Hardware cost', <strong className="text-brand-blue">$99 to own</strong>, 'Rental (no upfront)'] },
              { cells: ['Mobile SIM', <span className="text-green-700 font-semibold">✓ $15/mo (Optus)</span>, <span className="text-green-700 font-semibold">✓ Built-in</span>] },
              { cells: ['Contract', <strong className="text-brand-blue">No lock-in</strong>, 'Quote — ask before signing'] },
              { cells: ['Fee transparency', <strong className="text-brand-blue">Published flat rate</strong>, 'Requires quote'] },
              { cells: ['Offline mode', '✗ No', '✗ No'] },
              { cells: ['Settlement', 'Same day (Zeller account)', 'Not publicly stated'] },
            ]}
          />
          <div className="mt-5 lg-light rounded-2xl p-5 text-sm text-slate-700">
            <strong>Bottom line:</strong> If your customers are fine with a surcharge and you want zero cash outlay, Shift4 is worth a quote. If you want transparency, no lock-in, and the lowest published rate, Zeller is the better choice for most tradies.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container-page">
          <div className="bg-brand-dark rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-1">Ready to get started with Shift4?</h2>
              <p className="text-slate-400 text-sm">Contact Shift4 for a quote — request written terms before signing.</p>
            </div>
            <AffiliateButton providerId="shift4" label="page-cta" className="btn-primary flex-shrink-0">
              Visit Shift4 →
            </AffiliateButton>
          </div>
          <p className="text-xs text-slate-400 mt-3 px-1">TradiePay AU may earn a commission if you sign up — this does not affect your pricing or terms.</p>

          {/* Head-to-head */}
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Compare Shift4 head-to-head</p>
            <div className="flex flex-wrap gap-2">
              <Link to="/compare/zeller-vs-shift4" className="text-sm font-medium text-slate-500 hover:text-brand-blue border border-slate-200 hover:border-brand-blue px-3 py-2 rounded-xl transition-all">Zeller vs Shift4 →</Link>
            <Link to="/compare/square-vs-shift4" className="text-sm font-medium text-slate-500 hover:text-brand-blue border border-slate-200 hover:border-brand-blue px-3 py-2 rounded-xl transition-all">Square vs Shift4 →</Link>
            <Link to="/compare/stripe-vs-shift4" className="text-sm font-medium text-slate-500 hover:text-brand-blue border border-slate-200 hover:border-brand-blue px-3 py-2 rounded-xl transition-all">Stripe vs Shift4 →</Link>
            <Link to="/compare/tyro-vs-shift4" className="text-sm font-medium text-slate-500 hover:text-brand-blue border border-slate-200 hover:border-brand-blue px-3 py-2 rounded-xl transition-all">Tyro vs Shift4 →</Link>
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={faqs} title="Shift4 FAQ" />

      <RelatedLinks slug="shift4" type="provider" />
    </>
  )
}
