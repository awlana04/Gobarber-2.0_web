import Image from 'next/image';
import { FiGlobe, FiLogOut } from 'react-icons/fi';

import translate from '@/shared/utils/translate';

import GoBarberLogo from '@/public/gobarber_logo001.svg';

type DashboardTemplateType = {
  children: React.ReactNode;
  src: string;
  name: string;
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
              <Image
                className='h-24 w-24 rounded-full'
                src={props.src}
                alt={'User avatar'}
                width={24}
                height={24}
              />
            </div>

            <div>
              <p className='text-grey text-xl'>
                Bem-vindo,
                <br />
              </p>
              <span className='text-orange text-xl'>{props.name}</span>
            </div>
          </div>
        </div>

        <div className='text-grey flex flex-row place-content-end items-center space-x-10 px-10 text-2xl'>
          <FiGlobe className='hover:cursor-pointer' />
          <FiLogOut className='hover:cursor-pointer' />
        </div>
      </header>

      {children}
    </main>
  );
}
