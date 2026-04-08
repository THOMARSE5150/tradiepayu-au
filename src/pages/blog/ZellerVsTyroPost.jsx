import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Meta from '../../components/Meta'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'
import RelatedLinks from '../../components/RelatedLinks'

import siteMeta from '../../data/site-meta.json'
import { blogHeroUrl, blogOgUrl } from '../../utils/blogImage'

const SITE = 'https://tradiepayau.directory'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Zeller vs Tyro: Which EFTPOS is Better for Tradies? (2026)' },
]

const comparisonHeaders = ['', 'Zeller Terminal 1', 'Tyro']
const comparisonRows = [
  { highlight: true, cells: ['In-person rate', '1.4% (published)', 'Quote required'] },
  { cells: ['Payment links rate', '1.7% + $0.25', '1.4% incl. GST'] },
  { cells: ['Hardware cost', '$99', 'Quote required'] },
  { cells: ['SIM card', '✓ $15/mo (Optus)', '✗ WiFi only'] },
  { cells: ['Offline mode', '✗', '✗'] },
  { cells: ['Settlement', 'Same day (Zeller account)', 'Next business day'] },
  { cells: ['Monthly fee', '$0', 'Varies by plan'] },
  { cells: ['Pricing transparency', 'Full — published online', 'Partial — rate on request'] },
  { cells: ['Contract', 'No lock-in', 'Varies'] },
]

