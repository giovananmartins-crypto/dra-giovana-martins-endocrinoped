# GUIA COMPLETO: BANCO DE DADOS POSTGRESQL
## Site Dra. Giovana Martins - Endocrinologista Pediátrica

**Data de Criação:** 27/01/2025  
**Versão:** 1.0  
**Status:** Preparação para Implementação

---

## 📋 ÍNDICE

1. [Opções de Plataformas PostgreSQL](#1-opções-de-plataformas-postgresql)
2. [Escolha Recomendada: Neon](#2-escolha-recomendada-neon)
3. [Passo a Passo: Configurar Neon](#3-passo-a-passo-configurar-neon)
4. [Configurar no Código](#4-configurar-no-código)
5. [Criar Tabelas](#5-criar-tabelas)
6. [Criar API Route para Formulário](#6-criar-api-route-para-formulário)
7. [Conectar Formulário ao Backend](#7-conectar-formulário-ao-backend)
8. [Testes e Verificação](#8-testes-e-verificação)
9. [Troubleshooting](#9-troubleshooting)
10. [Checklist Completo](#10-checklist-completo)

---

## 1. OPÇÕES DE PLATAFORMAS POSTGRESQL

### 🥇 Opção 1: Neon (RECOMENDADO)

**Por que escolher:**
- ✅ **Plano gratuito generoso** (3GB de armazenamento, 512MB RAM)
- ✅ **Serverless PostgreSQL** (paga apenas pelo que usa)
- ✅ **Branching de banco** (como Git para banco de dados)
- ✅ **Backup automático** (Point-in-time recovery)
- ✅ **Interface web moderna** e fácil de usar
- ✅ **Integração fácil com Vercel** (Next.js)
- ✅ **SSL automático** incluído
- ✅ **Sem necessidade de servidor** (gerenciado pela plataforma)

**Preços:**
- **Free Tier:** Grátis (3GB storage, 512MB RAM)
- **Launch:** $19/mês (10GB storage, 1GB RAM)
- **Scale:** $69/mês (50GB storage, 4GB RAM)

**Link:** https://neon.tech

---

### 🥈 Opção 2: Supabase

**Por que escolher:**
- ✅ **Plano gratuito** (500MB de banco, 2GB de storage)
- ✅ **PostgreSQL completo** + recursos extras (Auth, Storage, Realtime)
- ✅ **Interface web completa** (dashboard, SQL editor)
- ✅ **API REST automática** gerada
- ✅ **Autenticação integrada** (se precisar no futuro)
- ✅ **Storage de arquivos** incluído

**Preços:**
- **Free Tier:** Grátis (500MB database, 2GB storage)
- **Pro:** $25/mês (8GB database, 100GB storage)

**Link:** https://supabase.com

---

### 🥉 Opção 3: Vercel Postgres

**Por que escolher:**
- ✅ **Integração nativa com Vercel** (mesmo painel)
- ✅ **Serverless PostgreSQL**
- ✅ **Sem configuração adicional** (já está na Vercel)
- ✅ **Billing integrado** com Vercel

**Preços:**
- **Hobby:** $20/mês (256MB storage)
- **Pro:** $40/mês (1GB storage)

**Link:** https://vercel.com/docs/storage/vercel-postgres

---

### Opção 4: Railway

**Por que escolher:**
- ✅ **Plano gratuito** ($5 de crédito/mês)
- ✅ **Deploy fácil** (GitHub integration)
- ✅ **PostgreSQL gerenciado**
- ✅ **SSL automático**

**Preços:**
- **Free Tier:** $5 crédito/mês (suficiente para projetos pequenos)
- **Pro:** Pay-as-you-go

**Link:** https://railway.app

---

### Opção 5: Render

**Por que escolher:**
- ✅ **Plano gratuito** (90 dias, depois $7/mês)
- ✅ **PostgreSQL gerenciado**
- ✅ **Backup automático**
- ✅ **SSL incluído**

**Preços:**
- **Free Tier:** 90 dias grátis
- **Starter:** $7/mês (1GB storage)

**Link:** https://render.com

---

## 2. ESCOLHA RECOMENDADA: NEON

**Recomendamos Neon porque:**
1. ✅ **Melhor para começar** - Plano gratuito generoso
2. ✅ **Serverless** - Não precisa gerenciar servidor
3. ✅ **Moderno** - Interface e recursos modernos
4. ✅ **Fácil integração** - Funciona perfeitamente com Next.js
5. ✅ **Escalável** - Cresce conforme sua necessidade

**Vamos usar Neon neste guia!**

---

## 3. PASSO A PASSO: CONFIGURAR NEON

### 3.1 Criar Conta no Neon

1. **Acessar o site:**
   - Ir para: https://neon.tech
   - Clicar em **"Sign Up"** ou **"Get Started"**

2. **Escolher método de login:**
   - GitHub (recomendado - mais fácil)
   - Google
   - Email

3. **Autorizar acesso:**
   - Se escolher GitHub, autorizar o Neon a acessar sua conta
   - Aceitar termos de serviço

4. **Verificar email (se necessário):**
   - Verificar email se escolheu login por email

---

### 3.2 Criar Projeto

1. **Após login, você verá o dashboard:**
   - Clicar em **"Create Project"** ou **"New Project"**

2. **Preencher informações do projeto:**
   - **Project Name:** `dra-giovana-martins-site` (ou nome de sua escolha)
   - **Region:** Escolher região mais próxima (ex: `São Paulo` ou `US East`)
   - **PostgreSQL Version:** Deixar padrão (15 ou 16)
   - **Plano:** Escolher **"Free"** (para começar)

3. **Clicar em "Create Project"**
   - Aguardar criação (leva ~30 segundos)

---

### 3.3 Obter String de Conexão

1. **Após criar o projeto, você verá a tela de "Connection Details":**
   - Esta tela mostra as informações de conexão

2. **Copiar a Connection String:**
   - Você verá algo como:
     ```
     postgresql://username:password@ep-xxxx-xxxx.region.aws.neon.tech/dbname?sslmode=require
     ```
   - **IMPORTANTE:** Copiar a string completa (incluindo a senha)
   - ⚠️ **Esta é a única vez que você verá a senha completa!**
   - Se perder, você precisará resetar a senha

3. **Salvar em local seguro:**
   - Guardar esta string temporariamente (vamos usar no próximo passo)

---

### 3.4 Configurar Variáveis de Ambiente

#### No `.env.local` (Desenvolvimento Local)

1. **Abrir o arquivo `.env.local` na raiz do projeto**
   - Se não existir, criar um novo arquivo

2. **Adicionar a variável:**
   ```bash
   DATABASE_URL=postgresql://username:password@ep-xxxx-xxxx.region.aws.neon.tech/dbname?sslmode=require
   ```
   - Substituir pela string de conexão que você copiou
   - **NÃO** adicionar espaços ou quebras de linha

3. **Salvar o arquivo**

#### Na Vercel (Produção)

1. **Acessar o painel da Vercel:**
   - Ir para: https://vercel.com/dashboard
   - Selecionar o projeto do site

2. **Ir em Settings → Environment Variables:**
   - Clicar em **"Add New"**

3. **Adicionar variável:**
   - **Key:** `DATABASE_URL`
   - **Value:** Colar a mesma string de conexão do Neon
   - **Environment:** Selecionar todas (Production, Preview, Development)

4. **Clicar em "Save"**

5. **Redeploy (se necessário):**
   - Vercel pode fazer redeploy automático
   - Ou ir em Deployments → Redeploy

---

### 3.5 Testar Conexão (Opcional)

Você pode testar a conexão usando o **Neon SQL Editor**:

1. **No dashboard do Neon, clicar em "SQL Editor"**

2. **Executar um teste:**
   ```sql
   SELECT version();
   ```

3. **Se retornar a versão do PostgreSQL, está funcionando!**

---

## 4. CONFIGURAR NO CÓDIGO

### 4.1 Instalar Dependências

No terminal, na raiz do projeto:

```bash
npm install @neondatabase/serverless
```

Ou se preferir usar `pg` (PostgreSQL client tradicional):

```bash
npm install pg
npm install --save-dev @types/pg
```

**Recomendação:** Usar `@neondatabase/serverless` (otimizado para Neon)

---

### 4.2 Criar Cliente de Banco de Dados

Criar arquivo: `lib/db.ts`

```typescript
import { neon } from '@neondatabase/serverless';

// Verificar se DATABASE_URL está configurado
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL não está configurado nas variáveis de ambiente');
}

// Criar cliente do Neon
const sql = neon(process.env.DATABASE_URL);

export { sql };
```

**OU** se usar `pg`:

```typescript
import { Pool } from 'pg';

// Verificar se DATABASE_URL está configurado
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL não está configurado nas variáveis de ambiente');
}

// Criar pool de conexões
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export { pool };
```

---

## 5. CRIAR TABELAS

### 5.1 Estrutura da Tabela de Contatos

Vamos criar uma tabela para armazenar os envios do formulário de contato.

**Estrutura proposta:**

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | SERIAL PRIMARY KEY | ID único do registro |
| `name` | VARCHAR(255) | Nome do contato |
| `email` | VARCHAR(255) | Email do contato |
| `phone` | VARCHAR(20) | Telefone (opcional) |
| `message` | TEXT | Mensagem do formulário |
| `created_at` | TIMESTAMP | Data/hora de criação |
| `read` | BOOLEAN | Se a mensagem foi lida (default: false) |

---

### 5.2 Criar Tabela no Neon

#### Método 1: Via SQL Editor do Neon (RECOMENDADO)

1. **Acessar o SQL Editor no dashboard do Neon**

2. **Executar o seguinte SQL:**

```sql
-- Criar tabela de contatos
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  read BOOLEAN DEFAULT FALSE
);

-- Criar índice para busca por email
CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_submissions(email);

-- Criar índice para busca por data
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions(created_at DESC);

-- Comentários nas colunas (opcional, mas útil)
COMMENT ON TABLE contact_submissions IS 'Armazena envios do formulário de contato';
COMMENT ON COLUMN contact_submissions.name IS 'Nome completo do contato';
COMMENT ON COLUMN contact_submissions.email IS 'Email do contato';
COMMENT ON COLUMN contact_submissions.phone IS 'Telefone do contato (opcional)';
COMMENT ON COLUMN contact_submissions.message IS 'Mensagem enviada pelo formulário';
COMMENT ON COLUMN contact_submissions.created_at IS 'Data e hora de criação do registro';
COMMENT ON COLUMN contact_submissions.read IS 'Indica se a mensagem foi lida';
```

3. **Clicar em "Run" ou pressionar Ctrl+Enter**

4. **Verificar se a tabela foi criada:**
   - Executar: `SELECT * FROM contact_submissions;`
   - Deve retornar vazio (sem erros)

---

#### Método 2: Via Código (Migration Script)

Criar arquivo: `scripts/create-tables.ts`

```typescript
import { sql } from '../lib/db';

async function createTables() {
  try {
    // Criar tabela de contatos
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

    // Criar índices
    await sql`
      CREATE INDEX IF NOT EXISTS idx_contact_email 
      ON contact_submissions(email);
    `;

    await sql`
      CREATE INDEX IF NOT EXISTS idx_contact_created_at 
      ON contact_submissions(created_at DESC);
    `;

    console.log('✅ Tabelas criadas com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao criar tabelas:', error);
    throw error;
  }
}

createTables();
```

Executar:
```bash
npx tsx scripts/create-tables.ts
```

---

## 6. CRIAR API ROUTE PARA FORMULÁRIO

### 6.1 Criar API Route

Criar arquivo: `app/api/contact/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { z } from 'zod'; // Para validação

// Schema de validação usando Zod
const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres').max(255),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
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
      return NextResponse.json(
        {
          success: false,
          message: 'Dados inválidos',
          errors: error.errors,
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
```

---

### 6.2 Instalar Zod (Validação)

```bash
npm install zod
```

---

## 7. CONECTAR FORMULÁRIO AO BACKEND

### 7.1 Atualizar ContactSection

Atualizar arquivo: `components/sections/ContactSection.tsx`

**Adicionar função de envio:**

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Desabilitar botão durante envio
  setIsSubmitting(true);
  
  try {
    // Enviar para API
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      // Sucesso
      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve.',
      });
      
      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      // Rastrear evento de conversão
      analytics.formSubmit('Contact Form');
    } else {
      // Erro
      toast({
        title: 'Erro ao enviar',
        description: data.message || 'Tente novamente mais tarde.',
        variant: 'destructive',
      });
    }
  } catch (error) {
    console.error('Erro ao enviar formulário:', error);
    toast({
      title: 'Erro ao enviar',
      description: 'Tente novamente mais tarde.',
      variant: 'destructive',
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## 8. TESTES E VERIFICAÇÃO

### 8.1 Testar Localmente

1. **Iniciar servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

2. **Acessar página de contato:**
   - Ir para: http://localhost:3000/contato

3. **Preencher e enviar formulário:**
   - Preencher todos os campos
   - Clicar em "Enviar Mensagem"

4. **Verificar no banco:**
   - Acessar Neon SQL Editor
   - Executar: `SELECT * FROM contact_submissions ORDER BY created_at DESC;`
   - Deve aparecer o registro recém-criado

---

### 8.2 Testar em Produção

1. **Fazer deploy na Vercel:**
   ```bash
   git add .
   git commit -m "feat: adicionar integração com banco de dados"
   git push origin main
   ```

2. **Aguardar deploy completar**

3. **Testar no site em produção:**
   - Acessar: https://www.giovanaendocrinoped.com.br/contato
   - Enviar formulário de teste

4. **Verificar no banco:**
   - Verificar no Neon SQL Editor se o registro foi criado

---

## 9. TROUBLESHOOTING

### Erro: "DATABASE_URL não está configurado"

**Solução:**
- Verificar se `.env.local` existe e tem `DATABASE_URL`
- Verificar se variável está configurada na Vercel
- Reiniciar servidor de desenvolvimento

---

### Erro: "Connection refused" ou "Timeout"

**Solução:**
- Verificar se string de conexão está correta
- Verificar se banco está ativo no Neon (pode ter pausado no free tier)
- Verificar firewall/network

---

### Erro: "SSL required"

**Solução:**
- Adicionar `?sslmode=require` na string de conexão
- Ou configurar SSL no cliente:
  ```typescript
  ssl: {
    rejectUnauthorized: false
  }
  ```

---

### Erro: "Table does not exist"

**Solução:**
- Verificar se tabela foi criada no banco correto
- Executar SQL de criação novamente
- Verificar se está conectando no banco correto

---

## 10. CHECKLIST COMPLETO

### Fase 1: Configuração do Neon
- [ ] Criar conta no Neon
- [ ] Criar projeto
- [ ] Obter string de conexão
- [ ] Configurar `DATABASE_URL` no `.env.local`
- [ ] Configurar `DATABASE_URL` na Vercel
- [ ] Testar conexão (SQL Editor)

### Fase 2: Configuração no Código
- [ ] Instalar `@neondatabase/serverless` (ou `pg`)
- [ ] Criar `lib/db.ts` com cliente
- [ ] Testar import do cliente

### Fase 3: Criar Tabelas
- [ ] Criar tabela `contact_submissions` via SQL Editor
- [ ] Criar índices
- [ ] Verificar tabela criada

### Fase 4: API Route
- [ ] Instalar `zod` para validação
- [ ] Criar `app/api/contact/route.ts`
- [ ] Implementar validação
- [ ] Implementar inserção no banco
- [ ] Testar API route localmente

### Fase 5: Conectar Formulário
- [ ] Atualizar `ContactSection.tsx`
- [ ] Adicionar função `handleSubmit` com fetch
- [ ] Adicionar tratamento de erros
- [ ] Adicionar feedback visual (toast)
- [ ] Testar envio localmente

### Fase 6: Testes
- [ ] Testar formulário localmente
- [ ] Verificar registro no banco
- [ ] Fazer deploy
- [ ] Testar em produção
- [ ] Verificar registro no banco (produção)

---

## 📝 PRÓXIMOS PASSOS (OPCIONAL)

Após implementar o básico, você pode adicionar:

1. **Sistema de Email:**
   - Enviar email quando formulário for enviado
   - Notificar Dra. Giovana

2. **Painel Admin:**
   - Visualizar mensagens recebidas
   - Marcar como lida
   - Responder mensagens

3. **Validação Avançada:**
   - Rate limiting (evitar spam)
   - CAPTCHA
   - Validação de email real

4. **Backup e Segurança:**
   - Backup automático
   - Criptografia de dados sensíveis
   - Logs de acesso

---

## 🔗 LINKS ÚTEIS

- **Neon:** https://neon.tech
- **Documentação Neon:** https://neon.tech/docs
- **Documentação PostgreSQL:** https://www.postgresql.org/docs/
- **Next.js API Routes:** https://nextjs.org/docs/app/building-your-application/routing/route-handlers
- **Zod (Validação):** https://zod.dev

---

## 📊 RESUMO

**Plataforma Escolhida:** Neon  
**Banco de Dados:** PostgreSQL  
**Cliente:** `@neondatabase/serverless`  
**Tabela:** `contact_submissions`  
**API Route:** `/api/contact`  
**Status:** ⏳ Aguardando implementação

---

**Última Atualização:** 27/01/2025  
**Próxima Etapa:** Seguir checklist e implementar passo a passo

