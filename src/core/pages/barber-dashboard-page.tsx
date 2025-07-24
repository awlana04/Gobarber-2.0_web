import { HeaderPropsType } from '@/presentation/types/header-props-type';
import { AppointmentDataType } from '@/infra/types/data-type';

import useHandleAppointmentsByPeriodsOfTheDay from '@/hooks/use-handle-appointments-by-periods-of-the-day';
import useHandleIsModalOpen from '@/hooks/use-handle-is-modal-open';

import BarberDashboardScreen from '@/screens/barber-dashboard-screen';

type BarberDashboardPagePropsType = HeaderPropsType & {
  appointments: AppointmentDataType[];
  setAppointmentIDToDelete(id: string): void;
  deleteAppointment(): void;
};

export default function BarberDashboardPage(
  props: BarberDashboardPagePropsType
) {
  const {
    nextAppointment,
    morningAppointments,
    afternoonAppointments,
    eveningAppointments,
  } = useHandleAppointmentsByPeriodsOfTheDay({
    appointments: props.appointments,
  });
  const { isModalOpen, setIsModalOpen } = useHandleIsModalOpen();

  return (
    <BarberDashboardScreen
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      nextAppointment={nextAppointment}
      morningAppointments={morningAppointments}
      afternoonAppointments={afternoonAppointments}
      eveningAppointments={eveningAppointments}
      {...props}
    />
  );
}
