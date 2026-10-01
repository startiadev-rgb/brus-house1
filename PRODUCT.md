# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Amigos e familiares convidados para o cha de casa nova, acessando principalmente pelo celular e com pouco tempo para navegar.

## Product Purpose

Apresentar visualmente a nova casa e permitir que convidados escolham uma cota ou mimo, enviem a contribuicao por PIX e deixem um recado curto.

## Positioning

Um checkout editorial de casa nova com linguagem visual de marca de moda: fotografico, desejavel e rapido de comprar.

## Operating Context

A pagina e compartilhada por link e acessada majoritariamente em celulares. O caminho principal e ver a casa, escolher um mimo, copiar o PIX e deixar um comentario.

## Capabilities and Constraints

- React 19, Vite 8 e Tailwind CSS 4.
- Hospedagem atual na Vercel.
- Pagamento principal por PIX com valor associado ao mimo.
- Cada mimo abre diretamente a escolha de pagamento, sem carrinho ou etapa intermediaria.
- O checkout oferece PIX Inter para Catarina, a vista e sem taxa, ou cartao para Bruna Bueno via Mercado Pago Checkout Pro, com acrescimo transparente e no maximo tres parcelas.
- O site nao possui backend ou confirmacao bancaria automatica.
- Configuracoes e comentarios atuais usam localStorage e nao sao compartilhados entre visitantes.
- Cartao so pode ser oferecido por checkout externo real; o site nao deve coletar numero, validade ou CVV diretamente.
- A pagina deve ter exatamente tres secoes visuais: hero da casa, mimos e comentarios.

## Brand Commitments

- Nome: Bru's House.
- Tom curto, simpatico e levemente bem-humorado.
- Aparencia Pinterest girl contemporanea: neutro perolado, rosa-po e vermelho cereja, sem linguagem vintage ou classica.
- Tema claro fixo, com toda a tipografia preta e botoes transparentes de alto contraste.
- Referencia de e-commerce editorial de moda, nao de lista de casamento tradicional.
- Experiencia mobile-first.
- Fotografias da casa e dos mimos sao o principal conteudo.

## Evidence on Hand

- Quatro imagens renderizadas dos ambientes em `public/images/`.
- Quatro imagens locais de mimos em `public/images/`.
- Tres comentarios iniciais no catalogo atual. Eles nao devem ser apresentados como pagamentos verificados.
- Chave PIX configurada no projeto existente.
- Cada mimo usa uma imagem local exclusiva, sem repeticao entre os cards.

## Product Principles

- A casa aparece antes da explicacao.
- Cada tela pede uma decisao simples.
- Texto curto e humano, nunca cerimonial.
- Contribuicoes e pagamentos sao descritos com honestidade.
- O mobile e a experiencia principal, nao uma adaptacao do desktop.

## Accessibility & Inclusion

Fluxo principal navegavel por teclado, alvos de toque de pelo menos 44 px, foco visivel, contraste WCAG AA e respeito a reducao de movimento.
