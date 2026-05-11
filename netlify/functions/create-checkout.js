const Stripe = require("stripe");

exports.handler = async function (event) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
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

    const {
      depositAmount,
      machine,
      days,
      totalCost,
      attachments,
      location,
      startDate,
      endDate,
      name,
      email,
      phone,
    } = JSON.parse(event.body);

    if (!depositAmount || !machine || !email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing required booking details" }),
      };
    }

    // Check for existing Stripe customer
    const customers = await stripe.customers.list({ email, limit: 1 });
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    const origin =
      event.headers.origin ||
      (event.headers.referer || "").replace(/\/$/, "") ||
      "https://buildhire.com.au";

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : email,
      line_items: [
        {
          price_data: {
            currency: "aud",
            product_data: {
              name: `Booking Bond — ${machine}`,
              description: `${days} day hire | ${location} | Total: $${totalCost}`,
            },
            unit_amount: Math.round(depositAmount * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      payment_intent_data: {
        capture_method: "manual",
      },
      metadata: {
        machine,
        days: String(days),
        totalCost: String(totalCost),
        depositAmount: String(depositAmount),
        attachments: attachments || "",
        location: location || "",
        startDate: startDate || "",
        endDate: endDate || "",
        customerName: name || "",
        customerEmail: email,
        customerPhone: phone || "",
      },
      success_url: `${origin}/payment-success/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/payment-cancelled/`,
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
