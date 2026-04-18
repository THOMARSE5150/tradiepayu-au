import { Link } from 'react-router-dom'
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

function Section({ heading, children }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-brand-dark">{heading}</h2>
      <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
        {children}
      </div>
    </section>
  )
}

function Subheading({ children }) {
  return <h3 className="text-base sm:text-lg font-semibold text-brand-dark mt-4">{children}</h3>
}

function Bullets({ items }) {
  return (
    <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-slate-700">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
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

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-slate-900" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Deep dive</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            {PAGE_TITLE}
          </h1>
          <p className="hero-sub">
            Cash, PayID, tap-and-go. The real reasons each one works — and the exact point each one quietly stops working.
          </p>
        </div>
      </header>

      <article className="section container-page max-w-2xl space-y-10">
        <Section heading="Section 1 — The Reality (Not the Theory)">
          <p>Most tradies don’t “choose a payment system.”</p>
          <p>They just use whatever works in the moment.</p>
          <p>At the end of a job, the goal is simple:</p>
          <Bullets items={['get paid', 'move on', 'don’t waste time']} />
          <p>That usually means one of three things:</p>
          <Bullets items={['cash', 'PayID / bank transfer', 'tap on a card terminal']} />
          <p>Very few tradies sit down and compare systems properly.</p>
          <p>Not because they don’t care —<br />but because they don’t have time.</p>
        </Section>

        <Section heading="Section 2 — What Tradies Actually Care About">
          <p>Forget marketing claims.</p>
          <p>In the real world, tradies care about:</p>
          <Bullets items={[
            'Will it work on-site?',
            'Will the payment go through first time?',
            'How fast do I get the money?',
            'Is this going to create problems later?',
          ]} />
          <p>Everything else is secondary.</p>
          <p>That’s why decisions are often:</p>
          <Bullets items={[
            'based on habit',
            'based on what other tradies use',
            'or based on what was easiest to set up at the time',
          ]} />
        </Section>

        <Section heading="Section 3 — The Common Payment Setups">
          <Subheading>1. Cash</Subheading>
          <p>Still used, especially for smaller jobs.</p>
          <p>Why tradies like it:</p>
          <Bullets items={['instant', 'simple', 'no fees']} />
          <p>Where it breaks:</p>
          <Bullets items={[
            'tracking becomes messy',
            'banking takes time',
            'doesn’t help with loans or financial visibility',
            'easy to lose control at scale',
          ]} />

          <Subheading>2. PayID / Bank Transfer</Subheading>
          <p>Very common — especially for mid-sized jobs.</p>
          <p>Why tradies use it:</p>
          <Bullets items={['no fees', 'fast (usually)', 'easy to ask for']} />
          <p>Where it breaks (this is the big one):</p>
          <p>When volume increases.</p>
          <p>If you’re doing:</p>
          <Bullets items={[
            '5 jobs → fine',
            '10 jobs → manageable',
            '50+ jobs → it starts to break',
          ]} />
          <p>Why?</p>
          <p>Because customers don’t label payments properly:</p>
          <Bullets items={['“thanks”', '“cheers”', 'no reference at all']} />
          <p>Now you’re:</p>
          <Bullets items={[
            'manually matching payments',
            'checking bank feeds',
            'wasting admin time',
          ]} />
          <p>At that point, “free” isn’t actually free.</p>

          <Subheading>3. EFTPOS / Tap Payments</Subheading>
          <p>Used more as jobs get bigger or more frequent.</p>
          <p>Why tradies move to it:</p>
          <Bullets items={[
            'immediate confirmation',
            'clean records',
            'no chasing payments',
          ]} />
          <p>Where it wins:</p>
          <Bullets items={[
            'speed + structure',
            'no ambiguity',
            'easier accounting',
            'scalable',
          ]} />
        </Section>

        <Section heading="Section 4 — The Mistake Most Tradies Make">
          <p>They optimise for the moment, not the system.</p>
          <p>Example:</p>
          <p className="italic">“No fees sounds better than 1.4%”</p>
          <p>But that ignores:</p>
          <Bullets items={[
            'time spent chasing payments',
            'admin overhead',
            'cash flow delays',
            'mental load',
          ]} />
          <p>The real cost isn’t just the fee.</p>
          <p>It’s:</p>
          <Bullets items={['friction', 'time', 'and reliability']} />
        </Section>

        <Section heading="Section 5 — The Scaling Problem">
          <p>What works at:</p>
          <Bullets items={['5 jobs per week']} />
          <p>Breaks at:</p>
          <Bullets items={['30+ jobs per week']} />
          <p>And completely fails at:</p>
          <Bullets items={['100+ jobs per week']} />
          <p>That’s where systems matter.</p>
          <p>Because at scale:</p>
          <Bullets items={[
            'time = money',
            'mistakes = lost revenue',
            'delays = stress',
          ]} />
        </Section>

        <Section heading="Section 6 — What Actually Works">
          <p>The best setups usually combine:</p>
          <Bullets items={[
            'on-site payments (tap)',
            'payment links for remote jobs',
            'invoices when needed',
          ]} />
          <p>Not one tool for everything.</p>
          <p>But a system that matches:</p>
          <Bullets items={[
            'how the tradie works',
            'how the jobs are done',
            'how customers actually pay',
          ]} />
        </Section>

        <Section heading="Section 7 — Where TradiePay AU Fits">
          <p>TradiePay AU exists to fix one problem:</p>
          <p>Most tradies are using payment systems that don’t match how they actually work.</p>
          <p>The goal is simple:</p>
          <Bullets items={[
            'show real costs (not just headline rates)',
            'match providers to trade types',
            'remove the guesswork',
          ]} />
        </Section>

        <Section heading="Section 8 — Practical Takeaway">
          <p>If you’re a tradie, ask yourself:</p>
          <Bullets items={[
            'Am I wasting time matching payments?',
            'Do I know when money is actually landing?',
            'Is my system helping me — or just “working”?',
          ]} />
          <p>Because “working” and “working well” are not the same thing.</p>
        </Section>

        <aside className="lg-blue rounded-2xl p-6 mt-4">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            If you want to see how different setups actually compare based on your numbers:
          </p>
          <p className="mt-3">
            <Link
              to="/calculator"
              className="inline-block text-sm sm:text-base font-semibold text-brand-blue hover:underline"
            >
              Use the calculator and run your own scenario →
            </Link>
          </p>
        </aside>
      </article>
    </>
  )
}
