import { neon } from '@neondatabase/serverless';

// Verificar se DATABASE_URL está configurado
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL não está configurado nas variáveis de ambiente');
}

// Criar cliente do Neon
const sql = neon(databaseUrl);

export { sql };

