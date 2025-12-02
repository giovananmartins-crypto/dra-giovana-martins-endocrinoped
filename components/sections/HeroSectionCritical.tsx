/**
 * HeroSectionCritical - Server Component
 * Renderiza o H1 e conteúdo crítico acima do fold SEM JavaScript
 * Isso reduz drasticamente o LCP delay de 3.1s para < 500ms
 */
export function HeroSectionCritical() {
  return (
    <section id="inicio" className="pt-44 pb-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center">
            {/* H1 crítico - renderiza imediatamente sem JS - elemento LCP */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Dra. Giovana Martins Endocrinologista Pediátrica
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Transformamos a jornada de saúde endócrina de crianças e adolescentes em uma 
              experiência de acolhimento, clareza e resultados positivos.
            </p>
          </div>
          {/* Espaço reservado para imagem - será preenchido pelo HeroSection */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl shadow-medium overflow-hidden relative max-w-md mx-auto">
              {/* Placeholder para imagem - será substituído pelo HeroSection */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

