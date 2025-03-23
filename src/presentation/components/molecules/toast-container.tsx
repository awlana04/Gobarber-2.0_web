import Toast from '@/components/atoms/toast';

import { ToastMessageType } from '@/presentation/interfaces/toast-message-type';

type ToastContainerProps = {
  messages: ToastMessageType[];
};

export default function ToastContainer({ messages }: ToastContainerProps) {
  return (
    <div className='absolute top-0 right-0'>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </div>
  );
}
