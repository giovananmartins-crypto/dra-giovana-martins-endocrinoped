import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MedicalConditionSchema, FAQPageSchema, ReviewSchema, WebPageSchema } from "@/lib/schema-markup";
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

export const metadata: Metadata = generateMetadata({
  title: "Puberdade Precoce | Diagnóstico e Tratamento em BH | Dra. Giovana Martins",
  description: "Entenda a puberdade precoce, seus sinais, causas e opções de tratamento. Agende uma consulta com a Dra. Giovana Martins, especialista em Belo Horizonte.",
  keywords: [
    "puberdade precoce",
    "sinais puberdade precoce",
    "tratamento puberdade precoce",
    "causas puberdade precoce",
    "endocrinologista puberdade precoce",
    "puberdade precoce meninas",
    "puberdade precoce meninos",
    "bloqueio puberdade precoce"
  ],
  url: "/servicos/puberdade-precoce",
  image: "https://www.giovanaendocrinoped.com.br/images/servicos/puberdade-precoce-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
});

const faqs = [
  {
    question: "O que é considerado puberdade precoce?",
    answer: "A puberdade precoce é definida como o início do desenvolvimento de características sexuais secundárias antes dos 8 anos em meninas e antes dos 9 anos em meninos. É uma condição que requer avaliação médica especializada para determinar a causa e o tratamento adequado."
  },
  {
    question: "Quais são os primeiros sinais de puberdade precoce?",
    answer: "Em meninas, os primeiros sinais incluem desenvolvimento das mamas, aparecimento de pelos pubianos e axilares, e início da menstruação antes dos 8 anos. Em meninos, os sinais incluem aumento do volume testicular, aparecimento de pelos pubianos e axilares, e mudanças na voz antes dos 9 anos."
  },
  {
    question: "A puberdade precoce pode afetar o crescimento?",
    answer: "Sim, a puberdade precoce pode afetar o crescimento final da criança. Quando a puberdade começa muito cedo, os ossos amadurecem rapidamente e as placas de crescimento podem fechar antes do tempo, resultando em estatura final menor do que a esperada geneticamente."
  },
  {
    question: "Como é feito o tratamento da puberdade precoce?",
    answer: "O tratamento geralmente envolve o uso de medicamentos que bloqueiam a ação dos hormônios que estimulam a puberdade, permitindo que a criança tenha um desenvolvimento mais adequado à sua idade cronológica. O tratamento é individualizado e requer acompanhamento regular com o endocrinologista pediátrico."
  },
  {
    question: "O tratamento da puberdade precoce é seguro?",
    answer: "Sim, o tratamento da puberdade precoce com bloqueadores hormonais é considerado seguro e eficaz quando indicado e acompanhado por um especialista. Os medicamentos utilizados têm décadas de uso clínico e são bem tolerados pela maioria das crianças."
  },
  {
    question: "Quanto tempo dura o tratamento?",
    answer: "A duração do tratamento varia conforme cada caso, mas geralmente é mantido até que a criança atinja uma idade mais adequada para o início da puberdade (geralmente por volta dos 10-11 anos em meninas e 11-12 anos em meninos). O acompanhamento é feito regularmente para avaliar a necessidade de continuidade."
  }
];

const testimonials = [
  {
    author: "Raquel",
    relation: "Mãe de paciente",
    rating: 5,
    reviewBody: "Médica atenciosa, atendimento tranquilo. Consultório muito agradável, recepção muito boa."
  },
  {
    author: "Aline",
    relation: "Mãe de paciente",
    rating: 5,
    reviewBody: "Atendimento bom e eficaz. Atenciosa e examina com calma."
  },
  {
    author: "Tais",
    relation: "Mãe de paciente",
    rating: 5,
    reviewBody: "Ela é muito boa, muito atenciosa, pergunta tudo, examina a menina direitinho. Gostei muito."
  }
];

