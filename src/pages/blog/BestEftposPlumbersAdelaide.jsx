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
  { label: 'Best EFTPOS for Plumbers in Adelaide' },
]
const faqs = [
  {
    q: 'What is the best EFTPOS for plumbers in Adelaide?',
    a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for Adelaide plumbers. At 1.4% in-person with same-day settlement, it covers Adelaide\'s Adelaide suburban emergency call-outs and growth estate work and surrounding areas without relying on site WiFi.',
  },
  {
    q: 'Does Zeller work in Adelaide?',
    a: 'Yes — Zeller Terminal 1\'s Optus SIM covers all of Adelaide\'s metro area including Salisbury, Gawler, Mount Barker, and the southern suburbs. Same-day settlement is available to a Zeller Transaction Account.',
  },
  {
    q: 'What card payment fees do plumbers pay in Adelaide?',
    a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee on standard plans. The SIM plan costs $15/month on top of the $99 terminal hardware.',
  },
  {
    q: 'Do I need a licence to accept card payments as a plumber in South Australia?',
    a: 'No payment-specific licence is required. You need your trade licence (issued by Consumer and Business Services SA) and an ABN to open a merchant account with Zeller, Square, or Stripe.',
  },
  {
    q: 'How quickly do card payments settle for plumbers in Adelaide?',
    a: 'Zeller settles same-day to a Zeller Transaction Account. For Adelaide plumbers who purchase materials after a job, same-day funds mean no waiting overnight. Square and Stripe both settle next business day by default.',
  },
]
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Plumbers in Adelaide (2026)',
    description: 'Best EFTPOS for Adelaide plumbers — Adelaide growth estate builds, after-hours call-outs, and same-day settlement for material runs. Lowest rate, SIM connectivity, same-day settlement.',
    url: `${SITE}/blog/best-eftpos-plumbers-adelaide-2026`,
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    image: { '@type': 'ImageObject', url: `https://images.unsplash.com/photo-1504275427011-2a3c01e96d1d?w=1200&h=630&fit=crop&crop=center&q=80`, width: 1200, height: 630 },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Plumbers in Adelaide', item: `${SITE}/blog/best-eftpos-plumbers-adelaide-2026` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TradiePay AU — EFTPOS Guides for Adelaide Plumbers',
    description: 'Best EFTPOS terminal for plumbers in Adelaide, South Australia.',
    url: `${SITE}/blog/best-eftpos-plumbers-adelaide-2026`,
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
export default function BestEftposPlumbersAdelaide() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Plumbers in Adelaide (2026)"
        description="Best EFTPOS for Adelaide plumbers — Adelaide growth estate builds, after-hours call-outs, and same-day settlement for material runs. Lowest rate, SIM connectivity, same-day settlement."
        canonical="/blog/best-eftpos-plumbers-adelaide-2026"
        ogType="article"
        geoRegion="AU-SA"
        geoPlacename="Adelaide, South Australia"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={`https://images.unsplash.com/photo-1504275427011-2a3c01e96d1d?w=900&h=560&fit=crop&crop=center&q=80`} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">City Guide</span>
            <span>·</span><span>Adelaide, SA</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Plumbers in Adelaide (2026)</h1>
          <p className="hero-sub">Covering Adelaide suburban call-outs, growth estate plumbing, and regional SA work.</p>
          <nav className="jump-links">
            <a href="#verdict">Top Pick</a>
            <a href="#context">Why Adelaide</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
          Best EFTPOS for Plumbers in Adelaide
        </motion.h2>
        <div className="infobox mb-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Zeller Terminal 1</strong> is the top pick for Adelaide plumbers. At 1.4% in-person with no monthly fee and same-day settlement, it covers Adelaide estate sites and emergency call-outs where customer WiFi is unavailable or inaccessible.
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
          <Link to="/trades/plumbers/sa" className="text-brand-blue font-medium hover:underline">
            Best EFTPOS for Plumbers in South Australia →
          </Link>
          <Link to="/trades/plumbers" className="text-brand-blue font-medium hover:underline">
            National plumbers guide →
          </Link>
        </div>
      </section>
      <section id="context" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
            Why Adelaide Plumbers need SIM connectivity
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Growth estate plumbing', body: 'Adelaide\'s northern and southern growth corridors are active with new builds. Estate plumbing work before utilities are connected requires a SIM terminal.' },
              { title: 'After-hours emergency call-outs', body: 'Burst pipes and gas leaks happen at any hour in Adelaide. An EFTPOS solution that works without customer WiFi is essential for after-hours residential call-outs.' },
              { title: 'Regional SA coverage', body: 'SA plumbers covering the Barossa, Clare Valley, or regional areas need SIM connectivity. Optus covers most SA regional towns where trade work is concentrated.' },
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
      <FaqSection items={faqs} title={`FAQ — Plumbers in Adelaide`} />
      <RelatedLinks slug="plumbers" type="trade" currentState="sa" />
    </>
  )
}