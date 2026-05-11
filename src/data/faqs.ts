export interface FAQ {
  slug: string;
  question: string;
  answer: string;
  category: string;
  relatedEquipment?: string[];
}

export const faqs: FAQ[] = [
  // Licensing & Legal
  {
    slug: "do-i-need-a-licence-to-operate-a-mini-excavator-in-nsw",
    question: "Do I need a licence to operate a mini excavator in NSW?",
    answer: "In NSW, you do not need a licence to operate a mini excavator (under 3 tonnes) on private property. However, if you are operating on a registered commercial worksite, a High Risk Work Licence (HRWL) for earthmoving equipment is required. Always check with your site supervisor before operating any machinery.",
    category: "Licensing & Legal",
    relatedEquipment: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator"]
  },
  {
    slug: "do-i-need-a-licence-to-hire-an-excavator-in-nsw",
    question: "Do I need a licence to hire an excavator in NSW?",
    answer: "You do not need a licence to hire an excavator in NSW — BuildHire rents to anyone. However, you do need a High Risk Work Licence (HRWL) to operate an excavator on a registered commercial worksite. On private property, no licence is required for machines under 3 tonnes.",
    category: "Licensing & Legal",
    relatedEquipment: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator"]
  },
  {
    slug: "what-licence-do-i-need-to-operate-a-3-5t-excavator",
    question: "What licence do I need to operate a 3.5T excavator?",
    answer: "To operate a 3.5T excavator on a registered worksite in NSW, you need a High Risk Work Licence (HRWL) for earthmoving equipment, specifically the 'Excavator' or 'Backhoe' class. On private residential property, no licence is required, but experience is strongly recommended for safe operation.",
    category: "Licensing & Legal",
    relatedEquipment: ["3-5t-excavator"]
  },
  {
    slug: "what-licence-do-i-need-to-drive-a-tipper-truck",
    question: "What licence do I need to drive a tipper truck?",
    answer: "To drive BuildHire's Isuzu NQR450 tipper truck, you need a Medium Rigid (MR) licence or higher. This is a standard requirement for any vehicle in the MR category in NSW. If you only hold a standard car licence (Class C), you are not permitted to drive the tipper truck.",
    category: "Licensing & Legal",
    relatedEquipment: ["tipper-truck"]
  },
  {
    slug: "do-i-need-a-licence-for-a-mini-dumper",
    question: "Do I need a licence to operate a mini dumper?",
    answer: "No licence is required to operate BuildHire's 700kg mini dumper on private property in NSW. It is a pedestrian-operated machine that does not require any formal certification. It is suitable for homeowners, landscapers, and tradespeople without any licensing requirements.",
    category: "Licensing & Legal",
    relatedEquipment: ["mini-dumper-700kg"]
  },
  // Pricing & Booking
  {
    slug: "how-much-does-it-cost-to-hire-a-mini-excavator",
    question: "How much does it cost to hire a mini excavator in Sydney?",
    answer: "BuildHire's mini excavator hire starts from $200/day (incl GST) for the 0.8T model, $230/day for the 1T, and $260/day for the 1.7T. Delivery and collection is $110 each way across Greater Sydney. Prices include the machine only — operator hire is not available (dry hire only).",
    category: "Pricing & Booking",
    relatedEquipment: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator"]
  },
  {
    slug: "how-much-does-excavator-hire-cost-per-day",
    question: "How much does excavator hire cost per day in NSW?",
    answer: "Excavator hire in NSW typically ranges from $200 to $500 per day depending on machine size. BuildHire's rates are: 0.8T from $200/day, 1T from $230/day, 1.7T from $260/day, 3.5T from $310/day, and 5.5T from $345/day — all including GST. Delivery is $110 each way.",
    category: "Pricing & Booking",
    relatedEquipment: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator"]
  },
  {
    slug: "how-do-i-book-equipment-hire-with-buildhire",
    question: "How do I book equipment hire with BuildHire?",
    answer: "You can book with BuildHire by calling 1300 157 882 or submitting an enquiry through the website. Bookings placed before 12pm are eligible for next-day delivery across Greater Sydney and NSW. You will need to provide your delivery address, hire dates, and a valid ID.",
    category: "Pricing & Booking"
  },
  {
    slug: "does-buildhire-offer-weekly-hire-rates",
    question: "Does BuildHire offer weekly hire rates?",
    answer: "Yes, BuildHire offers discounted weekly hire rates for longer-term projects. Call 1300 157 882 to discuss weekly and monthly pricing for any machine in our fleet. Extended hire rates are negotiated directly and offer significant savings over the daily rate.",
    category: "Pricing & Booking"
  },
  {
    slug: "what-is-included-in-the-hire-price",
    question: "What is included in the hire price?",
    answer: "BuildHire's hire price includes the machine, a standard bucket attachment, a full tank of fuel, and all required safety documentation. Delivery and collection is charged separately at $110 each way. Damage waiver and insurance options are available — ask when booking.",
    category: "Pricing & Booking"
  },
  {
    slug: "is-gst-included-in-buildhire-prices",
    question: "Is GST included in BuildHire's hire prices?",
    answer: "Yes, all prices displayed on the BuildHire website and quoted over the phone are inclusive of GST. There are no hidden fees or surcharges added at checkout.",
    category: "Pricing & Booking"
  },
  // Delivery & Logistics
  {
    slug: "does-buildhire-offer-next-day-delivery",
    question: "Does BuildHire offer next-day delivery?",
    answer: "Yes. BuildHire offers next-day delivery for all bookings placed before 12pm Monday to Friday. We deliver across Greater Sydney and most of NSW. Call 1300 157 882 to confirm availability for your specific location.",
    category: "Delivery & Logistics"
  },
  {
    slug: "what-areas-does-buildhire-deliver-to",
    question: "What areas does BuildHire deliver to?",
    answer: "BuildHire delivers across Greater Sydney including the CBD, Inner West, Eastern Suburbs, Northern Beaches, Hills District, Western Sydney, South Western Sydney, and the Sutherland Shire. We also service Newcastle, Wollongong, Central Coast, and regional NSW. Call 1300 157 882 to confirm delivery to your area.",
    category: "Delivery & Logistics"
  },
  {
    slug: "how-much-does-delivery-cost",
    question: "How much does delivery cost for equipment hire?",
    answer: "BuildHire charges $110 for delivery and $110 for collection across Greater Sydney. Delivery pricing for regional NSW locations (Newcastle, Wollongong, Central Coast, Hunter Valley) is available on enquiry. Call 1300 157 882 for a delivery quote.",
    category: "Delivery & Logistics"
  },
  {
    slug: "can-i-pick-up-equipment-from-buildhire",
    question: "Can I pick up equipment from BuildHire?",
    answer: "Yes, the Isuzu NQR450 tipper truck is available for pick-up only from our depot. Excavators and the mini dumper can also be collected by arrangement. Call 1300 157 882 for the depot address and to arrange a pick-up time.",
    category: "Delivery & Logistics"
  },
  {
    slug: "what-size-truck-is-needed-to-transport-a-mini-excavator",
    question: "What size truck is needed to transport a mini excavator?",
    answer: "A 0.8T to 1.7T mini excavator can be transported on a standard tandem trailer or a 3.5T tilt-tray truck. A 3.5T excavator requires a semi-low loader or 8T tilt-tray. BuildHire handles all transport logistics — you do not need to arrange your own trailer.",
    category: "Delivery & Logistics"
  },
  // Equipment Selection
  {
    slug: "what-size-excavator-do-i-need",
    question: "What size excavator do I need?",
    answer: "The right excavator size depends on your job: 0.8T–1T for tight access residential work (pool surrounds, narrow side access); 1.7T for general residential earthworks, trenching, and landscaping; 3.5T for larger residential and light commercial work; 5.5T for civil construction, deep trenching, and heavy earthmoving. If unsure, call 1300 157 882 and our team will recommend the right machine.",
    category: "Equipment Selection",
    relatedEquipment: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator"]
  },
  {
    slug: "what-is-the-difference-between-a-mini-excavator-and-a-standard-excavator",
    question: "What is the difference between a mini excavator and a standard excavator?",
    answer: "Mini excavators (under 3 tonnes) are compact, rubber-tracked machines designed for tight access residential work. They can fit through standard gates and cause minimal ground disturbance. Standard excavators (3.5T and above) are heavier, more powerful machines suited for commercial and civil work with greater digging depth and bucket capacity.",
    category: "Equipment Selection",
    relatedEquipment: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator"]
  },
  {
    slug: "what-is-the-minimum-gate-width-for-a-mini-excavator",
    question: "What is the minimum gate width for a mini excavator?",
    answer: "BuildHire's 0.8T mini excavator has a track width of just 750mm, making it suitable for gates as narrow as 850mm. The 1T model requires approximately 900mm and the 1.7T requires approximately 1,000mm. If you have a particularly narrow access, call 1300 157 882 and we will confirm the exact dimensions.",
    category: "Equipment Selection",
    relatedEquipment: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator"]
  },
  {
    slug: "can-i-hire-an-excavator-with-a-rock-breaker",
    question: "Can I hire an excavator with a rock breaker attachment?",
    answer: "Yes, BuildHire offers hydraulic rock breaker attachments for our excavators. Rock breakers are ideal for breaking up concrete slabs, footings, and hard rock. Ask about attachment availability when booking — additional charges apply.",
    category: "Equipment Selection",
    relatedEquipment: ["1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator"]
  },
  {
    slug: "what-attachments-are-available-for-hire",
    question: "What attachments are available for hire with excavators?",
    answer: "BuildHire offers a standard digging bucket with all excavator hires. Optional attachments including hydraulic rock breakers and grading buckets are available on request. Attachment availability varies by machine size — call 1300 157 882 to confirm what is available for your specific hire.",
    category: "Equipment Selection"
  },
  // Pool Excavation
  {
    slug: "what-size-excavator-do-i-need-for-a-pool",
    question: "What size excavator do I need for a pool excavation?",
    answer: "For a standard residential pool, a 1.7T mini excavator is the most commonly used machine. It provides sufficient power for most soil types while remaining compact enough for residential access. For larger pools or harder ground, a 3.5T excavator may be required. A mini dumper is also recommended for removing excavated soil from tight access sites.",
    category: "Pool Excavation",
    relatedEquipment: ["1-7t-mini-excavator", "3-5t-excavator", "mini-dumper-700kg"]
  },
  {
    slug: "how-long-does-it-take-to-excavate-a-pool",
    question: "How long does it take to excavate a pool?",
    answer: "A standard 8m × 4m residential pool typically takes 1–2 days to excavate with a 1.7T mini excavator, depending on soil type and site access. Rocky or clay-heavy ground will take longer. A tipper truck or mini dumper for soil removal will significantly speed up the process.",
    category: "Pool Excavation",
    relatedEquipment: ["1-7t-mini-excavator", "mini-dumper-700kg", "tipper-truck"]
  },
  {
    slug: "can-a-mini-excavator-dig-a-pool",
    question: "Can a mini excavator dig a pool?",
    answer: "Yes, a 1.7T mini excavator is capable of excavating a standard residential pool. It can reach a digging depth of approximately 3,200mm, which is sufficient for most pool depths. For pools requiring deeper excavation or in harder ground conditions, a 3.5T excavator is recommended.",
    category: "Pool Excavation",
    relatedEquipment: ["1-7t-mini-excavator", "3-5t-excavator"]
  },
  // Landscaping
  {
    slug: "what-equipment-do-i-need-for-landscaping",
    question: "What equipment do I need for landscaping?",
    answer: "For most residential landscaping jobs, a 1T or 1.7T mini excavator handles earthmoving, levelling, and retaining wall preparation. A 700kg mini dumper is ideal for moving soil, mulch, and aggregate around the property without damaging lawns. A tipper truck is useful for removing excess soil and delivering materials.",
    category: "Landscaping",
    relatedEquipment: ["1t-mini-excavator", "1-7t-mini-excavator", "mini-dumper-700kg", "tipper-truck"]
  },
  {
    slug: "can-an-excavator-build-a-retaining-wall",
    question: "Can an excavator help build a retaining wall?",
    answer: "Yes, an excavator is essential for retaining wall construction. It is used to cut the batter, excavate the footing trench, place large blocks or sleepers, and backfill behind the wall. A 1.7T mini excavator is suitable for most residential retaining walls up to 1.5m high.",
    category: "Landscaping",
    relatedEquipment: ["1-7t-mini-excavator", "3-5t-excavator"]
  },
  // Trenching
  {
    slug: "what-size-excavator-do-i-need-for-trenching",
    question: "What size excavator do I need for trenching?",
    answer: "For standard plumbing and electrical trenches (300–600mm wide, up to 1.5m deep), a 1T or 1.7T mini excavator is ideal. For deeper utility trenches (1.5m–3m), a 3.5T or 5.5T excavator provides the reach and power required. The right machine depends on trench depth, width, and soil conditions.",
    category: "Trenching",
    relatedEquipment: ["1t-mini-excavator", "1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator"]
  },
  {
    slug: "how-deep-can-a-mini-excavator-dig",
    question: "How deep can a mini excavator dig?",
    answer: "BuildHire's mini excavators have the following maximum digging depths: 0.8T — 2,200mm; 1T — 2,500mm; 1.7T — 3,200mm. For deeper excavations, the 3.5T (3,800mm) or 5.5T (3,960mm) is recommended. These depths are maximums under ideal conditions — actual depth may vary with soil type and bucket size.",
    category: "Trenching",
    relatedEquipment: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator"]
  },
  // Safety
  {
    slug: "is-it-safe-to-operate-an-excavator-without-experience",
    question: "Is it safe to operate an excavator without experience?",
    answer: "Operating an excavator without prior experience carries significant safety risks. While no licence is required on private property for machines under 3 tonnes, BuildHire strongly recommends that operators have prior experience or undertake a brief familiarisation session before operating. Improper operation can result in serious injury, property damage, or underground service strikes.",
    category: "Safety"
  },
  {
    slug: "how-do-i-avoid-hitting-underground-services",
    question: "How do I avoid hitting underground services when digging?",
    answer: "Before any excavation, you must dial 1100 (Dial Before You Dig) to request a free service location report. This identifies the location of underground gas, water, electrical, and telecommunications services. Always hand-dig within 300mm of any identified service. BuildHire strongly recommends completing this step before any excavation work.",
    category: "Safety"
  },
  {
    slug: "what-is-dial-before-you-dig",
    question: "What is Dial Before You Dig and do I need to use it?",
    answer: "Dial Before You Dig (1100) is a free national service that provides information about underground utilities before you excavate. It is a legal requirement on commercial worksites and strongly recommended for all residential excavation. Call 1100 or visit dial1100.com.au at least 2 business days before digging to receive a free service location report.",
    category: "Safety"
  },
  // Dry Hire vs Wet Hire
  {
    slug: "what-is-dry-hire",
    question: "What is dry hire?",
    answer: "Dry hire means hiring equipment without an operator — you operate the machine yourself. BuildHire is a dry hire specialist, meaning all machines are hired without an operator included. This is the most cost-effective option for experienced operators and owner-builders. If you need an operator, you will need to source one separately.",
    category: "Dry Hire vs Wet Hire"
  },
  {
    slug: "does-buildhire-offer-wet-hire",
    question: "Does BuildHire offer wet hire (with operator)?",
    answer: "No, BuildHire specialises in dry hire only — equipment is provided without an operator. This keeps costs lower and gives you full control over your project schedule. If you require an operator, we recommend contacting a local earthmoving contractor who can supply both machine and operator.",
    category: "Dry Hire vs Wet Hire"
  },
  {
    slug: "is-dry-hire-cheaper-than-wet-hire",
    question: "Is dry hire cheaper than wet hire?",
    answer: "Yes, dry hire is significantly cheaper than wet hire. Wet hire (machine plus operator) typically costs $800–$1,500 per day for a mini excavator in Sydney. BuildHire's dry hire rates start from $200/day. If you are an experienced operator or owner-builder, dry hire offers exceptional value.",
    category: "Dry Hire vs Wet Hire"
  },
  // Site Clearing & Demolition
  {
    slug: "what-equipment-do-i-need-to-clear-a-block",
    question: "What equipment do I need to clear a residential block?",
    answer: "For clearing a standard residential block, a 3.5T or 5.5T excavator handles vegetation removal, stump extraction, and topsoil stripping. A tipper truck is essential for removing the cleared material from site. For smaller blocks or tighter access, a 1.7T mini excavator paired with a tipper truck is a cost-effective combination.",
    category: "Site Clearing",
    relatedEquipment: ["1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator", "tipper-truck"]
  },
  {
    slug: "can-an-excavator-remove-tree-stumps",
    question: "Can an excavator remove tree stumps?",
    answer: "Yes, an excavator is one of the most effective tools for removing tree stumps. The machine digs around the stump to expose the root ball, then levers it out of the ground. A 1.7T or 3.5T excavator is suitable for most residential stumps. Very large stumps may require a 5.5T machine or a combination of excavator and rock breaker.",
    category: "Site Clearing",
    relatedEquipment: ["1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator"]
  },
  // Mini Dumper
  {
    slug: "what-is-a-mini-dumper-used-for",
    question: "What is a mini dumper used for?",
    answer: "A mini dumper is a small, tracked machine used to transport soil, aggregate, mulch, and other materials across a site. It is ideal for moving material from a backyard excavation to a skip bin or tipper truck at the front of the property. The high-tip capability allows it to tip directly into most skip bins without manual shovelling.",
    category: "Mini Dumper",
    relatedEquipment: ["mini-dumper-700kg"]
  },
  {
    slug: "how-much-can-a-mini-dumper-carry",
    question: "How much can a mini dumper carry?",
    answer: "BuildHire's Cormidi C7X mini dumper has a payload capacity of 700kg and a skip volume of 0.35 cubic metres. This is approximately equivalent to 5–7 wheelbarrow loads per trip, making it significantly faster than manual wheelbarrowing for moving material across a site.",
    category: "Mini Dumper",
    relatedEquipment: ["mini-dumper-700kg"]
  },
  // Tipper Truck
  {
    slug: "how-much-soil-can-a-tipper-truck-hold",
    question: "How much soil can a tipper truck hold?",
    answer: "BuildHire's Isuzu NQR450 tipper truck has a body volume of 6 cubic metres and a payload capacity of 4,500kg. Depending on soil density, this equates to approximately 4–6 cubic metres of loose soil per load. For large excavations, multiple loads or a larger truck may be required.",
    category: "Tipper Truck",
    relatedEquipment: ["tipper-truck"]
  },
  {
    slug: "can-i-use-a-tipper-truck-to-deliver-gravel",
    question: "Can I use a tipper truck to deliver gravel or aggregate?",
    answer: "Yes, the tipper truck is ideal for picking up and delivering bulk materials such as gravel, sand, road base, and aggregate. You can drive it to your local landscape supplier, load up, and tip directly on site. Remember that a Medium Rigid (MR) licence is required to drive the tipper truck.",
    category: "Tipper Truck",
    relatedEquipment: ["tipper-truck"]
  },
  // General
  {
    slug: "how-far-in-advance-do-i-need-to-book",
    question: "How far in advance do I need to book equipment?",
    answer: "For next-day delivery, bookings must be placed before 12pm the day prior. For weekend hires, we recommend booking by Thursday. During peak periods (spring and summer), booking 2–3 days in advance is recommended to guarantee availability. Call 1300 157 882 to check current availability.",
    category: "General"
  },
  {
    slug: "what-happens-if-equipment-breaks-down-on-site",
    question: "What happens if equipment breaks down on site?",
    answer: "BuildHire provides 24/7 support for all active hires. If a machine breaks down on site, call 1300 157 882 immediately. We will arrange a replacement machine or technician as quickly as possible. You will not be charged for downtime caused by a mechanical fault.",
    category: "General"
  },
  {
    slug: "does-buildhire-hire-to-owner-builders",
    question: "Does BuildHire hire to owner-builders?",
    answer: "Yes, BuildHire regularly hires to owner-builders across Sydney and NSW. You do not need to be a licensed contractor to hire from us. Owner-builders are responsible for ensuring they comply with all relevant safety and licensing requirements for their specific project.",
    category: "General"
  },
  {
    slug: "does-buildhire-hire-to-homeowners",
    question: "Does BuildHire hire to homeowners?",
    answer: "Yes, BuildHire hires to homeowners for residential projects including pool excavation, landscaping, driveway preparation, and site clearing. No trade licence is required. You will need a valid ID and to meet our standard hire terms and conditions.",
    category: "General"
  },
  {
    slug: "what-is-the-minimum-hire-period",
    question: "What is the minimum hire period for equipment?",
    answer: "The minimum hire period for all BuildHire equipment is one day. There is no minimum booking for multiple days — you can hire for exactly as many days as your project requires. Weekly and monthly rates are available for longer projects.",
    category: "General"
  },
  {
    slug: "does-buildhire-operate-on-weekends",
    question: "Does BuildHire operate on weekends?",
    answer: "Yes, BuildHire delivers and collects equipment on weekends. Weekend delivery availability is subject to scheduling — call 1300 157 882 or book online to confirm weekend availability for your area. We recommend booking weekend hires by Thursday to guarantee delivery.",
    category: "General"
  }
];
