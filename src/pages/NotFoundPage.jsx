import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search } from 'lucide-react'
import Meta from '../components/Meta'

const suggestions = [
  { label: 'Compare all providers', href: '/providers' },
  { label: 'Best EFTPOS for Electricians', href: '/trades/electricians' },
  { label: 'Best EFTPOS for Plumbers', href: '/trades/plumbers' },
  { label: 'Zeller full review', href: '/providers/zeller' },
  { label: 'Cost calculator', href: '/calculator' },
]

export default function NotFoundPage() {
  return (
    <>
      <Meta
        title="Page Not Found — TradiePay AU"
        description="The page you're looking for doesn't exist."
      />

      <section className="bg-brand-dark min-h-[80vh] flex items-center">
        <div className="container-page py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Large 404 */}
            <p className="text-[120px] sm:text-[180px] font-black text-white/[0.06] leading-none select-none mb-2">
              404
            </p>
            <div className="-mt-4 sm:-mt-8">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center mx-auto mb-6">
                <Search size={22} className="text-white/40" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">Page not found</h1>
              <p className="text-white/50 text-sm max-w-xs mx-auto mb-10">
                That page doesn't exist. Try one of these instead:
              </p>

              <div className="flex flex-col items-center gap-2 max-w-xs mx-auto mb-10">
                {suggestions.map(s => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="w-full text-sm text-white/60 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.07] rounded-xl px-4 py-3 transition-all text-left flex items-center justify-between group"
                  >
                    {s.label}
                    <ArrowLeft size={14} className="rotate-180 opacity-0 group-hover:opacity-100 transition-opacity text-brand-blue" />
                  </Link>
                ))}
              </div>

              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-600 text-white font-semibold rounded-2xl px-6 py-3 text-sm transition-colors"
              >
                <Home size={15} /> Back to home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
