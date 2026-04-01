import { useState, useMemo, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check, Link2, CheckCheck } from 'lucide-react'
import { haptic } from '../utils/haptic'
import { trackCalculatorUsed } from '../utils/analytics'
import rawProviders from '../data/providers.json'

const PRESETS = [
  { label: '~$3k/mo', value: 3000 },
  { label: '~$10k/mo', value: 10000 },
  { label: '~$20k/mo', value: 20000 },
]

const PROVIDER_SIGNUP = {
  zeller:       'https://www.myzeller.com.au',
  'zeller-tap': 'https://www.myzeller.com.au',
  square:       'https://squareup.com/au/en',
  stripe:       'https://dashboard.stripe.com/register',
  tyro:         'https://www.tyro.com/contact/sign-up',
}

function getInitialState() {
  if (typeof window === 'undefined') return { monthly: 5000, avgTx: 200, amortMonths: 24, includeSim: true }
  const p = new URLSearchParams(window.location.search)
  return {
    monthly:     parseInt(p.get('monthly'), 10)  || 5000,
    avgTx:       parseInt(p.get('avg'), 10)       || 200,
    amortMonths: parseInt(p.get('amort'), 10)     || 24,
    includeSim:  p.has('sim') ? p.get('sim') !== '0' : true,
  }
}

const AMORT_OPTIONS = [
  { value: 12, label: '12 months' },
  { value: 24, label: '24 months' },
  { value: 36, label: '36 months' },
]

