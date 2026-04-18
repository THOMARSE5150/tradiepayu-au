import { Link } from 'react-router-dom'
import {
  Banknote,
  Smartphone,
  CreditCard,
  AlertTriangle,
  TrendingUp,
  Wrench,
  ArrowRight,
} from 'lucide-react'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'

const SITE = 'https://tradiepayau.directory'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'How Tradies Get Paid' },
]

const PAGE_TITLE = 'How Tradies Actually Get Paid in Australia (And Where It Goes Wrong)'
const PAGE_DESCRIPTION = 'How Australian tradies actually get paid — cash, PayID, EFTPOS — and the exact point each setup quietly breaks as jobs scale.'

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    inLanguage: 'en-AU',
    headline: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE}/how-tradies-get-paid`,
    datePublished: '2026-04-18',
    dateModified: '2026-04-18',
    author: { '@type': 'Organization', name: 'TradiePay AU Editorial Team', url: `${SITE}/about` },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/how-tradies-get-paid` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'How Tradies Get Paid', item: `${SITE}/how-tradies-get-paid` },
    ],
  },
]

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-6">
      <div className="text-[11px] font-bold uppercase tracking-widest text-brand-blue mb-2">
        {eyebrow}
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark leading-tight">
        {title}
      </h2>
    </div>
  )
}

function Prose({ children }) {
  return (
    <div className="space-y-4 text-[15px] sm:text-base text-slate-700 leading-relaxed">
      {children}
    </div>
  )
}

