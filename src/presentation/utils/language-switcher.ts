import { AvailableLanguagesType } from '@/presentation/types/available-languages-type';

import AvailableLanguages from './available-languages';

import EnUs from '@/presentation/languages/en-us.json';

export const LanguageSwitcher = (
  language: AvailableLanguagesType,
  defaultLanguage: {},
  text: string
) => {
  const { availableLanguages } = AvailableLanguages(language);

  // transform the default language into an Array
  const defaultLanguageIntoArray = Object.entries(defaultLanguage).map(
    ([key, value]) => ({
      key,
      value,
    })
  );

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
