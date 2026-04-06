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
  { label: 'Best EFTPOS for Painters in Adelaide (2026)' },
]
const faqs = [
  {
    q: 'What is the best EFTPOS for painters in Adelaide?',
    a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for Adelaide painters. At 1.4% in-person with same-day settlement, it covers Hills heritage work and outer suburb new builds.'
  },
  {
    q: 'Does Zeller work in Adelaide?',
    a: 'Yes — Zeller Terminal 1\'s Optus SIM covers Adelaide metro including the Hills, Northern Suburbs, and Fleurieu Peninsula.'
  },
  {
    q: 'What card payment fees do painters pay in Adelaide?',
    a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan costs $15/month on top of the $99 terminal hardware.'
  },
  {
    q: 'Do I need a licence to accept card payments as a painter in South Australia?',
    a: 'No payment-specific licence is required. You need your painting work licence from Consumer and Business Services (CBS) and an ABN to open a merchant account.'
  },
  {
    q: 'How quickly do card payments settle for painters in Adelaide?',
    a: 'Zeller settles same-day to a Zeller Transaction Account. Square settles next business day; Stripe settles in 2 business days.'
  }
]
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Painters in Adelaide (2026)',
    description: 'Best EFTPOS for Adelaide painters — Hills heritage painting, outer suburb new builds, and deposit collection before starting multi-day jobs.',
    url: 'https://tradiepayau.directory/blog/best-eftpos-painters-adelaide-2026',
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
      url: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1200&h=630&fit=crop&crop=center&q=80',
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
        name: 'Best EFTPOS for Painters in Adelaide (2026)',
        item: 'https://tradiepayau.directory/blog/best-eftpos-painters-adelaide-2026'
      }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TradiePay AU — EFTPOS Guides for Adelaide painters',
    description: 'Best EFTPOS terminal for painters in Adelaide, South Australia.',
    url: 'https://tradiepayau.directory/blog/best-eftpos-painters-adelaide-2026',
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
        name: 'What is the best EFTPOS for painters in Adelaide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for Adelaide painters. At 1.4% in-person with same-day settlement, it covers Hills heritage work and outer suburb new builds.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does Zeller work in Adelaide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — Zeller Terminal 1\'s Optus SIM covers Adelaide metro including the Hills, Northern Suburbs, and Fleurieu Peninsula.'
        }
      },
      {
        '@type': 'Question',
        name: 'What card payment fees do painters pay in Adelaide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan costs $15/month on top of the $99 terminal hardware.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need a licence to accept card payments as a painter in South Australia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No payment-specific licence is required. You need your painting work licence from Consumer and Business Services (CBS) and an ABN to open a merchant account.'
        }
      },
      {
        '@type': 'Question',
        name: 'How quickly do card payments settle for painters in Adelaide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zeller settles same-day to a Zeller Transaction Account. Square settles next business day; Stripe settles in 2 business days.'
        }
      }
    ]
  }
]
export default function BestEftposPaintersAdelaide() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Painters in Adelaide (2026)"
        description="Best EFTPOS for Adelaide painters — Hills heritage painting, outer suburb new builds, and deposit collection before starting multi-day jobs."
        canonical="/blog/best-eftpos-painters-adelaide-2026"
        ogType="article"
        geoRegion="AU-SA"
        geoPlacename="Adelaide, South Australia"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={`https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=900&h=560&fit=crop&crop=center&q=80`} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">City Guide</span>
            <span>·</span><span>Adelaide, SA</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Painters in Adelaide (2026)</h1>
          <p className="hero-sub">Covering Adelaide Hills heritage painting, outer suburb new builds in Angle Vale and Gawler, and deposit collection before starting multi-day jobs.</p>
          <nav className="jump-links">
            <a href="#verdict">Top Pick</a>
            <a href="#context">Why Adelaide</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
          Best EFTPOS for Painters in Adelaide
        </motion.h2>
        <div className="infobox mb-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Zeller Terminal 1</strong> is the top pick for Adelaide painters. Zeller Terminal 1 is the top pick for Adelaide painters. At 1.4% in-person with no monthly fee and same-day settlement, it covers Hills heritage work and outer suburb new builds without relying on site WiFi.
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
          <Link to="/blog/best-eftpos-painters-sa-2026" className="text-brand-blue font-medium hover:underline">
            Best EFTPOS for Painters in South Australia →
          </Link>
          <Link to="/trades/painters/sa" className="text-brand-blue font-medium hover:underline">
            South Australia painters guide →
          </Link>
          <Link to="/trades/painters" className="text-brand-blue font-medium hover:underline">
            National painters guide →
          </Link>
        </div>
      </section>
      <section id="context" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
            Why Adelaide Painters need SIM connectivity
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Adelaide Hills heritage painting', body: 'Heritage painting in Stirling, Hahndorf, and Aldgate involves premium jobs in areas with limited NBN. SIM connectivity handles payment at job completion.' },
              { title: 'Outer suburb new builds', body: 'New build painting in Angle Vale, Munno Para, and Gawler operates on sites without utilities. SIM connectivity is essential for collecting payment at practical completion.' },
              { title: 'Deposit collection before starting', body: 'Adelaide painters collecting deposits before multi-day jobs use Zeller payment links (1.7%) — clients pay via SMS before work begins.' },
              { title: 'Same-day settlement', body: 'Zeller settles to your Zeller Transaction Account same day — paint and materials can be purchased the same day the deposit is collected.' }
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title={`FAQ — Painters in Adelaide`} />
      <RelatedLinks slug="painters" type="trade" currentState="sa" />
    </>
  )
}
