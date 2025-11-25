"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "Quando devo levar meu filho ao endocrinologista pediátrico?",
    answer: "Você deve procurar um endocrinologista pediátrico quando notar sinais como crescimento abaixo do esperado, puberdade precoce ou atrasada, problemas de peso (obesidade ou baixo peso), sintomas de diabetes, distúrbios da tireoide, ou qualquer preocupação relacionada ao desenvolvimento hormonal da criança."
  },
  {
    question: "Qual a diferença entre pediatra e endocrinologista pediátrico?",
    answer: "O pediatra é o médico geral que acompanha o desenvolvimento geral da criança. O endocrinologista pediátrico é especializado em distúrbios hormonais, crescimento, puberdade, diabetes, tireoide e outras condições relacionadas ao sistema endócrino em crianças e adolescentes."
  },
  {
    question: "Como funciona a primeira consulta?",
    answer: "Na primeira consulta, a Dra. Giovana Martins fará uma avaliação completa do histórico médico da criança, exame físico detalhado, análise de exames anteriores (se houver) e conversará com os pais sobre preocupações e sintomas. Com base nisso, será definido um plano de investigação e tratamento personalizado."
  },
  {
    question: "Quais condições a Dra. Giovana Martins trata?",
    answer: "A Dra. Giovana Martins é especialista em puberdade precoce, diabetes infantil (tipo 1 e 2), baixa estatura, distúrbios da tireoide, obesidade pediátrica, problemas de crescimento, distúrbios da puberdade e outras condições endócrinas em crianças e adolescentes."
  },
  {
    question: "O consultório atende convênios?",
    answer: "Sim, o consultório atende diversos planos de saúde. Entre em contato para verificar se seu convênio está na lista de aceitos e agendar sua consulta."
  },
  {
    question: "Como agendar uma consulta?",
    answer: "Você pode agendar uma consulta através do telefone (31) 99562-6630, WhatsApp (31) 99562-6630, ou preenchendo o formulário de contato em nossa página. Nossa equipe entrará em contato para confirmar o melhor horário disponível."
  }
];

interface FAQSectionProps {
  faqs?: FAQItem[];
  title?: string;
  description?: string;
}

export const FAQSection = ({ 
  faqs = defaultFaqs,
  title = "Perguntas Frequentes",
  description = "Tire suas dúvidas sobre endocrinologia pediátrica e nossos serviços"
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border-none shadow-soft hover:shadow-medium transition-all duration-300 bg-card"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground text-lg pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-6 pb-5 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                  {index === 0 && (
                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/servicos">
                          Ver Nossos Serviços
                        </Link>
                      </Button>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/contato">
                          Agendar Primeira Consulta
                        </Link>
                      </Button>
                    </div>
                  )}
                  {index === 3 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/servicos/puberdade-precoce">
                          Puberdade Precoce
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/servicos/diabetes-infantil">
                          Diabetes Infantil
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/servicos/baixa-estatura">
                          Baixa Estatura
                        </Link>
                      </Button>
                    </div>
                  )}
                  {index === 4 && (
                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/contato">
                          Verificar Convênios
                        </Link>
                      </Button>
                    </div>
                  )}
                  {index === 5 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/contato">
                          Formulário de Contato
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://wa.me/5531995626630" target="_blank" rel="noopener noreferrer">
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/contato">
              Tenho Outras Dúvidas - Entre em Contato
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

