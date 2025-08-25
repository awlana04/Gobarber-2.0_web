import { GetCookies } from '@/infra/libs/cookies-next-lib';

import ViewYourselfBarberWindow from '@/windows/view-yourself-barber-window';

export default async function ViewYourselfBarber() {
  const user = await GetCookies('user');
  const barber = await GetCookies('barber');

  return <ViewYourselfBarberWindow user={user} barber={barber} />;
}
