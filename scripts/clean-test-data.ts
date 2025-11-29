/**
 * Script para limpar dados de teste do banco de dados
 * 
 * Execute: npx tsx scripts/clean-test-data.ts
 * 
 * ⚠️ ATENÇÃO: Este script remove TODOS os registros da tabela contact_submissions
 * Use apenas para limpar dados de teste antes de colocar em produção
 */

import { config } from 'dotenv';
import { resolve } from 'path';
import { neon } from '@neondatabase/serverless';

// Carregar .env.local
config({ path: resolve(process.cwd(), '.env.local') });

if (!process.env.DATABASE_URL) {
  console.error('❌ ERRO: DATABASE_URL não está configurado!');
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

async function cleanTestData() {
  console.log('🧹 Limpando dados de teste do banco de dados...\n');

  try {
    // Contar registros antes
    const countBefore = await sql`SELECT COUNT(*) as count FROM contact_submissions`;
    const totalBefore = countBefore[0].count;
    
    console.log(`📊 Registros encontrados: ${totalBefore}\n`);

    if (totalBefore === 0) {
      console.log('✅ Banco de dados já está vazio!');
      process.exit(0);
    }

    // Listar registros que serão removidos
    console.log('📋 Registros que serão removidos:\n');
    const records = await sql`
      SELECT id, name, email, created_at
      FROM contact_submissions
      ORDER BY created_at DESC
    ` as Array<{
      id: number;
      name: string;
      email: string;
      created_at: string;
    }>;

    records.forEach((record, index: number) => {
      console.log(`   ${index + 1}. ID: ${record.id} | ${record.name} (${record.email}) | ${new Date(record.created_at).toLocaleString('pt-BR')}`);
    });

    console.log('\n⚠️  ATENÇÃO: Todos os registros serão removidos!');
    console.log('   Pressione Ctrl+C para cancelar ou aguarde 3 segundos...\n');
    
    // Aguardar 3 segundos
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Deletar todos os registros
    console.log('🗑️  Removendo registros...');
    await sql`DELETE FROM contact_submissions`;
    
    // Contar registros depois
    const countAfter = await sql`SELECT COUNT(*) as count FROM contact_submissions`;
    const totalAfter = countAfter[0].count;

    console.log(`\n✅ Limpeza concluída!`);
    console.log(`   Registros removidos: ${totalBefore}`);
    console.log(`   Registros restantes: ${totalAfter}`);
    console.log('\n🎉 Banco de dados limpo e pronto para receber dados reais!');
    
    process.exit(0);

  } catch (error) {
    console.error('\n❌ ERRO ao limpar dados:');
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Erro desconhecido:', error);
    }
    process.exit(1);
  }
}

cleanTestData();

