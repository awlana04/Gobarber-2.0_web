'use client';

import { useEffect, useState } from 'react';

import { UserDataType, BarberDataType } from '@/infra/types/data-type';

import GetAllBarbersHandlerFactory from '@/factories/handlers/get-all-barbers-handler-factory';

import UserDashboardPage from '@/pages/user-dashboard-page';

import Logout from '@/infra/utils/logout';

type UserDashboardWindowPropsType = {
  user: UserDataType;
  userToken: string;
};

export default function UserDashboardWindow(
  props: UserDashboardWindowPropsType
) {
  const [barbers, setBarbers] = useState<BarberDataType[]>();

  const { submitHandler } = GetAllBarbersHandlerFactory({
    setBarbers,
  });

  useEffect(() => {
    submitHandler();
  }, []);

  return (
    <UserDashboardPage
      user={props.user}
      userToken={props.userToken}
      logoutOnclick={async () => await Logout()}
      barbers={barbers}
    />
  );
}
