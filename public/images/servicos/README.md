# Imagens dos Serviços

Esta pasta contém imagens das páginas de serviços individuais.

## 📋 Nomenclatura SEO para Imagens

Seguindo o padrão estabelecido nas outras pastas, os nomes dos arquivos devem incluir palavras-chave relevantes para SEO.

### Padrão de Nomenclatura

**Formato:** `[servico]-dra-giovana-martins-endocrinologista-pediatrica-bh.[extensao]`

**Componentes:**
- `[servico]` - Nome do serviço em kebab-case (palavra-chave principal)
- `dra-giovana-martins` - Nome da profissional (autoridade)
- `endocrinologista-pediatrica` - Especialidade (palavra-chave)
- `bh` - Localização (Belo Horizonte - SEO local)
- `[extensao]` - Formato do arquivo (jpg, jpeg, png, webp)

## 📸 Imagens Necessárias

### 1. Puberdade Precoce
**Arquivo:** `puberdade-precoce-dra-giovana-martins-endocrinologista-pediatrica-bh.jpg`

**Descrição:**
- Imagem de destaque para página de puberdade precoce
- Pode incluir: criança em consulta, gráfico de desenvolvimento, ou ilustração médica relacionada
- **Alt-text sugerido:** "Puberdade Precoce - Diagnóstico e Tratamento com Dra. Giovana Martins, Endocrinologista Pediátrica em Belo Horizonte"

**Palavras-chave na imagem:**
- puberdade precoce
- endocrinologista pediátrica
- Belo Horizonte
- Dra. Giovana Martins

---

### 2. Diabetes Infantil
**Arquivo:** `diabetes-infantil-dra-giovana-martins-endocrinologista-pediatrica-bh.jpg`

**Descrição:**
- Imagem de destaque para página de diabetes infantil
- Pode incluir: criança com diabetes, monitoramento de glicose, ou ambiente acolhedor de consulta
- **Alt-text sugerido:** "Diabetes Infantil - Tratamento Especializado com Dra. Giovana Martins, Endocrinologista Pediátrica em BH"

**Palavras-chave na imagem:**
- diabetes infantil
- diabetes tipo 1
- endocrinologista pediátrica
- Belo Horizonte
- Dra. Giovana Martins

---

### 3. Baixa Estatura
**Arquivo:** `baixa-estatura-dra-giovana-martins-endocrinologista-pediatrica-bh.jpg`

**Descrição:**
- Imagem de destaque para página de baixa estatura
- Pode incluir: curva de crescimento, medição de altura, ou consulta pediátrica
- **Alt-text sugerido:** "Baixa Estatura - Avaliação e Tratamento com Dra. Giovana Martins, Endocrinologista Pediátrica em Belo Horizonte"

**Palavras-chave na imagem:**
- baixa estatura
- crescimento infantil
- endocrinologista pediátrica
- Belo Horizonte
- Dra. Giovana Martins

---

### 4. Distúrbios da Tireoide
**Arquivo:** `disturbios-tireoide-dra-giovana-martins-endocrinologista-pediatrica-bh.jpg`

**Descrição:**
- Imagem de destaque para página de distúrbios da tireoide
- Pode incluir: ilustração da tireoide, consulta médica, ou exame de tireoide
- **Alt-text sugerido:** "Distúrbios da Tireoide em Crianças - Tratamento com Dra. Giovana Martins, Endocrinologista Pediátrica em BH"

**Palavras-chave na imagem:**
- distúrbios tireoide
- tireoide infantil
- endocrinologista pediátrica
- Belo Horizonte
- Dra. Giovana Martins

---

## 📐 Especificações Técnicas

### Tamanho e Proporção
- **Tamanho recomendado:** 1200x630px (proporção Open Graph 1.91:1)
- **Tamanho mínimo:** 800x420px
- **Tamanho máximo:** 1920x1008px
- **Proporção:** 1.91:1 (landscape)

### Formato
- **Formato preferencial:** JPG ou WebP (melhor compressão)
- **PNG:** Apenas se precisar transparência
- **Qualidade JPG:** 80-85% (balanço qualidade/peso)
- **WebP:** Qualidade 80-85%

### Peso do Arquivo
- **Máximo:** 300KB
- **Recomendado:** < 200KB
- **Meta:** Manter site rápido, mas com qualidade visual

