'use client';

import Link from 'next/link';

import { HeaderPropsType } from '@/presentation/types/header-props-type';
import { ModalIsAndSetModalPropsType } from '@/presentation/types/modal-props-type';
import { AppointmentDataType } from '@/infra/types/data-type';

import DashboardTemplate from '@/templates/dashboard-template';

import TodayTitle from '@/atoms/today-title';

import NextActiveAppointmentRow from '@/components/organisms/next-active-appointment-row';
import AppointmentsByPeriodOfDayRow from '@/components/organisms/appointments-by-period-of-day-row';
import { Modal } from '@/components/organisms/modal';

type BarberDashboardScreenType = HeaderPropsType &
  ModalIsAndSetModalPropsType & {
    appointments: AppointmentDataType[];
    nextAppointment: AppointmentDataType | undefined;
    morningAppointments: AppointmentDataType[];
    afternoonAppointments: AppointmentDataType[];
    eveningAppointments: AppointmentDataType[];
    appointmentsByDate: AppointmentDataType[];
    setAppointmentIDToDelete(id: string): void;
    deleteAppointment(): void;
  };

export default function BarberDashboardScreen(
  props: BarberDashboardScreenType
) {
  return (
    <DashboardTemplate {...props} headerType='dashboard'>
      <div
        data-modal={props.isModalOpen}
        className='my-20 flex mx-auto w-3xl flex-col content-center justify-center place-self-center data-[modal=true]:opacity-30'
      >
        <section className='mx-auto'>
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

        {props.morningAppointments && 
          <AppointmentsByPeriodOfDayRow
            appointments={props.morningAppointments}
            period='morning'
            deleteAppointment={props.deleteAppointment}
            setAppointmentIDToDelete={props.setAppointmentIDToDelete}
            setIsModalOpen={props.setIsModalOpen}
          />
        }

        {props.afternoonAppointments &&
          <AppointmentsByPeriodOfDayRow
            appointments={props.afternoonAppointments}
            period='afternoon'
            deleteAppointment={props.deleteAppointment}
            setAppointmentIDToDelete={props.setAppointmentIDToDelete}
            setIsModalOpen={props.setIsModalOpen}
          />
        }
       
       {props.eveningAppointments &&
         <AppointmentsByPeriodOfDayRow
            appointments={props.eveningAppointments}
            period='evening'
            deleteAppointment={props.deleteAppointment}
            setAppointmentIDToDelete={props.setAppointmentIDToDelete}
            setIsModalOpen={props.setIsModalOpen}
          />
       } 

       {props.appointmentsByDate &&
         props.appointmentsByDate.map(appointment => (
          <AppointmentsByPeriodOfDayRow
            key={appointment.date}
            appointments={appointment.appointments}
            deleteAppointment={props.deleteAppointment}
            setAppointmentIDToDelete={props.setAppointmentIDToDelete}
            setIsModalOpen={props.setIsModalOpen}
            dateText={appointment.date}
          />
        ))}
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
