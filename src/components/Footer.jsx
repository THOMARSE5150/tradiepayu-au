import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import siteMeta from '../data/site-meta.json'
import { STATES } from '../data/states'

const providers = [
  { label: 'Zeller', desc: 'Lowest fees',       href: '/providers/zeller' },
  { label: 'Square', desc: 'Works offline',      href: '/providers/square' },
  { label: 'Stripe', desc: 'Online payments',    href: '/providers/stripe' },
  { label: 'Tyro',   desc: 'Tailored pricing',   href: '/providers/tyro' },
  { label: 'Shift4', desc: 'High-volume quotes', href: '/providers/shift4' },
]

const trades = [
  { label: 'Electricians', href: '/trades/electricians' },
  { label: 'Plumbers',     href: '/trades/plumbers' },
  { label: 'Builders',     href: '/trades/builders' },
  { label: 'Roofers',      href: '/trades/roofers' },
  { label: 'Painters',     href: '/trades/painters' },
]

const blog = [
  { label: 'Zeller vs Square vs Stripe', href: '/blog/zeller-vs-square-vs-stripe-eftpos-tradies-2026' },
  { label: 'Stripe vs Square',           href: '/blog/stripe-vs-square-eftpos-australia-2026' },
  { label: 'Get Paid Faster',            href: '/blog/how-to-get-paid-faster-sole-trader-australia' },
]

const decisionCues = [
  { lead: 'Lowest fees',    name: 'Zeller', href: '/providers/zeller' },
  { lead: 'Offline backup', name: 'Square', href: '/providers/square' },
  { lead: 'Online stack',   name: 'Stripe', href: '/providers/stripe' },
]

const RATE_ALERTS_URL = 'https://tradiepay-contact-form.5p5ccbcgnr.workers.dev/rate-alerts'

// ─── Rate alerts ──────────────────────────────────────────────────────────────
// Quiet secondary element — deliberately low-key so it doesn't compete
// with the decision band below.

function RateAlerts() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(RATE_ALERTS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="border-t border-white/[0.06]">
      <div className="container-page py-5">
        {status === 'done' ? (
          <p className="text-green-400/80 text-xs">✓ You're on the list.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:items-center gap-2.5">
            <p className="text-slate-600 text-xs flex-shrink-0">Rate change alerts</p>
            <div className="flex gap-2 max-w-xs">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                inputMode="email"
                autoComplete="email"
                className="flex-1 min-w-0 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-xs placeholder-white/20 focus:outline-none focus:border-white/20 transition-all"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-3 py-1.5 bg-white/[0.08] hover:bg-white/[0.12] disabled:opacity-40 text-slate-300 rounded-lg text-xs transition-colors flex-shrink-0"
              >
                {status === 'sending' ? '…' : 'Notify me'}
              </button>
            </div>
            {status === 'error' && <p className="text-red-400/70 text-xs">Try again or email us.</p>}
          </form>
        )}
      </div>
    </div>
  )
}

// ─── Decision band ────────────────────────────────────────────────────────────
// The high-intent zone. Users reaching this point are still deciding —
// this must feel composed, authoritative, and reassuring.
// Editorial list format for cues: more considered, less fragmented than chips.

