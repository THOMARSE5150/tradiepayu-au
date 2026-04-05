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
  { slug: 'zeller-vs-square-vs-stripe-eftpos-tradies-2026', label: 'Zeller vs Square vs Stripe (2026)' },
  { slug: 'stripe-vs-square-eftpos-australia-2026',      label: 'Stripe vs Square for Tradies' },
  { slug: 'zeller-vs-tyro-eftpos-tradies',               label: 'Zeller vs Tyro for Tradies' },
  { slug: 'zeller-terminal-1-review-2026',               label: 'Zeller Terminal 1 Review' },
  { slug: 'square-terminal-review-2026',                 label: 'Square Terminal Review' },
  { slug: 'stripe-terminal-review-2026',                 label: 'Stripe Terminal Review' },
  { slug: 'tyro-eftpos-review-2026',                     label: 'Tyro EFTPOS Review' },
  { slug: 'shift4-eftpos-review-2026',                   label: 'Shift4 EFTPOS Review' },
  { slug: 'best-eftpos-sole-traders-australia-2026',     label: 'Best EFTPOS for Sole Traders' },
  { slug: 'accept-card-payments-sole-trader-australia',  label: 'How to Accept Card Payments' },
  { slug: 'how-to-get-paid-faster-sole-trader-australia', label: 'Get Paid Faster as a Sole Trader' },
  { slug: 'surcharging-eftpos-tradies-australia-2026',   label: 'Surcharging Guide for Tradies' },
  { slug: 'best-eftpos-electricians-australia-2026',     label: 'Best EFTPOS for Electricians' },
  { slug: 'best-eftpos-plumbers-australia-2026',         label: 'Best EFTPOS for Plumbers' },
  { slug: 'best-eftpos-builders-australia-2026',         label: 'Best EFTPOS for Builders' },
  { slug: 'best-eftpos-painters-australia-2026',         label: 'Best EFTPOS for Painters' },
  { slug: 'best-eftpos-roofers-australia-2026',          label: 'Best EFTPOS for Roofers' },
  { slug: 'best-eftpos-glaziers-australia-2026',         label: 'Best EFTPOS for Glaziers' },
  { slug: 'best-eftpos-hvac-australia-2026',             label: 'Best EFTPOS for HVAC Technicians' },
  { slug: 'best-eftpos-concreters-australia-2026',       label: 'Best EFTPOS for Concreters' },
  { slug: 'best-eftpos-carpenters-australia-2026',       label: 'Best EFTPOS for Carpenters' },
  { slug: 'best-eftpos-tilers-australia-2026',           label: 'Best EFTPOS for Tilers' },
  { slug: 'best-eftpos-gas-fitters-australia-2026',      label: 'Best EFTPOS for Gas Fitters' },
  { slug: 'best-eftpos-fencers-australia-2026',          label: 'Best EFTPOS for Fencers' },
  { slug: 'best-eftpos-plasterers-australia-2026',       label: 'Best EFTPOS for Plasterers' },
  { slug: 'best-eftpos-pool-builders-australia-2026',    label: 'Best EFTPOS for Pool Builders' },
  { slug: 'best-eftpos-pest-controllers-australia-2026', label: 'Best EFTPOS for Pest Controllers' },
  { slug: 'best-eftpos-welders-australia-2026',          label: 'Best EFTPOS for Welders' },
  { slug: 'best-eftpos-cleaners-australia-2026',         label: 'Best EFTPOS for Cleaners' },
  { slug: 'best-eftpos-landscapers-australia-2026',      label: 'Best EFTPOS for Landscapers' },
  // State posts — NSW/VIC/QLD electricians, plumbers, builders
  { slug: 'best-eftpos-electricians-nsw-2026',             label: 'Best EFTPOS for Electricians in NSW' },
  { slug: 'best-eftpos-electricians-vic-2026',             label: 'Best EFTPOS for Electricians in VIC' },
  { slug: 'best-eftpos-electricians-qld-2026',             label: 'Best EFTPOS for Electricians in QLD' },
  { slug: 'best-eftpos-plumbers-nsw-2026',                 label: 'Best EFTPOS for Plumbers in NSW' },
  { slug: 'best-eftpos-plumbers-vic-2026',                 label: 'Best EFTPOS for Plumbers in VIC' },
  { slug: 'best-eftpos-plumbers-qld-2026',                 label: 'Best EFTPOS for Plumbers in QLD' },
  { slug: 'best-eftpos-builders-nsw-2026',                 label: 'Best EFTPOS for Builders in NSW' },
  { slug: 'best-eftpos-builders-vic-2026',                 label: 'Best EFTPOS for Builders in VIC' },
  { slug: 'best-eftpos-builders-qld-2026',                 label: 'Best EFTPOS for Builders in QLD' },
  // State posts — NSW/VIC/QLD painters & concreters
  { slug: 'best-eftpos-painters-nsw-2026',                 label: 'Best EFTPOS for Painters in NSW' },
  { slug: 'best-eftpos-painters-vic-2026',                 label: 'Best EFTPOS for Painters in VIC' },
  { slug: 'best-eftpos-painters-qld-2026',                 label: 'Best EFTPOS for Painters in QLD' },
  { slug: 'best-eftpos-concreters-nsw-2026',               label: 'Best EFTPOS for Concreters in NSW' },
  { slug: 'best-eftpos-concreters-vic-2026',               label: 'Best EFTPOS for Concreters in VIC' },
  { slug: 'best-eftpos-concreters-qld-2026',               label: 'Best EFTPOS for Concreters in QLD' },
  // State posts — WA / SA
  { slug: 'best-eftpos-electricians-wa-2026',              label: 'Best EFTPOS for Electricians in WA' },
  { slug: 'best-eftpos-plumbers-wa-2026',                  label: 'Best EFTPOS for Plumbers in WA' },
  { slug: 'best-eftpos-builders-wa-2026',                  label: 'Best EFTPOS for Builders in WA' },
  { slug: 'best-eftpos-electricians-sa-2026',              label: 'Best EFTPOS for Electricians in SA' },
  { slug: 'best-eftpos-plumbers-sa-2026',                  label: 'Best EFTPOS for Plumbers in SA' },
  { slug: 'best-eftpos-builders-sa-2026',                  label: 'Best EFTPOS for Builders in SA' },
  // City guides — Sydney
  { slug: 'best-eftpos-electricians-sydney-2026',          label: 'Best EFTPOS for Electricians in Sydney' },
  { slug: 'best-eftpos-plumbers-sydney-2026',              label: 'Best EFTPOS for Plumbers in Sydney' },
  { slug: 'best-eftpos-builders-sydney-2026',              label: 'Best EFTPOS for Builders in Sydney' },
  // City guides — Melbourne
  { slug: 'best-eftpos-electricians-melbourne-2026',       label: 'Best EFTPOS for Electricians in Melbourne' },
  { slug: 'best-eftpos-plumbers-melbourne-2026',           label: 'Best EFTPOS for Plumbers in Melbourne' },
  { slug: 'best-eftpos-builders-melbourne-2026',           label: 'Best EFTPOS for Builders in Melbourne' },
  // City guides — Brisbane
  { slug: 'best-eftpos-electricians-brisbane-2026',        label: 'Best EFTPOS for Electricians in Brisbane' },
  { slug: 'best-eftpos-plumbers-brisbane-2026',            label: 'Best EFTPOS for Plumbers in Brisbane' },
  { slug: 'best-eftpos-builders-brisbane-2026',            label: 'Best EFTPOS for Builders in Brisbane' },
  // State guides — roofers NSW/VIC/QLD
  { slug: 'best-eftpos-roofers-nsw-2026',                  label: 'Best EFTPOS for Roofers in NSW' },
  { slug: 'best-eftpos-roofers-vic-2026',                  label: 'Best EFTPOS for Roofers in Victoria' },
  { slug: 'best-eftpos-roofers-qld-2026',                  label: 'Best EFTPOS for Roofers in QLD' },
  // State guides — painters/concreters WA/SA
  { slug: 'best-eftpos-painters-wa-2026',                  label: 'Best EFTPOS for Painters in WA' },
  { slug: 'best-eftpos-painters-sa-2026',                  label: 'Best EFTPOS for Painters in SA' },
  { slug: 'best-eftpos-concreters-wa-2026',                label: 'Best EFTPOS for Concreters in WA' },
  { slug: 'best-eftpos-concreters-sa-2026',                label: 'Best EFTPOS for Concreters in SA' },
  // City guides — roofers
  { slug: 'best-eftpos-roofers-sydney-2026',               label: 'Best EFTPOS for Roofers in Sydney' },
  { slug: 'best-eftpos-roofers-melbourne-2026',            label: 'Best EFTPOS for Roofers in Melbourne' },
  { slug: 'best-eftpos-roofers-brisbane-2026',             label: 'Best EFTPOS for Roofers in Brisbane' },
  // City guides — painters Perth/Adelaide
  { slug: 'best-eftpos-painters-perth-2026',               label: 'Best EFTPOS for Painters in Perth' },
  { slug: 'best-eftpos-painters-adelaide-2026',            label: 'Best EFTPOS for Painters in Adelaide' },
  // City guides — concreters Perth/Adelaide
  { slug: 'best-eftpos-concreters-perth-2026',             label: 'Best EFTPOS for Concreters in Perth' },
  { slug: 'best-eftpos-concreters-adelaide-2026',          label: 'Best EFTPOS for Concreters in Adelaide' },
]

