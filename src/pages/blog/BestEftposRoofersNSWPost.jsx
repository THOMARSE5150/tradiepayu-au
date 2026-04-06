import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import Meta from '../../components/Meta'
import FaqSection from '../../components/FaqSection'
import RelatedLinks from '../../components/RelatedLinks'

import siteMeta from '../../data/site-meta.json'

const SITE = 'https://tradiepayau.directory'
const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Best EFTPOS for Roofers in New South Wales' },
]
const faqs = [
  {
    q: 'What is the best EFTPOS for roofers in New South Wales?',
    a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for NSW roofers. At 1.4% in-person with same-day settlement, it covers Sydney, Newcastle, and across New South Wales. Storm-damage and insurance roofing work is a major NSW market — same-day settlement is critical for immediate material re-orders.',
  },
  {
    q: 'Does Zeller work across New South Wales?',
    a: 'Yes — Zeller Terminal 1\'s Optus SIM covers metro Sydney and most regional NSW areas. Storm-damage and insurance roofing work is a major NSW market — same-day settlement is critical for immediate material re-orders.',
  },
  {
    q: 'What card payment fees do roofers pay in NSW?',
    a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan adds $15/month on top of the $99 terminal.',
  },
  {
    q: 'Do I need a licence to accept card payments as a roofer in New South Wales?',
    a: 'No payment licence is required. You need your trade licence (issued by NSW Fair Trading) and an ABN to open a merchant account with Zeller, Square, or Stripe.',
  },
  {
    q: 'How quickly do card payments settle for roofers in NSW?',
    a: 'Zeller settles same-day to a Zeller Transaction Account. For NSW roofers purchasing materials the same day as the job, this is the fastest option available. Square settles next business day; Stripe settles in 2 business days.',
  },
  {
    q: 'What EFTPOS works in remote New South Wales?',
    a: 'Zeller Terminal 1 with the Optus SIM plan covers most NSW metro and regional areas. For truly remote locations with no mobile coverage, Square Terminal\'s offline mode stores payments locally and processes them when signal is restored.',
  },
]
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Roofers in New South Wales (2026)',
    description: 'Best EFTPOS for NSW roofers — Sydney, Newcastle, and across New South Wales. Lowest rate, SIM connectivity, same-day settlement.',
    url: `${SITE}/blog/best-eftpos-roofers-nsw-2026`,
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    image: { '@type': 'ImageObject', url: `https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=630&fit=crop&crop=center&q=80`, width: 1200, height: 630 },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Roofers in New South Wales', item: `${SITE}/blog/best-eftpos-roofers-nsw-2026` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TradiePay AU — EFTPOS Guides for New South Wales Roofers',
    description: 'Best EFTPOS terminal for roofers across New South Wales.',
    url: `${SITE}/blog/best-eftpos-roofers-nsw-2026`,
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'New South Wales' },
      { '@type': 'City', name: 'Sydney' },
      { '@type': 'City', name: 'Newcastle' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]
export default function BestEftposRoofersNSWPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Roofers in New South Wales (2026)"
        description="Best EFTPOS for NSW roofers — Sydney, Newcastle, and across New South Wales. Lowest rate, SIM connectivity, same-day settlement."
        canonical="/blog/best-eftpos-roofers-nsw-2026"
        ogType="article"
        geoRegion="AU-NSW"
        geoPlacename="Sydney, New South Wales"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={`https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&h=560&fit=crop&crop=center&q=80`} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">State Guide</span>
            <span>·</span><span>New South Wales</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Roofers in New South Wales (2026)</h1>
          <p className="hero-sub">Covering Sydney, Newcastle, Wollongong and across NSW. Storm-damage and insurance roofing work is a major NSW market — same-day settlement is critical for immediate material re-orders.</p>
          <nav className="jump-links">
            <a href="#verdict">Top Pick</a>
            <a href="#coverage">Coverage</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
          Best EFTPOS for Roofers in New South Wales
        </motion.h2>
        <div className="infobox mb-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Zeller Terminal 1</strong> is the top pick for NSW roofers. At 1.4% in-person with same-day settlement and SIM connectivity via Optus, it covers Sydney, Newcastle, and most NSW regional areas without relying on site WiFi.
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
          <Link to="/trades/roofers/nsw" className="text-brand-blue font-medium hover:underline">
            NSW Roofers guide on TradiePay →
          </Link>
          <Link to="/trades/roofers" className="text-brand-blue font-medium hover:underline">
            National roofers guide →
          </Link>
        </div>
      </section>
      <section id="coverage" className="section section-alt">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Coverage in New South Wales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="lg-light rounded-2xl p-5">
              <h3 className="font-semibold text-brand-dark mb-2 text-sm">Optus SIM coverage</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Zeller Terminal 1 covers Sydney, Newcastle, Wollongong and surrounding areas. Storm-damage and insurance roofing work is a major NSW market — same-day settlement is critical for immediate material re-orders.</p>
            </div>
            <div className="lg-light rounded-2xl p-5">
              <h3 className="font-semibold text-brand-dark mb-2 text-sm">Licensing &amp; regulatory body</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Roofers in New South Wales are regulated by <strong>NSW Fair Trading</strong>. An ABN is sufficient to open a merchant account.</p>
            </div>
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title={`FAQ — Roofers in New South Wales`} />
      <RelatedLinks slug="roofers" type="trade" currentState="nsw" />
    </>
  )
}