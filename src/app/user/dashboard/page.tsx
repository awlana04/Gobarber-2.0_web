import { GetCookies } from '@/infra/libs/cookies-next-lib';

import UserDashboardWindow from '@/windows/user-dashboard-window';

export default async function User() {
  const user = await GetCookies('user');
  const token = await GetCookies('token');

  return <UserDashboardWindow userToken={`${token}`} user={user} />;
}
