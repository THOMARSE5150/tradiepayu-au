import { Link } from 'react-router-dom'

/**
 * QuickVerdict — answer-first banner for trade pages.
 * Props:
 *   pick        {string}  — primary provider name
 *   rate        {string}  — e.g. "1.4%"
 *   hardware    {string}  — e.g. "$99 + $15/mo SIM"
 *   reason      {string}  — 1-line trade-specific reason
 *   providerSlug {string} — e.g. "zeller"
 *   backup      {string?} — optional short backup note
 */
export default function QuickVerdict({ pick, rate, hardware, reason, providerSlug, backup }) {
  return (
    <div className="bg-white border-b border-slate-100">
      <div className="container-page py-4 sm:py-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">

          {/* Label */}
          <span className="flex-shrink-0 text-[11px] font-bold uppercase tracking-widest text-slate-400 hidden sm:block">
            Quick Verdict
          </span>

          {/* Primary pick */}
          <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-brand-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="font-bold text-brand-dark text-sm sm:text-[15px]">{pick}</span>
                <span className="text-xs font-semibold text-brand-blue bg-blue-50 px-1.5 py-0.5 rounded">{rate}</span>
                <span className="text-xs text-slate-400">{hardware}</span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                {reason}
                {backup && <span className="text-slate-400"> · Backup: {backup}</span>}
              </p>
            </div>
          </div>

          {/* CTA */}
          <Link
            to={`/providers/${providerSlug}`}
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue border border-brand-blue/25 hover:bg-blue-50 hover:border-brand-blue/50 transition-all px-3.5 py-2 rounded-xl"
          >
            Full review
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

        </div>
      </div>
    </div>
  )
}
