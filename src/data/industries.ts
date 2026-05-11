export interface Industry {
  slug: string;
  name: string;
  headline: string;
  description: string;
  longDescription: string;
  equipmentRecommendations: string[];
  faqs: { q: string; a: string }[];
}

export const industries: Industry[] = [
  {
    slug: "pool-builders",
    name: "Pool Builders",
    headline: "Equipment Hire for Pool Builders",
    description: "Dry hire excavators and mini dumpers for pool builders across NSW. Next-day delivery, transparent pricing.",
    longDescription: "Pool builders across NSW rely on BuildHire for fast, reliable equipment hire. Whether you're excavating a concrete pool, fibreglass shell, or plunge pool, our fleet of mini excavators and tracked mini dumpers are purpose-built for residential pool work — tight access, low ground pressure, and next-day delivery to your site.",
    equipmentRecommendations: ["1-7t-mini-excavator", "3-5t-excavator", "mini-dumper-700kg", "0-8t-mini-excavator"],
    faqs: [
      { q: "What size excavator do pool builders typically use?", a: "Most residential pool excavations use a 1.7T or 3.5T excavator depending on pool size and access. A 1.7T fits through standard residential gates and is ideal for pools up to 8m. Larger pools or commercial projects typically require a 3.5T." },
      { q: "Do I need a licence to operate an excavator for pool work?", a: "In NSW, excavators under 3 tonnes do not require a formal licence. For machines 3 tonnes and above, a High Risk Work Licence (HRWL) for earthmoving plant is required." },
      { q: "Can BuildHire deliver to pool construction sites across NSW?", a: "Yes. BuildHire delivers to all major Sydney suburbs and regional NSW locations. Book before 12pm for next-day delivery." }
    ]
  },
  {
    slug: "landscapers",
    name: "Landscapers",
    headline: "Equipment Hire for Landscapers",
    description: "Mini excavators, mini dumpers and tipper trucks for landscaping contractors across NSW. From $200/day.",
    longDescription: "Landscaping contractors across NSW use BuildHire for earthmoving, retaining wall construction, garden bed preparation, and material transport. Our compact fleet is designed for residential and commercial landscaping — low ground pressure rubber tracks protect lawns, and our mini dumpers move material efficiently without wheelbarrowing.",
    equipmentRecommendations: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator", "mini-dumper-700kg", "tipper-truck"],
    faqs: [
      { q: "What equipment do landscapers typically hire from BuildHire?", a: "Landscapers most commonly hire mini excavators (0.8T–1.7T) for earthworks and retaining wall preparation, mini dumpers for moving soil and aggregate, and tipper trucks for spoil removal." },
      { q: "Can a mini excavator fit through a residential gate?", a: "Yes. Our 0.8T mini excavator is only 750mm wide and fits through gates as narrow as 800mm. The 1T is 900mm wide and the 1.7T is 1,300mm wide." },
      { q: "How much does it cost to hire a mini excavator for landscaping?", a: "Mini excavator hire starts from $200/day for the 0.8T. Delivery and collection is $110. All prices include GST." }
    ]
  },
  {
    slug: "builders",
    name: "Builders",
    headline: "Equipment Hire for Builders",
    description: "Excavators and tipper trucks for residential and commercial builders across NSW. Late-model fleet, next-day delivery.",
    longDescription: "Residential and commercial builders across NSW use BuildHire for site preparation, footing excavation, service trenching, and spoil removal. Our fleet includes machines from 0.8T to 5.5T, covering everything from tight residential sites to larger commercial projects. All machines are late-model, regularly serviced, and delivered next day.",
    equipmentRecommendations: ["1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator", "tipper-truck"],
    faqs: [
      { q: "What excavator size do builders use for footing excavation?", a: "For standard residential footings, a 1.7T or 3.5T excavator is most common. The 3.5T offers more reach and bucket capacity, making it faster for larger slabs." },
      { q: "Do builders need a tipper truck with the excavator?", a: "Yes — most builders hire a tipper truck alongside an excavator for efficient spoil removal. Our Isuzu NQR450 tipper has a 4,500kg payload and 6m³ body, ideal for residential construction." },
      { q: "Can BuildHire supply equipment for multi-day or weekly hires?", a: "Yes. We offer daily, weekly, and monthly hire rates. Weekly and monthly rates provide significant savings over daily rates." }
    ]
  },
  {
    slug: "plumbers",
    name: "Plumbers",
    headline: "Equipment Hire for Plumbers",
    description: "Mini excavators for plumbing and utility trenching across NSW. Tight access, next-day delivery, from $200/day.",
    longDescription: "Plumbers and drainage contractors across NSW hire BuildHire's mini excavators for service trenching, pipe laying, stormwater drainage, and sewer connections. Our compact machines are ideal for tight residential sites and can dig precise trenches without disturbing surrounding areas.",
    equipmentRecommendations: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator"],
    faqs: [
      { q: "What size excavator is best for plumbing trenches?", a: "For standard residential plumbing trenches (300–600mm wide), the 0.8T or 1T mini excavator is ideal. For deeper service trenches or larger diameter pipes, the 1.7T provides more digging depth and power." },
      { q: "Can mini excavators dig next to existing structures?", a: "Yes. Our mini excavators have a zero-tail-swing design, allowing them to work safely within 200mm of walls, fences, and structures without risk of damage." },
      { q: "How quickly can BuildHire deliver an excavator for an urgent plumbing job?", a: "Book before 12pm for next-day delivery across Greater Sydney. For urgent same-day requirements, call 1300 157 882 and we'll do our best to accommodate." }
    ]
  },
  {
    slug: "civil-contractors",
    name: "Civil Contractors",
    headline: "Equipment Hire for Civil Contractors",
    description: "Excavators from 1.7T to 5.5T for civil contractors across NSW. Reliable fleet, competitive rates, next-day delivery.",
    longDescription: "Civil contractors across NSW use BuildHire for road works, drainage, earthworks, and infrastructure projects. Our 3.5T and 5.5T excavators are the workhorses of civil construction — powerful, reliable, and delivered on time. We understand civil timelines and provide responsive service to keep your project on schedule.",
    equipmentRecommendations: ["3-5t-excavator", "5-5t-excavator", "tipper-truck"],
    faqs: [
      { q: "What is the largest excavator BuildHire offers for civil work?", a: "Our largest machine is the 5.5T excavator, suitable for medium civil construction projects. For larger civil projects requiring 8T+ machines, contact us as we can source larger equipment through our network." },
      { q: "Do civil contractors need a licence to operate a 5.5T excavator?", a: "Yes. In NSW, operating an excavator 3 tonnes and above requires a High Risk Work Licence (HRWL) for earthmoving plant (EE licence)." },
      { q: "Can BuildHire supply equipment on a monthly basis for civil projects?", a: "Yes. We offer monthly hire rates with significant discounts over daily rates. Contact us to discuss project-specific pricing for longer-term civil engagements." }
    ]
  },
  {
    slug: "developers",
    name: "Developers",
    headline: "Equipment Hire for Property Developers",
    description: "Excavators and tipper trucks for property developers across NSW. Reliable fleet for site preparation and earthworks.",
    longDescription: "Property developers across NSW use BuildHire for site clearing, bulk earthworks, footing excavation, and service installation. Whether you're developing a single lot or a multi-lot subdivision, our fleet provides the earthmoving capacity you need with the reliability and responsiveness that development timelines demand.",
    equipmentRecommendations: ["3-5t-excavator", "5-5t-excavator", "tipper-truck", "1-7t-mini-excavator"],
    faqs: [
      { q: "Can BuildHire supply multiple machines for a development site?", a: "Yes. We can supply multiple excavators and tipper trucks simultaneously for larger development projects. Contact us to discuss fleet requirements and project pricing." },
      { q: "What is the best excavator for a multi-lot residential development?", a: "For multi-lot residential developments, the 3.5T or 5.5T excavator is most efficient. Paired with our Isuzu NQR450 tipper truck, this combination maximises earthworks productivity." },
      { q: "Does BuildHire offer project-based pricing for developers?", a: "Yes. For projects requiring equipment over multiple weeks or months, we offer project-based pricing that provides significant savings over standard daily rates. Contact us to discuss your project." }
    ]
  }
];
