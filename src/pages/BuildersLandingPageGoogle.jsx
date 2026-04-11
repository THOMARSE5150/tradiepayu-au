import BuildersLPBase from './BuildersLPBase'

// Google Ads variant — /builders-eftpos-google
// Built for high-intent search traffic: "best EFTPOS builder australia" etc.
// Message-match: visitor searched for a solution — confirm they found it fast.

const GOOGLE_CONFIG = {
  meta: {
    title:       'Best EFTPOS for Australian Builders 2026 — Zeller 1.4% Flat Rate',
    description: 'Zeller is the top-rated EFTPOS for Australian builders. 1.4% flat rate, built-in Optus SIM, same-day settlement. Compare and set up with your ABN today — no lock-in.',
    canonical:   '/builders-eftpos-google',
  },
  badge: 'Australian Builders · Best EFTPOS 2026',
  hero: {
    h1: {
      line1: 'Zeller: Best EFTPOS for Australian Builders',
      line2: null,
    },
    sub: '1.4% flat rate. Built-in Optus SIM — no site WiFi needed. Same-day AUD settlement. Approved online with your ABN.',
    trustStrip: ['1.4% flat rate', 'Own SIM — works anywhere', 'Same-day settlement', 'No lock-in'],
    ctaText:      'Get Zeller Now — 1.4% →',
    ctaMicrocopy: 'Approved with your ABN in minutes. No lock-in.',
  },
  pain: {
    h2:  'Why Builders Choose Zeller Over Generic Terminals',
    sub: 'Standard terminals need site WiFi or a phone hotspot. Zeller runs on its own Optus SIM — it works on active construction sites, rural builds, and progress payment sign-offs without relying on building infrastructure.',
  },
  campaigns: {
    heroPrimary: 'builders-google',
    bestPick:    'builders-google',
    final:       'builders-google-final',
  },
}

export default function BuildersLandingPageGoogle() {
  return <BuildersLPBase config={GOOGLE_CONFIG} />
}
