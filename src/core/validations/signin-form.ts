import { z } from 'zod';

import { NAME_MESSAGES } from '@constants/name-messages';
import { EMAIL_MESSAGES } from '@constants/email-messages';
import { PASSWORD_MESSAGES } from '@constants/password-messages';
import { CONFIRM_PASSWORD_MESSAGES } from '@constants/confirm-password-messages';

export const SigninFormSchema = z
  .object({
    name: z.string().min(3, NAME_MESSAGES.NAME_REQUIRED),
    email: z
      .string()
      .email(EMAIL_MESSAGES.EMAIL_REQUIRED)
      .min(6, EMAIL_MESSAGES.EMAIL_LENGTH),
    password: z.string().min(8, PASSWORD_MESSAGES.PASSWORD_LENGTH),
    confirmPassword: z
      .string()
      .min(8, CONFIRM_PASSWORD_MESSAGES.PASSWORD_REQUIRED),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: CONFIRM_PASSWORD_MESSAGES.PASSWORD_CONFIRMED,
    path: ['confirmPassword'],
  });

export type SigninFormType = z.infer<typeof SigninFormSchema>;
