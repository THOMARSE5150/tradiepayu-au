import Breadcrumb from './Breadcrumb'
import StarRating from './StarRating'
import AffiliateButton from './AffiliateButton'
import ShareButton from './ShareButton'

/**
 * Consistent hero section for all provider review pages.
 *
 * Layout:
 *   Desktop — white content card on the left, provider image panel on the right
 *   Mobile  — white card full-width, image stacked below
 *
 * The image panel uses a subtle 15% black overlay so the face and terminal
 * remain clearly visible. The surrounding dark hero background keeps
 * breadcrumb and jump-nav legible without any additional treatment.
 *
 * Props:
 *   providerId          string   — for AffiliateButton lookup
 *   heading             string   — h1 text (e.g. "Zeller for Tradies — Full Review")
 *   subheading          string   — outcome-focused one-liner
 *   bgImage             string   — image URL (tradie + terminal, face top-right)
 *   bgImageAlt          string   — alt text (leave "" for decorative)
 *   rating              number   — star rating (e.g. 4.8)
 *   crumbs              array    — [{label, href?}] for Breadcrumb
 *   keyStats            array    — [{label, value}] up to 3 differentiating stats
 *   signupLabel         string   — primary CTA text, e.g. "Get Zeller →"
 *   signupIntent        string   — AffiliateButton intent key ("signup" | "contact")
 *   lastVerifiedDisplay string   — e.g. "April 2026"
 *   navItems            array    — [{href, label}] for jump nav
 *   shareTitle          string
 *   shareText           string
 *   shareUrl            string
 */
export default function ProviderHero({
  providerId,
  heading,
  subheading,
  bgImage,
  bgImageAlt = '',
  rating,
  crumbs = [],
  keyStats = [],
  signupLabel = 'Get started →',
  signupIntent = 'signup',
  lastVerifiedDisplay,
  navItems = [],
  shareTitle,
  shareText,
  shareUrl,
}) {
  return (
    <header className="hero relative overflow-hidden">
      <div className="container-page relative z-10">
        <Breadcrumb crumbs={crumbs} />

        {/* ── Split row: card left, image right ── */}
        <div className="flex flex-col lg:flex-row items-start gap-5 lg:gap-8 mt-3">

          {/* ── Left: white content card ── */}
          <div className="w-full lg:max-w-[500px] flex-shrink-0">
            <div className="bg-white rounded-2xl px-6 py-5 shadow-[0_8px_40px_rgba(0,0,0,0.22)] border border-slate-100">

              {/* Meta row */}
              <div className="flex items-center gap-2 flex-wrap mb-3">
                <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-semibold">
                  Provider Review
                </span>
                {rating && (
                  <>
                    <span className="text-slate-300">·</span>
                    <StarRating rating={rating} />
                  </>
                )}
                {lastVerifiedDisplay && (
                  <>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-400 text-xs">Updated {lastVerifiedDisplay}</span>
                  </>
                )}
              </div>

              {/* Heading */}
              <h1 className="text-lg sm:text-xl font-extrabold text-brand-dark leading-tight mb-1.5">
                {heading}
              </h1>

              {/* Subheading */}
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {subheading}
              </p>

              {/* Key stat chips */}
              {keyStats.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {keyStats.map((s, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 min-w-[64px]"
                    >
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider leading-none mb-0.5">
                        {s.label}
                      </span>
                      <span className="text-sm font-bold text-brand-dark leading-tight">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA row — primary affiliate button + secondary scroll link */}
              <div className="flex items-center gap-3 flex-wrap">
                <AffiliateButton
                  providerId={providerId}
                  label="hero-cta"
                  campaign="provider-hero"
                  intent={signupIntent}
                  className="inline-flex items-center gap-1 px-4 py-2.5 bg-brand-blue text-white font-semibold text-sm rounded-xl hover:bg-blue-600 transition-colors shadow-sm shadow-blue-900/20"
                >
                  {signupLabel}
                </AffiliateButton>
                <a
                  href="#fees"
                  className="text-sm font-medium text-slate-500 hover:text-brand-blue transition-colors"
                >
                  See full review ↓
                </a>
              </div>

              {/* Disclaimer + share */}
              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="text-[10px] text-slate-400 leading-relaxed">
                  Independent review. Some links may earn a small commission — does not affect rankings.
                </p>
                {shareTitle && (
                  <ShareButton title={shareTitle} text={shareText} url={shareUrl} />
                )}
              </div>
            </div>
          </div>

          {/* ── Right: image panel (desktop only) ── */}
          {bgImage && (
            <div className="relative hidden lg:block lg:flex-1 self-stretch min-h-[340px] rounded-2xl overflow-hidden">
              <img
                src={bgImage}
                alt={bgImageAlt}
                className="w-full h-full object-cover object-top"
                onError={e => { e.currentTarget.style.opacity = '0' }}
              />
              {/* Subtle overlay — keeps image readable, never kills it */}
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
            </div>
          )}

        </div>

        {/* ── Jump nav — full-width, on dark bg below card ── */}
        {navItems.length > 0 && (
          <nav className="jump-links">
            {navItems.map(item => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
