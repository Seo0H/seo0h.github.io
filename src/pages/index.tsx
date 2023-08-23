import { compareDesc } from 'date-fns';
import dayjs from 'dayjs';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Post, allPosts } from 'contentlayer/generated';

import * as Layout from '@/components/layout';

export default function Home({ posts }: { posts: Post[] }) {
  // console.log(posts);
  return (
    <Layout.Box padding='0 10px'>
      <Layout.Box margin='30px 0 25px 0'>
        <h1>Seo (young)</h1>
      </Layout.Box>
      <Layout.VStack gap='10px' margin='0 0 100px 0'>
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

      {posts.map((val) => (
        <Link key={val._id} href={{ pathname: `/blog/[slug]`, query: { slug: val._id } }}>
          <ListBoxWrapper gap='24px' alignItems='center'>
            <Layout.Box position='relative' width='240px' height='240px'>
              <Image
                style={{ objectFit: 'cover', borderRadius: '10px' }}
                src={val.image}
                alt='img'
                fill
              />
            </Layout.Box>
            <Layout.VStack gap='16px'>
              <h2>{val.title}</h2>
              <p>{val.description}</p>
              <p>{dayjs(val.date).format('YY.MM.DD')}</p>
            </Layout.VStack>
          </ListBoxWrapper>
        </Link>
      ))}
    </Layout.Box>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  return { props: { posts } };
};

const ListBoxWrapper = styled(Layout.HStack)`
  cursor: pointer;
  border-radius: 18px;
  border: 10px solid transparent;

  &:hover {
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  }
`;
