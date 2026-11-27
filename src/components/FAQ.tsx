const faqs = [
  {
    q: "What areas of Sydney do you deliver to & collect from?",
    a: "We deliver & collect across all of Greater Sydney, including the CBD, Eastern Suburbs, Inner West, North Shore, Northern Beaches, Western Sydney, and the Hills District. Contact us to confirm delivery & collection to your specific site.",
  },
  {
    q: "How quickly can you deliver & collect equipment?",
    a: "Availability and delivery are confirmed after we receive your equipment, hire-date, suburb and access details. For urgent requirements, call 1300 157 882 to discuss options.",
  },
  {
    q: "What is your minimum hire period?",
    a: "Our minimum hire period is one day. We offer daily and weekly rates, and a week costs less than seven daily rates.",
  },
  {
    q: "Do I need a licence to operate a mini excavator?",
    a: "In NSW, no licence is required to operate a mini excavator under 10 tonnes on private property. For public roads or worksites, a High Risk Work Licence (HRWL) may be required. Our team can advise you on the specific requirements for your project.",
  },
  {
    q: "What is included in the hire price?",
    a: "Our dry-hire rates cover the listed equipment and standard inclusions shown in the quote. Delivery and collection are quoted for the site and hire dates. Fuel, insurance and operator costs are not included unless confirmed in writing.",
  },
  {
    q: "How do I book excavator hire in Sydney?",
    a: "Use the online booking form to pick the machine, dates and delivery suburb, then send it. The team calls you to confirm availability, delivery and the final price before the booking is locked in. You can also call 1300 157 882.",
  },
];

// Every question shows its answer in full: no accordions (Murphy, 13 Nov 2026, WEB-36).
function FaqItem({ faq }: { faq: typeof faqs[0] }) {
  return (
    <div className="bg-background/90 backdrop-blur-sm border border-secondary rounded-2xl px-6 py-5">
      <h3 className="text-foreground font-semibold">{faq.q}</h3>
      <p className="text-muted-foreground mt-2 leading-relaxed">{faq.a}</p>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="relative py-24 px-6 overflow-hidden" aria-labelledby="faq-heading">
      <img src="/assets/bg-excavator-2.webp" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="container mx-auto max-w-3xl relative z-10">
        <p className="label-text text-primary text-center mb-3 text-sm">
          FAQ
        </p>
        <h2 id="faq-heading" className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
