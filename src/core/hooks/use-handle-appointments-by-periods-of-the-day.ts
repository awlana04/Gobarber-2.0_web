import { useMemo } from 'react';
import { isPast, isAfter, parseISO, format, compareAsc, isToday, isTomorrow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { AppointmentDataType } from '@/infra/types/data-type';

type UseAppointmentsByPeriodsOfTheDayPropsType = {
  appointments: AppointmentDataType[];
};

const useHandleAppointmentsByPeriodsOfTheDay = (
  props: UseAppointmentsByPeriodsOfTheDayPropsType
) => {
  let nextAppointmentDateId;
  
  const availableAppointments = props.appointments.filter((appointment) => {
    return !isPast(appointment.date);
  });
  const appointmentDate = availableAppointments.filter((appointment) => isAfter(parseISO(String(appointment.date)), new Date()) && appointment.id !== nextAppointmentDateId).sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date)));

  const nextAppointment = useMemo(() => {
    const nextAppointmentDate = availableAppointments.find((appointment) => isToday(appointment.date) || isTomorrow(appointment.date));

    if (nextAppointmentDate !== undefined) {
      if (isToday(nextAppointmentDate?.date) || isTomorrow(nextAppointmentDate?.date)) {
        nextAppointmentDateId = nextAppointmentDate.id;
        
        return nextAppointmentDate;
      } else {
        return null;
      }
    }
  }, [availableAppointments])

  const morningAppointments = useMemo(() => {
    return appointmentDate.filter(appointment => isToday(appointment.date) || isTomorrow(appointment.date) && parseISO(String(appointment.date)).getHours() < 12);
  }, [availableAppointments]);

  const afternoonAppointments = useMemo(() => {
    return appointmentDate.filter(appointment => isToday(appointment.date) || isTomorrow(appointment.date) && parseISO(String(appointment.date)).getHours() >= 12 && parseISO(String(appointment.date)).getHours() < 18)
 }, [availableAppointments]);

  const eveningAppointments = useMemo(() => {
    return appointmentDate.filter(appointment => isToday(appointment.date) || isTomorrow(appointment.date) && parseISO(String(appointment.date)).getHours() >= 18 && parseISO(String(appointment.date)).getHours() <= 20);
 }, [availableAppointments]);

  const appointmentsByDate = useMemo(() => {
    const byDate: Record<string, UseAppointmentsByPeriodsOfTheDayPropsType> = {};

    appointmentDate.filter(appointment => !isToday(appointment.date) && !isTomorrow(appointment.date)).forEach((appointment) => {
      const formattedDate = format(parseISO(appointment.date), "d 'de' MMMM 'de' yyyy", { locale: ptBR })

      if (!byDate[formattedDate]) {
        byDate[formattedDate] = [];
      }

      byDate[formattedDate].push(appointment);
    });

    const orderDate = Object.keys(byDate).sort((a, b) => {
      return compareAsc(parseISO(a), parseISO(b));
    });
    
    return orderDate.map((date) => {
      return {
        date: date,
        appointments: byDate[date]
      }
    })
  }, [availableAppointments]);
  
  return {
    nextAppointment,
    morningAppointments,
    afternoonAppointments,
    eveningAppointments,
    appointmentsByDate,
  };
};

export default useHandleAppointmentsByPeriodsOfTheDay;
