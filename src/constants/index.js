const categorias = [
    {
      nome: 'Ação e Aventura',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'RPG',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Estratégia',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Esportes',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Simulação',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Corrida',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Luta',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const inicial = [
    {
      nome: 'Red Dead Redemption 2',
      tipo: 'Ação e Aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1634720000',
      categoria: categorias[0].nome
    },
    {
      nome: 'Shadow Of The Tomb Raider',
      tipo: 'Ação e Aventura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      categoria: categorias[0].nome
    },
    {
      nome: 'Starfield',
      tipo: 'RPG e Ação e Aventura Espacial',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg?t=1678388477',
      categoria: categorias[0].nome
    },
    {
      nome: 'The Elder Scrolls V',	
      tipo: 'RPG e Ação e Aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/72850/header.jpg?t=1647357402',
      categoria: categorias[0].nome
    },
    {
      nome: 'The Witcher 3',
      tipo: 'RPG e Ação e Aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1634720000',
      categoria: categorias[1].nome
    },
    {
      nome: 'Mass Effect 2',
      tipo: 'RPG e Ação e Aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/24980/header.jpg?t=1634720000',
      categoria: categorias[1].nome
    },
    {
      nome: 'Starfield',
      tipo: 'RPG e Ação e Aventura Espacial',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg?t=1678388477',
      categoria: categorias[1].nome
    },
    {
      nome: 'The Elder Scrolls V',	
      tipo: 'RPG e Ação e Aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/72850/header.jpg?t=1647357402',
      categoria: categorias[1].nome
    },
    {
      nome: 'The Witcher 3',
      tipo: 'RPG e Ação e Aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1634720000',
      categoria: categorias[2].nome
    },
    {
      nome: 'Mass Effect 2',
      tipo: 'RPG e Ação e Aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/24980/header.jpg?t=1634720000',
      categoria: categorias[2].nome
    },
    {
      nome: 'Starfield',
      tipo: 'RPG e Ação e Aventura Espacial',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg?t=1678388477',
      categoria: categorias[2].nome
    },
    {
      nome: 'The Elder Scrolls V',	
      tipo: 'RPG e Ação e Aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/72850/header.jpg?t=1647357402',
      categoria: categorias[2].nome
    },
    {
      nome: 'The Witcher 3',
      tipo: 'RPG e Ação e Aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1634720000',
      categoria: categorias[3].nome
    },
    {
      nome: 'Mass Effect 2',
      tipo: 'RPG e Ação e Aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/24980/header.jpg?t=1634720000',
      categoria: categorias[3].nome
    },
    {
      nome: 'Starfield',
      tipo: 'RPG e Ação e Aventura Espacial',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg?t=1678388477',
      categoria: categorias[3].nome
    },
    {
      nome: 'The Elder Scrolls V',	
      tipo: 'RPG e Ação e Aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/72850/header.jpg?t=1647357402',
      categoria: categorias[3].nome
    },
    {
      nome: 'The Witcher 3',
      tipo: 'RPG e Ação e Aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1634720000',
      categoria: categorias[4].nome
    },
    {
      nome: 'Mass Effect 2',
      tipo: 'RPG e Ação e Aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/24980/header.jpg?t=1634720000',
      categoria: categorias[4].nome
    },
    {
      nome: 'Starfield',
      tipo: 'RPG e Ação e Aventura Espacial',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg?t=1678388477',
      categoria: categorias[4].nome
    },
    {
      nome: 'The Elder Scrolls V',	
      tipo: 'RPG e Ação e Aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/72850/header.jpg?t=1647357402',
      categoria: categorias[4].nome
    },
    {
      nome: 'The Witcher 3',
      tipo: 'RPG e Ação e Aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1634720000',
      categoria: categorias[5].nome
    },
    {
      nome: 'Mass Effect 2',
      tipo: 'RPG e Ação e Aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/24980/header.jpg?t=1634720000',
      categoria: categorias[5].nome
    },
    {
      nome: 'Starfield',
      tipo: 'RPG e Ação e Aventura Espacial',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg?t=1678388477',
      categoria: categorias[5].nome
    },
    {
      nome: 'The Elder Scrolls V',	
      tipo: 'RPG e Ação e Aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/72850/header.jpg?t=1647357402',
      categoria: categorias[5].nome
    },
  ]
export  { categorias, inicial };