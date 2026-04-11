import RoofersLPBase from './RoofersLPBase'

// Control variant — /roofers-eftpos
// Do not edit structure here. Edit RoofersLPBase for shared layout.
// Only config changes belong in this file.

const CONTROL_CONFIG = {
  meta: {
    title:       'Best EFTPOS for Australian Roofers (2026) — Works On-Site, No WiFi',
    description: 'Zeller Terminal + SIM is the top EFTPOS pick for roofers in Australia. 1.4% flat rate, no lock-in, same-day AUD settlement. Works on storm callouts, rural jobs, and residential re-roofing.',
    canonical:   '/roofers-eftpos',
  },
  badge: 'Australian Roofers · EFTPOS Guide 2026',
  hero: {
    h1: {
      line1: 'Get Paid After Every Job —',
      line2: 'Storm Callouts Included',
    },
    sub: 'Zeller runs on its own SIM — takes payment anywhere you work. Emergency storm repairs, rural properties, re-roofing jobs. 1.4% flat rate, same-day settlement.',
    trustStrip: ['1.4% flat rate', 'Own SIM — works anywhere', 'Same-day settlement', 'No lock-in'],
    ctaText:      'Start with Zeller — 1.4% →',
    ctaMicrocopy: 'Approved with your ABN in minutes. No lock-in.',
  },
  pain: {
    h2:  'Why Standard EFTPOS Fails Australian Roofers',
    sub: "Generic terminals are built for shops. Here's where they fail on roofing jobs — and what works instead.",
  },
  campaigns: {
    heroPrimary: 'roofers-lp',
    bestPick:    'roofers-lp',
    final:       'roofers-lp-final',
  },
}

export default function RoofersLandingPage() {
  return <RoofersLPBase config={CONTROL_CONFIG} />
}
