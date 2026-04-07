/**
 * Haptic feedback utility.
 *
 * Android / PWA: navigator.vibrate() — full pattern support.
 * iOS Safari:    vibrate() is unsupported; falls back to a near-silent
 *                AudioContext click so the interaction still feels physical.
 *                (Real haptics on iOS require a Capacitor/native wrapper.)
 *
 * Types:
 *   light     —  8ms        navigation, toggles, list item taps
 *   medium    — 18ms        button press, card selection
 *   heavy     — 35ms        destructive or high-importance actions
 *   selection — 6ms         picker steps, tab changes, segmented control
 *   success   — [12,40,12]  form submit, confirmation
 *   warning   — [20,30,20]  caution prompt, limit reached
 *   error     — [60,40,60,40,60]  validation failure, blocked action
 */

const PATTERNS = {
  light:     8,
  medium:    18,
  heavy:     35,
  selection: 6,
  success:   [12, 40, 12],
  warning:   [20, 30, 20],
  error:     [60, 40, 60, 40, 60],
}

// iOS AudioContext click — very brief, very quiet; gives a perceptible
// physical cue when vibrate() is unavailable.
const IOS_CONFIGS = {
  light:     { freq: 1200, dur: 0.006, gain: 0.018 },
  medium:    { freq: 900,  dur: 0.010, gain: 0.022 },
  heavy:     { freq: 650,  dur: 0.018, gain: 0.028 },
  selection: { freq: 1400, dur: 0.005, gain: 0.015 },
  success:   { freq: 1000, dur: 0.014, gain: 0.022 },
  warning:   { freq: 500,  dur: 0.020, gain: 0.025 },
  error:     { freq: 280,  dur: 0.030, gain: 0.030 },
}

function iosTick(type) {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext
    if (!Ctx) return
    const ctx  = new Ctx()
    const osc  = ctx.createOscillator()
    const gain = ctx.createGain()
    const c    = IOS_CONFIGS[type] || IOS_CONFIGS.light

    gain.gain.setValueAtTime(c.gain, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + c.dur)
    osc.frequency.setValueAtTime(c.freq, ctx.currentTime)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + c.dur)
    // Release context shortly after — avoids audio resource leak
    setTimeout(() => ctx.close(), 200)
  } catch {
    // AudioContext unavailable or blocked — silent no-op
  }
}

export function haptic(type = 'light') {
  if ('vibrate' in navigator) {
    navigator.vibrate(PATTERNS[type] ?? PATTERNS.light)
  } else {
    // iOS Safari path — AudioContext click substitute
    iosTick(type)
  }
}
