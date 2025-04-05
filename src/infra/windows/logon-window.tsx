'use client';

import { useRef } from 'react';

import useAuthenticateFormSubmitHandler from '@/handlers/authenticate-form-submit-handler';

import LogonPage from '@/pages/logon-page';

export default function LogonWindow() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { submitHandler } = useAuthenticateFormSubmitHandler();

  return (
    <LogonPage
      emailRef={emailRef}
      passwordRef={passwordRef}
      submitHandler={() =>
        submitHandler(emailRef.current!.value, passwordRef.current!.value)
      }
    />
  );
}
