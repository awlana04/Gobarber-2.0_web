'use client';

import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import ImageContainer from '@/components/ImageContainer';
import Logo from '@components/Logo';

import image from '@public/gobarber_image004.svg';

import LinkToBack from '@/components/LinkToBack';

export default function SigninBarber() {
  const [isOpenAtNightSelected, setIsOpenAtNightSelected] = useState('no');
  const [isOpenOnWeekendsSelected, setIsOpenOnWeekendsSelected] =
    useState('no');

  return (
    <main>
      <div className='flex'>
        <ImageContainer src={image} alt='Foto de barbeiro' />

        <section className='grid w-screen py-8'>
          <Logo />

          <form className='m-auto flex flex-col py-4'>
            <textarea
              placeholder='Selecione o lugar no mapa'
              className='mb-2 h-48 w-full resize-none rounded-xl bg-input px-10 py-4 outline-none placeholder:text-inputText'
            />

            <input
              placeholder='Nome da barbearia'
              className='mb-2 px-10 outline-none placeholder:text-inputText'
            />

            <textarea
              placeholder='Descrição'
              className='mb-2 h-48 w-full resize-none rounded-xl bg-input px-10 py-4 outline-none placeholder:text-inputText'
            />

            <h3 className='mt-4'>Fotos</h3>

            <div>
              <input type='file' id='images' className='file hidden' />

              <label
                htmlFor='images'
                className='my-4 flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl bg-input hover:bg-orange hover:text-buttonText'
              >
                <FiPlus size={24} className='text-inputText' />
              </label>
            </div>

            <h3 className='mt-4'>Sua barbearia é aberta à noite?</h3>

            <div className='m-auto flex place-items-center p-4 pt-8'>
              <div className='mr-24'>
                <input
                  type='radio'
                  id='openAtNightYes'
                  value='yes'
                  checked={isOpenAtNightSelected === 'yes'}
                  onChange={(e) => setIsOpenAtNightSelected(e.target.value)}
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
                  value='no'
                  checked={isOpenAtNightSelected === 'no'}
                  onChange={(e) => setIsOpenAtNightSelected(e.target.value)}
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

            <h3 className='mt-4'>Sua barbearia atende aos sábados?</h3>

            <div className='m-auto flex place-items-center p-4 pt-8'>
              <div className='mr-24'>
                <input
                  type='radio'
                  id='openOnWeekendsYes'
                  value='yes'
                  checked={isOpenOnWeekendsSelected === 'yes'}
                  onChange={(e) => setIsOpenOnWeekendsSelected(e.target.value)}
                  className='peer hidden'
                />
                <label
                  htmlFor='openOnWeekendsYes'
                  className='cursor-pointer justify-center rounded-lg p-3 px-6 text-center hover:bg-input peer-checked:bg-orange peer-checked:text-buttonText'
                >
                  Sim
                </label>
              </div>

              <div>
                <input
                  type='radio'
                  id='openOnWeekendsNo'
                  value='no'
                  checked={isOpenOnWeekendsSelected === 'no'}
                  onChange={(e) => setIsOpenOnWeekendsSelected(e.target.value)}
                  className='peer hidden'
                />
                <label
                  htmlFor='openOnWeekendsNo'
                  className='cursor-pointer justify-center rounded-lg p-3 px-6 text-center hover:bg-input peer-checked:bg-orange peer-checked:text-buttonText'
                >
                  Não
                </label>
              </div>
            </div>

            <button
              type='submit'
              className='m-auto mb-4 mt-6 bg-orange max-sm:my-4'
            >
              Cadastrar
            </button>
          </form>

          <LinkToBack />
        </section>
      </div>
    </main>
  );
}
