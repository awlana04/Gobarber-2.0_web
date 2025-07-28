import { UTCDate } from '@date-fns/utc';
import { isSameDay } from 'date-fns';

import { HeaderPropsType } from '@/presentation/types/header-props-type';
import { AppointmentDataType, BarberDataType } from '@/infra/types/data-type';

import useHandleDaySelectedHook from '@/hooks/use-handle-day-selected-hook';
import useHandleIsModalOpen from '@/hooks/use-handle-is-modal-open';
import useHandleAppointmentsByPeriodsOfTheDay from '@/hooks/use-handle-appointments-by-periods-of-the-day';

import CalendarScreen from '@/screens/calendar-screen';

type CalendarPagePropsType = HeaderPropsType & {
  barber: BarberDataType;
  appointments: AppointmentDataType[];
};

export default function CalendarPage(props: CalendarPagePropsType) {
  const { selectedDate, setSelectedDate } = useHandleDaySelectedHook();
  const { isModalOpen, setIsModalOpen } = useHandleIsModalOpen();
  const { morningAppointments, afternoonAppointments, eveningAppointments } =
    useHandleAppointmentsByPeriodsOfTheDay({
      appointments: props.appointments.filter((appointment) =>
        isSameDay(selectedDate!, new UTCDate(appointment.date))
      ),
    });

  return (
    <CalendarScreen
      selectedDate={selectedDate!}
      setSelectedDate={setSelectedDate}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      morningAppointments={morningAppointments}
      afternoonAppointments={afternoonAppointments}
      eveningAppointments={eveningAppointments}
      {...props}
    />
  );
}
