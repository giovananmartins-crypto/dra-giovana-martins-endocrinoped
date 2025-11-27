import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { z } from 'zod';

// Schema de validação usando Zod
const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres').max(255),
  email: z.string().email('Email inválido'),
  phone: z.string()
    .min(10, 'Telefone deve ter pelo menos 10 dígitos')
    .max(20, 'Telefone muito longo')
    .regex(/^[\d\s\(\)\-\+]+$/, 'Telefone deve conter apenas números, espaços, parênteses, hífens ou sinal de +'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres').max(5000),
});

export async function POST(request: NextRequest) {
  try {
    // Parse do body
    const body = await request.json();

    // Validar dados
    const validatedData = contactSchema.parse(body);

    // Inserir no banco de dados
    const result = await sql`
      INSERT INTO contact_submissions (name, email, phone, message)
      VALUES (${validatedData.name}, ${validatedData.email}, ${validatedData.phone || null}, ${validatedData.message})
      RETURNING id, created_at;
    `;

    // Retornar sucesso
    return NextResponse.json(
      {
        success: true,
        message: 'Mensagem enviada com sucesso!',
        id: result[0].id,
      },
      { status: 201 }
    );
  } catch (error) {
    // Erro de validação
    if (error instanceof z.ZodError) {
      // Pegar a primeira mensagem de erro para exibir ao usuário
      const firstError = error.errors[0];
      const errorMessage = firstError?.message || 'Dados inválidos. Verifique os campos preenchidos.';
      
      return NextResponse.json(
        {
          success: false,
          message: errorMessage,
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Erro de banco de dados
    console.error('Erro ao salvar contato:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Erro ao enviar mensagem. Tente novamente mais tarde.',
      },
      { status: 500 }
    );
  }
}

// Método GET para listar contatos (opcional - apenas para admin)
export async function GET(request: NextRequest) {
  try {
    // Verificar autenticação (implementar depois)
    // Por enquanto, retornar erro
    return NextResponse.json(
      { message: 'Método não permitido' },
      { status: 405 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Erro ao buscar contatos' },
      { status: 500 }
    );
  }
}

