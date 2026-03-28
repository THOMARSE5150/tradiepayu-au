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

/** Returns trades in the same group, excluding the current slug */
export function relatedTrades(currentSlug) {
  const current = TRADES.find(t => t.slug === currentSlug)
  if (!current) return TRADES.filter(t => t.slug !== currentSlug).slice(0, 6)
  return TRADES.filter(t => t.group === current.group && t.slug !== currentSlug)
}

/** Returns providers excluding the current slug */
export function otherProviders(currentSlug) {
  return PROVIDERS.filter(p => p.slug !== currentSlug)
}
