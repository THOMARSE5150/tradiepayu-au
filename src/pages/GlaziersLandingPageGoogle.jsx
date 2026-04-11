import GlaziersLPBase from './GlaziersLPBase'

// Google Ads variant — /glaziers-eftpos-google
// Built for high-intent search traffic: "best EFTPOS glazier australia" etc.
// Message-match: visitor searched for a solution — confirm they found it fast.
// Differences from control: keyword-matched h1, rate-first subcopy, decision-pull pain framing.

const GOOGLE_CONFIG = {
  meta: {
    title: 'Best EFTPOS for Australian Glaziers 2026 — Zeller 1.4% Flat Rate',
    description: 'Zeller is the top-rated EFTPOS for Australian glaziers. 1.4% flat rate, built-in Optus SIM, same-day settlement. Compare and set up with your ABN today — no lock-in.',
    canonical: '/glaziers-eftpos-google',
  },
  badge: 'Australian Glaziers · Best EFTPOS 2026',
  hero: {
    h1: {
      line1: 'Zeller: Best EFTPOS for Australian Glaziers',
      line2: null,
    },
    sub: '1.4% flat rate. Built-in Optus SIM — no customer WiFi needed. Same-day AUD settlement. Approved online with your ABN.',
    trustStrip: ['1.4% flat rate', 'Own SIM — works anywhere', 'Same-day settlement', 'No lock-in'],
    ctaText: 'Get Zeller Now — 1.4% →',
    ctaMicrocopy: 'Approved with your ABN in minutes. No lock-in.',
  },
  pain: {
    h2: 'Why Glaziers Choose Zeller Over Generic Terminals',
    sub: 'Standard terminals need WiFi or a phone signal. Zeller runs on its own Optus SIM — it works anywhere you work, without relying on the building\'s network.',
  },
  campaigns: {
    heroPrimary: 'glaziers-google',
    bestPick:    'glaziers-google',
    final:       'glaziers-google-final',
  },
}

export default function GlaziersLandingPageGoogle() {
  return <GlaziersLPBase config={GOOGLE_CONFIG} />
}
