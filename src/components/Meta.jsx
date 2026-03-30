import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://tradiepayau.directory'
const SITE_NAME = 'TradiePay AU'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.svg`
const PROVIDER_OG_IMAGE = `${SITE_URL}/og-provider.svg`
const TRADE_OG_IMAGE    = `${SITE_URL}/og-trade.svg`

function resolveOgImage(canonical) {
  if (!canonical) return DEFAULT_OG_IMAGE
  if (canonical.startsWith('/providers/')) return PROVIDER_OG_IMAGE
  if (canonical.startsWith('/trades/'))    return TRADE_OG_IMAGE
  if (canonical.startsWith('/compare/'))   return PROVIDER_OG_IMAGE
  return DEFAULT_OG_IMAGE
}

export default function Meta({
  title,
  description,
  canonical,
  ogType = 'website',
  jsonLd,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Best EFTPOS for Australian Tradies`
  const fullCanonical = canonical ? `${SITE_URL}${canonical}` : SITE_URL
  const ogImage = resolveOgImage(canonical)

  // Accept single object or array of JSON-LD blocks
  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

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

      {/* Geographic targeting */}
      <meta name="geo.region" content="AU" />
      <meta name="geo.country" content="Australia" />
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
