import Image from 'next/image';
import { FiGlobe, FiLogOut } from 'react-icons/fi';

import AvailableLanguagesType from '@/shared/types/available-languages-type';

import AvatarImage from '@/atoms/avatar-image';

import translate from '@/shared/utils/translate';

import GoBarberLogo from '@/public/gobarber_logo001.svg';

type DashboardTemplateType = {
  children: React.ReactNode;
  src: string | undefined;
  name: string;
  logoutOnclick(): void;
  setLanguage(language: AvailableLanguagesType): Promise<any>;
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
          <div className='group relative hover:cursor-pointer'>
            <FiGlobe />

            <div className='bg-input invisible absolute z-100 mt-30 flex w-60 flex-col place-content-center content-center justify-center place-self-center rounded-2xl text-center group-hover:visible'>
              <div className='bg-input absolute -top-2 -z-100 h-10 w-10 rotate-45 place-self-center' />
              <li className='[&>ul]:hover:text-orange z-100 my-4 list-none space-y-2 text-lg'>
                <ul onClick={async () => await props.setLanguage('pt-br')}>
                  Português do Brasil
                </ul>
                <ul onClick={async () => await props.setLanguage('en-us')}>
                  American English
                </ul>
              </li>
            </div>
          </div>

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
