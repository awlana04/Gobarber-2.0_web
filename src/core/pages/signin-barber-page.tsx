import {
  NameInputRefAndValueType,
  DescriptionInputRefAndValueType,
} from '@/core/types/values-and-refs-input-type';
import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';

import { LocationPropsMappedType } from '@/presentation/types/input-props-mapped-types';

import useHandleFilledHook from '@/hooks/use-handle-filled-hook';
import { useHandleErroredContext } from '@/contexts/use-handle-errored-context';

import SigninBarberScreen from '@/presentation/screens/signin-barber-screen';

type SigninBarberPagePropsType = NameInputRefAndValueType &
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
  };

export default function SigninBarberPage(props: SigninBarberPagePropsType) {
  const { fieldFilled, handleFieldFilled } = useHandleFilledHook();

  const { fieldErrored } = useHandleErroredContext();

  return (
    <SigninBarberScreen
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
