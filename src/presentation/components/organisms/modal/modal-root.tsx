import { FiX } from 'react-icons/fi';

import { ModalPropsType } from '@/presentation/types/modal-props-type';

type ModalRootPropsType<T extends ModalPropsType> = T & {
  Render: React.ComponentType<T>;
};

export default function ModalRoot({
  Render,
  ...props
}: ModalRootPropsType<ModalPropsType>) {
  return (
    <>
      {props.isModalOpen && (
        <div
          data-user={props.dataType === 'user'}
          className='bg-button-text fixed top-52 left-[50%] z-100 max-h-screen w-[864] translate-x-[-50%] rounded-2xl pb-6 data-[user=false]:h-[748] data-[user=true]:translate-y-[50%]'
        >
          <div className='absolute top-0 left-0 h-full w-full overflow-auto p-8 px-12'>
            <div className='mb-6 flex flex-row place-content-between items-center'>
              <h2 className='text-orange text-3xl'>{props.headerText}</h2>

              <FiX
                onClick={() => props.setIsModalOpen(false)}
                className='text-input-text text-2xl hover:cursor-pointer hover:text-white'
              />
            </div>
          </div>

          {Render && <Render {...props} />}
        </div>
      )}
    </>
  );
}
