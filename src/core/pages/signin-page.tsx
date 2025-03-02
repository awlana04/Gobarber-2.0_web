'use client';

import { redirect } from 'next/navigation';

import useHandleAvatarHook from '@hooks/use-handle-avatar-hook';
import useHandleUserHook from '@hooks/use-handle-user-hook';

import { useToast } from '../contexts/use-toast-context';

import { SigninFormHandler } from '@handlers/signin-form-handler';

import SigninScreen from '@/presentation/screens/signin-screen';

import CreateUserService from '../../domain/services/create-user-service';

import CreateUserFakeServer from '../server/create-user-fake-server';

import useNameUsecase from '../usecases/use-name-usecase';
import useEmailUsecase from '../usecases/use-email-usecase';
import usePasswordUsecase from '../usecases/use-password-usecase';
import { useHandleErroredContext } from '../contexts/use-handle-errored-context';
import { useLayoutEffect } from 'react';

export default function SigninPage() {
  const { state, dispatch } = useHandleErroredContext();

  const { file, fileUrl, handleChange, handleRemove } = useHandleAvatarHook();
  const { isClientSelected, setIsClientSelected } = useHandleUserHook();

  const { addToast } = useToast();

  const { handleNameUsecase } = useNameUsecase();
  const { handleEmailUsecase } = useEmailUsecase();
  const { handlePasswordUsecase } = usePasswordUsecase();

  useLayoutEffect(() => {
    if (state.pageName !== 'signin-page') {
      dispatch({ type: 'RESET_INITIAL_STATE', pageName: 'signin-page' });
    }
  });

  const submitHandler = async (formData: FormData) => {
    const name = formData.get('name') as any;
    const email = formData.get('email') as any;
    const password = formData.get('password') as any;
    const confirmPassword = formData.get('confirmPassword') as any;

    const createUserService = new CreateUserService();

    dispatch({ type: 'CHECK_PAGE_NAME', pageName: 'signin-page' });

    await handleNameUsecase(name);
    await handleEmailUsecase(email);
    await handlePasswordUsecase(password, confirmPassword);

    if (
      password !== confirmPassword ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      dispatch({ type: 'SET_CONFIRM_PASSWORD_ERROR' });

      addToast({
        type: 'error',
        title: 'Erro na Senha',
        description: 'As senhas necessitam serem iguais',
      });
    } else {
      dispatch({ type: 'SET_CONFIRM_PASSWORD_SUCCESS' });
    }

    await createUserService.handle({
      name,
      email,
      password,
      location: 'Somewhere Over the Rainbow',
    });

    // if (
    //   state.isNameErrored === false &&
    //   state.isEmailErrored === false &&
    //   state.isPasswordErrored === false
    //   // isConfirmPasswordErrored === false
    //   // initialState.isNameErrored &&
    //   // initialState.isEmailErrored &&
    //   // initialState.isPasswordErrored
    // ) {
    //   process.env.NEXT_ENV === 'test'
    //     ? await SigninFormHandler({
    //         name,
    //         email,
    //         password,
    //         confirmPassword,
    //         file: file,
    //       })
    //     : await CreateUserFakeServer({ name, email, password });
    // }

    // isNameErrored === false &&
    // isEmailErrored === false &&
    // isPasswordErrored === false &&
    // isConfirmPasswordErrored === false
    //   ? setIsErrored(true)
    //   : isClientSelected === true
    //     ? redirect('../dashboard/client')
    //     : redirect('./signin/barber');
  };

  console.log(state.pageName);

  return (
    <SigninScreen
      submitHandler={submitHandler}
      avatar={{
        file: file,
        fileUrl: fileUrl,
        handleChange: handleChange,
        handleRemove: handleRemove,
      }}
      radio={{
        isBarberSelected: isClientSelected,
        setIsBarberSelected: setIsClientSelected,
      }}
      nameErrored={state.isNameErrored}
      nameValue={state.nameValue}
      emailValue={state.emailValue}
      emailErrored={state.isEmailErrored}
      passwordErrored={state.isPasswordErrored}
      confirmPasswordErrored={state.isConfirmPasswordErrored}
    />
  );
}
