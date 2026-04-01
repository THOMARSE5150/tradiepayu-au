export const PROVIDERS = [
  { slug: 'zeller',  label: 'Zeller',  note: '1.4% · SIM card' },
  { slug: 'square',  label: 'Square',  note: '1.6% · offline mode' },
  { slug: 'stripe',  label: 'Stripe',  note: '1.7% + $0.10 · invoicing' },
  { slug: 'tyro',    label: 'Tyro',    note: '1.4% payment links' },
  { slug: 'shift4',  label: 'Shift4',  note: 'Quote-based · no lock-in' },
]

export const TRADES = [
  { slug: 'electricians',    label: 'Electricians',    group: 'electromechanical' },
  { slug: 'plumbers',        label: 'Plumbers',        group: 'electromechanical' },
  { slug: 'gas-fitters',     label: 'Gas Fitters',     group: 'electromechanical' },
  { slug: 'hvac',            label: 'HVAC Technicians', group: 'electromechanical' },
  { slug: 'welders',         label: 'Welders',         group: 'electromechanical' },
  { slug: 'builders',        label: 'Builders',        group: 'construction' },
  { slug: 'carpenters',      label: 'Carpenters',      group: 'construction' },
  { slug: 'concreters',      label: 'Concreters',      group: 'construction' },
  { slug: 'roofers',         label: 'Roofers',         group: 'construction' },
  { slug: 'plasterers',      label: 'Plasterers',      group: 'construction' },
  { slug: 'tilers',          label: 'Tilers',          group: 'construction' },
  { slug: 'painters',        label: 'Painters',        group: 'construction' },
  { slug: 'glaziers',        label: 'Glaziers',        group: 'specialist' },
  { slug: 'fencers',         label: 'Fencers',         group: 'specialist' },
  { slug: 'landscapers',     label: 'Landscapers',     group: 'specialist' },
  { slug: 'pool-builders',   label: 'Pool Builders',   group: 'specialist' },
  { slug: 'cleaners',        label: 'Cleaners',        group: 'specialist' },
  { slug: 'pest-controllers', label: 'Pest Controllers', group: 'specialist' },
]

/** Curated cross-group related trades for each trade (reflects real job-site co-occurrence) */
const RELATED_TRADE_MAP = {
  'electricians':     ['plumbers', 'gas-fitters', 'hvac', 'builders', 'carpenters', 'concreters'],
  'plumbers':         ['electricians', 'gas-fitters', 'hvac', 'builders', 'tilers', 'concreters'],
  'gas-fitters':      ['plumbers', 'electricians', 'hvac', 'builders', 'concreters', 'roofers'],
  'hvac':             ['electricians', 'plumbers', 'gas-fitters', 'builders', 'carpenters', 'roofers'],
  'welders':          ['builders', 'concreters', 'fencers', 'roofers', 'pool-builders', 'glaziers'],
  'builders':         ['electricians', 'plumbers', 'carpenters', 'painters', 'concreters', 'plasterers'],
  'carpenters':       ['builders', 'painters', 'plasterers', 'tilers', 'glaziers', 'roofers'],
  'concreters':       ['builders', 'roofers', 'fencers', 'landscapers', 'pool-builders', 'carpenters'],
  'roofers':          ['builders', 'carpenters', 'painters', 'glaziers', 'electricians', 'plumbers'],
  'plasterers':       ['builders', 'painters', 'carpenters', 'tilers', 'glaziers', 'concreters'],
  'tilers':           ['builders', 'plasterers', 'painters', 'carpenters', 'glaziers', 'pool-builders'],
  'painters':         ['builders', 'plasterers', 'carpenters', 'tilers', 'glaziers', 'roofers'],
  'glaziers':         ['builders', 'carpenters', 'painters', 'roofers', 'tilers', 'fencers'],
  'fencers':          ['builders', 'concreters', 'landscapers', 'pool-builders', 'glaziers', 'carpenters'],
  'landscapers':      ['concreters', 'fencers', 'pool-builders', 'builders', 'painters', 'tilers'],
  'pool-builders':    ['landscapers', 'concreters', 'fencers', 'builders', 'tilers', 'electricians'],
  'cleaners':         ['pest-controllers', 'painters', 'builders', 'glaziers', 'landscapers', 'tilers'],
  'pest-controllers': ['cleaners', 'builders', 'glaziers', 'painters', 'landscapers', 'fencers'],
}

/** Returns curated cross-group related trades, falling back to same-group if not mapped */
export function relatedTrades(currentSlug) {
  const slugs = RELATED_TRADE_MAP[currentSlug]
  if (slugs) return slugs.map(s => TRADES.find(t => t.slug === s)).filter(Boolean)
  const current = TRADES.find(t => t.slug === currentSlug)
  if (!current) return TRADES.filter(t => t.slug !== currentSlug).slice(0, 6)
  return TRADES.filter(t => t.group === current.group && t.slug !== currentSlug)
}

/** Returns providers excluding the current slug */
export function otherProviders(currentSlug) {
  return PROVIDERS.filter(p => p.slug !== currentSlug)
}

export const BLOG_POSTS = [
  { slug: 'eftpos-fees-tradies-australia-2026',          label: 'EFTPOS Fees Breakdown (2026)' },
  { slug: 'zeller-vs-square-eftpos-tradies',             label: 'Zeller vs Square for Tradies' },
  { slug: 'zeller-terminal-1-review-2026',               label: 'Zeller Terminal 1 Review' },
  { slug: 'square-terminal-review-2026',                 label: 'Square Terminal Review' },
  { slug: 'best-eftpos-sole-traders-australia-2026',     label: 'Best EFTPOS for Sole Traders' },
  { slug: 'accept-card-payments-sole-trader-australia',  label: 'How to Accept Card Payments' },
]

/** Blog posts most relevant to each provider */
const PROVIDER_BLOG_MAP = {
  zeller:  ['zeller-terminal-1-review-2026', 'zeller-vs-square-eftpos-tradies', 'eftpos-fees-tradies-australia-2026'],
  square:  ['square-terminal-review-2026', 'zeller-vs-square-eftpos-tradies', 'eftpos-fees-tradies-australia-2026'],
  stripe:  ['eftpos-fees-tradies-australia-2026', 'accept-card-payments-sole-trader-australia', 'best-eftpos-sole-traders-australia-2026'],
  tyro:    ['eftpos-fees-tradies-australia-2026', 'best-eftpos-sole-traders-australia-2026', 'accept-card-payments-sole-trader-australia'],
  shift4:  ['eftpos-fees-tradies-australia-2026', 'best-eftpos-sole-traders-australia-2026', 'accept-card-payments-sole-trader-australia'],
}

/** Default blog posts for trade/compare pages */
const DEFAULT_BLOG_SLUGS = [
  'eftpos-fees-tradies-australia-2026',
  'zeller-vs-square-eftpos-tradies',
  'best-eftpos-sole-traders-australia-2026',
]

export function blogPostsForProvider(providerSlug) {
  const slugs = PROVIDER_BLOG_MAP[providerSlug] || DEFAULT_BLOG_SLUGS
  return slugs.map(s => BLOG_POSTS.find(b => b.slug === s)).filter(Boolean)
}

export function defaultBlogPosts() {
  return DEFAULT_BLOG_SLUGS.map(s => BLOG_POSTS.find(b => b.slug === s)).filter(Boolean)
}
