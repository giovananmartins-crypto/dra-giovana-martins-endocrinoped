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
    answer: "A Dra. Giovana Martins é graduada em Medicina pela UNIFENAS - Alfenas, com residência em Pediatria pelo Hospital Infantil João Paulo II e residência em Endocrinologia Pediátrica pelo Hospital das Clínicas da UFMG."
  },
  {
    question: "Há quanto tempo a Dra. Giovana Martins atua em endocrinologia pediátrica?",
    answer: "A Dra. Giovana Martins possui uma formação de excelência em endocrinologia pediátrica, dedicando-se exclusivamente ao atendimento de crianças e adolescentes em Belo Horizonte, região metropolitana e Guanambi-BA (cidade natal)."
  },
  {
    question: "Quais são as certificações da Dra. Giovana Martins?",
    answer: "A Dra. Giovana Martins possui CRM-MG 79896, RQE 66519 e CRM-BA 49737."
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
    answer: "A Dra. Giovana Martins atende em Belo Horizonte e região metropolitana, no consultório localizado na R. Turquesa, 347 - Prado, Belo Horizonte - MG, 30411-177, e também em Guanambi-BA (cidade natal)."
  }
];

const testimonials = [
  {
    author: "Natália Nascimento",
    relation: "Mãe de paciente",
    rating: 5,
    reviewBody: "A doutora é maravilhosa, atenciosa, carinhosa com as crianças. Explica tudo de forma que nós, que não entendemos do assunto, possamos entender tudo o que está acontecendo. Super educada. Simplesmente amei a consulta. Excelente profissional."
  },
  {
    author: "Anna Clara Lopes",
    relation: "Mãe de paciente",
    rating: 5,
    reviewBody: "Excelente profissional! Sempre atenta ao que tem de melhor evidência, tratando com muita dedicação e carinho. Tenho plena confiança no seu trabalho!"
  },
  {
    author: "Jaqueline Lima",
    relation: "Mãe de paciente",
    rating: 5,
    reviewBody: "Médica atenciosa, explicou tudo com muita calma, teve atenção em ouvir o relato da paciente. Muito satisfeita."
  },
  {
    author: "Marisete Lopes",
    relation: "Mãe de paciente",
    rating: 5,
    reviewBody: "Muito atenciosa, carinhosa pra lidar com criança, passou muita tranquilidade a mim mãe que fica ansiosa antes dos resultados. Ótima doutora, adoramos a consulta."
  },
  {
    author: "Thaís Fátima de Oliveira",
    relation: "Mãe de paciente",
    rating: 5,
    reviewBody: "Amei, maravilhosa, super atenciosa, analisa tudo. Gostei muito."
  },
  {
    author: "Ana Clara",
    relation: "Mãe de paciente",
    rating: 5,
    reviewBody: "Excelente profissional, atenciosa, escuta todos os relatos dos pacientes, e simpática."
  },
  {
    author: "Halia Silva",
    relation: "Mãe de paciente",
    rating: 5,
    reviewBody: "Amei o cuidado dela com meu filho. Super profissional e atenciosa."
  },
  {
    author: "Marcela M.",
    relation: "Mãe de paciente",
    rating: 5,
    reviewBody: "A Dra. Giovana foi muito atenciosa durante a consulta, fez o exame clínico completo e explicou os próximos passos."
  }
];

const stats = [
  {
    icon: Award,
    number: "Excelência",
    label: "Formação",
    description: "Formação de excelência em endocrinologia pediátrica"
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

