/**
 * Script de teste para verificar conexão com o banco de dados Neon
 * 
 * Execute: npx tsx scripts/test-db-connection.ts
 */

import { config } from 'dotenv';
import { neon } from '@neondatabase/serverless';

// Carregar variáveis de ambiente do .env.local
config({ path: '.env.local' });

async function testConnection() {
  // Verificar se DATABASE_URL está configurado
  if (!process.env.DATABASE_URL) {
    console.error('❌ ERRO: DATABASE_URL não está configurado!');
    console.log('\n📝 Por favor:');
    console.log('1. Adicione DATABASE_URL no arquivo .env.local');
    console.log('2. Ou configure a variável de ambiente');
    process.exit(1);
  }

  // Limpar a string de conexão (remover prefixo "psql" se houver)
  let databaseUrl = process.env.DATABASE_URL.trim();
  
  // Remover prefixo "psql" e aspas se existirem
  if (databaseUrl.startsWith('psql')) {
    console.log('⚠️  Detectado prefixo "psql" na string de conexão. Removendo...\n');
    databaseUrl = databaseUrl.replace(/^psql\s+['"]?/, '').replace(/['"]$/, '');
  }

  console.log('🔌 Testando conexão com o banco de dados...\n');

  try {
    // Criar cliente com a string limpa
    const sql = neon(databaseUrl);

    // Teste 1: Verificar versão do PostgreSQL
    console.log('📊 Teste 1: Verificando versão do PostgreSQL...');
    const versionResult = await sql`SELECT version() as version`;
    console.log('✅ Versão:', versionResult[0].version);
    console.log('');

    // Teste 2: Verificar se consegue executar uma query simples
    console.log('📊 Teste 2: Executando query simples...');
    const testResult = await sql`SELECT NOW() as current_time, current_database() as database_name`;
    console.log('✅ Hora atual:', testResult[0].current_time);
    console.log('✅ Nome do banco:', testResult[0].database_name);
    console.log('');

    // Teste 3: Verificar se a tabela contact_submissions existe
    console.log('📊 Teste 3: Verificando se a tabela contact_submissions existe...');
    const tableCheck = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'contact_submissions'
      ) as table_exists
    `;
    
    if (tableCheck[0].table_exists) {
      console.log('✅ Tabela contact_submissions existe!');
      
      // Contar registros
      const countResult = await sql`SELECT COUNT(*) as count FROM contact_submissions`;
      console.log(`✅ Total de registros: ${countResult[0].count}`);
    } else {
      console.log('⚠️  Tabela contact_submissions NÃO existe ainda.');
      console.log('   Você precisa criar a tabela primeiro (veja o guia).');
    }

    console.log('\n🎉 Todos os testes passaram! Conexão funcionando perfeitamente.');
    process.exit(0);

  } catch (error) {
    console.error('\n❌ ERRO ao conectar com o banco de dados:');
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(errorMessage);
    
    if (errorMessage.includes('connection')) {
      console.log('\n💡 Possíveis soluções:');
      console.log('1. Verifique se a string de conexão está correta');
      console.log('2. Verifique se o banco está ativo no Neon (pode ter pausado)');
      console.log('3. Verifique sua conexão com a internet');
    }
    
    if (error.message.includes('SSL')) {
      console.log('\n💡 Erro de SSL:');
      console.log('   Adicione ?sslmode=require na string de conexão');
    }
    
    process.exit(1);
  }
}

// Executar teste
testConnection();

