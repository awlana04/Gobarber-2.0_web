'use client';

import { redirect } from 'next/navigation';

import { AuthenticateFormHandler } from '@handlers/authenticate-form-handler';

import LogonScreen from '@screens/logon-screen';

import CreateUserService from '@/domain/services/create-user-service';

import useEmailUsecase from '../usecases/use-email-usecase';
import usePasswordUsecase from '../usecases/use-password-usecase';
import { useHandleErroredContext } from '../contexts/use-handle-errored-context';
import AuthenticateUserFakeServer from '../server/authenticate-user-fake-server';
import { useLayoutEffect } from 'react';

export default function LogonPage() {
  const { state, dispatch } = useHandleErroredContext();

  const { handleEmailUsecase } = useEmailUsecase();
  const { handlePasswordUsecase } = usePasswordUsecase();

  useLayoutEffect(() => {
    if (state.pageName !== 'logon-page') {
      dispatch({ type: 'RESET_INITIAL_STATE', pageName: 'logon-page' });
    }
  });

  const submitHandler = async (formData: FormData) => {
    const email = formData.get('email') as any;
    const password = formData.get('password') as any;

    dispatch({ type: 'CHECK_PAGE_NAME', pageName: 'logon-page' });

    await handleEmailUsecase(email);
    await handlePasswordUsecase(password);

    process.env.NEXT_ENV === 'test'
      ? await AuthenticateFormHandler({ email, password })
      : await AuthenticateUserFakeServer({ email, password });
    // const result = await AuthenticateFormHandler({
    //   email,
    //   password,
    // });

    // const { response } = result;

    // if (response.barber) {
    //   redirect('../dashboard/barber');
    // } else {
    //   redirect('../dashboard/client');
    // }
  };

  return (
    <LogonScreen
      submitHandler={submitHandler}
      emailValue={state.emailValue}
      emailErrored={state.isEmailErrored}
      passwordErrored={state.isPasswordErrored}
    />
  );
}
