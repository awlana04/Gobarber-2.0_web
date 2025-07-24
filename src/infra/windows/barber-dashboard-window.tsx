'use client';

import { useCallback, useEffect, useState } from 'react';

import { AppointmentDataType, UserDataType } from '../types/data-type';

import GetAllAppointmentsAPI from '@/api/get-all-appointments-api';
import FetchAPIData from '@/adapters/implementations/fetch-api-data';

import BarberDashboardScreen from '@/screens/barber-dashboard-screen';

import Logout from '@/infra/utils/logout';
import setLanguage from '@/infra/utils/set-language';
import DeleteAppointmentAPI from '../api/delete-appointment-api';

type BarberDashboardWindowType = {
  user: UserDataType;
};

export default function BarberDashboardWindow(
  props: BarberDashboardWindowType
) {
  const [barberAppointments, setBarberAppointments] = useState<
    AppointmentDataType[]
  >([]);
  const [appointmentID, setAppointmentID] = useState<string | undefined>(
    undefined
  );

  const appointments = new GetAllAppointmentsAPI(new FetchAPIData());

  const submitHandler = async () => {
    await appointments.fake().then(async (result) => {
      setBarberAppointments(result.appointments);
    });
  };

  const deleteAppointment = new DeleteAppointmentAPI(new FetchAPIData());

  const sortedAppointments = async () => {
    if (appointmentID)
      await deleteAppointment.fake(appointmentID).then(async (result) => {
        setBarberAppointments(
          barberAppointments.filter(
            (appointment) => appointment.id !== appointmentID
          )
        );
      });
  };

  useEffect(() => {
    submitHandler();
  }, []);

  useEffect(() => {
    sortedAppointments();
  }, [appointmentID, sortedAppointments]);

  return (
    <BarberDashboardScreen
      user={props.user}
      // setLanguage={setLanguage}
      logoutOnclick={async () => await Logout()}
      appointments={barberAppointments}
      deleteAppointment={setAppointmentID}
    />
  );
}
