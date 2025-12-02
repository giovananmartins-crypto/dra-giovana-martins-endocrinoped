"use client";

import { useEffect } from "react";
import { analytics } from "@/lib/analytics";

/**
 * HeroSection - Client Component
 * Adiciona interatividade aos elementos já renderizados pelo HeroSectionCritical
 * Não renderiza nada novo, apenas adiciona event handlers e ícones
 */
export const HeroSection = () => {
  useEffect(() => {
    // Adicionar ícone Heart ao badge
    const badge = document.querySelector('#inicio .inline-flex.items-center');
    if (badge && !badge.querySelector('svg')) {
      const heartIcon = document.createElement('div');
      heartIcon.innerHTML = '<svg class="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
      const firstChild = heartIcon.firstChild;
      if (firstChild && badge.firstChild) {
        badge.insertBefore(firstChild, badge.firstChild);
      }
    }

    // Adicionar ícone Calendar ao botão primário e event handlers
    const ctaPrimary = document.getElementById('hero-cta-primary');
    if (ctaPrimary && !ctaPrimary.querySelector('svg')) {
      const calendarIcon = document.createElement('div');
      calendarIcon.innerHTML = '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>';
      const firstChild = calendarIcon.firstChild;
      if (firstChild) {
        ctaPrimary.insertBefore(firstChild, ctaPrimary.firstChild);
      }
      ctaPrimary.classList.add('flex', 'items-center', 'justify-center');
      
      ctaPrimary.addEventListener('click', (e) => {
        e.preventDefault();
        const element = document.getElementById('contato');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        analytics.ctaClick('Hero - Agende Agora');
      });
    }

    // Adicionar event handler ao botão secundário
    const ctaSecondary = document.getElementById('hero-cta-secondary');
    if (ctaSecondary) {
      ctaSecondary.addEventListener('click', (e) => {
        e.preventDefault();
        const element = document.getElementById('sobre');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Adicionar animações após hidratação
    const heroContent = document.querySelector('#inicio .space-y-6');
    const heroImage = document.querySelector('#inicio .relative:has(.aspect-\\[4\\/5\\])');
    if (heroContent) heroContent.classList.add('animate-slide-in-left');
    if (heroImage) heroImage.classList.add('animate-slide-in-right');
  }, []);

  return null; // Não renderiza nada, apenas adiciona interatividade
};

