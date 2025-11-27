import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/Footer";
import { LocalBusinessSchema, PhysicianSchema, PersonSchema, FAQPageSchema, ReviewSchema } from "@/lib/schema-markup";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Dra. Giovana Martins | Endocrinologista Pediátrica BH | Agende Consulta",
  description: "Dra. Giovana Martins, endocrinologista pediátrica com formação de excelência em Belo Horizonte. Especialista em puberdade precoce, diabetes infantil e crescimento.",
  keywords: [
    "endocrinologista pediátrica",
    "endocrinologista infantil BH",
    "puberdade precoce",
    "diabetes infantil",
    "baixa estatura",
    "distúrbios tireoide",
    "endocrinologista Belo Horizonte",
    "crescimento infantil",
    "hormônios crianças"
  ],
  url: "/",
  image: "https://www.giovanaendocrinoped.com.br/images/dra-giovana/23-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
});

const faqs = [
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
    answer: "A Dra. Giovana Martins é especialista em puberdade precoce, diabetes infantil (tipo 1 e 2), baixa estatura, distúrbios da tireoide, obesidade infantil, problemas de crescimento, distúrbios da puberdade e outras condições endócrinas em crianças e adolescentes."
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

const testimonials = [
  {
    author: "Natália Nascimento",
    rating: 5,
    reviewBody: "A doutora é maravilhosa, atenciosa, carinhosa com as crianças. Explica tudo de forma que nós, que não entendemos do assunto, possamos entender tudo o que está acontecendo. Super educada. Simplesmente amei a consulta. Excelente profissional."
  },
  {
    author: "Anna Clara Lopes",
    rating: 5,
    reviewBody: "Excelente profissional! Sempre atenta ao que tem de melhor evidência, tratando com muita dedicação e carinho. Tenho plena confiança no seu trabalho!"
  },
  {
    author: "Halia Silva",
    rating: 5,
    reviewBody: "Amei o cuidado dela com meu filho. Super profissional e atenciosa."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <LocalBusinessSchema />
      <PersonSchema />
      <PhysicianSchema />
      <FAQPageSchema faqs={faqs} />
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
        <HeroSection />
        <PillarsSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <BlogPreviewSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
