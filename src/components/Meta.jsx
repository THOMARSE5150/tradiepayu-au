import { Helmet } from 'react-helmet-async'
import { TRADE_MAP } from '../data/tradesMeta'
import { posts as allPosts } from '../data/posts'
import { BRAND_NAME, SITE_URL } from '../constants/brand'

const SITE_NAME = BRAND_NAME
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.svg`

// Injected on every page so Google reliably identifies the site name
// regardless of which URL is first crawled.
const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: BRAND_NAME,
  url: `${SITE_URL}/`,
  inLanguage: 'en-AU',
  publisher: {
    '@type': 'Organization',
    name: BRAND_NAME,
    url: SITE_URL,
    areaServed: { '@type': 'Country', name: 'Australia' },
  },
}

// Build BLOG_HERO dynamically so it never goes stale
const BLOG_HERO = Object.fromEntries(allPosts.map(p => [p.slug, p.image]))

// Maps provider slug → canonical product name for schema output
const PROVIDER_PRODUCT_NAMES = {
  zeller: 'Zeller Terminal 1',
  square: 'Square Terminal',
  stripe: 'Stripe Terminal Reader',
  tyro:   'Tyro EFTPOS',
  shift4: 'Shift4 EFTPOS',
}

/**
 * Builds an ItemList + Product schema for a trade page.
 * Maps the trade entity to its recommended EFTPOS product so AI crawlers
 * can extract the entity→attribute→reason triple without page rendering.
 *
 * Answer-string format injected as schema description:
 *   "[Product] is the best EFTPOS for [Trade] in Australia because [Reason]."
 */
function buildTradeListingSchema(tradeSlug) {
  const trade = TRADE_MAP[tradeSlug]
  if (!trade) return null

  const productName = PROVIDER_PRODUCT_NAMES[trade.providerSlug] ?? trade.pick
  const rateNumeric = parseFloat(trade.rate.replace('%', '')) || null
  const capitalised  = s => s.charAt(0).toUpperCase() + s.slice(1)

  return {
    '@context': 'https://schema.org',
    '@type':    'ItemList',
    '@id':      `${SITE_URL}/trades/${tradeSlug}#recommendations`,
    name:       `Best EFTPOS for ${trade.label} in Australia — 2026`,
    inLanguage: 'en-AU',
    description: `${productName} is the best EFTPOS for ${trade.label} in Australia because ${trade.reason}`,
    numberOfItems: 1,
    itemListElement: [
      {
        '@type':    'ListItem',
        position:   1,
        item: {
          '@type': 'Product',
          '@id':   `${SITE_URL}/providers/${trade.providerSlug}#product`,
          name:    productName,
          description: `Best EFTPOS for ${trade.label} in Australia. ${trade.reason}`,
          brand: { '@type': 'Brand', name: capitalised(trade.providerSlug) },
          ...(rateNumeric !== null && {
            offers: {
              '@type': 'Offer',
              seller: { '@type': 'Organization', name: BRAND_NAME, url: SITE_URL },
              priceSpecification: {
                '@type':        'UnitPriceSpecification',
                price:          rateNumeric,
                priceCurrency:  'AUD',
                unitText:       'PERCENT',
              },
            },
          }),
        },
      },
    ],
  }
}

// Branded OG PNGs for all provider pages
const PROVIDER_OG = {
  zeller: `${SITE_URL}/og-zeller.png`,
  square: `${SITE_URL}/og-square.png`,
  stripe: `${SITE_URL}/og-stripe.png`,
  tyro:   `${SITE_URL}/og-tyro.png`,
  shift4: `${SITE_URL}/og-shift4.png`,
}

// Unsplash hero photos (used for preload only, not OG on provider pages)
const PROVIDER_HERO = {
  zeller:  null,
  square:  'photo-1556742031-c6961e8560b0',
  stripe:  'photo-1601597111158-2fceff292cdc',
  tyro:    'photo-1563013544-824ae1b704d3',
  shift4:  'photo-1559526324-4b87b5e36e44',
}

