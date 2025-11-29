import { Metadata } from "next";

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

/**
 * Helper para gerar metadata completa com Open Graph e Twitter Cards
 */
export function generateMetadata({
  title,
  description,
  keywords,
  image = "https://www.giovanaendocrinoped.com.br/images/dra-giovana/01-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg",
  url
}: PageMetadata): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.giovanaendocrinoped.com.br";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;

  return {
    title,
    description,
    keywords: keywords?.join(", "),
    authors: [{ name: "Dra. Giovana Martins", url: `${siteUrl}/sobre` }],
    creator: "Dra. Giovana Martins",
    publisher: "Dra. Giovana Martins - Endocrinologista Pediátrica",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: "website",
      url: fullUrl,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "Dra. Giovana Martins - Endocrinologista Pediátrica",
      locale: "pt_BR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

