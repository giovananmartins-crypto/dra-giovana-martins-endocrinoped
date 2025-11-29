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
  
  // Otimizações de imagem para Core Web Vitals
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.giovanaendocrinoped.com.br',
      },
    ],
  },
  
  // Otimizações de compilação
  // swcMinify é padrão no Next.js 13+ e não precisa ser especificado
  reactStrictMode: true,
};

export default nextConfig;
