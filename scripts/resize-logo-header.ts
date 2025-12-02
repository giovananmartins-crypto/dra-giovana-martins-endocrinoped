import sharp from 'sharp';
import { readFile } from 'fs/promises';
import { join } from 'path';

async function resizeLogoHeader() {
  console.log('🖼️  Redimensionando logo do header...\n');

  const imagesDir = join(process.cwd(), 'public', 'images', 'Logo');
  const logoPath = join(imagesDir, 'dra-giovana-martins-endocrinologista-pediatrica-bh-logo.png');
  
  // Tamanhos necessários baseados no uso:
  // Mobile: h-32 = 128px
  // Desktop: h-36 = 144px  
  // Large: h-40 = 160px
  // Vamos criar versões otimizadas: 160px (1x) e 320px (2x para retina)
  
  const sizes = [
    { name: '160', size: 160, output: 'dra-giovana-martins-endocrinologista-pediatrica-bh-logo-160.png' },
    { name: '320', size: 320, output: 'dra-giovana-martins-endocrinologista-pediatrica-bh-logo-320.png' },
  ];
  
  try {
    const originalSize = (await readFile(logoPath)).length;
    console.log(`📐 Imagem original: ${(originalSize / 1024).toFixed(2)}KB (1182x1182)\n`);
    
    for (const { name, size, output } of sizes) {
      const outputPath = join(imagesDir, output);
      
      console.log(`📐 Redimensionando para ${size}x${size}...`);
      await sharp(logoPath)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png({ 
          quality: 90,
          compressionLevel: 9,
          adaptiveFiltering: true
        })
        .toFile(outputPath);
      
      const newSize = (await readFile(outputPath)).length;
      const saved = originalSize - newSize;
      const savedPercent = Math.round((saved / originalSize) * 100);
      
      console.log(`   ✅ ${name}px: ${(newSize / 1024).toFixed(2)}KB (economia: ${(saved / 1024).toFixed(2)}KB / ${savedPercent}%)\n`);
    }
    
    console.log('✅ Redimensionamento concluído!');
    console.log('\n📝 PRÓXIMOS PASSOS:');
    console.log('1. Atualizar Header.tsx para usar srcSet com as novas imagens');
    console.log('2. Usar logo-160.png como padrão e logo-320.png para retina');
  } catch (error) {
    console.error('   ❌ Erro ao redimensionar logo:', error);
    process.exit(1);
  }
}

resizeLogoHeader().catch(console.error);

