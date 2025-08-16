import NextActiveAppointmentRow from '../components/organisms/next-active-appointment-row';
import DashboardTemplate from '../templates/dashboard-template';

export default function ViewAppointmentsScreen() {
  return (
    <DashboardTemplate>
      <div>
        <NextActiveAppointmentRow />
      </div>
      <div></div>
    </DashboardTemplate>
  );
}
