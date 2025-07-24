import { ModalPropsType } from '@/presentation/types/modal-props-type';

type ModalTextPropsType = Pick<
  ModalPropsType,
  'setIsModalOpen' | 'deleteAppointment' | 'data'
>;

export default function ModalTextAndButton(props: ModalTextPropsType) {
  return (
    <div className='mt-36 flex scale-100 flex-row justify-center space-x-6'>
      <button
        onClick={() => props.deleteAppointment}
        className='hover:bg-red h-14 w-20 rounded-2xl text-lg hover:cursor-pointer'
      >
        Sim
      </button>
      <button
        className='h-14 w-20 rounded-2xl text-lg hover:cursor-pointer hover:bg-black'
        onClick={() => props.setIsModalOpen(false)}
      >
        Não
      </button>
    </div>
  );
}
