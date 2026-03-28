import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo'

const topLinks = [
  { label: 'Compare All', href: '/#compare-all' },
  { label: 'Calculator', href: '/#calculator' },
  { label: 'About', href: '/about' },
]

const providers = [
  { label: 'Zeller', href: '/providers/zeller' },
  { label: 'Square', href: '/providers/square' },
  { label: 'Stripe', href: '/providers/stripe' },
  { label: 'Tyro', href: '/providers/tyro' },
  { label: 'Shift4', href: '/providers/shift4' },
]

const trades = [
  { label: 'Electricians', href: '/trades/electricians' },
  { label: 'Plumbers', href: '/trades/plumbers' },
  { label: 'Builders', href: '/trades/builders' },
  { label: 'Glaziers', href: '/trades/glaziers' },
  { label: 'Roofers', href: '/trades/roofers' },
  { label: 'Painters', href: '/trades/painters' },
  { label: 'Tilers', href: '/trades/tilers' },
  { label: 'Concreters', href: '/trades/concreters' },
  { label: 'Carpenters', href: '/trades/carpenters' },
  { label: 'HVAC Technicians', href: '/trades/hvac' },
  { label: 'Gas Fitters', href: '/trades/gas-fitters' },
  { label: 'Fencers', href: '/trades/fencers' },
  { label: 'Plasterers', href: '/trades/plasterers' },
  { label: 'Pool Builders', href: '/trades/pool-builders' },
  { label: 'Pest Controllers', href: '/trades/pest-controllers' },
  { label: 'Welders', href: '/trades/welders' },
  { label: 'Cleaners', href: '/trades/cleaners' },
  { label: 'Landscapers', href: '/trades/landscapers' },
]

function MobileGroup({ title, items, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div>
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-white/40 hover:text-white/60 transition-colors"
      >
        {title}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="grid grid-cols-2 gap-1 px-2 pb-2">
          {items.map(item => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm text-slate-300 hover:text-white px-3 py-2 rounded-lg transition-all hover:bg-white/[0.07] active:bg-white/[0.12]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Nav() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

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
            {topLinks.map(l => (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition-all hover:bg-white/[0.07]"
              >
                {l.label}
              </Link>
            ))}
            {/* Desktop: providers dropdown hint */}
            <Link to="/providers/zeller" className="text-sm text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition-all hover:bg-white/[0.07]">
              Providers
            </Link>
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
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <nav
            className="relative z-10 bg-brand-dark border-b border-white/[0.08] flex flex-col overflow-y-auto max-h-[calc(100vh-56px)]"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}
          >
            {/* Top links */}
            <div className="flex flex-col gap-1 px-2 pt-3 pb-2 border-b border-white/[0.06]">
              {topLinks.map(l => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="text-base text-slate-200 hover:text-white px-4 py-3 rounded-xl transition-all hover:bg-white/[0.07] active:bg-white/[0.12]"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Grouped sections */}
            <div className="divide-y divide-white/[0.06]">
              <MobileGroup title="Providers" items={providers} defaultOpen={false} />
              <MobileGroup title="By Trade" items={trades} defaultOpen={false} />
            </div>

            {/* Legal footer */}
            <div className="flex gap-4 px-4 py-3 border-t border-white/[0.06]">
              <Link to="/contact" className="text-xs text-white/30 hover:text-white/60 transition-colors">Contact</Link>
              <Link to="/disclaimer" className="text-xs text-white/30 hover:text-white/60 transition-colors">Disclaimer</Link>
              <Link to="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy</Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
