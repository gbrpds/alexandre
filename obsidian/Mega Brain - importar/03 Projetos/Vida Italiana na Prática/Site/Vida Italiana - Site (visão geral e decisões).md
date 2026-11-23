---
tags: [site, tecnico, vida-italiana]
projeto: "[[Vida Italiana - Hub|00 - Hub - Vida Italiana na Prática]]"
atualizado: 2026-11-23
---

# Vida Italiana - Site (visão geral e decisões)

Site do projeto **Vida Italiana na Prática**: https://vidaitaliananapratica.com.br

## Objetivos
1. Captar leads para a mentoria e para a assessoria de aluguel (filtrando curiosos com o questionário).
2. Vender o guia digital na Hotmart.
3. Ganhar tráfego pelo Google com o blog.

## Stack
- **Astro 7** (site estático, sem funções de servidor), conteúdo do blog em Markdown (`content/blog`).
- Hospedagem: **Vercel**. Domínio no Registro.br, DNS pela HostGator/Cloudflare ([[Vida Italiana - Domínio e hospedagem|Domínio e hospedagem]]).
- Repositório: `gbrpds/alexandre`. Branch de desenvolvimento: `claude/elegant-mayer-pfz4tp`.
- Configurações do cliente em `src/config.ts` (WhatsApp, redes, links, formulários).

## Páginas
| Página | O que é |
|---|---|
| `/` | Home: hero, vitrine, quem conduz, história, jornada, diferencial (~50 apartamentos), objeções, depoimentos, guia, FAQ, galeria, contato |
| `/mentoria` | Questionário da mentoria (porta de entrada dos leads) |
| `/assessoria` | Questionário da assessoria de aluguel |
| `/obrigado-mentoria`, `/obrigado-assessoria` | Agradecimento + WhatsApp (noindex) |
| `/blog`, `/blog/[slug]` | Blog com 6 artigos (sumário lateral, CTA, JSON-LD) |
| `/guia` | Redireciona para a seção do guia na home |

## Contatos e links (em `src/config.ts`)
- WhatsApp: **+39 379 344 7644** (`393793447644`)
- Instagram `@vidaitaliananapratica.oficial` · TikTok `@vidaitaliananapratica` · YouTube `@vidaitaliananapratica`
- Guia: [[Vida Italiana - Guia digital (Hotmart)|Guia digital (Hotmart)]]

## Decisões que valem lembrar
- **Todo CTA da mentoria leva primeiro ao questionário.** O WhatsApp só aparece depois. Exceção atual: o botão verde flutuante e o link "WhatsApp" do rodapé ainda vão direto ao WhatsApp (decisão em aberto: apontar também ao questionário?).
- Depoimentos **sem nome** dos mentorados.
- Bloco "~50 apartamentos": 5 fotos de prédios e ruas da Itália que se alternam a cada ~4 s.
- Seção de depoimentos com 2 vídeos do YouTube (carregam só ao clicar).
- Desempenho: sem desfoque (blur) pesado, marquees só com CSS transform, reveal só com opacidade e translate.
- O blog **não usa links externos**.
- **Google Meu Negócio:** não priorizado. O público está no Brasil e a mentoria é online, o que não se encaixa nas regras do GMN. Só faria sentido para a assessoria de aluguel como "empresa de área de serviço" (Monza/Milão), e o Alexandre deve confirmar antes a situação dele como servidor público. Ação barata e recomendada: cadastrar o domínio no **Google Search Console**.
