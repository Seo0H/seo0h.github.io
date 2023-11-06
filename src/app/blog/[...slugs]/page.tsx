import { Metadata, ResolvingMetadata } from 'next';

import { Post } from 'contentlayer/generated';

import BlogLayout from '@/components/layout/blog';
import { siteConfig } from '@/config';
import { cleanAllPost } from '@/constants/blogDataset';
import getTag from '@/lib/useTag';

import type { BlogProps } from '@/lib/types';

export const generateStaticParams = async () => {
  return cleanAllPost.map((post) => `/blog${post.url}`);
};

const Blog = ({ params }: { params: { slugs: string[] } }) => {
  const { post } = getPost(params);
  return <BlogLayout post={post} />;
};

type Props = {
  params: { slugs: string[] };
};

export const getPost = (params: { slugs: string[] }): BlogProps => {
  const { slugs } = params;
  const slug = `/${[...slugs].join('/')}`;
  const post = cleanAllPost.find((post) => post.url === slug) as Post;

  return { post };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { post } = getPost(params);
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
