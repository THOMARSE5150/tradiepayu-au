import { Link } from 'react-router-dom'

const providers = [
  { label: 'Zeller', href: '/providers/zeller' },
  { label: 'Square', href: '/providers/square' },
  { label: 'Stripe', href: '/providers/stripe' },
  { label: 'Tyro', href: '/providers/tyro' },
]

const trades = [
  { label: 'Glaziers', href: '/trades/glaziers' },
  { label: 'Electricians', href: '/trades/electricians' },
  { label: 'Plumbers', href: '/trades/plumbers' },
  { label: 'Builders', href: '/trades/builders' },
  { label: 'Cleaners', href: '/trades/cleaners' },
  { label: 'Landscapers', href: '/trades/landscapers' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-400 mt-auto">
      <div className="container-page py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <p className="text-white font-semibold mb-3">TradiePay<span className="text-brand-blue">AU</span></p>
          <p className="text-sm leading-relaxed">Independent comparison of mobile card payment systems for Australian tradies. Updated March 2026.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Providers</p>
          <ul className="space-y-1.5 text-sm">
            {providers.map(p => (
              <li key={p.href}><Link to={p.href} className="hover:text-white transition-colors">{p.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">By Trade</p>
          <ul className="space-y-1.5 text-sm">
            {trades.map(t => (
              <li key={t.href}><Link to={t.href} className="hover:text-white transition-colors">{t.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-600">
        <p>Rates and fees correct as of March 2026. Verify with providers before signing up. Not financial advice.</p>
      </div>
    </footer>
  )
}
