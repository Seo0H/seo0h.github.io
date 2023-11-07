import { Metadata, ResolvingMetadata } from 'next';

import { Post } from 'contentlayer/generated';

import BlogLayout from '@/components/layout/blog';
import { siteConfig } from '@/config';
import { cleanAllPost } from '@/constants/blogDataset';
import getTag from '@/lib/useTag';

import type { BlogProps } from '@/lib/types';

type Props = { params: { slugs: string[] } };

export const generateStaticParams = () => {
  return cleanAllPost.map((post) => `/blog${post.url}`);
};

const Blog = (props: Props) => {
  const { post } = getPost(props);
  return <BlogLayout post={post} />;
};

export const getPost = ({ params }: Props): BlogProps => {
  const { slugs } = params;
  const slug = `/${[...slugs].join('/')}`;
  const post = cleanAllPost.find((post) => post.url === slug) as Post;

  return { post };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { post } = getPost(props);
  const { tag } = getTag(post);
  const { title, description, image, url } = post;
  const absoluteUrl = `${siteConfig.url}${url}`;

  return {
    title,
    description,
    alternates: { canonical: absoluteUrl },
    openGraph: {
      images: [image],
      url: absoluteUrl,
      tags: [tag],
      description,
    },
  };
}

export default Blog;
