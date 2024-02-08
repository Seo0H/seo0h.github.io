import { type Post as ContentlayerPost } from 'contentlayer/generated';

export type Post = ContentlayerPost & { tag: string; view: number };
