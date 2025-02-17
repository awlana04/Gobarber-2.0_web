import { ElementType } from 'react';

import Icon from '@components/atoms/icon';

import useHandleFilledHook from '@hooks/use-handle-filled-hook';

interface FormTextareaProps {
  placeholder: string;
  name: string;
  iconName: ElementType;
  // errored: boolean;
}

export default function FormTextarea({
  placeholder,
  iconName,
  name,
}: FormTextareaProps) {
  const { isFilled, handleFilled } = useHandleFilledHook();

  return (
    <div
      onChange={handleFilled}
      className='group relative flex flex-col items-center py-2'
    >
      <Icon
        icon={iconName}
        filled={isFilled}
        // errored={errored}
      />

      <textarea
        placeholder={placeholder}
        name={name}
        data-filled={isFilled}
        // data-errored={errored}
        className='bg-input text-orange placeholder:text-inputText focus:ring-orange focus:placeholder:text-orange data-[errored=true]:text-red data-[errored=true]:ring-red data-[filled=true]:data-[errored=false]:ring-orange data-[errored=true]:placeholder:text-red mb-2 h-48 w-96 resize-none rounded-xl px-12 py-4 outline-hidden focus:ring-2 data-[errored=true]:ring-2 data-[filled=true]:ring-2'
      />
    </div>
  );
}
