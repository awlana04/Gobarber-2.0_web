'use client';

import { redirect } from 'next/navigation';

import UserDashboardScreen from '@/presentation/screens/user-dashboard-screen';

export default function Client() {
  // if (typeof window !== 'undefined') {
  //   const token = localStorage.getItem('@GoBarber-2.0:token');
  //   const user = localStorage.getItem('@GoBarber-2.0:user');

  //   if (token === null || user === null) {
  //     redirect('../../logon');
  //   }
  // }

  return <UserDashboardScreen />;
}
