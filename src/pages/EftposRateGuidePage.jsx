import { Link } from 'react-router-dom'
import { Check, AlertCircle, ArrowRight } from 'lucide-react'
import Meta from '../components/Meta'
import AffiliateButton from '../components/AffiliateButton'
import { SITE_URL } from '../constants/brand'

// ── Provider data — authoritative source: providers.json ─────────────────────
//
// Rates current April 2026. Verify with providers before signing up.
// Tyro and Shift4 are quote-based; their rows reflect published minimums only.

const PROVIDERS = [
  {
    id:         'zeller',
    name:       'Zeller',
    rate:       '1.4%',
    remote:     '1.7% + 25¢',
    hardware:   '$99 (Terminal 1)',
    sim:        'Optional — $15/mo (Optus)',
    monthly:    '$0',
    verdict:    'Best for most tradies',
    verdictSub: 'Lowest published flat rate. Own SIM — works off-site without customer WiFi.',
    recommended: true,
  },
  {
    id:         'square',
    name:       'Square',
    rate:       '1.6%',
    remote:     '2.2%',
    hardware:   '$329 (Terminal)',
    sim:        'No — WiFi / hotspot only',
    monthly:    '$0',
    verdict:    'Best backup terminal',
    verdictSub: 'Higher rate but offline mode accepts cards with zero connectivity.',
    recommended: false,
  },
  {
    id:         'stripe',
    name:       'Stripe',
    rate:       '1.7% + 10¢',
    remote:     '1.7% + 30¢',
    hardware:   '$89 (BBPOS WisePad 3)',
    sim:        'Optional — $15/mo',
    monthly:    '$0',
    verdict:    'Budget hardware',
    verdictSub: 'Phone-paired reader. Cheapest upfront. Rate is higher per tap at low volume.',
    recommended: false,
  },
  {
    id:         'tyro',
    name:       'Tyro',
    rate:       'Quote — not published',
    remote:     '1.4% (payment links)',
    hardware:   'Quote — not published',
    sim:        'Yes — included',
    monthly:    'Quote — not published',
    verdict:    'Quote-based — skip unless you need integrated POS',
    verdictSub: 'No published flat rate. Payment links are 1.4% but hardware/MSF requires a quote.',
    recommended: false,
  },
  {
    id:         'shift4',
    name:       'Shift4',
    rate:       'Surcharging — customer pays',
    remote:     'Quote — not published',
    hardware:   'Rental — no upfront cost',
    sim:        'Yes — built-in',
    monthly:    'Quote — not published',
    verdict:    'Surcharging model',
    verdictSub: 'You pay nothing per tap — but your customer pays a surcharge. Not suitable for all trades.',
    recommended: false,
  },
]

const SCENARIOS = [
  {
    title:   'Emergency callouts — dead zones, no WiFi',
    detail:  'After-hours jobs where the building has no WiFi and your phone has no signal.',
    pick:    'Zeller Terminal 1 + SIM ($99 + $15/mo)',
    why:     'Built-in Optus SIM — takes payment independently of the building or customer network.',
  },
  {
    title:   'Residential — customer WiFi usually available',
    detail:  'Domestic work where the customer has home WiFi you can connect to.',
    pick:    'Zeller Terminal 1, no SIM plan',
    why:     '1.4% rate, $0/mo. Connect to customer WiFi. Skip the SIM plan and save $15/mo.',
  },
  {
    title:   'True dead zones — underground, no signal at all',
    detail:  'Underground carparks, basement switchrooms, lift shafts — zero signal.',
    pick:    'Square Terminal ($329)',
    why:     'Offline mode accepts card details and processes when connectivity returns. Higher rate (1.6%) but the only terminal with genuine offline payment.',
  },
  {
    title:   'Remote billing — property managers, invoice clients',
    detail:  'Clients who can\'t pay on-site — property management accounts teams, commercial accounts.',
    pick:    'Zeller Payment Link (free)',
    why:     '1.4% rate — same as in-person. Send a link via SMS or email. Client pays remotely; settlement is same-day.',
  },
  {
    title:   'Deposits before a big job',
    detail:  'Requiring a deposit at quote acceptance to cover materials or mobilisation costs.',
    pick:    'Zeller Payment Link (free)',
    why:     'Send at quote acceptance. Client pays before you start. No hardware required.',
  },
  {
    title:   'Phone-paired setup, no dedicated terminal',
    detail:  'Light use, residential only, prefer not to carry a separate terminal.',
    pick:    'Stripe BBPOS WisePad 3 ($89)',
    why:     'Cheapest hardware upfront. Pairs with phone via Bluetooth. Rate is 1.7% + 10¢ per tap — works out cheaper than Square at low volume per job.',
  },
]

