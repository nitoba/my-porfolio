export const defaultLang = 'en' as const

export const languages = {
  en: 'English',
  pt: 'Portuguese',
}

export const ui = {
  en: {
    header: {
      skills: 'Skills',
      about: 'About Me',
      projects: 'Projects',
      contact: 'Contact Me',
    },
  },
  pt: {
    header: {
      skills: 'Habilidades',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
    },
  },
} as const
