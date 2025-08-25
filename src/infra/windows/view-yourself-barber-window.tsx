import { useRef } from 'react';

import { UserDataType, BarberDataType } from '@/infra/types/data-type';

import Logout from '@/infra/utils/logout';

import ViewYourselfBarberPage from '@/pages/view-yourself-barber-page';

type ViewYourselfBarberWindowPropsType = {
  user: UserDataType;
  barber: BarberDataType;
};

export default function ViewYourselfBarberWindow(
  props: ViewYourselfBarberWindowPropsType
) {
  const locationRef = useRef(null);

  return (
    <ViewYourselfBarberPage
      locationRef={locationRef}
      logoutOnclick={Logout}
      {...props}
    />
  );
}
