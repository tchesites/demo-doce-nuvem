export const negocio = {
  nome: 'Doce Nuvem',
  assinatura: 'por Carla Menezes',
  descritor: 'Confeitaria artesanal em Canoas',
  cidade: 'Canoas',
  estado: 'RS',
  bairro: 'Centro',
  endereco: 'Rua das Camélias, 320',
  cep: '92310-000',
  instagram: '@docenuvem.confeitaria',
  // O @ exibido é fictício; o link aponta sempre para o Instagram da agência.
  instagramUrl: 'https://www.instagram.com/tchesites/',
  // WhatsApp fictício do projeto demonstrativo.
  whatsappUrl: 'https://wa.me/5551900000000',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Centro%2C+Canoas+-+RS',
  googleMapsEmbed:
    'https://www.google.com/maps?q=Centro%2C+Canoas+-+RS&z=14&output=embed',
  seguidores: '12,4 mil',
};

export const destaques = [
  {
    id: 'nuvens',
    nome: 'Nuvens',
    descricao:
      'Morango com ninho, brigadeiro, limão e churros.',
    precoLabel: 'R$ 25',
    detalhe: 'cada',
    imagem: 'nuvens.jpg',
    alt: 'Fatias de bolo caseiro ao lado de quatro sabores de Nuvens',
  },
  {
    id: 'combos',
    nome: 'Combos para festa',
    descricao:
      'Torta de 8 fatias e salgadinhos fresquinhos, do econômico ao completo.',
    precoLabel: 'a partir de R$ 100',
    detalhe: '',
    imagem: 'combos.jpg',
    alt: 'Três combos da Doce Nuvem com torta de oito fatias e salgadinhos',
  },
];

export const combos = [
  {
    id: 'economico',
    nome: 'Combo 1 — Econômico',
    itens: ['1 torta de 8 fatias', '30 salgadinhos'],
    preco: 100,
  },
  {
    id: 'festa',
    nome: 'Combo 2 — Festa',
    itens: ['1 torta de 8 fatias', '60 salgadinhos'],
    preco: 135,
  },
  {
    id: 'completo',
    nome: 'Combo 3 — Completo',
    itens: ['1 torta de 8 fatias', '90 salgadinhos'],
    preco: 175,
  },
];

export const comboEspecial = {
  nome: 'Combo Especial',
  itens: [
    '1 bolo de 8 fatias',
    '24 docinhos sortidos',
    '100 salgados variados',
    '1 refrigerante',
  ],
  preco: 270,
};

export const festival = {
  precoFatia: 25,
  precoStories: 20,
  regra: 'R$ 20 se você compartilhar nos stories e seguir a gente.',
  proximaData: 'A próxima data sai no Instagram.',
};

export const comoPedir = [
  {
    numero: '01',
    titulo: 'Escolha',
    texto:
      'Veja os destaques da semana ou peça o cardápio completo pelo WhatsApp.',
  },
  {
    numero: '02',
    titulo: 'Confirme',
    texto:
      'Combine sabor, tamanho e data. O valor final é confirmado no atendimento.',
  },
  {
    numero: '03',
    titulo: 'Retire ou receba',
    texto:
      'Retirada na Rua das Camélias, 320, ou entrega combinada pelo WhatsApp.',
  },
];
