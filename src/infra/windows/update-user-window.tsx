'use client';

import { useRef } from 'react';

import { UserDataType } from '@/infra/types/data-type';

import useHandleAvatarHook from '@/hooks/use-handle-avatar-hook';

import UpdateUserFormSubmitHandlerFactory from '@/factories/handlers/update-user-form-submit-handler-factory';

import Logout from '@/infra/utils/logout';

import UpdateUserPage from '@/pages/update-user-page';

type UpdateUserWindowPropsType = {
  user: UserDataType;
};

export default function UpdateUserWindow(props: UpdateUserWindowPropsType) {
  const passwordRef = useRef<HTMLInputElement>(null);
  const actualPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const { file, fileUrl, handleChange, handleRemove } = useHandleAvatarHook();

  const { submitHandler } = UpdateUserFormSubmitHandlerFactory();

  const submit = () => {
    if (
      actualPasswordRef.current!.value === props.user.password &&
      passwordRef.current!.value === confirmPasswordRef.current!.value
    ) {
      submitHandler({ data: { password: passwordRef.current!.value } });
    }
  };

  return (
    <UpdateUserPage
      email={props.user.email}
      logoutOnclick={Logout}
      name={props.user.name}
      passwordRef={passwordRef}
      submitHandler={submit}
      user={props.user}
      actualPasswordRef={actualPasswordRef}
      confirmPasswordRef={confirmPasswordRef}
      file={file}
      fileUrl={
        // props.user.avatar
        //   ?
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/files/${props.user.avatar}`
        // : fileUrl
      }
      handleChange={handleChange}
      handleRemove={handleRemove}
    />
  );
}
