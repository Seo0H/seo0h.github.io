export const siteConfig = {
  url: 'https://seo0h.github.io',
  title: 'Seo blog',
  description: '',
  copyright: 'Seo © All rights reserved.',
  since: 2023,
  googleAnalyticsId: '',
  author: {
    name: 'Hwang Seoyoung',
    photo: 'https://avatars.githubusercontent.com/u/108770949?v=4',
    contacts: {
      email: 'seo0h9@gmail.com',
      github: 'Seo0H',
      instagram: 'maker.seo',
    },
  },
} as const;

export type ContactsKey = keyof typeof siteConfig.author.contacts;
