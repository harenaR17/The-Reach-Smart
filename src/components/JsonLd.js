import React from "react";

export default function JsonLd() {
  const currentDate = new Date().toISOString();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://thereachsmart.net/#organization",
    "name": "The Reach Smart",
    "url": "https://thereachsmart.net",
    "logo": "https://thereachsmart.net/android-chrome-512x512.png",
    "description": "AI automation agency building tailored AI systems for SaaS and e-commerce: customer support, lead generation, personalized outreach, UGC content engines, and post-purchase automation.",
    "knowsAbout": [
      "Artificial Intelligence",
      "Business Process Automation",
      "SaaS Lead Generation",
      "E-commerce Customer Support",
      "UGC Creative Production",
      "Post-Purchase Automation",
      "B2B Cold Outreach",
      "Workflow Integration"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "availableLanguage": ["English", "Bulgarian", "French"]
    },
    "areaServed": ["Worldwide", "Europe", "United States", "Bulgaria", "France"]
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://thereachsmart.net/#service",
    "name": "The Reach Smart",
    "url": "https://thereachsmart.net",
    "image": "https://thereachsmart.net/og-image.jpg",
    "priceRange": "$$",
    "serviceType": "AI Automation Agency & Business Process Automation",
    "provider": { "@id": "https://thereachsmart.net/#organization" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Systems",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Customer Support Systems",
            "description": "Autonomous 24/7 AI agents handling repetitive customer queries, tracking orders, and escalating complex issues."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lead Finder & Enrichment System",
            "description": "AI-powered B2B lead discovery matching ideal customer profiles with key decision-maker contact details."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Personalized AI Outreach Engine",
            "description": "Customized B2B cold outreach & automated follow-up sequences with hyper-personalized messaging."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UGC Content Engine",
            "description": "Systematized AI script generation, ad creative variations, and UGC hooks for e-commerce advertising."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Post-Purchase Automation",
            "description": "Automated post-purchase customer journeys, repeat purchase retention, review generation, and support."
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://thereachsmart.net/#website",
    "name": "The Reach Smart",
    "url": "https://thereachsmart.net",
    "description": "AI Automations for SaaS & E-commerce",
    "publisher": { "@id": "https://thereachsmart.net/#organization" },
    "inLanguage": ["en", "bg", "fr"],
    "datePublished": "2026-01-15T00:00:00+02:00",
    "dateModified": currentDate
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://thereachsmart.net/#webpage",
    "name": "The Reach Smart — AI Automations for SaaS & E-commerce",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".section-h2", ".hero-headline", ".faq-trigger", ".eyebrow"]
    },
    "url": "https://thereachsmart.net"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      // English (Primary)
      {
        "@type": "Question",
        "name": "How quickly can an AI automation system be deployed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most custom AI automation systems are designed, tested, and deployed within 2 to 4 weeks, fully integrated with your existing software stack."
        }
      },
      {
        "@type": "Question",
        "name": "Do we need an internal developer team to manage the AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Reach Smart builds fully managed turn-key AI systems that run autonomously. We handle technical maintenance, integration updates, and ongoing monitoring."
        }
      },
      {
        "@type": "Question",
        "name": "What tools and platforms do you integrate with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We integrate with Shopify, WooCommerce, Zendesk, Gorgias, HubSpot, Salesforce, LinkedIn, Make.com, n8n, OpenAI, Claude, and custom API backends."
        }
      },
      {
        "@type": "Question",
        "name": "How does the AI handle edge cases or unhappy customers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The AI is configured with strict guardrails and human-in-the-loop fallback mechanisms. Any query outside specified parameters is seamlessly escalated to your human team."
        }
      },
      // Bulgarian
      {
        "@type": "Question",
        "name": "За колко време се изгражда една AI автоматизация?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартното изграждане, тестване и внедряване отнема между 2 и 4 седмици, в зависимост от сложността на процеса и използваните системи."
        }
      },
      // French
      {
        "@type": "Question",
        "name": "Combien de temps faut-il pour mettre en place une automatisation IA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La plupart des systèmes d'automatisation IA personnalisés sont conçus, testés et déployés en 2 à 4 semaines, parfaitement intégrés à vos outils."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

