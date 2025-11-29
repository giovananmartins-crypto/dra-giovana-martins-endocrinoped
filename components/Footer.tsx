"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { analytics } from "@/lib/analytics";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-4">
          <div>
            <div className="w-56 h-56 mb-4 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/icons/dra-giovana-martins-endocrinologista-pediatrica-bh-logo.png"
                alt="Dra. Giovana Martins - Endocrinologista Pediátrica"
                width={224}
                height={224}
                className="object-contain w-full h-full"
                suppressHydrationWarning
              />
            </div>
            <p className="text-card/80 leading-relaxed mb-4">
              Endocrinologia Pediátrica em Belo Horizonte. 
              Cuidado especializado com acolhimento e excelência.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-card/80">
              <li>
                <a href="#inicio" className="hover:text-card transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-card transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-card transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-card transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-card/80">
              <li>(31) 99562-6630</li>
              <li>contato@giovanaendocrinoped.com.br</li>
              <li>Belo Horizonte - MG</li>
              <li className="mt-[65px]">
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <Link
                      href="#"
                      className="w-12 h-12 hover:opacity-80 transition-opacity opacity-50 cursor-not-allowed flex items-center justify-center"
                      aria-label="Facebook"
                      onClick={(e) => e.preventDefault()}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/icons/dra-giovana-martins-endocrinologista-pediatrica-bh-facebook.png"
                        alt="Facebook"
                        width={48}
                        height={48}
                        className="object-contain"
                        suppressHydrationWarning
                      />
                    </Link>
                    <span className="text-xs text-card/60 mt-1">Em breve</span>
                  </div>
                  <Link
                    href="https://www.instagram.com/giovana.endocrinoped/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 hover:opacity-80 transition-opacity flex items-center justify-center"
                    aria-label="Instagram"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/icons/dra-giovana-martins-endocrinologista-pediatrica-bh-intagram.png"
                      alt="Instagram"
                      width={48}
                      height={48}
                      className="object-contain"
                      suppressHydrationWarning
                    />
                  </Link>
                  <Link
                    href="https://wa.me/5531995626630"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 hover:opacity-80 transition-opacity flex items-center justify-center"
                    aria-label="WhatsApp"
                    onClick={() => analytics.whatsappClick('Footer')}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/icons/dra-giovana-martins-endocrinologista-pediatrica-bh-whatsapp.png"
                      alt="WhatsApp"
                      width={48}
                      height={48}
                      className="object-contain"
                      suppressHydrationWarning
                    />
                  </Link>
                  <Link
                    href="https://www.doctoralia.com.br/giovana-neves-martins-4/endocrinologista-pediatrico/betim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 hover:opacity-80 transition-opacity flex items-center justify-center"
                    aria-label="Doctoralia"
                    onClick={() => analytics.doctoraliaClick('Footer')}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/icons/dra-giovana-martins-endocrinologista-pediatrica-bh-doctoralia.png"
                      alt="Doctoralia"
                      width={48}
                      height={48}
                      className="object-contain"
                      suppressHydrationWarning
                    />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-card/20 pt-4 text-center">
          <p className="text-card/80 flex items-center justify-center gap-2">
            Feito com <Heart className="h-4 w-4 text-primary fill-primary" /> para cuidar de quem você ama
          </p>
          <p className="text-card/60 text-sm mt-2">
            © 2024 Dra. Giovana Martins - Endocrinologista Pediátrica. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

