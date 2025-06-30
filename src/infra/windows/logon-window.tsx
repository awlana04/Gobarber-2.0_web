'use client';

import { useRef } from 'react';

import AuthenticateFormSubmitHandlerFactory from '@/factories/handlers/authenticate-form-submit-handler-factory';

import LogonPage from '@/pages/logon-page';

export default function LogonWindow() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { submitHandler } = AuthenticateFormSubmitHandlerFactory();

  const emailValue =
    emailRef.current! &&
    emailRef.current!.value !== null &&
    emailRef.current!.value;

  const submit = () =>
    submitHandler({
      data: {
        email: emailRef.current!.value,
        password: passwordRef.current!.value,
      },
    });

  return (
    <LogonPage
      emailRef={emailRef}
      emailValue={emailValue as string}
      passwordRef={passwordRef}
      submitHandler={submit}
    />
  );
}
