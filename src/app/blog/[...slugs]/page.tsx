import { Metadata } from 'next';

import { Post } from 'contentlayer/generated';

import BlogLayout from '@/components/layout/blog';
import { siteConfig } from '@/config';
import { cleanAllPost } from '@/constants/blogDataset';
import getTag from '@/lib/useTag';

type Props = { params: { slugs: string[] } };

function Page(props: Props) {
  const { post } = getPost(props);
  return <BlogLayout post={post} />;
}

const getPost = ({ params }: Props) => {
  const { slugs } = params;
  const slug = `/${[...slugs].join('/')}`;
  const post = cleanAllPost.find((post) => post.url === slug) as Post;

  return { post };
};

export const generateStaticParams = () => {
  return cleanAllPost.map((post) => ({ slug: [`/blog${post.url}`] }));
};

export const generateMetadata = (props: Props): Metadata => {
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
};

export default Page;
