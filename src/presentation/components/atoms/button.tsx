import ButtonDisabledType from '@/presentation/types/button-disabled-type';
import { FiArrowRight } from 'react-icons/fi';

type ButtonProps = ButtonDisabledType &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    type: 'submit' | 'button';
    color?: 'orange' | 'black';
    children: React.ReactNode;
  };

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      type={props.type}
      disabled={props.isButtonDisabled}
      data-color={props.color === 'black'}
      className='bg-orange text-button-text hover:not-disable:bg-button-hover data-[color=true]:bg-input mt-4 h-14 w-96 cursor-pointer rounded-2xl disabled:opacity-50 data-[color=false]:mt-6 data-[color=false]:mb-6 data-[color=true]:text-start data-[color=true]:text-white max-lg:w-80 max-sm:w-72'
    >
      {props.color === 'black' ? (
        <div className='mx-8 flex flex-row items-center justify-between'>
          {children}
          <FiArrowRight className='text-2xl' />
        </div>
      ) : (
        children
      )}
    </button>
  );
}
