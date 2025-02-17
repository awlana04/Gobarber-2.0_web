'use client';

import { useRouter } from 'next/navigation';

import useHandleAvatarHook from '@hooks/use-handle-avatar-hook';
import useHandleUserHook from '@hooks/use-handle-user-hook';

import { SigninFormHandler } from '@handlers/signin-form-handler';

import SigninScreen from '@/presentation/screens/signin-screen';

export default function SigninPage() {
  const Router = useRouter();

  const { file, fileUrl, handleChange, handleRemove } = useHandleAvatarHook();
  const { isClientSelected, setIsClientSelected } = useHandleUserHook();

  const submitHandler = async (formData: FormData) => {
    await SigninFormHandler({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
      file: file,
    });

    isClientSelected === true
      ? Router.push('../dashboard/client')
      : Router.push('./signin/barber');
  };

  return (
    <SigninScreen
      submitHandler={submitHandler}
      avatar={{
        file: file,
        fileUrl: fileUrl,
        handleChange: handleChange,
        handleRemove: handleRemove,
      }}
      radio={{
        isBarberSelected: isClientSelected,
        setIsBarberSelected: setIsClientSelected,
      }}
    />
  );
}
