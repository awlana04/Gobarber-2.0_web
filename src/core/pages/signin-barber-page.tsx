'use client';

import { useRouter } from 'next/navigation';

import useHandleImagesHook from '@hooks/use-handle-images-hook';
import useHandleUserHook from '@hooks/use-handle-user-hook';

import { FormHandler } from '@libs/form-handler';

import {
  SigninBarberSchema,
  SigninBarberType,
} from '@validations/signin-barber-form';

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

  const { register, handleSubmit, errors } = FormHandler(SigninBarberSchema);

  const submitHandler = async (data: SigninBarberType) => {
    await SigninBarberFormHandler({
      name: data.name,
      location: data.location,
      description: data.description,
      isOpenAtNight: isOpenAtNight,
      isOpenOnWeekends: isOpenOnWeekends,
      file: file,
    });

    Router.push('../../dashboard/barber');
  };

  return (
    <SigninBarberScreen
      submitHandler={handleSubmit(submitHandler)}
      locationInput={{
        submitField: { ...register('location') },
        errored: !!errors.location,
      }}
      locationToast={{
        conditional: errors.location,
        id: errors.location?.message,
        description: errors.location?.message,
      }}
      nameInput={{
        submitField: { ...register('name') },
        errored: !!errors.name,
      }}
      nameToast={{
        conditional: errors.name,
        id: errors.name?.message,
        description: errors.name?.message,
      }}
      descriptionInput={{
        submitField: { ...register('description') },
        errored: !!errors.description,
      }}
      descriptionToast={{
        conditional: errors.description,
        id: errors.description?.message,
        description: errors.description?.message,
      }}
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
