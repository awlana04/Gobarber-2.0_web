import { ZodSchema } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { AuthenticateFormType } from '@/core/errors/authenticate-form';
import { SigninBarberType } from '@/core/errors/signin-barber-form';
import { SigninFormType } from '@/core/errors/signin-form';

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
