import { ElementType } from 'react';

interface FormTextareaProps {
  // icon: ElementType;
  placeholder: string;
}

export default function FormTextarea({
  // icon: Icon,
  placeholder,
}: FormTextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      className='m-auto mb-2 h-48 w-80 resize-none rounded-xl bg-input px-10 py-4 outline-none placeholder:text-inputText'
    />
  );
}
