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
  { label: 'Best EFTPOS for Roofers in Adelaide (2026)' },
]
const faqs = [
  {
    q: 'What is the best EFTPOS for roofers in Adelaide?',
    a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for Adelaide roofers. At 1.4% in-person with same-day settlement, it covers Adelaide Hills heritage reroofing, storm-damage insurance work, and new estate roofing in northern suburbs.',
  },
  {
    q: 'Does Zeller work in Adelaide?',
    a: 'Yes — Zeller Terminal 1\'s Optus SIM covers all of Greater Adelaide including the Hills, Northern Suburbs growth corridors, and the Fleurieu Peninsula.',
  },
  {
    q: 'What card payment fees do roofers pay in Adelaide?',
    a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan costs $15/month on top of the $99 terminal hardware.',
  },
  {
    q: 'Do I need a licence to accept card payments as a roofer in South Australia?',
    a: 'No payment-specific licence is required. You need your building work contractor\'s licence from Consumer and Business Services (CBS) and an ABN to open a merchant account.',
  },
  {
    q: 'How quickly do card payments settle for roofers in Adelaide?',
    a: 'Zeller settles same-day to a Zeller Transaction Account. Adelaide roofers collecting deposits for insurance or reroof jobs can purchase materials the same afternoon.',
  },
]
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Roofers in Adelaide (2026)',
    description: 'Best EFTPOS for Adelaide roofers — Hills heritage reroofing, storm-damage insurance claims, and northern suburbs new estate roofing.',
    url: `${SITE}/blog/best-eftpos-roofers-adelaide-2026`,
    datePublished: '2026-04-06',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    image: { '@type': 'ImageObject', url: `https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=630&fit=crop&crop=left&q=80`, width: 1200, height: 630 },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Roofers in Adelaide (2026)', item: `${SITE}/blog/best-eftpos-roofers-adelaide-2026` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TradiePay AU — EFTPOS Guides for Adelaide Roofers',
    description: 'Best EFTPOS terminal for roofers in Adelaide, South Australia.',
    url: `${SITE}/blog/best-eftpos-roofers-adelaide-2026`,
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
export default function BestEftposRoofersAdelaide() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Roofers in Adelaide (2026)"
        description="Best EFTPOS for Adelaide roofers — Hills heritage reroofing, storm-damage insurance claims, and northern suburbs new estate roofing."
        canonical="/blog/best-eftpos-roofers-adelaide-2026"
        ogType="article"
        geoRegion="AU-SA"
        geoPlacename="Adelaide, South Australia"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={`https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&h=560&fit=crop&crop=left&q=80`} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">City Guide</span>
            <span>·</span><span>Adelaide, SA</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Roofers in Adelaide (2026)</h1>
          <p className="hero-sub">Covering Adelaide Hills heritage reroofing in Stirling and Aldgate, storm-damage insurance claims, and new estate roofing in Gawler and Angle Vale.</p>
          <nav className="jump-links">
            <a href="#verdict">Top Pick</a>
            <a href="#context">Why Adelaide</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
          Best EFTPOS for Roofers in Adelaide
        </motion.h2>
        <div className="infobox mb-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Zeller Terminal 1</strong> is the top pick for Adelaide roofers. At 1.4% in-person with no monthly fee and same-day settlement, it covers Hills heritage reroof work, storm-damage insurance jobs, and outer suburb new estate roofing without relying on site WiFi.
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
          <Link to="/blog/best-eftpos-roofers-sa-2026" className="text-brand-blue font-medium hover:underline">
            Best EFTPOS for Roofers in South Australia →
          </Link>
          <Link to="/trades/roofers/sa" className="text-brand-blue font-medium hover:underline">
            South Australia roofers guide →
          </Link>
          <Link to="/trades/roofers" className="text-brand-blue font-medium hover:underline">
            National roofers guide →
          </Link>
        </div>
      </section>
      <section id="context" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
            Why Adelaide Roofers need SIM connectivity
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Adelaide Hills heritage reroofing', body: 'Heritage reroofing in Stirling, Aldgate, and Hahndorf involves premium stone and slate in areas with limited NBN. SIM connectivity handles payment at job completion without customer WiFi.' },
              { title: 'Storm and hail damage insurance', body: 'Adelaide\'s summer storm season generates large volumes of insurance reroof claims across metro suburbs. Same-day Zeller settlement means deposit funds are available to order replacement materials the same day.' },
              { title: 'Northern suburbs new estate roofing', body: 'New estate roofing in Gawler, Angle Vale, and Munno Para operates on sites without utilities. SIM connectivity is the only reliable payment option at practical completion.' },
              { title: 'Same-day settlement', body: 'Zeller settles to your Zeller Transaction Account same day — roof tile and materials can be ordered the same afternoon the deposit clears.' },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title={`FAQ — Roofers in Adelaide`} />
      <RelatedLinks slug="roofers" type="trade" currentState="sa" />
    </>
  )
}
