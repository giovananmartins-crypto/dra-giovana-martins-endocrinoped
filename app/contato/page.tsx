import { Header } from "@/components/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/Footer";
import { ContactPageSchema, LocalBusinessSchema, FAQPageSchema } from "@/lib/schema-markup";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import Image from "next/image";
import { WhatsAppLink } from "@/components/analytics/WhatsAppLink";
import { PhoneLink } from "@/components/analytics/PhoneLink";

export const metadata: Metadata = generateMetadata({
  title: "Contato | Dra. Giovana Martins | Endocrinologista Pediátrica BH",
  description: "Entre em contato com a Dra. Giovana Martins para agendar sua consulta de endocrinologia pediátrica em Belo Horizonte. Telefone, WhatsApp e endereço.",
  keywords: [
    "contato endocrinologista pediátrica",
    "agendar consulta BH",
    "endocrinologista infantil Belo Horizonte",
    "telefone endocrinologista",
    "WhatsApp endocrinologista"
  ],
  url: "/contato",
  image: "https://www.giovanaendocrinoped.com.br/images/dra-giovana/01-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
});

const contactFAQs = [
  {
    question: "Como posso agendar uma consulta?",
    answer: "Você pode agendar uma consulta através do telefone (31) 99562-6630, WhatsApp (31) 99562-6630, ou preenchendo o formulário de contato em nossa página. Nossa equipe entrará em contato para confirmar o melhor horário disponível."
  },
  {
    question: "Quais são os horários de atendimento?",
    answer: "O consultório funciona de Segunda a Sexta das 8h às 18h, e aos Sábados das 8h às 12h. Para emergências, entre em contato através do WhatsApp."
  },
  {
    question: "O consultório atende planos de saúde?",
    answer: "Sim, o consultório atende diversos planos de saúde. Entre em contato para verificar se seu convênio está na lista de aceitos e agendar sua consulta."
  },
  {
    question: "Preciso de encaminhamento médico para agendar?",
    answer: "Depende do seu plano de saúde. Alguns planos exigem encaminhamento do pediatra, enquanto outros permitem consulta direta com o especialista. Entre em contato para esclarecer sua situação específica."
  },
  {
    question: "Onde fica localizado o consultório?",
    answer: "O consultório está localizado na R. Turquesa, 347 - Prado, Belo Horizonte - MG, 30411-177. Há estacionamento disponível e fácil acesso por transporte público."
  },
  {
    question: "Posso agendar consulta para urgência?",
    answer: "Para casos urgentes, entre em contato imediatamente pelo telefone ou WhatsApp. Nossa equipe avaliará a situação e fará o possível para atender com a maior brevidade possível."
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      <ContactPageSchema />
      <LocalBusinessSchema />
      <FAQPageSchema faqs={contactFAQs} />
      <Header />
      <main>
        {/* Hero Section Centralizado */}
        <section className="pt-32 pb-24 bg-gradient-hero relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-info/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full text-sm mb-6 animate-fade-in">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-foreground font-medium">Agendamento Rápido e Fácil</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Entre em Contato
                <span className="block text-info-foreground mt-2">Agende sua Consulta</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Estamos prontos para atender você e sua família com cuidado especializado em endocrinologia pediátrica. 
                Escolha a forma de contato que preferir.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 pt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Button 
                  size="lg"
                  className="bg-foreground text-card hover:bg-foreground/90 gap-2 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <PhoneLink href="tel:+5531995626630" label="Contact Page Hero">
                    <Phone className="h-5 w-5" />
                    Ligar Agora
                  </PhoneLink>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-card text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <WhatsAppLink href="https://wa.me/5531995626630" target="_blank" rel="noopener noreferrer" label="Contact Page Hero">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </WhatsAppLink>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section Redesenhada */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Informações de Contato - Cards Modernos */}
              <div className="lg:col-span-1 space-y-6">
                <div className="text-center lg:text-left mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Informações de Contato
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Escolha a forma de contato que preferir
                  </p>
                  
                  {/* Foto da Dra. Giovana */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-card">
                      <Image
                        src="/images/dra-giovana/04-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
                        alt="Dra. Giovana Martins - Endocrinologista Pediátrica"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 160px, 192px"
                      />
                    </div>
                  </div>
                </div>

                {/* Card Telefone */}
                <Card className="border-none shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/10 to-primary/5 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Phone className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-2 text-lg">Telefone</h3>
                        <p className="text-muted-foreground mb-4 text-lg font-semibold">
                          (31) 99562-6630
                        </p>
                        <Button
                          variant="default"
                          size="sm"
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                          asChild
                        >
                          <PhoneLink href="tel:+5531995626630" label="Contact Page Card">
                            <Phone className="h-4 w-4 mr-2" />
                            Ligar Agora
                          </PhoneLink>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Card WhatsApp */}
                <Card className="border-none shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-green-50 to-green-100/50 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0 relative group-hover:scale-110 transition-transform">
                        <Image
                          src="/images/icons/dra-giovana-martins-endocrinologista-pediatrica-bh-whatsapp.png"
                          alt="WhatsApp"
                          fill
                          className="object-contain p-2"
                          sizes="56px"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-2 text-lg">WhatsApp</h3>
                        <p className="text-muted-foreground mb-4 text-lg font-semibold">
                          (31) 99562-6630
                        </p>
                        <Button
                          variant="default"
                          size="sm"
                          className="w-full bg-green-500 text-white hover:bg-green-600"
                          asChild
                        >
                          <WhatsAppLink href="https://wa.me/5531995626630" target="_blank" rel="noopener noreferrer" label="Contact Page Card">
                            <div className="relative w-4 h-4 mr-2">
                              <Image
                                src="/images/icons/dra-giovana-martins-endocrinologista-pediatrica-bh-whatsapp.png"
                                alt="WhatsApp"
                                fill
                                className="object-contain"
                                sizes="16px"
                              />
                            </div>
                            Abrir WhatsApp
                          </WhatsAppLink>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Card Email */}
                <Card className="border-none shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-info/10 to-info/5 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-info/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Mail className="h-7 w-7 text-info-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2 text-lg">Email</h3>
                        <a href="mailto:contato@giovanaendocrinoped.com.br" className="text-primary hover:underline text-lg font-semibold">
                          contato@giovanaendocrinoped.com.br
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Card Localização */}
                <Card className="border-none shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-accent/10 to-accent/5 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <MapPin className="h-7 w-7 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2 text-lg">Endereço</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          R. Turquesa, 347 - Prado
                          <br />
                          Belo Horizonte - MG, 30411-177
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Card Horário */}
                <Card className="border-none shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-secondary/10 to-secondary/5 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Clock className="h-7 w-7 text-secondary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2 text-lg">Horário</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Segunda a Sexta: 8h às 18h
                          <br />
                          Sábado: 8h às 12h
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Formulário e Mapa */}
              <div className="lg:col-span-2 space-y-8">
                {/* Formulário */}
                <Card className="border-none shadow-lg bg-card">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        Solicite seu Agendamento
                      </h2>
                      <p className="text-muted-foreground">
                        Preencha o formulário abaixo e nossa equipe entrará em contato em breve
                      </p>
                    </div>
                    <ContactSection />
                  </CardContent>
                </Card>

                {/* Google Maps */}
                <Card className="border-none shadow-lg bg-card overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-6 pb-4">
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        Localização do Consultório
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        R. Turquesa, 347 - Prado, Belo Horizonte - MG, 30411-177
                      </p>
                    </div>
                    <div className="w-full h-96">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.426123456789!2d-43.9500!3d-19.9300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTlCsDU1JzQ4LjAiUyA0M8KwNTcnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização do Consultório da Dra. Giovana Martins"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <FAQSection 
              faqs={contactFAQs}
              title="Perguntas Frequentes sobre Agendamento"
              description="Tire suas dúvidas sobre como agendar sua consulta"
            />
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

