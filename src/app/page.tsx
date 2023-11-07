import { Metadata } from 'next';

import Home from '@/app/home-page';
import { DEFAULT_OG_IMAGE_URL, siteConfig } from '@/config';
import { AllTags, cleanAllPost } from '@/constants/blogDataset';

const getPageProps = () => {
  return { posts: cleanAllPost, tags: AllTags };
};

const { title, description, url } = siteConfig;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    url,
    title,
    images: [{ url: DEFAULT_OG_IMAGE_URL }],
  },
};

export default async function Page() {
  const { posts, tags } = getPageProps();
  return <Home posts={posts} tags={tags} />;
}
