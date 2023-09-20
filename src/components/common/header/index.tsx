import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

import MainLogo from '@/assets/icons/MainLogo';
import * as Layout from '@/components/layout';
import { display, zIndex } from '@/constants/styles';
import { fadeIn } from '@/lib/animations';
import cvar from '@/utils/cvarAutoComp';

const Header = () => {
  return (
    <HeaderWrapper variants={fadeIn} initial='initial' animate='animate'>
      <Nav>
        <Link href='/'>
          <ResMainLogo />
        </Link>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled(motion.header)`
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
  -webkit-backdrop-filter: blur(5px); // for safari

  border-bottom: solid 1px ${cvar({ key: 'gray', idx: '200' })};

  margin-bottom: 10px;
`;

const Nav = styled.nav`
  display: flex;
  margin: auto;
  width: 92%;
`;

const ResMainLogo = styled(MainLogo)`
  width: 100%;
  @media (width < ${display.tablet}) {
    width: 80%;
  }
`;
