import type { ComponentProps } from 'react';

const CustomImg = ({ src, alt, ...props }: ComponentProps<'img'>) => {
  return (
    <>
      <img src={src as string} alt={alt as string} loading='lazy' />
      <span className='alt'>{alt}</span>
    </>
  );
};

export default CustomImg;
