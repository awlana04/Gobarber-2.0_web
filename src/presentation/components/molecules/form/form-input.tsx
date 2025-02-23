import { ElementType, InputHTMLAttributes } from 'react';

import useHandleFilledHook from '@hooks/use-handle-filled-hook';

import Icon from '@components/atoms/icon';

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  iconName: ElementType;
  name: string;
  type: 'email' | 'password' | 'text';
  placeholder: string;
  errored: boolean;
};

export default function FormInput({
  iconName,
  type,
  name,
  placeholder,
  errored,
  ...rest
}: FormInputProps) {
  const { isFilled, handleFilled } = useHandleFilledHook();

  return (
    <div
      className='group relative flex flex-col items-center py-2'
      onChange={handleFilled}
    >
      <Icon icon={iconName} filled={isFilled} errored={errored} />

      <input
        type={type}
        name={name}
        {...rest}
        placeholder={placeholder}
        data-filled={isFilled}
        data-errored={errored}
        className='bg-input text-orange placeholder:text-input-text focus:ring-orange focus:placeholder:text-orange data-[errored=true]:text-red data-[errored=true]:ring-red data-[filled=true]:data-[errored=false]:ring-orange data-[errored=true]:placeholder:text-red h-14 w-96 flex-row rounded-2xl px-12 outline-hidden focus:ring-2 data-[errored=true]:ring-2 data-[filled=true]:ring-2 max-lg:w-80 max-sm:w-72 max-sm:px-10'
      />
    </div>
  );
}
