import { ZodSchema } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { AuthenticateFormType } from '@validations/authenticate-form';
import { SigninBarberType } from '@validations/signin-barber-form';
import { SigninFormType } from '@validations/signin-form';

type FormHandlerType = SigninBarberType & AuthenticateFormType & SigninFormType;

export const FormHandler = (ZodSchema: ZodSchema) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormHandlerType>({
    resolver: zodResolver(ZodSchema),
  });

  return { register, handleSubmit, errors };
};
