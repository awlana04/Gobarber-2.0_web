'use client';

import { HandleErroredContext } from '@/contexts/use-handle-errored-context';

import useHandleErroredHook from '@/core/hooks/use-handle-errored-hook';

type HandleErroredHookProps = {
  children?: React.ReactNode;
};

export default function UseHandleErroredContextFactory({
  children,
}: HandleErroredHookProps) {
  const { fieldErrored, handleFieldErrored } = useHandleErroredHook();

  return (
    <HandleErroredContext.Provider value={{ fieldErrored, handleFieldErrored }}>
      {children}
    </HandleErroredContext.Provider>
  );
}
