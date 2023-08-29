import Link from 'next/link';
import styled from 'styled-components';

import * as Layout from '@/components/layout';
import { cvar } from '@/styles/cssVar';

const Header = () => {
  return (
    <Nav>
      <Layout.Flex>
        <Logo padding='5px 10px' justifyContent='center' alignItems='center' width='fit-content'>
          <Link href='/'>isSEO®</Link>
        </Logo>
      </Layout.Flex>
      <hr />
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
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  height: 90px;
`;
