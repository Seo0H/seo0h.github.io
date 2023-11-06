import Home from '@/app/home-page';
import { AllTags, cleanAllPost } from '@/constants/blogDataset';

export const getStaticProps = () => {
  return { posts: cleanAllPost, tags: AllTags };
};

export default async function Page() {
  const { posts, tags } = getStaticProps();
  return <Home posts={posts} tags={tags} />;
}
