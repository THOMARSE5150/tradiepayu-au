import PlumbersLPBase from './PlumbersLPBase'

// Control variant — /plumbers-eftpos
// Do not edit structure here. Edit PlumbersLPBase for shared layout.
// Only config changes belong in this file.

const CONTROL_CONFIG = {
  meta: {
    title:       'Best EFTPOS for Australian Plumbers (2026) — Works On-Site, No WiFi',
    description: 'Zeller Terminal + SIM is the top EFTPOS pick for plumbers in Australia. 1.4% flat rate, no lock-in, same-day AUD settlement. Works on emergency callouts and commercial sites.',
    canonical:   '/plumbers-eftpos',
  },
  badge: 'Australian Plumbers · EFTPOS Guide 2026',
  hero: {
    h1: {
      line1: 'Get Paid After Every Callout —',
      line2: 'No Chasing Invoices',
    },
    sub: 'Zeller runs on its own SIM — takes payment anywhere you work. Burst pipes at 2am, commercial plant rooms, rural properties. 1.4% flat rate, same-day settlement.',
    trustStrip: ['1.4% flat rate', 'Own SIM — works anywhere', 'Same-day settlement', 'No lock-in'],
    ctaText:      'Start with Zeller — 1.4% →',
    ctaMicrocopy: 'Approved with your ABN in minutes. No lock-in.',
  },
  pain: {
    h2:  'Why Standard EFTPOS Fails Australian Plumbers',
    sub: 'Generic terminals are built for shops. Here\'s where they fail on plumbing jobs — and what works instead.',
  },
  campaigns: {
    heroPrimary: 'plumbers-lp',
    bestPick:    'plumbers-lp',
    final:       'plumbers-lp-final',
  },
}

export default function PlumbersLandingPage() {
  return <PlumbersLPBase config={CONTROL_CONFIG} />
}
