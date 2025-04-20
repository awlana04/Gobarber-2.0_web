import AvailableLanguagesBase from './available-languages-base';

import LanguageSwitcher from '@/shared/utils/language-switcher';

const translateBase = (text: string, path: any, defaultLanguagePath: any) => {
  const { availableLanguages } = AvailableLanguagesBase('pt-br', path);

  return LanguageSwitcher(availableLanguages, defaultLanguagePath, text);
};

export default translateBase;
