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
    <div className="lg-light rounded-xl p-3">
      <span className="block text-xs text-slate-400 mb-0.5">{label}</span>
      <span className={`font-bold text-sm ${positive === true ? 'text-brand-blue' : positive === false ? 'text-slate-400' : 'text-brand-dark'}`}>
        {value}
      </span>
    </div>
  )
}

function StarRating({ rating }) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.3
  const empty = 5 - full - (half ? 1 : 0)
  return (
    <div className="flex items-center gap-0.5">
      {Array(full).fill(null).map((_, i) => (
        <svg key={`f${i}`} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.538 1.118L10 14.347l-3.958 2.704c-.783.57-1.838-.197-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69L9.049 2.927z" /></svg>
      ))}
      {half && (
        <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><defs><linearGradient id="hg"><stop offset="50%" stopColor="currentColor"/><stop offset="50%" stopColor="transparent"/></linearGradient></defs><path fill="url(#hg)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.538 1.118L10 14.347l-3.958 2.704c-.783.57-1.838-.197-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69L9.049 2.927z" /></svg>
      )}
      {Array(empty).fill(null).map((_, i) => (
        <svg key={`e${i}`} className="w-3 h-3 text-slate-200" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.538 1.118L10 14.347l-3.958 2.704c-.783.57-1.838-.197-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69L9.049 2.927z" /></svg>
      ))}
      <span className="text-[11px] text-slate-400 ml-1 font-medium">{rating.toFixed(1)}</span>
    </div>
  )
}

export default function ProviderCard({ provider, featured = false, index = 0 }) {
  const {
    id, name, badge, badge_class, logo_text, logo_colour, tagline,
    fees, settlement, sim_plan, offline_mode, pros, cons,
    product_image, product_image_alt, product_image_bg,
    apple_pay, google_pay, rating,
  } = provider
  const badgeCls = badgeClasses[badge_class] || badgeClasses['badge-muted']

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
      className={`relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ${
        featured
          ? 'lg-blue lg-sheen shadow-[0_16px_48px_rgba(0,106,255,0.13)]'
          : 'bg-white border border-slate-200 hover:shadow-[0_12px_32px_rgba(0,0,0,0.09),inset_0_1px_0_rgba(255,255,255,1)] hover:-translate-y-1'
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
            loading="lazy"
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
            {rating && <div className="mt-1.5"><StarRating rating={rating} /></div>}
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
            value={settlement.same_day_available ? 'Same day' : settlement.standard_days != null ? `${settlement.standard_days}d` : '—'}
          />
          <StatCell
            label="SIM plan"
            value={sim_plan.available ? (sim_plan.cost_monthly_aud != null ? `$${sim_plan.cost_monthly_aud}/mo` : 'Included') : 'No'}
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
