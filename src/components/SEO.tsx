import { NextSeo } from 'next-seo';

import { siteConfig } from '@/config';

const DEFAULT_OG_IMAGE_URL = `${siteConfig.url}/images/og-image.jpg`;

export const PageSEO = (props: {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}) => {
  const title = props.title ?? siteConfig.title;
  const description = props.description ?? siteConfig.description;
  const url = props.url ?? siteConfig.url;
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
    />
  );
};
