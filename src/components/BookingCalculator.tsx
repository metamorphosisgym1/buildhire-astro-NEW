import { useEffect, useState } from "react";
import { Check, Wrench, Cog } from "lucide-react";
import { trackBuildHireEvent } from "../lib/analytics";
import { isAustralianMobile, newEventId, sendLead } from "../lib/sendLead";

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
const kubotaU10Img = "/assets/kubota-u10-5-branded.webp";
const vio17Img = "/assets/vio17-excavator.png";
const vio35Img = "/assets/vio35-excavator.png";
const vio55Img = "/assets/vio55-excavator.png";
const vio80Img = "/assets/vio80-excavator.png";
const cormidiC7xImg = "/assets/cormidi-c7x.jpg";
const cormidiC85Img = "/assets/cormidi-c85.webp";
const loaderImg = "/assets/loader-lilac.jpg";
const bookingBg = "/assets/bg-excavator-1.webp";
const rockBreakerImg = "/assets/rock-breaker-buildhire.webp";
const sieveBucketImg = "/assets/sieve-bucket-tiger.png";
const augerImg = "/assets/auger-drive.jpg";
const rockGrabImg = "/assets/rock-grab.webp";

const categoryIcons: Record<string, React.ComponentType<any>> = {
  Excavators: ExcavatorIcon,
  "Mini Dumpers": MiniDumperIcon,
  Attachments: Wrench,
};

const machineImages: Record<string, string> = {
  "0.8T Mini Excavator (SV08 Yanmar)": sv08Img,
  "1T Mini Excavator (Kubota U10-5)": kubotaU10Img,
  "1.7T Mini Excavator (ViO17 Yanmar)": vio17Img,
  "3.5T Excavator (ViO35-7 Yanmar)": vio35Img,
  "5.5T Excavator (ViO55 Yanmar)": vio55Img,
  "8T Excavator (ViO80 Yanmar)": vio80Img,
  "14.5T Excavator (Case CX145C)": vio80Img,
  "Cormidi C7x 700kg Petrol High Tip": cormidiC7xImg,
  "Cormidi C85": cormidiC85Img,
  "Auger Drive 1T": augerImg,
  "Auger Drive 1.7T": augerImg,
  "Auger Drive 3.5T": augerImg,
  "Auger Drive 5.5T": augerImg,
  "Auger Drive 14.5T": augerImg,
  "Rock Grab 3.5T": rockGrabImg,
  "Rock Grab 5.5T": rockGrabImg,
  "Rock Grab 14.5T": rockGrabImg,
  "Sieve Bucket 1.7T (Tiger Buckets)": sieveBucketImg,
  "Sieve Bucket 3.5T (Tiger Buckets)": sieveBucketImg,
  "Sieve Bucket 5.5T (Tiger Buckets)": sieveBucketImg,
  "Sieve Bucket 14.5T (Tiger Buckets)": sieveBucketImg,
  "Hydraulic Hammer 1T": rockBreakerImg,
  "Hydraulic Hammer 1.7T": rockBreakerImg,
  "Hydraulic Hammer 3.5T": rockBreakerImg,
  "Hydraulic Hammer 5.5T": rockBreakerImg,
  "Hydraulic Hammer 14.5T": rockBreakerImg,
};

