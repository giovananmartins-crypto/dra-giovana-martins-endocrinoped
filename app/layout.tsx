import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PerformanceLinks } from "@/components/PerformanceLinks";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Otimiza carregamento de fontes
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap', // Otimiza carregamento de fontes
});

export const metadata: Metadata = {
  title: "Dra. Giovana Martins - Endocrinologia Pediátrica",
  description: "Cuidado especializado em endocrinologia pediátrica em Belo Horizonte. Transformamos a jornada de saúde endócrina de crianças e adolescentes.",
  keywords: [
    "endocrinologista pediátrica",
    "endocrinologista infantil BH",
    "endocrinologista Belo Horizonte",
    "puberdade precoce",
    "diabetes infantil",
    "baixa estatura",
    "crescimento infantil"
  ],
  authors: [{ name: "Dra. Giovana Martins", url: "https://www.giovanaendocrinoped.com.br/sobre" }],
  creator: "Dra. Giovana Martins",
  publisher: "Dra. Giovana Martins - Endocrinologista Pediátrica",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg",
        type: "image/jpeg",
      },
    ],
    apple: [
      {
        url: "/favicon-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg",
        type: "image/jpeg",
      },
    ],
  },
  // Google Search Console Verification
  // Adicione NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION no .env.local
  // Formato: ABC123XYZ789 (apenas o conteúdo, sem as tags)
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

if (!GTM_ID) {
  console.warn('NEXT_PUBLIC_GTM_ID não está configurado no .env.local');
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Performance Links - Preconnect para GTM (múltiplas estratégias para garantir detecção) */}
        {/* IMPORTANTE: Apenas GTM - ele gerencia GA4 e Google Ads internamente */}
        {/* Estratégia 1: Links estáticos no head ANTES de qualquer script (mais confiável para PageSpeed) */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Preload da imagem LCP (hero) - melhora LCP significativamente */}
        <link
          rel="preload"
          href="/images/dra-giovana/23-dra-giovana-martins-endocrinologista-pediatrica-bh.jpeg"
          as="image"
          fetchPriority="high"
        />
        {/* CSS crítico inline para hero - reduz bloqueio de renderização */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* CSS crítico para hero - renderiza imediatamente */
            #inicio { padding-top: 11rem; padding-bottom: 5rem; }
            .bg-gradient-hero { background-image: linear-gradient(135deg, hsl(357 70% 90%) 0%, hsl(204 63% 91%) 100%); }
            .container { margin-left: auto; margin-right: auto; max-width: 1400px; }
            .px-4 { padding-left: 1rem; padding-right: 1rem; }
            .grid { display: grid; }
            .md\\:grid-cols-2 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
            @media (min-width: 768px) { .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
            .gap-12 { gap: 3rem; }
            .items-center { align-items: center; }
            .space-y-6 > * + * { margin-top: 1.5rem; }
            .text-center { text-align: center; }
            .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
            .md\\:text-5xl { font-size: 3rem; line-height: 1; }
            @media (min-width: 768px) { .md\\:text-5xl { font-size: 3rem; line-height: 1; } }
            .lg\\:text-6xl { font-size: 3.75rem; line-height: 1; }
            @media (min-width: 1024px) { .lg\\:text-6xl { font-size: 3.75rem; line-height: 1; } }
            .font-bold { font-weight: 700; }
            .text-foreground { color: hsl(0 0% 15%); }
            .leading-tight { line-height: 1.25; }
          `
        }} />
        {/* Estratégia 2: Script inline síncrono que executa imediatamente */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(){var e=document.createElement("link");e.rel="preconnect",e.href="https://www.googletagmanager.com",e.crossOrigin="anonymous";var t=document.createElement("link");t.rel="dns-prefetch",t.href="https://www.googletagmanager.com";var n=document.getElementsByTagName("head")[0];n.insertBefore(e,n.firstChild),n.insertBefore(t,n.firstChild)}();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Performance Links - Fallback client-side para garantir detecção */}
        <PerformanceLinks />
        {/* Google Tag Manager - Script no Head (via Next.js Script) */}
        {/* Usando lazyOnload para reduzir impacto no LCP - GTM não é crítico para primeira renderização */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
