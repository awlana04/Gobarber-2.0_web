import { useMemo } from 'react';
import { isPast, isAfter, parseISO } from 'date-fns';

import { AppointmentDataType } from '@/infra/types/data-type';

type UseAppointmentsByPeriodsOfTheDayPropsType = {
  appointments: AppointmentDataType[];
};

const useHandleAppointmentsByPeriodsOfTheDay = (
  props: UseAppointmentsByPeriodsOfTheDayPropsType
) => {
  const availableAppointments = props.appointments.filter((appointment) => {
    return !isPast(appointment.date);
  });

  const nextAppointment = useMemo(() => {
    return availableAppointments.find((appointment) => {
      return isAfter(parseISO(String(appointment.date)), new Date());
    });
  }, [availableAppointments]);

  const morningAppointments = useMemo(() => {
    return availableAppointments.filter((appointment) => {
      return parseISO(String(appointment.date)).getHours() < 12;
    });
  }, [availableAppointments]);

  const afternoonAppointments = useMemo(() => {
    return availableAppointments.filter((appointment) => {
      return (
        parseISO(String(appointment.date)).getHours() >= 12 &&
        parseISO(String(appointment.date)).getHours() < 18
      );
    });
  }, [availableAppointments]);

  const eveningAppointments = useMemo(() => {
    return availableAppointments.filter((appointment) => {
      return (
        parseISO(String(appointment.date)).getHours() >= 18 &&
        parseISO(String(appointment.date)).getHours() <= 20
      );
    });
  }, [availableAppointments]);

  return {
    nextAppointment,
    morningAppointments,
    afternoonAppointments,
    eveningAppointments,
  };
};

export default useHandleAppointmentsByPeriodsOfTheDay;
