import Link, { LinkProps } from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends LinkProps {
  type: 'submit' | 'button';
  children: ReactNode;
}

export default function Button({ type, href, children }: ButtonProps) {
  return (
    <div>
      {type === 'submit' ? (
        <button className='my-6 h-14 w-96 rounded-2xl bg-orange text-buttonText hover:bg-buttonHover max-lg:w-80 max-sm:w-72'>
          {children}
        </button>
      ) : (
        <Link href={href}>
          <button className='my-6 h-14 w-96 rounded-2xl bg-orange text-base text-buttonText hover:bg-buttonHover max-lg:w-80 max-sm:w-72'>
            {children}
          </button>
        </Link>
      )}
    </div>
  );
}
