import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import Meta from '../../components/Meta'
import FaqSection from '../../components/FaqSection'
import RelatedLinks from '../../components/RelatedLinks'

const SITE = 'https://tradiepayau.directory'
const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Best EFTPOS for Builders in Adelaide' },
]
const faqs = [
  {
    q: 'What is the best EFTPOS for builders in Adelaide?',
    a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for Adelaide builders. At 1.4% in-person with same-day settlement, it covers Adelaide\'s Adelaide northern suburbs house-and-land estates and progress payment collection and surrounding areas without relying on site WiFi.',
  },
  {
    q: 'Does Zeller work in Adelaide?',
    a: 'Yes — Zeller Terminal 1\'s Optus SIM covers all of Adelaide\'s metro area including Salisbury, Gawler, Mount Barker, and the southern suburbs. Same-day settlement is available to a Zeller Transaction Account.',
  },
  {
    q: 'What card payment fees do builders pay in Adelaide?',
    a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee on standard plans. The SIM plan costs $15/month on top of the $99 terminal hardware.',
  },
  {
    q: 'Do I need a licence to accept card payments as a builder in South Australia?',
    a: 'No payment-specific licence is required. You need your trade licence (issued by Consumer and Business Services SA) and an ABN to open a merchant account with Zeller, Square, or Stripe.',
  },
  {
    q: 'How quickly do card payments settle for builders in Adelaide?',
    a: 'Zeller settles same-day to a Zeller Transaction Account. For Adelaide builders who purchase materials after a job, same-day funds mean no waiting overnight. Square and Stripe both settle next business day by default.',
  },
]
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Builders in Adelaide (2026)',
    description: 'Best EFTPOS for Adelaide builders — Adelaide growth estate builds, progress payment collection, and same-day settlement. Lowest rate, SIM connectivity, same-day settlement.',
    url: `${SITE}/blog/best-eftpos-builders-adelaide-2026`,
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    image: { '@type': 'ImageObject', url: `https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=630&fit=crop&crop=center&q=80`, width: 1200, height: 630 },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Builders in Adelaide', item: `${SITE}/blog/best-eftpos-builders-adelaide-2026` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TradiePay AU — EFTPOS Guides for Adelaide Builders',
    description: 'Best EFTPOS terminal for builders in Adelaide, South Australia.',
    url: `${SITE}/blog/best-eftpos-builders-adelaide-2026`,
    areaServed: [
      { '@type': 'City', name: 'Adelaide' },
      { '@type': 'AdministrativeArea', name: 'South Australia' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]
export default function BestEftposBuildersAdelaide() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Builders in Adelaide (2026)"
        description="Best EFTPOS for Adelaide builders — Adelaide growth estate builds, progress payment collection, and same-day settlement. Lowest rate, SIM connectivity, same-day settlement."
        canonical="/blog/best-eftpos-builders-adelaide-2026"
        ogType="article"
        geoRegion="AU-SA"
        geoPlacename="Adelaide, South Australia"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={`https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=560&fit=crop&crop=center&q=80`} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">City Guide</span>
            <span>·</span><span>Adelaide, SA</span>
            <span>·</span><span>Updated April 2026</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Builders in Adelaide (2026)</h1>
          <p className="hero-sub">Covering Adelaide house-and-land estate builds, commercial construction, and progress payment collection.</p>
          <nav className="jump-links">
            <a href="#verdict">Top Pick</a>
            <a href="#context">Why Adelaide</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
          Best EFTPOS for Builders in Adelaide
        </motion.h2>
        <div className="infobox mb-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Zeller Terminal 1</strong> is the top pick for Adelaide builders. At 1.4% in-person with no monthly fee and same-day settlement, it covers Adelaide growth estate builds and commercial sites before utilities and WiFi are established.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Rate', value: '1.4%', note: 'In-person tap/chip' },
            { label: 'Hardware', value: '$99', note: 'Outright, no rental' },
            { label: 'Settlement', value: 'Same day', note: 'To Zeller account' },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }} className="lg-light rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-brand-blue">{s.value}</p>
              <p className="text-sm font-semibold text-brand-dark mt-0.5">{s.label}</p>
              <p className="text-xs text-slate-400 mt-0.5">{s.note}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link to="/trades/builders/sa" className="text-brand-blue font-medium hover:underline">
            Best EFTPOS for Builders in South Australia →
          </Link>
          <Link to="/trades/builders" className="text-brand-blue font-medium hover:underline">
            National builders guide →
          </Link>
        </div>
      </section>
      <section id="context" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
            Why Adelaide Builders need SIM connectivity
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Adelaide housing estate builds', body: 'The Angle Vale, Gawler, and southern suburbs corridors are producing a steady flow of house-and-land builds. Estate builders need SIM terminals from day one of every project.' },
              { title: 'Progress payment collection', body: 'Builder progress payments range from $15,000–$80,000 per stage in Adelaide. Zeller payment links collect before the next stage starts without bank transfer delays.' },
              { title: 'Commercial construction sites', body: 'Adelaide commercial construction sites (offices, warehouses, aged care) are active across the metro area. Site offices rarely have accessible WiFi for payment processing.' },
              { title: 'Same-day settlement', body: 'Zeller settles to your Zeller Transaction Account the same day you take payment — funds available to cover afternoon material runs.' },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title={`FAQ — Builders in Adelaide`} />
      <RelatedLinks slug="builders" type="trade" currentState="sa" />
    </>
  )
}