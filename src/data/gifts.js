export const CATEGORIES = [
  { id: 'todos', label: 'Todos os Mimos' },
  { id: 'mesas-utensilios', label: '🍽️ Mesa & Utensílios' },
  { id: 'decoracao', label: '🌿 Decoração & Conforto' },
  { id: 'cotas', label: '✨ Cotas para o Lar (Máx R$ 400)' },
  { id: 'custom', label: '💖 Valor Livre' },
];

export const GIFTS_DATA = [
  // Valor Livre
  {
    id: 'custom-amount',
    title: 'Mandar o Valor que Quiser',
    category: 'custom',
    price: null,
    isCustom: true,
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80',
    description: 'Um presente com o valor do seu coração para abençoar a Bru\'s House! Toda ajuda é recebida com um abraço bem apertado.',
    badge: 'Mais Escolhido',
    room: 'Qualquer Valor',
    popular: true
  },

  // Mesa & Utensílios
  {
    id: 'pipoqueira-eletrica',
    title: 'Pipoqueira Elétrica Prática',
    category: 'mesas-utensilios',
    price: 70,
    image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=600&q=80',
    description: 'Pipoca quentinha e crocante para as noitadas de filme e séries no sofá da Bru & Cat!',
    badge: 'Noite de Filme',
    room: 'Cozinha',
    popular: true
  },
  {
    id: 'kit-talheres',
    title: 'Kit de Garfos e Facas em Inox',
    category: 'mesas-utensilios',
    price: 140,
    image: '/images/mimo_talheres.jpg',
    description: 'Jogo completo de talheres de inox elegantes para nossas jantinhas e momentos especiais na mesa.',
    badge: 'Essencial',
    room: 'Cozinha'
  },
  {
    id: 'kit-copos',
    title: 'Kit de Copos de Vidro Design',
    category: 'mesas-utensilios',
    price: 95,
    image: '/images/mimo_copos.jpg',
    description: 'Copos lindos e resistentes para servir sucos, água e bons drinques pros amigos que vierem visitar.',
    badge: 'Mimo Fofo',
    room: 'Cozinha'
  },
  {
    id: 'potes-ambar',
    title: 'Kit Potes & Frascos de Âmbar',
    category: 'mesas-utensilios',
    price: 85,
    image: '/images/mimo_potes_ambar.jpg',
    description: 'Organização fofa de vidro âmbar para as prateleiras abertas da cozinha.',
    badge: 'Cozinha Fofa',
    room: 'Cozinha'
  },

  // Decoração & Conforto
  {
    id: 'kit-almofadas',
    title: 'Kit Almofadas Terracota & Verde',
    category: 'decoracao',
    price: 130,
    image: '/images/mimo_almofadas.jpg',
    description: 'Almofadas macias nos tons terrosos da casa para deixar o sofá ultra aconchegante.',
    badge: 'Aconchego',
    room: 'Sala'
  },
  {
    id: 'plantas-vasos',
    title: 'Vasos com Plantinhas & Folhagens',
    category: 'decoracao',
    price: 110,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80',
    description: 'Verde para trazer vida, ar puro e calmaria para o banheiro e prateleiras da sala.',
    badge: 'Vida no Lar',
    room: 'Banheiro / Sala'
  },
  {
    id: 'luminaria-luz-quente',
    title: 'Luminária / Abajur de Luz Quente',
    category: 'decoracao',
    price: 160,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
    description: 'Aquela iluminação amarelinha e acolhedora para relaxar no fim da tarde.',
    badge: 'Clima Gostoso',
    room: 'Sala'
  },

  // Cotas (Máximo R$ 400 por item)
  {
    id: 'cota-sofa',
    title: 'Cota do Sofá de Linho (Parte 1/3)',
    category: 'cotas',
    price: 400,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
    description: 'Ajuda para garantir o sofá macio onde a Bru e a Cat vão maratonar séries.',
    badge: 'Cota Conforto',
    room: 'Sala',
    popular: true
  },
  {
    id: 'cota-freezer-eletro',
    title: 'Cota do Freezer / Eletros (Parte 1/3)',
    category: 'cotas',
    price: 350,
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80',
    description: 'Sua parcela de carinho para guardar as marmitas e comidinhas gostosas da semana.',
    badge: 'Cota Eletro',
    room: 'Cozinha'
  },
  {
    id: 'cota-rack-vermelho',
    title: 'Cota do Rack Vermelho Destaque',
    category: 'cotas',
    price: 290,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
    description: 'Ajuda no móvel principal e mais charmoso do nosso projeto de sala.',
    badge: 'Cota Design',
    room: 'Sala'
  },
  {
    id: 'cota-aluguel',
    title: 'Uma Forcinha no Aluguel',
    category: 'cotas',
    price: 300,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
    description: 'Aquele alívio no aluguel para dar o start na casa nova com paz no coração!',
    badge: 'Super Ajuda',
    room: 'Aluguel'
  },
  {
    id: 'pizza-mudanca',
    title: 'Pizza da Mudança & Refri',
    category: 'cotas',
    price: 90,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    description: 'Mimo delicioso para matar a fome da Bru e da Cat enquanto abrem as caixas.',
    badge: 'Pizza Time',
    room: 'Mimo'
  }
];

export const INITIAL_MESSAGES = [
  {
    id: 'msg-lorena',
    name: 'Lorena Rosa',
    message: 'Bru e Cat, que sonho ver essa casa tomando forma! Vocês merecem o lar mais lindo e abençoado do mundo. Já quero nosso café da tarde aí! ❤️',
    amount: 140,
    giftTitle: 'Kit de Garfos e Facas em Inox',
    date: 'Hoje'
  },
  {
    id: 'msg-luiza',
    name: 'Luiza Revite',
    message: 'Amigas! Tenho certeza que a Bru\'s House vai ser o ponto de encontro de momentos inesquecíveis. Um beijo enorme pra Bru e pra Cat! 🥂✨',
    amount: 95,
    giftTitle: 'Kit de Copos de Vidro Design',
    date: 'Ontem'
  },
  {
    id: 'msg-malu',
    name: 'Malu Magalhaes',
    message: 'Bru e Cat <3! Um mimo com todo o meu amor para enfeitar a casa nova de vocês. Estou tão orgulhosa dessa conquista!',
    amount: 300,
    giftTitle: 'Uma Forcinha no Aluguel',
    date: 'Há 2 dias'
  }
];
