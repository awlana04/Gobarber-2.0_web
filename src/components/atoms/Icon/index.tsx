import { ElementType } from 'react';

interface IconProps {
  icon: ElementType;
  filled: boolean;
}

export default function Icon({ icon: Icon, filled }: IconProps) {
  return (
    <Icon
      data-filled={filled}
      className='absolute mx-8 -ml-72 mt-5 text-inputText group-focus-within:text-orange data-[filled=true]:text-orange max-lg:-ml-52'
    />
  );
}
