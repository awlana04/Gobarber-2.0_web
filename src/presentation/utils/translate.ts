import translateBase from '@/shared/bases/translate-base';

import DefaultLanguage from '@/public/languages/presentation/default/en-us.json';

import PtBr from '@/public/languages/presentation/pt-br.json';

const translate = (text: string) => {
  return translateBase(text, { DefaultLanguage, PtBr }, DefaultLanguage);
};

export default translate;
