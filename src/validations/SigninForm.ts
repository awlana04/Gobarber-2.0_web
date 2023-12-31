import { z } from 'zod';

export const SigninFormSchema = z
  .object({
    name: z.string().min(3, 'Necessita ser um nome válido'),
    email: z
      .string()
      .email('Email é obrigatório')
      .min(6, 'Necessita ter no mínimo 6 caracteres'),
    password: z.string().min(8, 'Necessita ter no mínimo 8 caracteres'),
    confirmPassword: z.string().min(8, 'Necessita confirmar a senha'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas necessitam combinar',
    path: ['confirmPassword'],
  });

export type SigninFormType = z.infer<typeof SigninFormSchema>;
