import type { ReactNode } from 'react';

import { styled } from 'styled-components';

import Contacts from '@/components/common/Contacts';
import LinkExternal from '@/components/common/LinkExternal';
import * as Layout from '@/components/layout';
import { siteConfig } from '@/config';
import cvar from '@/utils/cvarAutoComp';

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout.VStack maxWidth='920px' margin='auto' width='92%' height='100%' alignItems='center'>
      {children}

      <Footer>
        <Layout.HStack gap='10px' width='100%' justifyContent='center'>
          <Contacts />
        </Layout.HStack>

        <p>
          <span>© 2023 </span>
          <LinkExternal href={siteConfig.author.contacts.github}>{siteConfig.title}</LinkExternal>
          <span> Powered by </span>
          <LinkExternal href='https://nextjs.org/'>Next.js</LinkExternal>
          <span>, </span>
          <LinkExternal href='https://pages.github.com/'>Github Pages</LinkExternal>
        </p>
      </Footer>
    </Layout.VStack>
  );
};

export default AppLayout;

const Footer = styled.footer`
  width: 92%;
  padding: 50px 0;

  p {
    text-align: center;
  }

  span,
  a {
    font-size: 12px;
    color: ${cvar({ key: 'gray', idx: '300' })};
  }

  a {
    text-decoration-line: underline;
  }
`;
