import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MedicalConditionSchema, FAQPageSchema, ReviewSchema, WebPageSchema } from "@/lib/schema-markup";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Phone, MessageCircle, CheckCircle2, AlertCircle, Stethoscope, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = generateMetadata({
  title: "Baixa Estatura em Crianças | Diagnóstico e Tratamento | Dra. Giovana Martins BH",
  description: "Preocupado com a baixa estatura do seu filho? Entenda as causas e tratamentos. Agende uma consulta com a Dra. Giovana Martins em Belo Horizonte.",
  keywords: [
    "baixa estatura",
    "criança não cresce",
    "hormônio crescimento",
    "causas baixa estatura",
    "endocrinologista baixa estatura",
    "crescimento infantil",
    "terapia hormônio crescimento"
  ],
  url: "/servicos/baixa-estatura",
  image: "https://www.giovanaendocrinoped.com.br/images/servicos/baixa-estatura-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
});

const faqs = [
  {
    question: "O que é considerado baixa estatura em crianças?",
    answer: "Baixa estatura é definida quando a altura da criança está abaixo do percentil 3 para idade e sexo, ou quando a velocidade de crescimento está abaixo do esperado. A avaliação considera a altura dos pais (estatura alvo genética) e a curva de crescimento da criança."
  },
  {
    question: "Quando a baixa estatura é preocupante?",
    answer: "A baixa estatura é preocupante quando a criança está significativamente abaixo da estatura esperada para a idade, quando há desaceleração do crescimento, quando a estatura está muito abaixo da estatura alvo genética, ou quando há sinais de outras condições associadas."
  },
  {
    question: "Quais são as principais causas de baixa estatura?",
    answer: "As causas podem ser variadas: baixa estatura familiar (genética), deficiência de hormônio de crescimento, hipotireoidismo, desnutrição, doenças crônicas, síndromes genéticas, ou causas idiopáticas (sem causa identificada). A investigação médica é essencial para determinar a causa."
  },
  {
    question: "Como é investigada a baixa estatura?",
    answer: "A investigação inclui avaliação clínica detalhada, análise da curva de crescimento, radiografia para idade óssea, exames hormonais (hormônio de crescimento, tireoide, etc.), exames genéticos quando indicado, e avaliação nutricional. A Dra. Giovana Martins realiza uma investigação completa e individualizada."
  },
  {
    question: "Existe tratamento para baixa estatura?",
    answer: "Sim, o tratamento depende da causa. Para deficiência de hormônio de crescimento, pode ser indicada terapia com hormônio de crescimento. Para outras causas, o tratamento é direcionado à condição específica. O tratamento é individualizado e requer acompanhamento regular."
  },
  {
    question: "A terapia com hormônio de crescimento é segura?",
    answer: "Sim, quando indicada e acompanhada por um endocrinologista pediátrico experiente, a terapia com hormônio de crescimento é segura e eficaz. Os medicamentos utilizados têm décadas de uso clínico e são bem tolerados. O acompanhamento regular é essencial para monitorar a resposta e ajustar o tratamento."
  }
];

const testimonials = [
  {
    author: "Mãe de paciente",
    rating: 5,
    reviewBody: "A Dra. Giovana Martins fez toda a diferença no tratamento da baixa estatura do nosso filho. Com o acompanhamento dela, conseguimos identificar a causa e iniciar o tratamento adequado. Hoje ele está crescendo muito melhor!"
  },
  {
    author: "Pai de paciente",
    rating: 5,
    reviewBody: "Estávamos muito preocupados com o crescimento da nossa filha. A Dra. Giovana foi muito atenciosa, explicou tudo com clareza e desenvolveu um plano de tratamento personalizado. Estamos muito satisfeitos com os resultados."
  }
];

