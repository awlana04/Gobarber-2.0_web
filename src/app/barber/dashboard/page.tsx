import { GetCookies } from '@/infra/libs/cookies-next-lib';

import BarberDashboardWindow from '@/infra/windows/barber-dashboard-window';

export default async function Barber() {
  const user = await GetCookies('user');

  return <BarberDashboardWindow user={user} />;
}
