import { z } from 'zod';

export const AuthenticateFormSchema = z.object({
  email: z
    .string()
    .email('Necessita ser um email válido')
    .min(6, 'Necessita ter no mínimo 6 caracteres'),
  password: z.string().min(8, 'Necessita ter no mínimo 8 caracteres'),
});

export type AuthenticateFormType = z.infer<typeof AuthenticateFormSchema>;
