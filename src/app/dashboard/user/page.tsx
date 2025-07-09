import UserDashboardScreen from '@/presentation/screens/user-dashboard-screen';

import { GetCookies } from '@/infra/libs/cookies-next-lib';

export default async function User() {
  const user = await GetCookies('@GoBarber-2.0:user');

  return (
    <UserDashboardScreen
      userName={user.name}
      userPhoto={`http://localhost:3333/files/${user.avatar}`}
    />
  );
}
