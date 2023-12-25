import Link from 'next/link';
import { FiLogIn } from 'react-icons/fi';

export default function CreateAccount() {
  return (
    <Link
      href='./signin'
      className='m-auto my-10 flex text-orange hover:text-orange hover:underline max-sm:my-4'
    >
      <FiLogIn size={20} className='m-auto mx-4' />
      Criar conta
    </Link>
  );
}
