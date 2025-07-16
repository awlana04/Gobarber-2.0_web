import AvailableLanguagesBase from './available-languages';

import LanguageSwitcher from './language-switcher';
import AvailableLanguagesType from '../types/available-languages-type';

let language: AvailableLanguagesType = 'en-us';

if (typeof document !== 'undefined') {
  const lang = document.cookie
    .split('; ')
    .find((row) => row.startsWith('@GoBarber-2.0:language='))
    ?.split('=')[1]
    .replace(/[^A-Za-z\-]/g, '') as unknown as AvailableLanguagesType;

  if (lang !== language) {
    language = lang;
  }
}

const { availableLanguages, defaultLanguage } =
  AvailableLanguagesBase(language);

const translate = (text: string) => {
  return LanguageSwitcher(availableLanguages, defaultLanguage, text);
};

export default translate;
