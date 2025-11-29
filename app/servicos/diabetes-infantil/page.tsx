import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MedicalConditionSchema, FAQPageSchema, ReviewSchema, WebPageSchema, BreadcrumbSchema } from "@/lib/schema-markup";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Phone, MessageCircle, CheckCircle2, AlertCircle, Stethoscope, Activity } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { WhatsAppLink } from "@/components/analytics/WhatsAppLink";
import { PhoneLink } from "@/components/analytics/PhoneLink";
import { CTALink } from "@/components/analytics/CTALink";
import { Breadcrumbs } from "@/components/blog/Breadcrumbs";

export const metadata: Metadata = generateMetadata({
  title: "Diabetes Infantil | Tipo 1 e 2 | Tratamento em BH | Dra. Giovana Martins",
  description: "Guia completo sobre diabetes infantil (Tipo 1 e 2): sintomas, diagnóstico e tratamento. Conte com a Dra. Giovana Martins, especialista em Belo Horizonte.",
  keywords: [
    "diabetes infantil",
    "diabetes tipo 1 crianças",
    "sintomas diabetes infantil",
    "tratamento diabetes infantil",
    "endocrinologista diabetes infantil",
    "diabetes tipo 2 crianças",
    "controle glicêmico infantil"
  ],
  url: "/servicos/diabetes-infantil",
  image: "https://www.giovanaendocrinoped.com.br/images/servicos/diabetes-infantil-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
});

const faqs = [
  {
    question: "Qual a diferença entre Diabetes Tipo 1 e Tipo 2 em crianças?",
    answer: "O Diabetes Tipo 1 é uma doença autoimune em que o pâncreas para de produzir insulina, sendo mais comum em crianças e adolescentes. O Diabetes Tipo 2 está relacionado à resistência à insulina e é mais raro em crianças, geralmente associado a obesidade e histórico familiar. Ambos requerem tratamento especializado."
  },
  {
    question: "Quais são os principais sintomas de diabetes em crianças?",
    answer: "Os sintomas mais comuns incluem sede excessiva, urina frequente e em grande quantidade, perda de peso inexplicada, fadiga, aumento do apetite, visão turva e, em casos mais graves, náuseas e vômitos. Se notar esses sinais, busque avaliação médica imediata."
  },
  {
    question: "Como é feito o diagnóstico de diabetes em crianças?",
    answer: "O diagnóstico é feito através de exames de sangue que medem os níveis de glicose. Exames como glicemia de jejum, hemoglobina glicada e teste de tolerância à glicose são utilizados. Em casos de sintomas graves, a glicemia casual também pode confirmar o diagnóstico."
  },
  {
    question: "O diabetes infantil tem cura?",
    answer: "O Diabetes Tipo 1 não tem cura, mas com tratamento adequado (insulina, monitoramento da glicemia, alimentação e exercício), a criança pode ter uma vida normal e saudável. O Diabetes Tipo 2 pode ser controlado e, em alguns casos, revertido com mudanças de estilo de vida."
  },
  {
    question: "Como é o tratamento do diabetes em crianças?",
    answer: "O tratamento do Diabetes Tipo 1 envolve aplicação de insulina, monitoramento regular da glicemia, planejamento alimentar e atividade física. Para o Tipo 2, o tratamento pode incluir medicamentos orais, mudanças na alimentação e exercícios. O acompanhamento com endocrinologista pediátrico é essencial."
  },
  {
    question: "Crianças com diabetes podem ter uma vida normal?",
    answer: "Sim, absolutamente! Com tratamento adequado e acompanhamento médico regular, crianças com diabetes podem participar de todas as atividades, praticar esportes, ir à escola normalmente e ter uma vida plena e saudável. A educação da família e da criança é fundamental."
  }
];

const testimonials = [
  {
    author: "Aline Marques",
    relation: "Mãe de paciente",
    rating: 5,
    reviewBody: "Dra Giovana é uma ótima profissional, muito cuidadosa e tem propriedade nas coisas que fala."
  },
  {
    author: "LH",
    relation: "Mãe de paciente",
    rating: 5,
    reviewBody: "A médica foi completamente atenciosa na consulta. Foi super didática."
  },
  {
    author: "LVSR",
    relation: "Mãe de paciente",
    rating: 5,
    reviewBody: "Ótimo atendimento, doutora muito atenciosa e cuidadosa."
  }
];

