import { AvailableLanguagesType } from '@/presentation/types/available-languages-type';

import PtBr from '@/presentation/languages/pt-br.json';
import EnUs from '@/presentation/languages/en-us.json';

export const LanguageSwitcher = (
  language: AvailableLanguagesType,
  text: string
) => {
  // direct the languages' path
  // if the language was not chosen by the prop passed upon, will save as False
  const brazilianPortuguese = language === 'pt-br' && PtBr;
  const americanEnglish = language === 'en-us' && EnUs;

  // save all the available languages into an Array
  const availableLanguages = [americanEnglish, brazilianPortuguese];

  // transform the default language into an Array
  const defaultLanguageIntoArray = Object.entries(EnUs).map(([key, value]) => ({
    key,
    value,
  }));

  // get the index of the text in en-us
  const getTextIndex = defaultLanguageIntoArray.findIndex(
    (defaultIndex) => defaultIndex.value === text
  );

  // remove all the falsy indexes in the Array to return only the chosen language
  const chosenLanguage = availableLanguages.find(
    (falseIndexes) => falseIndexes !== false
  )!;

  // transform the chosen language into an Array
  const chosenLanguageIntoArray = Object.entries(chosenLanguage).map(
    ([key, value]) => ({
      key,
      value,
    })
  );

  // get the text in the chosen language according to the index of the default language
  const findTextInChosenLanguage = chosenLanguageIntoArray[getTextIndex];

  // return the translated text to be used in TSX
  return findTextInChosenLanguage.value;
};
