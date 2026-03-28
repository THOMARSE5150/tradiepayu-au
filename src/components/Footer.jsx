import { Link } from 'react-router-dom'
import Logo from './Logo'

const providers = [
  { label: 'Zeller', href: '/providers/zeller' },
  { label: 'Square', href: '/providers/square' },
  { label: 'Stripe', href: '/providers/stripe' },
  { label: 'Tyro', href: '/providers/tyro' },
  { label: 'Shift4', href: '/providers/shift4' },
]

const trades = [
  { label: 'Glaziers', href: '/trades/glaziers' },
  { label: 'Electricians', href: '/trades/electricians' },
  { label: 'Plumbers', href: '/trades/plumbers' },
  { label: 'Builders', href: '/trades/builders' },
  { label: 'Cleaners', href: '/trades/cleaners' },
  { label: 'Landscapers', href: '/trades/landscapers' },
  { label: 'Roofers', href: '/trades/roofers' },
  { label: 'Painters', href: '/trades/painters' },
  { label: 'Tilers', href: '/trades/tilers' },
  { label: 'Concreters', href: '/trades/concreters' },
  { label: 'Carpenters', href: '/trades/carpenters' },
  { label: 'HVAC Technicians', href: '/trades/hvac' },
]

const legal = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Disclaimer', href: '/disclaimer' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-400 mt-auto">
      <div className="container-page py-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="col-span-2 lg:col-span-1 lg-dark lg-sheen relative rounded-2xl p-5">
          <Logo className="mb-3" />
          <p className="text-sm leading-relaxed text-slate-400 mb-3">Independent comparison of mobile card payment systems for Australian tradies. Updated March 2026.</p>
          <p className="text-xs text-slate-600">No sponsored rankings. Not financial advice.</p>
        </div>
        <div className="lg-dark lg-sheen relative rounded-2xl p-5">
          <p className="text-white/60 font-semibold mb-3 text-xs uppercase tracking-widest">Providers</p>
          <ul className="space-y-2 text-sm">
            {providers.map(p => (
              <li key={p.href}><Link to={p.href} className="text-slate-400 hover:text-white transition-colors">{p.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="lg-dark lg-sheen relative rounded-2xl p-5">
          <p className="text-white/60 font-semibold mb-3 text-xs uppercase tracking-widest">By Trade</p>
          <ul className="space-y-2 text-sm">
            {trades.map(t => (
              <li key={t.href}><Link to={t.href} className="text-slate-400 hover:text-white transition-colors">{t.label}</Link></li>
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
        <p>Rates correct as of March 2026. Verify with providers before signing up.</p>
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
