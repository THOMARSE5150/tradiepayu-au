import ConcretersLPBase from './ConcretersLPBase'

// Google Ads variant — /concreters-eftpos-google
// Built for high-intent search traffic: "best EFTPOS concreter australia" etc.
// Message-match: visitor searched for a solution — confirm they found it fast.

const GOOGLE_CONFIG = {
  meta: {
    title:       'Best EFTPOS for Australian Concreters 2026 — Zeller 1.4% Flat Rate',
    description: 'Zeller is the top-rated EFTPOS for Australian concreters. 1.4% flat rate, built-in Optus SIM, same-day settlement. Compare and set up with your ABN today — no lock-in.',
    canonical:   '/concreters-eftpos-google',
  },
  badge: 'Australian Concreters · Best EFTPOS 2026',
  hero: {
    h1: {
      line1: 'Zeller: Best EFTPOS for Australian Concreters',
      line2: null,
    },
    sub: '1.4% flat rate. Built-in Optus SIM — no site WiFi needed. Same-day AUD settlement. Approved online with your ABN.',
    trustStrip: ['1.4% flat rate', 'Own SIM — works anywhere', 'Same-day settlement', 'No lock-in'],
    ctaText:      'Get Zeller Now — 1.4% →',
    ctaMicrocopy: 'Approved with your ABN in minutes. No lock-in.',
  },
  pain: {
    h2:  'Why Concreters Choose Zeller Over Generic Terminals',
    sub: 'Standard terminals need site WiFi or building power. Zeller runs on its own Optus SIM — it works on bare concrete slabs, rural pours, and acreage properties before any infrastructure exists.',
  },
  campaigns: {
    heroPrimary: 'concreters-google',
    bestPick:    'concreters-google',
    final:       'concreters-google-final',
  },
}

export default function ConcretersLandingPageGoogle() {
  return <ConcretersLPBase config={GOOGLE_CONFIG} />
}
