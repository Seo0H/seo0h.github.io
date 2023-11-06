import React from 'react';

import { Metadata } from 'next';
import Script from 'next/script';

import Header from '@/components/common/header';
import AppLayout from '@/components/layout/AppLayout';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from '@/styles/globals';

export const metadata: Metadata = {
  verification: {
    google: 'hrZSTzuX86qT1XQK9Q3oYEv6DQNixlYGwZkiod1mvEs',
    other: {
      naver: ['7ef5e520261e981fd6678836e9a97ea0b6ab1bd2'],
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <GlobalStyles />
      <body>
        <StyledComponentsRegistry>
          <Header />
          <AppLayout>{children}</AppLayout>
        </StyledComponentsRegistry>
      </body>

      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      ></Script>
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </html>
  );
}
