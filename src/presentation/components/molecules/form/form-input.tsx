import { BaseInputPropsType } from '@/presentation/types/input-props-mapped-types';

import Icon from '@/atoms/icon';

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> &
  BaseInputPropsType & {
    iconName: React.ElementType;
    name: string;
    type: 'email' | 'password' | 'text';
    placeholder: string;
  };

export default function FormInput(props: FormInputProps) {
  return (
    <div
      className='relative flex flex-col items-center py-2'
      onChange={props.handleFilled}
    >
      <Icon
        icon={props.iconName}
        filled={props.filled}
        errored={props.errored}
      />

      <input
        type={props.type}
        name={props.name}
        ref={props.ref}
        defaultValue={props.value}
        placeholder={props.placeholder}
        data-filled={props.filled}
        data-errored={props.errored}
        className='bg-input text-orange placeholder:text-input-text focus:ring-orange focus:placeholder:text-orange data-[errored=true]:text-red data-[errored=true]:ring-red data-[filled=true]:data-[errored=false]:ring-orange data-[errored=true]:placeholder:text-red h-14 w-96 flex-row rounded-2xl px-12 outline-hidden focus:ring-2 data-[errored=true]:ring-2 data-[filled=true]:ring-2 max-lg:w-80 max-sm:w-72 max-sm:px-10'
      />
    </div>
  );
}
