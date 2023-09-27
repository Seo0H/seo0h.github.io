export const siteConfig = {
  url: 'https://seo0h.github.io',
  title: 'Seo blog | 시오 블로그',
  description: '시오의 개발 기록 블로그',
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
