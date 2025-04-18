import Link from 'next/link';
import { FiLogIn } from 'react-icons/fi';

import translate from '@/presentation/utils/translate';

export default function CreateAccount() {
  return (
    <Link
      href='./signin'
      className='text-orange hover:text-orange mx-auto my-6 mt-10 flex hover:underline max-sm:mt-8'
    >
      <FiLogIn data-testid='iconElement' size={20} className='mr-2' />
      {translate('Create account')}
    </Link>
  );
}
