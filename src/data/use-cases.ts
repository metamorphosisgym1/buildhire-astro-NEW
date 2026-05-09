export interface UseCase {
  slug: string;
  name: string;
  description: string;
  equipmentRecommendations: string[]; // Slugs of recommended equipment
  faqs: { q: string; a: string }[];
}

export const useCases: UseCase[] = [
  {
    slug: "pool-excavation",
    name: "Pool Excavation",
    description: "Digging pool shells in residential backyards with precision and minimal disruption.",
    equipmentRecommendations: ["1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator", "mini-dumper-700kg", "tipper-truck"],
    faqs: [
      { q: "What size excavator is best for pool excavation?", a: "For most residential pools, a 1.7T or 3.5T excavator is ideal. They offer enough digging depth while still being able to navigate typical backyard access points." },
      { q: "How do I remove the soil from a pool excavation?", a: "A mini dumper is perfect for moving soil from the backyard to a tipper truck or skip bin parked at the front of the property." },
      { q: "Can I dig a pool myself?", a: "Yes, you can dry hire our equipment to dig a pool yourself, provided you are confident in operating the machinery and following the engineering plans." }
    ]
  },
  {
    slug: "tight-access-earthworks",
    name: "Tight Access Earthworks",
    description: "Earthmoving in confined spaces, narrow side passages, and standard residential gates.",
    equipmentRecommendations: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator", "mini-dumper-700kg"],
    faqs: [
      { q: "What is the narrowest excavator available?", a: "Our 0.8T Yanmar SV08 has retractable tracks that narrow down to 690mm, allowing it to fit through standard doorways and narrow side gates." },
      { q: "How do I move materials in tight access areas?", a: "Our 700kg mini dumper has a track width of just 600mm, making it the perfect companion for moving soil and materials in confined spaces." },
      { q: "Are zero tail swing excavators better for tight access?", a: "Yes, zero tail swing excavators allow you to rotate the cab without the rear counterweight extending beyond the tracks, preventing damage to walls and fences." }
    ]
  },
  {
    slug: "plumbing-trenches",
    name: "Plumbing & Utility Trenches",
    description: "Precise trenching for sewer, stormwater, electrical, and gas lines.",
    equipmentRecommendations: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator", "3-5t-excavator"],
    faqs: [
      { q: "What is the best machine for digging plumbing trenches?", a: "A 1.7T mini excavator is the most popular choice for residential plumbing trenches, offering excellent digging depth and power." },
      { q: "How deep can a mini excavator dig?", a: "A 1.7T mini excavator can dig up to 2.5 metres deep, while a 3.5T machine can reach depths of over 3.5 metres." },
      { q: "Do you supply different bucket sizes for trenching?", a: "Yes, our excavators come with a range of bucket sizes, including narrow trenching buckets specifically designed for utility work." }
    ]
  },
  {
    slug: "landscaping-retaining-walls",
    name: "Landscaping & Retaining Walls",
    description: "Site preparation, levelling, and excavating footings for landscape construction.",
    equipmentRecommendations: ["0-8t-mini-excavator", "1t-mini-excavator", "1-7t-mini-excavator", "mini-dumper-700kg", "tipper-truck"],
    faqs: [
      { q: "What equipment do I need to build a retaining wall?", a: "An excavator is essential for digging the footings and backfilling, while a mini dumper is great for moving gravel and materials." },
      { q: "Can an excavator be used for levelling a yard?", a: "Yes, our excavators come with a mud bucket (batter bucket) which is perfect for spreading topsoil and levelling ground." },
      { q: "How do I move landscaping supplies around my property?", a: "A tracked mini dumper is the most efficient way to transport mulch, soil, and gravel across uneven terrain and lawns." }
    ]
  },
  {
    slug: "driveway-preparation",
    name: "Driveway Preparation",
    description: "Excavating and levelling ground for new concrete, paved, or gravel driveways.",
    equipmentRecommendations: ["1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator", "tipper-truck"],
    faqs: [
      { q: "What size excavator is needed for a driveway?", a: "A 1.7T or 3.5T excavator is typically used for driveway preparation, depending on the size of the area and the amount of material to be removed." },
      { q: "How do I dispose of the old driveway material?", a: "A tipper truck is ideal for removing broken concrete, asphalt, and soil from the site to a recycling facility." },
      { q: "Can an excavator break up an existing concrete driveway?", a: "Yes, excavators can be fitted with a hydraulic rock breaker attachment to quickly demolish existing concrete slabs." }
    ]
  },
  {
    slug: "site-clearing-demolition",
    name: "Site Clearing & Demolition",
    description: "Removing vegetation, topsoil, debris, and small structures from residential blocks.",
    equipmentRecommendations: ["1-7t-mini-excavator", "3-5t-excavator", "5-5t-excavator", "tipper-truck"],
    faqs: [
      { q: "What equipment is best for clearing a residential block?", a: "A 3.5T or 5.5T excavator paired with a tipper truck provides the power and transport capacity needed for efficient site clearing." },
      { q: "Can I use an excavator to remove tree stumps?", a: "Yes, an excavator with a ripper or standard digging bucket is highly effective at digging around and extracting tree stumps." },
      { q: "Do you hire out rock breakers for demolition?", a: "Yes, we offer hydraulic rock breaker attachments for our excavators, perfect for breaking up concrete slabs and footings." }
    ]
  },
  {
    slug: "civil-construction",
    name: "Civil Construction",
    description: "Road works, civil infrastructure, and large-scale earthmoving projects.",
    equipmentRecommendations: ["3-5t-excavator", "5-5t-excavator", "tipper-truck"],
    faqs: [
      { q: "What is the largest excavator you hire?", a: "Our largest machine is the 5.5T Yanmar ViO55, which is built for heavy-duty civil and commercial construction." },
      { q: "Do I need a licence for civil construction equipment?", a: "Yes, operating earthmoving equipment on a registered commercial or civil worksite requires a High Risk Work Licence (HRWL)." },
      { q: "Do your machines meet civil site safety requirements?", a: "Yes, our late-model fleet is fully compliant with civil site safety standards, including risk assessments and maintenance records." }
    ]
  },
  {
    slug: "soil-spoil-removal",
    name: "Soil & Spoil Removal",
    description: "Efficiently removing excavated soil, spoil, and waste from construction sites.",
    equipmentRecommendations: ["mini-dumper-700kg", "tipper-truck"],
    faqs: [
      { q: "What is the best way to remove soil from a tight access site?", a: "A high-tip mini dumper can easily transport soil from the backyard and tip it directly into a skip bin or tipper truck." },
      { q: "How much soil can a tipper truck hold?", a: "Our Isuzu NQR450 tipper truck has a payload capacity of 4,500kg and a body volume of 6 cubic metres." },
      { q: "What licence is required to drive a tipper truck?", a: "A Medium Rigid (MR) or higher licence is required to operate our 4.5T payload tipper truck." }
    ]
  },
  {
    slug: "material-transport",
    name: "Material Transport",
    description: "Delivering gravel, sand, aggregate, and landscaping supplies to site.",
    equipmentRecommendations: ["tipper-truck", "mini-dumper-700kg"],
    faqs: [
      { q: "Can I use a tipper truck to pick up landscaping supplies?", a: "Yes, our tipper truck is perfect for collecting bulk materials like sand, gravel, and mulch from landscape suppliers." },
      { q: "How do I move bulk materials from the driveway to the backyard?", a: "A tracked mini dumper is the most efficient way to transport bulk materials across your property without damaging the lawn." },
      { q: "Does the mini dumper handle wet or muddy conditions?", a: "Yes, the rubber tracks on our mini dumper provide excellent traction and low ground pressure, making it ideal for wet or muddy sites." }
    ]
  },
  {
    slug: "sloping-uneven-terrain",
    name: "Sloping & Uneven Terrain",
    description: "Earthworks and material transport on steep blocks and challenging landscapes.",
    equipmentRecommendations: ["1t-mini-excavator", "1-7t-mini-excavator", "mini-dumper-700kg"],
    faqs: [
      { q: "Can excavators operate on a slope?", a: "Yes, tracked excavators can operate on slopes, but it requires experience and careful operation to maintain stability." },
      { q: "What is the best machine for moving materials up a steep hill?", a: "A tracked mini dumper is highly stable and provides excellent traction for climbing steep inclines with a full load." },
      { q: "Are tracked machines better than wheeled machines on uneven ground?", a: "Yes, rubber tracks distribute the machine's weight over a larger area, providing better stability, traction, and reduced ground disturbance." }
    ]
  }
];
