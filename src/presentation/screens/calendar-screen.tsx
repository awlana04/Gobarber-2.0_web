'use client';

import { HeaderPropsType } from '@/presentation/types/header-props-type';
import { ModalPropsType } from '@/presentation/types/modal-props-type';

import DashboardTemplate from '@/templates/dashboard-template';

import TodayTitle from '@/atoms/today-title';
import Calendar from '../components/atoms/calendar';
import { useEffect, useState } from 'react';
import { AppointmentDataType } from '@/infra/types/data-type';

type CalendarScreenPropsType = HeaderPropsType & {
  appointments: AppointmentDataType[];
};
// & ModalPropsType;

export default function CalendarScreen(props: CalendarScreenPropsType) {
  return (
    <DashboardTemplate {...props}>
      <section className='my-4 mt-20 flex flex-col items-center justify-center'>
        <TodayTitle title='Agendamentos por data' />

        <Calendar appointments={props.appointments} />
      </section>
    </DashboardTemplate>
  );
}