export const equipmentData: Record<string,{ name: string; rate: number; weeklyRate?: number; comingSoon?: boolean }[]> = {
  Excavators: [
    { name: "0.8T Mini Excavator (SV08 Yanmar)", rate: 200, weeklyRate: 1000 },
    { name: "1T Mini Excavator (Kubota U10-5)", rate: 200, weeklyRate: 1000 },
    { name: "1.7T Mini Excavator (ViO17 Yanmar)", rate: 205, weeklyRate: 1100 },
    { name: "3.5T Excavator (ViO35-7 Yanmar)", rate: 340, weeklyRate: 1550 },
    { name: "5.5T Excavator (ViO55 Yanmar)", rate: 370, weeklyRate: 1650 },
    { name: "8T Excavator (ViO80 Yanmar)", rate: 0, comingSoon: true },
    { name: "14.5T Excavator (Case CX145C)", rate: 490, weeklyRate: 2000 },
  ],
  "Mini Dumpers": [
    { name: "Cormidi C7x 700kg Petrol High Tip", rate: 200, weeklyRate: 1000 },
    { name: "Cormidi C85", rate: 200, weeklyRate: 1000 },
  ],
  Attachments: [
    { name: "Hydraulic Hammer 1T", rate: 130 },
    { name: "Hydraulic Hammer 1.7T", rate: 150 },
    { name: "Hydraulic Hammer 3.5T", rate: 140 },
    { name: "Hydraulic Hammer 5.5T", rate: 190 },
    { name: "Hydraulic Hammer 14.5T", rate: 230 },
    { name: "Auger Drive 1T", rate: 180 },
    { name: "Auger Drive 1.7T", rate: 190 },
    { name: "Auger Drive 3.5T", rate: 200 },
    { name: "Auger Drive 5.5T", rate: 200 },
    { name: "Auger Drive 14.5T", rate: 250 },
    { name: "Rock Grab 3.5T", rate: 140 },
    { name: "Rock Grab 5.5T", rate: 150 },
    { name: "Rock Grab 14.5T", rate: 150 },
    { name: "Sieve Bucket 1.7T (Tiger Buckets)", rate: 50 },
    { name: "Sieve Bucket 3.5T (Tiger Buckets)", rate: 50 },
    { name: "Sieve Bucket 5.5T (Tiger Buckets)", rate: 50 },
    { name: "Sieve Bucket 14.5T (Tiger Buckets)", rate: 50 },
    { name: "Plant trailer (1.7T collection)", rate: 50 },
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
  const [foundUs, setFoundUs] = useState("");
  const [aiAsked, setAiAsked] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [sent, setSent] = useState(false);

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

  // Sends the booking to GHL through the same route as the /hire-now/ form (WhatsApp retired 28 Nov 2026).
  const handleSendBooking = () => {
    if (!isAustralianMobile(phone)) {
      setPhoneError(true);
      return;
    }
    if (sent) return;
    setSent(true);
    const eventId = newEventId();
    trackBuildHireEvent(
      "generate_lead",
      {
        lead_channel: "form",
        booking_form: "booking_calculator",
        equipment_category: category,
        equipment_name: machine,
        hire_days: days,
        delivery_suburb_provided: Boolean(suburb),
        job_type: jobType || "not_provided",
        site_access: siteAccess || "not_provided",
        found_us: foundUs || "not_provided",
      },
      eventId
    );
    sendLead(
      {
        form: "booking_calculator",
        name: name.trim(),
        phone: phone.trim(),
        machine,
        length: `${days} day${days !== 1 ? "s" : ""}, ${formatDate(startDate)} to ${formatDate(endDate)}, ${suburb}`,
        start_date: startDate,
        end_date: endDate,
        suburb,
        job_type: jobType,
        site_access: siteAccess,
        found_us: aiAsked ? `${foundUs} (asked: ${aiAsked})` : foundUs,
        estimate: `$${effectiveEquipmentCost.toLocaleString()} incl GST, delivery extra`,
      },
      eventId
    );
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
          Pick a machine and dates, and we'll call you to confirm.
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

          {/* ── Step 3: Name, phone, send to Build Hire ── */}
          {step === 3 && !sent && (
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
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setPhoneError(false);
                    }}
                    aria-invalid={phoneError}
                    placeholder="e.g. 0412 345 678"
                    className="w-full bg-card border border-secondary rounded-lg px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/50"
                  />
                  {phoneError && (
                    <p role="alert" className="text-sm text-destructive mt-1">
                      Please enter an Australian mobile, for example 0412 345 678.
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="found-us" className="label-text text-xs text-muted-foreground mb-2 block">How did you find us? (optional)</label>
                  <select
                    id="found-us"
                    value={foundUs}
                    onChange={(e) => setFoundUs(e.target.value)}
                    className="w-full bg-card border border-secondary rounded-lg px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Choose one</option>
                    <option>Google search</option>
                    <option>Google Maps</option>
                    <option>AI assistant (ChatGPT, Gemini or similar)</option>
                    <option>Facebook or Instagram</option>
                    <option>Word of mouth</option>
                    <option>Hired before</option>
                    <option>Other</option>
                  </select>
                </div>
                {foundUs.startsWith("AI assistant") && (
                  <div>
                    <label htmlFor="ai-asked" className="label-text text-xs text-muted-foreground mb-2 block">What did you ask it? (optional)</label>
                    <input
                      id="ai-asked"
                      type="text"
                      value={aiAsked}
                      onChange={(e) => setAiAsked(e.target.value)}
                      placeholder="e.g. mini excavator hire near me"
                      className="w-full bg-card border border-secondary rounded-lg px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/50"
                    />
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="border border-secondary text-foreground px-6 py-3 rounded-md font-medium hover:border-primary transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleSendBooking}
                  disabled={!name || !phone}
                  className="flex-1 bg-primary text-primary-foreground h-12 md:h-14 rounded-md font-semibold text-base md:text-lg hover:scale-[1.02] transition-transform disabled:opacity-40 disabled:hover:scale-100"
                >
                  Check Dates and Book
                </button>
              </div>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                By sending, you're OK with Build Hire calling and texting you about your hire and machine availability.{" "}
                <a href="/privacy/" target="_blank" rel="noopener" className="underline">Privacy policy</a>
              </p>
            </div>
          )}

          {/* ── Sent ── */}
          {step === 3 && sent && (
            <div role="status" className="animate-fade-in-up text-center">
              <span className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-3 mx-auto">
                <Check size={24} aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold text-foreground mb-3">Got it. We'll call you within 10 minutes.</h3>
              <p className="text-sm text-muted-foreground">
                We confirm the machine, dates and delivery price on the call. Rather talk now? Call{" "}
                <a href="tel:1300157882" className="underline font-semibold text-foreground">1300 157 882</a>.
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
