import BuildersLPBase from './BuildersLPBase'

// Control variant — /builders-eftpos
// Do not edit structure here. Edit BuildersLPBase for shared layout.
// Only config changes belong in this file.

const CONTROL_CONFIG = {
  meta: {
    title:       'Best EFTPOS for Australian Builders (2026) — Works On-Site, No WiFi',
    description: 'Zeller Terminal + SIM is the top EFTPOS pick for builders in Australia. 1.4% flat rate, no lock-in, same-day AUD settlement. Works on construction sites and rural builds.',
    canonical:   '/builders-eftpos',
  },
  badge: 'Australian Builders · EFTPOS Guide 2026',
  hero: {
    h1: {
      line1: 'Get Paid On-Site —',
      line2: 'No Chasing Progress Payments',
    },
    sub: 'Zeller runs on its own SIM — takes payment anywhere you build. Active construction sites, rural properties, milestone sign-offs. 1.4% flat rate, same-day settlement.',
    trustStrip: ['1.4% flat rate', 'Own SIM — works anywhere', 'Same-day settlement', 'No lock-in'],
    ctaText:      'Start with Zeller — 1.4% →',
    ctaMicrocopy: 'Approved with your ABN in minutes. No lock-in.',
  },
  pain: {
    h2:  'Why Standard EFTPOS Fails Australian Builders',
    sub: 'Generic terminals are built for shops. Here\'s where they fail on building sites — and what works instead.',
  },
  campaigns: {
    heroPrimary: 'builders-lp',
    bestPick:    'builders-lp',
    final:       'builders-lp-final',
  },
}

export default function BuildersLandingPage() {
  return <BuildersLPBase config={CONTROL_CONFIG} />
}
