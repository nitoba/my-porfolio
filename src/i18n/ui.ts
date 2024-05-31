export const defaultLang = 'en' as const

export const languages = {
  en: 'English',
  pt: 'Portuguese',
} as const

export type Lang = keyof typeof languages

export const ui = {
  en: {
    'common.skills': 'Skills',
    'common.about': 'About Me',
    'common.projects': 'Projects',
    'common.contact': 'Contact Me',
    'hero.welcome': 'Hello I’am',
    'hero.dev': 'Developer',
    'hero.description':
      'My goal is to acquire new skills that will improve my performance and productivity, so that I can grow as a person and as a professional, adding more value to the team project. I have knowledge mainly in the construction of products focused on the areas of eco-commerce, landing-pages, Web three, crowdfunding. Being challenged and keeping myself in constant learning are my motivators.',
    'skills.my': 'My',
    'skills.skills': 'Skills',
    'about.me': 'Me',
    'about.about': 'About',
    'about.description1':
      "I'm a passionate, full stack development (React.js &#x26; Node.js) and all web ecosystem. I'm very enthusiastic about bringing the technical and visual aspects of digital products to life. I'm very excited about bringing to life digital products that can both impact and bring a good  experience to users. Writing readable, high-performance code is important to me.",
    'about.description2':
      "I began my journey as a web developer in 2019, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. I spend my day studying and developing myself by building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.",
    'about.description3':
      "When I'm not in full developer mode, you can find me reading, playing my guitar, or enjoying some free time. You can follow me on Twitter where I share technology-related information, or you can follow me on GitHub.",
    'projects.my': 'My',
    'projects.projects': 'Projects',
    'projects.in': 'In',
    'projects.development': 'Development',
    'projects.description_development':
      'Some projects using focusing in architecture and design pattern principals like Clean Architecture, DDD (Domain Driver Design), SOLID and so on. Follow then bellow',
    'projects.sell_all': 'See all on',
    'contact.lets': 'Let’s',
    'contact.talk': 'talk',
    'contact.for': 'for',
    'contact.special': 'Something special',
    'contact.find_me': 'OR FIND ME ON',
    'contact.send_message': 'Send me a message',
    'footer.copyright': 'All Rights Reserved.',
  },
  pt: {
    'common.skills': 'Habilidades',
    'common.about': 'Sobre',
    'common.projects': 'Projetos',
    'common.contact': 'Contato',
    'hero.welcome': 'Olá, eu sou',
    'hero.dev': 'Desenvolvedor',
    'hero.description':
      'Meu objetivo é adquirir novas competências que melhorem meu desempenho e produtividade, para que eu possa crescer como pessoa e como profissional, agregando mais valor ao projeto da equipe. Tenho conhecimento principalmente na construção de produtos voltados para as áreas de eco-commerce, landing-pages, Web three, crowdfunding. Ser desafiado e me manter em constante aprendizado são meus motivadores.',
    'skills.my': 'Minhas',
    'skills.skills': 'Habilidades',

    'about.me': 'Mim',
    'about.about': 'Sobre',
    'about.description1':
      'Sou um apaixonado por desenvolvimento full stack (React.js & #x26; Node.js) e todo ecossistema web. Estou muito entusiasmado em dar vida aos aspectos técnicos e visuais dos produtos digitais. Estou muito entusiasmado em dar vida a produtos digitais que possam impactar e trazer uma boa experiência aos usuários. Escrever código legível e de alto desempenho é importante para mim.',
    'about.description2':
      'Comecei minha jornada como desenvolvedor web em 2019 e, desde então, continuo crescendo e evoluindo como desenvolvedor, enfrentando novos desafios e aprendendo as tecnologias mais recentes ao longo do caminho. Passo o dia estudando e me desenvolvendo construindo aplicativos web de ponta usando tecnologias modernas como Next.js, TypeScript, Nestjs, Tailwindcss, Supabase e muito mais.',
    'about.description3':
      'Quando não estou no modo de desenvolvedor completo, você pode me encontrar lendo, tocando violão ou aproveitando o tempo livre. Você pode me seguir no Twitter, onde compartilho informações relacionadas à tecnologia, ou pode me seguir no GitHub.',

    'projects.my': 'Meus',
    'projects.projects': 'Projetos',
    'projects.in': 'Em',
    'projects.development': 'Desenvolvimento',
    'projects.description_development':
      'Alguns projetos usam foco em princípios de arquitetura e padrões de design como Clean Architecture, DDD (Domain Driver Design), SOLID e assim por diante. Siga abaixo',
    'projects.sell_all': 'Ver todos',
    'contact.lets': 'Vamos',
    'contact.talk': 'falar',
    'contact.for': 'de',
    'contact.special': 'Algo especial',
    'contact.find_me': 'OU ENCONTRE-ME EM',
    'contact.send_message': 'Envie-me uma mensagem',
    'footer.copyright': 'Todos os direitos reservados.',
  },
} as const
