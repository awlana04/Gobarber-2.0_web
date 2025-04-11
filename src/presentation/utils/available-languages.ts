import { AvailableLanguagesType } from '@/presentation/types/available-languages-type';

import PtBr from '@/presentation/languages/pt-br.json';
import EnUs from '@/presentation/languages/en-us.json';

const AvailableLanguages = (language: AvailableLanguagesType) => {
  // direct the languages' path
  // if the language was not chosen by the prop passed upon, will save as False
  const brazilianPortuguese = language === 'pt-br' && PtBr;
  const americanEnglish = language === 'en-us' && EnUs;

  // save all the available languages into an Array
  const availableLanguages = [americanEnglish, brazilianPortuguese];

  return { availableLanguages };
};

export default AvailableLanguages;
