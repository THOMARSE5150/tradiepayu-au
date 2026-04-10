import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import providers from '../data/providers.json'
import { trackCompareCta } from '../utils/analytics'

const BRAND = {
  zeller: '#006aff',
  square: '#1a1a1a',
  stripe: '#635bff',
  tyro:   '#d4006e',
  shift4: '#e55a00',
}

const FEATURES = [
  { key: 'rate',       label: 'Rate',       mobileLabel: 'Rate' },
  { key: 'hardware',   label: 'Hardware',   mobileLabel: 'Hardware' },
  { key: 'sim',        label: 'SIM',        mobileLabel: 'SIM' },
  { key: 'offline',    label: 'Offline',    mobileLabel: 'Offline' },
  { key: 'settlement', label: 'Settlement', mobileLabel: 'Settles' },
  { key: 'monthly',    label: 'Monthly fee',mobileLabel: 'Monthly' },
]

// Winner per feature (shown as "best" badge on that provider's cell)
const WINNER = { rate: 'zeller', hardware: 'zeller', sim: 'zeller', offline: 'square', settlement: 'zeller', monthly: 'zeller' }

// Concise use-case positioning label per provider
const USE_CASE = {
  zeller: 'Best Overall',
  square: 'Best Offline',
  stripe: 'Best Integrations',
}

function getCell(p) {
  const rate = p.fees.in_person_percent
  const hw   = p.hardware[0]?.price_aud
  return {
    rate:       rate  ? { type: rate <= 1.4 ? 'best' : 'good', label: `${rate}%`, mobile: `${rate}%` }
                      : { type: 'quote', label: 'Quote', mobile: 'Quote' },
    hardware:   hw    ? { type: hw <= 99 ? 'best' : 'good', label: `$${hw}`, mobile: `$${hw}` }
                      : { type: 'good', label: 'Rental', mobile: 'Rental' },
    sim:        p.sim_plan.available
                      ? { type: 'best', label: `✓ ${p.sim_plan.network} $${p.sim_plan.cost_monthly_aud}/mo`, mobile: `✓ $${p.sim_plan.cost_monthly_aud}/mo` }
                      : { type: 'no',   label: '✗ None', mobile: '✗ None' },
    offline:    p.offline_mode.available
                      ? { type: 'best', label: '✓ Available', mobile: '✓ Yes' }
                      : { type: 'no',   label: '✗ Requires signal', mobile: '✗ No' },
    settlement: p.settlement?.same_day_available
                      ? { type: 'best', label: '✓ Same day', mobile: '✓ Same day' }
                      : { type: 'good', label: `${p.settlement?.standard_days ?? 1}–2 days`, mobile: `${p.settlement?.standard_days ?? 1}–2 days` },
    monthly:    p.fees.monthly_fee === 0
                      ? { type: 'best', label: '✓ $0', mobile: '✓ $0' }
                      : { type: 'good', label: `$${p.fees.monthly_fee}/mo`, mobile: `$${p.fees.monthly_fee}/mo` },
  }
}

function Pill({ type, children }) {
  const s = {
    best:  'bg-green-50 text-green-700 border-green-200',
    good:  'bg-amber-50 text-amber-700 border-amber-200',
    no:    'bg-slate-100 text-slate-400 border-slate-200',
    quote: 'bg-slate-100 text-slate-500 border-slate-200',
  }[type] ?? 'bg-slate-100 text-slate-500'
  return (
    <span className={`inline-block border rounded-full px-2 py-0.5 text-[11px] font-semibold leading-snug ${s}`}>
      {children}
    </span>
  )
}

