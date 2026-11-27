// Sends each /hire-now/ booking to GoHighLevel, so Will gets it even when the
// customer never calls. Both the /hire-now/ form and the booking calculator use it. The GHL webhook starts the
// workflow "HN-01 Hire Now page lead: text Will" (contact, tag hire-now-lead, SMS to Will).
// Murphy chose (10 Nov 2026) to keep the URL here rather than wait for Netlify access.
// If it is ever abused: make a new webhook in GHL HN-01 and set it in env GHL_HIRE_NOW_WEBHOOK_URL.
const WEBHOOK_URL =
  process.env.GHL_HIRE_NOW_WEBHOOK_URL ||
  "https://services.leadconnectorhq.com/hooks/oEDxcuJNEfod9WbD2DAs/webhook-trigger/5538fa13-2b75-4ac1-84a3-3de990ae0b13";

const clean = (value, max = 200) => String(value ?? "").trim().slice(0, max);

// Every lead also goes to the Cloudflare Worker buildhire-lead-alert (code in cloudflare/lead-alert/),
// so there is always a record outside GHL (Chris, 27 Nov 2026). kind "copy" emails Build Hire a
// backup copy; kind "failed" emails Build Hire and Murphy to call the lead now. No key is needed:
// the Worker can only email those two inboxes.
const ALERT_URL =
  process.env.LEAD_ALERT_URL || "https://buildhire-lead-alert.khansayeem03.workers.dev";

async function sendLeadCopy(payload, kind, reason = "") {
  try {
    const response = await fetch(ALERT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, kind, reason }),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) console.error("Lead copy failed", kind, response.status);
  } catch (error) {
    console.error("Lead copy error", kind, error);
  }
}

// GHL answers 200 when it takes the lead. Anything else (or no answer) counts as a miss.
async function postToGhl(payload) {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
    if (response.ok) return "";
    return `GHL answered ${response.status}`;
  } catch (error) {
    return `GHL did not answer (${error && error.name ? error.name : "error"})`;
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

  // source stays the same for every form so HN-01 treats all website bookings alike;
  // form says which one it came from (hire_now or booking_calculator).
  const payload = {
    source: "Meta ads /hire-now/",
    form: clean(input.form, 30) || "hire_now",
    start_date: clean(input.start_date, 20),
    end_date: clean(input.end_date, 20),
    suburb: clean(input.suburb, 100),
    job_type: clean(input.job_type, 100),
    site_access: clean(input.site_access, 100),
    found_us: clean(input.found_us, 200),
    estimate: clean(input.estimate, 100),
    gclid: clean(input.gclid, 200),
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

  // Logged so each lead can be found by time in Netlify, Functions, hire-now-lead.
  console.log("Lead received", payload.name, payload.phone, payload.machine, payload.event_id);

  let failure = await postToGhl(payload);
  if (failure) {
    console.error("GHL webhook miss, retrying once", failure);
    failure = await postToGhl(payload);
  }
  if (failure) {
    console.error("GHL webhook failed twice", failure);
    await sendLeadCopy(payload, "failed", failure);
    return { statusCode: 502, body: "CRM error" };
  }

  await sendLeadCopy(payload, "copy");

  return { statusCode: 200, body: "ok" };
};
