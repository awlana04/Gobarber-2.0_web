'use client';

import { FiSearch, FiX } from 'react-icons/fi';

import { BarberDataType, UserDataType } from '@/infra/types/data-type';

import translate from '@/shared/utils/translate';

import DashboardTemplate from '@/templates/dashboard-template';

import Calendar from '@/atoms/calendar';

import { Row } from '@/molecules/row';

import AvailableLanguagesType from '@/shared/types/available-languages-type';

type UserDashboardScreenType = {
  user: UserDataType;
  userToken: string;
  barbers: BarberDataType[] | undefined;
  sortedBarbers: BarberDataType[];
  sortedLastBarbers: BarberDataType[];
  isModalOpen: boolean;
  setIsModalOpen(value: boolean): void;
  logoutOnclick(): void;
  setLanguage(
    language: AvailableLanguagesType
  ): React.MouseEventHandler<HTMLUListElement> | undefined;
};

export default function UserDashboardScreen(props: UserDashboardScreenType) {
  return (
    <DashboardTemplate
      src={props.user.avatar}
      name={props.user.name}
      logoutOnclick={props.logoutOnclick}
      setLanguage={props.setLanguage}
    >
      <section
        data-modal={props.isModalOpen}
        className='flex flex-col items-center py-16 has-[+aside:hover]:opacity-30 data-[modal=true]:opacity-30'
      >
        <div className='bg-button-text flex h-[68] w-[612] flex-row place-content-between items-center rounded-2xl pl-8'>
          <input
            placeholder={translate('Search barber')}
            className='placeholder-grey text-xl outline-none'
          />

          <div className='bg-orange flex h-full w-20 place-content-center items-center rounded-tr-2xl rounded-br-2xl text-black hover:cursor-pointer'>
            <FiSearch className='text-3xl' />
          </div>
        </div>

        <p className='text-orange my-16 text-center text-3xl'>
          {translate('or')}
        </p>

        <Calendar />
      </section>

      {props.barbers !== undefined && (
        <aside>
          <div
            onClick={() => props.setIsModalOpen(true)}
            data-modal={props.isModalOpen}
            className='bg-button-text group absolute end-0 top-40 z-90 h-[464] w-80 cursor-pointer rounded-tl-2xl rounded-bl-2xl p-6 text-xl hover:w-[524] data-[modal=true]:opacity-0'
          >
            <h3 className='text-orange my-2'>Barbeiros mais próximos</h3>

            {props.sortedBarbers.map((barber) => (
              <Row.RowRoot
                key={barber.id}
                data={barber}
                size='small'
                dataType='barber'
                isModal={props.isModalOpen}
                Render={Row.RowHourAndDate}
              ></Row.RowRoot>
            ))}
          </div>

          <div
            data-modal={props.isModalOpen}
            className='bg-orange absolute end-0 top-[624] h-[264] w-80 rounded-tl-2xl rounded-bl-2xl p-6 text-xl data-[modal=true]:opacity-30'
          >
            <h3 className='my-2 text-white'>Últimos agendamentos</h3>

            {props.sortedLastBarbers.map((barber) => (
              <Row.RowRoot
                key={barber.id}
                size='small'
                textblack={true}
                data={barber}
              />
            ))}
          </div>
        </aside>
      )}

      {props.isModalOpen && (
        <div className='bg-button-text fixed top-52 left-[50%] z-100 h-[748] max-h-screen w-[864] translate-x-[-50%] rounded-2xl'>
          <div className='absolute top-0 left-0 h-full w-full overflow-auto p-8 px-12'>
            <div className='mb-6 flex flex-row place-content-between items-center'>
              <h2 className='text-orange text-3xl'>
                {translate('Barbers closest to you')}
              </h2>

              <FiX
                onClick={() => props.setIsModalOpen(false)}
                className='text-input-text text-2xl hover:cursor-pointer hover:text-white'
              />
            </div>

            {props.barbers !== undefined &&
              props.sortedBarbers.map((barber) => (
                <Row.RowRoot
                  key={barber.id}
                  isModal={true}
                  data={barber}
                  Render={Row.RowHourAndDate}
                  dataType='barber'
                  size='large'
                />
              ))}
          </div>
        </div>
      )}
    </DashboardTemplate>
  );
}
