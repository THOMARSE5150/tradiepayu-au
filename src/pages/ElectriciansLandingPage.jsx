import ElectriciansLPBase from './ElectriciansLPBase'

// Control variant — /electricians-eftpos
// Do not edit structure here. Edit ElectriciansLPBase for shared layout.
// Only config changes belong in this file.

const CONTROL_CONFIG = {
  meta: {
    title:       'Best EFTPOS for Australian Electricians (2026) — Works On-Site, No WiFi',
    description: 'Zeller Terminal + SIM is the top EFTPOS pick for electricians in Australia. 1.4% flat rate, no lock-in, same-day AUD settlement. Works on emergency callouts and commercial sites.',
    canonical:   '/electricians-eftpos',
  },
  badge: 'Australian Electricians · EFTPOS Guide 2026',
  hero: {
    h1: {
      line1: 'Get Paid After Every Job —',
      line2: 'No Chasing Invoices',
    },
    sub: 'Zeller runs on its own SIM — takes payment anywhere you work. Emergency callouts, commercial switchrooms, residential rewires. 1.4% flat rate, same-day settlement.',
    trustStrip: ['1.4% flat rate', 'Own SIM — works anywhere', 'Same-day settlement', 'No lock-in'],
    ctaText:      'Start with Zeller — 1.4% →',
    ctaMicrocopy: 'Approved with your ABN in minutes. No lock-in.',
  },
  pain: {
    h2:  'Why Standard EFTPOS Fails Australian Electricians',
    sub: 'Generic terminals are built for shops. Here\'s where they fail on electrical jobs — and what works instead.',
  },
  campaigns: {
    heroPrimary: 'electricians-lp',
    bestPick:    'electricians-lp',
    final:       'electricians-lp-final',
  },
}

export default function ElectriciansLandingPage() {
  return <ElectriciansLPBase config={CONTROL_CONFIG} />
}
