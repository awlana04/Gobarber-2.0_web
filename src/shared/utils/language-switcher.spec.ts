import { describe, it, expect } from 'vitest';
import LanguageSwitcher from './language-switcher';

describe('Language switcher function', () => {
  const EnUsText = { '0': 'testing' };
  const PtBrText = { '0': 'testando' };

  it('should be able to translate the text to PtBr', () => {
    const availableLanguages = [PtBrText];
    const text = 'testing';

    expect(LanguageSwitcher(availableLanguages, EnUsText, text)).toEqual(
      PtBrText[0]
    );
  });

  it('should NOT be able to translate the text to PtBr with incorrect english translated text', () => {
    const availableLanguages = [PtBrText];
    const text = 'testando';

    expect(() =>
      LanguageSwitcher(availableLanguages, EnUsText, text)
    ).toThrowError(`English text translating incorrectly: ${text}`);
  });
});