### Otimização
- **Ferramentas:** TinyPNG, ImageOptim, Squoosh, ou Photoshop "Save for Web"
- **Sempre otimizar antes de adicionar**
- **Verificar qualidade visual após otimização**

---

## 🎨 Diretrizes de Estilo

### Tom e Estilo
- **Profissional:** Imagens médicas sérias, mas acolhedoras
- **Acolhedor:** Ambiente que transmita confiança e cuidado
- **Moderno:** Visual atual e limpo
- **Inclusivo:** Representar diversidade quando possível

### Conteúdo das Imagens
- **Evitar:** Imagens genéricas de stock sem contexto
- **Preferir:** Imagens que representem o serviço específico
- **Ideal:** Fotos reais do consultório ou ilustrações médicas profissionais

### Cores
- **Paleta:** Alinhada com o site (tons suaves, profissionais)
- **Contraste:** Médio a alto para legibilidade
- **Saturação:** Moderada (cores naturais)

---

## 💻 Como Usar no Código

### Exemplo 1: Imagem de Destaque (Featured Image)
```tsx
import Image from 'next/image';

<Image 
  src="/images/servicos/puberdade-precoce-dra-giovana-martins-endocrinologista-pediatrica-bh.jpg"
  alt="Puberdade Precoce - Diagnóstico e Tratamento com Dra. Giovana Martins, Endocrinologista Pediátrica em Belo Horizonte"
  width={1200}
  height={630}
  className="rounded-2xl shadow-medium"
  priority // Se for acima da dobra (above the fold)
/>
```

### Exemplo 2: Open Graph Meta Tag
```tsx
// No metadata da página
export const metadata: Metadata = generateMetadata({
  title: "Puberdade Precoce | Dra. Giovana Martins",
  description: "...",
  image: "/images/servicos/puberdade-precoce-dra-giovana-martins-endocrinologista-pediatrica-bh.jpg",
  url: "/servicos/puberdade-precoce"
});
```

### Exemplo 3: Background Image
```tsx
<div 
  className="bg-cover bg-center rounded-2xl"
  style={{
    backgroundImage: 'url(/images/servicos/puberdade-precoce-dra-giovana-martins-endocrinologista-pediatrica-bh.jpg)'
  }}
>
  {/* Conteúdo */}
</div>
```

---

## ✅ Checklist para Adicionar Imagens

### Antes de Adicionar
- [ ] Nome do arquivo segue o padrão SEO
- [ ] Tamanho: 1200x630px (ou proporção similar)
- [ ] Formato: JPG ou WebP (otimizado)
- [ ] Peso: < 300KB (idealmente < 200KB)
- [ ] Qualidade visual mantida após otimização

### Ao Usar no Código
- [ ] Alt-text descritivo e com palavras-chave
- [ ] Width e height especificados (Next.js Image)
- [ ] Priority se for above the fold
- [ ] Responsivo (sizes attribute se necessário)

### SEO
- [ ] Nome do arquivo contém palavras-chave principais
- [ ] Alt-text inclui palavras-chave naturalmente
- [ ] Imagem relevante ao conteúdo da página
- [ ] Meta tags Open Graph configuradas

---

## 📝 Resumo dos Nomes de Arquivos

| Serviço | Nome do Arquivo |
|---------|----------------|
| Puberdade Precoce | `puberdade-precoce-dra-giovana-martins-endocrinologista-pediatrica-bh.jpg` |
| Diabetes Infantil | `diabetes-infantil-dra-giovana-martins-endocrinologista-pediatrica-bh.jpg` |
| Baixa Estatura | `baixa-estatura-dra-giovana-martins-endocrinologista-pediatrica-bh.jpg` |
| Distúrbios da Tireoide | `disturbios-tireoide-dra-giovana-martins-endocrinologista-pediatrica-bh.jpg` |

---

## 🎯 Benefícios SEO da Nomenclatura

1. **Palavras-chave no nome do arquivo:** Google considera o nome do arquivo para SEO
2. **Localização (BH):** Ajuda no SEO local
3. **Nome da profissional:** Estabelece autoridade e marca pessoal
4. **Especialidade:** Reforça palavras-chave de nicho
5. **Consistência:** Facilita indexação e organização

**Nota:** O nome do arquivo é um fator de ranking menor, mas ainda contribui para SEO, especialmente quando combinado com alt-text descritivo e conteúdo relevante.

