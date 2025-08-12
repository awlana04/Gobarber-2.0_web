import Image from 'next/image';
import { FiCamera } from 'react-icons/fi';

import { AvatarInputPropsType } from '@/presentation/types/avatar-input-props-type';

import logo from '@/public/gobarber_logo.svg';

import translate from '@/shared/utils/translate';

type FormAvatarButtonPropsType = AvatarInputPropsType & {
  large?: boolean;
};

export default function FormAvatarButton(props: FormAvatarButtonPropsType) {
  return (
    <div
      data-large={props.large}
      className='group hover:bg-input-text flex h-28 w-28 cursor-pointer rounded-full bg-white text-white data-[large=false]:m-auto data-[large=true]:absolute data-[large=true]:top-24 data-[large=true]:left-[50%] data-[large=true]:h-44 data-[large=true]:w-44 data-[large=true]:-translate-x-[50%]'
    >
      <input
        type='file'
        id='avatar'
        onChange={props.handleChange}
        className='file hidden cursor-pointer'
      />

      <label htmlFor='avatar' className='m-auto'>
        {!props.fileUrl && (
          <Image
            src={logo}
            width={0}
            height={0}
            alt={translate('Choose an avatar for your profile')}
            className='absolute -mt-10 ml-3 cursor-pointer'
          />
        )}

        <p className='absolute -mt-2 ml-6 cursor-pointer opacity-0 group-hover:opacity-100'>
          {translate('Choose')}
        </p>
      </label>

      {props.fileUrl && (
        <div
          onClick={props.handleRemove}
          className='group absolute m-auto cursor-pointer'
        >
          <Image
            data-large={props.large}
            src={props.fileUrl}
            alt={translate('You already chosen an avatar')}
            className='h-28 w-28 rounded-full opacity-100 data-[large=true]:h-44 data-[large=true]:w-44'
            width={props.large ? 176 : 112}
            height={props.large ? 176 : 112}
          />

          <p className='absolute -mt-14 ml-6 cursor-pointer opacity-0 group-hover:opacity-100'>
            {translate('Remove')}
          </p>
        </div>
      )}

      <div
        data-large={props.large}
        className='bg-orange group-hover:bg-button-hover z-10 m-20 flex h-12 w-12 rounded-full p-2 data-[large=true]:m-32'
      >
        <FiCamera className='m-auto text-black' size={28} />
      </div>
    </div>
  );
}
