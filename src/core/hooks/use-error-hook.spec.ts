import { describe, it, expect } from 'vitest';
import { act, renderHook } from '@testing-library/react';

import useHandleErroredHook from './use-error-hook';

describe('<useHandleErroredHook /> hook in core layer', () => {
  it('should be able to update the field state in the useHandleErroredHook', () => {
    const { result } = renderHook(() => useHandleErroredHook());

    const inputName = 'input';

    act(() => {
      result.current.handleFieldErrored({
        target: { name: inputName },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.fieldErrored).toEqual([inputName]);
  });
});
