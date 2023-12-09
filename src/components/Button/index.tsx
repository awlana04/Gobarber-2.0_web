import Link, { LinkProps } from 'next/link';

export default function Button({ href }: LinkProps) {
  return (
    <Link href={href} className='m-auto'>
      <button>Fazer logon</button>
    </Link>
  );
}
