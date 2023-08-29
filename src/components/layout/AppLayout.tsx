import type { ReactNode } from 'react';

import { styled } from 'styled-components';

import * as Layout from '@/components/layout';
import { fontPretendard } from '@/lib/fonts';

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout.VStack
      maxWidth='920px'
      margin='auto'
      width='100%'
      height='100%'
      alignItems='center'
      className={fontPretendard.className}
    >
      {children}
    </Layout.VStack>
  );
};

export default AppLayout;
