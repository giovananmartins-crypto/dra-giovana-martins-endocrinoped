import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MedicalConditionSchema, FAQPageSchema, ReviewSchema, WebPageSchema, BreadcrumbSchema } from "@/lib/schema-markup";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Phone, MessageCircle, CheckCircle2, AlertCircle, Stethoscope, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { WhatsAppLink } from "@/components/analytics/WhatsAppLink";
import { PhoneLink } from "@/components/analytics/PhoneLink";
import { CTALink } from "@/components/analytics/CTALink";
import { Breadcrumbs } from "@/components/blog/Breadcrumbs";

export const metadata: Metadata = generateMetadata({
  title: "Distúrbios da Tireoide em Crianças | Diagnóstico e Tratamento | Dra. Giovana Martins",
  description: "Saiba mais sobre hipotireoidismo, hipertireoidismo e outros distúrbios da tireoide em crianças. Agende uma consulta com a Dra. Giovana Martins em BH.",
  keywords: [
    "distúrbios tireoide infantil",
    "hipotireoidismo congênito",
    "hipertireoidismo crianças",
    "nódulos tireoide crianças",
    "endocrinologista tireoide infantil",
    "tireoide pediátrica",
    "teste do pezinho"
  ],
  url: "/servicos/disturbios-tireoide",
  image: "https://www.giovanaendocrinoped.com.br/images/servicos/disturbios-tireoide-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
});

const faqs = [
  {
    question: "O que é a tireoide e qual sua importância na infância?",
    answer: "A tireoide é uma glândula localizada no pescoço que produz hormônios essenciais para o crescimento, desenvolvimento do cérebro, metabolismo e funcionamento de diversos órgãos. Na infância, a função adequada da tireoide é crucial para o desenvolvimento físico e mental da criança."
  },
  {
    question: "O que é hipotireoidismo congênito?",
    answer: "Hipotireoidismo congênito é a deficiência de hormônios da tireoide presente desde o nascimento. É detectado pelo teste do pezinho e requer tratamento imediato com reposição hormonal para prevenir problemas de desenvolvimento. O tratamento precoce é fundamental para evitar sequelas."
  },
  {
    question: "Quais são os sintomas de problemas de tireoide em crianças?",
    answer: "Os sintomas variam conforme o tipo de distúrbio. No hipotireoidismo: cansaço, ganho de peso, crescimento lento, pele seca, constipação. No hipertireoidismo: agitação, perda de peso, taquicardia, sudorese, dificuldade para dormir. Qualquer suspeita deve ser avaliada por um especialista."
  },
  {
    question: "Como é feito o diagnóstico de distúrbios da tireoide?",
    answer: "O diagnóstico é feito através de exames de sangue que medem os níveis de hormônios da tireoide (TSH, T4 livre, T3) e, quando necessário, exames de imagem como ultrassonografia. A Dra. Giovana Martins realiza uma avaliação completa para determinar o tipo e a causa do distúrbio."
  },
  {
    question: "O tratamento de distúrbios da tireoide em crianças é seguro?",
    answer: "Sim, quando indicado e acompanhado por um endocrinologista pediátrico experiente, o tratamento é seguro e eficaz. Os medicamentos utilizados têm décadas de uso clínico e são bem tolerados. O acompanhamento regular é essencial para ajustar as doses e monitorar a resposta ao tratamento."
  },
  {
    question: "Crianças com problemas de tireoide precisam de tratamento para sempre?",
    answer: "Depende do tipo de distúrbio. O hipotireoidismo congênito geralmente requer tratamento por toda a vida. O hipertireoidismo pode ser temporário em alguns casos. O hipotireoidismo adquirido também pode ser permanente. A Dra. Giovana Martins avalia cada caso individualmente e orienta sobre a duração do tratamento."
  }
];

