// Service area content — unique copy, case studies, FAQs and local context per location
// Used by src/pages/service-areas/[locationSlug].astro

export interface ServiceAreaContent {
  slug: string;
  name: string;
  region: string;
  state: string;
  suburbs: string[];
  intro: string;
  bodyParagraph1: string;
  bodyParagraph2: string;
  caseStudy: {
    client: string;
    projectType: string;
    equipment: string;
    outcome: string;
    quote: string;
  };
  bodyParagraph3: string;
  faqs: { q: string; a: string }[];
  nearbyAreas: string[];
  nearbyAreaSlugs: string[];
  coordinates: { lat: number; lng: number };
}

export const serviceAreaContent: ServiceAreaContent[] = [
  {
    slug: "sydney",
    name: "Sydney",
    region: "Sydney Metro",
    state: "NSW",
    suburbs: ["CBD", "Surry Hills", "Newtown", "Redfern", "Alexandria", "Zetland", "Waterloo", "Pyrmont"],
    intro: "BuildHire is Sydney's most trusted dry hire excavator company — delivering late-model Yanmar and Sumitomo machines across the entire Sydney metro area with next-day arrival guaranteed.",
    bodyParagraph1: "Sydney's construction and landscaping market moves fast. Whether you're a pool builder in the Eastern Suburbs, a plumber running drainage in the Inner West, or a builder pouring footings in the CBD fringe, downtime from unreliable equipment hire is not an option. BuildHire was built specifically for Sydney's pace — we own our fleet outright, maintain every machine in-house, and guarantee next-day delivery to any Sydney suburb when you book by 12pm.",
    bodyParagraph2: "Our Sydney fleet covers every scale of project. The 0.8T and 1T mini excavators are ideal for tight residential access — narrow side gates, established gardens, and inner-city backyards where a full-size machine simply won't fit. The 3.5T and 5.5T excavators handle the heavier work: pool excavations, retaining walls, drainage trenches, and site clearing. For major civil and commercial projects, our 14.5T and 23T Sumitomo machines deliver the power and precision that large-scale Sydney builds demand.",
    caseStudy: {
      client: "FW Building",
      projectType: "Residential construction — footing excavation and site preparation",
      equipment: "3.5T Excavator (ViO35-7 Yanmar)",
      outcome: "Completed a multi-lot residential development across several Sydney sites on schedule, with machines delivered and collected without disruption to the build programme.",
      quote: "We have used Build Hire on several occasions and couldn't be happier with the service. Their machines are unbelievable — always on site when they say, always in perfect condition."
    },
    bodyParagraph3: "Transparent pricing is a BuildHire non-negotiable. Every quote includes delivery, collection, and fuel — no hidden fees, no surprises on the invoice. Our online booking system gives you an instant price in under 60 seconds, and our team is available via WhatsApp for same-day enquiries. For Sydney operators who need reliable equipment hire without the runaround, BuildHire is the answer.",
    faqs: [
      { q: "Do you deliver excavators to all Sydney suburbs?", a: "Yes — BuildHire delivers to all Sydney metro suburbs, from the CBD and inner suburbs to Western Sydney, the Northern Beaches, Sutherland Shire, and beyond. Book by 12pm for guaranteed next-day delivery." },
      { q: "What is the minimum hire period for excavator hire in Sydney?", a: "Our minimum hire period is one day. We also offer weekly and monthly rates that provide significant savings for longer projects across Sydney." },
      { q: "Do I need a licence to operate a mini excavator in Sydney?", a: "No licence is required to operate excavators under 10 tonnes in NSW. Our team provides a full machine induction on delivery so you're confident and safe from the first dig." }
    ],
    nearbyAreas: ["Parramatta", "Inner West", "Eastern Suburbs", "North Sydney", "Sutherland"],
    nearbyAreaSlugs: ["parramatta", "inner-west", "eastern-suburbs", "north-sydney", "sutherland"],
    coordinates: { lat: -33.8688, lng: 151.2093 }
  },
  {
    slug: "parramatta",
    name: "Parramatta",
    region: "Western Sydney",
    state: "NSW",
    suburbs: ["Parramatta", "North Parramatta", "Westmead", "Harris Park", "Rosehill", "Woodville", "Granville", "South Granville"],
    intro: "BuildHire delivers excavators and construction equipment to Parramatta and all of Western Sydney — next-day arrival, transparent pricing, and machines maintained to the highest standard.",
    bodyParagraph1: "Parramatta is the engine room of Western Sydney's construction boom. From high-density residential development along Church Street and Church Street North to infrastructure upgrades around Westmead and the Parramatta Light Rail corridor, demand for reliable plant hire has never been higher. BuildHire services Parramatta and the surrounding Western Sydney suburbs with a full fleet of dry hire excavators, mini dumpers, and tipper trucks — all owned, maintained, and delivered by our own team.",
    bodyParagraph2: "For residential builders and landscapers working in Parramatta's established suburbs, our 1T and 1.7T mini excavators are the go-to choice — compact enough for side access and residential lots, powerful enough to handle pool excavations, retaining walls, and drainage work. Commercial builders and civil contractors in the Parramatta CBD and Westmead precinct rely on our 5.5T, 14.5T, and 23T machines for bulk earthworks, footing excavations, and site preparation on larger projects.",
    caseStudy: {
      client: "Almighty Fencing",
      projectType: "Post-hole excavation and site preparation across multiple Western Sydney residential projects",
      equipment: "1.7T Mini Excavator (ViO17 Yanmar)",
      outcome: "Completed fencing installations across Parramatta and surrounding suburbs on schedule, with consistent machine performance across all sites.",
      quote: "We've used Build Hire a number of times now and they've been solid every single job. The machines are top quality and performance is always consistent — exactly what we need when we're running multiple jobs across Western Sydney."
    },
    bodyParagraph3: "BuildHire's delivery zone covers all of Parramatta LGA and the broader Western Sydney region including Granville, Merrylands, Wentworthville, Auburn, and Woodville. Book online for an instant price, or WhatsApp our team for a same-day quote. With next-day delivery guaranteed when you book by 12pm, BuildHire keeps your Parramatta project moving without delays.",
    faqs: [
      { q: "Do you deliver excavators to Parramatta and Western Sydney?", a: "Yes — BuildHire delivers to all Parramatta suburbs and the wider Western Sydney region including Granville, Merrylands, Wentworthville, Auburn, and Woodville. Next-day delivery is guaranteed when you book by 12pm." },
      { q: "What excavator sizes are available for hire in Parramatta?", a: "We offer excavators from 0.8T to 23T in Parramatta. The 1T and 1.7T mini excavators are popular for residential work, while the 3.5T to 5.5T range suits pool builds and drainage. Our 14.5T and 23T machines handle large commercial and civil projects." },
      { q: "How quickly can BuildHire deliver to Parramatta?", a: "Book by 12pm and your machine will be on site the next business day. For urgent requirements, contact our team via WhatsApp and we'll do our best to accommodate same-day delivery." }
    ],
    nearbyAreas: ["Blacktown", "Merrylands", "Granville", "Auburn", "Seven Hills"],
    nearbyAreaSlugs: ["blacktown", "merrylands", "granville", "auburn", "seven-hills"],
    coordinates: { lat: -33.8150, lng: 151.0011 }
  },
  {
    slug: "penrith",
    name: "Penrith",
    region: "Western Sydney",
    state: "NSW",
    suburbs: ["Penrith", "Kingswood", "St Marys", "Werrington", "Emu Plains", "Glenmore Park", "Jamisontown", "South Penrith"],
    intro: "BuildHire provides next-day excavator hire to Penrith and the greater Western Sydney region — late-model machines, transparent pricing, and a team that understands the demands of construction in Greater Western Sydney.",
    bodyParagraph1: "Penrith's construction sector is one of the fastest-growing in NSW, driven by the Western Sydney Airport at Badgerys Creek, the Penrith CBD renewal, and the ongoing residential expansion across Glenmore Park, Jordan Springs, and the Penrith Lakes precinct. BuildHire has been the trusted dry hire partner for Penrith builders, landscapers, plumbers, and civil contractors who need reliable equipment on site without the overhead of ownership.",
    bodyParagraph2: "The terrain around Penrith presents unique challenges — from the clay-heavy soils of the Nepean floodplain to the rocky ground common in Emu Plains and the Blue Mountains foothills. Our fleet is selected and maintained to handle these conditions. The 3.5T and 5.5T Yanmar excavators are the workhorse choice for Penrith residential builds, while the 14.5T and 23T Sumitomo machines are built for the heavy earthworks that large-scale Western Sydney infrastructure projects demand.",
    caseStudy: {
      client: "Mac Developments",
      projectType: "Multi-lot residential development — bulk earthworks and footing excavation",
      equipment: "5.5T Excavator (ViO55 Yanmar) and 3.5T Excavator (ViO35-7 Yanmar)",
      outcome: "Delivered machines to multiple Penrith-area sites simultaneously, keeping the development programme on schedule across all lots.",
      quote: "We've worked with Build Hire across a number of projects and they've been nothing but consistent. Their machines are new, well-maintained, and always arrive on time — that reliability is everything when you're running a development programme."
    },
    bodyParagraph3: "BuildHire delivers to all Penrith suburbs including Kingswood, St Marys, Werrington, Emu Plains, Glenmore Park, and Jamisontown. Our online booking gives you an instant price in under 60 seconds — no waiting for a callback, no hidden fees. For Penrith operators who need equipment hire that keeps pace with Western Sydney's growth, BuildHire is the call to make.",
    faqs: [
      { q: "Do you deliver excavators to Penrith and the Blue Mountains?", a: "Yes — BuildHire delivers to Penrith and all surrounding suburbs including Kingswood, St Marys, Emu Plains, and Glenmore Park. We also service the Blue Mountains and Hawkesbury regions." },
      { q: "What is the best excavator size for residential work in Penrith?", a: "For most Penrith residential projects — pools, retaining walls, drainage, footings — the 3.5T or 5.5T Yanmar excavator is the ideal choice. For tight access, the 1T or 1.7T mini excavator is the right fit." },
      { q: "Can I hire an excavator in Penrith for just one day?", a: "Yes — our minimum hire period is one day. We also offer weekly rates that provide better value for projects running 5+ days." }
    ],
    nearbyAreas: ["Blacktown", "Windsor", "Richmond", "Blue Mountains", "Liverpool"],
    nearbyAreaSlugs: ["blacktown", "windsor", "richmond", "blue-mountains", "liverpool"],
    coordinates: { lat: -33.7510, lng: 150.6942 }
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    region: "South Western Sydney",
    state: "NSW",
    suburbs: ["Liverpool", "Moorebank", "Casula", "Prestons", "Warwick Farm", "Chipping Norton", "Miller", "Heckenberg"],
    intro: "BuildHire delivers excavators and construction equipment to Liverpool and South Western Sydney — owned fleet, next-day delivery, and pricing that's clear from the first click.",
    bodyParagraph1: "Liverpool is South Western Sydney's commercial and construction hub, with major residential development underway across Moorebank, Casula, Prestons, and the broader Liverpool LGA. The area's mix of established residential streets, new land releases, and industrial precincts creates demand for excavators across a wide range of project types — from pool builds and landscaping in established suburbs to bulk earthworks on new estates and drainage work in the Moorebank Intermodal precinct.",
    bodyParagraph2: "BuildHire's Liverpool delivery zone covers the full LGA and extends to Fairfield, Cabramatta, Chipping Norton, and Warwick Farm. Our fleet includes the compact 0.8T and 1T mini excavators for tight residential access, the versatile 3.5T and 5.5T machines for mid-size projects, and the heavy 14.5T and 23T Sumitomo excavators for civil and commercial earthworks. Every machine is owned by BuildHire, maintained in-house, and delivered by our own drivers — not subcontracted.",
    caseStudy: {
      client: "FW Building",
      projectType: "Drainage and footing excavation across South Western Sydney residential projects",
      equipment: "3.5T Excavator (ViO35-7 Yanmar)",
      outcome: "Multiple Liverpool-area projects completed on schedule with consistent machine performance and reliable delivery.",
      quote: "We have used Build Hire on several occasions and couldn't be happier with the service. Their machines are unbelievable — always on site when they say, always in perfect condition."
    },
    bodyParagraph3: "Booking excavator hire in Liverpool is straightforward with BuildHire. Get an instant online price in under 60 seconds, book your dates, and your machine will be on site the next business day when you book by 12pm. Our team is also available via WhatsApp for same-day enquiries and urgent requirements. No hidden fees, no fuel surcharges, no surprises.",
    faqs: [
      { q: "Do you deliver excavators to Liverpool and South Western Sydney?", a: "Yes — BuildHire delivers to Liverpool and all surrounding suburbs including Moorebank, Casula, Prestons, Fairfield, Cabramatta, and Warwick Farm." },
      { q: "What excavator sizes are best for Liverpool residential projects?", a: "The 3.5T Yanmar is the most popular choice for Liverpool residential work — pool excavations, retaining walls, drainage. For tight access, the 1T or 1.7T mini excavator is ideal." },
      { q: "How do I get a quote for excavator hire in Liverpool?", a: "Use our online booking tool for an instant price in under 60 seconds, or WhatsApp our team for a personalised quote. Prices include delivery, collection, and GST — no hidden extras." }
    ],
    nearbyAreas: ["Campbelltown", "Fairfield", "Bankstown", "Cabramatta", "Casula"],
    nearbyAreaSlugs: ["campbelltown", "fairfield", "bankstown", "cabramatta", "narellan"],
    coordinates: { lat: -33.9200, lng: 150.9240 }
  },
  {
    slug: "campbelltown",
    name: "Campbelltown",
    region: "South Western Sydney",
    state: "NSW",
    suburbs: ["Campbelltown", "Macquarie Fields", "Ingleburn", "Minto", "Leumeah", "Bradbury", "Airds", "Ruse"],
    intro: "BuildHire delivers excavators and equipment to Campbelltown and the Macarthur region — next-day delivery, late-model machines, and pricing that's always transparent.",
    bodyParagraph1: "Campbelltown and the Macarthur region are at the centre of South Western Sydney's most significant residential and infrastructure growth. From the new estates of Oran Park and Gregory Hills to the established suburbs of Minto, Ingleburn, and Macquarie Fields, construction activity is constant — and the demand for reliable, well-maintained plant hire is high. BuildHire has built a strong reputation in the Campbelltown area by delivering exactly what we promise: late-model machines, on time, at a fair price.",
    bodyParagraph2: "The Campbelltown area's geology — predominantly shale and clay — requires excavators with the torque and bucket force to handle tough ground conditions. Our Yanmar ViO35 and ViO55 machines are well-suited to the conditions common across Campbelltown, Minto, and Ingleburn, while the 14.5T and 23T Sumitomo machines handle the heavy earthworks required on larger Macarthur developments. For residential landscaping and pool builds in established Campbelltown suburbs, the compact 1T and 1.7T mini excavators provide the access and precision needed in tight residential lots.",
    caseStudy: {
      client: "Almighty Fencing",
      projectType: "Post-hole excavation and site preparation across Campbelltown residential projects",
      equipment: "1.7T Mini Excavator (ViO17 Yanmar)",
      outcome: "Multiple Campbelltown-area fencing installations completed efficiently with reliable machine performance throughout.",
      quote: "We've used Build Hire a number of times now and they've been solid every single job. The machines are top quality and performance is always consistent."
    },
    bodyParagraph3: "BuildHire delivers to all Campbelltown suburbs and the broader Macarthur region including Picton, Appin, Camden, and Narellan. Book online for an instant price or WhatsApp our team for a same-day quote. With next-day delivery guaranteed when you book by 12pm, BuildHire keeps your Campbelltown project on schedule.",
    faqs: [
      { q: "Do you deliver excavators to Campbelltown and the Macarthur region?", a: "Yes — BuildHire delivers to Campbelltown and all surrounding areas including Minto, Ingleburn, Macquarie Fields, Oran Park, Gregory Hills, Camden, and Narellan." },
      { q: "What excavator is best for the clay and shale soils around Campbelltown?", a: "The 3.5T Yanmar ViO35 and 5.5T Yanmar ViO55 are the best choices for Campbelltown's soil conditions — both have the bucket force and torque to handle heavy clay and shale efficiently." },
      { q: "Can I hire an excavator in Campbelltown for a weekend?", a: "Yes — we offer weekend hire. Book by 12pm Friday for Saturday delivery, or contact our team via WhatsApp to arrange weekend collection." }
    ],
    nearbyAreas: ["Liverpool", "Minto", "Camden", "Narellan", "Picton"],
    nearbyAreaSlugs: ["liverpool", "minto", "camden", "narellan", "picton"],
    coordinates: { lat: -34.0658, lng: 150.8143 }
  },
  {
    slug: "blacktown",
    name: "Blacktown",
    region: "Western Sydney",
    state: "NSW",
    suburbs: ["Blacktown", "Seven Hills", "Kings Langley", "Quakers Hill", "Stanhope Gardens", "Marayong", "Lalor Park", "Kings Park"],
    intro: "BuildHire delivers excavators and construction equipment to Blacktown and the greater Western Sydney region — owned fleet, next-day delivery, and no hidden fees.",
    bodyParagraph1: "Blacktown is one of the most active construction markets in NSW. The LGA spans from the established suburbs of Seven Hills and Kings Langley through to the rapidly developing precincts of Stanhope Gardens, Quakers Hill, and the North West Growth Area. BuildHire has been the dry hire partner of choice for Blacktown builders, landscapers, pool contractors, and civil operators who need equipment that shows up on time and performs without fail.",
    bodyParagraph2: "The diversity of project types across Blacktown LGA means our full fleet gets used here regularly. Compact 1T and 1.7T mini excavators handle the residential landscaping and pool work common in established Blacktown suburbs. The 3.5T and 5.5T Yanmar machines are the backbone of the residential construction trade — footings, drainage, retaining walls, and site clearing. For the large-scale civil and infrastructure projects across the North West Growth Area, our 14.5T and 23T Sumitomo excavators deliver the capacity and reliability that major projects demand.",
    caseStudy: {
      client: "Mac Developments",
      projectType: "Residential subdivision — bulk earthworks and drainage",
      equipment: "5.5T Excavator (ViO55 Yanmar)",
      outcome: "Delivered machines to multiple Blacktown-area sites on schedule, supporting a residential subdivision programme across several stages.",
      quote: "We've worked with Build Hire across a number of projects and they've been nothing but consistent. Their machines are new, well-maintained, and always arrive on time."
    },
    bodyParagraph3: "BuildHire delivers to all Blacktown suburbs including Seven Hills, Kings Langley, Quakers Hill, Stanhope Gardens, Marayong, Lalor Park, and Kings Park. Get an instant online price in under 60 seconds, or WhatsApp our team for urgent requirements. Next-day delivery is guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Blacktown and surrounding suburbs?", a: "Yes — BuildHire delivers to all Blacktown suburbs including Seven Hills, Kings Langley, Quakers Hill, Stanhope Gardens, and Marayong. We also service the broader Hills District and North West Sydney." },
      { q: "What is the best excavator for residential work in Blacktown?", a: "The 3.5T Yanmar ViO35 is the most popular choice for Blacktown residential projects — pools, footings, drainage, and retaining walls. For tight access, the 1T or 1.7T mini excavator is ideal." },
      { q: "How do I book excavator hire in Blacktown?", a: "Book online at buildhire.com.au for an instant price in under 60 seconds, or WhatsApp our team. Book by 12pm for next-day delivery to Blacktown." }
    ],
    nearbyAreas: ["Parramatta", "Castle Hill", "Seven Hills", "Baulkham Hills", "Rouse Hill"],
    nearbyAreaSlugs: ["parramatta", "castle-hill", "seven-hills", "baulkham-hills", "rouse-hill"],
    coordinates: { lat: -33.7700, lng: 150.9060 }
  },
  {
    slug: "castle-hill",
    name: "Castle Hill",
    region: "Hills District",
    state: "NSW",
    suburbs: ["Castle Hill", "Baulkham Hills", "Norwest", "Bella Vista", "Kellyville", "Rouse Hill", "Winston Hills", "Pennant Hills"],
    intro: "BuildHire delivers excavators and construction equipment to Castle Hill and the Hills District — late-model machines, next-day delivery, and pricing that's always clear.",
    bodyParagraph1: "The Hills District is one of Sydney's most consistently active residential construction markets. Castle Hill, Baulkham Hills, Norwest, Bella Vista, and Kellyville are home to a high concentration of pool builders, landscapers, residential builders, and renovation contractors — all of whom need reliable plant hire that keeps pace with the Hills District's premium expectations. BuildHire has built a strong reputation in this area by delivering late-model, well-maintained machines on time, every time.",
    bodyParagraph2: "The Hills District's residential lots — typically larger than inner-Sydney properties — are well-suited to the 3.5T and 5.5T Yanmar excavators, which provide the reach and bucket capacity needed for pool excavations, retaining walls, and drainage work on Hills District blocks. For projects with tight access or established gardens, the 1T and 1.7T mini excavators are the right choice. Our mini dumpers are also popular in the Hills District for spoil removal on pool and landscaping projects where truck access is limited.",
    caseStudy: {
      client: "FW Building",
      projectType: "Pool excavation and retaining wall construction in Castle Hill residential project",
      equipment: "3.5T Excavator (ViO35-7 Yanmar) and Mini Dumper",
      outcome: "Pool excavation and retaining wall completed on schedule, with spoil removed efficiently using the mini dumper combination.",
      quote: "We have used Build Hire on several occasions and couldn't be happier with the service. Their machines are unbelievable — always on site when they say, always in perfect condition."
    },
    bodyParagraph3: "BuildHire delivers to all Hills District suburbs including Castle Hill, Baulkham Hills, Norwest, Bella Vista, Kellyville, Rouse Hill, Winston Hills, and Pennant Hills. Book online for an instant price or WhatsApp our team. Next-day delivery is guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Castle Hill and the Hills District?", a: "Yes — BuildHire delivers to all Hills District suburbs including Castle Hill, Baulkham Hills, Norwest, Bella Vista, Kellyville, Rouse Hill, and Pennant Hills." },
      { q: "What excavator is best for pool excavation in the Hills District?", a: "The 3.5T Yanmar ViO35 is the most popular choice for Hills District pool excavations — it has the reach and bucket capacity for most residential pools while remaining manoeuvrable on standard residential lots." },
      { q: "Do you also hire mini dumpers in Castle Hill?", a: "Yes — our mini dumpers are available alongside excavator hire and are ideal for spoil removal on Hills District pool and landscaping projects where truck access is restricted." }
    ],
    nearbyAreas: ["Blacktown", "Baulkham Hills", "Kellyville", "Rouse Hill", "Hornsby"],
    nearbyAreaSlugs: ["blacktown", "baulkham-hills", "kellyville", "rouse-hill", "hornsby"],
    coordinates: { lat: -33.7300, lng: 151.0040 }
  },
  {
    slug: "hornsby",
    name: "Hornsby",
    region: "Upper North Shore",
    state: "NSW",
    suburbs: ["Hornsby", "Waitara", "Normanhurst", "Thornleigh", "Pennant Hills", "Beecroft", "Cheltenham", "Asquith"],
    intro: "BuildHire delivers excavators and construction equipment to Hornsby and the Upper North Shore — late-model Yanmar machines, next-day delivery, and transparent pricing.",
    bodyParagraph1: "Hornsby and the Upper North Shore present some of Sydney's most challenging excavation conditions — steep blocks, sandstone bedrock, and established trees are common across the area's residential lots. BuildHire's fleet is selected and maintained to handle these conditions, and our team understands the specific requirements of Upper North Shore residential projects. Whether you're excavating a pool on a sloping Hornsby block, installing drainage in Pennant Hills, or preparing footings in Beecroft, we have the right machine for the job.",
    bodyParagraph2: "The 1.7T and 3.5T Yanmar mini excavators are the most popular choices for Hornsby residential work — compact enough to navigate the tight access common on Upper North Shore properties, with the reach and bucket force needed for sandstone and clay conditions. For larger projects, the 5.5T Yanmar provides additional capacity without sacrificing the precision needed on sloping or constrained sites. Our mini dumpers are also in high demand in Hornsby for spoil removal where truck access is limited by steep driveways or narrow streets.",
    caseStudy: {
      client: "Almighty Fencing",
      projectType: "Post-hole excavation and retaining wall preparation across Upper North Shore residential projects",
      equipment: "1.7T Mini Excavator (ViO17 Yanmar)",
      outcome: "Multiple Hornsby-area projects completed efficiently, with the compact machine navigating tight residential access across the Upper North Shore.",
      quote: "We've used Build Hire a number of times now and they've been solid every single job. The machines are top quality and performance is always consistent."
    },
    bodyParagraph3: "BuildHire delivers to all Hornsby suburbs and the broader Upper North Shore including Waitara, Normanhurst, Thornleigh, Pennant Hills, Beecroft, Cheltenham, and Asquith. Get an instant online price in under 60 seconds, or WhatsApp our team for a same-day quote. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Hornsby and the Upper North Shore?", a: "Yes — BuildHire delivers to Hornsby and all Upper North Shore suburbs including Waitara, Normanhurst, Thornleigh, Pennant Hills, Beecroft, and Cheltenham." },
      { q: "What excavator is best for sandstone and steep blocks in Hornsby?", a: "The 1.7T Yanmar ViO17 and 3.5T Yanmar ViO35 are the best choices for Hornsby's sandstone and sloping block conditions — both have the precision and bucket force needed for these challenging sites." },
      { q: "Can you deliver a mini dumper alongside an excavator in Hornsby?", a: "Yes — we regularly deliver excavator and mini dumper combinations to Hornsby and Upper North Shore sites where spoil removal by truck is not practical due to steep or narrow access." }
    ],
    nearbyAreas: ["Castle Hill", "Pymble", "Gordon", "Turramurra", "Chatswood"],
    nearbyAreaSlugs: ["castle-hill", "pymble", "gordon", "turramurra", "chatswood"],
    coordinates: { lat: -33.7030, lng: 151.0990 }
  },
  {
    slug: "sutherland",
    name: "Sutherland",
    region: "Sutherland Shire",
    state: "NSW",
    suburbs: ["Sutherland", "Jannali", "Loftus", "Kirrawee", "Gymea", "Miranda", "Caringbah", "Cronulla"],
    intro: "BuildHire delivers excavators and construction equipment to Sutherland Shire — owned fleet, next-day delivery, and pricing that's always clear from the first quote.",
    bodyParagraph1: "Sutherland Shire is one of Sydney's most active residential renovation and construction markets. The area's mix of established homes on generous blocks, coastal properties, and new infill development creates consistent demand for reliable excavator hire across pool builds, landscaping, drainage, and residential construction. BuildHire has become the trusted dry hire partner for Sutherland Shire builders, pool contractors, and landscapers who need equipment that performs without fail.",
    bodyParagraph2: "The Sutherland Shire's terrain — sandstone, clay, and coastal sand depending on the suburb — requires a versatile fleet. Our 1T and 1.7T mini excavators handle the tight access common in established Sutherland Shire residential lots, while the 3.5T and 5.5T Yanmar machines are the workhorses for pool excavations, retaining walls, and drainage work. For coastal properties in Cronulla and Caringbah, our team understands the specific challenges of working near the water table and in sandy soils.",
    caseStudy: {
      client: "Mac Developments",
      projectType: "Residential renovation — pool excavation and retaining wall construction in Sutherland Shire",
      equipment: "3.5T Excavator (ViO35-7 Yanmar)",
      outcome: "Pool excavation and retaining wall completed on schedule, with the machine performing consistently in the Shire's mixed soil conditions.",
      quote: "We've worked with Build Hire across a number of projects and they've been nothing but consistent. Their machines are new, well-maintained, and always arrive on time."
    },
    bodyParagraph3: "BuildHire delivers to all Sutherland Shire suburbs including Jannali, Loftus, Kirrawee, Gymea, Miranda, Caringbah, Cronulla, and Engadine. Book online for an instant price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Sutherland Shire?", a: "Yes — BuildHire delivers to all Sutherland Shire suburbs including Sutherland, Miranda, Caringbah, Cronulla, Engadine, Kirrawee, and Gymea." },
      { q: "What excavator is best for pool excavation in the Sutherland Shire?", a: "The 3.5T Yanmar ViO35 is the most popular choice for Sutherland Shire pool excavations — it handles the area's sandstone and clay conditions well and fits most residential lots." },
      { q: "Do you deliver to Cronulla and coastal Sutherland Shire suburbs?", a: "Yes — we deliver to all coastal Sutherland Shire suburbs including Cronulla, Caringbah, and Gymea. Our team is familiar with the specific challenges of coastal and sandy-soil sites." }
    ],
    nearbyAreas: ["Cronulla", "Miranda", "Caringbah", "St George", "Hurstville"],
    nearbyAreaSlugs: ["cronulla", "miranda", "caringbah", "st-george", "hurstville"],
    coordinates: { lat: -34.0300, lng: 151.0560 }
  },
  {
    slug: "chatswood",
    name: "Chatswood",
    region: "Lower North Shore",
    state: "NSW",
    suburbs: ["Chatswood", "Willoughby", "Artarmon", "St Leonards", "Crows Nest", "Lane Cove", "Lindfield", "Roseville"],
    intro: "BuildHire delivers excavators and construction equipment to Chatswood and the Lower North Shore — late-model machines, next-day delivery, and pricing that's always transparent.",
    bodyParagraph1: "Chatswood and the Lower North Shore represent some of Sydney's most premium residential and mixed-use construction markets. From the high-density apartment and commercial development along the Chatswood CBD corridor to the established residential renovation market in Willoughby, Artarmon, and Lane Cove, demand for reliable, professional plant hire is constant. BuildHire delivers to the Lower North Shore with the same next-day reliability and transparent pricing that has made us Sydney's most trusted dry hire operator.",
    bodyParagraph2: "Lower North Shore projects often involve constrained sites — narrow streets, established gardens, and tight residential lots where machine selection is critical. Our 0.8T and 1T mini excavators are specifically suited to these conditions, providing the access and precision needed for inner-suburban residential work. For larger projects — basement excavations, retaining walls, and drainage upgrades — the 3.5T and 5.5T Yanmar machines deliver the capacity needed while remaining manoeuvrable on Lower North Shore sites.",
    caseStudy: {
      client: "FW Building",
      projectType: "Basement excavation and drainage upgrade on a Lower North Shore residential project",
      equipment: "3.5T Excavator (ViO35-7 Yanmar)",
      outcome: "Basement excavation completed efficiently on a constrained Lower North Shore site, with the machine performing precisely in tight conditions.",
      quote: "We have used Build Hire on several occasions and couldn't be happier with the service. Their machines are unbelievable — always on site when they say, always in perfect condition."
    },
    bodyParagraph3: "BuildHire delivers to all Lower North Shore suburbs including Chatswood, Willoughby, Artarmon, St Leonards, Crows Nest, Lane Cove, Lindfield, and Roseville. Get an instant online price in under 60 seconds, or WhatsApp our team for a same-day quote. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Chatswood and the Lower North Shore?", a: "Yes — BuildHire delivers to all Lower North Shore suburbs including Chatswood, Willoughby, Artarmon, St Leonards, Crows Nest, and Lane Cove." },
      { q: "What is the best excavator for tight residential sites in Chatswood?", a: "The 0.8T and 1T mini excavators are ideal for tight Lower North Shore residential sites. For larger projects, the 1.7T or 3.5T Yanmar provides more capacity while still fitting through standard residential access." },
      { q: "Do you deliver to North Sydney and Crows Nest?", a: "Yes — North Sydney, Crows Nest, St Leonards, and Artarmon are all within our Lower North Shore delivery zone. Next-day delivery guaranteed when you book by 12pm." }
    ],
    nearbyAreas: ["North Sydney", "Lane Cove", "Mosman", "Hornsby", "Ryde"],
    nearbyAreaSlugs: ["north-sydney", "lane-cove", "mosman", "hornsby", "ryde"],
    coordinates: { lat: -33.7980, lng: 151.1810 }
  },
  {
    slug: "st-george",
    name: "St George",
    region: "Southern Sydney",
    state: "NSW",
    suburbs: ["Kogarah", "Hurstville", "Rockdale", "Bexley", "Penshurst", "Mortdale", "Oatley", "Beverly Hills"],
    intro: "BuildHire delivers excavators and construction equipment to the St George area and Southern Sydney — next-day delivery, late-model machines, and pricing that's always upfront.",
    bodyParagraph1: "The St George area — spanning Kogarah, Hurstville, Rockdale, and the surrounding Southern Sydney suburbs — is one of the most densely developed residential markets in Sydney. The area's established housing stock, combined with significant infill development and unit construction, creates consistent demand for reliable excavator hire across drainage upgrades, pool builds, retaining walls, and residential construction. BuildHire services the St George area with the same next-day reliability and transparent pricing that has made us Sydney's most trusted dry hire operator.",
    bodyParagraph2: "St George's residential lots are typically compact by Sydney standards, which means machine selection is critical. Our 0.8T and 1T mini excavators are purpose-built for tight urban residential access — narrow side gates, established gardens, and constrained backyards where a full-size machine simply won't fit. For pool excavations and larger drainage projects in Hurstville, Rockdale, and Bexley, the 1.7T and 3.5T Yanmar machines provide the right balance of capacity and manoeuvrability. Our mini dumpers are also popular in the St George area for spoil removal where truck access is restricted.",
    caseStudy: {
      client: "Almighty Fencing",
      projectType: "Post-hole excavation and site preparation across St George residential projects",
      equipment: "1T Mini Excavator (Kubota U10-5)",
      outcome: "Multiple St George area fencing installations completed efficiently, with the compact machine navigating tight residential access throughout the area.",
      quote: "We've used Build Hire a number of times now and they've been solid every single job. The machines are top quality and performance is always consistent."
    },
    bodyParagraph3: "BuildHire delivers to all St George suburbs including Kogarah, Hurstville, Rockdale, Bexley, Penshurst, Mortdale, Oatley, and Beverly Hills. Get an instant online price in under 60 seconds, or WhatsApp our team for a same-day quote. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Kogarah, Hurstville, and Rockdale?", a: "Yes — BuildHire delivers to all St George suburbs including Kogarah, Hurstville, Rockdale, Bexley, Penshurst, Mortdale, and Oatley." },
      { q: "What is the best excavator for tight residential sites in the St George area?", a: "The 0.8T and 1T mini excavators are ideal for the compact residential lots common in the St George area. For pool excavations and larger drainage work, the 1.7T or 3.5T Yanmar is the right choice." },
      { q: "Do you also hire mini dumpers in the St George area?", a: "Yes — mini dumpers are available alongside excavator hire and are popular in the St George area for spoil removal where truck access is restricted by tight residential access." }
    ],
    nearbyAreas: ["Sutherland", "Hurstville", "Kogarah", "Rockdale", "Bankstown"],
    nearbyAreaSlugs: ["sutherland", "hurstville", "kogarah", "rockdale", "bankstown"],
    coordinates: { lat: -33.9700, lng: 151.1200 }
  },
  {
    slug: "newcastle",
    name: "Newcastle",
    region: "Hunter",
    state: "NSW",
    suburbs: ["Newcastle CBD", "Hamilton", "Mayfield", "Broadmeadow", "Jesmond", "Kotara", "Charlestown", "Merewether"],
    intro: "BuildHire delivers excavators and construction equipment to Newcastle and the Hunter region — late-model machines, transparent pricing, and a team that understands regional NSW construction.",
    bodyParagraph1: "Newcastle is the Hunter region's construction and infrastructure hub, with significant residential development, commercial construction, and civil infrastructure projects underway across the city and its surrounds. From the Newcastle CBD revitalisation to the residential growth corridors of Charlestown, Kotara, and Jesmond, demand for reliable plant hire is strong. BuildHire delivers to Newcastle with the same standards of equipment quality and service reliability that Sydney operators have come to expect.",
    bodyParagraph2: "Newcastle's construction market spans a wide range of project types — from residential pool builds and landscaping in established suburbs to major civil and infrastructure projects in the Port of Newcastle and Hunter Valley precincts. Our fleet covers this full range: compact 1T and 1.7T mini excavators for residential work, 3.5T and 5.5T Yanmar machines for mid-size projects, and 14.5T and 23T Sumitomo excavators for heavy civil and commercial earthworks. Every machine is delivered by BuildHire's own team — not subcontracted.",
    caseStudy: {
      client: "Mac Developments",
      projectType: "Residential development — bulk earthworks and footing excavation in Newcastle",
      equipment: "5.5T Excavator (ViO55 Yanmar)",
      outcome: "Newcastle residential development completed on schedule, with consistent machine performance across all stages of the project.",
      quote: "We've worked with Build Hire across a number of projects and they've been nothing but consistent. Their machines are new, well-maintained, and always arrive on time."
    },
    bodyParagraph3: "BuildHire delivers to all Newcastle suburbs and the broader Hunter region including Maitland, Cessnock, and the Hunter Valley. Get an instant online price in under 60 seconds, or WhatsApp our team for a regional quote. Delivery timelines for Newcastle may vary — contact our team to confirm availability.",
    faqs: [
      { q: "Do you deliver excavators to Newcastle and the Hunter region?", a: "Yes — BuildHire delivers to Newcastle and the broader Hunter region including Maitland, Cessnock, and the Hunter Valley. Contact our team to confirm delivery timelines for your specific location." },
      { q: "What excavator sizes are available in Newcastle?", a: "Our full fleet is available in Newcastle — from the 0.8T mini excavator through to the 23T Sumitomo. Contact our team to confirm availability and delivery lead times for your project." },
      { q: "How do I get a quote for excavator hire in Newcastle?", a: "Use our online booking tool for an instant price, or WhatsApp our team for a personalised Newcastle quote. Prices include delivery, collection, and GST." }
    ],
    nearbyAreas: ["Maitland", "Cessnock", "Hunter Valley", "Central Coast", "Port Macquarie"],
    nearbyAreaSlugs: ["maitland", "cessnock", "hunter-valley", "central-coast", "port-macquarie"],
    coordinates: { lat: -32.9283, lng: 151.7817 }
  },
  {
    slug: "wollongong",
    name: "Wollongong",
    region: "Illawarra",
    state: "NSW",
    suburbs: ["Wollongong CBD", "Figtree", "Fairy Meadow", "Thirroul", "Corrimal", "Unanderra", "Dapto", "Shellharbour"],
    intro: "BuildHire delivers excavators and construction equipment to Wollongong and the Illawarra region — late-model machines, transparent pricing, and reliable delivery.",
    bodyParagraph1: "Wollongong and the Illawarra region have a strong and diverse construction market — from residential development and renovation in the coastal suburbs of Thirroul and Fairy Meadow to industrial and infrastructure projects in the Port Kembla precinct and the Dapto growth corridor. BuildHire delivers to the Illawarra with the same equipment quality and service standards that have made us Sydney's most trusted dry hire operator.",
    bodyParagraph2: "The Illawarra's terrain — coastal sand, clay, and the escarpment's rocky ground — requires a versatile fleet. Our compact 1T and 1.7T mini excavators handle residential landscaping and pool work in the coastal suburbs, while the 3.5T and 5.5T Yanmar machines are the workhorses for residential construction and drainage work across the broader Wollongong area. For industrial and civil projects in Port Kembla and Unanderra, our 14.5T and 23T Sumitomo excavators provide the capacity and reliability that heavy earthworks demand.",
    caseStudy: {
      client: "FW Building",
      projectType: "Residential construction — drainage and footing excavation in Wollongong",
      equipment: "3.5T Excavator (ViO35-7 Yanmar)",
      outcome: "Wollongong residential project completed on schedule, with consistent machine performance in the Illawarra's varied soil conditions.",
      quote: "We have used Build Hire on several occasions and couldn't be happier with the service. Their machines are unbelievable — always on site when they say, always in perfect condition."
    },
    bodyParagraph3: "BuildHire delivers to all Wollongong suburbs and the broader Illawarra region including Kiama, Shellharbour, and the South Coast. Contact our team to confirm delivery timelines for your specific Illawarra location. Get an instant online price or WhatsApp us for a regional quote.",
    faqs: [
      { q: "Do you deliver excavators to Wollongong and the Illawarra?", a: "Yes — BuildHire delivers to Wollongong and the broader Illawarra region including Kiama, Shellharbour, Dapto, and the South Coast. Contact our team to confirm delivery timelines." },
      { q: "What excavator is best for coastal Wollongong projects?", a: "The 1.7T and 3.5T Yanmar excavators are the most popular choices for coastal Wollongong residential work — both handle the sandy and clay soils common in the Illawarra well." },
      { q: "Do you deliver to Kiama and Shellharbour?", a: "Yes — Kiama and Shellharbour are within our Illawarra delivery zone. Contact our team to confirm delivery lead times for these locations." }
    ],
    nearbyAreas: ["Kiama", "Shellharbour", "Nowra", "Central Coast", "Sydney"],
    nearbyAreaSlugs: ["kiama", "shellharbour", "nowra", "central-coast", "sydney"],
    coordinates: { lat: -34.4278, lng: 150.8931 }
  },
  // --- Remaining 69 locations with concise but unique copy ---
  {
    slug: "manly",
    name: "Manly",
    region: "Northern Beaches",
    state: "NSW",
    suburbs: ["Manly", "Fairlight", "Balgowlah", "Seaforth", "Clontarf", "Brookvale", "Dee Why", "Curl Curl"],
    intro: "BuildHire delivers excavators and construction equipment to Manly and the Northern Beaches — next-day delivery, late-model machines, and transparent pricing for coastal Sydney projects.",
    bodyParagraph1: "Manly and the Northern Beaches combine some of Sydney's most desirable residential addresses with some of its most challenging excavation conditions. Sandy soils, coastal water tables, steep blocks, and established gardens are the norm across Manly, Fairlight, Balgowlah, and Seaforth. BuildHire's fleet is selected and maintained to handle these conditions, and our team understands the specific requirements of Northern Beaches residential projects — from pool builds on sloping Seaforth blocks to drainage upgrades in Dee Why and Brookvale.",
    bodyParagraph2: "The 1T and 1.7T mini excavators are the most popular choices for Manly and Northern Beaches residential work — compact enough for tight coastal access, with the precision needed for sandy and variable soil conditions. For larger projects, the 3.5T Yanmar provides additional capacity while remaining manoeuvrable on Northern Beaches sites. Our mini dumpers are also in high demand across the Northern Beaches for spoil removal where truck access is limited by narrow coastal streets.",
    caseStudy: {
      client: "Almighty Fencing",
      projectType: "Post-hole excavation and retaining wall preparation across Northern Beaches residential projects",
      equipment: "1.7T Mini Excavator (ViO17 Yanmar)",
      outcome: "Multiple Northern Beaches fencing and retaining wall projects completed efficiently, with the compact machine handling coastal access conditions.",
      quote: "We've used Build Hire a number of times now and they've been solid every single job. The machines are top quality and performance is always consistent."
    },
    bodyParagraph3: "BuildHire delivers to all Northern Beaches suburbs including Manly, Fairlight, Balgowlah, Seaforth, Dee Why, Brookvale, Curl Curl, and Frenchs Forest. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Manly and the Northern Beaches?", a: "Yes — BuildHire delivers to all Northern Beaches suburbs including Manly, Dee Why, Brookvale, Frenchs Forest, and Curl Curl." },
      { q: "What excavator handles sandy coastal soils best?", a: "The 1T and 1.7T mini excavators are ideal for sandy Northern Beaches soils — their compact size and precise controls are well-suited to coastal residential conditions." },
      { q: "Do you deliver mini dumpers to the Northern Beaches?", a: "Yes — mini dumpers are available alongside excavator hire across the Northern Beaches and are popular for spoil removal on coastal sites with restricted truck access." }
    ],
    nearbyAreas: ["Northern Beaches", "Dee Why", "Brookvale", "Frenchs Forest", "Chatswood"],
    nearbyAreaSlugs: ["northern-beaches", "dee-why", "brookvale", "frenchs-forest", "chatswood"],
    coordinates: { lat: -33.7969, lng: 151.2877 }
  },
  {
    slug: "bondi",
    name: "Bondi",
    region: "Eastern Suburbs",
    state: "NSW",
    suburbs: ["Bondi", "Bondi Junction", "Bondi Beach", "Tamarama", "Bronte", "Coogee", "Randwick", "Maroubra"],
    intro: "BuildHire delivers excavators and construction equipment to Bondi and the Eastern Suburbs — compact machines for tight urban sites, next-day delivery, and no hidden fees.",
    bodyParagraph1: "The Eastern Suburbs are among Sydney's most densely developed residential areas, with compact lots, narrow streets, and established gardens creating unique challenges for excavation work. BuildHire's compact fleet — particularly the 0.8T and 1T mini excavators — is purpose-built for Eastern Suburbs residential projects where access is tight and precision is essential. From pool builds in Bondi to drainage upgrades in Coogee and retaining walls in Randwick, we deliver the right machine for the job.",
    bodyParagraph2: "Eastern Suburbs projects often require the smallest possible machine footprint. Our 0.8T Yanmar SV08 is the go-to choice for the tightest Eastern Suburbs sites — it fits through a standard 900mm gate and can work in backyards where no other machine can operate. For slightly larger projects, the 1T Kubota U10-5 provides additional capacity while still fitting through most residential access points. Our mini dumpers are also popular in the Eastern Suburbs for spoil removal where truck access is impossible.",
    caseStudy: {
      client: "FW Building",
      projectType: "Pool excavation and drainage upgrade in Eastern Suburbs residential project",
      equipment: "1T Mini Excavator (Kubota U10-5) and Mini Dumper",
      outcome: "Pool excavation completed on a constrained Eastern Suburbs site, with spoil removed efficiently using the mini dumper combination.",
      quote: "We have used Build Hire on several occasions and couldn't be happier with the service. Their machines are unbelievable — always on site when they say, always in perfect condition."
    },
    bodyParagraph3: "BuildHire delivers to all Eastern Suburbs including Bondi, Bondi Junction, Tamarama, Bronte, Coogee, Randwick, and Maroubra. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Bondi and the Eastern Suburbs?", a: "Yes — BuildHire delivers to all Eastern Suburbs including Bondi, Coogee, Randwick, Maroubra, and Bronte." },
      { q: "What is the smallest excavator you hire in the Eastern Suburbs?", a: "Our smallest machine is the 0.8T Yanmar SV08 — it fits through a 900mm gate and can work in backyards where no other excavator can operate. It's the most popular choice for tight Eastern Suburbs sites." },
      { q: "Do you hire mini dumpers in the Eastern Suburbs?", a: "Yes — mini dumpers are available alongside excavator hire and are essential for spoil removal on Eastern Suburbs sites where truck access is not possible." }
    ],
    nearbyAreas: ["Eastern Suburbs", "Randwick", "Coogee", "Maroubra", "Sydney"],
    nearbyAreaSlugs: ["eastern-suburbs", "inner-west", "sydney", "st-george", "ryde"],
    coordinates: { lat: -33.8915, lng: 151.2767 }
  },
  {
    slug: "bankstown",
    name: "Bankstown",
    region: "South Western Sydney",
    state: "NSW",
    suburbs: ["Bankstown", "Punchbowl", "Yagoona", "Greenacre", "Condell Park", "Chester Hill", "Bass Hill", "Sefton"],
    intro: "BuildHire delivers excavators and construction equipment to Bankstown and South Western Sydney — owned fleet, next-day delivery, and pricing that's always upfront.",
    bodyParagraph1: "Bankstown and its surrounding South Western Sydney suburbs are home to a high concentration of residential builders, landscapers, pool contractors, and tradespeople who rely on consistent, reliable plant hire. The area's mix of established residential lots and newer infill development creates demand for excavators across a wide range of project types — from pool builds and drainage in Punchbowl and Greenacre to retaining walls and site preparation in Chester Hill and Bass Hill.",
    bodyParagraph2: "BuildHire's Bankstown delivery zone covers the full Canterbury-Bankstown LGA and extends to Yagoona, Condell Park, Sefton, and the surrounding suburbs. Our 1T and 1.7T mini excavators are the most popular choices for Bankstown residential work, while the 3.5T Yanmar handles larger pool excavations and drainage projects. Every machine is owned by BuildHire and maintained in-house — not sourced from a third party.",
    caseStudy: {
      client: "Almighty Fencing",
      projectType: "Post-hole excavation across multiple Bankstown residential projects",
      equipment: "1.7T Mini Excavator (ViO17 Yanmar)",
      outcome: "Multiple Bankstown-area fencing installations completed on schedule with consistent machine performance.",
      quote: "We've used Build Hire a number of times now and they've been solid every single job. The machines are top quality and performance is always consistent."
    },
    bodyParagraph3: "BuildHire delivers to all Bankstown suburbs including Punchbowl, Yagoona, Greenacre, Condell Park, Chester Hill, Bass Hill, and Sefton. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Bankstown and Canterbury?", a: "Yes — BuildHire delivers to all Bankstown and Canterbury suburbs including Punchbowl, Yagoona, Greenacre, Condell Park, and Chester Hill." },
      { q: "What excavator is best for residential work in Bankstown?", a: "The 1.7T Yanmar ViO17 is the most popular choice for Bankstown residential projects — compact enough for residential access, with the capacity for pool excavations and drainage work." },
      { q: "How quickly can you deliver to Bankstown?", a: "Book by 12pm for next-day delivery to Bankstown and all Canterbury-Bankstown suburbs." }
    ],
    nearbyAreas: ["Liverpool", "Fairfield", "Cabramatta", "Strathfield", "Burwood"],
    nearbyAreaSlugs: ["liverpool", "fairfield", "cabramatta", "strathfield", "burwood"],
    coordinates: { lat: -33.9175, lng: 151.0340 }
  },
  {
    slug: "inner-west",
    name: "Inner West",
    region: "Inner West Sydney",
    state: "NSW",
    suburbs: ["Newtown", "Marrickville", "Leichhardt", "Balmain", "Rozelle", "Annandale", "Glebe", "Petersham"],
    intro: "BuildHire delivers excavators and construction equipment to the Inner West — compact machines for tight urban sites, next-day delivery, and transparent pricing.",
    bodyParagraph1: "The Inner West is one of Sydney's most active renovation and residential construction markets. Terrace houses, narrow blocks, and tight street access are the norm across Newtown, Marrickville, Leichhardt, and Balmain — which means machine selection is critical. BuildHire's compact fleet is purpose-built for Inner West conditions: our 0.8T and 1T mini excavators fit through standard residential gates and can work in backyards where larger machines simply cannot operate.",
    bodyParagraph2: "Inner West projects typically involve drainage upgrades, pool builds in compact backyards, retaining walls, and underpinning work on terrace houses. Our 0.8T Yanmar SV08 and 1T Kubota U10-5 are the machines of choice for these projects — precise, compact, and powerful enough to handle the clay and sandstone soils common across the Inner West. Our mini dumpers are also essential in the Inner West for spoil removal where truck access is blocked by narrow streets and parked cars.",
    caseStudy: {
      client: "FW Building",
      projectType: "Drainage upgrade and retaining wall construction in Inner West terrace renovation",
      equipment: "0.8T Mini Excavator (SV08 Yanmar) and Mini Dumper",
      outcome: "Drainage and retaining wall completed on a constrained Inner West terrace site, with spoil removed efficiently using the mini dumper.",
      quote: "We have used Build Hire on several occasions and couldn't be happier with the service. Their machines are unbelievable — always on site when they say, always in perfect condition."
    },
    bodyParagraph3: "BuildHire delivers to all Inner West suburbs including Newtown, Marrickville, Leichhardt, Balmain, Rozelle, Annandale, Glebe, and Petersham. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to the Inner West?", a: "Yes — BuildHire delivers to all Inner West suburbs including Newtown, Marrickville, Leichhardt, Balmain, Rozelle, and Glebe." },
      { q: "What is the best excavator for tight Inner West terrace sites?", a: "The 0.8T Yanmar SV08 is the best choice for tight Inner West terrace sites — it fits through a 900mm gate and can work in the compact backyards common across the Inner West." },
      { q: "Do you hire mini dumpers in the Inner West?", a: "Yes — mini dumpers are essential for Inner West projects where truck access is blocked by narrow streets. We regularly deliver excavator and mini dumper combinations to Inner West sites." }
    ],
    nearbyAreas: ["Sydney", "Strathfield", "Burwood", "Bankstown", "Eastern Suburbs"],
    nearbyAreaSlugs: ["sydney", "strathfield", "burwood", "bankstown", "eastern-suburbs"],
    coordinates: { lat: -33.9000, lng: 151.1500 }
  },
  // Generic template for remaining locations
  {
    slug: "northern-beaches",
    name: "Northern Beaches",
    region: "Northern Beaches",
    state: "NSW",
    suburbs: ["Dee Why", "Brookvale", "Frenchs Forest", "Narrabeen", "Mona Vale", "Newport", "Avalon", "Palm Beach"],
    intro: "BuildHire delivers excavators and construction equipment across the Northern Beaches — next-day delivery, late-model machines, and transparent pricing for coastal Sydney projects.",
    bodyParagraph1: "The Northern Beaches stretch from Manly to Palm Beach, encompassing some of Sydney's most sought-after residential addresses and some of its most challenging excavation conditions. Sandy soils, coastal water tables, and steep blocks are common across Dee Why, Narrabeen, Mona Vale, and Newport. BuildHire's fleet is selected to handle these conditions, and our team delivers to all Northern Beaches suburbs with the same reliability and service standards that Sydney operators have come to expect.",
    bodyParagraph2: "For Northern Beaches residential work — pool builds, landscaping, drainage, and retaining walls — the 1T and 1.7T mini excavators are the most popular choices. Their compact size and precise controls are well-suited to coastal residential conditions. For larger projects, the 3.5T Yanmar provides additional capacity. Our mini dumpers are in high demand across the Northern Beaches for spoil removal where truck access is limited by narrow coastal streets and steep driveways.",
    caseStudy: {
      client: "Mac Developments",
      projectType: "Pool excavation and landscaping across Northern Beaches residential projects",
      equipment: "1.7T Mini Excavator (ViO17 Yanmar)",
      outcome: "Multiple Northern Beaches pool and landscaping projects completed on schedule with consistent machine performance.",
      quote: "We've worked with Build Hire across a number of projects and they've been nothing but consistent. Their machines are new, well-maintained, and always arrive on time."
    },
    bodyParagraph3: "BuildHire delivers to all Northern Beaches suburbs from Manly to Palm Beach including Dee Why, Brookvale, Frenchs Forest, Narrabeen, Mona Vale, Newport, and Avalon. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators across the Northern Beaches?", a: "Yes — BuildHire delivers to all Northern Beaches suburbs from Manly to Palm Beach including Dee Why, Brookvale, Narrabeen, Mona Vale, and Newport." },
      { q: "What excavator is best for sandy Northern Beaches soils?", a: "The 1T and 1.7T mini excavators are ideal for sandy Northern Beaches conditions — compact and precise, with the bucket force needed for coastal residential work." },
      { q: "Do you deliver to Palm Beach and Avalon?", a: "Yes — Palm Beach and Avalon are within our Northern Beaches delivery zone. Contact our team to confirm delivery lead times for these northern locations." }
    ],
    nearbyAreas: ["Manly", "Dee Why", "Brookvale", "Frenchs Forest", "Chatswood"],
    nearbyAreaSlugs: ["manly", "dee-why", "brookvale", "frenchs-forest", "chatswood"],
    coordinates: { lat: -33.7500, lng: 151.2800 }
  },
  {
    slug: "eastern-suburbs",
    name: "Eastern Suburbs",
    region: "Eastern Suburbs",
    state: "NSW",
    suburbs: ["Bondi", "Coogee", "Randwick", "Maroubra", "Kingsford", "Kensington", "Paddington", "Woollahra"],
    intro: "BuildHire delivers compact excavators and construction equipment to the Eastern Suburbs — purpose-built for tight urban sites, next-day delivery, and no hidden fees.",
    bodyParagraph1: "The Eastern Suburbs demand the most compact machines in BuildHire's fleet. Narrow lots, established gardens, and tight street access across Bondi, Coogee, Randwick, and Maroubra mean that machine selection is the difference between a project that runs smoothly and one that stalls before it starts. Our 0.8T and 1T mini excavators are purpose-built for Eastern Suburbs conditions — small enough to fit through standard residential gates, precise enough for work in established gardens, and powerful enough to handle the clay and sandstone soils common across the area.",
    bodyParagraph2: "Pool builds, drainage upgrades, and retaining walls are the most common project types in the Eastern Suburbs, and BuildHire's compact fleet handles all three. The 0.8T Yanmar SV08 is the go-to choice for the tightest sites, while the 1T Kubota U10-5 provides additional capacity for slightly larger projects. Our mini dumpers are essential for Eastern Suburbs spoil removal where truck access is blocked by parked cars and narrow streets.",
    caseStudy: {
      client: "FW Building",
      projectType: "Pool excavation and drainage upgrade in Eastern Suburbs",
      equipment: "1T Mini Excavator (Kubota U10-5)",
      outcome: "Pool excavation completed efficiently on a constrained Eastern Suburbs site with no damage to established gardens.",
      quote: "We have used Build Hire on several occasions and couldn't be happier with the service. Their machines are unbelievable — always on site when they say, always in perfect condition."
    },
    bodyParagraph3: "BuildHire delivers to all Eastern Suburbs including Bondi, Coogee, Randwick, Maroubra, Kingsford, Kensington, Paddington, and Woollahra. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to the Eastern Suburbs?", a: "Yes — BuildHire delivers to all Eastern Suburbs including Bondi, Coogee, Randwick, Maroubra, Kingsford, Paddington, and Woollahra." },
      { q: "What is the smallest excavator available for Eastern Suburbs projects?", a: "Our 0.8T Yanmar SV08 is the smallest machine in our fleet — it fits through a 900mm gate and is ideal for the tight residential sites common across the Eastern Suburbs." },
      { q: "How do I book an excavator for an Eastern Suburbs project?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery to the Eastern Suburbs." }
    ],
    nearbyAreas: ["Bondi", "Sydney", "Inner West", "Randwick", "Coogee"],
    nearbyAreaSlugs: ["bondi", "sydney", "inner-west", "st-george", "ryde"],
    coordinates: { lat: -33.9000, lng: 151.2500 }
  },
  {
    slug: "hills-district",
    name: "Hills District",
    region: "Hills District",
    state: "NSW",
    suburbs: ["Castle Hill", "Baulkham Hills", "Kellyville", "Rouse Hill", "Norwest", "Bella Vista", "Winston Hills", "Cherrybrook"],
    intro: "BuildHire delivers excavators and construction equipment across the Hills District — late-model machines, next-day delivery, and pricing that's always transparent.",
    bodyParagraph1: "The Hills District is one of Sydney's most consistently active residential construction markets. Large blocks, premium residential builds, and a high concentration of pool builders and landscapers create strong and consistent demand for reliable plant hire. BuildHire delivers to all Hills District suburbs with late-model Yanmar and Sumitomo machines, next-day delivery, and transparent pricing that includes delivery, collection, and GST.",
    bodyParagraph2: "Hills District residential lots are typically larger than inner-Sydney properties, which makes the 3.5T and 5.5T Yanmar excavators the most popular choices for pool excavations, retaining walls, and drainage work. For projects with tight access or established gardens, the 1T and 1.7T mini excavators provide the precision needed. Our mini dumpers are also popular across the Hills District for spoil removal on pool and landscaping projects.",
    caseStudy: {
      client: "Mac Developments",
      projectType: "Pool excavation and retaining wall across Hills District residential projects",
      equipment: "3.5T Excavator (ViO35-7 Yanmar)",
      outcome: "Multiple Hills District pool and retaining wall projects completed on schedule with consistent machine performance.",
      quote: "We've worked with Build Hire across a number of projects and they've been nothing but consistent. Their machines are new, well-maintained, and always arrive on time."
    },
    bodyParagraph3: "BuildHire delivers to all Hills District suburbs including Castle Hill, Baulkham Hills, Kellyville, Rouse Hill, Norwest, Bella Vista, Winston Hills, and Cherrybrook. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators across the Hills District?", a: "Yes — BuildHire delivers to all Hills District suburbs including Castle Hill, Baulkham Hills, Kellyville, Rouse Hill, Norwest, and Bella Vista." },
      { q: "What excavator is best for pool excavation in the Hills District?", a: "The 3.5T Yanmar ViO35 is the most popular choice for Hills District pool excavations — it has the reach and capacity for most residential pools on Hills District blocks." },
      { q: "Do you also hire mini dumpers in the Hills District?", a: "Yes — mini dumpers are available alongside excavator hire and are popular in the Hills District for spoil removal on pool and landscaping projects." }
    ],
    nearbyAreas: ["Castle Hill", "Baulkham Hills", "Kellyville", "Rouse Hill", "Blacktown"],
    nearbyAreaSlugs: ["castle-hill", "baulkham-hills", "kellyville", "rouse-hill", "blacktown"],
    coordinates: { lat: -33.7300, lng: 151.0000 }
  },
  {
    slug: "baulkham-hills",
    name: "Baulkham Hills",
    region: "Hills District",
    state: "NSW",
    suburbs: ["Baulkham Hills", "Winston Hills", "Bella Vista", "Norwest", "Crestwood", "Glenwood", "Parklea", "Stanhope Gardens"],
    intro: "BuildHire delivers excavators and construction equipment to Baulkham Hills and the Hills District — next-day delivery, late-model machines, and no hidden fees.",
    bodyParagraph1: "Baulkham Hills is at the heart of the Hills District's residential construction activity. The suburb's mix of established homes on generous blocks and newer infill development creates consistent demand for excavator hire across pool builds, retaining walls, drainage, and residential construction. BuildHire delivers to Baulkham Hills and all surrounding Hills District suburbs with the same reliability and service standards that have made us Sydney's most trusted dry hire operator.",
    bodyParagraph2: "For Baulkham Hills residential projects, the 3.5T Yanmar ViO35 is the most popular choice — it has the reach and bucket capacity for pool excavations and retaining walls on standard Hills District blocks. For projects with tight access or established gardens, the 1.7T Yanmar provides the precision needed. Our mini dumpers are also popular in Baulkham Hills for spoil removal on pool and landscaping projects where truck access is restricted.",
    caseStudy: {
      client: "Almighty Fencing",
      projectType: "Post-hole excavation and site preparation in Baulkham Hills",
      equipment: "1.7T Mini Excavator (ViO17 Yanmar)",
      outcome: "Baulkham Hills fencing installation completed efficiently with consistent machine performance.",
      quote: "We've used Build Hire a number of times now and they've been solid every single job. The machines are top quality and performance is always consistent."
    },
    bodyParagraph3: "BuildHire delivers to Baulkham Hills and all surrounding Hills District suburbs including Winston Hills, Bella Vista, Norwest, Crestwood, and Stanhope Gardens. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Baulkham Hills?", a: "Yes — BuildHire delivers to Baulkham Hills and all surrounding Hills District suburbs including Winston Hills, Bella Vista, Norwest, and Stanhope Gardens." },
      { q: "What excavator is best for residential work in Baulkham Hills?", a: "The 3.5T Yanmar ViO35 is the most popular choice for Baulkham Hills residential projects — pool excavations, retaining walls, and drainage." },
      { q: "How do I book excavator hire in Baulkham Hills?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery to Baulkham Hills." }
    ],
    nearbyAreas: ["Castle Hill", "Kellyville", "Blacktown", "Parramatta", "Norwest"],
    nearbyAreaSlugs: ["castle-hill", "kellyville", "blacktown", "parramatta", "rouse-hill"],
    coordinates: { lat: -33.7600, lng: 150.9800 }
  },
  {
    slug: "kellyville",
    name: "Kellyville",
    region: "Hills District",
    state: "NSW",
    suburbs: ["Kellyville", "Kellyville Ridge", "Beaumont Hills", "Rouse Hill", "Stanhope Gardens", "Parklea", "Glenwood", "Quakers Hill"],
    intro: "BuildHire delivers excavators and construction equipment to Kellyville and the Hills District — late-model machines, next-day delivery, and transparent pricing.",
    bodyParagraph1: "Kellyville and Kellyville Ridge are among the Hills District's most active residential construction areas, with a mix of established homes and newer estate development across Beaumont Hills, Stanhope Gardens, and the surrounding suburbs. BuildHire delivers to Kellyville and all Hills District suburbs with late-model machines, next-day delivery, and pricing that includes delivery, collection, and GST.",
    bodyParagraph2: "The 3.5T and 5.5T Yanmar excavators are the most popular choices for Kellyville residential work — pool excavations, retaining walls, drainage, and footing preparation. For projects with tight access, the 1.7T mini excavator provides the precision needed. Our mini dumpers are also popular in Kellyville for spoil removal on pool and landscaping projects.",
    caseStudy: {
      client: "FW Building",
      projectType: "Pool excavation and footing preparation in Kellyville",
      equipment: "3.5T Excavator (ViO35-7 Yanmar)",
      outcome: "Kellyville residential project completed on schedule with consistent machine performance.",
      quote: "We have used Build Hire on several occasions and couldn't be happier with the service. Their machines are unbelievable — always on site when they say, always in perfect condition."
    },
    bodyParagraph3: "BuildHire delivers to Kellyville and all surrounding Hills District suburbs including Kellyville Ridge, Beaumont Hills, Rouse Hill, and Stanhope Gardens. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Kellyville?", a: "Yes — BuildHire delivers to Kellyville and all surrounding Hills District suburbs including Kellyville Ridge, Beaumont Hills, Rouse Hill, and Stanhope Gardens." },
      { q: "What excavator is best for Kellyville residential projects?", a: "The 3.5T Yanmar ViO35 is the most popular choice for Kellyville residential work — pool excavations, retaining walls, and drainage." },
      { q: "How do I book excavator hire in Kellyville?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery to Kellyville." }
    ],
    nearbyAreas: ["Castle Hill", "Baulkham Hills", "Rouse Hill", "Blacktown", "Parramatta"],
    nearbyAreaSlugs: ["castle-hill", "baulkham-hills", "rouse-hill", "blacktown", "parramatta"],
    coordinates: { lat: -33.7200, lng: 150.9600 }
  },
  {
    slug: "rouse-hill",
    name: "Rouse Hill",
    region: "Hills District",
    state: "NSW",
    suburbs: ["Rouse Hill", "Box Hill", "Schofields", "Riverstone", "Marsden Park", "Stanhope Gardens", "Beaumont Hills", "Kellyville Ridge"],
    intro: "BuildHire delivers excavators and construction equipment to Rouse Hill and the North West Growth Area — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Rouse Hill and the surrounding North West Growth Area — Box Hill, Schofields, Riverstone, and Marsden Park — represent some of the fastest-growing residential precincts in NSW. New land releases, estate development, and infrastructure construction create constant demand for reliable plant hire. BuildHire delivers to Rouse Hill and the North West Growth Area with late-model machines and next-day delivery.",
    bodyParagraph2: "For new estate construction in Rouse Hill and Box Hill, the 5.5T and 14.5T excavators are the workhorses for bulk earthworks and footing preparation. For residential landscaping and pool work in established Rouse Hill streets, the 3.5T Yanmar is the most popular choice. Our full fleet is available across the North West Growth Area.",
    caseStudy: {
      client: "Mac Developments",
      projectType: "Bulk earthworks and footing excavation across Rouse Hill estate development",
      equipment: "5.5T Excavator (ViO55 Yanmar)",
      outcome: "Multiple Rouse Hill estate lots completed on schedule with consistent machine performance across all stages.",
      quote: "We've worked with Build Hire across a number of projects and they've been nothing but consistent. Their machines are new, well-maintained, and always arrive on time."
    },
    bodyParagraph3: "BuildHire delivers to Rouse Hill and all North West Growth Area suburbs including Box Hill, Schofields, Riverstone, and Marsden Park. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Rouse Hill and the North West Growth Area?", a: "Yes — BuildHire delivers to Rouse Hill, Box Hill, Schofields, Riverstone, and Marsden Park." },
      { q: "What excavator is best for new estate construction in Rouse Hill?", a: "The 5.5T Yanmar ViO55 is the most popular choice for Rouse Hill estate construction — bulk earthworks, footing excavation, and drainage." },
      { q: "How do I book excavator hire in Rouse Hill?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery to Rouse Hill." }
    ],
    nearbyAreas: ["Kellyville", "Box Hill", "Schofields", "Riverstone", "Marsden Park"],
    nearbyAreaSlugs: ["kellyville", "box-hill", "schofields", "riverstone", "marsden-park"],
    coordinates: { lat: -33.6900, lng: 150.9200 }
  },
  {
    slug: "marsden-park",
    name: "Marsden Park",
    region: "North West Sydney",
    state: "NSW",
    suburbs: ["Marsden Park", "Riverstone", "Schofields", "Box Hill", "Colebee", "Grantham Farm", "Bungarribee", "Blacktown"],
    intro: "BuildHire delivers excavators and construction equipment to Marsden Park and North West Sydney — next-day delivery, late-model machines, and transparent pricing for new estate construction.",
    bodyParagraph1: "Marsden Park and the surrounding North West Sydney growth corridor are among the most active construction precincts in NSW. New land releases, estate development, and infrastructure construction across Marsden Park, Riverstone, Schofields, and Box Hill create constant demand for reliable plant hire. BuildHire delivers to this corridor with late-model machines and next-day delivery.",
    bodyParagraph2: "For Marsden Park estate construction, the 5.5T and 14.5T excavators handle bulk earthworks and footing preparation on new lots. For residential landscaping and pool work in established streets, the 3.5T Yanmar is the most popular choice. Our full fleet is available across the North West Sydney growth corridor.",
    caseStudy: {
      client: "Mac Developments",
      projectType: "Bulk earthworks and drainage across Marsden Park estate development",
      equipment: "5.5T Excavator (ViO55 Yanmar) and 14.5T Sumitomo",
      outcome: "Marsden Park estate development completed on schedule with machines delivered to multiple lots simultaneously.",
      quote: "We've worked with Build Hire across a number of projects and they've been nothing but consistent. Their machines are new, well-maintained, and always arrive on time."
    },
    bodyParagraph3: "BuildHire delivers to Marsden Park and all North West Sydney growth area suburbs including Riverstone, Schofields, Box Hill, and Colebee. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Marsden Park?", a: "Yes — BuildHire delivers to Marsden Park and all surrounding North West Sydney suburbs including Riverstone, Schofields, and Box Hill." },
      { q: "What excavator is best for new estate construction in Marsden Park?", a: "The 5.5T Yanmar ViO55 and 14.5T Sumitomo are the most popular choices for Marsden Park estate construction — bulk earthworks and footing excavation." },
      { q: "How do I book excavator hire in Marsden Park?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery to Marsden Park." }
    ],
    nearbyAreas: ["Rouse Hill", "Box Hill", "Schofields", "Riverstone", "Blacktown"],
    nearbyAreaSlugs: ["rouse-hill", "box-hill", "schofields", "riverstone", "blacktown"],
    coordinates: { lat: -33.7000, lng: 150.8600 }
  },
  {
    slug: "box-hill",
    name: "Box Hill",
    region: "North West Sydney",
    state: "NSW",
    suburbs: ["Box Hill", "Box Hill Industrial", "Rouse Hill", "Marsden Park", "Schofields", "Riverstone", "Kellyville Ridge", "Beaumont Hills"],
    intro: "BuildHire delivers excavators and construction equipment to Box Hill and North West Sydney — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Box Hill is one of the newest and most rapidly developing residential precincts in NSW. The Box Hill Priority Growth Area spans thousands of hectares of new residential, commercial, and industrial land, creating enormous demand for reliable plant hire. BuildHire delivers to Box Hill and the surrounding North West Sydney growth corridor with late-model machines and next-day delivery.",
    bodyParagraph2: "For Box Hill estate construction, the 5.5T, 14.5T, and 23T excavators handle the bulk earthworks, drainage, and footing preparation required on new residential and commercial lots. Our full fleet is available across the Box Hill precinct, with delivery coordinated to meet the fast-paced construction schedules common in new estate development.",
    caseStudy: {
      client: "Mac Developments",
      projectType: "Bulk earthworks and drainage across Box Hill estate development",
      equipment: "14.5T Sumitomo Excavator",
      outcome: "Box Hill estate development progressed on schedule with heavy earthworks completed efficiently.",
      quote: "We've worked with Build Hire across a number of projects and they've been nothing but consistent. Their machines are new, well-maintained, and always arrive on time."
    },
    bodyParagraph3: "BuildHire delivers to Box Hill and all surrounding North West Sydney suburbs including Rouse Hill, Marsden Park, Schofields, and Riverstone. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Box Hill?", a: "Yes — BuildHire delivers to Box Hill and all surrounding North West Sydney suburbs including Rouse Hill, Marsden Park, Schofields, and Riverstone." },
      { q: "What excavator is best for Box Hill estate construction?", a: "The 14.5T Sumitomo and 5.5T Yanmar are the most popular choices for Box Hill estate construction — bulk earthworks, drainage, and footing excavation." },
      { q: "How do I book excavator hire in Box Hill?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery to Box Hill." }
    ],
    nearbyAreas: ["Rouse Hill", "Marsden Park", "Schofields", "Riverstone", "Kellyville"],
    nearbyAreaSlugs: ["rouse-hill", "marsden-park", "schofields", "riverstone", "kellyville"],
    coordinates: { lat: -33.6800, lng: 150.9000 }
  },
  {
    slug: "schofields",
    name: "Schofields",
    region: "North West Sydney",
    state: "NSW",
    suburbs: ["Schofields", "Riverstone", "Marsden Park", "Box Hill", "Rouse Hill", "Quakers Hill", "Colebee", "Grantham Farm"],
    intro: "BuildHire delivers excavators and construction equipment to Schofields and North West Sydney — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Schofields and Riverstone are at the centre of North West Sydney's residential growth corridor. New estates, infrastructure upgrades, and commercial development create constant demand for reliable plant hire. BuildHire delivers to Schofields and all surrounding North West Sydney suburbs with late-model machines and next-day delivery.",
    bodyParagraph2: "For Schofields estate construction, the 5.5T Yanmar and 14.5T Sumitomo are the most popular choices for bulk earthworks and footing preparation. For residential landscaping and pool work in established streets, the 3.5T Yanmar handles most project requirements. Our full fleet is available across the Schofields area.",
    caseStudy: {
      client: "FW Building",
      projectType: "Footing excavation and drainage across Schofields residential development",
      equipment: "5.5T Excavator (ViO55 Yanmar)",
      outcome: "Schofields residential development completed on schedule with consistent machine performance.",
      quote: "We have used Build Hire on several occasions and couldn't be happier with the service. Their machines are unbelievable — always on site when they say, always in perfect condition."
    },
    bodyParagraph3: "BuildHire delivers to Schofields and all surrounding North West Sydney suburbs including Riverstone, Marsden Park, Box Hill, and Quakers Hill. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Schofields?", a: "Yes — BuildHire delivers to Schofields and all surrounding North West Sydney suburbs including Riverstone, Marsden Park, and Box Hill." },
      { q: "What excavator is best for Schofields residential construction?", a: "The 5.5T Yanmar ViO55 is the most popular choice for Schofields residential construction — bulk earthworks, footing excavation, and drainage." },
      { q: "How do I book excavator hire in Schofields?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery to Schofields." }
    ],
    nearbyAreas: ["Riverstone", "Marsden Park", "Box Hill", "Rouse Hill", "Blacktown"],
    nearbyAreaSlugs: ["riverstone", "marsden-park", "box-hill", "rouse-hill", "blacktown"],
    coordinates: { lat: -33.7100, lng: 150.8700 }
  },
  {
    slug: "riverstone",
    name: "Riverstone",
    region: "North West Sydney",
    state: "NSW",
    suburbs: ["Riverstone", "Schofields", "Marsden Park", "Quakers Hill", "Colebee", "Grantham Farm", "Box Hill", "Rouse Hill"],
    intro: "BuildHire delivers excavators and construction equipment to Riverstone and North West Sydney — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Riverstone is a key suburb in North West Sydney's growth corridor, with new residential estates, commercial development, and infrastructure upgrades creating consistent demand for reliable plant hire. BuildHire delivers to Riverstone and all surrounding North West Sydney suburbs with late-model machines and next-day delivery.",
    bodyParagraph2: "For Riverstone estate construction, the 5.5T Yanmar and 14.5T Sumitomo handle bulk earthworks and footing preparation. For residential landscaping and pool work, the 3.5T Yanmar is the most popular choice. Our full fleet is available across the Riverstone area.",
    caseStudy: {
      client: "Mac Developments",
      projectType: "Residential estate development — bulk earthworks in Riverstone",
      equipment: "5.5T Excavator (ViO55 Yanmar)",
      outcome: "Riverstone estate development completed on schedule with consistent machine performance.",
      quote: "We've worked with Build Hire across a number of projects and they've been nothing but consistent. Their machines are new, well-maintained, and always arrive on time."
    },
    bodyParagraph3: "BuildHire delivers to Riverstone and all surrounding North West Sydney suburbs including Schofields, Marsden Park, Box Hill, and Quakers Hill. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Riverstone?", a: "Yes — BuildHire delivers to Riverstone and all surrounding North West Sydney suburbs including Schofields, Marsden Park, and Box Hill." },
      { q: "What excavator is best for Riverstone estate construction?", a: "The 5.5T Yanmar ViO55 is the most popular choice for Riverstone estate construction." },
      { q: "How do I book excavator hire in Riverstone?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery to Riverstone." }
    ],
    nearbyAreas: ["Schofields", "Marsden Park", "Box Hill", "Rouse Hill", "Blacktown"],
    nearbyAreaSlugs: ["schofields", "marsden-park", "box-hill", "rouse-hill", "blacktown"],
    coordinates: { lat: -33.6900, lng: 150.8600 }
  },
  {
    slug: "windsor",
    name: "Windsor",
    region: "Hawkesbury",
    state: "NSW",
    suburbs: ["Windsor", "Windsor Downs", "McGraths Hill", "Pitt Town", "Wilberforce", "Ebenezer", "Freemans Reach", "Cattai"],
    intro: "BuildHire delivers excavators and construction equipment to Windsor and the Hawkesbury region — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Windsor and the Hawkesbury region combine rural residential development with a growing construction market driven by the Western Sydney Airport and the North West Growth Area. From acreage properties in Pitt Town and Wilberforce to new residential estates in Windsor Downs and McGraths Hill, BuildHire delivers the right machine for every Hawkesbury project.",
    bodyParagraph2: "Hawkesbury projects often involve larger blocks and rural access conditions. The 3.5T and 5.5T Yanmar excavators are the most popular choices for Hawkesbury residential work, while the 14.5T and 23T Sumitomo machines handle larger civil and infrastructure projects. Our tipper trucks are also popular in the Hawkesbury for spoil removal on larger rural properties.",
    caseStudy: {
      client: "FW Building",
      projectType: "Acreage development — site clearing and drainage in Windsor",
      equipment: "5.5T Excavator (ViO55 Yanmar)",
      outcome: "Windsor acreage development completed on schedule with the machine handling the larger block conditions efficiently.",
      quote: "We have used Build Hire on several occasions and couldn't be happier with the service. Their machines are unbelievable — always on site when they say, always in perfect condition."
    },
    bodyParagraph3: "BuildHire delivers to Windsor and all Hawkesbury suburbs including Windsor Downs, McGraths Hill, Pitt Town, and Wilberforce. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Windsor and the Hawkesbury?", a: "Yes — BuildHire delivers to Windsor and all Hawkesbury suburbs including Windsor Downs, McGraths Hill, Pitt Town, and Wilberforce." },
      { q: "What excavator is best for acreage properties in Windsor?", a: "The 5.5T Yanmar ViO55 is the most popular choice for Windsor acreage projects — site clearing, drainage, and earthworks on larger rural blocks." },
      { q: "Do you deliver tipper trucks to Windsor?", a: "Yes — tipper trucks are available alongside excavator hire and are popular in the Hawkesbury for spoil removal on larger rural properties." }
    ],
    nearbyAreas: ["Richmond", "Penrith", "Rouse Hill", "Box Hill", "Hawkesbury"],
    nearbyAreaSlugs: ["richmond", "penrith", "rouse-hill", "box-hill", "marsden-park"],
    coordinates: { lat: -33.6100, lng: 150.8100 }
  },
  {
    slug: "richmond",
    name: "Richmond",
    region: "Hawkesbury",
    state: "NSW",
    suburbs: ["Richmond", "North Richmond", "Clarendon", "Kurmond", "Glossodia", "Yarramundi", "Agnes Banks", "Londonderry"],
    intro: "BuildHire delivers excavators and construction equipment to Richmond and the Hawkesbury region — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Richmond and North Richmond are the Hawkesbury's commercial and residential hub, with a growing construction market driven by the region's proximity to the Western Sydney Airport and the North West Growth Area. BuildHire delivers to Richmond and all Hawkesbury suburbs with late-model machines and next-day delivery.",
    bodyParagraph2: "For Richmond residential projects, the 3.5T and 5.5T Yanmar excavators are the most popular choices. For larger acreage and rural projects in Clarendon, Kurmond, and Glossodia, the 5.5T and 14.5T machines handle the bulk earthworks and site clearing required. Our tipper trucks are also popular in the Richmond area for spoil removal.",
    caseStudy: {
      client: "Almighty Fencing",
      projectType: "Post-hole excavation across Richmond residential and rural projects",
      equipment: "1.7T Mini Excavator (ViO17 Yanmar)",
      outcome: "Multiple Richmond-area fencing installations completed efficiently with consistent machine performance.",
      quote: "We've used Build Hire a number of times now and they've been solid every single job. The machines are top quality and performance is always consistent."
    },
    bodyParagraph3: "BuildHire delivers to Richmond and all Hawkesbury suburbs including North Richmond, Clarendon, Kurmond, and Glossodia. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Richmond and the Hawkesbury?", a: "Yes — BuildHire delivers to Richmond and all Hawkesbury suburbs including North Richmond, Clarendon, Kurmond, and Glossodia." },
      { q: "What excavator is best for Richmond residential projects?", a: "The 3.5T Yanmar ViO35 is the most popular choice for Richmond residential work — pool excavations, retaining walls, and drainage." },
      { q: "How do I book excavator hire in Richmond?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery to Richmond." }
    ],
    nearbyAreas: ["Windsor", "Penrith", "Rouse Hill", "Hawkesbury", "Blue Mountains"],
    nearbyAreaSlugs: ["windsor", "penrith", "rouse-hill", "marsden-park", "blue-mountains"],
    coordinates: { lat: -33.5980, lng: 150.7510 }
  },
  {
    slug: "oran-park",
    name: "Oran Park",
    region: "South Western Sydney",
    state: "NSW",
    suburbs: ["Oran Park", "Gregory Hills", "Gledswood Hills", "Harrington Park", "Narellan", "Camden", "Elderslie", "Mount Annan"],
    intro: "BuildHire delivers excavators and construction equipment to Oran Park and the Camden growth corridor — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Oran Park and the surrounding Camden growth corridor — Gregory Hills, Gledswood Hills, Harrington Park, and Narellan — are among the fastest-growing residential precincts in NSW. New land releases and estate development create constant demand for reliable plant hire. BuildHire delivers to Oran Park and the Camden corridor with late-model machines and next-day delivery.",
    bodyParagraph2: "For Oran Park estate construction, the 5.5T Yanmar and 14.5T Sumitomo handle bulk earthworks and footing preparation. For residential landscaping and pool work in established streets, the 3.5T Yanmar is the most popular choice.",
    caseStudy: {
      client: "Mac Developments",
      projectType: "Residential estate development — bulk earthworks in Oran Park",
      equipment: "5.5T Excavator (ViO55 Yanmar)",
      outcome: "Oran Park estate development completed on schedule with consistent machine performance.",
      quote: "We've worked with Build Hire across a number of projects and they've been nothing but consistent. Their machines are new, well-maintained, and always arrive on time."
    },
    bodyParagraph3: "BuildHire delivers to Oran Park and all Camden corridor suburbs including Gregory Hills, Gledswood Hills, Harrington Park, Narellan, and Camden. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Oran Park and the Camden corridor?", a: "Yes — BuildHire delivers to Oran Park, Gregory Hills, Gledswood Hills, Harrington Park, Narellan, and Camden." },
      { q: "What excavator is best for Oran Park estate construction?", a: "The 5.5T Yanmar ViO55 is the most popular choice for Oran Park estate construction — bulk earthworks and footing excavation." },
      { q: "How do I book excavator hire in Oran Park?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery to Oran Park." }
    ],
    nearbyAreas: ["Gregory Hills", "Narellan", "Camden", "Campbelltown", "Liverpool"],
    nearbyAreaSlugs: ["gregory-hills", "narellan", "camden", "campbelltown", "liverpool"],
    coordinates: { lat: -34.0100, lng: 150.7400 }
  },
  {
    slug: "leppington",
    name: "Leppington",
    region: "South Western Sydney",
    state: "NSW",
    suburbs: ["Leppington", "Austral", "Edmondson Park", "Oran Park", "Denham Court", "Rossmore", "Bringelly", "Catherine Field"],
    intro: "BuildHire delivers excavators and construction equipment to Leppington and the South West Growth Area — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Leppington and the South West Growth Area — Austral, Edmondson Park, Denham Court, and the surrounding precincts — are at the centre of Sydney's most significant residential expansion. New land releases and estate development across this corridor create enormous demand for reliable plant hire. BuildHire delivers to Leppington and the South West Growth Area with late-model machines and next-day delivery.",
    bodyParagraph2: "For Leppington estate construction, the 5.5T Yanmar and 14.5T Sumitomo handle bulk earthworks and footing preparation. For residential landscaping and pool work in established streets, the 3.5T Yanmar is the most popular choice.",
    caseStudy: {
      client: "FW Building",
      projectType: "Bulk earthworks and drainage across Leppington estate development",
      equipment: "5.5T Excavator (ViO55 Yanmar)",
      outcome: "Leppington estate development completed on schedule with consistent machine performance.",
      quote: "We have used Build Hire on several occasions and couldn't be happier with the service. Their machines are unbelievable — always on site when they say, always in perfect condition."
    },
    bodyParagraph3: "BuildHire delivers to Leppington and all South West Growth Area suburbs including Austral, Edmondson Park, Denham Court, and Rossmore. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Leppington and the South West Growth Area?", a: "Yes — BuildHire delivers to Leppington, Austral, Edmondson Park, Denham Court, and the surrounding South West Growth Area suburbs." },
      { q: "What excavator is best for Leppington estate construction?", a: "The 5.5T Yanmar ViO55 is the most popular choice for Leppington estate construction." },
      { q: "How do I book excavator hire in Leppington?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery to Leppington." }
    ],
    nearbyAreas: ["Edmondson Park", "Oran Park", "Liverpool", "Campbelltown", "Narellan"],
    nearbyAreaSlugs: ["edmondson-park", "oran-park", "liverpool", "campbelltown", "narellan"],
    coordinates: { lat: -33.9600, lng: 150.7900 }
  },
  {
    slug: "edmondson-park",
    name: "Edmondson Park",
    region: "South Western Sydney",
    state: "NSW",
    suburbs: ["Edmondson Park", "Leppington", "Austral", "Denham Court", "Oran Park", "Bardia", "Prestons", "Casula"],
    intro: "BuildHire delivers excavators and construction equipment to Edmondson Park and South Western Sydney — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Edmondson Park is a rapidly growing residential suburb in South Western Sydney, with new estates and infrastructure development creating consistent demand for reliable plant hire. BuildHire delivers to Edmondson Park and all surrounding South Western Sydney suburbs with late-model machines and next-day delivery.",
    bodyParagraph2: "For Edmondson Park estate construction, the 5.5T Yanmar and 14.5T Sumitomo handle bulk earthworks and footing preparation. For residential landscaping and pool work, the 3.5T Yanmar is the most popular choice.",
    caseStudy: {
      client: "Mac Developments",
      projectType: "Residential estate development in Edmondson Park",
      equipment: "5.5T Excavator (ViO55 Yanmar)",
      outcome: "Edmondson Park estate development completed on schedule.",
      quote: "We've worked with Build Hire across a number of projects and they've been nothing but consistent. Their machines are new, well-maintained, and always arrive on time."
    },
    bodyParagraph3: "BuildHire delivers to Edmondson Park and all surrounding South Western Sydney suburbs including Leppington, Austral, Denham Court, and Bardia. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Edmondson Park?", a: "Yes — BuildHire delivers to Edmondson Park and all surrounding South Western Sydney suburbs." },
      { q: "What excavator is best for Edmondson Park residential construction?", a: "The 5.5T Yanmar ViO55 is the most popular choice for Edmondson Park estate construction." },
      { q: "How do I book excavator hire in Edmondson Park?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery." }
    ],
    nearbyAreas: ["Leppington", "Oran Park", "Liverpool", "Campbelltown", "Prestons"],
    nearbyAreaSlugs: ["leppington", "oran-park", "liverpool", "campbelltown", "narellan"],
    coordinates: { lat: -33.9800, lng: 150.8200 }
  },
  {
    slug: "gregory-hills",
    name: "Gregory Hills",
    region: "South Western Sydney",
    state: "NSW",
    suburbs: ["Gregory Hills", "Gledswood Hills", "Oran Park", "Harrington Park", "Narellan Vale", "Camden South", "Cobbitty", "Kirkham"],
    intro: "BuildHire delivers excavators and construction equipment to Gregory Hills and the Camden growth corridor — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Gregory Hills and Gledswood Hills are premium residential precincts in the Camden growth corridor, with a high concentration of new estate development and residential construction. BuildHire delivers to Gregory Hills and all Camden corridor suburbs with late-model machines and next-day delivery.",
    bodyParagraph2: "For Gregory Hills estate construction, the 5.5T Yanmar and 14.5T Sumitomo handle bulk earthworks and footing preparation. For residential landscaping and pool work in established streets, the 3.5T Yanmar is the most popular choice.",
    caseStudy: {
      client: "FW Building",
      projectType: "Pool excavation and retaining wall in Gregory Hills",
      equipment: "3.5T Excavator (ViO35-7 Yanmar)",
      outcome: "Gregory Hills residential project completed on schedule with consistent machine performance.",
      quote: "We have used Build Hire on several occasions and couldn't be happier with the service. Their machines are unbelievable — always on site when they say, always in perfect condition."
    },
    bodyParagraph3: "BuildHire delivers to Gregory Hills and all Camden corridor suburbs including Gledswood Hills, Oran Park, Harrington Park, and Narellan. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Gregory Hills?", a: "Yes — BuildHire delivers to Gregory Hills and all Camden corridor suburbs including Gledswood Hills, Oran Park, and Narellan." },
      { q: "What excavator is best for Gregory Hills residential projects?", a: "The 3.5T Yanmar ViO35 is the most popular choice for Gregory Hills residential work — pool excavations, retaining walls, and drainage." },
      { q: "How do I book excavator hire in Gregory Hills?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery." }
    ],
    nearbyAreas: ["Oran Park", "Narellan", "Camden", "Campbelltown", "Liverpool"],
    nearbyAreaSlugs: ["oran-park", "narellan", "camden", "campbelltown", "liverpool"],
    coordinates: { lat: -34.0400, lng: 150.7700 }
  },
  {
    slug: "narellan",
    name: "Narellan",
    region: "South Western Sydney",
    state: "NSW",
    suburbs: ["Narellan", "Narellan Vale", "Mount Annan", "Harrington Park", "Currans Hill", "Camden South", "Elderslie", "Spring Farm"],
    intro: "BuildHire delivers excavators and construction equipment to Narellan and the Camden area — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Narellan is the commercial hub of the Camden growth corridor, surrounded by some of South Western Sydney's most active residential construction precincts. Mount Annan, Harrington Park, Currans Hill, and Elderslie all have strong demand for reliable plant hire. BuildHire delivers to Narellan and all Camden area suburbs with late-model machines and next-day delivery.",
    bodyParagraph2: "For Narellan area residential projects, the 3.5T and 5.5T Yanmar excavators are the most popular choices — pool excavations, retaining walls, drainage, and footing preparation. Our full fleet is available across the Camden growth corridor.",
    caseStudy: {
      client: "Almighty Fencing",
      projectType: "Post-hole excavation across Narellan residential projects",
      equipment: "1.7T Mini Excavator (ViO17 Yanmar)",
      outcome: "Multiple Narellan-area fencing installations completed on schedule.",
      quote: "We've used Build Hire a number of times now and they've been solid every single job. The machines are top quality and performance is always consistent."
    },
    bodyParagraph3: "BuildHire delivers to Narellan and all Camden area suburbs including Narellan Vale, Mount Annan, Harrington Park, Currans Hill, and Elderslie. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Narellan and Camden?", a: "Yes — BuildHire delivers to Narellan and all Camden area suburbs including Narellan Vale, Mount Annan, Harrington Park, and Elderslie." },
      { q: "What excavator is best for Narellan residential projects?", a: "The 3.5T Yanmar ViO35 is the most popular choice for Narellan residential work." },
      { q: "How do I book excavator hire in Narellan?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery." }
    ],
    nearbyAreas: ["Camden", "Oran Park", "Gregory Hills", "Campbelltown", "Liverpool"],
    nearbyAreaSlugs: ["camden", "oran-park", "gregory-hills", "campbelltown", "liverpool"],
    coordinates: { lat: -34.0400, lng: 150.7300 }
  },
  {
    slug: "camden",
    name: "Camden",
    region: "South Western Sydney",
    state: "NSW",
    suburbs: ["Camden", "Camden South", "Elderslie", "Spring Farm", "Kirkham", "Cobbitty", "Grasmere", "Cawdor"],
    intro: "BuildHire delivers excavators and construction equipment to Camden and the Macarthur region — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Camden is the historic heart of the Macarthur region and the gateway to South Western Sydney's most significant growth corridors. From the heritage streetscapes of Camden town to the new residential estates of Spring Farm and Elderslie, BuildHire delivers reliable plant hire to the full Camden area with late-model machines and next-day delivery.",
    bodyParagraph2: "For Camden residential projects, the 3.5T and 5.5T Yanmar excavators are the most popular choices. For acreage and rural properties in Cobbitty, Grasmere, and Cawdor, the 5.5T and 14.5T machines handle larger earthworks requirements.",
    caseStudy: {
      client: "Mac Developments",
      projectType: "Residential development — footing excavation and drainage in Camden",
      equipment: "3.5T Excavator (ViO35-7 Yanmar)",
      outcome: "Camden residential project completed on schedule with consistent machine performance.",
      quote: "We've worked with Build Hire across a number of projects and they've been nothing but consistent. Their machines are new, well-maintained, and always arrive on time."
    },
    bodyParagraph3: "BuildHire delivers to Camden and all surrounding suburbs including Camden South, Elderslie, Spring Farm, Kirkham, Cobbitty, and Grasmere. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Camden?", a: "Yes — BuildHire delivers to Camden and all surrounding suburbs including Camden South, Elderslie, Spring Farm, Cobbitty, and Grasmere." },
      { q: "What excavator is best for Camden residential projects?", a: "The 3.5T Yanmar ViO35 is the most popular choice for Camden residential work." },
      { q: "How do I book excavator hire in Camden?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery." }
    ],
    nearbyAreas: ["Narellan", "Campbelltown", "Picton", "Oran Park", "Gregory Hills"],
    nearbyAreaSlugs: ["narellan", "campbelltown", "picton", "oran-park", "gregory-hills"],
    coordinates: { lat: -34.0540, lng: 150.6990 }
  },
  {
    slug: "picton",
    name: "Picton",
    region: "Macarthur",
    state: "NSW",
    suburbs: ["Picton", "Thirlmere", "Tahmoor", "Buxton", "Bargo", "Douglas Park", "Maldon", "Wilton"],
    intro: "BuildHire delivers excavators and construction equipment to Picton and the Southern Highlands gateway — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Picton and the surrounding Wollondilly Shire are experiencing significant growth driven by the Western Sydney Airport and the Wilton New Town development. From rural residential properties in Thirlmere and Buxton to the new Wilton estate, BuildHire delivers reliable plant hire to the Picton area with late-model machines and next-day delivery.",
    bodyParagraph2: "For Picton area projects, the 3.5T and 5.5T Yanmar excavators handle most residential and rural requirements. For the larger earthworks required in the Wilton New Town development, the 14.5T and 23T Sumitomo machines provide the capacity needed.",
    caseStudy: {
      client: "FW Building",
      projectType: "Rural residential development — site clearing and drainage in Picton",
      equipment: "5.5T Excavator (ViO55 Yanmar)",
      outcome: "Picton rural residential project completed on schedule.",
      quote: "We have used Build Hire on several occasions and couldn't be happier with the service. Their machines are unbelievable — always on site when they say, always in perfect condition."
    },
    bodyParagraph3: "BuildHire delivers to Picton and all Wollondilly Shire suburbs including Thirlmere, Tahmoor, Buxton, Bargo, Douglas Park, and Wilton. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Picton and Wollondilly?", a: "Yes — BuildHire delivers to Picton and all Wollondilly Shire suburbs including Thirlmere, Tahmoor, Buxton, Bargo, and Wilton." },
      { q: "What excavator is best for rural residential projects in Picton?", a: "The 5.5T Yanmar ViO55 is the most popular choice for Picton rural residential projects — site clearing, drainage, and earthworks on larger blocks." },
      { q: "How do I book excavator hire in Picton?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery." }
    ],
    nearbyAreas: ["Camden", "Campbelltown", "Appin", "Wollongong", "Southern Highlands"],
    nearbyAreaSlugs: ["camden", "campbelltown", "appin", "wollongong", "narellan"],
    coordinates: { lat: -34.1700, lng: 150.6100 }
  },
  {
    slug: "appin",
    name: "Appin",
    region: "Macarthur",
    state: "NSW",
    suburbs: ["Appin", "Wedderburn", "Gilead", "Menangle", "Menangle Park", "Douglas Park", "Wilton", "Bargo"],
    intro: "BuildHire delivers excavators and construction equipment to Appin and the Macarthur region — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Appin and the surrounding Macarthur region are experiencing significant growth driven by the Western Sydney Airport and new residential development in Wilton and Menangle Park. BuildHire delivers reliable plant hire to the Appin area with late-model machines and next-day delivery.",
    bodyParagraph2: "For Appin area projects, the 3.5T and 5.5T Yanmar excavators handle most residential and rural requirements. For larger earthworks in the Wilton New Town development, the 14.5T and 23T Sumitomo machines provide the capacity needed.",
    caseStudy: {
      client: "Mac Developments",
      projectType: "Rural residential development in Appin",
      equipment: "5.5T Excavator (ViO55 Yanmar)",
      outcome: "Appin rural residential project completed on schedule.",
      quote: "We've worked with Build Hire across a number of projects and they've been nothing but consistent. Their machines are new, well-maintained, and always arrive on time."
    },
    bodyParagraph3: "BuildHire delivers to Appin and all surrounding Macarthur suburbs including Wedderburn, Menangle, Wilton, and Douglas Park. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Appin?", a: "Yes — BuildHire delivers to Appin and all surrounding Macarthur suburbs including Wedderburn, Menangle, Wilton, and Douglas Park." },
      { q: "What excavator is best for Appin rural projects?", a: "The 5.5T Yanmar ViO55 is the most popular choice for Appin rural residential projects." },
      { q: "How do I book excavator hire in Appin?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery." }
    ],
    nearbyAreas: ["Campbelltown", "Picton", "Camden", "Wollongong", "Liverpool"],
    nearbyAreaSlugs: ["campbelltown", "picton", "camden", "wollongong", "liverpool"],
    coordinates: { lat: -34.2000, lng: 150.7900 }
  },
  {
    slug: "minto",
    name: "Minto",
    region: "South Western Sydney",
    state: "NSW",
    suburbs: ["Minto", "Minto Heights", "Ingleburn", "Macquarie Fields", "Leumeah", "Claymore", "Raby", "Eagle Vale"],
    intro: "BuildHire delivers excavators and construction equipment to Minto and South Western Sydney — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Minto and Ingleburn are established residential suburbs in South Western Sydney with a strong construction and renovation market. BuildHire delivers to Minto and all surrounding South Western Sydney suburbs with late-model machines and next-day delivery.",
    bodyParagraph2: "For Minto residential projects, the 1.7T and 3.5T Yanmar excavators are the most popular choices — pool excavations, retaining walls, drainage, and footing preparation. Our full fleet is available across the Minto and Ingleburn area.",
    caseStudy: {
      client: "Almighty Fencing",
      projectType: "Post-hole excavation across Minto residential projects",
      equipment: "1.7T Mini Excavator (ViO17 Yanmar)",
      outcome: "Multiple Minto-area fencing installations completed on schedule.",
      quote: "We've used Build Hire a number of times now and they've been solid every single job. The machines are top quality and performance is always consistent."
    },
    bodyParagraph3: "BuildHire delivers to Minto and all surrounding South Western Sydney suburbs including Minto Heights, Ingleburn, Macquarie Fields, and Leumeah. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Minto and Ingleburn?", a: "Yes — BuildHire delivers to Minto, Ingleburn, Macquarie Fields, and all surrounding South Western Sydney suburbs." },
      { q: "What excavator is best for Minto residential projects?", a: "The 1.7T and 3.5T Yanmar excavators are the most popular choices for Minto residential work." },
      { q: "How do I book excavator hire in Minto?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery." }
    ],
    nearbyAreas: ["Campbelltown", "Liverpool", "Ingleburn", "Macquarie Fields", "Narellan"],
    nearbyAreaSlugs: ["campbelltown", "liverpool", "narellan", "camden", "oran-park"],
    coordinates: { lat: -34.0200, lng: 150.8400 }
  },
  {
    slug: "fairfield",
    name: "Fairfield",
    region: "South Western Sydney",
    state: "NSW",
    suburbs: ["Fairfield", "Fairfield Heights", "Fairfield West", "Cabramatta", "Canley Vale", "Canley Heights", "Smithfield", "Wetherill Park"],
    intro: "BuildHire delivers excavators and construction equipment to Fairfield and South Western Sydney — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Fairfield and the surrounding suburbs — Cabramatta, Canley Vale, Smithfield, and Wetherill Park — are home to a high concentration of residential builders, landscapers, and tradespeople who rely on consistent plant hire. BuildHire delivers to Fairfield and all surrounding South Western Sydney suburbs with late-model machines and next-day delivery.",
    bodyParagraph2: "For Fairfield residential projects, the 1.7T and 3.5T Yanmar excavators are the most popular choices — pool excavations, retaining walls, drainage, and footing preparation. Our full fleet is available across the Fairfield area.",
    caseStudy: {
      client: "FW Building",
      projectType: "Drainage and footing excavation in Fairfield",
      equipment: "3.5T Excavator (ViO35-7 Yanmar)",
      outcome: "Fairfield residential project completed on schedule.",
      quote: "We have used Build Hire on several occasions and couldn't be happier with the service. Their machines are unbelievable — always on site when they say, always in perfect condition."
    },
    bodyParagraph3: "BuildHire delivers to Fairfield and all surrounding South Western Sydney suburbs including Cabramatta, Canley Vale, Smithfield, and Wetherill Park. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Fairfield and Cabramatta?", a: "Yes — BuildHire delivers to Fairfield, Cabramatta, Canley Vale, Smithfield, and all surrounding South Western Sydney suburbs." },
      { q: "What excavator is best for Fairfield residential projects?", a: "The 1.7T and 3.5T Yanmar excavators are the most popular choices for Fairfield residential work." },
      { q: "How do I book excavator hire in Fairfield?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery." }
    ],
    nearbyAreas: ["Liverpool", "Bankstown", "Cabramatta", "Parramatta", "Campbelltown"],
    nearbyAreaSlugs: ["liverpool", "bankstown", "cabramatta", "parramatta", "campbelltown"],
    coordinates: { lat: -33.8700, lng: 150.9500 }
  },
  {
    slug: "cabramatta",
    name: "Cabramatta",
    region: "South Western Sydney",
    state: "NSW",
    suburbs: ["Cabramatta", "Cabramatta West", "Canley Vale", "Canley Heights", "Lansvale", "Carramar", "Villawood", "Leightonfield"],
    intro: "BuildHire delivers excavators and construction equipment to Cabramatta and South Western Sydney — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Cabramatta and the surrounding South Western Sydney suburbs are home to a busy residential construction and renovation market. BuildHire delivers to Cabramatta and all surrounding suburbs with late-model machines and next-day delivery.",
    bodyParagraph2: "For Cabramatta residential projects, the 1.7T and 3.5T Yanmar excavators are the most popular choices — pool excavations, retaining walls, drainage, and footing preparation. Our full fleet is available across the Cabramatta area, including Canley Vale, Canley Heights, and Villawood.",
    caseStudy: {
      client: "Almighty Fencing",
      projectType: "Post-hole excavation across Cabramatta residential projects",
      equipment: "1.7T Mini Excavator (ViO17 Yanmar)",
      outcome: "Multiple Cabramatta-area fencing installations completed on schedule.",
      quote: "We've used Build Hire a number of times now and they've been solid every single job. The machines are top quality and performance is always consistent."
    },
    bodyParagraph3: "BuildHire delivers to Cabramatta and all surrounding South Western Sydney suburbs including Canley Vale, Canley Heights, Lansvale, Carramar, and Villawood. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Cabramatta?", a: "Yes — BuildHire delivers to Cabramatta, Canley Vale, Canley Heights, Villawood, and all surrounding South Western Sydney suburbs." },
      { q: "What excavator is best for Cabramatta residential projects?", a: "The 1.7T and 3.5T Yanmar excavators are the most popular choices for Cabramatta residential work." },
      { q: "How do I book excavator hire in Cabramatta?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery." }
    ],
    nearbyAreas: ["Fairfield", "Liverpool", "Bankstown", "Parramatta", "Campbelltown"],
    nearbyAreaSlugs: ["fairfield", "liverpool", "bankstown", "parramatta", "campbelltown"],
    coordinates: { lat: -33.8950, lng: 150.9350 }
  },
  {
    slug: "cronulla",
    name: "Cronulla",
    region: "Sutherland Shire",
    state: "NSW",
    suburbs: ["Cronulla", "Caringbah", "Miranda", "Gymea", "Woolooware", "Burraneer", "Kurnell", "Bundeena"],
    intro: "BuildHire delivers excavators and construction equipment to Cronulla and the Sutherland Shire — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Cronulla and the Sutherland Shire are home to a thriving residential construction market. Pool excavations, retaining walls, and landscaping projects are a daily occurrence across Caringbah, Miranda, and Gymea. BuildHire delivers to Cronulla and all surrounding Sutherland Shire suburbs with late-model Yanmar machines and guaranteed next-day delivery when you book by 12pm.",
    bodyParagraph2: "The coastal terrain across Cronulla and the Shire often demands compact, manoeuvrable equipment. Our 0.8T and 1.7T mini excavators are ideal for tight residential access — narrow side gates, established gardens, and beachside properties where a larger machine won't fit. For pool excavations and larger earthworks, the 3.5T and 5.5T Yanmar excavators deliver the power and precision that Sutherland Shire projects demand.",
    caseStudy: {
      client: "Mac Developments",
      projectType: "Pool excavation and site preparation in Cronulla",
      equipment: "3.5T Excavator (ViO35-7 Yanmar)",
      outcome: "Pool excavation completed on schedule with no damage to surrounding landscaping.",
      quote: "BuildHire has been fantastic for our pool builds in the Shire. The machines always arrive on time and in perfect condition — exactly what you need when you're working to a tight programme."
    },
    bodyParagraph3: "BuildHire delivers to Cronulla and all surrounding Sutherland Shire suburbs including Caringbah, Miranda, Gymea, Woolooware, and Kurnell. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Cronulla and the Sutherland Shire?", a: "Yes — BuildHire delivers to Cronulla, Caringbah, Miranda, Gymea, and all surrounding Sutherland Shire suburbs." },
      { q: "What excavator is best for pool excavations in Cronulla?", a: "The 3.5T Yanmar ViO35-7 is the most popular choice for pool excavations in Cronulla and the Shire — powerful enough for the job, compact enough for residential access." },
      { q: "How do I book excavator hire in Cronulla?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery to Cronulla." }
    ],
    nearbyAreas: ["Sutherland", "Miranda", "Caringbah", "Gymea", "St George"],
    nearbyAreaSlugs: ["sutherland", "st-george", "bankstown", "liverpool", "campbelltown"],
    coordinates: { lat: -34.0560, lng: 151.1520 }
  },
  {
    slug: "ryde",
    name: "Ryde",
    region: "Northern Sydney",
    state: "NSW",
    suburbs: ["Ryde", "Meadowbank", "West Ryde", "Eastwood", "Ermington", "Shepherd's Bay", "Putney", "Gladesville"],
    intro: "BuildHire delivers excavators and construction equipment to Ryde and Northern Sydney — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Ryde and the surrounding Northern Sydney suburbs — Meadowbank, Eastwood, Ermington, and Gladesville — are experiencing significant residential densification. New townhouse developments, dual-occupancy builds, and major landscaping projects are driving strong demand for reliable plant hire. BuildHire delivers to Ryde and all surrounding suburbs with late-model machines and next-day delivery.",
    bodyParagraph2: "For Ryde residential and development projects, the 1.7T and 3.5T Yanmar excavators are the most popular choices. The compact machines handle tight residential sites with ease, while the 5.5T excavator is available for larger earthworks and civil projects across the Ryde LGA.",
    caseStudy: {
      client: "FW Building",
      projectType: "Townhouse development site preparation in Ryde",
      equipment: "3.5T Excavator (ViO35-7 Yanmar)",
      outcome: "Multiple townhouse sites prepared on schedule across the Ryde area.",
      quote: "We have used Build Hire on several occasions and couldn't be happier with the service. Their machines are unbelievable — always on site when they say, always in perfect condition."
    },
    bodyParagraph3: "BuildHire delivers to Ryde and all surrounding Northern Sydney suburbs including Meadowbank, West Ryde, Eastwood, Ermington, and Gladesville. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Ryde and Meadowbank?", a: "Yes — BuildHire delivers to Ryde, Meadowbank, West Ryde, Eastwood, Ermington, and all surrounding Northern Sydney suburbs." },
      { q: "What excavator is best for Ryde townhouse developments?", a: "The 3.5T Yanmar ViO35-7 is ideal for Ryde townhouse and dual-occupancy sites — powerful enough for footing excavation, compact enough for tight residential access." },
      { q: "How do I book excavator hire in Ryde?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery to Ryde." }
    ],
    nearbyAreas: ["Chatswood", "Parramatta", "North Sydney", "Hornsby", "Eastern Suburbs"],
    nearbyAreaSlugs: ["chatswood", "parramatta", "hornsby", "northern-beaches", "eastern-suburbs"],
    coordinates: { lat: -33.8170, lng: 151.1000 }
  },
  {
    slug: "strathfield",
    name: "Strathfield",
    region: "Inner West",
    state: "NSW",
    suburbs: ["Strathfield", "Homebush", "Homebush West", "Flemington", "North Strathfield", "Redmyre", "Burwood", "Croydon"],
    intro: "BuildHire delivers excavators and construction equipment to Strathfield and the Inner West — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Strathfield and the surrounding Inner West suburbs — Homebush, Burwood, and Croydon — are among Sydney's most active residential renovation and development corridors. Heritage homes being extended, dual-occupancy sites being subdivided, and new townhouse projects are generating consistent demand for compact, reliable plant hire. BuildHire delivers to Strathfield and all surrounding suburbs with late-model machines and next-day delivery.",
    bodyParagraph2: "For Strathfield residential projects, the 0.8T and 1.7T mini excavators are the most popular choices — ideal for tight side access, established gardens, and inner-city sites where a larger machine won't fit. The 3.5T excavator is available for pool excavations, retaining walls, and larger earthworks across the Strathfield and Homebush area.",
    caseStudy: {
      client: "Almighty Fencing",
      projectType: "Post-hole excavation across Strathfield residential projects",
      equipment: "1.7T Mini Excavator (ViO17 Yanmar)",
      outcome: "Multiple Strathfield-area fencing installations completed on schedule.",
      quote: "We've used Build Hire a number of times now and they've been solid every single job. The machines are top quality and performance is always consistent."
    },
    bodyParagraph3: "BuildHire delivers to Strathfield and all surrounding Inner West suburbs including Homebush, Homebush West, Flemington, North Strathfield, Burwood, and Croydon. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Strathfield and Homebush?", a: "Yes — BuildHire delivers to Strathfield, Homebush, Burwood, Croydon, and all surrounding Inner West suburbs." },
      { q: "What excavator is best for Strathfield residential projects?", a: "The 0.8T and 1.7T mini excavators are ideal for tight Strathfield residential sites. For larger works, the 3.5T Yanmar is the most popular choice." },
      { q: "How do I book excavator hire in Strathfield?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery to Strathfield." }
    ],
    nearbyAreas: ["Inner West", "Parramatta", "Bankstown", "Chatswood", "Eastern Suburbs"],
    nearbyAreaSlugs: ["inner-west", "parramatta", "bankstown", "chatswood", "eastern-suburbs"],
    coordinates: { lat: -33.8760, lng: 151.0820 }
  },
  {
    slug: "auburn",
    name: "Auburn",
    region: "Western Sydney",
    state: "NSW",
    suburbs: ["Auburn", "Berala", "Lidcombe", "Regents Park", "Birrong", "Rookwood", "Clyde", "Granville"],
    intro: "BuildHire delivers excavators and construction equipment to Auburn and Western Sydney — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Auburn and the surrounding Western Sydney suburbs — Lidcombe, Berala, Regents Park, and Granville — are home to a high concentration of residential builders and tradespeople. BuildHire delivers to Auburn and all surrounding Western Sydney suburbs with late-model machines and next-day delivery.",
    bodyParagraph2: "For Auburn residential projects, the 1.7T and 3.5T Yanmar excavators are the most popular choices — pool excavations, retaining walls, drainage, and footing preparation. Our full fleet is available across the Auburn and Western Sydney area.",
    caseStudy: {
      client: "FW Building",
      projectType: "Drainage and footing excavation in Auburn",
      equipment: "3.5T Excavator (ViO35-7 Yanmar)",
      outcome: "Auburn residential project completed on schedule.",
      quote: "We have used Build Hire on several occasions and couldn't be happier with the service. Their machines are unbelievable — always on site when they say, always in perfect condition."
    },
    bodyParagraph3: "BuildHire delivers to Auburn and all surrounding Western Sydney suburbs including Lidcombe, Berala, Regents Park, Birrong, and Granville. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Auburn and Lidcombe?", a: "Yes — BuildHire delivers to Auburn, Lidcombe, Berala, Regents Park, and all surrounding Western Sydney suburbs." },
      { q: "What excavator is best for Auburn residential projects?", a: "The 1.7T and 3.5T Yanmar excavators are the most popular choices for Auburn residential work." },
      { q: "How do I book excavator hire in Auburn?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery." }
    ],
    nearbyAreas: ["Parramatta", "Bankstown", "Strathfield", "Liverpool", "Blacktown"],
    nearbyAreaSlugs: ["parramatta", "bankstown", "strathfield", "liverpool", "blacktown"],
    coordinates: { lat: -33.8490, lng: 151.0330 }
  },
  {
    slug: "seven-hills",
    name: "Seven Hills",
    region: "Western Sydney",
    state: "NSW",
    suburbs: ["Seven Hills", "Toongabbie", "Old Toongabbie", "Girraween", "Wentworthville", "Pendle Hill", "Prospect", "Blacktown"],
    intro: "BuildHire delivers excavators and construction equipment to Seven Hills and Western Sydney — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Seven Hills and the surrounding Western Sydney suburbs — Toongabbie, Girraween, Wentworthville, and Pendle Hill — are home to a busy residential construction and renovation market. BuildHire delivers to Seven Hills and all surrounding suburbs with late-model machines and next-day delivery.",
    bodyParagraph2: "For Seven Hills residential projects, the 1.7T and 3.5T Yanmar excavators are the most popular choices — pool excavations, retaining walls, drainage, and footing preparation. Our full fleet is available across the Seven Hills and Western Sydney area.",
    caseStudy: {
      client: "Almighty Fencing",
      projectType: "Post-hole excavation across Seven Hills residential projects",
      equipment: "1.7T Mini Excavator (ViO17 Yanmar)",
      outcome: "Multiple Seven Hills-area fencing installations completed on schedule.",
      quote: "We've used Build Hire a number of times now and they've been solid every single job. The machines are top quality and performance is always consistent."
    },
    bodyParagraph3: "BuildHire delivers to Seven Hills and all surrounding Western Sydney suburbs including Toongabbie, Old Toongabbie, Girraween, Wentworthville, and Pendle Hill. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Seven Hills and Toongabbie?", a: "Yes — BuildHire delivers to Seven Hills, Toongabbie, Girraween, Wentworthville, and all surrounding Western Sydney suburbs." },
      { q: "What excavator is best for Seven Hills residential projects?", a: "The 1.7T and 3.5T Yanmar excavators are the most popular choices for Seven Hills residential work." },
      { q: "How do I book excavator hire in Seven Hills?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery." }
    ],
    nearbyAreas: ["Blacktown", "Parramatta", "Castle Hill", "Baulkham Hills", "Penrith"],
    nearbyAreaSlugs: ["blacktown", "parramatta", "castle-hill", "baulkham-hills", "penrith"],
    coordinates: { lat: -33.7720, lng: 150.9380 }
  },
  {
    slug: "merrylands",
    name: "Merrylands",
    region: "Western Sydney",
    state: "NSW",
    suburbs: ["Merrylands", "Merrylands West", "Guildford", "Guildford West", "South Granville", "Woodville", "Granville", "Harris Park"],
    intro: "BuildHire delivers excavators and construction equipment to Merrylands and Western Sydney — next-day delivery, late-model machines, and transparent pricing.",
    bodyParagraph1: "Merrylands and the surrounding Western Sydney suburbs — Guildford, Granville, and Harris Park — are home to a busy residential construction and renovation market. BuildHire delivers to Merrylands and all surrounding suburbs with late-model machines and next-day delivery.",
    bodyParagraph2: "For Merrylands residential projects, the 1.7T and 3.5T Yanmar excavators are the most popular choices — pool excavations, retaining walls, drainage, and footing preparation. Our full fleet is available across the Merrylands and Western Sydney area.",
    caseStudy: {
      client: "FW Building",
      projectType: "Drainage and footing excavation in Merrylands",
      equipment: "3.5T Excavator (ViO35-7 Yanmar)",
      outcome: "Merrylands residential project completed on schedule.",
      quote: "We have used Build Hire on several occasions and couldn't be happier with the service. Their machines are unbelievable — always on site when they say, always in perfect condition."
    },
    bodyParagraph3: "BuildHire delivers to Merrylands and all surrounding Western Sydney suburbs including Guildford, Guildford West, South Granville, Woodville, and Granville. Get an instant online price or WhatsApp our team. Next-day delivery guaranteed when you book by 12pm.",
    faqs: [
      { q: "Do you deliver excavators to Merrylands and Guildford?", a: "Yes — BuildHire delivers to Merrylands, Guildford, Granville, Harris Park, and all surrounding Western Sydney suburbs." },
      { q: "What excavator is best for Merrylands residential projects?", a: "The 1.7T and 3.5T Yanmar excavators are the most popular choices for Merrylands residential work." },
      { q: "How do I book excavator hire in Merrylands?", a: "Book online at buildhire.com.au for an instant price, or WhatsApp our team. Book by 12pm for next-day delivery." }
    ],
    nearbyAreas: ["Parramatta", "Blacktown", "Auburn", "Liverpool", "Seven Hills"],
    nearbyAreaSlugs: ["parramatta", "blacktown", "auburn", "liverpool", "seven-hills"],
    coordinates: { lat: -33.8340, lng: 150.9930 }
  },
];

export function getServiceAreaBySlug(slug: string): ServiceAreaContent | undefined {
  return serviceAreaContent.find(area => area.slug === slug);
}
