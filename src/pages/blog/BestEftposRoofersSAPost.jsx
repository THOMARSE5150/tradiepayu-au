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
  { label: 'Best EFTPOS for Roofers in South Australia (2026)' },
]
const faqs = [
  {
    q: 'What is the best EFTPOS for roofers in South Australia?',
    a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for SA roofers. At 1.4% in-person with same-day settlement, it covers Adelaide Hills heritage reroofing, storm-damage insurance work, and northern suburbs new estate jobs.',
  },
  {
    q: 'Does Zeller work across South Australia?',
    a: 'Yes — Zeller Terminal 1\'s Optus SIM covers Adelaide metro and most regional SA towns. For remote outback sites with no mobile signal, Square Terminal\'s offline mode stores payments locally and processes them when connectivity is restored.',
  },
  {
    q: 'What card payment fees do roofers pay in SA?',
    a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan adds $15/month on top of the $99 terminal.',
  },
  {
    q: 'Do I need a licence to accept card payments as a roofer in South Australia?',
    a: 'No payment licence is required. You need your building work contractor\'s licence from Consumer and Business Services (CBS) and an ABN to open a merchant account.',
  },
  {
    q: 'How quickly do card payments settle for roofers in SA?',
    a: 'Zeller settles same-day to a Zeller Transaction Account. For SA roofers purchasing materials the same day, this is the fastest option available. Square settles next business day; Stripe settles in 2 business days.',
  },
  {
    q: 'What EFTPOS works in regional South Australia?',
    a: 'Zeller Terminal 1 with the Optus SIM covers most SA regional centres including Whyalla, Mount Gambier, and Port Augusta. For remote sites, Square Terminal\'s offline mode processes payments when signal is restored.',
  },
]
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Roofers in South Australia (2026)',
    description: 'Best EFTPOS for SA roofers — Adelaide Hills heritage reroofing, storm-damage insurance claims, and northern suburbs new estate work.',
    url: `${SITE}/blog/best-eftpos-roofers-sa-2026`,
    datePublished: '2026-04-06',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    image: { '@type': 'ImageObject', url: blogOgUrl('best-eftpos-roofers-sa-2026'), width: 1200, height: 630 },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Roofers in South Australia (2026)', item: `${SITE}/blog/best-eftpos-roofers-sa-2026` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TradiePay AU — EFTPOS Guides for South Australia Roofers',
    description: 'Best EFTPOS terminal for roofers across South Australia.',
    url: `${SITE}/blog/best-eftpos-roofers-sa-2026`,
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'South Australia' },
      { '@type': 'City', name: 'Adelaide' },
      { '@type': 'City', name: 'Mount Gambier' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]
export default function BestEftposRoofersSAPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Roofers in South Australia (2026)"
        description="Best EFTPOS for SA roofers — Adelaide Hills heritage reroofing, storm-damage insurance claims, and northern suburbs new estate work."
        canonical="/blog/best-eftpos-roofers-sa-2026"
        ogType="article"
        geoRegion="AU-SA"
        geoPlacename="Adelaide, South Australia"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={blogHeroUrl('best-eftpos-roofers-sa-2026')} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">State Guide</span>
            <span>·</span><span>South Australia</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Roofers in South Australia (2026)</h1>
          <p className="hero-sub">Covering Adelaide Hills heritage reroofing, storm and hail damage insurance work, and new estate roofing in SA's northern growth corridors.</p>
          <nav className="jump-links">
            <a href="#verdict">Top Pick</a>
            <a href="#coverage">Coverage</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
          Best EFTPOS for Roofers in South Australia
        </motion.h2>
        <div className="infobox mb-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Zeller Terminal 1</strong> is the top pick for SA roofers. At 1.4% in-person with SIM connectivity via Optus and same-day settlement, it covers Adelaide Hills heritage work, storm-damage insurance jobs, and northern suburbs new estate roofing without relying on site WiFi.
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
          <Link to="/trades/roofers/sa" className="text-brand-blue font-medium hover:underline">
            SA Roofers guide on TradiePay →
          </Link>
          <Link to="/trades/roofers" className="text-brand-blue font-medium hover:underline">
            National roofers guide →
          </Link>
        </div>
      </section>
      <section id="coverage" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
            Coverage in South Australia
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Adelaide Hills heritage reroofing', body: 'Heritage reroofing in Stirling, Aldgate, and Hahndorf involves premium stone and slate work in areas with limited NBN. SIM connectivity handles payment at job completion without customer WiFi.' },
              { title: 'Storm and hail damage insurance', body: 'SA\'s summer storm season drives large-volume insurance claim reroofing across metro Adelaide. Same-day Zeller settlement means deposit funds are available to order replacement materials the same afternoon.' },
              { title: 'Northern suburbs new estate roofing', body: 'New estate roofing in Gawler, Angle Vale, and Virginia operates on sites without utilities. SIM connectivity is the only reliable payment option at practical completion.' },
              { title: 'Same-day settlement', body: 'Zeller settles to your Zeller Transaction Account same day — roof tile and materials orders can be placed the same afternoon the deposit clears.' },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 lg-light rounded-2xl p-5">
            <h3 className="font-semibold text-brand-dark mb-2 text-sm">Licensing &amp; regulatory body</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Roofers in South Australia are regulated by <strong>Consumer and Business Services (CBS)</strong>. A building work contractor's licence is required for roofing work over a set value threshold. An ABN is needed to open a merchant account with Zeller, Square, or Stripe.</p>
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title={`FAQ — Roofers in South Australia`} />
      <RelatedLinks slug="roofers" type="trade" currentState="sa" />
    </>
  )
}
