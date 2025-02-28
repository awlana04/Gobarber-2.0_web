'use client';

import { redirect } from 'next/navigation';

import { AuthenticateFormHandler } from '@handlers/authenticate-form-handler';

import LogonScreen from '@screens/logon-screen';

import CreateUserService from '@/domain/services/create-user-service';

import useEmailUsecase from '../usecases/use-email-usecase';
import usePasswordUsecase from '../usecases/use-password-usecase';

export default function LogonPage() {
  const { handleEmailUsecase, isEmailErrored } = useEmailUsecase();
  const { handlePasswordUsecase, isPasswordErrored } = usePasswordUsecase();

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

  return (
    <LogonScreen
      submitHandler={submitHandler}
      emailErrored={isEmailErrored.isEmailErrored}
      passwordErrored={isPasswordErrored.isPasswordErrored}
    />
  );
}
