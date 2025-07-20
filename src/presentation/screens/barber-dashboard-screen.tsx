'use client';

import Link from 'next/link';
import { FiCalendar } from 'react-icons/fi';

import { AppointmentDataType, UserDataType } from '@/infra/types/data-type';
import AvailableLanguagesType from '@/shared/types/available-languages-type';

import DashboardTemplate from '@/templates/dashboard-template';

import TextWithIcon from '@/atoms/text-with-icon';

import { Row } from '@/molecules/row';

type BarberDashboardScreenType = {
  user: UserDataType;
  appointments: AppointmentDataType[];
  logoutOnclick(): void;
  setLanguage(
    language: AvailableLanguagesType
  ): React.MouseEventHandler<HTMLUListElement> | undefined;
};

export default function BarberDashboardScreen(
  props: BarberDashboardScreenType
) {
  const today = new Date();

  return (
    <DashboardTemplate
      src={props.user.avatar}
      name={props.user.name}
      logoutOnclick={props.logoutOnclick}
      setLanguage={props.setLanguage}
    >
      <div className='my-20 flex w-3xl flex-col content-center justify-center place-self-center'>
        <section>
          <h1 className='text-4xl font-bold'>Horários agendados</h1>
          <p className='text-orange mt-4 mb-2 text-xl'>
            Hoje | Dia {today.getDay()} | {today.getMonth()}
          </p>
          <Link
            href='./calendar'
            className='text-orange text-base hover:underline'
          >
            Ver calendário
          </Link>
        </section>

        <section>
          <h3 className='text-grey mt-12 mb-5 text-xl'>Atendimento a seguir</h3>

          <Row.RowRoot
            data={props.user}
            size='extra-large'
            Render={Row.RowHourAndDate}
            dataType='user'
            hour={10}
          />
        </section>

        <section className='my-12'>
          <h6 className='text-grey text-xl'>Manhã</h6>
          <div className='bg-button-text my-4 h-0.5 w-3xl rounded-full' />

          {props.appointments.map((appointment) => (
            <div
              className='my-4 flex w-3xl flex-row place-content-between'
              key={appointment.id}
            >
              <TextWithIcon
                icon={FiCalendar}
                color='orange-grey'
                text={appointment.date}
              />
              <Row.RowRoot
                data={appointment.user}
                dataType='user'
                size='medium'
              />
            </div>
          ))}

          {/* <div className='my-4 flex w-3xl flex-row place-content-between'>
            <TextWithIcon icon={FiCalendar} color='orange-grey' text='08:30' />
            <Row.RowRoot data={props.user} dataType='user' size='medium' />
          </div>

          <div className='flex w-3xl flex-row place-content-between'>
            <TextWithIcon icon={FiCalendar} color='orange-grey' text='08:30' />
            <Row.RowRoot data={props.user} dataType='user' size='medium' />
          </div>
        </section>

        <section className='my-4'>
          <h6 className='text-grey text-xl'>Tarde</h6>
          <div className='bg-button-text my-4 h-0.5 w-3xl rounded-full' />

          <div className='my-4 flex w-3xl flex-row place-content-between'>
            <TextWithIcon icon={FiCalendar} color='orange-grey' text='08:30' />
            <Row.RowRoot data={props.user} dataType='user' size='medium' />
          </div>

          <div className='mb-12 flex w-3xl flex-row place-content-between'>
            <TextWithIcon icon={FiCalendar} color='orange-grey' text='08:30' />
            <Row.RowRoot data={props.user} dataType='user' size='medium' />
          </div> */}
        </section>
      </div>
    </DashboardTemplate>
  );
}