function AmortSelect({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const selected = AMORT_OPTIONS.find(o => o.value === value)

  useEffect(() => {
    const handler = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => { haptic('light'); setOpen(v => !v) }}
        className={`w-full flex items-center justify-between px-3 py-2.5 border rounded-lg text-sm font-medium transition-all duration-150 bg-white ${
          open ? 'border-brand-blue ring-2 ring-brand-blue/20 text-brand-dark' : 'border-slate-200 text-brand-dark hover:border-slate-300'
        }`}
      >
        {selected?.label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={15} className="text-slate-400" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute z-20 left-0 right-0 mt-1.5 rounded-xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
            }}
          >
            {AMORT_OPTIONS.map(opt => (
              <button
                key={opt.value}
                type="button"
                onClick={() => { haptic('light'); onChange(opt.value); setOpen(false) }}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors text-left ${
                  opt.value === value
                    ? 'text-brand-blue font-semibold bg-brand-blue/5'
                    : 'text-brand-dark hover:bg-slate-50'
                }`}
              >
                {opt.label}
                {opt.value === value && <Check size={14} strokeWidth={2.5} className="text-brand-blue" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Calculator rows derived from providers.json — rates stay in sync automatically.
// Shift4 omitted: surcharging model means merchant cost = $0 (customer pays).
function buildCalcProviders(providers) {
  const rows = []
  for (const p of providers) {
    if (p.id === 'shift4') continue // quote-only surcharging model, not comparable on rate
    const rate    = (p.fees.in_person_percent || 0) / 100
    const fixed   = (p.fees.in_person_fixed_cents || 0) / 100
    const hw      = p.hardware[0]?.price_aud || 0
    const simCost = p.sim_plan.available && p.sim_plan.cost_monthly_aud ? p.sim_plan.cost_monthly_aud : 0
    if (p.id === 'zeller') {
      rows.push({ id: 'zeller',           name: 'Zeller (Terminal 1 + SIM)', rate, fixed, hardware: hw,  sim: simCost })
      rows.push({ id: 'zeller-tap',       name: 'Zeller (Tap to Pay)',       rate, fixed, hardware: 0,   sim: 0 })
      rows.push({ id: 'zeller-surcharge', name: 'Zeller (Surcharge on)',     rate: 0, fixed: 0, hardware: hw, sim: 0, note: 'Customer pays the fee' })
    } else if (p.id === 'tyro') {
      // In-person rate is quote-only; use payment links rate as proxy
      const tyroRate = (p.fees.payment_links_percent || 1.4) / 100
      rows.push({ id: 'tyro', name: 'Tyro Payment Links', rate: tyroRate, fixed: 0, hardware: 0, sim: 0 })
    } else if (p.id === 'square') {
      rows.push({ id: 'square', name: 'Square Terminal', rate, fixed, hardware: hw, sim: 0 })
    } else {
      rows.push({ id: p.id, name: p.name, rate, fixed, hardware: hw, sim: 0 })
    }
  }
  return rows
}

const PROVIDERS = buildCalcProviders(rawProviders)

export default function CostCalculator() {
  const init = getInitialState()
  const [monthly, setMonthly] = useState(init.monthly)
  const [avgTx, setAvgTx] = useState(init.avgTx)
  const [amortMonths, setAmortMonths] = useState(init.amortMonths)
  const [includeSim, setIncludeSim] = useState(init.includeSim)
  const [copied, setCopied] = useState(false)

  function copyShareLink() {
    const url = new URL(window.location.href.split('?')[0])
    url.searchParams.set('monthly', monthly)
    url.searchParams.set('avg', avgTx)
    url.searchParams.set('amort', amortMonths)
    url.searchParams.set('sim', includeSim ? '1' : '0')
    navigator.clipboard.writeText(url.toString()).then(() => {
      haptic('medium')
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  const results = useMemo(() => {
    const txCount = monthly / avgTx
    return PROVIDERS.map(p => {
      const processing = monthly * p.rate + txCount * p.fixed
      const hwMonthly = p.hardware / amortMonths
      const simMonthly = includeSim ? p.sim : 0
      const total = processing + hwMonthly + simMonthly
      return { ...p, processing, hwMonthly, simMonthly, total }
    }).sort((a, b) => a.total - b.total)
  }, [monthly, avgTx, amortMonths, includeSim])

  const cheapest = results[0]?.total
  const secondCost = results[1]?.total

  return (
    <section id="calculator" className="section section-alt">
      <div className="container-page">
        <h2 className="text-2xl font-bold text-brand-dark mb-2">Monthly Cost Calculator</h2>
        <p className="text-slate-500 mb-8">Enter your expected monthly card turnover to compare real costs.</p>

        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                Monthly card revenue
              </label>
              <div className="flex gap-2 mb-2">
                {PRESETS.map(p => (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => { haptic('light'); setMonthly(p.value) }}
                    className={`text-xs px-2 py-1 rounded-lg border transition-all ${monthly === p.value ? 'bg-brand-blue text-white border-brand-blue' : 'border-slate-200 text-slate-500 hover:border-brand-blue hover:text-brand-blue'}`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">$</span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  enterKeyHint="done"
                  value={monthly}
                  onChange={e => { haptic('light'); setMonthly(+e.target.value.replace(/[^0-9]/g, '')) }}
                  onBlur={() => {
                    if (monthly > 0 && results[0]) {
                      trackCalculatorUsed({ monthly, avgTx, winner: results[0].id, winnerCost: results[0].total })
                    }
                  }}
                  className="w-full pl-7 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                Average transaction
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">$</span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  enterKeyHint="done"
                  value={avgTx}
                  onChange={e => { haptic('light'); setAvgTx(+e.target.value.replace(/[^0-9]/g, '') || 1) }}
                  className="w-full pl-7 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                Hardware amortised over
              </label>
              <AmortSelect value={amortMonths} onChange={setAmortMonths} />
            </div>
          </div>
          <label className="flex items-center gap-2 mt-4 text-sm text-slate-600 cursor-pointer">
            <input
              type="checkbox"
              checked={includeSim}
              onChange={e => { haptic('light'); setIncludeSim(e.target.checked) }}
              className="rounded"
            />
            Include SIM plan cost where available
          </label>
        </div>

        <motion.div className="space-y-3" layout>
          <AnimatePresence>
            {results.map((p, i) => {
              const pct = cheapest > 0 ? (p.total / cheapest) : 1
              const barWidth = `${Math.min(100, pct * 50)}%`
              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, delay: i * 0.07, ease: 'easeOut' }}
                  whileHover={{ y: -2 }}
                  className={`rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3 ${i === 0 ? 'lg-blue' : 'bg-white border border-slate-200'}`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-brand-dark text-sm">{p.name}</span>
                      {i === 0 && <span className="badge badge-gold text-xs">Cheapest</span>}
                      {p.note && <span className="badge badge-muted text-xs">{p.note}</span>}
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-2 rounded-full ${i === 0 ? 'bg-gradient-to-r from-brand-blue to-blue-400' : 'bg-slate-300'}`}
                        initial={{ width: 0 }}
                        animate={{ width: barWidth }}
                        transition={{ duration: 0.7, delay: i * 0.07 + 0.15, ease: [0.34, 1.1, 0.64, 1] }}
                      />
                    </div>
                    <motion.div
                      className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-slate-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.07 + 0.25 }}
                    >
                      <span>Processing: ${p.processing.toFixed(2)}</span>
                      {p.hwMonthly > 0 && <span>Hardware: ${p.hwMonthly.toFixed(2)}/mo</span>}
                      {p.simMonthly > 0 && <span>SIM: ${p.simMonthly.toFixed(2)}/mo</span>}
                    </motion.div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <motion.div
                      className={`text-xl font-bold ${i === 0 ? 'text-brand-blue' : 'text-brand-dark'}`}
                      key={p.total.toFixed(2)}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      ${p.total.toFixed(2)}
                    </motion.div>
                    <div className="text-xs text-slate-500">per month</div>
                    {i === 0 && secondCost > 0 && (secondCost - p.total) > 0.5 && (
                      <div className="text-xs text-green-600 font-semibold mt-0.5">
                        saves ${(secondCost - p.total).toFixed(2)}/mo
                      </div>
                    )}
                    {i === 0 && PROVIDER_SIGNUP[p.id] && (
                      <a
                        href={PROVIDER_SIGNUP[p.id]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-xs font-semibold text-white bg-brand-blue hover:bg-blue-600 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        Sign up →
                      </a>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
        <div className="flex items-center justify-end mt-4 mb-1">
          <button
            onClick={copyShareLink}
            className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all ${copied ? 'bg-green-50 border-green-200 text-green-600' : 'bg-white border-slate-200 text-slate-500 hover:text-brand-blue hover:border-brand-blue/40'}`}
          >
            {copied ? <CheckCheck size={13} /> : <Link2 size={13} />}
            {copied ? 'Link copied!' : 'Share this result'}
          </button>
        </div>
        <p className="text-xs text-slate-400 mt-4">
          * Hardware amortised over {amortMonths} months. Assumes all transactions are in-person.
          Zeller (1.4%, Terminal 1 $99, SIM $15/mo) and Square Terminal ($329) verified April 2026. Stripe (1.7% + $0.10, Reader M2 $69) and Tyro (1.4% payment links) could not be live-verified due to JS-rendered pricing pages — confirm at provider websites before signing up.
        </p>
      </div>
    </section>
  )
}
