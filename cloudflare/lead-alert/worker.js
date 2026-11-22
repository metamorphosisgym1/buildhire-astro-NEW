// Build Hire lead alert (Cloudflare Worker on Murphy's account).
// The Netlify function hire-now-lead POSTs here when GHL does not take a /hire-now/ lead.
// The send_email binding can only send from alerts@presciaiq.com to info@buildhire.com.au,
// so the endpoint needs no secret: the worst misuse is extra mail to Build Hire's own inbox.
const clean = (value, max = 200) => String(value ?? "").trim().slice(0, max);

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

    const lines = [
      "A /hire-now/ lead did not reach GHL, so no text went to your phone. Call them now.",
      "",
      `Name: ${name}`,
      `Mobile: ${phone}`,
      `Email: ${clean(body.email, 120) || "not given"}`,
      `Machine: ${clean(body.machine, 80)}`,
      `How long: ${clean(body.hire_length, 80)}`,
      `Customer: ${clean(body.customer_type, 80)}`,
      `Ad: ${clean(body.utm_content, 120) || "not_set"} / ${clean(body.utm_campaign, 120) || "not_set"}`,
      "",
      `Why: ${clean(body.reason, 200)}`,
    ];

    try {
      const result = await env.EMAIL.send({
        from: { email: "alerts@presciaiq.com", name: "Build Hire website" },
        to: "info@buildhire.com.au",
        subject: `Hire Now lead NOT in GHL: call ${name} now`,
        text: lines.join("\n"),
      });
      return Response.json({ ok: true, id: result.messageId });
    } catch (error) {
      console.error("Lead alert send failed", error.code, error.message);
      return Response.json({ ok: false, code: error.code || "error" }, { status: 502 });
    }
  },
};
