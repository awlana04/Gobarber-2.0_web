import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';

export default function BackToLogon() {
  return (
    <Link href='/logon' className='m-auto my-6 flex hover:underline'>
      <FiChevronLeft className='mx-4' size={20} />
      Voltar para o logon
    </Link>
  );
}
