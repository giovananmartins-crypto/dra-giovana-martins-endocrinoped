import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MedicalConditionSchema, FAQPageSchema, ReviewSchema, WebPageSchema } from "@/lib/schema-markup";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Phone, MessageCircle, CheckCircle2, AlertCircle, Stethoscope, Heart, Scale, Activity } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { WhatsAppLink } from "@/components/analytics/WhatsAppLink";
import { PhoneLink } from "@/components/analytics/PhoneLink";
import { CTALink } from "@/components/analytics/CTALink";

export const metadata: Metadata = generateMetadata({
  title: "Obesidade Infantil | Tratamento Multidisciplinar em BH | Dra. Giovana Martins",
  description: "Abordagem especializada para obesidade infantil: diagnóstico, tratamento multidisciplinar e prevenção. Conte com a Dra. Giovana Martins em Belo Horizonte.",
  keywords: [
    "obesidade infantil",
    "obesidade infantil",
    "sobrepeso crianças",
    "tratamento obesidade infantil",
    "endocrinologista obesidade infantil",
    "IMC infantil",
    "prevenção obesidade crianças",
    "hábitos saudáveis crianças"
  ],
  url: "/servicos/obesidade-pediatrica",
  image: "https://www.giovanaendocrinoped.com.br/images/servicos/obesidade-pediatrica-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
});

const faqs = [
  {
    question: "O que é considerado obesidade em crianças?",
    answer: "A obesidade em crianças é definida quando o Índice de Massa Corporal (IMC) está acima do percentil 95 para idade e sexo, conforme curvas de crescimento da Organização Mundial da Saúde (OMS) e da Sociedade Brasileira de Pediatria (SBP). Entre os percentis 85 e 95, considera-se sobrepeso. A avaliação deve ser feita por um médico especialista."
  },
  {
    question: "Quais são as principais causas da obesidade infantil?",
    answer: "A obesidade infantil é multifatorial, envolvendo fatores genéticos, ambientais e comportamentais. Principais causas incluem: alimentação inadequada (excesso de alimentos ultraprocessados, açúcares e gorduras), sedentarismo, fatores genéticos e familiares, condições médicas específicas (menos comum), e fatores socioeconômicos. O tratamento deve abordar todos esses aspectos."
  },
  {
    question: "Quais são os riscos da obesidade na infância?",
    answer: "A obesidade infantil pode levar a complicações imediatas e a longo prazo, incluindo: diabetes tipo 2, hipertensão arterial, dislipidemia (colesterol alto), problemas ortopédicos, apneia do sono, baixa autoestima e problemas psicológicos, e maior risco de obesidade na vida adulta. O tratamento precoce é fundamental para prevenir essas complicações."
  },
  {
    question: "Como é feito o diagnóstico de obesidade infantil?",
    answer: "O diagnóstico é feito através da avaliação do IMC (peso/altura²) e comparação com curvas de crescimento específicas para idade e sexo. O médico também avalia a composição corporal, histórico familiar, hábitos alimentares, nível de atividade física e pode solicitar exames complementares para identificar possíveis causas secundárias ou complicações associadas."
  },
  {
    question: "Qual é o tratamento para obesidade infantil?",
    answer: "O tratamento é multidisciplinar e inclui: mudanças na alimentação (orientação nutricional individualizada), aumento da atividade física, mudanças comportamentais e de estilo de vida, acompanhamento psicológico quando necessário, e em casos específicos, pode incluir medicamentos (sempre com prescrição médica). O tratamento deve ser gradual, sustentável e envolver toda a família."
  },
  {
    question: "A criança pode fazer dieta restritiva?",
    answer: "Não. Dietas muito restritivas não são recomendadas para crianças, pois podem comprometer o crescimento, desenvolvimento e causar deficiências nutricionais. O tratamento deve focar em mudanças graduais e sustentáveis nos hábitos alimentares, com orientação de nutricionista pediátrico, priorizando alimentos in natura e minimamente processados, sem proibições extremas."
  }
];

