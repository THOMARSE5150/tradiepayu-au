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
  { label: 'Surcharging for Tradies: How to Pass EFTPOS Fees to Customers (2026)' },
]

const faqs = [
  {
    q: 'Is surcharging legal for tradies in Australia?',
    a: 'Yes — surcharging is legal in Australia under Reserve Bank of Australia (RBA) regulations. The key rule is that the surcharge amount must not exceed your actual cost of accepting that card type. You cannot profit from the surcharge. You must also clearly disclose the surcharge to the customer before they pay.',
  },
  {
    q: 'How much can I surcharge?',
    a: "You can only surcharge up to your actual cost of card acceptance. For Zeller, that is 1.4% for in-person tap/chip payments. If you set a 1.5% surcharge, you are exceeding your cost and technically in breach of RBA rules. Most providers make this straightforward — Zeller and Square allow you to configure a surcharge that matches their standard rate exactly.",
  },
  {
    q: 'Do I have to tell customers about the surcharge before they pay?',
    a: "Yes — disclosure is mandatory under Australian Consumer Law. You must display the surcharge percentage before the customer commits to paying. Most surcharging-configured terminals display it on the payment screen automatically. Including a note on your quote or invoice ('Card payments include a 1.4% processing fee') also satisfies the requirement.",
  },
  {
    q: "What is Shift4's surcharging model?",
    a: "Shift4 operates on a 'zero cost' or 'zero merchant fee' model — the card processing fee is passed to the customer by default. You pay $0 in processing fees and the customer pays a surcharge (typically 1.5–1.75%, depending on card type). This model is the core of Shift4's value proposition. The trade-off is less price transparency — Shift4's merchant agreement is not publicly published and requires a direct contract.",
  },
  {
    q: 'Does surcharging affect how customers feel about paying?',
    a: 'Some customers dislike surcharges, particularly older customers or those used to absorbing fees as a cost of doing business. In tradie contexts, surcharging is increasingly common and accepted — especially with a clear disclosure upfront. If you are concerned about customer reaction, Zeller allows you to configure surcharging per device, so you can trial it on some jobs and not others.',
  },
  {
    q: 'Can I surcharge for tap-to-pay on my phone?',
    a: "Yes — if you use Zeller Tap to Pay on your iPhone or Android, you can configure a surcharge the same way as the physical terminal. Note that Stripe adds a $0.15 authorisation surcharge per transaction for Tap to Pay (on top of the 1.7% rate), which you would need to factor into your disclosed surcharge amount.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Surcharging for Tradies: How to Pass EFTPOS Fees to Customers (2026)',
    description: 'What surcharging is, how to set it up on Zeller and Square, what the law says, and when it makes sense for Australian tradies.',
    image: {
      '@type': 'ImageObject',
      url: blogOgUrl('surcharging-eftpos-tradies-australia-2026'),
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/surcharging-eftpos-tradies-australia-2026`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Surcharging for Tradies: How to Pass EFTPOS Fees to Customers (2026)', item: `${SITE}/blog/surcharging-eftpos-tradies-australia-2026` },
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

export default function SurchargingTradiesPost() {
  return (
    <>
      <Meta
        title="Surcharging for Tradies: How to Pass EFTPOS Fees to Customers (2026)"
        description="What surcharging is, how to set it up on Zeller and Square, what the RBA rules say, and when it makes sense for Australian tradies."
        canonical="/blog/surcharging-eftpos-tradies-australia-2026"
        ogType="article"
        ogImage={blogOgUrl('surcharging-eftpos-tradies-australia-2026')}
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={blogHeroUrl('surcharging-eftpos-tradies-australia-2026')}
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
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Guide</span>
            <span>·</span>
            <span>2 Apr 2026</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            Surcharging for Tradies: How to Pass EFTPOS Fees to Customers (2026)
          </h1>
          <p className="hero-sub">
            Surcharging lets you pass card processing fees to your customers instead of absorbing them yourself. Here is how it works, what the law says, and which providers make it easy.
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
            If you accept cards, you pay a processing fee — typically between 1.4% and 1.7% per transaction. On a $500 job, that is $7–$8.50 that comes out of your margin. Surcharging passes that cost to the customer. It is legal, increasingly common in Australian trades, and most card payment providers now support it natively.
          </p>
          <p>
            This guide explains how surcharging works, what the Australian rules require, how to set it up on Zeller and Square, and when it makes sense for your trade business.
          </p>
        </motion.div>

        <section className="mb-10 space-y-5">
          <h2 className="text-xl font-bold text-brand-dark">How surcharging works</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            When you enable surcharging on your EFTPOS terminal, a percentage is added to the customer's payment total at checkout. The surcharge covers your cost of accepting that card. Your net revenue stays at the original job price — you are not absorbing the processing fee.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Example: A plumber invoices $600 for a job. With 1.4% surcharging enabled, the customer pays $608.40. The plumber receives $600. The $8.40 goes to Zeller as the processing fee.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">What the RBA rules require</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            The Reserve Bank of Australia regulates surcharging under the <em>Payment Systems (Regulation) Act 1998</em>. The core rules:
          </p>
          <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2 mt-2">
            <li><strong className="text-brand-dark">You cannot surcharge more than your cost.</strong> The surcharge must reflect your actual cost of accepting that card type. For Zeller's 1.4% in-person rate, you may surcharge up to 1.4%.</li>
            <li><strong className="text-brand-dark">Disclosure is required before payment.</strong> The customer must be informed of the surcharge amount before they tap or insert their card. Most terminals display this automatically on the payment screen.</li>
            <li><strong className="text-brand-dark">Excessive surcharging is prohibited.</strong> The ACCC enforces this. A surcharge significantly above your actual cost of acceptance is illegal and can result in fines.</li>
          </ul>
          <p className="text-sm text-slate-600 leading-relaxed mt-3">
            In practice, if you configure the surcharge to match your provider's published rate exactly, you are compliant. Both Zeller and Square make this straightforward.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">How to enable surcharging on Zeller</h2>
          <ol className="list-decimal pl-5 text-sm text-slate-600 space-y-2 mt-2">
            <li>Log in to the Zeller dashboard at myzeller.com/au</li>
            <li>Go to <strong>Settings → Terminal</strong> and select your terminal</li>
            <li>Enable <strong>Surcharging</strong> and set the percentage to 1.4% (matching the standard in-person rate)</li>
            <li>Save. The surcharge will now be applied automatically and displayed on the terminal screen before each payment</li>
          </ol>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            You can also enable or disable surcharging per-terminal if you have multiple devices and want different configurations for different team members or job types.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">How to enable surcharging on Square</h2>
          <ol className="list-decimal pl-5 text-sm text-slate-600 space-y-2 mt-2">
            <li>Open the Square Dashboard and go to <strong>Account & Settings → Business information → Payment methods</strong></li>
            <li>Enable <strong>Surcharging</strong> and configure the rate (1.6% for standard in-person Square rate)</li>
            <li>Save settings. Square will display the surcharge on the payment screen automatically</li>
          </ol>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Shift4: surcharging by default</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link to="/providers/shift4" className="text-brand-blue hover:underline">Shift4</Link> operates on a "zero cost" model — customer surcharging is the default. As a Shift4 merchant, you pay $0 in processing fees because the surcharge is built into every transaction automatically. The customer pays a percentage on top of the invoice total (typically 1.5–1.75%, depending on card type).
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            This is the same outcome as enabling surcharging on Zeller or Square — but it is the model by default, not an optional setting. The trade-off is that Shift4's merchant agreement is not publicly available and requires a direct contract, which makes it harder to evaluate than Zeller or Square.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-6">Is surcharging right for your trade business?</h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-3">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-2">Good fit</p>
              <ul className="text-xs text-green-900 space-y-1">
                <li>✓ High card volume — every 1% matters</li>
                <li>✓ Commercial clients (less price-sensitive)</li>
                <li>✓ Already quoting + invoicing (disclosure built in)</li>
                <li>✓ Competitive market where margins are tight</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">Think twice</p>
              <ul className="text-xs text-amber-900 space-y-1">
                <li>⚠ Low card volume — surcharge savings are small</li>
                <li>⚠ Residential clients (can be more sensitive)</li>
                <li>⚠ Premium service positioning — feels inconsistent</li>
                <li>⚠ Repeat customers who may notice</li>
              </ul>
            </div>
          </div>
        </section>

        <FaqSection faqs={faqs} />

        <p className="text-xs text-slate-400 mt-6">
          This article is general information only and does not constitute legal or financial advice. RBA surcharging rules apply — confirm your surcharge does not exceed your cost of card acceptance. Rates current as of April 2026.
        </p>

      </article>

      <div className="container-page mb-12">
        <RelatedLinks slug="electricians" type="trade" />
      </div>
    </>
  )
}
