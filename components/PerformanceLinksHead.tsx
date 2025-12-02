/**
 * Componente para injetar links de performance no head (server-side)
 * 
 * IMPORTANTE - Estratégia de Rastreamento:
 * - Apenas preconnect para GTM (centralizador)
 * - GTM gerencia conexões com GA4 e Google Ads internamente
 * - NÃO adicionar preconnect direto para GA4 (evita duplicação)
 */
export function PerformanceLinksHead() {
  return (
    <>
      {/* Performance Links - Preconnect para GTM (server-side) */}
      <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    </>
  );
}

