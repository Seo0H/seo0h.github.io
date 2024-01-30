import { motion } from 'framer-motion';

import * as Layout from '@/components/layout';
import * as Style from '@/components/style';
import { fadeIn, staggerHalf } from '@/lib/animations';

const Greeting = () => {
  return (
    <motion.section variants={staggerHalf} initial='initial' animate='animate'>
      <motion.div variants={fadeIn}>
        <Layout.Box margin='30px 0 25px 0'>
          <h1>Seo / 시오</h1>
        </Layout.Box>
      </motion.div>

      <motion.div variants={fadeIn}>
        <Layout.VStack gap='10px' margin='0 0 50px 0'>
          <Style.GettingP>
            I am a front-end developer who loves design and coding.
            {`
        This is a space where I record the experiences I encountered while making.`}
          </Style.GettingP>
          -
          <Style.GettingP>
            디자인과 코딩을 사랑하는 프론트엔드 개발자입니다.{' '}
            {`
        이곳은 제가 메이킹을 하며 마주한 경험들을 기록해 둔 공간입니다.`}
          </Style.GettingP>
        </Layout.VStack>
      </motion.div>
    </motion.section>
  );
};

export default Greeting;
