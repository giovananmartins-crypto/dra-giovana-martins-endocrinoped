import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

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
        {/* Performance Links - Preconnect para GTM (server-side) */}
        {/* IMPORTANTE: Apenas GTM - ele gerencia GA4 e Google Ads internamente */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
