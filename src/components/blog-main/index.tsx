import { PageSEO } from '@/components/SEO';
import Greeting from '@/components/blog-main/greeting';
import PostList from '@/components/blog-main/post-list';
import * as Layout from '@/components/layout';
import { Post } from '@/types/post';

export type BlogMainProps = {
  posts: Post[];
  tags: string[];
};

const BlogMain = (props: BlogMainProps) => {
  return (
    <>
      <PageSEO />

      <Layout.Box padding='0 10px' margin='0 0 100px 0' width='92%'>
        <Greeting />
        <PostList {...props} />
      </Layout.Box>
    </>
  );
};

export default BlogMain;
