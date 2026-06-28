export interface JobTitle {
  slug: string;
  name: string;
  namePlural: string;
  headline: string;
  description: string;
  longDescription: string;
  painPoints: string[];
  equipmentRecommendations: string[];
  faqs: { q: string; a: string }[];
}

export const jobTitles: JobTitle[] = [
  {
    slug: "site-manager",
    name: "Site Manager",
    namePlural: "Site Managers",
    headline: "Equipment Hire for Site Managers",
    description: "Fast, reliable excavator and earthmoving hire for site managers across NSW. Book online, next-day delivery.",
    longDescription: "Site managers across NSW rely on BuildHire for fast, reliable equipment hire that keeps projects on schedule. When you need an excavator or tipper truck on site tomorrow, BuildHire's online booking and next-day delivery means you're never waiting on a call centre or chasing a quote. Our late-model fleet is maintained to the highest standard — no breakdowns, no delays.",
    painPoints: [
      "Equipment not available when needed",
      "Waiting on phone quotes from hire companies",
      "Older machines breaking down on site",
      "Hidden fees on hire invoices",
      "Delivery delays holding up the programme"
    ],
    equipmentRecommendations: ["1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator", "tipper-truck"],
    faqs: [
      { q: "How quickly can BuildHire deliver equipment to a construction site?", a: "BuildHire guarantees next-day delivery when you book before 12pm. For urgent requirements, call 1300 157 882 and we'll do our best to accommodate same-day delivery." },
      { q: "Can site managers book equipment online outside business hours?", a: "Yes. BuildHire's online booking is available 24/7. Site managers can book equipment at any time — evenings, weekends, or early mornings before the site starts." },
      { q: "What happens if equipment breaks down on site?", a: "BuildHire provides same-day breakdown response. If a machine develops a fault on site, we'll either repair it or replace it the same day to minimise programme impact." },
      { q: "Does BuildHire provide invoices for site managers?", a: "Yes. BuildHire provides GST invoices for all hires. We can also provide insurance certificates and compliance documentation as required by your project." }
    ]
  },
  {
    slug: "project-manager",
    name: "Project Manager",
    namePlural: "Project Managers",
    headline: "Equipment Hire for Project Managers",
    description: "Reliable excavator and earthmoving hire for project managers across NSW. Transparent pricing, no surprises.",
    longDescription: "Project managers across NSW use BuildHire for earthmoving equipment that fits the budget and the programme. Our all-inclusive pricing means no surprises on the invoice — what you see online is what you pay. Our late-model fleet and guaranteed delivery means no programme delays from equipment issues.",
    painPoints: [
      "Budget overruns from unexpected hire fees",
      "Programme delays from equipment unavailability",
      "Difficulty getting quotes quickly for cost planning",
      "Inconsistent equipment quality across projects",
      "Poor communication from hire companies"
    ],
    equipmentRecommendations: ["1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator", "tipper-truck", "mini-dumper-700kg"],
    faqs: [
      { q: "How does BuildHire's pricing work for project managers?", a: "BuildHire publishes all-inclusive pricing online. The rate you see includes delivery, collection, and all standard hire costs — no environmental levies, damage waivers, or fuel surcharges added at checkout." },
      { q: "Can project managers get a quote quickly for cost planning?", a: "Yes. BuildHire's pricing is published online, so project managers can cost-plan equipment hire instantly without waiting for a quote. For larger projects, contact us for project-specific pricing." },
      { q: "Does BuildHire offer weekly and monthly rates for project managers?", a: "Yes. BuildHire offers daily, weekly, and monthly hire rates. Weekly and monthly rates provide significant savings over daily rates for ongoing project requirements." }
    ]
  },
  {
    slug: "quantity-surveyor",
    name: "Quantity Surveyor",
    namePlural: "Quantity Surveyors",
    headline: "Equipment Hire Rates for Quantity Surveyors",
    description: "Transparent equipment hire pricing for quantity surveyors across NSW. Published rates, no hidden fees.",
    longDescription: "Quantity surveyors across NSW use BuildHire's published pricing for accurate cost planning and budget preparation. Our all-inclusive rates are published online and updated regularly — no need to call for quotes or estimate add-on fees. What's published is what's invoiced.",
    painPoints: [
      "Difficulty obtaining accurate hire rates for cost planning",
      "Hidden fees not included in quoted rates",
      "Inconsistent pricing across hire companies",
      "Time spent chasing quotes from multiple suppliers",
      "Rates changing between quote and invoice"
    ],
    equipmentRecommendations: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator", "tipper-truck", "mini-dumper-700kg"],
    faqs: [
      { q: "Where can quantity surveyors find BuildHire's published hire rates?", a: "All BuildHire hire rates are published on our equipment pages at buildhire.com.au. Rates are all-inclusive — delivery, collection, and GST are included in the published price." },
      { q: "Do BuildHire's rates change between quote and invoice?", a: "No. BuildHire's published rates are fixed. The rate you see online is the rate on your invoice — no add-ons, no surprises." },
      { q: "Can quantity surveyors use BuildHire's rates for tender pricing?", a: "Yes. BuildHire's published rates are suitable for tender pricing and cost planning. For large projects requiring extended hire or multiple machines, contact us for project-specific rates." }
    ]
  },
  {
    slug: "civil-engineer",
    name: "Civil Engineer",
    namePlural: "Civil Engineers",
    headline: "Equipment Hire for Civil Engineers",
    description: "Excavators and earthmoving equipment for civil engineers across NSW. Late-model fleet, technical support.",
    longDescription: "Civil engineers across NSW use BuildHire's equipment for drainage works, earthworks, and infrastructure projects. Our team understands civil engineering requirements — we can advise on the right machine for specific soil conditions, dig depths, and access constraints.",
    painPoints: [
      "Equipment not suited to specific project requirements",
      "Lack of technical knowledge from hire company staff",
      "Machines not meeting specification requirements",
      "Poor documentation for compliance purposes",
      "Equipment unavailable at critical project stages"
    ],
    equipmentRecommendations: ["1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator", "tipper-truck"],
    faqs: [
      { q: "Can BuildHire advise on the right excavator for specific civil engineering applications?", a: "Yes. Our team has extensive experience with civil engineering applications and can advise on the right machine for your specific soil conditions, dig depth requirements, and access constraints." },
      { q: "Does BuildHire provide technical specifications for their equipment?", a: "Yes. Full technical specifications for all BuildHire equipment are available on our website, including dig depth, reach, bucket capacity, and operating weight." },
      { q: "Can BuildHire provide compliance documentation for civil projects?", a: "Yes. BuildHire can provide insurance certificates, service records, and compliance documentation as required for civil engineering projects." }
    ]
  },
  {
    slug: "operations-manager",
    name: "Operations Manager",
    namePlural: "Operations Managers",
    headline: "Equipment Hire for Operations Managers",
    description: "Reliable equipment hire for operations managers across NSW. Consistent fleet quality, transparent pricing.",
    longDescription: "Operations managers across NSW use BuildHire for consistent, reliable equipment hire that fits operational budgets and schedules. Our standardised fleet, transparent pricing, and guaranteed delivery means operations managers can plan equipment requirements with confidence.",
    painPoints: [
      "Inconsistent equipment quality across hires",
      "Unpredictable pricing making budget management difficult",
      "Equipment availability issues disrupting operations",
      "Poor supplier communication and responsiveness",
      "Time spent managing multiple hire suppliers"
    ],
    equipmentRecommendations: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator", "3-5t-excavator", "tipper-truck"],
    faqs: [
      { q: "How does BuildHire ensure consistent equipment quality for operations managers?", a: "BuildHire maintains a standardised fleet of late-model machines, each serviced before every hire. Operations managers can expect the same quality and performance every time." },
      { q: "Can operations managers set up an account with BuildHire?", a: "Yes. Operations managers can set up a business account with BuildHire for streamlined booking and invoicing. Contact us to discuss account arrangements." }
    ]
  },
  {
    slug: "procurement-manager",
    name: "Procurement Manager",
    namePlural: "Procurement Managers",
    headline: "Equipment Hire for Procurement Managers",
    description: "Transparent equipment hire pricing for procurement managers across NSW. Published rates, volume pricing available.",
    longDescription: "Procurement managers across NSW use BuildHire for equipment hire that meets procurement requirements — transparent pricing, consistent quality, reliable delivery, and proper documentation. Our published pricing eliminates the need for quote requests, and our volume pricing provides savings for high-frequency hirers.",
    painPoints: [
      "Time-consuming quote request processes",
      "Inconsistent pricing from hire suppliers",
      "Difficulty comparing hire suppliers on value",
      "Poor documentation for procurement records",
      "Supplier reliability issues"
    ],
    equipmentRecommendations: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator", "tipper-truck"],
    faqs: [
      { q: "Does BuildHire offer volume pricing for procurement managers?", a: "Yes. BuildHire offers volume pricing for high-frequency hirers. Contact us to discuss pricing arrangements for ongoing procurement requirements." },
      { q: "Can BuildHire provide documentation for procurement records?", a: "Yes. BuildHire provides GST invoices, insurance certificates, and compliance documentation as required for procurement records." },
      { q: "How does BuildHire's pricing compare to other hire suppliers?", a: "BuildHire publishes all-inclusive pricing online, making it easy for procurement managers to compare on a like-for-like basis. Our rates include delivery, collection, and all standard hire costs — no add-ons." }
    ]
  },
  {
    slug: "owner-builder",
    name: "Owner Builder",
    namePlural: "Owner Builders",
    headline: "Equipment Hire for Owner Builders",
    description: "Mini excavators and tipper trucks for owner builders across NSW. No licence required for machines under 3T.",
    longDescription: "Owner builders across NSW use BuildHire's compact excavators for site preparation, footing excavation, and earthworks. Our 0.8T and 1T mini excavators don't require a licence in NSW, making them accessible for owner builders who want to do their own earthworks. We provide full operating instructions and support.",
    painPoints: [
      "Uncertainty about licence requirements",
      "Lack of experience operating excavators",
      "High cost of wet hire alternatives",
      "Difficulty finding equipment that fits residential sites",
      "Concerns about damaging property with large machines"
    ],
    equipmentRecommendations: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator", "mini-dumper-700kg"],
    faqs: [
      { q: "Do owner builders need a licence to hire an excavator?", a: "In NSW, excavators under 3 tonnes do not require a formal licence. Our 0.8T, 1T, and 1.7T mini excavators are all under 3 tonnes and can be operated by owner builders without a licence." },
      { q: "Is it easy for owner builders to operate a mini excavator?", a: "Yes. Mini excavators are relatively straightforward to operate. BuildHire provides full operating instructions with every hire, and our team is available by phone to answer questions." },
      { q: "How much does it cost for an owner builder to hire a mini excavator?", a: "Mini excavator hire starts from $200/day for the 0.8T. Delivery and collection starts from $150. All prices include GST. This is significantly cheaper than wet hire with an operator." }
    ]
  },
  {
    slug: "foreman",
    name: "Foreman",
    namePlural: "Foremen",
    headline: "Equipment Hire for Foremen",
    description: "Fast, reliable excavator hire for foremen across NSW. Book online, next-day delivery, no fuss.",
    longDescription: "Foremen across NSW use BuildHire when they need equipment on site fast. Our online booking takes 2 minutes, our delivery is next-day, and our machines are always in top condition. No waiting on quotes, no chasing hire companies — just reliable equipment when you need it.",
    painPoints: [
      "Equipment not arriving on time",
      "Machines breaking down on site",
      "Slow response from hire company staff",
      "Complicated booking processes",
      "Equipment not suited to the job"
    ],
    equipmentRecommendations: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator", "tipper-truck"],
    faqs: [
      { q: "How quickly can BuildHire get equipment to site for a foreman?", a: "Book before 12pm and BuildHire guarantees next-day delivery. For urgent requirements, call 1300 157 882 and we'll do our best to accommodate same-day delivery." },
      { q: "Can foremen book equipment online without going through an office?", a: "Yes. BuildHire's online booking is available 24/7. Foremen can book equipment directly from the site without going through a procurement or admin process." },
      { q: "What if the equipment isn't right for the job?", a: "BuildHire's team is available by phone to advise on the right machine for your specific application. If you're unsure which machine to hire, call us and we'll recommend the best option." }
    ]
  }
];
