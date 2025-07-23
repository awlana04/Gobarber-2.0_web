'use client';

import { FiSearch } from 'react-icons/fi';

import { BarberDataType, UserDataType } from '@/infra/types/data-type';

import translate from '@/shared/utils/translate';

import DashboardTemplate from '@/templates/dashboard-template';

import Calendar from '@/atoms/calendar';

import { Row } from '@/molecules/row';
import { Modal } from '@/components/organisms/modal';

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
      user={props.user}
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

      <Modal.ModalRoot
        data={props.sortedBarbers}
        headerText='Barbeiros mais próximos'
        isModalOpen={props.isModalOpen}
        setIsModalOpen={props.setIsModalOpen}
        Render={Modal.ModalRow}
      />
    </DashboardTemplate>
  );
}
