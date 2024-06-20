import type { ComponentProps } from 'react';

import styled from 'styled-components';

import cvar from '@/utils/cvarAutoComp';

export const Img = ({ src, alt, ...props }: ComponentProps<'img'>) => {
  return (
    <>
      <Image src={src as string} alt={alt as string} loading='lazy' />
      <Alt className='alt'>{alt}</Alt>
    </>
  );
};

const Image = styled.img`
  max-width: 100%;

  display: block;
  position: relative;
  margin: 5px auto;
  object-fit: cover;

  border-radius: 10px;
  border: 1px solid ${cvar({ key: 'gray', idx: '200' })};
`;

const Alt = styled.span`
  display: block;
  text-align: center;
  font-size: small;
`;