const testimonials = [
  {
    author: "Janainna Kirk",
    relation: "Mãe de paciente",
    rating: 5,
    reviewBody: "Consultório com boa estrutura e atendimento. A médica é qualificada e atenciosa."
  },
  {
    author: "Amazildo",
    relation: "Pai de paciente",
    rating: 5,
    reviewBody: "Excelente profissional. Indicaria para qualquer pessoa."
  },
  {
    author: "Kele",
    relation: "Mãe de paciente",
    rating: 5,
    reviewBody: "Gostei, achei ela atenciosa. Recomendo. Vamos fazer os exames ainda pra ver o melhor tratamento."
  }
];

export default function DisturbiosTireoidePage() {
  return (
    <div className="min-h-screen">
      <MedicalConditionSchema
        name="Distúrbios da Tireoide em Crianças"
        description="Distúrbios da tireoide em crianças incluem hipotireoidismo (congênito ou adquirido), hipertireoidismo e nódulos, afetando o crescimento e desenvolvimento. Requerem diagnóstico precoce e tratamento especializado."
        symptoms={[
          "Hipotireoidismo: cansaço, ganho de peso, crescimento lento, pele seca, constipação",
          "Hipertireoidismo: agitação, perda de peso, taquicardia, sudorese, dificuldade para dormir",
          "Nódulos: geralmente assintomáticos, detectados em exames"
        ]}
        causes={[
          "Hipotireoidismo congênito: defeitos na formação ou função da tireoide",
          "Hipotireoidismo adquirido: doença autoimune (tireoidite de Hashimoto)",
          "Hipertireoidismo: doença de Graves ou outros fatores",
          "Nódulos: geralmente benignos, mas requerem avaliação"
        ]}
        treatment="Tratamento individualizado conforme o tipo de distúrbio: reposição hormonal para hipotireoidismo, medicamentos ou outras opções para hipertireoidismo, e avaliação cirúrgica quando necessário para nódulos."
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
        name="Distúrbios da Tireoide em Crianças | Dra. Giovana Martins"
        description="Saiba mais sobre hipotireoidismo, hipertireoidismo e outros distúrbios da tireoide em crianças. Agende uma consulta com a Dra. Giovana Martins em BH."
        url="/servicos/disturbios-tireoide"
        image="https://www.giovanaendocrinoped.com.br/images/servicos/disturbios-tireoide-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
      />
      <BreadcrumbSchema
        items={[
          { label: "Serviços", href: "/servicos" },
          { label: "Distúrbios da Tireoide" }
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
                { label: "Distúrbios da Tireoide" }
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
                  <Stethoscope className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium">Especialidade em Endocrinologia Pediátrica</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Distúrbios da Tireoide em Crianças: Diagnóstico e Manejo
                </h1>
                
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  A tireoide é uma glândula essencial para o crescimento e desenvolvimento infantil. Distúrbios da tireoide podem afetar significativamente a saúde da criança. Com diagnóstico precoce e tratamento adequado, é possível garantir o desenvolvimento saudável. A Dra. Giovana Martins oferece cuidado especializado em Belo Horizonte.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    size="lg"
                    className="bg-foreground text-card hover:bg-foreground/90 gap-2 text-lg px-8 py-6"
                    asChild
                  >
                    <CTALink href="/contato" label="Distúrbios Tireoide - Hero - Avalie a Tireoide">
                      <Calendar className="h-5 w-5" />
                      Avalie a Tireoide do seu Filho
                    </CTALink>
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-foreground text-foreground hover:bg-foreground/10 text-lg px-8 py-6 gap-2"
                    asChild
                  >
                    <WhatsAppLink href="https://wa.me/5531995626630" target="_blank" rel="noopener noreferrer" label="Distúrbios Tireoide - Hero">
                      <MessageCircle className="h-5 w-5" />
                      Fale via WhatsApp
                    </WhatsAppLink>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl shadow-medium overflow-hidden relative">
                  <Image
                    src="/images/servicos/disturbios-tireoide-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
                    alt="Distúrbios da Tireoide em Crianças - Tratamento com Dra. Giovana Martins, Endocrinologista Pediátrica em BH"
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
                  A tireoide é uma glândula em formato de borboleta localizada na parte frontal do pescoço, responsável por produzir hormônios essenciais para o crescimento, desenvolvimento do cérebro, metabolismo e funcionamento adequado de diversos órgãos. Na infância, a função adequada da tireoide é crucial para o desenvolvimento físico e mental da criança.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Distúrbios da tireoide em crianças podem incluir hipotireoidismo (produção insuficiente de hormônios), hipertireoidismo (produção excessiva) e nódulos. A Dra. Giovana Martins, endocrinologista pediátrica com formação de excelência em Belo Horizonte, oferece diagnóstico preciso e tratamento especializado para essas condições.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Importância da Tireoide */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                A Importância da Tireoide na Infância
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  Os hormônios da tireoide (T4 e T3) são fundamentais para o desenvolvimento adequado da criança. Eles influenciam:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-none shadow-soft bg-card">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Heart className="h-5 w-5 text-primary" />
                        Desenvolvimento Físico
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Crescimento e desenvolvimento ósseo</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Metabolismo e energia</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Função cardíaca</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Desenvolvimento muscular</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-soft bg-card">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-secondary" />
                        Desenvolvimento Mental
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Desenvolvimento do cérebro</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Função cognitiva</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Desenvolvimento neurológico</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Capacidade de aprendizado</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-primary/10 p-6 rounded-2xl">
                  <p className="text-foreground leading-relaxed">
                    <strong className="text-foreground">Importante:</strong> A deficiência de hormônios da tireoide no início da vida pode causar problemas graves e irreversíveis no desenvolvimento, especialmente no cérebro. Por isso, o diagnóstico e tratamento precoces são fundamentais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hipotireoidismo */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Hipotireoidismo Congênito e Adquirido
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  O hipotireoidismo é a condição em que a tireoide não produz quantidade suficiente de hormônios. Em crianças, pode ser congênito (presente desde o nascimento) ou adquirido (desenvolve-se após o nascimento).
                </p>

                <Card className="border-none shadow-soft bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-primary" />
                      Teste do Pezinho
                    </h3>
                    <p className="mb-4">
                      O hipotireoidismo congênito é detectado pelo teste do pezinho, realizado nos primeiros dias de vida. Este teste é fundamental porque permite o diagnóstico e tratamento imediato, prevenindo problemas graves de desenvolvimento. Quando o teste detecta hipotireoidismo, o tratamento deve ser iniciado o mais rápido possível, idealmente nas primeiras semanas de vida.
                    </p>
                    <p>
                      O tratamento precoce do hipotireoidismo congênito é essencial para prevenir retardo mental e problemas de desenvolvimento. Com tratamento adequado iniciado cedo, a maioria das crianças se desenvolve normalmente.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Sintomas de Hipotireoidismo
                    </h3>
                    <p className="mb-4">
                      Os sintomas podem variar conforme a idade e a gravidade da deficiência hormonal:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc">Cansaço e fadiga excessiva</li>
                      <li className="list-disc">Ganho de peso ou dificuldade para perder peso</li>
                      <li className="list-disc">Crescimento lento ou atrasado</li>
                      <li className="list-disc">Pele seca e cabelo seco</li>
                      <li className="list-disc">Constipação</li>
                      <li className="list-disc">Sensação de frio</li>
                      <li className="list-disc">Sonolência excessiva</li>
                      <li className="list-disc">Dificuldades de aprendizado ou concentração</li>
                      <li className="list-disc">Irritabilidade ou apatia</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Causas do Hipotireoidismo
                    </h3>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc"><strong>Congênito:</strong> Defeitos na formação ou função da tireoide presentes desde o nascimento</li>
                      <li className="list-disc"><strong>Adquirido:</strong> Tireoidite de Hashimoto (doença autoimune), deficiência de iodo, ou outras causas</li>
                      <li className="list-disc"><strong>Pós-cirúrgico:</strong> Após remoção da tireoide</li>
                      <li className="list-disc"><strong>Pós-radioterapia:</strong> Após tratamento com radiação na região do pescoço</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Hipertireoidismo */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Hipertireoidismo em Crianças
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  O hipertireoidismo é menos comum em crianças do que o hipotireoidismo, mas quando ocorre, requer atenção especializada. É caracterizado pela produção excessiva de hormônios da tireoide, acelerando o metabolismo do corpo.
                </p>

                <Card className="border-none shadow-soft bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Sintomas de Hipertireoidismo
                    </h3>
                    <p className="mb-4">
                      Os sintomas do hipertireoidismo incluem:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc">Agitação e hiperatividade</li>
                      <li className="list-disc">Perda de peso apesar do aumento do apetite</li>
                      <li className="list-disc">Taquicardia (batimentos cardíacos acelerados)</li>
                      <li className="list-disc">Sudorese excessiva</li>
                      <li className="list-disc">Tremores</li>
                      <li className="list-disc">Dificuldade para dormir</li>
                      <li className="list-disc">Irritabilidade e mudanças de humor</li>
                      <li className="list-disc">Aceleração do crescimento</li>
                      <li className="list-disc">Olhos saltados (em alguns casos de doença de Graves)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Causas do Hipertireoidismo
                    </h3>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc"><strong>Doença de Graves:</strong> A causa mais comum, uma doença autoimune que estimula a tireoide a produzir excesso de hormônios</li>
                      <li className="list-disc"><strong>Nódulos hiperfuncionantes:</strong> Nódulos que produzem hormônios independentemente</li>
                      <li className="list-disc"><strong>Tireoidite:</strong> Inflamação da tireoide que pode causar liberação temporária de hormônios</li>
                      <li className="list-disc"><strong>Excesso de iodo:</strong> Raro, mas pode ocorrer</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Nódulos e Câncer */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Nódulos e Câncer de Tireoide Pediátrico
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  Nódulos na tireoide são menos comuns em crianças do que em adultos, mas quando presentes, requerem avaliação cuidadosa. A maioria dos nódulos em crianças é benigna, mas a possibilidade de câncer deve ser sempre investigada.
                </p>

                <Card className="border-none shadow-soft bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Avaliação de Nódulos
                    </h3>
                    <p className="mb-4">
                      Quando um nódulo é detectado, a avaliação inclui:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc"><strong>Ultrassonografia de tireoide:</strong> Para avaliar características do nódulo</li>
                      <li className="list-disc"><strong>Punção aspirativa (PAAF):</strong> Para análise das células do nódulo</li>
                      <li className="list-disc"><strong>Exames de sangue:</strong> Para avaliar função da tireoide</li>
                      <li className="list-disc"><strong>Avaliação clínica:</strong> História familiar, exposição à radiação, etc.</li>
                    </ul>
                  </CardContent>
                </Card>

                <p>
                  O câncer de tireoide em crianças, embora raro, geralmente tem bom prognóstico quando diagnosticado e tratado adequadamente. O tratamento pode incluir cirurgia e, em alguns casos, terapia com iodo radioativo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnóstico */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Diagnóstico e Exames da Tireoide
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  O diagnóstico de distúrbios da tireoide em crianças é feito através de uma combinação de avaliação clínica, exames de sangue e, quando necessário, exames de imagem.
                </p>

                <Card className="border-none shadow-soft bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Stethoscope className="h-5 w-5 text-primary" />
                      Exames de Sangue
                    </h3>
                    <p className="mb-4">
                      Os principais exames utilizados incluem:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc"><strong>TSH (hormônio estimulante da tireoide):</strong> Principal exame de rastreamento. Valores elevados indicam hipotireoidismo; valores baixos indicam hipertireoidismo</li>
                      <li className="list-disc"><strong>T4 livre:</strong> Mede o hormônio ativo da tireoide</li>
                      <li className="list-disc"><strong>T3:</strong> Outro hormônio da tireoide, importante em casos de hipertireoidismo</li>
                      <li className="list-disc"><strong>Anticorpos antitireoidianos:</strong> Para diagnosticar doenças autoimunes como tireoidite de Hashimoto ou doença de Graves</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Ultrassonografia de Tireoide
                    </h3>
                    <p>
                      A ultrassonografia é um exame de imagem não invasivo que permite visualizar a tireoide, avaliar seu tamanho, estrutura e detectar nódulos. É especialmente útil na avaliação de nódulos e no acompanhamento de crianças com distúrbios da tireoide.
                    </p>
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
                Tratamento dos Distúrbios da Tireoide Infantil
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  O tratamento dos distúrbios da tireoide em crianças é individualizado e depende do tipo de distúrbio, da causa e das características específicas de cada caso. A Dra. Giovana Martins desenvolve um plano de tratamento personalizado para cada paciente.
                </p>

                <Card className="border-none shadow-soft bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Terapia de Reposição Hormonal
                    </h3>
                    <p className="mb-4">
                      Para crianças com hipotireoidismo, o tratamento consiste na reposição do hormônio da tireoide (levotiroxina). O tratamento:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc">É geralmente administrado uma vez ao dia, em jejum</li>
                      <li className="list-disc">Requer ajuste da dose conforme o crescimento da criança</li>
                      <li className="list-disc">Necessita monitoramento regular através de exames de sangue</li>
                      <li className="list-disc">É geralmente necessário por toda a vida no hipotireoidismo congênito</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Tratamento do Hipertireoidismo
                    </h3>
                    <p className="mb-4">
                      O tratamento do hipertireoidismo pode incluir:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc"><strong>Medicamentos antitireoidianos:</strong> Para reduzir a produção de hormônios</li>
                      <li className="list-disc"><strong>Iodo radioativo:</strong> Em alguns casos, para destruir parte da tireoide</li>
                      <li className="list-disc"><strong>Cirurgia:</strong> Remoção parcial ou total da tireoide quando indicado</li>
                    </ul>
                    <p className="mt-4">
                      A escolha do tratamento depende de vários fatores e é discutida detalhadamente com a família.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Cirurgia de Tireoide
                    </h3>
                    <p>
                      A cirurgia pode ser necessária em casos de nódulos suspeitos, câncer de tireoide, ou quando o tratamento medicamentoso não é eficaz. A cirurgia em crianças requer um cirurgião experiente e é realizada em centros especializados.
                    </p>
                  </CardContent>
                </Card>

                <div className="bg-primary/10 p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Acompanhamento Regular
                  </h3>
                  <p className="mb-4">
                    O acompanhamento regular com a Dra. Giovana Martins é essencial para:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="list-disc">Monitorar os níveis hormonais</li>
                    <li className="list-disc">Ajustar as doses dos medicamentos conforme o crescimento</li>
                    <li className="list-disc">Avaliar o desenvolvimento e crescimento da criança</li>
                    <li className="list-disc">Detectar e tratar qualquer complicação precocemente</li>
                    <li className="list-disc">Garantir que a criança está recebendo o tratamento adequado</li>
                  </ul>
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
                Entenda os Distúrbios da Tireoide
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Se você suspeita que seu filho ou filha pode ter um problema de tireoide, ou se já foi diagnosticado e precisa de acompanhamento especializado, a Dra. Giovana Martins está pronta para ajudar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-lg px-8 py-6"
                  asChild
                >
                  <CTALink href="/contato" label="Distúrbios Tireoide - CTA - Agende sua Consulta">
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
                  <PhoneLink href="tel:+5531995626630" label="Distúrbios Tireoide - CTA">
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
                  <WhatsAppLink href="https://wa.me/5531995626630" target="_blank" rel="noopener noreferrer" label="Distúrbios Tireoide - CTA">
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
                Perguntas Frequentes sobre Distúrbios da Tireoide
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
                  <Link href="/servicos/diabetes-infantil">Diabetes Infantil</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/servicos/baixa-estatura">Baixa Estatura</Link>
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

