"use client";

import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, BookOpen, ArrowRight, TrendingUp, Sparkles, Search, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { getAllPostPreviews, getPostsByCategory, getPostsByTag, getAllTags, searchPosts } from "@/lib/blog";
import { BlogFilters } from "@/components/blog/BlogFilters";
import { BlogPagination } from "@/components/blog/BlogPagination";
import type { BlogCategory } from "@/lib/types/blog";
import type { BlogPostPreview } from "@/lib/types/blog";

const ITEMS_PER_PAGE = 9;

export function BlogClient() {
  const allPosts = getAllPostPreviews();
  const allTags = getAllTags();
  
  // Estado dos filtros
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular categorias com contagem
  const categories: BlogCategory[] = ["Crescimento", "Diabetes", "Puberdade", "Tireoide", "Nutrição", "Obesidade", "Hormônios", "Geral"];
  const categoryCounts = categories
    .map(cat => ({
      category: cat,
      count: getPostsByCategory(cat).length
    }))
    .filter(item => item.count > 0);

  // Calcular tags com contagem
  const tagsWithCount = allTags
    .map(tag => ({
      tag,
      count: getPostsByTag(tag).length
    }))
    .filter(item => item.count > 0)
    .sort((a, b) => b.count - a.count); // Ordenar por popularidade

  // Filtrar posts baseado nos filtros selecionados e busca
  const filteredPosts = useMemo(() => {
    let posts: BlogPostPreview[] = allPosts;

    // Aplicar busca primeiro (se houver)
    if (searchQuery.trim()) {
      posts = searchPosts(searchQuery);
    }

    // Filtrar por categoria
    if (selectedCategory) {
      posts = posts.filter(post => post.category === selectedCategory);
    }

    // Filtrar por tags
    if (selectedTags.length > 0) {
      posts = posts.filter(post =>
        selectedTags.some(tag =>
          post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
        )
      );
    }

    return posts;
  }, [allPosts, selectedCategory, selectedTags, searchQuery]);

  // Calcular paginação
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  // Resetar página quando filtros mudarem
  const handleCategoryChange = (category: BlogCategory | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => {
      const isSelected = prev.includes(tag);
      const newTags = isSelected
        ? prev.filter(t => t !== tag)
        : [...prev, tag];
      setCurrentPage(1);
      return newTags;
    });
  };

  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSelectedTags([]);
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  // Posts em destaque (sempre os 3 mais recentes, independente dos filtros)
  const featuredPosts = allPosts.slice(0, 3);

  return (
    <>
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
                  <div className="text-2xl font-bold text-foreground">{allPosts.length}</div>
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
              {featuredPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card className="border-none shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-3 bg-card overflow-hidden h-full">
                    {post.featuredImage ? (
                      <div className="relative w-full h-56 overflow-hidden">
                          <Image
                            src={post.featuredImage}
                            alt={`${post.title} - Artigo sobre ${post.category} por Dra. Giovana Martins, Endocrinologista Pediátrica`}
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

      {/* Posts Filtrados e Paginados */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Direita - Filtros (Mobile: aparece primeiro) */}
            <div className="lg:col-span-1 lg:order-2">
              <div className="lg:sticky lg:top-24">
                <Card className="border-none shadow-medium bg-card p-6">
                  <BlogFilters
                    categories={categoryCounts}
                    tags={tagsWithCount}
                    selectedCategory={selectedCategory}
                    selectedTags={selectedTags}
                    onCategoryChange={handleCategoryChange}
                    onTagToggle={handleTagToggle}
                    onClearFilters={handleClearFilters}
                    totalPosts={allPosts.length}
                  />
                </Card>
              </div>
            </div>

            {/* Conteúdo Principal */}
            <div className="lg:col-span-3 lg:order-1">
              {/* Campo de Busca */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Buscar artigos por título, conteúdo ou tags..."
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => handleSearchChange("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted transition-colors"
                      aria-label="Limpar busca"
                    >
                      <X className="h-4 w-4 text-muted-foreground" />
                    </button>
                  )}
                </div>
                {searchQuery && (
                  <p className="mt-3 text-sm text-muted-foreground">
                    {filteredPosts.length > 0
                      ? `Encontrados ${filteredPosts.length} artigo${filteredPosts.length !== 1 ? "s" : ""} para "${searchQuery}"`
                      : `Nenhum artigo encontrado para "${searchQuery}"`}
                  </p>
                )}
              </div>

              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {searchQuery
                    ? `Resultados da Busca`
                    : selectedCategory || selectedTags.length > 0
                    ? "Artigos Filtrados"
                    : "Todos os Artigos"}
                </h2>
                {!searchQuery && (
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {filteredPosts.length > 0
                      ? `Encontrados ${filteredPosts.length} artigo${filteredPosts.length !== 1 ? "s" : ""}`
                      : "Nenhum artigo encontrado com os filtros selecionados"}
                  </p>
                )}
              </div>

              {paginatedPosts.length > 0 ? (
                <>
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                {paginatedPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                    <Card className="border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-background overflow-hidden h-full">
                      {post.featuredImage ? (
                        <div className="relative w-full h-48 overflow-hidden">
                          <Image
                            src={post.featuredImage}
                            alt={`${post.title} - Artigo sobre ${post.category} por Dra. Giovana Martins, Endocrinologista Pediátrica`}
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
                        <div className="flex gap-4">
                          <div className="flex-1">
                            <p className="text-muted-foreground leading-relaxed line-clamp-3 text-sm min-h-[4rem]">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border mt-4">
                              <div className="flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5" />
                                <span>{formatDate(post.publishedAt)}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Clock className="h-3.5 w-3.5" />
                                <span>{post.readTime} min</span>
                              </div>
                            </div>
                          </div>
                          {/* Tags no lado direito */}
                          {post.tags.length > 0 && (
                            <div className="flex flex-col gap-1.5 pt-1">
                              {post.tags.slice(0, 4).map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-0.5 bg-muted/50 text-muted-foreground rounded-full text-xs whitespace-nowrap"
                                >
                                  #{tag}
                                </span>
                              ))}
                              {post.tags.length > 4 && (
                                <span className="px-2 py-0.5 text-muted-foreground text-xs">
                                  +{post.tags.length - 4}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
                  </div>

                  {/* Paginação */}
                  <BlogPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                    totalItems={filteredPosts.length}
                    itemsPerPage={ITEMS_PER_PAGE}
                  />
                </>
              ) : (
                <div className="text-center py-16">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Nenhum artigo encontrado
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Tente ajustar os filtros para encontrar mais artigos.
                  </p>
                  <button
                    onClick={handleClearFilters}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Limpar Filtros
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

