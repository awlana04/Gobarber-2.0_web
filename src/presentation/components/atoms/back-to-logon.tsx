import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';

import { languageSwitcher } from '@/presentation/utils/language-switcher';

export default function BackToLogon() {
  return (
    <Link href='/logon' className='m-auto my-6 flex hover:underline'>
      <FiChevronLeft className='mx-4' size={20} />

      {languageSwitcher({ availableLanguages: 'pt-br', path: 'BackToLogon' })}
    </Link>
  );
}