const WATCHFOR = [
  {
    heading: 'Your card mix affects the real rate',
    body:    'All flat rates quoted here apply to standard domestic cards. International cards and premium cards (e.g. Amex, some Visa Signature) attract a surcharge. Check each provider\'s published international card rate before signing up.',
  },
  {
    heading: 'Surcharging rules apply in Australia',
    body:    'If you pass EFTPOS fees to your customer, the RBA\'s surcharging rules apply. You can only surcharge up to your actual cost — not a flat percentage above it. Seek advice before enabling surcharging in your pricing.',
  },
  {
    heading: 'SIM coverage in your work areas',
    body:    'Zeller\'s SIM runs on the Optus network. If you regularly work in areas with poor Optus coverage, check the coverage map before relying on it. Most metro and suburban areas are fine.',
  },
  {
    heading: 'Settlement speed and bank compatibility',
    body:    'Zeller settles same-day to a Zeller AUD account (not a bank account). You transfer to your bank separately. Square and Stripe also offer next-day or same-day settlement — confirm the schedule for your account before relying on timing.',
  },
  {
    heading: 'Tyro and Shift4 require a quote',
    body:    'Neither Tyro nor Shift4 publish a standard flat rate for most tradies. If you need integrated POS or prefer a surcharging model, get written rates from both before comparing.',
  },
]

const canonical = '/eftpos-rate-guide'

