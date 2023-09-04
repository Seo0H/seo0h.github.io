import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

import MainLogo from '@/assets/icons/MainLogo';
import * as Layout from '@/components/layout';
import { zIndex } from '@/constants/styles';
import { fadeIn } from '@/lib/animations';
import cvar from '@/utils/cvarAutoComp';

const Header = () => {
  return (
    <Nav variants={fadeIn} initial='initial' animate='animate'>
      <Layout.Flex margin='auto' width='92%'>
        <Link href='/'>
          <MainLogo />
        </Link>
      </Layout.Flex>
    </Nav>
  );
};

export default Header;

const Nav = styled(motion.nav)`
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
