import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Meta from '../../components/Meta'
import Breadcrumb from '../../components/Breadcrumb'
import { posts } from '../../data/posts'
import { blogOgUrl, blogCardUrl } from '../../utils/blogImage'

const SITE = 'https://tradiepayau.directory'


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
      image: blogOgUrl(p.slug),
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

const CATEGORY = {
  providers: { label: 'Provider review', color: 'bg-blue-600',   text: 'text-blue-700',   border: 'border-t-blue-500',   pill: 'bg-blue-600/90' },
  trades:    { label: 'Trade guide',     color: 'bg-amber-500',  text: 'text-amber-700',  border: 'border-t-amber-400',  pill: 'bg-amber-500/90' },
  guides:    { label: 'Setup & fees',    color: 'bg-emerald-600',text: 'text-emerald-700',border: 'border-t-emerald-500',pill: 'bg-emerald-600/90' },
  states:    { label: 'State guide',     color: 'bg-violet-600', text: 'text-violet-700', border: 'border-t-violet-500',  pill: 'bg-violet-600/90' },
  cities:    { label: 'City guide',      color: 'bg-rose-500',   text: 'text-rose-700',   border: 'border-t-rose-500',    pill: 'bg-rose-500/90' },
}

const FEATURED = new Set([
  'zeller-terminal-1-review-2026',
  'zeller-vs-square-eftpos-tradies',
  'zeller-vs-square-vs-stripe-eftpos-tradies-2026',
])

const FILTERS = [
  { id: 'all',       label: 'All guides' },
  { id: 'providers', label: 'Provider reviews' },
  { id: 'trades',    label: 'By trade' },
  { id: 'states',    label: 'By state' },
  { id: 'cities',    label: 'By city' },
  { id: 'guides',    label: 'Setup & fees' },
]

export default function BlogIndexPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const filtered = activeFilter === 'all' ? posts : posts.filter(p => p.category === activeFilter)

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
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map(f => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === f.id
                  ? 'bg-brand-blue text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-brand-blue hover:text-brand-blue'
              }`}
            >
              {f.label}
              {f.id !== 'all' && (
                <span className="ml-1.5 opacity-60">
                  {posts.filter(p => p.category === f.id).length}
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => {
            const cat = CATEGORY[post.category] ?? CATEGORY.guides
            const featured = FEATURED.has(post.slug)
            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i, 5) * 0.06 }}
                className={`bg-white rounded-2xl overflow-hidden flex flex-col border border-slate-100 border-t-4 shadow-sm hover:shadow-md transition-shadow ${cat.border}`}
              >
                {/* Image with overlays */}
                <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden aspect-[16/9] bg-slate-100 group">
                  <img
                    src={blogCardUrl(post.slug)}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={e => {
                      e.currentTarget.onerror = null
                      e.currentTarget.src = '/og-trade.svg'
                      e.currentTarget.className = 'w-full h-full object-contain p-8 opacity-30'
                    }}
                  />
                  {/* Bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  {/* Category pill */}
                  <span className={`absolute top-2.5 left-2.5 ${cat.pill} text-white text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full backdrop-blur-sm`}>
                    {cat.label}
                  </span>
                  {/* Featured badge */}
                  {featured && (
                    <span className="absolute top-2.5 right-2.5 bg-amber-400 text-amber-900 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full">
                      ★ Featured
                    </span>
                  )}
                </Link>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2.5">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-sm font-bold text-brand-dark leading-snug mb-2">
                    <Link to={`/blog/${post.slug}`} className="hover:text-brand-blue transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-4">
                    {post.description}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className={`inline-flex items-center gap-1 text-xs font-semibold ${cat.text} hover:underline`}
                  >
                    Read guide →
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>
    </>
  )
}
