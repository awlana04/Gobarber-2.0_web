'use client';

import { useRef, useState } from 'react';

import useHandleImagesHook from '@/hooks/use-handle-images-hook';
import useHandleUserHook from '@/hooks/use-handle-user-hook';

import SigninBarberFormSubmitHandlerFactory from '@/factories/handlers/signin-barber-form-submit-handler-factory';

import SigninBarberPage from '@/pages/signin-barber-page';
import { UserDataType } from '../types/data-type';

type SigninBarberWindowProps = {
  user: UserDataType;
  token: string;
};

export default function SigninBarberWindow(props: SigninBarberWindowProps) {
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

  const { submitHandler } = SigninBarberFormSubmitHandlerFactory({
    mapRef,
    pinLocation,
    setPinLocation,
  });

  const barberNameValue =
    barberNameRef.current! &&
    barberNameRef.current!.value !== null &&
    barberNameRef.current!.value;
  const descriptionValue =
    descriptionRef.current! &&
    descriptionRef.current!.value !== null &&
    descriptionRef.current!.value;

  const submit = async () => {
    await submitHandler({
      data: {
        barberName: barberNameRef.current!.value,
        description: descriptionRef.current!.value,
        file,
        openAtNight: isOpenAtNight,
        openOnWeekends: isOpenOnWeekends,
      },
      cookies: {
        user: props.user,
        token: props.token,
      } 
    });
  };

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
