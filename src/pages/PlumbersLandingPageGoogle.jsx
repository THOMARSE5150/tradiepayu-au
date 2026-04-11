import PlumbersLPBase from './PlumbersLPBase'

// Google Ads variant — /plumbers-eftpos-google
// Built for high-intent search traffic: "best EFTPOS plumber australia" etc.
// Message-match: visitor searched for a solution — confirm they found it fast.

const GOOGLE_CONFIG = {
  meta: {
    title:       'Best EFTPOS for Australian Plumbers 2026 — Zeller 1.4% Flat Rate',
    description: 'Zeller is the top-rated EFTPOS for Australian plumbers. 1.4% flat rate, built-in Optus SIM, same-day settlement. Compare and set up with your ABN today — no lock-in.',
    canonical:   '/plumbers-eftpos-google',
  },
  badge: 'Australian Plumbers · Best EFTPOS 2026',
  hero: {
    h1: {
      line1: 'Zeller: Best EFTPOS for Australian Plumbers',
      line2: null,
    },
    sub: '1.4% flat rate. Built-in Optus SIM — no customer WiFi needed. Same-day AUD settlement. Approved online with your ABN.',
    trustStrip: ['1.4% flat rate', 'Own SIM — works anywhere', 'Same-day settlement', 'No lock-in'],
    ctaText:      'Get Zeller Now — 1.4% →',
    ctaMicrocopy: 'Approved with your ABN in minutes. No lock-in.',
  },
  pain: {
    h2:  'Why Plumbers Choose Zeller Over Generic Terminals',
    sub: 'Standard terminals need WiFi or a phone hotspot. Zeller runs on its own Optus SIM — it works in plant rooms, basements, and emergency callouts without relying on the building\'s network.',
  },
  campaigns: {
    heroPrimary: 'plumbers-google',
    bestPick:    'plumbers-google',
    final:       'plumbers-google-final',
  },
}

export default function PlumbersLandingPageGoogle() {
  return <PlumbersLPBase config={GOOGLE_CONFIG} />
}
