'use client';

import { redirect } from 'next/navigation';

import { AuthenticateFormHandler } from '@handlers/authenticate-form-handler';

import LogonScreen from '@screens/logon-screen';

export default function LogonPage() {
  const submitHandler = async (formData: FormData) => {
    const result = await AuthenticateFormHandler({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    const { response } = result;

    console.log(response);

    if (response.barber) {
      redirect('../dashboard/barber');
    } else {
      redirect('../dashboard/client');
    }
  };

  return <LogonScreen submitHandler={submitHandler} />;
}
