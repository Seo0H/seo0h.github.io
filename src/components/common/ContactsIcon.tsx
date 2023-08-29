/* eslint-disable no-undef */
import type { ComponentProps } from 'react';

import Github from '@/assets/fonts/icons/Github';
import Mail from '@/assets/fonts/icons/Mail';

import type { ContactsKey } from '@/config';

type Icons = {
  [key in ContactsKey]?: ({
    className,
    width,
    height,
    ...props
  }: ComponentProps<'svg'>) => JSX.Element;
};

const icons: Icons = {
  email: Mail,
  github: Github,
};

export default function ContactsIcon({
  contact,
  ...props
}: ComponentProps<'svg'> & { contact: keyof typeof icons }) {
  const Component = icons[contact];

  if (Component === undefined) return null;
  return <Component {...props} />;
}
