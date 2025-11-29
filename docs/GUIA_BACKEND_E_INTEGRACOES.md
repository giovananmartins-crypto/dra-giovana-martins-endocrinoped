# GUIA COMPLETO: BACKEND E INTEGRAÇÕES
## Site Dra. Giovana Martins - Endocrinologista Pediátrica

**Data de Criação:** 27/01/2025  
**Versão:** 2.1  
**Status:** ✅ 100% Implementado e em Produção

**🌐 DOMÍNIO:** `giovanaendocrinoped.com.br` ✅ **CONFIGURADO E NO AR**  
**🌐 URL:** https://www.giovanaendocrinoped.com.br ✅ **ONLINE**

---

## 📋 ÍNDICE

1. [Visão Geral](#visão-geral)
2. [Configurações de Domínio e Hosting](#1-configurações-de-domínio-e-hosting)
3. [Google Services](#2-google-services)
4. [Banco de Dados](#3-banco-de-dados)
5. [Sistema de Email](#4-sistema-de-email)
6. [API Routes e Backend](#5-api-routes-e-backend)
7. [Variáveis de Ambiente](#6-variáveis-de-ambiente)
8. [Integrações Adicionais](#7-integrações-adicionais)
9. [Checklist Completo](#8-checklist-completo)
10. [Ordem de Implementação Recomendada](#9-ordem-de-implementação-recomendada)

---

## VISÃO GERAL

Este documento detalha **TUDO** que precisa ser configurado e preparado **FORA DO CURSOR** antes de implementar o backend no código. Cada seção inclui:

- ✅ O que precisa ser feito
- 📝 Onde fazer
- 🔑 O que você vai precisar obter (IDs, chaves, credenciais)
- 📚 Links e recursos úteis
- ⚠️ Avisos importantes

---

## 1. CONFIGURAÇÕES DE DOMÍNIO E HOSTING

### 1.1 Escolher e Configurar Domínio

**Status Atual:** ✅ **CONFIGURADO E NO AR**  
**URL:** https://www.giovanaendocrinoped.com.br ✅ **ONLINE**

#### O que fazer:

1. **Verificar propriedade do domínio**
   - Confirmar que você tem acesso ao registro do domínio
   - Verificar onde está registrado (Registro.br, GoDaddy, etc.)
   - Ter acesso ao painel de controle do domínio

2. **Configurar DNS (se necessário)**
   - Apontar domínio para o serviço de hosting escolhido
   - Configurar registros A, AAAA, CNAME conforme necessário

#### O que você vai precisar:
- ✅ Acesso ao painel do registro de domínio
- ✅ Credenciais de acesso

#### Links úteis:
- [Registro.br - Gerenciamento de DNS](https://registro.br/)
- [Documentação Vercel - Configuração de Domínio](https://vercel.com/docs/concepts/projects/domains)

---

### 1.2 Escolher Serviço de Hosting

**Recomendação:** Vercel (ideal para Next.js) ou Netlify

#### Opção 1: Vercel (RECOMENDADO)

**Por que escolher:**
- ✅ Otimizado para Next.js (criado pela equipe do Next.js)
- ✅ Deploy automático via Git
- ✅ SSL gratuito automático
- ✅ CDN global incluído
- ✅ Variáveis de ambiente fáceis de configurar
- ✅ Plano gratuito generoso

**O que fazer:**

1. **Criar conta na Vercel**
   - Acessar: https://vercel.com
   - Criar conta (pode usar GitHub, GitLab ou email)
   - Verificar email

2. **Conectar repositório Git**
   - Conectar GitHub/GitLab/Bitbucket
   - Autorizar acesso ao repositório do projeto

3. **Configurar projeto**
   - Framework Preset: Next.js (detecta automaticamente)
   - Root Directory: `/` (raiz do projeto)
   - Build Command: `npm run build` (padrão)
   - Output Directory: `.next` (padrão)

4. **Configurar domínio** ✅ **CONCLUÍDO**
   - ✅ Domínio adicionado: `giovanaendocrinoped.com.br`
   - ✅ Domínio www configurado: `www.giovanaendocrinoped.com.br`
   - ✅ DNS configurado
   - ✅ SSL emitido automaticamente
   - ✅ Site no ar: https://www.giovanaendocrinoped.com.br

#### Opção 2: Netlify

**Por que escolher:**
- ✅ Boa integração com Git
- ✅ SSL gratuito
- ✅ CDN incluído
- ✅ Plano gratuito disponível

**O que fazer:**
- Criar conta em https://netlify.com
- Conectar repositório
- Configurar build settings
- Adicionar domínio customizado

#### O que você vai precisar:
- ✅ Conta no serviço de hosting escolhido
- ✅ Acesso ao repositório Git do projeto
- ✅ Acesso ao painel do domínio para configurar DNS

#### Links úteis:
- [Vercel - Getting Started](https://vercel.com/docs/getting-started)
- [Netlify - Getting Started](https://docs.netlify.com/)
- [Comparação Vercel vs Netlify](https://vercel.com/compare/vercel-vs-netlify)

---

### 1.3 Configurar SSL (Certificado HTTPS)

**Status:** Automático na maioria dos serviços modernos

#### O que fazer:

**Se usar Vercel/Netlify:**
- ✅ SSL é configurado automaticamente
- Não precisa fazer nada manualmente

**Se usar outro serviço:**
- Verificar se oferece SSL automático (Let's Encrypt)
- Ou configurar certificado manualmente

#### O que você vai precisar:
- Nada (automático na maioria dos casos)

---

### 1.4 Configurar CDN (Content Delivery Network)

**Status:** Incluído automaticamente no Vercel/Netlify

#### O que fazer:

**Se usar Vercel/Netlify:**
- ✅ CDN global já está incluído
- Não precisa configuração adicional

**Se usar outro serviço:**
- Verificar se CDN está incluído
- Ou configurar CDN separado (Cloudflare, etc.)

---

## 2. GOOGLE SERVICES

### 2.1 Google Search Console (GSC)

**Status:** ✅ **CONCLUÍDO** (27/01/2025)

**O que é:** Ferramenta do Google para monitorar performance do site nos resultados de busca

#### ✅ O que foi feito:

1. **✅ Criar conta Google Search Console**
   - Conta criada e configurada

2. **✅ Adicionar propriedade (site)**
   - Propriedade adicionada: `https://www.giovanaendocrinoped.com.br`
   - Tipo: Prefixo do URL

3. **✅ Verificar propriedade**
   - **Método utilizado: DNS** (Registro.br)
   - Registro TXT adicionado no DNS
   - Propriedade verificada com sucesso

4. **✅ Enviar Sitemap**
   - Sitemap enviado: `https://www.giovanaendocrinoped.com.br/sitemap.xml`
   - **Total de páginas encontradas: 23**
     - 11 páginas estáticas
     - 12 páginas do blog
   - Sitemap processado com sucesso pelo Google

#### O que fazer (se ainda não fez):

1. **Criar conta Google Search Console**
   - Acessar: https://search.google.com/search-console
   - Fazer login com conta Google
   - Se não tiver conta Google, criar uma

2. **Adicionar propriedade (site)**
   - Clicar em "Adicionar propriedade"
   - Escolher tipo: "Prefixo do URL" (recomendado)
   - Inserir: `https://www.giovanaendocrinoped.com.br`
   - OU escolher "Domínio" e inserir: `giovanaendocrinoped.com.br`

3. **Verificar propriedade**
   - **Método 1: Arquivo HTML** (mais fácil)
     - Baixar arquivo HTML fornecido pelo Google
     - Fazer upload na pasta `public/` do projeto
     - Fazer commit e push
     - Clicar em "Verificar" no GSC
   - **Método 2: Meta tag HTML**
     - Copiar meta tag fornecida pelo Google
     - Adicionar no `<head>` do layout
     - Fazer commit e push
     - Clicar em "Verificar" no GSC
   - **Método 3: DNS** (mais complexo) ⭐ **USADO NESTE PROJETO**
     - Adicionar registro TXT no DNS do domínio
     - Aguardar propagação
     - Clicar em "Verificar" no GSC

4. **Enviar Sitemap**
   - Após verificação, ir em "Sitemaps"
   - Adicionar: `https://www.giovanaendocrinoped.com.br/sitemap.xml`
   - Enviar

#### O que você vai precisar:
- ✅ Conta Google (Gmail)
- ✅ Acesso ao site para fazer upload do arquivo de verificação
- ✅ Arquivo HTML de verificação (fornecido pelo Google)

#### Links úteis:
- [Google Search Console - Guia Iniciante](https://support.google.com/webmasters/answer/9128668)
- [Como Verificar Propriedade no GSC](https://support.google.com/webmasters/answer/9008080)

---

### 2.2 Google Analytics 4 (GA4)

**O que é:** Ferramenta de análise de tráfego e comportamento dos usuários

#### O que fazer:

1. **Criar conta Google Analytics**
   - Acessar: https://analytics.google.com
   - Fazer login com conta Google (mesma do GSC, se possível)
   - Clicar em "Começar a medir"

2. **Criar propriedade (site)**
   - Nome da conta: "Dra. Giovana Martins" (ou nome desejado)
   - Nome da propriedade: "Site Dra. Giovana Martins"
   - Fuso horário: (GMT-03:00) Brasília
   - Moeda: Real brasileiro (BRL)
   - Informações de negócio:
     - Setor: Saúde / Cuidados de saúde
     - Tamanho: Pequeno
     - Como pretende usar o GA4: Medir engajamento e conversões

3. **Configurar fluxo de dados (Data Stream)**
   - Tipo: Web
   - URL do site: `https://www.giovanaendocrinoped.com.br`
   - Nome do fluxo: "Site Principal"
   - Clicar em "Criar fluxo"

4. **Obter Measurement ID**
   - Após criar o fluxo, você verá o **Measurement ID**
   - Formato: `G-XXXXXXXXXX`
   - **ANOTAR ESTE ID** - será usado no código

5. **Configurar eventos e conversões (opcional, pode fazer depois)**
   - Eventos de conversão: envio de formulário, cliques em WhatsApp, etc.

#### O que você vai precisar:
- ✅ Conta Google
- ✅ Measurement ID (formato: `G-XXXXXXXXXX`)

#### Links úteis:
- [Google Analytics 4 - Guia Iniciante](https://support.google.com/analytics/answer/9304153)
- [Como Configurar GA4](https://support.google.com/analytics/answer/9304153)

---

### 2.3 Google Tag Manager (GTM)

**O que é:** Gerenciador de tags que facilita adicionar scripts sem modificar código

#### O que fazer:

1. **Criar conta Google Tag Manager**
   - Acessar: https://tagmanager.google.com
   - Fazer login com conta Google
   - Clicar em "Criar conta"

2. **Configurar conta**
   - Nome da conta: "Dra. Giovana Martins" (ou nome desejado)
   - País: Brasil
   - Clicar em "Continuar"

3. **Criar container**
   - Nome do container: "Site Principal"
   - Tipo: Web
   - Clicar em "Criar"

4. **Aceitar Termos de Uso**
   - Ler e aceitar os termos

5. **Obter GTM ID**
   - Após criar, você verá o **GTM ID**
   - Formato: `GTM-XXXXXXX`
   - **ANOTAR ESTE ID** - será usado no código

6. **Instalar código GTM no site** (será feito no código)
   - O código será adicionado automaticamente via componente GTM existente

7. **Configurar tags no GTM** (pode fazer depois)
   - Adicionar tag do Google Analytics 4
   - Adicionar outras tags conforme necessário

#### O que você vai precisar:
- ✅ Conta Google
- ✅ GTM ID (formato: `GTM-XXXXXXX`)

#### Links úteis:
- [Google Tag Manager - Guia Iniciante](https://support.google.com/tagmanager/answer/6102821)
- [Como Instalar GTM](https://support.google.com/tagmanager/answer/6103696)

---

## 3. BANCO DE DADOS

### 3.1 Escolher Banco de Dados

**Recomendações:**

#### Opção 1: PostgreSQL (RECOMENDADO para produção)

**Por que escolher:**
- ✅ Robusto e confiável
- ✅ Suporte completo a relacionamentos
- ✅ Boa performance
- ✅ Gratuito em muitos serviços (Vercel Postgres, Supabase, Railway)

**Serviços recomendados:**
- **Vercel Postgres** (se usar Vercel) - Integração perfeita
- **Supabase** - PostgreSQL gratuito + extras (auth, storage)
- **Railway** - PostgreSQL fácil de configurar
- **Neon** - PostgreSQL serverless

#### Opção 2: MongoDB (Alternativa)

**Por que escolher:**
- ✅ Flexível (NoSQL)
- ✅ Fácil de começar
- ✅ Plano gratuito generoso

**Serviços recomendados:**
- **MongoDB Atlas** - Plano gratuito disponível

#### Opção 3: SQLite (Apenas para desenvolvimento/teste)

**Por que escolher:**
- ✅ Não precisa servidor
- ✅ Simples para começar
- ❌ Não recomendado para produção

---

### 3.2 Configurar Banco de Dados (PostgreSQL - Exemplo com Supabase)

#### O que fazer:

1. **Criar conta no Supabase**
   - Acessar: https://supabase.com
   - Clicar em "Start your project"
   - Fazer login com GitHub (recomendado) ou email

2. **Criar novo projeto**
   - Nome do projeto: "giovana-endocrinoped" (ou nome desejado)
   - Senha do banco: **CRIAR SENHA FORTE E ANOTAR**
   - Região: South America (São Paulo) - mais próximo
   - Plano: Free (gratuito) - suficiente para começar
   - Clicar em "Create new project"

3. **Aguardar provisionamento** (2-3 minutos)

4. **Obter credenciais de conexão**
   - Ir em "Settings" > "Database"
   - Seção "Connection string"
   - Copiar "Connection string" (URI)
   - Formato: `postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres`
   - **ANOTAR ESTA STRING** (será variável de ambiente)

5. **Obter chaves da API** (opcional, para usar Supabase client)
   - Ir em "Settings" > "API"
   - Anotar:
     - `Project URL`: `https://[PROJECT-REF].supabase.co`
     - `anon public` key
     - `service_role` key (manter segredo!)

#### Estrutura de tabelas sugeridas:

**Tabela: `contact_submissions`**
```sql
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'pending' -- pending, contacted, archived
);
```

**Tabela: `blog_posts`** (se migrar blog para banco)
```sql
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(500) NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  category VARCHAR(100),
  tags TEXT[],
  featured_image VARCHAR(500),
  published_at TIMESTAMP,
  updated_at TIMESTAMP,
  author_name VARCHAR(255),
  meta_title VARCHAR(255),
  meta_description TEXT,
  keywords TEXT[]
);
```

#### O que você vai precisar:
- ✅ Conta no serviço de banco escolhido
- ✅ String de conexão (Connection String)
- ✅ Senha do banco de dados
- ✅ URL da API (se usar Supabase)
- ✅ Chaves da API (se usar Supabase)

#### Links úteis:
- [Supabase - Getting Started](https://supabase.com/docs/guides/getting-started)
- [Vercel Postgres - Documentation](https://vercel.com/docs/storage/vercel-postgres)
- [Railway - PostgreSQL](https://railway.app/template/postgresql)
- [Neon - Getting Started](https://neon.tech/docs/get-started-with-neon)

---

## 4. SISTEMA DE EMAIL

### 4.1 Escolher Serviço de Email

**Recomendações:**

#### Opção 1: Resend (RECOMENDADO)

**Por que escolher:**
- ✅ Focado em emails transacionais
- ✅ API simples e moderna
- ✅ 3.000 emails/mês grátis
- ✅ Boa integração com Next.js
- ✅ Domínio próprio fácil de configurar

**O que fazer:**

1. **Criar conta no Resend**
   - Acessar: https://resend.com
   - Fazer login com GitHub ou email
   - Verificar email

2. **Obter API Key**
   - Ir em "API Keys"
   - Clicar em "Create API Key"
   - Nome: "Site Dra. Giovana"
   - Permissão: "Sending access"
   - Copiar a chave (só aparece uma vez!)
   - **ANOTAR ESTA CHAVE** - será variável de ambiente

3. **Configurar domínio (opcional, mas recomendado)**
   - Ir em "Domains"
   - Adicionar domínio: `giovanaendocrinoped.com.br`
   - Seguir instruções para configurar DNS
   - Aguardar verificação

4. **Criar email de envio**
   - Email padrão: `noreply@giovanaendocrinoped.com.br`
   - Ou: `contato@giovanaendocrinoped.com.br`

#### Opção 2: SendGrid

**Por que escolher:**
- ✅ 100 emails/dia grátis
- ✅ Confiável e robusto
- ✅ Boa documentação

**O que fazer:**
- Criar conta em https://sendgrid.com
- Verificar email
- Criar API Key
- Configurar domínio (opcional)

#### Opção 3: AWS SES (Amazon Simple Email Service)

**Por que escolher:**
- ✅ Muito barato (quase grátis)
- ✅ Escalável
- ❌ Configuração mais complexa

#### Opção 4: Nodemailer com SMTP (Gmail, Outlook, etc.)

**Por que escolher:**
- ✅ Usa email pessoal existente
- ✅ Gratuito
- ❌ Limites de envio (Gmail: 500/dia)
- ❌ Menos profissional

**Se usar Gmail:**
- Ativar "Senha de app" (não usar senha normal)
- Ir em: https://myaccount.google.com/apppasswords
- Gerar senha de app
- Usar como senha SMTP

#### O que você vai precisar:
- ✅ Conta no serviço de email escolhido
- ✅ API Key ou credenciais SMTP
- ✅ Email de envio configurado

#### Links úteis:
- [Resend - Getting Started](https://resend.com/docs/getting-started)
- [SendGrid - Getting Started](https://docs.sendgrid.com/for-developers/sending-email/getting-started-with-the-sendgrid-v3-api)
- [Nodemailer - Documentation](https://nodemailer.com/about/)

---

### 4.2 Configurar Templates de Email

**O que fazer:**

1. **Definir templates necessários:**
   - Email de confirmação para o usuário (formulário recebido)
   - Email de notificação para a Dra. Giovana (novo contato)
   - Email de agendamento (se implementar)

2. **Criar templates HTML** (será feito no código)
   - Design responsivo
   - Incluir logo e informações de contato
   - Texto claro e profissional

#### O que você vai precisar:
- ✅ Conteúdo dos emails (textos)
- ✅ Logo em formato adequado para email

---

## 5. API ROUTES E BACKEND

### 5.1 Estrutura de API Routes (Next.js)

**O que será criado no código:**

1. **`/app/api/contact/route.ts`** - Endpoint para formulário de contato
   - Recebe dados do formulário
   - Valida dados
   - Salva no banco de dados
   - Envia emails (confirmação + notificação)
   - Retorna resposta

2. **`/app/api/blog/route.ts`** (opcional) - Endpoint para blog
   - Se migrar blog para banco de dados
   - Buscar posts
   - Filtrar por categoria/tags

3. **`/lib/db.ts`** - Cliente de banco de dados
   - Configuração de conexão
   - Funções helper para queries

4. **`/lib/email.ts`** - Cliente de email
   - Configuração do serviço de email
   - Funções para enviar emails

#### O que você vai precisar:
- ✅ Nada (será criado no código)
- ✅ Mas precisa ter banco e email configurados primeiro

---

## 6. VARIÁVEIS DE AMBIENTE

### 6.1 Arquivo `.env.local`

**O que fazer:**

Criar arquivo `.env.local` na raiz do projeto com todas as variáveis necessárias.

**⚠️ IMPORTANTE:** Este arquivo NÃO deve ser commitado no Git (já está no .gitignore)

#### Variáveis necessárias:

```bash
# Site URL
NEXT_PUBLIC_SITE_URL=https://www.giovanaendocrinoped.com.br

# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Analytics 4 (opcional, se não usar GTM)
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX

# Banco de Dados (PostgreSQL - Supabase exemplo)
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres

# Supabase (se usar)
NEXT_PUBLIC_SUPABASE_URL=https://[PROJECT-REF].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[ANON_KEY]
SUPABASE_SERVICE_ROLE_KEY=[SERVICE_ROLE_KEY]

# Email (Resend exemplo)
RESEND_API_KEY=re_xxxxxxxxxxxxx
EMAIL_FROM=noreply@giovanaendocrinoped.com.br
EMAIL_TO=contato@giovanaendocrinoped.com.br

# Email (SendGrid exemplo - alternativa)
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=noreply@giovanaendocrinoped.com.br

# Email (SMTP exemplo - alternativa)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASSWORD=sua-senha-de-app
SMTP_FROM=noreply@giovanaendocrinoped.com.br

# Segurança (gerar secretos únicos)
NEXTAUTH_SECRET=[GERAR_SECRETO_ALEATORIO]
NEXTAUTH_URL=https://www.giovanaendocrinoped.com.br
```

#### Como gerar secrets aleatórios:

```bash
# No terminal (Linux/Mac)
openssl rand -base64 32

# Ou usar gerador online
# https://generate-secret.vercel.app/32
```

#### O que você vai precisar:
- ✅ Todas as chaves e credenciais listadas acima
- ✅ Arquivo `.env.local` criado na raiz do projeto

---

### 6.2 Configurar Variáveis no Hosting (Vercel)

**O que fazer:**

1. **No painel da Vercel:**
   - Ir em "Settings" > "Environment Variables"
   - Adicionar cada variável uma por uma
   - Marcar para quais ambientes (Production, Preview, Development)

2. **Variáveis a adicionar:**
   - Todas as variáveis do `.env.local`
   - **NÃO incluir** `NEXT_PUBLIC_` nas variáveis privadas (só as públicas)

#### O que você vai precisar:
- ✅ Acesso ao painel da Vercel
- ✅ Todas as credenciais coletadas

---

## 7. INTEGRAÇÕES ADICIONAIS

### 7.1 Google Maps API (Opcional)

**Status Atual:** Usando iframe embed (funciona sem API)

**Se quiser melhorar:**

1. **Criar projeto no Google Cloud**
   - Acessar: https://console.cloud.google.com
   - Criar novo projeto: "Site Dra. Giovana"
   - Habilitar "Maps JavaScript API"
   - Habilitar "Geocoding API" (se necessário)

2. **Criar API Key**
   - Ir em "APIs & Services" > "Credentials"
   - Criar credencial > "API Key"
   - Restringir por HTTP referrer: `giovanaendocrinoped.com.br/*`
   - **ANOTAR API KEY**

#### O que você vai precisar:
- ✅ Conta Google Cloud
- ✅ API Key do Google Maps
- ✅ Cartão de crédito (pode ter crédito gratuito)

#### Links úteis:
- [Google Maps Platform - Getting Started](https://developers.google.com/maps/get-started)

---

### 7.2 Sistema de Newsletter (Opcional)

**Recomendações:**

- **Mailchimp** - Popular, plano gratuito
- **ConvertKit** - Focado em criadores
- **SendGrid Marketing** - Se já usar SendGrid

**O que fazer:**
- Criar conta no serviço escolhido
- Obter API Key
- Configurar lista de emails

---

### 7.3 Sistema de Comentários (Opcional)

**Recomendações:**

- **Disqus** - Popular, fácil de integrar
- **Giscus** - Baseado em GitHub Discussions (gratuito)
- **Utterances** - Baseado em GitHub Issues (gratuito)

**O que fazer:**
- Criar conta/configuração no serviço escolhido
- Obter script de integração

---

## 8. CHECKLIST COMPLETO

### ✅ Fase 1: Domínio e Hosting

- [x] Confirmar acesso ao domínio `giovanaendocrinoped.com.br` ✅ **CONCLUÍDO**
- [x] Escolher serviço de hosting (Vercel recomendado) ✅ **CONCLUÍDO**
- [x] Criar conta no serviço de hosting ✅ **CONCLUÍDO**
- [x] Conectar repositório Git ao hosting ✅ **CONCLUÍDO**
- [x] Configurar domínio no hosting ✅ **CONCLUÍDO**
- [x] Configurar DNS do domínio ✅ **CONCLUÍDO**
- [x] Verificar SSL (deve ser automático) ✅ **CONCLUÍDO**
- [x] Testar acesso ao site via domínio ✅ **CONCLUÍDO** (https://www.giovanaendocrinoped.com.br)

### ✅ Fase 2: Google Services

- [x] Criar conta Google (se não tiver) ✅ **CONCLUÍDO**
- [x] Criar propriedade no Google Search Console ✅ **CONCLUÍDO** (27/01/2025)
- [x] Verificar propriedade no GSC (método DNS usado) ✅ **CONCLUÍDO**
- [x] Enviar sitemap no GSC (27 rotas encontradas) ✅ **CONCLUÍDO**
- [x] Criar conta Google Tag Manager ✅ **CONCLUÍDO** (GTM-KSH937GZ)
- [x] Configurar GTM no site ✅ **CONCLUÍDO** (container publicado)
- [x] Criar conta Google Analytics 4 ✅ **CONCLUÍDO** (G-184NEKF906)
- [x] Configurar GA4 via GTM ✅ **CONCLUÍDO** (5 tags GA4 Events)
- [x] Criar conta Google Ads ✅ **CONCLUÍDO** (AW-17761516445)
- [x] Configurar conversões Google Ads via GTM ✅ **CONCLUÍDO** (4 conversões)
- [ ] Criar propriedade no Google Analytics 4
- [ ] Obter Measurement ID do GA4 (`G-XXXXXXXXXX`)
- [ ] Criar conta no Google Tag Manager
- [ ] Obter GTM ID (`GTM-XXXXXXX`)
- [ ] Configurar tags no GTM (GA4, etc.)

### ✅ Fase 3: Banco de Dados

- [ ] Escolher serviço de banco (Supabase recomendado)
- [ ] Criar conta no serviço escolhido
- [ ] Criar projeto/banco de dados
- [ ] Obter string de conexão (DATABASE_URL)
- [ ] Criar tabelas necessárias (contact_submissions, etc.)
- [ ] Testar conexão com banco

### ✅ Fase 4: Sistema de Email

- [ ] Escolher serviço de email (Resend recomendado)
- [ ] Criar conta no serviço escolhido
- [ ] Obter API Key
- [x] Configurar domínio no serviço ✅ **CONCLUÍDO**
- [x] Verificar domínio ✅ **CONCLUÍDO** (https://www.giovanaendocrinoped.com.br)
- [ ] Definir email de envio (noreply@... ou contato@...)
- [ ] Testar envio de email

### ✅ Fase 5: Variáveis de Ambiente

- [ ] Criar arquivo `.env.local` na raiz do projeto
- [ ] Adicionar `NEXT_PUBLIC_SITE_URL`
- [ ] Adicionar `NEXT_PUBLIC_GTM_ID`
- [ ] Adicionar `DATABASE_URL`
- [ ] Adicionar credenciais de email (RESEND_API_KEY, etc.)
- [ ] Gerar e adicionar `NEXTAUTH_SECRET` (se necessário)
- [x] Configurar variáveis no painel do hosting (Vercel) ✅ **CONCLUÍDO**
- [ ] Verificar que `.env.local` está no `.gitignore`

### ✅ Fase 6: Integrações Opcionais

- [ ] Google Maps API (se quiser melhorar o mapa)
- [ ] Sistema de Newsletter (se necessário)
- [ ] Sistema de Comentários (se necessário)

---

## 9. ORDEM DE IMPLEMENTAÇÃO RECOMENDADA

### Semana 1: Infraestrutura Base

**Dia 1-2: Domínio e Hosting**
1. Configurar hosting (Vercel)
2. Conectar repositório
3. Configurar domínio
4. Testar deploy

**Dia 3-4: Google Services**
1. Configurar Google Search Console
2. Configurar Google Analytics 4
3. Configurar Google Tag Manager
4. Adicionar IDs no código

**Dia 5: Banco de Dados**
1. Criar conta no Supabase (ou escolhido)
2. Criar banco de dados
3. Criar tabelas
4. Testar conexão

### Semana 2: Email e Backend

**Dia 1-2: Sistema de Email**
1. Criar conta no Resend (ou escolhido)
2. Configurar API Key
3. Configurar domínio (opcional)
4. Testar envio

**Dia 3-5: Implementação no Código**
1. Criar API routes
2. Integrar banco de dados
3. Integrar sistema de email
4. Testar formulário end-to-end
5. Deploy e testes finais

---

## 📝 RESUMO: O QUE VOCÊ PRECISA COLETAR

### Credenciais e IDs Necessários:

1. **Hosting:**
   - ✅ Acesso ao painel do hosting
   - ✅ Acesso ao repositório Git

2. **Google Services:**
   - ✅ Google Search Console: **CONCLUÍDO** (verificado via DNS, sitemap enviado)
   - ✅ Google Tag Manager: **CONCLUÍDO** (GTM-KSH937GZ, container publicado)
   - ✅ Google Analytics 4: **CONCLUÍDO** (G-184NEKF906, configurado via GTM)
   - ✅ Google Ads: **CONCLUÍDO** (AW-17761516445, 4 conversões configuradas)
   - ✅ Sitemap enviado: 23 páginas (11 estáticas + 12 blog)
   - ✅ GTM ID: `GTM-KSH937GZ` (configurado)
   - ✅ GA4 Measurement ID: `G-184NEKF906` (configurado)
   - ✅ Google Ads Account ID: `AW-17761516445` (configurado)

3. **Banco de Dados:**
   - ✅ DATABASE_URL: `postgresql://...`
   - ✅ Senha do banco de dados
   - ✅ (Se Supabase) SUPABASE_URL e SUPABASE_ANON_KEY

4. **Email:**
   - ✅ RESEND_API_KEY (ou SENDGRID_API_KEY, ou credenciais SMTP)
   - ✅ Email de envio configurado

5. **Segurança:**
   - ✅ NEXTAUTH_SECRET (gerar aleatório)

---

## 🔒 SEGURANÇA E BOAS PRÁTICAS

### ⚠️ IMPORTANTE:

1. **NUNCA commitar credenciais no Git**
   - ✅ `.env.local` já está no `.gitignore`
   - ✅ Verificar que não há credenciais hardcoded no código

2. **Usar variáveis de ambiente sempre**
   - ✅ Todas as chaves e senhas devem ser variáveis de ambiente
   - ✅ Nunca colocar diretamente no código

3. **Restringir API Keys quando possível**
   - ✅ Google Maps: restringir por domínio
   - ✅ Resend: restringir por domínio
   - ✅ Outros serviços: verificar opções de restrição

4. **Backup de credenciais**
   - ✅ Salvar todas as credenciais em local seguro
   - ✅ Usar gerenciador de senhas (1Password, LastPass, etc.)

---

## 📞 SUPORTE E RECURSOS

### Documentação Oficial:

- [Next.js - Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
- [Vercel - Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Supabase - Documentation](https://supabase.com/docs)
- [Resend - Documentation](https://resend.com/docs)

### Comunidade:

- [Next.js Discord](https://nextjs.org/discord)
- [Vercel Community](https://github.com/vercel/next.js/discussions)

---

## ✅ PRÓXIMOS PASSOS

Após coletar todas as credenciais e configurar os serviços:

1. ✅ Criar arquivo `.env.local` com todas as variáveis
2. ✅ Implementar API routes no código
3. ✅ Integrar banco de dados
4. ✅ Integrar sistema de email
5. ✅ Testar tudo localmente
6. ✅ Fazer deploy
7. ✅ Configurar variáveis no hosting
8. ✅ Testar em produção

---

**Última Atualização:** 27/01/2025  
**Versão do Documento:** 1.0

