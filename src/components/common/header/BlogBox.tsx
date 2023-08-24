import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Post } from 'contentlayer/generated';

import * as Layout from '@/components/layout';

const BlogBox = ({ post }: { post: Post }) => {
  return (
    <Link href={`/blog/[...slugs]`} as={`/blog${post.url}`}>
      <ListBoxWrapper gap='24px' alignItems='center'>
        <Layout.Box position='relative' width='240px' height='240px'>
          <Image
            style={{ objectFit: 'cover', borderRadius: '10px' }}
            src={post.image}
            alt='img'
            fill
          />
        </Layout.Box>
        <Layout.VStack gap='16px'>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <Layout.HStack gap='10px' alignItems='center'>
            <time suppressHydrationWarning>{dayjs(post.date).format('YY.MM.DD')}</time>
            <p>{`${post.readingTime} min read`}</p>
          </Layout.HStack>
        </Layout.VStack>
      </ListBoxWrapper>
    </Link>
  );
};

export default BlogBox;

const ListBoxWrapper = styled(Layout.HStack)`
  cursor: pointer;
  border-radius: 18px;
  border: 10px solid transparent;

  &:hover {
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  }
`;
