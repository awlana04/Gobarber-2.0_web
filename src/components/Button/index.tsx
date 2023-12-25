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
        <button className='my-6 h-14 w-96 rounded-2xl bg-orange text-buttonText hover:bg-buttonHover max-sm:my-4'>
          {children}
        </button>
      ) : (
        <Link href={href} className='my-6 max-sm:my-4 '>
          <button className='h-14 w-96 rounded-2xl bg-orange text-base text-buttonText hover:bg-buttonHover'>
            {children}
          </button>
        </Link>
      )}
    </div>
  );
}
