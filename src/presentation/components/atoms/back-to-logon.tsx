import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';

import translate from '@/presentation/utils/translate';

export default function BackToLogon() {
  return (
    <Link href='/logon' className='m-auto my-6 flex hover:underline'>
      <FiChevronLeft className='mx-4' size={20} />

      {translate('Back to Logon')}
    </Link>
  );
}
