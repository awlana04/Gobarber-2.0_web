import { ElementType, forwardRef } from 'react';

import Icon from '@components/atoms/icon';

import useHandleFilledHook from '@hooks/use-handle-filled-hook';

interface FormTextareaProps {
  placeholder: string;
  iconName: ElementType;
  errored: boolean;
}

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ placeholder, iconName, errored }, ref) => {
    const { isFilled, handleFilled } = useHandleFilledHook();

    return (
      <div
        onChange={handleFilled}
        className='group relative flex flex-col items-center py-2'
      >
        <Icon icon={iconName} filled={isFilled} errored={errored} />

        <textarea
          ref={ref}
          placeholder={placeholder}
          data-filled={isFilled}
          data-errored={errored}
          className='mb-2 h-48 w-96 resize-none rounded-xl bg-input px-12 py-4 text-orange outline-hidden placeholder:text-inputText focus:ring-2 focus:ring-orange focus:placeholder:text-orange data-[errored=true]:text-red data-[errored=true]:ring-2 data-[filled=true]:ring-2 data-[errored=true]:ring-red data-[filled=true]:data-[errored=false]:ring-orange data-[errored=true]:placeholder:text-red'
        />
      </div>
    );
  }
);

FormTextarea.displayName = 'Textarea';

export default FormTextarea;
