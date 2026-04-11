import PlumbersLPBase from './PlumbersLPBase'

// Meta/TikTok variant — /plumbers-eftpos-social
// Built for cold interruption traffic — visitor didn't search, they were scrolling.
// Goal: fast "this is for me" recognition via pain-first framing before solution reveal.

const SOCIAL_CONFIG = {
  meta: {
    title:       'EFTPOS for Plumbers — Get Paid on Every Callout | TradiePay AU',
    description: 'Zeller\'s built-in SIM means you get paid on every plumbing job — burst pipes, blocked drains, anywhere. 1.4% flat rate, no lock-in. Set up with your ABN today.',
    canonical:   '/plumbers-eftpos-social',
  },
  badge: 'Australian Plumbers · EFTPOS',
  hero: {
    h1: {
      line1: 'No Building Power.',
      line2: 'Zeller Has Its Own SIM.',
    },
    sub: 'Emergency callouts, plant rooms, basement dead zones — Zeller takes payment anywhere you work. 1.4% flat rate, same-day settlement.',
    trustStrip: ['1.4% flat rate', 'Own SIM — works anywhere', 'Same-day settlement', 'No lock-in'],
    ctaText:      'Fix It with Zeller — 1.4% →',
    ctaMicrocopy: 'Approved with your ABN in minutes. No lock-in.',
  },
  pain: {
    h2:  "Sound Familiar? Here's Why — and the Fix.",
    sub: 'Your terminal was built for a shop with reliable WiFi. Most plumbing jobs have neither. Here\'s what actually works instead.',
  },
  campaigns: {
    heroPrimary: 'plumbers-social',
    bestPick:    'plumbers-social',
    final:       'plumbers-social-final',
  },
}

export default function PlumbersLandingPageSocial() {
  return <PlumbersLPBase config={SOCIAL_CONFIG} />
}
