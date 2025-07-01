import Image from 'next/image';
import DatePicker from 'react-datepicker';
import { FiGlobe, FiLogOut, FiSearch } from 'react-icons/fi';

import 'react-datepicker/dist/react-datepicker.css';

import GoBarberLogo from '@/public/gobarber_logo001.svg';

import translate from '@/shared/utils/translate';

export default function UserDashboardScreen() {
  return (
    <main>
      <header className='flex h-40 flex-row place-content-between justify-between bg-black px-20'>
        <div className='flex flex-row space-x-14'>
          <Image src={GoBarberLogo} alt={translate('Barber shop image')} />

          <div className='flex flex-row items-center space-x-4'>
            <div className='bg-grey h-24 w-24 rounded-full px-4' />

            <div>
              <p className='text-grey text-xl'>
                Bem-vindo,
                <br />
              </p>
              <span className='text-orange text-xl'>John Doe</span>
            </div>
          </div>
        </div>

        <div className='text-grey flex flex-row place-content-end items-center space-x-10 px-10 text-2xl'>
          <FiGlobe className='hover:cursor-pointer' />
          <FiLogOut className='hover:cursor-pointer' />
        </div>
      </header>

      <section className='place-self-center py-16'>
        <div className='bg-button-text flex h-[68] w-[612] flex-row place-content-between items-center rounded-2xl pl-8'>
          <input
            placeholder='Pesquisar barbeiro'
            className='placeholder-grey text-xl outline-none'
          />

          <div className='bg-orange h-full w-20 place-content-center place-items-center rounded-tr-2xl rounded-br-2xl text-black hover:cursor-pointer'>
            <FiSearch className='text-3xl' />
          </div>
        </div>

        <p className='text-orange my-16 text-center text-3xl'>ou</p>

        <div>
          <DatePicker inline className='text-orange bg-black' />
        </div>
      </section>

      <aside>
        <div className='bg-button-text absolute end-0 top-40 h-[464] w-80 rounded-tl-2xl rounded-bl-2xl p-6 text-xl'>
          <h3 className='text-orange my-2'>Barbeiros mais próximos</h3>

          <div className='flex flex-row items-center space-x-4 py-4'>
            <div className='bg-grey h-16 w-16 rounded-full px-2' />

            <h5>John Doe</h5>
          </div>
          <div className='flex flex-row items-center space-x-4 py-4'>
            <div className='bg-grey h-16 w-16 rounded-full px-2' />

            <h5>John Doe</h5>
          </div>
          <div className='flex flex-row items-center space-x-4 py-4'>
            <div className='bg-grey h-16 w-16 rounded-full px-2' />

            <h5>John Doe</h5>
          </div>
          <div className='flex flex-row items-center space-x-4 py-4'>
            <div className='bg-grey h-16 w-16 rounded-full px-2' />

            <h5>John Doe</h5>
          </div>
        </div>

        <div className='bg-orange absolute end-0 top-[624] h-[264] w-80 rounded-tl-2xl rounded-bl-2xl p-6 text-xl'>
          <h3 className='my-2 text-white'>Barbeiros mais próximos</h3>

          <div className='flex flex-row items-center space-x-4 py-4'>
            <div className='bg-background h-16 w-16 rounded-full px-2' />

            <h5 className='text-background'>John Doe</h5>
          </div>
          <div className='flex flex-row items-center space-x-4 py-4'>
            <div className='bg-background h-16 w-16 rounded-full px-2' />

            <h5 className='text-background'>John Doe</h5>
          </div>
        </div>
      </aside>
    </main>
  );
}
