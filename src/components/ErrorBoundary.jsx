import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, info: null, expanded: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    this.setState({ info })
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'js_error', {
        event_category: 'error',
        error_message: error?.message,
        component_stack: info?.componentStack?.slice(0, 200),
      })
    }
  }

  render() {
    if (!this.state.hasError) return this.props.children

    const { error, info, expanded } = this.state
    const url   = typeof window !== 'undefined' ? window.location.href : '—'
    const ua    = typeof navigator !== 'undefined' ? navigator.userAgent : '—'
    const ts    = new Date().toISOString()
    const stack = error?.stack || error?.message || 'No stack available'
    const componentStack = info?.componentStack?.trim() || 'No component stack'

    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-2xl">

          {/* Hero card — dark branded */}
          <div className="rounded-2xl overflow-hidden bg-brand-dark text-white shadow-2xl">

            {/* Accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-brand-blue via-blue-400 to-blue-600" />

            <div className="px-8 py-10 text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-500/15 border border-red-400/25 mb-6">
                <svg className="w-7 h-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>

              <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
              <p className="text-white/55 text-sm mb-1 font-mono truncate">{url}</p>
              <p className="text-white/40 text-xs mb-8">{error?.message || 'An unexpected error occurred'}</p>

              {/* Actions */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <button
                  onClick={() => this.setState({ hasError: false, error: null, info: null, expanded: false })}
                  className="h-10 px-5 rounded-xl border border-white/20 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Try again
                </button>
                <Link
                  to="/"
                  className="h-10 px-5 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-blue-500 transition-colors inline-flex items-center"
                >
                  Home →
                </Link>
                <button
                  onClick={() => window.location.reload()}
                  className="h-10 px-5 rounded-xl border border-white/20 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Reload page
                </button>
              </div>

              {/* Debug toggle */}
              <button
                onClick={() => this.setState(s => ({ expanded: !s.expanded }))}
                className="text-xs text-white/30 hover:text-white/60 transition-colors flex items-center gap-1.5 mx-auto"
              >
                <svg className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                {expanded ? 'Hide' : 'Show'} debug info
              </button>
            </div>

            {/* Debug panel */}
            {expanded && (
              <div className="border-t border-white/10 bg-black/30 px-8 py-6 text-left space-y-4">

                {/* Meta */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                  <span className="text-white/40">Time</span>
                  <span className="text-white/70 font-mono">{ts}</span>
                  <span className="text-white/40">URL</span>
                  <span className="text-white/70 font-mono break-all">{url}</span>
                  <span className="text-white/40">Browser</span>
                  <span className="text-white/70 font-mono break-all">{ua}</span>
                </div>

                {/* Error stack */}
                <div>
                  <p className="text-xs text-white/40 mb-1.5 uppercase tracking-wider font-semibold">Error stack</p>
                  <pre className="text-xs text-red-300/80 bg-red-950/40 rounded-xl p-4 overflow-x-auto whitespace-pre-wrap break-all leading-relaxed">{stack}</pre>
                </div>

                {/* Component stack */}
                <div>
                  <p className="text-xs text-white/40 mb-1.5 uppercase tracking-wider font-semibold">Component stack</p>
                  <pre className="text-xs text-orange-300/70 bg-orange-950/30 rounded-xl p-4 overflow-x-auto whitespace-pre-wrap break-all leading-relaxed">{componentStack}</pre>
                </div>

                <p className="text-xs text-white/25 pt-2">
                  Screenshot this panel and include it when reporting an issue.{' '}
                  <Link to="/contact" className="underline text-white/40 hover:text-white/60">Contact us →</Link>
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    )
  }
}
