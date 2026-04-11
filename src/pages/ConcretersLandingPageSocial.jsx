import ConcretersLPBase from './ConcretersLPBase'

// Meta/TikTok variant — /concreters-eftpos-social
// Built for cold interruption traffic — visitor didn't search, they were scrolling.
// Goal: fast "this is for me" recognition via pain-first framing before solution reveal.

const SOCIAL_CONFIG = {
  meta: {
    title:       'EFTPOS for Concreters — Get Paid on Pour Day | TradiePay AU',
    description: "Zeller's built-in SIM means you get paid on pour day — bare sites, rural properties, no infrastructure needed. 1.4% flat rate, no lock-in. Set up with your ABN today.",
    canonical:   '/concreters-eftpos-social',
  },
  badge: 'Australian Concreters · EFTPOS',
  hero: {
    h1: {
      line1: 'Pour Day Done.',
      line2: 'Get Paid Before You Leave.',
    },
    sub: "Zeller runs on its own SIM — no site power, no building WiFi required. Takes payment anywhere you pour. 1.4% flat rate, same-day settlement.",
    trustStrip: ['1.4% flat rate', 'Own SIM — works anywhere', 'Same-day settlement', 'No lock-in'],
    ctaText:      'Fix It with Zeller — 1.4% →',
    ctaMicrocopy: 'Approved with your ABN in minutes. No lock-in.',
  },
  pain: {
    h2:  "Sound Familiar? Here's Why — and the Fix.",
    sub: "Your terminal needs site WiFi or building power. Concrete slabs happen before any of that exists. Here's what actually works instead.",
  },
  campaigns: {
    heroPrimary: 'concreters-social',
    bestPick:    'concreters-social',
    final:       'concreters-social-final',
  },
}

export default function ConcretersLandingPageSocial() {
  return <ConcretersLPBase config={SOCIAL_CONFIG} />
}
