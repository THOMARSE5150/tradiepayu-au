import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Meta from '../components/Meta'
import AffiliateButton from '../components/AffiliateButton'
import { tradeHeroUrl, tradeHeroAlt } from '../utils/tradeHero'

// Dedicated paid-traffic landing page for Australian glaziers.
// Path: /glaziers-eftpos
// Keep: AU positioning, Zeller + SIM as primary pick, affiliate wiring
// Remove: breadcrumbs, related links, state grids, long FAQ, link leakage

const PAIN_POINTS = [
  {
    emoji: '🚨',
    title: 'Emergency callouts — any hour, no WiFi',
    body: 'Smashed shopfront at 1am. Storm damage on Sunday. You show up, fix the glass, then can\'t take payment because the building has no WiFi and the customer\'s phone has no signal. The right terminal runs on its own SIM.',
  },
  {
    emoji: '🏢',
    title: 'Commercial buildings and dead zones',
    body: 'Stairwells, lift shafts, mechanical rooms, underground carparks — mobile signals die in these environments. Zeller\'s built-in Optus SIM handles most sites. Square\'s offline mode is the backup for genuine zero-signal locations.',
  },
  {
    emoji: '📋',
    title: 'Property managers don\'t pay on-site',
    body: 'The person who let you into the building isn\'t the one with the company credit card. Send a Zeller payment link to the property management accounts team — they pay remotely, you get paid fast.',
  },
  {
    emoji: '💸',
    title: 'Large jobs need a deposit before you mobilise',
    body: 'Shopfront reglazes, curtain walls, and staged installs need a deposit at quote acceptance to cover the glass order. Zeller payment link for the deposit. Terminal for the balance on-site at completion.',
  },
]

const COMPARISON = [
  { provider: 'Zeller Terminal 1 + SIM', rate: '1.4%', cost: '$99 + $15/mo', note: 'Primary setup — all glazing jobs', recommended: true },
  { provider: 'Square Terminal', rate: '1.6%', cost: '$329 once', note: 'Backup — dead zones, offline mode', recommended: false },
  { provider: 'Zeller Payment Link', rate: '1.4%', cost: 'Free', note: 'Remote billing — property managers', recommended: false },
]

const STEPS = [
  { n: '1', title: 'Sign up with your ABN', body: 'Online approval in minutes — no bank branch visit, no paperwork, no credit check.' },
  { n: '2', title: 'Hardware ships fast', body: 'Zeller Terminal despatches from Sydney. Most Australian glaziers receive it in 1–3 business days.' },
  { n: '3', title: 'Take payment on your first job', body: 'Tap, swipe, or send a payment link. Funds settle same day to your Zeller AUD account.' },
]

