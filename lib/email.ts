import { Resend } from 'resend';

// Verificar se RESEND_API_KEY está configurado
if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY não está configurado nas variáveis de ambiente');
}

// Criar cliente do Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export { resend };

