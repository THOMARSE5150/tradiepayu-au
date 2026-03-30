import providers from '../data/providers.json'
import VerifiedBadge from './VerifiedBadge'

const SCORE_LABELS = [
  { key: 'score_fees',         label: 'Fees' },
  { key: 'score_connectivity', label: 'Connectivity' },
  { key: 'score_settlement',   label: 'Settlement' },
  { key: 'score_invoicing',    label: 'Invoicing' },
  { key: 'score_overall',      label: 'Overall' },
]

function ScoreBar({ label, value }) {
  const pct = Math.round((value / 10) * 100)
  const colour =
    value >= 9   ? 'bg-brand-green' :
    value >= 7.5 ? 'bg-brand-blue'  :
    value >= 6   ? 'bg-amber-400'   : 'bg-red-400'

  return (
    <div className="flex items-center gap-2">
      <span className="text-[11px] text-slate-500 w-20 flex-shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${colour}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-[11px] font-semibold text-brand-dark w-7 text-right">{value}</span>
    </div>
  )
}

export default function ProviderVerdict({ providerId }) {
  const p = providers.find(x => x.id === providerId)
  if (!p) return null

  return (
    <div className="bg-white border-b border-slate-100">
      <div className="container-page py-5 sm:py-6">
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Our Verdict</p>
          <VerifiedBadge size="lg" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8">

          {/* Scores */}
          <div className="pb-5 border-b border-slate-100 sm:pb-0 sm:border-0">
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Scores</p>
            <div className="space-y-2">
              {SCORE_LABELS.map(s => (
                <ScoreBar key={s.key} label={s.label} value={p[s.key]} />
              ))}
            </div>
          </div>

          {/* Pros */}
          <div className="pb-5 border-b border-slate-100 sm:pb-0 sm:border-0">
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Pros</p>
            <ul className="space-y-1.5">
              {p.pros.slice(0, 4).map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                  <span className="text-brand-green font-bold flex-shrink-0 mt-0.5">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>

          {/* Cons + Best for */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Cons</p>
            <ul className="space-y-1.5 mb-4">
              {p.cons.slice(0, 3).map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                  <span className="text-red-400 font-bold flex-shrink-0 mt-0.5">✗</span>
                  {con}
                </li>
              ))}
            </ul>
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">Best for</p>
            <div className="flex flex-wrap gap-1.5">
              {p.best_for.map((tag, i) => (
                <span key={i} className="text-[11px] font-medium px-2 py-0.5 bg-blue-50 text-brand-blue rounded-lg">{tag}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
