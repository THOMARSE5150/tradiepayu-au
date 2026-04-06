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
  { label: 'Best EFTPOS for Concreters in Melbourne' },
]
const faqs = [
  {
    q: 'What is the best EFTPOS for concreters in Melbourne?',
    a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for Melbourne concreters. At 1.4% in-person with same-day settlement, it covers Melbourne\'s outer Melbourne growth corridor slabs and suburban driveway runs and surrounding areas without relying on site WiFi.',
  },
  {
    q: 'Does Zeller work in Melbourne?',
    a: 'Yes — Zeller Terminal 1\'s Optus SIM covers all of Melbourne\'s metro area including Werribee, Craigieburn, Pakenham, and Sunbury. Same-day settlement is available to a Zeller Transaction Account.',
  },
  {
    q: 'What card payment fees do concreters pay in Melbourne?',
    a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee on standard plans. The SIM plan costs $15/month on top of the $99 terminal hardware.',
  },
  {
    q: 'Do I need a licence to accept card payments as a concreter in Victoria?',
    a: 'No payment-specific licence is required. You need your trade licence (issued by Consumer Affairs Victoria) and an ABN to open a merchant account with Zeller, Square, or Stripe.',
  },
  {
    q: 'How quickly do card payments settle for concreters in Melbourne?',
    a: 'Zeller settles same-day to a Zeller Transaction Account. For Melbourne concreters who purchase materials after a job, same-day funds mean no waiting overnight. Square settles next business day; Stripe settles in 2 business days by default.',
  },
]
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Concreters in Melbourne (2026)',
    description: 'Best EFTPOS for Melbourne concreters — large deposits before the pour, outer Melbourne estate slabs, and same-day settlement for material runs. Lowest rate, SIM connectivity, same-day settlement.',
    url: `${SITE}/blog/best-eftpos-concreters-melbourne-2026`,
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
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
      { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Concreters in Melbourne', item: `${SITE}/blog/best-eftpos-concreters-melbourne-2026` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TradiePay AU — EFTPOS Guides for Melbourne Concreters',
    description: 'Best EFTPOS terminal for concreters in Melbourne, Victoria.',
    url: `${SITE}/blog/best-eftpos-concreters-melbourne-2026`,
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
export default function BestEftposConcretersMelbourne() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Concreters in Melbourne (2026)"
        description="Best EFTPOS for Melbourne concreters — large deposits before the pour, outer Melbourne estate slabs, and same-day settlement for material runs. Lowest rate, SIM connectivity, same-day settlement."
        canonical="/blog/best-eftpos-concreters-melbourne-2026"
        ogType="article"
        geoRegion="AU-VIC"
        geoPlacename="Melbourne, Victoria"
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
            <span>·</span><span>Melbourne, VIC</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Concreters in Melbourne (2026)</h1>
          <p className="hero-sub">Covering outer Melbourne growth corridor slabs, suburban driveways, and large deposit collection before the pour.</p>
          <nav className="jump-links">
            <a href="#verdict">Top Pick</a>
            <a href="#context">Why Melbourne</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
          Best EFTPOS for Concreters in Melbourne
        </motion.h2>
        <div className="infobox mb-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Zeller Terminal 1</strong> is the top pick for Melbourne concreters. At 1.4% in-person with no monthly fee and same-day settlement, it covers outer Melbourne estate sites and suburban driveway jobs where large deposits are collected before work starts.
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
          <Link to="/trades/concreters/vic" className="text-brand-blue font-medium hover:underline">
            Best EFTPOS for Concreters in Victoria →
          </Link>
          <Link to="/trades/concreters" className="text-brand-blue font-medium hover:underline">
            National concreters guide →
          </Link>
        </div>
      </section>
      <section id="context" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
            Why Melbourne Concreters need SIM connectivity
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Large deposits before the pour', body: 'Melbourne concreters typically collect 50% before pouring. Zeller payment links let you collect before mobilising — no bank transfer delay on large amounts.' },
              { title: 'Outer corridor estate slabs', body: 'Growth areas like Craigieburn, Pakenham, and Sunbury are active with house-and-land slabs. New estates have no utilities — SIM connectivity is essential.' },
              { title: 'Pool surrounds and driveways', body: 'Melbourne\'s suburban concreting market is strong. Driveway and pool surround jobs at occupied homes can use customer WiFi as backup, but SIM is the reliable primary.' },
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
      <FaqSection items={faqs} title={`FAQ — Concreters in Melbourne`} />
      <RelatedLinks slug="concreters" type="trade" currentState="vic" />
    </>
  )
}