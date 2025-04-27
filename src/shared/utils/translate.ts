import AvailableLanguagesBase from './available-languages';

import LanguageSwitcher from './language-switcher';

const translate = (text: string) => {
  const { availableLanguages, defaultLanguage } =
    AvailableLanguagesBase('pt-br');

  return LanguageSwitcher(availableLanguages, defaultLanguage, text);
};

export default translate;
