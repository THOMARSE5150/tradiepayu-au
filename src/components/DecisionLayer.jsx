import { useEffect, useRef, useState } from 'react'
import { Sparkles } from 'lucide-react'
import {
  trackDecisionLayerView,
  trackDecisionLayerRecShown,
  trackDecisionLayerHelpClick,
} from '../utils/analytics'

// Pure rule engine — no external data, no network, no AI. Maps the
// nearest calculator inputs to a recommendation, a short reason code
// (for analytics), user-facing copy, and a confidence tag.
export function recommendProvider({ monthly, avgTx }) {
  if (monthly >= 10000 && avgTx >= 200) {
    return {
      provider: 'zeller',
      providerLabel: 'Zeller',
      reason: 'high_cardpresent_volume',
      confidence: 'high',
      why: 'Your volume and ticket size lean card-present — the 1.4% flat rate compounds in your favour.',
      tradeoff: 'No true offline mode. If you hit dead zones often, add Square as a backup.',
    }
  }
  if (avgTx > 0 && avgTx < 100 && monthly >= 5000) {
    return {
      provider: 'stripe',
      providerLabel: 'Stripe',
      reason: 'invoice_heavy_low_ticket',
      confidence: 'medium',
      why: 'High count with small tickets usually means invoice or payment-link work. Stripe fits that pattern.',
      tradeoff: '$0.10 per transaction adds up fast. Revisit if your average ticket grows.',
    }
  }
  return {
    provider: 'zeller',
    providerLabel: 'Zeller',
    reason: 'default_cardpresent',
    confidence: 'medium',
    why: 'For most on-site tradie work, Zeller Terminal 1 + SIM is the lowest-friction option.',
    tradeoff: 'No offline fallback. Add Square alongside if you regularly lose signal on site.',
  }
}

const CONFIDENCE_LABEL = {
  high:   'High confidence based on your inputs',
  medium: 'Medium confidence — re-check if your inputs change',
  low:    'Low confidence — inputs are borderline',
}

export default function DecisionLayer({ monthly, avgTx, engaged }) {
  const rec = recommendProvider({ monthly, avgTx })
  const [helpOpen, setHelpOpen] = useState(false)
  const viewFiredRef = useRef(false)
  const lastReasonRef = useRef(null)

  // Fire view once per mount, only after the user has actually engaged
  // with the calculator (so bots / bounces don't pollute the event).
  useEffect(() => {
    if (!engaged || viewFiredRef.current) return
    viewFiredRef.current = true
    trackDecisionLayerView({
      recommended_provider:   rec.provider,
      recommendation_reason:  rec.reason,
      confidence_level:       rec.confidence,
    })
  }, [engaged, rec.provider, rec.reason, rec.confidence])

  // Fire recommendation_shown each time the resolved recommendation changes.
  useEffect(() => {
    if (!engaged) return
    if (lastReasonRef.current === rec.reason) return
    lastReasonRef.current = rec.reason
    trackDecisionLayerRecShown({
      recommended_provider:   rec.provider,
      recommendation_reason:  rec.reason,
      confidence_level:       rec.confidence,
    })
  }, [engaged, rec.reason, rec.provider, rec.confidence])

  const handleHelpClick = () => {
    setHelpOpen(v => !v)
    if (!helpOpen) {
      trackDecisionLayerHelpClick({
        recommended_provider:  rec.provider,
        recommendation_reason: rec.reason,
      })
    }
  }

  return (
    <div className="mt-5 bg-white rounded-xl border border-slate-200 p-5 sm:p-6" style={{ boxShadow: '0 2px 14px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)' }}>
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Sparkles size={15} className="text-brand-blue" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-bold uppercase tracking-widest text-brand-blue/80">Recommended for you</p>
          <p className="font-semibold text-brand-dark text-base sm:text-lg mt-0.5 leading-tight">
            {rec.providerLabel} looks like the best fit
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">{rec.why}</p>
          <p className="text-sm text-slate-500 leading-relaxed mt-2">
            <span className="font-semibold text-slate-600">Trade-off:</span> {rec.tradeoff}
          </p>
          <p className="text-xs text-slate-400 mt-3">{CONFIDENCE_LABEL[rec.confidence]}</p>

          <button
            type="button"
            onClick={handleHelpClick}
            aria-expanded={helpOpen}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
          >
            {helpOpen ? 'Hide help' : 'Want help choosing the right setup?'}
          </button>

          {helpOpen && (
            <div className="mt-3 bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600 leading-relaxed">
              <p>
                Guided setup is coming soon. In the meantime, read the
                provider review below or compare the top two head-to-head —
                that covers most real-world decisions.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
