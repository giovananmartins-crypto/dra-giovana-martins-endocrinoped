import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { BlogSchema, WebPageSchema } from "@/lib/schema-markup";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

// Lazy loading do BlogClient (contém BlogFilters e BlogPagination)
const BlogClient = dynamic(() => import("./BlogClient").then(mod => ({ default: mod.BlogClient })), {
  loading: () => (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="animate-pulse space-y-8">
          <div className="h-12 bg-muted rounded w-1/3"></div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-64 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
});

export const metadata: Metadata = generateMetadata({
  title: "Blog Dra. Giovana Martins | Endocrinologia Pediátrica | Dicas e Notícias",
  description: "Artigos e notícias sobre saúde infantil, puberdade, diabetes, crescimento e hormônios. Conteúdo especializado da Dra. Giovana Martins.",
  keywords: [
    "blog endocrinologia pediátrica",
    "artigos saúde infantil",
    "diabetes infantil",
    "puberdade precoce",
    "crescimento infantil",
    "hormônios crianças"
  ],
  url: "/blog",
  image: "https://www.giovanaendocrinoped.com.br/images/dra-giovana/01-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
});

export default function Blog() {
  return (
    <div className="min-h-screen">
      <BlogSchema />
      <WebPageSchema
        name="Blog Dra. Giovana Martins | Endocrinologia Pediátrica"
        description="Artigos e notícias sobre saúde infantil, puberdade, diabetes, crescimento e hormônios. Conteúdo especializado da Dra. Giovana Martins."
        url="/blog"
        image="https://www.giovanaendocrinoped.com.br/images/dra-giovana/01-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
      />
      <Header />
      <main>
        <BlogClient />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

