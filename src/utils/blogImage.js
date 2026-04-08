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
import { SITE_URL } from '../constants/brand'

const POST_MAP = Object.fromEntries(posts.map(p => [p.slug, p]))

const BRANDED_FALLBACK = '/og-trade.svg'

function unsplashUrl(photoId, w, h, crop) {
  return `https://images.unsplash.com/${photoId}?w=${w}&h=${h}&fit=crop&crop=${crop}&q=80`
}

/** 900x560 page hero <img>. Local paths (starting with '/') returned as-is. */
export function blogHeroUrl(slug) {
  const post = POST_MAP[slug]
  if (!post?.image) return BRANDED_FALLBACK
  if (post.image.startsWith('/')) return post.image
  return unsplashUrl(post.image, 900, 560, post.imageCrop || 'center')
}

/** Absolute URL for 1200x630 OG / JSON-LD image.
 *  Local hero assets resolve to their dedicated -og variant. */
export function blogOgUrl(slug) {
  const post = POST_MAP[slug]
  if (!post?.image) return BRANDED_FALLBACK
  if (post.image.startsWith('/')) {
    const ogPath = post.image.replace(/(-hero)(\.\w+)$/, '-og$2')
    return `${SITE_URL}${ogPath}`
  }
  return unsplashUrl(post.image, 1200, 630, post.imageCrop || 'center')
}

/** 800x450 blog index card image. Local paths returned as-is. */
export function blogCardUrl(slug) {
  const post = POST_MAP[slug]
  if (!post?.image) return BRANDED_FALLBACK
  if (post.image.startsWith('/')) return post.image
  return unsplashUrl(post.image, 800, 450, post.imageCrop || 'center')
}

/** Descriptive alt text from posts.js imageAlt. */
export function blogImageAlt(slug) {
  return POST_MAP[slug]?.imageAlt ?? ''
}
