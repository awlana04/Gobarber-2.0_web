import { GetCookies } from '@/infra/libs/cookies-next-lib';

import UpdateBarberWindow from '@/windows/update-barber-window';

export default async function UpdateBarber() {
  const user = await GetCookies('user');
  const barber = await GetCookies('barber');

  return <UpdateBarberWindow user={user} barber={barber} />;
}