export default function EftposRateGuidePage() {
  return (
    <>
      <Meta
        title="Australian Tradie EFTPOS Rate Guide 2026 — Zeller vs Square vs Stripe vs Tyro"
        description="Compare EFTPOS rates, fees, and hardware for Australian tradies. Zeller, Square, Stripe, Tyro, and Shift4 — honest side-by-side with best picks by scenario. Updated April 2026."
        canonical={canonical}
      />

      {/* ── HEADER ──────────────────────────────────────────── */}
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/98 via-brand-dark/90 to-slate-900/85 pointer-events-none" />
        <div className="container-page relative z-10">
          <p className="text-xs font-semibold text-brand-blue/80 uppercase tracking-widest mb-3">
            Australian Tradies · EFTPOS Guide 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.15] max-w-2xl">
            Australian Tradie EFTPOS Rate Guide 2026
          </h1>
          <p className="hero-sub max-w-xl">
            Zeller, Square, Stripe, Tyro, and Shift4 — honest comparison of rates, fees, hardware, and connectivity for tradies who take card payments on-site.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5">
            {['Rates current April 2026', 'AU-only framing', 'No invented pricing', 'Referral links disclosed'].map(t => (
              <span key={t} className="flex items-center gap-1.5 text-sm text-white/70">
                <Check size={14} className="text-green-400 flex-shrink-0" strokeWidth={2.75} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ── 1. WHAT THIS COVERS ─────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-page max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-widest text-brand-blue mb-3">What this guide covers</p>
          <p className="text-slate-600 text-sm leading-relaxed">
            This guide compares the five EFTPOS providers most commonly used by Australian tradies — Zeller, Square, Stripe, Tyro, and Shift4.
            For each provider we cover the in-person transaction rate, remote payment rate, hardware cost, SIM connectivity, and monthly fees.
            We then map the best option to six common job scenarios.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            All rates are sourced directly from each provider's published pricing. Where a provider does not publish a flat rate, we say so clearly.
            Some links on this page are referral links — this does not affect our recommendations.
          </p>
        </div>
      </section>

      {/* ── 2. QUICK VERDICTS ───────────────────────────────── */}
      <section className="section-alt py-10 sm:py-14">
        <div className="container-page">
          <p className="text-[11px] font-bold uppercase tracking-widest text-brand-blue mb-1">Quick verdicts</p>
          <h2 className="text-xl font-bold text-brand-dark mb-6">One-line summary for each provider</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
            {PROVIDERS.map(p => (
              <div
                key={p.id}
                className={`bg-white rounded-2xl border p-4 ${p.recommended ? 'border-brand-blue/30 bg-blue-50/30' : 'border-slate-100'}`}
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <p className="text-sm font-bold text-brand-dark">{p.name}</p>
                  {p.recommended && (
                    <span className="flex-shrink-0 px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded text-[10px] font-bold">Top pick</span>
                  )}
                </div>
                <p className="text-xs font-semibold text-brand-blue mb-1">{p.verdict}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{p.verdictSub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. COMPARISON TABLE ─────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-page">
          <p className="text-[11px] font-bold uppercase tracking-widest text-brand-blue mb-1">Provider comparison snapshot</p>
          <h2 className="text-xl font-bold text-brand-dark mb-5">All 5 providers side by side</h2>

          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="w-full text-sm min-w-[620px]">
              <thead>
                <tr className="border-b border-slate-200">
                  {['Provider', 'In-person rate', 'Remote / link', 'Hardware', 'SIM', 'Monthly fee'].map(h => (
                    <th key={h} className="text-left text-[10px] font-bold uppercase tracking-wider text-slate-400 pb-3 pr-4 first:pl-0 whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {PROVIDERS.map(p => (
                  <tr key={p.id} className={p.recommended ? 'bg-blue-50/40' : ''}>
                    <td className="py-3.5 pr-4 font-semibold text-brand-dark leading-snug whitespace-nowrap">
                      {p.name}
                      {p.recommended && (
                        <span className="ml-2 inline-block px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded text-[10px] font-bold align-middle">
                          Top pick
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 pr-4 font-mono text-sm text-slate-700 whitespace-nowrap">{p.rate}</td>
                    <td className="py-3.5 pr-4 font-mono text-sm text-slate-700 whitespace-nowrap">{p.remote}</td>
                    <td className="py-3.5 pr-4 text-slate-600 text-xs">{p.hardware}</td>
                    <td className="py-3.5 pr-4 text-slate-600 text-xs">{p.sim}</td>
                    <td className="py-3.5 text-slate-600 text-xs font-mono">{p.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-4 flex items-start gap-1.5">
            <AlertCircle size={12} className="flex-shrink-0 mt-0.5" />
            Rates current April 2026. Tyro and Shift4 in-person rates are quote-based — contact each provider for your rate. Verify all rates with providers before signing up.
          </p>
        </div>
      </section>

      {/* ── 4. BEST PICK BY SCENARIO ────────────────────────── */}
      <section className="section-alt py-10 sm:py-14">
        <div className="container-page">
          <p className="text-[11px] font-bold uppercase tracking-widest text-brand-blue mb-1">Best pick by scenario</p>
          <h2 className="text-xl font-bold text-brand-dark mb-6">What to use and why, by job type</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            {SCENARIOS.map(s => (
              <div key={s.title} className="bg-white rounded-2xl border border-slate-100 p-5">
                <p className="text-sm font-bold text-brand-dark mb-1 leading-snug">{s.title}</p>
                <p className="text-xs text-slate-400 mb-3 leading-snug">{s.detail}</p>
                <div className="flex items-start gap-2">
                  <Check size={13} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-brand-dark">{s.pick}</p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{s.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHAT TO CHECK ────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-page max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-widest text-brand-blue mb-1">What to check before signing up</p>
          <h2 className="text-xl font-bold text-brand-dark mb-6">Five things worth verifying</h2>
          <div className="space-y-5">
            {WATCHFOR.map(w => (
              <div key={w.heading}>
                <p className="text-sm font-bold text-brand-dark mb-1">{w.heading}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. DISCLAIMER ───────────────────────────────────── */}
      <section className="section-alt py-8">
        <div className="container-page max-w-2xl">
          <div className="bg-white border border-slate-200 rounded-2xl px-5 py-4 flex gap-3">
            <AlertCircle size={15} className="text-slate-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-500 leading-relaxed">
              <strong className="text-slate-600">Disclaimer:</strong>{' '}
              Rates are sourced from each provider's published pricing and are current as of April 2026.
              Always verify current rates directly with the provider before signing up.
              Some links on this page are referral links — we may earn a referral fee if you sign up via a link. This does not affect our recommendations.
              This guide does not constitute financial advice.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA ────────────────────────────────────── */}
      <section className="section">
        <div className="container-page max-w-2xl">
          <div className="bg-brand-dark rounded-3xl px-6 py-10 sm:px-10 sm:py-12 text-center">
            <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
              Recommended for most Australian tradies
            </p>
            <h2 className="text-2xl font-bold text-white mb-3 leading-tight">
              Zeller Terminal 1 + SIM — 1.4% flat rate
            </h2>
            <p className="text-white/55 text-sm mb-7 max-w-sm mx-auto leading-relaxed">
              Lowest published rate. Own Optus SIM — works anywhere.
              $0 monthly fee. Same-day AUD settlement. ABN approval online.
            </p>
            <AffiliateButton
              providerId="zeller"
              label="final-cta"
              campaign="rate-guide"
              intent="signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-bold rounded-2xl text-base hover:bg-blue-600 transition-colors shadow-[0_8px_28px_rgba(0,106,255,0.45)]"
            >
              Get Zeller — 1.4% rate →
            </AffiliateButton>
            <p className="mt-3 text-xs text-white/35">No lock-in. Approved online with your Australian ABN.</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/providers" className="text-sm text-brand-blue hover:underline flex items-center gap-1">
              Compare all providers <ArrowRight size={13} />
            </Link>
            <Link to="/calculator" className="text-sm text-brand-blue hover:underline flex items-center gap-1">
              Cost calculator <ArrowRight size={13} />
            </Link>
            <Link to="/compare/zeller-vs-square" className="text-sm text-brand-blue hover:underline flex items-center gap-1">
              Zeller vs Square deep-dive <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
