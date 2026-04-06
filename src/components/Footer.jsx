import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import siteMeta from '../data/site-meta.json'
import { STATES } from '../data/states'

// ─── Data ────────────────────────────────────────────────────────────────────

const providers = [
  { label: 'Zeller', desc: 'Lowest transaction fees',     href: '/providers/zeller' },
  { label: 'Square', desc: 'Works offline, no signal',    href: '/providers/square' },
  { label: 'Stripe', desc: 'Advanced online payments',    href: '/providers/stripe' },
  { label: 'Tyro',   desc: 'Tailored pricing available',  href: '/providers/tyro' },
  { label: 'Shift4', desc: 'Quote-based for high volume', href: '/providers/shift4' },
]

const trades = [
  { label: 'Electricians', href: '/trades/electricians' },
  { label: 'Plumbers',     href: '/trades/plumbers' },
  { label: 'Builders',     href: '/trades/builders' },
  { label: 'Glaziers',     href: '/trades/glaziers' },
  { label: 'Roofers',      href: '/trades/roofers' },
  { label: 'Painters',     href: '/trades/painters' },
  { label: 'Cleaners',     href: '/trades/cleaners' },
  { label: 'Landscapers',  href: '/trades/landscapers' },
  { label: 'HVAC',         href: '/trades/hvac' },
]

const blog = [
  { label: 'Zeller vs Square vs Stripe', href: '/blog/zeller-vs-square-vs-stripe-eftpos-tradies-2026' },
  { label: 'Best EFTPOS for Plumbers',   href: '/blog/best-eftpos-plumbers-australia-2026' },
  { label: 'Stripe vs Square',           href: '/blog/stripe-vs-square-eftpos-australia-2026' },
  { label: 'Get Paid Faster',            href: '/blog/how-to-get-paid-faster-sole-trader-australia' },
]

