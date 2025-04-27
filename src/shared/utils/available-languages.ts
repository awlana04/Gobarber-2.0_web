import AvailableLanguagesType from '@/shared/types/available-languages-type';

import DefaultLanguage from '@/public/languages/default/en-us.json';

import PtBr from '@/public/languages/pt-br.json';

const AvailableLanguages = (language: AvailableLanguagesType) => {
  // direct the languages' path
  // if the language was not chosen by the prop passed upon, will save as False
  const brazilianPortuguese = language === 'pt-br' && PtBr;
  const americanEnglish = language === 'en-us' && DefaultLanguage;

  // save all the available languages into an Array
  const availableLanguages = [americanEnglish, brazilianPortuguese];
  const defaultLanguage = DefaultLanguage;

  return { availableLanguages, defaultLanguage };
};

export default AvailableLanguages;
