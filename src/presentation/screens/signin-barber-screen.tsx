import ContentTemplate from '@/templates/content-template';

import BackToLogon from '@/atoms/back-to-logon';
import Button from '@/atoms/button';

import { Form } from '@/molecules/form';

import NameInputFragment from '@/fragments/name-input-fragment';
import LocationInputFragment from '@/fragments/location-input-fragment';
import DescriptionInputFragment from '@/fragments/description-input-fragment';

import { NameInputPropsType } from '@/presentation/types/name-input-props-type';
import { DescriptionInputPropsType } from '@/presentation/types/description-input-props-type';
import { LocationInputPropsType } from '@/presentation/types/location-input-props-type';
import { FormImagesInputProps } from '@/presentation/types/form-images-input-props-type';
import { FormTwoRadioButtonProps } from '@/presentation/types/two-radio-buttons-props-type';
import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';
import ButtonDisabledType from '@/presentation/types/button-disabled-type';

import image from '@/public/gobarber_image004.svg';

import translate from '@/shared/utils/translate';

type SigninBarberScreenType = NameInputPropsType &
  DescriptionInputPropsType &
  LocationInputPropsType &
  FormImagesInputProps &
  FormTwoRadioButtonProps &
  ButtonDisabledType &
  SubmitHandlerType;

export default function SigninBarberScreen(props: SigninBarberScreenType) {
  return (
    <ContentTemplate
      position='left'
      src={image}
      alt={translate('Barber shop image')}
    >
      <Form.Root submitHandler={props.submitHandler}>
        <LocationInputFragment
          locationRef={props.locationRef}
          locationValue={props.locationValue}
          locationErrored={props.locationErrored}
          locationFilled={props.locationFilled}
          handleLocationFilled={props.handleLocationFilled}
        />

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

      <BackToLogon />
    </ContentTemplate>
  );
}
