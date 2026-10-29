// Perguntas dos questionários, copiadas dos Google Forms do Alexandre.
// Cada "entry" é o código da pergunta no Google Forms: é por ele que a resposta chega na planilha.
// Se o Alexandre mudar uma pergunta ou opção no Google Forms, atualize aqui também.

export type Pergunta = {
  entry: string;
  titulo: string;
  tipo: "texto" | "email" | "tel" | "paragrafo" | "radio" | "checkbox";
  ajuda?: string;
  obrigatoria?: boolean;
  opcoes?: string[];
  outro?: boolean;
  max?: number;
};
export type Secao = {
  titulo: string | null;
  descricao: string | null;
  perguntas: Pergunta[];
};
// paginasGoogle: quantas páginas o formulário tem no Google (o envio precisa informar todas).
export type Questionario = { paginasGoogle: number; secoes: Secao[] };

export const QUESTIONARIOS: Record<"mentoria" | "assessoria", Questionario> = {
  mentoria: {
    paginasGoogle: 9,
    secoes: [
      {
        titulo: "Identificação",
        descricao: null,
        perguntas: [
          {
            entry: "1667310596",
            titulo: "Nome completo",
            tipo: "texto",
            obrigatoria: true,
          },
          {
            entry: "2105006936",
            titulo: "E-mail para contato",
            tipo: "email",
            obrigatoria: true,
          },
          {
            entry: "2010222114",
            titulo: "Telefone com WhatsApp (com DDD)",
            tipo: "tel",
            obrigatoria: true,
          },
          {
            entry: "2101974736",
            titulo: "Instagram ou rede social (opcional)",
            tipo: "texto",
          },
        ],
      },
      {
        titulo: "Composição familiar",
        descricao: null,
        perguntas: [
          {
            entry: "173465099",
            titulo: "Quantas pessoas farão parte da mudança para a Itália?",
            tipo: "radio",
            obrigatoria: true,
            opcoes: [
              "Apenas eu",
              "Eu + 1 pessoa (casal)",
              "Eu + filhos",
              "Família completa (pais, filhos, outros)",
              "Ainda estou decidindo",
            ],
          },
          {
            entry: "531284394",
            titulo: "Idade de todos que irão migrar",
            tipo: "paragrafo",
            ajuda: "Exemplo: Eu – 39 anos, esposa – 36 anos, filho – 12 anos",
            obrigatoria: true,
          },
          {
            entry: "60202449",
            titulo: "Há alguém com dupla cidadania italiana?",
            tipo: "radio",
            obrigatoria: true,
            opcoes: ["Sim", "Não", "Em processo", "Tenho dúvidas sobre isso"],
          },
        ],
      },
      {
        titulo: "Objetivo da mudança",
        descricao: null,
        perguntas: [
          {
            entry: "2053488011",
            titulo: "Qual o principal motivo da sua mudança para a Itália?",
            tipo: "checkbox",
            obrigatoria: true,
            opcoes: [
              "Melhor qualidade de vida",
              "Educação dos filhos",
              "Emprego",
              "Aposentadoria / Vida tranquila",
              "Empreender na Europa",
            ],
            outro: true,
          },
          {
            entry: "313358768",
            titulo: "Já tem uma data estimada para a mudança?",
            tipo: "radio",
            obrigatoria: true,
            opcoes: [
              "Sim, já marcada",
              "Dentro de 3 a 6 meses",
              "Em 6 a 12 meses",
              "Ainda sem previsão",
            ],
          },
        ],
      },
      {
        titulo: "Cidade e região",
        descricao: null,
        perguntas: [
          {
            entry: "833115451",
            titulo: "Já tem uma cidade ou região preferida na Itália?",
            tipo: "texto",
            obrigatoria: true,
          },
          {
            entry: "1495988903",
            titulo:
              "Caso a cidade ou região já tenha sido escolhida, qual o motivo da escolha?",
            tipo: "paragrafo",
          },
          {
            entry: "20170894",
            titulo: "O que é mais importante para você na escolha do local?",
            tipo: "checkbox",
            obrigatoria: true,
            opcoes: [
              "Empregos disponíveis",
              "Custo de vida mais baixo",
              "Proximidade de brasileiros",
              "Clima / Natureza",
              "Educação",
            ],
            outro: true,
          },
        ],
      },
      {
        titulo: "Profissão e renda",
        descricao: null,
        perguntas: [
          {
            entry: "2132304353",
            titulo: "Qual sua profissão atual ou formação?",
            tipo: "texto",
            obrigatoria: true,
          },
          {
            entry: "74537972",
            titulo: "Já trabalhou ou morou fora do Brasil?",
            tipo: "radio",
            obrigatoria: true,
            opcoes: ["Sim", "Não"],
          },
          {
            entry: "131870087",
            titulo: "Quais línguas você fala e em que nível?",
            tipo: "paragrafo",
            obrigatoria: true,
          },
          {
            entry: "275971478",
            titulo: "Já está buscando emprego na Itália?",
            tipo: "radio",
            obrigatoria: true,
            opcoes: [
              "Sim, já comecei",
              "Ainda não sei como procurar",
              "Ainda estou avaliando essa parte",
            ],
          },
          {
            entry: "1098657600",
            titulo:
              "Tem alguma renda no Brasil que pode continuar usando na Itália?",
            tipo: "radio",
            obrigatoria: true,
            opcoes: ["Sim", "Não", "Parcialmente"],
          },
          {
            entry: "563836157",
            titulo:
              "Qual é a reserva financeira para o projeto na Itália ( em Euros ) ?",
            tipo: "radio",
            opcoes: ["Até 10K", "Entre 10 e 30K", "Acima de 30K"],
            outro: true,
          },
          {
            entry: "552261059",
            titulo: "Você pretende trabalhar remoto ou buscar emprego local?",
            tipo: "paragrafo",
            obrigatoria: true,
          },
        ],
      },
      {
        titulo: "Moradia",
        descricao: null,
        perguntas: [
          {
            entry: "1809053930",
            titulo:
              "Já tem ideia de onde vai morar (aluguel, casa própria, com parentes, etc)?",
            tipo: "paragrafo",
            obrigatoria: true,
          },
          {
            entry: "1779940996",
            titulo:
              "Tem dúvidas ou dificuldades em relação ao aluguel ou contrato de moradia?",
            tipo: "radio",
            obrigatoria: true,
            opcoes: ["Sim", "Não", "Não tenho certeza do que preciso"],
          },
        ],
      },
      {
        titulo: "Planejamento geral",
        descricao: null,
        perguntas: [
          {
            entry: "632497035",
            titulo:
              "Já tem os documentos italianos? (Cidadania, passaporte, permesso di soggiorno etc.)",
            tipo: "radio",
            obrigatoria: true,
            opcoes: [
              "Tudo em ordem",
              "Em processo",
              "Ainda não tenho nada",
              "Tenho dúvidas",
            ],
          },
          {
            entry: "650226077",
            titulo:
              "Está preparado para lidar com a língua italiana no início?",
            tipo: "radio",
            obrigatoria: true,
            opcoes: [
              "Sim, estou estudando",
              "Entendo o básico",
              "Ainda não comecei",
              "Pretendo começar em breve",
            ],
          },
          {
            entry: "202770936",
            titulo:
              "Já sabe como funciona a escola para os filhos (se for o caso)?",
            tipo: "radio",
            obrigatoria: true,
            opcoes: [
              "Sim",
              "Tenho uma ideia geral",
              "Ainda não sei nada",
              "Não se aplica",
            ],
          },
          {
            entry: "1242115634",
            titulo:
              "Tem algum parente ou contato residente na Itália, se sim, em qual Cidade ?",
            tipo: "texto",
            obrigatoria: true,
          },
        ],
      },
      {
        titulo: "Personalização da mentoria",
        descricao: null,
        perguntas: [
          {
            entry: "1995789889",
            titulo: "Quais são suas 3 maiores dúvidas neste momento?",
            tipo: "paragrafo",
            obrigatoria: true,
          },
          {
            entry: "966189628",
            titulo: "Qual o seu maior medo hoje em relação à mudança?",
            tipo: "paragrafo",
          },
          {
            entry: "770940957",
            titulo:
              "Que tipo de ajuda você espera nessa mentoria de 90 minutos?",
            tipo: "paragrafo",
            obrigatoria: true,
          },
          {
            entry: "2117986551",
            titulo:
              "Tem algum outro detalhe importante sobre sua situação que gostaria de compartilhar?",
            tipo: "paragrafo",
            obrigatoria: true,
          },
        ],
      },
    ],
  },
  assessoria: {
    paginasGoogle: 5,
    secoes: [
      {
        titulo: "O Ponto de Partida (Identificação e Perfil)",
        descricao:
          "Seja muito bem-vindo ao portal de preparação do seu Caminho Seguro na Itália. Mudar de país com dignidade e proteção exige engenharia e clareza. Para que eu possa ser as suas pernas e os seus olhos aqui no solo italiano, preciso compreender detalhadamente quem está vindo comigo nesta jornada. Quanto mais preciso você for nas respostas, mais forte será a nossa base.",
        perguntas: [
          {
            entry: "1362404345",
            titulo: "Nome Completo",
            tipo: "texto",
            obrigatoria: true,
          },
          {
            entry: "1520723897",
            titulo: "E-mail de Contato",
            tipo: "email",
            obrigatoria: true,
          },
          {
            entry: "1882920211",
            titulo: "WhatsApp com DDD (informe se for número internacional)",
            tipo: "tel",
            obrigatoria: true,
          },
          {
            entry: "1560359006",
            titulo:
              "Composição do Núcleo Familiar: Quem fará parte da mudança?",
            tipo: "radio",
            obrigatoria: true,
            opcoes: [
              "Apenas eu",
              "Casal",
              "Casal com filhos",
              "Família completa (incluindo avós ou outros parentes)",
            ],
          },
          {
            entry: "850335042",
            titulo: "Idade de todos os componentes que irão residir no imóvel",
            tipo: "paragrafo",
            obrigatoria: true,
            ajuda:
              "Exemplo: Eu ( Alexandre ) - 52 anos, esposa ( Clarissa ) - 54 anos, filha ( Camille ) - 28 anos.",
          },
          {
            entry: "251534606",
            titulo: "Data pretendida ou previsão de desembarque na Itália",
            tipo: "radio",
            obrigatoria: true,
            opcoes: [
              "Já tenho data marcada",
              "Próximos 3 meses",
              "De 3 a 6 meses",
              "De 6 a 12 meses",
            ],
          },
        ],
      },
      {
        titulo: "O Cenário Documental (Controle de Fronte)",
        descricao:
          "Aqui fazemos uma micro-mentoria de controle documental. No mercado imobiliário italiano, a sua documentação é o seu passaporte de entrada para a aceitação de uma proposta. Preciso mapear exatamente o que vocês já possuem em mãos para saber como estruturar a nossa defesa junto aos proprietários.",
        perguntas: [
          {
            entry: "1167086474",
            titulo:
              "Quais documentos ITALIANOS os membros da família JÁ POSSUEM fisicamente? ( Marque todas as que se aplicam )",
            tipo: "checkbox",
            obrigatoria: true,
            opcoes: [
              "Passaporte Italiano",
              "Carta d'Identità (Carteira de Identidade Italiana)",
              "Codice Fiscale (CPF Italiano)",
              "Tessera Sanitaria (Cartão do SUS italiano)",
              "Nenhum documento italiano pronto ainda (apenas certidões ou passaporte brasileiro)",
            ],
          },
          {
            entry: "1654943847",
            titulo: "Status da Cidadania Europeia no núcleo familiar",
            tipo: "radio",
            obrigatoria: true,
            opcoes: [
              "Já reconhecida (somos cidadãos europeus)",
              "Processo via judicial em andamento (com sentença favorável ou aguardando)",
              "Pretendo fazer o reconhecimento residencial assim que chegar",
              "Viremos através de Visto (Estudo, Trabalho, Investidor, etc.)",
            ],
          },
        ],
      },
      {
        titulo: "A Engenharia Financeira (A Origem dos Recursos)",
        descricao:
          'Conversar sobre números e finanças é um assunto delicado, e eu compreendo perfeitamente que muitas pessoas preferem não se expor. No entanto, o mercado de aluguel na Itália é extremamente rígido e complexo. Como seu assessor, eu serei o interlocutor da sua família; serei eu quem colocará a cara, o meu nome e a minha credibilidade de 23 anos de país na mesa para brigar pelo seu "SIM".\nEu não quero e não preciso saber o patrimônio total que você possui, mas prezo pela máxima clareza sobre os recursos que usaremos para demonstrar garantias ao proprietário. Sem comprovação sólida, o mercado italiano simplesmente não avança. As respostas aqui são tratadas com absoluto sigilo profissional.',
        perguntas: [
          {
            entry: "517068227",
            titulo:
              "Como a família pretende demonstrar a subsistência e o pagamento do aluguel na Itália? ( Marque as opções que compõem a sua realidade )",
            tipo: "checkbox",
            obrigatoria: true,
            opcoes: [
              "Aposentadoria (Renda de benefício do Brasil ou outro país)",
              "Trabalho Remoto / Nômade Digital (Contrato de trabalho ou empresa no Brasil/Exterior)",
              "Renda de Investimentos (Dividendos, aplicações financeiras demonstráveis)",
              "Renda de Aluguéis (Imóveis locados no Brasil que geram receita mensal)",
              "Contrato de Trabalho Italiano / Busta Paga (Garantido por empresa local)",
              "Demonstração exclusiva por Extratos Bancários de alta liquidez (Reserva expressiva em conta corrente)",
              "Sócio de Empresa no Brasil (Pró-labore ou Distribuição de Lucros com IRPF dos últimos 2 anos",
            ],
          },
          {
            entry: "861574693",
            titulo:
              "Qual é o teto máximo de orçamento mensal planejado para o aluguel (valor seco, sem condomínio)?",
            tipo: "radio",
            obrigatoria: true,
            opcoes: [
              "Até € 600 / mês",
              "De € 600 a € 900 / mês",
              "De € 900 a € 1.300 / mês",
              "De € 1.300 a € 1.800 / mês",
              "Acima de € 1.800 / mês",
            ],
          },
          {
            entry: "1927807798",
            titulo:
              "Reserva financeira líquida destinada exclusivamente para a transição de moradia ( Lembre-se que o mercado italiano exige de 2 a 3 meses de caução (deposito cauzionale), o mês corrente e a comissão da imobiliária. )",
            tipo: "radio",
            obrigatoria: true,
            opcoes: [
              "Até € 5.000",
              "Entre € 5.000 e € 12.000",
              "Acima de € 12.000",
            ],
          },
        ],
      },
      {
        titulo: "O Objetivo da Casa & Estilo de Vida",
        descricao:
          "Aqui desenhamos o mapa do seu teto na Itália. Uma casa não é apenas um conjunto de paredes; é o ambiente que vai acolher a sua rotina, o estudo dos seus filhos, o seu descanso e a sua saúde. Vamos alinhar as prioridades geográficas e estruturais do imóvel para fazermos uma pré-seleção cirúrgica.",
        perguntas: [
          {
            entry: "1655860040",
            titulo:
              "Qual é a região geográfica ou província de preferência na Itália?",
            tipo: "texto",
            obrigatoria: true,
          },
          {
            entry: "1378983311",
            titulo:
              "Elementos mais importantes para o ambiente da residência: ( Escolha no máximo 3 prioridades )",
            tipo: "checkbox",
            obrigatoria: true,
            opcoes: [
              "Metrópole: Proximidade de grandes centros urbanos e ritmo dinâmico",
              "Transporte Público: Estar colado em estações de trem ou linhas de metrô/ônibus",
              "Educação Básica: Escolas infantis ou de ensino médio próximas para os filhos",
              "Universidade: Proximidade de polos universitários",
              "Saúde: Proximidade de hospitais e centros de especialidades médicas",
              "Silêncio Absoluto: Zona residencial pacata, sem barulho de comércio ou tráfego",
              "Serviços a pé: Conveniência de fazer mercado, farmácia e comércio no dia a dia sem carro",
              "Vida Cultural: Acesso fácil a teatros, cinemas, restaurantes e lazer",
            ],
            max: 3,
          },
          {
            entry: "347725895",
            titulo: "Tipologia do Imóvel — O que vocês buscam idealmente?",
            tipo: "radio",
            obrigatoria: true,
            opcoes: [
              "Quarto individual",
              "Monocale (Studio /JK)",
              "Bilocale (1 quarto e sala)",
              "Trilocale (2 quartos e sala)",
              "Quadrilocale ou maior (3+ quartos)",
              "Casa independente / Villa",
            ],
          },
          {
            entry: "480207333",
            titulo:
              "Necessidades Primordiais do Imóvel ( Marque o que for indispensável )",
            tipo: "checkbox",
            obrigatoria: true,
            opcoes: [
              "Mínimo de 2 banheiros",
              "Presença de elevador (se for apartamento em andar alto)",
              "Garagem fechada (Box) ou vaga de estacionamento reservada",
              "Aceita animais de estimação (Pets)",
              "Quintal, jardim ou terraço amplo",
            ],
          },
          {
            entry: "1003226127",
            titulo: "Preferência de Aquecimento (Riscaldamento)",
            tipo: "radio",
            obrigatoria: true,
            opcoes: [
              "Autonomo (Você controla o consumo e liga quando quiser)",
              "Centralizzato (Condomínio controla os horários, valor embutido nas despesas condominiais)",
              "Tanto faz / Preciso de orientação sobre isso",
            ],
          },
          {
            entry: "1069467163",
            titulo: "Estado de Mobília do Imóvel",
            tipo: "radio",
            obrigatoria: true,
            opcoes: [
              "Arredato (Totalmente mobiliado): Pronto para entrar, com camas, sofás, armários e eletrodomésticos.",
              "Non Arredato (Sem mobília): Quero comprar tudo do meu jeito, decorar e montar a casa do zero.",
              "Parzialmente Arredato: Apenas com a cozinha e banheiro montados.",
            ],
          },
        ],
      },
      {
        titulo: "O Choque de Realidade & Alinhamento de Expectativas",
        descricao:
          "Para finalizarmos, preciso que você guarde uma regra de ouro do front italiano no seu coração: a primeira casa na Itália nem sempre é aquela que nós escolheríamos em um cenário ideal.\nNo mercado imobiliário daqui, nós não temos como controlar a mente do proprietário. É ele quem decide aceitar ou não um inquilino. Por mais que a minha assessoria seja forte, que eu use argumentos técnicos e convença o agente imobiliário, a palavra final é sempre do dono.\nPortanto, partam do princípio de que, enquanto não estamos completamente inseridos no contexto social e econômico do país, não somos nós que escolhemos a casa: é a casa que nos escolhe. Nós faremos uma pré-seleção rigorosa com base no que você preencheu acima, mas quando a oportunidade real se apresentar e a proposta for aceita, a decisão precisa ser rápida e cirúrgica para garantir o seu ingresso seguro no país. Vocês estão cientes e de acordo com essa dinâmica de mercado?",
        perguntas: [
          {
            entry: "207072988",
            titulo:
              "Compreendo e estou de acordo com a realidade do mercado imobiliário italiano exposta acima.",
            tipo: "radio",
            obrigatoria: true,
            opcoes: [
              "Sim, compreendo perfeitamente e confio no método para encontrar a melhor oportunidade segura.",
            ],
          },
          {
            entry: "1751070904",
            titulo:
              "Existe algum outro detalhe primordial, medo ou histórico de saúde/logística que você considera essencial que eu saiba antes de começarmos?",
            tipo: "paragrafo",
          },
        ],
      },
    ],
  },
};
