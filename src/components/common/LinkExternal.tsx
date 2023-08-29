import { ComponentProps } from 'react';

export default function LinkExternal({ children, className, ...props }: ComponentProps<'a'>) {
  return (
    <a {...props} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  );
}
