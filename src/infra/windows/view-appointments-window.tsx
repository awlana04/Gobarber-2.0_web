'use client';

import { useEffect, useState } from 'react';

import { AppointmentDataType, UserDataType } from '@/infra/types/data-type';

import useHandleAppointmentsByPeriodsOfTheDay from '@/hooks/use-handle-appointments-by-periods-of-the-day';

import GetAllAppointmentsAPI from '@/api/get-all-appointments-api';
import FetchAPIData from '@/adapters/implementations/fetch-api-data';

import Logout from '@/infra/utils/logout';

import ViewAppointmentsScreen from '@/screens/view-appointments-screen';

type ViewAppointmentsWindowPropsType = {
  user: UserDataType;
};

export default function ViewAppointmentsWindow(
  props: ViewAppointmentsWindowPropsType
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

  const { nextAppointment } = useHandleAppointmentsByPeriodsOfTheDay({
    appointments: barberAppointments,
  });

  return (
    <ViewAppointmentsScreen
      logoutOnclick={Logout}
      nextAppointment={nextAppointment}
      appointments={barberAppointments}
      {...props}
    />
  );
}
