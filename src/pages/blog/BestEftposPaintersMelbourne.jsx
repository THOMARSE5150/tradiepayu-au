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
  { label: 'Best EFTPOS for Painters in Melbourne' },
]
const faqs = [
  {
    q: 'What is the best EFTPOS for painters in Melbourne?',
    a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for Melbourne painters. At 1.4% in-person with same-day settlement, it covers Melbourne\'s outer growth corridor builds and inner-suburb renovation sites and surrounding areas without relying on site WiFi.',
  },
  {
    q: 'Does Zeller work in Melbourne?',
    a: 'Yes — Zeller Terminal 1\'s Optus SIM covers all of Melbourne\'s metro area including Frankston, Werribee, Fitzroy, and the Mornington Peninsula. Same-day settlement is available to a Zeller Transaction Account.',
  },
  {
    q: 'What card payment fees do painters pay in Melbourne?',
    a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee on standard plans. The SIM plan costs $15/month on top of the $99 terminal hardware.',
  },
  {
    q: 'Do I need a licence to accept card payments as a painter in Victoria?',
    a: 'No payment-specific licence is required. You need your trade licence (issued by Consumer Affairs Victoria) and an ABN to open a merchant account with Zeller, Square, or Stripe.',
  },
  {
    q: 'How quickly do card payments settle for painters in Melbourne?',
    a: 'Zeller settles same-day to a Zeller Transaction Account. For Melbourne painters who purchase materials after a job, same-day funds mean no waiting overnight. Square and Stripe both settle next business day by default.',
  },
]
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Painters in Melbourne (2026)',
    description: 'Best EFTPOS for Melbourne painters — inner-suburb renovations, empty-building WiFi issues, and same-day settlement for materials. Lowest rate, SIM connectivity, same-day settlement.',
    url: `${SITE}/blog/best-eftpos-painters-melbourne-2026`,
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    image: { '@type': 'ImageObject', url: `https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=630&fit=crop&crop=center&q=80`, width: 1200, height: 630 },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Painters in Melbourne', item: `${SITE}/blog/best-eftpos-painters-melbourne-2026` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TradiePay AU — EFTPOS Guides for Melbourne Painters',
    description: 'Best EFTPOS terminal for painters in Melbourne, Victoria.',
    url: `${SITE}/blog/best-eftpos-painters-melbourne-2026`,
    areaServed: [
      { '@type': 'City', name: 'Melbourne' },
      { '@type': 'AdministrativeArea', name: 'Victoria' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]
export default function BestEftposPaintersMelbourne() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Painters in Melbourne (2026)"
        description="Best EFTPOS for Melbourne painters — inner-suburb renovations, empty-building WiFi issues, and same-day settlement for materials. Lowest rate, SIM connectivity, same-day settlement."
        canonical="/blog/best-eftpos-painters-melbourne-2026"
        ogType="article"
        geoRegion="AU-VIC"
        geoPlacename="Melbourne, Victoria"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={`https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=900&h=560&fit=crop&crop=center&q=80`} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">City Guide</span>
            <span>·</span><span>Melbourne, VIC</span>
            <span>·</span><span>Updated April 2026</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Painters in Melbourne (2026)</h1>
          <p className="hero-sub">Covering inner-suburb renovations, outer growth corridor builds, and Melbourne residential repaint jobs.</p>
          <nav className="jump-links">
            <a href="#verdict">Top Pick</a>
            <a href="#context">Why Melbourne</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
          Best EFTPOS for Painters in Melbourne
        </motion.h2>
        <div className="infobox mb-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Zeller Terminal 1</strong> is the top pick for Melbourne painters. At 1.4% in-person with no monthly fee and same-day settlement, it covers inner-suburb renovation sites and outer Melbourne growth corridor builds where WiFi is unavailable.
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
          <Link to="/trades/painters/vic" className="text-brand-blue font-medium hover:underline">
            Best EFTPOS for Painters in Victoria →
          </Link>
          <Link to="/trades/painters" className="text-brand-blue font-medium hover:underline">
            National painters guide →
          </Link>
        </div>
      </section>
      <section id="context" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
            Why Melbourne Painters need SIM connectivity
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Inner-suburb renovations', body: 'Melbourne\'s inner suburbs (Fitzroy, Collingwood, Richmond) have constant renovation activity. Houses under reno have no working WiFi — a SIM terminal is essential.' },
              { title: 'Outer corridor new builds', body: 'Growth areas like Werribee, Cranbourne, and Sunbury are active with new builds. No utilities are established until handover — SIM connectivity is the only option.' },
              { title: 'Multi-day jobs and deposits', body: 'Melbourne painters often quote multi-day exterior jobs. Zeller payment links let you collect the deposit via SMS before mobilising — no bank transfer delay.' },
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
      <FaqSection items={faqs} title={`FAQ — Painters in Melbourne`} />
      <RelatedLinks slug="painters" type="trade" currentState="vic" />
    </>
  )
}