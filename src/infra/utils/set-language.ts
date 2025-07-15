import AvailableLanguagesType from '@/shared/types/available-languages-type';

import { SetCookies } from '@/infra/libs/cookies-next-lib';

export default async function setLanguage(
  language: AvailableLanguagesType
): Promise<any> {
  await SetCookies('@GoBarber-2.0:language', language);
}
