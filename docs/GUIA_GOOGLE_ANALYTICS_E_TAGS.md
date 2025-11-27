# GUIA COMPLETO: GOOGLE ANALYTICS, GOOGLE ADS E GOOGLE TAG MANAGER
## Site Dra. Giovana Martins - Endocrinologista Pediátrica

**Data de Criação:** 27/01/2025  
**Versão:** 2.0  
**Status:** Fase 4 Concluída - Pronto para Testes  
**Última Atualização:** 27/01/2025

---

## ⚠️ ATENÇÃO CRÍTICA: EVITAR DUPLICAÇÃO DE EVENTOS

**IMPORTANTE:** Ao configurar o fluxo de dados no GA4, **DESMARCAR a opção "Métrica Otimizada"**.

**Por quê?**
- A métrica otimizada rastreia automaticamente formulários, cliques, rolagens, etc.
- Como vamos criar eventos customizados via GTM, isso causaria **duplicação**
- Exemplo: Formulário seria rastreado 2x (uma vez pela métrica otimizada, outra pelo nosso evento customizado)

**Solução:**
- ✅ **DESMARCAR** métrica otimizada no GA4 (toggle OFF)
- ✅ Criar todos os eventos via GTM (controle total)
- ✅ Sem duplicação garantida

**Lembre-se:** Usamos GTM como centralizador para evitar duplicação!

---

## 🎯 STATUS ATUAL

### ✅ O QUE JÁ FOI FEITO

- ✅ **GTM Instalado no Código** (27/01/2025)
  - GTM ID: `GTM-KSH937GZ` configurado
  - Código oficial do Google implementado em `app/layout.tsx`
  - Script no head e noscript no body
  - `.env.local` criado com `NEXT_PUBLIC_GTM_ID=GTM-KSH937GZ`

- ✅ **Arquivo Helper Criado**
  - `lib/analytics.ts` criado com funções prontas
  - Funções: `whatsappClick()`, `phoneCall()`, `formSubmit()`, `doctoraliaClick()`, `ctaClick()`

- ✅ **GTM Configurado e Publicado** (26/11/2025)
  - 3 variáveis criadas (Event Category, Event Label, Event Value)
  - Tag GA4 Configuration configurada (`G-184NEKF906`)
  - Tag Google Ads - Tag do Google configurada (`AW-17761516445`)
  - 5 acionadores criados (WhatsApp, Phone, Form, Doctoralia, CTA)
  - 5 tags GA4 Events criadas
  - 4 tags Google Ads Conversions criadas
  - Container publicado (Versão 2)

- ✅ **Rastreamento Implementado no Código** (27/01/2025)
  - Componentes de analytics criados (WhatsAppLink, PhoneLink, DoctoraliaLink, CTALink)
  - Eventos implementados em todas as páginas:
    * Footer (WhatsApp, Doctoralia)
    * Header (CTA "Agendar Consulta")
    * CTASection (WhatsApp, Phone, CTA)
    * ContactSection (Form Submit)
    * FAQSection (WhatsApp)
    * Página Contato (WhatsApp, Phone - 4 locais)
    * 5 páginas de serviços (WhatsApp, Phone, CTAs - 3 locais cada)
  - Total: ~50+ pontos de rastreamento implementados

### ⏳ O QUE FALTA FAZER

- ⏳ **FASE 5: Testes e Verificação** (PRÓXIMO PASSO)
  - ⏳ Aguardar deploy na Vercel (após commit/push)
  - ⏳ Testar GTM Preview Mode
  - ⏳ Verificar eventos no console do navegador
  - ⏳ Verificar eventos no GA4 (Tempo real)
  - ⏳ Verificar conversões no Google Ads
  - ⏳ Confirmar que não há duplicação de eventos

---

## 📋 ÍNDICE

