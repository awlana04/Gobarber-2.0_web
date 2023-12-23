'use client';

import { useState } from 'react';

export default function FormRadioButton() {
  const [isOpenAtNightSelected, setIsOpenAtNightSelected] = useState(false);

  return (
    <div className='m-auto flex place-items-center p-4 pt-8'>
      <div className='mr-24'>
        <input
          type='radio'
          id='openAtNightYes'
          checked={isOpenAtNightSelected === true}
          onChange={() => setIsOpenAtNightSelected(true)}
          className='peer hidden'
        />

        <label
          htmlFor='openAtNightYes'
          className='cursor-pointer justify-center rounded-lg p-3 px-6 text-center hover:bg-input peer-checked:bg-orange peer-checked:text-buttonText'
        >
          Sim
        </label>
      </div>

      <div>
        <input
          type='radio'
          id='openAtNightNo'
          checked={isOpenAtNightSelected === false}
          onChange={() => setIsOpenAtNightSelected(false)}
          className='peer hidden'
        />

        <label
          htmlFor='openAtNightNo'
          className='cursor-pointer justify-center rounded-lg p-3 px-6 text-center hover:bg-input peer-checked:bg-orange peer-checked:text-buttonText'
        >
          Não
        </label>
      </div>
    </div>
  );
}
