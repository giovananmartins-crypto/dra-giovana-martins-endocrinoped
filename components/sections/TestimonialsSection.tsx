import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Natália Nascimento",
    relation: "Mãe de paciente",
    text: "A doutora é maravilhosa, atenciosa, carinhosa com as crianças. Explica tudo de forma que nós, que não entendemos do assunto, possamos entender tudo o que está acontecendo. Super educada. Simplesmente amei a consulta. Excelente profissional.",
    rating: 5
  },
  {
    name: "Anna Clara Lopes",
    relation: "Mãe de paciente",
    text: "Excelente profissional! Sempre atenta ao que tem de melhor evidência, tratando com muita dedicação e carinho. Tenho plena confiança no seu trabalho!",
    rating: 5
  },
  {
    name: "Halia Silva",
    relation: "Mãe de paciente",
    text: "Amei o cuidado dela com meu filho. Super profissional e atenciosa.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Dizem as Famílias
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A confiança das famílias é o nosso maior reconhecimento
          </p>
          <p className="text-sm text-muted-foreground mt-4 italic">
            * Depoimentos também disponíveis no Doctoralia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-none shadow-soft bg-gradient-soft animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <Quote className="h-10 w-10 text-primary/40" />
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                  ))}
                </div>
                
                <p className="text-foreground leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.relation}
                  </div>
                </div>
                
                {index === 0 && (
                  <div className="pt-4">
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href="/servicos/diabetes-infantil">
                        Saiba mais sobre Diabetes Infantil
                      </Link>
                    </Button>
                  </div>
                )}
                {index === 1 && (
                  <div className="pt-4">
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href="/servicos/baixa-estatura">
                        Saiba mais sobre Crescimento
                      </Link>
                    </Button>
                  </div>
                )}
                {index === 2 && (
                  <div className="pt-4">
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href="/contato">
                        Agende sua Consulta
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/sobre#depoimentos">
              Ver Mais Depoimentos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