function resolveOgImage(canonical, ogImageOverride) {
  if (ogImageOverride) return ogImageOverride
  if (!canonical) return DEFAULT_OG_IMAGE

  // Trade pages — use the actual hero photo for this trade
  if (canonical.startsWith('/trades/')) {
    const parts = canonical.split('/').filter(Boolean)
    const tradeSlug = parts[1]
    const trade = tradeSlug ? TRADE_MAP[tradeSlug] : null
    if (trade) {
      // Local asset: use dedicated OG variant if present, else the hero asset directly
      if (trade.heroImage?.startsWith('/')) {
        const ogPath = trade.heroImage.replace(/(-hero)(\.\w+)$/, '-og$2')
        return `${SITE_URL}${ogPath}`
      }
      return `https://images.unsplash.com/${trade.heroImage}?w=1200&h=630&fit=crop&crop=center&q=80`
    }
    return `${SITE_URL}/og-trade.svg`
  }

  // Provider pages — use branded OG PNG for each provider
  if (canonical.startsWith('/providers/')) {
    const slug = canonical.split('/')[2]
    if (PROVIDER_OG[slug]) return PROVIDER_OG[slug]
    return `${SITE_URL}/og-provider.svg`
  }

  // Blog pages — use each post's hero photo
  if (canonical.startsWith('/blog/')) {
    const slug = canonical.split('/')[2]
    const photo = slug ? BLOG_HERO[slug] : null
    if (photo) return `https://images.unsplash.com/${photo}?w=1200&h=630&fit=crop&crop=center&q=80`
    return DEFAULT_OG_IMAGE
  }

  // Compare pages — use the first provider's photo if resolvable
  if (canonical.startsWith('/compare/')) {
    const firstId = canonical.split('/')[2]?.split('-vs-')[0]
    const photo = firstId ? PROVIDER_HERO[firstId] : null
    if (photo) return `https://images.unsplash.com/${photo}?w=1200&h=630&fit=crop&crop=center&q=80`
    return `${SITE_URL}/og-provider.svg`
  }

  // Static index pages
  const INDEX_IMAGES = {
    '/providers':  'photo-1556742049-0cfed4f6a45d',
    '/trades':     'photo-1621905252507-b35492cc74b4',
    '/states':     'photo-1494522855154-9297ac14b55f',
    '/compare':    'photo-1556742031-c6961e8560b0',
    '/calculator': 'photo-1554224155-6726b3ff858f',
    '/blog':       'photo-1521791136064-7986c2920216',
  }
  if (INDEX_IMAGES[canonical]) {
    return `https://images.unsplash.com/${INDEX_IMAGES[canonical]}?w=1200&h=630&fit=crop&crop=center&q=80`
  }

  return DEFAULT_OG_IMAGE
}

export default function Meta({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage: ogImageOverride,
  geoRegion,
  geoPlacename,
  jsonLd,
}) {
  // Homepage: brand-first ("TradiePay AU | Best EFTPOS...") so Google can
  // display the site name prominently in SERPs. All other pages: content-first.
  const isHomepage = canonical === '/'
  const fullTitle = title
    ? isHomepage
      ? `${SITE_NAME} | ${title}`
      : `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Best EFTPOS for Australian Tradies`

  const fullCanonical = canonical ? `${SITE_URL}${canonical}` : SITE_URL
  const ogImage = resolveOgImage(canonical, ogImageOverride)

  // WebSite schema always first, then trade listing schema (auto-injected for
  // /trades/* pages — maps trade entity to recommended product for AEO/GEO),
  // then any page-specific blocks passed via the jsonLd prop.
  const pageSchemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  const tradeSlug   = canonical?.startsWith('/trades/') ? canonical.split('/')[2] : null
  const tradeSchema = tradeSlug ? buildTradeListingSchema(tradeSlug) : null

  const jsonLdArray = [
    WEBSITE_SCHEMA,
    ...(tradeSchema ? [tradeSchema] : []),
    ...pageSchemas,
  ]

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_AU" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Preload hero image for LCP */}
      {ogImage && !ogImage.includes('og-default') && !ogImage.includes('og-provider') && !ogImage.includes('og-trade') && !ogImage.includes('og-zeller') && (
        <link rel="preload" as="image" href={ogImage} fetchPriority="high" />
      )}

      {/* Geographic targeting */}
      <meta name="geo.region" content={geoRegion || 'AU'} />
      <meta name="geo.country" content="Australia" />
      {geoPlacename && <meta name="geo.placename" content={geoPlacename} />}
      <meta name="ICBM" content="-25.2744, 133.7751" />

      {/* Mobile */}
      <meta name="theme-color" content="#1a1a2e" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* JSON-LD — supports multiple blocks */}
      {jsonLdArray.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  )
}
