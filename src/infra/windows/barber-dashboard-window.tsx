'use client';

import { useEffect, useState } from 'react';

import { AppointmentDataType, UserDataType } from '../types/data-type';

import GetAllAppointmentsAPI from '@/api/get-all-appointments-api';
import FetchAPIData from '@/adapters/implementations/fetch-api-data';

import BarberDashboardScreen from '@/screens/barber-dashboard-screen';

import Logout from '@/infra/utils/logout';
import setLanguage from '@/infra/utils/set-language';

type BarberDashboardWindowType = {
  user: UserDataType;
};

export default function BarberDashboardWindow(
  props: BarberDashboardWindowType
) {
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
    <BarberDashboardScreen
      user={props.user}
      setLanguage={setLanguage}
      logoutOnclick={async () => await Logout()}
      appointments={barberAppointments}
    />
  );
}
