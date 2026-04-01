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
  {
    slug: 'stripe-terminal-review-2026',
    title: 'Stripe Terminal Review (2026) — Is Stripe Worth It for Australian Tradies?',
    description: 'Stripe Terminal: 1.7% + $0.10 in-person, 24/7 support, best API. How it compares to Zeller and Square for Australian tradies.',
    date: '2 Apr 2026',
    readTime: '7 min read',
    image: 'photo-1601597111158-2fceff292cdc',
  },
  {
    slug: 'tyro-eftpos-review-2026',
    title: 'Tyro EFTPOS Review (2026) — Is Tyro Good for Tradies?',
    description: 'Tyro is a fully licensed Australian bank with competitive payment links (1.4% incl. GST). But the in-person rate requires a quote. Full review for tradies.',
    date: '2 Apr 2026',
    readTime: '7 min read',
    image: 'photo-1563013544-824ae1b704d3',
  },
  {
    slug: 'shift4-eftpos-review-2026',
    title: 'Shift4 EFTPOS Review (2026) — Is Shift4 Worth It for Australian Tradies?',
    description: 'Shift4 offers surcharging that passes fees to customers. No monthly fee. Is it right for your trade business? Full independent review.',
    date: '2 Apr 2026',
    readTime: '6 min read',
    image: 'photo-1559526324-4b87b5e36e44',
  },
  {
    slug: 'zeller-vs-tyro-eftpos-tradies',
    title: 'Zeller vs Tyro: Which EFTPOS is Better for Tradies? (2026)',
    description: 'Transparent pricing vs negotiated rates. SIM connectivity vs WiFi-only. Same-day vs next-day settlement. A head-to-head for Australian tradies.',
    date: '2 Apr 2026',
    readTime: '6 min read',
    image: 'photo-1556742031-c6961e8560b0',
  },
  {
    slug: 'surcharging-eftpos-tradies-australia-2026',
    title: 'Surcharging for Tradies: How to Pass EFTPOS Fees to Customers (2026)',
    description: 'What surcharging is, how to set it up on Zeller and Square, what the RBA rules say, and when it makes sense for Australian tradies.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    image: 'photo-1554224155-6726b3ff858f',
  },
  {
    slug: 'zeller-vs-square-vs-stripe-eftpos-tradies-2026',
    title: 'Zeller vs Square vs Stripe: Best EFTPOS for Australian Tradies (2026)',
    description: 'A full 3-way comparison. Rates, hardware, SIM connectivity, offline mode, and settlement speed — plus real monthly cost at every volume.',
    date: '2 Apr 2026',
    readTime: '8 min read',
    image: 'photo-1556742049-0cfed4f6a45d',
  },
  {
    slug: 'best-eftpos-builders-australia-2026',
    title: 'Best EFTPOS for Builders in Australia (2026)',
    description: 'Builders need deposits, progress payments, multi-worker sites, and connectivity on early-stage builds. Here is the best EFTPOS setup for Australian builders.',
    date: '2 Apr 2026',
    readTime: '7 min read',
    image: 'photo-1621905252507-b35492cc74b4',
  },
  {
    slug: 'best-eftpos-plumbers-australia-2026',
    title: 'Best EFTPOS for Plumbers in Australia (2026)',
    description: 'Plumbers work in basements, plant rooms, new estates, and emergency call-outs at any hour. Here is the EFTPOS setup that works without customer WiFi.',
    date: '2 Apr 2026',
    readTime: '6 min read',
    image: 'photo-1585771724684-38269d6639fd',
  },
  {
    slug: 'stripe-vs-square-eftpos-australia-2026',
    title: 'Stripe vs Square: Which Is Better for Australian Tradies? (2026)',
    description: 'Stripe and Square are both available in Australia. We compare in-person rates, hardware, connectivity, and the one area where each wins.',
    date: '2 Apr 2026',
    readTime: '7 min read',
    image: 'photo-1556742049-0cfed4f6a45d',
  },
  {
    slug: 'how-to-get-paid-faster-sole-trader-australia',
    title: 'How to Get Paid Faster as a Sole Trader in Australia',
    description: 'Same-day settlement, payment links at job completion, and on-site EFTPOS. The five changes that cut debtor days from weeks to hours.',
    date: '2 Apr 2026',
    readTime: '6 min read',
    image: 'photo-1563013544-824ae1b704d3',
  },
  {
    slug: 'best-eftpos-electricians-australia-2026',
    title: 'Best EFTPOS for Electricians in Australia (2026)',
    description: 'Switchboard rooms, roof voids, and new estates without WiFi. Here is the EFTPOS setup that works where electricians actually work.',
    date: '2 Apr 2026',
    readTime: '6 min read',
    image: 'photo-1621905252507-b35492cc74b4',
  },
  {
    slug: 'best-eftpos-glaziers-australia-2026',
    title: 'Best EFTPOS for Glaziers in Australia (2026)',
    description: 'Emergency glazing is 24/7, in high-rise buildings, and on sites without WiFi. The EFTPOS setup that works at any hour.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    image: 'photo-1504307651254-35680f356dfd',
  },
  {
    slug: 'best-eftpos-roofers-australia-2026',
    title: 'Best EFTPOS for Roofers in Australia (2026)',
    description: 'Storm-damage call-outs, rooftop work, and large residential jobs. The best EFTPOS for Australian roofers in 2026.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    image: 'photo-1558618666-fcd25c85cd64',
  },
  {
    slug: 'best-eftpos-hvac-australia-2026',
    title: 'Best EFTPOS for HVAC Technicians in Australia (2026)',
    description: 'Plant rooms, rooftop units, and commercial buildings after hours. The EFTPOS that works where HVAC technicians actually work.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    image: 'photo-1558618047-3c8c76ca7d13',
  },
]

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog' },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'TradiePay AU Blog',
    description: 'In-depth guides on EFTPOS terminals, payment fees, and card payment setup for Australian tradies.',
    url: `${SITE}/blog`,
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    blogPost: posts.map(p => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.description,
      url: `${SITE}/blog/${p.slug}`,
      image: `https://images.unsplash.com/${p.image}?w=1200&h=630&fit=crop&crop=center&q=80`,
      author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
      publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'EFTPOS Guides for Australian Tradies',
    description: 'All blog posts from TradiePay AU — reviews, comparisons, and setup guides for tradie payment systems.',
    url: `${SITE}/blog`,
    numberOfItems: posts.length,
    itemListElement: posts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      url: `${SITE}/blog/${p.slug}`,
      description: p.description,
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
    ],
  },
]

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
