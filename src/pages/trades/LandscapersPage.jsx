import { Link } from 'react-router-dom'
import RelatedLinks from '../../components/RelatedLinks'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import Meta from '../../components/Meta'
import QuickVerdict from '../../components/QuickVerdict'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'By Trade', href: '/trades' },
  { label: 'Best EFTPOS for Landscapers' },
]

const faqs = [
  { q: 'What is the best EFTPOS for landscapers?', a: 'Zeller Terminal 1 with the SIM plan. Outdoor sites almost always have Optus mobile coverage, so the SIM terminal works without site WiFi. The 1.4% rate and same-day settlement make it the most cost-effective option for on-completion residential and commercial garden work.' },
  { q: 'What EFTPOS works outdoors with no WiFi?', a: 'Zeller Terminal 1 with the SIM plan (Optus, $15/month) is ideal for outdoor landscaping — it doesn\'t require site WiFi or your phone\'s hotspot. Zeller Tap to Pay on your phone also works fine outdoors using your standard phone data.' },
  { q: 'How do landscapers handle deposit and final payment?', a: 'Collect a deposit by Zeller payment link at quote acceptance. Send the link before starting work. On completion, tap on site for the balance, or send a final payment link if the client isn\'t present. Both settle same-day into your Zeller account.' },
  { q: 'How do landscapers get paid when the client isn\'t home?', a: 'Send a Zeller payment link via SMS as you finish the job. Most clients pay within the hour. For regular maintenance clients, set up Stripe automated billing — charges their card automatically on the day of service.' },
  { q: 'How much does EFTPOS cost a landscaping business per month?', a: 'At $8,000/month in card revenue, Zeller costs $112/month (1.4%) plus $15 SIM = $127 total. Square at the same volume is $128 (1.6%). The costs are almost identical — the decision comes down to same-day settlement (Zeller) vs next-business-day (Square), which matters when you need to pay staff or order plants and materials promptly.' },
  { q: 'Is it hard to set up EFTPOS compared to a bank?', a: 'No — Zeller and Square approve accounts online in minutes with just your ABN. Bank merchant accounts require paperwork and often take days or weeks. For a new landscaping business, Zeller Tap to Pay (free to start, no hardware) is the fastest path to accepting card payments.' },
  { q: 'Can landscapers invoice councils and commercial property managers?', a: 'Yes — for council contracts, strata, and commercial grounds maintenance, use Stripe invoicing. Send a formal tax invoice with your ABN, scope of work, and GST to the accounts payable contact. Include your contract reference number. Commercial clients typically pay net 30 days — set terms accordingly in Stripe.' },
]

const SITE = 'https://tradiepayau.directory'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for Landscapers in Australia (2026)', name: 'Best EFTPOS for Landscapers in Australia (2026)', image: { '@type': 'ImageObject', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=630&fit=crop&crop=center&q=80', width: 1200, height: 630 }, description: 'Outdoor sites, variable job values, and deposit-on-booking models — the best payment setup for Australian landscaping and garden service businesses.', url: `${SITE}/trades/landscapers`, datePublished: '2026-01-15', dateModified: '2026-03-31', author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'By Trade', item: `${SITE}/trades` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Landscapers in Australia (2026)', item: `${SITE}/trades/landscapers` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Best EFTPOS for Landscapers in Australia', serviceType: 'EFTPOS Payment Processing for Landscapers', areaServed: { '@type': 'Country', name: 'Australia' }, provider: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, url: `${SITE}/trades/landscapers` },
]

