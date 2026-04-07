import { Link } from 'react-router-dom'

// ─── Tape Hook icon ───────────────────────────────────────────────────────────
// Two strokes: white horizontal tape extending left→right, blue hook pushed
// along with it. Animation uses SMIL so it works in SVG user-unit space at
// any rendered size (SMIL keySplines ≡ CSS cubic-bezier(0.16,1,0.3,1)).

function TapeHookIcon({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      {/* White tape — starts at 0 length, draws left → right */}
      <line
        x1="4" y1="13" x2="24" y2="13"
        stroke="#E8EDF2"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray="20"
        strokeDashoffset="20"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="20" to="0"
          dur="1.1s"
          begin="0.15s"
          fill="freeze"
          calcMode="spline"
          keyTimes="0;1"
          keySplines="0.16 1 0.3 1"
        />
      </line>

      {/* Blue hook — starts at left edge, pushed right as tape extends */}
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          from="-20 0" to="0 0"
          dur="1.1s"
          begin="0.15s"
          fill="freeze"
          calcMode="spline"
          keyTimes="0;1"
          keySplines="0.16 1 0.3 1"
        />
        <polyline
          points="24,13 24,23 16,23"
          stroke="#2563EB"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

// ─── Wordmark ─────────────────────────────────────────────────────────────────

function Wordmark({ size = 'md' }) {
  const sizes = {
    sm: { text: '14px', badge: '8px' },
    md: { text: '18px', badge: '10px' },
  }
  const s = sizes[size] ?? sizes.md

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, whiteSpace: 'nowrap' }}>
      <span style={{ color: '#F0F4F8', fontSize: s.text }}>Tradie</span>
      <span style={{ color: '#3B82F6', fontSize: s.text }}>Pay</span>
      <span style={{
        marginLeft: '5px',
        display: 'inline-block',
        verticalAlign: 'middle',
        fontSize: s.badge,
        fontWeight: 700,
        letterSpacing: '0.05em',
        background: '#162040',
        color: '#93C5FD',
        padding: '2px 6px 2px',
        borderRadius: '4px',
        lineHeight: 1.5,
      }}>AU</span>
    </div>
  )
}

// ─── Logo ─────────────────────────────────────────────────────────────────────

export default function Logo({ className = '', size = 'md' }) {
  const iconSize = size === 'sm' ? 20 : 28

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-[5px] select-none group ${className}`}
      aria-label="TradiePay AU — home"
    >
      <span className="transition-transform duration-200 group-hover:scale-105 origin-left">
        <TapeHookIcon size={iconSize} />
      </span>
      <Wordmark size={size} />
    </Link>
  )
}
