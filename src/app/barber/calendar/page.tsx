import CalendarWindow from '@/infra/windows/calendar-window';

import { GetCookies } from '@/infra/libs/cookies-next-lib';

export default async function Calendar() {
  const user = await GetCookies('user');

  return <CalendarWindow user={user} />;
}
