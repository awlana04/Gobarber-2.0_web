import { FiMapPin } from 'react-icons/fi';

import DashboardTemplate from '../templates/dashboard-template';

import Icon from '@/atoms/icon';
import Button from '@/atoms/button';

import { Form } from '@/molecules/form';

import DescriptionInputFragment from '@/fragments/description-input-fragment';

import ButtonDisabledType from '@/presentation/types/button-disabled-type';
import { FormImagesInputProps } from '@/presentation/types/form-images-input-props-type';
import { HeaderPropsType } from '@/presentation/types/header-props-type';
import {
  NameInputPropsMappedType,
  DescriptionInputPropsMappedType,
  LocationPropsMappedType,
} from '@/presentation/types/input-props-mapped-types';
import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';
import { FormTwoRadioButtonProps } from '@/presentation/types/two-radio-buttons-props-type';
import { BarberDataType } from '@/infra/types/data-type';

import translate from '@/shared/utils/translate';

type UpdateBarberScreenPropsType = HeaderPropsType &
  NameInputPropsMappedType &
  DescriptionInputPropsMappedType &
  FormImagesInputProps &
  FormTwoRadioButtonProps &
  ButtonDisabledType &
  SubmitHandlerType &
  LocationPropsMappedType & {
    barber: BarberDataType;
  };

export default function UpdateBarberScreen(props: UpdateBarberScreenPropsType) {
  return (
    <DashboardTemplate headerType='profile' {...props}>
      <section className='mt-40 flex flex-row items-center justify-center pb-20'>
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
      </section>
    </DashboardTemplate>
  );
}
