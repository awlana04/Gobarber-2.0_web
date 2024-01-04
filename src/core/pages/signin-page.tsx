'use client';

import { useRouter } from 'next/navigation';

import useHandleAvatarHook from '@hooks/use-handle-avatar-hook';
import useHandleUserHook from '@hooks/use-handle-user-hook';

import { FormHandler } from '@libs/form-handler';

import { SigninFormSchema, SigninFormType } from '@validations/signin-form';

import { SigninFormHandler } from '@handlers/signin-form-handler';
import SigninScreen from '@/presentation/screens/signin-screen';

export default function SigninPage() {
  const Router = useRouter();

  const { file, fileUrl, handleChange, handleRemove } = useHandleAvatarHook();
  const { isBarberSelected, setIsBarberSelected } = useHandleUserHook();

  const { register, handleSubmit, errors } = FormHandler(SigninFormSchema);

  const submitHandler = async (data: SigninFormType) => {
    await SigninFormHandler({
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      file: file,
    });

    isBarberSelected === true
      ? Router.push('../dashboard/client')
      : Router.push('./signin/barber');
  };

  return (
    <SigninScreen
      submitHandler={handleSubmit(submitHandler)}
      avatar={{
        file: file,
        fileUrl: fileUrl,
        handleChange: handleChange,
        handleRemove: handleRemove,
      }}
      radio={{
        isBarberSelected: isBarberSelected,
        setIsBarberSelected: setIsBarberSelected,
      }}
      nameInput={{
        submitField: { ...register('name') },
        errored: !!errors.name,
      }}
      nameToast={{
        conditional: errors.name,
        id: errors.name?.message,
        description: errors.name?.message,
      }}
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
      confirmPasswordInput={{
        submitField: { ...register('confirmPassword') },
        errored: !!errors.confirmPassword,
      }}
      confirmPasswordToast={{
        conditional: errors.confirmPassword,
        id: errors.confirmPassword?.message,
        description: errors.confirmPassword?.message,
      }}
    />
  );
}
