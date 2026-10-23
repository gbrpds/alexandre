// Dados de contato e links do projeto.
export const SITE = {
  name: 'Vida Italiana na Prática',
  // Número no formato internacional, só dígitos (ex.: 39XXXXXXXXXX).
  whatsapp: '393793447644',
  instagram: 'https://www.instagram.com/vidaitaliananapratica.oficial/',
  tiktok: 'https://www.tiktok.com/@vidaitaliananapratica',
  youtube: 'https://www.youtube.com/@vidaitaliananapratica',
  // ID do vídeo da entrevista com Rafael e Luciana (parte final da URL do YouTube).
  videoDepoimento: '',
  guiaUrl: 'https://pay.hotmart.com/H103483390L?off=5svxi8vu',
};

// Questionários de pré-qualificação (Google Forms). As respostas ficam na conta Google do cliente.
// Para trocar de formulário, mude só aqui.
const gform = (id: string) => ({
  url: `https://docs.google.com/forms/d/e/${id}/viewform`,
  embed: `https://docs.google.com/forms/d/e/${id}/viewform?embedded=true`,
});
export const FORMS = {
  mentoria: gform('1FAIpQLSdlgeHYs9hsqgND64mkxGm36VW7DbDcneTmqL4DcMSzeupBiw'),
  assessoria: gform('1FAIpQLSe-pYX1tUdUPHi5OzbI3xOMC8-Ny0p6MMRLbYo1k8RUxhOqxw'),
};

const MSG_PADRAO = 'Olá, Alexandre! Vim pelo site do Vida Italiana na Prática e quero saber mais sobre a mentoria.';

// Link do WhatsApp com mensagem pronta. Sem número configurado, leva ao formulário do site.
export const waLink = (msg = MSG_PADRAO) =>
  SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}` : '/#contato';
