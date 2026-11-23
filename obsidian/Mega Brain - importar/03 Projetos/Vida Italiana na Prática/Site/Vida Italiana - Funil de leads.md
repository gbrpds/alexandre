---
tags: [site, funil, leads, vida-italiana]
projeto: "[[Vida Italiana - Hub|00 - Hub - Vida Italiana na Prática]]"
atualizado: 2026-11-23
---

# Vida Italiana - Funil de leads

## Problema original
O link da bio do Instagram levava direto ao WhatsApp: muito curioso que pergunta e some. O Alexandre mandava manualmente um link do Google Forms (um `forms.gle` diferente a cada vez).

## Solução
1. Bio do Instagram aponta para `/mentoria` e `/assessoria` (links curtos, fáceis de falar).
2. A pessoa responde o questionário **dentro do site** (visual do site, em etapas, com validação).
3. Ao enviar, as respostas vão para o **Google Forms do Alexandre** (aba Respostas, planilha e e-mail seguem como antes). O site **não guarda nenhum dado**.
4. A pessoa vai para `/obrigado-...`, que abre o WhatsApp do Alexandre com mensagem pronta e o primeiro nome dela.
5. Quem não preenche, não chega ao WhatsApp. É a pré-seleção que ele queria.

## Como funciona tecnicamente
- Perguntas em `src/data/questionarios.ts`, copiadas dos Google Forms com os códigos `entry.NNN` de cada pergunta.
- O envio é um `POST` (modo `no-cors`) para `https://docs.google.com/forms/d/e/<ID>/formResponse`.
- **Se o Alexandre mudar uma pergunta ou opção no Google Forms, o site precisa ser atualizado também.**
- O Google Form não pode exigir login nem "Limitar a 1 resposta".
- Teste pendente em produção: enviar uma resposta "TESTE SITE" em cada formulário e conferir se chega na planilha (depois apagar).

## Aviso de e-mail
A notificação por e-mail de nova resposta é ativada **dentro de cada Google Form** (aba Respostas, três pontinhos, "Receber notificações por e-mail"), logado na conta do Alexandre.

Ver [[Vida Italiana - Questionários (mentoria e assessoria)|Questionários - mentoria e assessoria]].
