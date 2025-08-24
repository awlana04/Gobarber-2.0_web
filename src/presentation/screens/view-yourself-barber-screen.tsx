'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import {
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
} from 'react-icons/fi';

import { HeaderPropsType } from '@/presentation/types/header-props-type';
import { BarberDataType } from '@/infra/types/data-type';

import DashboardTemplate from '@/templates/dashboard-template';

import AvatarImage from '@/components/atoms/avatar-image';
import TextWithIcon from '@/components/atoms/text-with-icon';

type ViewYourselfBarberScreenPropsType = HeaderPropsType & {
  barber: BarberDataType;
};

export default function ViewYourselfBarberScreen(
  props: ViewYourselfBarberScreenPropsType
) {
  const [activeImages, setActiveImages] = useState<[string, string, string]>([
    '',
    '',
    '',
  ]);

  // Take the first 3 elements in the barber images array
  const barberImagesArray = props.barber.images!.slice(0, 3);

  // Save the initial carrousel images state
  useMemo(() => {
    setActiveImages([
      barberImagesArray[0],
      barberImagesArray[1],
      barberImagesArray[2],
    ]);
  }, []);

  // Find the barber image index corresponding to the activeImages array last element
  const barberImageIndex = props.barber.images!.findIndex(
    (image) => image === activeImages[2]
  );

  const nextImage = () => {
    // With the barberImageIndex index, we create a new array beginning from index of the last visible image and ending in exact index of the new visible image on the right
    const newBarberImagesArrayIndex = props.barber.images!.slice(
      barberImageIndex - 1,
      barberImageIndex + 2
    );

    // Set the new carrousel state according to the newBarberImagesArrayIndex
    setActiveImages([
      newBarberImagesArrayIndex[0],
      newBarberImagesArrayIndex[1],
      newBarberImagesArrayIndex[2],
    ]);
  };

  const previousImage = () => {
    // With the barberImageIndex index, we create a new array beginning from index of the last visible image and ending in exact previous index of the visible image from the left
    const newBarberImagesArrayIndex = props.barber.images!.slice(
      barberImageIndex - 3,
      barberImageIndex
    );

    // Set the new carrousel state according to the newBarberImagesArrayIndex
    setActiveImages([
      newBarberImagesArrayIndex[0],
      newBarberImagesArrayIndex[1],
      newBarberImagesArrayIndex[2],
    ]);
  };

  return (
    <DashboardTemplate {...props} headerType='dashboard'>
      <div className='mx-48 mt-16 flex flex-row space-x-8'>
        <AvatarImage src={props.user.avatar} size='extra-large' />

        <div className='flex flex-col justify-center'>
          <h3 className='text-4xl font-medium text-white'>
            {props.barber.name}
          </h3>

          <div className='mt-10'>
            <TextWithIcon
              color='orange-grey'
              icon={FiCalendar}
              text='Segunda à Sexta'
            />

            <div className='mt-2'>
              <TextWithIcon
                color='orange-grey'
                icon={FiClock}
                text='08h às 21hrs'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-24 flex flex-row items-center justify-center px-10'>
        {barberImagesArray.findIndex((image) => image) !==
          props.barber.images!.findIndex(
            (image) => image === activeImages[0]
          ) && (
          <div
            onClick={previousImage}
            className='bg-orange mr-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full'
          >
            <FiChevronLeft className='text-3xl' />
          </div>
        )}

        {props.barber.images &&
          activeImages.map((image) => (
            <Image
              key={image}
              src={`${process.env.NEXT_PUBLIC_BACKEND_URI}/files/${image}`}
              alt='Imagem da barbearia'
              width={312}
              height={312}
              className='mx-2 rounded-2xl'
            />
          ))}

        {props.barber.images!.length - 1 !==
          props.barber.images!.findIndex(
            (image) => image === activeImages[2]
          ) && (
          <div
            onClick={nextImage}
            className='bg-orange ml-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full'
          >
            <FiChevronRight className='text-3xl' />
          </div>
        )}
      </div>
    </DashboardTemplate>
  );
}
