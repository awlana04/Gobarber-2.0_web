'use client';

import { redirect } from 'next/navigation';

import { AuthenticateFormHandler } from '@handlers/authenticate-form-handler';

import LogonScreen from '@screens/logon-screen';

import CreateUserService from '@/domain/services/create-user-service';

import useEmailUsecase from '../usecases/use-email-usecase';
import usePasswordUsecase from '../usecases/use-password-usecase';
import { useHandleErroredContext } from '../contexts/use-handle-errored-context';

export default function LogonPage() {
  const { state } = useHandleErroredContext();

  console.log(state);

  const { handleEmailUsecase } = useEmailUsecase();
  const { handlePasswordUsecase } = usePasswordUsecase();

  const submitHandler = async (formData: FormData) => {
    const email = formData.get('email') as any;
    const password = formData.get('password') as any;

    await handleEmailUsecase(email);
    await handlePasswordUsecase(password);

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
  console.log(state.isEmailErrored, state.isPasswordErrored, state);
  return (
    <LogonScreen
      submitHandler={submitHandler}
      emailErrored={state.isEmailErrored}
      passwordErrored={state.isPasswordErrored}
    />
  );
}
