import CleanersLPBase from './CleanersLPBase'

// Google Ads variant — /cleaners-eftpos-google
// Built for high-intent search traffic: "best EFTPOS cleaner australia" etc.
// Message-match: visitor searched for a solution — confirm they found it fast.

const GOOGLE_CONFIG = {
  meta: {
    title:       'Best EFTPOS for Australian Cleaners 2026 — Zeller 1.4% Flat Rate',
    description: 'Zeller is the top-rated EFTPOS for Australian cleaners. 1.4% flat rate, built-in Optus SIM, same-day settlement. Compare and set up with your ABN today — no lock-in.',
    canonical:   '/cleaners-eftpos-google',
  },
  badge: 'Australian Cleaners · Best EFTPOS 2026',
  hero: {
    h1: {
      line1: 'Zeller: Best EFTPOS for Australian Cleaners',
      line2: null,
    },
    sub: '1.4% flat rate. Built-in Optus SIM — no client WiFi needed. Same-day AUD settlement. Approved online with your ABN.',
    trustStrip: ['1.4% flat rate', 'Own SIM — works anywhere', 'Same-day settlement', 'No lock-in'],
    ctaText:      'Get Zeller Now — 1.4% →',
    ctaMicrocopy: 'Approved with your ABN in minutes. No lock-in.',
  },
  pain: {
    h2:  'Why Cleaners Choose Zeller Over Generic Terminals',
    sub: 'Standard terminals need client WiFi or a phone hotspot. Zeller runs on its own Optus SIM — no password requests, no connectivity issues at commercial sites or residential properties.',
  },
  campaigns: {
    heroPrimary: 'cleaners-google',
    bestPick:    'cleaners-google',
    final:       'cleaners-google-final',
  },
}

export default function CleanersLandingPageGoogle() {
  return <CleanersLPBase config={GOOGLE_CONFIG} />
}
