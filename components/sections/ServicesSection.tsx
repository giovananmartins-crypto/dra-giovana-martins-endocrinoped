import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Droplet, Scale, Clock, Activity } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: TrendingUp,
    title: "Baixa Estatura",
    description: "Avaliação e tratamento de baixa estatura, acompanhamento do crescimento infantil",
    href: "/servicos/baixa-estatura"
  },
  {
    icon: Droplet,
    title: "Diabetes Infantil",
    description: "Diagnóstico, tratamento e acompanhamento integral do diabetes tipo 1 e 2",
    href: "/servicos/diabetes-infantil"
  },
  {
    icon: Scale,
    title: "Obesidade Pediátrica",
    description: "Abordagem multidisciplinar para controle de peso e hábitos saudáveis",
    href: "/servicos" // Página ainda não criada
  },
  {
    icon: Clock,
    title: "Puberdade Precoce",
    description: "Puberdade precoce, tardia e outros distúrbios do desenvolvimento",
    href: "/servicos/puberdade-precoce"
  },
  {
    icon: Activity,
    title: "Distúrbios da Tireoide",
    description: "Tratamento de hipotireoidismo, hipertireoidismo e nódulos tireoidianos",
    href: "/servicos/disturbios-tireoide"
  }
];

export const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Especialidades e Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuidado especializado para as principais condições endócrinas da infância e adolescência
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return service.href ? (
              <Link 
                key={index} 
                href={service.href} 
                className="block h-full group"
              >
                <Card 
                  className="border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm animate-scale-in h-full cursor-pointer group-hover:border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-info/30 flex items-center justify-center group-hover:bg-info/40 transition-colors">
                      <Icon className="h-7 w-7 text-info-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="pt-2 text-sm text-primary font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Saiba mais <span>→</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <div key={index} className="h-full">
                <Card 
                  className="border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm animate-scale-in h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-info/30 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-info-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

