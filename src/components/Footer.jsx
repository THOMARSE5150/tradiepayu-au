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

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-400 mt-auto">
      <div className="container-page py-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="lg-dark lg-sheen relative rounded-2xl p-5">
          <Logo className="mb-3" />
          <p className="text-sm leading-relaxed text-slate-400">Independent comparison of mobile card payment systems for Australian tradies. Updated March 2026.</p>
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
      </div>
      <div className="border-t border-white/[0.06] py-4 text-center text-xs text-slate-600">
        <p>Rates and fees correct as of March 2026. Verify with providers before signing up. Not financial advice.</p>
      </div>
    </footer>
  )
}
