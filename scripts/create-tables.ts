/**
 * Script para criar tabelas no banco de dados Neon
 * 
 * Execute: npx tsx scripts/create-tables.ts
 */

// IMPORTANTE: Carregar dotenv ANTES de criar cliente
import { config } from 'dotenv';
import { resolve } from 'path';
import { neon } from '@neondatabase/serverless';

// Carregar .env.local explicitamente
config({ path: resolve(process.cwd(), '.env.local') });

// Verificar se DATABASE_URL está configurado
if (!process.env.DATABASE_URL) {
  console.error('❌ ERRO: DATABASE_URL não está configurado!');
  console.log('\n📝 Por favor:');
  console.log('1. Adicione DATABASE_URL no arquivo .env.local');
  console.log('2. Ou configure a variável de ambiente');
  process.exit(1);
}

// Criar cliente do Neon
const sql = neon(process.env.DATABASE_URL);

async function createTables() {
  console.log('🔧 Criando tabelas no banco de dados...\n');

  try {
    // Criar tabela de contatos
    console.log('📊 Criando tabela contact_submissions...');
    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        read BOOLEAN DEFAULT FALSE
      );
    `;
    console.log('✅ Tabela contact_submissions criada com sucesso!');

    // Criar índice para busca por email
    console.log('📊 Criando índice idx_contact_email...');
    await sql`
      CREATE INDEX IF NOT EXISTS idx_contact_email 
      ON contact_submissions(email);
    `;
    console.log('✅ Índice idx_contact_email criado com sucesso!');

    // Criar índice para busca por data
    console.log('📊 Criando índice idx_contact_created_at...');
    await sql`
      CREATE INDEX IF NOT EXISTS idx_contact_created_at 
      ON contact_submissions(created_at DESC);
    `;
    console.log('✅ Índice idx_contact_created_at criado com sucesso!');

    // Verificar se a tabela foi criada
    console.log('\n📊 Verificando tabela criada...');
    const result = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'contact_submissions'
      ) as table_exists
    `;
    
    if (result[0].table_exists) {
      console.log('✅ Tabela contact_submissions existe e está pronta!');
      
      // Contar colunas
      const columns = await sql`
        SELECT column_name, data_type 
        FROM information_schema.columns 
        WHERE table_name = 'contact_submissions'
        ORDER BY ordinal_position;
      `;
      
      console.log(`\n📋 Colunas da tabela (${columns.length}):`);
      columns.forEach((col: any) => {
        console.log(`   - ${col.column_name} (${col.data_type})`);
      });
    } else {
      console.log('⚠️  Tabela não foi encontrada após criação.');
    }

    console.log('\n🎉 Todas as tabelas foram criadas com sucesso!');
    process.exit(0);

  } catch (error: any) {
    console.error('\n❌ ERRO ao criar tabelas:');
    console.error(error.message);
    
    if (error.message.includes('DATABASE_URL')) {
      console.log('\n💡 Possíveis soluções:');
      console.log('1. Verifique se DATABASE_URL está configurado no .env.local');
      console.log('2. Verifique se a string de conexão está correta');
    }
    
    if (error.message.includes('connection')) {
      console.log('\n💡 Erro de conexão:');
      console.log('1. Verifique se o banco está ativo no Neon');
      console.log('2. Verifique sua conexão com a internet');
    }
    
    process.exit(1);
  }
}

// Executar criação
createTables();

