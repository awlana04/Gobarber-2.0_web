import Image, { ImageProps } from 'next/image';
import { ImgHTMLAttributes, InputHTMLAttributes } from 'react';

type AsideImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

export default function AsideImage({ src, alt }: AsideImageProps) {
  return (
    <div className='opacity-1 h-screen w-screen max-lg:h-screen max-lg:w-screen max-sm:h-0 max-sm:w-0 max-sm:opacity-0'>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        className='fixed h-screen w-1/2 object-cover'
      />
    </div>
  );
}
