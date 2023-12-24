import Link, { LinkProps } from 'next/link';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends LinkProps {
  type: 'submit' | 'button';
}

export default function Button({ type, href }: ButtonProps) {
  return (
    <div>
      {type === 'submit' ? (
        <button className='my-6 bg-orange max-sm:my-4'>Cadastrar</button>
      ) : (
        <Link href={href} className='m-auto my-6 max-sm:my-4'>
          <button>Fazer logon</button>
        </Link>
      )}
    </div>
  );
}