const legal = [
  { label: 'About',          href: '/about' },
  { label: 'Glossary',       href: '/glossary' },
  { label: 'Contact',        href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Disclaimer',     href: '/disclaimer' },
]

const decisionCues = [
  { lead: 'Lowest fees',    name: 'Zeller', href: '/providers/zeller' },
  { lead: 'Offline backup', name: 'Square', href: '/providers/square' },
  { lead: 'Online stack',   name: 'Stripe', href: '/providers/stripe' },
]

const RATE_ALERTS_URL = 'https://tradiepay-contact-form.5p5ccbcgnr.workers.dev/rate-alerts'

// ─── Rate alerts ──────────────────────────────────────────────────────────────

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
    <div className="bg-brand-dark border-t border-white/[0.06]">
      <div className="container-page py-8">
        <div className="lg-dark lg-sheen relative rounded-2xl p-5 sm:p-6 max-w-xl">
          <p className="text-white font-semibold text-sm mb-0.5">Get rate change alerts</p>
          <p className="text-slate-400 text-xs mb-4">
            We'll notify you when a provider changes their rates or hardware pricing — no spam, just useful updates.
          </p>
          {status === 'done' ? (
            <p className="text-green-400 text-sm font-medium">✓ You're on the list. We'll be in touch when rates change.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                inputMode="email"
                autoComplete="email"
                className="flex-1 min-w-0 px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.10] text-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-4 py-2.5 bg-brand-blue hover:bg-blue-600 disabled:opacity-60 text-white font-semibold rounded-xl text-sm transition-colors flex-shrink-0"
              >
                {status === 'sending' ? '…' : 'Notify me'}
              </button>
            </form>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-xs mt-2">Something went wrong — try emailing us directly.</p>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Decision band ────────────────────────────────────────────────────────────

function DecisionBand() {
  return (
    <div className="bg-white/[0.06] border-y border-white/[0.14]">
      <div className="container-page py-7 sm:py-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-10">

          <div className="flex-1 min-w-0">
            <p className="text-white/35 text-xs mb-2.5 tracking-wide">
              Independent comparison · Updated {siteMeta.lastVerifiedDisplay}
            </p>
            <h2 className="text-white font-bold text-lg sm:text-xl mb-1.5">Still deciding?</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-sm">
              Most tradies choose on fees, offline reliability, or trade fit.
            </p>
            <div className="flex flex-wrap gap-2">
              {decisionCues.map(c => (
                <Link
                  key={c.name}
                  to={c.href}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/[0.18] bg-white/[0.05] hover:border-white/[0.30] hover:bg-white/[0.09] transition-all text-xs"
                >
                  <span className="text-slate-400">{c.lead}</span>
                  <span className="text-slate-600">→</span>
                  <span className="text-white font-semibold">{c.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2.5 sm:items-end sm:pt-9 flex-shrink-0">
            <Link
              to="/providers"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-blue hover:bg-blue-600 text-white font-semibold text-sm rounded-xl transition-colors shadow-md w-full sm:w-auto whitespace-nowrap"
            >
              Compare all providers →
            </Link>
            <Link
              to="/compare/zeller-vs-square"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors text-center sm:text-right"
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

      {/*
        Nav: 4 sections instead of 7 narrow columns.
        Mobile: single column stack.
        sm: 2-column grid.
        lg: 4-column grid.
      */}
      <div className="container-page py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Brand */}
        <div className="lg-dark lg-sheen relative rounded-2xl p-5">
          <Logo className="mb-3" />
          <p className="text-sm leading-relaxed text-slate-400 mb-2">
            Independent comparison of EFTPOS providers for Australian tradies.
          </p>
          <p className="text-xs text-slate-600">Not financial advice. Updated {siteMeta.lastVerifiedDisplay}.</p>
        </div>

        {/* Providers */}
        <div className="lg-dark lg-sheen relative rounded-2xl p-5">
          <Link
            to="/providers"
            className="text-white/60 font-semibold text-xs uppercase tracking-widest hover:text-white/90 transition-colors flex items-center gap-1 mb-3"
          >
            Providers <span className="text-white/30">→</span>
          </Link>
          <ul className="space-y-3 mt-3">
            {providers.map(p => (
              <li key={p.href}>
                <Link to={p.href} className="group flex flex-col gap-0.5">
                  <span className="text-white group-hover:text-brand-blue transition-colors text-sm font-semibold">
                    {p.label}
                  </span>
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors text-xs">
                    {p.desc}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Browse — Trades + States combined */}
        <div className="lg-dark lg-sheen relative rounded-2xl p-5">
          <p className="text-white/60 font-semibold text-xs uppercase tracking-widest mb-3">Browse</p>

          <p className="text-white/35 text-xs mb-2">By trade</p>
          <ul className="space-y-1.5 text-sm mb-4">
            {trades.slice(0, 7).map(t => (
              <li key={t.href}>
                <Link to={t.href} className="text-slate-400 hover:text-white transition-colors">
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

          <p className="text-white/35 text-xs mb-2">By state</p>
          <div className="flex flex-wrap gap-x-2.5 gap-y-1.5">
            {STATES.map(s => (
              <Link
                key={s.slug}
                to={`/states/${s.slug}`}
                className="text-slate-400 hover:text-white transition-colors text-xs"
              >
                {s.abbr}
              </Link>
            ))}
          </div>
        </div>

        {/* Resources — Blog + Legal combined */}
        <div className="lg-dark lg-sheen relative rounded-2xl p-5">
          <Link
            to="/blog"
            className="text-white/60 font-semibold text-xs uppercase tracking-widest hover:text-white/90 transition-colors flex items-center gap-1 mb-3"
          >
            Resources <span className="text-white/30">→</span>
          </Link>
          <ul className="space-y-2 text-sm mb-5">
            {blog.map(b => (
              <li key={b.href}>
                <Link to={b.href} className="text-slate-400 hover:text-white transition-colors leading-snug block">
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

          <div className="border-t border-white/[0.08] pt-3 flex flex-col gap-1.5">
            {legal.map(l => (
              <Link
                key={l.href}
                to={l.href}
                className="text-slate-500 hover:text-slate-300 transition-colors text-xs"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/[0.06] py-4 text-center text-xs text-slate-600 space-y-1 px-4">
        <p>Rates correct as of {siteMeta.lastVerifiedDisplay}. Verify with providers before signing up.</p>
        <p>
          <Link to="/disclaimer" className="hover:text-slate-400 transition-colors">
            General information only — not financial advice.
          </Link>
          {' '}·{' '}
          <Link to="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
          {' '}·{' '}
          <Link to="/about" className="hover:text-slate-400 transition-colors">About</Link>
        </p>
        <p>TradiePay AU is operated by QUICKFIXCREATIVE · ABN 77 133 011 874</p>
      </div>

    </footer>
  )
}
