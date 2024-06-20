import type { ComponentProps } from 'react';

import LinkExternal from '@/components/common/LinkExternal';

export const Link = ({ href, ...props }: ComponentProps<'a'>) => {
  if (href && isAnchor(href)) return <a href={href} {...props} />;
  else return <LinkExternal href={href} {...props} />;
};

function isAnchor(href: string) {
  return href[0] === '#';
}
