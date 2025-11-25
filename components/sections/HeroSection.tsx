"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Heart } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="pt-44 pb-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left text-center">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full text-sm">
                <Heart className="h-4 w-4 text-primary" fill="currentColor" />
                <span className="text-foreground">Cuidado especializado em Belo Horizonte</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Dra. Giovana Martins  Endocrinologista Pediátrica
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Transformamos a jornada de saúde endócrina de crianças e adolescentes em uma 
              experiência de acolhimento, clareza e resultados positivos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-foreground text-card hover:bg-foreground/90 gap-2 text-lg px-8 py-6"
                onClick={() => scrollToSection("contato")}
              >
                <Calendar className="h-5 w-5" />
                Agende Agora
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-foreground text-foreground hover:bg-foreground/10 text-lg px-8 py-6"
                onClick={() => scrollToSection("sobre")}
              >
                Conheça a Dra. Giovana Martins
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-6 justify-center">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-foreground">10+</div>
                <div className="text-sm text-foreground/70">Anos de experiência</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-foreground/70">Famílias atendidas</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-foreground">100%</div>
                <div className="text-sm text-foreground/70">Dedicação ao cuidado</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="aspect-[4/5] rounded-3xl shadow-medium overflow-hidden relative max-w-md mx-auto">
              <Image
                src="/images/dra-giovana/23-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
                alt="Dra. Giovana Martins - Endocrinologista Pediátrica em Belo Horizonte"
                fill
                className="object-cover rounded-3xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

