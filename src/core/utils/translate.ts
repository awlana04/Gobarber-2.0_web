import translateBase from '@/shared/bases/translate-base';

import DefaultLanguage from '@/core/languages/default/en-us.json';

import PtBr from '@/core/languages/pt-br.json';

const translate = (text: string) => {
  return translateBase(text, PtBr, DefaultLanguage);
};

export default translate;
