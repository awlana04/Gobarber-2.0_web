import Image from 'next/image';
import { FiX, FiPlus } from 'react-icons/fi';

import { FormImagesInputProps } from '@/presentation/types/form-images-input-props-type';

import Title from '@/atoms/title';

import translate from '@/shared/utils/translate';

export default function FormImagesInput(props: FormImagesInputProps) {
  return (
    <div className='h-fit w-fit items-center justify-center'>
      <Title>{translate('Photos')}</Title>

      <input
        type='file'
        id='images[]'
        multiple
        onChange={props.handleChange}
        className='file hidden'
      />

      {props.fileUrl && (
        <div className='flex h-fit w-96 flex-wrap gap-4'>
          {props.fileUrl.map((image: any) => {
            return (
              <div
                key={image}
                className='flex h-28 w-28 justify-end rounded-xl'
              >
                <div
                  onClick={() => {
                    const imageFile = props.fileUrl.findIndex(
                      (file: any) => file === image
                    );

                    const fileIndex = props.file.at(imageFile);

                    props.setFile(
                      props.file.filter(
                        (files: any) => files.name !== fileIndex!.name
                      )
                    );

                    props.setFileUrl(
                      props.fileUrl.filter((files: any) => files !== image)
                    );
                  }}
                  className='bg-orange text-inputText hover:bg-red absolute grid cursor-pointer items-center justify-center rounded-se-lg rounded-bl-lg p-2 text-2xl hover:h-28 hover:w-28 hover:rounded-lg hover:text-4xl hover:opacity-60'
                >
                  <FiX />
                </div>

                <Image
                  key={image}
                  src={
                    props.file !== undefined
                      ? image
                      : `${process.env.NEXT_PUBLIC_BACKEND_URI}/files/${image}`
                  }
                  alt={image}
                  width={112}
                  height={112}
                  className='rounded-lg'
                />
              </div>
            );
          })}

          <label
            htmlFor='images[]'
            className='bg-input hover:bg-orange hover:text-buttonText flex h-20 w-20 cursor-pointer items-center justify-center rounded-xl'
          >
            <FiPlus size={24} className='text-inputText' />
          </label>
        </div>
      )}
    </div>
  );
}
