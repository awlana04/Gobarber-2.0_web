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
        <button className='my-6 bg-orange max-sm:my-4'>{children}</button>
      ) : (
        <Link href={href} className='m-auto my-6 max-sm:my-4'>
          <button>{children}</button>
        </Link>
      )}
    </div>
  );
}
