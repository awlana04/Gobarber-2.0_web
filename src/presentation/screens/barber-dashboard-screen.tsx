'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { FiCalendar } from 'react-icons/fi';
import { format, parseISO, isAfter, isPast } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { HeaderPropsType } from '@/presentation/types/header-props-type';
import { AppointmentDataType } from '@/infra/types/data-type';

import DashboardTemplate from '@/templates/dashboard-template';

import TextWithIcon from '@/atoms/text-with-icon';

import { Row } from '@/molecules/row';
import { Modal } from '@/components/organisms/modal';

type BarberDashboardScreenType = HeaderPropsType & {
  appointments: AppointmentDataType[];
};

export default function BarberDashboardScreen(
  props: BarberDashboardScreenType
) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const availableAppointments = props.appointments.filter((appointment) => {
    return !isPast(appointment.date);
  });

  const selectedDateAsText = format(new Date(), "'Dia' dd 'de' MMMM", {
    locale: ptBR,
  });

  const selectedWeekDay = format(new Date(), 'cccc', {
    locale: ptBR,
  });

  const nextAppointment = useMemo(() => {
    return availableAppointments.find((appointment) => {
      return isAfter(parseISO(String(appointment.date)), new Date());
    });
  }, [availableAppointments]);

  const morningAppointments = useMemo(() => {
    return availableAppointments.filter((appointment) => {
      return parseISO(String(appointment.date)).getHours() < 12;
    });
  }, [availableAppointments]);

  const afternoonAppointments = useMemo(() => {
    return availableAppointments.filter((appointment) => {
      return (
        parseISO(String(appointment.date)).getHours() >= 12 &&
        parseISO(String(appointment.date)).getHours() < 18
      );
    });
  }, [availableAppointments]);

  const eveningAppointments = useMemo(() => {
    return availableAppointments.filter((appointment) => {
      return (
        parseISO(String(appointment.date)).getHours() >= 18 &&
        parseISO(String(appointment.date)).getHours() <= 20
      );
    });
  }, [availableAppointments]);

  return (
    <DashboardTemplate
      user={props.user}
      logoutOnclick={props.logoutOnclick}
      setLanguage={props.setLanguage}
    >
      <div
        data-modal={isModalOpen}
        className='my-20 flex w-3xl flex-col content-center justify-center place-self-center data-[modal=true]:opacity-30'
      >
        <section>
          <h1 className='text-4xl font-bold'>Horários agendados</h1>
          <p className='text-orange mt-4 mb-2 text-xl'>
            Hoje | {selectedDateAsText} | {selectedWeekDay}
          </p>
          <Link
            href='./calendar'
            className='text-orange text-base hover:underline'
          >
            Ver calendário
          </Link>
        </section>

        {nextAppointment && (
          <section>
            <h3 className='text-grey mt-12 mb-5 text-xl'>
              Atendimento a seguir
            </h3>

            <Row.RowRoot
              data={nextAppointment}
              size='extra-large'
              Render={Row.RowHourAndDate}
              dataType='user'
              hour={format(parseISO(String(nextAppointment.date)), 'HH:mm')}
            />
          </section>
        )}

        {morningAppointments && (
          <section className='my-12'>
            <h6 className='text-grey text-xl'>Manhã</h6>
            <div className='bg-button-text my-4 h-0.5 w-3xl rounded-full' />

            {morningAppointments.map((appointment) => (
              <div key={appointment.id}>
                <div
                  className='my-4 flex w-3xl flex-row place-content-between'
                  onClick={() => setIsModalOpen(true)}
                >
                  <TextWithIcon
                    icon={FiCalendar}
                    color='orange-grey'
                    text={format(parseISO(String(appointment.date)), 'HH:mm')}
                  />
                  <Row.RowRoot
                    data={appointment.user}
                    dataType='user'
                    size='medium'
                  />
                </div>
              </div>
            ))}
          </section>
        )}

        {afternoonAppointments && (
          <section className='my-4'>
            <h6 className='text-grey text-xl'>Tarde</h6>
            <div className='bg-button-text my-4 h-0.5 w-3xl rounded-full' />

            {afternoonAppointments.map((appointment) => (
              <div
                className='my-4 flex w-3xl flex-row place-content-between'
                onClick={() => setIsModalOpen(true)}
                key={appointment.id}
              >
                <TextWithIcon
                  icon={FiCalendar}
                  color='orange-grey'
                  text={format(parseISO(String(appointment.date)), 'HH:mm')}
                />
                <Row.RowRoot
                  data={appointment.user}
                  dataType='user'
                  size='medium'
                />
              </div>
            ))}
          </section>
        )}

        {eveningAppointments && (
          <section className='my-4'>
            <h6 className='text-grey text-xl'>Noite</h6>
            <div className='bg-button-text my-4 h-0.5 w-3xl rounded-full' />

            {eveningAppointments.map((appointment) => (
              <div
                onClick={() => setIsModalOpen(true)}
                className='my-4 flex w-3xl flex-row place-content-between'
                key={appointment.id}
              >
                <TextWithIcon
                  icon={FiCalendar}
                  color='orange-grey'
                  text={format(parseISO(String(appointment.date)), 'HH:mm')}
                />
                <Row.RowRoot
                  data={appointment.user}
                  dataType='user'
                  size='medium'
                />
              </div>
            ))}
          </section>
        )}
      </div>

      <Modal.ModalRoot
        data={props.appointments}
        dataType='user'
        headerText='Cancelar agendamento?'
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        Render={Modal.ModalTextAndButton}
      />
    </DashboardTemplate>
  );
}
