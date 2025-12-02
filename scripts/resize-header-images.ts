import sharp from 'sharp';
import { readFile } from 'fs/promises';
import { join } from 'path';

async function resizeHeaderImages() {
  console.log('🖼️  Redimensionando imagens do header...\n');

  const imagesDir = join(process.cwd(), 'public', 'images', 'icons');

  // Imagem 1: elemento.png - 1182x1182 → 160x160 (2x para retina)
  const elementoPath = join(imagesDir, 'dra-giovana-martins-endocrinologista-pediatrica-bh-elemento.png');
  const elementoOutput = join(imagesDir, 'dra-giovana-martins-endocrinologista-pediatrica-bh-elemento-optimized.png');
  
  try {
    console.log('📐 Redimensionando elemento.png (1182x1182 → 160x160)...');
    await sharp(elementoPath)
      .resize(160, 160, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png({ 
        quality: 90,
        compressionLevel: 9,
        adaptiveFiltering: true
      })
      .toFile(elementoOutput);
    
    const originalSize = (await readFile(elementoPath)).length;
    const newSize = (await readFile(elementoOutput)).length;
    
    console.log(`   ✅ Redimensionado: ${originalSize / 1024}KB → ${newSize / 1024}KB (${Math.round((1 - newSize/originalSize) * 100)}% redução)\n`);
  } catch (error) {
    console.error('   ❌ Erro ao redimensionar elemento.png:', error);
  }

  // Imagem 2: nome.png - 1182x1182 → 800x160 (desktop) e 400x40 (mobile)
  const nomePath = join(imagesDir, 'dra-giovana-martins-endocrinologista-pediatrica-bh-nome.png');
  const nomeDesktopOutput = join(imagesDir, 'dra-giovana-martins-endocrinologista-pediatrica-bh-nome-desktop.png');
  const nomeMobileOutput = join(imagesDir, 'dra-giovana-martins-endocrinologista-pediatrica-bh-nome-mobile.png');
  
  try {
    console.log('📐 Redimensionando nome.png desktop (1182x1182 → 800x160)...');
    await sharp(nomePath)
      .resize(800, 160, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png({ 
        quality: 90,
        compressionLevel: 9,
        adaptiveFiltering: true
      })
      .toFile(nomeDesktopOutput);
    
    const originalSize = (await readFile(nomePath)).length;
    const desktopSize = (await readFile(nomeDesktopOutput)).length;
    
    console.log(`   ✅ Desktop: ${originalSize / 1024}KB → ${desktopSize / 1024}KB (${Math.round((1 - desktopSize/originalSize) * 100)}% redução)\n`);
  } catch (error) {
    console.error('   ❌ Erro ao redimensionar nome.png desktop:', error);
  }

  try {
    console.log('📐 Redimensionando nome.png mobile (1182x1182 → 400x40)...');
    await sharp(nomePath)
      .resize(400, 40, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png({ 
        quality: 90,
        compressionLevel: 9,
        adaptiveFiltering: true
      })
      .toFile(nomeMobileOutput);
    
    const originalSize = (await readFile(nomePath)).length;
    const mobileSize = (await readFile(nomeMobileOutput)).length;
    
    console.log(`   ✅ Mobile: ${originalSize / 1024}KB → ${mobileSize / 1024}KB (${Math.round((1 - mobileSize/originalSize) * 100)}% redução)\n`);
  } catch (error) {
    console.error('   ❌ Erro ao redimensionar nome.png mobile:', error);
  }

  console.log('✅ Redimensionamento concluído!');
  console.log('\n📝 PRÓXIMOS PASSOS:');
  console.log('1. Substituir as imagens originais pelas otimizadas');
  console.log('2. Atualizar o código do Header.tsx para usar as novas imagens');
}

resizeHeaderImages().catch(console.error);

