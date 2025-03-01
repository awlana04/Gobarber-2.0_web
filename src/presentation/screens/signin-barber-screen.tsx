import { FiScissors } from 'react-icons/fi';

import ContentTemplate from '../templates/content-template';

import BackToLogon from '@components/atoms/back-to-logon';
import Button from '@components/atoms/button';

import { Form } from '@components/molecules/form';

import LocationInputFragment from '../fragments/location-input-fragment';
import DescriptionInputFragment from '../fragments/description-input-fragment';

import { ImagesType } from '@interfaces/images-type';
import { RadioType } from '@interfaces/radio-type';

import image from '@public/gobarber_image004.svg';

type SigninBarberScreenType = {
  submitHandler(data: any): void;
  images: ImagesType;
  nameErrored: boolean;
  openAtNight: RadioType;
  openOnWeekends: RadioType;
};

export default function SigninBarberScreen({
  submitHandler,
  images,
  nameErrored,
  openAtNight,
  openOnWeekends,
}: SigninBarberScreenType) {
  return (
    <ContentTemplate position='left' src={image} alt='Imagem da barbearia'>
      <Form.Root submitHandler={submitHandler}>
        <LocationInputFragment />

        <Form.Input
          iconName={FiScissors}
          type='text'
          name='barberName'
          placeholder='Nome da barbearia'
          errored={nameErrored}
        />

        <DescriptionInputFragment />

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
