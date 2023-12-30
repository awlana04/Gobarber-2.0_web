import Image from 'next/image';
import { FiX, FiPlus } from 'react-icons/fi';

import useHandleImagesHook from '@hooks/useHandleImagesHook';
import { ChangeEvent } from 'react';

type FormImagesInputProps = {
  file: string | any;
  fileUrl: string | any;
  setFile: (file: any) => void;
  setFileUrl: (file: any) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function FormImagesInput({
  file,
  setFile,
  fileUrl,
  setFileUrl,
  handleChange,
}: FormImagesInputProps) {
  return (
    <div className='h-fit w-fit items-center justify-center'>
      <input
        type='file'
        id='images[]'
        multiple
        onChange={handleChange}
        className='file hidden'
      />

      {file && fileUrl && (
        <div className='flex h-fit w-96 flex-wrap gap-4'>
          {fileUrl.map((image: any) => {
            return (
              <div
                key={image}
                className='flex h-28 w-28 justify-end rounded-xl'
              >
                <div
                  onClick={() => {
                    const imageFile = fileUrl.findIndex(
                      (file: any) => file === image
                    );

                    const fileIndex = file.at(imageFile);

                    setFile(
                      file.filter(
                        (files: any) => files.name !== fileIndex!.name
                      )
                    );

                    setFileUrl(fileUrl.filter((files: any) => files !== image));
                  }}
                  className='absolute grid cursor-pointer items-center justify-center rounded-bl-lg rounded-se-lg bg-orange p-2 text-2xl text-inputText hover:h-28 hover:w-28 hover:rounded-lg hover:bg-red hover:text-4xl hover:opacity-60'
                >
                  <FiX />
                </div>

                <Image
                  key={image}
                  src={image}
                  alt={image}
                  width={112}
                  height={112}
                />
              </div>
            );
          })}

          <label
            htmlFor='images[]'
            className='flex h-20 w-20 cursor-pointer items-center justify-center rounded-xl bg-input hover:bg-orange hover:text-buttonText'
          >
            <FiPlus size={24} className='text-inputText' />
          </label>
        </div>
      )}
    </div>
  );
}
