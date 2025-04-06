import { ATOMS_PT_BR_LANGUAGE_TEXT } from '../languages/pt-br/components/atoms';

type AtomsLanguageType = 'BackToLogon' | 'CreateAccount';

type LanguageOptionsType = {
  availableLanguages?: 'pt-br' | 'en-us';
  path: AtomsLanguageType;
};

export const languageSwitcher = (lang: LanguageOptionsType) => {
  switch (lang.availableLanguages) {
    case 'pt-br': {
      switch (lang.path) {
        case 'BackToLogon':
          return ATOMS_PT_BR_LANGUAGE_TEXT.BackToLogon;
      }
    }
  }
};
