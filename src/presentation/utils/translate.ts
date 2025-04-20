import translateBase from '@/shared/bases/translate-base';

import DefaultLanguage from '@/presentation/languages/default/en-us.json';

import PtBr from '@/presentation/languages/pt-br.json';

const translate = (text: string) => {
  return translateBase(text, { DefaultLanguage, PtBr }, DefaultLanguage);
};

export default translate;
