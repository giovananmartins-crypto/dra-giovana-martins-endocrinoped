import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ResourcesList } from "@/components/resources/ResourcesList";
import { FileText, Sparkles, CheckCircle2, TrendingUp } from "lucide-react";
import { generateMetadata } from "@/lib/metadata";
import { LocalBusinessSchema, FAQPageSchema } from "@/lib/schema-markup";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Recursos Educativos | Materiais Gratuitos | Dra. Giovana Martins",
  description: "Acesse materiais educativos gratuitos sobre endocrinologia pediátrica: guias, cartilhas, vídeos e planilhas para ajudar no cuidado com a saúde endócrina de crianças e adolescentes.",
  keywords: [
    "recursos endocrinologia pediátrica",
    "materiais educativos saúde infantil",
    "guia crescimento infantil",
    "cartilha diabetes infantil",
    "vídeos educativos puberdade",
    "planilha crescimento criança"
  ],
  url: "/recursos",
  image: "https://www.giovanaendocrinoped.com.br/images/dra-giovana/01-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
});

const resources = [
  {
    iconType: "FileText",
    title: "Guia de Crescimento Infantil",
    description: "Material completo sobre marcos do desenvolvimento e crescimento esperado em cada fase da infância e adolescência.",
    type: "PDF",
    category: "Crescimento"
  },
  {
    iconType: "FileText",
    title: "Cartilha: Diabetes Tipo 1",
    description: "Orientações práticas e atualizadas para pais de crianças com diabetes tipo 1, incluindo manejo diário e emergências.",
    type: "PDF",
    category: "Diabetes"
  },
  {
    iconType: "Video",
    title: "Como Aplicar Insulina",
    description: "Vídeo educativo demonstrando a técnica correta de aplicação de insulina, com dicas de segurança e cuidados.",
    type: "Vídeo",
    category: "Diabetes"
  },
  {
    iconType: "BookOpen",
    title: "Diário de Crescimento",
    description: "Planilha prática para acompanhar o crescimento e desenvolvimento do seu filho, com gráficos e percentis.",
    type: "Excel",
    category: "Crescimento"
  },
  {
    iconType: "FileText",
    title: "Alimentação Saudável para Crianças",
    description: "Guia prático com receitas saudáveis e dicas nutricionais para estabelecer hábitos alimentares adequados.",
    type: "PDF",
    category: "Nutrição"
  },
  {
    iconType: "Video",
    title: "Entendendo a Puberdade",
    description: "Série de vídeos explicativos sobre o desenvolvimento puberal normal e suas variações, para pais e adolescentes.",
    type: "Vídeo",
    category: "Puberdade"
  },
  {
    iconType: "FileText",
    title: "Checklist: Sinais de Alerta",
    description: "Lista de verificação com os principais sinais que indicam necessidade de avaliação endocrinológica.",
    type: "PDF",
    category: "Geral"
  },
  {
    iconType: "BookOpen",
    title: "Preparando a Primeira Consulta",
    description: "Guia completo sobre o que esperar na primeira consulta e como se preparar para aproveitar ao máximo o atendimento.",
    type: "PDF",
    category: "Geral"
  }
];

const resourcesFAQs = [
  {
    question: "Os recursos são realmente gratuitos?",
    answer: "Sim, todos os recursos educativos disponíveis nesta página são completamente gratuitos. Nosso objetivo é ajudar pais e responsáveis a terem acesso a informações confiáveis sobre saúde endócrina infantil."
  },
  {
    question: "Como faço para baixar os recursos?",
    answer: "Basta clicar no botão 'Baixar Recurso' em cada material. Os PDFs e planilhas serão baixados diretamente para seu dispositivo. Os vídeos podem ser assistidos online ou baixados, dependendo do formato."
  },
  {
    question: "Posso compartilhar os recursos com outras pessoas?",
    answer: "Sim, você pode compartilhar os recursos com familiares, amigos ou outras pessoas que possam se beneficiar. No entanto, pedimos que mantenham os créditos à Dra. Giovana Martins e não alterem o conteúdo."
  },
  {
    question: "Os recursos substituem uma consulta médica?",
    answer: "Não. Os recursos educativos são materiais informativos que complementam o atendimento médico, mas não substituem uma consulta com um endocrinologista pediátrico. Sempre consulte um profissional para avaliação individualizada."
  },
  {
    question: "Com que frequência novos recursos são adicionados?",
    answer: "Novos recursos são adicionados regularmente, conforme desenvolvemos novos materiais educativos. Recomendamos verificar esta página periodicamente ou seguir nossas redes sociais para ser notificado sobre novos conteúdos."
  },
  {
    question: "Posso solicitar um recurso específico?",
    answer: "Sim! Se você tem uma necessidade específica de material educativo que não está disponível aqui, entre em contato conosco. Ficaremos felizes em considerar sua sugestão para futuros recursos."
  }
];

export default function Resources() {
  // Agrupar recursos por categoria
  const resourcesByCategory = resources.reduce((acc, resource) => {
    if (!acc[resource.category]) {
      acc[resource.category] = [];
    }
    acc[resource.category].push(resource);
    return acc;
  }, {} as Record<string, typeof resources>);

  const categories = Object.keys(resourcesByCategory);

  return (
    <div className="min-h-screen">
      <LocalBusinessSchema />
      <FAQPageSchema faqs={resourcesFAQs} />
      <Header />
      <main>
        {/* Hero Section Redesenhado - Centralizado */}
        <section className="pt-32 pb-24 bg-gradient-hero relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-info/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full text-sm mb-6 animate-fade-in">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-foreground font-medium">Materiais Educativos Gratuitos</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Recursos Educativos
                <span className="block text-info-foreground mt-2">para Pais e Responsáveis</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Acesse materiais educativos gratuitos desenvolvidos pela Dra. Giovana Martins para ajudar no cuidado com a saúde endócrina de crianças e adolescentes.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 pt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-sm rounded-2xl shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-foreground">{resources.length}</div>
                    <div className="text-sm text-muted-foreground">Recursos Disponíveis</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-sm rounded-2xl shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-info/20 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-info-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-foreground">{categories.length}</div>
                    <div className="text-sm text-muted-foreground">Categorias</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-sm rounded-2xl shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-foreground">100%</div>
                    <div className="text-sm text-muted-foreground">Gratuito</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lista de Recursos com Filtros */}
        <ResourcesList resources={resources} />

        {/* FAQ Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <FAQSection 
              faqs={resourcesFAQs}
              title="Perguntas Frequentes sobre os Recursos"
              description="Tire suas dúvidas sobre nossos materiais educativos"
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

