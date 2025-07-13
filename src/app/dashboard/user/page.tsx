import { redirect } from 'next/navigation';

import UserDashboardScreen from '@/presentation/screens/user-dashboard-screen';

import { DeleteCookies, GetCookies } from '@/infra/libs/cookies-next-lib';

export default async function User() {
  const user = await GetCookies('@GoBarber-2.0:user');
  const token = await GetCookies('@GoBarber-2.0:token');

  async function logoutOnclick() {
    'use server';

    await DeleteCookies('@GoBarber-2.0:token');
    await DeleteCookies('@GoBarber-2.0:user');
    await DeleteCookies('@GoBarber-2.0:barber');

    redirect('../../logon');
  }

  return (
    <UserDashboardScreen
      logoutOnclick={logoutOnclick}
      userToken={`${token}`}
      user={user}
    />
  );
}
