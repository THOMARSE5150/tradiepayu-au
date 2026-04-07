import { Link } from 'react-router-dom'
import RelatedLinks from '../../components/RelatedLinks'
import TradeCompareLinks from '../../components/TradeCompareLinks'
import { STATES } from '../../data/states'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import Meta from '../../components/Meta'
import QuickVerdict from '../../components/QuickVerdict'
import AffiliateButton from '../../components/AffiliateButton'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'By Trade', href: '/trades' },
  { label: 'Best EFTPOS for Glaziers' },
]

const challenges = [
  { title: 'Dead zones in buildings', body: 'Glaziers often work in stairwells, lift shafts, high floors of steel-framed buildings, and mechanical rooms — environments with weak or no mobile coverage. A WiFi-dependent terminal is useless here.', rec: 'SIM terminal (primary) + Square Terminal offline mode (backup).' },
  { title: 'Emergency call-outs at any hour', body: 'Broken windows, shopfront smash-and-grabs, storm damage — glazing emergencies happen at 2am. Payment infrastructure needs to work the same at midnight as at midday.', rec: 'Zeller Tap to Pay on your phone. No hardware to forget, works 24/7.' },
  { title: 'Building management and property managers', body: 'Commercial glazing jobs are often billed to the building manager or property management company, not the person on site. Remote billing is the standard workflow.', rec: 'Zeller payment links or Stripe invoicing — email to accounts department.' },
  { title: 'High job values with split billing', body: 'Large glazing jobs — shopfronts, curtain walls, full-floor installations — may require a deposit at quote acceptance and balance on completion.', rec: 'Zeller payment link for deposit, terminal for balance on completion.' },
]

const faqs = [
  { q: 'What is the best EFTPOS for glaziers?', a: 'Zeller Terminal 1 with the SIM plan is the primary pick. For dead zones inside buildings — stairwells, lift shafts, mechanical rooms — add Square Terminal as a backup for its offline mode. The two-device strategy costs ~$428 hardware total and covers every scenario.' },
  { q: 'What EFTPOS works in building dead zones?', a: 'Square Terminal\'s offline mode is the only option for genuine zero-connectivity sites. Accept the payment, reconnect when you leave the building. There\'s a risk of later decline, but it\'s the only way to take payment in a dead zone.' },
  { q: 'How do glaziers bill property managers?', a: 'Send a Zeller or Stripe payment link to the property manager\'s email or accounts department. Include your ABN, job description, and GST breakdown. Stripe invoicing is more polished for commercial billing.' },
  { q: 'How do glaziers handle emergency call-out payment?', a: 'Zeller Tap to Pay on your phone is the easiest emergency payment method — no hardware to forget, always on you, 1.4% rate, same-day settlement.' },
  { q: 'How much does EFTPOS cost a glazing business per month?', a: 'At $6,000/month in card revenue, Zeller costs $84/month (1.4%) plus $15 SIM = $99. Square at the same volume is $96 (1.6%). For glaziers doing emergency call-outs, same-day Zeller settlement means funds hit your account the same day — you can order replacement glass first thing next morning.' },
  { q: 'Is it hard to set up EFTPOS compared to a bank merchant account?', a: 'No — Zeller and Square approve accounts online in minutes with just your ABN. Bank merchant accounts require paperwork, branch visits, and often take days or weeks. Most glaziers are set up and processing payments on the same day they register.' },
  { q: 'Can I send a payment link before the glass arrives for a pre-arranged job?', a: 'Yes — for pre-arranged glazing jobs (window replacement, shopfront re-glaze), send a Zeller or Stripe payment link for a deposit at booking confirmation. This covers the glass order cost before you mobilise. For emergency call-outs, take payment on-site at completion.' },
]

import siteMeta from '../../data/site-meta.json'
const SITE = 'https://tradiepayau.directory'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for Glaziers in Australia (2026)', name: 'Best EFTPOS for Glaziers in Australia (2026)', image: { '@type': 'ImageObject', url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=630&fit=crop&crop=center&q=80', width: 1200, height: 630 }, description: 'Dead zones, emergency call-outs, and property manager billing — the best EFTPOS and payment setup for Australian glazing businesses.', url: `${SITE}/trades/glaziers`, datePublished: '2026-01-15', dateModified: siteMeta.lastVerified, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'By Trade', item: `${SITE}/trades` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Glaziers in Australia (2026)', item: `${SITE}/trades/glaziers` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Best EFTPOS for Glaziers in Australia', serviceType: 'EFTPOS Payment Processing for Glaziers', areaServed: { '@type': 'Country', name: 'Australia' }, provider: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, url: `${SITE}/trades/glaziers` },
]

