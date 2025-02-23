'use client';

import { useRouter } from 'next/navigation';

import useHandleAvatarHook from '@hooks/use-handle-avatar-hook';
import useHandleUserHook from '@hooks/use-handle-user-hook';
import { useToast } from '../contexts/use-toast-context';

import { SigninFormHandler } from '@handlers/signin-form-handler';

import SigninScreen from '@/presentation/screens/signin-screen';

import CreateUserService from '../../domain/services/create-user-service';

import useErrorHook from '../hooks/use-error-hook';

export default function SigninPage() {
  const Router = useRouter();

  const { file, fileUrl, handleChange, handleRemove } = useHandleAvatarHook();
  const { isClientSelected, setIsClientSelected } = useHandleUserHook();
  const { isErrored, setIsErrored } = useErrorHook();

  const { addToast } = useToast();

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

  const HandleUserData = async (formData: FormData) => {
    const createUserService = new CreateUserService();

    const name = formData.get('name') as any;
    const email = formData.get('email') as any;
    const password = formData.get('password') as any;
    const location = formData.get('location') as any;

    const initialData = {
      name,
      email,
      password,
      location,
    } as any;

    const data = await createUserService.handle(initialData);

    console.log(data);

    if (data !== initialData) {
      setIsErrored(true);

      addToast({
        title: 'Erro no Campo Nome',
        type: 'error',
        description: 'Nome: ' + name + ' é inválido!',
      });
    }
  };

  return (
    <SigninScreen
      submitHandler={
        process.env.NEXT_ENV !== 'test' ? HandleUserData : submitHandler
      }
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
      isErrored={isErrored}
    />
  );
}
