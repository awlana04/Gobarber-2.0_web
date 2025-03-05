'use client';

import { redirect } from 'next/navigation';

import useHandleImagesHook from '@hooks/use-handle-images-hook';
import useHandleUserHook from '@hooks/use-handle-user-hook';

import { useHandleErroredContext } from '../contexts/use-handle-errored-context';
import { useToast } from '../contexts/use-toast-context';

import { SigninBarberFormHandler } from '@handlers/signin-barber-form-handler';

import SigninBarberScreen from '@/presentation/screens/signin-barber-screen';

import useNameUsecase from '../usecases/use-name-usecase';
import useDescriptionUsecase from '../usecases/use-description-usecase';

import CreateBarberService from '@/domain/services/create-barber-service';
import { CreateBarberFakeServer } from '../server/create-barber-fake-server';

export default function SigninBarberPage() {
  const { state, dispatch } = useHandleErroredContext();
  const { addToast } = useToast();

  const {
    isOpenAtNight,
    setIsOpenAtNight,
    isOpenOnWeekends,
    setIsOpenOnWeekends,
  } = useHandleUserHook();

  const { file, setFile, fileUrl, setFileUrl, handleChange } =
    useHandleImagesHook();

  const { handleNameUsecase } = useNameUsecase();
  const { handleDescriptionUsecase } = useDescriptionUsecase();

  const createBarberService = new CreateBarberService();

  const submitHandler = async (formData: FormData) => {
    const barberName = formData.get('barberName') as any;
    const location = formData.get('location') as any;
    const description = formData.get('description') as any;

    await handleNameUsecase(barberName);
    await handleDescriptionUsecase(description);

    if (location.length < 12 && location.length >= 0) {
      dispatch({
        type: 'SET_LOCATION_ERROR',
        value: { locationValue: location },
      });

      addToast({
        type: 'error',
        title: 'Erro no campo Localização!',
        description: 'É necessário informar a localização.',
      });
    } else {
      dispatch({ type: 'SET_LOCATION_SUCCESS' });
    }

    await createBarberService.handle({
      name: barberName,
      location,
      description,
      openAtNight: isOpenAtNight,
      openOnWeekends: isOpenOnWeekends,
      userId: '',
    });

    const response =
      process.env.NEXT_ENV !== 'test'
        ? await SigninBarberFormHandler({
            name: barberName,
            location,
            description,
            openAtNight: isOpenAtNight,
            openOnWeekends: isOpenOnWeekends,
            file: file,
          })
        : await CreateBarberFakeServer({
            barberName,
            description,
            location,
            images: fileUrl,
            openAtNight: isOpenAtNight,
            openOnWeekends: isOpenOnWeekends,
          });

    console.log(file);

    // if (response === 406) {
    //   addToast({
    //     type: 'error',
    //     title: 'Aconteceu um erro!',
    //     description: 'Você precisa estar logado.',
    //   });
    // }

    // console.log(response.status);

    // if (response.status !== 200 || response.status !== 201) {
    //   addToast({
    //     type: 'error',
    //     title: 'Aconteceu um erro!',
    //     description: 'Os dados informados são inválidos.',
    //   });
    // }

    // process.env.NEXT_ENV === 'test'
    //   ? await SigninBarberFormHandler({
    //       name: barberName,
    //       location,
    //       description,
    //       isOpenAtNight: isOpenAtNight,
    //       isOpenOnWeekends: isOpenOnWeekends,
    //       file: file,
    //     })
    //   : await CreateBarberFakeServer({
    //       barberName,
    //       description,
    //       location,
    //       images: fileUrl,
    //       openAtNight: isOpenAtNight,
    //       openOnWeekends: isOpenOnWeekends,
    //     });

    // redirect('../../dashboard/barber');
  };

  return (
    <SigninBarberScreen
      submitHandler={submitHandler}
      nameErrored={state.isNameErrored}
      nameValue={state.nameValue}
      descriptionValue={state.descriptionValue}
      locationValue={state.locationValue}
      descriptionErrored={state.isDescriptionErrored}
      locationErrored={state.isLocationErrored}
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
