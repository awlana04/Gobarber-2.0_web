import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';

import { AvailableLanguagesType } from '@/presentation/types/available-languages-type';

import { LanguageSwitcher } from '@/presentation/utils/language-switcher';

type BackToLogonProps = {
  language: AvailableLanguagesType;
};

export default function BackToLogon(props: BackToLogonProps) {
  return (
    <Link href='/logon' className='m-auto my-6 flex hover:underline'>
      <FiChevronLeft className='mx-4' size={20} />

      {LanguageSwitcher(props.language, 'Back to Logon')}
    </Link>
  );
}
