import { Header } from "@/components/Header";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { AboutDetailsSection } from "@/components/sections/AboutDetailsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/Footer";
import { PersonSchema, PhysicianSchema, ReviewSchema, FAQPageSchema } from "@/lib/schema-markup";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Heart, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = generateMetadata({
  title: "Sobre a Dra. Giovana Martins | Endocrinologista Pediátrica BH",
  description: "Conheça a Dra. Giovana Martins: formação, experiência e filosofia de atendimento em endocrinologia pediátrica em Belo Horizonte.",
  keywords: [
    "Dra. Giovana Martins",
    "endocrinologista pediátrica BH",
    "sobre endocrinologista",
    "formação médica",
    "experiência endocrinologia pediátrica"
  ],
  url: "/sobre",
  image: "https://www.giovanaendocrinoped.com.br/images/dra-giovana/04-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
});

const aboutFAQs = [
  {
    question: "Qual a formação da Dra. Giovana Martins?",
    answer: "A Dra. Giovana Martins é formada em Medicina pela Universidade Federal de Minas Gerais (UFMG), com residência em Pediatria pelo Hospital das Clínicas da UFMG e especialização em Endocrinologia Pediátrica pela Sociedade Brasileira de Endocrinologia e Metabologia (SBEM)."
  },
  {
    question: "Há quanto tempo a Dra. Giovana Martins atua em endocrinologia pediátrica?",
    answer: "A Dra. Giovana Martins possui mais de 15 anos de experiência em endocrinologia pediátrica, dedicando-se exclusivamente ao atendimento de crianças e adolescentes em Belo Horizonte e região metropolitana."
  },
  {
    question: "Quais são as certificações da Dra. Giovana Martins?",
    answer: "A Dra. Giovana Martins possui CRM/MG e RQE (Registro de Qualificação de Especialista), sendo membro da Sociedade Brasileira de Endocrinologia e Metabologia (SBEM) e da Sociedade Brasileira de Pediatria (SBP)."
  },
  {
    question: "Qual a filosofia de atendimento da Dra. Giovana Martins?",
    answer: "A Dra. Giovana Martins acredita em um atendimento humanizado, baseado em evidências científicas, com foco na educação e empoderamento das famílias. Cada criança recebe um cuidado personalizado que respeita sua individualidade e contexto familiar."
  },
  {
    question: "Quantas famílias a Dra. Giovana Martins já atendeu?",
    answer: "Ao longo de sua carreira, a Dra. Giovana Martins já atendeu mais de 500 famílias, sempre priorizando um atendimento humanizado e baseado em evidências científicas."
  },
  {
    question: "A Dra. Giovana Martins atende apenas em Belo Horizonte?",
    answer: "Sim, a Dra. Giovana Martins atende exclusivamente em Belo Horizonte, MG, no consultório localizado na R. Turquesa, 347 - Prado, Belo Horizonte - MG, 30411-177."
  }
];

const testimonials = [
  {
    author: "Maria Silva",
    relation: "Mãe de paciente",
    rating: 5,
    reviewBody: "A Dra. Giovana Martins transformou nossa jornada com diabetes. Minha filha hoje leva uma vida normal e feliz graças ao cuidado e atenção que recebemos. Recomendo muito!"
  },
  {
    author: "João Santos",
    relation: "Pai de paciente",
    rating: 5,
    reviewBody: "Encontramos na Dra. Giovana Martins não apenas uma médica excepcional, mas alguém que realmente se importa. O acompanhamento do crescimento do nosso filho foi impecável."
  },
  {
    author: "Ana Paula",
    relation: "Mãe de paciente",
    rating: 5,
    reviewBody: "O acolhimento e a clareza nas explicações fazem toda diferença. Sempre saímos das consultas tranquilos e bem informados sobre o tratamento. A Dra. Giovana é excepcional!"
  }
];

const stats = [
  {
    icon: Award,
    number: "15+",
    label: "Anos de Experiência",
    description: "Dedicação exclusiva à endocrinologia pediátrica"
  },
  {
    icon: Users,
    number: "500+",
    label: "Famílias Atendidas",
    description: "Transformando vidas com cuidado especializado"
  },
  {
    icon: Heart,
    number: "100%",
    label: "Dedicação",
    description: "Compromisso com o bem-estar de cada criança"
  },
  {
    icon: TrendingUp,
    number: "4",
    label: "Especialidades Principais",
    description: "Puberdade, Diabetes, Crescimento e Tireoide"
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      <PersonSchema />
      <PhysicianSchema />
      <FAQPageSchema faqs={aboutFAQs} />
      {testimonials.map((testimonial, index) => (
        <ReviewSchema
          key={index}
          author={testimonial.author}
          rating={testimonial.rating}
          reviewBody={testimonial.reviewBody}
        />
      ))}
      <Header />
      <main>
        <section className="pt-48 pb-12 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <div className="flex justify-center mb-8">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-medium border-4 border-card">
                  <Image
                    src="/images/dra-giovana/04-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
                    alt="Dra. Giovana Martins - Endocrinologista Pediátrica"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Dra. Giovana Martins:
                <br />
                Expertise em Endocrinologia Pediátrica
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Endocrinologista pediátrica dedicada ao cuidado integral de crianças e adolescentes, 
                com formação sólida e experiência em tratamentos personalizados que respeitam a 
                individualidade de cada paciente e família.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={index}
                    className="border-none shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-soft text-center animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 space-y-3">
                      <div className="flex justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-foreground">
                        {stat.number}
                      </div>
                      <div className="text-lg font-semibold text-foreground">
                        {stat.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.description}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <AboutDetailsSection />
        <TimelineSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FAQSection 
          faqs={aboutFAQs}
          title="Perguntas Frequentes sobre a Dra. Giovana Martins"
          description="Tire suas dúvidas sobre formação, experiência e atendimento"
        />

        {/* CTA Section */}
        <CTASection />

        {/* Links Internos */}
        <section className="py-16 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Saiba Mais
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild>
                  <Link href="/">Homepage</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/servicos">Nossos Serviços</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/servicos/puberdade-precoce">Puberdade Precoce</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/servicos/diabetes-infantil">Diabetes Infantil</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/servicos/baixa-estatura">Baixa Estatura</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/servicos/disturbios-tireoide">Distúrbios da Tireoide</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/blog">Blog</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contato">Contato</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

