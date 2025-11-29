/**
 * Script para testar validação com dados inválidos
 */

import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(process.cwd(), '.env.local') });

async function testInvalidData() {
  console.log('🧪 Testando validação com dados inválidos...\n');

  const testCases = [
    {
      name: 'Nome muito curto',
      data: { name: 'A', email: 'teste@teste.com', phone: '(31) 99999-9999', message: 'Mensagem de teste' }
    },
    {
      name: 'Email inválido',
      data: { name: 'Teste', email: 'email-invalido', phone: '(31) 99999-9999', message: 'Mensagem de teste' }
    },
    {
      name: 'Mensagem muito curta',
      data: { name: 'Teste', email: 'teste@teste.com', phone: '(31) 99999-9999', message: 'Curta' }
    }
  ];

  for (const testCase of testCases) {
    console.log(`\n📋 Teste: ${testCase.name}`);
    console.log('   Dados:', JSON.stringify(testCase.data, null, 2));
    
    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testCase.data),
      });

      const data = await response.json();
      
      console.log(`   Status: ${response.status}`);
      console.log('   Resposta:', JSON.stringify(data, null, 2));
      
      if (response.status === 400) {
        console.log('   ✅ Validação funcionando corretamente!');
      } else {
        console.log('   ⚠️  Esperava status 400, mas recebeu', response.status);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error('   ❌ Erro:', errorMessage);
    }
  }
}

testInvalidData();

