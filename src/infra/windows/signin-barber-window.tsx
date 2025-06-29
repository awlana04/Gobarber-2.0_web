'use client';

import { useRef, useState } from 'react';

import useHandleImagesHook from '@/hooks/use-handle-images-hook';
import useHandleUserHook from '@/hooks/use-handle-user-hook';

import useSigninBarberFormHandler from '@/handlers/signin-barber-form-handler';
import SigninBarberFormSubmitHandlerFactory from '../factories/handlers/signin-barber-form-submit-handler-factory';

import SigninBarberPage from '@/pages/signin-barber-page';

export default function SigninBarberWindow() {
  const [pinLocation, setPinLocation] = useState<number[]>([]);

  const barberNameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

  const { file, fileUrl, setFile, setFileUrl, handleChange } =
    useHandleImagesHook();

  const {
    isOpenAtNight,
    isOpenOnWeekends,
    setIsOpenAtNight,
    setIsOpenOnWeekends,
  } = useHandleUserHook();

  // const { submitHandler } = useSigninBarberFormHandler(
  //   mapRef,
  //   pinLocation,
  //   setPinLocation
  // );
  const { submitHandler } = SigninBarberFormSubmitHandlerFactory();

  const barberNameValue =
    barberNameRef.current! &&
    barberNameRef.current!.value !== null &&
    barberNameRef.current!.value;
  const descriptionValue =
    descriptionRef.current! &&
    descriptionRef.current!.value !== null &&
    descriptionRef.current!.value;

  const submit = () => {
    submitHandler({
      barberName: barberNameRef.current!.value,
      description: descriptionRef.current!.value,
      file,
      openAtNight: isOpenAtNight,
      openOnWeekends: isOpenOnWeekends,
    });
  };

  // const submit = async () => {
  //   await submitHandler(
  //     barberNameRef.current!.value,
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
      locationFilled={pinLocation.length > 1}
      locationErrored={pinLocation.length < 1}
      file={file}
      setFile={setFile}
      fileUrl={fileUrl}
      setFileUrl={setFileUrl}
      handleChange={handleChange}
      isOpenAtNight={isOpenAtNight}
      setIsOpenAtNight={setIsOpenAtNight}
      isOpenOnWeekends={isOpenOnWeekends}
      setIsOpenOnWeekends={setIsOpenOnWeekends}
      submitHandler={submit}
    />
  );
}
