import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import siteMeta from '../data/site-meta.json'
import { STATES } from '../data/states'

const providers = [
  { label: 'Zeller', desc: 'Lowest fees',         href: '/providers/zeller' },
  { label: 'Square', desc: 'Works offline',        href: '/providers/square' },
  { label: 'Stripe', desc: 'Online payments',      href: '/providers/stripe' },
  { label: 'Tyro',   desc: 'Tailored pricing',     href: '/providers/tyro' },
  { label: 'Shift4', desc: 'High-volume quotes',   href: '/providers/shift4' },
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
      <div className="container-page py-6">
        {status === 'done' ? (
          <p className="text-green-400 text-sm">✓ You're on the list.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="text-slate-400 text-sm flex-shrink-0">Rate change alerts —</p>
            <div className="flex gap-2 flex-1 max-w-sm">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                inputMode="email"
                autoComplete="email"
                className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/[0.06] border border-white/[0.10] text-white text-sm placeholder-white/25 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20 transition-all"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-4 py-2 bg-brand-blue hover:bg-blue-600 disabled:opacity-60 text-white font-medium rounded-lg text-sm transition-colors flex-shrink-0"
              >
                {status === 'sending' ? '…' : 'Notify me'}
              </button>
            </div>
            {status === 'error' && <p className="text-red-400 text-xs">Try again or email us directly.</p>}
          </form>
        )}
      </div>
    </div>
  )
}

function DecisionBand() {
  return (
    <div className="bg-white/[0.06] border-y border-white/[0.14]">
      <div className="container-page py-7 sm:py-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10">

          <div className="flex-1 min-w-0">
            <h2 className="text-white font-bold text-lg sm:text-xl mb-3">Still deciding?</h2>
            <div className="flex flex-wrap gap-2">
              {decisionCues.map(c => (
                <Link
                  key={c.name}
                  to={c.href}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/[0.16] bg-white/[0.04] hover:border-white/[0.28] hover:bg-white/[0.08] transition-all text-xs"
                >
                  <span className="text-slate-400">{c.lead}</span>
                  <span className="text-slate-600">→</span>
                  <span className="text-white font-semibold">{c.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:items-end flex-shrink-0">
            <Link
              to="/providers"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-blue hover:bg-blue-600 text-white font-semibold text-sm rounded-xl transition-colors w-full sm:w-auto whitespace-nowrap"
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

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-400 mt-auto">

      <RateAlerts />
      <DecisionBand />

      {/* Nav — clean columns, no card boxing */}
      <div className="container-page py-10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8">

        {/* Brand */}
        <div className="col-span-2 sm:col-span-1">
          <Logo className="mb-3 opacity-80" />
          <p className="text-xs text-slate-500 leading-relaxed">
            Independent EFTPOS comparison for Australian tradies.<br />
            Not financial advice.
          </p>
        </div>

        {/* Providers */}
        <div>
          <Link
            to="/providers"
            className="text-white/50 font-medium text-xs uppercase tracking-widest hover:text-white/80 transition-colors block mb-3"
          >
            Providers
          </Link>
          <ul className="space-y-2.5">
            {providers.map(p => (
              <li key={p.href}>
                <Link to={p.href} className="group flex flex-col gap-px">
                  <span className="text-slate-300 group-hover:text-white transition-colors text-sm leading-none">{p.label}</span>
                  <span className="text-slate-600 text-xs">{p.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Browse */}
        <div>
          <p className="text-white/50 font-medium text-xs uppercase tracking-widest mb-3">Browse</p>
          <ul className="space-y-2 mb-4">
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
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {STATES.map(s => (
              <Link
                key={s.slug}
                to={`/states/${s.slug}`}
                className="text-slate-600 hover:text-slate-300 transition-colors text-xs"
              >
                {s.abbr}
              </Link>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <Link
            to="/blog"
            className="text-white/50 font-medium text-xs uppercase tracking-widest hover:text-white/80 transition-colors block mb-3"
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
            <Link to="/about"       className="text-slate-600 hover:text-slate-400 transition-colors text-xs">About</Link>
            <Link to="/glossary"    className="text-slate-600 hover:text-slate-400 transition-colors text-xs">Glossary</Link>
            <Link to="/contact"     className="text-slate-600 hover:text-slate-400 transition-colors text-xs">Contact</Link>
            <Link to="/privacy"     className="text-slate-600 hover:text-slate-400 transition-colors text-xs">Privacy</Link>
            <Link to="/disclaimer"  className="text-slate-600 hover:text-slate-400 transition-colors text-xs">Disclaimer</Link>
          </div>
        </div>

      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/[0.05] py-4 px-4 text-center text-xs text-slate-700">
        Rates as of {siteMeta.lastVerifiedDisplay} · General information only, not financial advice · TradiePay AU — QUICKFIXCREATIVE ABN 77 133 011 874
      </div>

    </footer>
  )
}
