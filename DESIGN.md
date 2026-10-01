---
name: "Bru's House"
description: "Checkout editorial de casa nova com a contenção visual de um e-commerce de moda contemporâneo."
colors:
  ground: "#f6f5f6"
  surface: "#fdfcfd"
  ink: "#201d1f"
  muted: "#201d1f"
  line: "#dad5d8"
  cherry: "#c52d4e"
  cherry-dark: "#921b35"
  powder-pink: "#f1e6ea"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.15rem, 5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5.5vw, 4.7rem)"
    fontWeight: 700
    lineHeight: 1.01
    letterSpacing: "-0.04em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(0.92rem, 1.6vw, 1.06rem)"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  card-mobile: "7px"
  card: "8px"
  hero-glass: "18px"
  field: "12px"
  circle: "50%"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    height: "48px"
    padding: "0 18px"
  button-primary-hover:
    backgroundColor: "rgba(32,29,31,0.06)"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
  gift-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "18px"
  filter-active:
    backgroundColor: "transparent"
    textColor: "#201d1f"
    rounded: "{rounded.pill}"
    height: "44px"
---

# Design System: Bru's House

## Overview

**Creative North Star: "The Contemporary House Edit"**

Bru's House é um checkout editorial mobile-first: a casa aparece antes da explicação, a fotografia domina e os controles têm a precisão discreta de um e-commerce de moda. A personalidade é Pinterest girl contemporânea, com neutro perolado, rosa-pó e cereja, sem referências vintage, clássicas, românticas ou ornamentais.

O sistema é limpo, fotográfico e direto. O tema é claro e fixo, com toda a tipografia preta e controles transparentes. Títulos grandes criam desejo; textos curtos e componentes compactos mantêm o percurso rápido: ver a casa, escolher um mimo e concluir por PIX.

**Key Characteristics:**

- fotografia em escala generosa e crops intencionais;
- tipografia única, sans e compacta;
- superfícies claras, tipografia preta e acento cereja raro e funcional;
- cards editoriais com pouco ruído e preço tabular;
- movimento reservado a transições de imagem e feedback de ação.

## Colors

A base perolada e quase neutra deixa as fotografias conduzirem; o preto sustenta toda a tipografia e o cereja marca seleção e foco.

- **Cherry:** foco, seleção e micro-rótulos; no hover, pode escurecer para `cherry-dark`.
- **Powder Pink:** apoio tonal e seleção de texto, nunca fundo dominante.
- **Ground / Surface:** fundo geral creme e cartões em papel claro, usados para separar planos sem contornos pesados.
- **Ink / Muted / Line:** toda a tipografia usa preto; hierarquia secundária vem de tamanho, peso e espaço, enquanto `line` cria divisórias discretas.

**The Cherry Is a Signal Rule.** O vermelho não é decoração espalhada: ele identifica o próximo gesto, o estado ativo ou uma informação editorial curta.

## Typography

**Display e Body:** stack sans nativa do sistema, começando pela fonte de interface da Apple quando disponível.

A stack nativa sustenta a aparência contemporânea e melhora o carregamento. Títulos usam peso 700, tracking negativo e quebra balanceada; corpo permanece compacto, arejado e legível. Preços usam algarismos tabulares.

- **Display:** hero e chamadas de maior impacto; no mobile, `clamp(1.95rem, 9vw, 2.35rem)` com line-height 1.04.
- **Headline:** títulos de seção; no mobile, `clamp(2rem, 11vw, 3.1rem)`.
- **Body:** descrições curtas com largura máxima entre 520–540px.
**The One-Family Rule.** Não introduza serifas, scripts ou fontes com sabor vintage; hierarquia vem de escala, peso e espaçamento dentro da stack nativa.

## Layout

O container principal mede `min(1180px, calc(100% - 32px))`; abaixo de 680px, usa `calc(100% - 28px)`. Seções têm respiro vertical fluido entre 78px e 148px, reduzido a 76px no mobile.

- **Acima de 900px:** navegação completa; grade de mimos com quatro colunas.
- **Até 900px:** navegação textual some; grade de mimos passa a três colunas.
- **Até 680px:** experiência principal. Grade de mimos com duas colunas e gap de 9px; recados viram trilho horizontal com scroll snap; modal vira bottom sheet; filtros permanecem roláveis.
- **Hero:** usa `clamp(620px, 82dvh, 760px)` no desktop e `clamp(580px, 78dvh, 680px)` no mobile. A foto fica em card 16:9, sem ampliação full-bleed.

