export interface Competitor {
  slug: string;
  category: string;
  categoryPlural: string;
  description: string;
  theirApproach: string;
  buildhireAdvantage: string;
  keyDifferences: { label: string; them: string; us: string }[];
  faqs: { q: string; a: string }[];
}
// Note: competitor names are NOT used in page content for legal safety.
// The slug is used only for URL routing and SEO targeting.
// Page content uses generic terms like "large hire companies" or "national chains".
export const competitors: Competitor[] = [
  {
    slug: "kennards-hire",
    category: "National Hire Chain",
    categoryPlural: "National Hire Chains",
    description: "Large national equipment hire companies with broad fleets but corporate pricing structures.",
    theirApproach: "National hire chains operate large depot networks across Australia, offering a wide range of equipment categories. Their scale means standardised processes, call-centre booking, and pricing that includes environmental levies, damage waivers, and fuel surcharges on top of headline rates.",
    buildhireAdvantage: "BuildHire specialises exclusively in excavators, mini dumpers, and tipper trucks. Our pricing is all-inclusive and published online. No call centres, no hidden fees. Book in 2 minutes and get next-day delivery.",
    keyDifferences: [
      { label: "Pricing transparency", them: "Call for quote, add-on fees at checkout", us: "All-inclusive pricing published online from $200/day" },
      { label: "Booking process", them: "Phone or in-depot only", us: "Online booking in 2 minutes, 24/7" },
      { label: "Fleet specialisation", them: "Broad generalist fleet", us: "Specialist excavator and earthmoving fleet only" },
      { label: "Delivery", them: "Variable, often 2–3 day lead time", us: "Next-day delivery, book before 12pm" },
      { label: "Equipment age", them: "Mixed fleet, some older machines", us: "Late-model fleet, regularly serviced" }
    ],
    faqs: [
      { q: "How does BuildHire compare to national hire chains on price?", a: "BuildHire publishes all-inclusive rates online from $200/day for mini excavators. National hire chains often require you to call for a quote and add environmental levies, damage waivers, and fuel surcharges — meaning the final invoice is often 30–50% higher than the advertised price." },
      { q: "Is BuildHire faster to book than a national hire chain?", a: "Yes. BuildHire's online booking takes under 2 minutes and is available 24/7. National hire chains typically require a phone call or in-depot visit during business hours." },
      { q: "Does BuildHire have as many locations as national hire chains?", a: "BuildHire delivers across all of NSW from our Sydney depot. Our delivery network covers the same geographic area as most national chains for earthmoving equipment." }
    ]
  },
  {
    slug: "coates-hire",
    category: "National Hire Chain",
    categoryPlural: "National Hire Chains",
    description: "Corporate equipment hire companies with call-centre support and variable availability.",
    theirApproach: "Large corporate hire companies operate national depot networks with broad equipment categories. Their corporate structure means standardised pricing models, account management for large clients, and processes designed for enterprise customers rather than individual contractors.",
    buildhireAdvantage: "BuildHire is built for working contractors — not corporate procurement teams. Our pricing is transparent, our booking is instant, and our team answers the phone. We specialise in the equipment you actually need for earthmoving.",
    keyDifferences: [
      { label: "Target customer", them: "Enterprise and corporate accounts", us: "Working contractors and owner-operators" },
      { label: "Pricing model", them: "Account-based, negotiated rates", us: "Fixed transparent pricing, no negotiation needed" },
      { label: "Response time", them: "Call centre queues", us: "Direct line to the team" },
      { label: "Fleet focus", them: "Generalist across all categories", us: "Specialist earthmoving fleet" },
      { label: "Minimum hire", them: "Often 3–5 day minimums", us: "1-day minimum hire" }
    ],
    faqs: [
      { q: "How does BuildHire compare to large corporate hire companies?", a: "BuildHire is purpose-built for working contractors, not corporate accounts. Our pricing is fixed and published online, our booking is instant, and we specialise in excavators and earthmoving equipment." },
      { q: "Can I get a 1-day hire from BuildHire?", a: "Yes. BuildHire offers 1-day minimum hire on all equipment. Many corporate hire companies require 3–5 day minimums for earthmoving equipment." }
    ]
  },
  {
    slug: "national-pump-energy",
    category: "Specialist Hire Company",
    categoryPlural: "Specialist Hire Companies",
    description: "Specialist earthmoving and pumping equipment hire providers.",
    theirApproach: "Specialist hire companies focus on specific equipment categories — often pumping, dewatering, or heavy plant — and serve primarily civil and infrastructure contractors. Their fleet is typically oriented toward larger-scale projects.",
    buildhireAdvantage: "BuildHire's specialist fleet is optimised for residential and small-to-medium commercial earthmoving. Our compact excavators and mini dumpers are purpose-built for tight access and fast turnaround.",
    keyDifferences: [
      { label: "Project scale", them: "Large civil and infrastructure", us: "Residential to medium commercial" },
      { label: "Equipment size", them: "Larger plant, 5T+", us: "Compact fleet 0.8T–5.5T" },
      { label: "Access requirements", them: "Requires large site access", us: "Tight access specialists, fits through 800mm gates" },
      { label: "Booking lead time", them: "Often 3–7 days", us: "Next-day delivery" }
    ],
    faqs: [
      { q: "How does BuildHire differ from specialist plant hire companies?", a: "BuildHire specialises in compact earthmoving equipment for residential and small commercial projects. Specialist plant hire companies typically focus on larger civil infrastructure projects requiring heavy plant above 5 tonnes." }
    ]
  },
  {
    slug: "conplant",
    category: "Plant Hire Company",
    categoryPlural: "Plant Hire Companies",
    description: "General plant and equipment hire companies with mixed fleets.",
    theirApproach: "General plant hire companies offer a broad range of construction plant — from compactors and rollers to excavators and cranes. Their mixed fleet serves a wide variety of project types but means less specialisation in any single category.",
    buildhireAdvantage: "BuildHire's focused fleet means our excavators are always maintained to the highest standard, our operators know every machine intimately, and our delivery logistics are optimised for earthmoving equipment specifically.",
    keyDifferences: [
      { label: "Fleet depth", them: "Broad but shallow in each category", us: "Deep specialist fleet in excavators and earthmoving" },
      { label: "Maintenance standard", them: "Variable across large fleet", us: "Every machine serviced before every hire" },
      { label: "Online booking", them: "Phone-based", us: "Instant online booking 24/7" }
    ],
    faqs: [
      { q: "How does BuildHire compare to general plant hire companies?", a: "BuildHire specialises exclusively in excavators, mini dumpers, and tipper trucks. This focus means deeper fleet availability, higher maintenance standards, and specialist expertise." }
    ]
  },
  {
    slug: "brooks-hire",
    category: "Equipment Hire Company",
    categoryPlural: "Equipment Hire Companies",
    description: "Regional equipment hire companies with varying fleet quality.",
    theirApproach: "Regional hire companies serve specific geographic areas with a mix of equipment. Fleet age and maintenance standards vary, and pricing is typically quote-based with limited online presence.",
    buildhireAdvantage: "BuildHire combines the local knowledge of a regional operator with the systems and fleet quality of a national company. Our online booking, transparent pricing, and late-model fleet set us apart.",
    keyDifferences: [
      { label: "Fleet age", them: "Often older machines", us: "Late-model fleet, newest machines in NSW" },
      { label: "Online presence", them: "Limited online booking", us: "Full online booking and pricing" },
      { label: "Coverage", them: "Limited geographic area", us: "All NSW delivery" }
    ],
    faqs: [
      { q: "How does BuildHire compare to regional hire companies?", a: "BuildHire offers the local service of a regional operator with the fleet quality, online systems, and geographic coverage of a larger company. Our late-model machines and transparent pricing are consistent advantages." }
    ]
  },
  {
    slug: "solution-plant-hire",
    category: "Plant Hire Company",
    categoryPlural: "Plant Hire Companies",
    description: "Plant hire companies offering earthmoving equipment across NSW.",
    theirApproach: "Plant hire companies offer a range of earthmoving equipment with quote-based pricing and traditional booking processes.",
    buildhireAdvantage: "BuildHire's transparent pricing, instant online booking, and late-model fleet provide a consistently superior experience compared to traditional plant hire operators.",
    keyDifferences: [
      { label: "Booking", them: "Phone and email only", us: "Online booking in 2 minutes" },
      { label: "Pricing", them: "Quote required", us: "Published online pricing" },
      { label: "Fleet condition", them: "Variable", us: "Late-model, regularly serviced" }
    ],
    faqs: [
      { q: "How does BuildHire compare to plant hire companies on service?", a: "BuildHire offers instant online booking, published pricing, and a late-model fleet — advantages that traditional plant hire companies with phone-based booking and older equipment cannot match." }
    ]
  },
  {
    slug: "allcott-hire",
    category: "Equipment Hire Company",
    categoryPlural: "Equipment Hire Companies",
    description: "General equipment hire companies with broad but non-specialised fleets.",
    theirApproach: "General equipment hire companies offer a wide range of tools and equipment. Their broad catalogue means limited depth in any single category, and earthmoving equipment is often a secondary focus.",
    buildhireAdvantage: "BuildHire's exclusive focus on earthmoving means we stock the right machines, know them intimately, and can advise contractors on the best equipment for every job.",
    keyDifferences: [
      { label: "Specialisation", them: "General tools and equipment", us: "Specialist earthmoving only" },
      { label: "Advice quality", them: "Generalist staff", us: "Earthmoving specialists" },
      { label: "Fleet depth", them: "Limited earthmoving options", us: "Full range 0.8T–5.5T" }
    ],
    faqs: [
      { q: "Why choose BuildHire over a general equipment hire company?", a: "BuildHire specialises exclusively in earthmoving equipment. Our team are experts in excavators and earthmoving — not generalists covering 10,000 SKUs. This means better advice, better machines, and better outcomes." }
    ]
  },
  {
    slug: "ram-equipment",
    category: "Equipment Hire Company",
    categoryPlural: "Equipment Hire Companies",
    description: "Equipment hire companies offering excavators and earthmoving machinery.",
    theirApproach: "Equipment hire companies in the excavator space typically offer quote-based pricing with phone booking. Fleet quality and delivery reliability vary.",
    buildhireAdvantage: "BuildHire's online-first model, transparent pricing, and guaranteed next-day delivery provide a measurably better experience for contractors who need equipment fast.",
    keyDifferences: [
      { label: "Booking speed", them: "Phone quote required", us: "Book online in 2 minutes" },
      { label: "Delivery guarantee", them: "Variable lead times", us: "Next-day delivery guaranteed" },
      { label: "Pricing clarity", them: "Quote-based", us: "All-inclusive published rates" }
    ],
    faqs: [
      { q: "How quickly can BuildHire deliver compared to other hire companies?", a: "BuildHire guarantees next-day delivery when you book before 12pm. Many equipment hire companies have 2–5 day lead times for earthmoving equipment." }
    ]
  },
  {
    slug: "sherrin-rentals",
    category: "Equipment Rental Company",
    categoryPlural: "Equipment Rental Companies",
    description: "Equipment rental companies offering earthmoving and compaction machinery.",
    theirApproach: "Equipment rental companies offer a range of construction machinery on daily, weekly, and monthly terms. Pricing models and fleet quality vary.",
    buildhireAdvantage: "BuildHire's excavator-focused fleet and transparent pricing make us the preferred choice for contractors who need earthmoving equipment specifically.",
    keyDifferences: [
      { label: "Fleet focus", them: "Broad rental catalogue", us: "Specialist excavator fleet" },
      { label: "Pricing", them: "Quote-based", us: "Fixed online pricing" },
      { label: "Delivery", them: "Variable", us: "Next-day guaranteed" }
    ],
    faqs: [
      { q: "How does BuildHire compare to equipment rental companies?", a: "BuildHire focuses exclusively on excavators and earthmoving equipment with transparent online pricing. Equipment rental companies with broad catalogues often have less depth in earthmoving." }
    ]
  },
  {
    slug: "local-hire-yards",
    category: "Local Hire Yard",
    categoryPlural: "Local Hire Yards",
    description: "Local and independent hire yards with limited fleet availability and older equipment.",
    theirApproach: "Local hire yards are small independent operators serving their immediate area. They typically have limited fleet availability, older machines, and no online booking capability.",
    buildhireAdvantage: "BuildHire combines the personal service of a local operator with a late-model fleet, online booking, and delivery across all of NSW.",
    keyDifferences: [
      { label: "Fleet availability", them: "Limited, often 1–3 machines", us: "Multiple machines available, guaranteed availability" },
      { label: "Equipment age", them: "Often 10+ year old machines", us: "Late-model fleet, newest in NSW" },
      { label: "Online booking", them: "None", us: "24/7 online booking" },
      { label: "Coverage", them: "Local area only", us: "All NSW delivery" }
    ],
    faqs: [
      { q: "Why choose BuildHire over a local hire yard?", a: "Local hire yards often have limited fleet availability, older machines, and no online booking. BuildHire offers guaranteed availability, late-model equipment, transparent pricing, and delivery across all of NSW." }
    ]
  },
  {
    slug: "sunbelt-rentals",
    category: "International Hire Chain",
    categoryPlural: "International Hire Chains",
    description: "Large international equipment rental companies operating in Australia with corporate pricing.",
    theirApproach: "International hire chains bring global scale to the Australian market with standardised processes, corporate account management, and broad equipment catalogues. Their pricing reflects global overheads.",
    buildhireAdvantage: "BuildHire is 100% Australian-owned and operated, with pricing, fleet, and service designed specifically for the Australian construction market.",
    keyDifferences: [
      { label: "Ownership", them: "International corporate", us: "100% Australian owned" },
      { label: "Pricing", them: "Global corporate rates", us: "Competitive Australian pricing" },
      { label: "Local knowledge", them: "Standardised global processes", us: "Deep NSW market expertise" }
    ],
    faqs: [
      { q: "Why choose an Australian hire company over an international chain?", a: "BuildHire is 100% Australian-owned with pricing and fleet designed specifically for the Australian market. International hire chains apply global corporate pricing structures that don't always suit Australian contractors." }
    ]
  },
  {
    slug: "nally-hire",
    category: "Equipment Hire Company",
    categoryPlural: "Equipment Hire Companies",
    description: "Equipment hire companies offering earthmoving and construction machinery in NSW.",
    theirApproach: "Equipment hire companies in NSW offer a range of construction machinery with traditional booking processes and quote-based pricing.",
    buildhireAdvantage: "BuildHire's online booking, transparent pricing, and guaranteed next-day delivery provide a consistently superior experience for contractors across NSW.",
    keyDifferences: [
      { label: "Booking", them: "Phone-based", us: "Online 24/7" },
      { label: "Pricing", them: "Quote required", us: "Published online" },
      { label: "Delivery", them: "Variable lead times", us: "Next-day guaranteed" }
    ],
    faqs: [
      { q: "How does BuildHire compare to other NSW equipment hire companies?", a: "BuildHire offers instant online booking, published all-inclusive pricing, and guaranteed next-day delivery — advantages that most NSW equipment hire companies with traditional phone-based booking cannot match." }
    ]
  },
  {
    slug: "onsite-rental-group",
    category: "Equipment Rental Group",
    categoryPlural: "Equipment Rental Groups",
    description: "Large equipment rental groups with broad fleets and corporate pricing.",
    theirApproach: "Large equipment rental groups operate multi-depot networks with broad equipment catalogues. Their scale provides fleet depth but also means corporate pricing structures and call-centre booking.",
    buildhireAdvantage: "BuildHire's specialist focus and direct booking model means faster service, better pricing, and more personal support than large rental groups.",
    keyDifferences: [
      { label: "Fleet focus", them: "Broad catalogue", us: "Specialist earthmoving" },
      { label: "Booking", them: "Call centre", us: "Direct online booking" },
      { label: "Pricing", them: "Corporate rates with add-ons", us: "All-inclusive fixed pricing" }
    ],
    faqs: [
      { q: "How does BuildHire compare to large equipment rental groups?", a: "BuildHire offers specialist earthmoving expertise, direct booking without call centres, and all-inclusive pricing without add-on fees." }
    ]
  },
  {
    slug: "hirepool",
    category: "Equipment Hire Company",
    categoryPlural: "Equipment Hire Companies",
    description: "Equipment hire companies operating across Australia and New Zealand.",
    theirApproach: "Trans-Tasman hire companies offer equipment across Australia and New Zealand with standardised processes. Their broad geographic coverage means less local specialisation.",
    buildhireAdvantage: "BuildHire is a NSW specialist — our entire operation is optimised for the NSW construction market, with local knowledge, local fleet, and local delivery expertise.",
    keyDifferences: [
      { label: "Market focus", them: "Trans-Tasman, broad coverage", us: "NSW specialist" },
      { label: "Local knowledge", them: "Standardised across markets", us: "Deep NSW expertise" }
    ],
    faqs: [
      { q: "Why choose a NSW specialist over a trans-Tasman hire company?", a: "BuildHire's entire operation is optimised for the NSW construction market. Our local knowledge, fleet selection, and delivery network are specifically designed for NSW conditions and contractor needs." }
    ]
  },
  {
    slug: "total-tools",
    category: "Tool Hire Company",
    categoryPlural: "Tool Hire Companies",
    description: "Tool and equipment hire companies focused on hand tools and light equipment.",
    theirApproach: "Tool hire companies focus primarily on hand tools, power tools, and light equipment. Earthmoving equipment is typically a secondary offering with limited fleet depth.",
    buildhireAdvantage: "BuildHire specialises exclusively in earthmoving equipment. When you need an excavator, you want a specialist — not a tool hire company that also happens to have one machine available.",
    keyDifferences: [
      { label: "Specialisation", them: "Tools and light equipment", us: "Specialist earthmoving" },
      { label: "Fleet depth", them: "1–2 excavators typically", us: "Multiple machines, guaranteed availability" }
    ],
    faqs: [
      { q: "Why hire an excavator from a specialist rather than a tool hire company?", a: "BuildHire specialises exclusively in earthmoving equipment. Tool hire companies typically have 1–2 excavators as a secondary offering, meaning limited availability and less competitive pricing." }
    ]
  },
  {
    slug: "bunnings-tool-hire",
    category: "Retail Tool Hire",
    categoryPlural: "Retail Tool Hire Services",
    description: "Retail-based tool hire services offering light equipment for DIY and trade customers.",
    theirApproach: "Retail tool hire services offer convenience for DIY customers needing light equipment. Their earthmoving offering is typically limited to small machines oriented toward DIY rather than professional contractors.",
    buildhireAdvantage: "BuildHire is purpose-built for professional contractors. Our fleet, pricing, and service are designed for trade use — not DIY customers who need a machine for a weekend project.",
    keyDifferences: [
      { label: "Target customer", them: "DIY and light trade", us: "Professional contractors" },
      { label: "Equipment range", them: "Small DIY machines", us: "Professional 0.8T–5.5T fleet" },
      { label: "Delivery", them: "Customer collection only", us: "Delivery and collection included" }
    ],
    faqs: [
      { q: "Can I hire a professional excavator from BuildHire instead of a retail hire service?", a: "Yes. BuildHire's fleet is professional-grade, ranging from 0.8T to 5.5T. Our machines are late-model, regularly serviced, and delivered to your site." }
    ]
  },
  {
    slug: "dry-hire-companies",
    category: "Dry Hire Specialist",
    categoryPlural: "Dry Hire Specialists",
    description: "Dry hire equipment companies offering machinery without operators.",
    theirApproach: "Dry hire companies provide equipment without operators. Service levels, fleet quality, and pricing transparency vary significantly across operators.",
    buildhireAdvantage: "BuildHire is a dry hire specialist with transparent pricing, late-model equipment, and next-day delivery. We make dry hire simple — book online, we deliver, you operate.",
    keyDifferences: [
      { label: "Pricing transparency", them: "Variable, often quote-based", us: "Fixed published pricing" },
      { label: "Fleet quality", them: "Variable", us: "Late-model, regularly serviced" },
      { label: "Delivery speed", them: "Variable", us: "Next-day guaranteed" }
    ],
    faqs: [
      { q: "What makes BuildHire the best dry hire option in NSW?", a: "BuildHire combines transparent published pricing, instant online booking, a late-model fleet, and guaranteed next-day delivery. Most dry hire companies require phone quotes and have variable delivery lead times." }
    ]
  },
  {
    slug: "wet-hire-companies",
    category: "Wet Hire Operator",
    categoryPlural: "Wet Hire Operators",
    description: "Equipment hire companies that supply machinery with an operator included.",
    theirApproach: "Wet hire operators supply equipment with a licensed operator included. Wet hire rates are significantly higher than dry hire.",
    buildhireAdvantage: "BuildHire offers dry hire only — meaning you pay for the machine, not an operator's day rate on top. Dry hire with BuildHire is typically 40–60% cheaper than wet hire for the same machine.",
    keyDifferences: [
      { label: "Pricing", them: "Machine + operator day rate ($600–$1,200/day)", us: "Machine only from $200/day" },
      { label: "Flexibility", them: "Operator controls pace and method", us: "You control the machine, your way" },
      { label: "Suitability", them: "Unlicensed customers", us: "Licensed contractors" }
    ],
    faqs: [
      { q: "Is dry hire cheaper than wet hire?", a: "Yes — significantly. Wet hire rates for an excavator with operator typically range from $600–$1,200/day. BuildHire's dry hire rates start from $200/day for the same machine." },
      { q: "Do I need a licence to dry hire an excavator from BuildHire?", a: "For excavators under 3 tonnes, no licence is required in NSW. For machines 3 tonnes and above, a High Risk Work Licence (HRWL) for earthmoving plant is required." }
    ]
  },
  {
    slug: "facebook-marketplace-hire",
    category: "Informal Hire Source",
    categoryPlural: "Informal Hire Sources",
    description: "Informal equipment hire through Facebook Marketplace and private sellers.",
    theirApproach: "Some contractors source equipment hire through Facebook Marketplace or private sellers. While prices can appear lower, these arrangements typically lack insurance, maintenance records, and breakdown support.",
    buildhireAdvantage: "BuildHire provides a fully insured, professionally maintained fleet with delivery, collection, and breakdown support included.",
    keyDifferences: [
      { label: "Insurance", them: "Typically uninsured", us: "Fully insured fleet" },
      { label: "Maintenance", them: "Unknown service history", us: "Serviced before every hire" },
      { label: "Breakdown support", them: "None", us: "Same-day breakdown response" },
      { label: "Delivery", them: "Self-collect typically", us: "Delivery and collection included" }
    ],
    faqs: [
      { q: "Is it safe to hire equipment through Facebook Marketplace?", a: "Informal hire arrangements carry significant risks — uninsured equipment, unknown maintenance history, no breakdown support, and no recourse if the machine fails on site. BuildHire provides a fully insured, professionally maintained fleet with delivery and breakdown support included." }
    ]
  },
  {
    slug: "gumtree-hire",
    category: "Informal Hire Source",
    categoryPlural: "Informal Hire Sources",
    description: "Informal equipment hire listings through classified ad platforms.",
    theirApproach: "Classified ad platforms list equipment hire from private sellers and small operators. Pricing may appear competitive but typically excludes delivery, insurance, and support.",
    buildhireAdvantage: "BuildHire's all-inclusive pricing, professional fleet, and full support make us the reliable alternative to informal classified ad hire.",
    keyDifferences: [
      { label: "Pricing clarity", them: "Advertised price excludes delivery and insurance", us: "All-inclusive pricing published online" },
      { label: "Reliability", them: "Variable", us: "Guaranteed availability and delivery" },
      { label: "Support", them: "None", us: "Full breakdown and operational support" }
    ],
    faqs: [
      { q: "Why choose BuildHire over classified ad hire listings?", a: "BuildHire provides all-inclusive pricing, a professionally maintained fleet, delivery and collection, and full breakdown support. Classified ad hire listings often exclude these costs and provide no support if issues arise on site." }
    ]
  },
  {
    slug: "owner-operator-hire",
    category: "Owner-Operator",
    categoryPlural: "Owner-Operators",
    description: "Individual owner-operators offering equipment hire alongside their contracting services.",
    theirApproach: "Owner-operators who hire out their own equipment alongside their contracting work can offer competitive rates but have limited availability — their machine is often in use on their own projects.",
    buildhireAdvantage: "BuildHire's dedicated hire fleet is always available for hire — we don't use our machines on our own projects. Guaranteed availability, next-day delivery, and professional support are consistent advantages.",
    keyDifferences: [
      { label: "Availability", them: "Limited, machine often in use", us: "Dedicated hire fleet, always available" },
      { label: "Scheduling reliability", them: "Conflicts common", us: "Guaranteed delivery" },
      { label: "Fleet condition", them: "Variable, often heavily used", us: "Hire-only fleet, maintained to hire standard" }
    ],
    faqs: [
      { q: "Why hire from BuildHire instead of an owner-operator?", a: "Owner-operators often have limited availability because their machine is in use on their own projects. BuildHire maintains a dedicated hire fleet — our machines are never used on our own projects, meaning guaranteed availability and next-day delivery every time." }
    ]
  },
  {
    slug: "interstate-hire-companies",
    category: "Interstate Hire Company",
    categoryPlural: "Interstate Hire Companies",
    description: "Equipment hire companies based outside NSW attempting to service the Sydney and NSW market.",
    theirApproach: "Interstate hire companies sometimes advertise in the NSW market but face significant logistical challenges — longer delivery times, higher transport costs, and less local knowledge.",
    buildhireAdvantage: "BuildHire is based in Sydney and delivers across all of NSW. Our local depot means next-day delivery, lower transport costs, and deep knowledge of NSW construction sites.",
    keyDifferences: [
      { label: "Location", them: "Based interstate", us: "Sydney-based, NSW specialist" },
      { label: "Delivery time", them: "2–5 days from interstate", us: "Next-day delivery" },
      { label: "Transport cost", them: "High interstate freight", us: "Local delivery rates" }
    ],
    faqs: [
      { q: "Why choose a NSW-based hire company over an interstate operator?", a: "BuildHire is Sydney-based and delivers across all of NSW. Interstate hire companies face higher transport costs, longer delivery times, and less local knowledge — all of which translate to worse outcomes for NSW contractors." }
    ]
  }
];