/** Blog posts most relevant to each provider */
const PROVIDER_BLOG_MAP = {
  zeller:  ['zeller-terminal-1-review-2026', 'zeller-vs-square-eftpos-tradies', 'zeller-vs-square-vs-stripe-eftpos-tradies-2026', 'eftpos-fees-tradies-australia-2026'],
  square:  ['square-terminal-review-2026', 'zeller-vs-square-eftpos-tradies', 'stripe-vs-square-eftpos-australia-2026', 'eftpos-fees-tradies-australia-2026'],
  stripe:  ['stripe-terminal-review-2026', 'stripe-vs-square-eftpos-australia-2026', 'zeller-vs-square-vs-stripe-eftpos-tradies-2026', 'eftpos-fees-tradies-australia-2026'],
  tyro:    ['tyro-eftpos-review-2026', 'zeller-vs-tyro-eftpos-tradies', 'eftpos-fees-tradies-australia-2026', 'surcharging-eftpos-tradies-australia-2026'],
  shift4:  ['shift4-eftpos-review-2026', 'surcharging-eftpos-tradies-australia-2026', 'eftpos-fees-tradies-australia-2026', 'best-eftpos-sole-traders-australia-2026'],
}

/** Blog posts most relevant to each trade */
const TRADE_BLOG_MAP = {
  electricians:     ['best-eftpos-electricians-australia-2026', 'best-eftpos-electricians-nsw-2026', 'best-eftpos-electricians-vic-2026', 'best-eftpos-electricians-qld-2026', 'eftpos-fees-tradies-australia-2026'],
  plumbers:         ['best-eftpos-plumbers-australia-2026', 'best-eftpos-plumbers-nsw-2026', 'best-eftpos-plumbers-vic-2026', 'best-eftpos-plumbers-qld-2026', 'eftpos-fees-tradies-australia-2026'],
  builders:         ['best-eftpos-builders-australia-2026', 'best-eftpos-builders-nsw-2026', 'best-eftpos-builders-vic-2026', 'best-eftpos-builders-qld-2026', 'surcharging-eftpos-tradies-australia-2026'],
  painters:         ['best-eftpos-painters-australia-2026', 'best-eftpos-painters-nsw-2026', 'best-eftpos-painters-vic-2026', 'best-eftpos-painters-qld-2026', 'best-eftpos-painters-wa-2026', 'best-eftpos-painters-sa-2026', 'eftpos-fees-tradies-australia-2026'],
  roofers:          ['best-eftpos-roofers-australia-2026', 'best-eftpos-roofers-nsw-2026', 'best-eftpos-roofers-vic-2026', 'best-eftpos-roofers-qld-2026', 'eftpos-fees-tradies-australia-2026'],
  glaziers:         ['best-eftpos-glaziers-australia-2026', 'zeller-vs-square-eftpos-tradies', 'eftpos-fees-tradies-australia-2026'],
  hvac:             ['best-eftpos-hvac-australia-2026', 'zeller-vs-square-eftpos-tradies', 'eftpos-fees-tradies-australia-2026'],
  concreters:       ['best-eftpos-concreters-australia-2026', 'best-eftpos-concreters-nsw-2026', 'best-eftpos-concreters-vic-2026', 'best-eftpos-concreters-qld-2026', 'best-eftpos-concreters-wa-2026', 'best-eftpos-concreters-sa-2026', 'eftpos-fees-tradies-australia-2026'],
  carpenters:       ['best-eftpos-carpenters-australia-2026', 'best-eftpos-builders-australia-2026', 'eftpos-fees-tradies-australia-2026'],
  tilers:           ['best-eftpos-tilers-australia-2026', 'how-to-get-paid-faster-sole-trader-australia', 'eftpos-fees-tradies-australia-2026'],
  'gas-fitters':    ['best-eftpos-gas-fitters-australia-2026', 'best-eftpos-plumbers-australia-2026', 'eftpos-fees-tradies-australia-2026'],
  fencers:          ['best-eftpos-fencers-australia-2026', 'surcharging-eftpos-tradies-australia-2026', 'eftpos-fees-tradies-australia-2026'],
  plasterers:       ['best-eftpos-plasterers-australia-2026', 'best-eftpos-builders-australia-2026', 'eftpos-fees-tradies-australia-2026'],
  'pool-builders':  ['best-eftpos-pool-builders-australia-2026', 'surcharging-eftpos-tradies-australia-2026', 'how-to-get-paid-faster-sole-trader-australia'],
  'pest-controllers': ['best-eftpos-pest-controllers-australia-2026', 'how-to-get-paid-faster-sole-trader-australia', 'eftpos-fees-tradies-australia-2026'],
  welders:          ['best-eftpos-welders-australia-2026', 'surcharging-eftpos-tradies-australia-2026', 'eftpos-fees-tradies-australia-2026'],
  cleaners:         ['best-eftpos-cleaners-australia-2026', 'how-to-get-paid-faster-sole-trader-australia', 'best-eftpos-sole-traders-australia-2026'],
  landscapers:      ['best-eftpos-landscapers-australia-2026', 'how-to-get-paid-faster-sole-trader-australia', 'eftpos-fees-tradies-australia-2026'],
}

const DEFAULT_BLOG_SLUGS = [
  'zeller-vs-square-vs-stripe-eftpos-tradies-2026',
  'eftpos-fees-tradies-australia-2026',
  'how-to-get-paid-faster-sole-trader-australia',
]

export function blogPostsForProvider(providerSlug) {
  const slugs = PROVIDER_BLOG_MAP[providerSlug] || DEFAULT_BLOG_SLUGS
  return slugs.map(s => BLOG_POSTS.find(b => b.slug === s)).filter(Boolean)
}

export function blogPostsForTrade(tradeSlug) {
  const slugs = TRADE_BLOG_MAP[tradeSlug] || DEFAULT_BLOG_SLUGS
  return slugs.map(s => BLOG_POSTS.find(b => b.slug === s)).filter(Boolean)
}

export function defaultBlogPosts() {
  return DEFAULT_BLOG_SLUGS.map(s => BLOG_POSTS.find(b => b.slug === s)).filter(Boolean)
}
