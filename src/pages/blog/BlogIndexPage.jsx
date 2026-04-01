import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Meta from '../../components/Meta'
import Breadcrumb from '../../components/Breadcrumb'

const SITE = 'https://tradiepayau.directory'

const posts = [
  {
    slug: 'zeller-terminal-1-review-2026',
    title: 'Zeller Terminal 1 Review (2026) — The Best EFTPOS for Australian Tradies?',
    description: 'Independent review of the Zeller Terminal 1. Rate: 1.4%. Hardware: $99. SIM plan: $15/mo. Is it the best EFTPOS terminal in Australia?',
    date: '10 Feb 2026',
    readTime: '7 min read',
    image: 'photo-1556742049-0cfed4f6a45d',
  },
  {
    slug: 'square-terminal-review-2026',
    title: 'Square Terminal Review (2026) — Is It Worth It for Australian Tradies?',
    description: 'Independent review of the Square Terminal. Rate: 1.6%. Hardware: $329. Best-in-class offline mode. Is it worth the premium over Zeller?',
    date: '17 Feb 2026',
    readTime: '6 min read',
    image: 'photo-1556742031-c6961e8560b0',
  },
  {
    slug: 'best-eftpos-sole-traders-australia-2026',
    title: 'Best EFTPOS for Sole Traders in Australia (2026)',
    description: 'The best EFTPOS options for Australian sole traders — compared by rate, cost, and setup time. No contracts, no lock-in.',
    date: '24 Feb 2026',
    readTime: '7 min read',
    image: 'photo-1521791136064-7986c2920216',
  },
  {
    slug: 'eftpos-fees-tradies-australia-2026',
    title: 'EFTPOS Fees for Tradies in Australia (2026) — Full Breakdown',
    description: 'Zeller 1.4%, Square 1.6%, Stripe 1.7%. What those percentages actually cost a tradie per month — and which provider wins at every volume.',
    date: '15 Jan 2026',
    readTime: '6 min read',
    image: 'photo-1554224155-6726b3ff858f',
  },
  {
    slug: 'zeller-vs-square-eftpos-tradies',
    title: 'Zeller vs Square: Which EFTPOS Terminal is Better for Tradies?',
    description: 'Rate, SIM card, offline mode, settlement speed. A straight head-to-head for Australian tradies who need to pick one terminal.',
    date: '22 Jan 2026',
    readTime: '7 min read',
    image: 'photo-1556742031-c6961e8560b0',
  },
  {
    slug: 'accept-card-payments-sole-trader-australia',
    title: 'How to Accept Card Payments as a Sole Trader in Australia (2026)',
    description: 'Everything a sole-trader tradie needs to know: ABN setup, choosing a provider, hardware costs, and what the fees actually mean for your take-home pay.',
    date: '1 Feb 2026',
    readTime: '8 min read',
    image: 'photo-1607472586893-edb57bdc0e39',
  },
]

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'TradiePay AU Blog',
  description: 'In-depth guides on EFTPOS terminals, payment fees, and card payment setup for Australian tradies.',
  url: `${SITE}/blog`,
  publisher: {
    '@type': 'Organization',
    name: 'TradiePay AU',
    url: SITE,
  },
  blogPost: posts.map(p => ({
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.description,
    url: `${SITE}/blog/${p.slug}`,
  })),
}

export default function BlogIndexPage() {
  return (
    <>
      <Meta
        title="TradiePay AU Blog — EFTPOS Guides for Australian Tradies"
        description="In-depth guides on EFTPOS terminals, payment fees, and card payment setup for Australian tradies. Updated 2026."
        canonical="/blog"
        ogType="website"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-slate-900" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="hero-meta">
              <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Blog</span>
              <span>·</span>
              <span>Updated 2026</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
              EFTPOS Guides for Australian Tradies
            </h1>
            <p className="hero-sub">
              Straight-talking breakdowns of fees, hardware, and setup — written for tradies, not accountants.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="section container-page">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="lg-light rounded-2xl overflow-hidden flex flex-col"
            >
              <Link to={`/blog/${post.slug}`} className="block overflow-hidden aspect-[16/9] bg-slate-100">
                <img
                  src={`https://images.unsplash.com/${post.image}?w=800&h=450&fit=crop&crop=center&q=80`}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </Link>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-base font-bold text-brand-dark leading-snug mb-2">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-brand-blue transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">
                  {post.description}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
                >
                  Read guide →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  )
}
