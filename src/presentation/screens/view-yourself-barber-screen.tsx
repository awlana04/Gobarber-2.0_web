'use client';

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

import AvatarImage from '@/atoms/avatar-image';
import TextWithIcon from '@/atoms/text-with-icon';

type ViewYourselfBarberScreenPropsType = HeaderPropsType & {
  barber: BarberDataType;
  barberImagesArray: string[];
  barberImageIndex: number;
  activeImages: [string, string, string];
  locationRef: React.Ref<HTMLDivElement>;
  previousImage(): void;
  nextImage(): void;
};

export default function ViewYourselfBarberScreen(
  props: ViewYourselfBarberScreenPropsType
) {
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
        {props.barberImagesArray.findIndex((image) => image) !==
          props.barber.images!.findIndex(
            (image) => image === props.activeImages[0]
          ) && (
          <div
            onClick={props.previousImage}
            className='bg-orange mr-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full'
          >
            <FiChevronLeft className='text-3xl' />
          </div>
        )}

        {props.barber.images &&
          props.activeImages.map((image) => (
            <Image
              key={image}
              src={`${process.env.NEXT_PUBLIC_BACKEND_URI}/files/${image}`}
              alt='Imagem da barbearia'
              width={312}
              height={312}
              className='mx-2 rounded-2xl'
            />
          ))}

        {props.barber.images!.length - 1 !== props.barberImageIndex && (
          <div
            onClick={props.nextImage}
            className='bg-orange ml-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full'
          >
            <FiChevronRight className='text-3xl' />
          </div>
        )}
      </div>

      <div
        className='h-60 w-96 overflow-hidden rounded-t-2xl'
        ref={props.locationRef}
      />
    </DashboardTemplate>
  );
}
