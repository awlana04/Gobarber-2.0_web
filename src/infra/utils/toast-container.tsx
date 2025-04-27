import Toast from './toast';

import { ToastMessageType } from '@/core/types/toast-message-context-data-type';

type ToastContainerPropsType = {
  messages: ToastMessageType[];
};

export default function ToastContainer({ messages }: ToastContainerPropsType) {
  return (
    <div className='absolute top-0 right-0'>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </div>
  );
}
