import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import AffiliateButton from './AffiliateButton'
import providers from '../data/providers.json'

const BRAND = {
  zeller: '#006aff',
  square: '#1a1a1a',
  stripe: '#635bff',
  tyro:   '#d4006e',
  shift4: '#e55a00',
}

function stat(p) {
  const rate = p.fees.in_person_percent
  return {
    rate: rate ? `${rate}%` : 'Quote',
    sim:  p.sim_plan.available ? `✓ SIM` : '✗ SIM',
    settle: p.settlement?.same_day_available ? 'Same day' : `${p.settlement?.standard_days ?? 1}–2d`,
  }
}

/**
 * StickyProviderBar
 * Appears once the hero scrolls out of view.
 * Shows: current provider key stats + 2 alternatives + sign-up CTA.
 *
 * Props:
 *   providerId   — id string matching providers.json  e.g. 'zeller'
 *   heroRef      — ref to the hero element (optional); falls back to 300px scroll
 */
export default function StickyProviderBar({ providerId, heroRef }) {
  const [show, setShow] = useState(false)
  const current = providers.find(p => p.id === providerId)
  const others   = providers.filter(p => p.id !== providerId).slice(0, 2)

  useEffect(() => {
    const handler = () => {
      if (heroRef?.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setShow(rect.bottom < 0)
      } else {
        setShow(window.scrollY > 300)
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [heroRef])

  if (!current) return null

  const cs = stat(current)
  const brand = BRAND[providerId] ?? '#1a1a2e'

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200"
          style={{ boxShadow: '0 -4px 24px rgba(0,0,0,0.12)' }}
        >
          <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center gap-3">

            {/* Current provider */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-extrabold text-white flex-shrink-0"
                style={{ background: brand }}
              >
                {current.name[0]}
              </span>
              <div className="hidden sm:block">
                <p className="text-xs font-bold text-brand-dark leading-none">{current.name}</p>
                <p className="text-[10px] text-slate-400 leading-none mt-0.5">Currently viewing</p>
              </div>
            </div>

            {/* Current provider stats */}
            <div className="flex items-center gap-2 flex-1">
              <Chip accent>{cs.rate}</Chip>
              <Chip accent>{cs.settle}</Chip>
              <Chip accent className="hidden sm:inline-flex">{cs.sim}</Chip>
            </div>

            {/* Divider */}
            <div className="hidden sm:flex items-center gap-2 border-l border-slate-200 pl-3">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide whitespace-nowrap">vs</span>
              {others.map(o => {
                const os = stat(o)
                const ob = BRAND[o.id] ?? '#1a1a2e'
                return (
                  <Link
                    key={o.id}
                    to={`/providers/${o.id}`}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 hover:border-brand-blue hover:shadow-sm transition-all group"
                  >
                    <span
                      className="w-5 h-5 rounded-md flex items-center justify-center text-[9px] font-extrabold text-white flex-shrink-0"
                      style={{ background: ob }}
                    >
                      {o.name[0]}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-600 group-hover:text-brand-blue transition-colors">{o.name}</span>
                    <span className="text-[10px] text-slate-400">{os.rate}</span>
                  </Link>
                )
              })}
            </div>

            {/* CTA */}
            <AffiliateButton
              providerId={providerId}
              label="sticky-bar"
              intent="signup"
              className="ml-auto flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-2 bg-brand-blue text-white text-xs font-semibold rounded-xl hover:bg-blue-600 active:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Get {current.name} →
            </AffiliateButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Chip({ children, accent, className = '' }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${
      accent
        ? 'bg-blue-50 text-blue-700 border-blue-200'
        : 'bg-slate-100 text-slate-500 border-slate-200'
    } ${className}`}>
      {children}
    </span>
  )
}
