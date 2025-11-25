/**
 * Tipos TypeScript para o sistema de blog
 */

export type BlogCategory = 
  | "Crescimento"
  | "Diabetes"
  | "Puberdade"
  | "Tireoide"
  | "Nutrição"
  | "Obesidade"
  | "Hormônios"
  | "Geral";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    title: string;
    image?: string;
  };
  publishedAt: Date;
  updatedAt?: Date;
  readTime: number; // em minutos
  category: BlogCategory;
  tags: string[];
  featuredImage?: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  relatedPosts?: string[]; // slugs de posts relacionados
  faqs?: Array<{ question: string; answer: string }>; // FAQs para Schema Markup
}

export interface BlogPostPreview {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: Date;
  readTime: number;
  category: BlogCategory;
  tags: string[];
  featuredImage?: string;
}

