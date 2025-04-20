import { describe, it, expect } from 'vitest';

import translate from './translate';

describe('Translate function in presentation layer utils', () => {
  it('should be able to translate the text to PtBr', () => {
    const text = 'Yes';

    expect(translate(text)).toEqual('Sim');
  });

  it('should NOT be able to translate the text to PtBr with incorrect english translated text', () => {
    const text = 'errado';

    expect(() => translate(text)).toThrowError(
      `English text translating incorrectly: ${text}`
    );
  });
});
