/**
 * Haptic feedback via navigator.vibrate (Android + some browsers).
 * iOS requires a native wrapper — silently no-ops in Safari.
 *
 * Types:
 *   light   —  8ms  single tap  (navigation, toggle)
 *   medium  — 18ms  single tap  (button press, selection)
 *   heavy   — 35ms  single tap  (destructive, important action)
 *   success — [12, 40, 12]      (form submit, confirmation)
 *   error   — [60, 40, 60, 40, 60] (validation failure)
 */
export function haptic(type = 'light') {
  if (!('vibrate' in navigator)) return
  const patterns = {
    light:   8,
    medium:  18,
    heavy:   35,
    success: [12, 40, 12],
    error:   [60, 40, 60, 40, 60],
  }
  navigator.vibrate(patterns[type] ?? 8)
}
