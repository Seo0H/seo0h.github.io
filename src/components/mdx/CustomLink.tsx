import type { ComponentProps } from 'react';

import LinkExternal from '@/components/common/LinkExternal';

const CustomLink = ({ href, ...props }: ComponentProps<'a'>) => {
  if (href && isAnchor(href)) return <a href={href} {...props} />;
  else return <LinkExternal href={href} {...props} />;
};

export default CustomLink;

function isAnchor(href: string) {
  return href[0] === '#';
}
