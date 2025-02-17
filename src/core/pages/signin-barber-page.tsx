'use client';

import { useRouter } from 'next/navigation';

import useHandleImagesHook from '@hooks/use-handle-images-hook';
import useHandleUserHook from '@hooks/use-handle-user-hook';

import { SigninBarberFormHandler } from '@handlers/signin-barber-form-handler';

import SigninBarberScreen from '@/presentation/screens/signin-barber-screen';

export default function SigninBarberPage() {
  const Router = useRouter();

  const {
    isOpenAtNight,
    setIsOpenAtNight,
    isOpenOnWeekends,
    setIsOpenOnWeekends,
  } = useHandleUserHook();

  const { file, setFile, fileUrl, setFileUrl, handleChange } =
    useHandleImagesHook();

  const submitHandler = async (formData: FormData) => {
    await SigninBarberFormHandler({
      name: formData.get('barberName'),
      location: formData.get('location'),
      description: formData.get('description'),
      isOpenAtNight: isOpenAtNight,
      isOpenOnWeekends: isOpenOnWeekends,
      file: file,
    });

    Router.push('../../dashboard/barber');
  };

  return (
    <SigninBarberScreen
      submitHandler={submitHandler}
      images={{
        file: file,
        fileUrl: fileUrl,
        setFile: setFile,
        setFileUrl: setFileUrl,
        handleChange: handleChange,
      }}
      openAtNight={{
        isBarberSelected: isOpenAtNight,
        setIsBarberSelected: setIsOpenAtNight,
      }}
      openOnWeekends={{
        isBarberSelected: isOpenOnWeekends,
        setIsBarberSelected: setIsOpenOnWeekends,
      }}
    />
  );
}
