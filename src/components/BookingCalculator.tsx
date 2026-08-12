import { useEffect, useState } from "react";
import { Check, Truck, Wrench, Cog, CircleDot } from "lucide-react";
import { trackBuildHireEvent } from "../lib/analytics";

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
const kubotaU10Img = "/assets/kubota-u10-5-branded.png";
const boxTrailerImg = "/assets/box-trailer.jpg";
const vio17Img = "/assets/vio17-excavator.png";
const vio35Img = "/assets/vio35-excavator.png";
const vio55Img = "/assets/vio55-excavator.png";
const vio80Img = "/assets/vio80-excavator.png";
const isuzuTipperImg = "/assets/isuzu-tipper.png";
const cormidiC7xImg = "/assets/cormidi-c7x.jpg";
const cormidiC85Img = "/assets/cormidi-c85.jpg";
const loaderImg = "/assets/loader-lilac.jpg";
const bookingBg = "/assets/bg-excavator-1.jpg";
const rockBreakerImg = "/assets/rock-breaker-buildhire.png";
const sieveBucketImg = "/assets/sieve-bucket-tiger.png";
const augerImg = "/assets/auger-drive.jpg";
const rockGrabImg = "/assets/rock-grab.jpg";
const typhoonWasherImg = "/assets/typhoon-pressure-washer.png";
const demolitionHammerImg = "/assets/demolition-hammer.png";
const concreteSawImg = "/assets/concrete-saw.png";

const WHATSAPP_NUMBER = "61435421324";

const categoryIcons: Record<string, React.ComponentType<any>> = {
  Excavators: ExcavatorIcon,
  "Mini Dumpers": MiniDumperIcon,
  "Tipper Trucks": Truck,
  Attachments: Wrench,
  "Concrete saws & other tools": CircleDot,
};

const machineImages: Record<string, string> = {
  "0.8T Mini Excavator (SV08 Yanmar)": sv08Img,
  "1T Mini Excavator (Kubota U10-5)": kubotaU10Img,
  "1.7T Mini Excavator (ViO17 Yanmar)": vio17Img,
  "3.5T Excavator (ViO35-7 Yanmar)": vio35Img,
  "5.5T Excavator (ViO55 Yanmar)": vio55Img,
  "8T Excavator (ViO80 Yanmar)": vio80Img,
  "14.5T Excavator (Case CX145C)": vio80Img,
  "23T Excavator (Sumitomo SH235X-6)": vio80Img,
  "Isuzu NQR450 Tipper": isuzuTipperImg,
  "Box Trailer": boxTrailerImg,
  "Cormidi C7x 700kg Petrol High Tip": cormidiC7xImg,
  "Cormidi C85": cormidiC85Img,
  "Auger Drive 1.7T (200mm, 300mm, 450mm)": augerImg,
  "Auger Drive 3.5T (200mm, 300mm, 450mm)": augerImg,
  "Auger Drive 5.5T (200mm, 300mm, 450mm)": augerImg,
  "Rock Grab 3.5T": rockGrabImg,
  "Rock Grab 5.5T": rockGrabImg,
  "Rock Grab 14.5T": rockGrabImg,
  "Sieve Bucket 1.7T (Tiger Buckets)": sieveBucketImg,
  "Sieve Bucket 3.5T (Tiger Buckets)": sieveBucketImg,
  "Sieve Bucket 5.5T (Tiger Buckets)": sieveBucketImg,
  "Sieve Bucket 14.5T (Tiger Buckets)": sieveBucketImg,
  "Trailer (1.7T)": boxTrailerImg,
  "Hydraulic Hammer 0.8T/1T": rockBreakerImg,
  "Hydraulic Hammer 1.7T": rockBreakerImg,
  "Hydraulic Hammer 3.5T": rockBreakerImg,
  "Hydraulic Hammer 5.5T": rockBreakerImg,
  "Hydraulic Hammer 14.5T": rockBreakerImg,
  "Auger Drive 0.8T/1T (1 attachment)": augerImg,
  "Auger Drive 14.5T (200mm, 300mm, 450mm)": augerImg,
  "Husqvarna K970 MKIII 16\" Concrete Saw": concreteSawImg,
  "Bosch GSH16-30 Demolition Hammer": demolitionHammerImg,
  "Typhoon TPW4200H Pressure Washer": typhoonWasherImg,
};

