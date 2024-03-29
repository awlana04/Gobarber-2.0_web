import { FiScissors } from 'react-icons/fi';

import ContentTemplate from '../templates/content-template';

import Toast from '@components/atoms/toast';
import BackToLogon from '@components/atoms/back-to-logon';
import Button from '@components/atoms/button';

import { Form } from '@components/molecules/form';

import { InputType } from '@interfaces/input-type';
import { ToastType } from '@interfaces/toast-type';
import { ImagesType } from '@interfaces/images-type';
import { RadioType } from '@interfaces/radio-type';

import image from '@public/gobarber_image004.svg';
import LocationInputFragment from '../fragments/location-input-fragment';
import DescriptionInputFragment from '../fragments/description-input-fragment';

type SigninBarberScreenType = {
  submitHandler(data: any): void;
  locationInput: InputType;
  locationToast: ToastType;
  nameInput: InputType;
  nameToast?: ToastType;
  descriptionInput: InputType;
  descriptionToast?: ToastType;
  images: ImagesType;
  openAtNight: RadioType;
  openOnWeekends: RadioType;
};

export default function SigninBarberScreen({
  submitHandler,
  locationInput,
  locationToast,
  nameInput,
  nameToast,
  descriptionInput,
  descriptionToast,
  images,
  openAtNight,
  openOnWeekends,
}: SigninBarberScreenType) {
  return (
    <ContentTemplate position='left' src={image} alt='Imagem da barbearia'>
      <Form.Root onSubmit={submitHandler}>
        <LocationInputFragment
          locationInput={locationInput}
          locationToast={locationToast}
        />

        <Form.Input
          {...nameInput.submitField}
          iconName={FiScissors}
          type='text'
          placeholder='Nome da barbearia'
          errored={nameInput.errored}
        />

        {nameToast?.conditional && (
          <Toast
            id={nameToast.id!}
            title='Nome invalida'
            description={nameToast.description!}
          />
        )}

        <DescriptionInputFragment
          descriptionInput={descriptionInput}
          descriptionToast={descriptionToast}
        />

        <Form.Images
          file={images.file}
          fileUrl={images.fileUrl}
          setFile={images.setFile}
          setFileUrl={images.setFileUrl}
          handleChange={images.handleChange}
        />

        <Form.TwoRadio
          isOpenAtNight={openAtNight.isBarberSelected}
          setIsOpenAtNight={openAtNight.setIsBarberSelected}
          isOpenOnWeekends={openOnWeekends.isBarberSelected}
          setIsOpenOnWeekends={openOnWeekends.setIsBarberSelected}
        />

        <Button type='submit'>Cadastrar</Button>
      </Form.Root>

      <BackToLogon />
    </ContentTemplate>
  );
}
