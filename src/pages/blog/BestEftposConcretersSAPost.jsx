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
  { label: 'Best EFTPOS for Concreters in South Australia (2026)' },
]
const faqs = [
  {
    q: 'What is the best EFTPOS for concreters in South Australia?',
    a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for SA concreters. At 1.4% in-person with same-day settlement, it covers Adelaide new estate slabs and outer suburb driveway jobs.'
  },
  {
    q: 'Does Zeller work in Adelaide and regional SA?',
    a: 'Yes — Zeller Terminal 1\'s Optus SIM covers Adelaide metro and most regional SA towns including the Barossa, Fleurieu Peninsula, and Mount Gambier.'
  },
  {
    q: 'What card payment fees do concreters pay in South Australia?',
    a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan costs $15/month on top of the $99 terminal.'
  },
  {
    q: 'Do I need a licence to accept card payments as a concreter in SA?',
    a: 'No payment-specific licence is required. You need your building work contractors licence (Consumer and Business Services) and an ABN to open a merchant account.'
  },
  {
    q: 'How quickly do card payments settle for concreters in SA?',
    a: 'Zeller settles same-day to a Zeller Transaction Account. SA concreters purchasing ready-mix concrete after collecting a deposit can access funds the same day.'
  }
]
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Concreters in South Australia (2026)',
    description: 'Best EFTPOS for SA concreters — Adelaide new estate slabs, large deposits before the pour, and SIM connectivity on outer suburb development sites.',
    url: 'https://tradiepayau.directory/blog/best-eftpos-concreters-sa-2026',
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
    author: {
      '@type': 'Organization',
      name: 'TradiePay AU',
      url: 'https://tradiepayau.directory'
    },
    publisher: {
      '@type': 'Organization',
      name: 'TradiePay AU',
      url: 'https://tradiepayau.directory'
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tradiepayau.directory/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://tradiepayau.directory/blog'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Best EFTPOS for Concreters in South Australia (2026)',
        item: 'https://tradiepayau.directory/blog/best-eftpos-concreters-sa-2026'
      }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TradiePay AU — EFTPOS Guides for South Australia Concreters',
    description: 'Best EFTPOS terminal for concreters in South Australia.',
    url: 'https://tradiepayau.directory/blog/best-eftpos-concreters-sa-2026',
    areaServed: [
      {
        '@type': 'City',
        name: 'Adelaide'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'South Australia'
      }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best EFTPOS for concreters in South Australia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for SA concreters. At 1.4% in-person with same-day settlement, it covers Adelaide new estate slabs and outer suburb driveway jobs.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does Zeller work in Adelaide and regional SA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — Zeller Terminal 1\'s Optus SIM covers Adelaide metro and most regional SA towns including the Barossa, Fleurieu Peninsula, and Mount Gambier.'
        }
      },
      {
        '@type': 'Question',
        name: 'What card payment fees do concreters pay in South Australia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan costs $15/month on top of the $99 terminal.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need a licence to accept card payments as a concreter in SA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No payment-specific licence is required. You need your building work contractors licence (Consumer and Business Services) and an ABN to open a merchant account.'
        }
      },
      {
        '@type': 'Question',
        name: 'How quickly do card payments settle for concreters in SA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zeller settles same-day to a Zeller Transaction Account. SA concreters purchasing ready-mix concrete after collecting a deposit can access funds the same day.'
        }
      }
    ]
  }
]
export default function BestEftposConcretersSAPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Concreters in South Australia (2026)"
        description="Best EFTPOS for SA concreters — Adelaide new estate slabs, large deposits before the pour, and SIM connectivity on outer suburb development sites."
        canonical="/blog/best-eftpos-concreters-sa-2026"
        ogType="article"
        geoRegion="AU-SA"
        geoPlacename="Adelaide, South Australia"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={`https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&h=560&fit=crop&crop=center&q=80`} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">State Guide</span>
            <span>·</span><span>South Australia</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Concreters in South Australia (2026)</h1>
          <p className="hero-sub">Covering Adelaide new estate slab work, large deposits before the pour, and outer suburb driveway and pool surround jobs.</p>
          <nav className="jump-links">
            <a href="#verdict">Top Pick</a>
            <a href="#coverage">Coverage</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
          Best EFTPOS for Concreters in South Australia
        </motion.h2>
        <div className="infobox mb-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Zeller Terminal 1</strong> is the top pick for South Australia concreters. Zeller Terminal 1 is the top pick for SA concreters. At 1.4% in-person with no monthly fee and same-day settlement, it covers Adelaide new estate slabs and outer suburb driveway jobs where large deposits are collected before the pour.
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
          <Link to="/trades/concreters/sa" className="text-brand-blue font-medium hover:underline">
            South Australia Concreters guide on TradiePay →
          </Link>
          <Link to="/trades/concreters" className="text-brand-blue font-medium hover:underline">
            National concreters guide →
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
              { title: 'Large deposits before the pour', body: 'SA concreters typically collect 50% before the pour. On an $8,000 driveway job, that\'s $4,000 — Zeller payment links let you collect before mobilising.' },
              { title: 'Adelaide new estate slab work', body: 'New estate slab work in Angle Vale, Munno Para, and Gawler North operates on new land without utilities. A SIM terminal is the only payment option.' },
              { title: 'Pool surrounds and driveways', body: 'SA concreters doing pool surrounds in the eastern suburbs and driveways in the northern suburbs collect large deposits. Same-day settlement is critical for material sourcing.' },
              { title: 'Same-day materials settlement', body: 'SA concreters often purchase concrete the morning of the pour. Same-day Zeller settlement means deposit funds are available to cover the ready-mix order.' }
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 lg-light rounded-2xl p-5">
            <h3 className="font-semibold text-brand-dark mb-2 text-sm">Licensing &amp; regulatory body</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Concreters in South Australia are regulated by <strong>Consumer and Business Services (CBS)</strong>. SA concreters working on residential slabs need a building work contractors licence from Consumer and Business Services (CBS). An ABN is needed to open a merchant account.</p>
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title={`FAQ — Concreters in South Australia`} />
      <RelatedLinks slug="concreters" type="trade" currentState="sa" />
    </>
  )
}
