'use client';

import { useEffect, useRef } from 'react';

import { UserDataType, BarberDataType } from '@/infra/types/data-type';

import HandleMapAdapter from '@/adapters/implementations/handle-map-adapter';

import separateLatLonLocation from '@/core/utils/separate-lat-lon-location';
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

  useEffect(() => {
    const handleMapAdapter = new HandleMapAdapter();

    const { latitude, longitude } = separateLatLonLocation({
      location: props.barber.location,
    });

    const centeredMap = handleMapAdapter.transformLocation([
      longitude,
      latitude,
    ]);

    const map = handleMapAdapter.createMap(locationRef, centeredMap);
    handleMapAdapter.pinMarker(map, [longitude, latitude]);

    return () => map.setTarget(null!);
  }, []);

  return (
    <ViewYourselfBarberPage
      locationRef={locationRef}
      logoutOnclick={Logout}
      {...props}
    />
  );
}
