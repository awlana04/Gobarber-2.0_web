import Icon from '@/atoms/icon';

import { TextareaInputPropsMappedType } from '@/presentation/types/input-props-mapped-types';

type FormTextareaProps = TextareaInputPropsMappedType & {
  placeholder: string;
  name: string;
  iconName: React.ElementType;
};

export default function FormTextarea(props: FormTextareaProps) {
  return (
    <div
      onChange={props.handleTextareaFilled}
      className='group relative flex flex-col items-center py-2'
    >
      <Icon
        icon={props.iconName}
        filled={props.textareaFilled}
        errored={props.textareaErrored}
      />

      <textarea
        ref={props.textareaRef}
        placeholder={props.placeholder}
        name={props.name}
        defaultValue={props.textareaValue}
        data-filled={props.textareaFilled}
        data-errored={props.textareaErrored}
        className='bg-input text-orange placeholder:text-input-text focus:ring-orange focus:placeholder:text-orange data-[errored=true]:text-red data-[errored=true]:ring-red data-[filled=true]:data-[errored=false]:ring-orange data-[errored=true]:placeholder:text-red mb-2 h-48 w-96 resize-none rounded-xl px-12 py-4 outline-hidden focus:ring-2 data-[errored=true]:ring-2 data-[filled=true]:ring-2'
      />
    </div>
  );
}
