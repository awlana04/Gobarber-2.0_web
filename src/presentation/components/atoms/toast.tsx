import { useEffect } from 'react';
import { FiAlertCircle, FiCheckCircle, FiInfo, FiX } from 'react-icons/fi';

import { useToast } from '@/contexts/use-toast-context';

import { ToastMessageType } from '@/presentation/interfaces/toast-message-type';

type ToastProps = {
  message: ToastMessageType;
};

export default function Toast({ message }: ToastProps) {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <div className='p-2 px-4 align-top'>
      <div
        data-info={message.type === 'info'}
        data-errored={message.type === 'error'}
        className='data-[errored=false]:bg-success-background data-[info=true]:bg-info-background data-[errored=true]:bg-error-background flex w-80 flex-col rounded-lg px-6 py-4'
      >
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row'>
            {message.type === 'info' && <FiInfo className='m-1 mr-2 text-xl' />}
            {message.type === 'error' && (
              <FiAlertCircle className='m-1 mr-2 text-xl' />
            )}
            {message.type === 'success' && (
              <FiCheckCircle className='m-1 mr-2 text-xl' />
            )}

            <p className='data-[errored=false]:bg-success-text data-[info=true]:bg-info-text data-[errored=true]:bg-error-text mb-4 text-xl font-bold'>
              {message.title}
            </p>
          </div>

          <button onClick={() => removeToast(message.id)}>
            <FiX className='mb-3 cursor-pointer text-xl hover:opacity-[0.8]' />
          </button>
        </div>

        <span className='data-[errored=false]:bg-success-text data-[info=true]:bg-info-text data-[errored=true]:bg-error-text ml-2 text-base font-medium'>
          {message.description}
        </span>
      </div>
    </div>
  );
}
