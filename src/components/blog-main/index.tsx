import { useState } from 'react';

import { PageSEO } from '@/components/SEO';
import PostsContext from '@/components/blog-main/context';
import Greeting from '@/components/blog-main/greeting';
import PostList from '@/components/blog-main/post-list';
import TagFilter from '@/components/blog-main/tag-filter';
import * as Layout from '@/components/layout';
import { Post } from '@/types/post';

import type { APIStatusType } from '@/api/views/type';

export type BlogMainProps = {
  posts: Post[];
  tags: string[];
};

const BlogMain = (props: BlogMainProps & { apiStatus: APIStatusType }) => {
  const { posts: allPosts, apiStatus } = props;
  const [displayPosts, setDisplayPosts] = useState(allPosts);

  return (
    <>
      <PageSEO />

      <Layout.Box padding='0 10px' margin='0 0 100px 0' width='92%'>
        <Greeting />
        <PostsContext.Provider value={{ allPosts, displayPosts, setDisplayPosts, apiStatus }}>
          <TagFilter tags={props.tags} />
          <PostList />
        </PostsContext.Provider>
      </Layout.Box>
    </>
  );
};

export default BlogMain;
