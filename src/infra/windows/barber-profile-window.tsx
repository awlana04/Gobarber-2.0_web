'use client';

import BarberProfileScreen from '@/presentation/screens/barber-profile-screen';
import { UserDataType } from '../types/data-type';
import Logout from '../utils/logout';

type BarberProfileWindowType = {
  user: UserDataType;
};

export default function BarberProfileWindow(props: BarberProfileWindowType) {
  return (
    <BarberProfileScreen
      logoutOnclick={async () => await Logout()}
      {...props}
    />
  );
}
