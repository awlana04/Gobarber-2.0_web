'use client';

import { useState, useEffect } from 'react';

import {
  AppointmentDataType,
  BarberDataType,
  UserDataType,
} from '@/infra/types/data-type';

import Logout from '../utils/logout';
import FetchAPIData from '../adapters/implementations/fetch-api-data';
import GetAllAppointmentsAPI from '../api/get-all-appointments-api';

import CalendarPage from '@/core/pages/calendar-page';

type CalendarWindowPropsType = {
  user: UserDataType;
  barber: BarberDataType;
};

export default function CalendarWindow(props: CalendarWindowPropsType) {
  const [barberAppointments, setBarberAppointments] = useState<
    AppointmentDataType[]
  >([]);

  const appointments = new GetAllAppointmentsAPI(new FetchAPIData());

  const submitHandler = async () => {
    await appointments.fake().then(async (result) => {
      setBarberAppointments(result.appointments);
    });
  };

  useEffect(() => {
    submitHandler();
  }, []);

  return (
    <CalendarPage
      logoutOnclick={async () => await Logout()}
      appointments={barberAppointments}
      {...props}
    />
  );
}
