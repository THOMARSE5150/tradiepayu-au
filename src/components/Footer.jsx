import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import siteMeta from '../data/site-meta.json'
import { STATES } from '../data/states'

const providers = [
  { label: 'Zeller', href: '/providers/zeller' },
  { label: 'Square', href: '/providers/square' },
  { label: 'Stripe', href: '/providers/stripe' },
  { label: 'Tyro', href: '/providers/tyro' },
  { label: 'Shift4', href: '/providers/shift4' },
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
  { label: 'Best EFTPOS for Plumbers', href: '/blog/best-eftpos-plumbers-australia-2026' },
  { label: 'Stripe vs Square', href: '/blog/stripe-vs-square-eftpos-australia-2026' },
  { label: 'Get Paid Faster', href: '/blog/how-to-get-paid-faster-sole-trader-australia' },
  { label: 'EFTPOS Fees Breakdown', href: '/blog/eftpos-fees-tradies-australia-2026' },
  { label: 'Zeller vs Square', href: '/blog/zeller-vs-square-eftpos-tradies' },
]

const legal = [
  { label: 'About', href: '/about' },
  { label: 'Glossary', href: '/glossary' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Disclaimer', href: '/disclaimer' },
]

const RATE_ALERTS_URL = 'https://tradiepay-contact-form.5p5ccbcgnr.workers.dev/rate-alerts'

function RateAlerts() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | done | error

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
          <p className="text-slate-400 text-xs mb-4">We'll notify you when a provider changes their rates or hardware pricing — no spam, just useful updates.</p>
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
          {status === 'error' && <p className="text-red-400 text-xs mt-2">Something went wrong — try emailing us directly.</p>}
        </div>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-400 mt-auto">
      <RateAlerts />
      <div className="container-page py-12 grid grid-cols-2 lg:grid-cols-7 gap-5">
        <div className="col-span-2 lg:col-span-2 lg-dark lg-sheen relative rounded-2xl p-5">
          <Logo className="mb-3" />
          <p className="text-sm leading-relaxed text-slate-400 mb-3">Independent comparison of mobile card payment systems for Australian tradies. Updated {siteMeta.lastVerifiedDisplay}.</p>
          <p className="text-xs text-slate-600">Editorially independent rankings. Not financial advice.</p>
        </div>
        <div className="lg-dark lg-sheen relative rounded-2xl p-5">
          <Link to="/providers" className="text-white/60 font-semibold mb-3 text-xs uppercase tracking-widest hover:text-white/90 transition-colors flex items-center gap-1">
            Providers <span className="text-white/30">→</span>
          </Link>
          <ul className="space-y-2 text-sm mt-3">
            {providers.map(p => (
              <li key={p.href}><Link to={p.href} className="text-slate-400 hover:text-white transition-colors">{p.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="lg-dark lg-sheen relative rounded-2xl p-5">
          <Link to="/trades" className="text-white/60 font-semibold mb-3 text-xs uppercase tracking-widest hover:text-white/90 transition-colors flex items-center gap-1">
            By Trade <span className="text-white/30">→</span>
          </Link>
          <ul className="space-y-2 text-sm mt-3">
            {trades.map(t => (
              <li key={t.href}><Link to={t.href} className="text-slate-400 hover:text-white transition-colors">{t.label}</Link></li>
            ))}
            <li><Link to="/trades" className="text-slate-600 hover:text-slate-400 transition-colors text-xs">All 18 trades →</Link></li>
          </ul>
        </div>
        <div className="lg-dark lg-sheen relative rounded-2xl p-5">
          <Link to="/states" className="text-white/60 font-semibold mb-3 text-xs uppercase tracking-widest hover:text-white/90 transition-colors flex items-center gap-1">
            By State <span className="text-white/30">→</span>
          </Link>
          <ul className="space-y-2 text-sm mt-3">
            {STATES.map(s => (
              <li key={s.slug}><Link to={`/states/${s.slug}`} className="text-slate-400 hover:text-white transition-colors">{s.name} <span className="text-slate-600">({s.abbr})</span></Link></li>
            ))}
          </ul>
        </div>
        <div className="lg-dark lg-sheen relative rounded-2xl p-5">
          <Link to="/blog" className="text-white/60 font-semibold mb-3 text-xs uppercase tracking-widest hover:text-white/90 transition-colors flex items-center gap-1">
            Blog <span className="text-white/30">→</span>
          </Link>
          <ul className="space-y-2 text-sm mt-3">
            {blog.map(b => (
              <li key={b.href}><Link to={b.href} className="text-slate-400 hover:text-white transition-colors">{b.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="lg-dark lg-sheen relative rounded-2xl p-5">
          <p className="text-white/60 font-semibold mb-3 text-xs uppercase tracking-widest">Legal</p>
          <ul className="space-y-2 text-sm">
            {legal.map(l => (
              <li key={l.href}><Link to={l.href} className="text-slate-400 hover:text-white transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.06] py-4 text-center text-xs text-slate-600 space-y-1 px-4">
        <p>Rates correct as of {siteMeta.lastVerifiedDisplay}. Verify with providers before signing up.</p>
        <p>
          <Link to="/disclaimer" className="hover:text-slate-400 transition-colors">General information only — not financial advice.</Link>
          {' '}·{' '}
          <Link to="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
          {' '}·{' '}
          <Link to="/about" className="hover:text-slate-400 transition-colors">About</Link>
        </p>
      </div>
    </footer>
  )
}
