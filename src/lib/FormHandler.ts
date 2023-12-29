import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { AuthenticateFormType } from '../validations/AuthenticateForm';

import { ZodSchema } from 'zod';

type FormHandlerType = AuthenticateFormType;

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
