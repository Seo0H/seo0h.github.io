import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

import MainLogo from '@/assets/icons/MainLogo';
import { display, zIndex } from '@/constants/styles';
import { fadeIn } from '@/lib/animations';
import cvar from '@/utils/cvarAutoComp';

const Header = () => {
  return (
    <HeaderWrapper variants={fadeIn} initial='initial' animate='animate'>
      <Nav>
        <Link href='/'>
          <MainLogo />
        </Link>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled(motion.header)`
  position: sticky;
  top: 0;

  margin-bottom: 10px;
  margin: auto;

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
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 92%;
  margin: auto;

  svg {
    width: 100%;
    @media (width < ${display.tablet}) {
      width: 80%;
    }
  }
`;
