import RoofersLPBase from './RoofersLPBase'

// Meta/TikTok variant — /roofers-eftpos-social
// Built for cold interruption traffic — visitor didn't search, they were scrolling.
// Goal: fast "this is for me" recognition via pain-first framing before solution reveal.

const SOCIAL_CONFIG = {
  meta: {
    title:       'EFTPOS for Roofers — Get Paid After Storm Callouts | TradiePay AU',
    description: "Zeller's built-in SIM means you get paid after every roofing job — storm callouts, rural properties, anywhere. 1.4% flat rate, no lock-in. Set up with your ABN today.",
    canonical:   '/roofers-eftpos-social',
  },
  badge: 'Australian Roofers · EFTPOS',
  hero: {
    h1: {
      line1: 'Storm Callout Done.',
      line2: 'Now Get Paid On-Site.',
    },
    sub: "No building power, no client WiFi — Zeller runs on its own SIM. Takes payment on storm callouts, rural properties, anywhere you work. 1.4% flat rate, same-day settlement.",
    trustStrip: ['1.4% flat rate', 'Own SIM — works anywhere', 'Same-day settlement', 'No lock-in'],
    ctaText:      'Fix It with Zeller — 1.4% →',
    ctaMicrocopy: 'Approved with your ABN in minutes. No lock-in.',
  },
  pain: {
    h2:  "Sound Familiar? Here's Why — and the Fix.",
    sub: "Your terminal needs building power or client WiFi. Storm callouts have neither. Here's what actually works instead.",
  },
  campaigns: {
    heroPrimary: 'roofers-social',
    bestPick:    'roofers-social',
    final:       'roofers-social-final',
  },
}

export default function RoofersLandingPageSocial() {
  return <RoofersLPBase config={SOCIAL_CONFIG} />
}
