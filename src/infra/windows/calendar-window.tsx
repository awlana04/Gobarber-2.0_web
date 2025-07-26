'use client';

import CalendarScreen from '@/presentation/screens/calendar-screen';
import { AppointmentDataType, UserDataType } from '../types/data-type';
import Logout from '../utils/logout';
import { useState, useEffect } from 'react';
import FetchAPIData from '../adapters/implementations/fetch-api-data';
import GetAllAppointmentsAPI from '../api/get-all-appointments-api';

type CalendarWindowPropsType = {
  user: UserDataType;
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
    <CalendarScreen
      user={props.user}
      logoutOnclick={async () => await Logout()}
      appointments={barberAppointments}
    />
  );
}
