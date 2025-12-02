'use client';

import { useEffect } from 'react';

/**
 * Componente para injetar links de performance (preconnect, dns-prefetch) no head
 * 
 * IMPORTANTE - Estratégia de Rastreamento:
 * - Apenas preconnect para GTM (centralizador)
 * - GTM gerencia conexões com GA4 e Google Ads internamente
 * - NÃO adicionar preconnect direto para GA4 (evita duplicação)
 * 
 * Este componente injeta os links o mais cedo possível para garantir detecção pelo PageSpeed
 */
export function PerformanceLinks() {
  useEffect(() => {
    // Executar imediatamente, sem esperar
    const injectLinks = () => {
      // Verificar se os links já existem
      const existingPreconnect = document.querySelector('link[rel="preconnect"][href="https://www.googletagmanager.com"]');
      const existingDnsPrefetch = document.querySelector('link[rel="dns-prefetch"][href="https://www.googletagmanager.com"]');

      // Adicionar preconnect para GTM (apenas GTM - ele gerencia GA4/Google Ads)
      if (!existingPreconnect) {
        const preconnectLink = document.createElement('link');
        preconnectLink.rel = 'preconnect';
        preconnectLink.href = 'https://www.googletagmanager.com';
        preconnectLink.setAttribute('crossorigin', 'anonymous');
        // Inserir no início do head para prioridade
        const firstChild = document.head.firstChild;
        if (firstChild) {
          document.head.insertBefore(preconnectLink, firstChild);
        } else {
          document.head.appendChild(preconnectLink);
        }
      }

      // Adicionar dns-prefetch como fallback
      if (!existingDnsPrefetch) {
        const dnsPrefetchLink = document.createElement('link');
        dnsPrefetchLink.rel = 'dns-prefetch';
        dnsPrefetchLink.href = 'https://www.googletagmanager.com';
        // Inserir logo após preconnect
        const preconnect = document.querySelector('link[rel="preconnect"][href="https://www.googletagmanager.com"]');
        if (preconnect && preconnect.nextSibling) {
          document.head.insertBefore(dnsPrefetchLink, preconnect.nextSibling);
        } else {
          document.head.appendChild(dnsPrefetchLink);
        }
      }
    };

    // Tentar injetar imediatamente se o DOM já estiver pronto
    if (document.head) {
      injectLinks();
    } else {
      // Fallback: aguardar DOM estar pronto
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectLinks);
      } else {
        injectLinks();
      }
    }
  }, []);

  return null;
}

