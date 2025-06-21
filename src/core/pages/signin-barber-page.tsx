import {
  NameInputRefAndValueType,
  DescriptionInputRefAndValueType,
  LocationInputRefAndValueType,
} from '@/core/types/values-and-refs-input-type';
import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';

import useHandleFilledHook from '@/hooks/use-handle-filled-hook';
import { useHandleErroredContext } from '@/contexts/use-handle-errored-context';

import SigninBarberScreen from '@/presentation/screens/signin-barber-screen';

type SigninBarberPagePropsType = NameInputRefAndValueType &
  DescriptionInputRefAndValueType &
  // LocationInputRefAndValueType &
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
      nameRef={props.nameRef}
      nameValue={props.nameValue}
      nameErrored={
        fieldErrored !== undefined &&
        !!fieldErrored.find((name) => name === 'name')
      }
      nameFilled={!!fieldFilled.find((name) => name === 'name')}
      handleNameFilled={handleFieldFilled}
      descriptionRef={props.descriptionRef}
      descriptionValue={props.descriptionValue}
      descriptionErrored={
        fieldErrored !== undefined &&
        !!fieldErrored.find((description) => description === 'description')
      }
      descriptionFilled={
        !!fieldFilled.find((description) => description === 'description')
      }
      handleDescriptionFilled={handleFieldFilled}
      // locationRef={props.locationRef}
      // locationValue={props.locationValue}
      // locationErrored={
      //   fieldErrored !== undefined &&
      //   !!fieldErrored.find((location) => location === 'location')
      // }
      // locationFilled={!!fieldFilled.find((location) => location === 'location')}
      // handleLocationFilled={handleFieldFilled}
      file={props.file}
      fileUrl={props.fileUrl}
      setFile={props.setFile}
      setFileUrl={props.setFileUrl}
      handleChange={props.handleChange}
      isOpenAtNight={props.isOpenAtNight}
      setIsOpenAtNight={props.setIsOpenAtNight}
      isOpenOnWeekends={props.isOpenOnWeekends}
      setIsOpenOnWeekends={props.setIsOpenOnWeekends}
      submitHandler={props.submitHandler}
      isButtonDisabled={
        !!(fieldFilled.length !== 3 && fieldErrored !== undefined)
      }
    />
  );
}
