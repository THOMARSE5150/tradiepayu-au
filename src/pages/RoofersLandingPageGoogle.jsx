import RoofersLPBase from './RoofersLPBase'

// Google Ads variant — /roofers-eftpos-google
// Built for high-intent search traffic: "best EFTPOS roofer australia" etc.
// Message-match: visitor searched for a solution — confirm they found it fast.

const GOOGLE_CONFIG = {
  meta: {
    title:       'Best EFTPOS for Australian Roofers 2026 — Zeller 1.4% Flat Rate',
    description: 'Zeller is the top-rated EFTPOS for Australian roofers. 1.4% flat rate, built-in Optus SIM, same-day settlement. Compare and set up with your ABN today — no lock-in.',
    canonical:   '/roofers-eftpos-google',
  },
  badge: 'Australian Roofers · Best EFTPOS 2026',
  hero: {
    h1: {
      line1: 'Zeller: Best EFTPOS for Australian Roofers',
      line2: null,
    },
    sub: '1.4% flat rate. Built-in Optus SIM — no customer WiFi needed. Same-day AUD settlement. Approved online with your ABN.',
    trustStrip: ['1.4% flat rate', 'Own SIM — works anywhere', 'Same-day settlement', 'No lock-in'],
    ctaText:      'Get Zeller Now — 1.4% →',
    ctaMicrocopy: 'Approved with your ABN in minutes. No lock-in.',
  },
  pain: {
    h2:  'Why Roofers Choose Zeller Over Generic Terminals',
    sub: 'Standard terminals need WiFi or a phone hotspot. Zeller runs on its own Optus SIM — it works on storm callouts, rural properties, and outer-suburb jobs where signal is patchy.',
  },
  campaigns: {
    heroPrimary: 'roofers-google',
    bestPick:    'roofers-google',
    final:       'roofers-google-final',
  },
}

export default function RoofersLandingPageGoogle() {
  return <RoofersLPBase config={GOOGLE_CONFIG} />
}
