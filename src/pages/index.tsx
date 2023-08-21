/* eslint-disable react/no-unescaped-entities */
import * as Layout from '@/components/layout';

export default function Home() {
  return (
    <>
      <Layout.Box margin='30px 0 25px 0'>
        <h1>Seo (young)</h1>
      </Layout.Box>
      <Layout.VStack gap='10px'>
        <p>
          I am a front-end developer who loves design and coding.
          <br />
          This is a small space where I record the problems I faced while making the product.
        </p>
        -
        <p>
          디자인과 코딩을 사랑하는 프론트엔드 개발자입니다. 무언가를 만들어내는 것을 사랑하는
          메이커이기도 해요.
          <br />
          이곳은 제가 메이킹을 하며 마주한 문제들을 기록해 둔 소소한 공간입니다.
        </p>
      </Layout.VStack>
    </>
  );
}
