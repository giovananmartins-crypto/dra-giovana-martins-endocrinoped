"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { analytics } from "@/lib/analytics";

const navItems = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Blog", href: "/blog" },
  { name: "Recursos", href: "/recursos" },
  { name: "Contato", href: "/contato" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4 -py-[2.5px]">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-0">
            <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 -my-3 md:-my-4">
              <Image
                src="/images/icons/dra-giovana-martins-endocrinologista-pediatrica-bh-elemento.png"
                alt="Dra. Giovana Martins - Endocrinologista Pediátrica"
                width={112}
                height={112}
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden md:block relative h-32 mt-4 -mb-6 -ml-[34px]">
              <Image
                src="/images/icons/dra-giovana-martins-endocrinologista-pediatrica-bh-nome.png"
                alt="Dra. Giovana Martins - Endocrinologista Pediátrica"
                width={1000}
                height={128}
                className="object-contain object-left h-full w-auto"
                priority
              />
            </div>
            <div className="md:hidden relative h-6">
              <Image
                src="/images/icons/dra-giovana-martins-endocrinologista-pediatrica-bh-nome.png"
                alt="Dra. Giovana Martins"
                width={200}
                height={24}
                className="object-contain object-left h-full w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base transition-colors font-medium ${
                  pathname === item.href 
                    ? "text-primary" 
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button 
              className="hidden sm:flex bg-foreground text-card hover:bg-foreground/90 gap-2"
              asChild
            >
              <Link 
                href="/contato"
                onClick={() => analytics.ctaClick('Header - Agendar Consulta')}
              >
                <Calendar className="h-4 w-4" />
                Agendar Consulta
              </Link>
            </Button>
            
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block w-full text-left py-2 transition-colors font-medium ${
                  pathname === item.href 
                    ? "text-primary" 
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              className="w-full bg-foreground text-card hover:bg-foreground/90 gap-2"
              asChild
            >
              <Link 
                href="/contato" 
                onClick={() => {
                  analytics.ctaClick('Header Mobile - Agendar Consulta');
                  setIsMenuOpen(false);
                }}
              >
                <Calendar className="h-4 w-4" />
                Agendar Consulta
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

