import Toast from './toast';

import { ToastMessageType } from '@/core/types/toast-message-type';

export default function ToastContainer(messages: ToastMessageType[]) {
  return (
    <div className='absolute top-0 right-0'>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </div>
  );
}
