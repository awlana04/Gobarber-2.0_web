'use client';

import React, { useEffect, useRef, useState } from 'react';

import useHandleImagesHook from '@/hooks/use-handle-images-hook';
import useHandleUserHook from '@/hooks/use-handle-user-hook';

import useSigninBarberFormHandler from '@/handlers/signin-barber-form-handler';

import SigninBarberPage from '@/pages/signin-barber-page';
import HandleMapAdapter from '../adapters/implementations/handle-map-adapter';

export default function SigninBarberWindow() {
  const barberNameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  // const locationRef = useRef<HTMLTextAreaElement>(null);

  const { file, fileUrl, setFile, setFileUrl, handleChange } =
    useHandleImagesHook();

  const {
    isOpenAtNight,
    isOpenOnWeekends,
    setIsOpenAtNight,
    setIsOpenOnWeekends,
  } = useHandleUserHook();

  const { submitHandler } = useSigninBarberFormHandler();

  const barberNameValue =
    barberNameRef.current! &&
    barberNameRef.current!.value !== null &&
    barberNameRef.current!.value;
  const descriptionValue =
    descriptionRef.current! &&
    descriptionRef.current!.value !== null &&
    descriptionRef.current!.value;
  // const locationValue =
  //   locationRef.current! &&
  //   locationRef.current!.value !== null &&
  //   locationRef.current!.value;

  // const submit = () => {
  //   submitHandler(
  //     barberNameRef.current!.value,
  //     locationRef.current!.value,
  //     descriptionRef.current!.value,
  //     file,
  //     isOpenAtNight,
  //     isOpenOnWeekends
  //   );
  // };

  const [location, setLocation] = useState<number[]>([]);

  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMapAdapter = new HandleMapAdapter();
    // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
    handleMapAdapter.getActualUserLocation(setLocation, location);
  }, [location]);

  useEffect(() => {
    const handleMapAdapter = new HandleMapAdapter();

    const centeredMap = handleMapAdapter.transformLocation(location);

    const map = handleMapAdapter.createMap(mapRef, centeredMap);
    handleMapAdapter.addMapPinMarker(map);

    return () => map.setTarget(null!);
  });

  return (
    <SigninBarberPage
      nameValue={barberNameValue as string}
      nameRef={barberNameRef}
      descriptionValue={descriptionValue as string}
      descriptionRef={descriptionRef}
      locationRef={mapRef}
      // locationValue={locationValue as string}
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
    />
  );
}
