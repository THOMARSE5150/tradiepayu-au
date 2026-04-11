import CleanersLPBase from './CleanersLPBase'

// Meta/TikTok variant — /cleaners-eftpos-social
// Built for cold interruption traffic — visitor didn't search, they were scrolling.
// Goal: fast "this is for me" recognition via pain-first framing before solution reveal.

const SOCIAL_CONFIG = {
  meta: {
    title:       "EFTPOS for Cleaners — Stop Hearing 'I'll Pay Next Time' | TradiePay AU",
    description: "Zeller's built-in SIM means you get paid at every clean — residential, commercial, bond cleans. 1.4% flat rate, no lock-in. Set up with your ABN today.",
    canonical:   '/cleaners-eftpos-social',
  },
  badge: 'Australian Cleaners · EFTPOS',
  hero: {
    h1: {
      line1: "They Said They'd Pay Next Time.",
      line2: "Now They Won't.",
    },
    sub: 'Take payment on-site at every clean. Zeller runs on its own SIM — works at commercial sites, locked-WiFi buildings, and residential homes. 1.4% flat rate, same-day settlement.',
    trustStrip: ['1.4% flat rate', 'Own SIM — works anywhere', 'Same-day settlement', 'No lock-in'],
    ctaText:      'Fix It with Zeller — 1.4% →',
    ctaMicrocopy: 'Approved with your ABN in minutes. No lock-in.',
  },
  pain: {
    h2:  "Sound Familiar? Here's Why — and the Fix.",
    sub: "Your terminal needs client WiFi. Commercial sites lock it down. Residential clients say they'll bank transfer. Here's what actually works instead.",
  },
  campaigns: {
    heroPrimary: 'cleaners-social',
    bestPick:    'cleaners-social',
    final:       'cleaners-social-final',
  },
}

export default function CleanersLandingPageSocial() {
  return <CleanersLPBase config={SOCIAL_CONFIG} />
}
