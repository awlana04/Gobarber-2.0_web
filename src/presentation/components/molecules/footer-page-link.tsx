import Link from 'next/link';
import { FiChevronLeft, FiLogIn } from 'react-icons/fi';

import TextWithIcon from '@/atoms/text-with-icon';

import translate from '@/shared/utils/translate';

type FooterPageLinkPropsType = {
  type: 'create-account' | 'back-to-logon';
};

export default function FooterPageLink(props: FooterPageLinkPropsType) {
  return (
    <div className='mt-6'>
      {props.type === 'create-account' ? (
        <Link href={'/signin'}>
          <TextWithIcon color='orange' icon={FiLogIn} text='Create account' />
        </Link>
      ) : (
        <Link href={'/logon'}>
          <TextWithIcon
            color='white'
            icon={FiChevronLeft}
            text='Back to Logon'
          />
        </Link>
      )}
    </div>
  );
}
