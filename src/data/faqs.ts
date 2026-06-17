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
    answer: "BuildHire's mini excavator hire starts from $200/day (incl GST) for the 0.8T model, $200/day for the 1T, and $205/day for the 1.7T. Delivery and collection starts from $150 across Greater Sydney. Prices include the machine only — operator hire is not available (dry hire only).",
    category: "Pricing & Booking",
    relatedEquipment: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator"]
  },
  {
    slug: "how-much-does-excavator-hire-cost-per-day",
    question: "How much does excavator hire cost per day in NSW?",
    answer: "Excavator hire in NSW typically ranges from $200 to $500 per day depending on machine size. BuildHire's rates are: 0.8T from $200/day, 1T from $200/day, 1.7T from $205/day, 3.5T from $340/day, 5.5T from $370/day, and 14.5T from $490/day — all including GST. Delivery starts from $150.",
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
    answer: "BuildHire's hire price includes the machine, a standard bucket attachment, a full tank of fuel, and all required safety documentation. Delivery and collection is charged separately — $150 for 0.8T–1.7T, $220 for 3.5T. Damage waiver and insurance options are available — ask when booking.",
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
    answer: "BuildHire charges from $150 for delivery and collection across Greater Sydney — $150 for 0.8T–1.7T, $220 for 3.5T. Larger machines via third-party transport. Delivery pricing for regional NSW locations (Newcastle, Wollongong, Central Coast, Hunter Valley) is available on enquiry. Call 1300 157 882 for a delivery quote.",
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
  },

  // Pool Builders
  { slug: "how-long-does-it-take-to-excavate-a-pool", question: "How long does it take to excavate a pool?", answer: "A standard residential pool excavation (8–10m x 4m) typically takes 4–8 hours with a 1.7T or 3.5T excavator. Harder ground, rock, or restricted access can extend this to 1–2 days. Using a mini dumper alongside the excavator to move spoil significantly speeds up the process.", category: "Pool Excavation", relatedEquipment: ["1-7t-mini-excavator", "3-5t-excavator", "mini-dumper-700kg"] },
  { slug: "what-size-excavator-for-a-fibreglass-pool", question: "What size excavator do I need for a fibreglass pool?", answer: "A 1.7T mini excavator is ideal for most fibreglass pool excavations. Fibreglass pools are typically 3–4m wide, which fits within the reach of a 1.7T machine. For larger fibreglass pools or harder ground conditions, a 3.5T excavator provides more power and bucket capacity.", category: "Pool Excavation", relatedEquipment: ["1-7t-mini-excavator", "3-5t-excavator"] },
  { slug: "what-size-excavator-for-a-concrete-pool", question: "What size excavator do I need for a concrete pool?", answer: "Concrete pools require more precise excavation and are typically larger than fibreglass pools. A 3.5T excavator is the most common choice for concrete pool excavation, offering the reach, bucket capacity, and precision needed for larger pool shapes.", category: "Pool Excavation", relatedEquipment: ["3-5t-excavator", "1-7t-mini-excavator"] },
  { slug: "how-many-tonnes-of-soil-does-a-pool-excavation-produce", question: "How many tonnes of soil does a pool excavation produce?", answer: "A standard 8m x 4m x 1.5m pool excavation produces approximately 48 cubic metres of spoil, which equates to roughly 70–80 tonnes of soil depending on soil density. This typically requires 12–15 tipper truck loads to remove from site.", category: "Pool Excavation", relatedEquipment: ["tipper-truck", "mini-dumper-700kg"] },
  { slug: "can-i-excavate-a-pool-myself", question: "Can I excavate a pool myself with a hired excavator?", answer: "Yes, many owner-builders and pool builders excavate pools themselves using a hired mini excavator. You do not need a licence to operate a mini excavator on private residential property in NSW. However, experience with excavator operation is strongly recommended. Always dial 1100 (Dial Before You Dig) before any excavation.", category: "Pool Excavation", relatedEquipment: ["1-7t-mini-excavator", "3-5t-excavator"] },
  { slug: "what-is-the-best-excavator-for-tight-access-pool-excavation", question: "What is the best excavator for tight access pool excavation?", answer: "The 1.7T mini excavator is the best choice for tight access pool excavation. It is 1,300mm wide, fits through most standard residential side gates, and has a zero-tail-swing design that allows it to work within 200mm of walls and fences. For extremely tight access (gates under 900mm), the 0.8T or 1T mini excavator is the only option.", category: "Pool Excavation", relatedEquipment: ["1-7t-mini-excavator", "0-8t-mini-excavator"] },

  // Landscaping
  { slug: "what-equipment-do-i-need-for-a-retaining-wall", question: "What equipment do I need to build a retaining wall?", answer: "For retaining wall construction, you typically need a mini excavator to cut the batter and prepare the footing trench, and a mini dumper to move aggregate and backfill material. A 1.7T mini excavator and 700kg mini dumper is the most common combination for residential retaining walls.", category: "Landscaping", relatedEquipment: ["1-7t-mini-excavator", "mini-dumper-700kg"] },
  { slug: "can-a-mini-excavator-level-a-backyard", question: "Can a mini excavator level a backyard?", answer: "Yes, a mini excavator is ideal for levelling a backyard. The machine can cut high spots, move soil to low areas, and create a level surface for turf, paving, or a deck. A 1.7T excavator with a grading bucket is the most efficient choice for residential backyard levelling.", category: "Landscaping", relatedEquipment: ["1-7t-mini-excavator", "1t-mini-excavator"] },
  { slug: "how-do-i-move-soil-in-a-backyard-without-a-wheelbarrow", question: "How do I move soil in a backyard without a wheelbarrow?", answer: "A mini dumper is the most efficient alternative to a wheelbarrow for moving soil in a backyard. BuildHire's 700kg Cormidi mini dumper carries 5–7 wheelbarrow loads per trip and tips directly into skip bins. It fits through gates as narrow as 750mm and runs on rubber tracks that protect lawns.", category: "Landscaping", relatedEquipment: ["mini-dumper-700kg"] },
  { slug: "what-equipment-do-i-need-for-a-garden-renovation", question: "What equipment do I need for a large garden renovation?", answer: "For a large garden renovation, a 0.8T or 1T mini excavator handles soil removal, garden bed preparation, and stump removal. A 700kg mini dumper moves material efficiently across the site. For removing spoil from the property, a tipper truck is the most cost-effective option.", category: "Landscaping", relatedEquipment: ["0-8t-mini-excavator", "1t-mini-excavator", "mini-dumper-700kg", "tipper-truck"] },
  { slug: "can-a-mini-excavator-remove-a-concrete-slab", question: "Can a mini excavator remove a concrete slab?", answer: "Yes, a mini excavator with a rock breaker attachment can break up and remove concrete slabs. BuildHire's excavators can be fitted with a hydraulic rock breaker for concrete and rock breaking. A 1.7T or 3.5T excavator with a rock breaker is the most efficient combination for residential slab removal.", category: "Landscaping", relatedEquipment: ["1-7t-mini-excavator", "3-5t-excavator"] },

  // Equipment Selection
  { slug: "what-is-the-difference-between-a-mini-excavator-and-an-excavator", question: "What is the difference between a mini excavator and an excavator?", answer: "A mini excavator is typically under 3 tonnes and designed for tight access, residential work, and precision tasks. A standard excavator (3.5T–5.5T) is larger, more powerful, and suited to heavier earthworks, civil construction, and larger sites. Mini excavators are easier to transport and operate in confined spaces.", category: "Equipment Selection" },
  { slug: "what-is-the-difference-between-0-8t-and-1-7t-excavator", question: "What is the difference between a 0.8T and 1.7T mini excavator?", answer: "The 0.8T mini excavator is 750mm wide, ideal for very tight access (gates under 900mm), and suited to light landscaping, plumbing trenches, and small pool excavations. The 1.7T is 1,300mm wide, more powerful, and faster for larger jobs. The 1.7T is the most popular choice for residential pool and landscaping work.", category: "Equipment Selection", relatedEquipment: ["0-8t-mini-excavator", "1-7t-mini-excavator"] },
  { slug: "when-should-i-hire-a-3-5t-vs-1-7t-excavator", question: "When should I hire a 3.5T instead of a 1.7T excavator?", answer: "Choose a 3.5T excavator when you need more digging depth (up to 3.8m), more bucket capacity for faster earthmoving, or harder ground conditions. The 3.5T is ideal for larger pool excavations, footing excavation, civil trenching, and site clearing. If access is tight, the 1.7T is the better choice.", category: "Equipment Selection", relatedEquipment: ["3-5t-excavator", "1-7t-mini-excavator"] },
  { slug: "what-is-a-zero-tail-swing-excavator", question: "What is a zero-tail-swing excavator?", answer: "A zero-tail-swing excavator has a counterweight that does not extend beyond the width of the tracks when the machine rotates. This allows it to work safely within 200mm of walls, fences, and structures without risk of damage. BuildHire's 0.8T, 1T, and 1.7T mini excavators are all zero-tail-swing machines.", category: "Equipment Selection" },
  { slug: "what-is-the-digging-depth-of-a-mini-excavator", question: "What is the maximum digging depth of a mini excavator?", answer: "BuildHire's mini excavators have the following maximum digging depths: 0.8T — 2.1m, 1T — 2.4m, 1.7T — 2.7m. For deeper excavations, the 3.5T (3.8m) or 5.5T (4.1m) excavator is required. Pool excavations typically require 1.5–2.0m of depth, which is within the range of all our mini excavators.", category: "Equipment Selection" },
  { slug: "can-i-hire-an-excavator-with-a-rock-breaker", question: "Can I hire an excavator with a rock breaker attachment?", answer: "Yes, BuildHire's excavators can be fitted with a hydraulic rock breaker attachment for breaking concrete, rock, and hard ground. The rock breaker is available as an add-on to the standard bucket. Contact us when booking to request a rock breaker and we will confirm availability.", category: "Equipment Selection" },
  { slug: "what-is-the-difference-between-a-mini-dumper-and-a-wheelbarrow", question: "What is the difference between a mini dumper and a wheelbarrow?", answer: "A mini dumper carries 700kg per load (5–7 wheelbarrow loads), travels at walking pace on rubber tracks, and tips automatically. It eliminates the physical strain of wheelbarrowing and is 5–10x faster for moving material across a site. It is particularly valuable for backyard excavations where a tipper truck cannot access.", category: "Equipment Selection", relatedEquipment: ["mini-dumper-700kg"] },
  { slug: "do-i-need-a-tipper-truck-with-an-excavator", question: "Do I need a tipper truck with an excavator?", answer: "For most excavation jobs, yes. The excavator digs the material, but you need a way to remove it from site. A tipper truck is the most efficient option for spoil removal. For backyard jobs where a truck cannot access, a mini dumper moves material to the front of the property where a skip bin or truck can collect it.", category: "Equipment Selection", relatedEquipment: ["tipper-truck", "mini-dumper-700kg"] },

  // Delivery & Logistics
  { slug: "how-does-buildhire-deliver-equipment", question: "How does BuildHire deliver equipment?", answer: "BuildHire delivers all equipment on a tilt-tray or low-loader truck. The driver will unload the machine at the front of your property or as close to the work area as safely possible. You are responsible for moving the machine to the work area. Delivery is available across Greater Sydney and regional NSW.", category: "Delivery & Logistics" },
  { slug: "what-areas-does-buildhire-deliver-to", question: "What areas does BuildHire deliver to?", answer: "BuildHire delivers to all major Sydney suburbs and regional NSW locations including Wollongong, Newcastle, Central Coast, Blue Mountains, Hunter Valley, and beyond. Delivery charges may vary for regional locations. Call 1300 157 882 to confirm delivery availability and pricing for your area.", category: "Delivery & Logistics" },
  { slug: "how-long-does-delivery-take", question: "How long does equipment delivery take?", answer: "For next-day delivery, book before 12pm the day prior. Delivery is typically completed in the morning between 7am and 12pm, though exact times depend on the delivery schedule. You will receive a call from the driver with an estimated arrival time on the morning of delivery.", category: "Delivery & Logistics" },
  { slug: "can-buildhire-deliver-to-a-construction-site", question: "Can BuildHire deliver to a construction site?", answer: "Yes, BuildHire regularly delivers to active construction sites. Please ensure there is a clear, safe area for the delivery truck to unload. If the site has restricted access or specific delivery requirements, contact us when booking to discuss logistics.", category: "Delivery & Logistics" },
  { slug: "what-is-the-delivery-cost-for-equipment-hire", question: "What is the delivery cost for equipment hire?", answer: "Delivery and collection starts from $150 for most Greater Sydney locations — $150 for 0.8T–1.7T, $220 for 3.5T. Regional NSW delivery charges may vary depending on distance. Delivery is charged separately from the daily hire rate. Call 1300 157 882 for a delivery quote to your specific location.", category: "Delivery & Logistics" },
  { slug: "can-i-pick-up-equipment-myself", question: "Can I pick up equipment from BuildHire myself?", answer: "BuildHire is primarily a delivery service and does not operate a customer pick-up depot. All equipment is delivered and collected by our team. This ensures the machine is transported safely and correctly, and that you receive a full briefing on operation at the time of delivery.", category: "Delivery & Logistics" },
  { slug: "what-do-i-need-to-prepare-for-equipment-delivery", question: "What do I need to prepare for equipment delivery?", answer: "Ensure there is a clear, level area for the delivery truck to park and unload. The driveway or street access should accommodate a large tilt-tray truck. Remove any obstacles from the delivery path. Have a valid ID ready for the driver. Ensure someone is on site at the time of delivery to receive the machine and sign the hire agreement.", category: "Delivery & Logistics" },

  // Plumbing & Trenching
  { slug: "what-size-excavator-for-plumbing-trenches", question: "What size excavator is best for plumbing trenches?", answer: "For standard residential plumbing trenches (300–600mm wide, up to 1.5m deep), the 0.8T or 1T mini excavator is ideal. For deeper trenches or larger diameter pipes, the 1.7T provides more digging depth (2.7m) and power. The compact size of mini excavators minimises disturbance to surrounding areas.", category: "Trenching", relatedEquipment: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator"] },
  { slug: "can-a-mini-excavator-dig-a-stormwater-trench", question: "Can a mini excavator dig a stormwater trench?", answer: "Yes, mini excavators are ideal for stormwater trench excavation. The 1T or 1.7T mini excavator can dig precise trenches for stormwater pipes, drainage channels, and soak pits. The narrow bucket width minimises disturbance to surrounding areas and reduces backfill requirements.", category: "Trenching", relatedEquipment: ["1t-mini-excavator", "1-7t-mini-excavator"] },
  { slug: "how-deep-can-a-mini-excavator-dig-a-trench", question: "How deep can a mini excavator dig a trench?", answer: "BuildHire's mini excavators have the following maximum digging depths: 0.8T — 2.1m, 1T — 2.4m, 1.7T — 2.7m. For most residential plumbing and drainage trenches (up to 1.5m deep), any of our mini excavators are suitable. Always ensure trench walls are shored or battered to prevent collapse.", category: "Trenching", relatedEquipment: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator"] },
  { slug: "what-is-the-best-bucket-width-for-a-plumbing-trench", question: "What bucket width should I use for a plumbing trench?", answer: "For standard residential plumbing (100–150mm pipe), a 300mm bucket is ideal, creating a clean trench with minimal spoil. For larger pipes (200–300mm), a 400–450mm bucket is more appropriate. BuildHire's mini excavators come with a standard 300mm bucket. Contact us if you require a different bucket width.", category: "Trenching" },

  // Civil Construction
  { slug: "what-excavator-for-civil-construction", question: "What size excavator is best for civil construction?", answer: "For civil construction, the 3.5T or 5.5T excavator is most commonly used. The 3.5T is ideal for drainage, road works, and service installation. The 5.5T provides more power and reach for larger civil projects. Both machines are available for daily, weekly, and monthly hire.", category: "Equipment Selection", relatedEquipment: ["3-5t-excavator", "5-5t-excavator"] },
  { slug: "can-buildhire-supply-equipment-for-road-works", question: "Can BuildHire supply equipment for road works?", answer: "Yes, BuildHire supplies excavators and tipper trucks for road works projects across NSW. Our 3.5T and 5.5T excavators are suited to kerb and gutter excavation, stormwater drainage, and road base preparation. Contact us to discuss your project requirements and pricing.", category: "Equipment Selection", relatedEquipment: ["3-5t-excavator", "5-5t-excavator", "tipper-truck"] },

  // Driveway & Concrete
  { slug: "what-equipment-do-i-need-to-prepare-a-driveway", question: "What equipment do I need to prepare a driveway?", answer: "For driveway preparation, a 1.7T or 3.5T excavator handles excavation and grading. A tipper truck removes the excavated material. For compaction, a plate compactor (not currently in BuildHire's fleet) is typically required before pouring concrete or laying pavers.", category: "Equipment Selection", relatedEquipment: ["1-7t-mini-excavator", "3-5t-excavator", "tipper-truck"] },
  { slug: "how-deep-do-you-need-to-excavate-for-a-concrete-driveway", question: "How deep do you need to excavate for a concrete driveway?", answer: "For a standard residential concrete driveway, you typically need to excavate 150–200mm below the finished surface level. This allows for 100mm of compacted road base and 100mm of concrete. The exact depth depends on the existing ground level and the required finished height.", category: "Equipment Selection" },

  // Builder-specific
  { slug: "what-excavator-for-footing-excavation", question: "What size excavator is best for footing excavation?", answer: "For standard residential footing excavation, a 1.7T or 3.5T excavator is most commonly used. The 1.7T is ideal for smaller footprints and tighter sites. The 3.5T is faster for larger slabs and provides more reach for deeper footings. Both machines are available for next-day delivery across Sydney.", category: "Equipment Selection", relatedEquipment: ["1-7t-mini-excavator", "3-5t-excavator"] },
  { slug: "can-an-excavator-dig-a-basement", question: "Can an excavator dig a basement?", answer: "Yes, excavators are the primary tool for basement excavation. The 5.5T excavator is most commonly used for residential basement work, providing the reach and bucket capacity needed for efficient bulk excavation. For very deep basements or large commercial projects, larger machines may be required. Contact us to discuss your specific requirements.", category: "Equipment Selection", relatedEquipment: ["5-5t-excavator"] },
  { slug: "how-long-does-it-take-to-excavate-a-house-slab", question: "How long does it take to excavate for a house slab?", answer: "For a standard residential house slab (15m x 10m, 300mm deep), excavation typically takes 4–8 hours with a 3.5T excavator. Harder ground, rock, or restricted access can extend this. A tipper truck working alongside the excavator for continuous spoil removal significantly speeds up the process.", category: "Equipment Selection", relatedEquipment: ["3-5t-excavator", "tipper-truck"] },

  // Pricing
  { slug: "how-much-does-it-cost-to-hire-a-3-5t-excavator", question: "How much does it cost to hire a 3.5T excavator?", answer: "BuildHire's 3.5T excavator hire starts from $340/day including GST. Delivery and collection is $220 across Greater Sydney. Weekly rate $1,550/week. Weekly and monthly rates are available at a discount. Call 1300 157 882 for a quote.", category: "Pricing & Booking", relatedEquipment: ["3-5t-excavator"] },
  { slug: "how-much-does-it-cost-to-hire-a-5-5t-excavator", question: "How much does it cost to hire a 5.5T excavator?", answer: "BuildHire's 5.5T excavator hire starts from $370/day including GST. Delivery via third-party transport — pricing on enquiry. Weekly rate $1,650/week. Weekly and monthly rates are available at a discount. Call 1300 157 882 for a quote.", category: "Pricing & Booking", relatedEquipment: ["5-5t-excavator"] },
  { slug: "how-much-does-it-cost-to-hire-a-tipper-truck", question: "How much does it cost to hire a tipper truck?", answer: "BuildHire's Isuzu NQR450 tipper truck hire starts from $350/day including GST. A Medium Rigid (MR) licence is required. Delivery and collection is $110 each way. Call 1300 157 882 for availability and pricing.", category: "Pricing & Booking", relatedEquipment: ["tipper-truck"] },
  { slug: "are-there-weekly-hire-rates-available", question: "Are there weekly hire rates available?", answer: "Yes, BuildHire offers weekly hire rates that provide significant savings over daily rates. Weekly rates are typically 15–25% cheaper than 7 individual daily rates. Contact us at 1300 157 882 or info@buildhire.com.au to get a weekly rate quote for your project.", category: "Pricing & Booking" },
  { slug: "is-gst-included-in-buildhire-prices", question: "Are BuildHire's prices inclusive of GST?", answer: "Yes, all BuildHire hire rates are inclusive of GST. There are no hidden charges or surprise fees. The price you see is the price you pay for the equipment hire. Delivery and collection is charged separately — $150 for 0.8T–1.7T, $220 for 3.5T.", category: "Pricing & Booking" },
  { slug: "what-payment-methods-does-buildhire-accept", question: "What payment methods does BuildHire accept?", answer: "BuildHire accepts payment by credit card (Visa, Mastercard), bank transfer, and EFTPOS. Payment is required at the time of booking or before delivery. For account customers with established credit terms, invoice payment is available. Contact us to discuss account terms.", category: "Pricing & Booking" },
  { slug: "is-there-a-damage-waiver-or-insurance-required", question: "Is there a damage waiver or insurance required?", answer: "BuildHire does not charge a mandatory damage waiver. However, you are responsible for any damage to equipment during the hire period beyond normal wear and tear. We recommend ensuring your public liability insurance covers hired equipment. Contact your insurer before hiring if you are unsure.", category: "Pricing & Booking" },

  // Safety
  { slug: "what-safety-checks-should-i-do-before-operating-an-excavator", question: "What safety checks should I do before operating an excavator?", answer: "Before operating an excavator, complete a pre-start inspection: check engine oil, coolant, and hydraulic fluid levels; inspect tracks for damage; check all pins and buckets are secure; test all controls in a safe area before beginning work; identify all underground services (dial 1100); and ensure all bystanders are clear of the swing radius.", category: "Safety" },
  { slug: "what-is-the-swing-radius-of-a-mini-excavator", question: "What is the swing radius of a mini excavator?", answer: "The swing radius of a mini excavator varies by model. For BuildHire's zero-tail-swing machines, the counterweight does not extend beyond the track width. However, the boom and arm extend up to 4–5m in front of the machine. Always ensure bystanders are clear of the full working radius of the machine.", category: "Safety" },
  { slug: "can-an-excavator-work-near-a-boundary-fence", question: "Can an excavator work near a boundary fence?", answer: "Yes, BuildHire's zero-tail-swing mini excavators can work within 200mm of a boundary fence without risk of the counterweight striking it. Always ensure the fence is structurally sound before excavating near it, as ground disturbance can undermine fence footings. Inform your neighbour before excavating near a shared boundary.", category: "Safety" },
  { slug: "what-should-i-do-if-i-hit-an-underground-service", question: "What should I do if I hit an underground service while digging?", answer: "If you hit an underground service, stop work immediately. Do not attempt to repair the damage yourself. For gas: evacuate the area and call 1800 GAS GAS (1800 427 427). For electricity: call your electricity distributor. For water/sewer: call Sydney Water on 13 20 90. For telecommunications: call the relevant provider. Always call 000 if there is immediate danger.", category: "Safety" },

  // NSW Specific
  { slug: "do-i-need-council-approval-to-excavate-in-nsw", question: "Do I need council approval to excavate in NSW?", answer: "For most residential excavation work (pools, landscaping, driveways), council approval is not required as long as the work is within the scope of exempt development under the NSW State Environmental Planning Policy. However, for significant earthworks, retaining walls over 1m, or work near heritage items, a Development Application (DA) may be required. Check with your local council before starting.", category: "Licensing & Legal" },
  { slug: "what-are-the-noise-restrictions-for-excavation-in-nsw", question: "What are the noise restrictions for excavation work in NSW?", answer: "In NSW, construction noise is regulated by the NSW Environment Protection Authority (EPA). Standard residential construction hours are Monday to Friday 7am–6pm, Saturday 7am–5pm, and Sunday/public holidays no work. Some councils have stricter local requirements. Always check with your local council for specific noise restrictions in your area.", category: "Licensing & Legal" },
  { slug: "do-i-need-a-permit-to-park-a-tipper-truck-on-the-street", question: "Do I need a permit to park a tipper truck on the street in NSW?", answer: "For short-term parking during loading and unloading, a permit is generally not required. However, if the tipper truck needs to be parked on a public road for an extended period, you may need a Works Zone permit from your local council. Contact your council's traffic department for specific requirements in your area.", category: "Licensing & Legal" },

  // Specific Suburbs
  { slug: "excavator-hire-western-sydney", question: "Does BuildHire deliver excavators to Western Sydney?", answer: "Yes, BuildHire delivers excavators to all Western Sydney suburbs including Parramatta, Blacktown, Penrith, Liverpool, Campbelltown, Castle Hill, and surrounding areas. Next-day delivery is available for bookings placed before 12pm. Call 1300 157 882 for availability.", category: "Delivery & Logistics" },
  { slug: "excavator-hire-northern-beaches", question: "Does BuildHire deliver excavators to the Northern Beaches?", answer: "Yes, BuildHire delivers excavators to the Northern Beaches including Manly, Dee Why, Brookvale, Frenchs Forest, and surrounding areas. Next-day delivery is available. Delivery charges apply. Call 1300 157 882 to confirm delivery availability and pricing for your specific suburb.", category: "Delivery & Logistics" },
  { slug: "excavator-hire-sutherland-shire", question: "Does BuildHire deliver excavators to the Sutherland Shire?", answer: "Yes, BuildHire delivers excavators to the Sutherland Shire including Sutherland, Cronulla, Miranda, Caringbah, and Engadine. Next-day delivery is available for bookings placed before 12pm. Call 1300 157 882 for availability.", category: "Delivery & Logistics" },
  { slug: "excavator-hire-hills-district", question: "Does BuildHire deliver excavators to the Hills District?", answer: "Yes, BuildHire delivers excavators to the Hills District including Castle Hill, Baulkham Hills, Kellyville, Rouse Hill, and surrounding areas. Next-day delivery is available. Call 1300 157 882 to confirm delivery availability for your suburb.", category: "Delivery & Logistics" },
  { slug: "excavator-hire-south-western-sydney", question: "Does BuildHire deliver excavators to South Western Sydney?", answer: "Yes, BuildHire delivers excavators to South Western Sydney including Liverpool, Campbelltown, Narellan, Camden, Oran Park, Leppington, and surrounding growth corridor suburbs. Next-day delivery is available. Call 1300 157 882 for availability.", category: "Delivery & Logistics" },
  { slug: "excavator-hire-wollongong", question: "Does BuildHire deliver excavators to Wollongong?", answer: "Yes, BuildHire delivers excavators to Wollongong and the Illawarra region including Shellharbour, Kiama, and surrounding areas. Delivery charges apply for regional locations. Call 1300 157 882 to confirm delivery availability and pricing.", category: "Delivery & Logistics" },
  { slug: "excavator-hire-newcastle", question: "Does BuildHire deliver excavators to Newcastle?", answer: "Yes, BuildHire delivers excavators to Newcastle and the Hunter region including Maitland, Cessnock, and surrounding areas. Delivery charges apply for regional locations. Call 1300 157 882 to confirm delivery availability and pricing.", category: "Delivery & Logistics" },
  { slug: "excavator-hire-central-coast", question: "Does BuildHire deliver excavators to the Central Coast?", answer: "Yes, BuildHire delivers excavators to the Central Coast including Gosford, Wyong, and surrounding areas. Delivery charges apply for regional locations. Call 1300 157 882 to confirm delivery availability and pricing for your area.", category: "Delivery & Logistics" },

  // Industry Specific
  { slug: "best-excavator-for-pool-builders-sydney", question: "What is the best excavator for pool builders in Sydney?", answer: "The 1.7T mini excavator is the most popular choice for pool builders in Sydney. It fits through standard residential side gates (1,300mm wide), has a zero-tail-swing design for working near fences, and provides sufficient digging depth (2.7m) for most pool excavations. For larger pools or harder ground, the 3.5T is recommended.", category: "Pool Excavation", relatedEquipment: ["1-7t-mini-excavator", "3-5t-excavator"] },
  { slug: "best-excavator-for-landscapers-sydney", question: "What is the best excavator for landscapers in Sydney?", answer: "For landscaping work, the 0.8T or 1T mini excavator is ideal for most residential jobs — they fit through narrow gates, have low ground pressure to protect lawns, and are easy to manoeuvre in tight spaces. The 1.7T is better for larger landscaping projects requiring more digging power.", category: "Landscaping", relatedEquipment: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator"] },
  { slug: "best-excavator-for-plumbers-sydney", question: "What is the best excavator for plumbers in Sydney?", answer: "For plumbing and drainage work, the 0.8T or 1T mini excavator is the most practical choice. These machines are narrow enough for tight residential access, precise enough for accurate trench digging, and easy to operate for experienced tradespeople. The 1.7T is better for deeper service trenches.", category: "Trenching", relatedEquipment: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator"] },

  // Comparison
  { slug: "buildhire-vs-coates-hire-excavator", question: "How does BuildHire compare to Coates Hire for excavator hire?", answer: "BuildHire specialises exclusively in excavators, mini dumpers, and tipper trucks — we are not a general equipment hire company. This means our fleet is newer, better maintained, and our team has deeper expertise in earthmoving equipment. We offer next-day delivery, transparent pricing with no hidden fees, and 7-day support. Coates Hire offers a broader range of equipment but is not an earthmoving specialist.", category: "General" },
  { slug: "buildhire-vs-kennards-hire-excavator", question: "How does BuildHire compare to Kennards Hire for excavator hire?", answer: "BuildHire is a specialist dry hire company focused exclusively on excavators and earthmoving equipment. Our fleet is newer and more focused than general hire companies like Kennards. We offer next-day delivery across Sydney, competitive daily rates, and specialist knowledge of earthmoving equipment that general hire companies cannot match.", category: "General" },
  { slug: "why-choose-buildhire-over-other-hire-companies", question: "Why should I choose BuildHire over other equipment hire companies?", answer: "BuildHire specialises exclusively in excavators, mini dumpers, and tipper trucks. This focus means a newer fleet, better-maintained machines, and a team with deep expertise in earthmoving equipment. We offer next-day delivery, all-inclusive pricing (no hidden fees), 7-day support, and a straightforward booking process. We are the specialist choice for excavation and earthmoving in NSW.", category: "General" }
];
