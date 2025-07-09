'use client';

import { useState } from 'react';
import { FiCalendar, FiClock, FiSearch, FiX } from 'react-icons/fi';

import translate from '@/shared/utils/translate';

import DashboardTemplate from '@/templates/dashboard-template';

import Calendar from '@/atoms/calendar';

type UserDashboardScreenType = {
  userPhoto: string;
  userName: string;
};

export default function UserDashboardScreen(props: UserDashboardScreenType) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <DashboardTemplate src={props.userPhoto} name={props.userName}>
      <section
        data-modal={isModalOpen}
        className='place-self-center py-16 has-[+aside:hover]:opacity-30 data-[modal=true]:opacity-30'
      >
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
        <Calendar />
      </section>

      <aside>
        <div
          onClick={() => setIsModalOpen(true)}
          data-modal={isModalOpen}
          className='group bg-button-text absolute end-0 top-40 h-[464] w-80 cursor-pointer rounded-tl-2xl rounded-bl-2xl p-6 text-xl hover:w-[524] data-[modal=true]:opacity-0'
        >
          <h3 className='text-orange my-2'>Barbeiros mais próximos</h3>

          <div className='flex flex-row place-content-between items-center justify-between space-x-4 py-4'>
            <div className='bg-grey h-16 w-16 rounded-full px-2' />

            <h5 className='absolute left-28'>John Doe</h5>

            <div className='hidden flex-col text-base group-hover:flex'>
              <div className='text-input-text my-1.5 flex flex-row items-center'>
                <FiCalendar className='text-orange mx-1.5' />
                Segunda à Sábado
              </div>

              <div className='text-input-text flex flex-row items-center'>
                <FiClock className='text-orange mx-1.5' />
                8h às 18hrs
              </div>
            </div>
          </div>

          <div className='flex flex-row place-content-between items-center justify-between space-x-4 py-4'>
            <div className='bg-grey h-16 w-16 rounded-full px-2' />

            <h5 className='absolute left-28'>John Doe</h5>

            <div className='hidden flex-col text-base group-hover:flex'>
              <div className='text-input-text my-1.5 flex flex-row items-center'>
                <FiCalendar className='text-orange mx-1.5' />
                Segunda à Sábado
              </div>

              <div className='text-input-text flex flex-row items-center'>
                <FiClock className='text-orange mx-1.5' />
                8h às 18hrs
              </div>
            </div>
          </div>

          <div className='flex flex-row place-content-between items-center justify-between space-x-4 py-4'>
            <div className='bg-grey h-16 w-16 rounded-full px-2' />

            <h5 className='absolute left-28'>John Doe</h5>

            <div className='hidden flex-col text-base group-hover:flex'>
              <div className='text-input-text my-1.5 flex flex-row items-center'>
                <FiCalendar className='text-orange mx-1.5' />
                Segunda à Sábado
              </div>

              <div className='text-input-text flex flex-row items-center'>
                <FiClock className='text-orange mx-1.5' />
                8h às 18hrs
              </div>
            </div>
          </div>

          <div className='flex flex-row place-content-between items-center justify-between space-x-4 py-4'>
            <div className='bg-grey h-16 w-16 rounded-full px-2' />

            <h5 className='absolute left-28'>John Doe</h5>

            <div className='hidden flex-col text-base group-hover:flex'>
              <div className='text-input-text my-1.5 flex flex-row items-center'>
                <FiCalendar className='text-orange mx-1.5' />
                Segunda à Sábado
              </div>

              <div className='text-input-text flex flex-row items-center'>
                <FiClock className='text-orange mx-1.5' />
                8h às 18hrs
              </div>
            </div>
          </div>
        </div>

        <div
          data-modal={isModalOpen}
          className='bg-orange absolute end-0 top-[624] h-[264] w-80 rounded-tl-2xl rounded-bl-2xl p-6 text-xl data-[modal=true]:opacity-30'
        >
          <h3 className='my-2 text-white'>Últimos agendamentos</h3>

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

      {isModalOpen && (
        <div className='bg-button-text absolute top-64 left-[50%] mb-[500] w-[764] translate-x-[-50%] rounded-2xl p-8 px-12'>
          <div className='flex flex-row place-content-between items-center'>
            <h2 className='text-orange text-3xl'>Barbeiros mais próximos</h2>

            <FiX
              onClick={() => setIsModalOpen(false)}
              className='text-input-text text-2xl hover:cursor-pointer hover:text-white'
            />
          </div>

          <div className='flex flex-row place-content-between items-center justify-between space-x-4 py-6'>
            <div className='bg-grey h-16 w-16 rounded-full px-2' />

            <h5 className='absolute left-32'>John Doe</h5>

            <div className='flex flex-col text-base'>
              <div className='text-input-text my-1.5 flex flex-row items-center'>
                <FiCalendar className='text-orange mx-1.5' />
                Segunda à Sábado
              </div>

              <div className='text-input-text flex flex-row items-center'>
                <FiClock className='text-orange mx-1.5' />
                8h às 18hrs
              </div>
            </div>
          </div>

          <div className='flex flex-row place-content-between items-center justify-between space-x-4 py-6'>
            <div className='bg-grey h-16 w-16 rounded-full px-2' />

            <h5 className='absolute left-32'>John Doe</h5>

            <div className='flex flex-col text-base'>
              <div className='text-input-text my-1.5 flex flex-row items-center'>
                <FiCalendar className='text-orange mx-1.5' />
                Segunda à Sábado
              </div>

              <div className='text-input-text flex flex-row items-center'>
                <FiClock className='text-orange mx-1.5' />
                8h às 18hrs
              </div>
            </div>
          </div>

          <div className='flex flex-row place-content-between items-center justify-between space-x-4 py-6'>
            <div className='bg-grey h-16 w-16 rounded-full px-2' />

            <h5 className='absolute left-32'>John Doe</h5>

            <div className='flex flex-col text-base'>
              <div className='text-input-text my-1.5 flex flex-row items-center'>
                <FiCalendar className='text-orange mx-1.5' />
                Segunda à Sábado
              </div>

              <div className='text-input-text flex flex-row items-center'>
                <FiClock className='text-orange mx-1.5' />
                8h às 18hrs
              </div>
            </div>
          </div>

          <div className='flex flex-row place-content-between items-center justify-between space-x-4 py-6'>
            <div className='bg-grey h-16 w-16 rounded-full px-2' />

            <h5 className='absolute left-32'>John Doe</h5>

            <div className='flex flex-col text-base'>
              <div className='text-input-text my-1.5 flex flex-row items-center'>
                <FiCalendar className='text-orange mx-1.5' />
                Segunda à Sábado
              </div>

              <div className='text-input-text flex flex-row items-center'>
                <FiClock className='text-orange mx-1.5' />
                8h às 18hrs
              </div>
            </div>
          </div>

          <div className='flex flex-row place-content-between items-center justify-between space-x-4 py-6'>
            <div className='bg-grey h-16 w-16 rounded-full px-2' />

            <h5 className='absolute left-32'>John Doe</h5>

            <div className='flex flex-col text-base'>
              <div className='text-input-text my-1.5 flex flex-row items-center'>
                <FiCalendar className='text-orange mx-1.5' />
                Segunda à Sábado
              </div>

              <div className='text-input-text flex flex-row items-center'>
                <FiClock className='text-orange mx-1.5' />
                8h às 18hrs
              </div>
            </div>
          </div>

          <div className='flex flex-row place-content-between items-center justify-between space-x-4 py-6'>
            <div className='bg-grey h-16 w-16 rounded-full px-2' />

            <h5 className='absolute left-32'>John Doe</h5>

            <div className='flex flex-col text-base'>
              <div className='text-input-text my-1.5 flex flex-row items-center'>
                <FiCalendar className='text-orange mx-1.5' />
                Segunda à Sábado
              </div>

              <div className='text-input-text flex flex-row items-center'>
                <FiClock className='text-orange mx-1.5' />
                8h às 18hrs
              </div>
            </div>
          </div>

          <div className='flex flex-row place-content-between items-center justify-between space-x-4 py-6'>
            <div className='bg-grey h-16 w-16 rounded-full px-2' />

            <h5 className='absolute left-32'>John Doe</h5>

            <div className='flex flex-col text-base'>
              <div className='text-input-text my-1.5 flex flex-row items-center'>
                <FiCalendar className='text-orange mx-1.5' />
                Segunda à Sábado
              </div>

              <div className='text-input-text flex flex-row items-center'>
                <FiClock className='text-orange mx-1.5' />
                8h às 18hrs
              </div>
            </div>
          </div>

          <div className='flex flex-row place-content-between items-center justify-between space-x-4 py-6'>
            <div className='bg-grey h-16 w-16 rounded-full px-2' />

            <h5 className='absolute left-32'>John Doe</h5>

            <div className='flex flex-col text-base'>
              <div className='text-input-text my-1.5 flex flex-row items-center'>
                <FiCalendar className='text-orange mx-1.5' />
                Segunda à Sábado
              </div>

              <div className='text-input-text flex flex-row items-center'>
                <FiClock className='text-orange mx-1.5' />
                8h às 18hrs
              </div>
            </div>
          </div>

          <div className='flex flex-row place-content-between items-center justify-between space-x-4 py-6'>
            <div className='bg-grey h-16 w-16 rounded-full px-2' />

            <h5 className='absolute left-32'>John Doe</h5>

            <div className='flex flex-col text-base'>
              <div className='text-input-text my-1.5 flex flex-row items-center'>
                <FiCalendar className='text-orange mx-1.5' />
                Segunda à Sábado
              </div>

              <div className='text-input-text flex flex-row items-center'>
                <FiClock className='text-orange mx-1.5' />
                8h às 18hrs
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardTemplate>
  );
}
