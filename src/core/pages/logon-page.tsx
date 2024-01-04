'use client';

import { useRouter } from 'next/navigation';

import { FormHandler } from '@libs/form-handler';

import {
  AuthenticateFormSchema,
  AuthenticateFormType,
} from '@validations/authenticate-form';

import { AuthenticateFormHandler } from '@handlers/authenticate-form-handler';

import LogonScreen from '@screens/logon-screen';

export default function LogonPage() {
  const Router = useRouter();

  const { register, handleSubmit, errors } = FormHandler(
    AuthenticateFormSchema
  );

  const submitHandler = async (data: AuthenticateFormType) => {
    const result = await AuthenticateFormHandler({
      email: data.email,
      password: data.password,
    });

    const { response } = result;

    if (response.barber) {
      Router.push('../dashboard/barber');
    } else {
      Router.push('../dashboard/client');
    }
  };

  return (
    <LogonScreen
      submitHandler={handleSubmit(submitHandler)}
      emailInput={{
        submitField: { ...register('email') },
        errored: !!errors.email,
      }}
      emailToast={{
        conditional: errors.email,
        id: errors.email?.message,
        description: errors.email?.message,
      }}
      passwordInput={{
        submitField: { ...register('password') },
        errored: !!errors.password,
      }}
      passwordToast={{
        conditional: errors.password,
        id: errors.password?.message,
        description: errors.password?.message,
      }}
    />
  );
}
