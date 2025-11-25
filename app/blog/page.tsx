import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, BookOpen, ArrowRight, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogSchema } from "@/lib/schema-markup";
import { generateMetadata } from "@/lib/metadata";
import { getAllPostPreviews, getPostsByCategory } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import type { BlogCategory } from "@/lib/types/blog";

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
  const posts = getAllPostPreviews();
  const categories: BlogCategory[] = ["Crescimento", "Diabetes", "Puberdade", "Tireoide", "Nutrição", "Geral"];
  const allCategoriesCount = posts.length;
  const categoryCounts = categories.map(cat => ({
    category: cat,
    count: getPostsByCategory(cat).length
  })).filter(item => item.count > 0);
  
  // Posts mais recentes (primeiros 3)
  const featuredPosts = posts.slice(0, 3);
  const regularPosts = posts.slice(3);

  return (
    <div className="min-h-screen">
      <BlogSchema />
      <Header />
      <main>
        {/* Hero Section Redesenhado */}
        <section className="pt-32 pb-24 bg-gradient-hero relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-info/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full text-sm mb-6 animate-fade-in">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-foreground font-medium">Conteúdo Especializado e Atualizado</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Blog de Endocrinologia
                <span className="block text-info-foreground mt-2">Pediátrica</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Informações especializadas sobre saúde endócrina infantil para orientar pais e responsáveis. 
                Conteúdo atualizado e baseado em evidências científicas.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 pt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-sm rounded-2xl shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-foreground">{posts.length}</div>
                    <div className="text-sm text-muted-foreground">Artigos Publicados</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-sm rounded-2xl shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-info/20 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-info-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-foreground">{categoryCounts.length}</div>
                    <div className="text-sm text-muted-foreground">Categorias</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filtros por Categoria - Redesenhado */}
        {categoryCounts.length > 0 && (
          <section className="py-10 bg-gradient-soft sticky top-20 z-40 backdrop-blur-sm border-b border-border/50">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                <Button
                  variant="default"
                  size="lg"
                  className="rounded-full px-6 py-2.5 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-soft"
                  asChild
                >
                  <Link href="/blog">
                    Todos ({allCategoriesCount})
                  </Link>
                </Button>
                {categoryCounts.map((item) => (
                  <Button
                    key={item.category}
                    variant="outline"
                    size="lg"
                    className="rounded-full px-6 py-2.5 border-2 border-border bg-card/50 backdrop-blur-sm text-foreground font-semibold hover:bg-primary/10 hover:border-primary hover:shadow-soft transition-all"
                    asChild
                  >
                    <Link href={`/blog?categoria=${encodeURIComponent(item.category.toLowerCase())}`}>
                      {item.category} ({item.count})
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Posts em Destaque */}
        {featuredPosts.length > 0 && (
          <section className="py-16 bg-gradient-soft">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Artigos em Destaque
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Conteúdo mais recente e relevante sobre endocrinologia pediátrica
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {featuredPosts.map((post, index) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                    <Card className="border-none shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-3 bg-card overflow-hidden h-full">
                      {post.featuredImage ? (
                        <div className="relative w-full h-56 overflow-hidden">
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <div className="px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-bold backdrop-blur-md shadow-lg">
                              {post.category}
                            </div>
                          </div>
                          <div className="absolute bottom-4 right-4">
                            <div className="w-10 h-10 rounded-full bg-card/90 backdrop-blur-md flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              <ArrowRight className="h-5 w-5" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative w-full h-56 bg-gradient-to-br from-primary/20 to-info/20 flex items-center justify-center">
                          <BookOpen className="h-16 w-16 text-primary/40" />
                          <div className="absolute top-4 left-4">
                            <div className="px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                              {post.category}
                            </div>
                          </div>
                        </div>
                      )}
                      <CardContent className="p-6 space-y-4">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed line-clamp-3 min-h-[4.5rem]">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-4 w-4" />
                              <span>{formatDate(post.publishedAt)}</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-1.5">
                              <Clock className="h-4 w-4" />
                              <span>{post.readTime} min</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Todos os Posts */}
        {regularPosts.length > 0 && (
          <section className="py-16 bg-card">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Todos os Artigos
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Explore nosso acervo completo de artigos sobre endocrinologia pediátrica
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {regularPosts.map((post, index) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                    <Card className="border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-background overflow-hidden h-full">
                      {post.featuredImage ? (
                        <div className="relative w-full h-48 overflow-hidden">
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                          <div className="absolute top-3 left-3">
                            <div className="px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs font-semibold backdrop-blur-sm">
                              {post.category}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative w-full h-48 bg-gradient-to-br from-primary/10 to-info/10 flex items-center justify-center">
                          <BookOpen className="h-12 w-12 text-primary/30" />
                          <div className="absolute top-3 left-3">
                            <div className="px-3 py-1 bg-primary/20 text-primary-foreground rounded-full text-xs font-semibold">
                              {post.category}
                            </div>
                          </div>
                        </div>
                      )}
                      <CardContent className="p-6 space-y-4">
                        {!post.featuredImage && (
                          <div className="inline-block px-3 py-1 bg-primary/20 text-primary-foreground rounded-full text-xs font-semibold">
                            {post.category}
                          </div>
                        )}
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 min-h-[3rem]">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed line-clamp-3 text-sm min-h-[4rem]">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" />
                            <span>{post.readTime} min</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Mensagem quando não há posts */}
        {posts.length === 0 && (
          <section className="py-24 bg-card">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Em breve, novos artigos serão publicados aqui
                </h2>
                <p className="text-lg text-muted-foreground">
                  Estamos preparando conteúdo especializado para você. Volte em breve!
                </p>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

