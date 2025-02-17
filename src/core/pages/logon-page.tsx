'use client';

import { useRouter } from 'next/navigation';

import { FormHandler } from '@libs/form-handler';

// import { submitHandler } from '../submit-handler';

import {
  AuthenticateFormSchema,
  AuthenticateFormType,
} from '@validations/authenticate-form';

import { AuthenticateFormHandler } from '@handlers/authenticate-form-handler';

import LogonScreen from '@screens/logon-screen';
// import { useToast } from '../hooks/toast-hook';

export default function LogonPage() {
  const Router = useRouter();

  const submitHandler = async (formData: FormData) => {
    // const Router = useRouter();
    const result = await AuthenticateFormHandler({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    const { response } = result;

    console.log(response);

    // if (response.barber) {
    //   Router.push('../dashboard/barber');
    // } else {
    //   Router.push('../dashboard/client');
    // }
  };

  return (
    <LogonScreen
      submitHandler={submitHandler}
      // emailInput={{
      //   submitField: { ...register('email') },
      //   errored: !!errors.email,
      // }}
      // emailToast={{
      //   conditional: errors.email,
      //   id: errors.email?.message,
      //   description: errors.email?.message,
      // }}
      // passwordInput={{
      //   submitField: { ...register('password') },
      //   errored: !!errors.password,
      // }}
      // passwordToast={{
      //   conditional: errors.password,
      //   id: errors.password?.message,
      //   description: errors.password?.message,
      // }}
    />
  );
}
