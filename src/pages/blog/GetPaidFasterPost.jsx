import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Meta from '../../components/Meta'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import RelatedLinks from '../../components/RelatedLinks'

import siteMeta from '../../data/site-meta.json'
import { blogHeroUrl, blogOgUrl } from '../../utils/blogImage'

const SITE = 'https://tradiepayau.directory'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'How to Get Paid Faster as a Sole Trader in Australia' },
]

const faqs = [
  {
    q: 'How can I get paid faster as a sole trader in Australia?',
    a: "The single biggest change is switching to same-day settlement EFTPOS and sending payment links at job completion rather than issuing invoices with 14-day terms. Zeller Terminal 1 settles to your bank account the same day — money from a Monday job is accessible Monday evening. Sending a Zeller or Tyro payment link at job completion means the client can pay immediately from their phone. Combining these two steps eliminates the most common gap between doing the work and receiving the money.",
  },
  {
    q: 'What is same-day settlement and which providers offer it?',
    a: "Same-day settlement means card payment revenue reaches your nominated bank account on the same calendar day the transaction is processed (if processed before the daily cutoff, typically 5–7pm). Zeller is the only major tradie EFTPOS provider in Australia offering same-day settlement. Square and Tyro settle next business day; Stripe settles in 2 business days — meaning a Friday payment arrives Monday. Zeller settles same day including Fridays.",
  },
  {
    q: 'Should I use payment links or invoices for sole trader work?',
    a: "Payment links are generally faster than invoices. A payment link sent at job completion gives the client a direct tap-to-pay button in their SMS or email. There are no bank details to copy, no reference numbers to remember — just tap and pay. Traditional invoices with 14 or 30-day terms leave payment entirely in the client's control. For repeat or commercial clients who require formal invoices, Zeller and Square both support payment-embedded invoices where a pay-now button is built into the invoice PDF.",
  },
  {
    q: 'What payment terms should sole traders use?',
    a: "The most effective terms for sole traders doing service work are 'payment due on completion' or 'payment due within 24 hours of completion'. Avoid 14 or 30-day terms for residential customers — they create unnecessary delays and make cash-flow management harder. For commercial clients (construction companies, strata managers, property managers) 14 or 30-day terms may be required, but get this agreed in writing before starting the job. For emergency work, collect payment before you leave.",
  },
  {
    q: 'How do I take payment immediately on a job site?',
    a: "Two options: EFTPOS terminal or payment link. For in-person payment, a Zeller Terminal 1 (with SIM plan) or Square Terminal lets you take tap-and-go payments immediately. For remote or immediate-post-job payment, send a Zeller or Tyro payment link via SMS while still on site. The client receives a link, taps to pay, and you get a notification when the payment is confirmed. Same-day settlement with Zeller means the funds clear that evening.",
  },
  {
    q: 'What is the fastest way for a sole trader to reduce debtor days?',
    a: "The combination that works best: (1) take card payments on site rather than issuing invoices, (2) send payment links for jobs you cannot complete in person, (3) require payment at job completion for residential work, (4) use Zeller for same-day settlement so you are not waiting until Monday for a Friday payment. Reducing invoice payment terms from 14 days to on-completion can cut your average debtor days from 18-25 days to 1-2 days.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Get Paid Faster as a Sole Trader in Australia',
    description: 'Late payments are the biggest cash-flow problem for Australian sole traders. Here are the practical steps — same-day settlement, payment links, and on-site EFTPOS — that eliminate debtor days.',
    image: {
      '@type': 'ImageObject',
      url: blogOgUrl('how-to-get-paid-faster-sole-trader-australia'),
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/how-to-get-paid-faster-sole-trader-australia`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'How to Get Paid Faster as a Sole Trader in Australia', item: `${SITE}/blog/how-to-get-paid-faster-sole-trader-australia` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
]

const steps = [
  {
    num: '01',
    title: 'Switch to same-day settlement',
    body: "Most payment providers settle funds next business day — or later. That means a Friday job sits outstanding until Monday. Zeller Terminal 1 is the only mainstream tradie EFTPOS with same-day settlement, including Fridays. The money from a job completed Monday evening is in your account Monday evening. This single change can reduce average debtor days by 1–3 days for sole traders processing most jobs by card.",
    link: { label: 'Zeller same-day settlement — full review', href: '/providers/zeller' },
  },
  {
    num: '02',
    title: 'Send payment links at job completion — not invoices with terms',
    body: "A Zeller or Tyro payment link sent via SMS at job completion gives your client a single tap to pay. There are no bank BSB/account details to copy, no reference numbers, and no 14-day countdown. Most clients pay within minutes. An invoice with '14 days' written on it gives the client permission to wait 14 days. For residential service work, there is rarely a legitimate reason to offer 14-day terms.",
    link: { label: 'Payment links explained — Tyro vs Zeller rates', href: '/providers/tyro' },
  },
  {
    num: '03',
    title: 'Take card payment on site for jobs under $5,000',
    body: "For service jobs, maintenance, emergency call-outs, and smaller projects, taking payment on site before you pack up is the fastest way to get paid. A Zeller Terminal 1 with the SIM plan ($15/month) works without customer WiFi. Tap to pay, settlement same day. The client never needs to receive an invoice or be reminded — it is done before you leave the driveway.",
    link: null,
  },
  {
    num: '04',
    title: 'Require payment at completion for residential clients',
    body: "The single biggest change most sole traders can make is updating their payment terms for residential work to 'payment due on completion'. Write it into your quote, confirm it verbally when you start, and collect it when you are done. Most residential clients expect to pay on the day — it is only the absence of a card terminal that leads to invoice-based delays. With an EFTPOS terminal, payment at completion becomes the path of least resistance for both of you.",
    link: null,
  },
  {
    num: '05',
    title: 'Use embedded invoices for commercial clients who require them',
    body: "For strata managers, property managers, and commercial builders who require tax invoices, use a provider that embeds a pay-now button in the invoice. Zeller invoices and Square Invoices both support this. Instead of a client receiving a PDF they need to process through their accounts payable system and then initiate a bank transfer, they see a pay-now button and can complete the payment immediately. Turnaround drops from weeks to hours.",
    link: { label: 'Compare providers with built-in invoicing', href: '/providers' },
  },
]

export default function GetPaidFasterPost() {
  return (
    <>
      <Meta
        title="How to Get Paid Faster as a Sole Trader in Australia"
        description="Late payments are the biggest cash-flow problem for Australian sole traders. Here are the practical steps — same-day settlement, payment links, and on-site EFTPOS — that eliminate debtor days."
        canonical="/blog/how-to-get-paid-faster-sole-trader-australia"
        ogType="article"
        ogImage={blogOgUrl('how-to-get-paid-faster-sole-trader-australia')}
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={blogHeroUrl('how-to-get-paid-faster-sole-trader-australia')}
            alt=""
            fetchPriority="high"
            className="w-full h-full object-cover"
            onError={e => { e.currentTarget.style.opacity = '0' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Cash Flow</span>
            <span>·</span>
            <span>2 Apr 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            How to Get Paid Faster as a Sole Trader in Australia
          </h1>
          <p className="hero-sub">
            Late payments cause more stress for Australian tradies than almost anything else. Here are the five changes that cut debtor days from weeks to hours.
          </p>
        </div>
      </header>

      <article className="container-page section max-w-3xl">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="prose-sm text-slate-600 space-y-4 mb-10"
        >
          <p>
            The average Australian sole trader waits 23 days to be paid after completing a job. For a tradie doing $8,000 a month in work, that means $6,000 is sitting in someone else's account at any given time — money that cannot pay suppliers, cannot buy materials, and cannot go into savings.
          </p>
          <p>
            Most of this delay is not customers being dishonest. It is friction: bank transfers that require finding BSB numbers, invoices that get buried in email, and 14-day payment terms that give clients implicit permission to wait. The right payment setup removes that friction entirely.
          </p>
        </motion.div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-brand-dark mb-6">5 steps to get paid faster</h2>
          <div className="space-y-6">
            {steps.map(step => (
              <div key={step.num} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-brand-blue">{step.num}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-brand-dark mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>
                  {step.link && (
                    <Link to={step.link.href} className="inline-block mt-2 text-sm font-semibold text-brand-blue hover:underline">
                      {step.link.label} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-brand-dark mb-4">What this looks like in practice</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Before — invoice-based workflow</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Complete job on Tuesday. Email PDF invoice with 14-day terms. Follow up on day 10. Client pays on day 16 via bank transfer. Funds clear day 17. Debtor days: 16.
              </p>
            </div>
            <div className="border-t border-slate-200 pt-4">
              <p className="text-xs font-bold uppercase tracking-wider text-green-600 mb-1">After — EFTPOS + payment link workflow</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Complete job on Tuesday. Tap to pay on Zeller Terminal 1 before leaving site. Settlement arrives Tuesday evening. Debtor days: 0.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mt-2">
                Or: client not present. Send Zeller payment link via SMS. Client pays on phone within 2 hours. Settlement Tuesday evening. Debtor days: 0.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Settlement speed by provider</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Provider</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Settlement speed</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Friday job paid when?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Zeller', 'Same day', 'Friday evening', true],
                  ['Square', 'Next business day', 'Monday', false],
                  ['Stripe', '2 business days', 'Tuesday', false],
                  ['Tyro', 'Next business day', 'Monday', false],
                ].map(([name, speed, friday, highlight], i) => (
                  <tr key={i} className={highlight ? 'bg-green-50' : i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{name}</td>
                    <td className={`px-4 py-3 font-semibold ${highlight ? 'text-green-700' : 'text-slate-600'}`}>{speed}</td>
                    <td className="px-4 py-3 text-slate-600">{friday}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <div className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">What we recommend</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <Link to="/providers/zeller" className="text-brand-blue hover:underline">Zeller Terminal 1</Link> with the Optus SIM plan ($15/month). Same-day settlement, no WiFi dependency, 1.4% in-person rate. Send payment links for jobs where the client is not present, collect on-site via terminal for everything else.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              For commercial clients who require invoices: use Zeller or Square invoicing with embedded pay-now links, and set terms to 7 days rather than 14 or 30.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/providers/zeller" className="text-sm font-semibold text-brand-blue hover:underline">Zeller full review →</Link>
              <Link to="/calculator" className="text-sm font-semibold text-brand-blue hover:underline">Calculate monthly cost →</Link>
              <Link to="/blog/best-eftpos-sole-traders-australia-2026" className="text-sm font-semibold text-brand-blue hover:underline">Best EFTPOS for sole traders →</Link>
            </div>
          </div>
        </section>

        <FaqSection faqs={faqs} />

        <p className="text-xs text-slate-400 mt-6">
          Rates current as of April 2026. Always verify current pricing with providers before signing up. This is general information only and not financial advice.
        </p>

      </article>

      <div className="container-page mb-12">
        <RelatedLinks slug="sole-traders" type="trade" />
      </div>
    </>
  )
}
