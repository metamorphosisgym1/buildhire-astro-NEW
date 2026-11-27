// Machine landing pages for Google Ads (Chris Allchin's plan, 27 Nov 2026, page 3): one ad group,
// one machine, one page. Served at /book/<slug>/, noindex, no menu. Built from /hire-now/.
// Chris suggested /hire/<slug>/, but /hire/ is the old programmatic area being pruned, so /book/ is used.
//
// Facts only from Will (9 Nov 2026) and the live site:
// - next day for bookings before 12pm: confirmed for 1.7T, 3.5T, 5.5T only.
// - mud bucket, GP bucket and ripper: confirmed for 1.7T, 3.5T, 5.5T.
// - 14.5T goes by third party heavy transport, quoted on enquiry.
//
// DELIVERY FEE: waiting on Will (portal item, 28 Nov 2026). Until he sends a "from" price,
// deliveryFrom stays null and the page says delivery is quoted when you book.
// When it arrives, set deliveryFrom per machine (for example "$120") and the price box shows it.

import { equipmentData } from '../components/BookingCalculator';

export type BookPage = {
  slug: string;
  short: string; // as in the ad, for example "1.7T"
  machine: string; // value sent to GHL, matches the booking calculator name where there is one
  rateName: string; // equipmentData name the day and week rate come from
  title: string;
  description: string;
  h1: string;
  intro: string;
  image: { src: string; alt: string; w: number; h: number };
  included: string[];
  nextDay: boolean;
  deliveryNote: string;
  deliveryFrom: string | null;
};

const rate = (name: string) => {
  const m = equipmentData.Excavators.find((e) => e.name === name);
  if (!m || !m.weeklyRate) throw new Error(`No rate for ${name}`);
  return { day: m.rate, week: m.weeklyRate };
};

const BUCKETS = 'Mud bucket, GP bucket and ripper included';

export const bookPages: BookPage[] = [
  {
    slug: '1-7t-excavator',
    short: '1.7T',
    machine: '1.7T Mini Excavator (ViO17 Yanmar)',
    rateName: '1.7T Mini Excavator (ViO17 Yanmar)',
    title: '1.7T Excavator Hire Sydney | Build Hire',
    description: '1.7T Yanmar mini excavator hire in Sydney. $205 a day, buckets and ripper included. Book before 12pm and it can be on site tomorrow.',
    h1: 'Get the backyard dug this week. 1.7T mini excavator, on site tomorrow.',
    intro: 'Yanmar ViO17 from our Arncliffe yard. The tracks pull in to about 950 mm, so it gets through most standard side gates.',
    image: { src: '/assets/hire-now/yanmar-17t-clean.webp', alt: 'A clean 1.7T Yanmar mini excavator from Build Hire parked outside a brick house', w: 1080, h: 750 },
    included: [BUCKETS, 'All 7 days on a weekly hire, weekend included', 'Plant trailer for yard pick up, $50 a day extra'],
    nextDay: true,
    deliveryNote: 'Or collect it from our Arncliffe yard on our plant trailer.',
    deliveryFrom: null,
  },
  {
    slug: '3-5t-excavator',
    short: '3.5T',
    machine: '3.5T Excavator (ViO35-7 Yanmar)',
    rateName: '3.5T Excavator (ViO35-7 Yanmar)',
    title: '3.5T Excavator Hire Sydney | Build Hire',
    description: '3.5T Yanmar excavator hire in Sydney. $340 a day, buckets and ripper included. Book before 12pm and it can be on site tomorrow.',
    h1: 'Get the trenches dug and the site ready. 3.5T excavator, on site tomorrow.',
    intro: 'Yanmar ViO35 from our Arncliffe yard, about 1,740 mm wide.',
    image: { src: '/assets/book/vio35.webp', alt: '3.5T Yanmar ViO35 excavator', w: 1080, h: 604 },
    included: [BUCKETS, 'All 7 days on a weekly hire, weekend included', 'Rock grab, auger and hammer on request'],
    nextDay: true,
    deliveryNote: '',
    deliveryFrom: null,
  },
  {
    slug: '5-5t-excavator',
    short: '5.5T',
    machine: '5.5T Excavator (ViO55 Yanmar)',
    rateName: '5.5T Excavator (ViO55 Yanmar)',
    title: '5.5T Excavator Hire Sydney | Build Hire',
    description: '5.5T Yanmar excavator hire in Sydney. $370 a day, buckets and ripper included. Book before 12pm and it can be on site tomorrow.',
    h1: 'Clear the site and get the bulk digging done. 5.5T excavator, on site tomorrow.',
    intro: 'Yanmar ViO55 from our Arncliffe yard, about 1,990 mm wide.',
    image: { src: '/assets/book/vio55.webp', alt: '5.5T Yanmar ViO55 excavator', w: 1080, h: 604 },
    included: [BUCKETS, 'All 7 days on a weekly hire, weekend included', 'Rock grab, auger and hammer on request'],
    nextDay: true,
    deliveryNote: '',
    deliveryFrom: null,
  },
  {
    slug: 'tight-access-excavator',
    short: 'Tight access',
    machine: 'Tight access 0.8T or 1T mini excavator (we help pick)',
    rateName: '1T Mini Excavator (Kubota U10-5)',
    title: 'Tight Access Excavator Hire Sydney | Build Hire',
    description: '0.8T and 1T tight access mini excavator hire in Sydney, from $200 a day. Tracks pull in to about 680 mm and 750 mm for side gates and narrow access.',
    h1: 'Get through the side gate and start digging. 0.8T and 1T tight access excavators.',
    intro: 'The 0.8T Yanmar SV08 tracks pull in to about 680 mm. The 1T Kubota U10-5 pulls in to about 750 mm. Not sure which? We help you pick on the call.',
    image: { src: '/assets/book/sv08.webp', alt: '0.8T Yanmar SV08 mini excavator', w: 1080, h: 603 },
    included: ['Same price for the 0.8T and the 1T', 'All 7 days on a weekly hire, weekend included', 'Hammer for the 1T on request'],
    nextDay: false,
    deliveryNote: '',
    deliveryFrom: null,
  },
  {
    slug: '14-5t-excavator',
    short: '14.5T',
    machine: '14.5T Excavator (Case CX145C)',
    rateName: '14.5T Excavator (Case CX145C)',
    title: '14.5T Excavator Hire Sydney | Build Hire',
    description: '14.5T Case excavator dry hire in Sydney, $490 a day or $2,000 a week. For bulk earthworks and civil jobs.',
    h1: 'Get the bulk earthworks and civil jobs done. 14.5T excavator dry hire.',
    intro: 'Case CX145C. Dry hire only, you or your crew run it.',
    image: { src: '', alt: '', w: 0, h: 0 },
    included: ['All 7 days on a weekly hire, weekend included', 'Rock grab, auger and hammer on request'],
    nextDay: false,
    deliveryNote: 'Goes by third party heavy transport. We quote it for your site when you book.',
    deliveryFrom: null,
  },
];

export const bookRate = (p: BookPage) => rate(p.rateName);
