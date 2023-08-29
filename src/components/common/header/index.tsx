import Link from 'next/link';
import styled from 'styled-components';

import * as Layout from '@/components/layout';
import { cvar, zIndex } from '@/styles/cssVar';

const Header = () => {
  return (
    <Nav>
      <Layout.Flex margin='auto' width='92%'>
        <Logo padding='5px 10px' justifyContent='center' alignItems='center' width='fit-content'>
          <Link href='/'>isSEO®</Link>
        </Logo>
      </Layout.Flex>
    </Nav>
  );
};

export default Header;

const Logo = styled(Layout.VStack)`
  background: ${cvar({ key: 'mainColor' })};
  border-radius: 5px;

  a {
    color: #fff;
    font-family: Consolas;
    font-size: 24px;
    font-weight: 400;
  }
`;

const Nav = styled.nav`
  position: sticky;
  top: 0;

  z-index: ${zIndex.nav};

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  width: 100%;
  max-width: 900px;
  height: 60px;

  background-color: rgb(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  border-bottom: solid 1px ${cvar({ key: 'gray', idx: '200' })};

  margin-bottom: 10px;
`;
