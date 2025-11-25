import { Shield, Heart, Award, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    icon: Shield,
    title: "Confiança",
    description: "Autoridade científica baseada em evidências, transparência na comunicação e resultados comprovados.",
    color: "primary"
  },
  {
    icon: Heart,
    title: "Acolhimento",
    description: "Ambiente onde pais e crianças se sentem seguros, ouvidos e compreendidos em cada consulta.",
    color: "secondary"
  },
  {
    icon: Award,
    title: "Excelência Pediátrica",
    description: "Dedicação à alta qualidade no diagnóstico, tratamento e acompanhamento especializado.",
    color: "info"
  },
  {
    icon: Sparkles,
    title: "Inovação",
    description: "Busca contínua por melhores práticas, ferramentas modernas e métodos otimizados de cuidado.",
    color: "accent"
  }
];

export const PillarsSection = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pilares que Sustentam Nossa Prática
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada aspecto do nosso atendimento é guiado por valores fundamentais que garantem 
            o melhor cuidado para seu filho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card 
                key={index}
                className="border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    pillar.color === 'primary' ? 'bg-primary/20' :
                    pillar.color === 'secondary' ? 'bg-secondary/20' :
                    pillar.color === 'info' ? 'bg-info/20' :
                    'bg-accent/20'
                  }`}>
                    <Icon className={`h-7 w-7 ${
                      pillar.color === 'primary' ? 'text-primary-foreground' :
                      pillar.color === 'secondary' ? 'text-secondary-foreground' :
                      pillar.color === 'info' ? 'text-info-foreground' :
                      'text-accent-foreground'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

