import { FiScissors, FiMessageSquare, FiMapPin } from 'react-icons/fi';

import ContentWrapper from '@components/atoms/content-wrapper';
import ContentContainer from '@components/atoms/content-container';
import AsideImage from '@components/atoms/aside-image';
import Logo from '@components/atoms/logo';
import Toast from '@components/atoms/toast';
import BackToLogon from '@components/atoms/back-to-logon';
import Button from '@components/atoms/button';

import { Form } from '@components/molecules/form';

import { InputType } from '@interfaces/input-type';
import { ToastType } from '@interfaces/toast-type';
import { ImagesType } from '@interfaces/images-type';
import { RadioType } from '@interfaces/radio-type';

import image from '@public/gobarber_image004.svg';

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
    <ContentWrapper>
      <AsideImage src={image} alt='Foto de barbeiro' />

      <ContentContainer>
        <Logo />

        <Form.Root onSubmit={submitHandler}>
          <Form.Textarea
            {...locationInput.submitField}
            placeholder='Selecione o lugar no mapa'
            iconName={FiMapPin}
            errored={locationInput.errored}
          />

          {locationToast.conditional && (
            <Toast
              id={locationToast.id!}
              title='Localização invalida'
              description={locationToast.description!}
            />
          )}

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

          <Form.Textarea
            {...descriptionInput.submitField}
            placeholder='Descrição'
            iconName={FiMessageSquare}
            errored={descriptionInput.errored}
          />

          {descriptionToast?.conditional && (
            <Toast
              id={descriptionToast.id!}
              title='Descrição invalida'
              description={descriptionToast.description!}
            />
          )}

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
      </ContentContainer>
    </ContentWrapper>
  );
}
