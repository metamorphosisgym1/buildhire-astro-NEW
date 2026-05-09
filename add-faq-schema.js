const fs = require('fs');
const path = require('path');

const faqFile = path.join(__dirname, 'src/pages/hire/[equipmentSlug]/[locationSlug]/[faqSlug].astro');
let content = fs.readFileSync(faqFile, 'utf8');

const schemaInsert = `
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Equipment Hire",
  "provider": {
    "@type": "LocalBusiness",
    "name": "BuildHire"
  },
  "areaServed": {
    "@type": "State",
    "name": location.name
  }
};
`;

content = content.replace('const faqSchema = {', schemaInsert + '\nconst faqSchema = {');
content = content.replace('<script type="application/ld+json" set:html={JSON.stringify(faqSchema)} />', '<script type="application/ld+json" set:html={JSON.stringify(faqSchema)} />\n  <script type="application/ld+json" set:html={JSON.stringify(serviceSchema)} />');

fs.writeFileSync(faqFile, content);
console.log('Updated BuildHire FAQ template');
