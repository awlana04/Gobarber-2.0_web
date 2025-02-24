import { z } from 'zod';

import { NAME_MESSAGES } from '@constants/name-messages';
import { LOCATION_MESSAGES } from '@constants/location-messages';
import { DESCRIPTION_MESSAGES } from '@constants/description-messages';

export const SigninBarberSchema = z.object({
  name: z.string().min(3, NAME_MESSAGES.NAME_REQUIRED),
  location: z.string().min(8, LOCATION_MESSAGES.LOCATION_REQUIRED),
  description: z.string().min(16, DESCRIPTION_MESSAGES.DESCRIPTION_REQUIRED),
});

export type SigninBarberType = z.infer<typeof SigninBarberSchema>;
