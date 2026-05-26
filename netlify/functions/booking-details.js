const Stripe = require("stripe");

exports.handler = async function (event) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-06-20",
    });

    const session_id = event.queryStringParameters?.session_id;

    if (!session_id) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing session_id" }),
      };
    }

    // Retrieve the Stripe Checkout session to verify payment and get metadata
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["payment_intent", "customer"],
    });

    if (session.payment_status !== "paid") {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Payment not completed" }),
      };
    }

    const meta = session.metadata || {};
    const customerEmail =
      meta.customerEmail ||
      session.customer_details?.email ||
      session.customer_email ||
      "";

    const bookingDetails = {
      machine: meta.machine || "",
      days: meta.days || "",
      totalCost: meta.totalCost || "",
      depositAmount: meta.depositAmount || "",
      location: meta.location || "",
      startDate: meta.startDate || "",
      endDate: meta.endDate || "",
      customerName: meta.customerName || "",
      customerEmail,
      customerPhone: meta.customerPhone || "",
    };

    // Send notification email to BuildHire
    const RESEND_API_KEY = process.env.RESEND_API_KEY || "re_PFym3oDP_Ht6H1qEP1MgQ9b569vwEM9JL";
    if (RESEND_API_KEY) {
      try {
        const emailBody = `
New Booking Confirmed — BuildHire

Customer: ${bookingDetails.customerName}
Email: ${bookingDetails.customerEmail}
Phone: ${bookingDetails.customerPhone}

Equipment: ${bookingDetails.machine}
Duration: ${bookingDetails.days} day(s)
Location: ${bookingDetails.location}
Start Date: ${bookingDetails.startDate}
End Date: ${bookingDetails.endDate}

Total Cost: $${bookingDetails.totalCost}
Bond Paid: $${bookingDetails.depositAmount}

Stripe Session: ${session_id}
Payment Intent: ${session.payment_intent?.id || ""}
${meta.attachments ? `\nAttachments: ${meta.attachments}` : ""}
        `.trim();

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "bookings@buildhire.com.au",
            to: ["info@buildhire.com.au"],
            subject: `New Booking: ${bookingDetails.machine} — ${bookingDetails.customerName}`,
            text: emailBody,
          }),
        });
      } catch (emailErr) {
        console.error("Email notification failed:", emailErr);
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ booking: bookingDetails }),
    };
  } catch (error) {
    console.error("Booking details error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
