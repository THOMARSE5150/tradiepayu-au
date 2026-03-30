import { Link } from 'react-router-dom'
import Logo from './Logo'
import siteMeta from '../data/site-meta.json'

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

const legal = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Disclaimer', href: '/disclaimer' },
]

function RateAlerts() {
  return (
    <div className="bg-brand-dark border-t border-white/[0.06]">
      <div className="container-page py-8">
        <div className="lg-dark lg-sheen relative rounded-2xl p-5 sm:p-6 max-w-xl">
          <p className="text-white font-semibold text-sm mb-0.5">Get rate change alerts</p>
          <p className="text-slate-400 text-xs mb-4">We'll notify you when a provider changes their rates or hardware pricing — no spam, just useful updates.</p>
          {/* Replace ACTION_URL with your Formspree endpoint, e.g. https://formspree.io/f/YOUR_FORM_ID */}
          <form
            action="https://formspree.io/f/xjgpglnz"
            method="POST"
            className="flex gap-2"
          >
            <input type="hidden" name="_subject" value="Rate alert signup" />
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              inputMode="email"
              autoComplete="email"
              className="flex-1 min-w-0 px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.10] text-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
            />
            <button
              type="submit"
              className="px-4 py-2.5 bg-brand-blue hover:bg-blue-600 text-white font-semibold rounded-xl text-sm transition-colors flex-shrink-0"
            >
              Notify me
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-400 mt-auto">
      <RateAlerts />
      <div className="container-page py-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="col-span-2 lg:col-span-1 lg-dark lg-sheen relative rounded-2xl p-5">
          <Logo className="mb-3" />
          <p className="text-sm leading-relaxed text-slate-400 mb-3">Independent comparison of mobile card payment systems for Australian tradies. Updated {siteMeta.lastVerifiedDisplay}.</p>
          <p className="text-xs text-slate-600">No sponsored rankings. Not financial advice.</p>
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
