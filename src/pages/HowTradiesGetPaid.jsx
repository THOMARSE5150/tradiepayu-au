import { Link } from 'react-router-dom'
import { Banknote, Smartphone, CreditCard, ArrowRight } from 'lucide-react'
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

function Bullets({ items }) {
  return (
    <ul className="space-y-2 text-slate-600 leading-relaxed">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-blue/60 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Insight({ children }) {
  return (
    <p className="text-lg font-semibold text-brand-dark leading-snug border-l-2 border-brand-blue pl-5">
      {children}
    </p>
  )
}

function NumberedList({ items }) {
  return (
    <ol className="space-y-4">
      {items.map((q, i) => (
        <li key={i} className="flex gap-4">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center mt-0.5">
            {i + 1}
          </span>
          <span className="text-slate-700 leading-relaxed self-center">{q}</span>
        </li>
      ))}
    </ol>
  )
}

function PaymentCard({ icon: Icon, title, tagline, likeLabel, likes, breakLabel, breaks, footnote }) {
  return (
    <div className="lg-light rounded-2xl p-5 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
          <Icon size={15} className="text-brand-blue" />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-brand-dark text-sm">{title}</h3>
          <p className="text-xs text-slate-500 leading-snug">{tagline}</p>
        </div>
      </div>

      <div>
        <p className="text-[11px] font-bold uppercase tracking-widest text-brand-blue mb-2">{likeLabel}</p>
        <Bullets items={likes} />
      </div>

      <div>
        <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">{breakLabel}</p>
        <Bullets items={breaks} />
      </div>

      {footnote && (
        <p className="text-sm text-slate-500 italic border-t border-slate-200/70 pt-3">
          {footnote}
        </p>
      )}
    </div>
  )
}

function ScaleStep({ jobs, label, tone }) {
  const dotMap = {
    ok:   'bg-green-500',
    warn: 'bg-amber-500',
    bad:  'bg-red-500',
  }
  return (
    <div className="lg-light rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className={`w-2 h-2 rounded-full ${dotMap[tone]}`} />
        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">{label}</span>
      </div>
      <div className="text-2xl font-bold text-brand-dark leading-none">{jobs}</div>
      <div className="text-xs text-slate-500 mt-1">jobs / week</div>
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

      {/* ── HERO ─────────────────────────────────────────────── */}
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-slate-900 pointer-events-none" />
        <div className="container-page relative z-10 max-w-3xl">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Deep dive</span>
            <span className="text-white/30">·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            How Tradies Actually Get Paid in Australia <span className="text-brand-blue/90">(And Where It Goes Wrong)</span>
          </h1>
          <p className="hero-sub">
            Cash, PayID, tap-and-go. The real reasons each one works — and the exact point each one quietly stops working.
          </p>
        </div>
      </header>

      {/* ── 1. THE REALITY ───────────────────────────────────── */}
      <section className="section container-page">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 leading-tight">The reality (not the theory)</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p className="text-lg font-semibold text-brand-dark leading-snug">
              Most tradies don’t “choose a payment system.” They just use whatever works in the moment.
            </p>
            <p>At the end of a job, the goal is simple:</p>
            <Bullets items={['get paid', 'move on', 'don’t waste time']} />
            <p>That usually means one of three things:</p>
            <Bullets items={['cash', 'PayID / bank transfer', 'tap on a card terminal']} />
            <p>Very few tradies sit down and compare systems properly. Not because they don’t care — but because they don’t have time.</p>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT TRADIES CARE ABOUT ───────────────────────── */}
      <section className="section section-alt">
        <div className="container-page max-w-2xl">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 leading-tight">What tradies actually care about</h2>
          <p className="text-slate-600 leading-relaxed mb-5">Forget marketing claims. In the real world, tradies care about:</p>
          <NumberedList items={[
            'Will it work on-site?',
            'Will the payment go through first time?',
            'How fast do I get the money?',
            'Is this going to create problems later?',
          ]} />
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>Everything else is secondary. That’s why decisions are often:</p>
            <Bullets items={[
              'based on habit',
              'based on what other tradies use',
              'or based on what was easiest to set up at the time',
            ]} />
          </div>
        </div>
      </section>

      {/* ── 3. COMMON PAYMENT SETUPS ─────────────────────────── */}
      <section className="section container-page">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 leading-tight">The common payment setups</h2>
          <p className="text-slate-600 leading-relaxed">
            Three systems do almost all the work. Each one has a clear sweet spot — and a clear point where it quietly stops working.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
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

        <div className="max-w-2xl mt-10 space-y-4 text-slate-600 leading-relaxed">
          <h3 className="font-semibold text-brand-dark">Why PayID breaks at volume</h3>
          <p>When volume increases. If you’re doing:</p>
          <Bullets items={[
            '5 jobs → fine',
            '10 jobs → manageable',
            '50+ jobs → it starts to break',
          ]} />
          <p>Why? Because customers don’t label payments properly:</p>
          <Bullets items={['“thanks”', '“cheers”', 'no reference at all']} />
          <p>Now you’re manually matching payments, checking bank feeds, and wasting admin time.</p>
        </div>
      </section>

      {/* ── 4. THE MISTAKE ───────────────────────────────────── */}
      <section className="section section-alt">
        <div className="container-page max-w-2xl">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 leading-tight">The mistake most tradies make</h2>

          <Insight>They optimise for the moment, not the system.</Insight>

          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>Example:</p>
            <p className="italic text-brand-dark">“No fees sounds better than 1.4%”</p>
            <p>But that ignores:</p>
            <Bullets items={[
              'time spent chasing payments',
              'admin overhead',
              'cash flow delays',
              'mental load',
            ]} />
          </div>

          <div className="mt-8 bg-brand-dark rounded-2xl px-5 py-5 sm:px-6 sm:py-6">
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-blue/90 mb-2">The real cost</p>
            <p className="text-base sm:text-lg font-semibold text-white leading-snug">
              Friction, time, and reliability — not the headline fee.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. THE SCALING PROBLEM ───────────────────────────── */}
      <section className="section container-page">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 leading-tight">The scaling problem</h2>
          <p className="text-slate-600 leading-relaxed">
            What works at one volume breaks at another. The transition is almost always invisible until it hurts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 max-w-3xl">
          <ScaleStep jobs="5"    label="What works at"             tone="ok" />
          <ScaleStep jobs="30+"  label="Breaks at"                 tone="warn" />
          <ScaleStep jobs="100+" label="And completely fails at"   tone="bad" />
        </div>

        <div className="max-w-2xl mt-8 space-y-4 text-slate-600 leading-relaxed">
          <p>That’s where systems matter. Because at scale:</p>
          <Bullets items={[
            'time = money',
            'mistakes = lost revenue',
            'delays = stress',
          ]} />
        </div>

        <div className="max-w-2xl mt-6">
          <Insight>What works at 5 jobs breaks at 50+.</Insight>
        </div>
      </section>

      {/* ── 6. WHAT ACTUALLY WORKS ───────────────────────────── */}
      <section className="section section-alt">
        <div className="container-page max-w-2xl">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 leading-tight">What actually works</h2>
          <p className="text-slate-600 leading-relaxed mb-5">The best setups usually combine:</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { title: 'On-site payments', body: 'tap' },
              { title: 'Payment links',    body: 'for remote jobs' },
              { title: 'Invoices',         body: 'when needed' },
            ].map((item, i) => (
              <div key={i} className="lg-light rounded-2xl p-4">
                <p className="font-semibold text-brand-dark text-sm">{item.title}</p>
                <p className="text-sm text-slate-500 mt-1">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>Not one tool for everything. But a system that matches:</p>
            <Bullets items={[
              'how the tradie works',
              'how the jobs are done',
              'how customers actually pay',
            ]} />
          </div>
        </div>
      </section>

      {/* ── 7. WHERE TRADIEPAY FITS ──────────────────────────── */}
      <section className="section container-page">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 leading-tight">Where TradiePay AU fits</h2>
          <div className="bg-brand-dark rounded-2xl px-6 py-8 sm:px-8 sm:py-10">
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-blue/90 mb-3">Our job</p>
            <p className="text-lg font-semibold text-white leading-snug">
              TradiePay AU exists to fix one problem: most tradies are using payment systems that don’t match how they actually work.
            </p>
            <p className="text-sm text-white/60 mt-5 mb-3">The goal is simple:</p>
            <ul className="space-y-2 text-sm text-white/85 leading-relaxed">
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
      </section>

      {/* ── 8. PRACTICAL TAKEAWAY ────────────────────────────── */}
      <section className="section section-alt">
        <div className="container-page max-w-2xl">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 leading-tight">Practical takeaway</h2>
          <p className="text-slate-600 leading-relaxed mb-5">If you’re a tradie, ask yourself:</p>
          <NumberedList items={[
            'Am I wasting time matching payments?',
            'Do I know when money is actually landing?',
            'Is my system helping me — or just “working”?',
          ]} />
          <div className="mt-8">
            <Insight>“Working” and “working well” are not the same thing.</Insight>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="section container-page">
        <div className="max-w-2xl mx-auto bg-brand-dark rounded-3xl px-6 py-10 sm:px-10 sm:py-12 text-center">
          <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            Run the numbers
          </p>
          <h2 className="text-2xl font-bold text-white mb-3 leading-tight">
            See how different setups actually compare — based on your numbers.
          </h2>
          <p className="text-white/55 text-sm mb-7 max-w-sm mx-auto leading-relaxed">
            Use the calculator and run your own scenario. It takes about thirty seconds.
          </p>
          <Link
            to="/calculator"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-bold rounded-2xl text-base hover:bg-blue-600 transition-colors shadow-[0_8px_28px_rgba(0,106,255,0.45)]"
          >
            Use the calculator <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
