'use client';

import useAuthenticateFormSubmitHandler from '@/handlers/authenticate-form-submit-handler';

import LogonPage from '@/pages/logon-page';

export default function LogonWindow() {
  const { submitHandler } = useAuthenticateFormSubmitHandler();

  return <LogonPage submitHandler={submitHandler} />;
}
