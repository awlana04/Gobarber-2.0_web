import { ToastContext } from '@/contexts/use-toast-context';

import useToastHook from '@/core/hooks/use-toast-hook';

import ToastContainer from '@/infra/utils/toast-container';

type UseToastContextFactoryPropsType = {
  children?: React.ReactNode;
};

export default function UseToastContextFactory({
  children,
}: UseToastContextFactoryPropsType) {
  const { addToast, removeToast, messages } = useToastHook();

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
}
