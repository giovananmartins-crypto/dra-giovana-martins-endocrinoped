/**
 * Script para otimizar imagens automaticamente
 * 
 * Uso: npm run optimize-images ou tsx scripts/optimize-images.ts
 * 
 * IMPORTANTE: Este script requer a biblioteca 'sharp' instalada
 * Instalar: npm install --save-dev sharp
 */

import { readdir, stat, readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { existsSync } from 'fs';

// Verificar se sharp está instalado
let sharp: any;
try {
  sharp = require('sharp');
} catch (error) {
  console.error('❌ ERRO: A biblioteca "sharp" não está instalada.');
  console.error('📦 Instale com: npm install --save-dev sharp');
  console.error('\n💡 Alternativa: Use ferramentas online como TinyPNG ou Squoosh');
  console.error('   Ver guia: docs/GUIA_OTIMIZACAO_IMAGENS.md\n');
  process.exit(1);
}

const MAX_SIZE_KB = 200;
const MAX_SIZE_BYTES = MAX_SIZE_KB * 1024;
const QUALITY = 85; // Qualidade JPEG (80-85% recomendado)

interface ImageInfo {
  path: string;
  sizeKB: number;
  needsOptimization: boolean;
}

async function getImageFiles(dir: string, fileList: ImageInfo[] = []): Promise<ImageInfo[]> {
  const files = await readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const filePath = join(dir, file.name);

    if (file.isDirectory()) {
      await getImageFiles(filePath, fileList);
    } else if (file.name.match(/\.(jpg|jpeg)$/i)) {
      const stats = await stat(filePath);
      const sizeKB = Math.round(stats.size / 1024);

      if (stats.size > MAX_SIZE_BYTES) {
        fileList.push({
          path: filePath,
          sizeKB,
          needsOptimization: true,
        });
      }
    }
  }

  return fileList;
}

async function optimizeImage(imagePath: string): Promise<{ originalSize: number; newSize: number; saved: number }> {
  const originalStats = await stat(imagePath);
  const originalSize = originalStats.size;

  // Ler imagem
  const imageBuffer = await readFile(imagePath);
  const metadata = await sharp(imageBuffer).metadata();

  // Estratégia: otimizar iterativamente até ficar abaixo do limite
  let finalBuffer: Buffer | null = null;
  let currentQuality = QUALITY;
  let currentScale = 1.0;
  const maxAttempts = 15;
  let attempts = 0;

  while (attempts < maxAttempts) {
    // Calcular dimensões com escala atual
    const targetWidth = Math.round(metadata.width! * currentScale);
    const targetHeight = Math.round(metadata.height! * currentScale);

    // Tentar otimizar com qualidade e escala atuais
    const buffer = await sharp(imageBuffer)
      .resize({
        width: targetWidth,
        height: targetHeight,
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ 
        quality: currentQuality,
        mozjpeg: true,
        progressive: true
      })
      .toBuffer();

    // Se conseguiu ficar abaixo do limite, usar este buffer
    if (buffer.length <= MAX_SIZE_BYTES) {
      finalBuffer = buffer;
      break;
    }

    // Se ainda estiver acima do limite, ajustar parâmetros
    // Calcular nova escala baseada no tamanho atual
    const sizeRatio = MAX_SIZE_BYTES / buffer.length;
    currentScale = currentScale * Math.sqrt(sizeRatio) * 0.92; // 92% para margem de segurança
    
    // Se escala ficou muito baixa, reduzir qualidade também
    if (currentScale < 0.7 && currentQuality > 75) {
      currentQuality = Math.max(75, currentQuality - 3);
    }
    
    attempts++;
  }

  // Se ainda não conseguiu após todas as tentativas, forçar redução agressiva
  if (!finalBuffer || finalBuffer.length > MAX_SIZE_BYTES) {
    // Calcular escala agressiva baseada no tamanho original
    const aggressiveScale = Math.sqrt((MAX_SIZE_BYTES / originalSize) * 0.85);
    
    finalBuffer = await sharp(imageBuffer)
      .resize({
        width: Math.round(metadata.width! * aggressiveScale),
        height: Math.round(metadata.height! * aggressiveScale),
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ 
        quality: 75,
        mozjpeg: true,
        progressive: true
      })
      .toBuffer();
  }

  // Garantir que finalBuffer não é null (TypeScript)
  if (!finalBuffer) {
    throw new Error('Falha ao otimizar imagem');
  }

  // Criar backup antes de substituir
  const backupPath = `${imagePath}.backup`;
  if (!existsSync(backupPath)) {
    await writeFile(backupPath, imageBuffer);
  }

  // Escrever imagem otimizada
  await writeFile(imagePath, finalBuffer);

  const newSize = finalBuffer.length;
  const saved = originalSize - newSize;

  return {
    originalSize,
    newSize,
    saved
  };
}

async function main() {
  console.log('🖼️  Otimizando imagens...\n');
  console.log(`📏 Limite: ${MAX_SIZE_KB}KB`);
  console.log(`🎨 Qualidade JPEG: ${QUALITY}%\n`);

  const imagesDir = join(process.cwd(), 'public', 'images');
  const imagesToOptimize = await getImageFiles(imagesDir);

  if (imagesToOptimize.length === 0) {
    console.log('✅ Todas as imagens já estão otimizadas!\n');
    return;
  }

  console.log(`📋 Encontradas ${imagesToOptimize.length} imagens para otimizar\n`);

  let totalOriginalSize = 0;
  let totalNewSize = 0;
  let optimized = 0;
  let failed = 0;

  for (const image of imagesToOptimize) {
    try {
      console.log(`⏳ Otimizando: ${image.path.replace(process.cwd() + '/', '')} (${image.sizeKB}KB)...`);
      
      const result = await optimizeImage(image.path);
      totalOriginalSize += result.originalSize;
      totalNewSize += result.newSize;
      
      const newSizeKB = Math.round(result.newSize / 1024);
      const savedKB = Math.round(result.saved / 1024);
      const savedPercent = Math.round((result.saved / result.originalSize) * 100);

      if (result.newSize <= MAX_SIZE_BYTES) {
        console.log(`   ✅ Otimizado: ${newSizeKB}KB (economia: ${savedKB}KB / ${savedPercent}%)\n`);
        optimized++;
      } else {
        console.log(`   ⚠️  Ainda acima do limite: ${newSizeKB}KB (redução: ${savedPercent}%)\n`);
        optimized++;
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error(`   ❌ Erro ao otimizar: ${errorMessage}\n`);
      failed++;
    }
  }

  // Resumo
  console.log('\n📊 RESUMO DA OTIMIZAÇÃO\n');
  console.log(`✅ Otimizadas com sucesso: ${optimized}`);
  if (failed > 0) {
    console.log(`❌ Falhas: ${failed}`);
  }
  
  const totalSaved = totalOriginalSize - totalNewSize;
  const totalSavedKB = Math.round(totalSaved / 1024);
  const totalSavedMB = (totalSavedKB / 1024).toFixed(2);
  const savedPercent = Math.round((totalSaved / totalOriginalSize) * 100);

  console.log(`\n💰 ECONOMIA TOTAL:`);
  console.log(`   Antes: ${Math.round(totalOriginalSize / 1024)}KB`);
  console.log(`   Depois: ${Math.round(totalNewSize / 1024)}KB`);
  console.log(`   Economia: ${totalSavedKB}KB (${totalSavedMB}MB) - ${savedPercent}%\n`);

  console.log('💾 Backups criados com extensão .backup');
  console.log('   Você pode remover os backups após verificar que tudo está funcionando.\n');
}

main().catch(console.error);

