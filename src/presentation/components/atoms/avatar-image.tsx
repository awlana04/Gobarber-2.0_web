import Image from 'next/image';

type AvatarImageType = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string | undefined;
  size: 'small' | 'medium' | 'large';
};

export default function AvatarImage({ src, size }: AvatarImageType) {
  return (
    <>
      {src ? (
        <Image
          data-size={size}
          className='h-24 w-24 rounded-full data-[size=medium]:h-20 data-[size=medium]:w-20 data-[size=small]:h-16 data-[size=small]:w-16'
          src={`${process.env.NEXT_PUBLIC_BACKEND_URI}/files/${src}`}
          alt={'User avatar'}
          width={24}
          height={24}
        />
      ) : (
        <div className='bg-grey h-24 w-24 rounded-full' />
      )}
    </>
  );
}
