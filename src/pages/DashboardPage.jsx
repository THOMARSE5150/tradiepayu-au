import { useState, useEffect, useCallback } from 'react'
import { RefreshCw, LogOut, TrendingUp, Users, Eye, Mail, AlertCircle, Loader2 } from 'lucide-react'

const API_URL = import.meta.env.VITE_DASHBOARD_API_URL

// ── Token gate ─────────────────────────────────────────────────────────────

function TokenGate({ onAuth }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if (!value.trim()) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API_URL}?period=7d`, {
        headers: { Authorization: `Bearer ${value.trim()}` },
      })
      if (res.status === 401) { setError('Incorrect password.'); return }
      if (!res.ok) { setError('Connection error — check worker is deployed.'); return }
      sessionStorage.setItem('dash_token', value.trim())
      onAuth(value.trim())
    } catch {
      setError('Cannot reach dashboard API. Check VITE_DASHBOARD_API_URL is set.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-xs">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-1.5 text-brand-blue font-extrabold text-xl tracking-tight">
            TradiePay<span className="text-xs bg-brand-blue text-white rounded px-1 py-0.5 ml-0.5 font-bold">AU</span>
          </span>
          <p className="text-zinc-500 text-sm mt-1">Dashboard</p>
        </div>
        {!API_URL ? (
          <div className="bg-amber-950/50 border border-amber-800/50 rounded-2xl p-4 text-center">
            <AlertCircle size={18} className="text-amber-400 mx-auto mb-2" />
            <p className="text-amber-300 text-sm font-semibold">Not configured</p>
            <p className="text-amber-500 text-xs mt-1">Set VITE_DASHBOARD_API_URL in Railway env vars and redeploy.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-3">
            <input
              type="password"
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="Dashboard password"
              autoFocus
              className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-blue text-sm"
            />
            {error && <p className="text-red-400 text-xs text-center">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-brand-blue text-white font-semibold rounded-xl text-sm hover:bg-blue-600 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 size={15} className="animate-spin" /> : null}
              {loading ? 'Checking…' : 'Enter dashboard'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

// ── Sub-components ─────────────────────────────────────────────────────────

function StatCard({ icon: Icon, label, value, sub, accent }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4">
      <div className="flex items-center gap-2 mb-3">
        <Icon size={14} className={accent ?? 'text-zinc-500'} />
        <span className="text-zinc-500 text-xs font-medium">{label}</span>
      </div>
      <p className="text-white text-2xl font-bold leading-none">{value ?? '—'}</p>
      {sub && <p className="text-zinc-600 text-xs mt-1">{sub}</p>}
    </div>
  )
}

function ProviderBars({ rows }) {
  const max = Math.max(...rows.map(r => r.clicks), 1)
  const colors = { zeller: '#006aff', square: '#1a1a1a', stripe: '#635bff', tyro: '#d4006e', shift4: '#e55a00' }
  return (
    <div className="space-y-2.5">
      {rows.length === 0 && <p className="text-zinc-600 text-xs py-4 text-center">No data yet for this period</p>}
      {rows.map(r => (
        <div key={r.provider} className="flex items-center gap-3">
          <span className="text-zinc-400 text-xs w-14 capitalize flex-shrink-0">{r.provider}</span>
          <div className="flex-1 bg-zinc-800 rounded-full h-2">
            <div
              className="h-2 rounded-full transition-all"
              style={{ width: `${(r.clicks / max) * 100}%`, background: colors[r.provider] ?? '#006aff' }}
            />
          </div>
          <span className="text-zinc-400 text-xs w-6 text-right flex-shrink-0">{r.clicks}</span>
        </div>
      ))}
    </div>
  )
}

function DataTable({ headers, rows, emptyMsg = 'No data' }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-zinc-800">
            {headers.map(h => (
              <th key={h} className="pb-2 text-left text-zinc-600 font-semibold uppercase tracking-wider pr-4 last:pr-0 whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr><td colSpan={headers.length} className="py-6 text-zinc-600 text-center">{emptyMsg}</td></tr>
          ) : rows.map((row, i) => (
            <tr key={i} className="border-b border-zinc-800/50 last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="py-2 pr-4 last:pr-0 text-zinc-300 whitespace-nowrap">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function SectionCard({ title, children }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
      <h2 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-4">{title}</h2>
      {children}
    </div>
  )
}

function fmt(n) { return typeof n === 'number' ? n.toLocaleString() : '—' }

// ── Main dashboard ─────────────────────────────────────────────────────────

function Dashboard({ token, onLogout }) {
  const [period, setPeriod]   = useState('7d')
  const [data, setData]       = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API_URL}?period=${period}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.status === 401) { onLogout(); return }
      const json = await res.json()
      if (json.error === 'not_configured') {
        setError({ type: 'config', message: json.message })
        return
      }
      if (json.error) {
        setError({ type: 'api', message: json.message ?? json.error })
        return
      }
      setData(json)
      setLastUpdated(new Date())
    } catch {
      setError({ type: 'network', message: 'Cannot reach dashboard API.' })
    } finally {
      setLoading(false)
    }
  }, [period, token, onLogout])

  useEffect(() => { load() }, [load])

  const overview       = data?.ga4?.overview       ?? {}
  const topPages       = data?.ga4?.topPages        ?? []
  const providerClicks = data?.ga4?.providerClicks  ?? []
  const emailCaptures  = data?.ga4?.emailCaptures   ?? 0
  const scQueries      = data?.searchConsole?.topQueries ?? []
  const scPages        = data?.searchConsole?.topPages   ?? []

  return (
    <div className="min-h-screen bg-zinc-950 pb-12">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <span className="text-white font-bold text-sm flex-1">
            TradiePay <span className="text-zinc-500 font-normal">Dashboard</span>
          </span>

          {/* Period toggle */}
          <div className="flex bg-zinc-800 rounded-lg p-0.5 gap-0.5">
            {['7d', '28d'].map(p => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
                  period === p ? 'bg-brand-blue text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <button
            onClick={load}
            disabled={loading}
            className="p-1.5 text-zinc-500 hover:text-zinc-200 transition-colors disabled:opacity-40"
            title="Refresh"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
          </button>
          <button
            onClick={onLogout}
            className="p-1.5 text-zinc-500 hover:text-zinc-200 transition-colors"
            title="Log out"
          >
            <LogOut size={14} />
          </button>
        </div>
        {lastUpdated && !loading && (
          <div className="max-w-5xl mx-auto px-4 pb-1.5">
            <p className="text-zinc-700 text-[10px]">Updated {lastUpdated.toLocaleTimeString()}</p>
          </div>
        )}
      </div>

      <div className="max-w-5xl mx-auto px-4 pt-6 space-y-4">

        {/* Error state */}
        {error && (
          <div className="bg-red-950/40 border border-red-800/40 rounded-2xl p-5 flex gap-3 items-start">
            <AlertCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-300 text-sm font-semibold">
                {error.type === 'config' ? 'Worker not configured' : 'Error loading data'}
              </p>
              <p className="text-red-500 text-xs mt-1">{error.message}</p>
              {error.type === 'config' && (
                <p className="text-red-600 text-xs mt-2">Add DASHBOARD_TOKEN, GA4_PROPERTY_ID, and GOOGLE_SERVICE_ACCOUNT as secrets in your Cloudflare Worker settings, then refresh.</p>
              )}
            </div>
          </div>
        )}

        {/* Loading skeleton */}
        {loading && !data && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-pulse">
            {[0,1,2,3].map(i => <div key={i} className="h-24 bg-zinc-900 rounded-2xl" />)}
          </div>
        )}

        {/* Stat cards */}
        {(data || loading) && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatCard icon={Users}      label="Users"          value={fmt(overview.users)}      sub={`${period} period`}    accent="text-brand-blue" />
            <StatCard icon={TrendingUp} label="Sessions"       value={fmt(overview.sessions)}   sub={`${period} period`}    accent="text-emerald-400" />
            <StatCard icon={Eye}        label="Pageviews"      value={fmt(overview.pageviews)}  sub={`${period} period`}    accent="text-violet-400" />
            <StatCard icon={Mail}       label="Email Captures" value={fmt(emailCaptures)}       sub={`${period} period`}    accent="text-amber-400" />
          </div>
        )}

        {/* Provider clicks + Top pages */}
        {data && (
          <div className="grid sm:grid-cols-2 gap-4">
            <SectionCard title="Provider card clicks">
              <ProviderBars rows={providerClicks} />
            </SectionCard>

            <SectionCard title="Top pages (sessions)">
              <DataTable
                headers={['Page', 'Sessions', 'Views']}
                emptyMsg="No page data"
                rows={topPages.map(p => [
                  <span className="text-zinc-300 font-mono text-[11px] max-w-[140px] truncate block" title={p.path}>{p.path}</span>,
                  <span className="text-brand-blue font-semibold">{fmt(p.sessions)}</span>,
                  fmt(p.pageviews),
                ])}
              />
            </SectionCard>
          </div>
        )}

        {/* Search Console queries */}
        {data && (
          <SectionCard title="Top search queries (Search Console)">
            <DataTable
              headers={['Query', 'Clicks', 'Impressions', 'CTR', 'Position']}
              emptyMsg="Search Console data takes 24–48h to appear after linking"
              rows={scQueries.map(q => [
                <span className="text-zinc-300 max-w-[180px] sm:max-w-[280px] truncate block" title={q.query}>{q.query}</span>,
                <span className="text-brand-blue font-semibold">{fmt(q.clicks)}</span>,
                fmt(q.impressions),
                <span className={q.ctr > 5 ? 'text-emerald-400' : 'text-zinc-400'}>{q.ctr}%</span>,
                <span className={q.position <= 10 ? 'text-emerald-400' : 'text-zinc-400'}>{q.position}</span>,
              ])}
            />
          </SectionCard>
        )}

        {/* Search Console pages */}
        {data && scPages.length > 0 && (
          <SectionCard title="Top landing pages from search">
            <DataTable
              headers={['URL', 'Clicks', 'Impressions']}
              rows={scPages.map(p => [
                <span className="text-zinc-300 font-mono text-[11px] max-w-[200px] truncate block" title={p.page}>{p.page.replace('https://tradiepayau.directory', '')}</span>,
                <span className="text-brand-blue font-semibold">{fmt(p.clicks)}</span>,
                fmt(p.impressions),
              ])}
            />
          </SectionCard>
        )}

      </div>
    </div>
  )
}

// ── Page export ────────────────────────────────────────────────────────────

export default function DashboardPage() {
  // noindex — keep this page out of search results
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex,nofollow'
    document.head.appendChild(meta)
    return () => document.head.removeChild(meta)
  }, [])

  const [token, setToken] = useState(() => sessionStorage.getItem('dash_token') ?? '')

  const logout = () => {
    sessionStorage.removeItem('dash_token')
    setToken('')
  }

  if (!token) return <TokenGate onAuth={setToken} />
  return <Dashboard token={token} onLogout={logout} />
}
