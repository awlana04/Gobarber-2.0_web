import Link from 'next/link';
import { FiLogIn } from 'react-icons/fi';

export default function CreateAccount() {
  return (
    <Link
      href='./signin'
      className='mx-auto my-6 mt-10 flex text-orange hover:text-orange hover:underline max-sm:mt-8'
    >
      <FiLogIn size={20} className='mr-2' />
      Criar conta
    </Link>
  );
}
