'use client';

import { HeaderPropsType } from '@/presentation/types/header-props-type';
import { ModalPropsType } from '@/presentation/types/modal-props-type';

import DashboardTemplate from '@/templates/dashboard-template';

import TodayTitle from '@/atoms/today-title';
import Calendar from '../components/atoms/calendar';
import { useEffect, useState } from 'react';
import { AppointmentDataType } from '@/infra/types/data-type';
import { Modal } from '../components/organisms/modal';
import { format, isSameDay } from 'date-fns';

type CalendarScreenPropsType = HeaderPropsType & {
  appointments: AppointmentDataType[];
};
// & ModalPropsType;

export default function CalendarScreen(props: CalendarScreenPropsType) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleDayClick = (day: Date | undefined) => {
    setSelectedDate!(day);
    setIsModalOpen(true);
  };

  return (
    <DashboardTemplate {...props}>
      <section className='my-4 mt-20 flex flex-col items-center justify-center'>
        <TodayTitle title='Agendamentos por data' />

        <Calendar
          appointments={props.appointments}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          handleDayClick={handleDayClick}
        />
      </section>

      <Modal.ModalRoot
        dataType='user'
        headerText={`Agendamentos ${selectedDate && format(selectedDate, 'dd/MM/y')}`}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        data={props.appointments.filter((appointment) =>
          isSameDay(appointment.date, selectedDate!)
        )}
        Render={Modal.ModalRow}
      />
    </DashboardTemplate>
  );
}
