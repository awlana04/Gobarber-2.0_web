import Image from 'next/image';
import { FiGlobe, FiLogOut, FiSearch } from 'react-icons/fi';

import GoBarberLogo from '@/public/gobarber_logo001.svg';

import translate from '@/shared/utils/translate';

export default function UserDashboardScreen() {
  return (
    <main>
      <header className='flex h-40 flex-row place-content-between justify-between bg-black px-20'>
        <div className='flex flex-row space-x-14'>
          <Image src={GoBarberLogo} alt={translate('Barber shop image')} />

          <div className='flex flex-row items-center space-x-4'>
            <div className='bg-input-text h-24 w-24 rounded-full px-4' />

            <div>
              <p className='text-input-text text-xl'>
                Bem-vindo,
                <br />
              </p>
              <span className='text-orange text-xl'>John Doe</span>
            </div>
          </div>
        </div>

        <div className='text-input-text flex flex-row place-content-end items-center space-x-10 px-10 text-2xl'>
          <FiGlobe className='hover:cursor-pointer' />
          <FiLogOut className='hover:cursor-pointer' />
        </div>
      </header>

      <section className='place-self-center py-16'>
        <div className='bg-input flex h-[68] w-[612] flex-row place-content-between items-center rounded-2xl pl-8'>
          <input
            placeholder='Pesquisar barbeiro'
            className='placeholder-input-text text-xl outline-none'
          />

          <div className='bg-orange h-full w-20 place-content-center place-items-center rounded-tr-2xl rounded-br-2xl hover:cursor-pointer'>
            <FiSearch className='text-3xl' />
          </div>
        </div>
      </section>
    </main>
  );
}