export default function LandscapersPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Landscapers in Australia (2026)"
        description="Outdoor sites, variable job values, and deposit-on-booking models — the best payment setup for Australian landscaping and garden service businesses."
        canonical="/trades/landscapers"
        ogType="article"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        {/* Trade hero image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&h=560&fit=crop&crop=center&q=80"
            alt=""
            fetchPriority="high" className="w-full h-full object-cover"
            onError={e => { e.currentTarget.style.opacity = '0' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Trade Guide</span>
            <span>·</span><span>Updated March 2026</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Landscapers in Australia (2026)</h1>
          <p className="hero-sub">Outdoor sites, variable job values, deposit-on-booking models. Here's the payment setup that works for landscaping and garden services.</p>
          <nav className="jump-links">
            <a href="#picks">Comparison</a>
            <a href="#challenges">Context</a>
            <a href="#scenarios">Job Scenarios</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>
      <QuickVerdict
        pick="Zeller Terminal 1 + SIM"
        rate="1.4%"
        hardware="$99 + $15/mo SIM"
        reason="SIM for new estates and rural properties. Tap to Pay for mow-and-go routes."
        providerSlug="zeller"
      />

      <section id="picks" className="section section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            Top Picks for Landscapers
          </motion.h2>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'SIM', 'Settlement', 'Best for']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Top pick</span></>, '1.4%', '$99', '✓ $15/mo', 'Same day', 'All landscaping — new estates, rural, commercial'] },
              { cells: ['Zeller Tap to Pay', '1.4%', '$0', '✗ (phone data)', 'Same day', 'Mow-and-go operators, low volume'] },
              { cells: ['Square Terminal', '1.6%', '$329', '✗', 'Next day', 'Rural properties beyond Optus range'] },
              { cells: ['Stripe (recurring)', '1.7% + $0.30', '~$98', '✓ optional', '2 days', 'Regular maintenance contracts, automated billing'] },
            ]}
          />
          <p className="mt-4 text-xs text-slate-500">Need a deeper comparison? <Link to="/compare/zeller-vs-square" className="text-brand-blue font-medium hover:underline">Zeller vs Square — full head-to-head →</Link></p>
        </div>
      </section>

      <section id="challenges" className="section container-page">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-brand-dark mb-6"
        >
          What Makes Landscaping Different
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'Outdoor sites — coverage is usually fine', body: 'Landscapers work outdoors, which means mobile coverage is generally better than most trade environments. But no-WiFi sites (new builds, rural properties) still require a SIM-enabled terminal.', rec: 'SIM terminal for independence from site WiFi.' },
            { title: 'Wide job value range', body: 'From a $120 lawn mow to a $15,000 full garden makeover. Low-value repeat clients benefit from tap-and-go. High-value projects need deposit management.', rec: 'Flexible — tap for small jobs, deposit + balance for big projects.' },
            { title: 'Client not always present at completion', body: 'Regular maintenance clients are often at work when you complete the job. Payment needs to happen without them being there.', rec: 'Send payment link on completion, client pays from their phone.' },
            { title: 'Materials and subcontractor costs', body: 'Large jobs involve materials (plants, mulch, pavers, irrigation) and sometimes subcontractors. Same-day settlement matters when you\'re fronting significant material costs.', rec: 'Same-day settlement for materials cash flow.' },
          ].map((c, i) => (
            <details key={i} className="lg-light rounded-2xl p-4 group open:ring-1 open:ring-brand-blue/20 transition-all">
              <summary className="font-semibold text-brand-dark cursor-pointer list-none flex items-center justify-between gap-3">
                <span>{c.title}</span>
                <svg className="w-4 h-4 text-slate-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
              </summary>
              <p className="text-sm text-slate-600 leading-relaxed mt-3 mb-2">{c.body}</p>
              <div className="infobox py-2 px-2 text-xs text-brand-blue font-medium">Payment need: {c.rec}</div>
            </details>
          ))}
        </div>
      </section>

      <section id="scenarios" className="section container-page">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-brand-dark mb-6"
        >
          Payment Playbook by Job Type
        </motion.h2>
        <div className="space-y-4">
          {[
            { title: 'Regular lawn maintenance — client not home', body: 'Finish the job. Send a Zeller payment link via SMS before packing up the trailer. Most regular clients pay within the hour. For your most reliable recurring clients, consider Stripe automated billing to remove the send-and-wait step entirely.' },
            { title: 'Residential garden makeover — deposit + balance', body: 'At quote acceptance, send a 30–50% deposit via Zeller payment link. Don\'t start work until the deposit clears. On day of completion, tap on site for the balance (client present) or send a final payment link (client absent). Same-day settlement means the materials invoice can be settled the same day the client pays.' },
            { title: 'Commercial garden maintenance contract', body: 'Monthly invoice via Zeller or your job management software. Include your ABN, services rendered, and GST breakdown. Offer bank transfer (PayID) or card payment link. For large monthly contracts, bank transfer avoids the card processing fee entirely.' },
            { title: 'New estate — no WiFi', body: 'Zeller Terminal 1 with SIM. Outdoor sites on new estates have Optus coverage in most metro and near-metro areas. The SIM terminal doesn\'t need the homeowner\'s WiFi or your phone hotspot. Tap on site, drive away.' },
            { title: 'Rural and acreage properties', body: 'Optus coverage can be patchy on large rural properties. If you regularly work in known no-coverage areas, Square Terminal\'s offline mode is the backup. For most rural residential work within 60km of a capital city, Zeller\'s SIM will cover it.' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="flex gap-4"
            >
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
              <div>
                <h4 className="font-semibold text-brand-dark mb-1">{s.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FaqSection items={faqs} title="FAQ for Landscapers" />

      <RelatedLinks slug="landscapers" type="trade" />
    </>
  )
}
