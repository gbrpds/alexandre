---
tags: [site, dominio, vercel, dns, vida-italiana]
projeto: "[[00 - Hub - Vida Italiana na Prática]]"
atualizado: 2026-11-23
---

# Domínio e hospedagem

## Onde está cada coisa
- **Domínio** `vidaitaliananapratica.com.br`: registrado no **Registro.br**.
- **DNS**: gerenciado pela **HostGator** (que usa Cloudflare por dentro). Na Vercel apareceu "Proxy Detected" até o proxy (nuvem laranja) ser desligado, deixando o registro em "DNS only".
- **Site**: Vercel (projeto estático).
- **E-mail do cliente**: Titan (registros MX `mx1/mx2.titan.email`, SPF e DKIM). **Nunca apagar esses registros** ao mexer no DNS.

## Registro recomendado na Vercel
CNAME `@` para o valor mostrado na Vercel (`...vercel-dns-017.com`), proxy desligado. Alternativa: registro A `76.76.21.21`.

## Incidente de 13/11/2026
O site mostrou "This deployment is temporarily paused". Causa: a **conta Hobby da Vercel** estourou o limite de Fluid Active CPU (consumo de **outro projeto** da conta, não deste: o site do Alexandre é 100% estático) e todos os projetos foram pausados até 12/12/2026. Resolvido pelo responsável em 13/11/2026.
**Lição:** misturar projetos de clientes numa conta Hobby deixa todos reféns de um só. Opções: plano Pro ou hospedar sites estáticos separados (Cloudflare Pages ou Netlify, de graça).

Ver [[Site - visão geral e decisões]].
