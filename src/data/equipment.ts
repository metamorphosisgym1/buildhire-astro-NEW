export interface Equipment {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  description: string;
  longDescription: string;
  price: string;
  priceNum: string;
  weeklyPrice?: string;
  delivery: string;
  specs: { label: string; value: string }[];
  useCases: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const equipment: Equipment[] = [
  {
    slug: "0-8t-mini-excavator",
    name: "0.8T Mini Excavator (SV08 Yanmar)",
    shortName: "0.8T Mini Excavator",
    category: "Excavators",
    description: "Ultra-compact mini excavator perfect for tight access residential jobs, backyard renovations, and narrow side passages.",
    longDescription: "The Yanmar SV08 is our smallest and most nimble machine — ideal for jobs where space is at a premium. With retractable tracks that narrow to under 700mm, it can access virtually any residential property.",
    price: "$200/day",
    priceNum: "200",
    weeklyPrice: "$1,000/week",
    delivery: "$150 Delivery & Collection",
    specs: [
      { label: "Operating Weight", value: "800 kg" },
      { label: "Max Digging Depth", value: "1,720 mm" },
      { label: "Track Width (retracted)", value: "690 mm" },
      { label: "Engine", value: "Yanmar 3TNV70" }
    ],
    useCases: [
      { title: "Tight Access Excavation", desc: "Fits through standard gates and narrow side passages." },
      { title: "Landscaping", desc: "Ideal for garden beds, levelling, and small earthworks." },
      { title: "Plumbing Trenches", desc: "Precise trenching for sewer and stormwater pipes." },
      { title: "Pool Surrounds", desc: "Works in confined pool areas where larger machines can't access." }
    ],
    faqs: [
      { q: "What is the minimum access width for the 0.8T mini excavator?", a: "The Yanmar SV08 tracks can retract to approximately 690mm, allowing it to pass through most standard residential gates and narrow side passages." },
      { q: "Do I need a licence to operate a 0.8T mini excavator in NSW?", a: "No licence is required to operate a mini excavator under 10 tonnes on private property in NSW. On a registered worksite, a High Risk Work Licence (HRWL) may be required." },
      { q: "How much does it cost to hire a 0.8T mini excavator?", a: "BuildHire's 0.8T Yanmar SV08 starts from $200/day (incl GST). Weekly rate is $1,000/week (incl GST). Delivery & collection is $150." }
    ]
  },
  {
    slug: "1t-mini-excavator",
    name: "1T Mini Excavator (Kubota U10-5)",
    shortName: "1T Mini Excavator",
    category: "Excavators",
    description: "Versatile 1-tonne mini excavator offering excellent digging power in confined spaces. Zero tail swing design.",
    longDescription: "The Kubota U10-5 combines compact dimensions with impressive digging capability. Its zero tail swing design means the rear of the machine stays within the track width, making it perfect for working in tight spaces.",
    price: "$200/day",
    priceNum: "200",
    weeklyPrice: "$1,000/week",
    delivery: "$150 Delivery & Collection",
    specs: [
      { label: "Operating Weight", value: "1,010 kg" },
      { label: "Max Digging Depth", value: "1,850 mm" },
      { label: "Track Width (retracted)", value: "750 mm" },
      { label: "Engine", value: "Kubota D722" }
    ],
    useCases: [
      { title: "Landscaping", desc: "Site preparation, levelling, and earthmoving for landscape construction." },
      { title: "Trenching", desc: "Fast and accurate trenching for utilities and drainage." },
      { title: "Site Clearing", desc: "Removing vegetation, topsoil, and debris from residential blocks." },
      { title: "Driveway Preparation", desc: "Excavating and levelling ground for new driveways." }
    ],
    faqs: [
      { q: "How much does it cost to hire a 1T mini excavator?", a: "BuildHire's 1T Kubota U10-5 starts from $200/day (incl GST). Weekly rate is $1,000/week (incl GST). Delivery & collection is $150." },
      { q: "What is zero tail swing?", a: "Zero tail swing means the rear counterweight of the excavator does not extend beyond the track width when rotating. This allows you to work safely right up against walls, fences, and other obstacles." },
      { q: "Do I need a licence to operate a 1T mini excavator in NSW?", a: "No licence is required to operate a mini excavator under 10 tonnes on private property in NSW." }
    ]
  },
  {
    slug: "1-7t-mini-excavator",
    name: "1.7T Mini Excavator (ViO17 Yanmar)",
    shortName: "1.7T Mini Excavator",
    category: "Excavators",
    description: "Our most popular mini excavator. Ideal for plumbing trenches, landscaping, and general earthmoving with true zero tail swing.",
    longDescription: "The Yanmar ViO17 is BuildHire's most hired machine — and for good reason. It delivers the perfect balance of compact dimensions and serious digging power, making it the go-to choice for residential contractors across NSW.",
    price: "$205/day",
    priceNum: "205",
    weeklyPrice: "$1,100/week",
    delivery: "$150 Delivery & Collection",
    specs: [
      { label: "Operating Weight", value: "1,710 kg" },
      { label: "Max Digging Depth", value: "2,500 mm" },
      { label: "Track Width (retracted)", value: "990 mm" },
      { label: "Engine", value: "Yanmar 3TNV76" }
    ],
    useCases: [
      { title: "Pool Excavation", desc: "Dig pool shells in residential backyards with precision and minimal disruption." },
      { title: "Deep Trench Digging", desc: "Lay sewer, stormwater, and electrical conduit at depth." },
      { title: "Retaining Walls", desc: "Excavate footings and prepare sites for retaining wall construction." },
      { title: "Demolition", desc: "Break up concrete slabs, driveways, and small structures." }
    ],
    faqs: [
      { q: "How much does it cost to hire a 1.7T mini excavator?", a: "BuildHire's 1.7T Yanmar ViO17 starts from $205/day (incl GST). Weekly rate is $1,100/week (incl GST). Delivery & collection is $150." },
      { q: "What is the difference between a 0.8T and 1.7T mini excavator?", a: "The 1.7T excavator is larger and more powerful, offering greater digging depth (up to 2,500mm) and bucket capacity. It handles heavier earthworks and deeper trenches while still fitting through most residential access points." },
      { q: "Do I need a licence to operate a 1.7T mini excavator in NSW?", a: "No licence is required to operate a mini excavator under 10 tonnes on private property in NSW. On a registered worksite, a High Risk Work Licence (HRWL) may be required." },
      { q: "Can the 1.7T excavator fit through a standard gate?", a: "Yes. The Yanmar ViO17 has retractable tracks that narrow to approximately 990mm, allowing it to pass through most standard residential gates and access points." }
    ]
  },
  {
    slug: "3-5t-excavator",
    name: "3.5T Excavator (ViO35-7 Yanmar)",
    shortName: "3.5T Excavator",
    category: "Excavators",
    description: "Mid-size excavator delivering serious power for larger residential projects, pool excavations, and commercial site prep.",
    longDescription: "When the job demands more than a mini excavator can deliver, the Yanmar ViO35-7 steps up. This mid-size machine is the workhorse of residential construction — powerful enough for deep pool excavations and large earthworks, yet compact enough to access most suburban sites.",
    price: "$340/day",
    priceNum: "340",
    weeklyPrice: "$1,550/week",
    delivery: "$220 Delivery & Collection",
    specs: [
      { label: "Operating Weight", value: "3,490 kg" },
      { label: "Max Digging Depth", value: "3,560 mm" },
      { label: "Track Width", value: "1,500 mm" },
      { label: "Engine", value: "Yanmar 3TNV88" }
    ],
    useCases: [
      { title: "Pool Excavation", desc: "Fast and efficient pool shell excavation for residential and commercial pools." },
      { title: "Large Earthworks", desc: "Site preparation, bulk earthmoving, and levelling for construction projects." },
      { title: "Commercial Trenching", desc: "Deep trenching for commercial utilities and drainage infrastructure." },
      { title: "Demolition", desc: "Structural demolition and concrete removal on larger sites." }
    ],
    faqs: [
      { q: "How much does it cost to hire a 3.5T excavator?", a: "BuildHire's 3.5T Yanmar ViO35-7 starts from $340/day (incl GST). Weekly rate is $1,550/week (incl GST). Delivery & collection is $220." },
      { q: "What size jobs is the 3.5T excavator suited for?", a: "The 3.5T is ideal for mid-to-large residential projects including pool excavations, large landscaping jobs, and commercial site preparation. It offers significantly more power and reach than a mini excavator." },
      { q: "Do I need a licence to operate a 3.5T excavator in NSW?", a: "On a registered worksite, a High Risk Work Licence (HRWL) for earthmoving equipment is required. On private property, no licence is needed." }
    ]
  },
  {
    slug: "5-5t-excavator",
    name: "5.5T Excavator (ViO55 Yanmar)",
    shortName: "5.5T Excavator",
    category: "Excavators",
    description: "Heavy-duty 5.5-tonne excavator built for serious earthmoving, deep trenching, and civil construction projects.",
    longDescription: "The Yanmar ViO55 is BuildHire's most powerful machine, designed for demanding civil and commercial construction projects. With exceptional digging depth and bucket capacity, it handles the jobs that smaller machines simply can't.",
    price: "$370/day",
    priceNum: "370",
    weeklyPrice: "$1,650/week",
    delivery: "Delivery & Collection* (third party transport — pricing on enquiry)",
    specs: [
      { label: "Operating Weight", value: "5,490 kg" },
      { label: "Max Digging Depth", value: "3,960 mm" },
      { label: "Track Width", value: "1,800 mm" },
      { label: "Engine", value: "Yanmar 4TNV98" }
    ],
    useCases: [
      { title: "Civil Construction", desc: "Road works, civil infrastructure, and large-scale earthmoving." },
      { title: "Deep Trenching", desc: "Deep utility trenches for commercial and civil projects." },
      { title: "Large Pool Excavation", desc: "Commercial pool and water feature excavation." },
      { title: "Site Clearing", desc: "Large-scale site clearing and preparation for major construction." }
    ],
    faqs: [
      { q: "How much does it cost to hire a 5.5T excavator?", a: "BuildHire's 5.5T Yanmar ViO55 starts from $370/day (incl GST). Weekly rate is $1,650/week (incl GST). Delivery is via third party transport — call 1300 157 882 for a quote." },
      { q: "What is the maximum digging depth of the 5.5T excavator?", a: "The Yanmar ViO55 has a maximum digging depth of approximately 3,960mm (3.96 metres), making it suitable for deep utility trenches and civil construction." },
      { q: "Do I need a licence to operate a 5.5T excavator in NSW?", a: "Yes. A High Risk Work Licence (HRWL) for earthmoving equipment is required to operate a 5.5T excavator on any registered worksite in NSW." }
    ]
  },
  {
    slug: "14-5t-excavator",
    name: "14.5T Excavator (Case CX145C)",
    shortName: "14.5T Excavator",
    category: "Excavators",
    description: "Large 14.5-tonne excavator for major civil, commercial, and infrastructure projects.",
    longDescription: "The Case CX145C is a high-performance 14.5-tonne excavator built for demanding civil and commercial construction. Exceptional digging depth and bucket capacity for major earthworks.",
    price: "$490/day",
    priceNum: "490",
    weeklyPrice: "$2,100/week",
    delivery: "Delivery & Collection* (third party transport \u2014 pricing on enquiry)",
    specs: [
      { label: "Operating Weight", value: "14,500 kg" },
      { label: "Max Digging Depth", value: "5,830 mm" },
      { label: "Bucket Capacity", value: "0.55 m\u00b3" },
      { label: "Engine", value: "Case F5HFL463A, 82 kW" }
    ],
    useCases: [
      { title: "Major Civil Construction", desc: "Road works, civil infrastructure, and large-scale earthmoving projects." },
      { title: "Deep Trenching", desc: "Deep utility trenches for commercial and civil infrastructure." },
      { title: "Large Pool & Dam Excavation", desc: "Commercial pool and water feature excavation at scale." },
      { title: "Bulk Earthworks", desc: "High-volume site preparation and bulk earthmoving for major construction." }
    ],
    faqs: [
      { q: "How much does it cost to hire a 14.5T excavator?", a: "BuildHire's 14.5T Case CX145C starts from $490/day. Weekly rate is $2,100/week (incl GST). Delivery is via third party transport \u2014 call 1300 157 882 for a quote." },
      { q: "What is the maximum digging depth of the 14.5T excavator?", a: "The Case CX145C has a maximum digging depth of 5,830mm, making it suitable for deep civil trenches and major earthworks." },
      { q: "Do I need a licence to operate a 14.5T excavator in NSW?", a: "Yes. A High Risk Work Licence (HRWL) for earthmoving equipment is required to operate a 14.5T excavator on any registered worksite in NSW." }
    ]
  },
  {
    slug: "23t-excavator",
    name: "23T Excavator (Sumitomo SH235X-6)",
    shortName: "23T Excavator",
    category: "Excavators",
    description: "Large 23-tonne excavator delivering exceptional digging depth and power for major civil, commercial, and infrastructure projects. Coming soon.",
    longDescription: "The Sumitomo SH235X-6 is a high-performance 23-tonne excavator engineered in Japan for demanding civil and commercial construction. Its minimum swing radius design maximises productivity on confined sites while delivering the digging depth and bucket capacity required for major earthworks. Coming soon — enquire for availability.",
    price: "$490/day",
    priceNum: "490",
    weeklyPrice: "$2,100/week",
    delivery: "Delivery & Collection* (third party transport — pricing on enquiry)",
    specs: [
      { label: "Operating Weight", value: "25,100 kg" },
      { label: "Max Digging Depth", value: "6,120 mm" },
      { label: "Bucket Capacity", value: "0.80 m\u00b3" },
      { label: "Engine", value: "ISUZU GI-4HK1X, 117.3 kW" }
    ],
    useCases: [
      { title: "Major Civil Construction", desc: "Road works, civil infrastructure, and large-scale earthmoving projects." },
      { title: "Deep Trenching", desc: "Deep utility trenches for commercial and civil infrastructure at 6+ metre depth." },
      { title: "Large Pool & Dam Excavation", desc: "Commercial pool, dam, and water feature excavation at scale." },
      { title: "Bulk Earthworks", desc: "High-volume site preparation and bulk earthmoving for major construction." }
    ],
    faqs: [
      { q: "How much does it cost to hire a 23T excavator?", a: "BuildHire's 23T Sumitomo SH235X-6 is available from $490/day (incl GST). Delivery is via third party transport — call 1300 157 882 for a delivery quote to your site." },
      { q: "What is the maximum digging depth of the 23T excavator?", a: "The Sumitomo SH235X-6 has a maximum digging depth of 6,120mm (6.12 metres) with the standard 2.94m arm, making it suitable for deep civil trenches and major earthworks." },
      { q: "Do I need a licence to operate a 23T excavator in NSW?", a: "Yes. A High Risk Work Licence (HRWL) for earthmoving equipment is required to operate a 23T excavator on any registered worksite in NSW." }
    ]
  },
  {
    slug: "tipper-truck",
    name: "Isuzu NQR450 Tipper Truck",
    shortName: "Tipper Truck",
    category: "Trucks",
    description: "Reliable Isuzu tipper truck for efficient material transport, soil removal, and site cleanups.",
    longDescription: "The Isuzu NQR450 tipper is the ideal companion to any excavation job. Efficiently remove spoil, deliver aggregate, or transport materials to and from site. Available for pick-up from our depot.",
    price: "$280/day",
    priceNum: "280",
    delivery: "Pick up only",
    specs: [
      { label: "Payload", value: "4,500 kg" },
      { label: "Body Volume", value: "6 m³" },
      { label: "Drive", value: "4x2" },
      { label: "Licence Required", value: "MR or above" }
    ],
    useCases: [
      { title: "Soil Removal", desc: "Remove excavated soil and spoil from residential and commercial sites." },
      { title: "Aggregate Delivery", desc: "Transport gravel, sand, and other aggregates to site." },
      { title: "Site Cleanup", desc: "Efficient removal of demolition waste and construction debris." },
      { title: "Landscaping", desc: "Deliver and remove materials for landscaping projects." }
    ],
    faqs: [
      { q: "What licence do I need to drive the tipper truck?", a: "A Medium Rigid (MR) or higher licence is required to operate the Isuzu NQR450 tipper truck." },
      { q: "How much does it cost to hire the tipper truck?", a: "BuildHire's Isuzu NQR450 tipper is available from $280/day (incl GST). Pick up only from our depot — call 1300 157 882 for the address." },
      { q: "What is the payload capacity of the tipper truck?", a: "The Isuzu NQR450 has a payload capacity of approximately 4,500 kg and a body volume of 6 cubic metres." }
    ]
  },
  {
    slug: "mini-dumper-700kg",
    name: "Cormidi C7X 700kg Petrol High Tip",
    shortName: "700kg Mini Dumper",
    category: "Dumpers",
    description: "Tracked mini dumper with high-tip capability. Perfect for moving soil and materials across difficult terrain.",
    longDescription: "The Cormidi C7X tracked mini dumper is the perfect companion for moving materials in tight spaces and across difficult terrain. Its high-tip capability allows it to tip directly into skips and trailers.",
    price: "$200/day",
    priceNum: "200",
    delivery: "$110 Delivery & Collection",
    specs: [
      { label: "Payload", value: "700 kg" },
      { label: "Skip Volume", value: "0.35 m³" },
      { label: "Track Width", value: "600 mm" },
      { label: "High Tip Height", value: "1,600 mm" }
    ],
    useCases: [
      { title: "Tight Access Material Moving", desc: "Move soil and materials in confined spaces where wheelbarrows are too slow." },
      { title: "Landscaping", desc: "Transport mulch, soil, and aggregate across garden areas." },
      { title: "Pool Excavation", desc: "Remove excavated material from pool sites with limited access." },
      { title: "Slope Work", desc: "Tracked drive handles slopes and uneven terrain with ease." }
    ],
    faqs: [
      { q: "How much does it cost to hire the mini dumper?", a: "BuildHire's Cormidi C7X mini dumper starts from $200/day (incl GST). Delivery & collection is $110 each way." },
      { q: "Can the mini dumper tip into a skip bin?", a: "Yes. The Cormidi C7X has a high-tip capability of 1,600mm, allowing it to tip directly into most standard skip bins and trailers." },
      { q: "Do I need a licence to operate the mini dumper?", a: "No licence is required to operate the mini dumper on private property in NSW." }
    ]
  }
];
