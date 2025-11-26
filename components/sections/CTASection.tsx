"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Phone, MessageCircle } from "lucide-react";
import { analytics } from "@/lib/analytics";

export const CTASection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Agende sua Consulta com a Dra. Giovana Martins
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Cuide da saúde endócrina do seu filho com uma especialista experiente e dedicada. 
              Estamos prontos para ajudar sua família.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-foreground text-card hover:bg-foreground/90 gap-2 text-lg px-8 py-6"
              onClick={() => {
                analytics.ctaClick('Agendar Consulta Online - CTA Section');
                scrollToSection("contato");
              }}
            >
              <Calendar className="h-5 w-5" />
              Agendar Consulta Online
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-foreground text-foreground hover:bg-foreground/10 text-lg px-8 py-6 gap-2"
              asChild
            >
              <a href="tel:+5531995626630" onClick={() => analytics.phoneCall('CTA Section')}>
                <Phone className="h-5 w-5" />
                Ligar Agora
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-foreground text-foreground hover:bg-foreground/10 text-lg px-8 py-6 gap-2"
              asChild
            >
              <a href="https://wa.me/5531995626630" target="_blank" rel="noopener noreferrer" onClick={() => analytics.whatsappClick('CTA Section')}>
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              Atendimento de segunda a sexta, das 8h às 18h | Consultório em Belo Horizonte, MG
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

