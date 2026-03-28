import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [
  { label: 'All Providers', href: '/#compare-all' },
  { label: 'Cost Calculator', href: '/#calculator' },
  { label: 'By Trade', href: '/#by-trade' },
  { label: 'About', href: '/about' },
]

export default function Nav() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className={`text-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark/60 backdrop-blur-xl backdrop-saturate-[180%] border-b border-white/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_-1px_0_rgba(255,255,255,0.04)]'
          : 'bg-brand-dark'
      }`}>
        <div className="container-page flex items-center justify-between h-14">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-1">
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

          {/* Mobile hamburger */}
          <button
            className="sm:hidden flex items-center justify-center w-9 h-9 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.07] transition-all"
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile slide-down menu */}
      {open && (
        <div className="sm:hidden fixed inset-0 z-40 flex flex-col" style={{ top: '56px' }}>
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          {/* Panel */}
          <nav
            className="relative z-10 bg-brand-dark border-b border-white/[0.08] px-4 py-3 flex flex-col gap-1"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}
          >
            {links.map(l => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-slate-200 hover:text-white px-4 py-3 rounded-xl transition-all hover:bg-white/[0.07] active:bg-white/[0.12]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
