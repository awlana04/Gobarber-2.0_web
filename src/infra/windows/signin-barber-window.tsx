'use client';

import { useRef } from 'react';

import useHandleImagesHook from '@/hooks/use-handle-images-hook';
import useHandleUserHook from '@/hooks/use-handle-user-hook';

import useSigninBarberFormHandler from '@/handlers/signin-barber-form-handler';

import SigninBarberPage from '@/pages/signin-barber-page';

export default function SigninBarberWindow() {
  const barberNameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  // const locationRef = useRef<HTMLTextAreaElement>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

  const { file, fileUrl, setFile, setFileUrl, handleChange } =
    useHandleImagesHook();

  const {
    isOpenAtNight,
    isOpenOnWeekends,
    setIsOpenAtNight,
    setIsOpenOnWeekends,
  } = useHandleUserHook();

  const { submitHandler } = useSigninBarberFormHandler(mapRef);

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
