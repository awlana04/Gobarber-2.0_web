'use client';

import { useRouter } from 'next/navigation';

import { AuthenticateFormHandler } from '@handlers/authenticate-form-handler';

import LogonScreen from '@screens/logon-screen';

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

  return <LogonScreen submitHandler={submitHandler} />;
}