export default function DiabetesInfantilPage() {
  return (
    <div className="min-h-screen">
      <MedicalConditionSchema
        name="Diabetes Infantil"
        description="Diabetes infantil é uma condição crônica caracterizada por níveis elevados de glicose no sangue, podendo ser Tipo 1 (autoimune) ou Tipo 2 (resistência à insulina), requerendo tratamento especializado e acompanhamento contínuo."
        symptoms={[
          "Sede excessiva",
          "Urina frequente e em grande quantidade",
          "Perda de peso inexplicada",
          "Fadiga e cansaço",
          "Aumento do apetite",
          "Visão turva",
          "Náuseas e vômitos (em casos graves)"
        ]}
        causes={[
          "Diabetes Tipo 1: doença autoimune que destrói células produtoras de insulina",
          "Diabetes Tipo 2: resistência à insulina, geralmente associada a obesidade",
          "Fatores genéticos e familiares",
          "Fatores ambientais e estilo de vida"
        ]}
        treatment="Tratamento com insulina (Tipo 1) ou medicamentos orais (Tipo 2), monitoramento da glicemia, planejamento alimentar, atividade física e educação sobre a condição."
      />
      <FAQPageSchema faqs={faqs} />
      {testimonials.map((testimonial, index) => (
        <ReviewSchema
          key={index}
          author={testimonial.author}
          rating={testimonial.rating}
          reviewBody={testimonial.reviewBody}
        />
      ))}
      <WebPageSchema
        name="Diabetes Infantil | Dra. Giovana Martins"
        description="Guia completo sobre diabetes infantil (Tipo 1 e 2): sintomas, diagnóstico e tratamento. Conte com a Dra. Giovana Martins, especialista em Belo Horizonte."
        url="/servicos/diabetes-infantil"
        image="https://www.giovanaendocrinoped.com.br/images/servicos/diabetes-infantil-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
      />
      <BreadcrumbSchema
        items={[
          { label: "Serviços", href: "/servicos" },
          { label: "Diabetes Infantil" }
        ]}
      />
      <Header />
      <main>
        {/* Breadcrumbs */}
        <section className="pt-24 pb-4 bg-card">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { label: "Serviços", href: "/servicos" },
                { label: "Diabetes Infantil" }
              ]}
            />
          </div>
        </section>
        {/* Hero Section */}
        <section className="pt-8 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm">
                  <Activity className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium">Especialidade em Endocrinologia Pediátrica</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Diabetes Infantil: Compreensão e Manejo Especializado
                </h1>
                
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  O diabetes em crianças requer cuidado especializado e acompanhamento contínuo. Com diagnóstico precoce e tratamento adequado, é possível garantir uma vida saudável e plena para a criança. A Dra. Giovana Martins oferece cuidado especializado em Belo Horizonte.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    size="lg"
                    className="bg-foreground text-card hover:bg-foreground/90 gap-2 text-lg px-8 py-6"
                    asChild
                  >
                    <CTALink href="/contato" label="Diabetes Infantil - Hero - Busca por Diagnóstico">
                      <Calendar className="h-5 w-5" />
                      Busca por Diagnóstico?
                    </CTALink>
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-foreground text-foreground hover:bg-foreground/10 text-lg px-8 py-6 gap-2"
                    asChild
                  >
                    <WhatsAppLink href="https://wa.me/5531995626630" target="_blank" rel="noopener noreferrer" label="Diabetes Infantil - Hero">
                      <MessageCircle className="h-5 w-5" />
                      Fale via WhatsApp
                    </WhatsAppLink>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl shadow-medium overflow-hidden relative">
                  <Image
                    src="/images/servicos/diabetes-infantil-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
                    alt="Diabetes Infantil - Tratamento Especializado com Dra. Giovana Martins, Endocrinologista Pediátrica em BH"
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

        {/* Introdução */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  O diabetes é uma condição crônica que afeta a forma como o corpo processa a glicose (açúcar) no sangue. Em crianças, o diabetes pode ser do Tipo 1 ou Tipo 2, cada um com características, causas e tratamentos específicos. O diagnóstico precoce e o tratamento adequado são fundamentais para prevenir complicações e garantir qualidade de vida.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  A Dra. Giovana Martins, endocrinologista pediátrica com formação de excelência em Belo Horizonte, oferece diagnóstico preciso, tratamento personalizado e acompanhamento contínuo para crianças com diabetes, sempre com foco na educação da família e no bem-estar da criança.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* O que é Diabetes Infantil */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                O que é Diabetes Infantil? (Tipo 1 e Tipo 2)
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  O diabetes é uma condição em que o corpo não consegue produzir ou usar adequadamente a insulina, um hormônio essencial para o metabolismo da glicose. Em crianças, existem dois tipos principais de diabetes, cada um com características distintas.
                </p>

                <Card className="border-none shadow-soft bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-primary" />
                      Diferenças entre Tipo 1 e Tipo 2
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Diabetes Tipo 1</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Doença autoimune que destrói células produtoras de insulina</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Mais comum em crianças e adolescentes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Requer insulina desde o diagnóstico</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Início geralmente rápido e agudo</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Diabetes Tipo 2</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-info mt-1">•</span>
                            <span>Resistência à insulina ou produção insuficiente</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-info mt-1">•</span>
                            <span>Mais raro em crianças, geralmente associado a obesidade</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-info mt-1">•</span>
                            <span>Pode ser tratado com medicamentos orais inicialmente</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-info mt-1">•</span>
                            <span>Início geralmente gradual</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <p>
                  Independentemente do tipo, o diabetes em crianças requer atenção especializada, educação da família e acompanhamento contínuo para garantir o melhor controle glicêmico e prevenir complicações a longo prazo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sinais e Sintomas */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Sinais e Sintomas de Alerta
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  Reconhecer os sinais e sintomas do diabetes em crianças é fundamental para o diagnóstico precoce. Se você notar qualquer um desses sinais em seu filho ou filha, busque avaliação médica imediata.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-none shadow-soft bg-gradient-soft">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        Sede e Urina Excessivas
                      </h3>
                      <p>
                        Um dos primeiros sinais é a sede excessiva (polidipsia) e a necessidade frequente de urinar (poliúria), inclusive durante a noite. A criança pode acordar várias vezes para beber água ou ir ao banheiro.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-soft bg-gradient-soft">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-secondary" />
                        Perda de Peso Inexplicada
                      </h3>
                      <p>
                        Apesar de comer normalmente ou até mais do que o habitual, a criança pode perder peso rapidamente. Isso acontece porque o corpo não consegue usar a glicose adequadamente e começa a quebrar gordura e músculo para obter energia.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-soft bg-gradient-soft">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-info" />
                        Fadiga e Cansaço
                      </h3>
                      <p>
                        A criança pode apresentar fadiga extrema, cansaço e falta de energia, mesmo após descansar adequadamente. Isso ocorre porque as células não recebem a glicose necessária para funcionar.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-soft bg-gradient-soft">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent" />
                        Outros Sinais Importantes
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Aumento do apetite (polifagia)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Visão turva</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Irritabilidade ou mudanças de humor</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Náuseas e vômitos (em casos graves)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-destructive/10 p-6 rounded-2xl border-l-4 border-destructive">
                  <p className="text-foreground leading-relaxed">
                    <strong className="text-foreground">Atenção:</strong> Se a criança apresentar sintomas graves como náuseas, vômitos, respiração acelerada, hálito com cheiro de fruta ou confusão mental, busque atendimento médico de emergência imediatamente, pois pode ser cetoacidose diabética, uma complicação grave.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnóstico */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Diagnóstico do Diabetes em Crianças
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  O diagnóstico do diabetes em crianças é feito através de exames de sangue que medem os níveis de glicose. A Dra. Giovana Martins realiza uma avaliação completa para determinar o tipo de diabetes e estabelecer o melhor plano de tratamento.
                </p>

                <Card className="border-none shadow-soft bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Stethoscope className="h-5 w-5 text-primary" />
                      Exames de Glicemia
                    </h3>
                    <p className="mb-4">
                      Os principais exames utilizados no diagnóstico incluem:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc"><strong>Glicemia de jejum:</strong> Mede a glicose após 8 horas de jejum. Valores acima de 126 mg/dL indicam diabetes.</li>
                      <li className="list-disc"><strong>Glicemia casual:</strong> Mede a glicose em qualquer momento do dia. Valores acima de 200 mg/dL com sintomas indicam diabetes.</li>
                      <li className="list-disc"><strong>Teste de tolerância à glicose:</strong> Mede a resposta do corpo à ingestão de açúcar. Valores acima de 200 mg/dL após 2 horas indicam diabetes.</li>
                      <li className="list-disc"><strong>Hemoglobina glicada (HbA1c):</strong> Mede a média de glicose nos últimos 2-3 meses. Valores acima de 6,5% indicam diabetes.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Exames Complementares
                    </h3>
                    <p className="mb-4">
                      Para determinar o tipo de diabetes e avaliar a função do pâncreas, podem ser solicitados:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc"><strong>Peptídeo C:</strong> Avalia a produção de insulina pelo pâncreas</li>
                      <li className="list-disc"><strong>Anticorpos anti-ilhotas:</strong> Para confirmar Diabetes Tipo 1 (autoimune)</li>
                      <li className="list-disc"><strong>Insulina:</strong> Para avaliar os níveis de insulina no sangue</li>
                      <li className="list-disc"><strong>Exames de função renal e hepática:</strong> Para avaliação geral da saúde</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Tratamento */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Tratamento e Controle do Diabetes Infantil
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  O tratamento do diabetes em crianças é individualizado e envolve uma equipe multidisciplinar, incluindo endocrinologista pediátrico, nutricionista, educador em diabetes e, quando necessário, psicólogo. O objetivo é manter os níveis de glicose dentro da faixa ideal e prevenir complicações.
                </p>

                <Card className="border-none shadow-soft bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Terapia com Insulina
                    </h3>
                    <p className="mb-4">
                      Para crianças com Diabetes Tipo 1, a insulina é essencial desde o diagnóstico. O tratamento pode incluir:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc"><strong>Múltiplas injeções diárias:</strong> Insulina de ação rápida antes das refeições e insulina de ação prolongada uma ou duas vezes ao dia</li>
                      <li className="list-disc"><strong>Bombas de insulina:</strong> Dispositivos que liberam insulina continuamente, oferecendo mais flexibilidade</li>
                      <li className="list-disc"><strong>Monitoramento contínuo de glicose:</strong> Sensores que medem a glicose 24 horas por dia</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Alimentação e Exercício
                    </h3>
                    <p className="mb-4">
                      Uma alimentação equilibrada e atividade física regular são fundamentais para o controle do diabetes:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc"><strong>Planejamento alimentar:</strong> Contagem de carboidratos e horários das refeições</li>
                      <li className="list-disc"><strong>Atividade física:</strong> Exercícios regulares ajudam a melhorar o controle glicêmico</li>
                      <li className="list-disc"><strong>Educação nutricional:</strong> Aprender a escolher alimentos adequados e calcular doses de insulina</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Monitoramento da Glicemia
                    </h3>
                    <p>
                      O monitoramento regular dos níveis de glicose é essencial para ajustar o tratamento. Isso pode ser feito através de glicosímetros (ponta de dedo) ou sensores de monitoramento contínuo. A frequência do monitoramento varia conforme cada caso e é definida pela Dra. Giovana Martins.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Dicas para Pais */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Vivendo com Diabetes: Dicas para Pais
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  Cuidar de uma criança com diabetes pode parecer desafiador no início, mas com educação, apoio e acompanhamento adequado, é possível garantir uma vida normal e saudável para a criança.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-none shadow-soft bg-card">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        Educação e Aprendizado
                      </h3>
                      <p>
                        Aprenda sobre diabetes, como aplicar insulina, monitorar a glicemia e reconhecer sinais de hipoglicemia ou hiperglicemia. A educação é a base do sucesso no tratamento.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-soft bg-card">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        Rotina e Organização
                      </h3>
                      <p>
                        Estabeleça uma rotina para refeições, aplicação de insulina e monitoramento. Mantenha um diário de glicemias e anote eventos importantes para discussão nas consultas.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-soft bg-card">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        Comunicação com a Escola
                      </h3>
                      <p>
                        Informe a escola sobre o diabetes da criança, forneça instruções claras sobre como lidar com hipoglicemia e garanta que a criança tenha acesso a lanches e monitoramento quando necessário.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-soft bg-card">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        Apoio Emocional
                      </h3>
                      <p>
                        Ofereça apoio emocional à criança, incentive a independência gradual no autocuidado e busque grupos de apoio ou terapia quando necessário. O bem-estar emocional é tão importante quanto o físico.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Aprenda a Controlar o Diabetes
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Se você suspeita que seu filho ou filha pode ter diabetes, ou se já foi diagnosticado e precisa de acompanhamento especializado, a Dra. Giovana Martins está pronta para ajudar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-lg px-8 py-6"
                  asChild
                >
                  <CTALink href="/contato" label="Diabetes Infantil - CTA - Agende sua Consulta">
                    <Calendar className="h-5 w-5" />
                    Agende sua Consulta
                  </CTALink>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/10 gap-2 text-lg px-8 py-6"
                  asChild
                >
                  <PhoneLink href="tel:+5531995626630" label="Diabetes Infantil - CTA">
                    <Phone className="h-5 w-5" />
                    Ligar Agora
                  </PhoneLink>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/10 gap-2 text-lg px-8 py-6"
                  asChild
                >
                  <WhatsAppLink href="https://wa.me/5531995626630" target="_blank" rel="noopener noreferrer" label="Diabetes Infantil - CTA">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </WhatsAppLink>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Perguntas Frequentes sobre Diabetes Infantil
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border-none shadow-soft bg-card">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Depoimentos de Pacientes
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="border-none shadow-soft bg-gradient-soft">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-accent text-xl">★</span>
                        ))}
                      </div>
                      <p className="text-foreground leading-relaxed italic">
                        &ldquo;{testimonial.reviewBody}&rdquo;
                      </p>
                      <div className="pt-4 border-t border-border">
                        <div className="font-semibold text-foreground">
                          {testimonial.author}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Links Internos */}
        <section className="py-16 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Saiba Mais sobre Nossos Serviços
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild>
                  <Link href="/">Homepage</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/servicos/puberdade-precoce">Puberdade Precoce</Link>
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