const equipmentData: Record<string, { name: string; rate: number; weeklyRate?: number; comingSoon?: boolean }[]> = {
  Excavators: [
    { name: "0.8T Mini Excavator (SV08 Yanmar)", rate: 200, weeklyRate: 1000 },
    { name: "1T Mini Excavator (Kubota U10-5)", rate: 200, weeklyRate: 1000 },
    { name: "1.7T Mini Excavator (ViO17 Yanmar)", rate: 205, weeklyRate: 1100 },
    { name: "3.5T Excavator (ViO35-7 Yanmar)", rate: 340, weeklyRate: 1550 },
    { name: "5.5T Excavator (ViO55 Yanmar)", rate: 370, weeklyRate: 1650 },
    { name: "8T Excavator (ViO80 Yanmar)", rate: 420, comingSoon: true },
    { name: "14.5T Excavator (Case CX145C)", rate: 490, weeklyRate: 2100 },
    { name: "23T Excavator (Sumitomo SH235X-6)", rate: 490, weeklyRate: 2100, comingSoon: true },
  ],
  "Mini Dumpers": [
    { name: "Cormidi C7x 700kg Petrol High Tip", rate: 200 },
    { name: "Cormidi C85", rate: 200 },
  ],
  "Tipper Trucks": [
    { name: "Isuzu NQR450 Tipper", rate: 280 },
    { name: "Box Trailer", rate: 150 },
  ],
  Attachments: [
    { name: "Hydraulic Hammer 0.8T/1T", rate: 130 },
    { name: "Hydraulic Hammer 1.7T", rate: 130 },
    { name: "Hydraulic Hammer 3.5T", rate: 140 },
    { name: "Hydraulic Hammer 5.5T", rate: 190 },
    { name: "Hydraulic Hammer 14.5T", rate: 250 },
    { name: "Auger Drive 0.8T/1T (1 attachment)", rate: 130 },
    { name: "Auger Drive 1.7T (200mm, 300mm, 450mm)", rate: 130 },
    { name: "Auger Drive 3.5T (200mm, 300mm, 450mm)", rate: 160 },
    { name: "Auger Drive 5.5T (200mm, 300mm, 450mm)", rate: 180 },
    { name: "Auger Drive 14.5T (200mm, 300mm, 450mm)", rate: 230 },
    { name: "Rock Grab 3.5T", rate: 135 },
    { name: "Rock Grab 5.5T", rate: 150 },
    { name: "Rock Grab 14.5T", rate: 180 },
    { name: "Sieve Bucket 1.7T (Tiger Buckets)", rate: 50 },
    { name: "Sieve Bucket 3.5T (Tiger Buckets)", rate: 50 },
    { name: "Sieve Bucket 5.5T (Tiger Buckets)", rate: 50 },
    { name: "Sieve Bucket 14.5T (Tiger Buckets)", rate: 50 },
    { name: "Trailer (1.7T)", rate: 50 },
  ],
  "Concrete saws & other tools": [
    { name: "Husqvarna K970 MKIII 16\" Concrete Saw", rate: 140 },
    { name: "Bosch GSH16-30 Demolition Hammer", rate: 110 },
    { name: "Typhoon TPW4200H Pressure Washer", rate: 150 },
  ],
};

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

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-AU", { day: "2-digit", month: "short", year: "numeric" });
}

