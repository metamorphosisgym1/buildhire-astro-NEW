type EventValue = string | number | boolean | undefined;
type EventParams = Record<string, EventValue>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: Record<string, EventValue>) => void;
    fbq?: (command: "track", eventName: string, params?: Record<string, EventValue>, options?: { eventID?: string }) => void;
    bhEventId?: () => string;
    bhAdsConversion?: (kind: "lead" | "phone") => void;
  }
}

/**
 * Sends non-identifying conversion context to GA4 when the tag is available.
 * Customer names, phone numbers, dates and free-text messages must never be passed here.
 */
export function trackBuildHireEvent(eventName: string, params: EventParams = {}, metaEventId?: string) {
  if (typeof window === "undefined") return;

  // Meta Pixel: a sent booking counts as a Lead. Machine and category only.
  // The event ID lets Meta match this browser Lead with its server copy and count it once.
  if (eventName === "generate_lead" && typeof window.fbq === "function") {
    window.fbq(
      "track",
      "Lead",
      {
        content_category: params.equipment_category,
        content_name: params.equipment_name,
      },
      metaEventId ? { eventID: metaEventId } : undefined
    );
  }

  // Google Ads: a sent booking counts as "Hire form submitted" (set up in BaseHead, live domain only).
  if (eventName === "generate_lead") {
    window.bhAdsConversion?.("lead");
  }

  if (typeof window.gtag !== "function") return;

  const safeParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== "")
  );

  window.gtag("event", eventName, safeParams);
}
