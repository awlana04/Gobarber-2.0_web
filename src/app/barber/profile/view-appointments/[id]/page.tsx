import { GetCookies } from '@/infra/libs/cookies-next-lib';
import ViewAppointmentsWindow from '@/infra/windows/view-appointments-window';

export default async function ViewAppointments() {
  const user = await GetCookies('user');

  return <ViewAppointmentsWindow user={user} />;
}
