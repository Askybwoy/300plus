/**
 * UTM parameter extraction and persistence utility.
 *
 * Captures UTM params from URL on first load and stores them in sessionStorage
 * so they persist across SPA navigation within the same session.
 */

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

const STORAGE_KEY = "300plus_utm";

/**
 * Capture UTM parameters from the current URL and persist to sessionStorage.
 * Should be called once on initial page load (e.g. in layout or top-level component).
 * Only overwrites stored params if the URL actually contains at least one UTM param.
 */
export function captureUtmParams(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const utmFromUrl: UtmParams = {};
  let hasAny = false;

  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) {
      utmFromUrl[key] = value;
      hasAny = true;
    }
  }

  // Only overwrite stored values when fresh UTM params arrive via URL
  if (hasAny) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utmFromUrl));
    } catch {
      // sessionStorage unavailable (e.g. private mode in some browsers)
    }
  }
}

/**
 * Retrieve stored UTM parameters (from sessionStorage).
 * Returns an object with only the UTM keys that were captured.
 */
export function getUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as UtmParams;
    }
  } catch {
    // parse error or storage unavailable
  }

  return {};
}

/**
 * Compute effective source tag with VK-specific prefix when traffic comes from VK ads.
 *
 * Logic:
 * - utm_source === "vk" → prefix = `vk_${utm_medium}_` (or just `vk_` if medium is empty)
 * - Otherwise → return originalSource unchanged
 *
 * Examples:
 *   getEffectiveSource("discuss_hero") with utm_source=vk, utm_medium=message → "vk_message_discuss_hero"
 *   getEffectiveSource("discuss_hero") with no UTM → "discuss_hero"
 */
export function getEffectiveSource(originalSource: string): string {
  const utm = getUtmParams();

  if (utm.utm_source === "vk") {
    const prefix = utm.utm_medium ? `vk_${utm.utm_medium}_` : "vk_";
    return `${prefix}${originalSource}`;
  }

  return originalSource;
}
