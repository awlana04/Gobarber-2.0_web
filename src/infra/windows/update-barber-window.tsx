'use client';

import { useMemo, useRef, useState } from 'react';

import { BarberDataType, UserDataType } from '@/infra/types/data-type';

import useHandleImagesHook from '@/hooks/use-handle-images-hook';
import useHandleUserHook from '@/hooks/use-handle-user-hook';

import UpdateBarberHandlerFactory from '@/factories/handlers/update-barber-handler-factory';

import UpdateBarberPage from '@/pages/update-barber-page';

import Logout from '@/infra/utils/logout';
import separateLatLonLocation from '@/core/utils/separate-lat-lon-location';

type UpdateBarberWindowPropsType = {
  user: UserDataType;
  barber: BarberDataType;
};

export default function UpdateBarberWindow(props: UpdateBarberWindowPropsType) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const { latitude, longitude } = separateLatLonLocation({
    location: props.barber.location,
  });

  const [pinLocation, setPinLocation] = useState<number[]>([]);

  const { file, fileUrl, setFile, setFileUrl, handleChange } =
    useHandleImagesHook();

  const {
    isOpenAtNight,
    isOpenOnWeekends,
    setIsOpenAtNight,
    setIsOpenOnWeekends,
  } = useHandleUserHook();

  useMemo(() => {
    setIsOpenAtNight(props.barber.openAtNight);
    setIsOpenOnWeekends(props.barber.openOnWeekends);

    setFileUrl(
      props.barber.images!.map(
        (image) => `${process.env.NEXT_PUBLIC_BACKEND_URI}/files/${image}`
      )
    );
    setPinLocation([latitude, longitude]);
  }, []);

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
      file={file}
      setFile={setFile}
      fileUrl={fileUrl}
      setFileUrl={setFileUrl}
      handleChange={handleChange}
      isOpenAtNight={isOpenAtNight}
      setIsOpenAtNight={setIsOpenAtNight}
      isOpenOnWeekends={isOpenOnWeekends}
      setIsOpenOnWeekends={setIsOpenOnWeekends}
      submitHandler={() => {}}
      user={props.user}
      logoutOnclick={() => Logout()}
      barber={props.barber}
    />
  );
}
