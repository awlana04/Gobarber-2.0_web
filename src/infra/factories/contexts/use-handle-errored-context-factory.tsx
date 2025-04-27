'use client';

import useHandleErroredHook from '@/hooks/use-handle-errored-hook';

import { HandleErroredContext } from '@/contexts/use-handle-errored-context';

type HandleErroredHookPropsType = {
  children?: React.ReactNode;
};

export default function UseHandleErroredContextFactory({
  children,
}: HandleErroredHookPropsType) {
  const { fieldErrored, handleFieldErrored, clearFieldErrored } =
    useHandleErroredHook();

  return (
    <HandleErroredContext.Provider
      value={{ fieldErrored, handleFieldErrored, clearFieldErrored }}
    >
      {children}
    </HandleErroredContext.Provider>
  );
}
