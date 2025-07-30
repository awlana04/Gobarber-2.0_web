'use client';

import { useRef } from 'react';

import { BarberDataType, UserDataType } from '../types/data-type';

import Logout from '../utils/logout';

import UpdateBarberPage from '@/core/pages/update-barber-page';

type UpdateBarberWindowPropsType = {
  user: UserDataType;
  barber: BarberDataType;
};

export default function UpdateBarberWindow(props: UpdateBarberWindowPropsType) {
  const barberNameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

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
