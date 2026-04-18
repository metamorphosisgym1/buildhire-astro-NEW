import { useState } from "react";
import { Check, Truck, Wrench, Cog, Info, CircleDot, Hammer, Loader2 } from "lucide-react";



// Custom SVG icon components
const ExcavatorIcon = ({ size = 28, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Tracks/undercarriage */}
    <rect x="2" y="18" width="10" height="3" rx="1.5" />
    {/* Cab body */}
    <rect x="3" y="14" width="7" height="4" rx="1" />
    {/* Boom arm */}
    <path d="M10 15L15 9" />
    {/* Dipper/stick */}
    <path d="M15 9L19 13" />
    {/* Bucket */}
    <path d="M19 13L21 12L20 15L17 14" />
    {/* Boom pivot */}
    <circle cx="10" cy="15" r="0.8" />
  </svg>
);

const MiniDumperIcon = ({ size = 28, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 13V8l3-3h5l1 2h3v6H3z" />
    <path d="M15 13h4l2 2v2h-6v-4z" />
    <circle cx="6" cy="17" r="2" />
    <circle cx="18" cy="17" r="2" />
    <path d="M8 17h8" />
  </svg>
);
const sv08Img = "/assets/sv08-excavator.png";
const boxTrailerImg = "/assets/box-trailer.jpg";
const vio17Img = "/assets/vio17-excavator.png";

const vio35Img = "/assets/vio35-excavator.png";
const vio55Img = "/assets/vio55-excavator.png";
const vio80Img = "/assets/vio80-excavator.png";
const isuzuTipperImg = "/assets/isuzu-tipper.png";
const miniDumperImg = "/assets/mini-dumper.png";
const cormidiC7xImg = "/assets/cormidi-c7x.jpg";
const cormidiC85Img = "/assets/cormidi-c85.jpg";
const loaderImg = "/assets/loader-lilac.jpg";
const bookingBg = "/assets/bg-excavator-1.jpg";
const rockBreakerImg = "/assets/rock-breaker-buildhire.png";
const augerImg = "/assets/auger-drive.jpg";
const rockGrabImg = "/assets/rock-grab.jpg";
const typhoonWasherImg = "/assets/typhoon-pressure-washer.png";
const demolitionHammerImg = "/assets/demolition-hammer.png";

const concreteSawImg = "/assets/concrete-saw.png";

const categoryIcons: Record<string, React.ComponentType<any>> = {
  Excavators: ExcavatorIcon,
  "Mini Dumpers": MiniDumperIcon,
  "Tipper Trucks": Truck,
  Attachments: Wrench,
  "Concrete saws & other tools": CircleDot,
};

const machineImages: Record<string, string> = {
  "0.8T Mini Excavator (SV08 Yanmar)": sv08Img,
  "1.7T Mini Excavator (ViO17 Yanmar)": vio17Img,
  "3.5T Excavator (ViO35-7 Yanmar)": vio35Img,
  "5.5T Excavator (ViO55 Yanmar)": vio55Img,
  "8T Excavator (ViO80 Yanmar)": vio80Img,
  "14.5T Sumitomo Excavator": vio80Img,
  "Isuzu NQR450 Tipper": isuzuTipperImg,
  "Box Trailer": boxTrailerImg,
  "Cormidi C7x 700kg Petrol High Tip": cormidiC7xImg,
  "Cormidi C85": cormidiC85Img,
  "Rock Breaker 1.7T": rockBreakerImg,
  "Rock Breaker 3.5T": rockBreakerImg,
  "Rock Breaker 5.5T": rockBreakerImg,
  
  "Auger Drive 1.7T (200mm, 300mm, 450mm)": augerImg,
  "Auger Drive 3.5T (200mm, 300mm, 450mm)": augerImg,
  "Auger Drive 5.5T (200mm, 300mm, 450mm)": augerImg,
  "Rock Grabs 3.5T": rockGrabImg,
  "Rock Grabs 5.5T": rockGrabImg,
  "Husqvarna K970 MKIII 16\" Concrete Saw": concreteSawImg,
  "Bosch GSH16-30 Demolition Hammer": demolitionHammerImg,
  "Typhoon TPW4200H Pressure Washer": typhoonWasherImg,
};

const equipmentData: Record<string, { name: string; rate: number; comingSoon?: boolean }[]> = {
  Excavators: [
    { name: "0.8T Mini Excavator (SV08 Yanmar)", rate: 200 },
    { name: "1.7T Mini Excavator (ViO17 Yanmar)", rate: 205 },
    { name: "3.5T Excavator (ViO35-7 Yanmar)", rate: 325 },
    { name: "5.5T Excavator (ViO55 Yanmar)", rate: 345 },
    { name: "8T Excavator (ViO80 Yanmar)", rate: 420, comingSoon: true },
    { name: "14.5T Sumitomo Excavator", rate: 470, comingSoon: true },
  ],
  "Mini Dumpers": [
    { name: "Cormidi C7x 700kg Petrol High Tip", rate: 200 },
    { name: "Cormidi C85", rate: 200 },
  ],
  "Tipper Trucks": [
    { name: "Isuzu NQR450 Tipper", rate: 280 },
    { name: "Box Trailer", rate: 80 },
  ],
  Attachments: [
    { name: "Rock Breaker 1.7T", rate: 110 },
    { name: "Rock Breaker 3.5T", rate: 150 },
    { name: "Rock Breaker 5.5T", rate: 180 },
    
    { name: "Auger Drive 1.7T (200mm, 300mm, 450mm)", rate: 99 },
    { name: "Auger Drive 3.5T (200mm, 300mm, 450mm)", rate: 120 },
    { name: "Auger Drive 5.5T (200mm, 300mm, 450mm)", rate: 150 },
    { name: "Rock Grabs 3.5T", rate: 135 },
    { name: "Rock Grabs 5.5T", rate: 140 },
  ],
  "Concrete saws & other tools": [
    { name: "Husqvarna K970 MKIII 16\" Concrete Saw", rate: 140 },
    { name: "Bosch GSH16-30 Demolition Hammer", rate: 110 },
    { name: "Typhoon TPW4200H Pressure Washer", rate: 150 },
  ],
};

const attachments = [
  "Hammer/Breaker",
  "Auger",
  "Rock Grab",
];

function renderEquipmentName(name: string) {
  const match = name.match(/C7[xX]/);
  if (!match) return name;
  const [before, after] = name.split(match[0]);
  return (
    <>
      {before}C7<span className="inline-block font-[Arial,sans-serif] text-[0.88em] font-bold leading-none align-[0.02em]">X</span>{after}
    </>
  );
}

export default function BookingCalculator() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState<string>("Excavators");
  const [machine, setMachine] = useState<string>("");
  const [selectedAttachments, setSelectedAttachments] = useState<string[]>([]);
  const [augerDrillSize, setAugerDrillSize] = useState<string>("200mm");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const selectedMachine = Object.values(equipmentData)
    .flat()
    .find((m) => m.name === machine);

  const days =
    startDate && endDate
      ? Math.max(
          1,
          Math.ceil(
            (new Date(endDate).getTime() - new Date(startDate).getTime()) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 0;

  const attachmentCost = selectedAttachments.length * 75;
  const equipmentCost = (selectedMachine?.rate ?? 0) * days;

  // Tiered delivery & collection pricing
  const getDeliveryCost = (machineName: string): number => {
    if (!machineName) return 0;
    // 0.8T, 1.7T, Cormidi Dumpers
    if (
      machineName.includes("0.8T") ||
      machineName.includes("1.7T") ||
      machineName.includes("Cormidi")
    ) return 110;
    // 3.5T
    if (machineName.includes("3.5T")) return 150;
    // 5.5T, 8T, 14.5T — third party transport, pricing on enquiry
    if (
      machineName.includes("5.5T") ||
      machineName.includes("8T") ||
      machineName.includes("14.5T")
    ) return 0;
    // Tipper
    if (machineName.includes("Tipper")) return 150;
    // Box Trailer, Concrete Saws, Tools
    if (
      machineName.includes("Box Trailer") ||
      machineName.includes("Concrete Saw") ||
      machineName.includes("Demolition Hammer") ||
      machineName.includes("Pressure Washer")
    ) return 100;
    // Attachments hired standalone
    if (
      machineName.includes("Rock Breaker") ||
      machineName.includes("Auger") ||
      machineName.includes("Rock Grabs")
    ) return 100;
    return 150;
  };

  const deliveryCost = getDeliveryCost(machine);
  const isThirdPartyDelivery = machine.includes("5.5T") || machine.includes("8T") || machine.includes("14.5T");
  const totalCost = equipmentCost + attachmentCost * days + deliveryCost;

  const toggleAttachment = (a: string) =>
    setSelectedAttachments((prev) =>
      prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]
    );

  const depositAmount = 200;

  if (submitted) {
    return (
      <section id="booking" className="relative py-24 px-6 overflow-hidden">
        <img src={bookingBg} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="container mx-auto max-w-2xl text-center animate-scale-in relative z-10">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-primary-foreground" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Bond Paid — Booking Confirmed!</h2>
          <p className="text-white/70 mb-2">
            Your $200 refundable bond has been received. A confirmation has been sent to <span className="text-white font-medium">{email}</span>.
          </p>
          <p className="text-white/50 text-sm">
            Our team at info@buildhire.com.au has been notified and will be in touch shortly to arrange delivery & collection.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="relative py-12 md:py-24 px-4 md:px-6 overflow-hidden">
      <img src={bookingBg} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <p className="label-text text-primary text-center mb-3 text-sm">
          Get Started
        </p>
        <h2 className="text-2xl md:text-5xl font-bold text-white text-center mb-2">
          Instant Quote & Booking
        </h2>
        <p className="text-white/60 text-center text-sm mb-8 md:mb-12 max-w-xl mx-auto">
          Book your excavator hire Sydney — get a price in seconds and secure your machine online.
        </p>

        {/* Progress bar */}
        <div className="flex items-center justify-center gap-1 md:gap-2 mb-8 md:mb-12">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  step >= s
                    ? "bg-primary text-primary-foreground"
                    : "border-2 border-white/30 text-white/50"
                }`}
              >
                {s}
              </div>
              {s < 4 && (
                <div
                  className={`w-16 h-0.5 ${
                    step > s ? "bg-primary" : "bg-white/20"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="bg-background border border-secondary rounded-2xl p-4 md:p-8">
          {/* Step 1 */}
          {step === 1 && (
            <div className="animate-fade-in-up">
              <h3 className="text-xl font-bold text-foreground mb-6">Select Equipment & Dates</h3>

              {/* Category cards with icons */}
              <label className="label-text text-xs text-muted-foreground mb-3 block">
                Category
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3 mb-6 md:mb-8">
                {Object.keys(equipmentData).map((cat) => {
                  const Icon = categoryIcons[cat] || Cog;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setCategory(cat);
                        setMachine("");
                      }}
                      className={`flex flex-col items-center gap-1.5 md:gap-2 p-3 md:p-5 rounded-2xl text-xs md:text-sm font-medium transition-all duration-300 ${
                        category === cat
                          ? "border-2 border-primary bg-primary/10 text-foreground shadow-[0_0_20px_rgba(193,160,232,0.15)]"
                          : "border border-secondary text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      <Icon size={28} className={category === cat ? "text-primary" : "text-muted-foreground"} />
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Machine selector with thumbnails */}
              <label className="label-text text-xs text-muted-foreground mb-3 block">
                Machine
              </label>
              <div className="space-y-2 mb-6 md:mb-8 max-h-[280px] md:max-h-none overflow-y-auto">
                {equipmentData[category]?.length === 0 ? (
                  <p className="text-sm text-muted-foreground py-4 text-center">Coming soon — enquire for availability.</p>
                ) : (
                  equipmentData[category]?.map((m) => (
                    <button
                      key={m.name}
                      onClick={() => !m.comingSoon && setMachine(m.name)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all flex items-center gap-4 ${
                        m.comingSoon
                          ? "border border-secondary text-muted-foreground/50 cursor-not-allowed opacity-60"
                          : machine === m.name
                            ? "bg-primary/10 border border-primary text-foreground"
                            : "border border-secondary text-muted-foreground hover:border-primary/50"
                      }`}
                      disabled={m.comingSoon}
                    >
                      <img
                        src={machineImages[m.name] || loaderImg}
                        alt={m.name}
                        className="w-10 h-10 rounded-lg object-contain"
                      />
                      <span className="flex-1 font-medium">{renderEquipmentName(m.name)}</span>
                      {m.comingSoon ? (
                        <span className="text-xs font-semibold bg-amber-500/90 text-white px-2 py-0.5 rounded-full">Coming Soon</span>
                      ) : (
                        <span className="text-primary font-semibold">
                          {m.rate > 0 ? `$${m.rate}/day incl GST` : "POA"}
                        </span>
                      )}
                    </button>
                  ))
                )}
              </div>

              {/* Auger drill size selector */}
              {machine.startsWith("Auger Drive") && (
                <div className="animate-fade-in-up mb-6 md:mb-8">
                  <label className="label-text text-xs text-muted-foreground mb-3 block">
                    Select Drill Size
                  </label>
                  <div className="flex gap-3">
                    {["200mm", "300mm", "450mm"].map((size) => (
                      <button
                        key={size}
                        onClick={() => setAugerDrillSize(size)}
                        className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all border ${
                          augerDrillSize === size
                            ? "border-primary bg-primary/10 text-foreground"
                            : "border-secondary text-muted-foreground hover:border-primary/50"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <div>
                  <label className="label-text text-xs text-muted-foreground mb-2 block">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full min-w-0 box-border bg-card border border-secondary rounded-lg px-3 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors appearance-none"
                  />
                </div>
                <div>
                  <label className="label-text text-xs text-muted-foreground mb-2 block">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full min-w-0 box-border bg-card border border-secondary rounded-lg px-3 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors appearance-none"
                  />
                </div>
              </div>

              {/* Fees disclaimer */}
              <div className="flex items-start gap-2 mb-4 md:mb-6 px-1">
                <Info size={14} className="text-muted-foreground flex-shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  $200 refundable bond applies — pending cleaning condition and refuelling of the machine. Additional fees may apply for further damages.{" "}
                  <a href="#" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
                    click to see fees, terms and conditions
                  </a>
                </p>
              </div>

              {/* Attachments */}
              {machine && (
                <div className="animate-fade-in-up">
                  <label className="label-text text-xs text-muted-foreground mb-2 block">
                    Attachments (prices incl GST)
                  </label>
                  <p className="text-xs text-muted-foreground mb-3">All machines come with standard buckets & ripper included.</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {attachments.map((a) => (
                      <label
                        key={a}
                        className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm cursor-pointer transition-all border ${
                          selectedAttachments.includes(a)
                            ? "border-primary bg-primary/10 text-foreground"
                            : "border-secondary text-muted-foreground hover:border-primary/50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedAttachments.includes(a)}
                          onChange={() => toggleAttachment(a)}
                          className="sr-only"
                        />
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center ${
                            selectedAttachments.includes(a)
                              ? "bg-primary border-primary"
                              : "border-secondary"
                          }`}
                        >
                          {selectedAttachments.includes(a) && (
                            <Check size={12} className="text-primary-foreground" />
                          )}
                        </div>
                        {a}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={() => setStep(2)}
                disabled={!machine || !startDate || !endDate}
                className="mt-6 md:mt-8 w-full bg-primary text-primary-foreground h-12 md:h-14 rounded-md font-semibold text-base md:text-lg hover:scale-[1.02] transition-transform disabled:opacity-40 disabled:hover:scale-100"
              >
                Continue to Your Details →
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="animate-fade-in-up">
              <h3 className="text-xl font-bold text-foreground mb-6">Location & Details</h3>

              <div className="space-y-6 max-w-lg">
                {[
                  { label: "Job Site Suburb or Postcode", type: "text", value: location, set: setLocation, placeholder: "e.g. Parramatta 2150" },
                  { label: "Full Name", type: "text", value: name, set: setName },
                  { label: "Email", type: "email", value: email, set: setEmail },
                  { label: "Phone", type: "tel", value: phone, set: setPhone },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="label-text text-xs text-muted-foreground mb-2 block">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      value={field.value}
                      onChange={(e) => field.set(e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full bg-card border border-secondary rounded-lg px-4 py-3 min-h-[48px] text-foreground focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/50"
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="border border-secondary text-foreground px-6 py-3 rounded-md font-medium hover:border-primary transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!location || !name || !email || !phone}
                  className="flex-1 bg-primary text-primary-foreground h-14 rounded-md font-semibold text-lg hover:scale-[1.02] transition-transform disabled:opacity-40 disabled:hover:scale-100"
                >
                  Next: Review Quote
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="animate-fade-in-up">
              <h3 className="text-xl font-bold text-foreground mb-6">Quote Summary</h3>

              <div className="bg-card rounded-xl p-6 mb-8 border border-secondary">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-secondary">
                    <tr>
                      <td className="py-3 text-muted-foreground">Equipment</td>
                      <td className="py-3 text-right font-medium text-foreground">{renderEquipmentName(machine)}</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Duration</td>
                      <td className="py-3 text-right font-medium text-foreground">{days} day{days !== 1 ? "s" : ""}</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Equipment Cost</td>
                      <td className="py-3 text-right font-medium text-foreground">${equipmentCost.toLocaleString()}</td>
                    </tr>
                    {selectedAttachments.length > 0 && (
                      <tr>
                        <td className="py-3 text-muted-foreground">
                          Attachments ({selectedAttachments.join(", ")})
                        </td>
                        <td className="py-3 text-right font-medium text-foreground">
                          ${(attachmentCost * days).toLocaleString()}
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td className="py-3 text-muted-foreground">
                        Delivery & Collection
                        {isThirdPartyDelivery && (
                          <span className="block text-xs text-primary/80">(third party transport)</span>
                        )}
                      </td>
                      <td className="py-3 text-right font-medium text-foreground">${deliveryCost}</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Location</td>
                      <td className="py-3 text-right font-medium text-foreground">{location}</td>
                    </tr>
                    <tr className="border-t-2 border-primary">
                      <td className="py-4 font-bold text-base text-foreground">Total (incl GST)</td>
                      <td className="py-4 text-right font-bold text-base text-primary">
                        ${totalCost.toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Refundable Bond (held on card)</td>
                      <td className="py-3 text-right font-semibold text-primary">${depositAmount}</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-muted-foreground mt-4">
                  A ${depositAmount} refundable bond is authorised on your card — pending cleaning condition and refuelling of the machine. Additional fees may apply for further damages. The hire total is due on delivery & collection.
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="border border-secondary text-foreground px-6 py-3 rounded-md font-medium hover:border-primary transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="flex-1 bg-primary text-primary-foreground h-14 rounded-md font-semibold text-lg hover:scale-[1.02] transition-transform"
                >
                  Continue to Payment →
                </button>
              </div>
            </div>
          )}

          {/* Step 4 — Stripe Payment */}
          {step === 4 && (
            <div className="animate-fade-in-up">
              <h3 className="text-xl font-bold text-foreground mb-2">Pay Bond to Confirm</h3>
              <p className="text-sm text-muted-foreground mb-6">
                A $200 refundable bond is required to secure your booking — pending cleaning condition and refuelling of the machine. Additional fees may apply for further damages. The hire total is due on delivery & collection.
              </p>

              <div className="bg-card rounded-xl p-6 border border-secondary mb-6 max-w-lg">
                <p className="text-sm text-muted-foreground mb-4">
                  You'll be redirected to Stripe's secure checkout to complete your <span className="text-primary font-semibold">$200 AUD</span> refundable bond.
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Secured by Stripe — your card details never touch our servers
                </div>
              </div>

              {/* Terms checkbox */}
              <label className="flex items-start gap-3 cursor-pointer mb-6 max-w-lg">
                <div className="mt-0.5">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                      acceptedTerms
                        ? "bg-primary border-primary"
                        : "border-secondary"
                    }`}
                  >
                    {acceptedTerms && (
                      <Check size={14} className="text-primary-foreground" />
                    )}
                  </div>
                </div>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  I have read and agree to the{" "}
                  <a href="#" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
                    Terms & Conditions
                  </a>
                </span>
              </label>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(3)}
                  disabled={isProcessing}
                  className="border border-secondary text-foreground px-6 py-3 rounded-md font-medium hover:border-primary transition-colors disabled:opacity-40"
                >
                  Back
                </button>
                <button
                  disabled={isProcessing || !acceptedTerms}
                  onClick={async () => {
                    setIsProcessing(true);
                    try {
                      const resp = await fetch("/api/create-checkout", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          depositAmount,
                          machine,
                          days,
                          totalCost,
                          attachments: selectedAttachments.join(", "),
                          location,
                          startDate,
                          endDate,
                          name,
                          email,
                          phone,
                        }),
                      });
                      const data = await resp.json();
                      if (!resp.ok) throw new Error(data?.error || "Checkout failed");
                      if (data?.url) {
                        window.location.href = data.url;
                      } else {
                        throw new Error("No checkout URL returned");
                      }
                    } catch (err: any) {
                      console.error("Checkout error:", err);
                      alert("Could not start checkout. Please try again.");
                      setIsProcessing(false);
                    }
                  }}
                  className="flex-1 bg-primary text-primary-foreground h-14 rounded-md font-semibold text-lg hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Redirecting to Stripe...
                    </>
                  ) : (
                    `Pay $200 Bond`
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