const testimonials = [
  {
    author: "Kátia",
    relation: "Mãe de paciente",
    rating: 5,
    reviewBody: "Médica atenciosa, cuidadosa e explicou bem todos os detalhes. Gostei muito da primeira consulta."
  },
  {
    author: "Elica",
    relation: "Mãe de paciente",
    rating: 5,
    reviewBody: "Excelente atendimento! Ficamos muito satisfeitos com a consulta."
  },
  {
    author: "Kettine",
    relation: "Mãe de paciente",
    rating: 5,
    reviewBody: "Doutora é muito atenciosa e explica tudo detalhadamente."
  }
];

export default function ObesidadePediatricaPage() {
  return (
    <div className="min-h-screen">
      <MedicalConditionSchema
        name="Obesidade Infantil"
        description="Obesidade infantil é uma condição caracterizada por excesso de gordura corporal em crianças e adolescentes, definida quando o IMC está acima do percentil 95 para idade e sexo, requerendo abordagem multidisciplinar para tratamento e prevenção de complicações."
        symptoms={[
          "IMC acima do percentil 95 para idade e sexo",
          "Acúmulo excessivo de gordura corporal",
          "Dificuldade para realizar atividades físicas",
          "Fadiga e cansaço durante atividades",
          "Problemas respiratórios durante o sono",
          "Baixa autoestima relacionada ao peso"
        ]}
        causes={[
          "Alimentação inadequada (excesso de alimentos ultraprocessados, açúcares e gorduras)",
          "Sedentarismo e baixo nível de atividade física",
          "Fatores genéticos e histórico familiar",
          "Fatores ambientais e socioeconômicos",
          "Condições médicas específicas (menos comum)",
          "Fatores comportamentais e psicológicos"
        ]}
        treatment="Tratamento multidisciplinar incluindo orientação nutricional individualizada, aumento da atividade física, mudanças comportamentais e de estilo de vida, acompanhamento psicológico quando necessário, e em casos específicos, medicamentos prescritos por médico especialista."
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
        name="Obesidade Infantil | Dra. Giovana Martins"
        description="Abordagem especializada para obesidade infantil: diagnóstico, tratamento multidisciplinar e prevenção. Conte com a Dra. Giovana Martins em Belo Horizonte."
        url="/servicos/obesidade-pediatrica"
        image="https://www.giovanaendocrinoped.com.br/images/servicos/obesidade-pediatrica-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm">
                  <Scale className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium">Especialidade em Endocrinologia Pediátrica</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Obesidade Infantil: Abordagem Multidisciplinar e Especializada
                </h1>
                
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  A obesidade infantil é uma condição complexa que requer abordagem especializada e multidisciplinar. Com diagnóstico adequado, tratamento personalizado e envolvimento da família, é possível promover mudanças sustentáveis e melhorar a saúde e qualidade de vida da criança.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    size="lg"
                    className="bg-foreground text-card hover:bg-foreground/90 gap-2 text-lg px-8 py-6"
                    asChild
                  >
                    <CTALink href="/contato" label="Obesidade Infantil - Hero - Avalie o Peso">
                      <Calendar className="h-5 w-5" />
                      Avalie o Peso do seu Filho
                    </CTALink>
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-foreground text-foreground hover:bg-foreground/10 text-lg px-8 py-6 gap-2"
                    asChild
                  >
                    <WhatsAppLink href="https://wa.me/5531995626630" target="_blank" rel="noopener noreferrer" label="Obesidade Infantil - Hero">
                      <MessageCircle className="h-5 w-5" />
                      Fale via WhatsApp
                    </WhatsAppLink>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl shadow-medium overflow-hidden relative">
                  <Image
                    src="/images/servicos/obesidade-pediatrica-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
                    alt="Obesidade Infantil - Tratamento Multidisciplinar com Dra. Giovana Martins, Endocrinologista Pediátrica em Belo Horizonte"
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
                  A obesidade infantil é uma condição de saúde pública crescente, caracterizada pelo excesso de gordura corporal em crianças e adolescentes. Segundo dados da Organização Mundial da Saúde (OMS) e da Sociedade Brasileira de Pediatria (SBP), a prevalência de obesidade infantil tem aumentado significativamente nas últimas décadas, tornando-se um importante desafio de saúde pública.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  A Dra. Giovana Martins, endocrinologista pediátrica com formação de excelência em Belo Horizonte, oferece uma abordagem multidisciplinar e especializada para o tratamento da obesidade infantil, sempre com foco em mudanças sustentáveis, respeito à individualidade da criança e envolvimento de toda a família no processo de cuidado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* O que é Obesidade Infantil */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                O que é Obesidade Infantil?
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  A obesidade infantil é definida quando o Índice de Massa Corporal (IMC) de uma criança ou adolescente está acima do percentil 95 para sua idade e sexo, conforme as curvas de crescimento estabelecidas pela Organização Mundial da Saúde (OMS) e recomendadas pela Sociedade Brasileira de Pediatria (SBP).
                </p>

                <Card className="border-none shadow-soft bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-primary" />
                      Classificação do Peso em Crianças
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Peso Normal</h4>
                        <p className="text-sm">IMC entre os percentis 5 e 85 para idade e sexo</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Sobrepeso</h4>
                        <p className="text-sm">IMC entre os percentis 85 e 95 para idade e sexo</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Obesidade</h4>
                        <p className="text-sm">IMC acima do percentil 95 para idade e sexo</p>
                      </div>
                      <div className="pt-2 border-t border-border">
                        <p className="text-xs text-muted-foreground">
                          <strong>Importante:</strong> A avaliação deve ser feita por um médico especialista, que considera não apenas o IMC, mas também a composição corporal, histórico familiar, crescimento e desenvolvimento da criança.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <p>
                  É importante destacar que a avaliação do peso em crianças é diferente da avaliação em adultos, pois considera o crescimento e desenvolvimento normal da infância e adolescência. Por isso, a avaliação deve sempre ser feita por um médico especialista em endocrinologia pediátrica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Causas e Fatores de Risco */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Causas e Fatores de Risco
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  A obesidade infantil é uma condição multifatorial, resultante da interação entre fatores genéticos, ambientais, comportamentais e socioeconômicos. Compreender essas causas é fundamental para um tratamento eficaz.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-none shadow-soft bg-gradient-soft">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Stethoscope className="h-5 w-5 text-primary" />
                        Fatores Alimentares
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Consumo excessivo de alimentos ultraprocessados</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Alta ingestão de açúcares e gorduras saturadas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Porções inadequadas para a idade</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Refeições irregulares e falta de rotina alimentar</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-soft bg-gradient-soft">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Activity className="h-5 w-5 text-secondary" />
                        Sedentarismo
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Baixo nível de atividade física</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Tempo excessivo em telas (TV, tablet, celular)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Falta de brincadeiras ativas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Ambiente que não estimula atividade física</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-soft bg-gradient-soft">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Heart className="h-5 w-5 text-info" />
                        Fatores Genéticos e Familiares
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-info mt-1">•</span>
                          <span>Histórico familiar de obesidade</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-info mt-1">•</span>
                          <span>Predisposição genética</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-info mt-1">•</span>
                          <span>Hábitos familiares (alimentação e atividade física)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-info mt-1">•</span>
                          <span>Fatores metabólicos herdados</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-soft bg-gradient-soft">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-accent" />
                        Fatores Ambientais e Sociais
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Condições socioeconômicas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Acesso limitado a alimentos saudáveis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Ambiente escolar e comunitário</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Fatores psicológicos e emocionais</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <p className="pt-4">
                  É importante destacar que, embora fatores genéticos possam predispor à obesidade, os fatores ambientais e comportamentais são modificáveis e têm grande impacto no desenvolvimento e tratamento da condição.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Complicações */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Complicações da Obesidade Infantil
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  A obesidade infantil pode levar a complicações imediatas e a longo prazo, afetando tanto a saúde física quanto o bem-estar emocional da criança. O tratamento precoce é fundamental para prevenir essas complicações.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-none shadow-soft bg-card">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-primary" />
                        Complicações Metabólicas
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Diabetes tipo 2</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Resistência à insulina</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Dislipidemia (colesterol e triglicerídeos elevados)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Síndrome metabólica</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-soft bg-card">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-secondary" />
                        Complicações Cardiovasculares
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Hipertensão arterial</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Doenças cardiovasculares precoces</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Alterações na função cardíaca</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-soft bg-card">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-info" />
                        Complicações Ortopédicas e Respiratórias
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-info mt-1">•</span>
                          <span>Problemas ortopédicos (joelhos, pés, coluna)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-info mt-1">•</span>
                          <span>Apneia do sono</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-info mt-1">•</span>
                          <span>Asma e problemas respiratórios</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-soft bg-card">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Heart className="h-5 w-5 text-accent" />
                        Complicações Psicológicas e Sociais
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Baixa autoestima</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Depressão e ansiedade</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Bullying e isolamento social</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Distúrbios alimentares</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <p className="pt-4">
                  Além disso, crianças com obesidade têm maior risco de manter a obesidade na vida adulta, aumentando o risco de complicações crônicas ao longo da vida. Por isso, o tratamento precoce e adequado é essencial.
                </p>
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
                  O diagnóstico de obesidade infantil é feito através de uma avaliação médica completa, que vai além do simples cálculo do IMC. O médico especialista considera diversos fatores para uma avaliação precisa.
                </p>

                <Card className="border-none shadow-soft bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Avaliação Inicial
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <strong>Cálculo do IMC:</strong> Peso (kg) dividido pela altura (m) ao quadrado, comparado com curvas de crescimento específicas para idade e sexo
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <strong>Avaliação do crescimento:</strong> Análise da curva de crescimento da criança ao longo do tempo
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <strong>Histórico familiar:</strong> Avaliação de histórico de obesidade, diabetes, hipertensão e outras condições na família
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <strong>Histórico da criança:</strong> Idade de início do ganho de peso, velocidade de ganho de peso, hábitos alimentares e de atividade física
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-gradient-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Stethoscope className="h-5 w-5 text-secondary" />
                      Exames Complementares
                    </h3>
                    <p className="text-sm mb-3">
                      Dependendo da avaliação inicial, o médico pode solicitar exames para identificar possíveis causas secundárias de obesidade ou complicações associadas:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Exames de sangue (glicemia, hemoglobina glicada, perfil lipídico, função tireoidiana)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Avaliação da pressão arterial</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Exames hormonais quando indicado</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Avaliação de apneia do sono quando necessário</span>
                      </li>
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
                Tratamento Multidisciplinar
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  O tratamento da obesidade infantil é multidisciplinar e deve ser individualizado, considerando a idade da criança, grau de obesidade, presença de complicações e contexto familiar. O objetivo é promover mudanças sustentáveis que melhorem a saúde e qualidade de vida.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-none shadow-soft bg-card">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        Orientação Nutricional
                      </h3>
                      <p className="text-sm mb-3">
                        Acompanhamento com nutricionista pediátrico para:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Planejamento alimentar individualizado</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Educação nutricional para a família</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Priorização de alimentos in natura e minimamente processados</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Mudanças graduais e sustentáveis</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-soft bg-card">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Activity className="h-5 w-5 text-secondary" />
                        Atividade Física
                      </h3>
                      <p className="text-sm mb-3">
                        Aumento gradual e adequado da atividade física:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Atividades físicas adequadas para a idade</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Redução do tempo em telas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Brincadeiras ativas e esportes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Envolvimento da família nas atividades</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-soft bg-card">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Heart className="h-5 w-5 text-info" />
                        Mudanças Comportamentais
                      </h3>
                      <p className="text-sm mb-3">
                        Abordagem comportamental para promover mudanças sustentáveis:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-info mt-1">•</span>
                          <span>Estabelecimento de rotinas alimentares</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-info mt-1">•</span>
                          <span>Estratégias para mudança de hábitos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-info mt-1">•</span>
                          <span>Acompanhamento psicológico quando necessário</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-info mt-1">•</span>
                          <span>Envolvimento de toda a família</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-soft bg-card">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Stethoscope className="h-5 w-5 text-accent" />
                        Tratamento Médico
                      </h3>
                      <p className="text-sm mb-3">
                        Acompanhamento médico especializado:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Monitoramento regular do peso e crescimento</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Avaliação e tratamento de complicações</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Medicamentos quando indicado (sempre com prescrição médica)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Coordenação da equipe multidisciplinar</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-none shadow-soft bg-card mt-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-primary" />
                      Importante sobre o Tratamento
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Não são recomendadas dietas muito restritivas</strong> para crianças, pois podem comprometer o crescimento e desenvolvimento</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>O tratamento deve ser <strong>gradual e sustentável</strong>, focando em mudanças de estilo de vida</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>O <strong>envolvimento de toda a família</strong> é fundamental para o sucesso do tratamento</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>O objetivo não é apenas a perda de peso, mas a <strong>melhora da saúde e qualidade de vida</strong></span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Prevenção */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Prevenção da Obesidade Infantil
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  A prevenção da obesidade infantil começa desde a gestação e deve ser uma preocupação constante ao longo da infância e adolescência. Estabelecer hábitos saudáveis desde cedo é fundamental.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-none shadow-soft bg-gradient-soft">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        Alimentação Saudável
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Amamentação exclusiva até 6 meses e complementada até 2 anos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Introdução alimentar adequada e variada</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Priorizar alimentos in natura e minimamente processados</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Evitar alimentos ultraprocessados, açúcares e gorduras em excesso</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Estabelecer rotinas de refeições em família</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-soft bg-gradient-soft">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        Atividade Física Regular
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>Estimular brincadeiras ativas desde a primeira infância</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>Limitar tempo em telas conforme recomendações por idade</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>Praticar esportes e atividades físicas adequadas para a idade</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>Envolver toda a família em atividades físicas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>Criar ambiente que estimule movimento e brincadeiras</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-none shadow-soft bg-card mt-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary" />
                      Outras Medidas Preventivas
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Monitoramento regular:</strong> Acompanhamento do crescimento e peso com pediatra ou endocrinologista pediátrico</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Ambiente familiar saudável:</strong> Criar um ambiente que promova escolhas saudáveis para toda a família</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Educação:</strong> Educar crianças e adolescentes sobre alimentação saudável e importância da atividade física</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Intervenção precoce:</strong> Se houver ganho de peso excessivo, buscar avaliação médica especializada o quanto antes</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Perguntas Frequentes sobre Obesidade Infantil
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Tire suas dúvidas sobre obesidade infantil, diagnóstico e tratamento
              </p>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border-none shadow-soft bg-card">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        {faq.question}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed pl-7">
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Depoimentos de Famílias Atendidas
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Conheça a experiência de famílias que buscaram tratamento para obesidade infantil
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="border-none shadow-soft bg-gradient-soft">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Heart key={i} className="h-5 w-5 text-primary fill-primary" />
                        ))}
                      </div>
                      <p className="text-foreground/80 leading-relaxed mb-4">
                        "{testimonial.reviewBody}"
                      </p>
                      <p className="text-sm text-muted-foreground font-medium">
                        — {testimonial.author}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Preocupado com o Peso do seu Filho?
                </h2>
                <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                  A avaliação precoce é fundamental. Agende uma consulta com a Dra. Giovana Martins para uma avaliação especializada e tratamento adequado.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-foreground text-card hover:bg-foreground/90 gap-2 text-lg px-8 py-6"
                  asChild
                >
                  <CTALink href="/contato" label="Obesidade Infantil - CTA - Agendar Consulta">
                    <Calendar className="h-5 w-5" />
                    Agendar Consulta
                  </CTALink>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-foreground text-foreground hover:bg-foreground/10 text-lg px-8 py-6 gap-2"
                  asChild
                >
                  <PhoneLink href="tel:+5531995626630" label="Obesidade Infantil - CTA">
                    <Phone className="h-5 w-5" />
                    Ligar Agora
                  </PhoneLink>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-foreground text-foreground hover:bg-foreground/10 text-lg px-8 py-6 gap-2"
                  asChild
                >
                  <WhatsAppLink href="https://wa.me/5531995626630" target="_blank" rel="noopener noreferrer" label="Obesidade Infantil - CTA">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </WhatsAppLink>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Links Relacionados */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Serviços Relacionados
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/" className="text-primary hover:underline text-sm font-medium">
                  Homepage
                </Link>
                <Link href="/servicos/puberdade-precoce" className="text-primary hover:underline text-sm font-medium">
                  Puberdade Precoce
                </Link>
                <Link href="/servicos/diabetes-infantil" className="text-primary hover:underline text-sm font-medium">
                  Diabetes Infantil
                </Link>
                <Link href="/servicos/baixa-estatura" className="text-primary hover:underline text-sm font-medium">
                  Baixa Estatura
                </Link>
                <Link href="/servicos/disturbios-tireoide" className="text-primary hover:underline text-sm font-medium">
                  Distúrbios da Tireoide
                </Link>
                <Link href="/blog" className="text-primary hover:underline text-sm font-medium">
                  Blog
                </Link>
                <Link href="/contato" className="text-primary hover:underline text-sm font-medium">
                  Contato
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

