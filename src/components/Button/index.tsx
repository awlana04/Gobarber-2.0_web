import Link, { LinkProps } from 'next/link';

export default function Button({ href }: LinkProps) {
  return (
    <Link href={href} className='m-auto my-6 max-sm:my-4'>
      <button>Fazer logon</button>
    </Link>
  );
}
