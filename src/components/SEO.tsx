import { ArticleJsonLd, NextSeo } from 'next-seo';

import { siteConfig } from '@/config';

const DEFAULT_OG_IMAGE_URL = `${siteConfig.url}/og/image.jpg`;

const additionalLinks = [
  {
    rel: 'icon',
    href: `${siteConfig.url}/og/favicon.png`,
  },
  {
    rel: `apple-touch-icon`,
    href: `${siteConfig.url}/og/apple-touch-icon.png`,
    sizes: `180x180`,
  },
];

const getImageUrl = (img?: string) => {
  if (!img) return DEFAULT_OG_IMAGE_URL;
  if (img.startsWith('https://')) return img;

  return `${siteConfig.url}/${img}`;
};

const getUrl = (url?: string) => {
  if (!url) return siteConfig.url;

  return `${siteConfig.url}${url}`;
};

export const PageSEO = (props: {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}) => {
  const title = props.title ?? siteConfig.title;
  const description = props.description ?? siteConfig.description;
  const url = getUrl(props.url);
  const image = props.image ?? DEFAULT_OG_IMAGE_URL;

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: [{ url: image }],
      }}
      additionalLinkTags={additionalLinks}
    />
  );
};

export const BlogSeo = ({
  summary,
  tag,
  images,
  ...props
}: {
  title: string;
  summary: string;
  date: string;
  url: string;
  tag: string;
  images: string[];
}) => {
  const title = props.title ?? siteConfig.title;
  const url = getUrl(props.url);
  const dateTime = new Date(props.date).toISOString();
  const imageList = images.length ? images.map(getImageUrl) : [DEFAULT_OG_IMAGE_URL];

  return (
    <>
      <NextSeo
        title={title}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: dateTime,
            modifiedTime: dateTime,
            authors: [`https://github.com/Seo0H`],
            tags: [tag],
          },
          url,
          title,
          description: summary,
          images: imageList.map((img) => ({ url: img })),
        }}
        additionalLinkTags={additionalLinks}
      />
      <ArticleJsonLd
        datePublished={dateTime}
        dateModified={dateTime}
        images={imageList}
        url={url}
        title={title}
        description={summary}
        authorName={siteConfig.author.name}
        publisherName={siteConfig.author.name}
        publisherLogo={`${siteConfig.url}/favicon.ico`}
      />
    </>
  );
};
