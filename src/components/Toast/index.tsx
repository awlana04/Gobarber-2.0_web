import toast, { Toaster } from 'react-hot-toast';
import { FiX } from 'react-icons/fi';

type ToastProps = {
  id: string;
  title: string;
  description: string;
};

export default function Toast({ id, title, description }: ToastProps) {
  toast.custom(
    (t) => (
      <div className={'w-80 rounded-lg bg-red px-6 py-4'}>
        <div className='flex flex-row justify-between'>
          <p className='mb-4 text-xl font-bold'>{title}</p>

          <FiX
            className='cursor-pointer text-xl hover:text-buttonText'
            onClick={() => toast.dismiss(t.id)}
          />
        </div>
        <span className='text-lg font-medium'>{description}</span>
      </div>
    ),
    { id: id }
  );

  return <Toaster position='top-right' />;
}
