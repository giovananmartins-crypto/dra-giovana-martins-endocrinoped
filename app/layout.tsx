import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GTM } from "@/components/gtm";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dra. Giovana Martins - Endocrinologia Pediátrica",
  description: "Cuidado especializado em endocrinologia pediátrica em Belo Horizonte. Transformamos a jornada de saúde endócrina de crianças e adolescentes.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GTM />
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
