import { useMemo } from 'react'
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

// ─── Decision band ────────────────────────────────────────────────────────────
// Session-stable A/B hook via localStorage — no flicker, no randomness on
// re-render. Hook is chosen once per session and persisted.

const HOOKS = [
  'Pick the right setup for your work.',
  'Choose what actually fits your jobs.',
  'Most tradies choose based on this.',
]

function getSessionHook() {
  try {
    const stored = localStorage.getItem('footerHook')
    if (stored !== null) return HOOKS[Number(stored)] ?? HOOKS[0]
    const idx = Math.floor(Math.random() * HOOKS.length)
    localStorage.setItem('footerHook', String(idx))
    return HOOKS[idx]
  } catch {
    return HOOKS[0]
  }
}

function DecisionBand() {
  const hook = useMemo(getSessionHook, [])

  return (
    <div className="bg-gradient-to-b from-white/[0.08] to-white/[0.05] border-y border-white/[0.14]">
      <div className="container-page py-10 sm:py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">

          {/* Left: hook + editorial cue list */}
          <div className="flex-1 min-w-0">
            <p className="text-white/30 text-xs tracking-widest uppercase mb-3">
              Independent · Updated {siteMeta.lastVerifiedDisplay}
            </p>
            <h2 className="text-white font-bold text-2xl sm:text-3xl tracking-tight mb-5">
              {hook}
            </h2>

            {/* Editorial cue list */}
            <div className="divide-y divide-white/[0.12] max-w-xs">
              {decisionCues.map(c => (
                <Link
                  key={c.name}
                  to={c.href}
                  className="group flex items-center justify-between gap-6 py-3.5 first:pt-0 last:pb-0"
                >
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors text-sm">
                    {c.lead}
                  </span>
                  <span className="text-white/90 font-bold text-sm group-hover:text-brand-blue transition-colors flex-shrink-0 tracking-tight">
                    {c.name} →
                  </span>
                </Link>
              ))}
            </div>

            {/* CTA on mobile — sits directly after cues */}
            <div className="flex flex-col gap-3 mt-6 sm:hidden">
              <Link
                to="/providers"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-brand-blue hover:bg-blue-600 text-white font-semibold text-sm rounded-xl transition-colors shadow-lg shadow-blue-900/30 w-full whitespace-nowrap"
              >
                Compare all providers →
              </Link>
              <Link
                to="/compare/zeller-vs-square"
                className="text-xs text-slate-600 hover:text-slate-400 transition-colors text-center"
              >
                Zeller vs Square →
              </Link>
            </div>
          </div>

          {/* Right: CTA on desktop — vertically anchored to first cue row */}
          <div className="hidden sm:flex flex-col gap-3 items-end flex-shrink-0 pt-[5.25rem]">
            <Link
              to="/providers"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-brand-blue hover:bg-blue-600 text-white font-semibold text-sm rounded-xl transition-colors shadow-lg shadow-blue-900/30 whitespace-nowrap"
            >
              Compare all providers →
            </Link>
            <Link
              to="/compare/zeller-vs-square"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors text-right"
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

      <DecisionBand />

      {/* Nav — clean columns, no card boxing, deliberate typographic hierarchy */}
      <div className="container-page pt-10 pb-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10">

        {/* Brand */}
        <div className="col-span-2 sm:col-span-1">
          <Logo className="mb-4 opacity-75" />
          <p className="text-xs text-slate-500 leading-relaxed">
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
                  <span className="text-slate-500 text-xs">{p.desc}</span>
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
              <Link to="/trades" className="text-slate-500 hover:text-slate-300 transition-colors text-xs">
                All 18 trades →
              </Link>
            </li>
          </ul>
          <div className="flex flex-wrap gap-x-2 gap-y-1.5">
            {STATES.map(s => (
              <Link
                key={s.slug}
                to={`/states/${s.slug}`}
                className="text-slate-500 hover:text-slate-300 transition-colors text-xs"
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
              <Link to="/blog" className="text-slate-500 hover:text-slate-300 transition-colors text-xs">
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
              <Link key={l.href} to={l.href} className="text-slate-500 hover:text-slate-300 transition-colors text-xs">
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
