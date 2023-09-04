import Link from 'next/link';
import styled from 'styled-components';

import * as Layout from '@/components/layout';
import { zIndex } from '@/constants/styles';
import { consolas } from '@/styles/fonts';
import cvar from '@/utils/cvarAutoComp';

const Header = () => {
  return (
    <Nav>
      <Layout.Flex margin='auto' width='92%'>
        <Logo padding='5px 10px' justifyContent='center' alignItems='center' width='fit-content'>
          <Link href='/' style={consolas.style}>
            isSEO®
          </Link>
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
    font-size: 24px;
  }
`;

const Nav = styled.nav`
  position: sticky;
  margin: auto;
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
