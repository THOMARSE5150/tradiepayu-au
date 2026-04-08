/**
 * Deterministic hero image resolver for trade pages.
 *
 * Single source of truth: tradesMeta.js heroImage / heroAlt fields.
 * NO random or dynamic fallback — missing images fall back to the
 * neutral branded SVG at /og-trade.svg.
 *
 * Usage:
 *   import { tradeHeroUrl, tradeHeroAlt } from '../../utils/tradeHero'
 *   <img src={tradeHeroUrl('electricians')} alt={tradeHeroAlt('electricians')} />
 */
import { TRADE_MAP } from '../data/tradesMeta'

const HERO_PARAMS   = 'w=900&h=560&fit=crop&crop=center&q=80'
const OG_PARAMS     = 'w=1200&h=630&fit=crop&crop=center&q=80'
const BRANDED_FALLBACK = '/og-trade.svg'

/** Full URL for the 900×560 page hero <img>.
 *  If heroImage starts with '/' it is a local public asset (no Unsplash params). */
export function tradeHeroUrl(slug) {
  const photoId = TRADE_MAP[slug]?.heroImage
  if (!photoId) return BRANDED_FALLBACK
  if (photoId.startsWith('/')) return photoId
  return `https://images.unsplash.com/${photoId}?${HERO_PARAMS}`
}

/** Full URL for 1200×630 OG / JSON-LD Article images.
 *  If heroImage starts with '/' it is a local public asset. */
export function tradeOgUrl(slug) {
  const photoId = TRADE_MAP[slug]?.heroImage
  if (!photoId) return BRANDED_FALLBACK
  if (photoId.startsWith('/')) return photoId
  return `https://images.unsplash.com/${photoId}?${OG_PARAMS}`
}

/** Descriptive alt text from tradesMeta.js heroAlt. */
export function tradeHeroAlt(slug) {
  return TRADE_MAP[slug]?.heroAlt ?? ''
}
