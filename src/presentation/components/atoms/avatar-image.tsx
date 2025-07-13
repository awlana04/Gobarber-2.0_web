import Image from 'next/image';

type AvatarImageType = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string | undefined;
  size: 'small' | 'big';
};

export default function AvatarImage({ src, size }: AvatarImageType) {
  return (
    <>
      {src ? (
        <Image
          data-small={size === 'small'}
          className='h-24 w-24 rounded-full data-[small=true]:h-16 data-[small=true]:w-16'
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
