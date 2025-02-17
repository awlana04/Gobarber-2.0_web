import { ElementType, ImgHTMLAttributes } from 'react';

type IconProps = ImgHTMLAttributes<HTMLCanvasElement> & {
  icon: ElementType;
  filled: boolean;
  // errored: boolean;
};

export default function Icon({ icon: Icon, filled }: IconProps) {
  return (
    <Icon
      data-testid='iconElement'
      data-filled={filled}
      // data-errored={errored}
      className='text-input-text data-[errored=true]:text-red data-[filled=true]:text-orange data-[filled=true]:data-[errored=false]:text-orange group-focus-within:text-orange group-focus-within:data-[errored=false]:text-orange absolute mx-8 mt-5 -ml-72 max-lg:-ml-52'
    />
  );
}
