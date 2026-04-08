/**
 * Deterministic image resolver for blog posts.
 *
 * Single source of truth: posts.js image / imageAlt / imageCrop fields.
 * Mirrors the trade-page pattern in tradeHero.js.
 *
 * Usage:
 *   import { blogHeroUrl, blogOgUrl, blogCardUrl, blogImageAlt } from '../../utils/blogImage'
 *   <img src={blogHeroUrl('best-eftpos-welders-australia-2026')} />
 */
import { posts } from '../data/posts'

const POST_MAP = Object.fromEntries(posts.map(p => [p.slug, p]))

const BRANDED_FALLBACK = '/og-trade.svg'

function unsplashUrl(photoId, w, h, crop) {
  return `https://images.unsplash.com/${photoId}?w=${w}&h=${h}&fit=crop&crop=${crop}&q=80`
}

/** 900x560 page hero <img>. */
export function blogHeroUrl(slug) {
  const post = POST_MAP[slug]
  if (!post?.image) return BRANDED_FALLBACK
  return unsplashUrl(post.image, 900, 560, post.imageCrop || 'center')
}

/** 1200x630 OG / JSON-LD Article image. */
export function blogOgUrl(slug) {
  const post = POST_MAP[slug]
  if (!post?.image) return BRANDED_FALLBACK
  return unsplashUrl(post.image, 1200, 630, post.imageCrop || 'center')
}

/** 800x450 blog index card image. */
export function blogCardUrl(slug) {
  const post = POST_MAP[slug]
  if (!post?.image) return BRANDED_FALLBACK
  return unsplashUrl(post.image, 800, 450, post.imageCrop || 'center')
}

/** Descriptive alt text from posts.js imageAlt. */
export function blogImageAlt(slug) {
  return POST_MAP[slug]?.imageAlt ?? ''
}