export default function ProviderComparison() {
  return (
    <div>

      {/* ════════════════════════════════════════════════
          MOBILE  (< md) — horizontal scroll of cards
          ════════════════════════════════════════════════ */}
      <div className="md:hidden">
        <div className="overflow-x-auto -mx-4 px-4 pb-3 snap-x snap-mandatory scroll-smooth">
          <div className="flex gap-3" style={{ width: `max-content` }}>
            {providers.map((p, pi) => {
              const brand = BRAND[p.id] ?? '#1a1a2e'
              const isTop = p.id === 'zeller'
              const c = getCell(p)
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: pi * 0.06 }}
                  className={`snap-start flex-shrink-0 w-48 rounded-2xl overflow-hidden border ${
                    isTop
                      ? 'border-brand-blue shadow-[0_4px_20px_rgba(0,106,255,0.18)]'
                      : 'border-slate-200 shadow-sm'
                  }`}
                >
                  {isTop && (
                    <div className="bg-brand-blue text-white text-[10px] font-bold tracking-widest uppercase text-center py-1.5">
                      ★ Top pick
                    </div>
                  )}
                  <div className="bg-white p-3.5">
                    {/* Provider header */}
                    <div className="flex items-center gap-2 mb-3.5">
                      <span
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-extrabold flex-shrink-0"
                        style={{ background: brand, color: '#fff' }}
                      >
                        {p.name[0]}
                      </span>
                      <div>
                        <p className={`text-sm font-bold leading-none ${isTop ? 'text-brand-blue' : 'text-brand-dark'}`}>{p.name}</p>
                        {USE_CASE[p.id] && (
                          <span className="inline-block mt-0.5 text-[9px] font-bold uppercase tracking-wide text-brand-blue bg-blue-50 px-1.5 py-[2px] rounded-full leading-none">
                            {USE_CASE[p.id]}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Feature rows */}
                    <div className="space-y-2">
                      {FEATURES.map(feat => {
                        const fc = c[feat.key]
                        const isWinner = p.id === WINNER[feat.key]
                        return (
                          <div key={feat.key} className="flex items-center justify-between gap-1.5">
                            <span className="text-[10px] text-slate-500 font-medium flex-shrink-0">{feat.mobileLabel}</span>
                            <Pill type={isWinner ? 'best' : fc.type}>{fc.mobile}</Pill>
                          </div>
                        )
                      })}
                    </div>

                    <Link
                      to={`/providers/${p.id}`}
                      onClick={() => trackCompareCta(p.id, 'table_cta_row')}
                      className={`mt-3.5 block text-center text-[11px] font-semibold px-3 py-2 rounded-xl transition-all ${
                        isTop
                          ? 'bg-brand-blue text-white active:bg-blue-700'
                          : 'border border-slate-200 text-slate-600 active:bg-slate-50'
                      }`}
                    >
                      {isTop ? 'Full review →' : 'Read review →'}
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
        <p className="text-center text-[11px] text-slate-400 mt-1">Swipe to compare all 5 providers →</p>
      </div>

      {/* ════════════════════════════════════════════════
          DESKTOP (md+) — column-per-provider table
          ════════════════════════════════════════════════ */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="py-2 pr-4 w-32" />
              {providers.map(p => {
                const brand = BRAND[p.id] ?? '#1a1a2e'
                const isTop = p.id === 'zeller'
                return (
                  <th key={p.id} className="pb-0 px-1.5 align-bottom" style={{ width: '18%' }}>
                    {isTop && (
                      <div className="bg-brand-blue text-white text-[10px] font-bold tracking-widest uppercase text-center py-1 rounded-t-xl mx-0.5">
                        ★ Top pick
                      </div>
                    )}
                    <Link
                      to={`/providers/${p.id}`}
                      onClick={() => trackCompareCta(p.id, 'table_header')}
                      className={`flex flex-col items-center gap-1.5 py-3 px-2 rounded-none transition-opacity hover:opacity-80 ${
                        isTop ? 'bg-blue-50/60 border-x border-t border-brand-blue/20' : 'bg-slate-50/40'
                      }`}
                    >
                      <span
                        className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold"
                        style={{ background: brand, color: '#fff' }}
                      >
                        {p.name[0]}
                      </span>
                      <span className={`text-sm font-bold ${isTop ? 'text-brand-blue' : 'text-brand-dark'}`}>{p.name}</span>
                      {USE_CASE[p.id] && (
                        <span className="text-[9px] font-bold uppercase tracking-wide text-brand-blue bg-blue-50 px-1.5 py-[2px] rounded-full leading-none">
                          {USE_CASE[p.id]}
                        </span>
                      )}
                      <span className="text-[10px] text-slate-400 font-normal text-center leading-tight">{p.tagline}</span>
                    </Link>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {FEATURES.map((feat, fi) => (
              <motion.tr
                key={feat.key}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.28, delay: fi * 0.04 }}
                className="border-t border-slate-100"
              >
                <td className="py-3 pr-4 text-xs font-semibold text-slate-500 uppercase tracking-wide whitespace-nowrap align-middle">
                  {feat.label}
                </td>
                {providers.map(p => {
                  const c = getCell(p)
                  const fc = c[feat.key]
                  const isTop = p.id === 'zeller'
                  const isWinner = p.id === WINNER[feat.key]
                  return (
                    <td
                      key={p.id}
                      className={`py-3 px-1.5 text-center align-middle ${
                        isTop ? 'bg-blue-50/60 border-x border-brand-blue/20' : ''
                      }`}
                    >
                      <Pill type={isWinner ? 'best' : fc.type}>{fc.label}</Pill>
                    </td>
                  )
                })}
              </motion.tr>
            ))}

            {/* Review CTA row */}
            <tr className="border-t border-slate-100">
              <td className="py-4" />
              {providers.map(p => {
                const isTop = p.id === 'zeller'
                return (
                  <td
                    key={p.id}
                    className={`py-4 px-1.5 text-center ${
                      isTop ? 'bg-blue-50/60 border-x border-b border-brand-blue/20 rounded-b-xl' : ''
                    }`}
                  >
                    <Link
                      to={`/providers/${p.id}`}
                      onClick={() => trackCompareCta(p.id, 'table_cta_row')}
                      className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-xl transition-all ${
                        isTop
                          ? 'bg-brand-blue text-white hover:bg-blue-600'
                          : 'border border-slate-200 text-slate-500 hover:border-brand-blue hover:text-brand-blue'
                      }`}
                    >
                      {isTop ? 'Full review →' : 'Review →'}
                    </Link>
                  </td>
                )
              })}
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}
