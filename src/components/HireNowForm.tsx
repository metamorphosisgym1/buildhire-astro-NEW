import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { trackBuildHireEvent } from "../lib/analytics";
import { WHATSAPP_NUMBER, equipmentData } from "./BookingCalculator";

const NOT_SURE = "Not sure yet";

type AnswerKey = "who" | "machine" | "length";

const QUESTIONS: { key: AnswerKey; title: string; options: { label: string; value: string }[] }[] = [
  {
    key: "who",
    title: "Which best describes you?",
    options: ["Builder", "Landscaper", "Other trade", "Owner-builder"].map((v) => ({ label: v, value: v })),
  },
  {
    key: "machine",
    title: "Which machine do you need?",
    options: [
      { label: "1.7T Yanmar", value: "1.7T Mini Excavator (ViO17 Yanmar)" },
      { label: "3.5T Yanmar", value: "3.5T Excavator (ViO35-7 Yanmar)" },
      { label: "5.5T Yanmar", value: "5.5T Excavator (ViO55 Yanmar)" },
      { label: "Not sure", value: NOT_SURE },
    ],
  },
  {
    key: "length",
    title: "How long do you need it?",
    options: ["A day", "2 to 3 days", "A week", "Longer"].map((v) => ({ label: v, value: v })),
  },
];

const CONTACT_STEP = QUESTIONS.length;
const THANKS_STEP = CONTACT_STEP + 1;

const inputClass =
  "w-full bg-card border border-secondary rounded-lg px-4 py-3 text-base text-foreground focus:border-[hsl(var(--emerald))] focus:outline-none transition-colors";

const isAustralianMobile = (value: string) => /^(?:\+?61|0)4\d{8}$/.test(value.replace(/[\s()-]/g, ""));

function buildWhatsAppUrl(answers: Record<AnswerKey, string>, name: string, phone: string, email: string) {
  const params = new URLSearchParams(window.location.search);
  const lines = [
    "Hi Will, I'd like to hire a machine:",
    "",
    `Machine: ${answers.machine}`,
    `How long: ${answers.length}`,
    `I am a: ${answers.who}`,
    "",
    `Name: ${name}`,
    `Mobile: ${phone}`,
    `Email: ${email}`,
    "",
    `Ad: ${params.get("utm_content") || "not_set"} / ${params.get("utm_campaign") || "not_set"}`,
    `Landing Page: ${window.location.pathname}`,
    "",
    "My dates and delivery suburb: ",
  ];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

// Copy of the booking for GoHighLevel, so Will gets it even if WhatsApp is never sent.
// Fire and forget: keepalive lets it finish after WhatsApp opens; a failure never blocks the customer.
function sendLeadToCrm(answers: Record<AnswerKey, string>, name: string, phone: string, email: string) {
  const params = new URLSearchParams(window.location.search);
  try {
    fetch("/.netlify/functions/hire-now-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        ...answers,
        name,
        phone,
        email,
        utm_source: params.get("utm_source") || "",
        utm_medium: params.get("utm_medium") || "",
        utm_campaign: params.get("utm_campaign") || "",
        utm_content: params.get("utm_content") || "",
        page_url: window.location.href,
      }),
    }).catch(() => {});
  } catch {
    // Never let the CRM copy stop WhatsApp opening.
  }
}

