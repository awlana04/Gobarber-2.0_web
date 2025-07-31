'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

import { BarberDataType, UserDataType } from '../types/data-type';

import Logout from '../utils/logout';

import UpdateBarberPage from '@/core/pages/update-barber-page';
import UpdateBarberHandlerFactory from '../factories/handlers/update-barber-handler-factory';
import transformLocationLonLatForm from '../utils/transform-location-lon-lat-form';

type UpdateBarberWindowPropsType = {
  user: UserDataType;
  barber: BarberDataType;
};

export default function UpdateBarberWindow(props: UpdateBarberWindowPropsType) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const locationTransformed = props.barber.location.split(/,+/).toReversed();
  const latLocation = Number.parseFloat(locationTransformed[0]);
  const lonLocation = Number.parseFloat(locationTransformed[1]);

  const [pinLocation, setPinLocation] = useState<number[]>([]);

  useMemo(() => {
    setPinLocation([lonLocation, latLocation]);
  }, [latLocation, lonLocation]);

  console.log(pinLocation);

  UpdateBarberHandlerFactory({
    mapRef,
    pinLocation,
    setPinLocation,
  });

  const barberNameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const barberNameValue =
    barberNameRef.current! &&
    barberNameRef.current!.value !== null &&
    barberNameRef.current!.value;
  const descriptionValue =
    descriptionRef.current! &&
    descriptionRef.current!.value !== null &&
    descriptionRef.current!.value;

  return (
    <UpdateBarberPage
      nameValue={props.barber.name}
      nameRef={barberNameRef}
      descriptionValue={props.barber.description}
      descriptionRef={descriptionRef}
      locationRef={mapRef}
      locationFilled={true}
      locationErrored={false}
      // file={props.barber.images as unknown as File[]}
      setFile={() => {}}
      fileUrl={props.barber.images!}
      setFileUrl={() => {}}
      handleChange={() => {}}
      isOpenAtNight={props.barber.openAtNight}
      setIsOpenAtNight={() => {}}
      isOpenOnWeekends={props.barber.openOnWeekends}
      setIsOpenOnWeekends={() => {}}
      submitHandler={() => {}}
      user={props.user}
      logoutOnclick={() => Logout()}
      barber={props.barber}
    />
  );
}
