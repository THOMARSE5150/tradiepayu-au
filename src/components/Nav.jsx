import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const links = [
  { label: 'All Providers', href: '/#compare-all' },
  { label: 'Cost Calculator', href: '/#calculator' },
  { label: 'By Trade', href: '/#by-trade' },
]

export default function Nav() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`text-white sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-brand-dark/60 backdrop-blur-xl backdrop-saturate-[180%] border-b border-white/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_-1px_0_rgba(255,255,255,0.04)]'
        : 'bg-brand-dark'
    }`}>
      <div className="container-page flex items-center justify-between h-14">
        <Link to="/" className="font-bold text-white hover:text-blue-300 transition-colors">
          <span className="font-display tracking-tight">TradiePay<span className="text-brand-blue">AU</span></span>
        </Link>
        <nav className="flex items-center gap-1">
          {links.map(l => (
            <Link
              key={l.href}
              to={l.href}
              className="text-sm text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition-all hover:bg-white/[0.07]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