export default function HireNowForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<AnswerKey, string>>({ who: "", machine: "", length: "" });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  // The Lead event must fire once per booking, even on a double tap.
  const leadSent = useRef(false);

  useEffect(() => {
    trackBuildHireEvent("booking_step_view", { booking_step: step + 1, booking_form: "hire_now" });
  }, [step]);

  const choose = (key: AnswerKey, value: string) => {
    setAnswers((current) => ({ ...current, [key]: value }));
    setStep((current) => current + 1);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!isAustralianMobile(phone)) {
      setPhoneError(true);
      return;
    }
    if (leadSent.current) return;
    leadSent.current = true;

    trackBuildHireEvent("generate_lead", {
      lead_channel: "whatsapp",
      equipment_category: "Excavators",
      equipment_name: answers.machine,
      customer_type: answers.who,
      hire_length: answers.length,
      booking_form: "hire_now",
    });
    trackBuildHireEvent("whatsapp_booking_start", {
      equipment_category: "Excavators",
      equipment_name: answers.machine,
      booking_form: "hire_now",
    });

    sendLeadToCrm(answers, name.trim(), phone.trim(), email.trim());
    const url = buildWhatsAppUrl(answers, name.trim(), phone.trim(), email.trim());
    setWhatsAppUrl(url);
    setStep(THANKS_STEP);
    window.open(url, "_blank");
  };

  const question = QUESTIONS[step];
  const rate = equipmentData.Excavators.find((m) => m.name === answers.machine);

  return (
    <div className="bg-background text-foreground rounded-2xl p-5 md:p-7 shadow-xl">
      {step < THANKS_STEP && (
        <>
          <p className="text-sm font-medium mb-3">Answer 3 quick questions to check dates on your machine.</p>
          <div className="flex gap-1.5 mb-4" aria-hidden="true">
            {[...QUESTIONS, null].map((_, i) => (
              <span key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-[hsl(var(--emerald))]" : "bg-secondary"}`} />
            ))}
          </div>
        </>
      )}

      {question && (
        <div>
          <h2 className="text-xl font-bold mb-3 leading-snug">{question.title}</h2>
          <div className="grid grid-cols-2 gap-2.5">
            {question.options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => choose(question.key, option.value)}
                className={`min-h-14 px-3 py-2 rounded-xl border text-base font-semibold transition-colors ${
                  answers[question.key] === option.value
                    ? "border-[hsl(var(--emerald))] bg-[hsl(var(--emerald))] text-white"
                    : "border-secondary bg-card hover:border-[hsl(var(--emerald))]"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === CONTACT_STEP && (
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold mb-3 leading-snug">Where should Will reply?</h2>
          <div className="space-y-3">
            <div>
              <label htmlFor="hn-name" className="text-sm font-medium mb-1 block">Full name</label>
              <input id="hn-name" name="name" type="text" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label htmlFor="hn-phone" className="text-sm font-medium mb-1 block">Mobile</label>
              <input
                id="hn-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                aria-invalid={phoneError}
                aria-describedby={phoneError ? "hn-phone-error" : undefined}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setPhoneError(false);
                }}
                className={inputClass}
              />
              {phoneError && (
                <p id="hn-phone-error" role="alert" className="text-sm text-destructive mt-1">
                  Please enter an Australian mobile, for example 0412 345 678.
                </p>
              )}
            </div>
            <div>
              <label htmlFor="hn-email" className="text-sm font-medium mb-1 block">Email</label>
              <input id="hn-email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
            </div>
          </div>
          <button type="submit" className="mt-4 w-full h-14 rounded-xl bg-[hsl(var(--emerald))] text-white font-bold text-lg">
            Send to Will
          </button>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Opens WhatsApp with your details ready to send.{" "}
            <a href="/privacy/" target="_blank" rel="noopener" className="underline">Privacy policy</a>
          </p>
        </form>
      )}

      {step > 0 && step < THANKS_STEP && (
        <button type="button" onClick={() => setStep(step - 1)} className="mt-3 inline-flex items-center gap-1 text-sm text-muted-foreground">
          <ArrowLeft size={15} aria-hidden="true" /> Back
        </button>
      )}

      {step === THANKS_STEP && (
        <div role="status">
          <span className="w-11 h-11 rounded-full bg-[hsl(var(--emerald))] text-white flex items-center justify-center mb-3">
            <Check size={24} aria-hidden="true" />
          </span>
          <h2 className="text-xl font-bold mb-2 leading-snug">Thanks {name.trim().split(/\s+/)[0]}. Last step: press send in WhatsApp.</h2>
          <p className="text-base mb-4">
            Your details are in the message. Add your dates and delivery suburb, press send, and it goes straight to Will.
          </p>
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center w-full h-14 rounded-xl bg-[#25D366] text-white font-bold text-lg"
          >
            Open WhatsApp again
          </a>
          {rate && (
            <p className="text-sm mt-4">
              Your {answers.machine.split(" ")[0]} hire: ${rate.rate} a day or ${rate.weeklyRate?.toLocaleString("en-AU")} for a 7 day week, including GST. Will quotes delivery when you book.
            </p>
          )}
          <p className="text-sm mt-3">
            Rather talk? Call <a href="tel:1300157882" className="underline font-semibold">1300 157 882</a>.
          </p>
        </div>
      )}
    </div>
  );
}
