import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react' // eslint-disable-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { haptic } from '../utils/haptic'
import { STATES } from '../data/states'

const topLinks = [
  { label: 'Trades',    href: '/trades' },
  { label: 'Compare',   href: '/compare' },
  { label: 'Blog',      href: '/blog' },
  { label: 'Glossary',  href: '/glossary' },
  { label: 'Calculator', href: '/calculator' },
]

const blogGuides = [
  { label: 'Zeller vs Square vs Stripe', href: '/blog/zeller-vs-square-vs-stripe-eftpos-tradies-2026' },
  { label: 'Best EFTPOS for Electricians', href: '/blog/best-eftpos-electricians-australia-2026' },
  { label: 'Best EFTPOS for Plumbers', href: '/blog/best-eftpos-plumbers-australia-2026' },
  { label: 'Best EFTPOS for Builders', href: '/blog/best-eftpos-builders-australia-2026' },
  { label: 'Best for Sole Traders', href: '/blog/best-eftpos-sole-traders-australia-2026' },
  { label: 'Zeller vs Square', href: '/blog/zeller-vs-square-eftpos-tradies' },
  { label: 'Stripe vs Square', href: '/blog/stripe-vs-square-eftpos-australia-2026' },
  { label: 'Surcharging Guide', href: '/blog/surcharging-eftpos-tradies-australia-2026' },
  { label: 'EFTPOS Fees Explained', href: '/blog/eftpos-fees-tradies-australia-2026' },
  { label: 'Get Paid Faster', href: '/blog/how-to-get-paid-faster-sole-trader-australia' },
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

function SubList({ title, items, onClose }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={() => { haptic('light'); setOpen(v => !v) }}
        className="w-full flex items-center justify-between px-6 py-4 text-white/80 active:bg-white/[0.05] transition-colors"
      >
        <span className="text-base font-semibold">{title}</span>
        <motion.span animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronRight size={18} className="text-white/30" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="grid grid-cols-2 gap-1 px-4 pb-4">
              {items.map(item => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={onClose}
                  className="text-sm text-slate-300 hover:text-white px-3 py-2.5 rounded-xl transition-all hover:bg-white/[0.07] active:bg-white/[0.12]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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

  // Close sheet when route changes
  useEffect(() => {
    const timer = setTimeout(() => setOpen(false), 0)
    return () => clearTimeout(timer)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => { haptic('light'); setOpen(false) }

  return (
    <>
      <header className={`text-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark/60 backdrop-blur-xl backdrop-saturate-[180%] border-b border-white/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_-1px_0_rgba(255,255,255,0.04)]'
          : 'bg-brand-dark'
      }`}>
        <div className="container-page flex items-center justify-between h-16">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-0.5">
            {topLinks.map(l => {
              const isActive = l.href.startsWith('/#')
                ? false
                : pathname === l.href || pathname.startsWith(l.href + '/')
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`text-[13px] font-semibold px-4 py-2 rounded-lg transition-all duration-150 tracking-wide ${
                    isActive
                      ? 'text-white bg-white/[0.12]'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  {l.label}
                </Link>
              )
            })}
            <Link
              to="/calculator"
              className="ml-2 text-[13px] font-semibold bg-brand-blue/90 hover:bg-brand-blue text-white px-4 py-2 rounded-lg transition-all duration-150"
              style={{ boxShadow: '0 0 0 1px rgba(0,106,255,0.4)' }}
            >
              Calculator →
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden flex items-center justify-center w-12 h-12 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.07] transition-all"
            onClick={() => { haptic('light'); setOpen(v => !v) }}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile bottom-sheet menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="sm:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={close}
            />

            {/* Sheet */}
            <motion.div
              key="sheet"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 320 }}
              className="sm:hidden fixed bottom-0 left-0 right-0 z-[60] flex flex-col rounded-t-3xl overflow-hidden"
              style={{
                background: 'rgba(20,20,36,0.97)',
                backdropFilter: 'blur(32px)',
                maxHeight: '88vh',
                boxShadow: '0 -8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)',
              }}
            >
              {/* Drag handle */}
              <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
                <div className="w-10 h-1 rounded-full bg-white/20" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-white/[0.07] flex-shrink-0">
                <span className="text-white font-bold text-base">Menu</span>
                <button
                  onClick={close}
                  className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Scrollable content */}
              <div className="overflow-y-auto flex-1">
                {/* Main links */}
                {topLinks.map(l => (
                  <Link
                    key={l.href}
                    to={l.href}
                    onClick={close}
                    className="flex items-center justify-between px-6 py-4 text-white/80 hover:text-white border-b border-white/[0.06] active:bg-white/[0.05] transition-colors"
                  >
                    <span className="text-base font-semibold">{l.label}</span>
                    <ChevronRight size={18} className="text-white/25" />
                  </Link>
                ))}

                {/* Expandable sub-lists */}
                <SubList title="Providers" items={providers} onClose={close} />
                <SubList title="By Trade" items={trades} onClose={close} />
                <SubList
                  title="By State"
                  items={STATES.map(s => ({ label: `${s.name} (${s.abbr})`, href: `/states/${s.slug}` }))}
                  onClose={close}
                />
                <SubList title="Blog & Guides" items={blogGuides} onClose={close} />

                {/* Legal */}
                <div className="flex flex-wrap gap-x-5 gap-y-1 px-6 py-4">
                  <Link to="/about" onClick={close} className="text-xs text-white/30 hover:text-white/60 transition-colors">About</Link>
                  <Link to="/contact" onClick={close} className="text-xs text-white/30 hover:text-white/60 transition-colors">Contact</Link>
                  <Link to="/disclaimer" onClick={close} className="text-xs text-white/30 hover:text-white/60 transition-colors">Disclaimer</Link>
                  <Link to="/privacy" onClick={close} className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy</Link>
                </div>
              </div>

              {/* Pinned CTAs */}
              <div
                className="flex-shrink-0 px-4 pt-3 grid grid-cols-2 gap-3 border-t border-white/[0.07]"
                style={{ paddingBottom: 'max(1.5rem, calc(env(safe-area-inset-bottom) + 0.75rem))' }}
              >
                <Link
                  to="/compare"
                  onClick={close}
                  className="flex items-center justify-center gap-1.5 py-3 rounded-2xl bg-brand-blue text-white font-semibold text-sm transition-colors hover:bg-blue-600"
                  style={{ boxShadow: '0 4px 16px rgba(0,106,255,0.35)' }}
                >
                  Compare →
                </Link>
                <Link
                  to="/calculator"
                  onClick={close}
                  className="flex items-center justify-center gap-1.5 py-3 rounded-2xl bg-white/[0.08] border border-white/[0.12] text-white font-semibold text-sm transition-colors hover:bg-white/[0.12]"
                >
                  Calculator →
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
