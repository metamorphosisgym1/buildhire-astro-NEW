export interface AeoAnswer {
  slug: string;
  question: string;
  shortAnswer: string;
  fullAnswer: string;
  relatedQuestions: { q: string; a: string }[];
  schema: {
    type: "FAQPage" | "HowTo" | "Article";
    speakable: boolean;
  };
}

export const aeoAnswers: AeoAnswer[] = [
  {
    slug: "do-i-need-a-licence-to-hire-an-excavator-in-nsw",
    question: "Do I need a licence to hire an excavator in NSW?",
    shortAnswer: "In NSW, excavators under 3 tonnes do not require a licence. For excavators 3 tonnes and above, a High Risk Work Licence (HRWL) for earthmoving plant (EE licence) is required.",
    fullAnswer: "In New South Wales, the licence requirement for operating an excavator depends on the machine's operating weight. Excavators with an operating weight under 3 tonnes — including most mini excavators — do not require a formal licence to operate. This means owner builders, landscapers, and contractors can hire and operate a 0.8T, 1T, or 1.7T mini excavator without any licence. For excavators with an operating weight of 3 tonnes or above, a High Risk Work Licence (HRWL) for earthmoving plant is required under the Work Health and Safety Regulation 2017. This is commonly referred to as an EE licence (earthmoving equipment). The licence is issued by SafeWork NSW and requires completion of an approved training course. BuildHire's fleet includes machines from 0.8T to 5.5T. Our 0.8T, 1T, and 1.7T mini excavators are all under 3 tonnes and can be operated without a licence. Our 3.5T and 5.5T excavators require a valid HRWL.",
    relatedQuestions: [
      { q: "What is a High Risk Work Licence for excavators?", a: "A High Risk Work Licence (HRWL) for earthmoving plant is a NSW licence required to operate excavators 3 tonnes and above. It is issued by SafeWork NSW after completion of an approved training course." },
      { q: "Can I operate a 1.7T mini excavator without a licence in NSW?", a: "Yes. The 1.7T mini excavator has an operating weight under 3 tonnes and does not require a licence in NSW." },
      { q: "How do I get a licence to operate an excavator in NSW?", a: "To obtain a High Risk Work Licence (HRWL) for earthmoving plant in NSW, you must complete an approved training course with a registered training organisation (RTO) and pass a practical assessment." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "how-much-does-it-cost-to-hire-a-mini-excavator-in-sydney",
    question: "How much does it cost to hire a mini excavator in Sydney?",
    shortAnswer: "Mini excavator hire in Sydney starts from $200/day for a 0.8T machine. Delivery and collection is $110. Weekly rates from $700. All prices include GST.",
    fullAnswer: "Mini excavator hire costs in Sydney vary depending on machine size and hire duration. BuildHire's published rates are all-inclusive — delivery, collection, and GST are included. A 0.8T mini excavator starts from $200/day or $700/week. A 1T mini excavator is $240/day or $840/week. A 1.7T mini excavator is $280/day or $980/week. Delivery and collection within Greater Sydney is $110. For locations outside Greater Sydney, delivery costs vary by distance. Weekly rates provide significant savings over daily rates for projects lasting 5 or more days. Monthly rates are available for longer projects. Many hire companies in Sydney charge additional fees on top of their headline rates — including environmental levies, damage waivers, and fuel surcharges. BuildHire's all-inclusive pricing means the rate you see is the rate you pay.",
    relatedQuestions: [
      { q: "What is included in BuildHire's mini excavator hire price?", a: "BuildHire's hire price includes the machine, delivery to your site, collection after hire, and GST. There are no additional environmental levies, damage waivers, or fuel surcharges." },
      { q: "Is weekly hire cheaper than daily hire for a mini excavator?", a: "Yes. BuildHire's weekly rates are equivalent to 3.5 daily rates — meaning you get 5 days for the price of 3.5. For projects lasting 5 or more days, weekly hire is significantly cheaper." },
      { q: "How much does delivery cost for a mini excavator in Sydney?", a: "Delivery and collection within Greater Sydney is $110 (GST inclusive). For regional NSW locations, delivery costs vary by distance." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "what-size-excavator-do-i-need-for-a-pool",
    question: "What size excavator do I need for a pool?",
    shortAnswer: "Most residential pools use a 1.7T or 3.5T excavator. A 1.7T fits through standard gates and suits pools up to 8m. A 3.5T is faster for larger pools or commercial projects.",
    fullAnswer: "The right excavator size for pool excavation depends on pool dimensions, access constraints, and soil conditions. For standard residential pools up to 8 metres in length, a 1.7T mini excavator is the most common choice. It fits through standard residential gates (1,300mm wide), has sufficient digging depth for most pool depths (up to 2,400mm), and is manoeuvrable enough for typical residential backyards. For larger pools — 8 metres and above — or for pools with difficult soil conditions such as clay or rock, a 3.5T excavator is more efficient. The 3.5T has a larger bucket capacity (200L vs 80L), greater digging force, and a maximum dig depth of 3,800mm. For pools with very tight access — gates under 1,300mm — the 1T mini excavator (900mm wide) or 0.8T (750mm wide) may be required. These smaller machines take longer to excavate but can access sites that larger machines cannot. BuildHire's pool builder customers typically hire a 1.7T for standard residential pools and a 3.5T for larger or commercial pools.",
    relatedQuestions: [
      { q: "Can a mini excavator fit through a standard residential gate for pool work?", a: "Yes. The 1.7T mini excavator is 1,300mm wide and fits through standard residential gates. The 1T (900mm) and 0.8T (750mm) fit through narrower gates." },
      { q: "How deep can a 1.7T excavator dig for a pool?", a: "The 1.7T mini excavator has a maximum dig depth of 2,400mm, which is sufficient for most residential pool depths (typically 1,500–1,800mm)." },
      { q: "Do I need a licence to operate an excavator for pool work?", a: "In NSW, excavators under 3 tonnes do not require a licence. The 1.7T mini excavator is under 3 tonnes and can be operated without a licence." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "what-is-dry-hire-excavator",
    question: "What is dry hire for an excavator?",
    shortAnswer: "Dry hire means hiring an excavator without an operator. You operate the machine yourself. Dry hire is significantly cheaper than wet hire (with operator).",
    fullAnswer: "Dry hire refers to hiring equipment without an operator — you receive the machine and operate it yourself. This is in contrast to wet hire, where the hire company provides both the machine and a licensed operator. Dry hire is the standard model for BuildHire. When you hire a mini excavator from BuildHire, we deliver the machine to your site, you operate it for the hire period, and we collect it when you're done. Dry hire is significantly cheaper than wet hire. A wet hire excavator with operator typically costs $600–$1,200/day. BuildHire's dry hire rates start from $200/day for the same machine. For contractors and owner builders who are licensed (or hiring machines under 3 tonnes that don't require a licence), dry hire provides the same earthmoving capability at a fraction of the cost. Dry hire also gives you more flexibility — you control the pace, the method, and the schedule without having to coordinate with an operator's availability.",
    relatedQuestions: [
      { q: "Is dry hire cheaper than wet hire?", a: "Yes — significantly. Wet hire rates for an excavator with operator typically range from $600–$1,200/day. BuildHire's dry hire rates start from $200/day for the same machine." },
      { q: "Do I need experience to dry hire an excavator?", a: "Some experience is helpful but not required for smaller machines. BuildHire provides full operating instructions with every hire. Our 0.8T and 1T mini excavators are straightforward to operate." },
      { q: "What is the difference between dry hire and wet hire?", a: "Dry hire provides the machine only — you operate it. Wet hire provides the machine plus a licensed operator. Dry hire is cheaper and more flexible; wet hire is suitable for unlicensed customers." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "how-to-book-excavator-hire-online",
    question: "How do I book an excavator hire online?",
    shortAnswer: "Book an excavator online at buildhire.com.au in under 2 minutes. Select your machine, choose your hire dates, enter your delivery address, and pay securely online.",
    fullAnswer: "Booking an excavator hire online with BuildHire takes under 2 minutes. Visit buildhire.com.au, select the excavator you need from the equipment page, choose your hire start and end dates, enter your delivery address, and complete payment securely online. BuildHire's online booking is available 24/7 — you can book at any time, including evenings and weekends. Once your booking is confirmed, you'll receive an email confirmation with delivery details. For next-day delivery, book before 12pm. BuildHire's all-inclusive pricing means the price you see at checkout is the price you pay — no additional fees added at the end. If you're unsure which machine to hire, BuildHire's equipment pages include full specifications, photos, and recommendations for common applications. You can also call 1300 157 882 for advice.",
    relatedQuestions: [
      { q: "Can I book an excavator hire online at night or on weekends?", a: "Yes. BuildHire's online booking is available 24/7. You can book at any time, including evenings, weekends, and public holidays." },
      { q: "How far in advance do I need to book an excavator?", a: "For next-day delivery, book before 12pm the day before. For same-day delivery, call 1300 157 882 and we'll do our best to accommodate." },
      { q: "What payment methods does BuildHire accept for online booking?", a: "BuildHire accepts all major credit cards and debit cards for online booking. Payment is processed securely at the time of booking." }
    ],
    schema: { type: "HowTo", speakable: true }
  },
  {
    slug: "mini-excavator-vs-full-size-excavator",
    question: "What is the difference between a mini excavator and a full-size excavator?",
    shortAnswer: "Mini excavators are compact machines under 6 tonnes, ideal for residential sites with limited access. Full-size excavators are larger, more powerful, and suited to commercial and civil projects.",
    fullAnswer: "Mini excavators (also called compact excavators) are machines with an operating weight under 6 tonnes. They are designed for residential and light commercial applications where access is limited — fitting through gates, working in backyards, and operating on sensitive surfaces without causing excessive ground damage. BuildHire's mini excavator range includes 0.8T, 1T, 1.7T, and 3.5T machines. Full-size excavators are larger machines typically above 6 tonnes, designed for commercial construction, civil works, and bulk earthmoving. They have greater reach, larger bucket capacity, and more digging force — but require larger access and cause more ground disturbance. The key differences are: access (mini excavators fit through residential gates; full-size machines require large site access), ground pressure (mini excavators use rubber tracks with low ground pressure; full-size machines can damage soft surfaces), licence requirements (machines under 3 tonnes don't require a licence in NSW; machines 3T+ require an HRWL), and cost (mini excavators are cheaper to hire than full-size machines).",
    relatedQuestions: [
      { q: "What is the largest mini excavator BuildHire offers?", a: "BuildHire's largest machine is the 5.5T excavator. While technically a compact machine, it bridges the gap between mini and full-size excavators." },
      { q: "Can a mini excavator do the same work as a full-size excavator?", a: "For residential and light commercial applications, yes. Mini excavators are capable of pool excavation, footing work, trenching, and landscaping. For large civil or bulk earthmoving projects, full-size machines are more efficient." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "how-to-operate-a-mini-excavator",
    question: "How do I operate a mini excavator?",
    shortAnswer: "Mini excavators use two joysticks to control arm movement and tracks. Basic operation can be learned in 30–60 minutes. BuildHire provides operating instructions with every hire.",
    fullAnswer: "Operating a mini excavator involves controlling the machine using two joysticks and foot pedals. The left joystick controls the boom and swing (rotating the upper body). The right joystick controls the arm and bucket. The foot pedals control track movement — left pedal for left track, right pedal for right track. To move forward, push both pedals forward simultaneously. To turn, push one pedal further than the other. Most mini excavators use the ISO control pattern (SAE is an alternative). BuildHire's machines use ISO controls. Basic operation can be learned in 30–60 minutes for simple tasks like trenching and levelling. More complex tasks — working near structures, precise grading — require more practice. BuildHire provides full operating instructions with every hire. Our team is also available by phone to answer questions during your hire. For machines under 3 tonnes, no licence is required in NSW. For machines 3 tonnes and above, a High Risk Work Licence (HRWL) is required.",
    relatedQuestions: [
      { q: "Is it hard to learn to operate a mini excavator?", a: "Basic operation is straightforward and can be learned in 30–60 minutes. Most people find mini excavators intuitive after a short period of practice." },
      { q: "What controls does a mini excavator use?", a: "Mini excavators use two joysticks (left for boom and swing, right for arm and bucket) and two foot pedals for track movement." },
      { q: "Does BuildHire provide training on how to use an excavator?", a: "BuildHire provides full operating instructions with every hire. For formal training, we recommend contacting a registered training organisation (RTO) in NSW." }
    ],
    schema: { type: "HowTo", speakable: true }
  },
  {
    slug: "excavator-hire-same-day-sydney",
    question: "Can I get same-day excavator hire in Sydney?",
    shortAnswer: "BuildHire offers same-day delivery in Sydney for urgent requirements. Call 1300 157 882 before 9am for best availability. Next-day delivery is guaranteed when you book before 12pm.",
    fullAnswer: "BuildHire offers same-day excavator delivery in Sydney for urgent requirements, subject to fleet availability. For the best chance of same-day delivery, call 1300 157 882 as early as possible — ideally before 9am. Our team will advise on availability and do our best to accommodate urgent requirements. For guaranteed next-day delivery, book online before 12pm the day before. BuildHire's online booking is available 24/7, so you can book the night before for next-morning delivery. Same-day delivery is available across Greater Sydney, including the Inner West, Eastern Suburbs, North Shore, Western Sydney, and South Sydney. For locations outside Greater Sydney, same-day delivery may not be possible — contact us to discuss options.",
    relatedQuestions: [
      { q: "What is the latest I can book for next-day excavator delivery in Sydney?", a: "Book before 12pm for guaranteed next-day delivery across Greater Sydney." },
      { q: "Does BuildHire deliver on weekends?", a: "Yes. BuildHire delivers 7 days a week, including weekends and public holidays. Book online or call 1300 157 882." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "how-long-does-it-take-to-excavate-a-pool",
    question: "How long does it take to excavate a pool?",
    shortAnswer: "A standard residential pool (8m x 4m) takes 4–8 hours to excavate with a 1.7T mini excavator, depending on soil conditions. Clay or rock significantly increases excavation time.",
    fullAnswer: "Pool excavation time depends on pool size, soil conditions, and machine size. As a general guide: a standard residential pool (8m x 4m x 1.8m deep) takes approximately 4–8 hours to excavate with a 1.7T mini excavator in average soil conditions (sandy loam). In clay soil, excavation time increases to 6–12 hours. In rock or heavily compacted soil, excavation may take 1–2 days and may require a larger machine or rock-breaking attachment. Larger pools (10m x 5m and above) typically take 8–16 hours in average conditions. The 3.5T excavator is approximately 40% faster than the 1.7T for pool excavation due to its larger bucket capacity and greater digging force. Most pool builders in NSW hire a 1.7T or 3.5T excavator for 1–2 days to complete a standard residential pool excavation.",
    relatedQuestions: [
      { q: "What size excavator is fastest for pool excavation?", a: "The 3.5T excavator is approximately 40% faster than the 1.7T for pool excavation due to its larger bucket and greater digging force." },
      { q: "Does soil type affect pool excavation time?", a: "Yes significantly. Sandy loam is fastest. Clay soil increases excavation time by 50–100%. Rock or heavily compacted soil may require specialist equipment and can take 2–3 times longer." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "what-is-a-mini-dumper",
    question: "What is a mini dumper and when do I need one?",
    shortAnswer: "A mini dumper is a compact tracked vehicle for moving soil, aggregate, and materials on site. It's used when wheelbarrowing is too slow or when a tipper truck can't access the site.",
    fullAnswer: "A mini dumper (also called a tracked dumper or site dumper) is a compact, tracked vehicle designed to move loose materials — soil, aggregate, sand, mulch, concrete — around a construction or landscaping site. BuildHire's mini dumper has a 700kg payload capacity and rubber tracks that protect lawns and sensitive surfaces. Mini dumpers are used when: (1) wheelbarrowing is too slow or physically demanding for the volume of material, (2) a tipper truck can't access the site due to limited access, (3) materials need to be moved across soft or sensitive ground, (4) the site has level changes or slopes that make wheelbarrowing impractical. Mini dumpers are commonly hired alongside mini excavators for pool construction, landscaping, and residential earthworks. The excavator digs and loads the dumper, which transports material to a stockpile or skip bin.",
    relatedQuestions: [
      { q: "How much can a mini dumper carry?", a: "BuildHire's mini dumper has a 700kg payload capacity. This is equivalent to approximately 10–12 wheelbarrow loads per trip." },
      { q: "Do I need a licence to operate a mini dumper?", a: "No. Mini dumpers do not require a licence to operate in NSW." },
      { q: "Can a mini dumper go on a lawn?", a: "Yes. BuildHire's mini dumper uses rubber tracks with low ground pressure, minimising lawn damage. It is suitable for use on lawns, pavers, and soft ground." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "excavator-hire-vs-buying",
    question: "Is it better to hire or buy an excavator?",
    shortAnswer: "For most contractors, hiring is more cost-effective than buying. A new 1.7T mini excavator costs $40,000–$60,000. Hiring costs $200–$280/day with no maintenance, storage, or depreciation costs.",
    fullAnswer: "Whether to hire or buy an excavator depends on how frequently you use one and your capital position. A new 1.7T mini excavator costs $40,000–$60,000. A used machine in good condition costs $20,000–$35,000. Ownership costs include purchase price, finance costs, insurance ($2,000–$4,000/year), registration and compliance, maintenance and servicing ($3,000–$6,000/year), storage, and depreciation. For a contractor using an excavator 3–4 days per week, ownership may be cost-effective over 3–5 years. For contractors using an excavator less frequently — say 1–2 days per week — hiring is typically more cost-effective. BuildHire's hire rates start from $200/day for the 0.8T and $280/day for the 1.7T. At these rates, you would need to use a hired machine for more than 100–150 days per year before ownership becomes cost-competitive. Hiring also eliminates the risk of machine downtime — if a hired machine breaks down, BuildHire replaces it. If you own a machine that breaks down, you're paying for repairs and losing productivity.",
    relatedQuestions: [
      { q: "How much does a mini excavator cost to buy in Australia?", a: "A new 1.7T mini excavator costs $40,000–$60,000 from major brands. Used machines in good condition cost $20,000–$35,000." },
      { q: "What are the ongoing costs of owning an excavator?", a: "Ownership costs include insurance ($2,000–$4,000/year), maintenance and servicing ($3,000–$6,000/year), storage, and depreciation." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "tipper-truck-hire-sydney",
    question: "How much does tipper truck hire cost in Sydney?",
    shortAnswer: "Tipper truck hire in Sydney starts from $350/day for a medium tipper. BuildHire's Isuzu NQR450 tipper (4,500kg payload, 6m³ body) is $350/day. Delivery included.",
    fullAnswer: "Tipper truck hire costs in Sydney vary depending on truck size and hire duration. BuildHire offers the Isuzu NQR450 tipper truck — a medium-duty tipper with a 4,500kg payload capacity and 6m³ body, ideal for residential and commercial construction spoil removal. BuildHire's tipper truck hire rate is $350/day or $1,225/week (all-inclusive). Delivery and collection is included in the hire rate. Tipper trucks are commonly hired alongside excavators for residential construction, pool building, landscaping, and demolition projects. The excavator digs and loads the tipper, which transports spoil to a disposal site. For projects requiring multiple tipper loads, BuildHire's tipper truck is more cost-effective than booking multiple skip bins.",
    relatedQuestions: [
      { q: "What size tipper truck does BuildHire offer?", a: "BuildHire offers the Isuzu NQR450 tipper truck with a 4,500kg payload capacity and 6m³ body." },
      { q: "Do I need a special licence to drive a tipper truck?", a: "The Isuzu NQR450 tipper truck requires a Medium Rigid (MR) or higher licence to drive in NSW." },
      { q: "Is tipper truck hire cheaper than skip bins for spoil removal?", a: "For large volumes of spoil, tipper truck hire is typically more cost-effective than skip bins. A tipper truck can move 4,500kg per load and be reloaded multiple times in a day." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "excavator-hire-for-landscaping",
    question: "What size excavator is best for landscaping?",
    shortAnswer: "For most residential landscaping, a 0.8T or 1T mini excavator is ideal — compact enough for residential sites, powerful enough for retaining walls and earthworks.",
    fullAnswer: "The best excavator size for landscaping depends on the scope of work and site access. For standard residential landscaping — garden bed preparation, retaining wall construction, small earthworks — the 0.8T or 1T mini excavator is the most popular choice. These machines fit through standard residential gates, have rubber tracks that protect lawns, and are powerful enough for most residential landscaping tasks. For larger landscaping projects — significant earthworks, large retaining walls, or commercial landscaping — the 1.7T or 3.5T excavator is more efficient. These machines have larger buckets and more digging force, making them faster for larger volumes of material. For moving material around the site, a mini dumper is often hired alongside the excavator. The dumper transports soil, aggregate, and mulch efficiently without the need for wheelbarrowing.",
    relatedQuestions: [
      { q: "Can a mini excavator build a retaining wall?", a: "Yes. Mini excavators are ideal for retaining wall construction — excavating the footing trench, placing blocks, and backfilling. The 1T or 1.7T is most commonly used for residential retaining walls." },
      { q: "Will a mini excavator damage my lawn?", a: "BuildHire's mini excavators use rubber tracks with low ground pressure, minimising lawn damage. The 0.8T and 1T models are particularly gentle on soft ground." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "excavator-hire-for-trenching",
    question: "What size excavator is best for trenching?",
    shortAnswer: "For standard service trenches (300–600mm wide), the 0.8T or 1T mini excavator is ideal. For deeper trenches or larger diameter pipes, the 1.7T provides more digging depth.",
    fullAnswer: "The best excavator size for trenching depends on trench width, depth, and access constraints. For standard residential service trenches — plumbing, electrical, NBN, irrigation — the 0.8T or 1T mini excavator with a narrow trenching bucket (200–300mm) is the most efficient choice. These machines fit through residential gates, cause minimal surface disruption, and dig precise trenches. For deeper trenches (below 1,500mm) or larger diameter pipes requiring wider trenches, the 1.7T excavator provides more digging depth (2,400mm maximum) and greater digging force. For civil drainage works or larger stormwater systems, the 3.5T excavator is more appropriate. BuildHire's mini excavators can be fitted with narrow trenching buckets (200–300mm) for cable and conduit work, or standard buckets (300–600mm) for plumbing and drainage.",
    relatedQuestions: [
      { q: "Can BuildHire supply narrow trenching buckets for cable work?", a: "Yes. Narrow trenching buckets (200–300mm) are available on request for cable and conduit work." },
      { q: "How deep can a 1T mini excavator trench?", a: "The 1T mini excavator has a maximum dig depth of 1,800mm, suitable for most residential service trenches." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "what-is-zero-tail-swing-excavator",
    question: "What is a zero tail swing excavator?",
    shortAnswer: "A zero tail swing excavator has a counterweight that doesn't extend beyond the tracks when rotating. This allows safe operation within 200mm of walls and structures.",
    fullAnswer: "A zero tail swing (ZTS) excavator is designed so that the counterweight and upper body do not extend beyond the width of the tracks when the machine rotates. This allows the excavator to work safely in confined spaces — within 200mm of walls, fences, and structures — without risk of the counterweight swinging into obstacles. Zero tail swing excavators are essential for residential construction, where sites are often tight and surrounded by existing structures. BuildHire's entire mini excavator fleet uses zero tail swing design. This makes our machines ideal for pool construction in established backyards, service trenching next to buildings, landscaping in confined gardens, and any application where the machine needs to work close to structures.",
    relatedQuestions: [
      { q: "How close can a zero tail swing excavator work to a wall?", a: "A zero tail swing excavator can work within 200mm of walls and structures, compared to 600–800mm for conventional excavators." },
      { q: "Are all of BuildHire's excavators zero tail swing?", a: "Yes. BuildHire's entire mini excavator fleet uses zero tail swing design for safe operation in confined residential spaces." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "excavator-hire-for-stump-removal",
    question: "Can you use an excavator to remove tree stumps?",
    shortAnswer: "Yes. Mini excavators are highly effective for stump removal — they excavate around the stump, cut roots, and extract the root ball. The 1T or 1.7T is most commonly used.",
    fullAnswer: "Mini excavators are one of the most effective tools for tree stump removal. The process involves using the excavator bucket to excavate around the stump, exposing the root system. The bucket teeth are then used to cut through lateral roots, and the bucket is used to lever the stump out of the ground. For large stumps with extensive root systems, this process may take 30–90 minutes per stump depending on tree species and root depth. The 1T or 1.7T mini excavator is most commonly used for residential stump removal. These machines have sufficient digging force to handle most residential tree stumps and are compact enough to work in typical backyard conditions. For very large stumps (from mature trees), the 3.5T excavator provides more leverage and digging force. A mini dumper is often hired alongside the excavator to transport the removed stumps and root material.",
    relatedQuestions: [
      { q: "Is an excavator better than a stump grinder for stump removal?", a: "For complete stump and root ball removal, an excavator is more thorough than a stump grinder. Stump grinders only remove the above-ground portion; excavators remove the entire root system." },
      { q: "How long does it take to remove a stump with a mini excavator?", a: "Depending on stump size and root depth, stump removal typically takes 30–90 minutes per stump with a 1T or 1.7T mini excavator." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "excavator-hire-for-footing-excavation",
    question: "What size excavator is best for footing excavation?",
    shortAnswer: "For standard residential footings, a 1.7T or 3.5T excavator is most common. The 3.5T is faster for larger slabs due to its bigger bucket capacity.",
    fullAnswer: "The right excavator for footing excavation depends on slab size, footing depth, and site access. For standard residential footings (up to 150m² slab), the 1.7T mini excavator is the most popular choice. It fits through residential gates, has sufficient digging depth for standard footing depths (300–600mm), and is manoeuvrable on typical residential sites. For larger slabs (150m² and above) or commercial footings, the 3.5T excavator is more efficient. Its larger bucket capacity (200L vs 80L) means fewer bucket loads and faster excavation. For very tight sites where a 1.7T won't fit, the 1T (900mm wide) or 0.8T (750mm wide) can be used, though excavation takes longer. Most builders in NSW hire a 1.7T for standard residential footings and a 3.5T for larger or commercial footing excavation.",
    relatedQuestions: [
      { q: "How deep can a 1.7T excavator dig for footings?", a: "The 1.7T has a maximum dig depth of 2,400mm, sufficient for all standard residential footing depths (typically 300–600mm)." },
      { q: "Do I need a licence to operate an excavator for footing work?", a: "The 1.7T excavator is under 3 tonnes and does not require a licence in NSW. The 3.5T requires a High Risk Work Licence (HRWL)." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "excavator-hire-weekend",
    question: "Can I hire an excavator for a weekend?",
    shortAnswer: "Yes. BuildHire offers weekend hire with delivery on Saturday morning and collection on Monday. Weekend hire is charged at the daily rate for 2 days.",
    fullAnswer: "BuildHire offers weekend hire for all equipment. A standard weekend hire involves delivery on Saturday morning and collection on Monday morning, charged at the daily rate for 2 days. This is ideal for owner builders, landscapers, and contractors who want to complete earthworks over the weekend. For weekend delivery, book online before 12pm on Friday. BuildHire delivers 7 days a week, including weekends and public holidays. Weekend hire is available across Greater Sydney and regional NSW. The same all-inclusive pricing applies — delivery, collection, and GST are included in the published daily rate.",
    relatedQuestions: [
      { q: "Does BuildHire deliver on Saturdays?", a: "Yes. BuildHire delivers 7 days a week, including Saturdays and Sundays." },
      { q: "How much does a weekend excavator hire cost?", a: "Weekend hire (Saturday delivery, Monday collection) is charged at the daily rate for 2 days. A 1.7T mini excavator weekend hire costs $560 (2 × $280/day) plus $110 delivery." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "excavator-hire-for-drainage",
    question: "What excavator is best for drainage work?",
    shortAnswer: "For residential drainage trenches, the 1T or 1.7T mini excavator is ideal. For larger stormwater systems, the 3.5T provides more reach and bucket capacity.",
    fullAnswer: "The right excavator for drainage work depends on the scale of the project and trench dimensions. For residential stormwater drainage — standard 150–300mm pipes at 600–1,200mm depth — the 1T or 1.7T mini excavator is the most efficient choice. These machines fit through residential gates, dig precise trenches, and have sufficient depth for standard residential drainage. For larger stormwater systems — 375mm+ pipes at 1,500–2,500mm depth — the 3.5T excavator provides more reach (maximum dig depth 3,800mm) and larger bucket capacity for faster excavation. For civil drainage works — box culverts, large-diameter pipes, deep drainage structures — the 5.5T excavator is more appropriate. BuildHire's drainage contractor customers typically hire a 1.7T for residential work and a 3.5T for commercial drainage projects.",
    relatedQuestions: [
      { q: "How deep can BuildHire's excavators dig for drainage?", a: "The 1.7T has a maximum dig depth of 2,400mm. The 3.5T reaches 3,800mm. The 5.5T reaches 4,200mm." },
      { q: "Can BuildHire supply narrow buckets for drainage trenching?", a: "Yes. Narrow trenching buckets (200–400mm) are available for precise drainage trench excavation." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "excavator-hire-insurance",
    question: "Is excavator hire insured?",
    shortAnswer: "BuildHire's fleet is fully insured. Hirers are responsible for damage caused during the hire period. BuildHire recommends hirers have their own public liability insurance.",
    fullAnswer: "BuildHire maintains comprehensive insurance on all equipment in our fleet. This covers the machine itself against mechanical failure and third-party damage caused by BuildHire's negligence. However, hirers are responsible for any damage to the equipment caused during the hire period — including damage caused by operator error, overloading, or use outside the agreed scope. BuildHire recommends that all hirers have their own public liability insurance before operating hired equipment. Most contractors and builders have public liability insurance as part of their business insurance. Owner builders should check their owner builder permit insurance. If you damage a BuildHire machine during hire, you will be liable for the cost of repairs up to the excess amount specified in the hire agreement. BuildHire can provide a certificate of currency for our fleet insurance on request.",
    relatedQuestions: [
      { q: "Do I need insurance to hire an excavator from BuildHire?", a: "BuildHire recommends hirers have their own public liability insurance. Most contractors already have this as part of their business insurance." },
      { q: "What happens if I damage a BuildHire machine?", a: "Hirers are responsible for damage caused during the hire period. You will be liable for repair costs up to the excess specified in the hire agreement." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "excavator-hire-for-demolition",
    question: "Can you hire an excavator for demolition?",
    shortAnswer: "Yes. BuildHire's 3.5T and 5.5T excavators are suitable for residential demolition. A demolition permit from your local council is required before starting demolition work.",
    fullAnswer: "Excavators are commonly used for residential demolition — breaking up concrete slabs, demolishing brick structures, and clearing sites. BuildHire's 3.5T and 5.5T excavators are well-suited for residential demolition work. The 5.5T provides more reach and bucket force for breaking up concrete slabs and masonry. For residential demolition, you will need a demolition permit from your local council before starting work. A licensed demolition contractor is required for structures above a certain size. For smaller demolition tasks — removing a garden shed, breaking up a concrete path, or demolishing a small outbuilding — the 1.7T or 3.5T excavator is sufficient. Demolition contractors across NSW regularly hire BuildHire's equipment for residential demolition projects.",
    relatedQuestions: [
      { q: "Do I need a permit to demolish a house in NSW?", a: "Yes. A demolition permit (development application) is required from your local council before demolishing a residential structure in NSW." },
      { q: "What size excavator is best for residential demolition?", a: "The 3.5T or 5.5T excavator is most effective for residential demolition. The 5.5T provides more reach and bucket force for breaking up concrete slabs and masonry." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "how-to-load-an-excavator-on-a-trailer",
    question: "How do you load a mini excavator onto a trailer?",
    shortAnswer: "BuildHire delivers and collects all equipment using our own transport. You don't need to load or transport the excavator yourself.",
    fullAnswer: "BuildHire handles all delivery and collection of equipment using our own transport fleet. When you hire from BuildHire, we deliver the excavator to your site on our low-loader trailer and collect it at the end of the hire period. You don't need to arrange your own transport or load the machine yourself. If you do need to transport a mini excavator yourself (for example, if you own a machine), the process involves: (1) ensuring the trailer has sufficient capacity for the machine's weight, (2) driving the excavator up the trailer ramps with the bucket lowered for stability, (3) positioning the machine centrally on the trailer, (4) lowering the bucket to the trailer deck, (5) engaging the slew lock, and (6) securing with chains through the tie-down points. Mini excavators require a trailer rated for their operating weight — a 1.7T excavator requires a trailer rated for at least 2,000kg.",
    relatedQuestions: [
      { q: "Does BuildHire deliver excavators to site?", a: "Yes. BuildHire delivers all equipment to your site using our own transport. Delivery and collection is included in the hire price." },
      { q: "What trailer do I need to transport a 1.7T mini excavator?", a: "A 1.7T mini excavator requires a trailer rated for at least 2,000kg. A standard tandem axle car trailer is typically sufficient." }
    ],
    schema: { type: "HowTo", speakable: true }
  },
  {
    slug: "excavator-hire-for-pool-removal",
    question: "Can you hire an excavator to remove a pool?",
    shortAnswer: "Yes. A 3.5T or 5.5T excavator is ideal for pool removal — breaking up the concrete shell and excavating the site. A tipper truck is also needed for debris removal.",
    fullAnswer: "Excavators are the primary tool for pool removal in NSW. The process involves breaking up the concrete or fibreglass pool shell, excavating the remaining material, and backfilling the site. BuildHire's 3.5T and 5.5T excavators are well-suited for residential pool removal. The 5.5T provides more bucket force for breaking up reinforced concrete shells. For pool removal, you will typically need: (1) an excavator (3.5T or 5.5T) for breaking up and excavating the pool shell, (2) a tipper truck for removing concrete debris and spoil, and (3) fill material for backfilling the site. Pool removal in NSW requires a development application (DA) from your local council in most cases. A licensed builder or demolition contractor is typically required for pool removal.",
    relatedQuestions: [
      { q: "How long does pool removal take with an excavator?", a: "A standard residential pool removal typically takes 1–2 days with a 3.5T or 5.5T excavator, depending on pool size and concrete thickness." },
      { q: "Do I need a permit to remove a pool in NSW?", a: "Yes. Pool removal typically requires a development application (DA) from your local council in NSW." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "excavator-hire-for-site-clearing",
    question: "What equipment do I need for site clearing?",
    shortAnswer: "Site clearing typically requires an excavator for vegetation removal and grubbing, combined with a tipper truck for debris removal. The right excavator size depends on site area.",
    fullAnswer: "Site clearing involves removing vegetation, topsoil, tree stumps, and debris from a site before construction begins. The equipment required depends on site size and vegetation density. For small residential sites (up to 500m²), a 1.7T or 3.5T excavator is sufficient for vegetation removal and grubbing, combined with a tipper truck for debris removal. For larger sites, the 5.5T excavator provides more reach and bucket capacity for faster clearing. The process typically involves: (1) removing vegetation and shrubs with the excavator bucket, (2) grubbing out tree stumps and root systems, (3) stripping topsoil to the required depth, (4) loading debris and spoil into the tipper truck for removal. BuildHire's site clearing customers typically hire a 1.7T or 3.5T excavator combined with our Isuzu NQR450 tipper truck.",
    relatedQuestions: [
      { q: "How long does site clearing take?", a: "Site clearing time depends on site size and vegetation density. A standard residential block (600m²) typically takes 1–2 days with a 3.5T excavator." },
      { q: "Do I need a permit for site clearing in NSW?", a: "Tree removal may require a permit from your local council in NSW. Check with your council before removing significant trees." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "excavator-hire-for-retaining-wall",
    question: "What equipment do I need to build a retaining wall?",
    shortAnswer: "Building a retaining wall typically requires a mini excavator for footing excavation and backfilling, and a mini dumper for moving aggregate and material.",
    fullAnswer: "Building a retaining wall involves several earthmoving tasks that are best completed with a mini excavator and mini dumper. The process typically involves: (1) excavating the footing trench to the required depth and width, (2) placing and compacting the footing material, (3) constructing the wall, and (4) backfilling behind the wall with drainage aggregate. For a standard residential retaining wall (up to 1.5m high), the 1T or 1.7T mini excavator is ideal for footing excavation and backfilling. The mini dumper is used to transport drainage aggregate and backfill material efficiently. For larger retaining walls (above 1.5m), a 3.5T excavator provides more reach and bucket capacity. Retaining walls above 1m in NSW typically require a development application (DA) and must be designed by a structural engineer.",
    relatedQuestions: [
      { q: "Do I need a permit to build a retaining wall in NSW?", a: "Retaining walls above 1m in height typically require a development application (DA) from your local council in NSW." },
      { q: "What size excavator is best for retaining wall construction?", a: "For standard residential retaining walls (up to 1.5m), the 1T or 1.7T mini excavator is ideal. For larger walls, the 3.5T provides more reach and capacity." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "excavator-hire-for-nbn",
    question: "What size excavator is best for NBN cable trenching?",
    shortAnswer: "The 0.8T mini excavator with a narrow trenching bucket (200mm) is the preferred choice for NBN cable trenching — compact, precise, and fits through residential gates.",
    fullAnswer: "NBN cable trenching requires precise, narrow trenches — typically 200–300mm wide and 300–600mm deep. The 0.8T mini excavator with a 200mm narrow trenching bucket is the preferred choice for NBN cable work. It fits through residential gates (750mm wide), causes minimal surface disruption, and digs precise trenches. The 1T mini excavator (900mm wide) is an alternative for sites with slightly wider access. For large-scale NBN rollout projects requiring multiple machines, BuildHire can supply multiple 0.8T and 1T excavators. Our machines can be fitted with narrow trenching buckets (200–300mm) specifically for cable and conduit work. NBN cable trenching typically requires a permit from the relevant road authority for work in public roads or footpaths.",
    relatedQuestions: [
      { q: "How narrow can a mini excavator trench for NBN cable?", a: "With a 200mm narrow trenching bucket, our 0.8T mini excavator can dig trenches as narrow as 200mm — ideal for NBN cable installation." },
      { q: "Can BuildHire supply multiple machines for large NBN projects?", a: "Yes. BuildHire can supply multiple machines for large-scale NBN rollout projects. Contact us to discuss fleet requirements." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "excavator-hire-for-solar",
    question: "What equipment do I need for solar panel installation earthworks?",
    shortAnswer: "Solar installation earthworks typically require a mini excavator for cable trenching and foundation preparation, and sometimes a mini dumper for material movement.",
    fullAnswer: "Solar installation projects require earthmoving equipment for cable trench excavation, foundation preparation for ground-mounted systems, and conduit installation. For residential rooftop solar installations, the 0.8T or 1T mini excavator with a narrow trenching bucket is ideal for cable trenching from the roof to the inverter and from the inverter to the meter board. For ground-mounted solar systems, the 1.7T or 3.5T excavator is used for foundation pile installation and cable trench excavation. For large commercial or utility-scale solar installations, multiple machines may be required. BuildHire's solar installation customers typically hire a 0.8T or 1T for residential cable trenching and a 1.7T for ground-mounted system foundations.",
    relatedQuestions: [
      { q: "How deep do solar cable trenches need to be?", a: "Solar cable trenches are typically 300–600mm deep, depending on local regulations and cable specifications." },
      { q: "Can BuildHire deliver to solar installation sites across NSW?", a: "Yes. BuildHire delivers to all major NSW locations. Book before 12pm for next-day delivery." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "excavator-hire-for-dam-construction",
    question: "What excavator is best for farm dam construction?",
    shortAnswer: "For small farm dams, the 3.5T or 5.5T excavator is most effective. These machines provide the reach and bucket capacity needed for efficient dam excavation.",
    fullAnswer: "Farm dam construction requires an excavator with sufficient reach, bucket capacity, and digging force to excavate the dam basin and form the embankment. For small farm dams (up to 1,000m³ capacity), the 3.5T excavator is the minimum recommended size. The 5.5T excavator is more efficient for medium-sized dams. The excavation process involves: (1) stripping topsoil from the dam area, (2) excavating the basin to the required depth and profile, (3) using the excavated material to form the embankment, and (4) compacting the embankment. Farm dam construction in NSW may require approval from the NSW Natural Resources Access Regulator (NRAR) depending on dam capacity and catchment area. BuildHire delivers to regional NSW locations — contact us to discuss delivery logistics for rural properties.",
    relatedQuestions: [
      { q: "Do I need approval to build a farm dam in NSW?", a: "Farm dam construction in NSW may require approval from the NSW Natural Resources Access Regulator (NRAR) depending on dam capacity and catchment area." },
      { q: "Can BuildHire deliver to regional NSW for farm dam work?", a: "Yes. BuildHire delivers to regional NSW locations. Contact us to discuss delivery logistics and pricing for rural properties." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "excavator-hire-for-concrete-removal",
    question: "What equipment is needed to remove concrete?",
    shortAnswer: "Concrete removal typically requires a 3.5T or 5.5T excavator with a hydraulic breaker attachment, combined with a tipper truck for debris removal.",
    fullAnswer: "Removing concrete — driveways, paths, slabs, footings — requires an excavator with sufficient breaking force and a tipper truck for debris removal. For standard residential concrete removal (paths, driveways, small slabs), the 3.5T excavator with bucket breaking technique or hydraulic breaker attachment is effective. For thicker slabs (200mm+) or reinforced concrete, the 5.5T excavator provides more breaking force. The process involves: (1) breaking up the concrete with the excavator bucket or hydraulic breaker, (2) loading broken concrete into the tipper truck, and (3) transporting to a concrete recycling facility. Concrete is heavy — a standard 100mm thick concrete slab weighs approximately 240kg/m². A tipper truck with 4,500kg payload can carry approximately 18m² of broken 100mm slab per load.",
    relatedQuestions: [
      { q: "How much does concrete removal cost in Sydney?", a: "Concrete removal costs depend on slab size, thickness, and access. As a guide, hiring a 3.5T excavator ($320/day) and tipper truck ($350/day) for 1 day is sufficient for most residential concrete removal projects." },
      { q: "Can a mini excavator break up concrete?", a: "Yes. Mini excavators can break up standard residential concrete using the bucket teeth. For thicker or reinforced concrete, a hydraulic breaker attachment is more effective." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "excavator-hire-for-subdivision",
    question: "What equipment is needed for residential subdivision earthworks?",
    shortAnswer: "Residential subdivision earthworks typically require a 3.5T–5.5T excavator for bulk earthworks and a tipper truck for spoil removal. Multiple machines may be needed for larger subdivisions.",
    fullAnswer: "Residential subdivision earthworks involve bulk earthmoving, service installation, and site preparation across multiple lots. The equipment required depends on subdivision size and earthworks volume. For small subdivisions (2–4 lots), a 3.5T or 5.5T excavator combined with a tipper truck is typically sufficient. For larger subdivisions, multiple machines may be required. The earthworks process typically involves: (1) bulk earthmoving to establish finished levels, (2) service trench excavation for water, sewer, stormwater, and electrical, (3) road formation and kerb and gutter preparation, and (4) lot preparation. BuildHire can supply multiple machines for subdivision projects. Contact us to discuss fleet requirements and project-specific pricing for larger developments.",
    relatedQuestions: [
      { q: "Can BuildHire supply multiple machines for a subdivision project?", a: "Yes. BuildHire can supply multiple excavators and tipper trucks for subdivision projects. Contact us to discuss fleet requirements and project pricing." },
      { q: "Does BuildHire offer project pricing for subdivision earthworks?", a: "Yes. For projects requiring equipment over multiple weeks or months, BuildHire offers project-based pricing. Contact us to discuss your project." }
    ],
    schema: { type: "FAQPage", speakable: true }
  },
  {
    slug: "excavator-hire-for-plumbing",
    question: "What excavator is best for plumbing and sewer work?",
    shortAnswer: "For residential plumbing trenches, the 0.8T or 1T mini excavator is ideal. For deeper sewer connections or larger pipes, the 1.7T provides more digging depth.",
    fullAnswer: "Plumbing and sewer work requires precise trench excavation at specific depths and widths. For standard residential plumbing — water supply, hot water systems, irrigation — the 0.8T or 1T mini excavator is ideal. These machines dig precise trenches at the required depth without disturbing surrounding areas. For sewer connections — typically 1,000–2,000mm deep — the 1.7T excavator provides more digging depth (maximum 2,400mm) and greater digging force for harder soil conditions. For deep sewer mains or large-diameter pipes, the 3.5T excavator (maximum dig depth 3,800mm) is required. Plumbers across NSW regularly hire BuildHire's mini excavators for residential service trenching. Our machines can be fitted with narrow trenching buckets (200–300mm) for precise pipe trench excavation.",
    relatedQuestions: [
      { q: "How deep can a 1T mini excavator dig for plumbing?", a: "The 1T mini excavator has a maximum dig depth of 1,800mm, sufficient for most residential plumbing trenches." },
      { q: "Can BuildHire supply narrow buckets for plumbing trenches?", a: "Yes. Narrow trenching buckets (200–300mm) are available for precise plumbing trench excavation." }
    ],
    schema: { type: "FAQPage", speakable: true }
  }
];