Alvos interativos devem ter ao menos 44px. Não acrescente uma quarta seção de conteúdo nem transforme o mobile em uma versão comprimida do desktop.

## Elevation & Depth

Profundidade é suave e neutra. Cards de produto usam sombra ambiente de baixa opacidade sem borda. O hero é a única exceção: sua moldura liquid-glass usa borda interna, blur e sombra para preservar a fotografia de baixa resolução. O modal é o plano mais elevado, com backdrop escuro e blur.

## Shapes

Cards e fotografias usam cantos discretos (7–8px). Campos e botões do fluxo PIX podem ser mais táteis (12px); o bottom sheet móvel chega a 18px nos cantos superiores. Círculos são reservados a ícones e avatares. Pills aparecem somente em filtros e na ação compacta do topo.

## Components

### Hero e seletor de ambientes

Cada fotografia aparece em um card 16:9 com moldura liquid-glass sobre uma versão muito suave e desfocada da própria cena. Isso evita esticar os arquivos de 1024px por toda a tela. A troca de ambiente faz crossfade de 500ms e leve redução de escala em 900ms; o item ativo é indicado por texto e filete preto. Em `prefers-reduced-motion`, transições são praticamente removidas.

### Cards de mimo

Cards em papel claro, sem borda, com mídia dominante e texto compacto. A grade usa fotografia 4:5; o card de valor livre ocupa duas colunas e usa crop panorâmico (aprox. 2.04:1 no desktop e 2.12:1 no mobile). No hover, apenas a imagem aproxima levemente e o ícone recebe deslocamento mínimo.

**Regras das imagens dos mimos:**

- Os mimos novos usam arquivos exclusivos em `public/images/gifts/<id>.webp`; nenhum card reutiliza uma imagem de ambiente ou de outro mimo.
- Gerar fotografias verticais em 4:5, com resolução suficiente para crop em `object-fit: cover`; manter produto e detalhe essencial dentro da área central segura.
- Usar luz natural/quente, styling contemporâneo e fundo editorial coerente com creme, rosa-pó e materiais da casa; evitar aparência vintage, romântica, artesanal nostálgica ou de catálogo genérico.
- Não embutir texto, preço, selos, molduras ou marcas na imagem. Essas informações pertencem ao card.
- Manter consistência de exposição, temperatura e distância visual entre todos os mimos; não misturar render, recorte em fundo branco e lifestyle no mesmo conjunto.
- Nunca repetir o mesmo arquivo, crop ou cena entre hero, galeria e catálogo.

### Filtros e botões

Filtros são pills horizontais transparentes com 44px de altura, contorno e texto pretos. O ativo continua transparente e recebe um contorno interno cereja de 2px. Todas as ações usam fundo transparente, texto preto, altura mínima de 44–48px e feedback sutil no hover/active. Foco visível é sempre um outline cereja de 3px com offset de 3px.

### Cards de recado e modal PIX

Recados são superfícies altas, arejadas e com conteúdo truncado em três linhas. O modal mantém hierarquia funcional: título, campos, ação primária, confirmação honesta e retorno de sucesso. Em telas pequenas, ancora no rodapé e respeita `100dvh`.

### Carrinho de cotas

O botão do topo mostra a quantidade total e abre um drawer lateral no desktop ou bottom sheet no mobile. Cada mimo pode ser somado mais de uma vez; a revisão permite aumentar, diminuir ou remover itens antes de gerar um único PIX pelo total. Controles seguem o tema claro fixo, com fundo transparente, texto preto e alvos de toque de pelo menos 44px.

No checkout, PIX e cartão aparecem como opções paralelas no desktop e empilhadas no mobile. PIX apresenta o subtotal sem taxa; cartão mostra subtotal, acréscimo, total e estimativa de até três parcelas antes do redirecionamento seguro ao Mercado Pago.

## Do's and Don'ts

### Do:

- **Do** deixar fotografia e títulos grandes criarem a emoção; controles ficam discretos.
- **Do** manter a sequência visual casa → mimos → recados e uma decisão principal por tela.
- **Do** preservar foco visível, alvos de 44px, contraste AA e redução de movimento.
- **Do** usar textos curtos, simpáticos e levemente bem-humorados.

### Don't:

- **Don't** introduzir serifas, florais, papel envelhecido, ornamentos ou qualquer linguagem vintage.
- **Don't** espalhar glassmorphism ou sombras coloridas; o efeito liquid-glass é reservado ao card fotográfico do hero.
- **Don't** transformar cards em painéis com borda + sombra + muitos badges.
- **Don't** publicar mimos novos com imagens de ambiente, URLs externas instáveis ou proporções inconsistentes.
