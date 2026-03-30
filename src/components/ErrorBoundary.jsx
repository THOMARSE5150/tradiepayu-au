import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'js_error', {
        event_category: 'error',
        error_message: error?.message,
        component_stack: info?.componentStack?.slice(0, 200),
      })
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container-page py-20 text-center">
          <p className="text-4xl mb-4">⚠️</p>
          <h1 className="text-2xl font-bold text-brand-dark mb-3">Something went wrong</h1>
          <p className="text-slate-500 mb-6 max-w-sm mx-auto">
            This page ran into an error. Try refreshing, or go back to the home page.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="btn-secondary"
            >
              Try again
            </button>
            <Link to="/" className="btn-primary">Home →</Link>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
