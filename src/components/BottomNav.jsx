import { Link, useLocation } from 'react-router-dom'
import { Home, SlidersHorizontal, Calculator, Mail } from 'lucide-react'
import { haptic } from '../utils/haptic'

const items = [
  { label: 'Home',       href: '/',            icon: Home },
  { label: 'Compare',    href: '/#compare-all', icon: SlidersHorizontal },
  { label: 'Calculator', href: '/#calculator',  icon: Calculator },
  { label: 'Contact',    href: '/contact',      icon: Mail },
]

export default function BottomNav() {
  const { pathname } = useLocation()

  return (
    <nav
      className="sm:hidden fixed bottom-0 inset-x-0 z-50 border-t border-white/[0.08]"
      style={{
        background: 'rgba(26,26,46,0.85)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="grid grid-cols-4">
        {items.map(({ label, href, icon: Icon }) => {
          const isHash = href.includes('#')
          const active = !isHash && pathname === href
          return (
            <Link
              key={href}
              to={href}
              onClick={() => haptic('light')}
              className={`flex flex-col items-center justify-center gap-1 py-2 min-h-[56px] text-[10px] font-semibold tracking-wide transition-colors ${
                active ? 'text-brand-blue' : 'text-white/40 active:text-white/80'
              }`}
            >
              <Icon size={20} strokeWidth={active ? 2.5 : 1.75} />
              {label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
