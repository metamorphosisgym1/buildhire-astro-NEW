export interface Location {
  slug: string;
  name: string;
  region: string;
  state: string;
}

export const locations: Location[] = [
  // Sydney Metro
  { slug: "sydney", name: "Sydney", region: "Sydney Metro", state: "NSW" },
  { slug: "parramatta", name: "Parramatta", region: "Western Sydney", state: "NSW" },
  { slug: "penrith", name: "Penrith", region: "Western Sydney", state: "NSW" },
  { slug: "liverpool", name: "Liverpool", region: "South Western Sydney", state: "NSW" },
  { slug: "campbelltown", name: "Campbelltown", region: "South Western Sydney", state: "NSW" },
  { slug: "blacktown", name: "Blacktown", region: "Western Sydney", state: "NSW" },
  { slug: "castle-hill", name: "Castle Hill", region: "Hills District", state: "NSW" },
  { slug: "hornsby", name: "Hornsby", region: "Upper North Shore", state: "NSW" },
  { slug: "manly", name: "Manly", region: "Northern Beaches", state: "NSW" },
  { slug: "bondi", name: "Bondi", region: "Eastern Suburbs", state: "NSW" },
  { slug: "sutherland", name: "Sutherland", region: "Sutherland Shire", state: "NSW" },
  { slug: "cronulla", name: "Cronulla", region: "Sutherland Shire", state: "NSW" },
  { slug: "bankstown", name: "Bankstown", region: "South Western Sydney", state: "NSW" },
  { slug: "ryde", name: "Ryde", region: "Northern Suburbs", state: "NSW" },
  { slug: "chatswood", name: "Chatswood", region: "Lower North Shore", state: "NSW" },
  { slug: "st-george", name: "St George", region: "Southern Sydney", state: "NSW" },
  { slug: "inner-west", name: "Inner West", region: "Inner West Sydney", state: "NSW" },
  { slug: "northern-beaches", name: "Northern Beaches", region: "Northern Beaches", state: "NSW" },
  { slug: "eastern-suburbs", name: "Eastern Suburbs", region: "Eastern Suburbs", state: "NSW" },
  { slug: "hills-district", name: "Hills District", region: "Hills District", state: "NSW" },
  
  // Regional NSW
  { slug: "wollongong", name: "Wollongong", region: "Illawarra", state: "NSW" },
  { slug: "newcastle", name: "Newcastle", region: "Hunter", state: "NSW" },
  { slug: "blue-mountains", name: "Blue Mountains", region: "Blue Mountains", state: "NSW" },
  { slug: "central-coast", name: "Central Coast", region: "Central Coast", state: "NSW" },
  { slug: "hunter-valley", name: "Hunter Valley", region: "Hunter", state: "NSW" },
  { slug: "orange", name: "Orange", region: "Central West", state: "NSW" },
  { slug: "bathurst", name: "Bathurst", region: "Central West", state: "NSW" }
];