function DecisionBand() {
  return (
    <div className="bg-gradient-to-b from-white/[0.08] to-white/[0.05] border-y border-white/[0.14]">
      <div className="container-page py-10 sm:py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-16">

          {/* Left: heading + editorial cue list */}
          <div className="flex-1 min-w-0">
            <p className="text-white/30 text-xs tracking-widest uppercase mb-4">
              Independent · Updated {siteMeta.lastVerifiedDisplay}
            </p>
            <h2 className="text-white font-bold text-2xl sm:text-3xl tracking-tight mb-6">
              Still deciding?
            </h2>

            {/* Editorial cue list — feels like guidance, not filter chips */}
            <div className="divide-y divide-white/[0.08] max-w-xs">
              {decisionCues.map(c => (
                <Link
                  key={c.name}
                  to={c.href}
                  className="group flex items-center justify-between gap-6 py-3 first:pt-0 last:pb-0"
                >
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors text-sm">
                    {c.lead}
                  </span>
                  <span className="text-white font-semibold text-sm group-hover:text-brand-blue transition-colors flex-shrink-0">
                    {c.name} →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: primary CTA */}
          <div className="flex flex-col gap-3 sm:items-end flex-shrink-0">
            <Link
              to="/providers"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-blue hover:bg-blue-600 text-white font-semibold text-sm rounded-xl transition-colors shadow-lg shadow-blue-900/30 w-full sm:w-auto whitespace-nowrap"
            >
              Compare all providers →
            </Link>
            <Link
              to="/compare/zeller-vs-square"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors text-center sm:text-right"
            >
              Zeller vs Square →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-400 mt-auto">

      <RateAlerts />
      <DecisionBand />

      {/* Nav — clean columns, no card boxing, deliberate typographic hierarchy */}
      <div className="container-page pt-10 pb-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10">

        {/* Brand */}
        <div className="col-span-2 sm:col-span-1">
          <Logo className="mb-4 opacity-75" />
          <p className="text-xs text-slate-600 leading-relaxed">
            Independent EFTPOS comparison<br className="hidden sm:block" /> for Australian tradies.
          </p>
        </div>

        {/* Providers */}
        <div>
          <Link
            to="/providers"
            className="text-white/40 font-semibold text-xs uppercase tracking-widest hover:text-white/70 transition-colors block mb-4"
          >
            Providers
          </Link>
          <ul className="space-y-3">
            {providers.map(p => (
              <li key={p.href}>
                <Link to={p.href} className="group flex flex-col gap-px">
                  <span className="text-slate-200 group-hover:text-white transition-colors text-sm leading-none">
                    {p.label}
                  </span>
                  <span className="text-slate-600 text-xs">{p.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Browse */}
        <div>
          <p className="text-white/40 font-semibold text-xs uppercase tracking-widest mb-4">Browse</p>
          <ul className="space-y-2 mb-5">
            {trades.map(t => (
              <li key={t.href}>
                <Link to={t.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                  {t.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/trades" className="text-slate-600 hover:text-slate-400 transition-colors text-xs">
                All 18 trades →
              </Link>
            </li>
          </ul>
          <div className="flex flex-wrap gap-x-2 gap-y-1.5">
            {STATES.map(s => (
              <Link
                key={s.slug}
                to={`/states/${s.slug}`}
                className="text-slate-600 hover:text-slate-400 transition-colors text-xs"
              >
                {s.abbr}
              </Link>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="col-span-2 sm:col-span-1">
          <Link
            to="/blog"
            className="text-white/40 font-semibold text-xs uppercase tracking-widest hover:text-white/70 transition-colors block mb-4"
          >
            Resources
          </Link>
          <ul className="space-y-2 mb-5">
            {blog.map(b => (
              <li key={b.href}>
                <Link to={b.href} className="text-slate-400 hover:text-white transition-colors text-sm leading-snug block">
                  {b.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/blog" className="text-slate-600 hover:text-slate-400 transition-colors text-xs">
                More guides →
              </Link>
            </li>
          </ul>
          <div className="flex flex-wrap gap-x-3 gap-y-1.5">
            {[
              { label: 'About',      href: '/about' },
              { label: 'Glossary',   href: '/glossary' },
              { label: 'Contact',    href: '/contact' },
              { label: 'Privacy',    href: '/privacy' },
              { label: 'Disclaimer', href: '/disclaimer' },
            ].map(l => (
              <Link key={l.href} to={l.href} className="text-slate-600 hover:text-slate-400 transition-colors text-xs">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/[0.05] py-5 px-4 text-center text-xs text-slate-700">
        Rates as of {siteMeta.lastVerifiedDisplay} · General information only, not financial advice · TradiePay AU — QUICKFIXCREATIVE ABN 77 133 011 874
      </div>

    </footer>
  )
}
