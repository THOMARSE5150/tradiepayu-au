import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'All Providers', href: '/#compare-all' },
  { label: 'Cost Calculator', href: '/#calculator' },
  { label: 'By Trade', href: '/#by-trade' },
]

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <header className="bg-brand-dark text-white sticky top-0 z-50 shadow">
      <div className="container-page flex items-center justify-between h-14">
        <Link to="/" className="font-bold text-white hover:text-blue-300 transition-colors">
          TradiePay<span className="text-brand-blue">AU</span>
        </Link>
        <nav className="flex items-center gap-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-300 hover:text-white px-3 py-1.5 rounded transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
