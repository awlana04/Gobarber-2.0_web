import { z } from 'zod';

export const SigninBarberSchema = z.object({
  name: z.string().min(3),
  location: z.string().min(8),
  description: z.string().min(16),
});

export type SigninBarberType = z.infer<typeof SigninBarberSchema>;
