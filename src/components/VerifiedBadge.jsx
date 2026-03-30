import siteMeta from '../data/site-meta.json'

/**
 * Small "rates verified" trust badge.
 * Pass size="lg" for a slightly larger version (used inside ProviderVerdict).
 */
export default function VerifiedBadge({ size = 'sm' }) {
  if (size === 'lg') {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-green-50 border border-green-200 text-xs font-semibold text-green-700">
        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Rates verified {siteMeta.lastVerifiedDisplay}
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-green-50 border border-green-200 text-[11px] font-semibold text-green-700">
      <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Verified {siteMeta.lastVerifiedDisplay}
    </span>
  )
}
