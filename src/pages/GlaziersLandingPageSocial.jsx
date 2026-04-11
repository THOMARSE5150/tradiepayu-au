import GlaziersLPBase from './GlaziersLPBase'

// Meta/TikTok variant — /glaziers-eftpos-social
// Built for cold interruption traffic — visitor didn't search, they were scrolling.
// Goal: fast "this is for me" recognition via pain-first framing before solution reveal.
// Differences from control: problem-statement h1, empathy-led subcopy, pain section pulls toward fix.

const SOCIAL_CONFIG = {
  meta: {
    title: 'EFTPOS for Glaziers — Get Paid on Every Job | TradiePay AU',
    description: 'Zeller\'s built-in SIM means you get paid on every glazing job — emergency callouts, commercial sites, anywhere. 1.4% flat rate, no lock-in. Set up with your ABN today.',
    canonical: '/glaziers-eftpos-social',
  },
  badge: 'Australian Glaziers · EFTPOS',
  hero: {
    h1: {
      line1: 'Your EFTPOS Needs WiFi.',
      line2: 'Your Job Sites Don\'t.',
    },
    sub: 'Zeller has a built-in SIM — takes payment anywhere you work. Emergency callouts, high-rises, underground carparks. 1.4% flat rate, same-day settlement.',
    trustStrip: ['1.4% flat rate', 'Own SIM — works anywhere', 'Same-day settlement', 'No lock-in'],
    ctaText: 'Fix It with Zeller — 1.4% →',
    ctaMicrocopy: 'Approved with your ABN in minutes. No lock-in.',
  },
  pain: {
    h2: 'Sound Familiar? Here\'s Why — and the Fix.',
    sub: 'Your terminal was built for a shop with reliable WiFi. Most glazing job sites have neither. Here\'s what actually works instead.',
  },
  campaigns: {
    heroPrimary: 'glaziers-social',
    bestPick:    'glaziers-social',
    final:       'glaziers-social-final',
  },
}

export default function GlaziersLandingPageSocial() {
  return <GlaziersLPBase config={SOCIAL_CONFIG} />
}
