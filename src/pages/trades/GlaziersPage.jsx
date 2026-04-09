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
import { tradeHeroUrl, tradeHeroAlt, tradeOgUrl } from '../../utils/tradeHero'

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
  { q: 'Can glaziers take card payments on site?', a: 'Yes — Zeller Terminal 1 with the SIM plan is purpose-built for on-site payments. The built-in SIM means you don\'t need the customer\'s WiFi or a phone hotspot. Process payment on the spot before you leave the job. Square Terminal also works on-site and includes offline mode for building dead zones.' },
  { q: 'How much does EFTPOS cost a glazing business per month?', a: 'At $6,000/month in card revenue, Zeller costs $84/month (1.4%) plus $15 SIM = $99. Square at the same volume is $96 (1.6%). For glaziers doing emergency call-outs, same-day Zeller settlement means funds hit your account the same day — you can order replacement glass first thing next morning.' },
  { q: 'Is it hard to set up EFTPOS compared to a bank merchant account?', a: 'No — Zeller and Square approve accounts online in minutes with just your ABN. Bank merchant accounts require paperwork, branch visits, and often take days or weeks. Most glaziers are set up and processing payments on the same day they register.' },
  { q: 'Can I send a payment link before the glass arrives for a pre-arranged job?', a: 'Yes — for pre-arranged glazing jobs (window replacement, shopfront re-glaze), send a Zeller or Stripe payment link for a deposit at booking confirmation. This covers the glass order cost before you mobilise. For emergency call-outs, take payment on-site at completion.' },
]

import siteMeta from '../../data/site-meta.json'
import { SITE_URL as SITE } from '../../constants/brand'
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS Machines for Glaziers in Australia (2026)', name: 'Best EFTPOS Machines for Glaziers in Australia (2026)', image: { '@type': 'ImageObject', url: tradeOgUrl('glaziers'), width: 1200, height: 630 }, description: 'Compare the lowest-rate EFTPOS terminals for glazing businesses. Fees from 1.4%, same-day payouts, and offline mode — reviewed for Australian glaziers.', url: `${SITE}/trades/glaziers`, datePublished: '2026-01-15', dateModified: siteMeta.lastVerified, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'By Trade', item: `${SITE}/trades` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS Machines for Glaziers in Australia (2026)', item: `${SITE}/trades/glaziers` }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Best EFTPOS for Glaziers in Australia', serviceType: 'EFTPOS Payment Processing for Glaziers', areaServed: { '@type': 'Country', name: 'Australia' }, provider: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, url: `${SITE}/trades/glaziers` },
]

