'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiCamera } from 'react-icons/fi';

import Logo from '@/components/Logo';
import ImageContainer from '@/components/ImageContainer';
import LinkToBack from '@/components/LinkToBack';

import image from '@public/gobarber_image003.svg';

import logo from '@public/gobarber_logo.svg';

export default function Signin() {
  const [isSelected, setIsSelected] = useState('client');

  return (
    <main>
      <div className='flex'>
        <ImageContainer src={image} alt='Foto da barbearia' />

        <section className='grid w-screen'>
          <Logo />

          <form className='flex flex-col'>
            {/* <div className='h-28 w-28 rounded-full bg-white'>
              <div className='group absolute'>
                <p className='group-hover:opacity-1 text-orange opacity-0'>
                  Escolher
                </p>

                <Image
                  src={logo}
                  alt='Logo do GoBarber'
                  className='absolute m-3'
                />
              </div>

              <div className='m-20 flex h-12 w-12 rounded-full bg-orange'>
                <FiCamera className='m-auto text-black' size={28} />
              </div>

              <input
                type='file'
                className='absolute -mt-48 ml-2 h-20 w-24 opacity-0'
              />
            </div> */}

            <div className='m-auto flex place-items-center p-4'>
              <div className='mr-24'>
                <input
                  type='radio'
                  id='client'
                  value='client'
                  name='user'
                  checked={isSelected === 'client'}
                  onChange={(e) => setIsSelected(e.target.value)}
                  className='peer hidden'
                />
                <label
                  htmlFor='client'
                  className='cursor-pointer justify-center rounded-lg p-3 text-center hover:bg-input peer-checked:bg-orange peer-checked:text-buttonText'
                >
                  Sou cliente
                </label>
              </div>

              <div>
                <input
                  type='radio'
                  id='barber'
                  value='barber'
                  name='user'
                  checked={isSelected === 'barber'}
                  onChange={(e) => setIsSelected(e.target.value)}
                  className='peer hidden'
                />
                <label
                  htmlFor='barber'
                  className='cursor-pointer justify-center rounded-lg p-3 text-center hover:bg-input peer-checked:bg-orange peer-checked:text-buttonText'
                >
                  Sou barbeiro
                </label>
              </div>
            </div>

            <input
              type='text'
              placeholder='Nome'
              className='m-auto flex-row px-10 outline-none placeholder:text-inputText'
            />

            <input
              type='email'
              placeholder='E-mail'
              className='m-auto flex-row px-10 outline-none placeholder:text-inputText'
            />

            <input
              type='password'
              placeholder='Senha'
              className='m-auto flex-row px-10 outline-none placeholder:text-inputText'
            />

            <input
              type='password'
              placeholder='Confirmar senha'
              className='m-auto flex-row px-10 outline-none placeholder:text-inputText'
            />

            <button type='submit' className='m-auto my-6 bg-orange max-sm:my-4'>
              Entrar
            </button>
          </form>

          <LinkToBack />
        </section>
      </div>
    </main>
  );
}
