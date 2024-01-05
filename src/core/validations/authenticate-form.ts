import { z } from 'zod';

import { EMAIL_MESSAGES } from '@constants/email-messages';
import { PASSWORD_MESSAGES } from '@constants/password-messages';

export const AuthenticateFormSchema = z.object({
  email: z
    .string()
    .email(EMAIL_MESSAGES.EMAIL_REQUIRED)
    .min(6, EMAIL_MESSAGES.EMAIL_LENGTH),
  password: z.string().min(8, PASSWORD_MESSAGES.PASSWORD_LENGTH),
});

export type AuthenticateFormType = z.infer<typeof AuthenticateFormSchema>;
