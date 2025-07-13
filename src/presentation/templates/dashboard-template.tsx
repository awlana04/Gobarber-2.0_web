import Image from 'next/image';
import { FiGlobe, FiLogOut } from 'react-icons/fi';

import AvatarImage from '@/atoms/avatar-image';

import translate from '@/shared/utils/translate';

import GoBarberLogo from '@/public/gobarber_logo001.svg';

type DashboardTemplateType = {
  children: React.ReactNode;
  src: string | undefined;
  name: string;
  logoutOnclick(): void;
};

export default function DashboardTemplate({
  children,
  ...props
}: DashboardTemplateType) {
  return (
    <main>
      <header className='flex h-40 flex-row place-content-between justify-between bg-black px-20'>
        <div className='flex flex-row space-x-14'>
          <Image src={GoBarberLogo} alt={translate('Barber shop image')} />

          <div className='flex flex-row items-center space-x-4'>
            <div className='px-4'>
              <AvatarImage src={props.src} size='big' />
              <div />
            </div>

            <div>
              <p className='text-grey text-xl'>
                {translate('Welcome')},
                <br />
              </p>
              <span className='text-orange text-xl'>{props.name}</span>
            </div>
          </div>
        </div>

        <div className='text-grey flex flex-row place-content-end items-center space-x-10 px-10 text-2xl'>
          <FiGlobe className='hover:cursor-pointer' />
          <FiLogOut
            className='hover:cursor-pointer'
            onClick={props.logoutOnclick}
          />
        </div>
      </header>

      {children}
    </main>
  );
}
