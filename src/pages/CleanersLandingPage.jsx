import CleanersLPBase from './CleanersLPBase'

// Control variant — /cleaners-eftpos
// Do not edit structure here. Edit CleanersLPBase for shared layout.
// Only config changes belong in this file.

const CONTROL_CONFIG = {
  meta: {
    title:       'Best EFTPOS for Australian Cleaners (2026) — Works On-Site, No Client WiFi',
    description: 'Zeller Terminal + SIM is the top EFTPOS pick for cleaners in Australia. 1.4% flat rate, no lock-in, same-day AUD settlement. Works at residential and commercial sites.',
    canonical:   '/cleaners-eftpos',
  },
  badge: 'Australian Cleaners · EFTPOS Guide 2026',
  hero: {
    h1: {
      line1: 'Get Paid Every Visit —',
      line2: "No 'I'll Pay Next Time'",
    },
    sub: "Zeller runs on its own SIM — takes payment anywhere you clean. Residential rounds, commercial sites, bond cleans. 1.4% flat rate, same-day settlement.",
    trustStrip: ['1.4% flat rate', 'Own SIM — works anywhere', 'Same-day settlement', 'No lock-in'],
    ctaText:      'Start with Zeller — 1.4% →',
    ctaMicrocopy: 'Approved with your ABN in minutes. No lock-in.',
  },
  pain: {
    h2:  'Why Standard EFTPOS Fails Australian Cleaners',
    sub: "Generic terminals rely on client WiFi or a phone hotspot. Here's where that breaks down — and what works instead.",
  },
  campaigns: {
    heroPrimary: 'cleaners-lp',
    bestPick:    'cleaners-lp',
    final:       'cleaners-lp-final',
  },
}

export default function CleanersLandingPage() {
  return <CleanersLPBase config={CONTROL_CONFIG} />
}
