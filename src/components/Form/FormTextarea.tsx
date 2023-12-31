import { ElementType, forwardRef } from 'react';

import Icon from '../atoms/Icon';

import useHandleFilledHook from '@/hooks/useHandleFilledHook';

interface FormTextareaProps {
  placeholder: string;
  iconName: ElementType;
}

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ placeholder, iconName }, ref) => {
    const { isFilled, handleFilled } = useHandleFilledHook();

    return (
      <div
        onChange={handleFilled}
        className='group relative flex flex-col items-center py-2'
      >
        <Icon icon={iconName} filled={isFilled} />

        <textarea
          ref={ref}
          placeholder={placeholder}
          data-filled={isFilled}
          className='mb-2 h-48 w-96 resize-none rounded-xl bg-input px-12 py-4 text-orange outline-none placeholder:text-inputText focus:ring-2 focus:ring-orange focus:placeholder:text-orange data-[filled=true]:ring-2 data-[filled=true]:ring-orange data-[filled=true]:placeholder:text-orange'
        />
      </div>
    );
  }
);

FormTextarea.displayName = 'Textarea';

export default FormTextarea;