const faqs = [
  {
    q: 'Is Zeller or Tyro cheaper for tradies?',
    a: "Zeller's in-person rate is 1.4% flat — published online, no negotiation required. Tyro's in-person merchant service fee depends on your annual card turnover and card mix, and requires a quote. For most sole traders and small trade businesses, Zeller's 1.4% is very competitive and transparent. Higher-volume builders and commercial operators may negotiate a lower rate through Tyro, but there is no guarantee.",
  },
  {
    q: 'Does Tyro work without WiFi?',
    a: 'No — Tyro terminals require a WiFi or ethernet connection to process payments. There is no built-in SIM option and no published offline mode. For job sites without reliable WiFi — new estates, plant rooms, underground switchboards — this is a significant limitation. Zeller Terminal 1 includes an Optus SIM plan option ($15/month) that operates independently of any customer WiFi.',
  },
  {
    q: "What is Tyro's in-person rate?",
    a: "Tyro does not publish a single in-person rate. Their merchant service fee is calculated based on your annual card turnover and card mix (credit vs debit, card type). To get a rate, you need to contact Tyro's sales team and request a quote. Businesses processing over $250,000/year in card payments may negotiate rates lower than 1.4%. Payment Links through Tyro are 1.4% incl. GST — a published flat rate — but this is a remote payment method, not a terminal-based in-person rate.",
  },
  {
    q: 'Which settles faster — Zeller or Tyro?',
    a: "Zeller settles same day into a Zeller Transaction Account. From there, you can transfer to your external bank account next business day, or spend immediately using the free Zeller Mastercard debit card. Tyro settles to your nominated bank account the next business day. For tradies buying materials the same day they're paid, Zeller's same-day settlement into a usable account is the more practical option.",
  },
  {
    q: 'Is Tyro suitable for tradies?',
    a: "Tyro was historically used in healthcare and hospitality — industries that require robust terminals and integrate with industry-specific POS systems. For tradies, Tyro can work if you have a high card volume and can negotiate a competitive rate. However, the lack of transparent pricing, no SIM connectivity, and next-business-day settlement make it less suited to sole traders and small trade businesses than Zeller. Tyro is more relevant for larger construction companies with existing banking relationships.",
  },
  {
    q: 'Does Zeller have surcharging?',
    a: 'Yes — you can configure a surcharge in the Zeller dashboard so customers pay the processing fee instead of you. This effectively brings your processing cost to $0. You must disclose the surcharge to customers before they pay — this is required under RBA surcharging rules.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Zeller vs Tyro: Which EFTPOS is Better for Tradies? (2026)',
    description: 'Transparent pricing vs negotiated rates. SIM connectivity vs WiFi-only. Same-day vs next-day settlement. A head-to-head for Australian tradies choosing between Zeller and Tyro.',
    image: {
      '@type': 'ImageObject',
      url: blogOgUrl('zeller-vs-tyro-eftpos-tradies'),
      width: 1200,
      height: 630,
    },
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    url: `${SITE}/blog/zeller-vs-tyro-eftpos-tradies`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Zeller vs Tyro: Which EFTPOS is Better for Tradies? (2026)', item: `${SITE}/blog/zeller-vs-tyro-eftpos-tradies` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'EFTPOS Terminal Comparison',
    itemListElement: [{"@type":"ListItem","position":1,"name":"Zeller Terminal 1"},{"@type":"ListItem","position":2,"name":"Tyro EFTPOS"}],
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

export default function ZellerVsTyroPost() {
  return (
    <>
      <Meta
        title="Zeller vs Tyro: Which EFTPOS is Better for Tradies? (2026)"
        description="Transparent pricing vs negotiated rates. SIM connectivity vs WiFi-only. Same-day vs next-day settlement. A head-to-head for Australian tradies choosing between Zeller and Tyro."
        canonical="/blog/zeller-vs-tyro-eftpos-tradies"
        ogType="article"
        ogImage={blogOgUrl('zeller-vs-tyro-eftpos-tradies')}
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={blogHeroUrl('zeller-vs-tyro-eftpos-tradies')}
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
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Comparison</span>
            <span>·</span>
            <span>2 Apr 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
            Zeller vs Tyro: Which EFTPOS is Better for Tradies? (2026)
          </h1>
          <p className="hero-sub">
            Transparent pricing vs negotiated rates. SIM connectivity vs WiFi-only. Same-day settlement vs next business day. Here is the full head-to-head.
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
            Zeller and Tyro are both Australian-focused payment providers, but they target very different customers. Zeller was built for small business and sole traders — transparent flat rates, no lock-in, easy online signup. Tyro was originally built for healthcare and hospitality — negotiated rates, bank-backed reliability, and deep POS integrations.
          </p>
          <p>
            For most tradies, the choice comes down to one question: <strong className="text-brand-dark">do you want to know your rate before you sign up?</strong> Zeller tells you upfront. Tyro requires a conversation.
          </p>
        </motion.div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Side-by-side comparison</h2>
          <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />
        </section>

        <section className="mb-10 space-y-6">
          <h2 className="text-xl font-bold text-brand-dark">Rate transparency: Zeller wins</h2>
          <p className="text-slate-600 leading-relaxed text-sm">
            Zeller's in-person rate is 1.4% flat. No negotiation. No phone calls. You can calculate your monthly processing cost before you order the terminal. At $10,000/month in card revenue, that is $140.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            Tyro's in-person merchant service fee is not published. It depends on your annual card turnover and card mix — the proportion of debit vs credit cards, and card type. You will need to contact Tyro's sales team and request a quote. If you are a high-volume operator (above $250,000/year in card payments), you may negotiate a rate below 1.4%. For most tradies, the lack of a published rate is a friction point, not a feature.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            Tyro's Payment Links product (a remote payment method, not a terminal) does have a published rate: 1.4% incl. GST. This is a remote/online rate, not the in-person terminal rate.
          </p>

          <h2 className="text-xl font-bold text-brand-dark">Connectivity: Zeller wins, clearly</h2>
          <p className="text-slate-600 leading-relaxed text-sm">
            Zeller Terminal 1 supports an optional Optus SIM plan ($15/month, no lock-in). The terminal operates on Optus 4G independently of any WiFi. For tradies on sites without reliable WiFi — new estates, plant rooms, basements, commercial switchboard rooms — this matters every day.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            Tyro terminals require a WiFi or ethernet connection. There is no built-in SIM option and no published offline mode. If you are an electrician working in a communications room or a glazier replacing windows on an upper floor without site WiFi, Tyro will not process payments.
          </p>

          <h2 className="text-xl font-bold text-brand-dark">Settlement: Zeller wins</h2>
          <p className="text-slate-600 leading-relaxed text-sm">
            Zeller settles same day into a Zeller Transaction Account. If you take a payment in the morning, the funds are in your account by end of business — and accessible immediately via the free Zeller Mastercard debit card. Transfers to an external bank account take the next business day.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            Tyro settles to your nominated bank account the next business day. For tradies who need to purchase materials the same day they invoice, same-day access matters. Zeller's settlement model is simpler and faster.
          </p>

          <h2 className="text-xl font-bold text-brand-dark">When Tyro makes sense</h2>
          <p className="text-slate-600 leading-relaxed text-sm">
            Tyro is more relevant for larger commercial trade businesses that:
          </p>
          <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
            <li>Process over $250,000/year in card payments and can negotiate a competitive rate</li>
            <li>Operate in fixed locations (offices, depots, showrooms) with reliable WiFi and ethernet</li>
            <li>Need integration with industry-specific software that supports Tyro's POS API</li>
            <li>Have an existing relationship with Tyro through a banking partner</li>
          </ul>
          <p className="text-slate-600 leading-relaxed text-sm mt-3">
            For sole traders and small trade businesses doing on-site work, Zeller covers the key requirements at a lower complexity and lower total cost.
          </p>
        </section>

        <section className="mb-10">
          <div className="lg-blue rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-3">Our verdict</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              For most tradies — electricians, plumbers, glaziers, painters, and builders doing on-site work — <strong>Zeller is the better choice</strong>. The rate is lower and transparent, the SIM connectivity is a practical necessity for most job sites, and same-day settlement is better for cash flow.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Tyro is worth considering if you are a high-volume operator who can negotiate a competitive rate and works from a fixed location with stable WiFi. Otherwise, the lack of published pricing and connectivity limitations make it harder to recommend.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/providers/zeller" className="text-sm font-semibold text-brand-blue hover:underline">Full Zeller review →</Link>
              <Link to="/providers/tyro" className="text-sm font-semibold text-brand-blue hover:underline">Full Tyro review →</Link>
              <Link to="/compare/zeller-vs-tyro" className="text-sm font-semibold text-brand-blue hover:underline">Compare Zeller vs Tyro →</Link>
            </div>
          </div>
        </section>

        <FaqSection faqs={faqs} />

        <p className="text-xs text-slate-400 mt-6">
          Rates current as of April 2026. Tyro in-person rates are quote-based — contact Tyro directly for a rate applicable to your business volume.
        </p>

      </article>

      <div className="container-page mb-12">
        <RelatedLinks slug="electricians" type="trade" />
      </div>
    </>
  )
}
