import {
  NameInputPropsMappedType,
  DescriptionInputPropsMappedType,
  LocationPropsMappedType,
} from '@/presentation/types/input-props-mapped-types';
import { FormImagesInputProps } from '@/presentation/types/form-images-input-props-type';
import { FormTwoRadioButtonProps } from '@/presentation/types/two-radio-buttons-props-type';
import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';
import ButtonDisabledType from '@/presentation/types/button-disabled-type';

import { FiMapPin } from 'react-icons/fi';

import ContentTemplate from '@/templates/content-template';

import Icon from '@/atoms/icon';
import Button from '@/atoms/button';

import FooterPageLink from '@/molecules/footer-page-link';
import { Form } from '@/molecules/form';

import NameInputFragment from '@/fragments/name-input-fragment';
import DescriptionInputFragment from '@/fragments/description-input-fragment';

import image from '@/public/gobarber_image004.svg';

import translate from '@/shared/utils/translate';

type SigninBarberScreenType = NameInputPropsMappedType &
  DescriptionInputPropsMappedType &
  FormImagesInputProps &
  FormTwoRadioButtonProps &
  ButtonDisabledType &
  SubmitHandlerType &
  LocationPropsMappedType;

export default function SigninBarberScreen(props: SigninBarberScreenType) {
  return (
    <ContentTemplate
      position='left'
      src={image}
      alt={translate('Barber shop image')}
    >
      <Form.Root submitHandler={props.submitHandler}>
        <div
          data-filled={props.locationFilled}
          data-errored={props.locationErrored}
          className='data-[filled=true]:ring-button-hover data-[errored=true]:ring-red h-60 w-96 overflow-hidden rounded-t-2xl data-[errored]:ring-2 data-[filled=true]:ring-2'
          ref={props.locationRef}
        />

        <div className='group relative flex flex-col items-center pb-2'>
          <Icon
            errored={props.locationErrored}
            filled={props.locationFilled}
            icon={FiMapPin}
          />

          <input
            data-filled={props.locationFilled}
            data-errored={props.locationErrored}
            className='bg-input data-[errored=true]:ring-red data-[errored=true]:placeholder-red data-[filled=true]:placeholder-button-hover data-[filled=true]:ring-button-hover text-input-text placeholder:text-input-text h-14 w-96 rounded-b-2xl px-12 outline-hidden data-[errored]:ring-2 data-[filled=true]:ring-2 max-lg:w-80 max-sm:w-72 max-sm:px-10'
            placeholder='Selecione no mapa a sua barbearia'
            disabled
          />
        </div>

        <NameInputFragment
          icon='barber'
          placeholder={translate('Barber shop name')}
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

        <Button type='submit' isButtonDisabled={props.isButtonDisabled}>
          {translate('Register')}
        </Button>
      </Form.Root>

      <FooterPageLink type='back-to-logon' />
    </ContentTemplate>
  );
}
