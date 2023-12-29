import Image from 'next/image';
import { FiCamera } from 'react-icons/fi';

import logo from '@public/gobarber_logo.svg';

import useHandleAvatarHook from '@hooks/useHandleAvatarHook';

export default function FormAvatarButton() {
  const { file, fileUrl, handleChange, handleRemove } = useHandleAvatarHook();

  return (
    <div className='group m-auto flex h-28 w-28 cursor-pointer rounded-full bg-white text-white hover:bg-inputText'>
      <input
        type='file'
        id='avatar'
        onChange={handleChange}
        className='file hidden'
      />

      <label htmlFor='avatar' className='m-auto'>
        <Image
          src={logo}
          alt='Logo do GoBarber'
          className='absolute -mt-10 ml-3 cursor-pointer'
        />

        <p className='group-hover:opacity-1 absolute m-3 mt-10 opacity-0'>
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
            className='h-28 w-28 rounded-full'
            width={112}
            height={112}
          />

          <p className='group-hover:opacity-1 absolute m-3 mt-10 opacity-0'>
            Remover
          </p>
        </div>
      )}

      <div className='z-10 m-20 flex h-12 w-12 rounded-full bg-orange p-2 group-hover:bg-buttonHover'>
        <FiCamera className='m-auto text-black' size={28} />
      </div>
    </div>
  );
}
