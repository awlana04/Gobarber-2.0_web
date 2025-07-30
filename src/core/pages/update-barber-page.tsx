import {
  NameInputRefAndValueType,
  DescriptionInputRefAndValueType,
} from '../types/values-and-refs-input-type';
import { HeaderPropsType } from '@/presentation/types/header-props-type';
import { BarberDataType } from '@/infra/types/data-type';
import { LocationPropsMappedType } from '@/presentation/types/input-props-mapped-types';
import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';

import useHandleFilledHook from '@/hooks/use-handle-filled-hook';

import { useHandleErroredContext } from '@/contexts/use-handle-errored-context';

import UpdateBarberScreen from '@/presentation/screens/update-barber-screen';

type UpdateBarberPagePropsType = HeaderPropsType &
  NameInputRefAndValueType &
  DescriptionInputRefAndValueType &
  LocationPropsMappedType &
  SubmitHandlerType & {
    isOpenAtNight: boolean;
    setIsOpenAtNight(state: boolean): void;
    isOpenOnWeekends: boolean;
    setIsOpenOnWeekends(state: boolean): void;
    file: File[];
    setFile(state: File[]): void;
    fileUrl: string[];
    setFileUrl(state: string[]): void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  } & {
    barber: BarberDataType;
  };

export default function UpdateBarberPage(props: UpdateBarberPagePropsType) {
  const { fieldFilled, handleFieldFilled } = useHandleFilledHook();

  const { fieldErrored } = useHandleErroredContext();

  return (
    <UpdateBarberScreen
      nameErrored={
        fieldErrored !== undefined &&
        !!fieldErrored.find((name) => name === 'name')
      }
      nameFilled={!!fieldFilled.find((name) => name === 'name')}
      handleNameFilled={handleFieldFilled}
      descriptionErrored={
        fieldErrored !== undefined &&
        !!fieldErrored.find((description) => description === 'description')
      }
      descriptionFilled={
        !!fieldFilled.find((description) => description === 'description')
      }
      handleDescriptionFilled={handleFieldFilled}
      isButtonDisabled={
        !!(fieldFilled.length !== 2 && fieldErrored !== undefined)
      }
      {...props}
    />
  );
}
