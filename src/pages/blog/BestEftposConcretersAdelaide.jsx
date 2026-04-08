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
  { label: 'Best EFTPOS for Concreters in Adelaide (2026)' },
]
const faqs = [
  {
    q: 'What is the best EFTPOS for concreters in Adelaide?',
    a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for Adelaide concreters. At 1.4% in-person with same-day settlement, it covers northern and southern growth corridor slabs and suburban driveway jobs.'
  },
  {
    q: 'Does Zeller work in Adelaide?',
    a: 'Yes — Zeller Terminal 1\'s Optus SIM covers Adelaide metro including the Northern Suburbs, Southern Suburbs, and Adelaide Hills.'
  },
  {
    q: 'What card payment fees do concreters pay in Adelaide?',
    a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan costs $15/month on top of the $99 terminal hardware.'
  },
  {
    q: 'Do I need a licence to accept card payments as a concreter in South Australia?',
    a: 'No payment-specific licence is required. You need your building work contractors licence (Consumer and Business Services) and an ABN to open a merchant account.'
  },
  {
    q: 'How quickly do card payments settle for concreters in Adelaide?',
    a: 'Zeller settles same-day to a Zeller Transaction Account. Adelaide concreters purchasing ready-mix concrete after a deposit can access funds the same day.'
  }
]
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Concreters in Adelaide (2026)',
    description: 'Best EFTPOS for Adelaide concreters — new estate slabs in northern and southern growth areas, large deposits before the pour, and SIM connectivity.',
    url: 'https://tradiepayau.directory/blog/best-eftpos-concreters-adelaide-2026',
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
      url: blogOgUrl('best-eftpos-concreters-adelaide-2026'),
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
        name: 'Best EFTPOS for Concreters in Adelaide (2026)',
        item: 'https://tradiepayau.directory/blog/best-eftpos-concreters-adelaide-2026'
      }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TradiePay AU — EFTPOS Guides for Adelaide concreters',
    description: 'Best EFTPOS terminal for concreters in Adelaide, South Australia.',
    url: 'https://tradiepayau.directory/blog/best-eftpos-concreters-adelaide-2026',
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
        name: 'What is the best EFTPOS for concreters in Adelaide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for Adelaide concreters. At 1.4% in-person with same-day settlement, it covers northern and southern growth corridor slabs and suburban driveway jobs.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does Zeller work in Adelaide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — Zeller Terminal 1\'s Optus SIM covers Adelaide metro including the Northern Suburbs, Southern Suburbs, and Adelaide Hills.'
        }
      },
      {
        '@type': 'Question',
        name: 'What card payment fees do concreters pay in Adelaide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan costs $15/month on top of the $99 terminal hardware.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need a licence to accept card payments as a concreter in South Australia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No payment-specific licence is required. You need your building work contractors licence (Consumer and Business Services) and an ABN to open a merchant account.'
        }
      },
      {
        '@type': 'Question',
        name: 'How quickly do card payments settle for concreters in Adelaide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zeller settles same-day to a Zeller Transaction Account. Adelaide concreters purchasing ready-mix concrete after a deposit can access funds the same day.'
        }
      }
    ]
  }
]
export default function BestEftposConcretersAdelaide() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Concreters in Adelaide (2026)"
        description="Best EFTPOS for Adelaide concreters — new estate slabs in northern and southern growth areas, large deposits before the pour, and SIM connectivity."
        canonical="/blog/best-eftpos-concreters-adelaide-2026"
        ogType="article"
        geoRegion="AU-SA"
        geoPlacename="Adelaide, South Australia"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={blogHeroUrl('best-eftpos-concreters-adelaide-2026')} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">City Guide</span>
            <span>·</span><span>Adelaide, SA</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Concreters in Adelaide (2026)</h1>
          <p className="hero-sub">Covering Adelaide new estate slab work in northern and southern growth corridors, large deposits before the pour, and driveway and pool surround jobs.</p>
          <nav className="jump-links">
            <a href="#verdict">Top Pick</a>
            <a href="#context">Why Adelaide</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
          Best EFTPOS for Concreters in Adelaide
        </motion.h2>
        <div className="infobox mb-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Zeller Terminal 1</strong> is the top pick for Adelaide concreters. Zeller Terminal 1 is the top pick for Adelaide concreters. At 1.4% in-person with no monthly fee and same-day settlement, it covers Adelaide new estate slabs and suburban driveway jobs where large deposits are collected before the pour.
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
          <Link to="/blog/best-eftpos-concreters-sa-2026" className="text-brand-blue font-medium hover:underline">
            Best EFTPOS for Concreters in South Australia →
          </Link>
          <Link to="/trades/concreters/sa" className="text-brand-blue font-medium hover:underline">
            South Australia concreters guide →
          </Link>
          <Link to="/trades/concreters" className="text-brand-blue font-medium hover:underline">
            National concreters guide →
          </Link>
        </div>
      </section>
      <section id="context" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
            Why Adelaide Concreters need SIM connectivity
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Large deposits before the pour', body: 'Adelaide concreters typically collect 50% before the pour. On an $8,000 driveway job, that\'s $4,000 — Zeller payment links let you collect before mobilising.' },
              { title: 'Northern growth corridor slabs', body: 'New estate slab work in Angle Vale, Munno Para, and Gawler North operates on new land without utilities. A SIM terminal is the only payment option.' },
              { title: 'Southern suburbs and Fleurieu', body: 'Concreters working in Morphett Vale, Seaford, and down to Victor Harbor collect deposits before mobilising. Same-day settlement covers materials without waiting overnight.' },
              { title: 'Same-day materials settlement', body: 'Adelaide concreters often purchase concrete the morning of the pour. Same-day Zeller settlement means deposit funds are available to cover the ready-mix order.' }
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title={`FAQ — Concreters in Adelaide`} />
      <RelatedLinks slug="concreters" type="trade" currentState="sa" />
    </>
  )
}
