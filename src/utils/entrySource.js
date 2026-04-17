// Measurement-only. Tags how a user reached /calculator so calculator_used
// and calculator_engage can be attributed to a surface.
//
// Tag precedence on calculator page load:
//   1. Explicit tag set by delegated click listener (below) on the origin page
//   2. document.referrer path — same-origin internal route
//   3. 'direct'  — no referrer or external referrer
//   4. 'unknown' — internal referrer but unmapped route

const KEY = 'entry_source'
const VALID = new Set(['homepage', 'trade_page', 'blog', 'direct', 'unknown'])

function sourceFromPath(path) {
  if (path === '/') return 'homepage'
  if (path.startsWith('/trades/')) return 'trade_page'
  if (path.startsWith('/blog/')) return 'blog'
  return null
}

function readSafe() {
  try { return sessionStorage.getItem(KEY) } catch { return null }
}
function writeSafe(val) {
  try { sessionStorage.setItem(KEY, val) } catch { /* storage blocked */ }
}

// Single document-level click listener — no per-CTA changes. Capture phase so
// we read the click before React handles it; never prevents default.
export function initEntrySourceListener() {
  if (typeof document === 'undefined') return
  document.addEventListener('click', e => {
    const anchor = e.target instanceof Element ? e.target.closest('a[href]') : null
    if (!anchor) return
    const href = anchor.getAttribute('href') || ''
    const isCalcLink =
      href === '/calculator' ||
      href.startsWith('/calculator?') ||
      href.startsWith('/calculator#')
    if (!isCalcLink) return
    const source = sourceFromPath(window.location.pathname)
    if (source) writeSafe(source)
    // Unmapped origin (e.g. /compare, /providers/*) — leave flag alone so
    // resolveEntrySource() can fall back to referrer on calculator mount.
  }, true)
}

// Called once on /calculator mount. Resolves and persists entry_source
// so trackCalculatorUsed and trackCalculatorEngage can read a stable value.
export function resolveEntrySource() {
  const existing = readSafe()
  if (existing && VALID.has(existing)) return existing

  let resolved = 'unknown'
  const ref = typeof document !== 'undefined' ? document.referrer : ''
  if (!ref) {
    resolved = 'direct'
  } else {
    try {
      const url = new URL(ref)
      if (url.hostname !== window.location.hostname) {
        resolved = 'direct'
      } else {
        resolved = sourceFromPath(url.pathname) || 'unknown'
      }
    } catch {
      resolved = 'unknown'
    }
  }
  writeSafe(resolved)
  return resolved
}

export function getEntrySource() {
  const v = readSafe()
  return v && VALID.has(v) ? v : 'unknown'
}