1. [Visão Geral e Arquitetura Recomendada](#1-visão-geral-e-arquitetura-recomendada)
2. [Por que Usar GTM como Centralizador](#2-por-que-usar-gtm-como-centralizador)
3. [Configuração Passo a Passo](#3-configuração-passo-a-passo)
4. [Eventos Personalizados para Rastreamento](#4-eventos-personalizados-para-rastreamento)
5. [Integração com Doctoralia](#5-integração-com-doctoralia)
6. [Verificação e Testes](#6-verificação-e-testes)
7. [Troubleshooting](#7-troubleshooting)
8. [Checklist Completo](#8-checklist-completo)

---

## 1. VISÃO GERAL E ARQUITETURA RECOMENDADA

### 🎯 Objetivo

Rastrear conversões importantes sem duplicação:
- ✅ Cliques no WhatsApp
- ✅ Ligações telefônicas
- ✅ Agendamentos no Doctoralia (se possível)
- ✅ Envios de formulário de contato
- ✅ Cliques em CTAs principais

### 🏗️ Arquitetura Recomendada

```
┌─────────────────────────────────────────────────┐
│           GOOGLE TAG MANAGER (GTM)               │
│         (Centralizador - ÚNICA FONTE)            │
└─────────────────────────────────────────────────┘
                    │
        ┌───────────┼───────────┐
        │           │           │
        ▼           ▼           ▼
    ┌───────┐  ┌────────┐  ┌──────────┐
    │  GA4  │  │Google  │  │ Outras   │
    │       │  │  Ads   │  │  Tags    │
    └───────┘  └────────┘  └──────────┘
```

**⚠️ REGRA DE OURO:** 
- **NUNCA** instalar GA4 diretamente no código
- **NUNCA** instalar Google Ads diretamente no código
- **SEMPRE** usar GTM como intermediário
- **SEMPRE** configurar eventos uma única vez no GTM

### ✅ Vantagens desta Arquitetura

1. **Sem Duplicação:** Eventos são disparados uma vez, GTM distribui
2. **Fácil Gerenciamento:** Todas as tags em um lugar
3. **Sem Deploy:** Mudanças no GTM não precisam de deploy
4. **Testes Rápidos:** Preview mode do GTM para testar
5. **Flexibilidade:** Adicionar/remover tags sem mexer no código

---

## 2. POR QUE USAR GTM COMO CENTRALIZADOR

### ❌ O QUE NÃO FAZER (Evita Duplicação)

**Cenário ERRADO:**
```html
<!-- ❌ NÃO FAZER ISSO -->
<script>
  gtag('event', 'whatsapp_click', {...}); // GA4 direto
  gtag('event', 'conversion', {...});     // Google Ads direto
</script>
```

**Problema:** Eventos são disparados 2x (uma para cada serviço)

### ✅ O QUE FAZER (Arquitetura Correta)

**Cenário CORRETO:**
```html
<!-- ✅ FAZER ISSO -->
<script>
  dataLayer.push({
    'event': 'whatsapp_click',
    'event_category': 'Contact',
    'event_label': 'WhatsApp Button'
  });
</script>
```

**GTM recebe o evento UMA VEZ e distribui para:**
- GA4 (configurado no GTM)
- Google Ads (configurado no GTM)
- Outras tags (se necessário)

---

## 3. CONFIGURAÇÃO PASSO A PASSO

**📌 ORDEM CORRETA:**
1. **FASE 1:** Criar TODAS as contas e obter TODOS os IDs primeiro (GTM, GA4, Google Ads)
2. **FASE 2:** Instalar GTM no site (já feito ✅)
3. **FASE 3:** Voltar ao GTM e configurar TUDO de uma vez (GA4, Google Ads, eventos)
4. **FASE 4:** Implementar rastreamento no código

---

### FASE 1: Criar Contas e Obter IDs (FAZER TUDO PRIMEIRO)

**⚠️ IMPORTANTE:** Criar todas as contas e obter todos os IDs ANTES de configurar no GTM.

#### Passo 1.1: Google Tag Manager

**Status:** ✅ **CONCLUÍDO** (27/01/2025)

- ✅ Conta criada: "Dra. Giovana Martins"
- ✅ Container criado: "Site Principal"
- ✅ GTM ID obtido: `GTM-KSH937GZ`
- ✅ GTM instalado no código
- ✅ `.env.local` configurado

**Próximo passo:** Continuar criando outras contas (GA4 e Google Ads) antes de voltar ao GTM

#### Passo 1.2: Google Analytics 4

**Status:** ⏳ **Em Progresso** - Measurement ID obtido: `G-184NEKF906`

1. **Acessar:** https://analytics.google.com
2. **Criar conta:**
   - Nome: "Dra. Giovana Martins"
   - Clicar em "Próximo"

3. **Criar propriedade:**
   - Nome: "Site Dra. Giovana Martins"
   - Fuso horário: (GMT-03:00) Brasília
   - Moeda: Real brasileiro (BRL)
   - Informações de negócio:
     - Setor: Saúde / Cuidados de saúde
     - Tamanho: Pequeno
   - Clicar em "Próximo"

4. **Configurar fluxo de dados:**
   - Tipo: Web
   - URL: `https://www.giovanaendocrinoped.com.br`
   - Nome: "Site Principal"
   - **⚠️ IMPORTANTE - Métrica Otimizada:**
     - **DESMARCAR** a opção "Métrica otimizada" (toggle OFF)
     - **Motivo:** Vamos criar eventos customizados via GTM
     - **Evita duplicação:** Se ativar, o GA4 rastreia automaticamente formulários, cliques, etc., e isso duplicaria com nossos eventos do GTM
     - **Controle total:** Com GTM, temos controle total sobre quais eventos rastrear
   - Clicar em "Criar fluxo"

5. **Copiar Measurement ID:**
   - Formato: `G-XXXXXXXXXX`
   - **✅ ID obtido:** `G-184NEKF906`
   - **✅ Adicionado no `.env.local`:** `NEXT_PUBLIC_GA4_ID=G-184NEKF906`

6. **⚠️ CRÍTICO - NÃO Instalar Código Diretamente:**
   - A tela mostrará código gtag.js para copiar e colar
   - **IGNORAR essa opção completamente!**
   - **NÃO instalar o código gtag.js no site**
   - **Usar apenas GTM** (já instalado)
   - O GA4 será configurado via GTM (ver Fase 3)
   - **Isso evita duplicação de eventos**
   - Pode fechar essa tela ou clicar em "Use o Gerenciador de tags do Google" se aparecer

#### Passo 1.3: Google Ads (Opcional - se tiver conta)

**⚠️ IMPORTANTE:** Fazer isso ANTES de configurar no GTM. Obter todos os IDs primeiro.

**Status:** ✅ **CONCLUÍDO** (27/01/2025)

**🎯 O QUE FAZER AGORA:**
- ✅ Criar conversões (isso é o importante)
- ⚠️ **Se estiver preso no fluxo de criação de campanha:** Completar o mínimo necessário para sair
- ❌ **NÃO ativar campanha agora** (pode pausar/cancelar depois)
- ✅ Apenas criar conversões e anotar IDs

**⚠️ SITUAÇÃO ESPECIAL - Se estiver preso no fluxo de criação de campanha:**

O Google Ads pode forçar você a completar o onboarding primeiro. Se isso acontecer:

**Opção 1: Completar o mínimo e pausar depois**
1. **Completar os passos básicos:**
   - Escolher qualquer opção na página atual (pode escolher "Seu site" e colocar o site: `https://www.giovanaendocrinoped.com.br`)
   - Clicar em "Avançar"
   - Preencher apenas o mínimo necessário
   - **Quando chegar na parte de criar campanha:** Pausar ou não ativar
   - **Objetivo:** Sair do fluxo de onboarding

2. **Depois de sair do fluxo:**
   - Ir em "Ferramentas e configurações" (⚙️) → "Conversões"
   - Criar as conversões normalmente

**Opção 2: Tentar acessar pelo menu lateral**
1. **Tentar clicar no menu lateral esquerdo:**
   - Procurar por "Ferramentas e configurações" ou ícone de ⚙️
   - Tentar acessar "Conversões" diretamente
   - Se conseguir, criar conversões normalmente

**Opção 3: Completar tudo e pausar campanha**
1. **Se não conseguir sair:**
   - Completar o fluxo de criação de campanha
   - **IMPORTANTE:** Quando criar a campanha, **PAUSAR imediatamente** (não ativar)
   - Depois acessar "Conversões" e criar as conversões
   - A campanha pausada não gasta dinheiro

1. **Acessar:** https://ads.google.com
   - Fazer login com a conta Google
   - Se não tiver conta, pode criar depois (não é obrigatório agora)
   - **Se estiver preso no fluxo de criação:** Seguir opções acima
   - **O que importa agora:** Criar conversões (pode fazer depois de sair do fluxo)

2. **Criar conversão para WhatsApp:**
   - Ir em "Ferramentas e configurações" (ícone de chave inglesa no topo)
   - Clicar em "Conversões"
   - Clicar no botão "+" (criar nova conversão)
   - Escolher "Site web"
   - **Configurar conversão:**
     - **Nome:** "Clique WhatsApp"
     - **Categoria:** "Ligação" ou "Outro"
     - **Valor:** Não atribuir valor (ou definir se quiser)
     - **Contagem:** Uma (conta uma vez por clique)
     - **Janela de atribuição:** 30 dias
     - **Categoria de ação:** "Ligação"
   - Clicar em "Criar e continuar"
   - **⚠️ NÃO instalar o código diretamente!** Apenas copiar o ID
   - **⚠️ Se aparecer prompt para criar campanha:** **IGNORAR** ou clicar em "Fazer depois"
   - **Copiar ID de conversão** (formato: `AW-XXXXXXXXX/XXXXX`)
   - **ANOTAR ESTE ID** - será usado no GTM
   - **Pode fechar a tela** após anotar o ID

3. **Criar conversão para Telefone (opcional):**
   - Repetir processo acima
   - **Nome:** "Ligação Telefone"
   - **ID de conversão:** `AW-XXXXXXXXX/XXXXX` (diferente do anterior)
   - **ANOTAR ESTE ID**

4. **Criar conversão para Formulário (opcional):**
   - Repetir processo acima
   - **Nome:** "Envio Formulário"
   - **ID de conversão:** `AW-XXXXXXXXX/XXXXX` (diferente dos anteriores)
   - **ANOTAR ESTE ID**

**📝 RESUMO - IDs para anotar:**
- ✅ GTM ID: `GTM-KSH937GZ` (já obtido)
- ✅ GA4 ID: `G-184NEKF906` (já obtido)
- ✅ Google Ads - Ligação Anúncios: `AW-17761516445/RiVdCKTstMcbEJ33rJVC` (obtido)
- ✅ Google Ads - Ligação Site: `AW-17761516445/Jl6cCKfstMcbEJ33rJVC` (obtido)
- ✅ Google Ads - Envio Formulário: `AW-17761516445/Rq7XCKrstMcbEJ33rJVC` (obtido)
- ✅ Google Ads - Clique WhatsApp: `AW-17761516445/lP2XCK3stMcbEJ33rJVC` (obtido)

**⚠️ LEMBRE-SE:** 
- ❌ Não instalar nenhum código diretamente! Apenas anotar os IDs.
- ❌ **NÃO criar campanha agora!** Pode fazer depois quando quiser fazer anúncios.
- ✅ O importante agora é apenas criar as conversões e anotar os IDs.
- ✅ A campanha pode ser criada depois, quando você quiser começar a fazer anúncios.

**📌 RESUMO DO QUE FAZER:**
1. Acessar Google Ads
2. Criar conversões (WhatsApp, Telefone, Formulário)
3. Anotar IDs das conversões
4. **IGNORAR** qualquer prompt de criar campanha
5. Fechar e seguir para FASE 3 (configurar no GTM)

---

### FASE 2: Instalar GTM no Site

#### Passo 2.1: Adicionar GTM ID no Código

**Status:** ✅ **CONCLUÍDO** (27/01/2025)

- ✅ GTM ID adicionado: `GTM-KSH937GZ`
- ✅ Código oficial do Google implementado em `app/layout.tsx`
- ✅ Script no head (via Next.js Script component)
- ✅ Noscript no body
- ✅ `.env.local` criado com `NEXT_PUBLIC_GTM_ID=GTM-KSH937GZ`

**Arquivo modificado:** `app/layout.tsx`

#### Passo 2.2: Verificar Instalação

**Status:** ⏳ **PENDENTE** - Fazer após deploy

1. Fazer deploy do site
2. Acessar o site no navegador
3. Abrir DevTools (F12) > Console
4. Digitar: `dataLayer`
5. Deve aparecer um array (confirma que GTM está funcionando)

---

### FASE 3: Configurar TUDO no GTM (FAZER DEPOIS DE OBTER TODOS OS IDs)

**⚠️ IMPORTANTE:** Só fazer esta fase DEPOIS de ter todos os IDs (GTM, GA4, Google Ads).

**📋 CHECKLIST RÁPIDO - O QUE VAMOS FAZER:**
- [ ] Passo 1: Criar 3 variáveis (Event Category, Event Label, Event Value)
- [ ] Passo 2: Criar 1 tag GA4 Configuration (rastreamento básico)
- [ ] Passo 3: Criar 5 acionadores (WhatsApp, Phone, Form, Doctoralia, CTA)
- [ ] Passo 4: Criar 5 tags GA4 Events (uma para cada evento)
- [ ] Passo 5: Criar 4 tags Google Ads Conversions (uma para cada conversão)
- [ ] Passo 6: Testar no Preview Mode
- [ ] Passo 7: Publicar container

**⏱️ TEMPO ESTIMADO:** 30-45 minutos

---

## 📍 PASSO 1: CRIAR VARIÁVEIS NO GTM

**O que são variáveis?** Capturam dados do dataLayer para usar nas tags.

**Como fazer:**

1. **Acessar GTM:** https://tagmanager.google.com
2. **Ir em "Variáveis"** (menu lateral esquerdo)
3. **Clicar em "Novo"** (ou botão "+" no topo)

**Variável 1: Event Category**
- **Nome:** "Event Category"
- **Tipo de variável:** Variável de Camada de Dados
- **Nome da variável de camada de dados:** `event_category`
- Clicar em "Salvar"

**Variável 2: Event Label**
- **Clicar em "Novo"** novamente
- **Nome:** "Event Label"
- **Tipo de variável:** Variável de Camada de Dados
- **Nome da variável de camada de dados:** `event_label`
- Clicar em "Salvar"

**Variável 3: Event Value (opcional)**
- **Clicar em "Novo"** novamente
- **Nome:** "Event Value"
- **Tipo de variável:** Variável de Camada de Dados
- **Nome da variável de camada de dados:** `event_value`
- Clicar em "Salvar"

**✅ Resultado:** 3 variáveis criadas. Agora podemos usar `{{Event Category}}`, `{{Event Label}}` e `{{Event Value}}` nas tags.

---

## 📍 PASSO 2: CONFIGURAR TAG GA4 CONFIGURATION

**O que faz?** Rastreia todas as páginas do site automaticamente no GA4.

**Como fazer:**

1. **Ir em "Tags"** (menu lateral esquerdo)
2. **Clicar em "Novo"** (ou botão "+" no topo)
3. **Configurar Tag:**
   - **Nome:** "GA4 - Configuração"
   - **Tipo de tag:** Google Analytics: GA4 Configuration
   - **ID de Medição:** `G-184NEKF906` (colar aqui)
   - **Acionador:** Clicar em "Selecionar acionador" > Escolher "All Pages"
   - Clicar em "Salvar"

**✅ Resultado:** GA4 agora rastreia todas as páginas do site automaticamente.

---

## 📍 PASSO 3: CRIAR ACIONADORES (TRIGGERS)

**O que são acionadores?** Definem QUANDO as tags devem disparar.

**Como fazer:**

1. **Ir em "Acionadores"** (menu lateral esquerdo)
2. **Clicar em "Novo"** (ou botão "+" no topo)

**Acionador 1: WhatsApp Click**
- **Nome:** "WhatsApp Click"
- **Tipo de acionador:** Evento Personalizado
- **Nome do evento:** `whatsapp_click` (exatamente assim, minúsculas, sem espaços)
- Clicar em "Salvar"

**Acionador 2: Phone Call**
- **Clicar em "Novo"** novamente
- **Nome:** "Phone Call"
- **Tipo de acionador:** Evento Personalizado
- **Nome do evento:** `phone_call` (exatamente assim, minúsculas, sem espaços)
- Clicar em "Salvar"

**Acionador 3: Form Submit**
- **Clicar em "Novo"** novamente
- **Nome:** "Form Submit"
- **Tipo de acionador:** Evento Personalizado
- **Nome do evento:** `form_submit` (exatamente assim, minúsculas, sem espaços)
- Clicar em "Salvar"

**Acionador 4: Doctoralia Click (opcional)**
- **Clicar em "Novo"** novamente
- **Nome:** "Doctoralia Click"
- **Tipo de acionador:** Evento Personalizado
- **Nome do evento:** `doctoralia_click` (exatamente assim, minúsculas, sem espaços)
- Clicar em "Salvar"

**Acionador 5: CTA Click (opcional)**
- **Clicar em "Novo"** novamente
- **Nome:** "CTA Click"
- **Tipo de acionador:** Evento Personalizado
- **Nome do evento:** `cta_click` (exatamente assim, minúsculas, sem espaços)
- Clicar em "Salvar"

**✅ Resultado:** 5 acionadores criados. Agora podemos usar eles nas tags.

---

## 📍 PASSO 4: CRIAR TAGS DE EVENTOS GA4

**O que fazem?** Enviam eventos customizados para o GA4 quando acontecem ações no site.

**Como fazer:**

**Tag 1: GA4 - WhatsApp Click**

1. **Ir em "Tags"** > Clicar em "Novo"
2. **Configurar:**
   - **Nome:** "GA4 - WhatsApp Click"
   - **Tipo de tag:** Google Analytics: GA4 Event
   - **ID de Medição:** `G-184NEKF906` (mesmo do GA4)
   - **Nome do Evento:** `whatsapp_click` (exatamente assim)
   - **Parâmetros do evento:**
     - Clicar em "Adicionar linha"
     - **Nome do parâmetro:** `event_category`
     - **Valor:** `{{Event Category}}` (usar a variável criada no Passo 1)
     - Clicar em "Adicionar linha" novamente
     - **Nome do parâmetro:** `event_label`
     - **Valor:** `{{Event Label}}` (usar a variável criada no Passo 1)
   - **Acionador:** Clicar em "Selecionar acionador" > Escolher "WhatsApp Click" (criado no Passo 3)
   - Clicar em "Salvar"

**Tag 2: GA4 - Phone Call**

1. **Ir em "Tags"** > Clicar em "Novo"
2. **Configurar:**
   - **Nome:** "GA4 - Phone Call"
   - **Tipo de tag:** Google Analytics: GA4 Event
   - **ID de Medição:** `G-184NEKF906`
   - **Nome do Evento:** `phone_call`
   - **Parâmetros do evento:**
     - `event_category`: `{{Event Category}}`
     - `event_label`: `{{Event Label}}`
   - **Acionador:** "Phone Call"
   - Clicar em "Salvar"

**Tag 3: GA4 - Form Submit**

1. **Ir em "Tags"** > Clicar em "Novo"
2. **Configurar:**
   - **Nome:** "GA4 - Form Submit"
   - **Tipo de tag:** Google Analytics: GA4 Event
   - **ID de Medição:** `G-184NEKF906`
   - **Nome do Evento:** `form_submit`
   - **Parâmetros do evento:**
     - `event_category`: `{{Event Category}}`
     - `event_label`: `{{Event Label}}`
   - **Acionador:** "Form Submit"
   - Clicar em "Salvar"

**Tag 4: GA4 - Doctoralia Click (opcional)**

1. **Ir em "Tags"** > Clicar em "Novo"
2. **Configurar:**
   - **Nome:** "GA4 - Doctoralia Click"
   - **Tipo de tag:** Google Analytics: GA4 Event
   - **ID de Medição:** `G-184NEKF906`
   - **Nome do Evento:** `doctoralia_click`
   - **Parâmetros do evento:**
     - `event_category`: `{{Event Category}}`
     - `event_label`: `{{Event Label}}`
   - **Acionador:** "Doctoralia Click"
   - Clicar em "Salvar"

**Tag 5: GA4 - CTA Click (opcional)**

1. **Ir em "Tags"** > Clicar em "Novo"
2. **Configurar:**
   - **Nome:** "GA4 - CTA Click"
   - **Tipo de tag:** Google Analytics: GA4 Event
   - **ID de Medição:** `G-184NEKF906`
   - **Nome do Evento:** `cta_click`
   - **Parâmetros do evento:**
     - `event_category`: `{{Event Category}}`
     - `event_label`: `{{Event Label}}`
   - **Acionador:** "CTA Click"
   - Clicar em "Salvar"

**✅ Resultado:** 5 tags GA4 criadas. Eventos serão enviados para o GA4 quando acontecerem.

---

## 📍 PASSO 5: CRIAR TAGS DE CONVERSÃO GOOGLE ADS

**O que fazem?** Enviam conversões para o Google Ads quando acontecem ações no site.

**⚠️ IMPORTANTE:** Só fazer se tiver criado conversões no Google Ads (Passo 1.3).

**Como fazer:**

**⚠️ PRIMEIRO: Criar Tag do Google (Google Ads Configuration)**

**Tag 0: Google Ads - Tag do Google (Configuração Base)**

1. **Ir em "Tags"** > Clicar em "Novo"
2. **Escolher tipo:** "Tag do Google" (primeira opção na lista do Google Ads)
3. **Configurar:**
   - **Nome:** "Google Ads - Tag do Google"
   - **ID de conversão:** `AW-17761516445` (apenas o ID da conta, sem o código de conversão)
   - **Acionador:** "Initialization - All Pages" (ou "All Pages")
   - Clicar em "Salvar"

**✅ Resultado:** O GTM agora reconhece a conta do Google Ads e facilitará a configuração das conversões.

---

**Tag 1: Google Ads - Ligação Site**

1. **Ir em "Tags"** > Clicar em "Novo"
2. **Escolher tipo:** "Acompanhamento de conversões do Google Ads"
3. **Configurar:**
   - **Nome:** "Google Ads - Ligação Site"
   - **Código de conversão:** `17761516445` (apenas o número, sem "AW-")
   - **Rótulo de conversão:** `Jl6cCKfstMcbEJ33rJVC` (parte depois da barra)
   - **Valor da conversão:** (deixar vazio)
   - **ID da transação:** (deixar vazio)
   - **Código da moeda:** (deixar vazio)
   - **Checkboxes:** todos desmarcados
   - **Tratamento de dados restrito:** "Falso"
   - **Acionador:** "Phone Call" (criado no Passo 3)
   - Clicar em "Salvar"

**Tag 2: Google Ads - WhatsApp Click**

1. **Ir em "Tags"** > Clicar em "Novo"
2. **Escolher tipo:** "Acompanhamento de conversões do Google Ads"
3. **Configurar:**
   - **Nome:** "Google Ads - WhatsApp Click"
   - **Código de conversão:** `17761516445` (apenas o número, sem "AW-")
   - **Rótulo de conversão:** `lP2XCK3stMcbEJ33rJVC` (parte depois da barra)
   - **Valor da conversão:** (deixar vazio)
   - **ID da transação:** (deixar vazio)
   - **Código da moeda:** (deixar vazio)
   - **Checkboxes:** todos desmarcados
   - **Tratamento de dados restrito:** "Falso"
   - **Acionador:** "WhatsApp Click" (criado no Passo 3)
   - Clicar em "Salvar"

**Tag 3: Google Ads - Form Submit**

1. **Ir em "Tags"** > Clicar em "Novo"
2. **Escolher tipo:** "Acompanhamento de conversões do Google Ads"
3. **Configurar:**
   - **Nome:** "Google Ads - Form Submit"
   - **Código de conversão:** `17761516445` (apenas o número, sem "AW-")
   - **Rótulo de conversão:** `Rq7XCKrstMcbEJ33rJVC` (parte depois da barra)
   - **Valor da conversão:** (deixar vazio)
   - **ID da transação:** (deixar vazio)
   - **Código da moeda:** (deixar vazio)
   - **Checkboxes:** todos desmarcados
   - **Tratamento de dados restrito:** "Falso"
   - **Acionador:** "Form Submit" (criado no Passo 3)
   - Clicar em "Salvar"

**Tag 4: Google Ads - Ligação Anúncios (opcional - se quiser rastrear ligações de anúncios separadamente)**

1. **Ir em "Tags"** > Clicar em "Novo"
2. **Escolher tipo:** "Acompanhamento de conversões do Google Ads"
3. **Configurar:**
   - **Nome:** "Google Ads - Ligação Anúncios"
   - **Código de conversão:** `17761516445` (apenas o número, sem "AW-")
   - **Rótulo de conversão:** `RiVdCKTstMcbEJ33rJVC` (parte depois da barra)
   - **Valor da conversão:** (deixar vazio)
   - **ID da transação:** (deixar vazio)
   - **Código da moeda:** (deixar vazio)
   - **Checkboxes:** todos desmarcados
   - **Tratamento de dados restrito:** "Falso"
   - **Acionador:** "Phone Call" (ou criar acionador específico se quiser separar)
   - Clicar em "Salvar"

**✅ Resultado:** 4 tags Google Ads criadas. Conversões serão enviadas para o Google Ads quando acontecerem.

---

## 📍 PASSO 6: TESTAR NO PREVIEW MODE (RECOMENDADO)

**O que faz?** Testa todas as tags antes de publicar para garantir que estão funcionando.

**Como fazer:**

1. **Clicar em "Visualizar"** (Preview) no topo do GTM
2. **Inserir URL:** `https://www.giovanaendocrinoped.com.br`
3. **Clicar em "Conectar"**
4. **Abrir site em nova aba** (o GTM vai abrir automaticamente)
5. **Verificar no painel de debug:**
   - Tags que devem disparar aparecem listadas
   - Variáveis do dataLayer aparecem
   - Eventos sendo disparados aparecem

**✅ Resultado:** Se tudo aparecer corretamente, pode publicar. Se não, verificar configurações.

---

## 📍 PASSO 7: PUBLICAR CONTAINER DO GTM

**⚠️ IMPORTANTE:** Só publicar DEPOIS de testar no Preview Mode e verificar que tudo está funcionando.

**Como fazer:**

1. **Verificar todas as tags criadas:**
   - Ir em "Tags" e verificar que todas estão listadas
   - Verificar que todas têm acionadores configurados

2. **Publicar container:**
   - Clicar em "Enviar" (botão azul no topo)
   - **Nome da versão:** "Configuração inicial - GA4 e Google Ads - 27/01/2025"
   - **Descrição:** "Configuração inicial com GA4, eventos customizados e conversões Google Ads"
   - Clicar em "Publicar"

**✅ Resultado:** Todas as configurações estão ativas no site!

---

## ✅ RESUMO DA FASE 3

**Status:** ✅ **CONCLUÍDO E PUBLICADO** (26/11/2025, 19:43)

**O que foi criado e publicado:**
- ✅ 3 variáveis criadas (Event Category, Event Label, Event Value)
- ✅ 5 variáveis incorporadas (Event, Page Hostname, Page Path, Page URL, Referrer)
- ✅ 1 tag GA4 Configuration (`G-184NEKF906`)
- ✅ 1 tag Google Ads - Tag do Google (`AW-17761516445`)
- ✅ 5 acionadores (WhatsApp Click, Phone Call, Form Submit, Doctoralia Click, CTA Click)
- ✅ 5 tags GA4 Events (WhatsApp, Phone, Form, Doctoralia, CTA)
- ✅ 4 tags Google Ads Conversions (Ligação Site, WhatsApp, Form Submit, Ligação Anúncios)
- ✅ Container publicado (Versão 2 - 26/11/2025)

**Total publicado:**
- 11 Tags
- 5 Acionadores
- 8 Variáveis (3 criadas + 5 incorporadas)

**Próximo passo:** ✅ FASE 4 - CONCLUÍDA (27/01/2025)

---

### FASE 4: Implementar Rastreamento no Código

**Status:** ✅ **CONCLUÍDO** (27/01/2025)

**Esta fase adiciona os eventos nos botões do site para disparar no GTM.**

**O que foi implementado:**
- ✅ Componentes de analytics criados (WhatsAppLink, PhoneLink, DoctoraliaLink, CTALink)
- ✅ Eventos implementados em ~50+ locais em todas as páginas
- ✅ Footer, Header, CTASection, ContactSection, FAQSection
- ✅ Página Contato (4 locais)
- ✅ 5 páginas de serviços (3 locais cada)
- ✅ Todos os eventos conectados ao GTM via dataLayer

---

## 4. EVENTOS PERSONALIZADOS PARA RASTREAMENTO

### 4.1 Implementação no Código

**Status:** ✅ **CONCLUÍDO** (27/01/2025)

**Arquivo:** `lib/analytics.ts` ✅ **CRIADO E IMPLEMENTADO**

```typescript
/**
 * Função helper para disparar eventos no GTM
 * NUNCA disparar diretamente para GA4 ou Google Ads
 */
export function trackEvent(
  eventName: string,
  eventCategory?: string,
  eventLabel?: string,
  eventValue?: number
) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      event_category: eventCategory,
      event_label: eventLabel,
      event_value: eventValue,
    });
  }
}

// Funções específicas para facilitar uso
export const analytics = {
  whatsappClick: (label?: string) => {
    trackEvent('whatsapp_click', 'Contact', label || 'WhatsApp Button');
  },
  
  phoneCall: (label?: string) => {
    trackEvent('phone_call', 'Contact', label || 'Phone Button');
  },
  
  formSubmit: (label?: string) => {
    trackEvent('form_submit', 'Contact', label || 'Contact Form');
  },
  
  doctoraliaClick: (label?: string) => {
    trackEvent('doctoralia_click', 'Appointment', label || 'Doctoralia Button');
  },
  
  ctaClick: (label: string) => {
    trackEvent('cta_click', 'CTA', label);
  },
};
```

### 4.2 Onde Adicionar no Código

#### ✅ Implementação Realizada (27/01/2025)

**Componentes criados:**
- `components/analytics/WhatsAppLink.tsx` - Componente reutilizável para links WhatsApp
- `components/analytics/PhoneLink.tsx` - Componente reutilizável para links telefone
- `components/analytics/DoctoraliaLink.tsx` - Componente reutilizável para links Doctoralia
- `components/analytics/CTALink.tsx` - Componente reutilizável para CTAs

**Exemplo de uso (implementado):**

```typescript
// WhatsApp Button
import { WhatsAppLink } from "@/components/analytics/WhatsAppLink";

<WhatsAppLink 
  href="https://wa.me/5531995626630" 
  target="_blank" 
  rel="noopener noreferrer"
  label="Contact Page"
>
  <MessageCircle className="h-5 w-5" />
  WhatsApp
</WhatsAppLink>

// Phone Button
import { PhoneLink } from "@/components/analytics/PhoneLink";

<PhoneLink 
  href="tel:+5531995626630"
  label="Contact Page"
>
  <Phone className="h-5 w-5" />
  Ligar Agora
</PhoneLink>

// Form Submit (já implementado)
import { analytics } from '@/lib/analytics';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  analytics.formSubmit('Contact Form');
  // ... resto do código
};

// CTA Button
import { CTALink } from "@/components/analytics/CTALink";

<CTALink 
  href="/contato"
  label="Header - Agendar Consulta"
>
  Agendar Consulta
</CTALink>
```

**Locais implementados:**
- ✅ Footer (WhatsApp, Doctoralia)
- ✅ Header (CTA "Agendar Consulta" - desktop e mobile)
- ✅ CTASection (WhatsApp, Phone, CTA)
- ✅ ContactSection (Form Submit)
- ✅ FAQSection (WhatsApp)
- ✅ Página Contato (WhatsApp, Phone - 4 locais)
- ✅ Página Serviços (CTA "Agendar Consulta")
- ✅ 5 páginas de serviços específicas (WhatsApp, Phone, CTAs - 3 locais cada)

**Total:** ~50+ pontos de rastreamento implementados

### 4.3 Eventos Recomendados

| Evento | Categoria | Onde Usar |
|--------|-----------|-----------|
| `whatsapp_click` | Contact | Botões WhatsApp |
| `phone_call` | Contact | Links `tel:` |
| `form_submit` | Contact | Formulário de contato |
| `doctoralia_click` | Appointment | Botão Doctoralia |
| `cta_click` | CTA | Botões "Agende Consulta" |
| `service_view` | Engagement | Visualização de página de serviço |
| `blog_read` | Engagement | Leitura de artigo |

---

## 5. INTEGRAÇÃO COM DOCTORALIA

### 5.1 Limitações

**⚠️ IMPORTANTE:** Doctoralia não permite rastreamento direto de agendamentos por questões de privacidade e segurança.

**O que NÃO é possível:**
- ❌ Rastrear quando alguém realmente agendou
- ❌ Saber se o agendamento foi confirmado
- ❌ Acessar dados do paciente

**O que É possível:**
- ✅ Rastrear cliques no botão/link do Doctoralia
- ✅ Rastrear quando alguém acessa a página do Doctoralia
- ✅ Usar pixel de conversão do Doctoralia (se disponível)

### 5.2 Soluções Possíveis

#### Opção 1: Rastrear Cliques no Link (Recomendado)

**Implementação:**
```typescript
// No botão/link do Doctoralia
<a 
  href="[LINK_DOCTORALIA]"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => analytics.doctoraliaClick('Doctoralia Button')}
>
  Agendar Consulta no Doctoralia
</a>
```

**O que rastreia:**
- Quantas pessoas clicaram no botão
- De qual página vieram
- Não confirma se agendou, mas indica intenção

#### Opção 2: Pixel de Conversão do Doctoralia (Se disponível)

1. **Verificar se Doctoralia oferece pixel:**
   - Entrar em contato com suporte do Doctoralia
   - Perguntar sobre integração com Google Analytics
   - Perguntar sobre pixel de conversão

2. **Se disponível:**
   - Obter código do pixel
   - Adicionar como tag no GTM
   - Configurar para disparar em conversão

#### Opção 3: Landing Page Intermediária

**Criar página:** `/agendar` ou `/doctoralia`

**Fluxo:**
1. Usuário clica em "Agendar Consulta"
2. Vai para `/agendar` (rastreável)
3. Página mostra botão do Doctoralia
4. Rastreia clique no botão
5. Redireciona para Doctoralia

**Vantagem:** Pode adicionar mais informações e rastrear melhor

### 5.3 Recomendação Final

**Usar Opção 1 (Rastrear Cliques) + Opção 3 (Landing Page)**

**Por quê:**
- Mais controle sobre o rastreamento
- Pode adicionar informações antes de redirecionar
- Melhor experiência do usuário
- Mais dados para análise

---

## 6. VERIFICAÇÃO E TESTES

### 6.1 Testar GTM (Preview Mode)

1. **Acessar GTM:** https://tagmanager.google.com
2. **Clicar em "Visualizar"** (Preview)
3. **Inserir URL do site:** `https://www.giovanaendocrinoped.com.br`
4. **Abrir site em nova aba**
5. **Verificar:**
   - Tags que devem disparar
   - Variáveis do dataLayer
   - Eventos sendo disparados

### 6.2 Testar Eventos

1. **Abrir DevTools (F12)**
2. **Ir em Console**
3. **Digitar:** `dataLayer`
4. **Clicar em botões do site:**
   - WhatsApp
   - Telefone
   - Formulário
5. **Verificar se eventos aparecem no dataLayer**

### 6.3 Verificar no GA4 (Tempo Real)

1. **Acessar GA4:** https://analytics.google.com
2. **Ir em "Relatórios" > "Tempo real"**
3. **Testar eventos:**
   - Clicar em botões do site
   - Verificar se aparecem em "Tempo real"
   - Aguardar alguns segundos (pode ter delay)

### 6.4 Verificar no Google Ads (Se configurado)

1. **Acessar Google Ads:** https://ads.google.com
2. **Ir em "Ferramentas e configurações" > "Conversões"**
3. **Verificar se conversões estão sendo registradas**

### 6.5 Checklist de Verificação

- [ ] GTM instalado e funcionando (dataLayer existe)
- [ ] GA4 recebendo dados (verificar em Tempo real)
- [ ] Eventos personalizados disparando corretamente
- [ ] Google Ads recebendo conversões (se configurado)
- [ ] Sem duplicação de eventos (verificar no GA4)
- [ ] Todos os botões rastreáveis funcionando

---

## 7. TROUBLESHOOTING

### Problema 1: Eventos não aparecem no GA4

**Soluções:**
1. Verificar se GTM está publicado
2. Verificar se tag GA4 está configurada corretamente
3. Verificar se Measurement ID está correto
4. Aguardar alguns minutos (pode ter delay)
5. Limpar cache do navegador
6. Verificar no Preview Mode do GTM

### Problema 2: Eventos duplicados

**Sintomas:** Mesmo evento aparece 2x no GA4

**Causas:**
- GA4 instalado diretamente no código E no GTM
- Múltiplas tags disparando o mesmo evento

**Solução:**
- Remover GA4 do código (deixar só no GTM)
- Verificar acionadores no GTM (não duplicar)

### Problema 3: dataLayer não existe

**Sintomas:** Erro no console "dataLayer is not defined"

**Soluções:**
1. Verificar se GTM está instalado corretamente
2. Verificar se GTM ID está correto
3. Verificar se componente GTM está no layout
4. Aguardar carregamento completo da página

### Problema 4: Eventos não disparam

**Sintomas:** Clicar em botões mas eventos não aparecem

**Soluções:**
1. Verificar se função `trackEvent` está sendo chamada
2. Verificar console do navegador (erros JavaScript)
3. Verificar Preview Mode do GTM
4. Verificar se acionadores estão configurados corretamente

---

## 8. CHECKLIST COMPLETO

### ✅ Fase 1: Preparação - Criar Contas e Obter IDs

**⚠️ FAZER TUDO PRIMEIRO - Obter todos os IDs antes de configurar no GTM**

- [x] Criar conta Google Tag Manager ✅ **CONCLUÍDO**
- [x] Obter GTM ID (`GTM-KSH937GZ`) ✅ **CONCLUÍDO**
- [x] Criar conta Google Analytics 4 ✅ **CONCLUÍDO**
- [x] Obter Measurement ID (`G-184NEKF906`) ✅ **CONCLUÍDO**
- [x] Adicionar GA4 ID no `.env.local` ✅ **CONCLUÍDO**
- [x] Criar conta Google Ads ✅ **CONCLUÍDO**
- [x] Criar conversão Ligação Anúncios no Google Ads ✅ **CONCLUÍDO**
- [x] Criar conversão Ligação Site no Google Ads ✅ **CONCLUÍDO**
- [x] Criar conversão WhatsApp no Google Ads ✅ **CONCLUÍDO**
- [x] Criar conversão Formulário no Google Ads ✅ **CONCLUÍDO**
- [x] Obter IDs de Conversão do Google Ads ✅ **CONCLUÍDO**

### ✅ Fase 2: Instalação no Site

- [x] Adicionar GTM ID no código (variável de ambiente) ✅ **CONCLUÍDO**
- [x] Verificar que componente GTM está no layout ✅ **CONCLUÍDO**
- [ ] Fazer deploy ⏳ **PENDENTE**
- [ ] Verificar dataLayer no console do navegador ⏳ **PENDENTE** (após deploy)

### ✅ Fase 3: Configuração no GTM (FAZER DEPOIS DE OBTER TODOS OS IDs)

**Status:** ✅ **CONCLUÍDO E PUBLICADO** (26/11/2025)

**⚠️ IMPORTANTE:** Só fazer esta fase DEPOIS de ter todos os IDs da Fase 1.

- [x] Criar variáveis (Event Category, Event Label, Event Value) ✅ **CONCLUÍDO**
- [x] Configurar tag GA4 Configuration ✅ **CONCLUÍDO**
- [x] Criar tag Google Ads - Tag do Google (configuração base) ✅ **CONCLUÍDO**
- [x] Criar acionadores (WhatsApp, Phone, Form, Doctoralia, CTA) ✅ **CONCLUÍDO**
- [x] Criar tags de eventos GA4 (WhatsApp, Phone, Form, Doctoralia, CTA) ✅ **CONCLUÍDO**
- [x] Criar tags de conversão Google Ads (Ligação Site, WhatsApp, Form Submit, Ligação Anúncios) ✅ **CONCLUÍDO**
- [x] Testar no Preview Mode ✅ **CONCLUÍDO**
- [x] Publicar container do GTM ✅ **CONCLUÍDO** (Versão 2 - 26/11/2025, 19:43)

**Resumo da publicação:**
- ✅ 11 Tags publicadas (1 GA4 Config, 1 Google Ads Tag, 5 GA4 Events, 4 Google Ads Conversions)
- ✅ 5 Acionadores publicados
- ✅ 8 Variáveis publicadas (3 criadas + 5 incorporadas)

### ✅ Fase 4: Implementação no Código

**Status:** ✅ **CONCLUÍDO** (27/01/2025)

- [x] Criar arquivo `lib/analytics.ts` ✅ **CONCLUÍDO**
- [x] Adicionar `trackEvent` e funções helper ✅ **CONCLUÍDO**
- [x] Criar componentes de analytics (WhatsAppLink, PhoneLink, DoctoraliaLink, CTALink) ✅ **CONCLUÍDO**
- [x] Adicionar rastreamento em botões WhatsApp ✅ **CONCLUÍDO** (~20+ locais)
- [x] Adicionar rastreamento em links telefone ✅ **CONCLUÍDO** (~10+ locais)
- [x] Adicionar rastreamento em formulário ✅ **CONCLUÍDO** (ContactSection)
- [x] Adicionar rastreamento em CTAs principais ✅ **CONCLUÍDO** (~15+ locais)
- [x] Adicionar rastreamento Doctoralia ✅ **CONCLUÍDO** (Footer)

**Arquivos modificados:**
- ✅ `components/analytics/` (4 novos componentes)
- ✅ `components/Footer.tsx`
- ✅ `components/Header.tsx`
- ✅ `components/sections/CTASection.tsx`
- ✅ `components/sections/ContactSection.tsx`
- ✅ `components/sections/FAQSection.tsx`
- ✅ `app/contato/page.tsx`
- ✅ `app/servicos/page.tsx`
- ✅ `app/servicos/obesidade-pediatrica/page.tsx`
- ✅ `app/servicos/puberdade-precoce/page.tsx`
- ✅ `app/servicos/diabetes-infantil/page.tsx`
- ✅ `app/servicos/baixa-estatura/page.tsx`
- ✅ `app/servicos/disturbios-tireoide/page.tsx`

### ⏳ Fase 5: Testes e Verificação

**Status:** ⏳ **PRÓXIMO PASSO** (27/01/2025)

**Ordem de execução:**
1. ⏳ Aguardar deploy na Vercel (geralmente 1-2 minutos após push)
2. ⏳ Testar GTM Preview Mode
3. ⏳ Testar eventos no console do navegador
4. ⏳ Verificar eventos no GA4 (Tempo real)
5. ⏳ Verificar conversões no Google Ads
6. ⏳ Verificar que não há duplicação
7. ⏳ Testar em diferentes navegadores

**Como testar:**

#### Passo 1: Verificar Deploy
1. Acesse: https://www.giovanaendocrinoped.com.br
2. Aguarde o site carregar completamente

#### Passo 2: Testar GTM Preview Mode
1. Acesse: https://tagmanager.google.com
2. Clique em "Preview" (canto superior direito)
3. Digite a URL: `https://www.giovanaendocrinoped.com.br`
4. Clique em "Conectar"
5. Uma nova aba abrirá com o site em modo debug

#### Passo 3: Testar Eventos
1. No site (modo debug), clique em botões WhatsApp
2. Clique em links telefone
3. Preencha e envie o formulário de contato
4. Clique em CTAs "Agendar Consulta"
5. No painel do GTM Preview, verifique se os eventos aparecem:
   - `whatsapp_click`
   - `phone_call`
   - `form_submit`
   - `cta_click`
   - `doctoralia_click`

#### Passo 4: Verificar no Console
1. Abra o Console do navegador (F12)
2. Digite: `window.dataLayer`
3. Verifique se há eventos sendo adicionados
4. Clique em um botão e veja se um novo evento aparece

#### Passo 5: Verificar no GA4
1. Acesse: https://analytics.google.com
2. Vá em "Relatórios" → "Tempo real"
3. Execute ações no site (cliques, formulários)
4. Verifique se os eventos aparecem em tempo real

#### Passo 6: Verificar no Google Ads
1. Acesse: https://ads.google.com
2. Vá em "Ferramentas e configurações" → "Conversões"
3. Aguarde alguns minutos após os testes
4. Verifique se as conversões estão sendo registradas

**⚠️ IMPORTANTE:**
- Os eventos podem levar alguns minutos para aparecer no GA4 e Google Ads
- Use o Preview Mode do GTM para verificação imediata
- Se algo não funcionar, verifique o console do navegador para erros

### ✅ Fase 6: Documentação

- [ ] Documentar todos os eventos configurados
- [ ] Criar guia para adicionar novos eventos
- [ ] Documentar IDs e credenciais (em local seguro)

---

## 📝 RESUMO: ARQUITETURA FINAL

### Fluxo de Eventos

```
Usuário clica em WhatsApp
         ↓
Código dispara: dataLayer.push({event: 'whatsapp_click'})
         ↓
GTM recebe evento
         ↓
GTM dispara tags configuradas:
  ├─ GA4 Event (whatsapp_click)
  └─ Google Ads Conversion (se configurado)
         ↓
Dados aparecem em:
  ├─ Google Analytics 4
  └─ Google Ads (se configurado)
```

### Regras Importantes

1. ✅ **SEMPRE** usar GTM como intermediário
2. ✅ **NUNCA** instalar GA4 diretamente no código
3. ✅ **NUNCA** instalar Google Ads diretamente no código
4. ✅ **SEMPRE** disparar eventos via `dataLayer.push()`
5. ✅ **SEMPRE** testar no Preview Mode antes de publicar
6. ✅ **SEMPRE** verificar que não há duplicação

---

## 🔒 SEGURANÇA E PRIVACIDADE

### LGPD (Lei Geral de Proteção de Dados)

**⚠️ IMPORTANTE:** Configurar aviso de cookies e consentimento

1. **Adicionar banner de cookies:**
   - Informar sobre uso de Google Analytics
   - Permitir usuário aceitar/recusar
   - Bloquear tags até consentimento

2. **Configurar Consent Mode no GTM:**
   - Habilitar modo de consentimento
   - Configurar tags para respeitar consentimento

3. **Política de Privacidade:**
   - Atualizar política de privacidade
   - Informar sobre uso de cookies e analytics

---

## 📞 SUPORTE E RECURSOS

### Documentação Oficial

- [Google Tag Manager - Guia Iniciante](https://support.google.com/tagmanager/answer/6102821)
- [Google Analytics 4 - Guia Iniciante](https://support.google.com/analytics/answer/9304153)
- [Google Ads - Conversões](https://support.google.com/google-ads/answer/1727054)

### Ferramentas Úteis

- [GTM Preview Mode](https://tagmanager.google.com) - Testar tags antes de publicar
- [GA4 DebugView](https://analytics.google.com) - Ver eventos em tempo real
- [Google Tag Assistant](https://tagassistant.google.com) - Verificar tags instaladas

---

## ✅ PRÓXIMOS PASSOS - O QUE FAZER AGORA

### 🎯 STATUS ATUAL (27/01/2025)

**✅ CONCLUÍDO:**
- ✅ FASE 1: Todas as contas criadas e IDs obtidos
- ✅ FASE 2: GTM instalado no código
- ✅ FASE 3: GTM configurado e publicado
- ✅ FASE 4: Rastreamento implementado no código (~50+ pontos)

**⏳ PRÓXIMO PASSO:**
- ⏳ FASE 5: Testes e verificação (aguardando deploy)

### 🎯 O QUE FAZER AGORA

**1. Aguardar Deploy na Vercel** (1-2 minutos)
   - O deploy é automático após push
   - Verificar: https://www.giovanaendocrinoped.com.br

**2. Testar no GTM Preview Mode**
   - Acessar: https://tagmanager.google.com
   - Clicar em "Preview"
   - Conectar ao site
   - Testar cliques em botões e verificar eventos

**3. Verificar Eventos no Console**
   - Abrir Console (F12)
   - Digitar: `window.dataLayer`
   - Clicar em botões e verificar se eventos aparecem

**4. Verificar no GA4 (Tempo Real)**
   - Acessar: https://analytics.google.com
   - Ir em "Relatórios" → "Tempo real"
   - Executar ações no site
   - Verificar se eventos aparecem

**5. Verificar Conversões no Google Ads**
   - Acessar: https://ads.google.com
   - Ir em "Ferramentas e configurações" → "Conversões"
   - Aguardar alguns minutos
   - Verificar se conversões estão sendo registradas

---

### 🎯 PRIORIDADE 1: Completar FASE 1 - Obter Todos os IDs (FORA DO CURSOR)

**Status atual:**
- ✅ GTM ID: `GTM-KSH937GZ` (obtido)
- ✅ GA4 ID: `G-184NEKF906` (obtido)
- ✅ Google Ads IDs: **CONCLUÍDO** (4 conversões criadas)

**Status:** ✅ **CONCLUÍDO** (27/01/2025)

**IDs obtidos:**
- ✅ Ligação Anúncios: `AW-17761516445/RiVdCKTstMcbEJ33rJVC`
- ✅ Ligação Site: `AW-17761516445/Jl6cCKfstMcbEJ33rJVC`
- ✅ Envio Formulário: `AW-17761516445/Rq7XCKrstMcbEJ33rJVC`
- ✅ Clique WhatsApp: `AW-17761516445/lP2XCK3stMcbEJ33rJVC`

**⚠️ LEMBRE-SE:** Código não foi instalado diretamente. IDs serão usados no GTM.

---

### 🎯 PRIORIDADE 2: FASE 3 - Configurar TUDO no GTM (FORA DO CURSOR)

**Status:** ✅ **CONCLUÍDO** (27/01/2025)

**Ordem de configuração:**
1. ✅ Criar variáveis (Event Category, Event Label, Event Value) - **CONCLUÍDO**
2. ✅ Configurar tag GA4 Configuration - **CONCLUÍDO**
3. ✅ Criar tag Google Ads - Tag do Google - **CONCLUÍDO**
4. ✅ Criar acionadores (WhatsApp, Phone, Form, Doctoralia, CTA) - **CONCLUÍDO**
5. ✅ Criar tags de eventos GA4 (5 tags) - **CONCLUÍDO**
6. ✅ Criar tags de conversão Google Ads (4 tags) - **CONCLUÍDO**
7. ⏳ Testar no Preview Mode - **PRÓXIMO PASSO**
8. ⏳ Publicar container - **DEPOIS DO TESTE**

**Ver seção completa:** [FASE 3: Configurar TUDO no GTM](#fase-3-configurar-tudo-no-gtm-fazer-depois-de-obter-todos-os-ids)

---

### ✅ PRIORIDADE 3: FASE 4 - Implementar no Código (AQUI NO CURSOR)

**Status:** ✅ **CONCLUÍDO** (27/01/2025)

**Implementação completa:**
1. ✅ Componentes de analytics criados (WhatsAppLink, PhoneLink, DoctoraliaLink, CTALink)
2. ✅ Botões WhatsApp → `analytics.whatsappClick()` (~20+ locais)
3. ✅ Links telefone → `analytics.phoneCall()` (~10+ locais)
4. ✅ Formulário de contato → `analytics.formSubmit()` (1 local)
5. ✅ CTAs principais → `analytics.ctaClick()` (~15+ locais)
6. ✅ Doctoralia → `analytics.doctoraliaClick()` (1 local)

**Total:** ~50+ pontos de rastreamento implementados em todas as páginas do site.

**Ver seção completa:** [FASE 4: Implementar Rastreamento no Código](#fase-4-implementar-rastreamento-no-código)

---

### 🎯 PRIORIDADE 4: FASE 5 - Testes e Verificação (PRÓXIMO PASSO)

**Status:** ⏳ **AGUARDANDO DEPLOY E TESTES**

**O que fazer agora:**
1. ⏳ Aguardar deploy na Vercel (1-2 minutos após push)
2. ⏳ Testar GTM Preview Mode
3. ⏳ Testar eventos no console do navegador
4. ⏳ Verificar eventos no GA4 (Tempo real)
5. ⏳ Verificar conversões no Google Ads
6. ⏳ Verificar que não há duplicação

**Ver instruções detalhadas:** [FASE 5: Testes e Verificação](#-fase-5-testes-e-verificação)

---

**Última Atualização:** 27/01/2025  
**Versão do Documento:** 2.0

**⚠️ LEMBRE-SE:** Este documento deve ser seguido passo a passo para evitar duplicação de eventos e garantir rastreamento correto.

