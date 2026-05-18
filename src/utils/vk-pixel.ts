/**
 * Top.Mail.Ru counter utility functions.
 *
 * Counter ID: 3766946
 * Uses the _tmr push API for event tracking.
 */

declare global {
  interface Window {
    _tmr?: Array<Record<string, string | number>>;
  }
}

const TMR_COUNTER_ID = "3766946";

/**
 * Track a custom Top.Mail.Ru goal event.
 * @param goal - goal name (e.g. 'lead', 'purchase')
 */
export function trackEvent(goal: string): void {
  if (typeof window !== "undefined") {
    window._tmr = window._tmr || [];
    window._tmr.push({ id: TMR_COUNTER_ID, type: "reachGoal", goal });
  }
}

/**
 * Convenience: track a Lead goal (form submission, CTA click, etc.)
 */
export function trackLead(): void {
  trackEvent("lead");
}

/**
 * Convenience: track a Purchase goal.
 */
export function trackPurchase(): void {
  trackEvent("purchase");
}
