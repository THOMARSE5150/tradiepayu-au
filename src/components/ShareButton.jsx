import { useState } from 'react'
import { Share2, Link2, Check } from 'lucide-react'
import { haptic } from '../utils/haptic'

export default function ShareButton({ title, text, url }) {
  const [copied, setCopied] = useState(false)

  async function handleShare() {
    haptic('light')
    const shareUrl = url || window.location.href
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url: shareUrl })
      } catch {
        // user cancelled — no-op
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch {
        // clipboard blocked — no-op
      }
    }
  }

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-500 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
      title={copied ? 'Link copied!' : 'Share this page'}
    >
      {copied
        ? <><Check size={13} strokeWidth={2.5} className="text-green-500" /> Copied!</>
        : navigator.share
          ? <><Share2 size={13} /> Share</>
          : <><Link2 size={13} /> Copy link</>
      }
    </button>
  )
}
