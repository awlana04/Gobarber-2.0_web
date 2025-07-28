import CalendarWindow from '@/infra/windows/calendar-window';

import { GetCookies } from '@/infra/libs/cookies-next-lib';

export default async function Calendar() {
  const user = await GetCookies('user');
  const barber = await GetCookies('barber');

  return <CalendarWindow user={user} barber={barber} />;
}
