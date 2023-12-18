import Image, { ImageProps } from 'next/image';

export default function ImageContainer({ src, alt }: ImageProps) {
  return (
    <div className='opacity-1 h-screen w-screen max-sm:h-0 max-sm:w-0 max-sm:opacity-0'>
      <Image src={src} alt={alt} className='fixed h-fit w-1/2 bg-cover' />
    </div>
  );
}
