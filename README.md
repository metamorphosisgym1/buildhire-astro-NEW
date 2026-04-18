# BuildHire — Astro SEO/AEO Migration

## Overview

This is the production-ready Astro migration of the BuildHire website, fully optimised for SEO (Search Engine Optimisation) and AEO (Answer Engine Optimisation) as specified in the migration guide.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro 4 (static output) |
| UI Components | React 18 (islands architecture) |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Deployment | Any static host (Netlify, Vercel, Cloudflare Pages) |

---

## Project Structure

```
buildhire-astro/
├── src/
│   ├── components/
│   │   ├── BaseHead.astro          # All SEO/AEO meta tags + JSON-LD schemas
│   │   ├── Header.tsx              # Navigation (React island)
│   │   ├── Hero.tsx                # Hero section with video background
│   │   ├── StatsBar.tsx            # Stats counter section
│   │   ├── BookingCalculator.tsx   # Multi-step booking form (React island)
│   │   ├── EquipmentGrid.tsx       # Equipment catalogue with specs modal
│   │   ├── Testimonials.tsx        # Client testimonials
│   │   ├── DeliveryRegions.tsx     # NSW map + delivery coverage
│   │   ├── Features.tsx            # Why BuildHire section
│   │   ├── FAQ.tsx                 # Accordion FAQ (React island)
│   │   ├── Footer.tsx              # Footer with newsletter
│   │   ├── ChatWidget.tsx          # WhatsApp floating button
│   │   ├── StickyBottomBar.tsx     # Sticky CTA bar on scroll
│   │   └── PaymentSuccess.tsx      # Post-payment confirmation
│   ├── layouts/
│   │   └── Layout.astro            # Base layout wrapping BaseHead
│   ├── pages/
│   │   ├── index.astro             # Home page (all sections + page schemas)
│   │   ├── payment-success.astro   # Booking confirmation page
│   │   ├── payment-cancelled.astro # Payment cancelled page
│   │   └── 404.astro               # Custom 404 page
│   ├── styles/
│   │   └── global.css              # Tailwind + custom CSS variables
│   └── hooks/
│       ├── useScrollAnimation.ts   # Intersection Observer hook
│       └── use-mobile.tsx          # Mobile breakpoint hook
├── public/
│   ├── assets/                     # All images and media
│   ├── video/                      # Hero background video
│   ├── robots.txt                  # SEO/AEO crawler directives
│   ├── sitemap.xml                 # XML sitemap
│   └── sitemap-index.xml           # Sitemap index
└── astro.config.mjs                # Astro config
```

---

## SEO Implementations

### Meta Tags (BaseHead.astro)
- **Title tag** — keyword-optimised: `Excavator Hire Sydney | Mini Excavator Dry Hire — BuildHire`
- **Meta description** — 155-character limit, includes primary keyword and CTA
- **Canonical URL** — prevents duplicate content issues
- **Robots meta** — `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`
- **Open Graph** — title, description, image, URL, type for social sharing
- **Twitter Card** — `summary_large_image` for rich Twitter previews
- **Geo meta tags** — region, placename, position for local SEO
- **Google Fonts preconnect** — reduces font load latency

### Technical SEO
- **robots.txt** — explicitly allows Googlebot, Bingbot, GPTBot, PerplexityBot, ClaudeBot, and all major AI crawlers
- **sitemap.xml** — lists all pages with priority and changefreq
- **sitemap-index.xml** — referenced in robots.txt
- **Canonical links** — on every page
- **Static HTML output** — Astro generates pure static HTML for maximum crawlability
- **Semantic HTML** — `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>` with proper ARIA labels
- **Heading hierarchy** — single H1 per page, logical H2/H3 structure
- **Image alt text** — all images have descriptive alt attributes
- **Lazy loading** — `loading="lazy"` on below-fold images
- **Critical asset preloading** — hero video preloaded for LCP

---

## AEO Implementations (Answer Engine Optimisation)

AEO targets AI-powered answer engines (ChatGPT, Perplexity, Google SGE, Bing Copilot, etc.).

### JSON-LD Structured Data (index.astro)

| Schema Type | Purpose |
|---|---|
| `Organization` | Brand entity with contact, social profiles |
| `LocalBusiness` | Local SEO with address, geo, hours, phone |
| `WebSite` | Sitelinks searchbox, site name |
| `FAQPage` | 6 Q&A pairs for Google FAQ rich results and AI answer extraction |
| `HowTo` | 5-step booking guide for featured snippets |
| `WebPage` + `SpeakableSpecification` | Voice search and AI reading targets |
| `Service` | Service entity with pricing and area served |

### AEO-Specific Features
- **FAQPage schema** — 6 questions covering common hire queries; directly feeds Google FAQ rich results and AI answer boxes
- **HowTo schema** — step-by-step booking process; targets "how to hire an excavator" queries
- **SpeakableSpecification** — marks H1, H2, and FAQ heading as voice-search readable
- **AI crawler allowlist** in robots.txt — GPTBot, PerplexityBot, ClaudeBot, Google-Extended, CCBot all explicitly allowed
- **Concise, question-format headings** — written to match natural language AI queries
- **Entity-rich content** — brand name, location, phone, email consistently structured for knowledge graph extraction

---

## Deployment

### Netlify
```bash
npm run build
# Publish directory: dist
```

### Vercel
```bash
npm run build
# Framework: Astro (auto-detected)
```

### Cloudflare Pages
```bash
npm run build
# Build command: npm run build
# Build output: dist
```

### Environment Variables
If re-integrating Supabase/Stripe, add these to your deployment platform:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
STRIPE_SECRET_KEY=your_stripe_key
```

---

## Development

```bash
npm install
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## Key Changes from Lovable (React SPA)

| Aspect | Before (Lovable/Vite SPA) | After (Astro Static) |
|---|---|---|
| Rendering | Client-side only | Static HTML + React islands |
| SEO | Poor (JS-rendered) | Excellent (pre-rendered HTML) |
| Structured data | None | 7 JSON-LD schemas |
| robots.txt | Basic | AI-crawler inclusive |
| Sitemap | None | XML sitemap + index |
| Meta tags | Minimal | Full OG + Twitter + Geo |
| Canonical | None | On every page |
| AEO | None | FAQPage, HowTo, Speakable |
| Performance | SPA bundle | Islands (only hydrate what's needed) |
| Routing | react-router-dom | Astro file-based routing |
