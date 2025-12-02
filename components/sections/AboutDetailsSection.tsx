"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Briefcase, Heart, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export const AboutDetailsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      src: "/images/dra-giovana/02-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg",
      alt: "Dra. Giovana Martins - Endocrinologista Pediátrica com formação de excelência em Belo Horizonte"
    },
    {
      src: "/images/dra-giovana/03-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg",
      alt: "Dra. Giovana Martins - Especialista em Endocrinologia Pediátrica"
    },
    {
      src: "/images/dra-giovana/04-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg",
      alt: "Dra. Giovana Martins - Endocrinologista Pediátrica dedicada ao cuidado de crianças e adolescentes"
    }
  ];

  // Auto-rotate carousel every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Foto da Dra. Giovana - Carrossel */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl shadow-medium overflow-hidden min-h-[400px]">
              {images.length > 0 && images.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentImageIndex ? "opacity-100 z-0" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-3xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent z-10 pointer-events-none" />
              
              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-3 w-3 rounded-full transition-all min-w-[12px] min-h-[12px] ${
                      index === currentImageIndex
                        ? "bg-card w-8"
                        : "bg-card/50 hover:bg-card/75"
                    }`}
                    aria-label={`Ir para imagem ${index + 1} do carrossel`}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Formação Acadêmica */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-primary" />
              Formação Acadêmica e Especialização
            </h2>
            <div className="space-y-4">
              <Card className="border-none shadow-soft bg-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Graduação em Medicina
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Graduação em Medicina pela UNIFENAS - Alfenas. Durante 
                    a graduação, desenvolveu interesse especial pela pediatria e endocrinologia.
                  </p>
                  <div className="mt-4">
                    <Link href="/servicos" className="text-sm text-link hover:text-link-hover hover:underline font-semibold inline-flex items-center gap-1">
                      Conheça nossos serviços especializados →
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-soft bg-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Residência em Pediatria
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Residência em Pediatria pelo Hospital Infantil João Paulo II, onde 
                    adquiriu experiência sólida no cuidado de crianças e adolescentes, 
                    desenvolvendo habilidades essenciais para o atendimento pediátrico.
                  </p>
                  <div className="mt-4">
                    <Link href="/blog" className="text-sm text-link hover:text-link-hover hover:underline font-semibold inline-flex items-center gap-1">
                      Leia artigos sobre saúde infantil →
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-soft bg-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Residência em Endocrinologia Pediátrica
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Residência em Endocrinologia Pediátrica pelo Hospital das Clínicas da UFMG, 
                    com foco em distúrbios do crescimento, puberdade, diabetes infantil e distúrbios da tireoide.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link href="/servicos/baixa-estatura" className="text-sm text-link hover:text-link-hover hover:underline font-semibold inline-flex items-center gap-1">
                      Baixa Estatura →
                    </Link>
                    <Link href="/servicos/puberdade-precoce" className="text-sm text-link hover:text-link-hover hover:underline font-semibold inline-flex items-center gap-1">
                      Puberdade Precoce →
                    </Link>
                    <Link href="/servicos/diabetes-infantil" className="text-sm text-link hover:text-link-hover hover:underline font-semibold inline-flex items-center gap-1">
                      Diabetes Infantil →
                    </Link>
                    <Link href="/servicos/disturbios-tireoide" className="text-sm text-link hover:text-link-hover hover:underline font-semibold inline-flex items-center gap-1">
                      Distúrbios da Tireoide →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Certificações */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Award className="h-8 w-8 text-secondary" />
              Certificações
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-none shadow-soft bg-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    CRM-MG 79896
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Conselho Regional de Medicina de Minas Gerais
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-soft bg-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    RQE 66519
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Registro de Qualificação de Especialista
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-soft bg-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    CRM-BA 49737
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Conselho Regional de Medicina da Bahia
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Experiência Profissional */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Briefcase className="h-8 w-8 text-info" />
              Experiência Profissional e Atuação
            </h2>
            <Card className="border-none shadow-soft bg-card">
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Com uma formação de excelência em endocrinologia pediátrica, a Dra. Giovana 
                  Martins dedica-se exclusivamente ao atendimento de crianças e adolescentes em 
                  Belo Horizonte, região metropolitana e Guanambi-BA (cidade natal).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sua prática clínica abrange o diagnóstico e tratamento de diversas condições 
                  endócrinas, incluindo <Link href="/servicos/baixa-estatura" className="text-link hover:text-link-hover hover:underline font-semibold">distúrbios do crescimento</Link>, 
                  <Link href="/servicos/puberdade-precoce" className="text-link hover:text-link-hover hover:underline font-semibold"> puberdade precoce e atrasada</Link>, 
                  <Link href="/servicos/diabetes-infantil" className="text-link hover:text-link-hover hover:underline font-semibold"> diabetes tipo 1 e 2</Link>, 
                  <Link href="/servicos/disturbios-tireoide" className="text-link hover:text-link-hover hover:underline font-semibold"> distúrbios da tireoide</Link>, 
                  obesidade infantil e outras condições relacionadas ao sistema endócrino.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ao longo de sua carreira, já atendeu mais de 500 famílias, sempre priorizando 
                  um atendimento humanizado, baseado em evidências científicas e focado no 
                  bem-estar integral da criança e sua família.
                </p>
                <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-3">
                  <Link href="/servicos" className="text-sm text-link hover:text-link-hover hover:underline font-semibold inline-flex items-center gap-1">
                    Ver todos os serviços →
                  </Link>
                  <Link href="/contato" className="text-sm text-link hover:text-link-hover hover:underline font-semibold inline-flex items-center gap-1">
                    Agendar consulta →
                  </Link>
                  <Link href="/blog" className="text-sm text-link hover:text-link-hover hover:underline font-semibold inline-flex items-center gap-1">
                    Ler artigos sobre saúde →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filosofia de Atendimento */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Heart className="h-8 w-8 text-accent" fill="currentColor" />
              Filosofia de Atendimento e Compromisso
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-none shadow-soft bg-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Atendimento Humanizado
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Acredita que cada criança é única e merece um cuidado personalizado, 
                    respeitando sua individualidade e o contexto familiar. O atendimento 
                    é sempre acolhedor, transparente e focado no bem-estar integral.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-soft bg-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Medicina Baseada em Evidências
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Todos os diagnósticos e tratamentos são baseados nas melhores evidências 
                    científicas disponíveis, sempre atualizando-se com as mais recentes 
                    pesquisas e diretrizes médicas.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-soft bg-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Educação e Empoderamento
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Acredita que pais bem informados são fundamentais para o sucesso do 
                    tratamento. Por isso, dedica tempo para explicar cada condição, 
                    tratamento e evolução de forma clara e compreensível.
                  </p>
                  <div className="mt-4">
                    <Link href="/blog" className="text-sm text-link hover:text-link-hover hover:underline font-semibold inline-flex items-center gap-1">
                      Acesse nosso blog educativo →
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-soft bg-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Acompanhamento Contínuo
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    O cuidado não termina na consulta. A Dra. Giovana Martins mantém um 
                    acompanhamento próximo, garantindo que cada criança receba o suporte 
                    necessário em todas as etapas do tratamento.
                  </p>
                  <div className="mt-4">
                    <Link href="/contato" className="text-sm text-link hover:text-link-hover hover:underline font-semibold inline-flex items-center gap-1">
                      Entre em contato para agendar →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Publicações e Participações em Eventos */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-accent" />
              Publicações e Participações em Eventos
            </h2>
            <Card className="border-none shadow-soft bg-card">
              <CardContent className="p-6 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Participação regular em congressos e outros eventos científicos, mantendo-se atualizada com as mais recentes pesquisas e diretrizes em endocrinologia pediátrica.
                </p>
                
                <div className="space-y-4 mt-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Participação em Congressos</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Participação no 15º Congresso Brasileiro Pediátrico de Endocrinologia e Metabologia (COBRAPEM) realizado em Belo Horizonte - MG em 2023</li>
                      <li>• Participação no 9º Encontro Brasileiro de Endocrinologia Pediátrica (EBEP) realizado em Brasília - DF em 2024</li>
                      <li>• Participação no 16º Congresso Brasileiro Pediátrico de Endocrinologia e Metabologia (COBRAPEM) realizado em Recife - PE em 2025</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Trabalhos Científicos Apresentados</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Autora:</strong> DEFICIÊNCIA ENZIMÁTICA RARA DIAGNOSTICADA NO CONTEXTO DA TRIAGEM NEONATAL PARA A DEFICIÊNCIA DA 21-HIDROXILASE NO ESTADO DE MINAS GERAIS: RELATO DE CASO - apresentado sobre forma de pôster eletrônico no 15º Congresso Brasileiro Pediátrico de Endocrinologia e Metabologia realizado em Belo Horizonte - MG em 2023</li>
                      <li>• <strong>Autora:</strong> CASO RARO DE PSEUDO-HIPOALDOSTERONISMO TIPO 1 - apresentado sobre forma de pôster eletrônico no 15º Congresso Brasileiro Pediátrico de Endocrinologia e Metabologia realizado em Belo Horizonte - MG em 2023</li>
                      <li>• <strong>Coautora:</strong> RELATO DE CASO: DIAGNÓSTICO NA INFÂNCIA DA SÍNDROME 45,X, COM FENÓTIPO MASCULINO - apresentado sobre forma de pôster eletrônico no 15º Congresso Brasileiro Pediátrico de Endocrinologia e Metabologia realizado em Belo Horizonte - MG em 2023</li>
                      <li>• <strong>Coautora:</strong> BAIXA ESTATURA POR PICNODISOSTOSE - RELATO DE CASO - apresentado sobre forma de pôster eletrônico no 15º Congresso Brasileiro Pediátrico de Endocrinologia e Metabologia realizado em Belo Horizonte - MG em 2023</li>
                      <li>• <strong>Coautora:</strong> OS DESAFIOS NA CONDUÇÃO CLÍNICA DO HIPERINSULINISMO CONGÊNITO - RELATO DE CASO - apresentado sobre forma de pôster eletrônico no 15º Congresso Brasileiro Pediátrico de Endocrinologia e Metabologia realizado em Belo Horizonte - MG em 2023</li>
                      <li>• <strong>Coautora:</strong> IMPACTO DE AÇÕES EDUCATIVAS NO TRATAMENTO DE CRIANÇAS E ADOLESCENTES COM DIABETES TIPO 1 - apresentado sobre forma de pôster eletrônico no 15º Congresso Brasileiro Pediátrico de Endocrinologia e Metabologia realizado em Belo Horizonte - MG em 2023</li>
                      <li>• <strong>Coautora:</strong> HIPOPLASIA ADRENAL CONGÊNITA LIGADA AO X (X-LINKED AHC): RELATO DE CASO E DIAGNÓSTICO DIFERENCIAL COM HIPERPLASIA ADRENAL CONGÊNITA (HAC) - apresentado sobre forma de pôster eletrônico no 15º Congresso Brasileiro Pediátrico de Endocrinologia e Metabologia realizado em Belo Horizonte - MG em 2023</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/contato">
                Agende sua Consulta com a Dra. Giovana Martins
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

