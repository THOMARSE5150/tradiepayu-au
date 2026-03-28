import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, X, Wifi, Clock, Smartphone } from 'lucide-react'

const badgeClasses = {
  'badge-gold':   'bg-amber-100 text-amber-800',
  'badge-blue':   'bg-blue-100 text-blue-800',
  'badge-purple': 'bg-purple-100 text-purple-800',
  'badge-green':  'bg-green-100 text-green-800',
  'badge-orange': 'bg-orange-100 text-orange-800',
  'badge-muted':  'bg-slate-100 text-slate-600',
}

function StatCell({ label, value, positive }) {
  return (
    <div className="backdrop-blur-sm bg-white/60 border border-white/40 rounded-xl p-3 shadow-sm">
      <span className="block text-xs text-slate-500 mb-0.5">{label}</span>
      <span className={`font-bold text-sm ${positive === true ? 'text-brand-blue' : positive === false ? 'text-slate-400' : 'text-brand-dark'}`}>
        {value}
      </span>
    </div>
  )
}

export default function ProviderCard({ provider, featured = false, index = 0 }) {
  const {
    id, name, badge, badge_class, logo_text, logo_colour, tagline,
    fees, settlement, sim_plan, offline_mode, pros, cons,
    product_image, product_image_alt, product_image_bg,
    apple_pay, google_pay,
  } = provider
  const badgeCls = badgeClasses[badge_class] || badgeClasses['badge-muted']

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
      className={`bg-white rounded-2xl border overflow-hidden flex flex-col transition-shadow duration-300 ${
        featured
          ? 'border-brand-blue ring-2 ring-brand-blue shadow-xl shadow-blue-100'
          : 'border-slate-200 hover:shadow-lg hover:shadow-slate-200 hover:-translate-y-0.5 hover:transition-transform'
      }`}
    >
      {/* Product image */}
      <div
        className="h-44 flex items-center justify-center overflow-hidden relative"
        style={{ background: product_image_bg || '#f1f5f9' }}
      >
        {product_image ? (
          <img
            src={product_image}
            alt={product_image_alt || `${name} hardware`}
            className="h-full w-full object-contain p-6 drop-shadow-xl"
            onError={e => { e.currentTarget.style.display = 'none' }}
          />
        ) : (
          <span className="text-6xl font-black select-none" style={{ color: `${logo_colour}22` }}>{logo_text}</span>
        )}
        {featured && (
          <div className="absolute top-3 right-3 bg-brand-blue text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg">
            #1 Pick
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Header */}
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-sm"
            style={{ background: logo_colour }}
          >
            {logo_text}
          </div>
          <div>
            <h3 className="font-bold text-brand-dark text-base leading-tight">{name}</h3>
            <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold mt-1 ${badgeCls}`}>{badge}</span>
          </div>
        </div>

        <p className="text-sm text-slate-500 leading-relaxed">{tagline}</p>

        {/* Glassmorphism stat grid */}
        <div className="grid grid-cols-2 gap-2">
          <StatCell
            label="In-person rate"
            value={fees.in_person_percent ? `${fees.in_person_percent}%` : 'Quote'}
            positive={true}
          />
          <StatCell
            label="Settlement"
            value={settlement.same_day_available ? 'Same day' : `${settlement.standard_days}d`}
          />
          <StatCell
            label="SIM plan"
            value={sim_plan.available ? `$${sim_plan.cost_monthly_aud}/mo` : 'No'}
            positive={sim_plan.available}
          />
          <StatCell
            label="Offline"
            value={offline_mode.available ? 'Yes' : 'No'}
            positive={offline_mode.available || null}
          />
        </div>

        {/* Pros / cons with Lucide icons */}
        <ul className="space-y-1.5 text-xs">
          {pros.slice(0, 3).map((p, i) => (
            <li key={i} className="flex gap-2 text-slate-700 items-start">
              <Check size={13} className="text-brand-green flex-shrink-0 mt-0.5" strokeWidth={2.5} />
              {p}
            </li>
          ))}
          {cons.slice(0, 2).map((c, i) => (
            <li key={i} className="flex gap-2 text-slate-400 items-start">
              <X size={13} className="text-red-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
              {c}
            </li>
          ))}
        </ul>

        {/* iOS / Android / Apple Pay / Google Pay chips */}
        <div className="flex flex-wrap gap-1.5">
          {apple_pay && (
            <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full">
              <Smartphone size={10} />  Apple Pay
            </span>
          )}
          {google_pay && (
            <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full">
              <Smartphone size={10} />  Google Pay
            </span>
          )}
          {sim_plan.available && (
            <span className="inline-flex items-center gap-1 bg-blue-50 text-brand-blue text-xs px-2 py-0.5 rounded-full">
              <Wifi size={10} />  SIM ready
            </span>
          )}
          {settlement.same_day_available && (
            <span className="inline-flex items-center gap-1 bg-green-50 text-brand-green text-xs px-2 py-0.5 rounded-full">
              <Clock size={10} />  Same-day
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          to={`/providers/${id}`}
          className="mt-auto block text-center bg-gradient-to-b from-blue-500 to-blue-700 text-white font-semibold px-4 py-2.5 rounded-xl hover:from-blue-600 hover:to-blue-800 transition-all shadow-sm text-sm"
        >
          Full {name} Review →
        </Link>
      </div>
    </motion.article>
  )
}
