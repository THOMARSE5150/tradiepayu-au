import GlaziersLPBase from './GlaziersLPBase'

// Control variant — /glaziers-eftpos
// Do not edit structure here. Edit GlaziersLPBase for shared layout.
// Only config changes belong in this file.

const CONTROL_CONFIG = {
  meta: {
    title: 'Best EFTPOS for Australian Glaziers (2026) — Works On-Site, No WiFi',
    description: 'Zeller Terminal + SIM is the top EFTPOS pick for glaziers in Australia. 1.4% flat rate, no lock-in, same-day AUD settlement. Works at emergency callouts and commercial sites.',
    canonical: '/glaziers-eftpos',
  },
  badge: 'Australian Glaziers · EFTPOS Guide 2026',
  hero: {
    h1: {
      line1: 'Get Paid On the Job —',
      line2: 'No WiFi Needed',
    },
    sub: 'Zeller runs on its own SIM — takes payment anywhere you work. Emergency callouts, high-rise sites, property manager billing. 1.4% flat rate, same-day settlement.',
    trustStrip: ['1.4% flat rate', 'Own SIM — works anywhere', 'Same-day settlement', 'No lock-in'],
    ctaText: 'Start with Zeller — 1.4% →',
    ctaMicrocopy: 'Approved with your ABN in minutes. No lock-in.',
  },
  pain: {
    h2: 'Why Standard EFTPOS Fails Australian Glaziers',
    sub: 'Generic terminals are built for shops. Here\'s where they fail on glazing jobs — and what works instead.',
  },
  campaigns: {
    heroPrimary: 'glaziers-lp',
    bestPick:    'glaziers-lp',
    final:       'glaziers-lp-final',
  },
}

export default function GlaziersLandingPage() {
  return <GlaziersLPBase config={CONTROL_CONFIG} />
}
