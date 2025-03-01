'use client';

import { redirect } from 'next/navigation';

import useHandleImagesHook from '@hooks/use-handle-images-hook';
import useHandleUserHook from '@hooks/use-handle-user-hook';

import { SigninBarberFormHandler } from '@handlers/signin-barber-form-handler';

import SigninBarberScreen from '@/presentation/screens/signin-barber-screen';
import { useHandleErroredContext } from '../contexts/use-handle-errored-context';
import useNameUsecase from '../usecases/use-name-usecase';
import CreateBarberService from '@/domain/services/create-barber-service';

export default function SigninBarberPage() {
  const { state } = useHandleErroredContext();

  const {
    isOpenAtNight,
    setIsOpenAtNight,
    isOpenOnWeekends,
    setIsOpenOnWeekends,
  } = useHandleUserHook();

  const { file, setFile, fileUrl, setFileUrl, handleChange } =
    useHandleImagesHook();

  const { handleNameUsecase } = useNameUsecase();

  const createBarberService = new CreateBarberService();

  const submitHandler = async (formData: FormData) => {
    const barberName = formData.get('barberName') as any;
    const location = formData.get('location') as any;
    const description = formData.get('description') as any;

    await handleNameUsecase(barberName);

    await createBarberService.handle({
      name: barberName,
      location,
      description,
      openAtNight: isOpenAtNight,
      openOnWeekends: isOpenOnWeekends,
      userId: '',
    });

    // await SigninBarberFormHandler({
    //   name: formData.get('barberName'),
    //   location: formData.get('location'),
    //   description: formData.get('description'),
    //   isOpenAtNight: isOpenAtNight,
    //   isOpenOnWeekends: isOpenOnWeekends,
    //   file: file,
    // });

    // redirect('../../dashboard/barber');
  };

  return (
    <SigninBarberScreen
      submitHandler={submitHandler}
      nameErrored={state.isNameErrored}
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
