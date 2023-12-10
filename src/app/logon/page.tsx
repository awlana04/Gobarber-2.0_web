import Link from 'next/link';
import { FiMail, FiLock } from 'react-icons/fi';

import Logo from '@/components/Logo';
import Button from '@/components/Button';
import CreateAccount from '@/components/CreateAccount';
import ImageContainer from '@/components/ImageContainer';

import image from '@public/gobarber_image002.svg';

export default function Logon() {
  return (
    <body>
      <div className='flex items-center justify-center'>
        <main className='grid w-screen p-12'>
          <Logo />
          <h1 className='m-auto mt-14'>Faça seu Logon</h1>

          <div className='flex flex-col items-center'>
            <div className='py-4'>
              <FiMail className='text-inputText absolute mx-4 mt-5' />
              <input
                type='email'
                placeholder='Email'
                className='placeholder:text-inputText m-auto flex-row px-10 text-orange outline-none hover:outline-orange hover:placeholder:text-orange focus:outline-orange focus:placeholder:text-orange'
              />
            </div>

            <div className='flex-row'>
              <FiLock className='text-inputText absolute mx-4 mt-5 ' />
              <input
                type='password'
                placeholder='Senha'
                className='placeholder:text-inputText m-auto flex-row px-10 text-orange outline-none hover:outline-orange hover:placeholder:text-orange focus:outline-orange focus:placeholder:text-orange'
              ></input>
            </div>
          </div>

          <Button href='./client/home' />

          <Link href='./forgot-password' className='m-auto my-2'>
            Esqueci minha senha
          </Link>

          <CreateAccount />
        </main>

        <ImageContainer src={image} alt='Imagem da barbearia' />
      </div>
    </body>
  );
}
