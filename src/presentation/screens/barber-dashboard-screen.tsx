'use client';

import Link from 'next/link';

import { HeaderPropsType } from '@/presentation/types/header-props-type';
import { ModalPropsType } from '@/presentation/types/modal-props-type';
import { AppointmentDataType } from '@/infra/types/data-type';

import DashboardTemplate from '@/templates/dashboard-template';

import TodayTitle from '@/atoms/today-title';

import NextActiveAppointmentRow from '@/components/organisms/next-active-appointment-row';
import AppointmentsByPeriodOfDayRow from '@/components/organisms/appointments-by-period-of-day-row';
import { Modal } from '@/components/organisms/modal';

type ModalCorePropsType = Pick<
  ModalPropsType,
  'isModalOpen' | 'setIsModalOpen'
>;

type BarberDashboardScreenType = HeaderPropsType &
  ModalCorePropsType & {
    appointments: AppointmentDataType[];
    nextAppointment: AppointmentDataType | undefined;
    morningAppointments: AppointmentDataType[];
    afternoonAppointments: AppointmentDataType[];
    eveningAppointments: AppointmentDataType[];
    setAppointmentIDToDelete(id: string): void;
    deleteAppointment(): void;
  };

export default function BarberDashboardScreen(
  props: BarberDashboardScreenType
) {
  return (
    <DashboardTemplate {...props}>
      <div
        data-modal={props.isModalOpen}
        className='my-20 flex w-3xl flex-col content-center justify-center place-self-center data-[modal=true]:opacity-30'
      >
        <section>
          <TodayTitle title='Horários agendados' />

          <Link
            href='./calendar'
            className='text-orange text-base hover:underline'
          >
            Ver calendário
          </Link>
        </section>

        <NextActiveAppointmentRow
          appointment={props.nextAppointment}
          isBarber={true}
        />

        <AppointmentsByPeriodOfDayRow
          appointments={props.morningAppointments}
          period='morning'
          deleteAppointment={props.deleteAppointment}
          setAppointmentIDToDelete={props.setAppointmentIDToDelete}
          setIsModalOpen={props.setIsModalOpen}
        />

        <AppointmentsByPeriodOfDayRow
          appointments={props.afternoonAppointments}
          period='afternoon'
          deleteAppointment={props.deleteAppointment}
          setAppointmentIDToDelete={props.setAppointmentIDToDelete}
          setIsModalOpen={props.setIsModalOpen}
        />

        <AppointmentsByPeriodOfDayRow
          appointments={props.eveningAppointments}
          period='evening'
          deleteAppointment={props.deleteAppointment}
          setAppointmentIDToDelete={props.setAppointmentIDToDelete}
          setIsModalOpen={props.setIsModalOpen}
        />
      </div>

      <Modal.ModalRoot
        data={props.appointments}
        dataType='user'
        headerText='Cancelar agendamento?'
        isModalOpen={props.isModalOpen}
        setIsModalOpen={props.setIsModalOpen}
        Render={Modal.ModalTextAndButton}
        deleteAppointment={props.deleteAppointment}
      />
    </DashboardTemplate>
  );
}