export default function BookingCalculator() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState<string>("Excavators");
  const [machine, setMachine] = useState<string>("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [suburb, setSuburb] = useState("");
  const [jobType, setJobType] = useState("");
  const [siteAccess, setSiteAccess] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    trackBuildHireEvent("booking_step_view", {
      booking_step: step,
      equipment_category: category,
      equipment_name: machine || "not_selected",
    });
  }, [step, category, machine]);

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

  // Weekly rate calculation — apply weekly rate for full weeks, daily rate for remaining days
  const weeks = days >= 7 ? Math.floor(days / 7) : 0;
  const remainingDays = days >= 7 ? days % 7 : days;
  const weeklyRate = selectedMachine?.weeklyRate ?? 0;
  const effectiveEquipmentCost =
    weeklyRate > 0 && weeks > 0
      ? weeks * weeklyRate + remainingDays * (selectedMachine?.rate ?? 0)
      : (selectedMachine?.rate ?? 0) * days;

  const buildWhatsAppMessage = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const source = searchParams.get("utm_source") || "website";
    const medium = searchParams.get("utm_medium") || "organic_or_direct";
    const lines = [
      "Hi Buildhire! I'd like to book the following:",
      "",
      `Equipment: ${machine}`,
      `Start Date: ${formatDate(startDate)}`,
      `End Date: ${formatDate(endDate)}`,
      `Duration: ${days} day${days !== 1 ? "s" : ""}`,
      `Estimated Hire Cost: $${effectiveEquipmentCost.toLocaleString()} (excl. delivery)`,
      `Delivery Suburb: ${suburb}`,
      `Delivery: Price on request`,
      `Job Type: ${jobType || "Not provided"}`,
      `Site Access: ${siteAccess || "Not provided"}`,
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      "",
      `Lead Source: ${source} / ${medium}`,
      `Landing Page: ${window.location.pathname}`,
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const handleBookViaWhatsApp = () => {
    trackBuildHireEvent("generate_lead", {
      lead_channel: "whatsapp",
      equipment_category: category,
      equipment_name: machine,
      hire_days: days,
      delivery_suburb_provided: Boolean(suburb),
      job_type: jobType || "not_provided",
      site_access: siteAccess || "not_provided",
    });
    trackBuildHireEvent("whatsapp_booking_start", {
      equipment_category: category,
      equipment_name: machine,
      hire_days: days,
      job_type: jobType || "not_provided",
    });
    const msg = buildWhatsAppMessage();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section id="booking" className="relative py-12 md:py-24 px-4 md:px-6 overflow-hidden">
      <img src={bookingBg} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <p className="label-text text-primary text-center mb-3 text-sm">Get Started</p>
        <h2 className="text-2xl md:text-5xl font-bold text-white text-center mb-2">
          Instant Quote & Booking
        </h2>
        <p className="text-white/60 text-center text-sm mb-8 md:mb-12 max-w-xl mx-auto">
          Book your equipment hire in seconds — confirm via WhatsApp.
        </p>

        {/* Progress bar */}
        <div className="flex items-center justify-center gap-1 md:gap-2 mb-8 md:mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  step >= s
                    ? "bg-primary text-primary-foreground"
                    : "border-2 border-white/30 text-white/50"
                }`}
              >
                {step > s ? <Check size={18} /> : s}
              </div>
              {s < 3 && (
                <div className={`w-16 h-0.5 ${step > s ? "bg-primary" : "bg-white/20"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="bg-background border border-secondary rounded-2xl p-4 md:p-8">

          {/* ── Step 1: Choose equipment ── */}
          {step === 1 && (
            <div className="animate-fade-in-up">
              <h3 className="text-xl font-bold text-foreground mb-6">Select Equipment</h3>

              {/* Category cards */}
              <label className="label-text text-xs text-muted-foreground mb-3 block">Category</label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3 mb-6 md:mb-8">
                {Object.keys(equipmentData).map((cat) => {
                  const Icon = categoryIcons[cat] || Cog;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setCategory(cat);
                        setMachine("");
                        trackBuildHireEvent("equipment_category_selected", {
                          equipment_category: cat,
                        });
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

              {/* Machine list with image + daily rate */}
              <label className="label-text text-xs text-muted-foreground mb-3 block">Machine</label>
              <div className="space-y-2 mb-6">
                {equipmentData[category]?.map((m) => (
                  <button
                    key={m.name}
                    onClick={() => {
                      if (m.comingSoon) return;
                      setMachine(m.name);
                      trackBuildHireEvent("select_item", {
                        item_category: category,
                        item_name: m.name,
                        value: m.rate,
                        currency: "AUD",
                      });
                    }}
                    disabled={m.comingSoon}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all flex items-center gap-4 ${
                      m.comingSoon
                        ? "border border-secondary text-muted-foreground/50 cursor-not-allowed opacity-60"
                        : machine === m.name
                          ? "bg-primary/10 border border-primary text-foreground"
                          : "border border-secondary text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={machineImages[m.name] || loaderImg}
                      alt={m.name}
                      className="w-12 h-12 rounded-lg object-contain flex-shrink-0"
                    />
                    <span className="flex-1 font-medium">{renderEquipmentName(m.name)}</span>
                    {m.comingSoon ? (
                      <span className="text-xs font-semibold bg-amber-500/90 text-white px-2 py-0.5 rounded-full">
                        Coming Soon
                      </span>
                    ) : (
                      <span className="text-primary font-semibold whitespace-nowrap">
                        ${m.rate}/day
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  trackBuildHireEvent("booking_step_completed", {
                    completed_step: 1,
                    equipment_category: category,
                    equipment_name: machine,
                  });
                  setStep(2);
                }}
                disabled={!machine}
                className="w-full bg-primary text-primary-foreground h-12 md:h-14 rounded-md font-semibold text-base md:text-lg hover:scale-[1.02] transition-transform disabled:opacity-40 disabled:hover:scale-100"
              >
                Next: Pick Dates & Delivery →
              </button>
            </div>
          )}

          {/* ── Step 2: Dates & delivery suburb ── */}
          {step === 2 && (
            <div className="animate-fade-in-up">
              <h3 className="text-xl font-bold text-foreground mb-1">Dates & Delivery</h3>
              {/* Selected machine summary */}
              <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-primary/10 border border-primary/30">
                <img
                  src={machineImages[machine] || loaderImg}
                  alt={machine}
                  className="w-12 h-12 rounded-lg object-contain flex-shrink-0"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{renderEquipmentName(machine)}</p>
                  <p className="text-xs text-primary font-medium">
                    ${selectedMachine?.rate}/day incl GST
                    {selectedMachine?.weeklyRate ? ` · $${selectedMachine.weeklyRate}/week` : ""}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="label-text text-xs text-muted-foreground mb-2 block">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full bg-card border border-secondary rounded-lg px-3 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors appearance-none"
                  />
                </div>
                <div>
                  <label className="label-text text-xs text-muted-foreground mb-2 block">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full bg-card border border-secondary rounded-lg px-3 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors appearance-none"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="label-text text-xs text-muted-foreground mb-2 block">Delivery Suburb</label>
                <input
                  type="text"
                  value={suburb}
                  onChange={(e) => setSuburb(e.target.value)}
                  placeholder="e.g. Parramatta 2150"
                  className="w-full bg-card border border-secondary rounded-lg px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="label-text text-xs text-muted-foreground mb-2 block">What is the job for? <span className="normal-case font-normal">(optional)</span></label>
                  <select
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    className="w-full bg-card border border-secondary rounded-lg px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select a job type</option>
                    <option value="Landscaping or retaining">Landscaping or retaining</option>
                    <option value="Pool excavation">Pool excavation</option>
                    <option value="Drainage or trenching">Drainage or trenching</option>
                    <option value="Demolition or site clearing">Demolition or site clearing</option>
                    <option value="Construction or civil works">Construction or civil works</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="label-text text-xs text-muted-foreground mb-2 block">Site access <span className="normal-case font-normal">(optional)</span></label>
                  <select
                    value={siteAccess}
                    onChange={(e) => setSiteAccess(e.target.value)}
                    className="w-full bg-card border border-secondary rounded-lg px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select site access</option>
                    <option value="Tight or narrow access">Tight or narrow access</option>
                    <option value="Standard residential access">Standard residential access</option>
                    <option value="Commercial or open site">Commercial or open site</option>
                    <option value="Unsure — need advice">Unsure — need advice</option>
                  </select>
                </div>
              </div>

              {/* Estimated hire cost */}
              {days > 0 && (
                <div className="rounded-xl bg-card border border-secondary p-4 mb-4 text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium text-foreground">{days} day{days !== 1 ? "s" : ""}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-muted-foreground">Estimated Hire Cost</span>
                    <span className="font-semibold text-primary">${effectiveEquipmentCost.toLocaleString()} incl GST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery & Collection</span>
                    <span className="font-medium text-foreground">Price on request</span>
                  </div>
                </div>
              )}

              <p className="text-xs text-muted-foreground mb-6">
                Delivery & Collection: Price on request — our team will confirm pricing when we get in touch.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="border border-secondary text-foreground px-6 py-3 rounded-md font-medium hover:border-primary transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    trackBuildHireEvent("booking_step_completed", {
                      completed_step: 2,
                      equipment_category: category,
                      equipment_name: machine,
                      hire_days: days,
                      delivery_suburb_provided: Boolean(suburb),
                      job_type: jobType || "not_provided",
                      site_access: siteAccess || "not_provided",
                    });
                    setStep(3);
                  }}
                  disabled={!startDate || !endDate || !suburb}
                  className="flex-1 bg-primary text-primary-foreground h-12 md:h-14 rounded-md font-semibold text-base md:text-lg hover:scale-[1.02] transition-transform disabled:opacity-40 disabled:hover:scale-100"
                >
                  Next: Your Details →
                </button>
              </div>
            </div>
          )}

          {/* ── Step 3: Name, phone & WhatsApp CTA ── */}
          {step === 3 && (
            <div className="animate-fade-in-up">
              <h3 className="text-xl font-bold text-foreground mb-6">Your Details</h3>

              {/* Booking summary */}
              <div className="rounded-xl bg-card border border-secondary p-4 mb-6 text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Equipment</span>
                  <span className="font-medium text-foreground text-right max-w-[60%]">{renderEquipmentName(machine)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dates</span>
                  <span className="font-medium text-foreground">{formatDate(startDate)} – {formatDate(endDate)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium text-foreground">{days} day{days !== 1 ? "s" : ""}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Est. Hire Cost</span>
                  <span className="font-semibold text-primary">${effectiveEquipmentCost.toLocaleString()} incl GST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Suburb</span>
                  <span className="font-medium text-foreground">{suburb}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery & Collection</span>
                  <span className="font-medium text-foreground">Price on request</span>
                </div>
              </div>

              <div className="space-y-4 max-w-lg mb-6">
                <div>
                  <label className="label-text text-xs text-muted-foreground mb-2 block">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full bg-card border border-secondary rounded-lg px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
                <div>
                  <label className="label-text text-xs text-muted-foreground mb-2 block">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0412 345 678"
                    className="w-full bg-card border border-secondary rounded-lg px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="border border-secondary text-foreground px-6 py-3 rounded-md font-medium hover:border-primary transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleBookViaWhatsApp}
                  disabled={!name || !phone}
                  className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] text-white h-12 md:h-14 rounded-md font-semibold text-base md:text-lg hover:scale-[1.02] hover:bg-[#1ebe5d] transition-all disabled:opacity-40 disabled:hover:scale-100"
                >
                  {/* WhatsApp icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book via WhatsApp
                </button>
              </div>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                Tapping "Book via WhatsApp" will open WhatsApp with your booking details pre-filled. Our team will confirm availability and pricing.
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
