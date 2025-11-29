/**
 * Script para verificar registros no banco de dados
 * 
 * Execute: npx tsx scripts/check-db-records.ts
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

async function checkRecords() {
  console.log('🔍 Verificando registros no banco de dados...\n');

  try {
    // Contar total de registros
    const countResult = await sql`SELECT COUNT(*) as count FROM contact_submissions`;
    const total = countResult[0].count;
    
    console.log(`📊 Total de registros: ${total}\n`);

    if (total > 0) {
      // Buscar últimos 5 registros
      const records = await sql`
        SELECT id, name, email, phone, message, created_at, read
        FROM contact_submissions
        ORDER BY created_at DESC
        LIMIT 5
      ` as Array<{
        id: number;
        name: string;
        email: string;
        phone: string | null;
        message: string;
        created_at: string;
        read: boolean;
      }>;

      console.log('📋 Últimos registros:\n');
      records.forEach((record, index: number) => {
        console.log(`   ${index + 1}. ID: ${record.id}`);
        console.log(`      Nome: ${record.name}`);
        console.log(`      Email: ${record.email}`);
        console.log(`      Telefone: ${record.phone || 'Não informado'}`);
        console.log(`      Mensagem: ${record.message.substring(0, 50)}...`);
        console.log(`      Criado em: ${new Date(record.created_at).toLocaleString('pt-BR')}`);
        console.log(`      Lido: ${record.read ? 'Sim' : 'Não'}`);
        console.log('');
      });

      console.log('✅ Registros encontrados e exibidos com sucesso!');
    } else {
      console.log('⚠️  Nenhum registro encontrado no banco de dados.');
    }

    process.exit(0);

  } catch (error) {
    console.error('❌ ERRO ao verificar registros:');
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Erro desconhecido:', error);
    }
    process.exit(1);
  }
}

checkRecords();

