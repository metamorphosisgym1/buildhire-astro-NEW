# BuildHire Growth Operations Guide

This guide turns the website changes into an operating system for higher-quality equipment-hire leads, confirmed hires and attributable revenue. It separates what the website already records from the operational data that must be completed by the BuildHire team.

## 1. Implemented website events

BuildHire now sends non-identifying GA4 events when a Google tag is present. Names, phone numbers, dates and free-text WhatsApp content are intentionally excluded.

| Event | Meaning | Configure as a GA4 key event? | Primary use |
|---|---|---:|---|
| `generate_lead` | Visitor starts the WhatsApp booking hand-off. | Yes | Core lead volume by landing page / source. |
| `whatsapp_booking_start` | Visitor initiates the final WhatsApp booking flow. | Yes | Strong booking intent. |
| `equipment_planner_quote_start` | Visitor uses the homepage planner and requests a quote. | Yes | Tool-led lead quality. |
| `booking_step_completed` | Visitor completes a booking step. | No | Diagnose quote-flow drop-off. |
| `booking_step_view` | Visitor sees a booking step. | No | Diagnose quote-flow drop-off. |
| `equipment_category_selected` | Visitor selects a machine class. | No | Equipment-demand intelligence. |
| `select_item` | Visitor selects a specific machine. | No | Equipment-demand intelligence. |

### GA4 configuration

Create each event in GA4 only after it has appeared in the **Admin → Events** list. Mark `generate_lead`, `whatsapp_booking_start` and `equipment_planner_quote_start` as key events. Use the official GA4 event and key-event documentation when configuring the account: [Google Analytics events](https://support.google.com/analytics/answer/9322688) and [Google Analytics key events](https://support.google.com/analytics/answer/9267568).

## 2. Organic-to-hire attribution

The website can identify a qualified digital lead. The operations process must connect that lead to a quote, a confirmed hire and gross profit.

| Stage | Owner | Required record | Minimum fields |
|---|---|---|---|
| Website / WhatsApp start | GA4 | Digital lead | Date, landing page, source / medium, machine category, location if available. |
| Quote created | Operations | Quote record | Quote ID, contact, equipment, dates, delivery suburb, quoted delivery amount, total quote value. |
| Hire confirmed | Operations | Booking record | Quote ID, confirmed machine, dates, hire revenue, delivery revenue, estimated gross profit. |
| Hire complete | Operations | Post-hire record | Completion date, issues, review request sent, review received. |

Use the **same quote ID** in the WhatsApp conversation, the booking system and the monthly reporting sheet. Without it, BuildHire can count leads but cannot determine which SEO pages create gross profit.

### Monthly revenue report

Export GA4 landing-page data and join it to the quote sheet by source, date and quote ID. Review the following metrics each month:

| Metric | Why it matters |
|---|---|
| Organic sessions to top equipment/location pages | Measures commercial search demand. |
| WhatsApp starts by landing page | Measures lead intent. |
| Quotes created / WhatsApp starts | Measures operations follow-up and qualification. |
| Confirmed hires / quotes | Measures pricing, availability and trust. |
| Gross profit / landing page | Determines which SEO pages deserve more investment. |
| Review request and review completion rate | Measures local-trust growth. |

## 3. Local-entity checklist

Keep BuildHire’s name, address/service area, phone number, website and category information consistent across every legitimate profile. Do not create duplicate listings or use virtual-office addresses that do not represent the business.

| Channel | Action | Link |
|---|---|---|
| Google Business Profile | Verify ownership, set service areas honestly, add current phone, website, categories, equipment photos and genuine updates. | https://business.google.com/ |
| Bing Places | Import or create a consistent local listing, then verify it. | https://www.bingplaces.com/ |
| Apple Business Connect | Claim and verify the business card and website. | https://businessconnect.apple.com/ |
| Google Search Console | Submit the sitemap, review redirect/indexing errors and request indexing only for priority commercial pages after issues are resolved. | https://search.google.com/search-console/ |
| Bing Webmaster Tools | Submit the sitemap and monitor indexing / search demand. | https://www.bing.com/webmasters/ |

## 4. 90-day authority cadence

The website now includes a public trade-partner page and a reviewed outreach playbook. The human task is to earn relevant mentions by being genuinely useful to the NSW construction and hire ecosystem.

| Month | Primary activity | Output target |
|---|---|---|
| Month 1 | Complete local profiles, send 3–5 relevant association / partner enquiries and request reviews from completed hires. | 5 verified profiles, 3 meetings or replies, first genuine reviews. |
| Month 2 | Publish one field-tested, non-promotional resource for a priority trade and approach relevant partners. | 1 useful resource, 3 new referring-domain opportunities. |
| Month 3 | Review quoted / confirmed-hire data by landing page and expand only the highest-profit content cluster. | A decision on the next 10 pages based on gross-profit evidence. |

Use the email and review templates in [`buildhire-review-and-partner-playbook.md`](./buildhire-review-and-partner-playbook.md). Obtain approval before sending any outreach or publishing any customer proof.

## 5. What must not be claimed

The team must keep website and outreach content aligned with verified operational reality. Do not state that BuildHire guarantees same-day or next-day delivery, fixed delivery pricing, machine availability, safety accreditation, project outcomes or customer results unless the specific claim is current, documented and approved.

Likewise, never create or publish customer reviews, ratings, testimonials, project stories or images unless they are genuine and permissioned.