export default function GlaziersLandingPage() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Australian Glaziers (2026) — Works On-Site, No WiFi"
        description="Zeller Terminal + SIM is the top EFTPOS pick for glaziers in Australia. 1.4% flat rate, no lock-in, same-day AUD settlement. Works at emergency callouts and commercial sites."
        canonical="/glaziers-eftpos"
      />

      {/* ── HERO ──────────────────────────────────────────── */}
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={tradeHeroUrl('glaziers')}
            alt={tradeHeroAlt('glaziers')}
            fetchPriority="high"
            className="w-full h-full object-cover"
            onError={e => { e.currentTarget.style.opacity = '0' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand-dark/85 to-slate-900/75" />
        </div>

        <div className="container-page relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-xs font-semibold text-brand-blue/80 uppercase tracking-widest mb-3">
              For Australian Glaziers · 2026
            </p>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1] max-w-2xl">
              Get Paid On the Job —<br className="hidden sm:block" /> Even With No WiFi
            </h1>

            <p className="hero-sub max-w-xl">
              The lowest-rate EFTPOS setup for Australian glaziers. Works on emergency callouts,
              commercial sites, and residential installs — without relying on customer WiFi.
            </p>

            {/* AU trust strip — above fold */}
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {[
                '1.4% flat rate',
                '$0 monthly fee',
                'Same-day AUD settlement',
                'ABN signup · no lock-in',
              ].map(t => (
                <span key={t} className="flex items-center gap-1.5 text-sm text-white/80">
                  <Check size={13} className="text-green-400 flex-shrink-0" strokeWidth={3} />
                  {t}
                </span>
              ))}
            </div>

            {/* Single primary CTA — no competing links above fold */}
            <div className="mt-7">
              <AffiliateButton
                providerId="zeller"
                label="hero-primary"
                campaign="glaziers-lp"
                intent="signup"
                className="inline-flex items-center gap-2 px-7 py-4 bg-brand-blue text-white font-bold rounded-2xl text-[15px] hover:bg-blue-600 transition-colors shadow-[0_8px_28px_rgba(0,106,255,0.40)]"
              >
                Get Zeller — 1.4% rate →
              </AffiliateButton>
              <p className="mt-2.5 text-xs text-white/45">Set up with your ABN — no lock-in, no bank paperwork.</p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ── GLAZIER PAIN / FIT ────────────────────────────── */}
      <section className="section-alt py-10 sm:py-14">
        <div className="container-page">
          <div className="mb-7">
            <h2 className="text-2xl font-bold text-brand-dark">
              Why Standard EFTPOS Fails Australian Glaziers
            </h2>
            <p className="text-sm text-slate-500 mt-1.5">
              Generic terminals are built for shops with reliable WiFi. Glazing work is nothing like that.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PAIN_POINTS.map(({ emoji, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-slate-100 p-5 flex gap-4"
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{emoji}</span>
                <div>
                  <h3 className="font-bold text-brand-dark text-sm mb-1.5 leading-snug">{title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEST OPTION ───────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-blue mb-2">
              Top pick for glaziers in Australia
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mb-1">
              Zeller Terminal 1 + SIM Plan
            </h2>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              The go-to EFTPOS setup for Australian glaziers on emergency callouts, commercial installs, and residential work.
              Runs on the Optus mobile network — no customer WiFi needed.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
              {[
                { label: 'Rate', value: '1.4%' },
                { label: 'Terminal', value: '$99 AUD' },
                { label: 'SIM plan', value: '$15/mo' },
                { label: 'Settlement', value: 'Same day' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
                  <p className="text-xs text-slate-400 mb-1">{label}</p>
                  <p className="text-sm font-bold text-brand-dark">{value}</p>
                </div>
              ))}
            </div>

            <ul className="space-y-2.5 mb-7">
              {[
                'Built-in Optus SIM — works independently of customer or site WiFi across Australia',
                'Lowest published flat rate in Australia — 1.4% per transaction',
                '$0 monthly fee — SIM plan optional at $15/mo',
                'Same-day settlement to your Zeller AUD account',
                'Online ABN approval in minutes — no bank branch, no paperwork',
                'No lock-in contract — cancel any time',
              ].map(b => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <Check size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <AffiliateButton
              providerId="zeller"
              label="bestpick-cta"
              campaign="glaziers-lp"
              intent="signup"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-blue text-white font-semibold rounded-xl text-sm hover:bg-blue-600 transition-colors shadow-[0_6px_20px_rgba(0,106,255,0.28)]"
            >
              Get Zeller — 1.4%, set up today →
            </AffiliateButton>
          </div>
        </div>
      </section>

      {/* ── COMPACT COMPARISON ────────────────────────────── */}
      <section className="section section-alt">
        <div className="container-page">
          <h2 className="text-xl font-bold text-brand-dark mb-1">Quick Comparison</h2>
          <p className="text-sm text-slate-500 mb-5">The three setups used by Australian glaziers — when and why.</p>

          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="w-full text-sm min-w-[520px]">
              <thead>
                <tr className="border-b border-slate-200">
                  {['Setup', 'Rate', 'Cost', 'Best for'].map(h => (
                    <th key={h} className="text-left text-[11px] font-bold uppercase tracking-wider text-slate-400 pb-3 pr-4 first:pl-0">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {COMPARISON.map(row => (
                  <tr key={row.provider} className={row.recommended ? 'bg-blue-50/50' : ''}>
                    <td className="py-3.5 pr-4 font-semibold text-brand-dark leading-snug">
                      {row.provider}
                      {row.recommended && (
                        <span className="ml-2 inline-block px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded text-[10px] font-bold align-middle">
                          Top pick
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 pr-4 font-mono text-sm text-slate-700">{row.rate}</td>
                    <td className="py-3.5 pr-4 text-slate-600 whitespace-nowrap">{row.cost}</td>
                    <td className="py-3.5 text-slate-500 text-xs leading-snug">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-4">
            Rates current April 2026. Verify with providers before signing up.
          </p>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ─────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-page">
          <h2 className="text-xl font-bold text-brand-dark mb-1">From Click to First Payment</h2>
          <p className="text-sm text-slate-500 mb-8">
            Most Australian glaziers are set up and taking card payments within a day.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {STEPS.map(({ n, title, body }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="flex gap-4"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue text-white font-bold text-sm flex items-center justify-center mt-0.5">
                  {n}
                </span>
                <div>
                  <h3 className="font-semibold text-brand-dark mb-1 text-sm">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Inline reassurance — no competing links */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 max-w-lg">
            <p className="text-sm font-semibold text-brand-dark mb-2">Quick answers</p>
            <div className="space-y-3">
              {[
                { q: 'Do I need a bank merchant account?', a: 'No. Zeller approves online with just your ABN. No bank branch required.' },
                { q: 'Does it work in building dead zones?', a: 'The Zeller SIM handles most commercial sites. Add Square Terminal as a backup for genuine zero-signal environments — its offline mode accepts cards with no connectivity.' },
                { q: 'What if I only do residential jobs?', a: 'The SIM plan is optional at $15/mo. For residential work on customer WiFi, you can skip it and pay only when you process.' },
              ].map(({ q, a }) => (
                <div key={q}>
                  <p className="text-xs font-semibold text-brand-dark">{q}</p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className="section">
        <div className="container-page">
          <div className="bg-brand-dark rounded-3xl px-6 py-10 sm:px-10 sm:py-12 text-center">
            <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
              For Australian glaziers
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
              Stop chasing invoices.<br className="hidden sm:block" /> Get paid on-site.
            </h2>
            <p className="text-white/55 text-sm mb-7 max-w-sm mx-auto leading-relaxed">
              Zeller Terminal + SIM. 1.4% rate. $0 monthly fee. Same-day settlement to your Australian AUD account.
              ABN approval online — no lock-in, no bank paperwork.
            </p>
            <AffiliateButton
              providerId="zeller"
              label="final-cta"
              campaign="glaziers-lp-final"
              intent="signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-bold rounded-2xl text-base hover:bg-blue-600 transition-colors shadow-[0_8px_28px_rgba(0,106,255,0.45)]"
            >
              Get Zeller — 1.4% rate →
            </AffiliateButton>
            <p className="mt-3 text-xs text-white/35">No lock-in. Approved online with your Australian ABN.</p>
          </div>
        </div>
      </section>
    </>
  )
}
