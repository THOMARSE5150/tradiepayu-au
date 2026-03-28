import { Link } from 'react-router-dom'
import { Wrench } from 'lucide-react'

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Icon mark */}
      <div className="relative w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, #3b8dff 0%, #006aff 50%, #004fd4 100%)',
          boxShadow: '0 2px 16px rgba(0,106,255,0.5), inset 0 1px 0 rgba(255,255,255,0.25)',
        }}
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
        <Wrench size={18} className="text-white relative z-10" strokeWidth={2.5} />
      </div>

      {/* Wordmark */}
      <div className="font-display font-bold tracking-tight leading-none">
        <span className="text-white text-[18px]">Tradie</span>
        <span
          className="text-[18px]"
          style={{
            background: 'linear-gradient(90deg, #60a5fa 0%, #93c5fd 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >Pay</span>
        <span className="ml-1.5 align-middle inline-block text-[10px] font-bold px-1.5 py-[3px] rounded-md leading-none"
          style={{
            background: 'rgba(0,106,255,0.18)',
            border: '1px solid rgba(0,106,255,0.3)',
            color: '#60a5fa',
          }}
        >AU</span>
      </div>
    </Link>
  )
}
