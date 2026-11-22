// Sends each /hire-now/ booking to GoHighLevel, so Will gets it even when the
// customer never presses send in WhatsApp. The GHL inbound webhook starts the
// workflow "HN-01 Hire Now page lead: text Will" (contact, tag hire-now-lead, SMS to Will).
// Murphy chose (10 Nov 2026) to keep the URL here rather than wait for Netlify access.
// If it is ever abused: make a new webhook in GHL HN-01 and set it in env GHL_HIRE_NOW_WEBHOOK_URL.
const WEBHOOK_URL =
  process.env.GHL_HIRE_NOW_WEBHOOK_URL ||
  "https://services.leadconnectorhq.com/hooks/oEDxcuJNEfod9WbD2DAs/webhook-trigger/5538fa13-2b75-4ac1-84a3-3de990ae0b13";

const clean = (value, max = 200) => String(value ?? "").trim().slice(0, max);

// If GHL does not take a lead, email it to Build Hire so it can never vanish silently.
// Same Resend sender and inbox as the paid booking emails; the key comes from env RESEND_API_KEY.
async function alertLeadNotInCrm(payload, reason) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Lead alert not sent: RESEND_API_KEY is not set", reason);
    return;
  }
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "bookings@buildhire.com.au",
        to: ["info@buildhire.com.au"],
        subject: `Hire Now lead NOT in GHL: call ${payload.name || "this customer"} now`,
        text: [
          "A /hire-now/ lead did not reach GHL, so no text went to your phone. Call them now.",
          "",
          `Name: ${payload.name}`,
          `Mobile: ${payload.phone}`,
          `Email: ${payload.email || "not given"}`,
          `Machine: ${payload.machine}`,
          `How long: ${payload.hire_length}`,
          `Customer: ${payload.customer_type}`,
          `Ad: ${payload.utm_content || "not_set"} / ${payload.utm_campaign || "not_set"}`,
          "",
          `Why: ${reason}`,
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) console.error("Lead alert email failed", response.status);
  } catch (error) {
    console.error("Lead alert email error", error);
  }
}

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
    event_id: clean(input.event_id, 100),
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
      await alertLeadNotInCrm(payload, `GHL answered ${response.status}`);
      return { statusCode: 502, body: "CRM error" };
    }
  } catch (error) {
    console.error("GHL webhook error", error);
    await alertLeadNotInCrm(payload, `GHL did not answer (${error && error.name ? error.name : "error"})`);
    return { statusCode: 502, body: "CRM error" };
  }

  return { statusCode: 200, body: "ok" };
};
