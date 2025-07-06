import { ButtonHTMLAttributes, useState } from 'react';
import Image from 'next/image';
import { ptBR } from 'date-fns/locale';
import {
  DayPicker,
  getDefaultClassNames,
  useDayPicker,
} from 'react-day-picker';
import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiGlobe,
  FiLogOut,
  FiSearch,
  FiX,
} from 'react-icons/fi';
import 'react-day-picker/style.css';

import GoBarberLogo from '@/public/gobarber_logo001.svg';

import translate from '@/shared/utils/translate';

function NextMonthCalendarButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  const changeToNextMonth = (month: Date) => {
    if (props.onClick) {
      const syntheticEvent = {
        target: {
          value: month,
        },
      } as unknown as React.MouseEvent<HTMLButtonElement>;

      props.onClick(syntheticEvent);
    }
  };

  return (
    <button onClick={() => changeToNextMonth(new Date())}>
      <FiArrowRight className='absolute top-3.5 right-8 text-lg hover:cursor-pointer hover:text-white' />
    </button>
  );
}

function PreviousMonthCalendarButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { previousMonth } = useDayPicker();

  const changeToPreviousMonth = (month: Date) => {
    if (props.onClick) {
      const syntheticEvent = {
        target: {
          value: month,
        },
      } as unknown as React.MouseEvent<HTMLButtonElement>;

      props.onClick(syntheticEvent);
    }
  };

  return (
    <button onClick={() => changeToPreviousMonth(new Date())}>
      <FiArrowLeft
        data-month={previousMonth === undefined}
        className='absolute top-3.5 -left-80 text-lg data-[month=false]:hover:cursor-pointer data-[month=false]:hover:text-white data-[month=true]:opacity-0'
      />
    </button>
  );
}

export default function UserDashboardScreen() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const defaultClassNames = getDefaultClassNames();

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

        <DayPicker
          components={{
            NextMonthButton: NextMonthCalendarButton,
            PreviousMonthButton: PreviousMonthCalendarButton,
          }}
          locale={ptBR}
          startMonth={new Date()}
          // modifiers={{
          //   available: { dayOfWeek: [1, 2, 3, 4, 5] },
          // }}
          mode='single'
          selected={selectedDate}
          onSelect={setSelectedDate}
          classNames={{
            chevron: 'fill-grey',
            today: 'text-white rounded-2xl hover:cursor-pointer',
            root: `${defaultClassNames.root} text-input-text place-items-center bg-black flex justify-center rounded-2xl w-[350] items-center text-center place-self-center`,
            month_caption:
              'text-center -my-1 text-sm text-white bg-button-text w-[350] place-self-center items-center h-[50] self-center justify-center justify-self-center object-center place-content-center rounded-tl-2xl content-center rounded-tr-2xl',
            month_grid: 'm-4 place-self-center',
            selected: 'bg-orange rounded-2xl text-input',
            // day_button: 'bg-orange',
            weekdays: 'h-14',
            week_number: 'text-orange',
            day: `${defaultClassNames.day} hover:cursor-pointer`,
            week_number_header: 'text-orange',
          }}
        />
      </section>

      <aside className='group'>
        <div
          onClick={() => setIsModalOpen(true)}
          data-modal={isModalOpen}
          className='bg-button-text absolute end-0 top-40 h-[464] w-80 cursor-pointer rounded-tl-2xl rounded-bl-2xl p-6 text-xl hover:w-[524] data-[modal=true]:opacity-0'
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
    </main>
  );
}