export default function GlaziersPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS Machines for Glaziers in Australia (2026)"
        description="Compare the lowest-rate EFTPOS terminals for glazing businesses. Fees from 1.4%, same-day payouts, and offline mode — reviewed for Australian glaziers."
        canonical="/trades/glaziers"
        ogType="article"
        jsonLd={jsonLd}
      />

      {/* ── 1. HERO ─────────────────────────────────────── */}
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={tradeHeroUrl('glaziers')}
            alt={tradeHeroAlt('glaziers')}
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
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            Best EFTPOS Machines for Glaziers in Australia (2026)
          </h1>
          <p className="hero-sub">
            Take payments on-site, get paid instantly, and stop chasing invoices.
            These are the best EFTPOS options for glazing jobs, emergency callouts, and property work.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
            {['Fast payouts (same or next business day)', 'Works on-site (mobile + SIM options)', 'Built for Australian tradies'].map(t => (
              <span key={t} className="flex items-center gap-1.5"><span className="text-green-400 font-bold">✔</span> {t}</span>
            ))}
          </div>
          <div className="mt-5 flex flex-col sm:flex-row items-start gap-3">
            <a href="#picks" className="inline-flex items-center gap-2 px-5 py-3 bg-brand-blue text-white font-semibold text-sm rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-brand-blue/25">
              Compare the Best Options →
            </a>
            <a href="#comparison" className="inline-flex items-center px-5 py-3 bg-white/10 text-white font-semibold text-sm rounded-xl hover:bg-white/20 transition-colors border border-white/20">
              See Pricing & Fees
            </a>
          </div>
          <p className="mt-3 text-xs text-white/40">No lock-in contracts. No BS. Just what actually works for glaziers.</p>
        </div>
      </header>

      {/* QuickVerdict — AEO answer-first */}
      <QuickVerdict
        pick="Zeller Terminal 1 + SIM"
        rate="1.4%"
        hardware="$99 + $15/mo SIM"
        reason="Reliable SIM across commercial and residential glazing sites. Lowest flat rate on the market."
        backup="Square Terminal for underground / zero-signal dead zones"
        providerSlug="zeller"
        trade="glaziers"
      />

      {/* ── 2. TRUST BLOCK ─────────────────────────────── */}
      <section className="bg-white border-b border-slate-100">
        <div className="container-page py-6 sm:py-8">
          <p className="text-center text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">
            Reviewed for Australian tradies
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            {[
              ['1.4%', 'Lowest rate'],
              ['Same day', 'Payout speed'],
              ['$99', 'Terminal cost'],
            ].map(([value, label]) => (
              <div key={label} className="text-center">
                <span className="block text-lg sm:text-2xl font-bold text-brand-dark">{value}</span>
                <span className="text-[11px] text-slate-500">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. TOP PICKS ───────────────────────────────── */}
      <section id="picks" className="section section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            Best EFTPOS for Glaziers — Quick Picks
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* ── Zeller ── */}
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
                  <h3 className="font-bold text-brand-dark">Zeller Terminal 1 + SIM</h3>
                  <span className="badge badge-gold">Best for Glaziers</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-1 font-medium">Fast setup, clean UX — best all-round option.</p>
              <p className="text-sm text-slate-500 mb-4">Same-day payouts straight to your account. Works across commercial and residential glazing jobs from day one.</p>
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

            {/* ── Square ── */}
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
                  <h3 className="font-bold text-brand-dark">Square Terminal</h3>
                  <span className="badge badge-muted">Best for Dead Zones</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-1 font-medium">Simple pricing, great for smaller jobs.</p>
              <p className="text-sm text-slate-500 mb-4">No monthly fees — only pay when you process a payment. Includes offline mode for building dead zones.</p>
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

            {/* ── Zeller + SIM ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.14 }}
              whileHover={{ y: -3 }}
              className="lg-light rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-white flex items-center justify-center font-bold">Z</div>
                <div>
                  <h3 className="font-bold text-brand-dark">Zeller + SIM Plan</h3>
                  <span className="badge badge-muted">Works Anywhere</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-1 font-medium">No WiFi needed — ideal for emergency callouts.</p>
              <p className="text-sm text-slate-500 mb-4">Built-in SIM keeps you connected at commercial sites, new estates, and anywhere the customer's WiFi isn't an option.</p>
              <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                {[['Rate', '1.4%'], ['Terminal', '$99'], ['SIM', '$15/mo'], ['Settlement', 'Same day']].map(([l, v], i) => (
                  <div key={i} className="lg-light rounded-lg p-2"><span className="block text-slate-500">{l}</span><span className="font-bold text-brand-dark">{v}</span></div>
                ))}
              </div>
              <AffiliateButton providerId="zeller" label="page-cta" campaign="glaziers-sim" intent="signup" className="btn-tertiary block text-center text-sm mb-2">
                View Setup →
              </AffiliateButton>
              <Link to="/providers/zeller" className="block text-center text-xs text-slate-500 hover:text-brand-blue transition-colors">Full review →</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Glaziers Need the Right EFTPOS Setup ──── */}
      <section className="section">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-5"
          >
            Why Glaziers Need the Right EFTPOS Setup
          </motion.h2>
          <ul className="space-y-3 mb-5">
            {[
              'Emergency jobs = instant payment needed',
              'Property managers delay invoices',
              'Cash flow kills small operators',
              'On-site payments close jobs faster',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold flex items-center justify-center mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm font-medium text-slate-600">The right EFTPOS setup means you get paid before you leave the job.</p>
        </div>
      </section>

      {/* ── 4. COMPARISON SNAPSHOT ──────────────────────── */}
      <section id="comparison" className="section">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            Quick Comparison
          </motion.h2>
          <ComparisonTable
            headers={['Provider', 'Rate', 'Hardware', 'Offline', 'Best for']}
            rows={[
              { highlight: true, cells: [<><strong>Zeller Terminal 1 + SIM</strong> <span className="ml-1 badge badge-gold">Top pick</span></>, '1.4%', '$99', '✗', 'All glazing — primary device'] },
              { cells: ['Square Terminal', '1.6%', '$329', '✓', 'Dead zones — basements, mechanical rooms'] },
              { cells: ['Stripe', '1.7% + 10c', '~$98', '✗', 'Invoicing — property managers'] },
            ]}
          />
          <p className="mt-4 text-xs text-slate-500">Need a deeper comparison? <Link to="/compare/zeller-vs-square" className="text-brand-blue font-medium hover:underline">Zeller vs Square — full head-to-head →</Link></p>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────── */}
      <section className="section section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
            {[
              { n: '1', title: 'Pick a provider', body: 'Compare rates, hardware costs, and settlement speed — then choose what fits your glazing business.' },
              { n: '2', title: 'Order your terminal', body: 'Approve online with just your ABN. No branch visits, no paperwork. Hardware ships fast.' },
              { n: '3', title: 'Start taking payments on-site', body: 'Tap, swipe, or send a payment link. Get paid before you leave the job.' },
            ].map(s => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="flex gap-4"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue text-white font-bold text-sm flex items-center justify-center mt-0.5">{s.n}</span>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">{s.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-slate-500 font-medium">Most tradies are set up in under 10 minutes.</p>
        </div>
      </section>

      {/* ── Testimonial ────────────────────────────────── */}
      <section className="section section-alt">
        <div className="container-page">
          <motion.blockquote
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative bg-white border border-slate-200 rounded-2xl px-6 py-5 max-w-2xl"
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
        </div>
      </section>

      {/* ── 5. FINAL CTA ───────────────────────────────── */}
      <section className="section">
        <div className="container-page">
          <div className="bg-brand-dark rounded-2xl px-6 py-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Ready to Get Paid Faster?
            </h2>
            <p className="text-white/60 text-sm mb-5 max-w-md mx-auto">
              Start taking payments on-site today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#picks" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-semibold text-sm rounded-xl hover:bg-blue-500 transition-colors">
                Compare EFTPOS Options →
              </a>
              <Link to="/compare/zeller-vs-square" className="text-white/60 text-sm hover:text-white transition-colors">
                Or see full comparison →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Supporting Content (SEO depth) ─────────────── */}

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
