import AvailableLanguages from './available-languages';

import EnUs from '@/presentation/languages/en-us.json';

import LanguageSwitcher from '@/shared/utils/language-switcher';

const translate = (text: string) => {
  const { availableLanguages } = AvailableLanguages('pt-br');

  return LanguageSwitcher(availableLanguages, EnUs, text);
};

export default translate;
