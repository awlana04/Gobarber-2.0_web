'use client';

import { format, isSameDay } from 'date-fns';

import { HeaderPropsType } from '@/presentation/types/header-props-type';
import { ModalIsAndSetModalPropsType } from '@/presentation/types/modal-props-type';
import { CalendarPropsType } from '@/presentation/types/calendar-props-type';
import { AppointmentDataType } from '@/infra/types/data-type';

import DashboardTemplate from '@/templates/dashboard-template';

import TodayTitle from '@/atoms/today-title';
import Calendar from '@/atoms/calendar';

import { Modal } from '@/components/organisms/modal';
import AppointmentsByPeriodOfDayRow from '@/components/organisms/appointments-by-period-of-day-row';

type CalendarType = Required<Omit<CalendarPropsType, 'handleDayClick'>>;

type CalendarScreenPropsType = HeaderPropsType &
  CalendarType &
  ModalIsAndSetModalPropsType & {
    morningAppointments: AppointmentDataType[];
    afternoonAppointments: AppointmentDataType[];
    eveningAppointments: AppointmentDataType[];
  };

export default function CalendarScreen(props: CalendarScreenPropsType) {
  const handleDayClick = (day: Date | undefined) => {
    props.setSelectedDate!(day);
    props.setIsModalOpen(true);
  };

  return (
    <DashboardTemplate {...props} headerType='dashboard'>
      <section className='my-4 mt-20 mb-10 flex flex-col items-center justify-center'>
        <TodayTitle title='Agendamentos por data' />
      </section>

      <Calendar
        appointments={props.appointments}
        selectedDate={props.selectedDate}
        setSelectedDate={props.setSelectedDate}
        handleDayClick={handleDayClick}
        barber={props.barber}
      />

      <Modal.ModalRoot
        dataType='user'
        headerText={`Agendamentos ${props.selectedDate && format(props.selectedDate, 'dd/MM/y')}`}
        isModalOpen={props.isModalOpen}
        setIsModalOpen={props.setIsModalOpen}
        data={props.appointments.filter((appointment) =>
          isSameDay(appointment.date, props.selectedDate!)
        )}
      >
        <section className='mx-12 mt-12 flex flex-col'>
          <AppointmentsByPeriodOfDayRow
            appointments={props.morningAppointments}
            period='morning'
            rowDirection='right'
          />

          <AppointmentsByPeriodOfDayRow
            appointments={props.afternoonAppointments}
            period='afternoon'
            rowDirection='right'
          />

          <AppointmentsByPeriodOfDayRow
            appointments={props.eveningAppointments}
            period='evening'
            rowDirection='right'
          />
        </section>
      </Modal.ModalRoot>
    </DashboardTemplate>
  );
}
