import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';

export default function LinkToBack() {
  return (
    <Link href='./logon'>
      <FiChevronLeft />
      Voltar para o logon
    </Link>
  );
}
