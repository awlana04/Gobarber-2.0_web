import Image from 'next/image';

type AvatarImageType = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  size: 'small' | 'big';
};

export default function AvatarImage({ src, size }: AvatarImageType) {
  return (
    <Image
      data-small={size === 'small'}
      className='h-24 w-24 rounded-full data-[small=true]:h-16 data-[small=true]:w-16'
      src={src}
      alt={'User avatar'}
      width={24}
      height={24}
    />
  );
}
