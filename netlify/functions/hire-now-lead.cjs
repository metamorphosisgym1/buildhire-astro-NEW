// Sends each /hire-now/ booking to GoHighLevel, so Will gets it even when the
// customer never presses send in WhatsApp. The GHL inbound webhook starts the
// workflow "HN-01 Hire Now page lead: text Will" (contact, tag hire-now-lead, SMS to Will).
// The webhook URL lives only in the Netlify env var GHL_HIRE_NOW_WEBHOOK_URL (the repo is public).
const WEBHOOK_URL = process.env.GHL_HIRE_NOW_WEBHOOK_URL;

const clean = (value, max = 200) => String(value ?? "").trim().slice(0, max);

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }
  if (!WEBHOOK_URL) {
    console.error("GHL_HIRE_NOW_WEBHOOK_URL is not set");
    return { statusCode: 500, body: "CRM not configured" };
  }

  let input;
  try {
    input = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: "Bad JSON" };
  }

  const digits = clean(input.phone, 20).replace(/[\s()-]/g, "");
  if (!/^(?:\+?61|0)4\d{8}$/.test(digits)) {
    return { statusCode: 400, body: "Bad mobile" };
  }
  // GHL matches and texts contacts by E.164, so 0412 345 678 becomes +61412345678.
  const phone = "+61" + digits.slice(-9);

  const payload = {
    source: "Meta ads /hire-now/",
    name: clean(input.name, 100),
    phone,
    email: clean(input.email, 150),
    customer_type: clean(input.who, 50),
    machine: clean(input.machine, 100),
    hire_length: clean(input.length, 50),
    utm_source: clean(input.utm_source, 100),
    utm_medium: clean(input.utm_medium, 100),
    utm_campaign: clean(input.utm_campaign, 150),
    utm_content: clean(input.utm_content, 150),
    page_url: clean(input.page_url, 500),
  };

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) {
      console.error("GHL webhook failed", response.status);
      return { statusCode: 502, body: "CRM error" };
    }
  } catch (error) {
    console.error("GHL webhook error", error);
    return { statusCode: 502, body: "CRM error" };
  }

  return { statusCode: 200, body: "ok" };
};