export default function GlaziersPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Glaziers in Australia (2026)"
        description="Dead zones, emergency call-outs, and property manager billing — the best EFTPOS and payment setup for Australian glazing businesses."
        canonical="/trades/glaziers"
        ogType="article"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        {/* Trade hero image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&h=560&fit=crop&crop=center&q=80"
            alt="Glazier installing glass panel on a commercial building site"
            fetchPriority="high" className="w-full h-full object-cover"
            onError={e => { e.currentTarget.style.opacity = '0' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Trade Guide</span>
            <span>·</span><span>Updated April 2026</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Glaziers in Australia (2026)</h1>
          <p className="hero-sub">Dead zones, emergency call-outs, and property manager billing. Here's the payment setup that works for glazing.</p>
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
        reason="Reliable SIM across commercial and residential glazing sites. Lowest flat rate on the market."
        backup="Square Terminal for underground / zero-signal dead zones"
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
            Top Picks for Glaziers
          </motion.h2>
          <div className="breakeven-box mb-6">
            <strong>Two-device strategy:</strong> Zeller Terminal 1 + SIM ($99, primary) + Square Terminal ($329, dead-zone backup). No monthly fee on Square. Total hardware: $428.
          </div>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
            <p className="text-sm font-semibold text-green-800 mb-1">Real savings example</p>
            <p className="text-sm text-green-700">A glazier processing <strong>$8,000/month</strong> in card payments pays <strong>$112/month</strong> with Zeller (1.4%) vs $128 with Square (1.6%) — saving <strong>$192/year</strong> on rate alone. Add $15/mo SIM and Zeller still wins at most glazing volumes under $120k/year.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0 }}
              whileHover={{ y: -3 }}
              className="lg-blue rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-white flex items-center justify-center font-bold">Z</div>
                <div>
                  <h3 className="font-bold text-brand-dark">#1 — Zeller Terminal 1 + SIM</h3>
                  <span className="badge badge-gold">Best for Glaziers</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4">SIM plan (Optus, $15/mo) handles most building coverage. 1.4% rate and same-day settlement. Payment links for property manager billing.</p>
              <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                {[['Rate', '1.4%'], ['Terminal', '$99'], ['SIM', '$15/mo'], ['Settlement', 'Same day']].map(([l, v], i) => (
                  <div key={i} className="lg-light rounded-lg p-2"><span className="block text-slate-500">{l}</span><span className="font-bold text-brand-dark">{v}</span></div>
                ))}
              </div>
              <AffiliateButton providerId="zeller" label="page-cta" campaign="glaziers-picks" intent="signup" className="btn-primary block text-center text-sm mb-2">
                Get Zeller →
              </AffiliateButton>
              <Link to="/providers/zeller" className="block text-center text-xs text-slate-500 hover:text-brand-blue transition-colors">Full review →</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.07 }}
              whileHover={{ y: -3 }}
              className="lg-light rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-blue text-white flex items-center justify-center font-bold text-sm">Sq</div>
                <div>
                  <h3 className="font-bold text-brand-dark">#2 — Square Terminal</h3>
                  <span className="badge badge-muted">Dead Zone Backup</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4">Offline mode for zero-connectivity sites — stairwells, mechanical rooms, underground. Accept payment, reconnect later. 24-hour window applies.</p>
              <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                {[['Rate', '1.6%'], ['Terminal', '$329'], ['Offline', '✓ Yes'], ['Settlement', 'Next day']].map(([l, v], i) => (
                  <div key={i} className="lg-light rounded-lg p-2"><span className="block text-slate-500">{l}</span><span className="font-bold text-brand-dark">{v}</span></div>
                ))}
              </div>
              <AffiliateButton providerId="square" label="page-cta" campaign="glaziers-picks" intent="signup" className="btn-tertiary block text-center text-sm mb-2">
                Get Square →
              </AffiliateButton>
              <Link to="/providers/square" className="block text-center text-xs text-slate-500 hover:text-brand-blue transition-colors">Full review →</Link>
            </motion.div>
          </div>
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
          What Makes Glazing Different
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {challenges.map((c, i) => (
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
            { title: 'Emergency residential call-out', body: 'Use Zeller Tap to Pay on your phone. You\'re already carrying your phone. 1.4% rate, same-day settlement. If the client pays by card on site, tap and go. If they need to pay remotely, send a payment link.' },
            { title: 'Shopfront / commercial job, building management billing', body: 'Complete the job. Email a Zeller payment link or Stripe invoice to the property manager\'s accounts department. Include ABN, job description, materials, labour, and GST breakdown. Set 7–14 day payment terms for commercial accounts.' },
            { title: 'High-rise installation, upper floors (SIM coverage)', body: 'Zeller Terminal 1 + SIM is your primary. Most upper floors of buildings have adequate Optus signal. Test on the first visit and note coverage for your records.' },
            { title: 'Mechanical room / basement — zero connectivity', body: 'Switch to Square Terminal. Enable offline mode before you go into the dead zone. Take payment on site. Reconnect when you return to ground level. Funds process that day.' },
            { title: 'Large job, deposit + balance', body: 'Collect 30–50% deposit by Zeller payment link at quote acceptance. Don\'t start glazing until the deposit clears. On completion, tap for the balance (client present) or send a final payment link (billing accounts department).' },
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

      {/* Testimonial */}
      <section className="section container-page">
        <motion.blockquote
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 max-w-2xl"
        >
          <svg className="absolute top-4 left-5 w-6 h-6 text-slate-200" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <p className="text-slate-700 text-sm leading-relaxed pl-6 mb-4">
            "Had a shopfront emergency in Parramatta at 11pm — smashed glass, alarm going. Got there, secured the opening, re-glazed the next morning. Sent the property manager a Zeller payment link before I left the site. Money was in my account by lunchtime. That invoice used to take 30 days to get paid."
          </p>
          <footer className="flex items-center gap-3 pl-6">
            <div className="w-8 h-8 rounded-full bg-brand-dark text-white text-xs font-bold flex items-center justify-center flex-shrink-0">MT</div>
            <div>
              <p className="text-sm font-semibold text-brand-dark">Marcus T.</p>
              <p className="text-xs text-slate-500">Glazier · Western Sydney</p>
            </div>
          </footer>
        </motion.blockquote>
      </section>

      <section className="section section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            Glazier EFTPOS Comparison
          </motion.h2>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'SIM', 'Offline', 'Best for']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Top pick</span></>, '1.4%', '$99', '✓ $15/mo', '✗', 'All glazing — primary device'] },
              { cells: ['Zeller Tap to Pay', '1.4%', '$0', '✗ (phone data)', '✗', 'Emergency call-outs, low volume'] },
              { cells: ['Square Terminal', '1.6%', '$329', '✗', '✓', 'Dead zones — mechanical rooms, basements'] },
              { cells: ['Stripe', '1.7% + $0.10', '~$98', '✓ optional', '✗', 'Commercial invoicing, property manager billing'] },
            ]}
          />
          <p className="mt-4 text-xs text-slate-500">Need a deeper comparison? <Link to="/compare/zeller-vs-square" className="text-brand-blue font-medium hover:underline">Zeller vs Square — full head-to-head →</Link></p>

          {/* Post-table CTA */}
          <div className="mt-6 bg-brand-dark rounded-2xl px-5 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm mb-0.5">Ready to get paid on-site?</p>
              <p className="text-white/60 text-xs">Set up Zeller in minutes — ABN required, approval same day.</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <AffiliateButton providerId="zeller" label="page-cta" campaign="glaziers-table" intent="signup" className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-brand-blue text-white font-semibold text-sm rounded-xl hover:bg-blue-500 transition-colors">
                Get Zeller →
              </AffiliateButton>
              <Link to="/providers/zeller" className="text-white/60 text-xs hover:text-white transition-colors">
                Full review →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={faqs} title="FAQ for Glaziers" />

      <section className="section section-alt">
        <div className="container-page">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Best EFTPOS for Glaziers by State</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {STATES.map(s => (
              <Link
                key={s.slug}
                to={`/states/${s.slug}/glaziers`}
                className="flex flex-col gap-1 p-3 rounded-2xl bg-white border border-slate-100 hover:border-brand-blue hover:shadow-sm transition-all group"
              >
                <span className="text-xs font-bold text-brand-blue">{s.abbr}</span>
                <span className="text-sm font-semibold text-brand-dark group-hover:text-brand-blue transition-colors leading-tight">{s.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TradeCompareLinks />
      <RelatedLinks slug="glaziers" type="trade" />
    </>
  )
}
