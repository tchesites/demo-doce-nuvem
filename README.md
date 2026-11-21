# Doce Nuvem (demo)

- **Cliente:** Doce Nuvem — *marca fictícia (projeto demonstrativo)*
- **Entidade:** tche-sites
- **Stack:** astro
- **Status:** ativo
- **Repo:** `tchesites/demo-doce-nuvem` — `git@github.com-tchesites:tchesites/demo-doce-nuvem.git`
- **No ar:** https://tchesites.github.io/demo-doce-nuvem/
- **Como rodar:** `npm install` · `npm run dev` (`http://localhost:4321/demo-doce-nuvem/`) · `npm run build` · `npm run preview`

## Sobre

Demo de site institucional e vitrine para confeitaria artesanal, derivado do
layout de uma proposta da agência. Mantém a direção visual original — menta,
rosa, chocolate e creme, com Playfair Display, Yellowtail e Nunito Sans — com
marca, produtos, endereço, contatos e fotos fictícios.

**Nada aqui é dado real:** marca, responsável, endereço, WhatsApp, Instagram,
seguidores e cardápio são inventados. O rodapé traz o aviso de projeto
demonstrativo.

## Dados fictícios

| Item | Valor |
|---|---|
| Marca | Doce Nuvem — por Carla Menezes |
| Cidade | Canoas/RS — Centro |
| Endereço | Rua das Camélias, 320 · CEP 92310-000 |
| WhatsApp | `wa.me/5551900000000` |
| Instagram | [@docenuvem.confeitaria](https://www.instagram.com/tchesites/) |
| Seguidores | 12,4 mil (ilustrativo) |
| Destaques | Nuvens (R$ 25) · Combos de torta + salgados (R$ 100–270) |

## Identidade visual

- **Paleta:** menta `#7BD8D0`, rosa `#F2559B`, chocolate `#3D2115`, creme
  `#FFF7EE` e rosa-cta `#C92F79`.
- **Tipografia:** Playfair Display (títulos), Yellowtail (script) e Nunito Sans
  (texto).
- **Logo:** selo circular “DN” gerado para o demo, no lugar do selo do cliente.
- **OG image:** 1200×630 gerada a partir da marca e de uma foto de bolo.

## Estrutura

- `src/pages/index.astro` — página única (hero, destaques, combos, festival, sobre, como pedir, local)
- `src/data/negocio.js` — dados fictícios e cardápio
- `src/components/` — Header, Footer, Logo, WhatsAppFloat e ícones
- `src/assets/fotos/` — fotos do banco Pexels
- `public/` — favicon, apple-touch-icon, OG image, robots e sitemap

## Decisões

- **Fotos:** Pexels (IDs 31456805, 7354613, 19870066 e 8902301), no lugar das
  artes de campanha e do retrato do cliente.
- **WhatsApp e Maps fictícios**, com endereço inventado em Canoas.
- **Sem depoimentos** e sem números reais de avaliação.
- **JSON-LD `Bakery`** com endereço, cardápio e Instagram fictícios; sem
  `aggregateRating`.
- **Indexável por padrão**, canonical e sitemap apontando para o GitHub Pages.
- **Links internos via `url()`**, com base `/demo-doce-nuvem`.

## Deploy

Em **https://tchesites.github.io/demo-doce-nuvem/**, via GitHub Pages com
`.github/workflows/deploy.yml` (`withastro/action` + `deploy-pages`). O repo é
público, com o topic `demo`, e o Pages usa **GitHub Actions** como source.

Qualquer push na `main` builda e publica.
