import ContentTemplate from '@/templates/content-template';

import BackToLogon from '@/atoms/back-to-logon';
import Button from '@/atoms/button';

import { Form } from '@/molecules/form';

import NameInputFragment from '../fragments/name-input-fragment';
import LocationInputFragment from '@/fragments/location-input-fragment';
import DescriptionInputFragment from '@/fragments/description-input-fragment';

import { NameInputPropsType } from '@/presentation/types/name-input-props-type';
import { DescriptionInputPropsType } from '@/presentation/types/description-input-props-type';
import { LocationInputPropsType } from '@/presentation/types/location-input-props-type';
import { FormImagesInputProps } from '../types/form-images-input-props-type';
import { FormTwoRadioButtonProps } from '../types/two-radio-buttons-props-type';
import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';

import image from '@public/gobarber_image004.svg';

type SigninBarberScreenType = NameInputPropsType &
  DescriptionInputPropsType &
  LocationInputPropsType &
  FormImagesInputProps &
  FormTwoRadioButtonProps &
  SubmitHandlerType;

export default function SigninBarberScreen(props: SigninBarberScreenType) {
  return (
    <ContentTemplate position='left' src={image} alt='Imagem da barbearia'>
      <Form.Root submitHandler={props.submitHandler}>
        <LocationInputFragment
          descriptionRef={props.descriptionRef}
          descriptionValue={props.locationValue}
          descriptionErrored={props.locationErrored}
          descriptionFilled={props.descriptionFilled}
          handleDescriptionFilled={props.handleDescriptionFilled}
        />

        <NameInputFragment
          icon='barber'
          placeholder='Nome da barbearia'
          nameRef={props.nameRef}
          nameValue={props.nameValue}
          nameErrored={props.nameErrored}
          nameFilled={props.nameFilled}
          handleNameFilled={props.handleNameFilled}
        />

        <DescriptionInputFragment
          descriptionRef={props.descriptionRef}
          descriptionValue={props.descriptionValue}
          descriptionErrored={props.descriptionErrored}
          descriptionFilled={props.descriptionFilled}
          handleDescriptionFilled={props.handleDescriptionFilled}
        />

        <Form.Images
          file={props.file}
          fileUrl={props.fileUrl}
          setFile={props.setFile}
          setFileUrl={props.setFileUrl}
          handleChange={props.handleChange}
        />

        <Form.TwoRadio
          isOpenAtNight={props.isOpenAtNight}
          setIsOpenAtNight={props.setIsOpenAtNight}
          isOpenOnWeekends={props.isOpenOnWeekends}
          setIsOpenOnWeekends={props.setIsOpenOnWeekends}
        />

        <Button type='submit' isDisabled={false}>
          Cadastrar
        </Button>
      </Form.Root>

      <BackToLogon />
    </ContentTemplate>
  );
}
