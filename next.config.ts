import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Headers de segurança e performance (complementam o middleware)
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
      {
        // Headers de cache para assets estáticos (_next/static)
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Headers de cache para imagens
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Headers de cache para fonts
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
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
    // Desabilitar otimização automática para tags img nativas
    unoptimized: false, // Mantém false para usar Image component quando necessário
  },
  
  // Otimizações de compilação
  // swcMinify é padrão no Next.js 13+ e não precisa ser especificado
  reactStrictMode: true,
  
  // Otimizações de compilação para reduzir JavaScript legado
  compiler: {
    // Remove console.log em produção
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // Configuração experimental para melhorar performance
  experimental: {
    // Otimizações de CSS
    optimizeCss: true,
    // Otimizações de bundle
    optimizePackageImports: ['lucide-react', '@radix-ui/react-slot', '@radix-ui/react-toast'],
  },
};

export default nextConfig;
