import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Headers de segurança adicionais (complementam o middleware)
  async headers() {
    return [
      {
        // Aplicar em todas as rotas
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
        ],
      },
    ];
  },
  
  // Configurações de produção
  poweredByHeader: false, // Remove header X-Powered-By para segurança
  compress: true, // Habilita compressão Gzip
};

export default nextConfig;
