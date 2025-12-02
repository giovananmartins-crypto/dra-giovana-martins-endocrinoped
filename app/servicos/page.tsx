import { Header } from "@/components/Header";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LocalBusinessSchema, FAQPageSchema, ServicesPageSchema } from "@/lib/schema-markup";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { CheckCircle2, Heart, Award, Users, Stethoscope, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CTALink } from "@/components/analytics/CTALink";

export const metadata: Metadata = generateMetadata({
  title: "Nossos Serviços | Endocrinologia Pediátrica BH | Dra. Giovana Martins",
  description: "Conheça os serviços especializados em endocrinologia pediátrica da Dra. Giovana Martins em Belo Horizonte: puberdade precoce, diabetes infantil, baixa estatura, distúrbios da tireoide e mais.",
  keywords: [
    "endocrinologia pediátrica BH",
    "serviços endocrinologista pediátrica",
    "puberdade precoce",
    "diabetes infantil",
    "baixa estatura",
    "distúrbios tireoide infantil",
    "endocrinologista Belo Horizonte",
    "tratamento hormonal infantil"
  ],
  url: "/servicos"
});

const servicesFAQs = [
  {
    question: "Quais serviços a Dra. Giovana Martins oferece?",
    answer: "A Dra. Giovana Martins oferece atendimento especializado em puberdade precoce, diabetes infantil (tipo 1 e 2), baixa estatura e distúrbios do crescimento, distúrbios da tireoide, obesidade infantil e outros distúrbios endócrinos em crianças e adolescentes."
  },
  {
    question: "Como agendar uma consulta para um serviço específico?",
    answer: "Você pode agendar uma consulta através do telefone (31) 97264-8155, WhatsApp (31) 97264-8155, ou preenchendo o formulário de contato. Nossa equipe entrará em contato para confirmar o melhor horário e entender qual serviço você precisa."
  },
  {
    question: "A primeira consulta é diferente para cada serviço?",
    answer: "A primeira consulta sempre inclui uma avaliação completa do histórico médico, exame físico detalhado e análise de exames anteriores. O foco da avaliação varia conforme o serviço necessário, mas a abordagem é sempre personalizada e acolhedora."
  },
  {
    question: "Os serviços são cobertos por planos de saúde?",
    answer: "Sim, o consultório atende diversos planos de saúde. Entre em contato para verificar se seu convênio está na lista de aceitos e agendar sua consulta."
  },
  {
    question: "Quanto tempo dura o tratamento para cada condição?",
    answer: "A duração do tratamento varia conforme cada caso e condição. Algumas condições requerem acompanhamento contínuo, enquanto outras podem ter tratamento mais curto. A Dra. Giovana Martins explica o plano de tratamento durante a consulta."
  },
  {
    question: "Posso agendar consulta para mais de um serviço?",
    answer: "Sim, é possível. Durante a consulta, a Dra. Giovana Martins fará uma avaliação completa e pode identificar e tratar múltiplas condições se necessário. O importante é agendar a consulta inicial para uma avaliação completa."
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cuidado personalizado que respeita a individualidade de cada criança e família, criando um ambiente acolhedor e seguro."
  },
  {
    icon: Award,
    title: "Formação de Excelência",
    description: "Formação de excelência em endocrinologia pediátrica, com centenas de famílias atendidas com sucesso."
  },
  {
    icon: Stethoscope,
    title: "Diagnóstico Preciso",
    description: "Avaliação completa e baseada em evidências científicas, utilizando os melhores recursos diagnósticos disponíveis."
  },
  {
    icon: Users,
    title: "Acompanhamento Contínuo",
    description: "Suporte constante durante todo o tratamento, com consultas regulares e disponibilidade para esclarecer dúvidas."
  },
  {
    icon: Clock,
    title: "Tratamento Personalizado",
    description: "Cada plano de tratamento é desenvolvido especificamente para a criança, considerando suas necessidades únicas."
  },
  {
    icon: CheckCircle2,
    title: "Resultados Comprovados",
    description: "Histórico de sucesso no tratamento de diversas condições endócrinas, sempre priorizando o bem-estar da criança."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <LocalBusinessSchema />
      <ServicesPageSchema />
      <FAQPageSchema faqs={servicesFAQs} />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm">
                  <Stethoscope className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium">Especialidade em Endocrinologia Pediátrica</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Nossos Serviços em Endocrinologia Pediátrica
                </h1>
                
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  Oferecemos tratamento especializado e acompanhamento personalizado para as principais condições endócrinas na infância e adolescência. Com uma formação de excelência, a Dra. Giovana Martins dedica-se ao cuidado integral de cada criança.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button size="lg" className="bg-foreground text-card hover:bg-foreground/90 gap-2 text-lg px-8 py-6" asChild>
                    <CTALink href="/contato" label="Services Page Hero - Agendar Consulta">
                      Agendar Consulta
                    </CTALink>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-foreground text-foreground hover:bg-foreground/10 text-lg px-8 py-6" asChild>
                    <Link href="/sobre">Conheça a Dra. Giovana</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl shadow-medium overflow-hidden relative">
                  <Image
                    src="/images/dra-giovana/05-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
                    alt="Dra. Giovana Martins - Endocrinologista Pediátrica oferecendo serviços especializados em Belo Horizonte"
                    fill
                    className="object-cover rounded-3xl"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* Benefits Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Por que Escolher Nossos Serviços?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Diferenciais que fazem toda a diferença no cuidado com a saúde endócrina do seu filho
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-card animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

