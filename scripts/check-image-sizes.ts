/**
 * Script para verificar tamanho das imagens e identificar quais precisam otimização
 * 
 * Uso: npm run check-images ou tsx scripts/check-image-sizes.ts
 */

import { readdir, stat } from 'fs/promises';
import { join } from 'path';

const MAX_SIZE_KB = 200; // Limite recomendado: 200KB
const MAX_SIZE_BYTES = MAX_SIZE_KB * 1024;

interface ImageInfo {
  path: string;
  sizeKB: number;
  sizeBytes: number;
  needsOptimization: boolean;
}

async function getImageFiles(dir: string, fileList: ImageInfo[] = []): Promise<ImageInfo[]> {
  const files = await readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const filePath = join(dir, file.name);

    if (file.isDirectory()) {
      await getImageFiles(filePath, fileList);
    } else if (
      file.name.match(/\.(jpg|jpeg|png|webp)$/i)
    ) {
      const stats = await stat(filePath);
      const sizeKB = Math.round(stats.size / 1024);
      const sizeBytes = stats.size;

      fileList.push({
        path: filePath.replace(process.cwd() + '/', ''),
        sizeKB,
        sizeBytes,
        needsOptimization: sizeBytes > MAX_SIZE_BYTES,
      });
    }
  }

  return fileList;
}

async function main() {
  console.log('🔍 Verificando tamanho das imagens...\n');
  console.log(`📏 Limite recomendado: ${MAX_SIZE_KB}KB\n`);

  const imagesDir = join(process.cwd(), 'public', 'images');
  const allImages = await getImageFiles(imagesDir);

  // Separar imagens que precisam otimização
  const needsOptimization = allImages.filter(img => img.needsOptimization);
  const optimized = allImages.filter(img => !img.needsOptimization);

  // Ordenar por tamanho (maior primeiro)
  needsOptimization.sort((a, b) => b.sizeKB - a.sizeKB);
  optimized.sort((a, b) => b.sizeKB - a.sizeKB);

  console.log('📊 RESUMO GERAL\n');
  console.log(`Total de imagens: ${allImages.length}`);
  console.log(`✅ Otimizadas (< ${MAX_SIZE_KB}KB): ${optimized.length} (${Math.round((optimized.length / allImages.length) * 100)}%)`);
  console.log(`⚠️  Precisam otimização (> ${MAX_SIZE_KB}KB): ${needsOptimization.length} (${Math.round((needsOptimization.length / allImages.length) * 100)}%)\n`);

  if (needsOptimization.length > 0) {
    console.log('⚠️  IMAGENS QUE PRECISAM OTIMIZAÇÃO\n');
    console.log('| Arquivo | Tamanho | Redução Necessária |');
    console.log('|---------|---------|-------------------|');

    needsOptimization.forEach(img => {
      const reduction = Math.round(((img.sizeKB - MAX_SIZE_KB) / img.sizeKB) * 100);
      console.log(`| ${img.path} | ${img.sizeKB}KB | ~${reduction}% |`);
    });

    console.log('\n📋 LISTA DE ARQUIVOS PARA OTIMIZAR:\n');
    needsOptimization.forEach(img => {
      console.log(`- ${img.path} (${img.sizeKB}KB)`);
    });

    // Calcular tamanho total e economia potencial
    const totalSizeKB = needsOptimization.reduce((sum, img) => sum + img.sizeKB, 0);
    const targetSizeKB = needsOptimization.length * MAX_SIZE_KB;
    const potentialSavingsKB = totalSizeKB - targetSizeKB;
    const potentialSavingsPercent = Math.round((potentialSavingsKB / totalSizeKB) * 100);

    console.log('\n💰 ECONOMIA POTENCIAL:\n');
    console.log(`Tamanho atual total: ${totalSizeKB}KB`);
    console.log(`Tamanho após otimização: ~${targetSizeKB}KB`);
    console.log(`Economia potencial: ~${potentialSavingsKB}KB (${potentialSavingsPercent}%)\n`);
  } else {
    console.log('✅ Todas as imagens estão otimizadas!\n');
  }

  if (optimized.length > 0 && needsOptimization.length > 0) {
    console.log('✅ IMAGENS JÁ OTIMIZADAS:\n');
    optimized.forEach(img => {
      console.log(`- ${img.path} (${img.sizeKB}KB)`);
    });
    console.log('');
  }
}

main().catch(console.error);

