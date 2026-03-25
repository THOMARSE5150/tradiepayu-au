import { Link } from 'react-router-dom'

const badgeClasses = {
  'badge-gold':   'bg-amber-100 text-amber-800',
  'badge-blue':   'bg-blue-100 text-blue-800',
  'badge-purple': 'bg-purple-100 text-purple-800',
  'badge-green':  'bg-green-100 text-green-800',
  'badge-orange': 'bg-orange-100 text-orange-800',
  'badge-muted':  'bg-slate-100 text-slate-600',
}

export default function ProviderCard({ provider, featured = false }) {
  const { id, name, badge, badge_class, logo_text, logo_colour, tagline, fees, settlement, sim_plan, offline_mode, pros, cons } = provider
  const badgeCls = badgeClasses[badge_class] || badgeClasses['badge-muted']

  return (
    <article className={`bg-white rounded-xl border p-6 flex flex-col gap-4 ${featured ? 'border-brand-blue ring-2 ring-brand-blue' : 'border-slate-200'}`}>
      <div className="flex items-start gap-3">
        <div
          className="w-11 h-11 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
          style={{ background: logo_colour }}
        >
          {logo_text}
        </div>
        <div>
          <h3 className="font-bold text-brand-dark text-lg leading-tight">{name}</h3>
          <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold mt-1 ${badgeCls}`}>{badge}</span>
        </div>
      </div>

      <p className="text-sm text-slate-600 leading-relaxed">{tagline}</p>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="bg-slate-50 rounded-lg p-3">
          <span className="block text-xs text-slate-500 mb-0.5">In-person rate</span>
          <span className="font-bold text-brand-blue">
            {fees.in_person_percent ? `${fees.in_person_percent}%` : 'Quote'}
          </span>
        </div>
        <div className="bg-slate-50 rounded-lg p-3">
          <span className="block text-xs text-slate-500 mb-0.5">Settlement</span>
          <span className="font-bold text-brand-dark text-xs">
            {settlement.same_day_available ? 'Same day' : `${settlement.standard_days}d`}
          </span>
        </div>
        <div className="bg-slate-50 rounded-lg p-3">
          <span className="block text-xs text-slate-500 mb-0.5">SIM plan</span>
          <span className={`font-bold text-xs ${sim_plan.available ? 'text-brand-green' : 'text-slate-400'}`}>
            {sim_plan.available ? `✓ $${sim_plan.cost_monthly_aud}/mo` : '✗ No'}
          </span>
        </div>
        <div className="bg-slate-50 rounded-lg p-3">
          <span className="block text-xs text-slate-500 mb-0.5">Offline mode</span>
          <span className={`font-bold text-xs ${offline_mode.available ? 'text-brand-green' : 'text-slate-400'}`}>
            {offline_mode.available ? '✓ Yes' : '✗ No'}
          </span>
        </div>
      </div>

      <ul className="space-y-1 text-xs">
        {pros.slice(0, 3).map((p, i) => (
          <li key={i} className="flex gap-1.5 text-slate-700"><span className="text-brand-green font-bold">✓</span>{p}</li>
        ))}
        {cons.slice(0, 2).map((c, i) => (
          <li key={i} className="flex gap-1.5 text-slate-500"><span className="text-red-400 font-bold">✗</span>{c}</li>
        ))}
      </ul>

      <Link
        to={`/providers/${id}`}
        className="mt-auto block text-center bg-brand-blue text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
      >
        Full {name} Review →
      </Link>
    </article>
  )
}
