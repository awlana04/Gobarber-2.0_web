import { ElementType } from 'react';

interface IconProps {
  icon: ElementType;
  filled: boolean;
  errored: boolean;
}

export default function Icon({ icon: Icon, filled, errored }: IconProps) {
  return (
    <Icon
      data-filled={filled}
      data-errored={errored}
      className='absolute mx-8 -ml-72 mt-5 text-inputText data-[errored=true]:text-red data-[filled=true]:data-[errored=false]:text-orange data-[errored=false]:group-focus-within:text-orange max-lg:-ml-52'
    />
  );
}
