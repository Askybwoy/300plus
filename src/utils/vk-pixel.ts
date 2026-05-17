/**
 * VK Pixel (VK Ads Retargeting) utility functions.
 *
 * TODO: Replace placeholder VK Pixel ID with the real one.
 * Set NEXT_PUBLIC_VK_PIXEL_ID in your environment variables.
 */

declare global {
  interface Window {
    VK?: {
      Retargeting: {
        Init: (pixelId: string) => void;
        Hit: () => void;
        Event: (eventName: string) => void;
        Add: (priceListId: number) => void;
      };
    };
  }
}

/**
 * Get the VK Pixel ID from environment variable.
 * Falls back to placeholder if not set.
 */
export function getVkPixelId(): string {
  return process.env.NEXT_PUBLIC_VK_PIXEL_ID || 'VK-RTRG-XXXXXX-XXXXX';
}

/**
 * Track a custom VK Pixel event.
 * @param eventName - event name (e.g. 'Lead', 'Purchase', 'AddToCart')
 */
export function trackEvent(eventName: string): void {
  if (typeof window !== 'undefined' && window.VK?.Retargeting) {
    window.VK.Retargeting.Event(eventName);
  }
}

/**
 * Convenience: track a Lead event (form submission, CTA click, etc.)
 */
export function trackLead(): void {
  trackEvent('Lead');
}

/**
 * Convenience: track a Purchase event.
 */
export function trackPurchase(): void {
  trackEvent('Purchase');
}
