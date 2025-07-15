import { GetCookies } from '@/infra/libs/cookies-next-lib';
import AvailableLanguagesBase from './available-languages';

import LanguageSwitcher from './language-switcher';
import AvailableLanguagesType from '../types/available-languages-type';

let language: AvailableLanguagesType = 'en-us';

// async () => {
//   language = await GetCookies('language');
// };

const translate = (text: string) => {
  const { availableLanguages, defaultLanguage } =
    AvailableLanguagesBase(language);

  return LanguageSwitcher(availableLanguages, defaultLanguage, text);
};

export default translate;
