import { ChangeEvent, InputHTMLAttributes } from 'react';
import Image from 'next/image';
import { FiCamera } from 'react-icons/fi';

import logo from '@public/gobarber_logo.svg';

type FormAvatarButtonProps = InputHTMLAttributes<HTMLImageElement> & {
  file: string | any;
  fileUrl: string | any;
  handleChange(event: ChangeEvent<HTMLInputElement>): any;
  handleRemove(): void;
};

export default function FormAvatarButton({
  file,
  fileUrl,
  handleChange,
  handleRemove,
}: FormAvatarButtonProps) {
  return (
    <div className='group hover:bg-input-text m-auto flex h-28 w-28 cursor-pointer rounded-full bg-white text-white'>
      <input
        type='file'
        id='avatar'
        onChange={handleChange}
        className='file hidden cursor-pointer'
      />

      <label htmlFor='avatar' className='m-auto'>
        <Image
          src={logo}
          alt='Logo do GoBarber'
          className='absolute -mt-10 ml-3 cursor-pointer'
        />

        <p className='absolute -mt-2 ml-6 cursor-pointer opacity-0 group-hover:opacity-100'>
          Escolher
        </p>
      </label>

      {file && fileUrl && (
        <div
          onClick={handleRemove}
          className='group absolute m-auto cursor-pointer'
        >
          <Image
            src={fileUrl}
            alt={file.name}
            className='h-28 w-28 rounded-full opacity-100'
            width={112}
            height={112}
          />

          <p className='absolute -mt-14 ml-6 cursor-pointer opacity-0 group-hover:opacity-100'>
            Remover
          </p>
        </div>
      )}

      <div className='bg-orange group-hover:bg-button-hover z-10 m-20 flex h-12 w-12 rounded-full p-2'>
        <FiCamera className='m-auto text-black' size={28} />
      </div>
    </div>
  );
}