export default function PuberdadePrecocePage() {
  return (
    <div className="min-h-screen">
      <MedicalConditionSchema
        name="Puberdade Precoce"
        description="Puberdade precoce é o início do desenvolvimento de características sexuais secundárias antes dos 8 anos em meninas e antes dos 9 anos em meninos, requerendo diagnóstico e tratamento especializado."
        symptoms={[
          "Desenvolvimento das mamas em meninas antes dos 8 anos",
          "Aparecimento de pelos pubianos e axilares precocemente",
          "Início da menstruação antes dos 8 anos",
          "Aumento do volume testicular em meninos antes dos 9 anos",
          "Mudanças na voz em meninos precocemente",
          "Aceleração do crescimento"
        ]}
        causes={[
          "Causas centrais (relacionadas ao sistema nervoso central)",
          "Causas periféricas (tumores ou problemas nas glândulas)",
          "Fatores genéticos",
          "Exposição a hormônios externos"
        ]}
        treatment="Tratamento com bloqueadores hormonais para interromper o desenvolvimento puberal precoce, permitindo que a criança se desenvolva em idade mais adequada."
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
        name="Puberdade Precoce | Dra. Giovana Martins"
        description="Entenda a puberdade precoce, seus sinais, causas e opções de tratamento. Agende uma consulta com a Dra. Giovana Martins, especialista em Belo Horizonte."
        url="/servicos/puberdade-precoce"
        image="https://www.giovanaendocrinoped.com.br/images/servicos/puberdade-precoce-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
      />
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
                  Puberdade Precoce: Diagnóstico e Tratamento Especializado
                </h1>
                
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  A puberdade precoce é uma condição que requer atenção especializada. Com diagnóstico preciso e tratamento adequado, é possível garantir o desenvolvimento saudável da criança. A Dra. Giovana Martins oferece cuidado especializado em Belo Horizonte.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    size="lg"
                    className="bg-foreground text-card hover:bg-foreground/90 gap-2 text-lg px-8 py-6"
                    asChild
                  >
                    <CTALink href="/contato" label="Puberdade Precoce - Hero - Agende uma Avaliação">
                      <Calendar className="h-5 w-5" />
                      Agende uma Avaliação
                    </CTALink>
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-foreground text-foreground hover:bg-foreground/10 text-lg px-8 py-6 gap-2"
                    asChild
                  >
                    <WhatsAppLink href="https://wa.me/5531995626630" target="_blank" rel="noopener noreferrer" label="Puberdade Precoce - Hero">
                      <MessageCircle className="h-5 w-5" />
                      Fale via WhatsApp
                    </WhatsAppLink>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl shadow-medium overflow-hidden relative">
                  <Image
                    src="/images/servicos/puberdade-precoce-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
                    alt="Puberdade Precoce - Diagnóstico e Tratamento com Dra. Giovana Martins, Endocrinologista Pediátrica em Belo Horizonte"
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
                  A puberdade precoce é uma condição endócrina que ocorre quando o desenvolvimento de características sexuais secundárias começa antes da idade considerada normal. Em meninas, isso acontece antes dos 8 anos, e em meninos, antes dos 9 anos. O diagnóstico e tratamento precoces são fundamentais para garantir o desenvolvimento adequado da criança e prevenir complicações futuras.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  A Dra. Giovana Martins, endocrinologista pediátrica com formação de excelência em Belo Horizonte, oferece avaliação especializada e tratamento personalizado para crianças com puberdade precoce, sempre com foco no bem-estar integral da criança e da família.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* O que é Puberdade Precoce */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                O que é Puberdade Precoce?
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  A puberdade precoce é caracterizada pelo início prematuro do desenvolvimento puberal, que normalmente ocorre entre os 8 e 13 anos em meninas e entre os 9 e 14 anos em meninos. Quando esse processo começa antes dessas idades, é necessário investigar as causas e avaliar a necessidade de tratamento.
                </p>
                
                <div className="bg-card p-6 rounded-2xl shadow-soft border-l-4 border-primary">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    Idade de Início
                  </h3>
                  <p>
                    Em meninas, a puberdade precoce é definida quando os primeiros sinais aparecem antes dos 8 anos. Em meninos, o critério é antes dos 9 anos. É importante destacar que cada criança é única, e a avaliação médica especializada é essencial para determinar se o desenvolvimento está realmente precoce.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-2xl shadow-soft border-l-4 border-secondary">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-secondary" />
                    Desenvolvimento de Características Sexuais
                  </h3>
                  <p>
                    O desenvolvimento puberal envolve uma série de mudanças físicas e hormonais. Em meninas, inclui o desenvolvimento das mamas (telarca), aparecimento de pelos pubianos e axilares (pubarca e adrenarca), e início da menstruação (menarca). Em meninos, inclui aumento do volume testicular, aparecimento de pelos corporais, mudanças na voz e crescimento do pênis.
                  </p>
                </div>

                <p>
                  A puberdade precoce pode ser classificada em dois tipos principais: puberdade precoce central (também chamada de verdadeira) e puberdade precoce periférica (ou pseudopuberdade precoce). A diferenciação entre esses tipos é crucial para determinar o tratamento adequado.
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
                Sinais e Sintomas da Puberdade Precoce
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-none shadow-soft bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Em Meninas
                    </h3>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Desenvolvimento das mamas antes dos 8 anos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Aparecimento de pelos pubianos e axilares</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Início da menstruação (menarca) precoce</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Aceleração do crescimento</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Mudanças no odor corporal</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-info" />
                      Em Meninos
                    </h3>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex items-start gap-2">
                        <span className="text-info mt-1">•</span>
                        <span>Aumento do volume testicular antes dos 9 anos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-info mt-1">•</span>
                        <span>Aparecimento de pelos pubianos e axilares</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-info mt-1">•</span>
                        <span>Crescimento do pênis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-info mt-1">•</span>
                        <span>Mudanças na voz (engrossamento)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-info mt-1">•</span>
                        <span>Aceleração do crescimento</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-primary/10 p-6 rounded-2xl">
                <p className="text-foreground leading-relaxed">
                  <strong className="text-foreground">Importante:</strong> Nem todos os sinais precisam estar presentes simultaneamente. Se você notar qualquer um desses sinais em seu filho ou filha antes da idade esperada, é recomendável buscar avaliação médica especializada. O diagnóstico precoce é fundamental para o sucesso do tratamento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Causas e Fatores de Risco */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Causas e Fatores de Risco
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  A puberdade precoce pode ter diversas causas, que são classificadas em dois grupos principais: puberdade precoce central (verdadeira) e puberdade precoce periférica (pseudopuberdade precoce).
                </p>

                <Card className="border-none shadow-soft bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Puberdade Precoce Central (Verdadeira)
                    </h3>
                    <p className="mb-4">
                      Neste tipo, o eixo hipotálamo-hipófise-gonadal é ativado precocemente, resultando na produção normal de hormônios, apenas em idade inadequada. As causas podem incluir:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc">Idiopática (sem causa identificada) - mais comum em meninas</li>
                      <li className="list-disc">Tumores ou lesões do sistema nervoso central</li>
                      <li className="list-disc">Hidrocefalia ou outras malformações cerebrais</li>
                      <li className="list-disc">Histórico de radioterapia ou quimioterapia</li>
                      <li className="list-disc">Traumatismo craniano</li>
                      <li className="list-disc">Infecções do sistema nervoso central</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Puberdade Precoce Periférica (Pseudopuberdade Precoce)
                    </h3>
                    <p className="mb-4">
                      Neste tipo, há produção excessiva de hormônios sexuais sem a ativação do eixo central. As causas podem incluir:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc">Tumores das glândulas suprarrenais ou gônadas</li>
                      <li className="list-disc">Síndrome de McCune-Albright</li>
                      <li className="list-disc">Exposição a hormônios externos (medicamentos, cremes, suplementos)</li>
                      <li className="list-disc">Hiperplasia adrenal congênita</li>
                      <li className="list-disc">Tumores produtores de hormônios</li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="bg-accent/10 p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Fatores de Risco
                  </h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong>Sexo:</strong> Mais comum em meninas do que em meninos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong>Histórico familiar:</strong> Pode haver predisposição genética</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong>Obesidade:</strong> Crianças com sobrepeso têm maior risco</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong>Exposição ambiental:</strong> Contato com produtos químicos que imitam hormônios</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnóstico */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Como é Feito o Diagnóstico?
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  O diagnóstico da puberdade precoce requer uma avaliação médica completa e especializada. A Dra. Giovana Martins realiza uma investigação detalhada que inclui história clínica, exame físico e exames complementares.
                </p>

                <Card className="border-none shadow-soft bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Stethoscope className="h-5 w-5 text-primary" />
                      Avaliação Clínica
                    </h3>
                    <p className="mb-4">
                      A consulta começa com uma conversa detalhada com os pais sobre o desenvolvimento da criança, incluindo:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc">Histórico de crescimento e desenvolvimento</li>
                      <li className="list-disc">Idade de início dos sinais puberais</li>
                      <li className="list-disc">Histórico familiar de puberdade precoce</li>
                      <li className="list-disc">Exposição a medicamentos ou produtos hormonais</li>
                      <li className="list-disc">Sintomas associados</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Exames Laboratoriais
                    </h3>
                    <p className="mb-4">
                      Os exames de sangue são fundamentais para avaliar os níveis hormonais:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc"><strong>Hormônio luteinizante (LH) e hormônio folículo-estimulante (FSH):</strong> Para avaliar a ativação do eixo central</li>
                      <li className="list-disc"><strong>Estradiol (em meninas) ou testosterona (em meninos):</strong> Para medir os níveis de hormônios sexuais</li>
                      <li className="list-disc"><strong>Teste de estimulação com GnRH:</strong> Para diferenciar puberdade precoce central da periférica</li>
                      <li className="list-disc"><strong>Hormônios da tireoide:</strong> Para descartar outras condições endócrinas</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Avaliação Óssea
                    </h3>
                    <p>
                      A radiografia da mão e punho (idade óssea) é essencial para avaliar a maturação esquelética. Em crianças com puberdade precoce, a idade óssea geralmente está avançada em relação à idade cronológica. Isso ajuda a prever o potencial de crescimento e a necessidade de tratamento.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Exames de Imagem
                    </h3>
                    <p className="mb-4">
                      Dependendo do caso, podem ser solicitados:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc"><strong>Ressonância magnética do crânio:</strong> Para avaliar o sistema nervoso central, especialmente em meninos ou quando há suspeita de causa central</li>
                      <li className="list-disc"><strong>Ultrassonografia pélvica (em meninas):</strong> Para avaliar o útero e ovários</li>
                      <li className="list-disc"><strong>Ultrassonografia testicular (em meninos):</strong> Para avaliar os testículos</li>
                    </ul>
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
                Opções de Tratamento para Puberdade Precoce
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  O tratamento da puberdade precoce é individualizado e baseado na causa, idade da criança, velocidade de progressão e potencial de crescimento. A Dra. Giovana Martins desenvolve um plano de tratamento personalizado para cada paciente.
                </p>

                <Card className="border-none shadow-soft bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Bloqueio da Puberdade
                    </h3>
                    <p className="mb-4">
                      O tratamento mais comum para puberdade precoce central é o uso de análogos de GnRH (hormônio liberador de gonadotrofinas), que bloqueiam a produção de hormônios que estimulam a puberdade. Esses medicamentos são administrados por injeção mensal ou trimestral e são muito eficazes em interromper o desenvolvimento puberal precoce.
                    </p>
                    <p>
                      Os benefícios do tratamento incluem:
                    </p>
                    <ul className="space-y-2 ml-4 mt-2">
                      <li className="list-disc">Interrupção do desenvolvimento puberal precoce</li>
                      <li className="list-disc">Melhora do potencial de crescimento final</li>
                      <li className="list-disc">Prevenção de problemas psicossociais relacionados à puberdade precoce</li>
                      <li className="list-disc">Permite que a criança se desenvolva em idade mais adequada</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Tratamento da Causa Base
                    </h3>
                    <p>
                      Quando a puberdade precoce é causada por tumores ou outras condições específicas, o tratamento foca na causa subjacente. Isso pode envolver cirurgia, radioterapia ou outros tratamentos específicos, sempre com acompanhamento multidisciplinar.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Acompanhamento Psicológico
                    </h3>
                    <p>
                      O desenvolvimento puberal precoce pode causar impacto emocional e social na criança. Por isso, o acompanhamento psicológico é uma parte importante do tratamento, ajudando a criança e a família a lidar com as mudanças e desafios relacionados à condição.
                    </p>
                  </CardContent>
                </Card>

                <div className="bg-primary/10 p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Prognóstico e Acompanhamento
                  </h3>
                  <p className="mb-4">
                    Com diagnóstico precoce e tratamento adequado, a maioria das crianças com puberdade precoce tem um excelente prognóstico. O acompanhamento regular com a Dra. Giovana Martins é essencial para:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="list-disc">Monitorar a eficácia do tratamento</li>
                    <li className="list-disc">Avaliar o crescimento e desenvolvimento</li>
                    <li className="list-disc">Ajustar a dosagem dos medicamentos quando necessário</li>
                    <li className="list-disc">Determinar o momento adequado para interromper o tratamento</li>
                    <li className="list-disc">Acompanhar o desenvolvimento puberal normal após o tratamento</li>
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
                Agende uma Avaliação para Puberdade Precoce
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Se você notou sinais de puberdade precoce em seu filho ou filha, não hesite em buscar ajuda especializada. O diagnóstico e tratamento precoces são fundamentais para o desenvolvimento saudável da criança.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-lg px-8 py-6"
                  asChild
                >
                  <CTALink href="/contato" label="Puberdade Precoce - CTA - Agende sua Consulta">
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
                  <PhoneLink href="tel:+5531995626630" label="Puberdade Precoce - CTA">
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
                  <WhatsAppLink href="https://wa.me/5531995626630" target="_blank" rel="noopener noreferrer" label="Puberdade Precoce - CTA">
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
                Perguntas Frequentes sobre Puberdade Precoce
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

