/**
 * Script para testar a API de contato
 * 
 * Execute: npx tsx scripts/test-contact-api.ts
 */

import { config } from 'dotenv';
import { resolve } from 'path';

// Carregar .env.local
config({ path: resolve(process.cwd(), '.env.local') });

async function testContactAPI() {
  console.log('🧪 Testando API de contato...\n');

  const testData = {
    name: 'Teste Automatizado',
    email: 'teste@exemplo.com',
    phone: '(31) 99999-9999',
    message: 'Esta é uma mensagem de teste automático para verificar se a API está funcionando corretamente.'
  };

  try {
    console.log('📤 Enviando requisição POST para /api/contact...');
    console.log('📋 Dados:', JSON.stringify(testData, null, 2));
    console.log('');

    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const data = await response.json();

    console.log('📥 Resposta recebida:');
    console.log('   Status:', response.status);
    console.log('   Dados:', JSON.stringify(data, null, 2));
    console.log('');

    if (response.ok && data.success) {
      console.log('✅ TESTE PASSOU!');
      console.log('   - API respondeu com sucesso');
      console.log('   - ID do registro:', data.id);
      console.log('');
      console.log('💡 Próximo passo: Verificar no banco de dados se o registro foi salvo.');
    } else {
      console.log('❌ TESTE FALHOU!');
      console.log('   - Erro:', data.message);
      if (data.errors) {
        console.log('   - Erros de validação:', JSON.stringify(data.errors, null, 2));
      }
    }

    process.exit(response.ok && data.success ? 0 : 1);

  } catch (error: any) {
    console.error('❌ ERRO ao testar API:');
    console.error('   Mensagem:', error.message);
    console.log('');
    console.log('💡 Possíveis causas:');
    console.log('   1. Servidor não está rodando (npm run dev)');
    console.log('   2. Porta 3000 não está disponível');
    console.log('   3. Erro de conexão');
    process.exit(1);
  }
}

testContactAPI();

