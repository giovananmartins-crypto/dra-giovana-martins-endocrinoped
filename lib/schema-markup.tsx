import { Metadata } from "next";

/**
 * Schema Markup para LocalBusiness
 */
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dra. Giovana Martins - Endocrinologista Pediátrica",
    "image": "https://www.giovanaendocrinoped.com.br/images/dra-giovana/01-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg",
    "url": "https://www.giovanaendocrinoped.com.br/",
    "telephone": "+55-31-99562-6630",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Turquesa, 347 - Prado",
      "addressLocality": "Belo Horizonte",
      "addressRegion": "MG",
      "postalCode": "30411-177",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -19.9300,
      "longitude": -43.9500
    },
    "openingHours": "Mo,Tu,We,Th,Fr 08:00-18:00",
    "priceRange": "$$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema Markup para Physician
 */
export function PhysicianSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Giovana Neves Martins",
    "image": "https://www.giovanaendocrinoped.com.br/images/dra-giovana/01-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg",
    "specialty": "Endocrinologia Pediátrica",
    "medicalSpecialty": "https://schema.org/Endocrinology",
    "url": "https://www.giovanaendocrinoped.com.br/",
    "telephone": "+55-31-99562-6630",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Turquesa, 347 - Prado",
      "addressLocality": "Belo Horizonte",
      "addressRegion": "MG",
      "postalCode": "30411-177",
      "addressCountry": "BR"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "CRM-MG 79896",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Conselho Regional de Medicina de Minas Gerais"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "CRM-BA 49737",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Conselho Regional de Medicina da Bahia"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "RQE 66519"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/giovana.endocrinoped/",
      "https://www.doctoralia.com.br/giovana-neves-martins-4/endocrinologista-pediatrico/betim",
      "https://www.linkedin.com/in/giovanaendocrinoped"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema Markup para Person
 */
export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Giovana Neves Martins",
    "jobTitle": "Endocrinologista Pediátrica",
    "image": "https://www.giovanaendocrinoped.com.br/images/dra-giovana/01-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg",
    "url": "https://www.giovanaendocrinoped.com.br/sobre",
    "sameAs": [
      "https://www.instagram.com/giovana.endocrinoped/",
      "https://www.doctoralia.com.br/giovana-neves-martins-4/endocrinologista-pediatrico/betim",
      "https://www.linkedin.com/in/giovanaendocrinoped"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema Markup para MedicalCondition
 */
export function MedicalConditionSchema({
  name,
  description,
  symptoms,
  causes,
  treatment
}: {
  name: string;
  description: string;
  symptoms?: string[];
  causes?: string[];
  treatment?: string;
}) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": name,
    "description": description
  };

  if (symptoms && symptoms.length > 0) {
    schema.symptom = symptoms.map(s => ({ "@type": "MedicalSymptom", "name": s }));
  }

  if (causes && causes.length > 0) {
    schema.cause = causes.map(c => ({ "@type": "MedicalCause", "name": c }));
  }

  if (treatment) {
    schema.treatment = {
      "@type": "MedicalTreatment",
      "name": treatment
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema Markup para Article/BlogPosting
 */
export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = "Dra. Giovana Martins"
}: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image || "https://www.giovanaendocrinoped.com.br/images/dra-giovana-perfil.jpg",
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dra. Giovana Martins - Endocrinologista Pediátrica",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.giovanaendocrinoped.com.br/images/logo.png"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema Markup para FAQPage
 */
export function FAQPageSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  // Garantir que faqs é um array
  const faqsArray = Array.isArray(faqs) ? faqs : [];
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsArray.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema Markup para Review
 */
export function ReviewSchema({
  author,
  rating,
  reviewBody
}: {
  author: string;
  rating: number;
  reviewBody: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": rating,
      "bestRating": 5
    },
    "reviewBody": reviewBody
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema Markup para Blog
 */
export function BlogSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Dra. Giovana Martins - Endocrinologia Pediátrica",
    "description": "Artigos e notícias sobre saúde infantil, puberdade, diabetes, crescimento e hormônios.",
    "url": "https://www.giovanaendocrinoped.com.br/blog",
    "publisher": {
      "@type": "Person",
      "name": "Giovana Neves Martins"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema Markup para ContactPage
 */
export function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contato - Dra. Giovana Martins",
    "description": "Entre em contato com a Dra. Giovana Martins para agendar sua consulta de endocrinologia pediátrica em Belo Horizonte.",
    "url": "https://www.giovanaendocrinoped.com.br/contato"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema Markup para CollectionPage (Página de Serviços)
 */
export function ServicesPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Nossos Serviços - Dra. Giovana Martins",
    "description": "Serviços especializados em endocrinologia pediátrica: puberdade precoce, diabetes infantil, baixa estatura, distúrbios da tireoide e mais.",
    "url": "https://www.giovanaendocrinoped.com.br/servicos",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Puberdade Precoce",
          "url": "https://www.giovanaendocrinoped.com.br/servicos/puberdade-precoce"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Diabetes Infantil",
          "url": "https://www.giovanaendocrinoped.com.br/servicos/diabetes-infantil"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Baixa Estatura",
          "url": "https://www.giovanaendocrinoped.com.br/servicos/baixa-estatura"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Distúrbios da Tireoide",
          "url": "https://www.giovanaendocrinoped.com.br/servicos/disturbios-tireoide"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema Markup para WebPage
 */
export function WebPageSchema({
  name,
  description,
  url,
  image
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  const baseUrl = "https://www.giovanaendocrinoped.com.br";
  const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;
  
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "description": description,
    "url": fullUrl,
    "inLanguage": "pt-BR",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Dra. Giovana Martins - Endocrinologista Pediátrica",
      "url": baseUrl
    }
  };

  if (image) {
    schema.image = image.startsWith("http") ? image : `${baseUrl}${image}`;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema Markup para BreadcrumbList
 */
export function BreadcrumbSchema({
  items
}: {
  items: Array<{ label: string; href?: string }>;
}) {
  const baseUrl = "https://www.giovanaendocrinoped.com.br";
  
  // Sempre incluir a homepage como primeiro item
  const allItems = [
    { label: "Início", href: "/" },
    ...items
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allItems.map((item, index) => {
      const fullUrl = item.href 
        ? (item.href.startsWith("http") ? item.href : `${baseUrl}${item.href}`)
        : undefined;

      return {
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        ...(fullUrl && { "item": fullUrl })
      };
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

