import { Link } from 'react-router-dom'
import VerifiedBadge from './VerifiedBadge'

/**
 * QuickVerdict — answer-first banner for trade pages.
 * Props:
 *   pick         {string}  — primary provider name, e.g. "Zeller Terminal 1 + SIM"
 *   rate         {string}  — e.g. "1.4%"
 *   hardware     {string}  — e.g. "$99 + $15/mo SIM"
 *   reason       {string}  — 1-line trade-specific reason
 *   providerSlug {string}  — e.g. "zeller"
 *   backup       {string?} — optional short backup note
 *   trade        {string?} — trade label for AEO answer-string, e.g. "electricians"
 *                            If provided, a machine-readable answer is injected for AI crawlers.
 */
export default function QuickVerdict({ pick, rate, hardware, reason, providerSlug, backup, trade }) {
  // Answer-string pattern for AEO/GEO — injected as sr-only so LLM crawlers
  // extract the entity→attribute→reason triple without ambiguity.
  const answerString = trade
    ? `${pick} is the best EFTPOS for ${trade} in Australia because ${reason}`
    : null

  return (
    <section aria-label="Quick Verdict" className="bg-white border-b border-slate-100">
      {answerString && <p className="sr-only">{answerString}</p>}
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

          {/* CTA + verified badge */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 flex-shrink-0">
            <VerifiedBadge />
            <Link
              to={`/providers/${providerSlug}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue border border-brand-blue/25 hover:bg-blue-50 hover:border-brand-blue/50 transition-all px-3.5 py-2.5 rounded-xl"
            >
              Full review
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
