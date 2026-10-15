// Dados de contato e links do projeto.
// TODO: preencher com os dados reais do Alexandre.
export const SITE = {
  name: 'Vida Italiana na Prática',
  // Número no formato internacional, só dígitos (ex.: 39XXXXXXXXXX).
  whatsapp: '',
  instagram: '',
  youtube: '',
  // ID do vídeo da entrevista com Rafael e Luciana (parte final da URL do YouTube).
  videoDepoimento: '',
  guiaUrl: 'https://guerzoni9.hotmart.host/pagina-de-vendas-6c4bcb33-194f-427d-a1d0-5b4876a7278b',
};

const MSG_PADRAO = 'Olá, Alexandre! Vim pelo site do Vida Italiana na Prática e quero saber mais sobre a mentoria.';

// Link do WhatsApp com mensagem pronta. Sem número configurado, leva ao formulário do site.
export const waLink = (msg = MSG_PADRAO) =>
  SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}` : '/#contato';
