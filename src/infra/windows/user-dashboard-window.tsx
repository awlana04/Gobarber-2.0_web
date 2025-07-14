'use client';

import { useEffect, useState } from 'react';

import { UserDataType, BarberDataType } from '@/infra/types/data-type';

import GetAllBarbersHandlerFactory from '@/factories/handlers/get-all-barbers-handler-factory';

import UserDashboardPage from '@/pages/user-dashboard-page';

type UserDashboardWindowPropsType = {
  user: UserDataType;
  userToken: string;
  logoutOnclick(): void;
};

export default function UserDashboardWindow(
  props: UserDashboardWindowPropsType
) {
  const [barbers, setBarbers] = useState<BarberDataType[]>();

  const { submitHandler } = GetAllBarbersHandlerFactory({
    user: props.user,
    userToken: props.userToken,
    setBarbers,
  });

  useEffect(() => {
    submitHandler();
  }, []);

  return (
    <UserDashboardPage
      user={props.user}
      userToken={props.userToken}
      logoutOnclick={props.logoutOnclick}
      barbers={barbers}
    />
  );
}
