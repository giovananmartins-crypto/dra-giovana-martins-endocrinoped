import sharp from 'sharp';
import { readFile } from 'fs/promises';
import { join } from 'path';

async function resizeElementoImage() {
  console.log('🖼️  Redimensionando imagem elemento do header...\n');

  const imagesDir = join(process.cwd(), 'public', 'images', 'icons');
  const elementoPath = join(imagesDir, 'dra-giovana-martins-endocrinologista-pediatrica-bh-elemento.png');
  const elemento80Output = join(imagesDir, 'dra-giovana-martins-endocrinologista-pediatrica-bh-elemento-80.png');
  
  try {
    console.log('📐 Redimensionando elemento.png (160x160 → 80x80)...');
    await sharp(elementoPath)
      .resize(80, 80, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png({ 
        quality: 90,
        compressionLevel: 9,
        adaptiveFiltering: true
      })
      .toFile(elemento80Output);
    
    const originalSize = (await readFile(elementoPath)).length;
    const newSize = (await readFile(elemento80Output)).length;
    
    console.log(`   ✅ Redimensionado: ${(originalSize / 1024).toFixed(2)}KB → ${(newSize / 1024).toFixed(2)}KB (${Math.round((1 - newSize/originalSize) * 100)}% redução)\n`);
    console.log('✅ Imagem 80x80 criada! Use srcSet para servir a versão correta.');
  } catch (error) {
    console.error('   ❌ Erro ao redimensionar elemento.png:', error);
    process.exit(1);
  }
}

resizeElementoImage().catch(console.error);

