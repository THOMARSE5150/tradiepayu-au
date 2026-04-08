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
  { label: 'Best EFTPOS for Concreters in Western Australia (2026)' },
]
const faqs = [
  {
    q: 'What is the best EFTPOS for concreters in Western Australia?',
    a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for WA concreters. At 1.4% in-person with same-day settlement, it covers Perth new estate slabs and outer suburb driveway jobs without relying on site WiFi.'
  },
  {
    q: 'Does Zeller work in Perth and regional WA?',
    a: 'Yes — Zeller Terminal 1\'s Optus SIM covers Perth metro and most regional WA towns. For truly remote sites, Square Terminal offline mode stores payments without mobile signal.'
  },
  {
    q: 'What card payment fees do concreters pay in Western Australia?',
    a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan costs $15/month on top of the $99 terminal.'
  },
  {
    q: 'Do I need a licence to accept card payments as a concreter in WA?',
    a: 'No payment-specific licence is required. You need your building contractor licence (Building and Energy) and an ABN to open a merchant account.'
  },
  {
    q: 'How quickly do card payments settle for concreters in WA?',
    a: 'Zeller settles same-day to a Zeller Transaction Account. WA concreters purchasing ready-mix concrete after collecting a deposit can access funds the same day.'
  }
]
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Concreters in Western Australia (2026)',
    description: 'Best EFTPOS for WA concreters — Perth new estate slabs, large deposits before the pour, and SIM connectivity on outer suburb development sites.',
    url: 'https://tradiepayau.directory/blog/best-eftpos-concreters-wa-2026',
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
      url: blogOgUrl('best-eftpos-concreters-wa-2026'),
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
        name: 'Best EFTPOS for Concreters in Western Australia (2026)',
        item: 'https://tradiepayau.directory/blog/best-eftpos-concreters-wa-2026'
      }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TradiePay AU — EFTPOS Guides for Western Australia Concreters',
    description: 'Best EFTPOS terminal for concreters in Western Australia.',
    url: 'https://tradiepayau.directory/blog/best-eftpos-concreters-wa-2026',
    areaServed: [
      {
        '@type': 'City',
        name: 'Perth'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Western Australia'
      }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best EFTPOS for concreters in Western Australia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for WA concreters. At 1.4% in-person with same-day settlement, it covers Perth new estate slabs and outer suburb driveway jobs without relying on site WiFi.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does Zeller work in Perth and regional WA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — Zeller Terminal 1\'s Optus SIM covers Perth metro and most regional WA towns. For truly remote sites, Square Terminal offline mode stores payments without mobile signal.'
        }
      },
      {
        '@type': 'Question',
        name: 'What card payment fees do concreters pay in Western Australia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan costs $15/month on top of the $99 terminal.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need a licence to accept card payments as a concreter in WA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No payment-specific licence is required. You need your building contractor licence (Building and Energy) and an ABN to open a merchant account.'
        }
      },
      {
        '@type': 'Question',
        name: 'How quickly do card payments settle for concreters in WA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zeller settles same-day to a Zeller Transaction Account. WA concreters purchasing ready-mix concrete after collecting a deposit can access funds the same day.'
        }
      }
    ]
  }
]
export default function BestEftposConcretersWAPost() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Concreters in Western Australia (2026)"
        description="Best EFTPOS for WA concreters — Perth new estate slabs, large deposits before the pour, and SIM connectivity on outer suburb development sites."
        canonical="/blog/best-eftpos-concreters-wa-2026"
        ogType="article"
        geoRegion="AU-WA"
        geoPlacename="Perth, Western Australia"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={blogHeroUrl('best-eftpos-concreters-wa-2026')} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">State Guide</span>
            <span>·</span><span>Western Australia</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Concreters in Western Australia (2026)</h1>
          <p className="hero-sub">Covering Perth new estate slab work, large deposits before the pour, and remote WA mining infrastructure concrete.</p>
          <nav className="jump-links">
            <a href="#verdict">Top Pick</a>
            <a href="#coverage">Coverage</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
          Best EFTPOS for Concreters in Western Australia
        </motion.h2>
        <div className="infobox mb-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Zeller Terminal 1</strong> is the top pick for Western Australia concreters. Zeller Terminal 1 is the top pick for WA concreters. At 1.4% in-person with no monthly fee and same-day settlement, it covers Perth new estate slab work and outer suburb driveway jobs where large deposits are collected before the pour.
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
          <Link to="/trades/concreters/wa" className="text-brand-blue font-medium hover:underline">
            Western Australia Concreters guide on TradiePay →
          </Link>
          <Link to="/trades/concreters" className="text-brand-blue font-medium hover:underline">
            National concreters guide →
          </Link>
        </div>
      </section>
      <section id="coverage" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
            Coverage in Western Australia
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Large deposits before the pour', body: 'WA concreters typically collect 50% before the pour. On a $9,000 slab job, that\'s $4,500 — Zeller payment links let you collect before mobilising, no bank transfer needed.' },
              { title: 'Perth new estate slab work', body: 'Estate slab work in Ellenbrook, Baldivis, and Harrisdale operates on new land without utilities. A SIM terminal is the only payment option on site.' },
              { title: 'Remote WA mining infrastructure', body: 'WA concreters working on mining infrastructure in the Pilbara or Goldfields face sparse connectivity. Zeller\'s Optus SIM or Square\'s offline mode covers most remote sites.' },
              { title: 'Same-day materials settlement', body: 'WA concreters often purchase concrete the morning of the pour. Same-day Zeller settlement means deposit funds are available to cover the ready-mix order.' }
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 lg-light rounded-2xl p-5">
            <h3 className="font-semibold text-brand-dark mb-2 text-sm">Licensing &amp; regulatory body</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Concreters in Western Australia are regulated by <strong>Building and Energy</strong>. WA concreters working on residential slabs require a building contractor licence from Building and Energy. An ABN is needed to open a merchant account.</p>
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title={`FAQ — Concreters in Western Australia`} />
      <RelatedLinks slug="concreters" type="trade" currentState="wa" />
    </>
  )
}
