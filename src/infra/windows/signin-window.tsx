'use client';

import { useRef } from 'react';

import useHandleAvatarHook from '@/core/hooks/use-handle-avatar-hook';

import SigninFormSubmitHandlerFactory from '@/factories/handlers/signin-form-submit-handler-factory';

import SigninPage from '@/pages/signin-page';
import useHandleUserHook from '@/core/hooks/use-handle-user-hook';

export default function SigninWindow() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const { file, fileUrl, handleChange, handleRemove } = useHandleAvatarHook();

  const { isClientSelected, setIsClientSelected } = useHandleUserHook();

  const { submitHandler } = SigninFormSubmitHandlerFactory();

  const nameValue =
    nameRef.current! &&
    nameRef.current!.value !== null &&
    nameRef.current!.value;
  const emailValue =
    emailRef.current! &&
    emailRef.current!.value !== null &&
    emailRef.current!.value;

  const submit = async () =>
    await submitHandler(
      {
        data: {
          name: nameRef.current!.value,
          email: emailRef.current!.value,
          password: passwordRef.current!.value,
          avatar: file,
        },
      },
      isClientSelected
    );

  return (
    <SigninPage
      nameRef={nameRef}
      nameValue={nameValue as string}
      emailRef={emailRef}
      emailValue={emailValue as string}
      passwordRef={passwordRef}
      confirmPasswordRef={confirmPasswordRef}
      file={file}
      fileUrl={fileUrl}
      handleChange={handleChange}
      handleRemove={handleRemove}
      isClientSelected={isClientSelected}
      setIsClientSelected={setIsClientSelected}
      submitHandler={() => submit()}
    />
  );
}
