import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';

export default function LinkToBack() {
  return (
    <Link href='./logon' className='m-auto mb-6 flex'>
      <FiChevronLeft className='mx-4' size={20} />
      Voltar para o logon
    </Link>
  );
}
