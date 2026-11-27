// Real Google review screenshots, captured from Build Hire's Google listing on 10 Nov 2026.
// Files are numbered in Google's order. The list below is display order.
export const googleReviews = [
  { file: 3, name: 'Enhanced Plumbing Solutions', w: 720, h: 561 },
  { file: 12, name: 'Seth Ji', w: 720, h: 475 },
  { file: 6, name: 'lorans aiso', w: 720, h: 447 },
  { file: 10, name: 'Vanessa Bonett', w: 720, h: 475 },
  { file: 5, name: 'Dean Krkovski', w: 720, h: 476 },
  { file: 9, name: 'Corinne Coleman', w: 720, h: 476 },
  { file: 11, name: 'Ehab Saadeddine', w: 720, h: 601 },
  { file: 13, name: 'Kaveh Rad', w: 720, h: 447 },
  { file: 1, name: 'Manuele Monastirakis', w: 720, h: 629 },
  { file: 4, name: 'ashraf kamal (Ash)', w: 720, h: 686 },
  { file: 7, name: 'Said Jawadi', w: 720, h: 505 },
  { file: 2, name: 'Rosa scioscia', w: 720, h: 815 },
  { file: 8, name: 'Zander Elmowy', w: 720, h: 560 },
];

export const reviewSrc = (file: number) => `/assets/hire-now/reviews/review-${String(file).padStart(2, '0')}.webp`;
