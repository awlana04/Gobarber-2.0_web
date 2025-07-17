'use client';

import BarberDashboardScreen from '@/presentation/screens/barber-dashboard-screen';
import { UserDataType } from '../types/data-type';
import Logout from '../utils/logout';
import setLanguage from '../utils/set-language';

type BarberDashboardWindowType = {
  user: UserDataType;
};

export default function BarberDashboardWindow(
  props: BarberDashboardWindowType
) {
  return (
    <BarberDashboardScreen
      user={props.user}
      setLanguage={setLanguage}
      logoutOnclick={async () => await Logout()}
    />
  );
}
