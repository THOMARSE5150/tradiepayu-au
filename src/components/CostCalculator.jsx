import { useState, useMemo } from 'react'

const PROVIDERS = [
  { id: 'zeller', name: 'Zeller (Terminal 1 + SIM)', rate: 0.014, fixed: 0, hardware: 99, sim: 15 },
  { id: 'zeller-tap', name: 'Zeller (Tap to Pay)', rate: 0.014, fixed: 0, hardware: 0, sim: 0 },
  { id: 'square', name: 'Square Terminal', rate: 0.016, fixed: 0, hardware: 329, sim: 0 },
  { id: 'stripe', name: 'Stripe Reader', rate: 0.017, fixed: 0.10, hardware: 98, sim: 15 },
  { id: 'tyro', name: 'Tyro Payment Links', rate: 0.014, fixed: 0, hardware: 0, sim: 0 },
]

export default function CostCalculator() {
  const [monthly, setMonthly] = useState(5000)
  const [avgTx, setAvgTx] = useState(200)
  const [amortMonths, setAmortMonths] = useState(24)
  const [includeSim, setIncludeSim] = useState(true)

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
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">$</span>
                <input
                  type="number"
                  value={monthly}
                  onChange={e => setMonthly(+e.target.value)}
                  min="0"
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
                  type="number"
                  value={avgTx}
                  onChange={e => setAvgTx(+e.target.value)}
                  min="1"
                  className="w-full pl-7 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                Hardware amortised over
              </label>
              <select
                value={amortMonths}
                onChange={e => setAmortMonths(+e.target.value)}
                className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white"
              >
                <option value={12}>12 months</option>
                <option value={24}>24 months</option>
                <option value={36}>36 months</option>
              </select>
            </div>
          </div>
          <label className="flex items-center gap-2 mt-4 text-sm text-slate-600 cursor-pointer">
            <input
              type="checkbox"
              checked={includeSim}
              onChange={e => setIncludeSim(e.target.checked)}
              className="rounded"
            />
            Include SIM plan cost where available
          </label>
        </div>

        <div className="space-y-3">
          {results.map((p, i) => {
            const pct = cheapest > 0 ? (p.total / cheapest) : 1
            return (
              <div key={p.id} className={`bg-white rounded-xl border p-4 flex flex-col sm:flex-row sm:items-center gap-3 ${i === 0 ? 'border-brand-blue ring-2 ring-brand-blue' : 'border-slate-200'}`}>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-brand-dark text-sm">{p.name}</span>
                    {i === 0 && <span className="badge badge-gold text-xs">Cheapest</span>}
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${i === 0 ? 'bg-brand-blue' : 'bg-slate-300'}`}
                      style={{ width: `${Math.min(100, (pct) * 50)}%` }}
                    />
                  </div>
                  <div className="flex gap-4 mt-2 text-xs text-slate-500">
                    <span>Processing: ${p.processing.toFixed(2)}</span>
                    {p.hwMonthly > 0 && <span>Hardware: ${p.hwMonthly.toFixed(2)}/mo</span>}
                    {p.simMonthly > 0 && <span>SIM: ${p.simMonthly.toFixed(2)}/mo</span>}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className={`text-xl font-bold ${i === 0 ? 'text-brand-blue' : 'text-brand-dark'}`}>
                    ${p.total.toFixed(2)}
                  </div>
                  <div className="text-xs text-slate-500">per month</div>
                </div>
              </div>
            )
          })}
        </div>
        <p className="text-xs text-slate-400 mt-4">* Hardware amortised over {amortMonths} months. Assumes all transactions are in-person. Verify rates with providers.</p>
      </div>
    </section>
  )
}
