"use client";

import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Users, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export const AboutSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      src: "/images/dra-giovana/02-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg",
      alt: "Dra. Giovana Martins - Endocrinologista Pediátrica com formação de excelência em Belo Horizonte"
    },
    {
      src: "/images/dra-giovana/03-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg",
      alt: "Dra. Giovana Martins - Especialista em Endocrinologia Pediátrica"
    },
    {
      src: "/images/dra-giovana/04-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg",
      alt: "Dra. Giovana Martins - Endocrinologista Pediátrica dedicada ao cuidado de crianças e adolescentes"
    }
  ];

  // Auto-rotate carousel every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="sobre" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm">
                <Heart className="h-4 w-4 text-primary" fill="currentColor" />
                <span className="text-foreground font-medium">Expertise e Confiança</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Quem é a Dra. Giovana Martins?
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Com uma formação de excelência em endocrinologia pediátrica, a Dra. Giovana Martins 
              é uma especialista dedicada ao cuidado integral de crianças e adolescentes em Belo Horizonte, 
              região metropolitana e Guanambi-BA. Sua formação sólida e compromisso com a excelência médica garantem o melhor atendimento 
              para seu filho.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Formação Acadêmica</h3>
                  <p className="text-sm text-muted-foreground">
                    Especialização em Endocrinologia Pediátrica com certificação CRM/MG e RQE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Certificações</h3>
                  <p className="text-sm text-muted-foreground">
                    CRM-MG 79896 | RQE 66519 | CRM-BA 49737
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-info/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-info" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Atendimento</h3>
                  <p className="text-sm text-muted-foreground">
                    Belo Horizonte, região metropolitana e Guanambi-BA (cidade natal)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-accent" fill="currentColor" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Compromisso</h3>
                  <p className="text-sm text-muted-foreground">
                    Atendimento humanizado com foco no bem-estar integral da criança e família
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <Link href="/sobre">Conheça Mais Sobre a Dra. Giovana Martins</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("contato")}
              >
                Agende sua Consulta
              </Button>
            </div>
          </div>

          <div className="relative max-w-lg mx-auto w-full">
            <div className="aspect-[4/5] rounded-3xl shadow-medium overflow-hidden relative w-full min-h-[400px]">
              {images.length > 0 && images.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentImageIndex ? "opacity-100 z-0" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-3xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent z-10 pointer-events-none" />
              
              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-card w-6"
                        : "bg-card/50 hover:bg-card/75 w-2"
                    }`}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

