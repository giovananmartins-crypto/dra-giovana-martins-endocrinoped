import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

// Dados estáticos temporários - será substituído quando blog estiver pronto
const recentPosts = [
  {
    slug: "curva-crescimento-infantil",
    title: "A Importância da Curva de Crescimento: O que os Pais Precisam Saber",
    excerpt: "Entenda como interpretar a curva de crescimento do seu filho e quando buscar ajuda especializada.",
    date: "01/01/2025",
    category: "Crescimento"
  },
  {
    slug: "diabetes-tipo1-escola",
    title: "Diabetes Tipo 1 na Escola: Um Guia para Pais e Educadores",
    excerpt: "Dicas essenciais para garantir que crianças com diabetes tenham um ambiente escolar seguro e acolhedor.",
    date: "08/01/2025",
    category: "Diabetes"
  },
  {
    slug: "sinais-puberdade-precoce",
    title: "Puberdade Precoce: Os Sinais de Alerta que os Pais Devem Conhecer",
    excerpt: "Aprenda a identificar os primeiros sinais de puberdade precoce e quando procurar um especialista.",
    date: "15/01/2025",
    category: "Puberdade"
  }
];

export const BlogPreviewSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Últimos Artigos do Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conteúdo especializado sobre endocrinologia pediátrica para ajudar sua família
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {recentPosts.map((post, index) => (
            <Card
              key={index}
              className="border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-card"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                  <span className="px-2 py-1 bg-primary/20 text-link rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Button
                  variant="ghost"
                  className="w-full justify-between group"
                  asChild
                >
                  <Link href={`/blog/${post.slug}`} aria-label={`Ler mais sobre: ${post.title}`}>
                    Ler mais sobre {post.category.toLowerCase()}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/blog">
              Ver Todos os Artigos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

