'use client';

import { useEffect } from 'react';

/**
 * Componente para injetar links de performance (preconnect, dns-prefetch) no head
 * 
 * IMPORTANTE - Estratégia de Rastreamento:
 * - Apenas preconnect para GTM (centralizador)
 * - GTM gerencia conexões com GA4 e Google Ads internamente
 * - NÃO adicionar preconnect direto para GA4 (evita duplicação)
 */
export function PerformanceLinks() {
  useEffect(() => {
    // Verificar se os links já existem
    const existingPreconnect = document.querySelector('link[rel="preconnect"][href="https://www.googletagmanager.com"]');
    const existingDnsPrefetch = document.querySelector('link[rel="dns-prefetch"][href="https://www.googletagmanager.com"]');

    // Adicionar preconnect para GTM (apenas GTM - ele gerencia GA4/Google Ads)
    if (!existingPreconnect) {
      const preconnectLink = document.createElement('link');
      preconnectLink.rel = 'preconnect';
      preconnectLink.href = 'https://www.googletagmanager.com';
      preconnectLink.crossOrigin = 'anonymous';
      document.head.appendChild(preconnectLink);
    }

    // Adicionar dns-prefetch como fallback
    if (!existingDnsPrefetch) {
      const dnsPrefetchLink = document.createElement('link');
      dnsPrefetchLink.rel = 'dns-prefetch';
      dnsPrefetchLink.href = 'https://www.googletagmanager.com';
      document.head.appendChild(dnsPrefetchLink);
    }
  }, []);

  return null;
}

