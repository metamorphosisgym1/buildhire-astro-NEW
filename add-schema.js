const fs = require('fs');
const path = require('path');

const useCaseFile = path.join(__dirname, 'src/pages/hire/[equipmentSlug]/[locationSlug]/[useCaseSlug].astro');
let content = fs.readFileSync(useCaseFile, 'utf8');

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
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Equipment Hire Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": \`\${item.name} Hire\`,
          "description": item.description
        }
      }
    ]
  }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": \`How to hire a \${item.name} for \${useCase.name} in \${location.name}\`,
  "step": [
    {
      "@type": "HowToStep",
      "name": "Check Availability",
      "text": \`Contact BuildHire to check availability of \${item.name} equipment in \${location.name}.\`
    },
    {
      "@type": "HowToStep",
      "name": "Book Equipment",
      "text": "Confirm your booking dates and arrange delivery or pickup."
    },
    {
      "@type": "HowToStep",
      "name": "Complete Project",
      "text": \`Use the equipment to successfully complete your \${useCase.name} project.\`
    }
  ]
};
`;

content = content.replace('const faqSchema = {', schemaInsert + '\nconst faqSchema = {');
content = content.replace('<script type="application/ld+json" set:html={JSON.stringify(faqSchema)} />', '<script type="application/ld+json" set:html={JSON.stringify(faqSchema)} />\n  <script type="application/ld+json" set:html={JSON.stringify(serviceSchema)} />\n  <script type="application/ld+json" set:html={JSON.stringify(howToSchema)} />');

fs.writeFileSync(useCaseFile, content);
console.log('Updated BuildHire use-case template');
