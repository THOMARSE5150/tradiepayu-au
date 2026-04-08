import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import Meta from '../../components/Meta'
import FaqSection from '../../components/FaqSection'
import RelatedLinks from '../../components/RelatedLinks'

import siteMeta from '../../data/site-meta.json'
import { blogHeroUrl, blogOgUrl } from '../../utils/blogImage'

const SITE = 'https://tradiepayau.directory'
const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Best EFTPOS for Roofers in Perth (2026)' },
]
const faqs = [
  {
    q: 'What is the best EFTPOS for roofers in Perth?',
    a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for Perth roofers. At 1.4% in-person with same-day settlement, it covers new estate roofing in outer suburbs and large residential reroof jobs across Greater Perth.',
  },
  {
    q: 'Does Zeller work in Perth?',
    a: 'Yes — Zeller Terminal 1\'s Optus SIM covers all of Greater Perth including the outer growth corridors in Ellenbrook, Baldivis, and Harrisdale where new estates operate without utilities.',
  },
  {
    q: 'What card payment fees do roofers pay in Perth?',
    a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan costs $15/month on top of the $99 terminal hardware.',
  },
  {
    q: 'Do I need a licence to accept card payments as a roofer in WA?',
    a: 'No payment-specific licence is required. You need your roofing work contractor licence from the Building Services Board (under Building and Energy) and an ABN to open a merchant account.',
  },
  {
    q: 'How quickly do card payments settle for roofers in Perth?',
    a: 'Zeller settles same-day to a Zeller Transaction Account. Perth roofers collecting deposits can purchase materials the same afternoon the funds clear.',
  },
]
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Roofers in Perth (2026)',
    description: 'Best EFTPOS for Perth roofers — new estate roofing in outer suburbs, large residential reroofs, and same-day settlement for material purchasing.',
    url: `${SITE}/blog/best-eftpos-roofers-perth-2026`,
    datePublished: '2026-04-06',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    image: { '@type': 'ImageObject', url: blogOgUrl('best-eftpos-roofers-perth-2026'), width: 1200, height: 630 },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Roofers in Perth (2026)', item: `${SITE}/blog/best-eftpos-roofers-perth-2026` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TradiePay AU — EFTPOS Guides for Perth Roofers',
    description: 'Best EFTPOS terminal for roofers in Perth, Western Australia.',
    url: `${SITE}/blog/best-eftpos-roofers-perth-2026`,
    areaServed: [
      { '@type': 'City', name: 'Perth' },
      { '@type': 'AdministrativeArea', name: 'Western Australia' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]
export default function BestEftposRoofersPerth() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Roofers in Perth (2026)"
        description="Best EFTPOS for Perth roofers — new estate roofing in outer suburbs, large residential reroofs, and same-day settlement for material purchasing."
        canonical="/blog/best-eftpos-roofers-perth-2026"
        ogType="article"
        geoRegion="AU-WA"
        geoPlacename="Perth, Western Australia"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={blogHeroUrl('best-eftpos-roofers-perth-2026')} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">City Guide</span>
            <span>·</span><span>Perth, WA</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Roofers in Perth (2026)</h1>
          <p className="hero-sub">Covering new estate roofing in Ellenbrook, Baldivis, and Harrisdale, large residential reroofs, and deposit collection without site WiFi across Greater Perth.</p>
          <nav className="jump-links">
            <a href="#verdict">Top Pick</a>
            <a href="#context">Why Perth</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
          Best EFTPOS for Roofers in Perth
        </motion.h2>
        <div className="infobox mb-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Zeller Terminal 1</strong> is the top pick for Perth roofers. At 1.4% in-person with SIM connectivity and same-day settlement, it covers new estate tile work in outer Perth suburbs and large residential reroof jobs without relying on customer WiFi.
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
          <Link to="/trades/roofers/wa" className="text-brand-blue font-medium hover:underline">
            WA Roofers guide →
          </Link>
          <Link to="/blog/best-eftpos-roofers-wa-2026" className="text-brand-blue font-medium hover:underline">
            Best EFTPOS for Roofers in Western Australia →
          </Link>
          <Link to="/trades/roofers" className="text-brand-blue font-medium hover:underline">
            National roofers guide →
          </Link>
        </div>
      </section>
      <section id="context" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
            Why Perth Roofers need SIM connectivity
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Outer suburbs new estate roofing', body: 'New estate tile work in Ellenbrook, Baldivis, and Harrisdale operates on sites without NBN or customer WiFi. A SIM terminal is the only reliable way to collect payment at practical completion.' },
              { title: 'Large residential reroofs', body: 'Perth\'s stock of 1970s–1990s tile homes drives a steady reroof market. Jobs in the $15,000–$40,000 range benefit from deposit collection via Zeller payment links before materials are ordered.' },
              { title: 'Deposit collection before starting', body: 'Perth roofers collecting 30–50% deposits before ordering materials use Zeller payment links (1.7%) — clients pay via SMS or email before the first delivery arrives on site.' },
              { title: 'Same-day settlement', body: 'Zeller settles to your Zeller Transaction Account same day — tile and materials orders can be placed the same afternoon the deposit is collected.' },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title={`FAQ — Roofers in Perth`} />
      <RelatedLinks slug="roofers" type="trade" currentState="wa" />
    </>
  )
}
