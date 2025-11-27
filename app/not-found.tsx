import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            {/* Número 404 Grande */}
            <div className="space-y-4">
              <h1 className="text-9xl md:text-[12rem] font-bold text-primary/20 leading-none">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Página não encontrada
              </h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Desculpe, a página que você está procurando não existe ou foi movida.
              </p>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="bg-foreground text-card hover:bg-foreground/90 gap-2"
                asChild
              >
                <Link href="/">
                  <Home className="h-5 w-5" />
                  Voltar para o Início
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-foreground text-foreground hover:bg-foreground/10 gap-2"
                asChild
              >
                <Link href="/blog">
                  <Search className="h-5 w-5" />
                  Ver Artigos do Blog
                </Link>
              </Button>
            </div>

            {/* Links Úteis */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Ou visite uma dessas páginas:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/sobre" 
                  className="text-primary hover:underline text-sm"
                >
                  Sobre
                </Link>
                <Link 
                  href="/servicos" 
                  className="text-primary hover:underline text-sm"
                >
                  Serviços
                </Link>
                <Link 
                  href="/contato" 
                  className="text-primary hover:underline text-sm"
                >
                  Contato
                </Link>
                <Link 
                  href="/blog" 
                  className="text-primary hover:underline text-sm"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

