import BuildersLPBase from './BuildersLPBase'

// Meta/TikTok variant — /builders-eftpos-social
// Built for cold interruption traffic — visitor didn't search, they were scrolling.
// Goal: fast "this is for me" recognition via pain-first framing before solution reveal.

const SOCIAL_CONFIG = {
  meta: {
    title:       'EFTPOS for Builders — Get Paid On-Site Every Stage | TradiePay AU',
    description: 'Zeller\'s built-in SIM means you get paid on-site at every stage — no site WiFi, no problem. 1.4% flat rate, no lock-in. Set up with your ABN today.',
    canonical:   '/builders-eftpos-social',
  },
  badge: 'Australian Builders · EFTPOS',
  hero: {
    h1: {
      line1: 'No Site WiFi.',
      line2: 'Zeller Has Its Own SIM.',
    },
    sub: 'Construction sites, rural builds, progress payment sign-offs — Zeller takes payment anywhere without building infrastructure. 1.4% flat rate, same-day settlement.',
    trustStrip: ['1.4% flat rate', 'Own SIM — works anywhere', 'Same-day settlement', 'No lock-in'],
    ctaText:      'Fix It with Zeller — 1.4% →',
    ctaMicrocopy: 'Approved with your ABN in minutes. No lock-in.',
  },
  pain: {
    h2:  "Sound Familiar? Here's Why — and the Fix.",
    sub: 'Your terminal was built for a shop with reliable WiFi. Active construction sites have neither. Here\'s what actually works instead.',
  },
  campaigns: {
    heroPrimary: 'builders-social',
    bestPick:    'builders-social',
    final:       'builders-social-final',
  },
}

export default function BuildersLandingPageSocial() {
  return <BuildersLPBase config={SOCIAL_CONFIG} />
}
