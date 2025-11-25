import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { BlogSchema, WebPageSchema } from "@/lib/schema-markup";
import { generateMetadata } from "@/lib/metadata";
import { BlogClient } from "./BlogClient";
import type { Metadata } from "next";

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