export default function BaixaEstaturaPage() {
  return (
    <div className="min-h-screen">
      <MedicalConditionSchema
        name="Baixa Estatura"
        description="Baixa estatura em crianças é definida quando a altura está abaixo do percentil 3 para idade e sexo, ou quando há desaceleração do crescimento, requerendo investigação médica especializada para determinar a causa e tratamento adequado."
        symptoms={[
          "Altura abaixo do percentil 3 para idade e sexo",
          "Desaceleração da velocidade de crescimento",
          "Estatura muito abaixo da estatura alvo genética",
          "Crescimento lento ou estagnado"
        ]}
        causes={[
          "Baixa estatura familiar (genética)",
          "Deficiência de hormônio de crescimento",
          "Hipotireoidismo",
          "Desnutrição ou deficiências nutricionais",
          "Doenças crônicas",
          "Síndromes genéticas",
          "Causas idiopáticas"
        ]}
        treatment="Tratamento individualizado conforme a causa, podendo incluir terapia com hormônio de crescimento, tratamento de condições subjacentes, orientação nutricional e acompanhamento regular do crescimento."
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
        name="Baixa Estatura em Crianças | Dra. Giovana Martins"
        description="Preocupado com a baixa estatura do seu filho? Entenda as causas e tratamentos. Agende uma consulta com a Dra. Giovana Martins em Belo Horizonte."
        url="/servicos/baixa-estatura"
        image="https://www.giovanaendocrinoped.com.br/images/servicos/baixa-estatura-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium">Especialidade em Endocrinologia Pediátrica</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Baixa Estatura em Crianças: Avaliação e Tratamento do Crescimento
                </h1>
                
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  A preocupação com o crescimento do filho é comum entre os pais. Com avaliação especializada e tratamento adequado quando necessário, é possível garantir o melhor potencial de crescimento da criança. A Dra. Giovana Martins oferece cuidado especializado em Belo Horizonte.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    size="lg"
                    className="bg-foreground text-card hover:bg-foreground/90 gap-2 text-lg px-8 py-6"
                    asChild
                  >
                    <Link href="/contato">
                      <Calendar className="h-5 w-5" />
                      Avalie o Crescimento do seu Filho
                    </Link>
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-foreground text-foreground hover:bg-foreground/10 text-lg px-8 py-6 gap-2"
                    asChild
                  >
                    <a href="https://wa.me/5531995626630" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      Fale via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl shadow-medium overflow-hidden relative">
                  <Image
                    src="/images/servicos/baixa-estatura-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
                    alt="Baixa Estatura - Avaliação e Tratamento com Dra. Giovana Martins, Endocrinologista Pediátrica em Belo Horizonte"
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
                  A baixa estatura em crianças é uma preocupação comum entre os pais. Nem toda criança baixa tem um problema médico, mas quando há desaceleração do crescimento ou a estatura está significativamente abaixo do esperado, é importante buscar avaliação especializada para identificar a causa e determinar se há necessidade de tratamento.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  A Dra. Giovana Martins, endocrinologista pediátrica com mais de 15 anos de experiência em Belo Horizonte, realiza uma avaliação completa do crescimento, investiga as possíveis causas e desenvolve um plano de tratamento personalizado quando necessário, sempre com foco no bem-estar da criança.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* O que é Baixa Estatura */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                O que é Baixa Estatura?
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  Baixa estatura é definida quando a altura da criança está abaixo do percentil 3 para sua idade e sexo, ou quando há desaceleração significativa da velocidade de crescimento. A avaliação considera não apenas a altura atual, mas também a curva de crescimento ao longo do tempo e a estatura alvo genética (baseada na altura dos pais).
                </p>

                <Card className="border-none shadow-soft bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      Curvas de Crescimento
                    </h3>
                    <p>
                      As curvas de crescimento são gráficos que mostram a distribuição normal de altura e peso para crianças de diferentes idades e sexos. Quando uma criança está abaixo do percentil 3, significa que apenas 3% das crianças da mesma idade e sexo são menores. A análise da curva de crescimento ao longo do tempo é fundamental para identificar problemas de crescimento.
                    </p>
                  </CardContent>
                </Card>

                <p>
                  É importante entender que nem toda criança baixa tem um problema médico. Muitas vezes, a baixa estatura é familiar (genética) e não requer tratamento. No entanto, quando há desaceleração do crescimento ou quando a estatura está muito abaixo da estatura alvo genética, é necessário investigar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quando é Preocupante */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Quando a Baixa Estatura é Preocupante?
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  A baixa estatura é preocupante quando há sinais de que o crescimento não está ocorrendo normalmente. Alguns indicadores importantes incluem:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-none shadow-soft bg-gradient-soft">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-primary" />
                        Sinais de Alerta
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Altura abaixo do percentil 3 para idade e sexo</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Desaceleração da velocidade de crescimento</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Estatura muito abaixo da estatura alvo genética</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Crescimento lento ou estagnado</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-soft bg-gradient-soft">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-secondary" />
                        Quando Buscar Ajuda
                      </h3>
                      <p className="mb-4">
                        É recomendável buscar avaliação médica quando:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>A criança está significativamente menor que os colegas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Há preocupação dos pais ou da criança</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Há outros sintomas associados</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>O crescimento desacelerou recentemente</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Causas */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Principais Causas da Baixa Estatura
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  A baixa estatura pode ter diversas causas, que são classificadas em diferentes categorias. A investigação médica é essencial para determinar a causa específica e orientar o tratamento adequado.
                </p>

                <Card className="border-none shadow-soft bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Baixa Estatura Familiar
                    </h3>
                    <p>
                      A causa mais comum de baixa estatura é a genética. Quando os pais são baixos, é esperado que os filhos também sejam. Nesses casos, a criança cresce normalmente, apenas em um ritmo mais lento, e geralmente não requer tratamento. A estatura alvo genética é calculada com base na altura dos pais.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Deficiência de Hormônio de Crescimento
                    </h3>
                    <p>
                      A deficiência de hormônio de crescimento (GH) pode ser congênita ou adquirida. Quando o corpo não produz quantidade suficiente de GH, o crescimento é afetado. O tratamento com hormônio de crescimento sintético pode ser muito eficaz nesses casos.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Outras Causas Médicas
                    </h3>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc"><strong>Hipotireoidismo:</strong> Deficiência de hormônios da tireoide pode afetar o crescimento</li>
                      <li className="list-disc"><strong>Desnutrição ou deficiências nutricionais:</strong> Falta de nutrientes essenciais pode comprometer o crescimento</li>
                      <li className="list-disc"><strong>Doenças crônicas:</strong> Condições como doença celíaca, doença renal ou cardíaca podem afetar o crescimento</li>
                      <li className="list-disc"><strong>Síndromes genéticas:</strong> Algumas síndromes estão associadas à baixa estatura</li>
                      <li className="list-disc"><strong>Causas idiopáticas:</strong> Em alguns casos, não é possível identificar uma causa específica</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Investigação */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Como Investigar a Baixa Estatura?
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  A investigação da baixa estatura é um processo cuidadoso e individualizado. A Dra. Giovana Martins realiza uma avaliação completa que inclui história clínica detalhada, exame físico, análise da curva de crescimento e exames complementares quando necessário.
                </p>

                <Card className="border-none shadow-soft bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Stethoscope className="h-5 w-5 text-primary" />
                      Avaliação Clínica
                    </h3>
                    <p className="mb-4">
                      A consulta começa com uma conversa detalhada sobre:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc">Histórico de crescimento da criança (altura em diferentes idades)</li>
                      <li className="list-disc">Altura dos pais (para calcular estatura alvo genética)</li>
                      <li className="list-disc">Histórico de gestação e nascimento</li>
                      <li className="list-disc">Alimentação e hábitos alimentares</li>
                      <li className="list-disc">Sono e atividade física</li>
                      <li className="list-disc">Sintomas associados ou outras condições médicas</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Exames Hormonais
                    </h3>
                    <p className="mb-4">
                      Para avaliar a função hormonal, podem ser solicitados:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc"><strong>Hormônio de crescimento (GH):</strong> Avaliação dos níveis basais e após estímulo</li>
                      <li className="list-disc"><strong>IGF-1 e IGFBP-3:</strong> Marcadores indiretos da produção de GH</li>
                      <li className="list-disc"><strong>Hormônios da tireoide:</strong> Para descartar hipotireoidismo</li>
                      <li className="list-disc"><strong>Outros hormônios:</strong> Conforme necessário para cada caso</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Idade Óssea
                    </h3>
                    <p>
                      A radiografia da mão e punho (idade óssea) é essencial para avaliar a maturação esquelética. A idade óssea pode estar atrasada, normal ou avançada em relação à idade cronológica, o que ajuda a entender o potencial de crescimento restante e orientar o tratamento.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Tratamento */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Opções de Tratamento para o Crescimento
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  O tratamento da baixa estatura depende da causa identificada. Nem toda criança com baixa estatura precisa de tratamento, mas quando indicado, o tratamento pode ser muito eficaz em melhorar o potencial de crescimento.
                </p>

                <Card className="border-none shadow-soft bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Terapia com Hormônio de Crescimento
                    </h3>
                    <p className="mb-4">
                      Para crianças com deficiência de hormônio de crescimento, a terapia com GH sintético pode ser muito eficaz. O tratamento envolve:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc">Aplicação diária de hormônio de crescimento (geralmente à noite)</li>
                      <li className="list-disc">Acompanhamento regular para monitorar a resposta ao tratamento</li>
                      <li className="list-disc">Ajustes na dosagem conforme necessário</li>
                      <li className="list-disc">Monitoramento de possíveis efeitos colaterais</li>
                    </ul>
                    <p className="mt-4">
                      O tratamento geralmente continua até que a criança atinja a altura final ou até que não haja mais resposta ao tratamento.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Tratamento de Condições Subjacentes
                    </h3>
                    <p>
                      Quando a baixa estatura é causada por outras condições (como hipotireoidismo, desnutrição ou doenças crônicas), o tratamento foca na condição específica. Uma vez tratada a causa, o crescimento geralmente melhora.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Acompanhamento Nutricional
                    </h3>
                    <p>
                      Uma alimentação adequada é fundamental para o crescimento. Quando há deficiências nutricionais, o acompanhamento com nutricionista pode ser essencial para garantir que a criança receba todos os nutrientes necessários para crescer adequadamente.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Entenda as Causas da Baixa Estatura
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Se você está preocupado com o crescimento do seu filho ou filha, não hesite em buscar avaliação especializada. O diagnóstico precoce é fundamental para garantir o melhor potencial de crescimento.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-lg px-8 py-6"
                  asChild
                >
                  <Link href="/contato">
                    <Calendar className="h-5 w-5" />
                    Agende sua Consulta
                  </Link>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/10 gap-2 text-lg px-8 py-6"
                  asChild
                >
                  <a href="tel:+5531995626630">
                    <Phone className="h-5 w-5" />
                    Ligar Agora
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/10 gap-2 text-lg px-8 py-6"
                  asChild
                >
                  <a href="https://wa.me/5531995626630" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
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
                Perguntas Frequentes sobre Baixa Estatura
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
                        "{testimonial.reviewBody}"
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

