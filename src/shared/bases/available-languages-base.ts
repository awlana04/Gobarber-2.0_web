import AvailableLanguagesType from '@/shared/types/available-languages-type';

const AvailableLanguages = (language: AvailableLanguagesType, path: any) => {
  // direct the languages' path
  // if the language was not chosen by the prop passed upon, will save as False
  const brazilianPortuguese = language === 'pt-br' && path.PtBr;
  const americanEnglish = language === 'en-us' && path.DefaultLanguage;

  // save all the available languages into an Array
  const availableLanguages = [americanEnglish, brazilianPortuguese];

  return { availableLanguages };
};

export default AvailableLanguages;
