type EventValue = string | number | boolean | undefined;
type EventParams = Record<string, EventValue>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: Record<string, EventValue>) => void;
  }
}

/**
 * Sends non-identifying conversion context to GA4 when the tag is available.
 * Customer names, phone numbers, dates and free-text messages must never be passed here.
 */
export function trackBuildHireEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  const safeParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== "")
  );

  window.gtag("event", eventName, safeParams);
}
