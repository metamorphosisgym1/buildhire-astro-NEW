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
      { q: "How much does it cost to hire a mini excavator for landscaping?", a: "Mini excavator hire starts from $200/day for the 0.8T. Delivery and collection starts from $150. All prices include GST." }
    ]
  },
  {
    slug: "builders",
    name: "Builders",
    headline: "Equipment Hire for Builders",
    description: "Excavators and tipper trucks for residential and commercial builders across NSW. Late-model fleet, next-day delivery.",
    longDescription: "Residential and commercial builders across NSW use BuildHire for site preparation, footing excavation, service trenching, and spoil removal. Our fleet includes machines from 0.8T to 5.5T, covering everything from tight residential sites to larger commercial projects.",
    equipmentRecommendations: ["1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator", "tipper-truck"],
    faqs: [
      { q: "What excavator size do builders use for footing excavation?", a: "For standard residential footings, a 1.7T or 3.5T excavator is most common. The 3.5T offers more reach and bucket capacity, making it faster for larger slabs." },
      { q: "Do builders need a tipper truck with the excavator?", a: "Yes — most builders hire a tipper truck alongside an excavator for efficient spoil removal. Our Isuzu NQR450 tipper has a 4,500kg payload and 6m3 body, ideal for residential construction." },
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
      { q: "What size excavator is best for plumbing trenches?", a: "For standard residential plumbing trenches (300-600mm wide), the 0.8T or 1T mini excavator is ideal. For deeper service trenches or larger diameter pipes, the 1.7T provides more digging depth and power." },
      { q: "Can mini excavators dig next to existing structures?", a: "Yes. Our mini excavators have a zero-tail-swing design, allowing them to work safely within 200mm of walls, fences, and structures without risk of damage." }
    ]
  },
  {
    slug: "civil-contractors",
    name: "Civil Contractors",
    headline: "Equipment Hire for Civil Contractors",
    description: "Excavators and tipper trucks for civil construction projects across NSW. Late-model fleet, competitive rates.",
    longDescription: "Civil contractors across NSW use BuildHire for road construction, drainage works, retaining structures, and earthworks. Our fleet covers machines from 1.7T to 5.5T for medium-scale civil projects, with tipper trucks for material transport and spoil removal.",
    equipmentRecommendations: ["1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator", "tipper-truck"],
    faqs: [
      { q: "What equipment do civil contractors typically hire from BuildHire?", a: "Civil contractors most commonly hire 3.5T and 5.5T excavators for earthworks and drainage, combined with tipper trucks for material transport." },
      { q: "Does BuildHire offer long-term hire for civil projects?", a: "Yes. BuildHire offers weekly and monthly hire rates with significant savings over daily rates. Contact us for project-specific pricing on extended hires." }
    ]
  },
  {
    slug: "developers",
    name: "Property Developers",
    headline: "Equipment Hire for Property Developers",
    description: "Excavators and earthmoving equipment for property development projects across NSW.",
    longDescription: "Property developers across NSW use BuildHire for site preparation, bulk earthworks, and service installation on residential and commercial development sites. Our fleet provides the right machine for every stage of the development process.",
    equipmentRecommendations: ["3-5t-excavator", "5-5t-excavator", "tipper-truck", "1-7t-mini-excavator"],
    faqs: [
      { q: "What equipment do property developers hire for site preparation?", a: "Property developers typically hire 3.5T-5.5T excavators for bulk earthworks and site preparation, combined with tipper trucks for spoil removal. Mini excavators are used for service trenching and tight-access work." },
      { q: "Can BuildHire supply equipment for large development projects?", a: "Yes. BuildHire can supply multiple machines for large development projects. Contact us to discuss fleet requirements and project-specific pricing." }
    ]
  },
  {
    slug: "demolition-contractors",
    name: "Demolition Contractors",
    headline: "Equipment Hire for Demolition Contractors",
    description: "Excavators for demolition and site clearing across NSW. Heavy-duty fleet, next-day delivery.",
    longDescription: "Demolition contractors across NSW use BuildHire's excavators for structure demolition, site clearing, and debris removal. Our 3.5T and 5.5T excavators are well-suited for residential demolition work, with tipper trucks available for debris removal.",
    equipmentRecommendations: ["3-5t-excavator", "5-5t-excavator", "tipper-truck"],
    faqs: [
      { q: "What size excavator is best for residential demolition?", a: "For residential demolition, a 3.5T or 5.5T excavator is most effective. The 5.5T provides more reach and bucket force for breaking up concrete slabs and masonry." },
      { q: "Do I need a licence to operate an excavator for demolition?", a: "For excavators 3 tonnes and above, a High Risk Work Licence (HRWL) for earthmoving plant is required in NSW." }
    ]
  },
  {
    slug: "drainage-contractors",
    name: "Drainage Contractors",
    headline: "Equipment Hire for Drainage Contractors",
    description: "Mini excavators for stormwater drainage and civil drainage works across NSW.",
    longDescription: "Drainage contractors across NSW hire BuildHire's mini excavators for stormwater drainage installation, pit excavation, and pipe laying. Our compact fleet is ideal for residential and commercial drainage works.",
    equipmentRecommendations: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator", "3-5t-excavator"],
    faqs: [
      { q: "What excavator is best for drainage trench work?", a: "For standard residential drainage trenches, the 1T or 1.7T mini excavator is ideal. For larger stormwater drainage works or deeper trenches, the 3.5T provides more reach and bucket capacity." }
    ]
  },
  {
    slug: "electricians",
    name: "Electricians",
    headline: "Equipment Hire for Electricians",
    description: "Mini excavators for cable trenching and electrical conduit installation across NSW.",
    longDescription: "Electricians and electrical contractors across NSW hire BuildHire's mini excavators for cable trench excavation, conduit installation, and service pit construction. Our compact machines dig precise, narrow trenches with minimal surface disruption.",
    equipmentRecommendations: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator"],
    faqs: [
      { q: "What size excavator is best for cable trenching?", a: "For standard cable trenches (200-400mm wide), the 0.8T mini excavator with a narrow trenching bucket is ideal. It fits through residential gates and causes minimal surface disruption." }
    ]
  },
  {
    slug: "fencing-contractors",
    name: "Fencing Contractors",
    headline: "Equipment Hire for Fencing Contractors",
    description: "Mini excavators for post hole digging and fencing preparation across NSW.",
    longDescription: "Fencing contractors across NSW use BuildHire's mini excavators for post hole excavation, trench digging for concrete footings, and site preparation. Our compact machines are ideal for residential and commercial fencing projects.",
    equipmentRecommendations: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator"],
    faqs: [
      { q: "Can a mini excavator dig post holes for fencing?", a: "Yes. Mini excavators with auger attachments are highly effective for post hole digging. Our machines can be fitted with augers for fencing and post installation work." }
    ]
  },
  {
    slug: "concreters",
    name: "Concreters",
    headline: "Equipment Hire for Concreters",
    description: "Excavators for slab preparation and footing excavation for concreters across NSW.",
    longDescription: "Concreters across NSW use BuildHire's excavators for slab preparation, footing excavation, and site levelling. Our fleet covers the full range from compact 0.8T machines for residential slabs to 3.5T excavators for larger commercial concrete works.",
    equipmentRecommendations: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator", "3-5t-excavator", "mini-dumper-700kg"],
    faqs: [
      { q: "What equipment do concreters hire for slab preparation?", a: "Concreters typically hire a mini excavator for site levelling and footing excavation, combined with a mini dumper for moving material. The 1.7T excavator is most common for residential slab work." }
    ]
  },
  {
    slug: "tree-surgeons",
    name: "Tree Surgeons & Arborists",
    headline: "Equipment Hire for Tree Surgeons and Arborists",
    description: "Mini excavators for stump removal and root excavation for arborists across NSW.",
    longDescription: "Tree surgeons and arborists across NSW use BuildHire's mini excavators for stump removal, root excavation, and site preparation after tree removal. Our compact machines minimise ground disturbance and fit through residential gates.",
    equipmentRecommendations: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator", "mini-dumper-700kg"],
    faqs: [
      { q: "Can a mini excavator remove tree stumps?", a: "Yes. Mini excavators are highly effective for stump removal — they can excavate around the stump, cut roots, and extract the entire root ball. The 1T or 1.7T is most commonly used for residential stump removal." }
    ]
  },
  {
    slug: "road-construction",
    name: "Road Construction",
    headline: "Equipment Hire for Road Construction",
    description: "Excavators and tipper trucks for road construction and maintenance across NSW.",
    longDescription: "Road construction contractors across NSW use BuildHire's excavators and tipper trucks for road preparation, kerb and gutter work, drainage installation, and pavement subgrade preparation.",
    equipmentRecommendations: ["3-5t-excavator", "5-5t-excavator", "tipper-truck"],
    faqs: [
      { q: "What equipment is used for road construction earthworks?", a: "Road construction typically requires 3.5T-5.5T excavators for subgrade preparation and drainage works, combined with tipper trucks for material transport." }
    ]
  },
  {
    slug: "agriculture-farming",
    name: "Agriculture & Farming",
    headline: "Equipment Hire for Agriculture and Farming",
    description: "Mini excavators and tipper trucks for farm earthworks, dam construction, and irrigation across NSW.",
    longDescription: "Farmers and agricultural contractors across NSW use BuildHire's excavators for dam construction, irrigation channel excavation, fence line preparation, and farm road maintenance. Our rubber-tracked machines minimise ground compaction on agricultural land.",
    equipmentRecommendations: ["1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator", "tipper-truck"],
    faqs: [
      { q: "Can BuildHire deliver to rural and regional NSW farm properties?", a: "Yes. BuildHire delivers to regional NSW locations. Contact us to discuss delivery logistics and pricing for rural properties." }
    ]
  },
  {
    slug: "solar-installation",
    name: "Solar Installation",
    headline: "Equipment Hire for Solar Installers",
    description: "Mini excavators for cable trenching and foundation work for solar installations across NSW.",
    longDescription: "Solar installation contractors across NSW use BuildHire's mini excavators for cable trench excavation, foundation preparation for ground-mounted systems, and conduit installation.",
    equipmentRecommendations: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator"],
    faqs: [
      { q: "What equipment is needed for solar cable trenching?", a: "For solar cable trenching, the 0.8T or 1T mini excavator with a narrow trenching bucket is ideal. These machines dig precise, narrow trenches with minimal surface disruption." }
    ]
  },
  {
    slug: "nbn-telco",
    name: "NBN & Telecommunications",
    headline: "Equipment Hire for NBN and Telco Contractors",
    description: "Mini excavators for NBN cable trenching and telecommunications infrastructure across NSW.",
    longDescription: "NBN and telecommunications contractors across NSW use BuildHire's mini excavators for cable trench excavation, pit construction, and conduit installation. Our compact machines minimise surface disruption in residential and commercial environments.",
    equipmentRecommendations: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator"],
    faqs: [
      { q: "What excavator is best for NBN cable trenching?", a: "The 0.8T mini excavator with a narrow trenching bucket is the preferred choice for NBN cable trenching — it fits through residential gates, causes minimal surface disruption, and digs precise trenches." }
    ]
  },
  {
    slug: "strata-body-corporate",
    name: "Strata & Body Corporate",
    headline: "Equipment Hire for Strata and Body Corporate",
    description: "Mini excavators for strata maintenance, drainage repairs, and common area works across NSW.",
    longDescription: "Strata managers and body corporate contractors across NSW use BuildHire's mini excavators for drainage repairs, service upgrades, garden maintenance, and common area earthworks. Our compact machines work efficiently in strata environments with minimal disruption to residents.",
    equipmentRecommendations: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator", "mini-dumper-700kg"],
    faqs: [
      { q: "Can BuildHire work in strata environments with limited access?", a: "Yes. Our 0.8T mini excavator is only 750mm wide and fits through standard pedestrian gates. It's ideal for strata environments where access is restricted." }
    ]
  },
  {
    slug: "government-councils",
    name: "Government & Councils",
    headline: "Equipment Hire for Government and Local Councils",
    description: "Excavators and tipper trucks for local government infrastructure and maintenance projects across NSW.",
    longDescription: "Local councils and government contractors across NSW use BuildHire's equipment for infrastructure maintenance, drainage works, park construction, and road maintenance. Our fleet is available on daily, weekly, and monthly terms with transparent pricing.",
    equipmentRecommendations: ["1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator", "tipper-truck"],
    faqs: [
      { q: "Does BuildHire work with local councils and government contractors?", a: "Yes. BuildHire supplies equipment to local councils and government contractors across NSW. We can provide invoices, insurance certificates, and compliance documentation as required." }
    ]
  },
  {
    slug: "events-entertainment",
    name: "Events & Entertainment",
    headline: "Equipment Hire for Events and Entertainment",
    description: "Mini excavators and tipper trucks for event site preparation and infrastructure across NSW.",
    longDescription: "Event organisers and entertainment contractors across NSW use BuildHire's equipment for festival site preparation, temporary infrastructure installation, and post-event site restoration.",
    equipmentRecommendations: ["0-8t-mini-excavator", "1t-mini-excavator", "mini-dumper-700kg", "tipper-truck"],
    faqs: [
      { q: "Can BuildHire supply equipment for festival and event site preparation?", a: "Yes. BuildHire's compact excavators and mini dumpers are ideal for event site preparation — cable trenching, temporary infrastructure installation, and site restoration after events." }
    ]
  },
  {
    slug: "real-estate-property",
    name: "Real Estate & Property",
    headline: "Equipment Hire for Real Estate and Property",
    description: "Excavators for property preparation, subdivision works, and development earthworks across NSW.",
    longDescription: "Real estate developers and property professionals across NSW use BuildHire's equipment for land preparation, subdivision earthworks, and property development site works.",
    equipmentRecommendations: ["1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator", "tipper-truck"],
    faqs: [
      { q: "What equipment is needed for residential land preparation?", a: "Residential land preparation typically requires a 1.7T-3.5T excavator for site levelling and service trenching, combined with a tipper truck for spoil removal." }
    ]
  },
  {
    slug: "mining-quarrying",
    name: "Mining & Quarrying",
    headline: "Equipment Hire for Mining and Quarrying",
    description: "Heavy excavators for mining exploration, quarrying, and bulk earthworks across NSW.",
    longDescription: "Mining and quarrying operations across NSW use BuildHire's larger excavators for exploration trenching, bulk material handling, and site preparation. Our 5.5T excavator is suited to smaller mining and quarrying applications.",
    equipmentRecommendations: ["5-5t-excavator", "3-5t-excavator", "tipper-truck"],
    faqs: [
      { q: "What excavator size is suitable for mining exploration trenching?", a: "For exploration trenching and small-scale mining applications, the 5.5T excavator provides the reach, bucket capacity, and digging force required." }
    ]
  }
];
