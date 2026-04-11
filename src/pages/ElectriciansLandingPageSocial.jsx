import ElectriciansLPBase from './ElectriciansLPBase'

// Meta/TikTok variant — /electricians-eftpos-social
// Built for cold interruption traffic — visitor didn't search, they were scrolling.
// Goal: fast "this is for me" recognition via pain-first framing before solution reveal.

const SOCIAL_CONFIG = {
  meta: {
    title:       'EFTPOS for Electricians — Get Paid on Every Job | TradiePay AU',
    description: 'Zeller\'s built-in SIM means you get paid on every electrical job — emergency callouts, commercial sites, anywhere. 1.4% flat rate, no lock-in. Set up with your ABN today.',
    canonical:   '/electricians-eftpos-social',
  },
  badge: 'Australian Electricians · EFTPOS',
  hero: {
    h1: {
      line1: 'Your EFTPOS Needs WiFi.',
      line2: "Your Job Sites Don't.",
    },
    sub: "Zeller has a built-in SIM — takes payment anywhere you work. Emergency callouts, switchrooms, underground carparks. 1.4% flat rate, same-day settlement.",
    trustStrip: ['1.4% flat rate', 'Own SIM — works anywhere', 'Same-day settlement', 'No lock-in'],
    ctaText:      'Fix It with Zeller — 1.4% →',
    ctaMicrocopy: 'Approved with your ABN in minutes. No lock-in.',
  },
  pain: {
    h2:  "Sound Familiar? Here's Why — and the Fix.",
    sub: 'Your terminal was built for a shop with reliable WiFi. Most electrical job sites have neither. Here\'s what actually works instead.',
  },
  campaigns: {
    heroPrimary: 'electricians-social',
    bestPick:    'electricians-social',
    final:       'electricians-social-final',
  },
}

export default function ElectriciansLandingPageSocial() {
  return <ElectriciansLPBase config={SOCIAL_CONFIG} />
}
