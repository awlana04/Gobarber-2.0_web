import { redirect } from 'next/navigation';

import { DeleteCookies, GetCookies } from '@/infra/libs/cookies-next-lib';

import UserDashboardWindow from '@/windows/user-dashboard-window';

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
    <UserDashboardWindow
      logoutOnclick={logoutOnclick}
      userToken={`${token}`}
      user={user}
    />
  );
}
