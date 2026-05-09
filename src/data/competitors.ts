export interface Competitor {
  slug: string;
  category: string;
  categoryPlural: string;
  description: string;
}

// Note: competitor names are NOT used in page content for legal safety.
// The slug is used only for URL routing and SEO targeting.
// Page content uses generic terms like "large hire companies" or "national chains".
export const competitors: Competitor[] = [
  { slug: "kennards-hire", category: "National Hire Chain", categoryPlural: "National Hire Chains", description: "Large national equipment hire companies with broad fleets but corporate pricing structures." },
  { slug: "coates-hire", category: "National Hire Chain", categoryPlural: "National Hire Chains", description: "Corporate equipment hire companies with call-centre support and variable availability." },
  { slug: "national-pump-energy", category: "Specialist Hire Company", categoryPlural: "Specialist Hire Companies", description: "Specialist earthmoving and pumping equipment hire providers." },
  { slug: "conplant", category: "Plant Hire Company", categoryPlural: "Plant Hire Companies", description: "General plant and equipment hire companies with mixed fleets." },
  { slug: "brooks-hire", category: "Equipment Hire Company", categoryPlural: "Equipment Hire Companies", description: "Regional equipment hire companies with varying fleet quality." },
  { slug: "solution-plant-hire", category: "Plant Hire Company", categoryPlural: "Plant Hire Companies", description: "Plant hire companies offering earthmoving equipment across NSW." },
  { slug: "allcott-hire", category: "Equipment Hire Company", categoryPlural: "Equipment Hire Companies", description: "General equipment hire companies with broad but non-specialised fleets." },
  { slug: "ram-equipment", category: "Equipment Hire Company", categoryPlural: "Equipment Hire Companies", description: "Equipment hire companies offering excavators and earthmoving machinery." },
  { slug: "sherrin-rentals", category: "Equipment Rental Company", categoryPlural: "Equipment Rental Companies", description: "Equipment rental companies offering earthmoving and compaction machinery." },
  { slug: "local-hire-yards", category: "Local Hire Yard", categoryPlural: "Local Hire Yards", description: "Local and independent hire yards with limited fleet availability and older equipment." }
];
