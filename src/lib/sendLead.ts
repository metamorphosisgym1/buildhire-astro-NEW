// Sends a website booking to the Netlify function hire-now-lead, which passes it to GoHighLevel
// (workflow HN-01) and emails a backup copy to Build Hire. Every booking form on the site uses this,
// so there is one route into GHL (WhatsApp retired, Chris 27 Nov 2026).

export const isAustralianMobile = (value: string) => /^(?:\+?61|0)4\d{8}$/.test(value.replace(/[\s()-]/g, ""));

// Google Ads click ID: kept for the whole visit, so a booking on a later page still carries it.
export function currentGclid(): string {
  if (typeof window === "undefined") return "";
  const fromUrl = new URLSearchParams(window.location.search).get("gclid") || "";
  try {
    if (fromUrl) sessionStorage.setItem("bh_gclid", fromUrl);
    return fromUrl || sessionStorage.getItem("bh_gclid") || "";
  } catch {
    return fromUrl;
  }
}

export type LeadFields = {
  form: "hire_now" | "booking_calculator";
  name: string;
  phone: string;
  email?: string;
  who?: string;
  machine: string;
  length: string;
  start_date?: string;
  end_date?: string;
  suburb?: string;
  job_type?: string;
  site_access?: string;
  found_us?: string;
  estimate?: string;
};

export function sendLead(fields: LeadFields, eventId: string) {
  const params = new URLSearchParams(window.location.search);
  try {
    fetch("/.netlify/functions/hire-now-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        ...fields,
        utm_source: params.get("utm_source") || "",
        utm_medium: params.get("utm_medium") || "",
        utm_campaign: params.get("utm_campaign") || "",
        utm_content: params.get("utm_content") || "",
        gclid: currentGclid(),
        page_url: window.location.href,
        event_id: eventId,
      }),
    }).catch(() => {});
  } catch {
    // Never let the CRM call stop the thank-you message showing.
  }
}

export const newEventId = () =>
  window.bhEventId?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