function Bullets({ items, muted = false }) {
  return (
    <ul className={`space-y-2 text-[15px] sm:text-base ${muted ? 'text-slate-600' : 'text-slate-700'}`}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-blue/70 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Insight({ children }) {
  return (
    <blockquote className="border-l-4 border-brand-blue pl-5 sm:pl-6 py-1">
      <p className="text-lg sm:text-xl font-semibold text-brand-dark leading-snug">
        {children}
      </p>
    </blockquote>
  )
}

function PaymentCard({ icon: Icon, title, tagline, likeLabel, likes, breakLabel, breaks, footnote }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
          <Icon size={18} className="text-brand-blue" />
        </div>
        <div className="min-w-0">
          <h3 className="font-bold text-brand-dark leading-tight">{title}</h3>
          <p className="text-xs text-slate-500 leading-snug">{tagline}</p>
        </div>
      </div>

      <div>
        <p className="text-[11px] font-bold uppercase tracking-widest text-brand-green mb-2">{likeLabel}</p>
        <Bullets items={likes} muted />
      </div>

      <div>
        <p className="text-[11px] font-bold uppercase tracking-widest text-amber-700 mb-2">{breakLabel}</p>
        <Bullets items={breaks} muted />
      </div>

      {footnote && (
        <p className="text-sm text-slate-600 italic border-t border-slate-100 pt-3">
          {footnote}
        </p>
      )}
    </div>
  )
}

function ScaleStep({ jobs, label, tone }) {
  const toneMap = {
    ok:   'bg-green-50  border-green-200  text-green-800',
    warn: 'bg-amber-50  border-amber-200  text-amber-800',
    bad:  'bg-red-50    border-red-200    text-red-800',
  }
  return (
    <div className={`border rounded-2xl p-5 text-center ${toneMap[tone]}`}>
      <div className="text-3xl sm:text-4xl font-bold leading-none">{jobs}</div>
      <div className="text-[11px] font-bold uppercase tracking-widest mt-2 opacity-80">jobs / week</div>
      <div className="text-sm mt-3 font-semibold leading-snug">{label}</div>
    </div>
  )
}

export default function HowTradiesGetPaid() {
  return (
    <>
      <Meta
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        canonical="/how-tradies-get-paid"
        ogType="article"
        jsonLd={jsonLd}
      />

      {/* ─────────── HERO ─────────── */}
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-slate-900" />
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-brand-blue/10 blur-3xl" />
          <div className="absolute -left-16 bottom-0 w-64 h-64 rounded-full bg-brand-blue/5 blur-3xl" />
        </div>
        <div className="container-page relative z-10 max-w-3xl">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-brand-blue/20 text-brand-blue/90 rounded text-[11px] font-bold tracking-widest uppercase">
              Deep dive
            </span>
            <span className="text-white/40">·</span>
            <span className="uppercase tracking-widest text-[11px] font-semibold text-white/60">Payment behaviour</span>
            <span className="text-white/40">·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-[1.1] mt-3 tracking-tight">
            How Tradies Actually Get Paid in Australia
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-brand-blue/90 mt-2 leading-tight">
            (And Where It Goes Wrong)
          </p>
          <p className="hero-sub">
            Cash, PayID, tap-and-go. The real reasons each one works — and the exact point each one quietly stops working.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-md">
            <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-center">
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">Works at</div>
              <div className="text-xl sm:text-2xl font-bold text-white mt-1">5 jobs</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-center">
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">Breaks at</div>
              <div className="text-xl sm:text-2xl font-bold text-amber-300 mt-1">30+</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-center">
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">Fails at</div>
              <div className="text-xl sm:text-2xl font-bold text-red-300 mt-1">100+</div>
            </div>
          </div>
        </div>
      </header>

      {/* ─────────── SECTION 1 · THE REALITY ─────────── */}
      <section className="section container-page">
        <div className="max-w-2xl">
          <SectionHeading eyebrow="Section 01" title="The reality (not the theory)" />
          <Prose>
            <p className="text-lg sm:text-xl font-semibold text-brand-dark leading-snug">
              Most tradies don’t “choose a payment system.” They just use whatever works in the moment.
            </p>
            <p>At the end of a job, the goal is simple:</p>
            <Bullets items={['get paid', 'move on', 'don’t waste time']} />
            <p>That usually means one of three things:</p>
            <Bullets items={['cash', 'PayID / bank transfer', 'tap on a card terminal']} />
            <p>Very few tradies sit down and compare systems properly. Not because they don’t care — but because they don’t have time.</p>
          </Prose>
        </div>
      </section>

      {/* ─────────── SECTION 2 · WHAT TRADIES CARE ABOUT ─────────── */}
      <section className="section section-alt">
        <div className="container-page max-w-2xl">
          <SectionHeading eyebrow="Section 02" title="What tradies actually care about" />
          <Prose>
            <p>Forget marketing claims. In the real world, tradies care about:</p>
          </Prose>
          <ol className="mt-5 space-y-3">
            {[
              'Will it work on-site?',
              'Will the payment go through first time?',
              'How fast do I get the money?',
              'Is this going to create problems later?',
            ].map((q, i) => (
              <li key={i} className="flex gap-4 bg-white border border-slate-200 rounded-xl px-4 py-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
                <span className="text-[15px] sm:text-base text-slate-800 font-semibold leading-snug self-center">{q}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <Prose>
              <p>Everything else is secondary. That’s why decisions are often:</p>
              <Bullets items={[
                'based on habit',
                'based on what other tradies use',
                'or based on what was easiest to set up at the time',
              ]} />
            </Prose>
          </div>
        </div>
      </section>

      {/* ─────────── SECTION 3 · COMMON PAYMENT SETUPS ─────────── */}
      <section className="section container-page">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <SectionHeading eyebrow="Section 03" title="The common payment setups" />
            <Prose>
              <p>Three systems do almost all the work. Each one has a clear sweet spot — and a clear point where it quietly stops working.</p>
            </Prose>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            <PaymentCard
              icon={Banknote}
              title="1. Cash"
              tagline="Still used, especially for smaller jobs."
              likeLabel="Why tradies like it"
              likes={['instant', 'simple', 'no fees']}
              breakLabel="Where it breaks"
              breaks={[
                'tracking becomes messy',
                'banking takes time',
                'doesn’t help with loans or financial visibility',
                'easy to lose control at scale',
              ]}
            />
            <PaymentCard
              icon={Smartphone}
              title="2. PayID / Bank Transfer"
              tagline="Very common — especially for mid-sized jobs."
              likeLabel="Why tradies use it"
              likes={['no fees', 'fast (usually)', 'easy to ask for']}
              breakLabel="Where it breaks (this is the big one)"
              breaks={[
                'manually matching payments',
                'checking bank feeds',
                'wasting admin time',
              ]}
              footnote="At that point, “free” isn’t actually free."
            />
            <PaymentCard
              icon={CreditCard}
              title="3. EFTPOS / Tap Payments"
              tagline="Used more as jobs get bigger or more frequent."
              likeLabel="Why tradies move to it"
              likes={[
                'immediate confirmation',
                'clean records',
                'no chasing payments',
              ]}
              breakLabel="Where it wins"
              breaks={[
                'speed + structure',
                'no ambiguity',
                'easier accounting',
                'scalable',
              ]}
            />
          </div>

          <div className="max-w-2xl mt-10 space-y-4">
            <h3 className="text-base font-semibold text-brand-dark">Why PayID breaks at volume</h3>
            <Prose>
              <p>When volume increases. If you’re doing:</p>
              <Bullets items={[
                '5 jobs → fine',
                '10 jobs → manageable',
                '50+ jobs → it starts to break',
              ]} />
              <p>Why? Because customers don’t label payments properly:</p>
              <Bullets items={['“thanks”', '“cheers”', 'no reference at all']} />
              <p>Now you’re manually matching payments, checking bank feeds, and wasting admin time.</p>
            </Prose>
          </div>
        </div>
      </section>

      {/* ─────────── SECTION 4 · THE MISTAKE ─────────── */}
      <section className="section section-alt">
        <div className="container-page max-w-2xl">
          <SectionHeading eyebrow="Section 04" title="The mistake most tradies make" />

          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={18} className="text-amber-600" />
              </div>
              <div>
                <Insight>They optimise for the moment, not the system.</Insight>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Prose>
              <p>Example:</p>
              <p className="italic text-brand-dark">“No fees sounds better than 1.4%”</p>
              <p>But that ignores:</p>
              <Bullets items={[
                'time spent chasing payments',
                'admin overhead',
                'cash flow delays',
                'mental load',
              ]} />
            </Prose>
          </div>

          <div className="mt-8 bg-brand-dark text-white rounded-2xl p-5 sm:p-6">
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-blue/90 mb-2">The real cost</p>
            <p className="text-lg sm:text-xl font-semibold leading-snug">
              Friction, time, and reliability — not the headline fee.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── SECTION 5 · THE SCALING PROBLEM ─────────── */}
      <section className="section container-page">
        <div className="max-w-2xl">
          <SectionHeading eyebrow="Section 05" title="The scaling problem" />
          <Prose>
            <p>What works at one volume breaks at another. The transition is almost always invisible until it hurts.</p>
          </Prose>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 max-w-3xl">
          <ScaleStep jobs="5"   label="What works at"        tone="ok" />
          <ScaleStep jobs="30+" label="Breaks at"            tone="warn" />
          <ScaleStep jobs="100+" label="And completely fails at" tone="bad" />
        </div>

        <div className="max-w-2xl mt-8">
          <Prose>
            <p>That’s where systems matter. Because at scale:</p>
            <Bullets items={[
              'time = money',
              'mistakes = lost revenue',
              'delays = stress',
            ]} />
          </Prose>

          <div className="mt-6">
            <Insight>What works at 5 jobs breaks at 50+.</Insight>
          </div>
        </div>
      </section>

      {/* ─────────── SECTION 6 · WHAT ACTUALLY WORKS ─────────── */}
      <section className="section section-alt">
        <div className="container-page max-w-2xl">
          <SectionHeading eyebrow="Section 06" title="What actually works" />
          <Prose>
            <p>The best setups usually combine:</p>
          </Prose>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
            {[
              { title: 'On-site payments', body: 'tap' },
              { title: 'Payment links',    body: 'for remote jobs' },
              { title: 'Invoices',         body: 'when needed' },
            ].map((item, i) => (
              <div key={i} className="lg-light rounded-2xl p-4">
                <p className="font-bold text-brand-dark">{item.title}</p>
                <p className="text-sm text-slate-600 mt-1">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Prose>
              <p>Not one tool for everything. But a system that matches:</p>
              <Bullets items={[
                'how the tradie works',
                'how the jobs are done',
                'how customers actually pay',
              ]} />
            </Prose>
          </div>
        </div>
      </section>

      {/* ─────────── SECTION 7 · WHERE TRADIEPAY FITS ─────────── */}
      <section className="section container-page">
        <div className="max-w-2xl">
          <SectionHeading eyebrow="Section 07" title="Where TradiePay AU fits" />
          <div className="bg-gradient-to-br from-brand-dark via-brand-dark/95 to-slate-900 text-white rounded-2xl p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                <Wrench size={18} className="text-brand-blue" />
              </div>
              <div className="space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-widest text-brand-blue/90">Our job</p>
                <p className="text-lg sm:text-xl font-semibold leading-snug">
                  TradiePay AU exists to fix one problem: most tradies are using payment systems that don’t match how they actually work.
                </p>
                <p className="text-sm text-white/70">The goal is simple:</p>
                <ul className="space-y-2 text-sm sm:text-base text-white/90">
                  {[
                    'show real costs (not just headline rates)',
                    'match providers to trade types',
                    'remove the guesswork',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── SECTION 8 · PRACTICAL TAKEAWAY ─────────── */}
      <section className="section section-alt">
        <div className="container-page max-w-2xl">
          <SectionHeading eyebrow="Section 08" title="Practical takeaway" />
          <Prose>
            <p>If you’re a tradie, ask yourself:</p>
          </Prose>
          <ol className="mt-5 space-y-3">
            {[
              'Am I wasting time matching payments?',
              'Do I know when money is actually landing?',
              'Is my system helping me — or just “working”?',
            ].map((q, i) => (
              <li key={i} className="flex gap-4 bg-white border border-slate-200 rounded-xl px-4 py-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
                <span className="text-[15px] sm:text-base text-slate-800 font-semibold leading-snug self-center">{q}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <Insight>“Working” and “working well” are not the same thing.</Insight>
          </div>
        </div>
      </section>

      {/* ─────────── FINAL CTA ─────────── */}
      <section className="section container-page">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-brand-blue/5 via-white to-brand-blue/10 border border-brand-blue/20 rounded-3xl p-6 sm:p-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-[11px] font-bold uppercase tracking-widest">
            <TrendingUp size={12} />
            Run the numbers
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mt-4 leading-tight">
            See how different setups actually compare — based on your numbers.
          </h2>
          <p className="text-slate-600 mt-3 max-w-xl mx-auto">
            Use the calculator and run your own scenario. It takes about thirty seconds.
          </p>
          <div className="mt-6">
            <Link to="/calculator" className="btn-primary">
              Use the calculator <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
