// Build Hire lead copy and alert (Cloudflare Worker on Murphy's account).
// The Netlify function hire-now-lead POSTs EVERY /hire-now/ lead here, so there is always a
// record outside GHL (Chris, 27 Nov 2026):
//   kind "copy":   GHL took the lead. Email a copy to info@buildhire.com.au.
//   kind "failed": GHL did not take it (after one retry). Email info@buildhire.com.au and Murphy.
// Every lead is also written to the Worker log (observability on), so it can be found by time.
// The send_email binding can only send from alerts@presciaiq.com to the two allowed inboxes,
// so the endpoint needs no secret: the worst misuse is extra mail to those inboxes.
const clean = (value, max = 200) => String(value ?? "").trim().slice(0, max);

const BUILD_HIRE = "info@buildhire.com.au";
const MURPHY = "murphy@presciaiq.com";

export default {
  async fetch(request, env) {
    if (request.method !== "POST") return new Response("Method not allowed", { status: 405 });

    const { success } = await env.LIMIT.limit({ key: "lead-alert" });
    if (!success) return new Response("Too many alerts", { status: 429 });

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response("Bad JSON", { status: 400 });
    }

    const name = clean(body.name, 80);
    const phone = clean(body.phone, 40);
    if (!name || !phone) return new Response("Name and mobile are required", { status: 400 });

    const failed = body.kind !== "copy";
    const details = [
      `Name: ${name}`,
      `Mobile: ${phone}`,
      `Email: ${clean(body.email, 120) || "not given"}`,
      `Machine: ${clean(body.machine, 80)}`,
      `How long: ${clean(body.hire_length, 80)}`,
      `Customer: ${clean(body.customer_type, 80)}`,
      `Ad: ${clean(body.utm_content, 120) || "not_set"} / ${clean(body.utm_campaign, 120) || "not_set"}`,
      `Event ID: ${clean(body.event_id, 100) || "none"}`,
    ];

    // The record outside GHL. Searchable in Cloudflare, Workers, buildhire-lead-alert, Logs.
    console.log(JSON.stringify({ lead: failed ? "failed" : "copy", name, phone, reason: clean(body.reason, 200), details }));

    const lines = failed
      ? [
          "A /hire-now/ lead did not reach GHL, so no text went to your phone. Call them now.",
          "",
          ...details,
          "",
          `Why: ${clean(body.reason, 200)}`,
        ]
      : [
          "New /hire-now/ enquiry. This is the backup copy: it should also be in GHL (AM Pipeline, New Lead).",
          "If you did not get the GHL text or app alert for this person, call them now and tell Murphy.",
          "",
          ...details,
        ];

    const to = failed ? [BUILD_HIRE, MURPHY] : [BUILD_HIRE];
    const subject = failed ? `Hire Now lead NOT in GHL: call ${name} now` : `New Hire Now enquiry: ${name}`;

    let sent = 0;
    for (const address of to) {
      try {
        await env.EMAIL.send({
          from: { email: "alerts@presciaiq.com", name: "Build Hire website" },
          to: address,
          subject,
          text: lines.join("\n"),
        });
        sent += 1;
      } catch (error) {
        console.error("Lead email failed", address, error.code, error.message);
      }
    }
    return Response.json({ ok: sent > 0, sent }, { status: sent > 0 ? 200 : 502 });
  },
};
