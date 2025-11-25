import { GraduationCap, Award, Briefcase, Heart } from "lucide-react";

const timelineEvents = [
  {
    year: "2010",
    title: "Formação em Medicina",
    description: "Graduação em Medicina pela Universidade Federal de Minas Gerais",
    icon: GraduationCap
  },
  {
    year: "2013",
    title: "Residência em Pediatria",
    description: "Especialização em Pediatria pelo Hospital das Clínicas UFMG",
    icon: Award
  },
  {
    year: "2015",
    title: "Especialização em Endocrinologia Pediátrica",
    description: "Fellowship em Endocrinologia Pediátrica pela Sociedade Brasileira de Endocrinologia",
    icon: Award
  },
  {
    year: "2016-Presente",
    title: "Atendimento Especializado",
    description: "Dedicação exclusiva à endocrinologia pediátrica em Belo Horizonte",
    icon: Briefcase
  },
  {
    year: "Hoje",
    title: "Mais de 500 Famílias Atendidas",
    description: "Transformando a jornada de saúde de crianças e adolescentes com dedicação e cuidado",
    icon: Heart
  }
];

export const TimelineSection = () => {
  return (
    <section id="sobre" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trajetória Profissional
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma jornada dedicada ao cuidado especializado de crianças e adolescentes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2" />

            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={index}
                    className={`relative animate-fade-in-up`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className={`flex flex-col md:flex-row gap-8 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                      {/* Content */}
                      <div className={`flex-1 ${isEven ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                        <div className="bg-gradient-soft p-6 rounded-2xl shadow-soft border border-border hover:shadow-medium transition-shadow">
                          <div className={`inline-block px-3 py-1 bg-primary/20 text-primary-foreground rounded-full text-sm font-semibold mb-3`}>
                            {event.year}
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {event.description}
                          </p>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="relative z-10 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-medium">
                          <Icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                      </div>

                      {/* Spacer for alignment */}
                      <div className="flex-1 hidden md:block" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

