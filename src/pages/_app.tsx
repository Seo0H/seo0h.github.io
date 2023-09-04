
import Header from '@/components/common/header';
import AppLayout from '@/components/layout/AppLayout';
import { fontPretendard } from '@/styles/fonts';
import GlobalStyles from '@/styles/globals';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main style={fontPretendard.style}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </main>
    </>
  );
}
