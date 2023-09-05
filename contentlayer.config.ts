import toc from '@jsdevtools/rehype-toc';
import { type FieldDefs, defineDocumentType, makeSource } from 'contentlayer/source-files';
import dayjs from 'dayjs';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';

const fields: FieldDefs = {
  title: { type: 'string', required: true },
  description: { type: 'string', required: true },
  date: { type: 'date', required: true },
  tag: { type: 'string', default: 'Daily' },
  draft: { type: 'boolean' },
  image: { type: 'string', default: '/img/default-thumbnail.png' },
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields,
  computedFields: {
    url: { type: 'string', resolve: (post) => `/${post._raw.flattenedPath}` },
    readingTime: {
      type: 'string',
      resolve: (post) => Math.ceil(readingTime(post.body.raw).minutes),
    },
    wordCount: {
      type: 'number',
      resolve: (post) => post.body.raw.split(/\s+/gu).length,
    },
    formattedDate: { type: 'string', resolve: (post) => dayjs(post.date).format('YY.MM.DD') },
  },
}));

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: 'poimandres',
};

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkToc],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, options],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
            ariaLabel: 'anchor',
          },
        },
      ],
      [toc, { headings: ['h2', 'h3', 'h4'] }],
    ],
  },
});
