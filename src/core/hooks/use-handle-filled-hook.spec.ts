import { describe, it, expect } from 'vitest';
import { act, renderHook } from '@testing-library/react';

import useHandleFilledHook from './use-handle-filled-hook';

describe('<useHandleFilledHook /> hook in core layer', () => {
  it('should be able to update the field state in the useHandleFilledHook', () => {
    const { result } = renderHook(() => useHandleFilledHook());

    const inputName = 'input';

    act(() => {
      result.current.handleFieldFilled({
        target: { name: inputName, value: inputName },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.fieldFilled).toEqual([inputName]);
  });
});
